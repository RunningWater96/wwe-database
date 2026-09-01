const fs = require("fs");

const extra = JSON.parse(fs.readFileSync("wrestler_images_extra.json", "utf8"));
let jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

// For each extra image, add it to WRESTLER_IMAGES if not already present
for (const [id, url] of Object.entries(extra)) {
  // Check if this ID already exists in WRESTLER_IMAGES
  const pattern = new RegExp(`^\\s*${id}:\\s*"`, "m");
  const inSection = jsx.indexOf("const WRESTLER_IMAGES = {");
  const sectionEnd = jsx.indexOf("};", inSection);
  const section = jsx.substring(inSection, sectionEnd + 2);

  if (!pattern.test(section)) {
    // Add before the closing };
    const insertPoint = jsx.lastIndexOf("};", sectionEnd + 1);
    // Find the actual closing of WRESTLER_IMAGES
    const imgStart = jsx.indexOf("const WRESTLER_IMAGES = {");
    const imgEnd = jsx.indexOf("};", imgStart);

    jsx = jsx.substring(0, imgEnd) + `  ${id}: "${url}",\n` + jsx.substring(imgEnd);
    console.log(`Added ID ${id}`);
  } else {
    console.log(`ID ${id} already exists, skipping`);
  }
}

fs.writeFileSync("wwe-app/src/WWEDatabase.jsx", jsx);
console.log("\nDone! Extra images injected.");
