const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
let count = 0;

// Helper: replace a specific "Reign N" placeholder for a wrestler+title combo
function replaceReign(wrestlerName, titleName, reignNum, newDate) {
  // Find the wrestler's championship entry and replace the specific Reign N
  // We need to find the context: title: "titleName" ... date: "Reign N"
  // Strategy: find title + reigns array, then replace the Nth "Reign N" occurrence within that context

  const titleEscaped = titleName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const wrestlerEscaped = wrestlerName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Find the wrestler entry
  const wrestlerIdx = content.indexOf(`name: "${wrestlerName}"`);
  if (wrestlerIdx === -1) {
    console.log(`  WARNING: wrestler "${wrestlerName}" not found`);
    return false;
  }

  // Find the title within ~2000 chars of the wrestler name
  const searchStart = wrestlerIdx;
  const searchEnd = Math.min(content.length, wrestlerIdx + 5000);
  const chunk = content.substring(searchStart, searchEnd);

  const titleIdx = chunk.indexOf(`title: "${titleName}"`);
  if (titleIdx === -1) {
    console.log(`  WARNING: title "${titleName}" not found near "${wrestlerName}"`);
    return false;
  }

  // Find the specific "Reign N" within the reigns array for this title
  const reignStr = `"Reign ${reignNum}"`;
  const absStart = searchStart + titleIdx;
  const reignChunk = content.substring(absStart, absStart + 2000);
  const reignIdx = reignChunk.indexOf(reignStr);

  if (reignIdx === -1) {
    // Already replaced or not found
    return false;
  }

  // Replace it
  const absReignIdx = absStart + reignIdx;
  content = content.substring(0, absReignIdx) + `"${newDate}"` + content.substring(absReignIdx + reignStr.length);
  count++;
  return true;
}

console.log("Updating placeholder reign dates...\n");

// ═══════════════════════════════════════════════════
// JOHN CENA - WWE Championship (13 reigns)
// ═══════════════════════════════════════════════════
replaceReign("John Cena", "WWE Championship", 2, "Jan 2006");
replaceReign("John Cena", "WWE Championship", 3, "Sep 2006");
replaceReign("John Cena", "WWE Championship", 4, "Oct 2007");
replaceReign("John Cena", "WWE Championship", 5, "Sep 2009");
replaceReign("John Cena", "WWE Championship", 6, "Oct 2009");
replaceReign("John Cena", "WWE Championship", 7, "Feb 2010");
replaceReign("John Cena", "WWE Championship", 8, "Mar 2010");
replaceReign("John Cena", "WWE Championship", 9, "May 2011");
replaceReign("John Cena", "WWE Championship", 10, "Jul 2011");
replaceReign("John Cena", "WWE Championship", 11, "Sep 2011");
replaceReign("John Cena", "WWE Championship", 12, "Apr 2013");
replaceReign("John Cena", "WWE Championship", 13, "Oct 2013");

// John Cena - World Heavyweight Championship
replaceReign("John Cena", "World Heavyweight Championship", 2, "Oct 2009");
replaceReign("John Cena", "World Heavyweight Championship", 3, "Feb 2013");

// John Cena - United States Championship
replaceReign("John Cena", "United States Championship", 2, "Oct 2004");
replaceReign("John Cena", "United States Championship", 3, "Apr 2015");
replaceReign("John Cena", "United States Championship", 4, "Jul 2015");
replaceReign("John Cena", "United States Championship", 5, "Dec 2015");

// John Cena - WWE Tag Team Championship
replaceReign("John Cena", "WWE Tag Team Championship", 2, "Apr 2008");
replaceReign("John Cena", "WWE Tag Team Championship", 3, "Sep 2014");

// ═══════════════════════════════════════════════════
// BATISTA - World Heavyweight Championship (4 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Batista", "World Heavyweight Championship", 2, "Nov 2006");
replaceReign("Batista", "World Heavyweight Championship", 3, "Sep 2007");
replaceReign("Batista", "World Heavyweight Championship", 4, "Oct 2008");

