import fs from 'fs';

const statsContent = fs.readFileSync('./src/data/stats.js', 'utf8');
const autoStart = statsContent.indexOf('AUTO-GENERATED REMAINING ENTRIES');
if (autoStart === -1) { console.log('No auto-generated section found'); process.exit(0); }

const autoSection = statsContent.slice(autoStart);
const autoIds = new Set([...autoSection.matchAll(/^\s+(\d+):/gm)].map(m => parseInt(m[1])));

const wrestlersContent = fs.readFileSync('./src/data/wrestlers.js', 'utf8');
const blocks = wrestlersContent.split('\n  {').slice(1);
const notable = [];
for (const block of blocks) {
  const idM = block.match(/id:\s*(\d+)/);
  const nameM = block.match(/name:\s*'([^']*(?:\.[^']*)*)'/);
  const reignsM = block.match(/totalTitleReigns:\s*(\d+)/);
  const hofM = block.match(/hallOfFame:\s*true/);
  if (idM == null || nameM == null) continue;
  const id = parseInt(idM[1]);
  if (autoIds.has(id) === false) continue;
  const reigns = reignsM ? parseInt(reignsM[1]) : 0;
  const hof = hofM != null;
  const eraCount = [...block.matchAll(/era:\s*'/g)].length;
  const score = reigns * 3 + (hof ? 10 : 0) + eraCount * 2;
  if (score >= 3) notable.push({ id, name: nameM[1], reigns, hof, eraCount, score });
}
notable.sort((a, b) => b.score - a.score);
console.log('Notable auto-generated entries (' + notable.length + '):');
notable.forEach(e => console.log(e.id + ': ' + e.name + ' (reigns=' + e.reigns + ', hof=' + e.hof + ', eras=' + e.eraCount + ', score=' + e.score + ')'));
