const fs = require('fs');
const content = fs.readFileSync('wwe-app/src/WWEDatabase.jsx', 'utf8');
const extraIdx = content.indexOf('const EXTRA');
const wd = content.substring(0, extraIdx);
const regex = /name: "([^"]+?) \(([^)]+)\)"/g;
let m;
while ((m = regex.exec(wd)) !== null) {
  const name = m[1];
  const p = m[2];
  if (name.includes(' & ') || p.includes('&') || p.includes(',')) continue;
  if (p === 'stable' || p === 'tag team' || p === 'full stable' || p === 'as a faction') continue;
  console.log(m[0]);
}
