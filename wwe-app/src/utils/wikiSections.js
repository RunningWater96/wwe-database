import { THEMES } from '../data';

// Module-level caches, populated by initWikiSectionData()
let _moves = null;
let _promos = null;
let _matches = null;
let _trainers = null;

/**
 * Load all data needed by wiki sections. Call once when WikiTab mounts.
 */
export async function initWikiSectionData() {
  if (_moves && _promos && _matches && _trainers) return;
  const [moveMod, promoMod, matchMod, trainerMod] = await Promise.all([
    import('../data/moves'),
    import('../data/promos'),
    import('../data/matches'),
    import('../data/trainers'),
  ]);
  _moves = moveMod.default;
  _promos = promoMod.default;
  _matches = matchMod.default;
  _trainers = trainerMod.default;
}

// Check if a wrestler has any training relationships (as trainer or trainee)
export function hasTrainingData(wrestler) {
  if (!_trainers) return false;
  const names = new Set([wrestler.name.toLowerCase()]);
  (wrestler.alternateNames || []).forEach((n) => names.add(n.toLowerCase()));

  // Check if this wrestler is listed as a trainee of anyone
  const trainedBy = _trainers.filter((t) =>
    t.trainees.some((tr) => names.has(tr.toLowerCase())),
  );
  if (trainedBy.length > 0) return true;

  // Check if this wrestler is a trainer
  const asTrainer = _trainers.find((t) => names.has(t.trainer.toLowerCase()));
  if (asTrainer && asTrainer.trainees.length > 0) return true;

  return false;
}

// Get training data for a wrestler
export function getTrainingData(wrestler) {
  if (!_trainers) return { trainedBy: [], trainees: [] };
  const names = new Set([wrestler.name.toLowerCase()]);
  (wrestler.alternateNames || []).forEach((n) => names.add(n.toLowerCase()));

  const trainedBy = _trainers
    .filter((t) => t.trainees.some((tr) => names.has(tr.toLowerCase())))
    .map((t) => t.trainer);

  const asTrainer = _trainers.find((t) => names.has(t.trainer.toLowerCase()));
  const trainees = asTrainer ? asTrainer.trainees : [];

  return { trainedBy, trainees };
}

export function getWrestlerMoves(wrestler) {
  if (!_moves) return [];
  const names = new Set([wrestler.name.toLowerCase()]);
  wrestler.alternateNames?.forEach((n) => names.add(n.toLowerCase()));
  return _moves.filter((m) => m.knownUsers.some((u) => names.has(u.toLowerCase())));
}

let _wrestlerMoveCategories = null;
export function getWrestlerMoveCategories() {
  if (_wrestlerMoveCategories) return _wrestlerMoveCategories;
  if (!_moves) return new Map();
  _wrestlerMoveCategories = new Map();
  _moves.forEach((m) => {
    m.knownUsers.forEach((userName) => {
      const key = userName.toLowerCase();
      if (!_wrestlerMoveCategories.has(key)) {
        _wrestlerMoveCategories.set(key, new Set());
      }
      _wrestlerMoveCategories.get(key).add(m.category);
    });
  });
  return _wrestlerMoveCategories;
}

