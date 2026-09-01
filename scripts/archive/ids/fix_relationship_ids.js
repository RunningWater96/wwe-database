const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Find the RELATIONSHIPS section
const relStart = content.indexOf('const RELATIONSHIPS = {');
const relEnd = content.indexOf('\nconst WRESTLERS_MERGED');

if (relStart === -1 || relEnd === -1) {
  console.log("ERROR: Could not find RELATIONSHIPS or WRESTLERS_MERGED sections");
  process.exit(1);
}

let relSection = content.substring(relStart, relEnd);

// The wrong key → correct key mapping (from the mismatch report)
// Format: [wrongKey, correctKey, wrestlerName]
const remaps = [
  // Batch 1 mismatches - sequential numbering → actual IDs
  [6, 5, "Randy Savage"],       // 6 had both Andre (correct) and Randy (wrong) — Randy should be 5
  [7, 12, "Ultimate Warrior"],
  [8, 10, "Jake Roberts"],
  [10, 7, "Roddy Piper"],
  [11, 9, "Ted DiBiase"],
  [14, 45, "Bret Hart"],
  [15, 34, "Shawn Michaels"],
  [16, 33, "Undertaker"],
  [17, 31, "Stone Cold Steve Austin"],
  [18, 32, "The Rock"],
  [19, 30, "Triple H"],
  [20, 43, "Mick Foley"],
  [21, 44, "Kane"],
  [22, 35, "Chris Jericho"],
  [23, 36, "Kurt Angle"],
  [24, 79, "Brock Lesnar"],
  [25, 75, "John Cena"],
  [26, 76, "Batista"],
  [27, 77, "Randy Orton"],
  [28, 47, "Edge"],
  [29, 72, "Eddie Guerrero"],
  [30, 78, "Rey Mysterio"],
  [31, 85, "CM Punk"],
  [36, 91, "Daniel Bryan"],
  [37, 92, "Seth Rollins"],
  [38, 93, "Roman Reigns"],
  [39, 94, "Dean Ambrose"],
  [40, 95, "Bray Wyatt"],
  [41, 98, "AJ Styles"],
  [43, 96, "Kevin Owens"],
  [44, 97, "Sami Zayn"],
  [45, 99, "Finn Balor"],
  [46, 100, "Drew McIntyre"],
  [47, 101, "Becky Lynch"],
  [48, 102, "Charlotte Flair"],
  [49, 103, "Sasha Banks"],
  [50, 135, "Bayley"],
  [51, 262, "Asuka"],
  [54, 129, "The Usos"],
  [55, 130, "Big E"],
  [57, 133, "Bianca Belair"],
  [58, 140, "Rhea Ripley"],
  [59, 139, "Gunther"],
  [62, 128, "Cody Rhodes"],
  [63, 110, "Ric Flair"],
  [65, 109, "Goldberg"],
  [66, 321, "Sting"],
];

// Strategy: We can't do sequential replacements because keys swap around (e.g., 10→7 and 7→12).
// Instead, we'll use temporary placeholders, then replace those with final keys.

let count = 0;

// Step 1: Replace wrong keys with unique temporary placeholders
for (const [wrongKey, correctKey, name] of remaps) {
  // Match the key at the start of a line in the RELATIONSHIPS section
  // Pattern: "  N: { // Name" or "  N: {"
  const patterns = [
    `  ${wrongKey}: { // ${name}`,
    `  ${wrongKey}: {// ${name}`,
  ];

  let found = false;
  for (const pattern of patterns) {
    if (relSection.includes(pattern)) {
      relSection = relSection.replace(pattern, `  __TEMP_${correctKey}__: { // ${name}`);
      found = true;
      count++;
      console.log(`  ${name}: key ${wrongKey} → ${correctKey}`);
      break;
    }
  }

  if (!found) {
    // Try a more flexible match
    const regex = new RegExp(`(^|\\n)(  ${wrongKey}: \\{[^\\n]*${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`);
    const match = relSection.match(regex);
    if (match) {
      const oldStr = match[2];
      const newStr = oldStr.replace(`${wrongKey}: {`, `__TEMP_${correctKey}__: {`);
      relSection = relSection.replace(oldStr, newStr);
      count++;
      console.log(`  ${name}: key ${wrongKey} → ${correctKey} (flex match)`);
    } else {
      console.log(`  WARNING: Could not find key ${wrongKey} for "${name}"`);
    }
  }
}

// Step 2: Replace temporary placeholders with actual keys
for (const [, correctKey,] of remaps) {
  const placeholder = `__TEMP_${correctKey}__`;
  if (relSection.includes(placeholder)) {
    relSection = relSection.replace(placeholder, `${correctKey}`);
  }
}

// Verify no temp placeholders remain
const remaining = (relSection.match(/__TEMP_/g) || []).length;
if (remaining > 0) {
  console.log(`\nWARNING: ${remaining} temporary placeholders still remaining!`);
}

content = content.substring(0, relStart) + relSection + content.substring(relEnd);
fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nFixed ${count} ID mismatches in RELATIONSHIPS section.`);
