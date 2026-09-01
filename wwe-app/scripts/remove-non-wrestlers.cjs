const fs = require('fs');
const path = require('path');

// IDs to remove - all confirmed non-wrestlers
const IDS_TO_REMOVE = new Set([
  // Celebrity guests
  1543, // Bob Uecker
  1545, // Arnold Schwarzenegger
  1546, // Snoop Dogg
  1547, // Kid Rock
  1548, // William Shatner
  1549, // Cyndi Lauper
  1551, // Ozzy Osbourne
  1344, // Mike Tyson
  1544, // Donald Trump

  // Pure managers
  147,  // Paul Bearer
  836,  // Jimmy Hart
  834,  // Harvey Wippleman
  1038, // Captain Lou Albano
  1062, // Paul Ellering
  1040, // Grand Wizard (first entry)
  1601, // Grand Wizard (duplicate entry)
  1244, // Daivari
  1518, // Colonel Robert Parker
  1582, // Ranjin Singh
  1595, // Alex Abrahantes
  1615, // The Jackyl

  // Pure valets
  927,  // Miss Elizabeth
  988,  // Scarlett Bordeaux
  1237, // Cherry
  1495, // Missy Hyatt
  1503, // Precious
  1570, // Hiroko
  1577, // Ariel
  1584, // Kimberly Page
  1617, // Beulah McGillicutty

  // Pure commentators/announcers
  236,  // Mean Gene Okerlund
  833,  // Howard Finkel
  828,  // Renee Young
  1278, // Samantha Irvin
  171,  // Lilian Garcia
  1434, // Josh Mathews
  1435, // Todd Grisham
  1566, // Joel Gertner

  // Authority figures / other non-wrestlers
  1554, // Jack Tunney
  1569, // Vince Russo
  1538, // Vince McMahon Sr.
  1563, // Diana Hart
  1298, // Ava
  232,  // Sunny
  466,  // Vickie Guerrero
  1436, // Mike Adamle
  1504, // Tony Schiavone (commentator)
]);

const dataDir = path.join(__dirname, '..', 'src', 'data');
const files = [
  'wrestlers.js',
  'extra.js',
  'relationships.js',
  'bio.js',
  'personal.js',
  'images.js',
  'wiki.js',
  'brands.js',
  'gender.js',
  'events.js',
];

let totalRemoved = 0;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) continue;

  const src = fs.readFileSync(filePath, 'utf8');
  const lines = src.split('\n');
  const newLines = [];
  let removing = false;
  let braceDepth = 0;
  let removedInFile = 0;
  let isWrestlersFile = file === 'wrestlers.js';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (isWrestlersFile) {
      // wrestlers.js uses array-of-objects format: { id: NNN, ... }
      // Look for lines starting an object with a matching id
      const idMatch = line.match(/^\s*\{\s*id:\s*(\d+)/);
      if (idMatch && IDS_TO_REMOVE.has(parseInt(idMatch[1]))) {
        // Skip this entire object entry
        removing = true;
        braceDepth = 0;
        for (const ch of line) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }
        if (braceDepth <= 0) {
          removing = false;
          removedInFile++;
          // Also skip trailing comma line or blank line
          if (i + 1 < lines.length && lines[i + 1].trim() === '') i++;
        }
        continue;
      }
      if (removing) {
        for (const ch of line) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }
        if (braceDepth <= 0) {
          removing = false;
          removedInFile++;
          if (i + 1 < lines.length && lines[i + 1].trim() === '') i++;
        }
        continue;
      }
    } else {
      // Other files use key-value format: NNN: { ... } or NNN: '...'
      const keyMatch = line.match(/^\s*(\d+):\s/);
      if (keyMatch && IDS_TO_REMOVE.has(parseInt(keyMatch[1]))) {
        // Check if this is a single-line entry
        const openBraces = (line.match(/\{/g) || []).length + (line.match(/\[/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length + (line.match(/\]/g) || []).length;
        // Also check for backtick template literals
        const hasOpenBacktick = (line.match(/`/g) || []).length % 2 !== 0;

        if (openBraces <= closeBraces && !hasOpenBacktick) {
          // Single-line entry
          removedInFile++;
          continue;
        } else {
          // Multi-line entry
          removing = true;
          braceDepth = openBraces - closeBraces;
          removedInFile++;
          continue;
        }
      }
      if (removing) {
        const openBraces = (line.match(/\{/g) || []).length + (line.match(/\[/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length + (line.match(/\]/g) || []).length;
        braceDepth += openBraces - closeBraces;
        if (braceDepth <= 0) {
          removing = false;
          // Skip trailing blank line
          if (i + 1 < lines.length && lines[i + 1].trim() === '') i++;
        }
        continue;
      }

      // Also handle comment lines like "// Paul Heyman (ID 167)"
      const commentMatch = line.match(/^\s*\/\/.*\(ID\s+(\d+)\)/);
      if (commentMatch && IDS_TO_REMOVE.has(parseInt(commentMatch[1]))) {
        continue;
      }
    }

    newLines.push(line);
  }

  if (removedInFile > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    console.log(`${file}: removed ${removedInFile} entries`);
    totalRemoved += removedInFile;
  } else {
    console.log(`${file}: no entries to remove`);
  }
}

console.log(`\nTotal entries removed: ${totalRemoved}`);
