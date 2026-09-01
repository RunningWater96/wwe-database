import { readFileSync, writeFileSync } from 'fs';

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

// Last 3: Frankie Williams, Joseph Conners, Sharpe Brothers
const LOOKUPS = [
  // Frankie Williams was a 1970s-80s jobber, try WWWF/MSG
  { id: 1561, titles: ['WWWF', 'Madison Square Garden wrestling', 'WWF Superstars of Wrestling'] },
  // Joseph Conners - try different spellings, related shows
  { id: 1589, titles: ['NXT UK TakeOver', 'NXT UK', 'Progress Wrestling'] },
  // Sharpe Brothers - Mike Sharpe had solo career
  { id: 1621, titles: ['"Iron" Mike Sharpe', 'Mike Sharpe wrestler', 'Stampede Wrestling'] },
];

async function main() {
  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');
  let found = 0;

  for (const { id, titles } of LOOKUPS) {
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
      console.log(`NO IMAGE ${id}`);
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`\nDone: ${found} more images found`);
}

main();
