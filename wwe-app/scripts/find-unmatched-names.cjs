/**
 * find-unmatched-names.cjs
 * Finds all ally/rival names in relationships.js that don't match any wrestler name or alternateName.
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

// Helper: extract default export object from a .js file
function loadJSDefault(filePath) {
  let src = fs.readFileSync(filePath, 'utf-8');
  // Remove 'export default' and trailing semicolons
  src = src.replace(/^export\s+default\s+/, '');
  src = src.replace(/;\s*$/, '');
  // Remove single-line comments but preserve strings
  // Use a simple approach: eval with const
  // Actually safer: use a Function constructor
  // First strip import/export lines
  src = src.replace(/^(import|export)\s+.*/gm, '');
  return eval('(' + src + ')');
}

function loadJSArray(filePath) {
  let src = fs.readFileSync(filePath, 'utf-8');
  src = src.replace(/^const\s+\w+\s*=\s*/, '');
  src = src.replace(/;\s*export\s+default\s+\w+;\s*$/, '');
  src = src.replace(/^(import|export)\s+.*/gm, '');
  return eval('(' + src + ')');
}

// Load wrestlers.js (array)
const wrestlersSrc = fs.readFileSync(path.join(dataDir, 'wrestlers.js'), 'utf-8');
// Extract the array portion
const wrestlersMatch = wrestlersSrc.match(/const\s+WRESTLERS\s*=\s*(\[[\s\S]*\]);\s*export/);
let WRESTLERS;
if (wrestlersMatch) {
  WRESTLERS = eval('(' + wrestlersMatch[1] + ')');
} else {
  console.error('Could not parse wrestlers.js');
  process.exit(1);
}

// Load relationships.js (object)
const relSrc = fs.readFileSync(path.join(dataDir, 'relationships.js'), 'utf-8');
const relMatch = relSrc.match(/const\s+RELATIONSHIPS\s*=\s*(\{[\s\S]*\});\s*export/);
let RELATIONSHIPS;
if (relMatch) {
  RELATIONSHIPS = eval('(' + relMatch[1] + ')');
} else {
  console.error('Could not parse relationships.js');
  process.exit(1);
}

// Build name set: all wrestler names + alternateNames
const nameSet = new Set();
const nameToId = new Map(); // for lookup

for (const w of WRESTLERS) {
  nameSet.add(w.name);
  nameToId.set(w.name, w.id);
  if (w.alternateNames) {
    for (const alt of w.alternateNames) {
      nameSet.add(alt);
    }
  }
}

// Also add alternateNames from relationships.js
for (const [id, rel] of Object.entries(RELATIONSHIPS)) {
  if (rel.alternateNames) {
    for (const alt of rel.alternateNames) {
      nameSet.add(alt);
    }
  }
}

// Build wrestler ID -> name map
const idToName = new Map();
for (const w of WRESTLERS) {
  idToName.set(w.id, w.name);
}

// Strip parenthetical suffixes from names for matching
// e.g., "Hulk Hogan (Mega Powers)" → "Hulk Hogan"
function stripParens(name) {
  return name.replace(/\s*\(.*?\)\s*$/, '').trim();
}

// Check if a name matches (with or without parenthetical)
function isMatched(rawName) {
  const cleaned = stripParens(rawName);
  return nameSet.has(rawName) || nameSet.has(cleaned);
}

// Find all unmatched names
const unmatched = [];

for (const [id, rel] of Object.entries(RELATIONSHIPS)) {
  const wrestlerName = idToName.get(Number(id)) || `ID ${id}`;

  for (const type of ['allies', 'rivals']) {
    if (!rel[type]) continue;
    for (const name of rel[type]) {
      if (!isMatched(name)) {
        unmatched.push({
          referencedBy: wrestlerName,
          referenceId: Number(id),
          type,
          rawName: name,
          cleanName: stripParens(name),
        });
      }
    }
  }
}

// Deduplicate by cleanName and categorize
const byCleanName = new Map();
for (const u of unmatched) {
  const key = u.cleanName;
  if (!byCleanName.has(key)) {
    byCleanName.set(key, []);
  }
  byCleanName.get(key).push(u);
}

console.log(`\n=== UNMATCHED NAMES IN RELATIONSHIPS.JS ===`);
console.log(`Total unmatched references: ${unmatched.length}`);
console.log(`Unique unmatched names: ${byCleanName.size}\n`);

// Sort by frequency (most referenced first)
const sorted = [...byCleanName.entries()].sort((a, b) => b[1].length - a[1].length);

for (const [cleanName, refs] of sorted) {
  const types = refs.map(r => r.type).join('/');
  const referencedBy = refs.map(r => `${r.referencedBy} (${r.type})`).join(', ');
  console.log(`"${cleanName}" — referenced ${refs.length}x`);
  console.log(`  By: ${referencedBy}`);

  // Try to find close matches
  const lower = cleanName.toLowerCase();
  const closeMatches = [];
  for (const n of nameSet) {
    const nLower = n.toLowerCase();
    if (nLower === lower && n !== cleanName) {
      closeMatches.push(n + ' [case mismatch]');
    } else if (nLower.includes(lower) || lower.includes(nLower)) {
      if (n.length > 3 && cleanName.length > 3) {
        closeMatches.push(n);
      }
    }
  }
  if (closeMatches.length > 0) {
    console.log(`  Possible matches: ${closeMatches.join(', ')}`);
  }
  console.log();
}
