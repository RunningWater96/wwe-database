import { readFileSync, writeFileSync } from 'fs';

// Mark these IDs as duplicates (keep → duplicate)
const MARK_AS_DUPES = [
  // Demolition: keep 15 (classic 2-man), mark 799
  { id: 799, coveredBy: 15 },
  // D'Lo Brown: keep 52, mark 1340 and 1437
  { id: 1340, coveredBy: 52 },
  { id: 1437, coveredBy: 52 },
  // The Bushwhackers: keep 150 (ring names), mark 694 (real names differ but same team)
  { id: 694, coveredBy: 150 },
  // The Viking Raiders: keep 272 (ring names), mark 779 (real names)
  { id: 779, coveredBy: 272 },
  // The Valiant Brothers: keep 359, mark 1140
  { id: 1140, coveredBy: 359 },
  // The Wild Samoans individuals: keep 360 (team), mark 1146 and 1147 (individual member entries of same team)
  { id: 1146, coveredBy: 360 },
  { id: 1147, coveredBy: 360 },
  // Odyssey Jones: keep 1287 (has real name), mark 623
  { id: 623, coveredBy: 1287 },
  // Cryme Tyme: keep 953 (has image), mark 652
  { id: 652, coveredBy: 953 },
  // The Vaudevillains: keep 655, mark 960
  { id: 960, coveredBy: 655 },
  // The Orient Express: keep 693, mark 886
  { id: 886, coveredBy: 693 },
  // Men on a Mission: keep 697, mark 1017
  { id: 1017, coveredBy: 697 },
  // Sean O'Haire: keep 1246, mark 1389
  { id: 1389, coveredBy: 1246 },
  // Je'Von Evans: keep 1398, mark 1439
  { id: 1439, coveredBy: 1398 },
];

const filePath = decodeURIComponent(
  new URL('../src/data/wrestlers.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
let content = readFileSync(filePath, 'utf-8');
let count = 0;

for (const { id, coveredBy } of MARK_AS_DUPES) {
  // Match: realName: "anything" or realName: 'anything'
  const pattern = new RegExp(
    `(id:\\s*${id},\\s*name:\\s*(?:"[^"]*"|'[^']*'),\\s*)realName:\\s*(?:"[^"]*"|'[^']*')`,
  );
  const match = content.match(pattern);
  if (match) {
    const replacement = `${match[1]}realName: "Already covered in id ${coveredBy}"`;
    content = content.replace(match[0], replacement);
    count++;
    console.log(`Marked ${id} as duplicate of ${coveredBy}`);
  } else {
    console.log(`WARNING: Could not find id ${id}`);
  }
}

writeFileSync(filePath, content, 'utf-8');
console.log(`\nMarked ${count} entries as duplicates`);
