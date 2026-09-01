import W from '../src/data/wrestlers.js';

const names = [
  'Matt Hardy', 'Jeff Hardy', 'Bret Hart', 'Jim Neidhart', 'The Rock',
  'Shawn Michaels', 'Adam Cole', 'Bayley', 'Roman Reigns', 'Vince McMahon',
  'Kevin Nash', 'Haku', 'Eddie Guerrero', 'Rick Rude', 'Arn Anderson',
  'Marty Jannetty', 'Road Dogg', 'Ric Flair', 'Bray Wyatt', 'AJ Styles',
  'Wade Barrett', 'Lance Storm', 'Pete Dunne', 'Eric Young',
  'Bobby Heenan', 'Savio Vega', 'Kurrgan', 'Brad Armstrong', 'Kevin Sullivan',
  'Chavo Guerrero Sr.', 'JBL', 'Undertaker', 'Triple H', 'Liv Morgan',
  'Stevie Richards', 'Roderick Strong', 'Drew McIntyre', 'Sonya Deville',
  'Ali', 'Santos Escobar', 'Nunzio', 'Asuka', 'Tyson Kidd',
  'Nikki Bella', 'Zack Ryder', 'Mia Yim', 'Greg Valentine',
  'Terry Funk', 'Terri Runnels', 'Akeem', 'Warlord',
  'Michael PS Hayes', 'Chief Jay Strongbow', 'Mansoor',
  'Judy Martin', 'Mr. Fuji', 'New Jack', 'Elijah Burke',
  'Hank Walker', 'Skip',
];

for (const n of names) {
  const matches = W.filter((x) => x.name === n);
  if (matches.length > 0) {
    matches.forEach((m) => console.log(`${n} → id=${m.id}`));
  } else {
    console.log(`${n} → NOT FOUND`);
  }
}
