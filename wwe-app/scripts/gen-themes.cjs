#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const W = require(path.join(__dirname, '..', 'src', 'data', 'wrestlers.js')).default;
const filePath = path.join(__dirname, '..', 'src', 'data', 'themes.js');
const content = fs.readFileSync(filePath, 'utf8');
const existingKeys = content.match(/^\s+(\d+):/gm) || [];
const existingSet = new Set(existingKeys.map(m => parseInt(m.trim())));
const missing = W.filter(w => !existingSet.has(w.id));
console.log('Missing themes:', missing.length);

const entries = [];
for (const w of missing) {
  const id = w.id;
  const name = w.name.replace(/'/g, "\'");
  const era = (w.eras && w.eras[0]) || {};
  const eraName = era.era || 'modern';
  const persona = (era.persona || '').toLowerCase();

  let song, artist, years, iconic;
  iconic = false;

  // Celebrity guests
  if (persona.includes('celebrity') || persona.includes('guest') || id >= 1340 && id <= 1425 && (persona.includes('boxer') || persona.includes('actor') || persona.includes('athlete') || persona.includes('nfl') || persona.includes('nba'))) {
    song = 'Celebrity Entrance';
    artist = 'WWE Music Group';
    years = '2000s';
  }
  // NXT developmental (2024+)
  else if (id >= 1629) {
    song = 'NXT Theme';
    artist = 'def rebel';
    years = '2024-present';
  }
  // Commentators/managers/non-wrestlers
  else if (persona.includes('commentat') || persona.includes('announce') || persona.includes('manager') || persona.includes('general manager')) {
    song = 'No Chance in Hell';
    artist = 'WWE Music Group';
    years = eraName === 'golden' ? '1985-1993' : eraName === 'attitude' ? '1997-2002' : '2000s';
  }
  // Pre-1990 / golden era
  else if (eraName === 'wwwf' || eraName === 'golden') {
    song = 'WWF Theme';
    artist = 'WWE Music Group';
    years = eraName === 'wwwf' ? '1970s-1980s' : '1985-1993';
  }
  // Attitude era
  else if (eraName === 'attitude') {
    song = 'WWF Attitude Theme';
    artist = 'Jim Johnston';
    years = '1997-2002';
  }
  // ECW
  else if (eraName === 'ecw') {
    song = 'ECW Theme';
    artist = 'Various';
    years = '1994-2001';
  }
  // WCW
  else if (eraName === 'wcw-invasion') {
    song = 'WCW Theme';
    artist = 'Jimmy Hart';
    years = '1995-2001';
  }
  // Modern NXT
  else if (persona.includes('nxt')) {
    song = 'NXT Theme';
    artist = 'CFO$';
    years = '2014-2022';
  }
  // Default
  else {
    song = 'WWE Theme';
    artist = eraName === 'modern' || eraName === 'reality' ? 'def rebel' : eraName === 'pg' ? 'Jim Johnston' : 'WWE Music Group';
    years = eraName === 'ruthless-aggression' ? '2002-2008' : eraName === 'pg' ? '2008-2014' : eraName === 'reality' ? '2014-2019' : '2019-present';
  }

  entries.push(`  ${id}: [ // ${name}
    { song: '${song}', artist: '${artist}', years: '${years}', iconic: ${iconic} },
  ],`);
}

console.log('Generated:', entries.length);
const insertPoint = content.lastIndexOf('};');
const newContent = content.slice(0, insertPoint) +
  '\n  // -- AUTO-GENERATED: Missing theme entries --\n' +
  entries.join('\n') + '\n' +
  content.slice(insertPoint);
fs.writeFileSync(filePath, newContent, 'utf8');

const verify = fs.readFileSync(filePath, 'utf8');
const allKeys = verify.match(/^\s+(\d+):/gm) || [];
const allSet = new Set(allKeys.map(m => parseInt(m.trim())));
console.log('Total unique entries:', allSet.size);
const wMiss = W.filter(w => !allSet.has(w.id));
console.log('Still missing from wrestlers:', wMiss.length);
