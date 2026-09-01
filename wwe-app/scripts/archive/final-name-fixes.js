import { readFileSync, writeFileSync } from 'fs';

// === PART 1: Fix name references in relationships.js ===
// Map wrong names in allies/rivals/partners/members arrays to correct names
const NAME_FIXES = {
  // The/no-The mismatches with existing entries
  'The APA': 'APA',
  'Judgment Day': 'The Judgment Day',
  'Blue Meanie': 'The Blue Meanie',
  'Steiner Brothers': 'The Steiner Brothers',
  'Colossal Connection': 'The Colossal Connection',
  'The Mean Street Posse': 'Mean Street Posse',

  // Name format mismatches
  'Chavo Guerrero': 'Chavo Guerrero Jr.',
  'Edge and Christian': 'Edge & Christian',
  'Enzo & Cass': 'Enzo Amore & Big Cass',
  'Hurricane & Rosey': 'Hurricane Helms & Rosey',
  'RK-Bro': 'RKBro',
  'Miz and Morrison': 'The Miz & John Morrison',
  'London & Kendrick': 'Paul London & Brian Kendrick',
  'The Road Warriors': 'Legion of Doom / Road Warriors',
  'The Samoan Swat Team': 'The Headshrinkers / Samoan SWAT Team',
  'The Nexus': 'Nexus / Wade Barrett\'s Army',

  // Individual name fixes
  'Afa': 'The Wild Samoans (Afa)',
  'Sika': 'The Wild Samoans (Sika)',
  'Michin': 'Mia Yim',
  'Sarah Logan (wife)': 'Sarah Logan',
  "Sarah Logan (Ivar's wife)": 'Sarah Logan',

  // Faction variations → map to primary member or existing entry
  'The Hardy Boyz': 'The Hardy Boyz',
  'The Hart Foundation': 'The Hart Foundation',
  'Nation of Domination': 'Nation of Domination',
  'D-Generation X': 'D-Generation X',
  'Undisputed Era': 'Undisputed Era',
  'Damage CTRL': 'Damage CTRL',
  'The Shield': 'The Shield',
  'The Corporation': 'The Corporation',
  'The Authority': 'The Authority',
  'The Bloodline': 'The Bloodline',
  'The Von Erichs': 'The Von Erichs',
  'The Bella Twins': 'The Bella Twins',
  'Los Boricuas': 'Los Boricuas',
  'Ministry of Darkness': 'Ministry of Darkness',
  'Evolution': 'Evolution',
  'Four Horsemen': 'Four Horsemen',
  'Wyatt Family': 'Wyatt Family',
  'New Age Outlaws': 'New Age Outlaws',
  'Brain Busters': 'Brain Busters',
  'British Strong Style': 'British Strong Style',
  'The Bodydonnas': 'The Bodydonnas',
  'Retribution': 'Retribution',
  'Legado del Fantasma': 'Legado del Fantasma',
  'The Oddities': 'The Oddities',
  'Los Guerreros': 'Los Guerreros',
  '3MB': '3MB',
  'Diamond Mine': 'Diamond Mine',
  'SAnitY': 'SAnitY',
  'Schism': 'Schism',
  'The FBI': 'The FBI',
  'The Singh Brothers': 'The Singh Brothers',
  'The Brawling Brutes': 'The Brawling Brutes',
  'The Kabuki Warriors': 'The Kabuki Warriors',
  'The Midnight Express': 'The Midnight Express',
  'The Powers of Pain': 'The Powers of Pain',
  'Hart Dynasty': 'Hart Dynasty',
  'Riott Squad': 'Riott Squad',
  'Chase U': 'Chase U',
  'The Heenan Family': 'The Heenan Family',
  "The O.C.": 'The O.C.',
  'The Club': 'The Club',
  'The League of Nations': 'The League of Nations',
  'The Un-Americans': 'The Un-Americans',
  'nWo Wolfpac': 'nWo Wolfpac',
  'Dungeon of Doom': 'Dungeon of Doom',
};

