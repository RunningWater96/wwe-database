import W from './src/data/wrestlers.js';
import B from './src/data/bio.js';
import I from './src/data/images.js';
import P from './src/data/personal.js';
import R from './src/data/relationships.js';
import E from './src/data/extra.js';
import { isTagTeam } from './src/utils/wrestlerHelpers.js';

const individuals = W.filter(w => !isTagTeam(w));
const tagTeams = W.filter(w => isTagTeam(w));

console.log('=== WWE Database Final Status ===');
console.log('');
console.log('Total wrestlers:', W.length);
console.log('  Individual:', individuals.length);
console.log('  Tag teams/groups:', tagTeams.length);
console.log('');

// Check each data file coverage
const bKeys = new Set(Object.keys(B).map(Number));
const iKeys = new Set(Object.keys(I).map(Number));
const pKeys = new Set(Object.keys(P).map(Number));
const rKeys = new Set(Object.keys(R).map(Number));
const eKeys = new Set(Object.keys(E).map(Number));

const bMissing = individuals.filter(w => !bKeys.has(w.id));
const iMissing = individuals.filter(w => !iKeys.has(w.id));
const pMissing = individuals.filter(w => !pKeys.has(w.id));
const rMissing = individuals.filter(w => !rKeys.has(w.id));
const eMissing = individuals.filter(w => !eKeys.has(w.id));

console.log('Data File Coverage (individuals):');
console.log('  bio.js:          ', Object.keys(B).length, 'entries |', bMissing.length, 'missing');
console.log('  images.js:       ', Object.keys(I).length, 'entries |', iMissing.length, 'missing');
console.log('  personal.js:     ', Object.keys(P).length, 'entries |', pMissing.length, 'missing');
console.log('  relationships.js:', Object.keys(R).length, 'entries |', rMissing.length, 'missing');
console.log('  extra.js:        ', Object.keys(E).length, 'entries |', eMissing.length, 'missing');

if (bMissing.length > 0) { console.log('\n  Missing bios:'); bMissing.forEach(w => console.log('   ', w.id, w.name)); }
if (iMissing.length > 0) { console.log('\n  Missing images:'); iMissing.forEach(w => console.log('   ', w.id, w.name)); }
if (pMissing.length > 0) { console.log('\n  Missing personal:'); pMissing.forEach(w => console.log('   ', w.id, w.name)); }
if (rMissing.length > 0) { console.log('\n  Missing relationships:'); rMissing.slice(0, 10).forEach(w => console.log('   ', w.id, w.name)); if (rMissing.length > 10) console.log('    ...and', rMissing.length - 10, 'more'); }
if (eMissing.length > 0) { console.log('\n  Missing extra:'); eMissing.slice(0, 10).forEach(w => console.log('   ', w.id, w.name)); if (eMissing.length > 10) console.log('    ...and', eMissing.length - 10, 'more'); }
