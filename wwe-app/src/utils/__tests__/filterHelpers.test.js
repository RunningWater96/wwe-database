import { describe, it, expect } from 'vitest';
import {
  DEFAULT_FILTERS,
  DECADES,
  countActiveFilters,
  matchesAdvancedFilters,
} from '../filterHelpers';

// ── DEFAULT_FILTERS structure ──────────────────────────────────────────────

describe('DEFAULT_FILTERS', () => {
  it('has the expected keys', () => {
    expect(DEFAULT_FILTERS).toHaveProperty('status');
    expect(DEFAULT_FILTERS).toHaveProperty('gender');
    expect(DEFAULT_FILTERS).toHaveProperty('championships');
    expect(DEFAULT_FILTERS).toHaveProperty('decades');
    expect(DEFAULT_FILTERS).toHaveProperty('fightingStyle');
  });

  it('has empty/null defaults', () => {
    expect(DEFAULT_FILTERS.status).toEqual([]);
    expect(DEFAULT_FILTERS.gender).toBeNull();
    expect(DEFAULT_FILTERS.championships).toBeNull();
    expect(DEFAULT_FILTERS.decades).toEqual([]);
    expect(DEFAULT_FILTERS.fightingStyle).toBeNull();
  });
});

describe('DECADES', () => {
  it('contains expected decade strings', () => {
    expect(DECADES).toContain('1980s');
    expect(DECADES).toContain('2000s');
    expect(DECADES.length).toBeGreaterThanOrEqual(7);
  });
});

// ── countActiveFilters ─────────────────────────────────────────────────────

describe('countActiveFilters', () => {
  it('returns 0 for default filters', () => {
    expect(countActiveFilters(DEFAULT_FILTERS)).toBe(0);
  });

  it('returns 0 for null input', () => {
    expect(countActiveFilters(null)).toBe(0);
  });

  it('counts gender as 1', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'female' };
    expect(countActiveFilters(filters)).toBe(1);
  });

  it('counts championships as 1', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '5plus' };
    expect(countActiveFilters(filters)).toBe(1);
  });

  it('counts fightingStyle as 1', () => {
    const filters = { ...DEFAULT_FILTERS, fightingStyle: 'striker' };
    expect(countActiveFilters(filters)).toBe(1);
  });

  it('counts each status entry individually', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active', 'deceased'] };
    expect(countActiveFilters(filters)).toBe(2);
  });

  it('counts each decade individually', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['1980s', '1990s', '2000s'] };
    expect(countActiveFilters(filters)).toBe(3);
  });

  it('sums across all filter types', () => {
    const filters = {
      status: ['hallOfFame'],
      gender: 'male',
      championships: 'has',
      decades: ['1990s', '2000s'],
      fightingStyle: 'brawler',
    };
    // 1 status + 1 gender + 1 championships + 2 decades + 1 fightingStyle = 6
    expect(countActiveFilters(filters)).toBe(6);
  });
});

// ── matchesAdvancedFilters ─────────────────────────────────────────────────

