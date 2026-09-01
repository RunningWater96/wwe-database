#!/usr/bin/env node
/**
 * Fix corrupted compact-line entries in wrestlers.js where
 * name: 'X', realName: 'Y' got mangled by quote conversion.
 *
 * The pattern on these lines is:
 *   name: 'ActualName\', realName: \'ActualRealName'
 *
 * Fix: use double quotes for name and realName on compact lines.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'wrestlers.js');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let fixCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Match compact single-line entries with the corruption pattern
  // name: 'X\', realName: \'Y'  →  name: "X", realName: "Y"
  if (line.includes("name: '") && line.includes("\\', realName: \\'")) {
    let fixed = line;

    // Fix: name: 'X\', realName: \'Y' → name: "X", realName: "Y"
    fixed = fixed.replace(
      /name: '([^\\]*?)\\', realName: \\'([^\\]*?)'/g,
      (match, name, realName) => {
        return `name: "${name}", realName: "${realName}"`;
      }
    );

    if (fixed !== line) {
      lines[i] = fixed;
      fixCount++;
    }
  }
}

content = lines.join('\n');
fs.writeFileSync(filePath, content, 'utf8');
console.log(`Fixed ${fixCount} corrupted lines.`);