export const WIKI_SECTIONS = [
  {
    id: 'overview',
    label: 'Overview',
    source: 'generated',
    hasContent: (_w, _bio, _personal, wiki) => !!wiki?.overview,
  },
  {
    id: 'earlyLife',
    label: 'Early Life',
    source: 'generated',
    hasContent: (_w, _bio, _personal, wiki) => !!wiki?.earlyLife,
  },
  {
    id: 'career',
    label: 'Career',
    source: 'hybrid',
    hasContent: (w, _bio, _personal, wiki) =>
      w.eras.some((e) => e.era !== 'all' && e.character && e.persona) || !!wiki?.career,
  },
  {
    id: 'careerTimeline',
    label: 'Career Timeline',
    source: 'existing',
    hasContent: (w) => {
      const hasChampYears = w.championships?.some((c) =>
        c.title && !c.title.startsWith('See entry') && c.firstReign && c.firstReign !== 'N/A',
      );
      const hasInjuries = w.injuries?.length > 0;
      return hasChampYears || hasInjuries;
    },
  },
  {
    id: 'inRingStyle',
    label: 'In-Ring Style',
    source: 'generated',
    hasContent: (_w, _bio, _personal, wiki) => !!wiki?.inRingStyle,
  },
  {
    id: 'promos',
    label: 'Famous Promos & Catchphrases',
    source: 'existing',
    hasContent: (w) => _promos?.[w.id]?.length > 0,
  },
  {
    id: 'notableMatches',
    label: 'Notable Matches',
    source: 'existing',
    hasContent: (w) => _matches?.[w.id]?.length > 0,
  },
  {
    id: 'themeMusic',
    label: 'Entrance Theme Music',
    source: 'existing',
    hasContent: (w) => THEMES[w.id]?.length > 0,
  },
  {
    id: 'moves',
    label: 'Signature Moves',
    source: 'existing',
    hasContent: (w) => getWrestlerMoves(w).length > 0,
  },
  {
    id: 'championships',
    label: 'Championships & Accomplishments',
    source: 'existing',
    hasContent: (w) =>
      w.championships?.some((c) => c.title && !c.title.startsWith('See entry')) || w.hallOfFame,
  },
  {
    id: 'feuds',
    label: 'Notable Feuds & Rivalries',
    source: 'existing',
    hasContent: (w) => w.rivals?.length > 0 || w.allies?.length > 0 || w.managers?.length > 0,
  },
  {
    id: 'teams',
    label: 'Teams & Factions',
    source: 'existing',
    hasContent: (w) => w.tagTeams?.length > 0 || w.factions?.length > 0,
  },
  {
    id: 'training',
    label: 'Training Lineage',
    source: 'existing',
    hasContent: (w) => hasTrainingData(w),
  },
  {
    id: 'brandHistory',
    label: 'Brand History',
    source: 'existing',
    hasContent: (w) => w.brandHistory?.length > 0,
  },
  {
    id: 'personalLife',
    label: 'Personal Life',
    source: 'existing',
    hasContent: (_w, _bio, personal) =>
      personal?.spouses?.length > 0 ||
      personal?.children?.length > 0 ||
      personal?.legalIssues?.length > 0 ||
      personal?.announcing?.length > 0,
  },
  {
    id: 'injuries',
    label: 'Injuries & Health',
    source: 'existing',
    hasContent: (w) => w.injuries?.length > 0 || !!w.deceased,
  },
  {
    id: 'legacy',
    label: 'Legacy & Cultural Impact',
    source: 'generated',
    hasContent: (_w, _bio, _personal, wiki) => !!wiki?.legacy,
  },
  {
    id: 'trivia',
    label: 'Trivia & Facts',
    source: 'existing',
    hasContent: (_w, _bio, personal) => personal?.facts?.length > 0,
  },
];

export const GROUP_SECTIONS = [
  {
    id: 'groupOverview',
    label: 'Overview',
    source: 'generated',
    hasContent: () => true,
  },
  {
    id: 'members',
    label: 'Members',
    source: 'generated',
    hasContent: (w) => w.realName && w.realName !== w.name && w.realName !== 'N/A',
  },
  {
    id: 'career',
    label: 'Career Timeline',
    source: 'existing',
    hasContent: (w) => w.eras.some((e) => e.era !== 'all' && e.character && e.persona),
  },
  {
    id: 'championships',
    label: 'Championships & Accomplishments',
    source: 'existing',
    hasContent: (w) =>
      w.championships?.some((c) => c.title && !c.title.startsWith('See entry')) || w.hallOfFame,
  },
  {
    id: 'feuds',
    label: 'Notable Feuds & Rivalries',
    source: 'existing',
    hasContent: (w) => w.rivals?.length > 0 || w.allies?.length > 0 || w.managers?.length > 0,
  },
  {
    id: 'teams',
    label: 'Related Teams & Factions',
    source: 'existing',
    hasContent: (w) => w.tagTeams?.length > 0 || w.factions?.length > 0,
  },
  {
    id: 'injuries',
    label: 'Injuries & Health',
    source: 'existing',
    hasContent: (w) => w.injuries?.length > 0 || !!w.deceased,
  },
];
