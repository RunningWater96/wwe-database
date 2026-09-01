import { writeFileSync } from 'fs';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
const headers = { 'User-Agent': 'WWEDatabase/1.0 (educational project)' };

async function getImage(title) {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(title)
    + '&prop=pageimages&pithumbsize=400&format=json&redirects=1';
  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;
    for (const p of Object.values(pages)) {
      if (p.thumbnail) return p.thumbnail.source;
    }
    return null;
  } catch { return null; }
}

// Targeted search with specific Wikipedia titles
const targets = {
  1196: ['Tony_Halme'], // Ludvig Borga's real name
  1202: ['Shawn_Stasiak', 'Meat_(wrestler)'],
  1207: ['The_Godfather_(wrestler)', 'Kama_Mustafa'],
  1233: ['Luke_Gallows', 'Festus_(wrestling)'],
  1340: ["D'Lo_Brown", 'DLo_Brown'],
  1346: ['Lawrence_Taylor', 'LT_(American_football)'],
  1347: ['Floyd_Mayweather_Jr.', 'Floyd_Mayweather'],
  1348: ['Tyson_Fury'],
  1349: ['Cain_Velasquez'],
  1373: ['Snooki', 'Nicole_Polizzi'],
  1374: ['Johnny_Knoxville', 'Philip_John_Clapp_Jr.'],
  1397: ['Joe_Hendry_(wrestler)'],
  1407: ['David_Flair'],
  1411: ['Dolph_Ziggler', 'Nick_Nemeth'],
  1418: ['Karl_Malone'],
  1419: ['Dennis_Rodman'],
  1422: ['Maria_Menounos'],
  1431: ['Nikita_Koloff'],
  1436: ['Mike_Adamle'],
  1437: ["D'Lo_Brown"],
  1443: ['Chris_Harris_(wrestler)', 'America%27s_Most_Wanted_(professional_wrestling)'],
  1445: ['Man_Mountain_Rock', 'Maxx_Payne'],
  1457: ['Stevie_Ray_(wrestler)', 'Stevie_Ray'],
  1458: ['Norman_Smiley'],
  1459: ['Konnan'],
  1461: ['Alex_Wright_(wrestler)', 'Alex_Wright'],
  1464: ['Mikey_Whipwreck'],
  1468: ['Adnan_Al-Kaissie', 'General_Adnan'],
  1470: ['Dick_Murdoch'],
  1471: ['Terry_Gordy', 'Bam_Bam_Terry_Gordy'],
  1472: ['Magnum_T.A.', 'Magnum_TA'],
  1474: ['Fritz_Von_Erich'],
  1475: ['Kevin_Von_Erich'],
  1476: ['David_Von_Erich'],
  1478: ['Bobby_Eaton'],
  1479: ['Stan_Lane'],
  1482: ['Ray_Stevens_(professional_wrestler)'],
  1484: ['The_Crusher', 'Crusher_Lisowski'],
  1485: ['Brad_Armstrong_(wrestler)'],
  1486: ['Tracy_Smothers'],
  1487: ['Tommy_Rich', 'Wildfire_Tommy_Rich'],
  1488: ['Dennis_Condrey'],
  1489: ['Buddy_Roberts', 'Buddy_Jack_Roberts'],
  1490: ['Silver_King_(wrestler)'],
  1491: ['Crowbar_(wrestler)'],
  1492: ['Daffney'],
  1493: ['J._J._Dillon', 'J.J._Dillon'],
  1495: ['Missy_Hyatt'],
  1497: ['Danny_Hodge'],
  1498: ['Baron_von_Raschke'],
  1499: ['Jimmy_Garvin', 'Gorgeous_Jimmy_Garvin'],
  1501: ['Axl_Rotten'],
  1504: ['Tony_Schiavone'],
  1519: ['Mitsuharu_Misawa'],
  1520: ['Kenta_Kobashi'],
  1521: ['Toshiaki_Kawada'],
  1522: ['Jumbo_Tsuruta'],
  1523: ['Genichiro_Tenryu'],
  1524: ['Hayabusa_(wrestler)'],
  1525: ['El_Hijo_del_Santo'],
  1526: ['Negro_Casas'],
  1531: ['Villano_III'],
  1532: ['Hector_Guerrero'],
  1534: ['Chavo_Guerrero_Sr.', 'Chavo_Guerrero'],
  1538: ['Vincent_J._McMahon', 'Vince_McMahon_Sr.'],
  1546: ['Snoop_Dogg', 'Calvin_Broadus'],
  1549: ['Cyndi_Lauper'],
  1425: ['Ernest_Miller', 'Ernest_Miller_(wrestler)', 'The_Cat_(wrestler)'],
};

const found = {};
let i = 0;

for (const [id, titles] of Object.entries(targets)) {
  for (const title of titles) {
    await sleep(300);
    const img = await getImage(title);
    if (img) {
      found[id] = img;
      break;
    }
  }
  i++;
  if (i % 10 === 0) process.stderr.write('Progress: ' + i + '/' + Object.keys(targets).length + '\r');
}

console.log('\nFound:', Object.keys(found).length);
writeFileSync('wiki_targeted_found.json', JSON.stringify(found, null, 2));

Object.entries(found).forEach(([id, url]) => console.log(id, url.substring(0, 60)));
