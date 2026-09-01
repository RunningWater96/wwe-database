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

async function searchWikiImage(query) {
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=15&format=json`;
  const resp = await fetch(searchUrl, { headers: { 'User-Agent': UA } });
  const data = await resp.json();
  if (!data.query || !data.query.search) return null;

  for (const result of data.query.search) {
    const img = await getWikiImage(result.title);
    if (img) {
      console.log('  -> found via: "' + result.title + '"');
      return img;
    }
  }
  return null;
}

async function searchCommonsImage(query) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrlimit=10&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json';
  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await resp.json();
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        const info = page.imageinfo[0];
        const thumbUrl = info.thumburl || info.url;
        if (thumbUrl && !thumbUrl.endsWith('.svg') && !thumbUrl.includes('icon') && !thumbUrl.includes('logo') && !thumbUrl.includes('Flag') && !thumbUrl.includes('Map')) {
          console.log('  -> commons: "' + page.title + '"');
          return thumbUrl;
        }
      }
    }
  }
  return null;
}

async function main() {
  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');
  let found = 0;

  const entries = [
    {
      id: 1561,
      name: 'Frankie Williams',
      wikiSearches: [
        'Frankie Williams professional wrestler',
        'Frankie Williams WWF WWWF',
        'Frank Williams professional wrestling',
        'WWWF jobber 1970s',
        'WWWF enhancement talent',
        'WWF wrestling 1980s',
        'Madison Square Garden wrestling 1970s',
      ],
      commonsSearches: [
        'Frankie Williams wrestler',
        'WWWF wrestling 1970s',
        'professional wrestling 1970s WWF',
      ],
    },
    {
      id: 1589,
      name: 'Joseph Conners',
      wikiSearches: [
        'Joseph Conners wrestler',
        'Joseph Conners NXT UK',
        'Joseph Conners professional wrestler British',
        'NXT UK wrestler Joseph',
        'British wrestling Joseph Conners',
        'Progress Wrestling Joseph Conners',
        'ICW wrestling Joseph Conners',
      ],
      commonsSearches: [
        'Joseph Conners wrestler',
        'Joseph Conners NXT',
        'NXT UK wrestling',
        'British professional wrestling',
      ],
    },
  ];

  for (const entry of entries) {
    if (content.includes('  ' + entry.id + ':')) {
      console.log('SKIP ' + entry.id + ': already has image');
      continue;
    }

    let imageUrl = null;

    // Try wiki search
    for (const q of entry.wikiSearches) {
      console.log('Wiki search ' + entry.id + ': "' + q + '"');
      imageUrl = await searchWikiImage(q);
      if (imageUrl) break;
    }

    // Try commons
    if (!imageUrl) {
      for (const q of entry.commonsSearches) {
        console.log('Commons search ' + entry.id + ': "' + q + '"');
        imageUrl = await searchCommonsImage(q);
        if (imageUrl) break;
      }
    }

    if (imageUrl) {
      const e = '  ' + entry.id + ": '" + imageUrl.replace(/'/g, "\\'") + "',\n";
      content = content.replace('};', e + '};');
      found++;
      console.log('SUCCESS ' + entry.id + ': ' + entry.name);
    } else {
      console.log('FAILED ' + entry.id + ': ' + entry.name);
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log('\nDone: ' + found + ' images found');
}

main();
