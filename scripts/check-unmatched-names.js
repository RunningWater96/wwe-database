/**
 * Check which rival and tag team partner names in relationships.js and extra.js
 * don't match any wrestler in the database (after parenthetical stripping).
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcData = join(__dirname, '..', 'wwe-app', 'src', 'data');

// We need to import the data. Use dynamic import since they're ES modules.
const WRESTLERS = (await import('file:///' + join(srcData, 'wrestlers.js').replace(/\\/g, '/'))).default;
const RELATIONSHIPS = (await import('file:///' + join(srcData, 'relationships.js').replace(/\\/g, '/'))).default;
const EXTRA = (await import('file:///' + join(srcData, 'extra.js').replace(/\\/g, '/'))).default;

// Build lookup: classify each wrestler
function classifyEntry(w) {
  if (w.realName && w.realName.startsWith('Already covered')) return 'duplicate';
  const name = w.name || '';
  const realName = w.realName || '';
  // Tag team / faction detection (simplified)
  const hasAmpersand = name.includes(' & ') || realName.includes(' & ');
  const hasMultipleCommas = (realName.match(/,/g) || []).length >= 2;
  const hasCommaAnd = /,\s*.*&/.test(realName);
  const hasOthers = /& (others|more)/i.test(realName);
  if (hasMultipleCommas || hasCommaAnd || hasOthers) return 'faction';
  if (hasAmpersand) return 'tagTeam';
  return 'individual';
}

// Get all individual wrestlers
const individuals = WRESTLERS.filter(w => classifyEntry(w) === 'individual');
const individualIds = new Set(individuals.map(w => w.id));

// Build the name lookup: name + all alternateNames
const allNames = new Set();
const nameToWrestler = {};

for (const w of individuals) {
  allNames.add(w.name);
  nameToWrestler[w.name] = w.name;
}

// Add alternateNames from relationships
for (const [idStr, rel] of Object.entries(RELATIONSHIPS)) {
  const id = parseInt(idStr);
  const wrestler = individuals.find(w => w.id === id);
  if (!wrestler) continue;
  if (rel.alternateNames) {
    for (const alt of rel.alternateNames) {
      allNames.add(alt);
      nameToWrestler[alt] = wrestler.name;
    }
  }
}

// The matching function (mirrors the quiz logic)
function findWrestlerByName(name) {
  const clean = name.replace(/\s*\([^)]*\)\s*$/, '').trim();
  // Check exact name
  if (allNames.has(name)) return nameToWrestler[name] || name;
  // Check cleaned name
  if (allNames.has(clean)) return nameToWrestler[clean] || clean;
  return null;
}

// Collect unmatched rivals
const unmatchedRivals = [];
for (const [idStr, rel] of Object.entries(RELATIONSHIPS)) {
  const id = parseInt(idStr);
  const wrestler = individuals.find(w => w.id === id);
  if (!wrestler) continue; // skip non-individual entries

  if (rel.rivals) {
    for (const rival of rel.rivals) {
      const match = findWrestlerByName(rival);
      if (!match) {
        unmatchedRivals.push({ wrestler: wrestler.name, unmatchedName: rival });
      }
    }
  }
}

// Collect unmatched partners
const unmatchedPartners = [];
for (const [idStr, extra] of Object.entries(EXTRA)) {
  const id = parseInt(idStr);
  const wrestler = individuals.find(w => w.id === id);
  if (!wrestler) continue; // skip non-individual entries

  if (extra.tagTeams) {
    for (const team of extra.tagTeams) {
      if (team.partners) {
        for (const partner of team.partners) {
          const match = findWrestlerByName(partner);
          if (!match) {
            unmatchedPartners.push({ wrestler: wrestler.name, unmatchedName: partner, team: team.name });
          }
        }
      }
    }
  }
}

// Filter out generic/non-wrestler text
const genericNames = new Set([
  'Various', 'various', 'others', 'Others', 'Multiple', 'multiple',
  'N/A', 'n/a', 'None', 'none', 'TBD', 'Unknown'
]);

const filteredRivals = unmatchedRivals.filter(r => !genericNames.has(r.unmatchedName));
const filteredPartners = unmatchedPartners.filter(p => !genericNames.has(p.unmatchedName));

// Sort and print
console.log('=== UNMATCHED RIVAL NAMES ===');
console.log('(Names in relationships.js rivals[] that don\'t match any wrestler)\n');

// Group by unmatched name for deduplication visibility
const rivalsByName = {};
for (const r of filteredRivals) {
  if (!rivalsByName[r.unmatchedName]) rivalsByName[r.unmatchedName] = [];
  rivalsByName[r.unmatchedName].push(r.wrestler);
}

const sortedRivalNames = Object.keys(rivalsByName).sort();
for (const name of sortedRivalNames) {
  const clean = name.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const suffix = clean !== name ? ` → stripped to "${clean}"` : '';
  console.log(`  "${name}"${suffix}`);
  console.log(`    Referenced by: ${rivalsByName[name].join(', ')}`);
}
console.log(`\nTotal unique unmatched rival names: ${sortedRivalNames.length}`);
console.log(`Total rival references: ${filteredRivals.length}`);

console.log('\n=== UNMATCHED PARTNER NAMES ===');
console.log('(Names in extra.js tagTeams[].partners[] that don\'t match any wrestler)\n');

const partnersByName = {};
for (const p of filteredPartners) {
  if (!partnersByName[p.unmatchedName]) partnersByName[p.unmatchedName] = [];
  partnersByName[p.unmatchedName].push(`${p.wrestler} (in "${p.team}")`);
}

const sortedPartnerNames = Object.keys(partnersByName).sort();
for (const name of sortedPartnerNames) {
  const clean = name.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const suffix = clean !== name ? ` → stripped to "${clean}"` : '';
  console.log(`  "${name}"${suffix}`);
  console.log(`    Referenced by: ${partnersByName[name].join(', ')}`);
}
console.log(`\nTotal unique unmatched partner names: ${sortedPartnerNames.length}`);
console.log(`Total partner references: ${filteredPartners.length}`);

console.log(`\n=== GRAND TOTAL ===`);
const allUnmatched = new Set([...sortedRivalNames, ...sortedPartnerNames]);
console.log(`Unique unmatched names (across both): ${allUnmatched.size}`);
console.log(`Total references: ${filteredRivals.length + filteredPartners.length}`);