describe('matchesAdvancedFilters', () => {
  const makeWrestler = (overrides = {}) => ({
    name: 'Test Wrestler',
    realName: 'Test Person',
    deceased: null,
    hallOfFame: null,
    gender: 'male',
    totalTitleReigns: 5,
    eras: [{ era: 'attitude', character: 'Anti-hero brawler' }],
    alternateNames: [],
    ...overrides,
  });

  it('returns true when all filters are defaults (no filters active)', () => {
    expect(matchesAdvancedFilters(makeWrestler(), DEFAULT_FILTERS)).toBe(true);
  });

  // Status filter
  it('matches active status for living wrestler', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active'] };
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(true);
  });

  it('does not match active status for deceased wrestler', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active'] };
    const wrestler = makeWrestler({ deceased: { year: 2020, details: 'Passed' } });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  it('matches deceased status for deceased wrestler', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['deceased'] };
    const wrestler = makeWrestler({ deceased: { year: 2020, details: 'Passed' } });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  it('matches hallOfFame status for inducted wrestler', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['hallOfFame'] };
    const wrestler = makeWrestler({ hallOfFame: 2005 });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  it('does not match hallOfFame status for non-inducted wrestler', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['hallOfFame'] };
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(false);
  });

  it('status filter uses OR logic (matches if any status matches)', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['deceased', 'hallOfFame'] };
    const wrestler = makeWrestler({ hallOfFame: 2010 });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // Gender filter
  it('matches gender filter when equal', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'male' };
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(true);
  });

  it('rejects gender filter when not equal', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'female' };
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(false);
  });

  // Championships filter
  it('matches "has" when wrestler has titles', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'has' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 3 }), filters)).toBe(true);
  });

  it('rejects "has" when wrestler has no titles', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'has' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 0 }), filters)).toBe(false);
  });

  it('matches "none" when wrestler has no titles', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'none' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 0 }), filters)).toBe(true);
  });

  it('rejects "none" when wrestler has titles', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'none' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 3 }), filters)).toBe(false);
  });

  it('matches "5plus" when wrestler has 5+ titles', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '5plus' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 5 }), filters)).toBe(true);
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 12 }), filters)).toBe(true);
  });

  it('rejects "5plus" when wrestler has fewer than 5', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '5plus' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 4 }), filters)).toBe(false);
  });

  it('matches "10plus" when wrestler has 10+ titles', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '10plus' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 10 }), filters)).toBe(true);
  });

  it('rejects "10plus" when wrestler has fewer than 10', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '10plus' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 9 }), filters)).toBe(false);
  });

  it('treats missing totalTitleReigns as 0', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'has' };
    const wrestler = makeWrestler({});
    delete wrestler.totalTitleReigns;
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  // Decades filter
  it('matches decade when wrestler has matching era', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['1990s'] };
    const wrestler = makeWrestler({ eras: [{ era: 'attitude', character: 'Star' }] });
    // attitude maps to ['1990s', '2000s']
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  it('rejects decade when wrestler has no matching era', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['1960s'] };
    const wrestler = makeWrestler({ eras: [{ era: 'modern', character: 'Star' }] });
    // modern maps to ['2010s', '2020s']
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  it('decades use OR logic (matches if any decade overlaps)', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['1960s', '2020s'] };
    const wrestler = makeWrestler({ eras: [{ era: 'modern', character: 'Star' }] });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // Combined filters (AND across groups)
  it('rejects when one filter group fails even if others pass', () => {
    const filters = {
      ...DEFAULT_FILTERS,
      gender: 'female',
      championships: 'has',
    };
    // Male wrestler with titles — gender fails
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 5 }), filters)).toBe(false);
  });

  it('passes when all filter groups match', () => {
    const filters = {
      ...DEFAULT_FILTERS,
      status: ['active'],
      gender: 'male',
      championships: 'has',
      decades: ['1990s'],
    };
    const wrestler = makeWrestler({
      totalTitleReigns: 8,
      eras: [{ era: 'attitude', character: 'Hero' }],
    });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // ── Edge cases: empty eras ──────────────────────────────────────────────

  it('rejects decade filter when wrestler has empty eras array', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['1990s'] };
    const wrestler = makeWrestler({ eras: [] });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  it('passes with empty eras when no decade filter is active', () => {
    const wrestler = makeWrestler({ eras: [] });
    expect(matchesAdvancedFilters(wrestler, DEFAULT_FILTERS)).toBe(true);
  });

  // ── Edge cases: unknown era key ─────────────────────────────────────────

  it('ignores eras with unknown keys (no mapping in ERA_TO_DECADES)', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['1990s'] };
    const wrestler = makeWrestler({ eras: [{ era: 'unknown-era', character: 'Mystery' }] });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  it('matches when one era is unknown but another matches the decade', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['2000s'] };
    const wrestler = makeWrestler({
      eras: [
        { era: 'bogus', character: 'X' },
        { era: 'ruthless', character: 'Aggressive' },
      ],
    });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // ── Edge cases: gender combos ───────────────────────────────────────────

  it('matches mixed gender filter', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'mixed' };
    const wrestler = makeWrestler({ gender: 'mixed' });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  it('rejects mixed gender filter for male wrestler', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'mixed' };
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(false);
  });

  it('matches female wrestler with female gender filter', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'female' };
    const wrestler = makeWrestler({ gender: 'female' });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // ── Edge cases: status combos ───────────────────────────────────────────

  it('matches all three statuses at once (OR logic)', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active', 'deceased', 'hallOfFame'] };
    // Any wrestler should match since active covers non-deceased
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(true);
  });

  it('deceased + hallOfFame wrestler matches either status individually', () => {
    const wrestler = makeWrestler({ deceased: { year: 1999 }, hallOfFame: 2004 });
    const deceasedFilter = { ...DEFAULT_FILTERS, status: ['deceased'] };
    const hofFilter = { ...DEFAULT_FILTERS, status: ['hallOfFame'] };
    expect(matchesAdvancedFilters(wrestler, deceasedFilter)).toBe(true);
    expect(matchesAdvancedFilters(wrestler, hofFilter)).toBe(true);
  });

  it('deceased wrestler does NOT match active-only filter', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active'] };
    const wrestler = makeWrestler({ deceased: { year: 2005 } });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  it('unknown status value does not match anyone', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['retired'] };
    expect(matchesAdvancedFilters(makeWrestler(), filters)).toBe(false);
  });

  // ── Edge cases: championships boundary values ───────────────────────────

  it('"has" matches wrestler with exactly 1 title reign', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'has' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 1 }), filters)).toBe(true);
  });

  it('"none" matches wrestler with totalTitleReigns explicitly 0', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'none' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 0 }), filters)).toBe(true);
  });

  it('"5plus" boundary: exactly 4 rejects, exactly 5 matches', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '5plus' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 4 }), filters)).toBe(false);
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 5 }), filters)).toBe(true);
  });

  it('"10plus" boundary: exactly 9 rejects, exactly 10 matches', () => {
    const filters = { ...DEFAULT_FILTERS, championships: '10plus' };
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 9 }), filters)).toBe(false);
    expect(matchesAdvancedFilters(makeWrestler({ totalTitleReigns: 10 }), filters)).toBe(true);
  });

  it('missing totalTitleReigns treated as 0 for "none" filter', () => {
    const filters = { ...DEFAULT_FILTERS, championships: 'none' };
    const wrestler = makeWrestler({});
    delete wrestler.totalTitleReigns;
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // ── Edge cases: multiple eras spanning multiple decades ─────────────────

  it('wrestler with territory + modern eras matches both 1960s and 2020s', () => {
    const wrestler = makeWrestler({
      eras: [
        { era: 'territory', character: 'Old school' },
        { era: 'modern', character: 'New school' },
      ],
    });
    const filter60s = { ...DEFAULT_FILTERS, decades: ['1960s'] };
    const filter20s = { ...DEFAULT_FILTERS, decades: ['2020s'] };
    expect(matchesAdvancedFilters(wrestler, filter60s)).toBe(true);
    expect(matchesAdvancedFilters(wrestler, filter20s)).toBe(true);
  });

  // ── Edge cases: all decades selected ────────────────────────────────────

  it('selecting all decades matches any wrestler with eras', () => {
    const filters = {
      ...DEFAULT_FILTERS,
      decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    };
    const wrestler = makeWrestler({ eras: [{ era: 'pg', character: 'Family friendly' }] });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  // ── Edge cases: combined filter rejection scenarios ─────────────────────

  it('status passes but championships fails => rejected', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active'], championships: '10plus' };
    const wrestler = makeWrestler({ totalTitleReigns: 3 });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });

  it('gender + decade both must pass', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'female', decades: ['2020s'] };
    const wrestler = makeWrestler({
      gender: 'female',
      eras: [{ era: 'modern', character: 'Star' }],
    });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(true);
  });

  it('gender passes but decade fails => rejected', () => {
    const filters = { ...DEFAULT_FILTERS, gender: 'female', decades: ['1960s'] };
    const wrestler = makeWrestler({
      gender: 'female',
      eras: [{ era: 'modern', character: 'Star' }],
    });
    expect(matchesAdvancedFilters(wrestler, filters)).toBe(false);
  });
});

