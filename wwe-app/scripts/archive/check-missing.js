import W from '../src/data/wrestlers.js';
import IMAGES from '../src/data/images.js';
import { classifyEntry } from '../src/utils/wrestlerHelpers.js';

const missing = W.filter(w => {
  const type = classifyEntry(w);
  if (type === 'duplicate') return false;
  return !IMAGES[w.id];
});

console.log('Still missing images: ' + missing.length);
for (const w of missing) {
  console.log(w.id + ': ' + w.name + ' (' + w.realName + ')');
}
