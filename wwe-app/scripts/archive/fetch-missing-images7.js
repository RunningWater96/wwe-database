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

// Search Wikipedia for articles and pick the first one with an image
async function searchWikiImage(query) {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=10&format=json`;
  const resp = await fetch(searchUrl, { headers: { 'User-Agent': UA } });
  const data = await resp.json();
  if (!data.query || !data.query.search) return null;

  for (const result of data.query.search) {
    const img = await getWikiImage(result.title);
    if (img) {
      console.log(`  -> found via search result: "${result.title}"`);
      return img;
    }
  }
  return null;
}

// Search Wikimedia Commons
async function searchCommonsImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await resp.json();
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        const info = page.imageinfo[0];
        const thumbUrl = info.thumburl || info.url;
        if (thumbUrl && !thumbUrl.endsWith('.svg') && !thumbUrl.includes('icon') && !thumbUrl.includes('logo')) {
          console.log(`  -> found on commons: "${page.title}"`);
          return thumbUrl;
        }
      }
    }
  }
  return null;
}

const LOOKUPS = [
  { id: 1561, searches: ['Frankie Williams wrestler WWF', 'Frankie Williams WWWF jobber', 'WWF enhancement talent 1980s'] },
  { id: 1589, searches: ['Joseph Conners wrestler NXT UK', 'Joseph Conners Progress Wrestling', 'Joseph Conners British wrestling'] },
  { id: 1621, searches: ['Sharpe Brothers wrestling WWF', 'Iron Mike Sharpe wrestler', 'Mike Sharpe Canada wrestler', 'Ben Sharpe wrestler'] },
];

async function main() {
  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');
  let found = 0;

  for (const { id, searches } of LOOKUPS) {
    if (content.includes(`  ${id}:`)) {
      console.log(`SKIP ${id}: already has image`);
      continue;
    }

    let imageUrl = null;

    // Try Wikipedia search
    for (const query of searches) {
      console.log(`Searching wiki for ${id}: "${query}"...`);
      imageUrl = await searchWikiImage(query);
      if (imageUrl) break;
    }

    // Try Commons search
    if (!imageUrl) {
      for (const query of searches) {
        console.log(`Searching commons for ${id}: "${query}"...`);
        imageUrl = await searchCommonsImage(query);
        if (imageUrl) break;
      }
    }

    if (imageUrl) {
      const entry = `  ${id}: '${imageUrl.replace(/'/g, "\\'")}',\n`;
      content = content.replace('};', entry + '};');
      found++;
      console.log(`SUCCESS ${id}`);
    } else {
      console.log(`FAILED ${id}: exhausted all searches`);
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`\nDone: ${found} more images found`);
}

main();
