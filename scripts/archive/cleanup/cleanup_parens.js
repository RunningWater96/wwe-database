const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
let count = 0;

// Parenthetical alternate names to clean up (individual wrestlers only, not tag teams)
const nameMap = {
  // Alternate ring names in parens
  "Theory (Austin Theory)": "Theory",
  "Stardust (Cody Rhodes alternate)": "Stardust",
  "Gregory Helms (post-Hurricane)": "Gregory Helms",
  "Io Shirai (NXT era)": "Io Shirai",
  "Nora Greenwald (Molly Holly full career)": "Molly Holly",
  "Lana (CJ Perry)": "Lana",
  "Cameron (Ariane Andrew)": "Cameron",
  "Diamond Dallas Page (DDP)": "Diamond Dallas Page",
  "Evan Bourne (Matt Sydal)": "Evan Bourne",
  "Curt Axel (Michael McGillicutty)": "Curt Axel",
  "Sarray (Sareee)": "Sarray",
  "Vader (Big Van Vader)": "Vader",
  "Mike Rotundo (IRS)": "Mike Rotundo",
  "Crush (Brian Adams)": "Crush",
  "Marc Mero (Johnny B. Badd)": "Marc Mero",
  "Ali (Adnan Punjabi)": "Ali",

  // Solo/descriptor parens on individual wrestlers
  "Ivar (solo)": "Ivar",
  "Primo Colon (solo)": "Primo Colon",
  "Jey Uso (solo)": "Jey Uso",
};

for (const [oldName, newName] of Object.entries(nameMap)) {
  const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`name: "${escaped}"`, 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, `name: "${newName}"`);
    count += matches.length;
    console.log(`  "${oldName}" -> "${newName}" (${matches.length})`);
  } else {
    console.log(`  WARNING: Not found: "${oldName}"`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal: ${count} parenthetical names cleaned up.`);
