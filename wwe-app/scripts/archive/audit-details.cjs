const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// Load wrestlers to get name mapping
const wrestlersSrc = fs.readFileSync(path.join(dataDir, 'wrestlers.js'), 'utf8');
const nameMap = {};
const idNameRe = /id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let nm;
while ((nm = idNameRe.exec(wrestlersSrc)) !== null) {
  nameMap[parseInt(nm[1])] = nm[2];
}

function getName(id) { return nameMap[id] || `Unknown(${id})`; }

// 1. Missing personal.js entries
console.log('=== 4 MISSING PERSONAL.JS ENTRIES ===');
[1122, 1251, 1381, 1471].forEach(id => console.log(`  ${id}: ${getName(id)}`));

// 2. All-null bios
console.log('\n=== 13 ALL-NULL BIOS ===');
[645, 655, 657, 659, 660, 683, 685, 690, 691, 697, 698, 719, 1664].forEach(id => console.log(`  ${id}: ${getName(id)}`));

// 3. 41 missing images — which ones?
function extractKeys(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const keys = new Set();
  const re = /^\s+(\d+)\s*:/gm;
  let m;
  while ((m = re.exec(src)) !== null) keys.add(parseInt(m[1]));
  return keys;
}
function extractArrayIds(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const ids = new Set();
  const re = /id:\s*(\d+)/g;
  let m;
  while ((m = re.exec(src)) !== null) ids.add(parseInt(m[1]));
  return ids;
}

const allIds = extractArrayIds(path.join(dataDir, 'wrestlers.js'));
const imageIds = extractKeys(path.join(dataDir, 'images.js'));
const missingImages = [...allIds].filter(id => !imageIds.has(id));
console.log(`\n=== ${missingImages.length} MISSING IMAGES ===`);
missingImages.forEach(id => console.log(`  ${id}: ${getName(id)}`));

// 4. HOF with no championships
console.log('\n=== HOF WITH NO CHAMPIONSHIPS ===');
const hofRe = /id:\s*(\d+),\s*name:\s*"([^"]+)".*?championships:\s*\[\].*?hallOfFame:\s*(?:true|"[^"]*"|\d+)/g;
let hm;
while ((hm = hofRe.exec(wrestlersSrc)) !== null) {
  console.log(`  ${hm[1]}: ${hm[2]}`);
}

// 5. Null brands — show names
const brandsSrc = fs.readFileSync(path.join(dataDir, 'brands.js'), 'utf8');
const nullBrandRe = /(\d+):\s*\{\s*currentBrand:\s*null/g;
let nbm;
console.log('\n=== NULL CURRENT BRANDS ===');
while ((nbm = nullBrandRe.exec(brandsSrc)) !== null) {
  const id = parseInt(nbm[1]);
  console.log(`  ${id}: ${getName(id)}`);
}
