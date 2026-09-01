import { readFileSync, writeFileSync } from 'fs';

// Stragglers that should have been caught in first pass
const REMOVE_NAMES = new Set([
  // Missed jokes
  "Each other (and the fans)",
  "Yukon Eric (tore off his ear)",
  // Missed generic
  "NXT women's tag division",
  "NXT women's division",
  // Missed non-wrestler
  "Rosie O'Donnell",
]);

// Additional name fixes
const NAME_FIXES = {
  'The Honky Tonk Man': 'Honky Tonk Man',
  'The Legion of Doom': 'Legion of Doom / Road Warriors',
  'Mega Maniacs': 'Hulk Hogan',
  'The Hart Dynasty': 'Hart Dynasty',
  'The Hardy Boyz (TLC feuds)': 'The Hardy Boyz',
  'Edge and Christian (TLC feuds)': 'Edge and Christian',
  'The Oddities (Golga era)': 'The Oddities',
  'The Corporation (Attitude Era)': 'The Corporation',
  'The Corporation (Vince McMahon - Big Boss Man - The Rock)': 'The Corporation',
  'D-Generation X (insurance policy)': 'D-Generation X',
  'D-Generation X (Triple H - Shawn Michaels - Road Dogg - Billy Gunn - Chyna)': 'D-Generation X',
  'Nation of Domination (as Kama Mustafa)': 'Nation of Domination',
  'Nation of Domination (briefly)': 'Nation of Domination',
  'The Nation of Domination': 'Nation of Domination',
  'Ministry of Darkness (as Kama)': 'Ministry of Darkness',
  'The Undertaker\'s Ministry': 'Ministry of Darkness',
  'The Wyatt Family (initially)': 'Wyatt Family',
  'The Bloodline (Honorary Uce)': 'The Bloodline',
  'Damage CTRL (eventually)': 'Damage CTRL',
  'Damage CTRL (Bayley - Dakota Kai - Kairi Sane)': 'Damage CTRL',
  'Undisputed Era (O\'Reilly, Strong, Fish)': 'Undisputed Era',
  'The Undisputed ERA': 'Undisputed Era',
  'Legado del Fantasma (initially)': 'Legado del Fantasma',
  'Brain Busters (Arn Anderson and Tully Blanchard)': 'Brain Busters',
  'SAnitY (leader)': 'SAnitY',
  'RETRIBUTION (leader)': 'Retribution',
  'The Nexus (early career)': 'The Nexus',
  'Holly Cousins': 'Molly Holly',
  'Brawling Brutes': 'The Brawling Brutes',
  'Akira Taue (Holy Demon Army)': 'Akira Taue',
  'Wild Buddy Rogers (early career)': 'Buddy Rogers',
  'Von Erichs': 'The Von Erichs',
  'Von Erich Family': 'The Von Erichs',
  'Hart Family': 'The Hart Foundation',
  'Anoa\'i Family': 'The Wild Samoans',
  'Edris Enofe & Malik Blade': 'Edris Enofe',
  'New Age Outlaws': 'New Age Outlaws',
  'Mankind and Al Snow (tag feud)': 'Mankind',
  'T and A (Test and Albert - managed)': 'Test',
  'T and A (Albert - managed by Trish Stratus)': 'Albert',
  'Un-Americans (Lance Storm - Christian)': 'Lance Storm',
  'X-Factor (Albert - Justin Credible)': 'Albert',
  'The Coffey Brothers + Wolfgang': 'Gallus',
};

const filePath = decodeURIComponent(new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));
let content = readFileSync(filePath, 'utf-8');

let removeCount = 0;
let fixCount = 0;

// Remove entries
for (const name of REMOVE_NAMES) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`"${escaped}",?\\s*`, 'g'),
    new RegExp(`'${escaped}',?\\s*`, 'g'),
  ];
  for (const pattern of patterns) {
    const before = content;
    content = content.replace(pattern, (match, offset) => {
      const preceding = content.substring(Math.max(0, offset - 200), offset);
      if (preceding.match(/(?:allies|rivals|partners|members)\s*:\s*\[/)) {
        removeCount++;
        return '';
      }
      return match;
    });
  }
}

// Fix name variations
for (const [wrong, correct] of Object.entries(NAME_FIXES)) {
  const escaped = wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

// Clean up
content = content.replace(/\[\s*,/g, '[');
content = content.replace(/,\s*\]/g, ']');
content = content.replace(/,\s*,/g, ',');

writeFileSync(filePath, content, 'utf-8');
console.log(`Removed ${removeCount}, fixed ${fixCount} entries`);
