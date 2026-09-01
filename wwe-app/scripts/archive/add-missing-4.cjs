const fs = require('fs');
const path = require('path');

function insertBefore(filePath, closingPattern, newText) {
  let content = fs.readFileSync(filePath, 'utf8');
  const idx = content.lastIndexOf(closingPattern);
  if (idx === -1) throw new Error(`Could not find "${closingPattern}" in ${filePath}`);
  content = content.slice(0, idx) + newText + '\n' + content.slice(idx);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  Updated ${path.basename(filePath)}`);
}

const dataDir = path.join(__dirname, '..', 'src', 'data');

// wrestlers.js
console.log('Adding to wrestlers.js...');
insertBefore(path.join(dataDir, 'wrestlers.js'), '\n];\n\nexport default WRESTLERS;', `
  { id: 1251, name: "Percy Watson", realName: "Nick McNeil", eras: [{ era: "pg", character: "Percy Watson — NXT Season 2 Competitor", persona: "An energetic, charismatic performer known for his high-energy persona and signature glasses. A former Texas A&M-Commerce football standout who competed on NXT Season 2 alongside pro MVP. His catchphrase 'Oh Yeah!' and positive energy made him a fan favorite despite never breaking through to the main roster." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1441, name: "Dani Palmer", realName: "Dani Palmer", eras: [{ era: "modern", character: "Dani Palmer — NXT Women's Division", persona: "A developing talent in NXT's women's division. A compact, athletic performer working through the Performance Center system to establish herself on the NXT brand." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1627, name: "Erick Redbeard", realName: "Joseph Ruud", eras: [{ era: "modern", character: "Erick Rowan / Erick Redbeard — Wyatt Family", persona: "A founding member of the Wyatt Family, one of the most memorable factions in modern WWE. His imposing 6'8\\\" frame, red beard, and signature sheep mask made him one of the most visually distinctive performers of his era. Also teamed with Luke Harper as the Bludgeon Brothers. Returned in 2024 as part of the Wyatt Sicks faction to honor the legacy of the late Bray Wyatt." }], championships: [{ title: "NXT Tag Team Championship", count: 1, reigns: [{ date: "2013" }], firstReign: "2013", notable: "Won with Luke Harper" }, { title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "2018" }], firstReign: "2018", notable: "Won with Luke Harper as Bludgeon Brothers" }], totalTitleReigns: 2, hallOfFame: null },
  { id: 1628, name: "The Wyatt Sicks", realName: "Uncle Howdy, Nikki Cross, Dexter Lumis, Joe Gacy, Erick Redbeard", eras: [{ era: "modern", character: "The Wyatt Sicks — Legacy of Bray Wyatt", persona: "A faction formed in 2024 to honor the memory of the late Bray Wyatt. Led by Uncle Howdy (Bo Dallas, Bray's brother), each member adopts a persona inspired by Bray's Firefly Fun House characters. They use psychological warfare and horror-themed presentation reminiscent of Bray's signature style." }], championships: [], totalTitleReigns: 0, hallOfFame: null },`);

// brands.js
console.log('Adding to brands.js...');
insertBefore(path.join(dataDir, 'brands.js'), '\n};\n\nexport default WRESTLER_BRANDS;', `
  1251: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2010', to: '2013' }] },
  1441: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1627: { currentBrand: 'Raw', brandHistory: [{ brand: 'NXT', from: '2012', to: '2014' }, { brand: 'Raw', from: '2014', to: '2020' }, { brand: 'Raw', from: '2024', to: null }] },
  1628: { currentBrand: 'Raw', brandHistory: [{ brand: 'Raw', from: '2024', to: null }] },`);

// Add alternateNames to relationships.js for 1251 and 1627
const relPath = path.join(dataDir, 'relationships.js');
let relContent = fs.readFileSync(relPath, 'utf8');
// Check if 1251 has alternateNames
if (!/1251:.*alternateNames/s.test(relContent.slice(relContent.indexOf('1251:'), relContent.indexOf('1251:') + 200))) {
  // It exists but may lack alternateNames, let me check the structure
}

console.log('\nDone! Added 4 wrestlers (1251, 1441, 1627, 1628) to wrestlers.js and brands.js.');
