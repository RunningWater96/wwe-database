import { readFileSync, writeFileSync } from 'fs';

const UA = 'WWEDatabaseApp/1.0 (personal project; contact: none)';

// Try Wikimedia Commons search as a fallback
async function searchCommonsImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=3&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await resp.json();
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        const info = page.imageinfo[0];
        const thumbUrl = info.thumburl || info.url;
        // Skip SVGs and icons
        if (thumbUrl && !thumbUrl.endsWith('.svg') && !thumbUrl.includes('icon')) {
          return thumbUrl;
        }
      }
    }
  }
  return null;
}

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

const LOOKUPS = [
  { id: 1560, wiki: ['Mitsuharu Misawa', 'Kenta Kobashi'], commons: ['Akira Taue wrestler'] },
  { id: 1561, wiki: [], commons: ['Frankie Williams wrestler WWE'] },
  { id: 1589, wiki: ['Joseph Conners NXT', 'NXT UK TakeOver'], commons: ['Joseph Conners wrestler'] },
  { id: 1600, wiki: ['Scott Irwin (wrestler)', 'Bill Irwin (wrestler)'], commons: ['Yukon Lumberjacks wrestling'] },
  { id: 1610, wiki: ['Verne Gagne'], commons: ['Wally Karbo wrestling'] },
  { id: 1621, wiki: ['Iron Mike Sharpe', 'Mike Sharpe (wrestler)'], commons: ['Sharpe Brothers wrestling'] },
];

async function main() {
  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');
  let found = 0;

  for (const { id, wiki, commons } of LOOKUPS) {
    if (content.includes(`  ${id}:`)) {
      console.log(`SKIP ${id}: already has image`);
      continue;
    }

    let imageUrl = null;

    // Try Wikipedia first
    for (const title of wiki) {
      imageUrl = await getWikiImage(title);
      if (imageUrl) {
        console.log(`FOUND ${id} via wiki "${title}"`);
        break;
      }
    }

    // Try Commons search
    if (!imageUrl) {
      for (const query of commons) {
        imageUrl = await searchCommonsImage(query);
        if (imageUrl) {
          console.log(`FOUND ${id} via commons "${query}"`);
          break;
        }
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
