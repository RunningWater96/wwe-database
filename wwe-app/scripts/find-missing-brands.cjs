// Finds wrestler IDs missing from brands.js
const fs = require('fs');
const path = require('path');

// Read wrestlers.js to extract id/name pairs
const wrestlersContent = fs.readFileSync(
  path.join(__dirname, '../src/data/wrestlers.js'),
  'utf8'
);

// Extract all id/name pairs
const idNamePairs = [];
const idRegex = /id:\s*(\d+)/g;
const nameRegex = /name:\s*'([^']+)'/g;
let idMatch;
const ids = [];
while ((idMatch = idRegex.exec(wrestlersContent)) !== null) {
  ids.push({ id: parseInt(idMatch[1]), pos: idMatch.index });
}

// For each id, find the next name after it
for (const entry of ids) {
  nameRegex.lastIndex = entry.pos;
  const nm = nameRegex.exec(wrestlersContent);
  if (nm && nm.index - entry.pos < 200) {
    idNamePairs.push({ id: entry.id, name: nm[1] });
  } else {
    idNamePairs.push({ id: entry.id, name: 'UNKNOWN' });
  }
}

// Read brands.js to extract existing IDs
const brandsContent = fs.readFileSync(
  path.join(__dirname, '../src/data/brands.js'),
  'utf8'
);
const existingIds = new Set();
const brandIdRegex = /^\s+(\d+):\s*\{/gm;
let bm;
while ((bm = brandIdRegex.exec(brandsContent)) !== null) {
  existingIds.add(parseInt(bm[1]));
}
// Also catch the compact format: "  123: { currentBrand..."
const compactRegex = /^\s+(\d+):\s*\{/gm;
// Already covered above

console.log('Total wrestlers:', idNamePairs.length);
console.log('Existing in brands.js:', existingIds.size);

const missing = idNamePairs.filter((w) => !existingIds.has(w.id));
console.log('Missing:', missing.length);
console.log('---');
missing.forEach((w) => console.log(`${w.id}|${w.name}`));