// Batista - WWE Championship
replaceReign("Batista", "WWE Championship", 2, "Feb 2010");

// ═══════════════════════════════════════════════════
// TRISH STRATUS - Women's Championship (7 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Trish Stratus", "Women's Championship", 2, "May 2002");
replaceReign("Trish Stratus", "Women's Championship", 3, "Sep 2002");
replaceReign("Trish Stratus", "Women's Championship", 4, "Jun 2003");
replaceReign("Trish Stratus", "Women's Championship", 5, "Dec 2004");
replaceReign("Trish Stratus", "Women's Championship", 6, "Jan 2005");
replaceReign("Trish Stratus", "Women's Championship", 7, "Sep 2005");

// ═══════════════════════════════════════════════════
// LITA - Women's Championship (4 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Lita", "Women's Championship", 2, "Dec 2004");
replaceReign("Lita", "Women's Championship", 3, "Aug 2006");
replaceReign("Lita", "Women's Championship", 4, "Oct 2006");

// ═══════════════════════════════════════════════════
// AJ LEE - Divas Championship (3 reigns)
// ═══════════════════════════════════════════════════
replaceReign("AJ Lee", "Divas Championship", 2, "Sep 2013");
replaceReign("AJ Lee", "Divas Championship", 3, "Jun 2014");

// ═══════════════════════════════════════════════════
// PAIGE - Divas Championship (2 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Paige", "Divas Championship", 2, "Aug 2014");

// ═══════════════════════════════════════════════════
// OWEN HART - Intercontinental Championship
// ═══════════════════════════════════════════════════
replaceReign("Owen Hart", "Intercontinental Championship", 2, "Oct 1997");
replaceReign("Owen Hart", "Intercontinental Championship", 3, "Oct 1997");
replaceReign("Owen Hart", "Intercontinental Championship", 4, "Oct 1997");

// ═══════════════════════════════════════════════════
// X-PAC - multiple titles
// ═══════════════════════════════════════════════════
replaceReign("X-Pac", "Light Heavyweight Championship", 2, "Apr 2000");
replaceReign("X-Pac", "European Championship", 2, "Mar 1999");
replaceReign("X-Pac", "European Championship", 3, "Jul 1999");
replaceReign("X-Pac", "European Championship", 4, "Oct 1999");
replaceReign("X-Pac", "European Championship", 5, "Dec 1999");

// ═══════════════════════════════════════════════════
// MR. PERFECT - Intercontinental Championship
// ═══════════════════════════════════════════════════
replaceReign("Mr. Perfect", "Intercontinental Championship", 2, "Nov 1990");

// ═══════════════════════════════════════════════════
// DON MURACO - Intercontinental Championship
// ═══════════════════════════════════════════════════
replaceReign("Don Muraco", "Intercontinental Championship", 2, "Jan 1983");

// ═══════════════════════════════════════════════════
// JEFF JARRETT - Intercontinental Championship (6 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Jeff Jarrett", "Intercontinental Championship", 2, "Apr 1995");
replaceReign("Jeff Jarrett", "Intercontinental Championship", 3, "May 1995");
replaceReign("Jeff Jarrett", "Intercontinental Championship", 4, "Oct 1998");
replaceReign("Jeff Jarrett", "Intercontinental Championship", 5, "Mar 1999");
replaceReign("Jeff Jarrett", "Intercontinental Championship", 6, "Jul 1999");

// ═══════════════════════════════════════════════════
// RUSEV - United States Championship (3 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Rusev", "United States Championship", 2, "Aug 2017");
replaceReign("Rusev", "United States Championship", 3, "Dec 2018");

// ═══════════════════════════════════════════════════
// RYBACK - Intercontinental Championship
// ═══════════════════════════════════════════════════
replaceReign("Ryback", "Intercontinental Championship", 2, "Sep 2015");
replaceReign("Ryback", "Intercontinental Championship", 3, "Oct 2015");

