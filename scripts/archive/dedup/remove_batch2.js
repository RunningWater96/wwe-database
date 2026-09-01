const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// All descriptor-based duplicate IDs to remove (plain entry exists for each)
const idsToRemove = [
  // Wrestler duplicates with descriptors
  621,  // Candice LeRae (main roster) — keep 265
  668,  // Carmelo Hayes (extended career) — keep 330
  677,  // Natalya (extended career) — keep 134
  682,  // Dijak (full career) — keep 332
  707,  // Rick Rude (career retrospective) — keep 14
  708,  // The Ultimate Warrior (career full arc) — keep 12
  713,  // Nikolai Volkoff (extended) — keep 142
  714,  // The Undertaker (Ministry era extended) — keep 33
  715,  // Al Snow (Head Gimmick) — keep 64
  721,  // Rikishi (solo wrestler) — keep 39
  722,  // Kurt Angle (Olympic gold career arc) — keep 36
  723,  // Chris Jericho (early WWE career) — keep 37
  730,  // Booker T (WWE run) — keep 81
  731,  // Goldust (Dustin Rhodes extended) — keep 27
  733,  // Trish Stratus (career retrospective) — keep 62
  734,  // Ivory (career full) — keep 124
  740,  // The Fabulous Moolah (career full) — keep 301
  741,  // Brock Lesnar (early career) — keep 79
  742,  // Eddie Guerrero (extended career arc) — keep 72
  743,  // Big Show (Paul Wight career arc) — keep 56
  746,  // Mark Henry (extended Hall of Pain) — keep 53
  755,  // Tyson Kidd (career retrospective) — keep 194
  758,  // Natalya (Hart Dynasty era) — keep 134
  762,  // Michelle McCool (career full) — keep 383
  763,  // Gail Kim (full WWE career) — keep 385
  764,  // Victoria (Lisa Marie Varon) — keep 304
  765,  // Stacy Keibler (career full) — keep 235
  766,  // Torrie Wilson (career full) — keep 234
  767,  // Dawn Marie (career) — keep 446
  768,  // Molly Holly (full career) — keep 303
  769,  // Jazz (Carlene Begnaud) — keep 305
  770,  // Mickie James (full career) — keep 177
  772,  // The Brian Kendrick (solo) — keep 173
  773,  // Paul Burchill (pirate gimmick) — keep 471
  776,  // Chyna (career retrospective) — keep 60
  789,  // Mustafa Ali (extended) — keep 970
  809,  // Savio Vega (extended) — keep 890
  811,  // Perry Saturn (WWE) — keep 70
  812,  // Dean Malenko (career) — keep 71
  815,  // Tazz (career) — keep 68
  816,  // Tommy Dreamer (career) — keep 241
  818,  // Sabu (career) — keep 243
  819,  // Raven (career) — keep 120
  820,  // Lance Storm (career) — keep 111
  821,  // Shelton Benjamin (extended career) — keep 83
  823,  // Jamie Noble (extended) — keep 252
  824,  // Billy Kidman (career) — keep 250
  826,  // Scotty 2 Hotty (extended) — keep 40
  827,  // Stevie Richards (career) — keep 248
  831,  // Jerry The King Lawler (career) — keep 168
  832,  // Jim Ross (extended broadcast career) — keep 231
  835,  // Bobby Heenan (career) — keep 145
  838,  // Sensational Sherri (career) — keep 995
  839,  // Sable (Rena Mero career) — keep 233

  // Additional Molly Holly duplicate
  448,  // Molly Holly (duplicate) — keep 303
];

let removed = 0;

for (const id of idsToRemove) {
  const lines = content.split('\n');
  let idLineIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    const inlineRegex = new RegExp(`\\bid: ${id},\\s*name:`);
    const multiRegex = new RegExp(`^\\s*id: ${id},$`);
    if (inlineRegex.test(lines[i]) || multiRegex.test(lines[i])) {
      idLineIdx = i;
      break;
    }
  }

  if (idLineIdx === -1) {
    console.log(`  WARNING: ID ${id} not found`);
    continue;
  }

  let startIdx = idLineIdx;
  if (lines[idLineIdx].trimStart().startsWith('{')) {
    startIdx = idLineIdx;
  } else {
    for (let j = idLineIdx; j >= Math.max(0, idLineIdx - 5); j--) {
      if (lines[j].trimStart().startsWith('{') || lines[j].trim() === '{') {
        startIdx = j;
        break;
      }
    }
  }

  let endIdx = idLineIdx;
  let braceCount = 0;
  let foundStart = false;
  for (let j = startIdx; j < lines.length; j++) {
    for (const ch of lines[j]) {
      if (ch === '{') { braceCount++; foundStart = true; }
      if (ch === '}') braceCount--;
    }
    if (foundStart && braceCount === 0) {
      endIdx = j;
      if (j + 1 < lines.length && lines[j + 1].trim() === '') {
        endIdx = j + 1;
      }
      break;
    }
  }

  const nameMatch = lines[idLineIdx].match(/name: "([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : 'unknown';
  console.log(`  Removing ID ${id}: "${name}" (lines ${startIdx + 1}-${endIdx + 1})`);

  lines.splice(startIdx, endIdx - startIdx + 1);
  content = lines.join('\n');
  removed++;
}

// Rename remaining unique descriptor entries (no plain duplicate)
const renames = {
  "Layla El (extended career)": "Layla El",
  "Corey Graves (career)": "Corey Graves",
  "Michael Cole (broadcast career)": "Michael Cole",
  "Jimmy Hart (extended career)": "Jimmy Hart",
  "Mr. Fuji (career)": "Mr. Fuji",
  "Mean Gene Okerlund (career)": "Mean Gene Okerlund",
};

let renamed = 0;
for (const [oldName, newName] of Object.entries(renames)) {
  const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`name: "${escaped}"`, 'g');
  if (regex.test(content)) {
    content = content.replace(regex, `name: "${newName}"`);
    renamed++;
    console.log(`  Renamed: "${oldName}" -> "${newName}"`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nRemoved ${removed} duplicate entries, renamed ${renamed} entries.`);
