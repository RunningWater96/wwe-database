const fs = require('fs');
const path = require('path');

const IDS_TO_REMOVE = new Set([
  1543, 1545, 1546, 1547, 1548, 1549, 1551, 1344, 1544, // celebrities
  147, 836, 834, 1038, 1062, 1040, 1601, 1244, 1518, 1582, 1595, 1615, // managers
  927, 988, 1237, 1495, 1503, 1570, 1577, 1584, 1617, // valets
  236, 833, 828, 1278, 171, 1434, 1435, 1566, // commentators
  1554, 1569, 1538, 1563, 1298, 232, 466, 1436, 1504, // authority/other
]);

const filePath = path.join(__dirname, '..', 'src', 'data', 'wrestlers.js');
const src = fs.readFileSync(filePath, 'utf8');
const lines = src.split('\n');
const newLines = [];
let skipping = false;
let braceDepth = 0;
let removed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (skipping) {
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }
    if (braceDepth <= 0) {
      skipping = false;
      // Skip trailing comma on same line, and blank line after
      if (i + 1 < lines.length && lines[i + 1].trim() === '') i++;
    }
    continue;
  }

  // Check if this line contains "id: NNN" for a removable ID
  const idMatch = line.match(/\bid:\s*(\d+)\b/);
  if (idMatch && IDS_TO_REMOVE.has(parseInt(idMatch[1]))) {
    // Need to also remove the opening "{" line before this if it exists
    // Look back to find the opening brace
    let startIdx = newLines.length - 1;
    while (startIdx >= 0 && newLines[startIdx].trim() === '') startIdx--;
    if (startIdx >= 0 && newLines[startIdx].trim() === '{') {
      newLines.splice(startIdx); // remove the opening brace line and any blank lines after it
    }

    // Now count braces from the opening { through current line
    braceDepth = 1; // for the opening brace we removed
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }
    if (braceDepth <= 0) {
      // Single-line after opening brace - already done
      removed++;
      if (i + 1 < lines.length && lines[i + 1].trim() === '') i++;
    } else {
      skipping = true;
      removed++;
    }
    continue;
  }

  newLines.push(line);
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log(`Removed ${removed} entries from wrestlers.js`);

// Verify
const newSrc = fs.readFileSync(filePath, 'utf8');
const remaining = [...IDS_TO_REMOVE].filter(id => {
  const re = new RegExp('\\bid:\\s*' + id + '\\b');
  return re.test(newSrc);
});
if (remaining.length > 0) {
  console.log('WARNING: Still present:', remaining);
} else {
  console.log('All non-wrestler IDs successfully removed');
}
const count = (newSrc.match(/\bid:\s*\d+/g) || []).length;
console.log('Entries remaining:', count);
