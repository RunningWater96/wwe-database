import { readFileSync, writeFileSync } from 'fs';

// Map of wrestler ID → Wikipedia article title for lookup
const WIKI_LOOKUPS = {
  // Individuals
  700: 'The Steiner Brothers',
  1558: null, // Myles Borne - too obscure
  1560: 'Akira Taue',
  1561: null, // Frankie Williams - too obscure
  1563: 'Diana Hart',
  1564: 'Dave Taylor (wrestler)',
  1570: null, // Hiroko - too obscure
  1571: null, // Jack Victory - obscure
  1572: 'Vic Grimes',
  1582: 'Ranjin Singh (wrestler)',
  1585: null, // Adriana Rizzo - too new/obscure
  1588: null, // Sha Samuels - obscure
  1589: null, // Joseph Conners - obscure
  1591: 'Millie McKenzie',
  1593: null, // Kim Chee - Steve Lombardi alter ego
  1594: 'Rey Fenix',
  1595: null, // Alex Abrahantes - obscure
  1610: null, // Wally Karbo - historical, unlikely to have photo
  1618: 'Eddie Gilbert (wrestler)',

  // Tag Teams
  121: 'Test and Albert',
  1592: null, // The Funkettes - too obscure
  1600: null, // Yukon Lumberjacks - too old
  1621: null, // Sharpe Brothers - too old

  // Factions
  196: 'The Nexus (professional wrestling)',
  785: 'Alpha Academy',
  1587: 'The Bloodline (professional wrestling)',
  1620: null, // Devastation Inc - too obscure
  1622: null, // Stud Stable - obscure
};

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
  let notFound = 0;

  for (const [idStr, title] of Object.entries(WIKI_LOOKUPS)) {
    const id = Number(idStr);
    if (!title) {
      console.log(`SKIP ${id}: no Wikipedia article`);
      continue;
    }

    try {
      const imageUrl = await getWikiImage(title);
      if (imageUrl) {
        // Insert before the closing '};'
        const entry = `  ${id}: '${imageUrl.replace(/'/g, "\\'")}',\n`;
        content = content.replace('};', entry + '};');
        found++;
        console.log(`FOUND ${id}: ${title}`);
      } else {
        console.log(`NO IMAGE ${id}: ${title}`);
        notFound++;
      }
    } catch (err) {
      console.log(`ERROR ${id}: ${title} - ${err.message}`);
      notFound++;
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`\nDone: ${found} images found, ${notFound} not found`);
}

main();
