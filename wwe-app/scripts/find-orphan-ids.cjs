const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

function extractKeys(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const keys = new Set();
  const re = /^\s*(\d+)\s*:/gm;  // Also match no-indent keys
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

const wrestlerIds = extractArrayIds(path.join(dataDir, 'wrestlers.js'));
console.log(`wrestlers.js has ${wrestlerIds.size} entries`);

const files = ['extra.js', 'relationships.js', 'bio.js', 'personal.js', 'wiki.js', 'brands.js', 'images.js'];
const allSupplementalIds = new Set();

for (const file of files) {
  const keys = extractKeys(path.join(dataDir, file));
  for (const k of keys) allSupplementalIds.add(k);
}

const orphans = [...allSupplementalIds].filter(id => !wrestlerIds.has(id)).sort((a, b) => a - b);
console.log(`\nIDs in supplemental files but NOT in wrestlers.js: ${orphans.length}`);

// For each orphan, show which files have it
for (const id of orphans) {
  const inFiles = [];
  for (const file of files) {
    const keys = extractKeys(path.join(dataDir, file));
    if (keys.has(id)) inFiles.push(file);
  }
  console.log(`  ${id}: in ${inFiles.join(', ')}`);
}
