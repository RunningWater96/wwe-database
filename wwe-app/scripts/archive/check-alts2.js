import R from '../src/data/relationships.js';

// Check which alternateNames the final-name-fixes script added
const ids = [31, 32, 33, 34, 36, 37, 39, 45, 58, 63, 64, 66, 67, 72, 73, 74, 75, 93, 100, 101, 103, 129, 135, 145, 149, 156, 157, 189, 210, 213, 219, 222, 245, 248, 257, 272, 279, 301, 360, 527, 549, 583, 622, 675, 759, 781, 837, 890, 916, 925, 1009, 1035, 1053, 1057, 1059, 1092, 1141, 1201, 1219, 1297, 1322, 1414, 1485, 1496, 1509, 1534];

const expectedAlts = {
  37: 'The Hardy Boyz',
  45: 'The Hart Foundation',
  32: 'Nation of Domination',
  34: 'D-Generation X',
  257: 'Undisputed Era',
  135: 'Damage CTRL',
  93: 'The Shield',
  63: 'The Corporation',
  129: 'The Bloodline',
  210: 'The Bella Twins',
  33: 'Ministry of Darkness',
  31: 'Evolution',
  36: 'Four Horsemen',
  101: 'Wyatt Family',
  58: 'New Age Outlaws',
  74: 'Brain Busters',
  527: 'British Strong Style',
  1219: 'The Bodydonnas',
  301: 'Retribution',
  549: 'Legado del Fantasma',
  1201: 'The Oddities',
  72: 'Los Guerreros',
  100: '3MB',
  279: 'Diamond Mine',
  583: 'SAnitY',
  157: 'The FBI',
  245: 'The Kabuki Warriors',
  283: 'Hart Dynasty',
  222: 'Riott Squad',
  103: 'The O.C.',
  213: 'The League of Nations',
  189: 'The Un-Americans',
  64: 'nWo Wolfpac',
  1496: 'Dungeon of Doom',
  1057: 'The Powers of Pain',
  1509: 'The Gangstas',
  1009: 'The Dream Team',
  1534: 'Guerrero Family',
  1059: 'The Funk Brothers',
  1485: 'Armstrong family',
  219: 'The Hype Bros',
  248: 'bWo',
  1322: 'New Breed',
  156: 'Pretty Mean Sisters (PMS)',
  66: 'The Islanders',
  1053: 'Twin Towers',
  1092: 'The Fabulous Freebirds',
  925: 'Pure Fusion Collective',
  622: 'Maximum Male Models',
  1414: 'The Glamour Girls',
  75: 'The New Rockers',
  39: 'The Cabinet',
  73: 'The Dangerous Alliance (WCW)',
  69: 'The West Texas Rednecks (WCW stable)',
  1141: 'The Strongbows',
  837: 'Mr. Fuji & Mr. Saito',
  890: 'Los Boricuas',
  145: 'The Heenan Family',
};

for (const [id, expected] of Object.entries(expectedAlts)) {
  const rel = R[id];
  if (!rel) {
    console.log(`${id}: NO REL ENTRY (expected: ${expected})`);
    continue;
  }
  const alts = rel.alternateNames || [];
  const has = alts.some((a) => a === expected);
  if (has) {
    console.log(`${id}: OK has "${expected}"`);
  } else {
    console.log(`${id}: MISSING "${expected}" — has: ${JSON.stringify(alts)}`);
  }
}
