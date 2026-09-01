import { readFileSync, writeFileSync } from 'fs';

// Last round of attempts for remaining entries
const WIKI_TITLES = {
  1560: ['Akira_Taue', 'Four_Pillars_of_Heaven_(professional_wrestling)'],
  1564: ['Dave_Taylor_(wrestler)', 'Blue_Bloods_(professional_wrestling)'],
  1568: ['Aaron_Aguilera', 'Carlito_(wrestler)'], // Jesus worked with Carlito
  1572: ['Vic_Grimes', 'XPW'],
  1580: ['Chief_Jay_Strongbow'], // Jules was Jay's tag partner
  1584: ['Diamond_Dallas_Page'], // Kimberly was DDP's wife
  1594: ['Rey_Fenix', 'Penta_El_Zero_M', 'Pentagon_Jr.'],
  1602: ['The_Moondogs', 'Moondog_Rex', 'Moondog_Spot'],
  1618: ['Eddie_Gilbert_(professional_wrestler)', 'Hot_Stuff_International'],
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
  console.log(`Trying ${Object.keys(WIKI_TITLES).length} remaining entries...\n`);

  for (const [idStr, titles] of Object.entries(WIKI_TITLES)) {
    process.stdout.write(`${idStr}: `);
    let found = false;
    for (const title of titles) {
      process.stdout.write(`${title} ... `);
      const imgUrl = await getImageUrl(title);
      if (imgUrl) {
        results[idStr] = imgUrl;
        console.log('OK');
        found = true;
        break;
      }
      await new Promise((r) => setTimeout(r, 150));
    }
    if (!found) console.log('NO IMAGE');
  }

  const count = Object.keys(results).length;
  console.log(`\nFound ${count} additional images.`);
  if (count === 0) return;

  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');

  const newLines = Object.entries(results)
    .map(([id, url]) => `  ${id}: '${url}',`)
    .join('\n');

  content = content.replace('};', newLines + '\n};');
  writeFileSync(filePath, content, 'utf-8');
  console.log(`Wrote ${count} more entries.`);
}

main().catch(console.error);