// ═══════════════════════════════════════════════════
// JOHNNY GARGANO - NXT titles
// ═══════════════════════════════════════════════════
replaceReign("Johnny Gargano", "NXT Championship", 2, "Oct 2019");
replaceReign("Johnny Gargano", "NXT Championship", 3, "Apr 2020");
replaceReign("Johnny Gargano", "NXT North American Championship", 2, "Oct 2020");

// ═══════════════════════════════════════════════════
// KARRION KROSS - NXT Championship
// ═══════════════════════════════════════════════════
replaceReign("Karrion Kross", "NXT Championship", 2, "Apr 2021");

// ═══════════════════════════════════════════════════
// ALUNDRA BLAYZE - WWF Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Alundra Blayze", "WWF Women's Championship", 2, "Mar 1994");
replaceReign("Alundra Blayze", "WWF Women's Championship", 3, "Oct 1995");

// ═══════════════════════════════════════════════════
// WENDI RICHTER - WWF Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Wendi Richter", "WWF Women's Championship", 2, "Feb 1985");

// ═══════════════════════════════════════════════════
// MOLLY HOLLY - Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Molly Holly", "Women's Championship", 2, "Nov 2003");

// ═══════════════════════════════════════════════════
// VICTORIA - Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Victoria", "Women's Championship", 2, "Feb 2004");

// ═══════════════════════════════════════════════════
// JAZZ - Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Jazz", "Women's Championship", 2, "Jun 2003");

// ═══════════════════════════════════════════════════
// NAOMI - SmackDown Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Naomi", "SmackDown Women's Championship", 2, "Apr 2017");

// ═══════════════════════════════════════════════════
// NIKKI BELLA - Divas Championship
// ═══════════════════════════════════════════════════
replaceReign("Nikki Bella", "Divas Championship", 2, "Nov 2014");

// ═══════════════════════════════════════════════════
// EVE TORRES - Divas Championship
// ═══════════════════════════════════════════════════
replaceReign("Eve Torres", "Divas Championship", 2, "Apr 2012");
replaceReign("Eve Torres", "Divas Championship", 3, "Sep 2012");

// ═══════════════════════════════════════════════════
// MARYSE - Divas Championship
// ═══════════════════════════════════════════════════
replaceReign("Maryse", "Divas Championship", 2, "Oct 2009");

// ═══════════════════════════════════════════════════
// JACQUELINE MOORE - WWF Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Jacqueline Moore", "WWF Women's Championship", 2, "Feb 2000");
// Also check Jacqueline
replaceReign("Jacqueline", "WWF Women's Championship", 2, "Feb 2000");

// ═══════════════════════════════════════════════════
// ROXANNE PEREZ - NXT Women's Championship
// ═══════════════════════════════════════════════════
replaceReign("Roxanne Perez", "NXT Women's Championship", 2, "Apr 2024");

// ═══════════════════════════════════════════════════
// DAKOTA KAI - Women's Tag Team Championship
// ═══════════════════════════════════════════════════
replaceReign("Dakota Kai", "Women's Tag Team Championship", 2, "Jul 2023");

// ═══════════════════════════════════════════════════
// NXT Women's Tag Championships
// ═══════════════════════════════════════════════════
replaceReign("Jacy Jayne", "NXT Women's Tag Championship", 2, "Apr 2022");
replaceReign("Gigi Dolin", "NXT Women's Tag Championship", 2, "Apr 2022");
replaceReign("Katana Chance", "NXT Women's Tag Championship", 2, "Feb 2023");
replaceReign("Katana Chance", "NXT Women's Tag Championship", 3, "Oct 2023");
replaceReign("Kayden Carter", "NXT Women's Tag Championship", 2, "Feb 2023");
replaceReign("Kayden Carter", "NXT Women's Tag Championship", 3, "Oct 2023");

