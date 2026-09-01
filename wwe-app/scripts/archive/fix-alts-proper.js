import { readFileSync, writeFileSync } from 'fs';
import W from '../src/data/wrestlers.js';
import R from '../src/data/relationships.js';

// Map: wrestler name → alternate names to add
const WRESTLER_ALTS = {
  'Matt Hardy': ['The Hardy Boyz'],
  'Bret Hart': ['The Hart Foundation'],
  'The Rock': ['Nation of Domination'],
  'Shawn Michaels': ['D-Generation X'],
  'Adam Cole': ['Undisputed Era'],
  'Bayley': ['Damage CTRL'],
  'Roman Reigns': ['The Shield'],
  'Triple H': ['The Corporation', 'The Authority', 'Evolution'],
  'The Usos': ['The Bloodline'],
  'Nikki Bella': ['The Bella Twins'],
  'Undertaker': ['Ministry of Darkness'],
  'Ric Flair': ['Four Horsemen'],
  'Bray Wyatt': ['Wyatt Family'],
  'Road Dogg': ['New Age Outlaws'],
  'Arn Anderson': ['Brain Busters'],
  'Pete Dunne': ['British Strong Style', 'The Brawling Brutes'],
  'Ali': ['Retribution'],
  'Santos Escobar': ['Legado del Fantasma'],
  'Kurrgan': ['The Oddities', 'The Truth Commission'],
  'Eddie Guerrero': ['Los Guerreros'],
  'Drew McIntyre': ['3MB'],
  'Roderick Strong': ['Diamond Mine'],
  'Eric Young': ['SAnitY'],
  'Nunzio': ['The FBI'],
  'Jinder Mahal': ['The Singh Brothers'],
  'Asuka': ['The Kabuki Warriors'],
  'Tyson Kidd': ['Hart Dynasty'],
  'Liv Morgan': ['Riott Squad'],
  'Andre Chase': ['Chase U'],
  'Bobby Heenan': ['The Heenan Family'],
  'AJ Styles': ['The O.C.', 'The Club'],
  'Wade Barrett': ['The League of Nations'],
  'Lance Storm': ['The Un-Americans'],
  'Kevin Sullivan': ['Dungeon of Doom'],
  'Savio Vega': ['Los Boricuas'],
  'Brad Armstrong': ['Armstrong family'],
  'Chavo Guerrero Sr.': ['Guerrero Family'],
  'Terry Funk': ['The Funk Brothers', 'The Funks'],
  'Stevie Richards': ['bWo', 'Blue World Order (ECW)'],
  'Sonya Deville': ['Pure Fusion Collective'],
  'Greg Valentine': ['The Dream Team'],
  'Mr. Fuji': ['Mr. Fuji & Mr. Saito', 'Mr. Fuji and Professor Toru Tanaka'],
  'Zack Ryder': ['The Hype Bros'],
  'Mia Yim': ['Michin'],
  'JBL': ['The Cabinet'],
  'Michael PS Hayes': ['The Fabulous Freebirds'],
  'Chief Jay Strongbow': ['The Strongbows'],
  'Haku': ['The Islanders'],
  'Mansoor': ['Maximum Male Models'],
  'Judy Martin': ['The Glamour Girls', 'The Jumping Bomb Angels'],
  'Skip': ['The Bodydonnas'],
  'Elijah Burke': ['New Breed'],
  'Terri Runnels': ['Pretty Mean Sisters (PMS)'],
  'Rick Rude': ['The Dangerous Alliance (WCW)'],
  'Kerry Von Erich': ['The Von Erichs'],
  'Marty Jannetty': ['The New Rockers'],
  'Mr. Perfect': ['The West Texas Rednecks (WCW stable)'],
};

// First, find the correct ID for each wrestler
const idMap = new Map();
for (const name of Object.keys(WRESTLER_ALTS)) {
  const w = W.find((x) => x.name === name);
  if (!w) {
    console.log(`WARNING: "${name}" not found in wrestlers.js`);
    continue;
  }
  if (!R[w.id]) {
    console.log(`WARNING: "${name}" (id=${w.id}) has no relationship entry`);
    continue;
  }
  idMap.set(w.id, { name, altsToAdd: WRESTLER_ALTS[name] });
}

