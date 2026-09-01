import { pathToFileURL } from 'url';
import { join } from 'path';
const dataDir = join(process.cwd(), 'wwe-app', 'src', 'data');
const toURL = (f) => pathToFileURL(join(dataDir, f)).href;
const { default: WRESTLERS } = await import(toURL('wrestlers.js'));
const { default: RELATIONSHIPS } = await import(toURL('relationships.js'));
const { classifyEntry } = await import(
  pathToFileURL(join(process.cwd(), 'wwe-app', 'src', 'utils', 'wrestlerHelpers.js')).href
);

const missing = [];
for (const w of WRESTLERS) {
  if (classifyEntry(w) !== 'individual') continue;
  const r = RELATIONSHIPS[w.id];
  if (!r || ((!r.rivals || r.rivals.length === 0) && (!r.allies || r.allies.length === 0))) {
    missing.push({ id: w.id, name: w.name, realName: w.realName, hasEntry: !!r });
  }
}
missing.forEach((m) =>
  console.log(m.id + ': ' + m.name + ' (' + m.realName + ') [' + (m.hasEntry ? 'empty' : 'NO ENTRY') + ']'),
);
console.log('\nTotal:', missing.length);
