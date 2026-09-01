import W from '../src/data/wrestlers.js';

// Find entries with the same base name (ignoring parenthetical suffixes)
const byName = {};
for (const w of W) {
  if (w.realName && w.realName.startsWith('Already covered')) continue;
  const baseName = w.name.replace(/\s*\(.*\)$/, '').trim();
  if (!byName[baseName]) byName[baseName] = [];
  byName[baseName].push(w);
}

const dupes = Object.entries(byName).filter(([, arr]) => arr.length > 1);
console.log(`Found ${dupes.length} sets of potential duplicates:\n`);
for (const [name, entries] of dupes) {
  console.log(`"${name}":`);
  for (const e of entries) {
    console.log(`  ${e.id}: ${e.name} — ${e.realName}`);
  }
  console.log();
}
