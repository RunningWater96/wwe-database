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

// relationships.js - add 1627 and 1628
console.log('Adding relationships for 1627 and 1628...');
insertBefore(path.join(dataDir, 'relationships.js'), '\n};\n\nexport default RELATIONSHIPS;', `
  1627: { alternateNames: ['Erick Rowan', 'Rowan'], allies: ['Bray Wyatt', 'Luke Harper', 'Braun Strowman', 'Uncle Howdy'], rivals: ['The Rock', 'Roman Reigns', 'Daniel Bryan'] },
  1628: { alternateNames: ['Wyatt Sicks', 'The Wyatt 6'], allies: [], rivals: ['Chad Gable', 'The Miz', 'American Made'] },`);

// gender.js - add Dani Palmer
console.log('Adding gender for Dani Palmer...');
insertBefore(path.join(dataDir, 'gender.js'), '\n};\n\nexport default WRESTLER_GENDER;', `
  1441: 'female', // Dani Palmer`);

console.log('Done!');
