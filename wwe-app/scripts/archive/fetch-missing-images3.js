import { readFileSync, writeFileSync } from 'fs';

const WIKI_LOOKUPS = [
  { id: 1560, titles: ['Akira_Taue'] },
  { id: 1563, titles: ['Diana Hart', 'Owen Hart'] },
  { id: 1564, titles: ['Dave_Taylor_(wrestler)'] },
  { id: 1571, titles: ['Jack Victory (wrestler)'] },
  { id: 1572, titles: ['XPW', 'Vic_Grimes'] },
  { id: 1588, titles: ['Sha Samuels', 'NXT UK'] },
  { id: 1589, titles: ['Joseph Conners (wrestler)'] },
  { id: 1591, titles: ['Millie McKenzie (wrestler)'] },
  { id: 1593, titles: ['Steve Lombardi'] },
  { id: 1594, titles: ['Lucha Brothers', 'Pentagon Jr.'] },
  { id: 1618, titles: ['Hot Stuff Eddie Gilbert'] },
  { id: 1620, titles: ['Kamala (wrestler)', 'King Kong Bundy'] },
  { id: 1622, titles: ['The Stud Stable', 'Arn Anderson'] },
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
