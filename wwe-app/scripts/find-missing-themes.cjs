const fs = require('fs');
const wc = fs.readFileSync('./src/data/wrestlers.js', 'utf8');
const wids = [...wc.matchAll(/^\s+id:\s+(\d+)/gm)].map(m => parseInt(m[1]));
const tc = fs.readFileSync('./src/data/themes.js', 'utf8');
const tids = new Set([...tc.matchAll(/^\s+(\d+):\s+\[/gm)].map(m => parseInt(m[1])));
const missing = wids.filter(id => !tids.has(id));
console.log('Total wrestlers:', wids.length);
console.log('Total themes:', tids.size);
console.log('Missing:', missing.length);
// Get names for missing IDs
const nameMap = {};
const blocks = wc.split(/\n\s*\{[\s\S]*?id:\s+/g);
for (const block of blocks) {
  const idMatch = block.match(/^(\d+)/);
  const nameMatch = block.match(/name:\s*'([^']+)'/);
  if (idMatch && nameMatch) nameMap[parseInt(idMatch[1])] = nameMatch[1];
}
// Also try inline format
const inlineMatches = [...wc.matchAll(/id:\s+(\d+),\s+name:\s+'([^']+)'/g)];
for (const m of inlineMatches) nameMap[parseInt(m[1])] = m[2];
missing.forEach(id => console.log(id + '|' + (nameMap[id] || 'UNKNOWN')));
