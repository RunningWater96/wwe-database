import WRESTLERS from '../wwe-app/src/data/wrestlers.js';
import WIKI from '../wwe-app/src/data/wiki.js';
import { classifyEntry } from '../wwe-app/src/utils/wrestlerHelpers.js';

const missing = [];
for (const w of WRESTLERS) {
  const t = classifyEntry(w);
  if (t === 'individual') {
    const has = WIKI[w.id] && WIKI[w.id].overview;
    if (!has) missing.push(`${w.id}: ${w.name}`);
  }
}
console.log(`Missing: ${missing.length}`);
console.log(missing.join('\n'));
