import W from '../src/data/wrestlers.js';
import I from '../src/data/images.js';
import { readFileSync, writeFileSync } from 'fs';

// Map wrestler IDs to their Wikipedia article titles
const WIKI_TITLES = {
  1557: 'Sarah_Logan',
  1558: null, // Myles Borne - no Wikipedia page
  1559: 'The_Midnight_Express_(professional_wrestling)',
  1560: 'Akira_Taue',
  1561: null, // Frankie Williams - no Wikipedia page
  1562: 'Jay_Youngblood',
  1563: 'Diana_Hart',
  1564: 'Dave_Taylor_(wrestler)',
  1565: 'Reby_Hardy',
  1566: 'Joel_Gertner',
  1567: 'The_Acclaimed',
  1568: 'Aaron_Aguilera',
  1569: 'Vince_Russo',
  1570: null, // Hiroko - no Wikipedia page
  1571: null, // Jack Victory - limited page
  1572: 'Vic_Grimes',
  1573: 'New_Jack#The_Gangstas', // Mustafa Saed - redirect
  1574: 'Kid_Kash',
  1575: 'MJF_(wrestler)',
  1576: 'Britt_Baker',
  1577: 'Shelly_Martinez',
  1578: 'Darby_Allin',
  1579: 'Dos_Caras',
  1580: null, // Jules Strongbow - no Wikipedia page
  1581: 'Mike_Bennett_(wrestler)',
  1582: null, // Ranjin Singh - no Wikipedia page
  1583: 'Katie_Lea_Burchill',
  1584: 'Kimberly_Page',
  1585: null, // Adriana Rizzo - too new for Wikipedia
  1586: 'Bullet_Club',
  1587: null, // New Bloodline - no standalone page
  1588: null, // Sha Samuels - no Wikipedia page
  1589: null, // Joseph Conners - no Wikipedia page
  1590: 'Adam_Page',
  1591: null, // Emilia McKenzie - no Wikipedia page
  1592: null, // The Funkettes - no Wikipedia page
  1593: null, // Kim Chee - no standalone page
  1594: 'Rey_Fenix',
  1595: null, // Alex Abrahantes - no Wikipedia page
  1596: 'Rosemary_(wrestler)',
  1597: 'Austin_Aries',
  1598: "Pat_O'Connor_(wrestler)",
  1599: 'Scott_Putski',
  1600: null, // The Yukon Lumberjacks - no Wikipedia page
  1601: 'The_Grand_Wizard_of_Wrestling',
  1602: 'The_Moondogs',
  1603: 'Pierre_Carl_Ouellet',
  1604: 'The_Young_Stallions',
  1605: 'Greg_Gagne_(wrestler)',
  1606: 'Butterbean',
  1607: 'Wesley_Blake',
  1608: 'Scorpio_Sky',
  1609: 'Gene_Kiniski',
  1610: null, // Wally Karbo - no Wikipedia page
  1611: 'Dory_Funk_Sr.',
  1612: 'Miguel_Pérez_(wrestler)',
  1613: 'The_Destroyer_(wrestler)',
  1614: 'Gino_Brito',
  1615: 'Don_Callis',
  1616: 'Mercedes_Martinez',
  1617: 'Beulah_McGillicutty',
  1618: 'Eddie_Gilbert',
  1619: 'Ian_Rotten',
  1620: null, // Devastation Inc - no Wikipedia page
  1621: null, // The Sharpe Brothers - no Wikipedia page
  1622: null, // The Stud Stable - no Wikipedia page
  1623: 'Toots_Mondt',
  1624: 'Paul_Vachon',
};

const UA = 'WWEDatabaseApp/1.0 (personal project; contact: none)';

async function getImageUrl(title) {
  // Strip any #section anchors
  const cleanTitle = title.split('#')[0];
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(cleanTitle)}&prop=pageimages&pithumbsize=400&format=json`;

  const resp = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!resp.ok) {
    console.error(`  HTTP ${resp.status} for ${cleanTitle}`);
    return null;
  }
  const data = await resp.json();
  const pages = data.query?.pages;
  if (!pages) return null;

  for (const page of Object.values(pages)) {
    if (page.thumbnail?.source) {
      return page.thumbnail.source;
    }
  }
  return null;
}

async function main() {
  const results = {};
  const entries = Object.entries(WIKI_TITLES).filter(([, title]) => title !== null);

  console.log(`Fetching images for ${entries.length} entries...\n`);

  for (const [idStr, title] of entries) {
    const id = parseInt(idStr);
    const wrestler = W.find((w) => w.id === id);
    process.stdout.write(`${id}: ${wrestler?.name || '?'} ... `);

    try {
      const imgUrl = await getImageUrl(title);
      if (imgUrl) {
        results[id] = imgUrl;
        console.log('OK');
      } else {
        console.log('NO IMAGE');
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
    }

    // Small delay to be polite to Wikipedia API
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(`\nFound ${Object.keys(results).length} images out of ${entries.length} lookups.`);

  // Now insert into images.js
  const filePath = decodeURIComponent(
    new URL('../src/data/images.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
  );
  let content = readFileSync(filePath, 'utf-8');

  // Insert before the closing };
  const insertLines = Object.entries(results)
    .map(([id, url]) => `  ${id}: '${url}',`)
    .join('\n');

  content = content.replace(/\n};(\s*)$/, `\n${insertLines}\n};$1`);

  writeFileSync(filePath, content, 'utf-8');
  console.log(`\nWrote ${Object.keys(results).length} image entries to images.js`);
}

main().catch(console.error);
