const fs = require('fs');
const path = require('path');

const imagesPath = path.join(__dirname, '..', 'src', 'data', 'images.js');
let content = fs.readFileSync(imagesPath, 'utf8');

const images = {
  // Batch 2 results (from agent)
  1631: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2023/07/Bronco_Nima_PROFILE--202bbd77e17b0c41967e8a2a66870412.png',
  1632: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2025/12/Dion-Lennox_03182025MP_0010_Profile.png',
  1633: 'https://www.wwe.com/f/styles/wwe_1_1_540/public/2026/03/Elio-Lefleur_02242026MP_2480_Profile.png',
  1634: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/04/Saquon-Shugars_03182025MP_0042_Profile--d4690787c0d7db157dcc8f564372eb41.png',
  1635: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/04/Osiris-Griffin_03182025MP_0016_Profile--c415f9efddd3b3880c05ad369582f19d.png',
  1637: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2025/11/Kendal_Grey_PROFILE.png',
  1638: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/06/Niko_Vance_Profile--102515c7110144fe39841aaf2fa4082c.png',
  1643: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2025/11/JC_Mateo_PROFILE.png',
  1644: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2026/02/Keanu_Carver_12042025MM_20156_Profile.png',
  1645: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/05/Kale-Dixon_05132025MP_0059_Profile--f8349dadf9f2f5aacef0372e91a3116a.png',
};

// Insert new entries before the closing
const closingPattern = '\n};\n\nexport default WRESTLER_IMAGES;';
const idx = content.lastIndexOf(closingPattern);
if (idx === -1) throw new Error('Could not find closing pattern');

let newEntries = '\n';
for (const [id, url] of Object.entries(images)) {
  newEntries += `  ${id}: '${url}',\n`;
}

content = content.slice(0, idx) + newEntries + content.slice(idx);
fs.writeFileSync(imagesPath, content, 'utf8');
console.log(`Added ${Object.keys(images).length} image entries.`);
