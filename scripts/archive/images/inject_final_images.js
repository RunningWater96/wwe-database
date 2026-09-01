const fs = require("fs");
const extra = JSON.parse(fs.readFileSync("wrestler_images_final.json", "utf8"));
let jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

const imgStart = jsx.indexOf("const WRESTLER_IMAGES = {");
const imgEnd = jsx.indexOf("};", imgStart);
const section = jsx.substring(imgStart, imgEnd + 2);
let added = 0;

for (const [id, url] of Object.entries(extra)) {
  const pattern = new RegExp(`^\\s*${id}:\\s*"`, "m");
  if (!pattern.test(section)) {
    jsx = jsx.substring(0, imgEnd) + `  ${id}: "${url}",\n` + jsx.substring(imgEnd);
    added++;
  }
}

fs.writeFileSync("wwe-app/src/WWEDatabase.jsx", jsx);
console.log(`Added ${added} final images.`);
