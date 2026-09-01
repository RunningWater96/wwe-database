const fs = require('fs');
const content = fs.readFileSync('c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx', 'utf8');

const lines = content.split('\n');
const results = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Find lines with count > 1 that don't already have reigns:
  const countMatch = line.match(/count:\s*(\d+)/g);
  if (!countMatch) continue;
  if (line.includes('reigns:')) continue; // already has reigns

  for (const cm of countMatch) {
    const num = parseInt(cm.replace('count: ', '').replace('count:', ''));
    if (num > 1) {
      // Find the wrestler name - look backwards for the name field
      let name = "Unknown";
      for (let j = i; j >= Math.max(0, i - 10); j--) {
        const nameMatch = lines[j].match(/name:\s*"([^"]+)"/);
        if (nameMatch) {
          name = nameMatch[1];
          break;
        }
      }
      const titleMatch = line.match(/title:\s*"([^"]+)"/);
      const title = titleMatch ? titleMatch[1] : "Unknown";
      results.push({ line: i + 1, name, title, count: num });
    }
  }
}

results.forEach(r => console.log(`Line ${r.line}: ${r.name} | ${r.title} | ${r.count}x`));
console.log(`\nTotal: ${results.length} multi-reign entries still need reigns arrays`);
