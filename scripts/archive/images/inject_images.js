const fs = require("fs");

// Read the generated image mapping
const imageMapping = fs.readFileSync("wrestler_images.js", "utf8");

// Read the JSX file
let jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

// Replace the empty WRESTLER_IMAGES with the full mapping
jsx = jsx.replace(
  "const WRESTLER_IMAGES = {};",
  imageMapping.replace(/;$/, ";")
);

// Write back
fs.writeFileSync("wwe-app/src/WWEDatabase.jsx", jsx);

console.log("Done! Injected image mapping into WWEDatabase.jsx");
