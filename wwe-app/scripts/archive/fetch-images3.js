import { readFileSync, writeFileSync } from 'fs';

const WIKI_TITLES = {
  1557: 'Sarah_Logan',
  1559: 'The_Midnight_Express_(professional_wrestling)',
  1560: 'Akira_Taue',
  1562: 'Jay_Youngblood',
  1563: 'Diana_Hart',
  1564: 'Dave_Taylor_(wrestler)',
  1565: 'Reby_Sky',
  1566: 'Joel_Gertner',
  1567: 'The_Acclaimed',
  1568: 'Aaron_Aguilera',
  1569: 'Vince_Russo',
  1572: 'Vic_Grimes',
  1573: 'New_Jack',
  1574: 'Kid_Kash',
  1575: 'Maxwell_Jacob_Friedman',
  1576: 'Britt_Baker',
  1577: 'Shelly_Martinez',
  1578: 'Darby_Allin',
  1579: 'Dos_Caras',
  1581: 'Mike_Bennett_(wrestler)',
  1583: 'Katarina_Waters',
  1584: 'Kimberly_Page',
  1586: 'Bullet_Club',
  1590: 'Adam_Page',
  1594: 'The_Lucha_Brothers',
  1596: 'Rosemary_(wrestler)',
  1597: 'Austin_Aries',
  1598: "Pat_O'Connor_(wrestler)",
  1599: 'Ivan_Putski',
  1601: 'Ernie_Roth',
  1602: 'The_Moondogs_(professional_wrestling)',
  1603: 'Jacques_Rougeau',
  1604: 'Jim_Powers',
  1605: 'Greg_Gagne_(wrestler)',
  1606: 'Eric_Esch',
  1607: 'Wesley_Blake',
  1608: 'Scorpio_Sky',
  1609: 'Gene_Kiniski',
  1611: 'Dory_Funk',
  1612: 'Antonino_Rocca',
  1613: 'Dick_Beyer',
  1614: 'Gino_Brito',
  1615: 'Don_Callis',
  1616: 'Mercedes_Martinez',
  1617: 'Tommy_Dreamer',
  1618: 'Eddie_Gilbert',
  1619: 'Ian_Rotten',
  1623: 'Toots_Mondt',
  1624: 'Paul_Vachon',
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
  const entries = Object.entries(WIKI_TITLES);
  console.log(`Fetching images for ${entries.length} entries...\n`);

  for (const [idStr, title] of entries) {
    process.stdout.write(`${idStr}: ${title} ... `);
    try {
      const imgUrl = await getImageUrl(title);
      if (imgUrl) {
        results[idStr] = imgUrl;
        console.log('OK');
      } else {
        console.log('NO IMAGE');
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 150));
  }

  const count = Object.keys(results).length;
  console.log(`\nFound ${count} images out of ${entries.length} lookups.`);

  if (count === 0) {
    console.log('Nothing to add.');
    return;
  }

  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');

  // Build the new lines
  const newLines = Object.entries(results)
    .map(([id, url]) => `  ${id}: '${url}',`)
    .join('\n');

  // Replace the }; line (with possible whitespace before it)
  // The file ends with: \n};\n\nexport default WRESTLER_IMAGES;\n
  content = content.replace('};', newLines + '\n};');

  writeFileSync(filePath, content, 'utf-8');
  console.log(`Wrote ${count} image entries to images.js`);

  // Verify
  const verify = readFileSync(filePath, 'utf-8');
  const hasExport = verify.includes('export default WRESTLER_IMAGES');
  const hasClosing = verify.includes('};');
  const firstNewId = Object.keys(results)[0];
  const hasNewEntry = verify.includes(`${firstNewId}:`);
  console.log(`Verify: export=${hasExport}, closing=${hasClosing}, firstEntry=${hasNewEntry}`);
}

main().catch(console.error);
