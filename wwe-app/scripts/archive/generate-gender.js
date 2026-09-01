import W from '../src/data/wrestlers.js';
import { writeFileSync } from 'fs';

// Known female wrestlers/personalities — identified by name
const FEMALE_NAMES = new Set([
  // Hall of Famers & legends
  'Fabulous Moolah',
  'Mae Young',
  'Wendi Richter',
  'Alundra Blayze',
  'Sensational Sherri',
  'Miss Elizabeth',
  'Luna Vachon',
  'Jacqueline',
  'Ivory',
  'Molly Holly',
  'Jazz',
  'Lita',
  'Trish Stratus',
  'Chyna',
  'Sable',
  'Sunny',
  'Stacy Keibler',
  'Torrie Wilson',

  // Attitude/Ruthless era
  'Victoria',
  'Gail Kim',
  'Beth Phoenix',
  'Mickie James',
  'Melina',
  'Michelle McCool',
  'Maryse',
  'Candice Michelle',
  'Maria Kanellis',
  'Layla',
  'Jillian Hall',
  'Kelly Kelly',
  'Eve Torres',
  'Kaitlyn',
  'AJ Lee',
  'Aksana',

  // Divas era / Reality era
  'Natalya',
  'Tamina',
  'Naomi',
  'Cameron',
  'Rosa Mendes',
  'Summer Rae',
  'Paige',
  'Nikki Bella',
  'Brie Bella',
  'Emma',
  'Charlotte Flair',
  'Sasha Banks',
  'Bayley',
  'Becky Lynch',
  'Dana Brooke',
  'Nia Jax',
  'Alexa Bliss',
  'Carmella',
  'Asuka',
  'Kairi Sane',
  'Liv Morgan',
  'Mandy Rose',
  'Sonya Deville',
  'Lacey Evans',
  'Shayna Baszler',
  'Bianca Belair',
  'Rhea Ripley',
  'Raquel Rodriguez',
  'Shotzi',
  'Tegan Nox',
  'Candice LeRae',
  'Io Shirai',
  'Dakota Kai',
  'Ember Moon',
  'Ruby Riott',
  'Sarah Logan',

  // Modern era
  'Ronda Rousey',
  'Jade Cargill',
  'IYO SKY',
  'Tiffany Stratton',
  'Lyra Valkyria',
  'Zelina Vega',
  'Nikki Cross',
  'Nikkita Lyons',
  'Cora Jade',
  'Roxanne Perez',
  'Meiko Satomura',
  'Wendy Choo',
  'Katana Chance',
  'Kayden Carter',
  'Zoey Stark',
  'Chelsea Green',
  'Piper Niven',
  'Alba Fyre',
  'Isla Dawn',

  // NXT UK / international
  'Kay Lee Ray',
  'Toni Storm',
  'Jinny',

  // Historical / territory era
  'Judy Martin',
  'Velvet McIntyre',
  'Rockin Robin',
  'Bertha Faye',
  'Bull Nakano',
  'Madusa',

  // Managers / valets / non-wrestlers
  'Terri Runnels',
  'Marlena',
  'Debra',

  // Recently added entries (IDs 1557-1624)
  'Reby Hardy',
  'Hiroko',
  'Ariel',
  'Britt Baker',
  'Diana Hart',
  'Katie Lea',
  'Kimberly Page',
  'Adriana Rizzo',
  'Rosemary',
  'Emilia McKenzie',
  'Mercedes Martinez',
  'Beulah McGillicutty',
  'Taryn Terrell',

  // Tag teams that are all-female
  'The Bella Twins',
  'The Funkettes',
  'The Kabuki Warriors',
]);

// Also match by realName patterns for entries we might miss
const FEMALE_REAL_NAMES = new Set([
  'Sarah Rowe', // Sarah Logan
  'Rebecca Victoria Reyes', // Reby Hardy
  'Hiroko Suzuki', // Hiroko
  'Shelly Martinez', // Ariel
  'Brittany Baker', // Britt Baker
  'Diana Joyce Hart', // Diana Hart
  'Katarina Waters', // Katie Lea
  'Kimberly Bacon', // Kimberly Page
  'Anna Jade Keefer', // Adriana Rizzo
  'Holly Letkeman', // Rosemary
  'Millie McKenzie', // Emilia McKenzie
  'Jazmin Benitez', // Mercedes Martinez
  'Trisa Hayes', // Beulah McGillicutty
  'Taryn Terrell', // Taryn Terrell
  'Nadine Ellis & Traci Swain', // The Funkettes
]);

// Build the gender map
const genderMap = {};
let femaleCount = 0;
let maleCount = 0;

for (const w of W) {
  const isFemale =
    FEMALE_NAMES.has(w.name) ||
    FEMALE_REAL_NAMES.has(w.realName);

  if (isFemale) {
    genderMap[w.id] = 'female';
    femaleCount++;
  } else {
    maleCount++;
  }
}

console.log(`Total: ${W.length}, Female: ${femaleCount}, Male: ${maleCount}`);

// List females for verification
const females = W.filter((w) => genderMap[w.id] === 'female');
console.log('\nFemale entries:');
for (const f of females) {
  console.log(`  ${f.id}: ${f.name}`);
}

// Generate the file content - only store female IDs (male is default)
const lines = Object.entries(genderMap)
  .map(([id, gender]) => `  ${id}: '${gender}',`)
  .join('\n');

const fileContent = `const WRESTLER_GENDER = {\n${lines}\n};\n\nexport default WRESTLER_GENDER;\n`;

const filePath = decodeURIComponent(
  new URL('../src/data/gender.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
writeFileSync(filePath, fileContent, 'utf-8');
console.log(`\nWrote gender.js with ${femaleCount} female entries`);
