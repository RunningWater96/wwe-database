import { readFileSync, writeFileSync } from 'fs';

// Remove remaining generic/non-wrestler references
const REMOVE_NAMES = new Set([
  "NXT women's tag division",
  "NXT women's division",
  "NXT UK women's division",
  "Rosie O'Donnell",
  "Anoa'i Family",
  "Stampede Wrestling",
  "WCW Alliance",
  "Four Horsewomen of MMA",
]);

// Fix remaining name references
const NAME_FIXES = {
  "Twin Towers (managed)": "Twin Towers",
  "Pat OConnor": "Pat O'Connor",
  "The Powers of Pain": "The Warlord",
  'Nexus / Wade Barrett\'s Army': 'Nexus / Wade Barrett\'s Army',
};

const filePath = decodeURIComponent(
  new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
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

// Fix names
for (const [wrong, correct] of Object.entries(NAME_FIXES)) {
  if (wrong === correct) continue;
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

// Cleanup
content = content.replace(/\[\s*,/g, '[');
content = content.replace(/,\s*\]/g, ']');
content = content.replace(/,\s*,/g, ',');

writeFileSync(filePath, content, 'utf-8');
console.log(`Removed ${removeCount}, fixed ${fixCount} entries`);
