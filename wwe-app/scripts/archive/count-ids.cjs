const fs = require('fs');
const src = fs.readFileSync('src/data/wrestlers.js', 'utf8');
const ids = new Set();
const re = /id:\s*(\d+)/g;
let m;
while ((m = re.exec(src)) !== null) ids.add(parseInt(m[1]));
console.log('Total unique wrestler IDs:', ids.size);
