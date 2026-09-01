import { readFileSync, writeFileSync } from 'fs';

// Try every possible angle for these 14 remaining entries
const WIKI_LOOKUPS = [
  // Myles Borne - NXT developmental
  { id: 1558, titles: ['Myles Borne', 'WWE NXT (2024)'] },
  // Akira Taue - AJPW legend
  { id: 1560, titles: ['Akira Taue', 'All Japan Pro Wrestling', 'Four Pillars of Heaven (wrestling)'] },
  // Frankie Williams - old school jobber
  { id: 1561, titles: ['Frankie Williams (wrestler)', 'Frank Williams (wrestler)'] },
  // Dave Taylor - WCW/WWE
  { id: 1564, titles: ['David Taylor (wrestler)', 'The Blue Bloods (professional wrestling)', 'William Regal'] },
  // Hiroko - Kenzo Suzuki's wife
  { id: 1570, titles: ['Kenzo Suzuki', 'Hiroko Suzuki'] },
  // Jack Victory - ECW
  { id: 1571, titles: ['Jack Victory', 'Shane Douglas'] },
  // Vic Grimes - ECW/XPW
  { id: 1572, titles: ['New Jack', 'XPW'] },
  // Adriana Rizzo - NXT
  { id: 1585, titles: ['Adriana Rizzo', 'WWE NXT'] },
  // Joseph Conners - NXT UK
  { id: 1589, titles: ['Joseph Conners', 'NXT UK'] },
  // The Funkettes - Brodus Clay dancers
  { id: 1592, titles: ['Brodus Clay', 'Naomi (wrestler)'] },
  // Alex Abrahantes - AEW manager
  { id: 1595, titles: ['Alex Abrahantes', 'Penta El Zero M'] },
  // Yukon Lumberjacks
  { id: 1600, titles: ['Scott Irwin (wrestler)', 'The Lumberjacks (wrestling)'] },
  // Wally Karbo - promoter
  { id: 1610, titles: ['Wally Karbo', 'American Wrestling Association'] },
  // The Sharpe Brothers
  { id: 1621, titles: ['The Sharpe Brothers', 'Iron Mike Sharpe'] },
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
