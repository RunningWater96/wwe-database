// Auto-convert all single-reign championships to include reigns array
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'wwe-app', 'src', 'WWEDatabase.jsx');
let content = fs.readFileSync(filePath, 'utf8');

let count = 0;

// Match championship entries with count: 1 that don't already have reigns
// Pattern: { title: "...", count: 1, firstReign: "...", notable: "..." }
content = content.replace(
  /\{\s*title:\s*"([^"]+)",\s*count:\s*1,\s*firstReign:\s*"([^"]+)",\s*notable:\s*"([^"]*)"(\s*)\}/g,
  (match, title, firstReign, notable, trailing) => {
    // Skip if already has reigns or if firstReign is N/A
    if (match.includes('reigns:') || firstReign === 'N/A') return match;
    count++;
    return `{ title: "${title}", count: 1, reigns: [{ date: "${firstReign}" }], firstReign: "${firstReign}", notable: "${notable}"${trailing}}`;
  }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Auto-converted ${count} single-reign championship entries.`);
