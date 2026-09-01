const fs = require('fs');
const src = fs.readFileSync('src/data/wrestlers.js', 'utf8');
const re = /id:\s*(\d+),\s*\n\s*name:\s*["'`]([^"'`]+)["'`],\s*\n\s*realName:\s*["'`](Already covered[^"'`]*)["'`]/g;
let m;
const dupes = [];
while ((m = re.exec(src)) !== null) {
  dupes.push({ id: Number(m[1]), name: m[2], note: m[3] });
}
dupes.forEach(d => console.log(d.id + '|' + d.name + '|' + d.note));
console.log('\nTotal duplicates:', dupes.length);
