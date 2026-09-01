const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

const idsToRemove = [1655, 1656, 1657];

const files = ['extra.js', 'relationships.js', 'bio.js', 'personal.js', 'wiki.js', 'brands.js', 'gender.js'];

// Remove from keyed data files
for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const id of idsToRemove) {
    // Match the full entry line(s) for this ID
    // Simple single-line entries
    const singleLineRe = new RegExp(`\\s*${id}:.*?,\\s*\\/\\/.*?\\n`, 'g');
    if (singleLineRe.test(content)) {
      content = content.replace(singleLineRe, '\n');
      changed = true;
      continue;
    }
    // Try multi-line block: "  ID: { ... }," or "  ID: { ... },\n"
    const blockRe = new RegExp(`\\n\\s*${id}:\\s*\\{[^}]*\\},?\\n`, 'g');
    if (blockRe.test(content)) {
      content = content.replace(blockRe, '\n');
      changed = true;
      continue;
    }
    // Try wiki.js multi-line with template literals
    const wikiRe = new RegExp(`\\n\\s*${id}:\\s*\\{[\\s\\S]*?\\n\\s*\\},?\\n`, 'g');
    if (wikiRe.test(content)) {
      content = content.replace(wikiRe, '\n');
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  Cleaned ${file}`);
  } else {
    console.log(`  No matches in ${file}`);
  }
}

// Remove from wrestlers.js (array format)
const wrestlersPath = path.join(dataDir, 'wrestlers.js');
let wContent = fs.readFileSync(wrestlersPath, 'utf8');
for (const id of idsToRemove) {
  const re = new RegExp(`\\n\\s*\\{ id: ${id},.*?\\},?\\n`, 'g');
  if (re.test(wContent)) {
    wContent = wContent.replace(re, '\n');
    console.log(`  Removed ${id} from wrestlers.js`);
  }
}
fs.writeFileSync(wrestlersPath, wContent, 'utf8');

console.log('\nDone! Removed IDs 1655 (AJ Winkler), 1656 (Danilo Anfibio), 1657 (Daphanie LaShaunn).');
