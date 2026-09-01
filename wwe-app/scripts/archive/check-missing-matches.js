import W from '../src/data/wrestlers.js';
import R from '../src/data/relationships.js';
import { classifyEntry } from '../src/utils/wrestlerHelpers.js';

const missing = [
  'The Hardy Boyz', 'The Hart Foundation', 'Nation of Domination', 'D-Generation X',
  'Undisputed Era', 'Damage CTRL', 'The Road Warriors', 'The APA', 'The Shield',
  'London & Kendrick', 'British Strong Style', 'The Corporation', 'The Authority',
  'Chavo Guerrero', 'The Bloodline', 'The Bodydonnas', 'Enzo & Cass', 'The Von Erichs',
  'Retribution', 'Legado del Fantasma', 'The Bella Twins', 'Los Boricuas', 'The Oddities',
  'Ministry of Darkness', 'Evolution', 'Los Guerreros', '3MB', 'New Age Outlaws',
  'Diamond Mine', 'Brain Busters', 'Wyatt Family', 'Judgment Day', 'Four Horsemen',
  'The FBI', 'The Singh Brothers', 'The Brawling Brutes', 'SAnitY', 'Schism',
  'Oscar', 'Hurricane & Rosey', 'Afa', 'The Midnight Express', 'The Powers of Pain',
  'RK-Bro', 'The Nexus', 'The Kabuki Warriors', 'The Funk Brothers', 'Armstrong family',
  'Akira Taue', 'Edge and Christian', 'Steiner Brothers', 'Riott Squad', 'Hart Dynasty',
  'Sika', 'Michin', 'Blue Meanie', 'bWo', 'Chase U', 'The Heenan Family',
  "The O.C.", 'The Club', 'The League of Nations', 'The Un-Americans', 'The Mean Street Posse',
  'nWo Wolfpac', 'Dungeon of Doom', 'Mr. Fuji & Mr. Saito', 'The Dream Team',
  'Miz and Morrison', 'Myles Borne', 'The Gangstas', 'Guerrero Family',
  'Sarah Logan', 'The Funkettes', 'Pretty Mean Sisters', 'The Kabuki Warriors',
  'Colossal Connection', 'The Samoan Swat Team', 'The Cabinet', 'New Breed',
  'The Islanders', 'The Jumping Bomb Angels', 'The Strongbows', 'The Truth Commission',
  'Twin Towers', 'The New Rockers', 'The Glamour Girls', 'WCW Alliance', 'The Funks',
  'The Fabulous Freebirds', 'Pure Fusion Collective', 'Maximum Male Models',
  'The Hype Bros', 'The West Texas Rednecks', 'The Dangerous Alliance',
];

for (const name of missing) {
  const lower = name.toLowerCase();
  let match = W.find((w) => w.name.toLowerCase() === lower);
  if (!match) {
    match = W.find((w) => (w.alternateNames || []).some((a) => a.toLowerCase() === lower));
  }
  if (!match) {
    for (const [id, rel] of Object.entries(R)) {
      if ((rel.alternateNames || []).some((a) => a.toLowerCase() === lower)) {
        match = W.find((w) => w.id === Number(id));
        break;
      }
    }
  }
  if (match) {
    const cls = classifyEntry(match);
    console.log(`FOUND: "${name}" → id=${match.id} "${match.name}" [${cls}]`);
  } else {
    // Try partial: strip "The " and try again
    const noThe = lower.replace(/^the\s+/, '');
    let partial = W.find(
      (w) =>
        w.name.toLowerCase() === noThe ||
        w.name.toLowerCase().replace(/^the\s+/, '') === noThe,
    );
    if (!partial) {
      partial = W.find(
        (w) =>
          w.name.toLowerCase().includes(lower) || lower.includes(w.name.toLowerCase()),
      );
    }
    if (partial) {
      console.log(`CLOSE: "${name}" ~ id=${partial.id} "${partial.name}" [${classifyEntry(partial)}]`);
    } else {
      console.log(`MISS:  "${name}"`);
    }
  }
}
