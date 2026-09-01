const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// Read all data files as text and extract keys
function extractKeys(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const keys = new Set();
  const re = /^\s+(\d+)\s*:/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    keys.add(parseInt(m[1]));
  }
  return keys;
}

function extractArrayIds(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const ids = new Set();
  const re = /id:\s*(\d+)/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    ids.add(parseInt(m[1]));
  }
  return ids;
}

// Get all wrestler IDs from wrestlers.js (array format)
const wrestlerIds = extractArrayIds(path.join(dataDir, 'wrestlers.js'));
console.log(`Total wrestlers in wrestlers.js: ${wrestlerIds.size}`);

// Get keys from each keyed data file
const files = {
  'extra.js': extractKeys(path.join(dataDir, 'extra.js')),
  'relationships.js': extractKeys(path.join(dataDir, 'relationships.js')),
  'bio.js': extractKeys(path.join(dataDir, 'bio.js')),
  'personal.js': extractKeys(path.join(dataDir, 'personal.js')),
  'wiki.js': extractKeys(path.join(dataDir, 'wiki.js')),
  'brands.js': extractKeys(path.join(dataDir, 'brands.js')),
  'images.js': extractKeys(path.join(dataDir, 'images.js')),
  'gender.js': extractKeys(path.join(dataDir, 'gender.js')),
};

// 1. Check which wrestler IDs are missing from each data file
console.log('\n=== MISSING IDs PER DATA FILE ===');
for (const [file, keys] of Object.entries(files)) {
  if (file === 'gender.js' || file === 'images.js') continue; // These are optional
  const missing = [...wrestlerIds].filter(id => !keys.has(id));
  if (missing.length > 0) {
    console.log(`\n${file}: ${missing.length} wrestler IDs missing`);
    if (missing.length <= 30) {
      console.log(`  IDs: ${missing.join(', ')}`);
    } else {
      console.log(`  First 30: ${missing.slice(0, 30).join(', ')}...`);
    }
  } else {
    console.log(`${file}: ✓ All wrestler IDs present`);
  }
}

// 2. Check for orphaned keys (in data files but not in wrestlers.js)
console.log('\n=== ORPHANED IDs (in data file but not in wrestlers.js) ===');
for (const [file, keys] of Object.entries(files)) {
  if (file === 'gender.js') continue; // gender only has subset
  const orphaned = [...keys].filter(id => !wrestlerIds.has(id));
  if (orphaned.length > 0) {
    console.log(`${file}: ${orphaned.length} orphaned IDs — ${orphaned.join(', ')}`);
  }
}

// 3. Check bio.js for entries with all null fields
const bioSrc = fs.readFileSync(path.join(dataDir, 'bio.js'), 'utf8');
const nullBioRe = /(\d+):\s*\{\s*hometown:\s*null,\s*birthday:\s*null,\s*height:\s*null,\s*weight:\s*null\s*\}/g;
const nullBios = [];
let bm;
while ((bm = nullBioRe.exec(bioSrc)) !== null) {
  nullBios.push(parseInt(bm[1]));
}
console.log(`\n=== BIO.JS: Entries with ALL null fields: ${nullBios.length} ===`);
if (nullBios.length > 0 && nullBios.length <= 20) {
  console.log(`  IDs: ${nullBios.join(', ')}`);
}

// 4. Check personal.js for completely empty entries
const personalSrc = fs.readFileSync(path.join(dataDir, 'personal.js'), 'utf8');
const emptyPersonalRe = /(\d+):\s*\{\s*spouses:\s*\[\],\s*children:\s*\[\],\s*facts:\s*\[\]\s*\}/g;
const emptyPersonals = [];
let pm;
while ((pm = emptyPersonalRe.exec(personalSrc)) !== null) {
  emptyPersonals.push(parseInt(pm[1]));
}
console.log(`\n=== PERSONAL.JS: Entries with ALL empty arrays: ${emptyPersonals.length} ===`);

