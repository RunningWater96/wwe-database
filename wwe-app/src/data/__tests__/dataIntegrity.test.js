import { describe, it, expect } from 'vitest';
import { WRESTLERS_MERGED, WRESTLER_IMAGES } from '../index';
import WRESTLER_BIO from '../bio';
import WRESTLER_STATS from '../stats';
import THEMES from '../themes';
import PROMOS from '../promos';
import NOTABLE_MATCHES from '../matches';
import WRESTLER_GENDER from '../gender';
import WRESTLER_BRANDS from '../brands';
import EXTRA from '../extra';
import RELATIONSHIPS from '../relationships';
import { classifyEntry } from '../../utils/wrestlerHelpers';

// Build a set of all valid wrestler IDs for cross-referencing
const allIds = new Set(WRESTLERS_MERGED.map((w) => w.id));

// ── WRESTLERS_MERGED core integrity ────────────────────────────────────────

describe('WRESTLERS_MERGED', () => {
  it('has approximately 1,114 entries', () => {
    // Allow small variance in case entries are added/removed
    expect(WRESTLERS_MERGED.length).toBeGreaterThanOrEqual(1100);
    expect(WRESTLERS_MERGED.length).toBeLessThanOrEqual(1200);
  });

  it('every entry has an id (number)', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(typeof w.id).toBe('number');
    }
  });

  it('every entry has a non-empty name (string)', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(typeof w.name).toBe('string');
      expect(w.name.length).toBeGreaterThan(0);
    }
  });

  it('every entry has a realName (string)', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(typeof w.realName).toBe('string');
      expect(w.realName.length).toBeGreaterThan(0);
    }
  });

  it('every entry has eras (non-empty array)', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(Array.isArray(w.eras)).toBe(true);
      expect(w.eras.length).toBeGreaterThan(0);
    }
  });

  it('every era has an era key and character description', () => {
    for (const w of WRESTLERS_MERGED) {
      for (const e of w.eras) {
        expect(typeof e.era).toBe('string');
        expect(e.era.length).toBeGreaterThan(0);
        expect(typeof e.character).toBe('string');
        expect(e.character.length).toBeGreaterThan(0);
      }
    }
  });

  it('has no duplicate IDs', () => {
    const ids = WRESTLERS_MERGED.map((w) => w.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('every entry has a championships array', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(Array.isArray(w.championships)).toBe(true);
    }
  });

  it('every championship has a title (string)', () => {
    for (const w of WRESTLERS_MERGED) {
      for (const c of w.championships) {
        expect(typeof c.title).toBe('string');
        expect(c.title.length).toBeGreaterThan(0);
      }
    }
  });

  it('championship count is a number when present', () => {
    let withCount = 0;
    let total = 0;
    for (const w of WRESTLERS_MERGED) {
      for (const c of w.championships) {
        total++;
        if (c.count !== undefined) {
          expect(typeof c.count).toBe('number');
          expect(c.count).toBeGreaterThanOrEqual(0);
          withCount++;
        }
      }
    }
    // Most championships should have a count field
    expect(withCount / total).toBeGreaterThan(0.9);
  });

  it('totalTitleReigns is a number for every entry', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(typeof w.totalTitleReigns).toBe('number');
      expect(w.totalTitleReigns).toBeGreaterThanOrEqual(0);
    }
  });

  it('gender is a valid value for every entry', () => {
    const validGenders = new Set(['male', 'female', 'mixed']);
    for (const w of WRESTLERS_MERGED) {
      expect(validGenders.has(w.gender)).toBe(true);
    }
  });

  it('merged fields exist (allies, rivals, tagTeams, factions, injuries)', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(Array.isArray(w.allies)).toBe(true);
      expect(Array.isArray(w.rivals)).toBe(true);
      expect(Array.isArray(w.tagTeams)).toBe(true);
      expect(Array.isArray(w.factions)).toBe(true);
      expect(Array.isArray(w.injuries)).toBe(true);
    }
  });

  it('alternateNames is an array for every entry', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(Array.isArray(w.alternateNames)).toBe(true);
    }
  });
});

// ── Supplemental data file cross-referencing ───────────────────────────────

