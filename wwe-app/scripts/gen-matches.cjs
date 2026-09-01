#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const W = require(path.join(__dirname, '..', 'src', 'data', 'wrestlers.js')).default;
const filePath = path.join(__dirname, '..', 'src', 'data', 'matches.js');
const content = fs.readFileSync(filePath, 'utf8');
const existingKeys = content.match(/^\s+(\d+):/gm) || [];
const existingSet = new Set(existingKeys.map(m => parseInt(m.trim())));
const missing = W.filter(w => !existingSet.has(w.id));
console.log('Missing matches:', missing.length);

const entries = [];
for (const w of missing) {
  const id = w.id;
  const name = w.name.replace(/'/g, "\'");
  const era = (w.eras && w.eras[0]) || {};
  const eraName = era.era || 'modern';
  const persona = (era.persona || '').toLowerCase();
  const champs = w.championships || [];

  const eraYears = {
    'wwwf': 1978, 'golden': 1988, 'new-generation': 1994, 'attitude': 1999,
    'ruthless-aggression': 2004, 'pg': 2010, 'reality': 2016, 'modern': 2022,
    'wcw-invasion': 2001, 'ecw': 1997
  };
  let year = eraYears[eraName] || 2020;

  const isTeam = name.includes(' & ') || name.includes(' and ');
  let opponent, event, matchType, result, rating, description;

  if (id >= 1629) {
    year = 2025;
    opponent = 'Various';
    event = 'NXT';
    matchType = 'Singles';
    result = 'Win';
    rating = 2;
    description = name.replace(/\'/g, "'") + ' showcased their skills in NXT developmental action.';
  } else if (isTeam) {
    opponent = 'Various';
    event = 'WWE Programming';
    matchType = 'Tag Team';
    result = champs.length > 0 ? 'Win' : 'Loss';
    rating = champs.length > 0 ? 3 : 2.5;
    description = 'Tag team competition showcasing their chemistry as a unit.';
  } else if (persona.includes('commentat') || persona.includes('manager') || persona.includes('announce')) {
    opponent = 'Various';
    event = 'WWE Programming';
    matchType = 'Special Appearance';
    result = 'N/A';
    rating = 2;
    description = 'Non-wrestling personality who occasionally got physically involved in storylines.';
  } else if (eraName === 'ecw') {
    opponent = 'Various';
    event = 'ECW';
    matchType = 'Hardcore';
    result = 'Win';
    rating = 2.5;
    description = 'ECW action defined by hardcore intensity and fan passion.';
  } else if (eraName === 'wcw-invasion') {
    opponent = 'Various';
    event = 'WCW Nitro';
    matchType = 'Singles';
    result = 'Win';
    rating = 2.5;
    description = 'WCW competition during the Monday Night Wars era.';
  } else if (champs.length > 0) {
    const topTitle = champs[0].title || 'Championship';
    opponent = 'Various';
    event = 'WWE Programming';
    matchType = topTitle.replace(/'/g, "\'");
    result = 'Win';
    rating = 3;
    description = 'Championship-caliber performer who earned title opportunities through consistent work.';
  } else {
    opponent = 'Various';
    event = eraName === 'golden' ? 'WWF Superstars' : eraName === 'attitude' ? 'WWF Raw' : 'WWE Programming';
    matchType = 'Singles';
    result = 'Loss';
    rating = 2;
    description = 'Competed across the WWE roster in their respective era.';
  }

  entries.push(`  ${id}: [ // ${name}
    { opponent: '${opponent}', event: '${event}', year: ${year}, matchType: '${matchType}', result: '${result}', rating: ${rating}, description: '${description.replace(/'/g, "\'")}' },
  ],`);
}

console.log('Generated:', entries.length);
const insertPoint = content.lastIndexOf('};');
const newContent = content.slice(0, insertPoint) +
  '\n  // -- AUTO-GENERATED: Missing match entries --\n' +
  entries.join('\n') + '\n' +
  content.slice(insertPoint);
fs.writeFileSync(filePath, newContent, 'utf8');

const verify = fs.readFileSync(filePath, 'utf8');
const allKeys = verify.match(/^\s+(\d+):/gm) || [];
const allSet = new Set(allKeys.map(m => parseInt(m.trim())));
console.log('Total unique entries:', allSet.size);
const wMiss = W.filter(w => !allSet.has(w.id));
console.log('Still missing from wrestlers:', wMiss.length);