// ═══════════════════════════════════════════════════
// ALBA FYRE & ISLA DAWN - Women's Tag Team Championship
// ═══════════════════════════════════════════════════
replaceReign("Alba Fyre & Isla Dawn", "WWE Women's Tag Team Championship", 2, "Apr 2024");

// ═══════════════════════════════════════════════════
// CHIEF JAY STRONGBOW - WWWF Tag Team Championship
// ═══════════════════════════════════════════════════
replaceReign("Chief Jay Strongbow", "WWWF Tag Team Championship", 2, "Nov 1976");
replaceReign("Chief Jay Strongbow", "WWWF Tag Team Championship", 3, "Oct 1982");

// ═══════════════════════════════════════════════════
// DUSTY RHODES - NWA World Championship
// ═══════════════════════════════════════════════════
replaceReign("Dusty Rhodes", "NWA World Championship (not WWF)", 2, "Jun 1981");
replaceReign("Dusty Rhodes", "NWA World Championship (not WWF)", 3, "Jan 1986");

// ═══════════════════════════════════════════════════
// AFA & SIKA - WWF Tag Team Championship
// ═══════════════════════════════════════════════════
replaceReign("Afa & Sika (Wild Samoans)", "WWF Tag Team Championship", 2, "Apr 1980");
replaceReign("Afa & Sika (Wild Samoans)", "WWF Tag Team Championship", 3, "Sep 1983");

// ═══════════════════════════════════════════════════
// HARLEY RACE - NWA World Championship (8 reigns)
// ═══════════════════════════════════════════════════
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 2, "Nov 1973");
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 3, "Dec 1973");
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 4, "May 1977");
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 5, "Jun 1977");
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 6, "Feb 1978");
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 7, "Jun 1978");
replaceReign("Harley Race", "NWA World Championship (pre-WWF)", 8, "Jun 1981");

// ═══════════════════════════════════════════════════
// DDP - WCW World Heavyweight Championship
// ═══════════════════════════════════════════════════
replaceReign("Diamond Dallas Page", "WCW World Heavyweight Championship", 2, "Jul 1999");
replaceReign("Diamond Dallas Page", "WCW World Heavyweight Championship", 3, "Apr 2000");

// ═══════════════════════════════════════════════════
// VADER - WCW World Heavyweight Championship
// ═══════════════════════════════════════════════════
replaceReign("Vader", "WCW World Heavyweight Championship", 2, "Mar 1993");
replaceReign("Vader", "WCW World Heavyweight Championship", 3, "Dec 1993");

// ═══════════════════════════════════════════════════
// SYCHO SID - WWF Championship
// ═══════════════════════════════════════════════════
replaceReign("Sycho Sid", "WWF Championship", 2, "Jan 1997");
// Also check for WCW reign
replaceReign("Sycho Sid", "WCW World Heavyweight Championship", 2, "Apr 2000");

// ═══════════════════════════════════════════════════
// TAG TEAMS
// ═══════════════════════════════════════════════════

// APA
replaceReign("APA (Bradshaw & Farooq)", "WWF Tag Team Championship", 2, "Jul 2001");

// Road Dogg / New Age Outlaws
replaceReign("Road Dogg Jesse James", "WWF Tag Team Championship", 2, "Aug 1999");
replaceReign("Road Dogg Jesse James", "WWF Tag Team Championship", 3, "Sep 1999");
replaceReign("Road Dogg Jesse James", "WWF Tag Team Championship", 4, "Nov 1999");
replaceReign("Road Dogg Jesse James", "WWF Tag Team Championship", 5, "Apr 2000");
// Hardcore Championship for Road Dogg
replaceReign("Road Dogg Jesse James", "Hardcore Championship", 2, "Apr 1999");
replaceReign("Road Dogg Jesse James", "Hardcore Championship", 3, "Jun 1999");

// Revival / FTR
replaceReign("The Revival / FTR", "NXT Tag Team Championship", 2, "Nov 2017");
replaceReign("The Revival / FTR", "Raw Tag Team Championship", 2, "Sep 2019");

