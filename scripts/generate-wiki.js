#!/usr/bin/env node

/**
 * WWE Encyclopedia Content Generator
 *
 * Generates wiki-style narrative content for each wrestler using the Claude API.
 * Reads existing structured data as seed context, generates 5 narrative sections:
 * overview, earlyLife, career, inRingStyle, legacy
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-wiki.js [--batch=10] [--start=0] [--dry-run]
 *
 * Options:
 *   --batch=N    Process N wrestlers per batch (default: 5)
 *   --start=N    Start from wrestler index N (default: 0)
 *   --dry-run    Print prompts without calling API
 *   --only=ID    Generate for a single wrestler by ID
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Config ──────────────────────────────────────────────────────────────────

const WIKI_FILE = join(__dirname, '..', 'wwe-app', 'src', 'data', 'wiki.js');
const BATCH_SIZE = getArg('batch', 5);
const START_INDEX = getArg('start', 0);
const DRY_RUN = process.argv.includes('--dry-run');
const ONLY_ID = getArg('only', null);
const BATCH_DELAY_MS = 2000;

// ─── Load existing data ──────────────────────────────────────────────────────

// We dynamically import the ESM data modules (using file:// URLs for Windows compatibility)
const dataDir = join(__dirname, '..', 'wwe-app', 'src', 'data');
const toURL = (file) => pathToFileURL(join(dataDir, file)).href;

const { default: WRESTLERS } = await import(toURL('wrestlers.js'));
const { default: EXTRA } = await import(toURL('extra.js'));
const { default: RELATIONSHIPS } = await import(toURL('relationships.js'));
const { default: WRESTLER_BIO } = await import(toURL('bio.js'));
const { default: PERSONAL } = await import(toURL('personal.js'));
const { ERAS } = await import(toURL('eras.js'));

// Filter out tag teams
function isTagTeam(w) {
  const name = w.name || '';
  return (
    /\b(and|&)\b/i.test(name) ||
    /^The\s.+(s|z|Boys|Club|Squad|Team|Army|Gang|Corp|Express|Foundation|Demolition|Powers|Warriors|Machines|Bees|Rockers|Headshrinkers|Godwinns|Outlaws|Acolytes|Dudleyz?|Hardyz?|Bashams)\b/i.test(
      name,
    ) ||
    name.includes('/') ||
    /^(D-?Generation X|nWo|Nation of Domination|Right to Censor|Spirit Squad|Nexus|Shield|New Day|Bloodline|Hurt Business|Judgment Day)$/i.test(
      name,
    )
  );
}

const wrestlers = WRESTLERS.filter((w) => !isTagTeam(w));

console.log(`Loaded ${wrestlers.length} individual wrestlers`);

// ─── Load existing wiki content ──────────────────────────────────────────────

let existingWiki = {};

if (existsSync(WIKI_FILE)) {
  try {
    const { default: wiki } = await import(pathToFileURL(WIKI_FILE).href);
    existingWiki = wiki || {};
    const count = Object.keys(existingWiki).length;
    console.log(`Found ${count} existing wiki entries`);
  } catch {
    console.log('Could not load existing wiki.js, starting fresh');
  }
}

// ─── Init API client ─────────────────────────────────────────────────────────

if (!process.env.ANTHROPIC_API_KEY && !DRY_RUN) {
  console.error('Error: ANTHROPIC_API_KEY environment variable is required');
  console.error('Usage: ANTHROPIC_API_KEY=sk-... node scripts/generate-wiki.js');
  process.exit(1);
}

const client = DRY_RUN ? null : new Anthropic();

// ─── Build prompt for a wrestler ─────────────────────────────────────────────

function buildPrompt(w) {
  const bio = WRESTLER_BIO[w.id];
  const personal = PERSONAL[w.id];
  const extra = EXTRA[w.id];
  const rels = RELATIONSHIPS[w.id];

  const sections = [];

  sections.push(`Ring Name: ${w.name}`);
  if (w.realName && w.realName !== w.name) sections.push(`Real Name: ${w.realName}`);
  if (rels?.alternateNames?.length) sections.push(`Also Known As: ${rels.alternateNames.join(', ')}`);
  if (bio?.hometown) sections.push(`Hometown: ${bio.hometown}`);
  if (bio?.birthday) sections.push(`Born: ${bio.birthday}`);
  if (bio?.height) sections.push(`Height: ${bio.height}`);
  if (bio?.weight) sections.push(`Weight: ${bio.weight}`);

  if (w.eras?.length) {
    const eraLines = w.eras
      .filter((e) => e.era !== 'all' && e.character)
      .map((e) => {
        const eraInfo = ERAS.find((era) => era.id === e.era);
        const eraLabel = eraInfo ? `${eraInfo.label} (${eraInfo.subtitle || ''})` : e.era;
        return `  - ${eraLabel}: "${e.character}" — ${e.persona || 'No description'}`;
      });
    if (eraLines.length) sections.push(`\nCareer Eras:\n${eraLines.join('\n')}`);
  }

  if (w.championships?.length) {
    const titles = w.championships
      .filter((c) => c.title && !c.title.startsWith('See entry'))
      .map((c) => `  - ${c.title} (${c.reigns ? c.reigns.length : c.count}x)${c.notable ? ` — ${c.notable}` : ''}`);
    if (titles.length) sections.push(`\nChampionships (${w.totalTitleReigns || 0} total reigns):\n${titles.join('\n')}`);
  }

  if (w.hallOfFame) sections.push(`Hall of Fame: Inducted ${w.hallOfFame}`);

  if (extra?.tagTeams?.length) {
    const teams = extra.tagTeams.map((t) => `  - ${t.name} (with ${(t.partners || []).join(', ')})${t.notes ? ` — ${t.notes}` : ''}`);
    sections.push(`\nTag Teams:\n${teams.join('\n')}`);
  }

  if (extra?.factions?.length) {
    const factions = extra.factions.map((f) => `  - ${f.name}${f.notes ? ` — ${f.notes}` : ''}`);
    sections.push(`\nFactions:\n${factions.join('\n')}`);
  }

  if (rels?.allies?.length) sections.push(`\nAllies: ${rels.allies.join(', ')}`);
  if (rels?.rivals?.length) sections.push(`\nRivals: ${rels.rivals.join(', ')}`);

  if (extra?.injuries?.length) {
    const inj = extra.injuries.map((i) => `  - ${i.year}: ${i.injury} — ${i.cause}`);
    sections.push(`\nInjury History:\n${inj.join('\n')}`);
  }

  // Check for death entry
  const deathEntry = extra?.injuries?.find((i) =>
    /\bDied\b|^Death|^Passed away|^Fatal|murder-suicide/i.test(i.injury),
  );
  if (deathEntry) sections.push(`\nDeceased: ${deathEntry.year} — ${deathEntry.cause}`);

  if (personal?.spouses?.length) {
    const sp = personal.spouses.map((s) => `  - ${s.name} (${s.years || 'dates unknown'})${s.notes ? ` — ${s.notes}` : ''}`);
    sections.push(`\nSpouses:\n${sp.join('\n')}`);
  }

  if (personal?.children?.length) {
    const ch = personal.children.map((c) => `  - ${c.name}${c.born ? ` (b. ${c.born})` : ''}${c.notes ? ` — ${c.notes}` : ''}`);
    sections.push(`\nChildren:\n${ch.join('\n')}`);
  }

  if (personal?.legalIssues?.length) {
    const legal = personal.legalIssues.map((l) => `  - ${l.year}: ${l.incident} — ${l.details}`);
    sections.push(`\nLegal Issues:\n${legal.join('\n')}`);
  }

  if (personal?.facts?.length) sections.push(`\nFacts: ${personal.facts.join('; ')}`);

  const dataBlock = sections.join('\n');

  return `You are writing encyclopedia entries for a WWE/professional wrestling database application. Given the following factual data about ${w.name}, write 5 sections in an encyclopedic, neutral tone similar to Wikipedia. Use the provided data as your factual foundation and supplement with your general knowledge of professional wrestling history.

IMPORTANT RULES:
- Write factual, accurate content. Do not fabricate specific dates, match results, or events you aren't confident about.
- If limited information is available, write shorter sections rather than inventing details. A concise, accurate entry is better than a long, speculative one.
- Use past tense for historical events. Use present tense for living wrestlers' current status.
- Do not use markdown formatting — just plain text with paragraph breaks (double newlines between paragraphs).

WRESTLER DATA:
${dataBlock}

Write these 5 sections and return them as a JSON object with these exact keys:

1. "overview" — A 2-3 sentence summary of who this person is and their significance in professional wrestling. This should read like the opening paragraph of a Wikipedia article.

2. "earlyLife" — 1-2 paragraphs about their life before professional wrestling: real name, birthplace, family background, education, athletic background, and how they got into wrestling. If limited info is available, keep it brief.

3. "career" — 2-4 paragraphs covering their professional wrestling career chronologically. Hit the major highlights: debut, key character changes, biggest feuds, championship wins, promotion changes, and career milestones.

4. "inRingStyle" — 1-2 paragraphs about their wrestling style, signature moves, finishing moves, and in-ring psychology. Describe what made them unique or effective as a performer.

5. "legacy" — 1-2 paragraphs about their lasting impact on professional wrestling, cultural significance, Hall of Fame status if applicable, influence on other wrestlers, and how they are remembered.

Return ONLY a valid JSON object with these 5 string keys. No markdown code fences, no extra text.`;
}

// ─── Generate for one wrestler ───────────────────────────────────────────────

async function generateForWrestler(w) {
  const prompt = buildPrompt(w);

  if (DRY_RUN) {
    console.log(`\n--- DRY RUN: ${w.name} (ID ${w.id}) ---`);
    console.log(`Prompt length: ${prompt.length} chars`);
    return null;
  }

  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0]?.text || '';

  try {
    // Try to parse the JSON response, handling potential markdown fences
    const cleaned = text.replace(/^```json?\s*/i, '').replace(/\s*```$/i, '').trim();
    const parsed = JSON.parse(cleaned);

    // Validate expected keys
    const keys = ['overview', 'earlyLife', 'career', 'inRingStyle', 'legacy'];
    const result = {};
    for (const key of keys) {
      if (parsed[key] && typeof parsed[key] === 'string' && parsed[key].trim()) {
        result[key] = parsed[key].trim();
      }
    }

    if (Object.keys(result).length === 0) {
      console.warn(`  Warning: No valid sections parsed for ${w.name}`);
      return null;
    }

    return result;
  } catch (err) {
    console.error(`  Error parsing response for ${w.name}: ${err.message}`);
    console.error(`  Raw response: ${text.substring(0, 200)}...`);
    return null;
  }
}

// ─── Save wiki content ───────────────────────────────────────────────────────

function saveWiki(data) {
  const entries = Object.entries(data)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([id, content]) => {
      const fields = Object.entries(content)
        .map(([key, val]) => {
          // Escape backticks and ${} in template literals
          const escaped = val.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
          return `    ${key}: \`${escaped}\``;
        })
        .join(',\n');
      return `  ${id}: {\n${fields},\n  }`;
    })
    .join(',\n\n');

  const output = `const WIKI_CONTENT = {\n${entries},\n};\n\nexport default WIKI_CONTENT;\n`;
  writeFileSync(WIKI_FILE, output, 'utf-8');
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  let toProcess;

  if (ONLY_ID !== null) {
    const w = wrestlers.find((w) => w.id === Number(ONLY_ID));
    if (!w) {
      console.error(`Wrestler with ID ${ONLY_ID} not found`);
      process.exit(1);
    }
    toProcess = [w];
  } else {
    // Filter out wrestlers that already have content
    toProcess = wrestlers.filter((w) => !existingWiki[w.id]);
    toProcess = toProcess.slice(START_INDEX);
  }

  console.log(`\nWrestlers to process: ${toProcess.length}`);
  if (DRY_RUN) console.log('(DRY RUN — no API calls will be made)\n');

  const wiki = { ...existingWiki };
  let processed = 0;
  let errors = 0;

  for (let i = 0; i < toProcess.length; i += BATCH_SIZE) {
    const batch = toProcess.slice(i, i + BATCH_SIZE);
    console.log(`\nBatch ${Math.floor(i / BATCH_SIZE) + 1}: Processing ${batch.map((w) => w.name).join(', ')}`);

    const results = await Promise.all(
      batch.map(async (w) => {
        try {
          console.log(`  Generating: ${w.name} (ID ${w.id})...`);
          const result = await generateForWrestler(w);
          if (result) {
            console.log(`  Done: ${w.name} (${Object.keys(result).length} sections)`);
          }
          return { id: w.id, result };
        } catch (err) {
          console.error(`  FAILED: ${w.name} — ${err.message}`);
          errors++;
          return { id: w.id, result: null };
        }
      }),
    );

    // Merge results
    for (const { id, result } of results) {
      if (result) {
        wiki[id] = result;
        processed++;
      }
    }

    // Save incrementally after each batch
    if (!DRY_RUN && processed > 0) {
      saveWiki(wiki);
      console.log(`  Saved (${Object.keys(wiki).length} total entries)`);
    }

    // Rate limit delay between batches
    if (i + BATCH_SIZE < toProcess.length && !DRY_RUN) {
      console.log(`  Waiting ${BATCH_DELAY_MS / 1000}s before next batch...`);
      await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
    }
  }

  console.log(`\nComplete! Processed: ${processed}, Errors: ${errors}, Total entries: ${Object.keys(wiki).length}`);
}

// ─── CLI helpers ─────────────────────────────────────────────────────────────

function getArg(name, defaultVal) {
  const arg = process.argv.find((a) => a.startsWith(`--${name}=`));
  if (!arg) return defaultVal;
  const val = arg.split('=')[1];
  return defaultVal === null ? val : Number(val);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
