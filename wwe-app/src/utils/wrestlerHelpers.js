export const PLACEHOLDER_COLORS = [
  '#8B0000',
  '#4A0E4E',
  '#1B3A4B',
  '#2D4A22',
  '#4A3728',
  '#3B1F2B',
  '#1A3C34',
  '#2E1A47',
  '#4A2C17',
  '#1F3A5F',
  '#5C1A1A',
  '#2B3A1A',
  '#3A2A1A',
  '#1A2A3A',
  '#3A1A3A',
];

export function getWrestlerInitials(name) {
  const words = name.replace(/^The\s+/i, '').split(/\s+/);
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function getPlaceholderColor(id) {
  return PLACEHOLDER_COLORS[id % PLACEHOLDER_COLORS.length];
}

/** Strip diacritics/accents for search matching (é→e, ñ→n, etc.) */
export function stripDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const GROUP_NAMES_RE =
  /^(Men on a Mission|The Highlanders|La Resistance|The Basham Brothers|Hit Row|The Bushwhackers|The Rockers|Demolition|Legion of Doom|The Hart Foundation|The Headbangers|The Godwinns|The Headshrinkers|Natural Disasters|The Smoking Gunns|The Body Donnas|The New Blackjacks|Too Much|The Mean Street Posse|Right to Censor|3-Minute Warning|The Gymini|Deuce and Domino|Cryme Tyme|The Colons|The Usos|The Authors of Pain|Heavy Machinery|The Viking Raiders|The Hurt Business|Retribution|Alpha Academy|Los Lotharios|Maximum Male Models|Pretty Deadly|The Creed Brothers|Legado del Fantasma|Gallus|Chase University|The Family|Judgment Day|Imperium|Spirit Squad|Too Cool|Los Guerreros|World's Greatest Tag Team|Kai En Tai|The Mexicools|The Heart Throbs|Grizzled Young Veterans|London and Kendrick|The Quebecers|Money Inc\.|La Résistance|The Bar|RKBro|Rated-RKO|Undisputed Era|New Day|D-Generation X|DX|nWo|The Shield|Evolution|The Corporation|The Ministry|The Brood|Nation of Domination|Damage CTRL|The Bloodline|The New Nexus|The Nexus|The Corre|Sanity|War Games|The Steiner Brothers)$/i;

export function isTagTeam(w) {
  if (w.name.includes(' & ') || w.realName.includes(' & ')) return true;
  if (
    w.realName.toLowerCase().startsWith('already covered') ||
    w.realName.toLowerCase().startsWith('various')
  )
    return true;
  const commaCount = (w.realName.match(/,/g) || []).length;
  if (commaCount >= 2) return true;
  if (GROUP_NAMES_RE.test(w.name)) return true;
  if (/\(.*,.*,/.test(w.name)) return true;
  return false;
}

export function classifyEntry(w) {
  const rl = w.realName.toLowerCase();

  // Duplicates / alias entries — stay hidden
  if (rl.startsWith('already covered') || rl === 'various' || rl.startsWith('various '))
    return 'duplicate';

  // Factions: 3+ members (2+ commas, or comma + &), or "& others"/"& more" pattern
  const commaCount = (w.realName.match(/,/g) || []).length;
  if (commaCount >= 2) return 'faction';
  if (commaCount >= 1 && rl.includes(' & ')) return 'faction';
  if (rl.includes('& others') || rl.includes('& more')) return 'faction';

  // Tag teams: " & " in name or realName
  if (w.name.includes(' & ') || w.realName.includes(' & ')) return 'tagTeam';

  // Named groups from regex
  if (GROUP_NAMES_RE.test(w.name)) return 'tagTeam';

  // Parenthesized multi-member pattern
  if (/\(.*,.*,/.test(w.name)) return 'faction';

  return 'individual';
}
