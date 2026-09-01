const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');
const wrestlersSrc = fs.readFileSync(path.join(dataDir, 'wrestlers.js'), 'utf8');
const imagesSrc = fs.readFileSync(path.join(dataDir, 'images.js'), 'utf8');

const nameMap = {};
const re1 = /id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let m;
while ((m = re1.exec(wrestlersSrc)) !== null) nameMap[parseInt(m[1])] = m[2];

// Get IDs with actual image URLs (allow any indentation including none)
const imageKeys = new Set();
const re2 = /^\s*(\d+):\s*["']https?:\/\//gm;
while ((m = re2.exec(imagesSrc)) !== null) imageKeys.add(parseInt(m[1]));

// Also check for empty string images
const emptyRe = /^\s*(\d+):\s*['"]\s*['"]/gm;
const emptyKeys = new Set();
while ((m = emptyRe.exec(imagesSrc)) !== null) emptyKeys.add(parseInt(m[1]));

// Get all wrestler IDs
const allIds = new Set();
const re3 = /id:\s*(\d+)/g;
while ((m = re3.exec(wrestlersSrc)) !== null) allIds.add(parseInt(m[1]));

const missing = [...allIds].filter(id => !imageKeys.has(id));
const emptyOnes = [...allIds].filter(id => emptyKeys.has(id));

console.log('=== MISSING (no entry at all) ===');
missing.forEach(id => console.log(`${id}: ${nameMap[id] || 'Unknown'}`));
console.log(`\nMissing: ${missing.length}`);

if (emptyOnes.length > 0) {
  console.log('\n=== EMPTY STRING IMAGES ===');
  emptyOnes.forEach(id => console.log(`${id}: ${nameMap[id] || 'Unknown'}`));
  console.log(`Empty: ${emptyOnes.length}`);
}
