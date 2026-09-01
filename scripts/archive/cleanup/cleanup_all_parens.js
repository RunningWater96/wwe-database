const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
let count = 0;

// Match all name: "Something (descriptor)" patterns
// But skip tag teams (those with & in the name or parenthetical containing &)
const regex = /name: "([^"]+?) \(([^)]+)\)"/g;
let match;
const replacements = [];

while ((match = regex.exec(content)) !== null) {
  const fullMatch = match[0];
  const mainName = match[1];
  const paren = match[2];
  const lineStart = content.lastIndexOf('\n', match.index) + 1;
  const lineEnd = content.indexOf('\n', match.index);
  const line = content.substring(lineStart, lineEnd);

  // Skip tag teams: name contains "&" or parenthetical contains "&"
  if (mainName.includes(' & ') || paren.includes(' & ')) continue;

  // Skip faction/stable entries
  if (paren === 'stable' || paren === 'as a faction' || paren === 'tag team' || paren === 'full stable') continue;

  // Skip tag team name formats like "APA (Bradshaw & Farooq)"
  if (paren.includes('&')) continue;

  // Skip entries where parenthetical IS the tag team members
  if (/,\s/.test(paren) && !paren.includes('née') && !paren.includes('era')) continue;

  // Skip if this is in the RELATIONSHIPS, EXTRA, or SUPPLEMENTAL data (not a wrestler card)
  // Check if line has id: field nearby — if not, it's relationship data
  if (!line.includes('id:') && !line.includes('name: "')) {
    // Could be a deeply nested field
    continue;
  }

  // Only process wrestler card entries (those with id: in the same line or within 5 lines before)
  const linesBefore = content.substring(Math.max(0, lineStart - 500), lineStart);
  const isWrestlerCard = line.includes('id:') ||
                         linesBefore.includes('id:') && !linesBefore.includes('tagTeams') &&
                         !linesBefore.includes('factions') && !linesBefore.includes('partners');

  // Also skip if this name appears inside tagTeams or factions arrays
  if (line.includes('tagTeams') || line.includes('factions') || line.includes('partners')) continue;

  replacements.push({
    old: fullMatch,
    new: `name: "${mainName}"`,
    paren: paren,
    mainName: mainName,
  });
}

// Apply replacements (from end to start to preserve positions)
// But first deduplicate (same old string could appear multiple times)
const seen = new Set();
for (const r of replacements) {
  if (seen.has(r.old)) continue;
  seen.add(r.old);

  const occurrences = (content.match(new RegExp(r.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;

  // Only replace in the wrestler data section (before EXTRA/RELATIONSHIPS)
  // Split content at the EXTRA data marker
  const extraIdx = content.indexOf('const EXTRA');
  if (extraIdx === -1) {
    // No EXTRA section, replace everywhere
    content = content.replace(new RegExp(r.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r.new);
    count++;
    console.log(`  "${r.mainName} (${r.paren})" -> "${r.mainName}"`);
  } else {
    // Only replace in the wrestler data section (before EXTRA)
    const before = content.substring(0, extraIdx);
    const after = content.substring(extraIdx);
    const escaped = r.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const beforeMatches = (before.match(new RegExp(escaped, 'g')) || []).length;
    if (beforeMatches > 0) {
      const newBefore = before.replace(new RegExp(escaped, 'g'), r.new);
      content = newBefore + after;
      count++;
      console.log(`  "${r.mainName} (${r.paren})" -> "${r.mainName}" (${beforeMatches} in wrestler data)`);
    }
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal: ${count} parenthetical names cleaned.`);
