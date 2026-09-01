import WRESTLERS from './wrestlers';
import EXTRA from './extra';
import RELATIONSHIPS from './relationships';
import WRESTLER_GENDER from './gender';
import WRESTLER_BRANDS from './brands';
import WRESTLER_STATS from './stats';

export { default as WRESTLER_IMAGES } from './images';
export { default as WRESTLER_BIO } from './bio';
export { ERAS, ERA_COLORS } from './eras';

// Lazy loaders for large data files (wiki.js ~2.3MB, personal.js ~550KB)
let _wikiCache = null;
let _personalCache = null;

export async function getWikiData() {
  if (!_wikiCache) {
    const mod = await import('./wiki');
    _wikiCache = mod.default;
  }
  return _wikiCache;
}

export async function getPersonalData() {
  if (!_personalCache) {
    const mod = await import('./personal');
    _personalCache = mod.default;
  }
  return _personalCache;
}

export { default as MOVES, MOVE_GIFS } from './moves';
export { WWE_SHOWS, UPCOMING_EVENTS } from './schedule';
export { BRAND_COLORS, DRAFT_NOTES } from './brands';
export { default as THEMES } from './themes';
export { MATCH_TYPES, MATCH_CATEGORIES } from './matchTypes';
export { default as OTHERS } from './others';
export { default as WRESTLER_STATS } from './stats';

// Merge EXTRA + RELATIONSHIPS into WRESTLERS, separating death entries from injuries
export const WRESTLERS_MERGED = WRESTLERS.map((w) => {
  const allInjuries = EXTRA[w.id]?.injuries || [];
  const deathEntry = allInjuries.find((inj) =>
    /\bdied\b|^death\b|^passed away|^fatal\b|murder-suicide|found dead/i.test(inj.injury),
  );
  const realInjuries = allInjuries.filter((inj) => inj !== deathEntry);
  return {
    ...w,
    tagTeams: EXTRA[w.id]?.tagTeams || [],
    factions: EXTRA[w.id]?.factions || [],
    injuries: realInjuries,
    deceased: deathEntry ? { year: deathEntry.year, details: deathEntry.cause } : null,
    gender: WRESTLER_GENDER[w.id] || 'male',
    alternateNames: [...new Set([
      ...(w.alternateNames || []),
      ...(RELATIONSHIPS[w.id]?.alternateNames || []),
    ])],
    allies: RELATIONSHIPS[w.id]?.allies || [],
    rivals: RELATIONSHIPS[w.id]?.rivals || [],
    managers: RELATIONSHIPS[w.id]?.managers || [],
    currentBrand: WRESTLER_BRANDS[w.id]?.currentBrand || null,
    brandHistory: WRESTLER_BRANDS[w.id]?.brandHistory || [],
    stats: WRESTLER_STATS[w.id] || null,
  };
});