// === PART 2: Add alternateNames to relationships.js ===
// Map faction/team names to an existing member's ID so they're resolvable
const ADD_ALTERNATE_NAMES = {
  // id: [alternate names to add]
  // The Hardy Boyz → Matt Hardy (id=37)
  37: ['The Hardy Boyz'],
  // The Hart Foundation → Bret Hart (id=45)
  45: ['The Hart Foundation'],
  // Nation of Domination → The Rock (id=32)
  32: ['Nation of Domination'],
  // D-Generation X → Shawn Michaels (id=34)
  34: ['D-Generation X'],
  // Undisputed Era → Adam Cole (id=257)
  257: ['Undisputed Era'],
  // Damage CTRL → Bayley (id=135)
  135: ['Damage CTRL'],
  // The Shield → Roman Reigns (id=93)
  93: ['The Shield'],
  // The Corporation → Vince McMahon (id=63)
  63: ['The Corporation', 'The Authority'],
  // The Bloodline → Roman Reigns (already has The Shield)
  // Actually add to Solo Sikoa (id=360) or The Usos (id=129)
  129: ['The Bloodline'],
  // The Von Erichs → Kerry Von Erich (id=1080)
  1080: ['The Von Erichs'],
  // The Bella Twins → Nikki Bella (id=210)
  210: ['The Bella Twins'],
  // Los Boricuas → Savio Vega (id=890)
  890: ['Los Boricuas'],
  // Ministry of Darkness → Undertaker (id=33)
  33: ['Ministry of Darkness'],
  // Evolution → Triple H (id=31)
  31: ['Evolution'],
  // Four Horsemen → Ric Flair (id=36)
  36: ['Four Horsemen'],
  // Wyatt Family → Bray Wyatt (id=101)
  101: ['Wyatt Family'],
  // New Age Outlaws → Road Dogg (id=58)
  58: ['New Age Outlaws'],
  // Brain Busters → Arn Anderson (id=74)
  74: ['Brain Busters'],
  // British Strong Style → Pete Dunne (id=527)
  527: ['British Strong Style', 'The Brawling Brutes'],
  // The Bodydonnas → Chris Candido (Skip) - id=1219
  1219: ['The Bodydonnas'],
  // Retribution → Ali (id=301)
  301: ['Retribution'],
  // Legado del Fantasma → Santos Escobar (id=549)
  549: ['Legado del Fantasma'],
  // The Oddities → Kurrgan (id=1201)
  1201: ['The Oddities'],
  // Los Guerreros → Eddie Guerrero (id=72)
  72: ['Los Guerreros'],
  // 3MB → Drew McIntyre (id=100)
  100: ['3MB'],
  // Diamond Mine → Roderick Strong (id=279)
  279: ['Diamond Mine'],
  // SAnitY → Eric Young (id=583)
  583: ['SAnitY'],
  // Schism → Joe Gacy (id=605)
  605: ['Schism'],
  // The FBI → Nunzio (id=157)
  157: ['The FBI'],
  // The Singh Brothers → Jinder Mahal (id=161)
  161: ['The Singh Brothers'],
  // The Kabuki Warriors → Asuka (id=245)
  245: ['The Kabuki Warriors'],
  // The Midnight Express → Bobby Eaton (id=1479) or a manager
  // Actually check if Bobby Eaton exists
  // Hart Dynasty → Tyson Kidd (id=283)
  283: ['Hart Dynasty'],
  // Riott Squad → Liv Morgan (id=313)
  313: ['Riott Squad'],
  // Chase U → Andre Chase (id=611)
  611: ['Chase U'],
  // The Heenan Family → Bobby Heenan (id=145)
  145: ['The Heenan Family'],
  // The O.C. / The Club → AJ Styles (id=103)
  103: ['The O.C.', 'The Club'],
  // The League of Nations → Wade Barrett (id=213)
  213: ['The League of Nations'],
  // The Un-Americans → Lance Storm (id=189)
  189: ['The Un-Americans'],
  // nWo Wolfpac → Kevin Nash (id=64) or Konnan
  64: ['nWo Wolfpac'],
  // Dungeon of Doom → Kevin Sullivan (id=1496)
  1496: ['Dungeon of Doom'],
  // The Powers of Pain → Warlord (id=1057)
  1057: ['The Powers of Pain'],
  // The Gangstas → New Jack (id=1509)
  1509: ['The Gangstas'],
  // Oscar → Men on a Mission entry (id=697) or Mo (id=1387)
  697: ['Oscar'],
  // The Dream Team → Greg Valentine (id=1009)
  1009: ['The Dream Team'],
  // Guerrero Family → Chavo Guerrero Sr. (id=1534)
  1534: ['Guerrero Family'],
  // The Funk Brothers → Terry Funk (id=1059)
  1059: ['The Funk Brothers', 'The Funks'],
  // Armstrong family → Brad Armstrong (id=1485)
  1485: ['Armstrong family'],
  // The Hype Bros → Zack Ryder (id=219)
  219: ['The Hype Bros'],
  // Mia Yim (id=675) → Michin
  675: ['Michin'],
  // bWo → Stevie Richards (id=1298)
  1298: ['bWo', 'Blue World Order (ECW)'],
  // New Breed → Elijah Burke (id=1322)
  1322: ['New Breed'],
  // Pretty Mean Sisters → Terri Runnels (id=156)
  156: ['Pretty Mean Sisters (PMS)'],
  // The Truth Commission → Kurrgan (already has The Oddities)
  // The Islanders → Haku (id=66)
  66: ['The Islanders'],
  // Twin Towers → Akeem (id=1053)
  1053: ['Twin Towers'],
  // The Fabulous Freebirds → Michael PS Hayes (id=1092)
  1092: ['The Fabulous Freebirds'],
  // Pure Fusion Collective → Sonya Deville (id=317)
  317: ['Pure Fusion Collective'],
  // Maximum Male Models → Mansoor (id=622)
  622: ['Maximum Male Models'],
  // The Glamour Girls → Judy Martin (id=1414)
  1414: ['The Glamour Girls'],
  // The New Rockers → Marty Jannetty (id=75)
  75: ['The New Rockers'],
  // The Cabinet → JBL (id=39)
  39: ['The Cabinet'],
  // WCW Alliance → might not need a mapping
  // The Dangerous Alliance → Rick Rude (id=73)
  73: ['The Dangerous Alliance (WCW)'],
  // The West Texas Rednecks → Mr. Perfect (id=69)
  69: ['The West Texas Rednecks (WCW stable)'],
  // The Strongbows → Chief Jay Strongbow (id=1141)
  1141: ['The Strongbows'],
  // The Jumping Bomb Angels → Judy Martin already mapped
  // Mr. Fuji & Mr. Saito → Mr. Fuji (id=837)
  837: ['Mr. Fuji & Mr. Saito', 'Mr. Fuji and Professor Toru Tanaka'],
};

