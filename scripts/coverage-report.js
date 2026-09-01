import { pathToFileURL } from 'url';
import { join } from 'path';
const dataDir = join(process.cwd(), 'wwe-app', 'src', 'data');
const toURL = (f) => pathToFileURL(join(dataDir, f)).href;
const { default: WRESTLERS } = await import(toURL('wrestlers.js'));
const { default: WRESTLER_BIO } = await import(toURL('bio.js'));
const { default: PERSONAL } = await import(toURL('personal.js'));
const { default: RELATIONSHIPS } = await import(toURL('relationships.js'));
const { default: WIKI_CONTENT } = await import(toURL('wiki.js'));
const { classifyEntry } = await import(
  pathToFileURL(join(process.cwd(), 'wwe-app', 'src', 'utils', 'wrestlerHelpers.js')).href
);

const indivs = [];
const tags = [];
const facts = [];
const dupes = [];
for (const w of WRESTLERS) {
  const t = classifyEntry(w);
  if (t === 'individual') indivs.push(w);
  else if (t === 'tagTeam') tags.push(w);
  else if (t === 'faction') facts.push(w);
  else if (t === 'duplicate') dupes.push(w);
}

const missingWiki = indivs.filter((w) => {
  const wiki = WIKI_CONTENT[w.id];
  return !wiki || !wiki.overview;
});
const missingBio = indivs.filter((w) => !WRESTLER_BIO[w.id]);
const missingPersonal = indivs.filter((w) => !PERSONAL[w.id]);
const missingRels = indivs.filter((w) => {
  const r = RELATIONSHIPS[w.id];
  return !r || ((!r.rivals || r.rivals.length === 0) && (!r.allies || r.allies.length === 0));
});

console.log('=== DATABASE COVERAGE REPORT ===');
console.log(
  'Individuals:',
  indivs.length,
  '| Tags:',
  tags.length,
  '| Factions:',
  facts.length,
  '| Dupes:',
  dupes.length,
);
console.log('');
console.log('Wiki missing:', missingWiki.length, '/', indivs.length);
console.log('Bio missing:', missingBio.length, '/', indivs.length);
console.log('Personal missing:', missingPersonal.length, '/', indivs.length);
console.log('Relationships missing:', missingRels.length, '/', indivs.length);

if (missingWiki.length > 0) {
  console.log('\n--- MISSING WIKI ---');
  missingWiki.forEach((w) => console.log('  ' + w.id + ': ' + w.name));
}
if (missingBio.length > 0) {
  console.log('\n--- MISSING BIO ---');
  missingBio.forEach((w) => console.log('  ' + w.id + ': ' + w.name));
}
if (missingPersonal.length > 0) {
  console.log('\n--- MISSING PERSONAL ---');
  missingPersonal.forEach((w) => console.log('  ' + w.id + ': ' + w.name));
}
if (missingRels.length > 0) {
  console.log('\n--- MISSING RELATIONSHIPS ---');
  missingRels.forEach((w) => console.log('  ' + w.id + ': ' + w.name));
}
