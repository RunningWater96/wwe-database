const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// IDs to remove — these are less complete "retrospective" / "extended" / "era" duplicates
// In each case, the original entry (lower ID) has more comprehensive championship data
const idsToRemove = [
  // Retrospective batch (616-642) — originals have better championship data
  616,  // Cesaro (singles career) — keep ID 104 (5 reigns)
  617,  // Becky Lynch (The Man era) — keep ID 101 (7 reigns)
  619,  // Shayna Baszler (extended) — keep ID 260
  626,  // Sami Zayn (Honorary Uce era) — keep ID 97 (4 reigns)
  627,  // Cody Rhodes (American Nightmare arc) — keep ID 128
  628,  // Seth Rollins (Visionary era) — keep ID 92 (13 reigns!)
  629,  // Gunther (IC record run) — keep ID 139
  630,  // Randy Orton (career retrospective) — keep ID 77 (18 reigns)
  631,  // John Cena (career retrospective) — keep ID 75 (25 reigns)
  632,  // Batista (career retrospective) — keep ID 76 (3 eras, 6 reigns)
  633,  // CM Punk (Best in the World era) — keep ID 85 (9 reigns with full dates)
  634,  // AJ Styles (career retrospective) — keep ID 98 (6 reigns)
  635,  // Kevin Owens (career retrospective) — keep ID 106
  636,  // Finn Balor (career retrospective) — keep ID 99 (Finn Bálor, 3 reigns)
  637,  // Roman Reigns (Tribal Chief retrospective) — keep ID 93 (6 reigns)
  638,  // Jey Uso (solo career) — keep ID 851
  639,  // Shinsuke Nakamura (career retrospective) — keep ID 339
  641,  // Sheamus (career retrospective) — keep ID 86 (10 reigns)
  642,  // Bianca Belair (career retrospective) — keep ID 133

  // Other duplicates with descriptor names
  661,  // Otis (Alpha Academy era) — keep ID 853
  662,  // Mojo Rawley (extended) — keep ID 342
  664,  // Killian Dain (main roster) — keep ID 606
  666,  // Xia Li (extended Tian Sha) — keep ID 266
  725,  // Shawn Michaels (was DX leader/Showstopper, renamed) — keep ID 34
  726,  // Goldberg (WWE run) — keep ID 109
  727,  // Jeff Hardy (extended solo) — keep ID 49 (9 reigns)
  728,  // Matt Hardy (V1 era) — keep ID 50

  // Stub redirect entry
  259,  // Io Shirai ("Already covered as Iyo Sky" — redirect stub)
];

let removed = 0;

for (const id of idsToRemove) {
  const lines = content.split('\n');
  let idLineIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    // Match inline: { id: N, name: or multi-line: id: N,
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

  // Find the start of this entry
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

  // Find the end of this entry
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

// Also rename Io Shirai (NXT Women's Champion) -> Io Shirai
const ioCount = (content.match(/name: "Io Shirai \(NXT Women's Champion\)"/g) || []).length;
if (ioCount > 0) {
  content = content.replace(/name: "Io Shirai \(NXT Women's Champion\)"/, 'name: "Io Shirai"');
  console.log(`  Renamed "Io Shirai (NXT Women's Champion)" -> "Io Shirai"`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nRemoved ${removed} duplicate entries.`);