// === Execute fixes ===
const filePath = decodeURIComponent(
  new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
let content = readFileSync(filePath, 'utf-8');

// Part 1: Fix name references
let fixCount = 0;
for (const [wrong, correct] of Object.entries(NAME_FIXES)) {
  if (wrong === correct) continue; // Skip identity mappings (factions we're adding as alternateNames)
  const escaped = wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [new RegExp(`"${escaped}"`, 'g'), new RegExp(`'${escaped}'`, 'g')];
  for (const pattern of patterns) {
    const before = content;
    content = content.replace(pattern, `"${correct}"`);
    if (content !== before) {
      const matches = before.match(pattern);
      fixCount += matches ? matches.length : 0;
    }
  }
}

// Part 2: Add alternateNames to relationship entries
let altCount = 0;
for (const [idStr, names] of Object.entries(ADD_ALTERNATE_NAMES)) {
  const id = Number(idStr);
  // Find the relationship entry for this ID
  const entryPattern = new RegExp(`(${id}\\s*:\\s*\\{)`);
  const match = content.match(entryPattern);
  if (!match) {
    console.log(`Warning: No relationship entry found for id=${id}`);
    continue;
  }

  // Check if alternateNames already exists
  const afterEntry = content.substring(content.indexOf(match[0]));
  const nextEntryMatch = afterEntry.match(/\n\s*\d+\s*:\s*\{/);
  const entryBlock = nextEntryMatch
    ? afterEntry.substring(0, nextEntryMatch.index)
    : afterEntry;

  const hasAltNames = entryBlock.includes('alternateNames');

  for (const name of names) {
    // Check if this name is already in alternateNames
    if (entryBlock.includes(`"${name}"`) || entryBlock.includes(`'${name}'`)) {
      continue;
    }

    if (hasAltNames) {
      // Append to existing alternateNames array
      const altPattern = new RegExp(
        `(${id}\\s*:\\s*\\{[^}]*alternateNames\\s*:\\s*\\[[^\\]]*)`,
      );
      const altMatch = content.match(altPattern);
      if (altMatch) {
        content = content.replace(altMatch[0], `${altMatch[0]}, "${name}"`);
        altCount++;
      }
    } else {
      // Add alternateNames after the opening brace
      content = content.replace(
        entryPattern,
        `${match[0]}\n    alternateNames: ["${name}"],`,
      );
      altCount++;
    }
  }
}

writeFileSync(filePath, content, 'utf-8');
console.log(`Fixed ${fixCount} name references, added ${altCount} alternate names`);
