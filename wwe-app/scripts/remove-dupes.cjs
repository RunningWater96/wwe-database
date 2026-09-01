// Find all "Already covered" IDs and remove them from all data files
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

// Find all duplicate IDs in wrestlers.js
const wSrc = fs.readFileSync(path.join(dataDir, 'wrestlers.js'), 'utf8');
const dupeIds = new Set();
const re = /id:\s*(\d+),[\s\S]*?realName:\s*["'`]Already covered/g;
let m;
while ((m = re.exec(wSrc)) !== null) {
  dupeIds.add(Number(m[1]));
}
console.log('Duplicate IDs to remove:', [...dupeIds].sort((a,b) => a-b).join(', '));
console.log('Total:', dupeIds.size);

// Remove from wrestlers.js - these are array entries with { id: N, ... },
function removeFromWrestlers(src, ids) {
  let result = src;
  for (const id of ids) {
    // Match the entire object entry: { id: N, ... },  or  { id: N, ... }
    // They can be single-line or multi-line
    // Single line: { id: 623, name: "...", realName: "Already covered...", ... },
    const singleLine = new RegExp('\\s*\\{\\s*id:\\s*' + id + ',\\s*name:.*?\\},?\\n', 'g');
    // Multi-line: starts with { or {  id: N, ends with },
    const multiLine = new RegExp('\\s*\\{\\n\\s*id:\\s*' + id + ',[\\s\\S]*?\\},?\\n', 'g');

    const before = result.length;
    result = result.replace(singleLine, '\n');
    if (result.length === before) {
      result = result.replace(multiLine, '\n');
    }
    if (result.length === before) {
      console.log('  WARNING: Could not remove id ' + id + ' from wrestlers.js');
    }
  }
  return result;
}

// Remove from keyed object files (extra.js, relationships.js, etc.)
function removeFromKeyedFile(src, ids) {
  let result = src;
  for (const id of ids) {
    // Match: \n  ID: { ... }, or \n  ID: { ... \n  }, (multiline)
    // Single line entry
    const singleLine = new RegExp('\\n\\s*' + id + ':\\s*\\{[^\\n]*\\},?(?=\\n)', 'g');
    // Multiline entry: ID: { ... \n  },
    const multiLine = new RegExp('\\n\\s*' + id + ':\\s*\\{[\\s\\S]*?\\n\\s*\\},?(?=\\n)', 'g');
    // Also handle string values like images: 1340: 'url',
    const stringLine = new RegExp('\\n\\s*' + id + ':\\s*[\'"][^\\n]*,?(?=\\n)', 'g');

    const before = result.length;
    result = result.replace(multiLine, '');
    if (result.length === before) {
      result = result.replace(singleLine, '');
    }
    if (result.length === before) {
      result = result.replace(stringLine, '');
    }
  }
  return result;
}

const idsArray = [...dupeIds];

// Process wrestlers.js
let newWSrc = removeFromWrestlers(wSrc, idsArray);
fs.writeFileSync(path.join(dataDir, 'wrestlers.js'), newWSrc, 'utf8');
console.log('Cleaned wrestlers.js');

// Process other data files
const files = ['extra.js', 'relationships.js', 'images.js', 'bio.js', 'personal.js', 'wiki.js', 'gender.js', 'brands.js'];
for (const file of files) {
  const filePath = path.join(dataDir, file);
  const src = fs.readFileSync(filePath, 'utf8');
  const cleaned = removeFromKeyedFile(src, idsArray);
  if (cleaned.length !== src.length) {
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log('Cleaned ' + file + ' (removed ' + (src.length - cleaned.length) + ' chars)');
  } else {
    console.log('No duplicates found in ' + file);
  }
}