// ── countActiveFilters edge cases ────────────────────────────────────────────

describe('countActiveFilters edge cases', () => {
  it('returns 0 for undefined input', () => {
    expect(countActiveFilters(undefined)).toBe(0);
  });

  it('returns 0 for false input', () => {
    expect(countActiveFilters(false)).toBe(0);
  });

  it('counts single status as 1', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active'] };
    expect(countActiveFilters(filters)).toBe(1);
  });

  it('counts all three statuses as 3', () => {
    const filters = { ...DEFAULT_FILTERS, status: ['active', 'deceased', 'hallOfFame'] };
    expect(countActiveFilters(filters)).toBe(3);
  });

  it('counts single decade as 1', () => {
    const filters = { ...DEFAULT_FILTERS, decades: ['2020s'] };
    expect(countActiveFilters(filters)).toBe(1);
  });

  it('counts all 7 decades as 7', () => {
    const filters = {
      ...DEFAULT_FILTERS,
      decades: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    };
    expect(countActiveFilters(filters)).toBe(7);
  });

  it('max possible count with all filter types active', () => {
    const filters = {
      status: ['active', 'deceased', 'hallOfFame'],
      gender: 'male',
      championships: 'has',
      decades: ['1980s', '1990s', '2000s', '2010s', '2020s'],
      fightingStyle: 'grappler',
    };
    // 3 + 1 + 1 + 5 + 1 = 11
    expect(countActiveFilters(filters)).toBe(11);
  });

  it('only arrays and non-null values contribute to count', () => {
    const filters = {
      status: [],
      gender: null,
      championships: null,
      decades: ['2000s'],
      fightingStyle: null,
    };
    expect(countActiveFilters(filters)).toBe(1);
  });
});
