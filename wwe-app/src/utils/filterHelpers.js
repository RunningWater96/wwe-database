export const DEFAULT_FILTERS = {
  status: [],
  gender: null,
  championships: null,
  decades: [],
  fightingStyle: null,
};

export const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const ERA_TO_DECADES = {
  territory: ['1950s', '1960s'],
  wwwf: ['1960s', '1970s', '1980s'],
  golden: ['1980s', '1990s'],
  'new-gen': ['1990s'],
  attitude: ['1990s', '2000s'],
  ruthless: ['2000s'],
  pg: ['2000s', '2010s'],
  reality: ['2010s'],
  modern: ['2010s', '2020s'],
};

export function countActiveFilters(filters) {
  if (!filters) return 0;
  let count = 0;
  if (filters.status.length > 0) count += filters.status.length;
  if (filters.gender !== null) count += 1;
  if (filters.championships !== null) count += 1;
  if (filters.decades.length > 0) count += filters.decades.length;
  if (filters.fightingStyle !== null) count += 1;
  return count;
}

export function matchesAdvancedFilters(wrestler, filters) {
  // Status filter (OR within group)
  if (filters.status.length > 0) {
    const isDeceased = !!wrestler.deceased;
    const isHoF = !!wrestler.hallOfFame;
    const matchesAny = filters.status.some((s) => {
      if (s === 'active') return !isDeceased;
      if (s === 'deceased') return isDeceased;
      if (s === 'hallOfFame') return isHoF;
      return false;
    });
    if (!matchesAny) return false;
  }

  // Gender filter (single-select)
  if (filters.gender !== null) {
    if (wrestler.gender !== filters.gender) return false;
  }

  // Championships filter (single-select)
  if (filters.championships !== null) {
    const count = wrestler.totalTitleReigns || 0;
    if (filters.championships === 'has' && count === 0) return false;
    if (filters.championships === 'none' && count > 0) return false;
    if (filters.championships === '5plus' && count < 5) return false;
    if (filters.championships === '10plus' && count < 10) return false;
  }

  // Decades filter (OR within group)
  if (filters.decades.length > 0) {
    const wrestlerDecades = new Set();
    wrestler.eras.forEach((e) => {
      const mapped = ERA_TO_DECADES[e.era];
      if (mapped) mapped.forEach((d) => wrestlerDecades.add(d));
    });
    if (!filters.decades.some((d) => wrestlerDecades.has(d))) return false;
  }

  // Fighting style filter — uses _moveCategoryCache populated by loadMoveCategoriesForFilter()
  if (filters.fightingStyle !== null && _moveCategoryCache) {
    const names = [wrestler.name, ...(wrestler.alternateNames || [])];
    const hasStyle = names.some((n) => {
      const cats = _moveCategoryCache.get(n.toLowerCase());
      return cats && cats.has(filters.fightingStyle);
    });
    if (!hasStyle) return false;
  }

  return true;
}

// Lazy-loaded move category cache for fighting style filter
let _moveCategoryCache = null;

/**
 * Load move categories on demand (called when user opens Advanced Filters).
 * This avoids pulling moves.js into the startup bundle.
 */
export async function loadMoveCategoriesForFilter() {
  if (_moveCategoryCache) return _moveCategoryCache;
  const { default: MOVES } = await import('../data/moves');
  _moveCategoryCache = new Map();
  MOVES.forEach((m) => {
    m.knownUsers.forEach((userName) => {
      const key = userName.toLowerCase();
      if (!_moveCategoryCache.has(key)) {
        _moveCategoryCache.set(key, new Set());
      }
      _moveCategoryCache.get(key).add(m.category);
    });
  });
  return _moveCategoryCache;
}
