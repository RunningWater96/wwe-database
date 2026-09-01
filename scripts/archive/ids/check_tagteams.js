const fs = require('fs');
const c = fs.readFileSync('wwe-app/src/WWEDatabase.jsx', 'utf8');

// Get the WRESTLERS array portion (before const EXTRA)
const extraIdx = c.indexOf('const EXTRA');
const wrestlerData = c.substring(0, extraIdx);

// Find all wrestler entries
const wrestlers = [];
// Inline format: { id: N, name: "...", realName: "..."
const inlineRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*realName:\s*"([^"]*)"/g;
let m;
while ((m = inlineRegex.exec(wrestlerData)) !== null) {
  wrestlers.push({ id: parseInt(m[1]), name: m[2], realName: m[3] });
}

// Multi-line format
const lines = wrestlerData.split('\n');
for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/^\s*id:\s*(\d+),$/);
  if (idMatch && i + 1 < lines.length) {
    const nameMatch = lines[i+1].match(/^\s*name:\s*"([^"]+)",$/);
    if (nameMatch && i + 2 < lines.length) {
      const realMatch = lines[i+2].match(/^\s*realName:\s*"([^"]*)"/);
      if (realMatch) {
        const id = parseInt(idMatch[1]);
        if (!wrestlers.find(w => w.id === id)) {
          wrestlers.push({ id, name: nameMatch[1], realName: realMatch[1] });
        }
      }
    }
  }
}

// Replicate isTagTeam logic
const groupNames = /^(Men on a Mission|The Highlanders|La Resistance|The Basham Brothers|Hit Row|The Bushwhackers|The Rockers|Demolition|Legion of Doom|The Hart Foundation|The Headbangers|The Godwinns|The Headshrinkers|Natural Disasters|The Smoking Gunns|The Body Donnas|The New Blackjacks|Too Much|The Mean Street Posse|Right to Censor|3-Minute Warning|The Gymini|Deuce and Domino|Cryme Tyme|The Colons|The Usos|The Authors of Pain|Heavy Machinery|The Viking Raiders|The Hurt Business|Retribution|Alpha Academy|Los Lotharios|Maximum Male Models|Pretty Deadly|The Creed Brothers|Legado del Fantasma|Gallus|Chase University|The Family|Judgment Day|Imperium|Spirit Squad|Too Cool|Los Guerreros|World's Greatest Tag Team|Kai En Tai|The Mexicools|The Heart Throbs|Grizzled Young Veterans|London and Kendrick|The Quebecers|Money Inc\.|La Résistance|The Bar|RKBro|Rated-RKO|Undisputed Era|New Day|D-Generation X|DX|nWo|The Shield|Evolution|The Corporation|The Ministry|The Brood|Nation of Domination|Damage CTRL|The Bloodline|The New Nexus|The Nexus|The Corre|Sanity|War Games)$/i;

function isTagTeam(w) {
  if (w.name.includes(' & ') || w.realName.includes(' & ')) return true;
  if (w.realName.toLowerCase().startsWith('already covered') || w.realName.toLowerCase().startsWith('various')) return true;
  const commaCount = (w.realName.match(/,/g) || []).length;
  if (commaCount >= 2) return true;
  if (groupNames.test(w.name)) return true;
  if (/\(.*,.*,/.test(w.name)) return true;
  return false;
}

// Find entries that ARE tag teams (caught by filter)
const caught = wrestlers.filter(w => isTagTeam(w));
console.log(`Tag teams caught by filter: ${caught.length}`);

// Find entries that LOOK like tag teams but aren't caught
const notCaught = wrestlers.filter(w => {
  if (isTagTeam(w)) return false;
  // Check for group indicators
  const indicators = [
    w.realName.includes(' and '),
    w.name.includes(' / '),
    /tag team|stable|faction|reunion/i.test(w.name),
    // Two people in realName (one comma = possible two people)
    (w.realName.match(/,/g) || []).length === 1 && !w.realName.includes('née') && !w.realName.includes('Jr') && !w.realName.includes('Sr') && !w.realName.includes('II'),
  ];
  return indicators.some(Boolean);
});

if (notCaught.length > 0) {
  console.log('\nPotential tag teams NOT caught by filter:');
  for (const w of notCaught) {
    console.log(`  ID ${w.id}: "${w.name}" (realName: "${w.realName}")`);
  }
} else {
  console.log('\nAll tag team entries appear to be caught by the filter.');
}

// Also show what IS being filtered
console.log('\nCurrently filtered as tag teams:');
for (const w of caught) {
  console.log(`  ID ${w.id}: "${w.name}"`);
}
