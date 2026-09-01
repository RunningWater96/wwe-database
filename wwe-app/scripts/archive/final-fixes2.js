import { readFileSync, writeFileSync } from 'fs';

const filePath = decodeURIComponent(
  new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
let content = readFileSync(filePath, 'utf-8');

// Fix name references
const fixes = {
  'Mike Bennett/Mike Kanellis (husband)': 'Mike Kanellis',
};

// Remove generic references
const removes = [
  "NXT women's tag division",
  "NXT women's division",
  "NXT UK women's division",
  "Anoa'i Family",
  "Rosie O'Donnell",
];

let fixCount = 0;
let removeCount = 0;

for (const [wrong, correct] of Object.entries(fixes)) {
  const escaped = wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const q of ['"', "'"]) {
    const pattern = new RegExp(`${q}${escaped}${q}`, 'g');
    const before = content;
    content = content.replace(pattern, `"${correct}"`);
    if (content !== before) fixCount++;
  }
}

for (const name of removes) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const q of ['"', "'"]) {
    // Match with optional trailing comma and whitespace
    const pattern = new RegExp(`${q}${escaped}${q},?\\s*`, 'g');
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

content = content.replace(/\[\s*,/g, '[');
content = content.replace(/,\s*\]/g, ']');
content = content.replace(/,\s*,/g, ',');

writeFileSync(filePath, content, 'utf-8');
console.log(`Fixed ${fixCount}, removed ${removeCount}`);
