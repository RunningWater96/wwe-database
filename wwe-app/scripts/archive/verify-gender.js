import G from '../src/data/gender.js';
import W from '../src/data/wrestlers.js';

const femaleIds = new Set(Object.keys(G).map(Number));
const females = W.filter((w) => femaleIds.has(w.id));
const males = W.filter((w) => !femaleIds.has(w.id));

console.log(`Total: ${W.length} | Male: ${males.length} | Female: ${females.length}`);
console.log('\nFemale wrestlers:');
for (const f of females) {
  console.log(`  ${f.id}: ${f.name}`);
}
