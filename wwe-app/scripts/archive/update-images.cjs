const fs = require('fs');
const path = require('path');

const imagesPath = path.join(__dirname, '..', 'src', 'data', 'images.js');
let content = fs.readFileSync(imagesPath, 'utf8');

// 1. Replace empty string images with real URLs
const replacements = {
  624: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/07/DamonKemp_01302024br_4559_Profile--c79ef87e3ded72e27c3049e0c23b0c8b.png',
  647: 'https://www.wwe.com/f/styles/wwe_large/public/rd-talent/Stat/la_resistance_stat.png',
  654: 'https://www.wwe.com/f/styles/wwe_large/public/rd-talent/Stat/primo_epico_stat.png',
  695: 'https://upload.wikimedia.org/wikipedia/en/0/05/Beverly_Brothers.jpg',
  780: 'https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2020/10/20200914_HurtBusiness_FC--03c4f6ee12b08ea88e6acd2e5f42260a.jpg',
  800: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Strike_Force_%28professional_wrestling%29.jpg',
  962: 'https://www.wwe.com/f/styles/wwe_large/public/rd-talent/Stat/los_matadores_stat.png',
  1018: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aja_Kong_2019.jpg/330px-Aja_Kong_2019.jpg',
  1141: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Dean_Ho_-_Wrestling_Program_WWWF_n.16_1974.jpg',
  1148: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Mr._Saito.jpg',
  1342: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Damian_Demento.jpg',
};

for (const [id, url] of Object.entries(replacements)) {
  const emptyRe = new RegExp(`(\\s+${id}:\\s*)['"]\\s*['"]`);
  if (emptyRe.test(content)) {
    content = content.replace(emptyRe, `$1'${url}'`);
    console.log(`  Replaced empty → ${id}`);
  } else {
    console.log(`  Not found as empty: ${id}`);
  }
}

// 2. Add new image entries for wrestlers that have no entry at all
const newImages = {
  1629: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2026/02/Jordynn_Grace_PROFILE.png',
  1630: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/12/Danhausen_Profile--62af8d6287ee8e02b4b54e79f93f2f8e.png',
  1647: 'https://www.wwe.com/f/styles/wwe_1_1_540/public/2025/11/Evolve_JacksonDrake_04252025ak_0032_Profile.png',
  1648: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/07/jasper_troy_Profile--d08d7aa04a64429f40b626753450a0ff.png',
  1649: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2025/09/lainey_reed_Profile.png',
  1650: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2026/02/Royce_Keys_01312026_RoyalRumble_13236_Profile.png',
  1651: 'https://www.wwe.com/f/styles/talent_champion_lg/public/2025/12/blake_monroe_PROFILE_0.png',
  1654: 'https://www.wwe.com/f/styles/talent_champion_lg/public/all/2024/03/Adam_Pearce_PROFILE--b0602ea0b8fcf140d566010cfc7f9d42.png',
};

const closingPattern = '\n};\n\nexport default WRESTLER_IMAGES;';
const idx = content.lastIndexOf(closingPattern);
if (idx === -1) throw new Error('Could not find closing pattern');

let newEntries = '\n';
for (const [id, url] of Object.entries(newImages)) {
  // Only add if not already present
  if (!content.includes(`${id}:`)) {
    newEntries += `  ${id}: '${url}',\n`;
    console.log(`  Added new → ${id}`);
  } else {
    console.log(`  Already exists: ${id}`);
  }
}

content = content.slice(0, idx) + newEntries + content.slice(idx);
fs.writeFileSync(imagesPath, content, 'utf8');
console.log('\nDone!');
