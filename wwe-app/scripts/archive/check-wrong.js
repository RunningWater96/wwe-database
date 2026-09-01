import R from '../src/data/relationships.js';
import W from '../src/data/wrestlers.js';

// These are IDs that the buggy script may have wrongly added faction names to.
// The check: if a faction name appears in the alternateNames of a wrestler it doesn't belong to.
const wrongPairs = [
  [31, 'Evolution', 'Triple H'], // 31 is NOT Triple H
  [36, 'Four Horsemen', 'Ric Flair'],
  [101, 'Wyatt Family', 'Bray Wyatt'],
  [103, "The O.C.", 'AJ Styles'],
  [156, 'Pretty Mean Sisters', 'Terri Runnels'],
  [189, 'The Un-Americans', 'Lance Storm'],
  [210, 'The Bella Twins', 'Nikki Bella'],
  [213, 'The League of Nations', 'Wade Barrett'],
  [245, 'The Kabuki Warriors', 'Asuka'],
  [283, 'Hart Dynasty', 'Tyson Kidd'],
  [301, 'Retribution', 'Ali'],
];

for (const [wrongId, factionName, correctWrestler] of wrongPairs) {
  const wrongW = W.find((x) => x.id === wrongId);
  const rel = R[wrongId];
  if (!rel) continue;
  const alts = rel.alternateNames || [];
  const hasFaction = alts.some((a) => a.includes(factionName));
  if (hasFaction) {
    console.log(
      `STILL WRONG: id=${wrongId} (${wrongW?.name}) has "${factionName}" — should be on ${correctWrestler}`,
    );
  }
}

// Check that the first buggy script's additions to id=31 were removed
// id=31 is NOT Triple H (Triple H is id=30)
const w31 = W.find((x) => x.id === 31);
const w30 = W.find((x) => x.id === 30);
console.log(`\nid=30: ${w30?.name}, alts: ${JSON.stringify(R[30]?.alternateNames)}`);
console.log(`id=31: ${w31?.name}, alts: ${JSON.stringify(R[31]?.alternateNames)}`);
