import I from '../src/data/images.js';
import W from '../src/data/wrestlers.js';

const ids = Array.from({ length: 68 }, (_, i) => 1557 + i);
const has = ids.filter((id) => I[id]);
const missing = ids.filter((id) => !I[id]);
console.log('Has image: ' + has.length);
console.log('Missing: ' + missing.length);
for (const id of missing) {
  const w = W.find((x) => x.id === id);
  console.log('  ' + id + ': ' + (w?.name || '?'));
}
