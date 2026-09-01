import { readFileSync, writeFileSync } from 'fs';

// Map of wrong name -> correct name (matching what's in the database)
const NAME_FIXES = {
  // Shortened/informal names -> full database names
  'Charlotte': 'Charlotte Flair',
  'Charlotte (briefly)': 'Charlotte Flair',
  'Charlotte (sometimes)': 'Charlotte Flair',
  'Charlotte & Becky (PCB)': 'Charlotte Flair',
  'Becky': 'Becky Lynch',
  'Nakamura': 'Shinsuke Nakamura',
  'Kidman': 'Billy Kidman',
  'Ezekiel': 'Ezekiel Jackson',
  'Sid': 'Sycho Sid',
  'Hogan (WCW)': 'Hulk Hogan',
  'LOD': 'Legion of Doom / Road Warriors',
  'The Macho King': 'Randy Savage',
  'Macho King Randy Savage': 'Randy Savage',
  'The Ultimate Warrior': 'Ultimate Warrior',

  // Accent/punctuation mismatches
  'Finn Balor': 'Finn Bálor',
  'Finn Balor (Judgment Day)': 'Finn Bálor',
  'Titus O Neil': "Titus O'Neil",
  'Titus O Neil (brief feud)': "Titus O'Neil",
  'Tony DAngelo': "Tony D'Angelo",
  'Rene Dupree': 'René Duprée',

  // Alternate name formats for existing entries
  'Andre the Giant': 'André the Giant',
  'Andre The Giant': 'André the Giant',
  'D-Lo Brown': "D'Lo Brown",
  'DX': 'D-Generation X',
  'DX (Shawn Michaels & Triple H)': 'D-Generation X',
  'D-Generation X (briefly)': 'D-Generation X',
  'The New Age Outlaws': 'New Age Outlaws',
  'The Bella Twins': 'The Bella Twins',
  'The Bellas': 'The Bella Twins',
  'Rockers': 'The Rockers',
  'Hardy Boyz': 'The Hardy Boyz',
  'New Day': 'The New Day',
  'Hart Foundation': 'The Hart Foundation',
  'Nasty Boys': 'The Nasty Boys',
  'The Natural Disasters': 'Natural Disasters',
  'The Acolytes': 'APA',
  'Acolytes (tag feud)': 'APA',
  'The Repo Man': 'Repo Man',
  'Goodfather': 'The Godfather',
  'The Mega Maniacs': 'Mega Maniacs',
  'The NWO': 'nWo',
  'The McMahon family': 'Vince McMahon',
  'The Brain Busters': 'Brain Busters',
  'The Holly cousins': 'Holly Cousins',
  'Hype Bros': 'The Hype Bros',

  // Gimmick/alias references -> correct database name
  'Bray Wyatt/The Fiend': 'Bray Wyatt',
  'Gunther/WALTER': 'Gunther',
  'Cactus Jack/Mick Foley': 'Mankind',
  '1-2-3 Kid': 'X-Pac',
  'Isaac Yankem/Kane': 'Kane',
  'Stardust/Cody Rhodes (tag partner)': 'Cody Rhodes',
  'Johnny Nitro/Morrison': 'John Morrison',
  'The Roadie/Road Dogg': 'Road Dogg',
  'Marlena/Terri Runnels': 'Terri Runnels',
  'Matt Hardy Version 1.0': 'Matt Hardy',
  'Rusev/Miro (husband)': 'Rusev',
  'Commander Azeez/Babatunde': 'Commander Azeez',

  // Tag team name variations
  'Enzo and Cass': 'Enzo & Cass',
  'Enzo & Big Cass': 'Enzo & Cass',
  'Enzo Amore': 'Enzo & Cass',
  'The Miz and John Morrison': 'Miz and Morrison',
  'John Morrison & The Miz': 'Miz and Morrison',
  'The Singh Brothers': 'The Singh Brothers',
  'Singh Brothers': 'The Singh Brothers',
  'The Revival / FTR': 'The Revival',
  'The Smokin Gunns': 'Smoking Gunns',
  'Kai En Tai': 'Kaientai',

  // Combination names -> first person (since they're separate entries)
  'Owens & Zayn': 'Kevin Owens',
  'Kevin Owens & Sami Zayn': 'Kevin Owens',
  'Cade & Murdoch': 'Lance Cade',
  'Cade and Murdoch': 'Lance Cade',
  'Jimmy Uso & Jey Uso': 'The Usos',
  'Iron Sheik & Nikolai Volkoff': 'Iron Sheik',
  'Nikolai Volkoff and The Iron Sheik': 'Iron Sheik',
  'Owen Hart and Yokozuna': 'Owen Hart',
  'Owen Hart & Yokozuna': 'Owen Hart',
  'Shawn Michaels and Diesel': 'Shawn Michaels',
  'Rob Van Dam and Kane': 'Rob Van Dam',
  'The Hurricane and Rosey': 'Hurricane',
  'Goldust and Booker T': 'Goldust',
  'Brie Bella & Daniel Bryan': 'Daniel Bryan',
  'Nikki Bella & John Cena': 'John Cena',
  'Ted DiBiase Jr. & Cody Rhodes': 'Ted DiBiase Jr.',
  '1-2-3 Kid & Marty Jannetty': 'Marty Jannetty',
  'Batista & Ric Flair': 'Batista',
  'Tyler Bate & Trent Seven': 'Tyler Bate',
  'Alba & Isla': 'Alba Fyre',
  'Katana & Kayden': 'Katana Chance',
  'Rocky Johnson & Tony Atlas': 'Rocky Johnson',
  'The Rocky Johnson & Tony Atlas': 'Rocky Johnson',
  'Greg Valentine & Brutus Beefcake (Dream Team, managed)': 'Greg Valentine',
  'Rusev & Lana': 'Rusev',
  'Billy & Chuck (managed)': 'Billy Gunn',

  // Parenthetical descriptions -> clean names
  'Bobby Heenan\'s Family': 'Bobby Heenan',
  'Sika (brother)': 'Sika',
  'Afa (brother)': 'Afa',
  'Afa (manager and father)': 'Afa',
  'Epico (cousin)': 'Primo Colon',
  'Rosey': 'Rosey',
  'Darren Young': 'Darren Young',
  'Ax': 'Demolition',
  'Mo': 'Men on a Mission',
  'Bob Orton': 'Bob Orton Jr.',
  'Retribution (as T-Bar)': 'T-BAR',
  'RETRIBUTION (as T-BAR)': 'T-BAR',

  // Names that exist but with different formatting
  'Hart Dynasty': 'The Hart Dynasty',
  'Riott Squad (Ruby Riott, Sarah Logan)': 'Riott Squad',
  'Bayley & Dakota Kai (Damage CTRL)': 'Bayley',
  'Bayley & IYO SKY (Damage CTRL)': 'Bayley',
  'Cameron & Naomi (Funkadactyls)': 'Naomi',
  'Creed Brothers': 'The Creed Brothers',
  'New Nexus': 'The Nexus',
  'Oscar (rapper)': 'Oscar',
  'Oscar (rapper/manager)': 'Oscar',
  'Aalyah Mysterio (storyline)': 'Rey Mysterio',
  'Blake (Wesley Blake)': 'Wesley Blake',
  'Tyson Kidd & Natalya (Hart Dynasty)': 'Tyson Kidd',
};

const filePath = decodeURIComponent(new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));
let content = readFileSync(filePath, 'utf-8');

let fixCount = 0;

for (const [wrong, correct] of Object.entries(NAME_FIXES)) {
  const escaped = wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match in both single and double quotes
  const patterns = [
    new RegExp(`"${escaped}"`, 'g'),
    new RegExp(`'${escaped}'`, 'g'),
  ];
  for (const pattern of patterns) {
    const before = content;
    content = content.replace(pattern, `"${correct}"`);
    if (content !== before) {
      const matches = before.match(pattern);
      fixCount += matches ? matches.length : 0;
    }
  }
}

writeFileSync(filePath, content, 'utf-8');
console.log(`Fixed ${fixCount} name variations in relationships.js`);
