/**
 * Reports wrestlers missing bio, personal, or relationship data.
 * Bio & personal are individual-only; relationships apply to all entries.
 * Usage: node scripts/find-content-gaps.js
 */
import WRESTLERS from '../wwe-app/src/data/wrestlers.js';
import BIO from '../wwe-app/src/data/bio.js';
import PERSONAL from '../wwe-app/src/data/personal.js';
import RELATIONSHIPS from '../wwe-app/src/data/relationships.js';
import { classifyEntry } from '../wwe-app/src/utils/wrestlerHelpers.js';

const missing = { bio: [], personal: [], relationships: [], teamRelationships: [] };

for (const w of WRESTLERS) {
  const type = classifyEntry(w);
  if (type === 'duplicate') continue;
  const isTeam = type === 'tagTeam' || type === 'faction';
  // Bio & personal only apply to individuals
  if (!isTeam && !BIO[w.id]) missing.bio.push(w);
  if (!isTeam && !PERSONAL[w.id]) missing.personal.push(w);
  // Relationships apply to all
  if (!RELATIONSHIPS[w.id]) {
    if (isTeam) missing.teamRelationships.push(w);
    else missing.relationships.push(w);
  }
}

for (const [label, list] of Object.entries(missing)) {
  if (list.length === 0) continue;
  console.log(`\nMissing ${label}: ${list.length} entries`);
  for (const w of list) {
    console.log(`  - ID ${w.id}: ${w.name}`);
  }
}

console.log('\n--- Summary ---');
console.log(`Individual bio:           ${missing.bio.length} missing`);
console.log(`Individual personal:      ${missing.personal.length} missing`);
console.log(`Individual relationships: ${missing.relationships.length} missing`);
console.log(`Team/faction relationships: ${missing.teamRelationships.length} missing`);