// Demolition
replaceReign("Demolition (Ax, Smash & Crush)", "WWF Tag Team Championship", 2, "Oct 1989");
replaceReign("Demolition (Ax, Smash & Crush)", "WWF Tag Team Championship", 3, "Jul 1990");

// Dudley Boyz
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 2, "Sep 2001");
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 3, "Nov 2001");
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 4, "Jan 2002");
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 5, "Apr 2002");
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 6, "Sep 2002");
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 7, "Jun 2004");
replaceReign("The Dudley Boyz", "WWF/WWE Tag Team Championship", 8, "Sep 2015");

// Jim Neidhart / Hart Foundation
replaceReign("Jim Neidhart", "WWF Tag Team Championship", 2, "Aug 1990");

// IRS / Money Inc.
replaceReign("Irwin R. Schyster", "WWF Tag Team Championship", 2, "Jun 1992");
replaceReign("IRS", "WWF Tag Team Championship", 2, "Jun 1992");
replaceReign("IRS", "WWF Tag Team Championship", 3, "Oct 1992");

// Mr. Fuji
replaceReign("Mr. Fuji", "WWF Tag Team Championship", 2, "Jun 1972");

// Quebecers
replaceReign("The Quebecers (Jacques & Pierre)", "WWF Tag Team Championship", 2, "Jan 1994");
replaceReign("The Quebecers (Jacques & Pierre)", "WWF Tag Team Championship", 3, "Mar 1994");

// La Resistance
replaceReign("La Résistance (Dupree & Grenier)", "World Tag Team Championship", 2, "Nov 2003");
replaceReign("La Résistance (Dupree & Grenier)", "World Tag Team Championship", 3, "Jun 2004");
replaceReign("La Resistance", "World Tag Team Championship", 2, "Nov 2003");
replaceReign("La Resistance", "World Tag Team Championship", 3, "Jun 2004");

// The Bar (Cesaro & Sheamus)
replaceReign("The Bar (Cesaro & Sheamus)", "Raw Tag Team Championship", 2, "Feb 2018");
replaceReign("The Bar (Cesaro & Sheamus)", "Raw Tag Team Championship", 3, "Dec 2018");

// Sheamus & Cesaro SmackDown
replaceReign("Sheamus & Cesaro (The Bar II - SmackDown)", "SmackDown Tag Team Championship", 2, "Jul 2019");

// MNM
replaceReign("MNM (Joey Mercury & Johnny Nitro)", "WWE Tag Team Championship", 2, "Jan 2007");

// Team Angle
replaceReign("Charlie Haas & Shelton Benjamin (Team Angle)", "WWE Tag Team Championship", 2, "Jul 2003");

// Miz & Morrison
replaceReign("The Miz & John Morrison (tag team)", "WWE Tag Team Championship", 2, "Jul 2008");
replaceReign("The Miz & John Morrison (tag team)", "WWE Tag Team Championship", 3, "Dec 2008");

// Street Profits
replaceReign("The Street Profits (Montez Ford & Angelo Dawkins)", "Raw Tag Team Championship", 2, "Jun 2020");
replaceReign("The Street Profits (Montez Ford & Angelo Dawkins)", "SmackDown Tag Team Championship", 2, "Oct 2022");

// Viking Raiders
replaceReign("The Viking Raiders (Erik & Ivar)", "Raw Tag Team Championship", 2, "Nov 2022");
replaceReign("The Viking Raiders", "Raw Tag Team Championship", 2, "Nov 2022");

// RKBro
replaceReign("RKBro (Randy Orton & Riddle)", "Raw Tag Team Championship", 2, "Mar 2022");

// Axiom & Nathan Frazer
replaceReign("Axiom & Nathan Frazer (tag era)", "NXT Tag Team Championship", 2, "Dec 2024");
replaceReign("Axiom & Nathan Frazer", "NXT Tag Team Championship", 2, "Dec 2024");

// Gallus
replaceReign("Gallus", "NXT UK Tag Team Championship", 2, "Aug 2022");

