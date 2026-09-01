import { readFileSync, writeFileSync } from 'fs';

// =============================================
// PART 1: Remove remaining generic entries
// =============================================
const relPath = decodeURIComponent(
  new URL('../src/data/relationships.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
let relContent = readFileSync(relPath, 'utf-8');

const REMOVE_NAMES = [
  "NXT women's tag division",
  "NXT women's division",
  "NXT UK women's division",
  "Anoa'i Family",
  "Rosie O'Donnell",
  "Rener Gracie (husband)",
  "Al Wilson (angle)",
];

let removeCount = 0;
for (const name of REMOVE_NAMES) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`"${escaped}",?\\s*`, 'g'),
    new RegExp(`'${escaped}',?\\s*`, 'g'),
  ];
  for (const pattern of patterns) {
    relContent = relContent.replace(pattern, (match, offset) => {
      const preceding = relContent.substring(Math.max(0, offset - 200), offset);
      if (preceding.match(/(?:allies|rivals|partners|members)\s*:\s*\[/)) {
        removeCount++;
        return '';
      }
      return match;
    });
  }
}

relContent = relContent.replace(/\[\s*,/g, '[');
relContent = relContent.replace(/,\s*\]/g, ']');
relContent = relContent.replace(/,\s*,/g, ',');

writeFileSync(relPath, relContent, 'utf-8');
console.log(`Removed ${removeCount} remaining generic entries`);