// 5. Check wiki.js for very short profiles
const wikiSrc = fs.readFileSync(path.join(dataDir, 'wiki.js'), 'utf8');
const shortWikiRe = /(\d+):\s*\{\s*profile:\s*`([^`]*)`/g;
const shortWikis = [];
let wm;
while ((wm = shortWikiRe.exec(wikiSrc)) !== null) {
  if (wm[2].length < 30) {
    shortWikis.push({ id: parseInt(wm[1]), len: wm[2].length, text: wm[2].slice(0, 50) });
  }
}
console.log(`\n=== WIKI.JS: Profiles shorter than 30 chars: ${shortWikis.length} ===`);
if (shortWikis.length <= 20) {
  shortWikis.forEach(w => console.log(`  ID ${w.id}: "${w.text}" (${w.len} chars)`));
}

// 6. Check images.js coverage
const imageKeys = files['images.js'];
const missingImages = [...wrestlerIds].filter(id => !imageKeys.has(id));
console.log(`\n=== IMAGES.JS: ${missingImages.length} of ${wrestlerIds.size} wrestlers without images ===`);

// 7. Check for wrestlers with no eras
const wrestlersSrc = fs.readFileSync(path.join(dataDir, 'wrestlers.js'), 'utf8');
const noErasRe = /id:\s*(\d+).*?eras:\s*\[\]/g;
const noEras = [];
let em;
while ((em = noErasRe.exec(wrestlersSrc)) !== null) {
  noEras.push(parseInt(em[1]));
}
console.log(`\n=== WRESTLERS WITH NO ERAS: ${noEras.length} ===`);

// 8. Check for wrestlers with no championships listed but hallOfFame set
const hofNoTitlesRe = /id:\s*(\d+).*?championships:\s*\[\].*?hallOfFame:\s*(?:true|"[^"]*"|\d+)/g;
const hofNoTitles = [];
let hm;
while ((hm = hofNoTitlesRe.exec(wrestlersSrc)) !== null) {
  hofNoTitles.push(parseInt(hm[1]));
}
console.log(`\n=== HOF INDUCTEES WITH NO CHAMPIONSHIPS LISTED: ${hofNoTitles.length} ===`);

// 9. Check extra.js for entries with all empty arrays
const extraSrc = fs.readFileSync(path.join(dataDir, 'extra.js'), 'utf8');
const emptyExtraRe = /(\d+):\s*\{\s*injuries:\s*\[\],\s*tagTeams:\s*\[\],\s*factions:\s*\[\]\s*\}/g;
const emptyExtras = [];
let exm;
while ((exm = emptyExtraRe.exec(extraSrc)) !== null) {
  emptyExtras.push(parseInt(exm[1]));
}
console.log(`\n=== EXTRA.JS: Entries with ALL empty arrays: ${emptyExtras.length} ===`);

// 10. Check relationships.js for empty entries
const relSrc = fs.readFileSync(path.join(dataDir, 'relationships.js'), 'utf8');
const emptyRelRe = /(\d+):\s*\{\s*alternateNames:\s*\[\],\s*allies:\s*\[\],\s*rivals:\s*\[\]\s*\}/g;
const emptyRels = [];
let rm;
while ((rm = emptyRelRe.exec(relSrc)) !== null) {
  emptyRels.push(parseInt(rm[1]));
}
console.log(`\n=== RELATIONSHIPS.JS: Entries with ALL empty arrays: ${emptyRels.length} ===`);

// 11. Check brands.js for null currentBrand
const brandsSrc = fs.readFileSync(path.join(dataDir, 'brands.js'), 'utf8');
const nullBrandRe = /(\d+):\s*\{\s*currentBrand:\s*null/g;
const nullBrands = [];
let nbm;
while ((nbm = nullBrandRe.exec(brandsSrc)) !== null) {
  nullBrands.push(parseInt(nbm[1]));
}
console.log(`\n=== BRANDS.JS: Entries with null currentBrand: ${nullBrands.length} ===`);

// Summary
console.log('\n=== SUMMARY ===');
console.log(`Total wrestler entries: ${wrestlerIds.size}`);
console.log(`Images coverage: ${imageKeys.size}/${wrestlerIds.size} (${Math.round(imageKeys.size/wrestlerIds.size*100)}%)`);
console.log(`All-null bios: ${nullBios.length}`);
console.log(`Empty personals: ${emptyPersonals.length}`);
console.log(`Empty extras: ${emptyExtras.length}`);
console.log(`Empty relationships: ${emptyRels.length}`);
console.log(`Null brands: ${nullBrands.length}`);
