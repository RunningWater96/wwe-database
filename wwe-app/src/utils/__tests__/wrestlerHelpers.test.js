import { describe, it, expect } from 'vitest';
import {
  getWrestlerInitials,
  getPlaceholderColor,
  isTagTeam,
  classifyEntry,
  stripDiacritics,
  PLACEHOLDER_COLORS,
} from '../wrestlerHelpers';

describe('getWrestlerInitials', () => {
  it('returns two initials for multi-word names', () => {
    expect(getWrestlerInitials('John Cena')).toBe('JC');
    expect(getWrestlerInitials('The Rock')).toBe('R'); // strips "The"
    expect(getWrestlerInitials('Stone Cold Steve Austin')).toBe('SA');
  });

  it('returns single initial for one-word names', () => {
    expect(getWrestlerInitials('Undertaker')).toBe('U');
    expect(getWrestlerInitials('Kane')).toBe('K');
  });
});

describe('getPlaceholderColor', () => {
  it('returns a valid hex color', () => {
    const color = getPlaceholderColor(1);
    expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it('wraps around the palette', () => {
    const len = PLACEHOLDER_COLORS.length;
    expect(getPlaceholderColor(0)).toBe(getPlaceholderColor(len));
  });
});

describe('stripDiacritics', () => {
  it('removes accents', () => {
    expect(stripDiacritics('André')).toBe('Andre');
    expect(stripDiacritics('Résistance')).toBe('Resistance');
  });

  it('passes through plain ASCII', () => {
    expect(stripDiacritics('John Cena')).toBe('John Cena');
  });
});

describe('isTagTeam', () => {
  it('detects & in name', () => {
    expect(isTagTeam({ name: 'Edge & Christian', realName: 'Adam Copeland & Jason Reso' })).toBe(
      true,
    );
  });

  it('detects known group names', () => {
    expect(isTagTeam({ name: 'The Usos', realName: 'Jimmy & Jey Uso' })).toBe(true);
  });

  it('returns false for individuals', () => {
    expect(isTagTeam({ name: 'John Cena', realName: 'John Felix Anthony Cena Jr.' })).toBe(false);
  });
});

describe('classifyEntry', () => {
  it('classifies individuals', () => {
    expect(classifyEntry({ name: 'The Rock', realName: 'Dwayne Johnson' })).toBe('individual');
  });

  it('classifies tag teams', () => {
    expect(classifyEntry({ name: 'The Hardy Boyz', realName: 'Matt & Jeff Hardy' })).toBe(
      'tagTeam',
    );
  });

  it('classifies factions (2+ commas)', () => {
    expect(
      classifyEntry({ name: 'The Shield', realName: 'Roman Reigns, Dean Ambrose, Seth Rollins' }),
    ).toBe('faction');
  });

  it('classifies duplicates', () => {
    expect(classifyEntry({ name: 'Dude Love', realName: 'Already covered under Mick Foley' })).toBe(
      'duplicate',
    );
  });

  // ── Duplicate edge cases ──────────────────────────────────────────────

  it('classifies "Already covered" with different casing as duplicate', () => {
    expect(classifyEntry({ name: 'Cactus Jack', realName: 'already covered under Mick Foley' })).toBe(
      'duplicate',
    );
  });

  it('classifies "Already covered" with no extra text as duplicate', () => {
    expect(classifyEntry({ name: 'Some Alias', realName: 'Already covered' })).toBe('duplicate');
  });

  it('classifies "various" (exact) as duplicate', () => {
    expect(classifyEntry({ name: 'Spirit Squad', realName: 'various' })).toBe('duplicate');
  });

  it('classifies "Various members" as duplicate', () => {
    expect(classifyEntry({ name: 'Some Stable', realName: 'Various members over the years' })).toBe(
      'duplicate',
    );
  });

  it('does NOT classify "various" in the middle of realName as duplicate', () => {
    // Only "various" at the start triggers duplicate
    expect(classifyEntry({ name: 'Test', realName: 'John various Smith' })).toBe('individual');
  });

  // ── Faction edge cases ────────────────────────────────────────────────

  it('classifies faction when 1 comma + & present (3+ members implied)', () => {
    expect(
      classifyEntry({ name: 'Evolution', realName: 'Triple H, Batista & Ric Flair' }),
    ).toBe('faction');
  });

  it('classifies faction with "& others" pattern', () => {
    expect(
      classifyEntry({ name: 'The Ministry', realName: 'Undertaker & others' }),
    ).toBe('faction');
  });

  it('classifies faction with "& more" pattern', () => {
    expect(
      classifyEntry({ name: 'Right to Censor', realName: 'Steven Richards & more' }),
    ).toBe('faction');
  });

  it('classifies faction with 3+ comma-separated members', () => {
    expect(
      classifyEntry({
        name: 'DX',
        realName: 'Triple H, Shawn Michaels, Chyna, X-Pac',
      }),
    ).toBe('faction');
  });

  it('classifies faction with parenthesized multi-member name pattern', () => {
    expect(
      classifyEntry({ name: 'Group (A, B, C, D)', realName: 'Some Group' }),
    ).toBe('faction');
  });

  // ── Tag team edge cases ───────────────────────────────────────────────

  it('classifies tag team by & in name (not realName)', () => {
    expect(classifyEntry({ name: 'Edge & Christian', realName: 'Adam Copeland' })).toBe('tagTeam');
  });

  it('classifies tag team by GROUP_NAMES_RE match', () => {
    expect(classifyEntry({ name: 'The Usos', realName: 'Jimmy Uso' })).toBe('tagTeam');
  });

  it('classifies tag team for Demolition (GROUP_NAMES_RE)', () => {
    expect(classifyEntry({ name: 'Demolition', realName: 'Ax' })).toBe('tagTeam');
  });

  it('classifies tag team for Legion of Doom (GROUP_NAMES_RE)', () => {
    expect(classifyEntry({ name: 'Legion of Doom', realName: 'Hawk' })).toBe('tagTeam');
  });

  it('classifies tag team for New Day (GROUP_NAMES_RE)', () => {
    expect(classifyEntry({ name: 'New Day', realName: 'Kofi Kingston' })).toBe('tagTeam');
  });

  // ── Individual edge cases ─────────────────────────────────────────────

  it('classifies single-name wrestler as individual', () => {
    expect(classifyEntry({ name: 'Undertaker', realName: 'Mark Calaway' })).toBe('individual');
  });

  it('classifies wrestler with long realName (no commas/&) as individual', () => {
    expect(
      classifyEntry({ name: 'John Cena', realName: 'John Felix Anthony Cena Jr.' }),
    ).toBe('individual');
  });

  it('classifies wrestler with hyphenated realName as individual', () => {
    expect(
      classifyEntry({ name: 'Test Wrestler', realName: 'Mary-Jane Watson-Parker' }),
    ).toBe('individual');
  });

  it('classifies wrestler whose name contains "and" (not &) as individual', () => {
    expect(
      classifyEntry({ name: 'Rock and Roll Express', realName: 'Ricky Morton' }),
    ).toBe('individual');
  });
});

// ── isTagTeam edge cases ──────────────────────────────────────────────────

describe('isTagTeam edge cases', () => {
  it('detects & in realName even when not in name', () => {
    expect(isTagTeam({ name: 'The Hardy Boyz', realName: 'Matt & Jeff Hardy' })).toBe(true);
  });

  it('returns true for "Already covered" in realName', () => {
    expect(isTagTeam({ name: 'Dude Love', realName: 'Already covered under Mick Foley' })).toBe(
      true,
    );
  });

  it('returns true for "various" in realName', () => {
    expect(isTagTeam({ name: 'Some Group', realName: 'various members' })).toBe(true);
  });

  it('returns true for GROUP_NAMES_RE match', () => {
    expect(isTagTeam({ name: 'The Usos', realName: 'Jimmy Uso' })).toBe(true);
    expect(isTagTeam({ name: 'Demolition', realName: 'Ax' })).toBe(true);
    expect(isTagTeam({ name: 'Too Cool', realName: 'Scotty 2 Hotty' })).toBe(true);
  });

  it('returns true for 2+ commas in realName', () => {
    expect(isTagTeam({ name: 'The Shield', realName: 'A, B, C' })).toBe(true);
  });

  it('returns true for parenthesized multi-member pattern', () => {
    expect(isTagTeam({ name: 'Group (A, B, C)', realName: 'Some People' })).toBe(true);
  });

  it('returns false for normal individual', () => {
    expect(isTagTeam({ name: 'Brock Lesnar', realName: 'Brock Edward Lesnar' })).toBe(false);
  });
});

// ── getWrestlerInitials edge cases ────────────────────────────────────────

describe('getWrestlerInitials edge cases', () => {
  it('strips "The" prefix and returns remaining initials', () => {
    expect(getWrestlerInitials('The Undertaker')).toBe('U');
  });

  it('strips "the" prefix case-insensitively', () => {
    expect(getWrestlerInitials('the Miz')).toBe('M');
  });

  it('handles three-word names (first + last initial)', () => {
    expect(getWrestlerInitials('Big E Langston')).toBe('BL');
  });

  it('handles "The" followed by two words', () => {
    expect(getWrestlerInitials('The Iron Sheik')).toBe('IS');
  });
});