// Now directly modify the relationships object and rewrite
const filePath = decodeURIComponent(
  new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
let content = readFileSync(filePath, 'utf-8');

let addCount = 0;
let removeCount = 0;

// Step 1: Remove ALL wrongly-added alternateNames
// These are names that were added to the WRONG entries by the previous buggy script
const wrongAdds = [
  'Evolution', 'Four Horsemen', 'nWo Wolfpac', 'The West Texas Rednecks (WCW stable)',
  'Wyatt Family', 'The O.C.', 'The Club', 'Pretty Mean Sisters (PMS)',
  'The Un-Americans', 'The Bella Twins', 'The League of Nations', 'The Hype Bros',
  'The Kabuki Warriors', 'Hart Dynasty', 'Retribution', 'Maximum Male Models',
  'The Dream Team', 'Twin Towers', 'The Powers of Pain', 'The Fabulous Freebirds',
  'The Strongbows', 'The Bodydonnas', 'New Breed', 'The Glamour Girls', 'The Gangstas',
  'Brain Busters', 'The Hart Foundation', 'Damage CTRL', 'The Bloodline',
  'The Cabinet', 'New Age Outlaws', 'The Islanders', 'The New Rockers',
  'The Dangerous Alliance (WCW)',
  'Riott Squad', 'British Strong Style', 'The Brawling Brutes', 'bWo',
  'Blue World Order (ECW)', 'Pure Fusion Collective',
  'Los Boricuas', 'Armstrong family', 'Guerrero Family', 'The Oddities',
  'Dungeon of Doom', 'Mr. Fuji & Mr. Saito', 'Mr. Fuji and Professor Toru Tanaka',
  'The Funk Brothers', 'The Funks', 'The FBI', 'The Singh Brothers',
  'SAnitY', 'Diamond Mine', '3MB', 'Undisputed Era', 'Michin',
  'Los Guerreros', 'Nation of Domination', 'D-Generation X', 'The Hardy Boyz',
  'Ministry of Darkness', 'The Shield', 'The Corporation', 'The Authority',
  'Legado del Fantasma', 'The Von Erichs', 'Los Boricuas', 'The Truth Commission',
  'The Jumping Bomb Angels', 'The West Texas Rednecks', 'Chase U',
  'The Heenan Family', 'The League of Nations',
];

// Remove all wrongly-added alternateNames from everywhere
for (const name of wrongAdds) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Remove as part of alternateNames arrays - match with surrounding comma/space
  const patterns = [
    new RegExp(`,\\s*"${escaped}"`, 'g'),
    new RegExp(`"${escaped}",\\s*`, 'g'),
    new RegExp(`,\\s*'${escaped}'`, 'g'),
    new RegExp(`'${escaped}',\\s*`, 'g'),
  ];
  for (const pattern of patterns) {
    const before = content;
    content = content.replace(pattern, (match, offset) => {
      // Only remove from alternateNames arrays
      const preceding = content.substring(Math.max(0, offset - 100), offset);
      if (preceding.includes('alternateNames')) {
        removeCount++;
        return '';
      }
      return match;
    });
  }
}

// Step 2: Now add the correct alternateNames to the right entries
for (const [id, { name, altsToAdd }] of idMap) {
  for (const altName of altsToAdd) {
    // Check if already present
    const existingAlts = R[id]?.alternateNames || [];
    // Also check the current content to avoid re-adding
    const escaped = altName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const alreadyPattern = new RegExp(`${id}\\s*:\\s*\\{[^}]*alternateNames[^\\]]*"${escaped}"`);
    if (content.match(alreadyPattern)) {
      continue;
    }

    // Find the entry and its alternateNames array
    // Match the entry start with the specific ID
    const entryRegex = new RegExp(`(\\b${id}:\\s*\\{[\\s\\S]*?alternateNames\\s*:\\s*\\[[^\\]]*)(\\])`, 'm');
    const match = content.match(entryRegex);
    if (match) {
      content = content.replace(match[0], `${match[1]}, "${altName}"${match[2]}`);
      addCount++;
    } else {
      console.log(`Could not find alternateNames for id=${id} (${name}) to add "${altName}"`);
    }
  }
}

writeFileSync(filePath, content, 'utf-8');
console.log(`Removed ${removeCount} wrong alternateNames, added ${addCount} correct ones`);
