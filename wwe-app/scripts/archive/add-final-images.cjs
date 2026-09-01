const fs = require('fs');
const path = require('path');

const imagesPath = path.join(__dirname, '..', 'src', 'data', 'images.js');
let content = fs.readFileSync(imagesPath, 'utf8');

const newImages = {
  1658: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2025/11/1m5LIoGl_400x400.jpg',
  1659: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2025/08/jax-presley-february-15-a.webp',
  1661: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2025/03/Hu3axIBu_400x400.jpg',
  1662: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2026/02/Rayne-Leverkusen-2-1.png',
  1664: 'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/cyrus.png',
  1665: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2025/11/Mike-Cunningham-.png',
  1666: 'https://www.onlineworldofwrestling.com/wp-content/uploads/2024/11/9nlP8mVJ_400x400.jpg',
};

const closingPattern = '\n};\n\nexport default WRESTLER_IMAGES;';
const idx = content.lastIndexOf(closingPattern);
if (idx === -1) throw new Error('Could not find closing pattern');

let newEntries = '\n';
let added = 0;
for (const [id, url] of Object.entries(newImages)) {
  if (!content.includes(`${id}:`)) {
    newEntries += `  ${id}: '${url}',\n`;
    added++;
    console.log(`  Added ${id}`);
  } else {
    console.log(`  Already exists: ${id}`);
  }
}

content = content.slice(0, idx) + newEntries + content.slice(idx);
fs.writeFileSync(imagesPath, content, 'utf8');
console.log(`\nDone! Added ${added} images.`);
