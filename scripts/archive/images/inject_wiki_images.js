const fs = require("fs");

const wiki = JSON.parse(fs.readFileSync("wrestler_images_wiki.json", "utf8"));
let jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

// Find the closing }; of WRESTLER_IMAGES
const imgStart = jsx.indexOf("const WRESTLER_IMAGES = {");
const imgEnd = jsx.indexOf("};", imgStart);

// Check which IDs already exist
const section = jsx.substring(imgStart, imgEnd + 2);
let added = 0;

for (const [id, url] of Object.entries(wiki)) {
  const pattern = new RegExp(`^\\s*${id}:\\s*"`, "m");
  if (!pattern.test(section)) {
    const insertPoint = imgEnd;
    jsx = jsx.substring(0, insertPoint) + `  ${id}: "${url}",\n` + jsx.substring(insertPoint);
    added++;
  }
}

fs.writeFileSync("wwe-app/src/WWEDatabase.jsx", jsx);
console.log(`Done! Added ${added} Wikipedia images. Total new: ${Object.keys(wiki).length}`);
