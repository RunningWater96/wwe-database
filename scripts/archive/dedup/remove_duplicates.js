const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// IDs to remove (the less comprehensive duplicate in each pair)
const idsToRemove = [
  375,  // Albert (keep 896)
  394,  // Tensai (keep 896 - same person as Albert)
  376,  // Viscera (keep 114)
  317,  // Mr. Kennedy (keep 575)
  883,  // Haku (keep 440)
  511,  // Brodus Clay (Funkasaurus) (keep 475)
  417,  // Butch (Pete Dunne) (keep 527)
  919,  // Pete Dunne (keep 527)
  922,  // Riddle (keep 861)
  561,  // Diesel (keep 24)
  560,  // Razor Ramon (keep 23)
  28,   // Sycho Sid (keep 972)
  65,   // Hardcore Holly (keep 936)
  992,  // Elias (keep 213)
  501,  // Piper Niven (keep 874, which has correct realName)
];

let removed = 0;

for (const id of idsToRemove) {
  // Match patterns like:
  //   { id: 375, name: "..." ... },
  // or multi-line:
  //   {
  //     id: 375,
  //     name: "..."
  //     ...
  //   },

  // Strategy: find the line with `id: <number>,` then find the enclosing object boundaries
  const lines = content.split('\n');
  let idLineIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    // Match both `{ id: N,` (inline) and `    id: N,` (multi-line)
    const regex = new RegExp(`\\bid: ${id},\\s*name:`);
    if (regex.test(lines[i])) {
      idLineIdx = i;
      break;
    }
    // Also check for id on its own line followed by name on next line
    const idOnlyRegex = new RegExp(`^\\s*id: ${id},$`);
    if (idOnlyRegex.test(lines[i])) {
      idLineIdx = i;
      break;
    }
  }

  if (idLineIdx === -1) {
    console.log(`  WARNING: ID ${id} not found`);
    continue;
  }

  // Find the start of this entry (opening { or preceding line with {)
  let startIdx = idLineIdx;

  // Check if this is an inline entry (starts with { on same line)
  if (lines[idLineIdx].trimStart().startsWith('{')) {
    startIdx = idLineIdx;
  } else {
    // Multi-line format - look backwards for the opening {
    for (let j = idLineIdx; j >= Math.max(0, idLineIdx - 5); j--) {
      if (lines[j].trimStart().startsWith('{') || lines[j].trim() === '{') {
        startIdx = j;
        break;
      }
    }
  }

  // Find the end of this entry (closing },)
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
      // Check if next line is a comma on its own or if this line ends with },
      if (j + 1 < lines.length && lines[j + 1].trim() === '') {
        endIdx = j + 1; // include blank line after
      }
      break;
    }
  }

  const name = lines[idLineIdx].match(/name: "([^"]+)"/)?.[1] || 'unknown';
  console.log(`  Removing ID ${id}: "${name}" (lines ${startIdx + 1}-${endIdx + 1})`);

  // Remove the lines
  lines.splice(startIdx, endIdx - startIdx + 1);
  content = lines.join('\n');
  removed++;
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nRemoved ${removed} duplicate entries.`);
