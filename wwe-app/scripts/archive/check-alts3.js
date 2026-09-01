import W from '../src/data/wrestlers.js';
import R from '../src/data/relationships.js';

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
  'New Jack': ['The Gangstas'],
};

let ok = 0;
let missing = 0;
for (const [wName, alts] of Object.entries(WRESTLER_ALTS)) {
  const w = W.find((x) => x.name === wName);
  if (!w) {
    console.log(`NO WRESTLER: "${wName}"`);
    continue;
  }
  const rel = R[w.id];
  if (!rel) {
    console.log(`NO REL ENTRY: "${wName}" (id=${w.id})`);
    missing += alts.length;
    continue;
  }
  const relAlts = rel.alternateNames || [];
  for (const alt of alts) {
    if (relAlts.includes(alt)) {
      ok++;
    } else {
      console.log(`MISSING: "${wName}" (id=${w.id}) needs "${alt}" — has: ${JSON.stringify(relAlts)}`);
      missing++;
    }
  }
}
console.log(`\nOK: ${ok}, MISSING: ${missing}`);
