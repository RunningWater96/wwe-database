const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
let count = 0;

// Map of old name -> new name for individual wrestlers with "/" format
const nameMap = {
  // Individual wrestlers - clean up "/" names to primary WWE name
  "Mankind / Mick Foley": "Mankind",
  "Dean Ambrose / Jon Moxley": "Dean Ambrose",
  "Viscera / Big Daddy V": "Viscera",
  "Aleister Black / Malakai Black": "Aleister Black",
  "A-Train / Giant Bernard / Tensai": "A-Train",
  "Luke Harper / Brodie Lee": "Luke Harper",
  "Alundra Blayze / Madusa": "Alundra Blayze",
  "Mordecai / Kevin Thorn": "Kevin Thorn",
  "Ken Kennedy / Mr. Kennedy": "Mr. Kennedy",
  "Dijak / T-BAR": "Dijak",
  "Hideo Itami / KENTA": "Hideo Itami",
  "Albert / A-Train / Tensai": "Albert",
  "Viscera / Big Daddy V / Mabel": "Viscera",
  "Meng / Haku": "Haku",
  "Miss Kitty / The Kat": "The Kat",
  "Brodus Clay / Funkasaurus": "Brodus Clay",
  "WALTER / Gunther (NXT UK era)": "GUNTHER",
  "Kay Lee Ray / Alba Fyre": "Alba Fyre",
  "Razor Ramon / Scott Hall": "Razor Ramon",
  "Diesel / Kevin Nash": "Diesel",
  "Adam Bomb / Bryan Clarke": "Adam Bomb",
  "Elijah Burke / The Pope": "Elijah Burke",
  "Mr. Kennedy / Ken Kennedy": "Mr. Kennedy",
  "EC3 / Ethan Carter III": "EC3",
  "Babatunde / Commander Azeez": "Commander Azeez",
  "Rusev / Miro": "Rusev",
  "Babatunde / Odyssey Jones (NXT debut)": "Omos",
  "Mercedes Moné / Sasha Banks (career retrospective)": "Sasha Banks",
  "Matt Riddle / Riddle": "Riddle",
  "Piper Niven / Doudrop": "Piper Niven",
  "Haku / Meng": "Haku",
  "Prince Albert / A-Train / Tensai / Giant Bernard": "Albert",
  "Pete Dunne / Butch": "Pete Dunne",
  "Riddle / Matt Riddle": "Riddle",
  "Emma / Tenille Dashwood": "Emma",
  "Nikki A.S.H. / Nikki Cross": "Nikki Cross",
  "Neville / PAC": "Neville",
  "Hugh Morrus / Bill DeMott": "Hugh Morrus",
  "Elias / Ezekiel": "Elias",
  "IRS / Mike Rotunda": "IRS",

  // Parenthetical "/" names - clean to just main name
  "Shawn Michaels (DX leader / Showstopper)": "Shawn Michaels",
  "Gregory Helms (Hurricane / Cruiserweight)": "Gregory Helms",
  "Sin Cara (Hunico / Original Mistico)": "Sin Cara",
  "Tensai (Lord Tensai / Giant Bernard)": "Tensai",
};

for (const [oldName, newName] of Object.entries(nameMap)) {
  const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`name: "${escaped}"`, 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, `name: "${newName}"`);
    count += matches.length;
    console.log(`  "${oldName}" -> "${newName}" (${matches.length} occurrence(s))`);
  } else {
    console.log(`  WARNING: Not found: "${oldName}"`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal: ${count} name entries updated.`);