// =============================================
// PART 2: Add new wrestler entries
// =============================================
const wPath = decodeURIComponent(
  new URL('../src/data/wrestlers.js', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'),
);
let wContent = readFileSync(wPath, 'utf-8');

const NEW_ENTRIES = [
  {
    id: 1557, name: 'Sarah Logan', realName: 'Sarah Rowe',
    eras: [{ era: 'reality', character: 'Sarah Logan — Riott Squad', persona: "Member of the Riott Squad alongside Liv Morgan and Ruby Riott, a heel trio that terrorized the women's division from 2017-2020. Logan was the group's powerhouse with a backwoods survivalist character." }, { era: 'modern', character: 'Valhalla — Viking Warrior', persona: "Returned to WWE in 2022 as Valhalla, a viking warrior character aligned with The Viking Raiders and her real-life husband Erik (Ivar). Served as the faction's manager and occasional in-ring competitor before being released in 2024." }],
  },
  {
    id: 1558, name: 'Myles Borne', realName: 'David Bostian III',
    eras: [{ era: 'modern', character: 'Myles Borne — NXT Competitor', persona: "NXT developmental talent notable for being one of the few deaf wrestlers to compete at WWE's highest developmental level. Relies on visual cues and ring awareness rather than audio communication during matches. Has competed regularly on NXT Level Up and NXT television." }],
  },
  {
    id: 1559, name: 'The Midnight Express', realName: 'Bobby Eaton & Stan Lane',
    eras: [{ era: 'territory', character: 'The Midnight Express — NWA Tag Legends', persona: "One of the most decorated tag teams in NWA/WCW history, managed by Jim Cornette. Originally Bobby Eaton and Dennis Condrey, the team was later reconstituted with Eaton and Stan Lane. Won multiple NWA World Tag Team Championships and had legendary feuds with the Rock 'n' Roll Express and the Road Warriors." }],
  },
  {
    id: 1560, name: 'Akira Taue', realName: 'Akira Taue',
    eras: [{ era: 'golden', character: 'Akira Taue — All Japan Pillar', persona: "One of All Japan Pro Wrestling's Four Pillars of Heaven alongside Mitsuharu Misawa, Kenta Kobashi, and Toshiaki Kawada. A former sumo wrestler who became a Triple Crown Heavyweight Champion. Formed the Holy Demon Army tag team with Kawada and was known for his devastating chokeslam and dynamic bomb finisher." }],
  },
  {
    id: 1561, name: 'Frankie Williams', realName: 'Frank Williams',
    eras: [{ era: 'territory', character: 'Frankie Williams — Enhancement Talent', persona: "A fixture of WWWF/WWF television in the late 1970s and early 1980s as a regular enhancement talent. Most memorably appeared on Piper's Pit where Roddy Piper attacked him, establishing Piper as one of wrestling's top heels." }],
  },
  {
    id: 1562, name: 'Jay Youngblood', realName: 'Steven Nicolas Romero',
    eras: [{ era: 'territory', character: 'Jay Youngblood — NWA Tag Champion', persona: "NWA tag team star of Native American heritage best known for his successful partnership with Ricky Steamboat, winning the NWA World Tag Team Championship. Tragically died in 1985 at age 30 from a suspected heart attack." }],
  },
  {
    id: 1563, name: 'Diana Hart', realName: 'Diana Joyce Hart',
    eras: [{ era: 'attitude', character: 'Diana Hart — Hart Family', persona: "Daughter of Stu Hart, sister of Bret and Owen Hart, and wife of the British Bulldog Davey Boy Smith. Accompanied the Hart Foundation during their 1997 heel run and appeared on WWF programming. Author of the controversial book 'Under the Mat' about the Hart family." }],
  },
  {
    id: 1564, name: 'Dave Taylor', realName: 'David Taylor',
    eras: [{ era: 'ruthless', character: 'Dave Taylor — British Technician', persona: "British technical wrestler who teamed with William Regal in WCW as part of The Blue Bloods stable. Returned to WWE in 2006 as Regal's tag partner on SmackDown, utilizing a stiff European style before being released in 2008." }],
  },
  {
    id: 1565, name: 'Reby Hardy', realName: 'Rebecca Victoria Reyes',
    eras: [{ era: 'reality', character: 'Reby Hardy — Manager', persona: "Model, independent wrestler, and wife of Matt Hardy. Appeared prominently in Impact Wrestling alongside Matt during his Broken Universe storyline era, serving as Queen Rebecca in the Hardy compound segments." }],
  },
  {
    id: 1566, name: 'Joel Gertner', realName: 'Joel Gertner',
    eras: [{ era: 'attitude', character: 'Joel Gertner — ECW Announcer', persona: "ECW's self-described 'Quintessential Stud Muffin' ring announcer and manager. Best known for managing The Dudley Boyz and delivering memorably ribald introductions. His comedic over-the-top persona was a staple of ECW's irreverent style." }],
  },
  {
    id: 1567, name: 'The Acclaimed', realName: 'Max Caster & Anthony Bowens',
    eras: [{ era: 'modern', character: 'The Acclaimed — AEW Tag Team', persona: "Fan-favorite AEW tag team consisting of rapper Max Caster and Anthony Bowens. Multiple-time AEW Tag Team Champions known for Caster's pre-match rap disses and the 'Scissor Me' catchphrase, managed by Billy Gunn." }],
  },
  {
    id: 1568, name: 'Jesús', realName: 'Aaron Aguilera',
    eras: [{ era: 'ruthless', character: 'Jesús — Carlito\'s Bodyguard', persona: "SmackDown enforcer and bodyguard for Carlito Caribbean Cool in 2004-2005. Most notable for stabbing John Cena in a parking lot angle, leading to a street fight at Armageddon 2004." }],
  },
  {
    id: 1569, name: 'Vince Russo', realName: 'Vincent James Russo',
    eras: [{ era: 'attitude', character: 'Vince Russo — Head Writer', persona: "Controversial head writer credited with helping drive WWF's Attitude Era success with edgy storylines like Austin vs. McMahon and D-Generation X. Later jumped to WCW where his erratic booking is widely blamed for accelerating the promotion's downfall. Subsequently worked in TNA." }],
  },
  {
    id: 1570, name: 'Hiroko', realName: 'Hiroko Suzuki',
    eras: [{ era: 'ruthless', character: 'Hiroko — Kenzo Suzuki\'s Valet', persona: "Real-life wife of Kenzo Suzuki who accompanied him to WWE SmackDown in 2004 as his geisha-themed valet and translator." }],
  },
  {
    id: 1571, name: 'Jack Victory', realName: 'Kenneth Rinehurst',
    eras: [{ era: 'attitude', character: 'Jack Victory — ECW Manager', persona: "ECW mercenary and manager best known for his association with Steve Corino. After breaking his leg, managed Corino from a wheelchair and became a fixture in his corner throughout ECW's final years." }],
  },
  {
    id: 1572, name: 'Vic Grimes', realName: 'Victor Grimes',
    eras: [{ era: 'attitude', character: 'Vic Grimes — ECW Hardcore', persona: "ECW powerhouse member of Da Baldies alongside Tony DeVito. Infamous for a catastrophic scaffold spot with New Jack at Living Dangerously 2000 that went dangerously wrong." }],
  },
  {
    id: 1573, name: 'Mustafa Saed', realName: 'Terrance Blalock',
    eras: [{ era: 'attitude', character: 'Mustafa Saed — The Gangstas', persona: "One half of ECW's The Gangstas alongside New Jack. The team debuted in Smoky Mountain Wrestling before becoming a major ECW act known for brutal garbage-style tag team matches." }],
  },
  {
    id: 1574, name: 'Kid Kash', realName: 'David Cash',
    eras: [{ era: 'attitude', character: 'Kid Kash — ECW High Flyer', persona: "High-flying ECW Television Champion known for a fast-paced style." }, { era: 'ruthless', character: 'Kid Kash — WWE Cruiserweight', persona: "Won the WWE Cruiserweight Championship in 2005 on SmackDown. Also competed in TNA where he was a multiple-time X Division Champion." }],
  },
  {
    id: 1575, name: 'MJF', realName: 'Maxwell Jacob Friedman',
    eras: [{ era: 'modern', character: 'MJF — AEW Top Heel', persona: "Two-time AEW World Champion and one of professional wrestling's most acclaimed heels. Known for exceptional promo ability, the Dynamite Diamond Ring, and holding the AEW Championship for over 400 days." }],
  },
  {
    id: 1576, name: 'Britt Baker', realName: 'Brittany Baker',
    eras: [{ era: 'modern', character: 'Britt Baker D.M.D. — AEW Women\'s Champion', persona: "Practicing dentist and former AEW Women's World Champion. The first woman signed to AEW, she built her D.M.D. character into one of the company's top acts. Real-life partner of Adam Cole." }],
  },
  {
    id: 1577, name: 'Ariel', realName: 'Shelly Martinez',
    eras: [{ era: 'ruthless', character: 'Ariel — ECW Valet', persona: "Vampire tarot card reader who served as valet for Kevin Thorn on WWE's ECW brand in 2006-2007. Part of the New Breed of ECW storyline before being released." }],
  },
  {
    id: 1578, name: 'Darby Allin', realName: 'Samuel Ratsch',
    eras: [{ era: 'modern', character: 'Darby Allin — AEW Daredevil', persona: "Two-time AEW TNT Champion known for an extreme, death-defying style influenced by skateboarding and punk rock. Tag team partner with Sting in his final run. Known for his face paint and coffin drop finisher." }],
  },
  {
    id: 1579, name: 'Dos Caras', realName: 'José Luis Rodriguez',
    eras: [{ era: 'territory', character: 'Dos Caras — Mexican Legend', persona: "Brother of Mil Mascaras and father of Alberto Del Rio. Three-time UWA World Heavyweight Champion considered one of the greatest Mexican heavyweights, debuting in 1970 and competing primarily in CMLL and UWA." }],
  },
  {
    id: 1580, name: 'Jules Strongbow', realName: 'Francis Huntington',
    eras: [{ era: 'golden', character: 'Jules Strongbow — WWF Tag Champion', persona: "Two-time WWF Tag Team Champion alongside kayfabe brother Chief Jay Strongbow in 1982-1983. An enrolled member of the Oneida Nation of Wisconsin who played the Native American gimmick authentically." }],
  },
  {
    id: 1581, name: 'Mike Kanellis', realName: 'Michael Bennett',
    eras: [{ era: 'reality', character: 'Mike Kanellis — 205 Live', persona: "Signed with WWE in 2017 alongside his wife Maria Kanellis. Competed on 205 Live and Raw before being released. Previously a notable ROH and TNA performer as Mike Bennett." }],
  },
  {
    id: 1582, name: 'Ranjin Singh', realName: 'David Kapoor',
    eras: [{ era: 'pg', character: 'Ranjin Singh — Khali\'s Manager', persona: "The Great Khali's on-screen translator and manager from 2007-2011, presented as Khali's brother. Behind the scenes, David Kapoor later became a senior vice president of WWE's creative team." }],
  },
  {
    id: 1583, name: 'Katie Lea', realName: 'Katarina Waters',
    eras: [{ era: 'pg', character: 'Katie Lea Burchill — Paul Burchill\'s Sister', persona: "British wrestler who appeared in WWE as Paul Burchill's kayfabe sister in 2008. Later worked in TNA as Winter. Known for a strong technical style despite being given limited opportunities." }],
  },
  {
    id: 1584, name: 'Kimberly Page', realName: 'Kimberly Bacon',
    eras: [{ era: 'attitude', character: 'Kimberly Page — The Diamond Doll', persona: "WCW valet for husband Diamond Dallas Page and founder of the Nitro Girls dance team. One of the most prominent female personalities in WCW during the Monday Night Wars era." }],
  },
  {
    id: 1585, name: 'Adriana Rizzo', realName: 'Anna Jade Keefer',
    eras: [{ era: 'modern', character: 'Adriana Rizzo — The D\'Angelo Family', persona: "Member of Tony D'Angelo's mob-themed NXT faction. A former five-time NCAA All-American in track and field who transitioned to professional wrestling." }],
  },
  {
    id: 1586, name: 'Bullet Club', realName: 'Prince Devitt, AJ Styles, Kenny Omega & others',
    eras: [{ era: 'modern', character: 'Bullet Club — NJPW Faction', persona: "NJPW's flagship villainous gaijin faction formed in 2013 by Prince Devitt (Finn Bálor). Became one of wrestling's most merchandised and influential stables with alumni including AJ Styles, Kenny Omega, The Young Bucks, and Karl Anderson." }],
  },
  {
    id: 1587, name: 'New Bloodline', realName: 'Solo Sikoa, Jacob Fatu, Tama Tonga, Tonga Loa',
    eras: [{ era: 'modern', character: 'New Bloodline — Solo Sikoa\'s Faction', persona: "Solo Sikoa's splinter faction formed in 2024 after Roman Reigns' post-WrestleMania 40 hiatus. Included Jacob Fatu, Tama Tonga, and Tonga Loa, engaging in a civil war storyline with Reigns' returning original Bloodline." }],
  },
  {
    id: 1588, name: 'Sha Samuels', realName: 'Shaheen Sherif',
    eras: [{ era: 'modern', character: 'Sha Samuels — NXT UK', persona: "English independent wrestling star who appeared on WWE NXT UK in 2021-2022 as a brash East End cockney heel. Released as part of the NXT UK roster transition to NXT Europe." }],
  },
  {
    id: 1589, name: 'Joseph Conners', realName: 'Joseph Buckton',
    eras: [{ era: 'reality', character: 'Joseph Conners — NXT UK', persona: "British heel wrestler who competed in the inaugural WWE UK Championship Tournament in 2017 and later on NXT UK. Released in 2021, now works as a trainer at Elevation Wrestling Academy." }],
  },
  {
    id: 1590, name: 'Hangman Adam Page', realName: 'Stephen Woltz',
    eras: [{ era: 'modern', character: 'Hangman Adam Page — AEW Champion', persona: "Two-time AEW World Champion and founding member of The Elite. AEW's homegrown babyface star who completed a long-running character arc to win the world title from Kenny Omega. Known for his Buckshot Lariat finisher and anxious millennial cowboy persona." }],
  },
  {
    id: 1591, name: 'Emilia McKenzie', realName: 'Millie McKenzie',
    eras: [{ era: 'modern', character: 'Emilia McKenzie — NXT UK', persona: "Young English wrestler who signed with WWE NXT UK in 2021 known for an aggressive, hard-hitting style. Released in 2022 and went on to win the Sendai Girls World Championship in Japan." }],
  },
  {
    id: 1592, name: 'The Funkettes', realName: 'Nadine Ellis & Traci Swain',
    eras: [{ era: 'new-gen', character: 'The Funkettes — Flash Funk\'s Valets', persona: "The two dancing valets who accompanied Flash Funk (2 Cold Scorpio) during his 1996-1997 WWF run, serving as part of his funk-themed presentation on television." }],
  },
  {
    id: 1593, name: 'Kim Chee', realName: 'Steve Lombardi',
    eras: [{ era: 'golden', character: 'Kim Chee — Kamala\'s Handler', persona: "Masked safari-helmet-wearing handler for Kamala the Ugandan Giant. The role was most frequently played by Steve Lombardi (also known as the Brooklyn Brawler) during Kamala's WWF stints in 1986-87 and 1992-93." }],
  },
  {
    id: 1594, name: 'Rey Fenix', realName: 'Rey Fenix',
    eras: [{ era: 'modern', character: 'Rey Fenix — Lucha Brothers', persona: "Mexican luchador and younger brother of Penta. One half of the Lucha Brothers tag team and a former AEW World Tag Team and Trios Champion. Signed to WWE in 2025 after his AEW contract expired." }],
  },
  {
    id: 1595, name: 'Alex Abrahantes', realName: 'Alex Abrahantes',
    eras: [{ era: 'modern', character: 'Alex Abrahantes — AEW Manager', persona: "AEW manager who served as Penta El Zero Miedo and Rey Fenix's interpreter and hype man, famous for the 'Penta Says' catchphrase." }],
  },
  {
    id: 1596, name: 'Rosemary', realName: 'Holly Letkeman',
    eras: [{ era: 'modern', character: 'Rosemary — Impact/NXT', persona: "Canadian Impact Wrestling standout known for her demon/undead persona. Four-time Impact Knockouts World Tag Team Champion and former Knockouts Champion. Had brief appearances on WWE NXT." }],
  },
  {
    id: 1597, name: 'Austin Aries', realName: 'Daniel Solwold Jr.',
    eras: [{ era: 'reality', character: 'Austin Aries — 205 Live', persona: "Three-time TNA World Champion and six-time TNA X Division Champion known as 'A Double.' Had a brief WWE run on 205 Live in 2017 including an NXT Championship reign. Known as one of independent wrestling's most talented performers." }],
  },
  {
    id: 1598, name: 'Pat O\'Connor', realName: "Patrick O'Connor",
    eras: [{ era: 'territory', character: "Pat O'Connor — NWA Champion", persona: "New Zealand-born NWA World Heavyweight Champion from 1959 to 1961. Lost the title to Buddy Rogers in the 'Match of the Century' at Comiskey Park before nearly 39,000 fans. Inducted into the WWE Hall of Fame in 2016." }],
  },
  {
    id: 1599, name: 'Scott Putski', realName: 'James Bednarski',
    eras: [{ era: 'attitude', character: 'Scott Putski — Second Generation', persona: "Second-generation wrestler and son of Ivan Putski. Had a brief WWF run in 1997 competing in the light heavyweight division before transitioning to WCW." }],
  },
  {
    id: 1600, name: 'The Yukon Lumberjacks', realName: 'Scott Irwin & Lumberjack Pierre',
    eras: [{ era: 'territory', character: 'The Yukon Lumberjacks — WWWF Tag Champions', persona: "WWWF Tag Team Champions in 1978 managed by Captain Lou Albano. Won the titles in June and held them for 148 days before losing to Tony Garea and Larry Zbyszko." }],
  },
  {
    id: 1601, name: 'Grand Wizard', realName: 'Ernie Roth',
    eras: [{ era: 'territory', character: 'The Grand Wizard — Manager', persona: "One of wrestling's greatest managers who guided champions including Superstar Billy Graham to the WWF Championship. Also managed Don Muraco, Stan Stasiak, and the first Intercontinental Champion Pat Patterson. Inducted into the WWE Hall of Fame in 1995." }],
  },
  {
    id: 1602, name: 'The Moondogs', realName: 'Moondog Rex & Moondog Spot',
    eras: [{ era: 'territory', character: 'The Moondogs — WWF Tag Champions', persona: "Wild, bone-carrying WWF tag team who held the WWF Tag Team Championship in 1981. A long-running act with multiple iterations that became a fixture in the WWF and Memphis territory for years." }],
  },
  {
    id: 1603, name: 'Pierre Carl Ouellet', realName: 'Carl Ouellet',
    eras: [{ era: 'new-gen', character: 'Pierre — The Quebecers', persona: "Three-time WWF Tag Team Champion as Pierre of The Quebecers alongside Jacques Rougeau. Later repackaged as pirate character Jean-Pierre LaFitte. Had a late career resurgence in Impact Wrestling as PCO." }],
  },
  {
    id: 1604, name: 'The Young Stallions', realName: 'Jim Powers & Paul Roma',
    eras: [{ era: 'golden', character: 'The Young Stallions — WWF Tag Team', persona: "Mid-card WWF tag team from 1987-1989. Both young athletic wrestlers who were given a push but never captured the WWF Tag Team Championship before their split." }],
  },
  {
    id: 1605, name: 'Greg Gagne', realName: 'Gregory Gagne',
    eras: [{ era: 'territory', character: 'Greg Gagne — AWA', persona: "Son of AWA founder Verne Gagne and two-time AWA Tag Team Champion as one half of the High Flyers with Jim Brunzell. A cornerstone of the AWA throughout the 1970s and 1980s." }],
  },
  {
    id: 1606, name: 'Butterbean', realName: 'Eric Esch',
    eras: [{ era: 'attitude', character: 'Butterbean — Celebrity Boxer', persona: "Heavyweight boxer and Toughman Contest legend who made notable WWE appearances including knocking out Brawl for All champion Bart Gunn in 36 seconds at WrestleMania XV in 1999." }],
  },
  {
    id: 1607, name: 'Wesley Blake', realName: 'Cory Weston',
    eras: [{ era: 'reality', character: 'Wesley Blake — NXT Tag Champion', persona: "NXT wrestler who won the NXT Tag Team Championship with Buddy Murphy, managed by Alexa Bliss. Later formed the Forgotten Sons stable with Steve Cutler and Jaxson Ryker." }],
  },
  {
    id: 1608, name: 'Scorpio Sky', realName: 'Schuyler Andrews',
    eras: [{ era: 'modern', character: 'Scorpio Sky — AEW', persona: "AEW founding roster member and two-time TNT Champion. One of the inaugural AEW World Tag Team Champions as part of SoCal Uncensored with Christopher Daniels and Frankie Kazarian." }],
  },
  {
    id: 1609, name: 'Gene Kiniski', realName: 'Eugene Kiniski',
    eras: [{ era: 'territory', character: 'Gene Kiniski — NWA Champion', persona: "Canadian former CFL football player turned NWA World Heavyweight Champion. Held the NWA title for 1,131 days from 1966 to 1969 before losing it to Dory Funk Jr. Known as 'Canada's Greatest Athlete.'" }],
  },
  {
    id: 1610, name: 'Wally Karbo', realName: 'Walter Karbo',
    eras: [{ era: 'territory', character: 'Wally Karbo — AWA Executive', persona: "Co-founder of the American Wrestling Association alongside Verne Gagne in 1960. Served as the AWA's matchmaker and on-air commissioner for decades, helping build the promotion into a wrestling powerhouse." }],
  },
  {
    id: 1611, name: 'Dory Funk Sr.', realName: 'Dorrance Funk',
    eras: [{ era: 'territory', character: 'Dory Funk Sr. — Amarillo Legend', persona: "Hall of Fame wrestler and Amarillo-based promoter. Father of Dory Funk Jr. and Terry Funk, and a 17-time NWA North American Heavyweight Champion. His Western States Sports promotion launched careers including Stan Hansen and Harley Race." }],
  },
  {
    id: 1612, name: 'Miguel Perez', realName: 'Miguel Perez',
    eras: [{ era: 'territory', character: 'Miguel Perez — Early Tag Champion', persona: "Puerto Rican wrestling legend who was one half of an iconic tag team with Antonino Rocca in the 1950s and 1960s, competing in multiple successful MSG main events." }],
  },
  {
    id: 1613, name: 'The Destroyer', realName: 'Dick Beyer',
    eras: [{ era: 'territory', character: 'The Destroyer — Masked Legend', persona: "Masked American wrestling legend who popularized the figure-four leglock and was one of the first American wrestlers to become a superstar in Japan. Held championships across NWA territories and the AWA." }],
  },
  {
    id: 1614, name: 'Louis Cerdan', realName: 'Gino Brito',
    eras: [{ era: 'territory', character: 'Louis Cerdan — WWWF Tag Champion', persona: "Won the WWWF World Tag Team Championship with Tony Parisi in 1975 under the French-Canadian Louis Cerdan persona. Later became a Montreal-area wrestling promoter under his real name Gino Brito." }],
  },
  {
    id: 1615, name: 'The Jackyl', realName: 'Don Callis',
    eras: [{ era: 'attitude', character: 'The Jackyl — WWF Manager', persona: "Cult-leader character who managed the Truth Commission in 1997-1998 WWF. Later managed the Oddities and Acolytes briefly. Went on to become a longtime Impact Wrestling commentator and executive, and AEW personality." }],
  },
  {
    id: 1616, name: 'Mercedes Martinez', realName: 'Jazmin Benitez',
    eras: [{ era: 'modern', character: 'Mercedes Martinez — NXT Veteran', persona: "Multiple-time independent champion and veteran who signed with WWE in 2020 for an NXT run. Competed in the Mae Young Classic tournaments and had stints in both NXT and NXT UK before departing." }],
  },
  {
    id: 1617, name: 'Beulah McGillicutty', realName: 'Trisa Hayes',
    eras: [{ era: 'attitude', character: 'Beulah McGillicutty — ECW Valet', persona: "ECW's most iconic valet who debuted as Raven's ally before turning to Tommy Dreamer's side. One of the most memorable characters in ECW history, later married Dreamer in real life." }],
  },
  {
    id: 1618, name: 'Eddie Gilbert', realName: 'Thomas Gilbert Jr.',
    eras: [{ era: 'territory', character: 'Eddie Gilbert — Territory Star & Booker', persona: "'Hot Stuff' Eddie Gilbert was a creative wrestler, booker, and promoter who served as ECW's first head booker before Paul Heyman. His work in Mid-South, Memphis, and various NWA territories established him as one of the most innovative minds of his era. Died in 1995 at age 33." }],
  },
  {
    id: 1619, name: 'Ian Rotten', realName: 'John Williams',
    eras: [{ era: 'attitude', character: 'Ian Rotten — ECW Hardcore', persona: "ECW hardcore wrestler who formed the Bad Breed tag team with Axl Rotten. Left ECW in 1995 and founded the IWA Mid-South promotion in Kentucky, known for extreme hardcore wrestling." }],
  },
  {
    id: 1620, name: 'Devastation Inc.', realName: 'Kamala, King Kong Bundy, Cactus Jack & others',
    eras: [{ era: 'territory', character: 'Devastation Inc. — WCCW Stable', persona: "Skandor Akbar-managed heel stable in World Class Championship Wrestling. A revolving-door faction that included future stars such as Kamala, King Kong Bundy, and a young Undertaker." }],
  },
  {
    id: 1621, name: 'The Sharpe Brothers', realName: 'Ben Sharpe & Mike Sharpe',
    eras: [{ era: 'territory', character: 'The Sharpe Brothers — Pioneer Tag Team', persona: "Pioneering Canadian tag team who won the inaugural NWA World Tag Team Championship in 1951 and were among the first major western wrestlers to work in Japan." }],
  },
  {
    id: 1622, name: 'The Stud Stable', realName: 'Arn Anderson, Terry Funk, Bunkhouse Buck',
    eras: [{ era: 'ruthless', character: 'The Stud Stable — WCW Faction', persona: "WCW heel stable managed by Colonel Robert Parker in 1994-1997. Feuded heavily with Dusty and Dustin Rhodes. Members included Arn Anderson, Terry Funk, Bunkhouse Buck, and Meng." }],
  },
  {
    id: 1623, name: 'Toots Mondt', realName: 'Joseph Mondt',
    eras: [{ era: 'territory', character: 'Toots Mondt — Wrestling Pioneer', persona: "Revolutionary wrestling promoter who co-founded the Capitol Wrestling Corporation in 1952 and was instrumental in the 1963 creation of the WWWF alongside Vincent J. McMahon, helping lay the foundation for what became WWE." }],
  },
  {
    id: 1624, name: 'Paul Vachon', realName: 'Paul Vachon',
    eras: [{ era: 'territory', character: 'Paul Vachon — The Butcher', persona: "Canadian wrestler nicknamed 'The Butcher' and brother of Mad Dog Vachon. AWA World Tag Team Champion alongside his brother. Competed across Canadian and American territories throughout the 1960s-1980s." }],
  },
];

// Generate the entries as JS code
const entries = NEW_ENTRIES.map(e => {
  const erasStr = e.eras.map(era => {
    const persona = era.persona.replace(/'/g, "\\'");
    const character = era.character.replace(/'/g, "\\'");
    return `{ era: '${era.era}', character: '${character}', persona: '${persona}' }`;
  }).join(', ');

  const realName = e.realName.replace(/'/g, "\\'");
  const name = e.name.replace(/'/g, "\\'");

  return `  {
    id: ${e.id},
    name: '${name}',
    realName: '${realName}',
    brookeFavorite: false,
    eras: [${erasStr}],
    championships: [],
    totalTitleReigns: 0,
    hallOfFame: null,
  }`;
}).join(',\n');

// Insert before the closing ];
const insertPoint = wContent.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('Could not find closing ]; in wrestlers.js');
  process.exit(1);
}

wContent = wContent.substring(0, insertPoint) + ',\n' + entries + ',\n];\n\nexport default WRESTLERS;\n';

writeFileSync(wPath, wContent, 'utf-8');
console.log(`Added ${NEW_ENTRIES.length} new entries to wrestlers.js (IDs ${NEW_ENTRIES[0].id}-${NEW_ENTRIES[NEW_ENTRIES.length-1].id})`);
