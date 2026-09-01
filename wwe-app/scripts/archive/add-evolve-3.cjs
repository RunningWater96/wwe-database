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

// 1. wrestlers.js
console.log('Adding to wrestlers.js...');
insertBefore(path.join(dataDir, 'wrestlers.js'), '\n];\n\nexport default WRESTLERS;', `
  { id: 1664, name: "Cyrus", realName: "Cyrus Habibi-Likio", eras: [{ era: "modern", character: "Cyrus — EVOLVE Developmental", persona: "A competitor on WWE's EVOLVE developmental brand. One of the earliest members of the revived EVOLVE roster, Cyrus is building his career from the ground floor of WWE's developmental pipeline." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1665, name: "Mike Cunningham", realName: "Mike Cunningham", eras: [{ era: "modern", character: "Mike Cunningham — EVOLVE Developmental", persona: "A developmental talent from Dallas, Texas competing on WWE's EVOLVE brand. Cunningham is working through the early stages of his wrestling career at the Performance Center and EVOLVE events." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1666, name: "Sam Holloway", realName: "Sam Holloway", eras: [{ era: "modern", character: "Sam Holloway — EVOLVE Developmental", persona: "A young developmental talent from Ohio competing on WWE's EVOLVE brand. Born in 2000, Holloway is one of the youngest members of the EVOLVE roster and represents the next generation of WWE talent." }], championships: [], totalTitleReigns: 0, hallOfFame: null },`);

// 2. relationships.js
console.log('Adding to relationships.js...');
insertBefore(path.join(dataDir, 'relationships.js'), '\n};\n\nexport default RELATIONSHIPS;', `
  1664: { alternateNames: ['Cyrus Habibi-Likio'], allies: [], rivals: [] },
  1665: { alternateNames: [], allies: [], rivals: [] },
  1666: { alternateNames: [], allies: [], rivals: [] },`);

// 3. bio.js
console.log('Adding to bio.js...');
insertBefore(path.join(dataDir, 'bio.js'), '\n};\n\nexport default WRESTLER_BIO;', `
  1664: { hometown: null, birthday: null, height: null, weight: null },
  1665: { hometown: 'Dallas, Texas', birthday: null, height: null, weight: null },
  1666: { hometown: 'Ohio', birthday: '2000-06-03', height: null, weight: null },`);

// 4. extra.js
console.log('Adding to extra.js...');
insertBefore(path.join(dataDir, 'extra.js'), '\n};\n\nexport default EXTRA;', `
  1664: { injuries: [], tagTeams: [], factions: [] },
  1665: { injuries: [], tagTeams: [], factions: [] },
  1666: { injuries: [], tagTeams: [], factions: [] },`);

// 5. personal.js
console.log('Adding to personal.js...');
insertBefore(path.join(dataDir, 'personal.js'), '\n};\n\nexport default PERSONAL;', `
  1664: { spouses: [], children: [], facts: ['Competes on WWE EVOLVE brand'] },
  1665: { spouses: [], children: [], facts: ['From Dallas, Texas', 'Competes on WWE EVOLVE brand'] },
  1666: { spouses: [], children: [], facts: ['From Ohio', 'Born in 2000', 'Competes on WWE EVOLVE brand'] },`);

// 6. wiki.js
console.log('Adding to wiki.js...');
insertBefore(path.join(dataDir, 'wiki.js'), '\n};\n\nexport default WIKI_CONTENT;', `
  1664: {
    profile: \`EVOLVE developmental wrestler.\`,
    career: \`Cyrus (Cyrus Habibi-Likio) competes on WWE's EVOLVE developmental brand, working through the earliest stages of his professional wrestling career.\`,
  },
  1665: {
    profile: \`EVOLVE developmental wrestler from Dallas, Texas.\`,
    career: \`Mike Cunningham competes on WWE's EVOLVE developmental brand. Originally from Dallas, Texas, he is developing his skills at the Performance Center.\`,
  },
  1666: {
    profile: \`EVOLVE developmental wrestler from Ohio.\`,
    career: \`Sam Holloway is a young developmental talent from Ohio competing on WWE's EVOLVE brand. Born in 2000, he is one of the youngest members of the EVOLVE roster.\`,
  },`);

// 7. brands.js
console.log('Adding to brands.js...');
insertBefore(path.join(dataDir, 'brands.js'), '\n};\n\nexport default WRESTLER_BRANDS;', `
  1664: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1665: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1666: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },`);

console.log('\nDone! Added 3 EVOLVE developmental wrestlers (IDs 1664-1666).');
