import { readFileSync, writeFileSync } from 'fs';

// Second pass with alternate Wikipedia article titles
const WIKI_LOOKUPS = [
  { id: 121, titles: ['Test (wrestler)', 'Albert (wrestler)', 'T&A (professional wrestling)'] },
  { id: 700, titles: ['The Steiner Brothers', 'Rick Steiner', 'Scott Steiner'] },
  { id: 785, titles: ['Alpha Academy (professional wrestling)', 'Chad Gable'] },
  { id: 1560, titles: ['Akira Taue', 'Four Pillars of Heaven'] },
  { id: 1563, titles: ['Hart family', 'Diana Hart Smith'] },
  { id: 1564, titles: ['Dave Taylor (wrestler)', 'Dave Taylor (English wrestler)'] },
  { id: 1572, titles: ['Vic Grimes', 'Grimes (wrestler)'] },
  { id: 1582, titles: ['The Great Khali', 'Ranjin Singh'] },
  { id: 1594, titles: ['Rey Fenix', 'Penta El Zero Miedo', 'The Lucha Brothers'] },
];

const UA = 'WWEDatabaseApp/1.0 (personal project; contact: none)';

async function getWikiImage(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=400`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await resp.json();
  const pages = data.query.pages;
  const page = Object.values(pages)[0];
  if (page && page.thumbnail && page.thumbnail.source) {
    return page.thumbnail.source;
  }
  return null;
}

async function main() {
  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');
  let found = 0;

  for (const { id, titles } of WIKI_LOOKUPS) {
    // Skip if already in the file
    if (content.includes(`  ${id}:`)) {
      console.log(`SKIP ${id}: already has image`);
      continue;
    }

    let imageUrl = null;
    for (const title of titles) {
      imageUrl = await getWikiImage(title);
      if (imageUrl) {
        console.log(`FOUND ${id} via "${title}"`);
        break;
      }
    }

    if (imageUrl) {
      const entry = `  ${id}: '${imageUrl.replace(/'/g, "\\'")}',\n`;
      content = content.replace('};', entry + '};');
      found++;
    } else {
      console.log(`NO IMAGE ${id}: tried ${titles.join(', ')}`);
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`\nDone: ${found} more images found`);
}

main();
