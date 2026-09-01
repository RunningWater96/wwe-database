/**
 * check-unmatched.js
 *
 * Finds rival and tag-team partner names (from individual wrestlers only)
 * that don't match any wrestler name or alternate name in the database.
 *
 * Usage:  node scripts/check-unmatched.js
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Read & parse data files ─────────────────────────────────────────────────

function readFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath), 'utf-8');
}

/**
 * Evaluate a JS data file by stripping the export and wrapping in a Function.
 */
function parseDataFile(relPath, varName) {
  let src = readFile(relPath);

  // Strip ES module export lines
  src = src.replace(/export\s+default\s+\w+\s*;?\s*$/m, '');
  src = src.replace(/^export\s+default\s+/m, `const ${varName} = `);

  // Strip any remaining export statements
  src = src.replace(/^export\s+/gm, '');

  // Return the variable
  src += `\nreturn ${varName};`;

  try {
    return new Function(src)();
  } catch (e) {
    console.error(`Failed to parse ${relPath}:`, e.message);
    process.exit(1);
  }
}

const WRESTLERS = parseDataFile('../src/data/wrestlers.js', 'WRESTLERS');
const RELATIONSHIPS = parseDataFile('../src/data/relationships.js', 'RELATIONSHIPS');
const EXTRA = parseDataFile('../src/data/extra.js', 'EXTRA');

// ── Classification (mirrors wrestlerHelpers.js) ─────────────────────────────

const GROUP_NAMES_RE =
  /^(Men on a Mission|The Highlanders|La Resistance|The Basham Brothers|Hit Row|The Bushwhackers|The Rockers|Demolition|Legion of Doom|The Hart Foundation|The Headbangers|The Godwinns|The Headshrinkers|Natural Disasters|The Smoking Gunns|The Body Donnas|The New Blackjacks|Too Much|The Mean Street Posse|Right to Censor|3-Minute Warning|The Gymini|Deuce and Domino|Cryme Tyme|The Colons|The Usos|The Authors of Pain|Heavy Machinery|The Viking Raiders|The Hurt Business|Retribution|Alpha Academy|Los Lotharios|Maximum Male Models|Pretty Deadly|The Creed Brothers|Legado del Fantasma|Gallus|Chase University|The Family|Judgment Day|Imperium|Spirit Squad|Too Cool|Los Guerreros|World's Greatest Tag Team|Kai En Tai|The Mexicools|The Heart Throbs|Grizzled Young Veterans|London and Kendrick|The Quebecers|Money Inc\.|La Résistance|The Bar|RKBro|Rated-RKO|Undisputed Era|New Day|D-Generation X|DX|nWo|The Shield|Evolution|The Corporation|The Ministry|The Brood|Nation of Domination|Damage CTRL|The Bloodline|The New Nexus|The Nexus|The Corre|Sanity|War Games|The Steiner Brothers)$/i;

function classifyEntry(w) {
  const rl = w.realName.toLowerCase();

  if (rl.startsWith('already covered') || rl === 'various' || rl.startsWith('various '))
    return 'duplicate';

  const commaCount = (w.realName.match(/,/g) || []).length;
  if (commaCount >= 2) return 'faction';
  if (commaCount >= 1 && rl.includes(' & ')) return 'faction';
  if (rl.includes('& others') || rl.includes('& more')) return 'faction';

  if (w.name.includes(' & ') || w.realName.includes(' & ')) return 'tagTeam';
  if (GROUP_NAMES_RE.test(w.name)) return 'tagTeam';
  if (/\(.*,.*,/.test(w.name)) return 'faction';

  return 'individual';
}

// ── Build lookup sets ───────────────────────────────────────────────────────

// 1) All wrestler names (primary name field)
const allNames = new Set();
for (const w of WRESTLERS) {
  allNames.add(w.name);
}

// 2) All alternateNames from relationships
const allAltNames = new Set();
for (const [, rel] of Object.entries(RELATIONSHIPS)) {
  if (rel.alternateNames) {
    for (const alt of rel.alternateNames) {
      allAltNames.add(alt);
    }
  }
}

// 3) Combined set
const combined = new Set([...allNames, ...allAltNames]);

// ── Build ID → wrestler lookup ──────────────────────────────────────────────

const byId = {};
for (const w of WRESTLERS) {
  byId[w.id] = w;
}

// ── Check individual wrestlers only ─────────────────────────────────────────

const unmatchedRivals = [];
const unmatchedPartners = [];

for (const w of WRESTLERS) {
  if (classifyEntry(w) !== 'individual') continue;

  // Check rivals from relationships.js
  const rel = RELATIONSHIPS[w.id];
  if (rel && rel.rivals) {
    for (const rival of rel.rivals) {
      if (!combined.has(rival)) {
        unmatchedRivals.push({ wrestler: w.name, id: w.id, rival });
      }
    }
  }

  // Check tag team partners from extra.js
  const ext = EXTRA[w.id];
  if (ext && ext.tagTeams) {
    for (const team of ext.tagTeams) {
      if (team.partners) {
        for (const partner of team.partners) {
          if (!combined.has(partner)) {
            unmatchedPartners.push({
              wrestler: w.name,
              id: w.id,
              partner,
              team: team.name,
            });
          }
        }
      }
    }
  }
}

// ── Output ──────────────────────────────────────────────────────────────────

console.log('STILL UNMATCHED RIVALS (from individual wrestlers only):');
if (unmatchedRivals.length === 0) {
  console.log('  (none)');
} else {
  for (const r of unmatchedRivals) {
    console.log(`  ${r.wrestler} (ID ${r.id}) \u2192 rival "${r.rival}"`);
  }
}

console.log('');
console.log('STILL UNMATCHED PARTNERS (from individual wrestlers only):');
if (unmatchedPartners.length === 0) {
  console.log('  (none)');
} else {
  for (const p of unmatchedPartners) {
    console.log(`  ${p.wrestler} (ID ${p.id}) \u2192 partner "${p.partner}" in team "${p.team}"`);
  }
}

console.log('');
console.log(
  `Total: ${unmatchedRivals.length} unmatched rivals, ${unmatchedPartners.length} unmatched partners`
);
