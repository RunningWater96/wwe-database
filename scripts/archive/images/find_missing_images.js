const fs = require("fs");

const jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

// Extract all wrestler IDs and names
const wrestlers = [];
const nameRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let match;
while ((match = nameRegex.exec(jsx)) !== null) {
  wrestlers.push({ id: parseInt(match[1]), name: match[2] });
}

// Extract existing image IDs
const imageIds = new Set();
const imgRegex = /^\s*(\d+):\s*"/gm;
const imgSection = jsx.match(/const WRESTLER_IMAGES = \{[\s\S]*?\n\};/);
if (imgSection) {
  let m;
  while ((m = imgRegex.exec(imgSection[0])) !== null) {
    imageIds.add(parseInt(m[1]));
  }
}

// Filter out tag teams
const soloMissing = wrestlers.filter(w => {
  if (w.name.includes(" & ") || w.name.includes(" and ")) return false;
  return !imageIds.has(w.id);
});

console.log(`Total wrestlers: ${wrestlers.length}`);
console.log(`Have images: ${imageIds.size}`);
console.log(`Missing (solo): ${soloMissing.length}\n`);
console.log("Missing wrestlers:");
soloMissing.forEach(w => console.log(`  ${w.id}: ${w.name}`));