// Grizzled Young Veterans
replaceReign("Grizzled Young Veterans", "NXT UK Tag Team Championship", 2, "Jun 2021");

// Trent Seven / Moustache Mountain
replaceReign("Trent Seven", "NXT UK Tag Team Championship", 2, "Apr 2022");

// Jason Jordan / American Alpha
replaceReign("Jason Jordan", "Raw Tag Team Championship", 2, "Aug 2017");

// Otis
replaceReign("Otis", "Tag Team Championship", 2, "Aug 2023");

// Katana Chance & Kayden Carter (tag entry)
replaceReign("Katana Chance & Kayden Carter", "NXT Women's Tag Team Championship", 2, "Feb 2023");
replaceReign("Katana Chance & Kayden Carter", "NXT Women's Tag Team Championship", 3, "Oct 2023");

// ═══════════════════════════════════════════════════
// MIDCARD TITLES
// ═══════════════════════════════════════════════════

// Noam Dar - Heritage Cup
replaceReign("Noam Dar", "NXT Heritage Cup Championship", 2, "May 2022");
replaceReign("Noam Dar", "NXT Heritage Cup Championship", 3, "Jan 2023");

// Roderick Strong - NXT North American
replaceReign("Roderick Strong", "NXT North American Championship", 2, "Jul 2021");

// Chavo Guerrero Jr. - Cruiserweight
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 2, "Jan 1999");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 3, "Jun 1999");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 4, "Sep 1999");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 5, "Apr 2000");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 6, "Jun 2001");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 7, "Jul 2004");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 8, "Sep 2004");
replaceReign("Chavo Guerrero Jr.", "Cruiserweight Championship", 9, "Jan 2005");

// Billy Kidman - Cruiserweight
replaceReign("Billy Kidman", "Cruiserweight Championship", 2, "Mar 1999");
replaceReign("Billy Kidman", "Cruiserweight Championship", 3, "Oct 1999");
replaceReign("Billy Kidman", "Cruiserweight Championship", 4, "Jan 2000");
replaceReign("Billy Kidman", "Cruiserweight Championship", 5, "Apr 2000");
replaceReign("Billy Kidman", "Cruiserweight Championship", 6, "May 2001");
replaceReign("Billy Kidman", "Cruiserweight Championship", 7, "Feb 2003");

// ═══════════════════════════════════════════════════
// HARDCORE / 24-7 CHAMPIONSHIP (approximate dates)
// ═══════════════════════════════════════════════════

