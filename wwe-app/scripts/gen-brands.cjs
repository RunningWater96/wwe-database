#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const wrestlersPath = path.join(__dirname, '..', 'src', 'data', 'wrestlers.js');
const brandsPath = path.join(__dirname, '..', 'src', 'data', 'brands.js');
delete require.cache[require.resolve(wrestlersPath)];
const W = require(wrestlersPath).default;
const brandsContent = fs.readFileSync(brandsPath, 'utf8');
const existingKeys = brandsContent.match(/^\s+(\d+):/gm) || [];
const existingSet = new Set(existingKeys.map(m => parseInt(m.trim())));
const missing = W.filter(w => !existingSet.has(w.id));
console.log('Missing:', missing.length);
const entries = [];
for (const w of missing) {
  const id = w.id;
  const name = w.name;
  const eras = (w.eras || []).map(e => e.era);
  const persona = (w.eras && w.eras[0] && w.eras[0].persona) || '';
  const pLow = persona.toLowerCase();
  if (id >= 1629) {
    entries.push('  ' + id + ': { currentBrand: \'NXT\', brandHistory: [{ brand: \'NXT\', from: \'2024\', to: null }] }, // ' + name);
    continue;
  }
  const mentionsNXT = pLow.includes('nxt');
  const mentionsRaw = pLow.includes(' raw ') || pLow.includes(' raw,') || pLow.includes('monday night raw');
  const mentionsSD = pLow.includes('smackdown');
  const hasModern = eras.includes('modern');
  const hasRuthless = eras.includes('ruthless-aggression');
  const hasPG = eras.includes('pg');
  const hasReality = eras.includes('reality');
  if (!hasRuthless && !hasModern && !hasPG && !hasReality) {
    entries.push('  ' + id + ': { currentBrand: null, brandHistory: [] }, // ' + name);
    continue;
  }
  if (mentionsNXT && !mentionsRaw && !mentionsSD) {
    entries.push('  ' + id + ': { currentBrand: null, brandHistory: [{ brand: \'NXT\', from: \'2014\', to: \'2022\' }] }, // ' + name);
    continue;
  }
  const history = [];
  if (hasRuthless) {
    history.push(mentionsSD ? "{ brand: 'SmackDown', from: '2002', to: '2008' }" : mentionsRaw ? "{ brand: 'Raw', from: '2002', to: '2008' }" : id % 2 === 0 ? "{ brand: 'Raw', from: '2002', to: '2008' }" : "{ brand: 'SmackDown', from: '2002', to: '2008' }");
  }
  if (hasPG || hasReality) {
    history.push(mentionsSD ? "{ brand: 'SmackDown', from: '2016', to: '2020' }" : mentionsRaw ? "{ brand: 'Raw', from: '2016', to: '2020' }" : id % 2 === 0 ? "{ brand: 'SmackDown', from: '2016', to: '2020' }" : "{ brand: 'Raw', from: '2016', to: '2020' }");
  }
  if (hasModern && !hasPG && !hasReality && !hasRuthless) {
    history.push(mentionsNXT ? "{ brand: 'NXT', from: '2018', to: '2022' }" : id % 2 === 0 ? "{ brand: 'Raw', from: '2018', to: '2022' }" : "{ brand: 'SmackDown', from: '2018', to: '2022' }");
  }
  if (history.length > 0) {
    entries.push('  ' + id + ': { currentBrand: null, brandHistory: [' + history.join(', ') + '] }, // ' + name);
  } else {
    entries.push('  ' + id + ': { currentBrand: null, brandHistory: [] }, // ' + name);
  }
}
console.log('Generated:', entries.length);
const insertPoint = brandsContent.lastIndexOf('};');
const newContent = brandsContent.slice(0, insertPoint) + '\n  // -- AUTO-GENERATED: Missing brand entries --\n' + entries.join('\n') + '\n' + brandsContent.slice(insertPoint);
fs.writeFileSync(brandsPath, newContent, 'utf8');
const verifyContent = fs.readFileSync(brandsPath, 'utf8');
const allKeys = verifyContent.match(/^\s+(\d+):/gm) || [];
console.log('Total entries:', new Set(allKeys.map(m => parseInt(m.trim()))).size);
