import W from '../src/data/wrestlers.js';
import { isTagTeam } from '../src/utils/wrestlerHelpers.js';

// Get all tag teams/factions
const teams = W.filter((w) => isTagTeam(w));

// Known all-female teams/factions
const FEMALE_TEAMS = new Set([
  'The Bella Twins',
  'The Funkettes',
  'The Kabuki Warriors',
  'The Glamour Girls',
  'The Jumping Bomb Angels',
  'Damage CTRL',
  'Riott Squad',
  'Team B.A.D.',
  'Pure Fusion Collective',
]);

// Known mixed-gender teams/factions
const MIXED_TEAMS = new Set([
  'D-Generation X',
  'The Authority',
  'Edge & Lita',
  'The Hardy Family',
  'The Beautiful People',
  'Rated-RKO',
  'The Straight Edge Society',
  'The Ministry of Darkness',
  'The Corporation',
  'Right to Censor',
  'LayCool',
]);

console.log('=== ALL TAG TEAMS/FACTIONS ===\n');
for (const t of teams) {
  let gender = 'male';
  if (FEMALE_TEAMS.has(t.name)) gender = 'female';
  else if (MIXED_TEAMS.has(t.name)) gender = 'mixed';
  else {
    // Check realName for female indicators
    const rn = (t.realName || '').toLowerCase();
    const name = t.name.toLowerCase();
    // Check if team members include known female names
    const femaleIndicators = [
      'chyna',
      'lita',
      'trish',
      'steph',
      'miss elizabeth',
      'sherri',
      'sable',
      'marlena',
      'sunny',
      'terri',
      'debra',
      'molly',
      'ivory',
      'jazz',
      'victoria',
      'mickie',
      'melina',
      'beth phoenix',
      'natalya',
      'naomi',
      'cameron',
      'paige',
      'nikki',
      'brie',
      'sasha',
      'bayley',
      'becky',
      'charlotte',
      'alexa',
      'asuka',
      'kairi',
      'rhea',
      'bianca',
    ];
    const hasFemale = femaleIndicators.some((f) => rn.includes(f));
    const hasMale = !hasFemale; // simplified
    if (hasFemale && !name.includes('women')) {
      // Could be mixed or female - log for review
    }
  }
  const marker =
    FEMALE_TEAMS.has(t.name) ? '[FEMALE]' : MIXED_TEAMS.has(t.name) ? '[MIXED]' : '[MALE]';
  console.log(`${t.id}: ${t.name} — ${t.realName} ${marker}`);
}
