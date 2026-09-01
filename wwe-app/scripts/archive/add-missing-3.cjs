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

// Add to wrestlers.js
console.log('Adding Dean Ho, Mr. Saito, and Damian Demento to wrestlers.js...');
insertBefore(path.join(dataDir, 'wrestlers.js'), '\n];\n\nexport default WRESTLERS;', `
  { id: 1141, name: "Dean Ho", realName: "Dean Ho", eras: [{ era: "golden", character: "Dean Ho — WWWF Tag Team Champion", persona: "A Hawaiian-born wrestler who was one of the first prominent Asian-Pacific Islander stars in the WWWF during the early 1970s. Known for his speed and aerial ability in an era dominated by heavyweight brawlers. Teamed with Tony Garea to win the WWWF Tag Team Championship in 1974." }], championships: [{ title: "WWWF Tag Team Championship", count: 1, reigns: [{ date: "May 1974" }], firstReign: "May 1974", notable: "Won with Tony Garea" }], totalTitleReigns: 1, hallOfFame: null },
  { id: 1148, name: "Mr. Saito", realName: "Masanori Saito", eras: [{ era: "golden", character: "Mr. Saito — Japanese Heel Tag Specialist", persona: "A Japanese martial artist who teamed with Mr. Fuji in the WWWF/WWF to form one of the most feared heel tag teams. Won the WWF Tag Team Championship twice alongside Mr. Fuji. A legitimate martial artist whose stiff working style made him a credible and feared competitor. Also won the AWA World Heavyweight Championship in 1990." }], championships: [{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "1978" }, { date: "1981" }], firstReign: "1978", notable: "Won twice with Mr. Fuji" }, { title: "AWA World Heavyweight Championship", count: 1, reigns: [{ date: "1990" }], firstReign: "1990", notable: "Won in the AWA" }], totalTitleReigns: 3, hallOfFame: null },
  { id: 1342, name: "Damian Demento", realName: "Phil Theis", eras: [{ era: "new-gen", character: "Damian Demento — The Deranged One", persona: "A deranged character who talked to voices in his head and displayed wild-eyed intensity. His WWF run was brief (1992-1993) but he holds a unique place in wrestling history as The Undertaker's opponent on the very first episode of Monday Night Raw on January 11, 1993." }], championships: [], totalTitleReigns: 0, hallOfFame: null },`);

console.log('Done! Added 3 wrestlers with existing supplemental data.');