// Stevie Richards - Hardcore Championship (22 reigns, Nov 2001 - Aug 2002)
replaceReign("Stevie Richards", "Hardcore Championship", 2, "Dec 2001");
replaceReign("Stevie Richards", "Hardcore Championship", 3, "Dec 2001");
replaceReign("Stevie Richards", "Hardcore Championship", 4, "Jan 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 5, "Jan 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 6, "Feb 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 7, "Feb 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 8, "Mar 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 9, "Mar 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 10, "Apr 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 11, "Apr 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 12, "May 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 13, "May 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 14, "May 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 15, "Jun 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 16, "Jun 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 17, "Jun 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 18, "Jul 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 19, "Jul 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 20, "Jul 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 21, "Aug 2002");
replaceReign("Stevie Richards", "Hardcore Championship", 22, "Aug 2002");

// Al Snow - Hardcore Championship (8 reigns)
replaceReign("Al Snow", "Hardcore Championship", 2, "Jan 2000");
replaceReign("Al Snow", "Hardcore Championship", 3, "Feb 2000");
replaceReign("Al Snow", "Hardcore Championship", 4, "Mar 2000");
replaceReign("Al Snow", "Hardcore Championship", 5, "May 2000");
replaceReign("Al Snow", "Hardcore Championship", 6, "Jul 2000");
replaceReign("Al Snow", "Hardcore Championship", 7, "Jan 2001");
replaceReign("Al Snow", "Hardcore Championship", 8, "Jun 2001");

// Hardcore Holly - Hardcore Championship (6 reigns)
replaceReign("Hardcore Holly", "Hardcore Championship", 2, "Nov 1999");
replaceReign("Hardcore Holly", "Hardcore Championship", 3, "Feb 2000");
replaceReign("Hardcore Holly", "Hardcore Championship", 4, "May 2000");
replaceReign("Hardcore Holly", "Hardcore Championship", 5, "Aug 2001");
replaceReign("Hardcore Holly", "Hardcore Championship", 6, "Feb 2002");

// Spike Dudley - Hardcore Championship (3 reigns)
replaceReign("Spike Dudley", "Hardcore Championship", 2, "Aug 2001");
replaceReign("Spike Dudley", "Hardcore Championship", 3, "Feb 2002");

// Test - Hardcore Championship (3 reigns)
replaceReign("Test", "Hardcore Championship", 2, "Dec 2001");
replaceReign("Test", "Hardcore Championship", 3, "Jan 2002");

// Maven - Hardcore Championship (3 reigns)
replaceReign("Maven", "Hardcore Championship", 2, "Mar 2002");
replaceReign("Maven", "Hardcore Championship", 3, "Jun 2002");

// Dana Brooke - 24/7 Championship (16 reigns, Aug 2021 - Aug 2022)
replaceReign("Dana Brooke", "24/7 Championship", 2, "Sep 2021");
replaceReign("Dana Brooke", "24/7 Championship", 3, "Sep 2021");
replaceReign("Dana Brooke", "24/7 Championship", 4, "Oct 2021");
replaceReign("Dana Brooke", "24/7 Championship", 5, "Nov 2021");
replaceReign("Dana Brooke", "24/7 Championship", 6, "Dec 2021");
replaceReign("Dana Brooke", "24/7 Championship", 7, "Jan 2022");
replaceReign("Dana Brooke", "24/7 Championship", 8, "Feb 2022");
replaceReign("Dana Brooke", "24/7 Championship", 9, "Mar 2022");
replaceReign("Dana Brooke", "24/7 Championship", 10, "Mar 2022");
replaceReign("Dana Brooke", "24/7 Championship", 11, "Apr 2022");
replaceReign("Dana Brooke", "24/7 Championship", 12, "May 2022");
replaceReign("Dana Brooke", "24/7 Championship", 13, "May 2022");
replaceReign("Dana Brooke", "24/7 Championship", 14, "Jun 2022");
replaceReign("Dana Brooke", "24/7 Championship", 15, "Jul 2022");
replaceReign("Dana Brooke", "24/7 Championship", 16, "Aug 2022");

// ═══════════════════════════════════════════════════
// MISC
// ═══════════════════════════════════════════════════

// Buff Bagwell - WCW Tag Team
replaceReign("Buff Bagwell", "WCW World Tag Team Championship", 2, "Jan 1998");
replaceReign("Buff Bagwell", "WCW World Tag Team Championship", 3, "Jun 1998");
replaceReign("Buff Bagwell", "WCW World Tag Team Championship", 4, "Oct 1998");
replaceReign("Buff Bagwell", "WCW World Tag Team Championship", 5, "Feb 1999");

// Arn Anderson - NWA World Tag Team Championship
replaceReign("Arn Anderson", "NWA World Tag Team Championship", 2, "Sep 1986");
replaceReign("Arn Anderson", "NWA World Tag Team Championship", 3, "Mar 1987");
replaceReign("Arn Anderson", "NWA World Tag Team Championship", 4, "Sep 1987");
replaceReign("Arn Anderson", "NWA World Tag Team Championship", 5, "Oct 1988");
replaceReign("Arn Anderson", "NWA World Tag Team Championship", 6, "Sep 1989");

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal: ${count} placeholder reign dates updated.`);

// Check remaining placeholders
const remaining = (content.match(/date: "Reign \d+"/g) || []).length;
console.log(`Remaining placeholders: ${remaining}`);
