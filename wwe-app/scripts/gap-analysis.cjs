const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// Get all wrestler IDs
const wSrc = fs.readFileSync(path.join(dataDir, 'wrestlers.js'), 'utf8');
const wIds = new Set();
const re = /id:\s*(\d+),/g;
let m;
while ((m = re.exec(wSrc)) !== null) wIds.add(Number(m[1]));

// GAP 1: IDs in extra.js but not wrestlers.js
console.log('=== GAP 1: Missing from wrestlers.js (have extra.js data) ===');
const extraSrc = fs.readFileSync(path.join(dataDir, 'extra.js'), 'utf8');
const extraOrphans = [];
const eRe = /\n\s*(\d+):\s*\{/g;
while ((m = eRe.exec(extraSrc)) !== null) {
  const id = Number(m[1]);
  if (!wIds.has(id)) extraOrphans.push(id);
}
extraOrphans.sort((a, b) => a - b);

// Get names from comments
for (const id of extraOrphans) {
  const idx = extraSrc.indexOf('\n  ' + id + ':');
  if (idx > -1) {
    const chunk = extraSrc.substring(idx, idx + 120);
    const comment = chunk.match(/\/\/\s*(.+)/);
    const name = comment ? comment[1].trim() : '(unknown)';
    console.log(`  ${id}: ${name}`);
  }
}
console.log(`Total: ${extraOrphans.length}\n`);

// GAP 2: IDs in wrestlers.js but missing from bio/personal/wiki
console.log('=== GAP 2: Missing bio/personal/wiki ===');
const bioSrc = fs.readFileSync(path.join(dataDir, 'bio.js'), 'utf8');
const personalSrc = fs.readFileSync(path.join(dataDir, 'personal.js'), 'utf8');
const wikiSrc = fs.readFileSync(path.join(dataDir, 'wiki.js'), 'utf8');

const bioIds = new Set();
const pRe = /\n\s*(\d+)\s*:/g;
while ((m = pRe.exec(bioSrc)) !== null) bioIds.add(Number(m[1]));

const persIds = new Set();
const p2Re = /\n\s*(\d+)\s*:/g;
while ((m = p2Re.exec(personalSrc)) !== null) persIds.add(Number(m[1]));

const wikiIds = new Set();
const w2Re = /\n\s*(\d+)\s*:/g;
while ((m = w2Re.exec(wikiSrc)) !== null) wikiIds.add(Number(m[1]));

const missingBio = [...wIds].filter(id => !bioIds.has(id)).sort((a, b) => a - b);
const missingPers = [...wIds].filter(id => !persIds.has(id)).sort((a, b) => a - b);
const missingWiki = [...wIds].filter(id => !wikiIds.has(id)).sort((a, b) => a - b);

// Find the names
for (const id of missingBio) {
  const nameRe = new RegExp('id:\\s*' + id + ',\\s*(?:\\n\\s*)?name:\\s*["\']([^"\']+)');
  const nameRe2 = new RegExp('id: ' + id + ', name: ["\']([^"\']+)');
  const nm = nameRe.exec(wSrc) || nameRe2.exec(wSrc);
  const name = nm ? nm[1] : '?';
  const hasBio = bioIds.has(id) ? '✓' : '✗';
  const hasPers = persIds.has(id) ? '✓' : '✗';
  const hasWiki = wikiIds.has(id) ? '✓' : '✗';
  console.log(`  ${id}: ${name} [bio:${hasBio} personal:${hasPers} wiki:${hasWiki}]`);
}
console.log(`\nMissing bio: ${missingBio.length}`);
console.log(`Missing personal: ${missingPers.length}`);
console.log(`Missing wiki: ${missingWiki.length}`);
