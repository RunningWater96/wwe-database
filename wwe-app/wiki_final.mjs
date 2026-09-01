import { readFileSync, writeFileSync } from 'fs';
import I from './src/data/images.js';
import W from './src/data/wrestlers.js';
import { isTagTeam } from './src/utils/wrestlerHelpers.js';
import R from './src/data/relationships.js';

const iKeys = new Set(Object.keys(I).map(Number));
const missing = W.filter(w => !iKeys.has(w.id) && !isTagTeam(w));
const wMap = new Map(); W.forEach(w => wMap.set(w.id, w));

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Wikipedia article titles for notable missing wrestlers
const titleMap = {
  1149: 'The_Sheik', 1199: 'Brian_Christopher', 1202: 'Shawn_Stasiak',
  1204: 'Rikishi_(wrestler)', 1207: 'The_Godfather_(wrestler)', 
  1208: 'Rikishi_(wrestler)', 1233: 'Luke_Gallows', 
  1243: 'Low_Ki', 1246: "Sean_O'Haire", 1249: 'Ryback', 
  1250: 'Bray_Wyatt', 1258: 'Colt_Cabana',
  1340: "D'Lo_Brown", 1346: 'Lawrence_Taylor', 
  1347: 'Floyd_Mayweather_Jr.', 1348: 'Tyson_Fury', 
  1349: 'Cain_Velasquez', 1373: 'Snooki', 
  1374: 'Johnny_Knoxville', 1382: 'Road_Warrior_Animal', 
  1397: 'Joe_Hendry', 1411: 'Dolph_Ziggler', 
  1418: 'Karl_Malone', 1419: 'Dennis_Rodman',
  1422: 'Maria_Menounos', 1431: 'Nikita_Koloff',
  1437: "D'Lo_Brown", 1443: 'Chris_Harris_(wrestler)',
  1457: 'Stevie_Ray_(wrestler)', 1459: 'Konnan',
  1461: 'Alex_Wright', 1464: 'Mikey_Whipwreck',
  1471: 'Terry_Gordy', 1472: 'Magnum_T.A.',
  1474: 'Fritz_Von_Erich', 1475: 'Kevin_Von_Erich',
  1476: 'David_Von_Erich', 1478: 'Bobby_Eaton',
  1482: 'Ray_Stevens_(professional_wrestler)',
  1484: 'The_Crusher', 1487: 'Tommy_Rich',
  1490: 'Silver_King_(wrestler)', 1492: 'Daffney',
  1493: 'J._J._Dillon', 1495: 'Missy_Hyatt',
  1497: 'Danny_Hodge', 1498: 'Baron_von_Raschke',
  1501: 'Axl_Rotten', 1504: 'Tony_Schiavone',
  1519: 'Mitsuharu_Misawa', 1520: 'Kenta_Kobashi',
  1521: 'Toshiaki_Kawada', 1522: 'Jumbo_Tsuruta',
  1523: 'Genichiro_Tenryu', 1524: 'Hayabusa_(wrestler)',
  1525: 'El_Hijo_del_Santo', 1526: 'Negro_Casas',
  1531: 'Villano_III', 1538: 'Vince_McMahon_Sr.',
  1546: 'Snoop_Dogg', 1549: 'Cyndi_Lauper',
  1130: 'Judy_Martin_(wrestler)', 1133: 'Blackjack_Lanza',
  1134: 'Peter_Maivia', 1148: 'Mr._Saito', 1150: 'Ox_Baker',
  1164: 'Pat_Tanaka', 1165: 'Johnny_Valiant', 
  1166: 'Jimmy_Valiant', 1172: 'Terry_Taylor',
  1173: 'Killer_Khan', 1179: 'Giant_Baba', 
  1186: 'Adnan_Al-Kaissie', 1188: 'Karl_Gotch',
  1191: 'Lou_Thesz', 1196: 'Tony_Halme',
  1205: 'Chris_Candido', 1209: 'D-Von_Dudley',
  1221: 'Matt_Morgan', 1222: 'Rob_Conway',
  1223: 'Rico_(wrestler)', 1224: 'Marcus_Cor_Von',
  1226: 'Mike_Knox', 1228: 'Juventud_Guerrera',
  1236: 'Shannon_Moore', 1238: 'Vito_LoGrasso',
  1244: 'Daivari', 1245: 'Nathan_Jones_(wrestler)',
  1389: "Sean_O'Haire", 1396: 'Rinku_Singh_(wrestler)',
  1407: 'David_Flair', 1408: 'Chris_Nowinski',
  1436: 'Mike_Adamle', 1445: 'Man_Mountain_Rock',
  1448: 'Johnny_Stamboli', 1451: 'Elix_Skipper',
  1458: 'Norman_Smiley', 1462: 'La_Parka',
  1468: 'Adnan_Al-Kaissie', 1470: 'Dick_Murdoch',
  1485: 'Brad_Armstrong_(wrestler)', 1486: 'Tracy_Smothers',
  1488: 'Dennis_Condrey', 1489: 'Buddy_Roberts',
  1491: 'Crowbar_(wrestler)', 1499: 'Jimmy_Garvin',
  1502: 'Skandor_Akbar', 1507: 'Scotty_Riggs',
  1510: 'Little_Guido', 1517: 'Bunkhouse_Buck',
  1532: 'Hector_Guerrero', 1534: 'Chavo_Guerrero_Sr.',
  1152: 'Jacques_Rougeau', 1153: 'Raymond_Rougeau',
  1388: 'Bull_Buchanan', 1387: 'Men_on_a_Mission',
};

// For remaining, try Name_(wrestler)
for (const w of missing) {
  if (titleMap[w.id]) continue;
  const clean = w.name.replace(/\s*\([^)]+\)/, '').trim().replace(/ /g, '_');
  titleMap[w.id] = clean;
}

const headers = { 'User-Agent': 'WWEDatabase/1.0 (educational project)' };

async function getImage(title) {
  const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(title) 
    + '&prop=pageimages&pithumbsize=400&format=json&redirects=1';
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) return null;
  for (const p of Object.values(pages)) {
    if (p.thumbnail) return p.thumbnail.source;
  }
  return null;
}

const found = {};
const notFound = [];
let i = 0;

for (const w of missing) {
  i++;
  const title = titleMap[w.id];
  if (!title) { notFound.push(w.id); continue; }
  
  const img = await getImage(title);
  if (img) {
    found[w.id] = img;
  } else {
    // Try with (wrestler) suffix
    const img2 = await getImage(title + '_(wrestler)');
    if (img2) {
      found[w.id] = img2;
    } else {
      // Try real name
      const realTitle = w.realName?.replace(/ /g, '_');
      if (realTitle && realTitle !== title) {
        const img3 = await getImage(realTitle);
        if (img3) {
          found[w.id] = img3;
        } else {
          notFound.push(w.id);
        }
      } else {
        notFound.push(w.id);
      }
    }
  }
  
  if (i % 10 === 0) {
    process.stderr.write('Progress: ' + i + '/' + missing.length + ' (found: ' + Object.keys(found).length + ')\r');
    await sleep(500); // Rate limit
  }
}

console.log('\nFound:', Object.keys(found).length);
console.log('Not found:', notFound.length);

writeFileSync('wiki_final_found.json', JSON.stringify(found, null, 2));

console.log('\nSample:');
Object.entries(found).slice(0, 10).forEach(([id, url]) =>
  console.log(id, wMap.get(Number(id))?.name, url.substring(0, 70)));

console.log('\nNot found IDs:');
notFound.forEach(id => console.log(' ', id, wMap.get(id)?.name));
