import R from '../src/data/relationships.js';

const checks = {
  257: 'Undisputed Era',
  890: 'Los Boricuas',
  1201: 'The Oddities',
  100: '3MB',
  279: 'Diamond Mine',
  583: 'SAnitY',
  527: 'British Strong Style',
  1534: 'Guerrero Family',
  1485: 'Armstrong family',
  313: 'Riott Squad',
  317: 'Pure Fusion Collective',
  1496: 'Dungeon of Doom',
  675: 'Michin',
  1298: 'bWo',
};
for (const [id, name] of Object.entries(checks)) {
  const rel = R[id];
  if (!rel) {
    console.log(id + ': NO ENTRY');
    continue;
  }
  const alts = rel.alternateNames || [];
  const has = alts.some((a) => a.toLowerCase() === name.toLowerCase());
  console.log(id + ': ' + (has ? 'HAS' : 'MISSING') + ' "' + name + '" alts=' + JSON.stringify(alts));
}
