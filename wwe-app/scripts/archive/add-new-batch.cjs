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
  { id: 1654, name: "Adam Pearce", realName: "Adam Pearce", eras: [{ era: "modern", character: "Adam Pearce — WWE General Manager", persona: "A five-time NWA World Heavyweight Champion who transitioned from the ring to the boardroom. After a respected career on the independent circuit, Pearce joined WWE as a producer and trainer before becoming the on-screen General Manager of Raw. Known for his no-nonsense authority and occasionally being dragged back into physical confrontations, including an unwilling Gauntlet Match win that earned him a Universal Championship shot against Roman Reigns at Royal Rumble 2021." }], championships: [{ title: "NWA World Heavyweight Championship", count: 5, reigns: [{ date: "2007" }, { date: "2008" }, { date: "2009" }, { date: "2010" }, { date: "2011" }], firstReign: "2007", notable: "Five-time NWA World Champion before joining WWE" }], totalTitleReigns: 5, hallOfFame: null },
  { id: 1655, name: "AJ Winkler", realName: "AJ Winkler", eras: [{ era: "modern", character: "AJ Winkler — NXT Developmental", persona: "A powerhouse competitor in WWE's NXT developmental system. Signed to NXT in 2025, Winkler has been working his way through the Performance Center and NXT Level Up tapings, building his craft as a hard-hitting physical wrestler." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1656, name: "Danilo Anfibio", realName: "Danilo Anfibio", eras: [{ era: "modern", character: "Danilo Anfibio — NXT Developmental", persona: "An Italian-American wrestler in NXT's developmental system. Originally from West Paterson, New Jersey, Anfibio brings a flashy, high-energy style influenced by Italian and American wrestling traditions. Working through NXT Level Up and live events to develop his character and in-ring skills." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1657, name: "Daphanie LaShaunn", realName: "Daphanie LaShaunn", eras: [{ era: "modern", character: "Daphanie LaShaunn — NXT Women's Division", persona: "A Brazilian-born competitor in NXT's women's division. Originally from Aracaju, Brazil, LaShaunn brings a unique international flair to the developmental roster. Working through NXT Level Up tapings and live events as she develops her wrestling style." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1658, name: "Dorian Van Dux", realName: "Dorian Van Dux", eras: [{ era: "modern", character: "Dorian Van Dux — NXT Competitor", persona: "A Belgian powerhouse in NXT standing 5'11\\\" and weighing 243 pounds. Originally from Mons, Belgium, Van Dux has built a strong reputation on the European independent scene before signing with WWE. His combination of size, strength, and European wrestling fundamentals has earned him high praise from fans and peers alike." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1659, name: "Jax Presley", realName: "Jax Presley", eras: [{ era: "modern", character: "Jax Presley — EVOLVE / NXT Developmental", persona: "A 6'4\\\", 247-pound powerhouse from Middletown, Maryland competing in WWE's EVOLVE developmental brand. One of the larger athletes in the developmental system, Presley's imposing physical frame and raw athleticism make him a project with significant upside potential." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1660, name: "Paredyse", realName: "Paredyse", eras: [{ era: "modern", character: "Paredyse — NXT Competitor", persona: "A veteran of the independent wrestling scene who signed with WWE and competes in NXT. Originally from Woodbridge, Virginia, Paredyse brings years of indie experience and a well-developed character to the developmental roster. His charismatic and flamboyant persona sets him apart in NXT." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1661, name: "PJ Vasa", realName: "PJ Vasa", eras: [{ era: "modern", character: "PJ Vasa — EVOLVE Women's Division", persona: "A competitor in WWE's EVOLVE women's division. Originally from Sumner, Washington, Vasa is working through the early stages of her career in WWE's developmental pipeline, honing her skills at the Performance Center and appearing on EVOLVE events." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1662, name: "Rayne Leverkusen", realName: "Rayne Leverkusen", eras: [{ era: "modern", character: "Rayne Leverkusen — NXT Competitor", persona: "A British wrestler from London, England competing in NXT. Leverkusen has been making waves in the developmental system with a style influenced by the UK independent wrestling scene. His ring name pays homage to the German football club, reflecting his European roots." }], championships: [], totalTitleReigns: 0, hallOfFame: null },
  { id: 1663, name: "Shady Elnahas", realName: "Shady Elnahas", eras: [{ era: "modern", character: "Shady Elnahas — NXT Competitor", persona: "A 6'4\\\", 220-pound Egyptian wrestler from Alexandria, Egypt competing in NXT. One of the first Egyptian wrestlers signed to WWE, Elnahas represents WWE's growing international talent pipeline. His height, athleticism, and unique cultural background give him standout potential in the developmental system." }], championships: [], totalTitleReigns: 0, hallOfFame: null },`);

// 2. relationships.js
console.log('Adding to relationships.js...');
insertBefore(path.join(dataDir, 'relationships.js'), '\n};\n\nexport default RELATIONSHIPS;', `
  134: { alternateNames: ['Nattie', 'Nattie Neidhart'], allies: ['Tyson Kidd', 'Beth Phoenix', 'Tamina'], rivals: ['Becky Lynch', 'Ronda Rousey', 'Charlotte Flair', 'Lacey Evans'] },
  1654: { alternateNames: [], allies: [], rivals: [] },
  1655: { alternateNames: [], allies: [], rivals: [] },
  1656: { alternateNames: [], allies: [], rivals: [] },
  1657: { alternateNames: [], allies: [], rivals: [] },
  1658: { alternateNames: [], allies: [], rivals: [] },
  1659: { alternateNames: [], allies: [], rivals: [] },
  1660: { alternateNames: [], allies: [], rivals: [] },
  1661: { alternateNames: [], allies: [], rivals: [] },
  1662: { alternateNames: [], allies: [], rivals: [] },
  1663: { alternateNames: [], allies: [], rivals: [] },`);

// 3. bio.js
console.log('Adding to bio.js...');
insertBefore(path.join(dataDir, 'bio.js'), '\n};\n\nexport default WRESTLER_BIO;', `
  1654: { hometown: 'Chicago, Illinois', birthday: '1978-06-24', height: "6'2\\"", weight: '241 lbs' },
  1655: { hometown: 'Hereford, Maryland', birthday: '1992-02-04', height: "6'1\\"", weight: '229 lbs' },
  1656: { hometown: 'West Paterson, New Jersey', birthday: '1987-10-29', height: "5'9\\"", weight: '174 lbs' },
  1657: { hometown: 'Aracaju, Sergipe, Brazil', birthday: '1994-05-09', height: "5'5\\"", weight: '154 lbs' },
  1658: { hometown: 'Mons, Belgium', birthday: '1996-05-07', height: "5'11\\"", weight: '243 lbs' },
  1659: { hometown: 'Middletown, Maryland', birthday: '1999-10-20', height: "6'4\\"", weight: '247 lbs' },
  1660: { hometown: 'Woodbridge, Virginia', birthday: '1982-03-16', height: "5'10\\"", weight: '176 lbs' },
  1661: { hometown: 'Sumner, Washington', birthday: null, height: "5'11\\"", weight: null },
  1662: { hometown: 'London, England', birthday: null, height: null, weight: null },
  1663: { hometown: 'Alexandria, Egypt', birthday: '1998-03-27', height: "6'4\\"", weight: '220 lbs' },`);

// 4. extra.js
console.log('Adding to extra.js...');
insertBefore(path.join(dataDir, 'extra.js'), '\n};\n\nexport default EXTRA;', `
  1654: { injuries: [], tagTeams: [], factions: [] },
  1655: { injuries: [], tagTeams: [], factions: [] },
  1656: { injuries: [], tagTeams: [], factions: [] },
  1657: { injuries: [], tagTeams: [], factions: [] },
  1658: { injuries: [], tagTeams: [], factions: [] },
  1659: { injuries: [], tagTeams: [], factions: [] },
  1660: { injuries: [], tagTeams: [], factions: [] },
  1661: { injuries: [], tagTeams: [], factions: [] },
  1662: { injuries: [], tagTeams: [], factions: [] },
  1663: { injuries: [], tagTeams: [], factions: [] },`);

// 5. personal.js
console.log('Adding to personal.js...');
insertBefore(path.join(dataDir, 'personal.js'), '\n};\n\nexport default PERSONAL;', `
  1654: { spouses: [], children: [], facts: ['Five-time NWA World Heavyweight Champion', 'NWA Hall of Fame inductee', 'Joined WWE as a producer in 2018', 'Became on-screen GM of Raw in 2023', 'Signature move: Piledriver'] },
  1655: { spouses: [], children: [], facts: ['Signed to NXT developmental in 2025', 'From Hereford, Maryland'] },
  1656: { spouses: [], children: [], facts: ['Italian-American wrestler from New Jersey', 'Signed to NXT developmental'] },
  1657: { spouses: [], children: [], facts: ['Originally from Aracaju, Brazil', 'Signed to NXT developmental'] },
  1658: { spouses: [], children: [], facts: ['Belgian wrestler from Mons', 'Experienced European independent circuit veteran', 'Signed to NXT'] },
  1659: { spouses: [], children: [], facts: ['From Middletown, Maryland', 'Competes on WWE EVOLVE brand'] },
  1660: { spouses: [], children: [], facts: ['Veteran of the independent wrestling scene', 'From Woodbridge, Virginia', 'Competes in NXT'] },
  1661: { spouses: [], children: [], facts: ['From Sumner, Washington', 'Competes on WWE EVOLVE brand'] },
  1662: { spouses: [], children: [], facts: ['British wrestler from London', 'Competes in NXT'] },
  1663: { spouses: [], children: [], facts: ['One of the first Egyptian wrestlers signed to WWE', 'From Alexandria, Egypt', 'Competes in NXT'] },`);

// 6. wiki.js
console.log('Adding to wiki.js...');
insertBefore(path.join(dataDir, 'wiki.js'), '\n};\n\nexport default WIKI_CONTENT;', `
  1654: {
    profile: \`Five-time NWA World Heavyweight Champion turned WWE General Manager. Adam Pearce built an acclaimed career on the independent circuit before joining WWE behind the scenes as a producer in 2018. He transitioned to an on-screen authority figure, becoming the GM of Monday Night Raw. Despite his management role, he has occasionally been pulled back into physical confrontations, including winning a Gauntlet Match to earn a Universal Championship opportunity against Roman Reigns.\`,
    career: \`Pearce made his name on the NWA circuit, winning the World Heavyweight Championship five times between 2007 and 2011 — a modern record for that title. After his in-ring career wound down, he joined WWE as a backstage producer and trainer before being given the on-screen GM role. He's known for being a fair but firm authority figure who occasionally gets physically involved when pushed too far.\`,
  },
  1655: {
    profile: \`NXT developmental wrestler from Hereford, Maryland.\`,
    career: \`Signed to WWE's NXT brand in 2025, AJ Winkler is working through the Performance Center developmental system. He appears on NXT Level Up tapings as he builds his skills and character.\`,
  },
  1656: {
    profile: \`NXT developmental wrestler originally from West Paterson, New Jersey.\`,
    career: \`Danilo Anfibio signed with WWE's NXT brand and has been developing his craft at the Performance Center. He brings an Italian-American flair to his character.\`,
  },
  1657: {
    profile: \`NXT women's division competitor originally from Aracaju, Brazil.\`,
    career: \`Daphanie LaShaunn signed with WWE and competes in the NXT women's division. She brings an international perspective from her Brazilian roots.\`,
  },
  1658: {
    profile: \`Belgian powerhouse competing in NXT.\`,
    career: \`Dorian Van Dux hails from Mons, Belgium and built a strong reputation on the European independent scene before signing with WWE. His combination of size and European wrestling fundamentals has earned him praise in NXT.\`,
  },
  1659: {
    profile: \`Imposing developmental talent on the WWE EVOLVE brand.\`,
    career: \`Jax Presley is a 6'4", 247-pound powerhouse from Middletown, Maryland competing in WWE's EVOLVE developmental brand. His size and raw athleticism make him a project with significant upside.\`,
  },
  1660: {
    profile: \`Veteran independent wrestler now competing in NXT.\`,
    career: \`Paredyse brings years of indie circuit experience to WWE's NXT brand. Originally from Woodbridge, Virginia, his charismatic persona and polished in-ring work set him apart from other developmental talents.\`,
  },
  1661: {
    profile: \`Competitor in WWE's EVOLVE women's division.\`,
    career: \`PJ Vasa is from Sumner, Washington and competes on WWE's EVOLVE brand. She is in the early stages of her wrestling career, developing at the Performance Center.\`,
  },
  1662: {
    profile: \`British wrestler competing in NXT.\`,
    career: \`Rayne Leverkusen is a London-born wrestler in WWE's NXT developmental system. His ring name pays homage to the German football club, reflecting his European roots. He brings UK independent scene influences to his style.\`,
  },
  1663: {
    profile: \`Egyptian wrestler competing in NXT — one of the first from Egypt to sign with WWE.\`,
    career: \`Shady Elnahas is a 6'4" wrestler from Alexandria, Egypt signed to NXT. He represents WWE's expanding international talent pipeline and brings a unique cultural perspective to the developmental roster.\`,
  },`);

// 7. brands.js
console.log('Adding to brands.js...');
insertBefore(path.join(dataDir, 'brands.js'), '\n};\n\nexport default WRESTLER_BRANDS;', `
  1654: { currentBrand: 'Raw', brandHistory: [{ brand: 'Raw', from: '2020', to: null }] },
  1655: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1656: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1657: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1658: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1659: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1660: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1661: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1662: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1663: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },`);

// 8. gender.js
console.log('Adding to gender.js...');
insertBefore(path.join(dataDir, 'gender.js'), '\n};\n\nexport default WRESTLER_GENDER;', `
  1657: 'female', // Daphanie LaShaunn
  1661: 'female', // PJ Vasa`);

console.log('\nDone! Added 10 new entries (IDs 1654-1663) + Nattie alt name for Natalya.');