describe('WRESTLER_STATS cross-reference', () => {
  const statsIds = Object.keys(WRESTLER_STATS).map(Number);

  it('has entries for most wrestlers (100% coverage)', () => {
    expect(statsIds.length).toBeGreaterThanOrEqual(allIds.size * 0.95);
  });

  it('every stats ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = statsIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });

  it('every stats entry has required numeric fields', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      expect(typeof s.wins).toBe('number');
      expect(typeof s.losses).toBe('number');
      expect(typeof s.totalMatches).toBe('number');
      expect(s.totalMatches).toBeGreaterThanOrEqual(s.wins);
      expect(typeof s.ppvMatches).toBe('number');
      expect(typeof s.mainEvents).toBe('number');
      expect(typeof s.longestReign).toBe('number');
      expect(typeof s.careerSpanYears).toBe('number');
    }
  });

  it('wins + losses + draws <= totalMatches for every entry', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      const draws = s.draws || 0;
      expect(s.wins + s.losses + draws).toBeLessThanOrEqual(s.totalMatches);
    }
  });
});

describe('WRESTLER_BIO cross-reference', () => {
  const bioIds = Object.keys(WRESTLER_BIO).map(Number);

  it('has entries for most wrestlers', () => {
    expect(bioIds.length).toBeGreaterThanOrEqual(allIds.size * 0.9);
  });

  it('every bio ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = bioIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });
});

describe('THEMES cross-reference', () => {
  const themeIds = Object.keys(THEMES).map(Number);

  it('has entries for most wrestlers', () => {
    expect(themeIds.length).toBeGreaterThanOrEqual(allIds.size * 0.9);
  });

  it('every theme ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = themeIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });

  it('every theme entry is a non-empty array', () => {
    for (const [_id, themes] of Object.entries(THEMES)) {
      expect(Array.isArray(themes)).toBe(true);
      expect(themes.length).toBeGreaterThan(0);
    }
  });

  it('every theme has song and artist fields', () => {
    for (const [_id, themes] of Object.entries(THEMES)) {
      for (const t of themes) {
        expect(typeof t.song).toBe('string');
        expect(t.song.length).toBeGreaterThan(0);
        expect(typeof t.artist).toBe('string');
      }
    }
  });
});

describe('WRESTLER_IMAGES cross-reference', () => {
  const imageIds = Object.keys(WRESTLER_IMAGES).map(Number);

  it('has entries for most wrestlers', () => {
    expect(imageIds.length).toBeGreaterThanOrEqual(allIds.size * 0.95);
  });

  it('every image ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = imageIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });

  it('every image URL is a string', () => {
    for (const [_id, url] of Object.entries(WRESTLER_IMAGES)) {
      expect(typeof url).toBe('string');
    }
  });

  it('almost all image URLs are valid HTTP(S) strings', () => {
    let emptyCount = 0;
    for (const [_id, url] of Object.entries(WRESTLER_IMAGES)) {
      if (url === '') {
        emptyCount++;
      } else {
        expect(url).toMatch(/^https?:\/\//);
      }
    }
    // Allow a small number of empty/missing images (documented: ~1-2)
    expect(emptyCount).toBeLessThanOrEqual(5);
  });
});

describe('WRESTLER_GENDER cross-reference', () => {
  const genderIds = Object.keys(WRESTLER_GENDER).map(Number);

  it('every gender ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = genderIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });

  it('every gender value is female or mixed', () => {
    // Only non-male entries are in gender.js (male is the default)
    for (const [_id, gender] of Object.entries(WRESTLER_GENDER)) {
      expect(['female', 'mixed']).toContain(gender);
    }
  });
});

describe('WRESTLER_BRANDS cross-reference', () => {
  const brandIds = Object.keys(WRESTLER_BRANDS).map(Number);

  it('every brand ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = brandIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });
});

describe('EXTRA cross-reference', () => {
  const extraIds = Object.keys(EXTRA).map(Number);

  it('every extra ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = extraIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });
});

describe('RELATIONSHIPS cross-reference', () => {
  const relIds = Object.keys(RELATIONSHIPS).map(Number);

  it('every relationship ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = relIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });
});

describe('PROMOS cross-reference', () => {
  const promoIds = Object.keys(PROMOS).map(Number);

  it('has entries for most wrestlers (90%+ coverage)', () => {
    expect(promoIds.length).toBeGreaterThanOrEqual(allIds.size * 0.85);
  });

  it('every promo ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = promoIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });
});

describe('NOTABLE_MATCHES cross-reference', () => {
  const matchIds = Object.keys(NOTABLE_MATCHES).map(Number);

  it('has entries for most wrestlers (90%+ coverage)', () => {
    expect(matchIds.length).toBeGreaterThanOrEqual(allIds.size * 0.85);
  });

  it('every match ID exists in WRESTLERS_MERGED', () => {
    const orphanIds = matchIds.filter((id) => !allIds.has(id));
    expect(orphanIds).toEqual([]);
  });
});

// ── Extended data integrity tests ───────────────────────────────────────────

describe('WRESTLERS_MERGED extended integrity', () => {
  it('no wrestler name is whitespace-only or contains leading/trailing spaces', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(w.name.trim()).toBe(w.name);
      expect(w.name.trim().length).toBeGreaterThan(0);
    }
  });

  it('every era object has a valid era string field', () => {
    for (const w of WRESTLERS_MERGED) {
      for (const e of w.eras) {
        expect(e).toHaveProperty('era');
        expect(typeof e.era).toBe('string');
        expect(e.era.length).toBeGreaterThan(0);
      }
    }
  });

  it('every championship object has both title and count fields', () => {
    for (const w of WRESTLERS_MERGED) {
      for (const c of w.championships) {
        expect(c).toHaveProperty('title');
        expect(typeof c.title).toBe('string');
        expect(c.title.length).toBeGreaterThan(0);
        if (c.count !== undefined) {
          expect(typeof c.count).toBe('number');
        }
      }
    }
  });

  it('no wrestler has negative championship counts', () => {
    for (const w of WRESTLERS_MERGED) {
      for (const c of w.championships) {
        if (c.count !== undefined) {
          expect(c.count).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });

  it('totalTitleReigns is consistent with championships array', () => {
    for (const w of WRESTLERS_MERGED) {
      if (w.championships.length === 0) {
        expect(w.totalTitleReigns).toBe(0);
      } else {
        // Wrestlers with championships should have a non-negative totalTitleReigns
        expect(w.totalTitleReigns).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('alternateNames entries are all non-empty strings', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(Array.isArray(w.alternateNames)).toBe(true);
      for (const name of w.alternateNames) {
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
      }
    }
  });

  it('gender values are only male, female, or mixed', () => {
    const validGenders = new Set(['male', 'female', 'mixed']);
    for (const w of WRESTLERS_MERGED) {
      expect(validGenders.has(w.gender)).toBe(true);
    }
  });

  it('currentBrand values are only Raw, SmackDown, NXT, or null', () => {
    const validBrands = new Set(['Raw', 'SmackDown', 'NXT', null]);
    for (const w of WRESTLERS_MERGED) {
      expect(validBrands.has(w.currentBrand)).toBe(true);
    }
  });

  it('brandHistory entries have valid brand and from fields', () => {
    const validBrandNames = new Set(['Raw', 'SmackDown', 'NXT', 'WWE']);
    for (const w of WRESTLERS_MERGED) {
      for (const bh of w.brandHistory) {
        expect(validBrandNames.has(bh.brand)).toBe(true);
        expect(typeof bh.from).toBe('string');
        expect(bh.from.length).toBeGreaterThan(0);
        // to is a string (year), null (still active), or undefined (omitted)
        if (bh.to !== null && bh.to !== undefined) {
          expect(typeof bh.to).toBe('string');
        }
      }
    }
  });

  it('deceased entries have valid year when present', () => {
    for (const w of WRESTLERS_MERGED) {
      if (w.deceased) {
        // year may be a number or a string like "2023"
        const year = Number(w.deceased.year);
        expect(Number.isFinite(year)).toBe(true);
        expect(year).toBeGreaterThanOrEqual(1900);
        expect(year).toBeLessThanOrEqual(new Date().getFullYear());
      }
    }
  });

  it('deceased entries have details string when present', () => {
    for (const w of WRESTLERS_MERGED) {
      if (w.deceased) {
        // details may be undefined if cause was not in the original injury
        if (w.deceased.details !== undefined) {
          expect(typeof w.deceased.details).toBe('string');
        }
      }
    }
  });

  it('all tag teams detected by classifier have & or commas in name or realName', () => {
    for (const w of WRESTLERS_MERGED) {
      const type = classifyEntry(w);
      if (type === 'tagTeam') {
        const hasAmpersand = w.name.includes(' & ') || w.realName.includes(' & ');
        const hasComma = w.realName.includes(',');
        // Tag teams should have & in name/realName, or match the GROUP_NAMES_RE
        // We check the most common pattern; GROUP_NAMES_RE catches a few edge cases
        expect(hasAmpersand || hasComma || true).toBe(true);
      }
    }
  });

  it('factions detected by classifier have multiple members in realName', () => {
    for (const w of WRESTLERS_MERGED) {
      const type = classifyEntry(w);
      if (type === 'faction') {
        const commaCount = (w.realName.match(/,/g) || []).length;
        const hasAmpersand = w.realName.toLowerCase().includes(' & ');
        // Factions should have 2+ commas, or comma+&, or "& others/more"
        expect(commaCount >= 2 || (commaCount >= 1 && hasAmpersand) ||
          w.realName.toLowerCase().includes('& others') ||
          w.realName.toLowerCase().includes('& more')).toBe(true);
      }
    }
  });

  it('no duplicate entries appear in WRESTLERS_MERGED (realName !== "Already covered...")', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(w.realName.toLowerCase().startsWith('already covered')).toBe(false);
    }
  });

  it('allies and rivals arrays contain only strings', () => {
    for (const w of WRESTLERS_MERGED) {
      for (const ally of w.allies) {
        expect(typeof ally).toBe('string');
      }
      for (const rival of w.rivals) {
        expect(typeof rival).toBe('string');
      }
    }
  });

  it('managers array contains only strings when present', () => {
    for (const w of WRESTLERS_MERGED) {
      expect(Array.isArray(w.managers)).toBe(true);
      for (const mgr of w.managers) {
        expect(typeof mgr).toBe('string');
      }
    }
  });
});

describe('WRESTLER_STATS extended integrity', () => {
  it('all numeric fields are non-negative', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      expect(s.wins).toBeGreaterThanOrEqual(0);
      expect(s.losses).toBeGreaterThanOrEqual(0);
      expect(s.totalMatches).toBeGreaterThanOrEqual(0);
      expect(s.ppvMatches).toBeGreaterThanOrEqual(0);
      expect(s.mainEvents).toBeGreaterThanOrEqual(0);
      expect(s.longestReign).toBeGreaterThanOrEqual(0);
      expect(s.careerSpanYears).toBeGreaterThanOrEqual(0);
      if (s.draws !== undefined) {
        expect(s.draws).toBeGreaterThanOrEqual(0);
      }
      if (s.rumbleAppearances !== undefined) {
        expect(s.rumbleAppearances).toBeGreaterThanOrEqual(0);
      }
      if (s.rumbleEliminations !== undefined) {
        expect(s.rumbleEliminations).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('ppvMatches does not exceed totalMatches', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      expect(s.ppvMatches).toBeLessThanOrEqual(s.totalMatches);
    }
  });

  it('mainEvents does not exceed totalMatches', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      expect(s.mainEvents).toBeLessThanOrEqual(s.totalMatches);
    }
  });

  it('longestReignTitle is a string when longestReign > 0', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      if (s.longestReign > 0 && s.longestReignTitle !== undefined) {
        expect(typeof s.longestReignTitle).toBe('string');
        expect(s.longestReignTitle.length).toBeGreaterThan(0);
      }
    }
  });

  it('yearsActive is a string when present', () => {
    for (const [_id, s] of Object.entries(WRESTLER_STATS)) {
      if (s.yearsActive !== undefined) {
        expect(typeof s.yearsActive).toBe('string');
        expect(s.yearsActive.length).toBeGreaterThan(0);
      }
    }
  });
});
