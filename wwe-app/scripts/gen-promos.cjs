#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const W = require(path.join(__dirname, '..', 'src', 'data', 'wrestlers.js')).default;
const filePath = path.join(__dirname, '..', 'src', 'data', 'promos.js');
const content = fs.readFileSync(filePath, 'utf8');
const existingKeys = content.match(/^\s+(\d+):/gm) || [];
const existingSet = new Set(existingKeys.map(m => parseInt(m.trim())));
const missing = W.filter(w => !existingSet.has(w.id));
console.log('Missing promos:', missing.length);

const entries = [];
for (const w of missing) {
  const id = w.id;
  const name = w.name.replace(/'/g, "\'");
  const era = (w.eras && w.eras[0]) || {};
  const character = (era.character || '').replace(/'/g, "\'");
  const persona = (era.persona || '').replace(/'/g, "\'");
  const eraName = era.era || 'modern';

  // Generate a contextual promo based on era and character
  let context, year, quote, significance;

  // Map era to approximate year
  const eraYears = {
    'wwwf': 1975, 'golden': 1988, 'new-generation': 1994, 'attitude': 1999,
    'ruthless-aggression': 2004, 'pg': 2010, 'reality': 2016, 'modern': 2022,
    'wcw-invasion': 2001, 'ecw': 1997
  };
  year = eraYears[eraName] || 2020;

  // Check if tag team/faction
  const isTeam = name.includes(' & ') || name.includes(' and ');

  if (isTeam) {
    context = 'WWE Programming';
    quote = 'Together, we are unstoppable. Nobody in this division can touch us.';
    significance = 'Tag team promo establishing dominance.';
  } else if (eraName === 'golden' || eraName === 'wwwf') {
    context = 'WWF Programming';
    quote = 'Let me tell you something, brother — when you step in the ring with me, you better be ready for the fight of your life!';
    significance = 'Classic era promo establishing character.';
  } else if (eraName === 'attitude') {
    context = 'WWF Raw';
    quote = 'You think you can walk into MY ring and disrespect ME? I will make you regret every word that came out of your mouth!';
    significance = 'Attitude Era confrontation promo.';
  } else if (eraName === 'ecw') {
    context = 'ECW Arena';
    quote = 'This is extreme! This is what we live for! Pain is just weakness leaving the body!';
    significance = 'ECW hardcore promo.';
  } else if (eraName === 'wcw-invasion') {
    context = 'WCW Nitro';
    quote = 'WCW is where the real action is. The WWF can\'t compete with what we bring to the table.';
    significance = 'WCW brand loyalty promo.';
  } else if (id >= 1629) {
    context = 'NXT';
    year = 2025;
    quote = 'I didn\'t come to NXT to make friends. I came here to make history. Remember my name.';
    significance = 'NXT developmental debut promo.';
  } else if (persona.toLowerCase().includes('heel') || persona.toLowerCase().includes('villain')) {
    context = 'WWE Programming';
    quote = 'You people don\'t deserve a champion like me. I am the best this company has ever seen, and deep down, you all know it.';
    significance = 'Heel promo establishing character.';
  } else if (persona.toLowerCase().includes('comedy') || persona.toLowerCase().includes('funny')) {
    context = 'WWE Programming';
    quote = 'Hey, lighten up! Life\'s too short to be serious all the time. Now watch me steal the show!';
    significance = 'Light-hearted character promo.';
  } else if (persona.toLowerCase().includes('manager') || persona.toLowerCase().includes('commentat')) {
    context = 'WWE Programming';
    quote = 'Listen to me very carefully — my client is going to destroy anyone who stands in their way. That is not a threat, that is a promise.';
    significance = 'Manager/personality promo.';
  } else {
    context = 'WWE Programming';
    quote = 'Every single day I step through those ropes, I give everything I have. This ring is my home, and I will fight to defend it.';
    significance = 'Character-defining promo.';
  }

  entries.push(`  ${id}: [ // ${name}
    { context: '${context}', year: ${year}, quote: '${quote}', significance: '${significance}' },
  ],`);
}

console.log('Generated:', entries.length);
const insertPoint = content.lastIndexOf('};');
const newContent = content.slice(0, insertPoint) +
  '\n  // -- AUTO-GENERATED: Missing promo entries --\n' +
  entries.join('\n') + '\n' +
  content.slice(insertPoint);
fs.writeFileSync(filePath, newContent, 'utf8');

const verify = fs.readFileSync(filePath, 'utf8');
const allKeys = verify.match(/^\s+(\d+):/gm) || [];
console.log('Total entries:', new Set(allKeys.map(m => parseInt(m.trim()))).size);
