import { readFileSync, writeFileSync } from 'fs';

// Retry with alternate Wikipedia titles for entries that had NO IMAGE
const RETRY_TITLES = {
  1560: ['Akira_Taue'], // Try without disambiguator
  1563: ['Diana_Hart_Smith', 'Diana_Hart_(author)'],
  1564: ['Dave_Taylor_(wrestler)', 'David_Taylor_(wrestler)'],
  1565: ['Reby_Hardy', 'Reby_Sky'],
  1568: ['Aaron_Aguilera', 'Jesús_(wrestler)'],
  1572: ['Vic_Grimes'],
  1575: ['MJF_(wrestler)', 'Maxwell_Jacob_Friedman'],
  1583: ['Katie_Lea_Burchill', 'Katarina_Waters', 'Winter_(wrestler)'],
  1584: ['Kimberly_Page', 'Kimberly_Bacon'],
  1594: ['Rey_Fenix', 'Penta_El_Zero_Miedo', 'The_Lucha_Brothers'],
  1599: ['Scott_Putski', 'Ivan_Putski'],
  1601: ['The_Grand_Wizard_of_Wrestling', 'Grand_Wizard_(manager)', 'Ernie_Roth'],
  1602: ['The_Moondogs_(professional_wrestling)', 'Moondogs_(tag_team)'],
  1603: ['Pierre_Carl_Ouellet', 'The_Quebecers', 'Jacques_Rougeau'],
  1604: ['The_Young_Stallions', 'Jim_Powers', 'Paul_Roma'],
  1606: ['Butterbean', 'Eric_Esch'],
  1611: ['Dory_Funk_Sr.', 'Dory_Funk'],
  1612: ['Miguel_Pérez_(wrestler)', 'Miguel_Perez_(wrestler)', 'Antonino_Rocca'],
  1613: ['The_Destroyer_(wrestler)', 'Dick_Beyer'],
  1617: ['Beulah_McGillicutty', 'Tommy_Dreamer'],
  1618: ['Eddie_Gilbert', 'Eddie_Gilbert_(wrestler)', 'Hot_Stuff_Eddie_Gilbert'],
};

const UA = 'WWEDatabaseApp/1.0 (personal project; contact: none)';

async function getImageUrl(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=400&format=json`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) return null;
  const data = await resp.json();
  const pages = data.query?.pages;
  if (!pages) return null;
  for (const page of Object.values(pages)) {
    if (page.thumbnail?.source) return page.thumbnail.source;
  }
  return null;
}

async function main() {
  const results = {};
  const entries = Object.entries(RETRY_TITLES);
  console.log(`Retrying ${entries.length} entries with alternate titles...\n`);

  for (const [idStr, titles] of entries) {
    const id = parseInt(idStr);
    process.stdout.write(`${id}: `);
    let found = false;
    for (const title of titles) {
      process.stdout.write(`${title} ... `);
      try {
        const imgUrl = await getImageUrl(title);
        if (imgUrl) {
          results[id] = imgUrl;
          console.log('OK');
          found = true;
          break;
        }
      } catch (err) {
        // continue
      }
      await new Promise((r) => setTimeout(r, 200));
    }
    if (!found) console.log('NO IMAGE');
  }

  console.log(`\nFound ${Object.keys(results).length} additional images.`);

  if (Object.keys(results).length === 0) {
    console.log('Nothing to add.');
    return;
  }

  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');

  const insertLines = Object.entries(results)
    .map(([id, url]) => `  ${id}: '${url}',`)
    .join('\n');

  content = content.replace(/\n};(\s*)$/, `\n${insertLines}\n};$1`);

  writeFileSync(filePath, content, 'utf-8');
  console.log(`Wrote ${Object.keys(results).length} additional image entries to images.js`);
}

main().catch(console.error);
