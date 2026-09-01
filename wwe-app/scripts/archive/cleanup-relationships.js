import { readFileSync, writeFileSync } from 'fs';

// Names to REMOVE completely from rivals/allies/partners/members
const REMOVE_NAMES = new Set([
  // === JOKE/NONSENSE (62) ===
  "Nobody",
  "Each other",
  "Beer and poker",
  "Moppy (a mop)",
  "Dominik (sometimes)",
  "Charlotte (sometimes)",
  "Nobody — he's a lone wolf",
  "Dink (mini-clown)",
  "Each other (and moshing)",
  "The American public",
  "USA chants",
  "Frankie (parrot)",
  "The WWE Universe",
  "Pepe (hobby horse)",
  "Fifi (French Poodle)",
  "Everyone who beat him",
  "The Legends (they kept punching him)",
  "Everyone who didn't BO-lieve",
  "The Inspirational BO-lievers",
  "His guitar",
  "Nobody — he's a one-man show",
  "Nobody — he was THE experience",
  "Each other — Say Yeah!",
  "Spider Lady (Moolah in disguise)",
  "Worms (he ate them)",
  "Everyone who valued their face",
  "Nuclear heat from everyone",
  "Each other (and hair products)",
  "Nobody (he was the Masterpiece)",
  "His millions (and sometimes The Miz)",
  "Each other for 20+ years",
  "Nobody — he worked alone",
  "Nobody — he was a psychopath",
  "His trash can",
  "Nobody — he rules alone",
  "Nobody — he was a loner",
  "Everyone's appetite",
  "Nobody (unsanitary)",
  "The audience's patience",
  "Nobody specific",
  "The Bunny",
  "The Rosebuds (party conga line)",
  "Everyone who watched her wrestle",
  "Her hair dye",
  "Old-timey charm",
  "The Matadors' dignity",
  "Every WCW wrestler he screwed over",
  "Nobody — he was a villain",
  "Everyone who beat him (which was everyone)",
  "His own back (pat pat pat)",
  "Sparklers and a tiny gut",
  "Nobody — he fights alone",
  "Nobody — he runs solo",
  "Everyone's expectations",
  "Damian (snake)",
  "Lucifer (snake)",
  "Lilly (doll)",
  "Nigerian heritage gimmick",
  "SD Jones (9 seconds)",
  "Skip/Chris Candido (upset win!)",
  "Every Light Heavyweight (as champion)",
  "Everyone Del Rio feuded with",

  // === GENERIC/VAGUE (52) ===
  "ECW roster",
  "NXT women's division",
  "ECW originals",
  "Cruiserweight division",
  "Intercontinental contenders",
  "Midcard heels",
  "Heritage Cup contenders",
  "NXT UK roster",
  "Intercontinental Champions",
  "The Smoky Mountain roster",
  "Total Divas cast",
  "United States Championship contenders",
  "Every women's wrestler 1956-2007",
  "NJPW roster",
  "Midcard roster",
  "Everyone who remembered the Road Warriors",
  "24/7 title pursuers",
  "Queen's Crown",
  "Light Heavyweight division",
  "Lightweight division",
  "NXT UK division",
  "NXT Heritage Cup contenders",
  "Midcard babyfaces",
  "Midcard faces",
  "NXT roster",
  "European Championship contenders",
  "NXT women's tag division",
  "NXT Championship contenders",
  "NXT UK women's division",
  "Enhancement talent opponents",
  "WWF babyface roster",
  "NXT trainees (as trainer)",
  "SmackDown roster",
  "Tag team matches",
  "Native Americans",
  "NAO opponents",
  "Losing streak opponents",
  "Kaientai opponents",
  "All Japan Pro Wrestling roster",
  "Intercontinental Champion stable",
  "The Prime Time Players rivals",
  "Hulk Hogan's allies",
  "Japanese joshi legends",
  "NXT Season 2 cast",
  "The Hurt Business opponents",
  "Spirit Squad members",
  "WCW Misfits in Action",

  // === NON-WRESTLERS (6) ===
  "Muhammad Ali",
  "George Clooney (real life)",
  "Rosie O'Donnell",
  "Bob Zmuda",
  "Jay Leno (really)",
  "Jenna Morasca",
]);

const filePath = decodeURIComponent(new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));
let content = readFileSync(filePath, 'utf-8');

let removeCount = 0;

// Process each name to remove
for (const name of REMOVE_NAMES) {
  // Escape special regex characters in the name
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Match the name as a quoted string in an array, with optional trailing comma and space
  // Pattern: "name", or "name" at end of array
  const patterns = [
    new RegExp(`"${escaped}",?\\s*`, 'g'),
    new RegExp(`'${escaped}',?\\s*`, 'g'),
  ];

  for (const pattern of patterns) {
    const before = content;
    content = content.replace(pattern, (match, offset) => {
      // Check if this is inside an array context (allies, rivals, partners, members)
      const preceding = content.substring(Math.max(0, offset - 200), offset);
      if (preceding.match(/(?:allies|rivals|partners|members)\s*:\s*\[/)) {
        removeCount++;
        return '';
      }
      return match;
    });
  }
}

// Clean up empty arrays and trailing commas in arrays
content = content.replace(/\[\s*,/g, '[');
content = content.replace(/,\s*\]/g, ']');
content = content.replace(/,\s*,/g, ',');

writeFileSync(filePath, content, 'utf-8');
console.log(`Removed ${removeCount} entries from relationships.js`);
