import { pathToFileURL } from 'url';
import { join } from 'path';

const dataDir = join(process.cwd(), 'wwe-app', 'src', 'data');
const toURL = (f) => pathToFileURL(join(dataDir, f)).href;

const { default: WRESTLERS } = await import(toURL('wrestlers.js'));
const { default: EXTRA } = await import(toURL('extra.js'));
const { default: RELATIONSHIPS } = await import(toURL('relationships.js'));
const { default: WRESTLER_BIO } = await import(toURL('bio.js'));
const { default: PERSONAL } = await import(toURL('personal.js'));
const { default: WIKI_CONTENT } = await import(toURL('wiki.js'));

for (const w of WRESTLERS) {
  if (/\b(and|&)\b/i.test(w.name) || w.name.includes('/')) continue;
  const wiki = WIKI_CONTENT[w.id];
  const extra = EXTRA[w.id] || {};
  const rels = RELATIONSHIPS[w.id] || {};
  const bio = WRESTLER_BIO[w.id];
  const personal = PERSONAL[w.id];
  
  const hasWiki = wiki && (wiki.overview || wiki.earlyLife || wiki.career || wiki.inRingStyle || wiki.legacy);
  const hasEras = w.eras && w.eras.some(e => e.era !== 'all' && e.character && e.persona);
  const hasChamps = w.championships && w.championships.some(c => c.title && !c.title.startsWith('See entry'));
  const hasHof = !!w.hallOfFame;
  const hasRivals = (rels.rivals || []).length > 0;
  const hasAllies = (rels.allies || []).length > 0;
  const hasTeams = (extra.tagTeams || []).length > 0;
  const hasFactions = (extra.factions || []).length > 0;
  const hasPersonal = !!personal;
  const hasInjuries = (extra.injuries || []).length > 0;

  if (!hasWiki && !hasEras && !hasChamps && !hasHof && !hasRivals && !hasAllies && !hasTeams && !hasFactions && !hasPersonal && !hasInjuries) {
    console.log(`${w.name} (ID ${w.id})`);
  }
}
