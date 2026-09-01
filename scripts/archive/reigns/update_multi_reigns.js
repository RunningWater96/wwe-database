const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
let count = 0;

function replaceChamp(oldStr, newStr) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    count++;
  }
}

// === JOHN CENA ===
replaceChamp(
  '{ title: "WWE Championship", count: 13, firstReign: "Apr 2005", notable: "The most reigns in WWE Championship history — spanning a decade of dominance" }',
  '{ title: "WWE Championship", count: 13, reigns: [{ date: "Apr 2005" }, { date: "Jan 2006" }, { date: "Sep 2006" }, { date: "Oct 2007" }, { date: "Nov 2008" }, { date: "Apr 2009" }, { date: "Feb 2010" }, { date: "May 2010" }, { date: "Jul 2010" }, { date: "Sep 2010" }, { date: "Jun 2011" }, { date: "Aug 2013" }, { date: "Sep 2014" }], firstReign: "Apr 2005", notable: "The most reigns in WWE Championship history — spanning a decade of dominance" }'
);
replaceChamp(
  '{ title: "World Heavyweight Championship", count: 3, firstReign: "Sep 2009", notable: "Three World Heavyweight title reigns" }',
  '{ title: "World Heavyweight Championship", count: 3, reigns: [{ date: "Sep 2009" }, { date: "Mar 2012" }, { date: "Oct 2012" }], firstReign: "Sep 2009", notable: "Three World Heavyweight title reigns" }'
);
replaceChamp(
  '{ title: "United States Championship", count: 5, firstReign: "Mar 2004", notable: "Five US title reigns" }',
  '{ title: "United States Championship", count: 5, reigns: [{ date: "Mar 2004" }, { date: "Oct 2004" }, { date: "May 2015" }, { date: "Dec 2015" }, { date: "Jul 2016" }], firstReign: "Mar 2004", notable: "Five US title reigns" }'
);
replaceChamp(
  '{ title: "Tag Team Championship", count: 3, firstReign: "2006", notable: "Various tag partners" }',
  '{ title: "Tag Team Championship", count: 3, reigns: [{ date: "Apr 2006" }, { date: "Aug 2008" }, { date: "Sep 2009" }], firstReign: "2006", notable: "Various tag partners" }'
);

// === BATISTA ===
replaceChamp(
  '{ title: "World Heavyweight Championship", count: 4, firstReign: "Apr 2005", notable: "Dominant WHC champion — the face of SmackDown" }',
  '{ title: "World Heavyweight Championship", count: 4, reigns: [{ date: "Apr 2005" }, { date: "Jan 2006" }, { date: "Nov 2006" }, { date: "Feb 2009" }], firstReign: "Apr 2005", notable: "Dominant WHC champion — the face of SmackDown" }'
);
replaceChamp(
  '{ title: "WWE Championship", count: 2, firstReign: "Jun 2009", notable: "Two WWE Championship reigns" }',
  '{ title: "WWE Championship", count: 2, reigns: [{ date: "Jun 2009" }, { date: "Feb 2010" }], firstReign: "Jun 2009", notable: "Two WWE Championship reigns" }'
);

// === TRISH STRATUS ===
replaceChamp(
  '{ title: "Women\'s Championship", count: 7, firstReign: "Nov 2001", notable: "Seven-time Women\'s Champion — record at the time" }',
  '{ title: "Women\'s Championship", count: 7, reigns: [{ date: "Nov 2001" }, { date: "May 2002" }, { date: "Sep 2002" }, { date: "Jun 2003" }, { date: "Dec 2004" }, { date: "Jan 2006" }, { date: "Aug 2006" }], firstReign: "Nov 2001", notable: "Seven-time Women\'s Champion — record at the time" }'
);

// === LITA ===
replaceChamp(
  '{ title: "Women\'s Championship", count: 4, firstReign: "Aug 2000", notable: "Four-time champion across two decades of character evolution" }',
  '{ title: "Women\'s Championship", count: 4, reigns: [{ date: "Aug 2000" }, { date: "Nov 2003" }, { date: "Dec 2004" }, { date: "Aug 2006" }], firstReign: "Aug 2000", notable: "Four-time champion across two decades of character evolution" }'
);

// === OWEN HART ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 2, firstReign: "Sep 1997", notable: "Two IC reigns — both excellent" }',
  '{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Sep 1997" }, { date: "Oct 1997" }], firstReign: "Sep 1997", notable: "Two IC reigns — both excellent" }'
);
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 4, firstReign: "Jan 1994", notable: "Four tag reigns — with Yokozuna, Bulldog, Koko, Jeff Jarrett" }',
  '{ title: "WWF Tag Team Championship", count: 4, reigns: [{ date: "Jan 1994" }, { date: "Sep 1996" }, { date: "Jul 1997" }, { date: "Dec 1997" }], firstReign: "Jan 1994", notable: "Four tag reigns — with Yokozuna, Bulldog, Koko, Jeff Jarrett" }'
);

// === SYCHO SID ===
replaceChamp(
  '{ title: "WWF Championship", count: 2, firstReign: "Nov 1996", notable: "Two title reigns — both felt like genuine big moments" }',
  '{ title: "WWF Championship", count: 2, reigns: [{ date: "Nov 1996" }, { date: "Jan 1997" }], firstReign: "Nov 1996", notable: "Two title reigns — both felt like genuine big moments" }'
);

// === X-PAC ===
replaceChamp(
  '{ title: "Light Heavyweight Championship", count: 2, firstReign: "Mar 1999", notable: "Two LHW title reigns" }',
  '{ title: "Light Heavyweight Championship", count: 2, reigns: [{ date: "Mar 1999" }, { date: "Jul 1999" }], firstReign: "Mar 1999", notable: "Two LHW title reigns" }'
);
replaceChamp(
  '{ title: "European Championship", count: 3, firstReign: "Oct 1998", notable: "Three European title reigns" }',
  '{ title: "European Championship", count: 3, reigns: [{ date: "Oct 1998" }, { date: "Mar 1999" }, { date: "Jul 2000" }], firstReign: "Oct 1998", notable: "Three European title reigns" }'
);
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 5, firstReign: "Mar 1999", notable: "Multiple tag reigns with Kane and others" }',
  '{ title: "WWF Tag Team Championship", count: 5, reigns: [{ date: "Mar 1999" }, { date: "Aug 1999" }, { date: "Oct 1999" }, { date: "Nov 1999" }, { date: "Apr 2000" }], firstReign: "Mar 1999", notable: "Multiple tag reigns with Kane and others" }'
);

// === AL SNOW ===
replaceChamp(
  '{ title: "Hardcore Championship", count: 8, firstReign: "Aug 1999", notable: "Eight Hardcore title reigns — Head approved" }',
  '{ title: "Hardcore Championship", count: 8, reigns: [{ date: "Aug 1999" }, { date: "Oct 1999" }, { date: "Nov 1999" }, { date: "Jan 2000" }, { date: "Mar 2000" }, { date: "May 2000" }, { date: "Nov 2000" }, { date: "Jan 2001" }], firstReign: "Aug 1999", notable: "Eight Hardcore title reigns — Head approved" }'
);

// === AJ LEE ===
replaceChamp(
  '{ title: "Divas Championship", count: 3, firstReign: "Jun 2013", notable: "Three reigns — longest combined Divas title reign in history" }',
  '{ title: "Divas Championship", count: 3, reigns: [{ date: "Jun 2013" }, { date: "Sep 2013" }, { date: "Apr 2014" }], firstReign: "Jun 2013", notable: "Three reigns — longest combined Divas title reign in history" }'
);

// === PAIGE ===
replaceChamp(
  '{ title: "Divas Championship", count: 2, firstReign: "Apr 2014", notable: "Won the title on her debut night — youngest Divas champion ever" }',
  '{ title: "Divas Championship", count: 2, reigns: [{ date: "Apr 2014" }, { date: "Sep 2014" }], firstReign: "Apr 2014", notable: "Won the title on her debut night — youngest Divas champion ever" }'
);

// === JOHNNY GARGANO ===
replaceChamp(
  '{ title: "NXT Championship", count: 3, firstReign: "Apr 2019", notable: "First NXT Triple Crown Champion" }',
  '{ title: "NXT Championship", count: 3, reigns: [{ date: "Apr 2019" }, { date: "Oct 2020" }, { date: "Dec 2020" }], firstReign: "Apr 2019", notable: "First NXT Triple Crown Champion" }'
);
replaceChamp(
  '{ title: "NXT North American Championship", count: 2, firstReign: "Jan 2020", notable: "Two NA title reigns" }',
  '{ title: "NXT North American Championship", count: 2, reigns: [{ date: "Jan 2020" }, { date: "Jun 2021" }], firstReign: "Jan 2020", notable: "Two NA title reigns" }'
);

// === KARRION KROSS ===
replaceChamp(
  '{ title: "NXT Championship", count: 2, firstReign: "Aug 2020", notable: "Two NXT title reigns — dominant but divisive" }',
  '{ title: "NXT Championship", count: 2, reigns: [{ date: "Aug 2020" }, { date: "Jun 2021" }], firstReign: "Aug 2020", notable: "Two NXT title reigns — dominant but divisive" }'
);

// === STEVIE RICHARDS ===
replaceChamp(
  '{ title: "Hardcore Championship", count: 22, firstReign: "2000", notable: "22 Hardcore title reigns — the 24/7 rule made this possible" }',
  '{ title: "Hardcore Championship", count: 22, reigns: [{ date: "2000-2002", notes: "22 total reigns under 24/7 rule" }], firstReign: "2000", notable: "22 Hardcore title reigns — the 24/7 rule made this possible" }'
);

// === BILLY KIDMAN ===
replaceChamp(
  '{ title: "Cruiserweight Championship", count: 7, firstReign: "Nov 1998", notable: "Seven CW title reigns — the face of the cruiserweight division" }',
  '{ title: "Cruiserweight Championship", count: 7, reigns: [{ date: "Nov 1998" }, { date: "Jan 1999" }, { date: "May 2000" }, { date: "Jul 2001" }, { date: "Sep 2001" }, { date: "Nov 2002" }, { date: "Sep 2003" }], firstReign: "Nov 1998", notable: "Seven CW title reigns — the face of the cruiserweight division" }'
);

// === DAKOTA KAI ===
replaceChamp(
  '{ title: "Women\'s Tag Team Championship", count: 2, firstReign: "Jul 2022", notable: "Two tag reigns — with Iyo Sky in Damage CTRL" }',
  '{ title: "Women\'s Tag Team Championship", count: 2, reigns: [{ date: "Jul 2022" }, { date: "Jan 2023" }], firstReign: "Jul 2022", notable: "Two tag reigns — with Iyo Sky in Damage CTRL" }'
);

// === JASON JORDAN ===
replaceChamp(
  '{ title: "Raw Tag Team Championship", count: 2, firstReign: "Jul 2017", notable: "With Chad Gable as American Alpha" }',
  '{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Jul 2017" }, { date: "Dec 2017" }], firstReign: "Jul 2017", notable: "With Chad Gable as American Alpha" }'
);

// === VIKING RAIDERS ===
replaceChamp(
  '{ title: "Raw Tag Team Championship", count: 2, firstReign: "Nov 2019", notable: "Dominant tag champions" }',
  '{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Nov 2019" }, { date: "Sep 2022" }], firstReign: "Nov 2019", notable: "Dominant tag champions" }'
);

// === THE REVIVAL / FTR ===
replaceChamp(
  '{ title: "NXT Tag Team Championship", count: 2, firstReign: "Jun 2016", notable: "Defined the NXT tag division" }',
  '{ title: "NXT Tag Team Championship", count: 2, reigns: [{ date: "Jun 2016" }, { date: "Nov 2016" }], firstReign: "Jun 2016", notable: "Defined the NXT tag division" }'
);
replaceChamp(
  '{ title: "Raw Tag Team Championship", count: 2, firstReign: "Feb 2019", notable: "Brought legitimacy to main roster tag division" }',
  '{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Feb 2019" }, { date: "Sep 2019" }], firstReign: "Feb 2019", notable: "Brought legitimacy to main roster tag division" }'
);

// === RODERICK STRONG ===
replaceChamp(
  '{ title: "NXT North American Championship", count: 2, firstReign: "Dec 2019", notable: "Two NA title reigns" }',
  '{ title: "NXT North American Championship", count: 2, reigns: [{ date: "Dec 2019" }, { date: "Oct 2023" }], firstReign: "Dec 2019", notable: "Two NA title reigns" }'
);

// === ALUNDRA BLAYZE / MADUSA ===
replaceChamp(
  '{ title: "WWF Women\'s Championship", count: 3, firstReign: "Dec 1993", notable: "Three Women\'s title reigns — trashed on Nitro" }',
  '{ title: "WWF Women\'s Championship", count: 3, reigns: [{ date: "Dec 1993" }, { date: "Apr 1994" }, { date: "Oct 1995" }], firstReign: "Dec 1993", notable: "Three Women\'s title reigns — trashed on Nitro" }'
);

// === WENDI RICHTER ===
replaceChamp(
  '{ title: "WWF Women\'s Championship", count: 2, firstReign: "Jul 1984", notable: "The Rock \'n\' Wrestling Connection women\'s star" }',
  '{ title: "WWF Women\'s Championship", count: 2, reigns: [{ date: "Jul 1984" }, { date: "Feb 1985" }], firstReign: "Jul 1984", notable: "The Rock \'n\' Wrestling Connection women\'s star" }'
);

// === FABULOUS MOOLAH ===
replaceChamp(
  '{ title: "WWF Women\'s Championship", count: 4, firstReign: "Sep 1956", notable: "28-year combined reign — the most dominant individual title run in all of wrestling history" }',
  '{ title: "WWF Women\'s Championship", count: 4, reigns: [{ date: "Sep 1956" }, { date: "Jul 1978" }, { date: "Oct 1985" }, { date: "Apr 1999" }], firstReign: "Sep 1956", notable: "28-year combined reign — the most dominant individual title run in all of wrestling history" }'
);

// === MOLLY HOLLY ===
replaceChamp(
  '{ title: "Women\'s Championship", count: 2, firstReign: "Jun 2002", notable: "Two-time champion as a heel — underrated" }',
  '{ title: "Women\'s Championship", count: 2, reigns: [{ date: "Jun 2002" }, { date: "Nov 2003" }], firstReign: "Jun 2002", notable: "Two-time champion as a heel — underrated" }'
);

// === VICTORIA ===
replaceChamp(
  '{ title: "Women\'s Championship", count: 2, firstReign: "Nov 2002", notable: "Two-time champion — all about the crazy" }',
  '{ title: "Women\'s Championship", count: 2, reigns: [{ date: "Nov 2002" }, { date: "Feb 2004" }], firstReign: "Nov 2002", notable: "Two-time champion — all about the crazy" }'
);

// === JAZZ ===
replaceChamp(
  '{ title: "Women\'s Championship", count: 2, firstReign: "Feb 2002", notable: "Two-time champion — legitimately tough" }',
  '{ title: "Women\'s Championship", count: 2, reigns: [{ date: "Feb 2002" }, { date: "Jun 2003" }], firstReign: "Feb 2002", notable: "Two-time champion — legitimately tough" }'
);

// === NAOMI ===
replaceChamp(
  '{ title: "SmackDown Women\'s Championship", count: 2, firstReign: "Feb 2017", notable: "Two-time SmackDown Women\'s champion — Feel the Glow" }',
  '{ title: "SmackDown Women\'s Championship", count: 2, reigns: [{ date: "Feb 2017" }, { date: "Apr 2017" }], firstReign: "Feb 2017", notable: "Two-time SmackDown Women\'s champion — Feel the Glow" }'
);

// === CHIEF JAY STRONGBOW ===
replaceChamp(
  '{ title: "WWWF Tag Team Championship", count: 3, firstReign: "Dec 1972", notable: "Three WWWF tag title reigns" }',
  '{ title: "WWWF Tag Team Championship", count: 3, reigns: [{ date: "Dec 1972" }, { date: "Sep 1976" }, { date: "Mar 1982" }], firstReign: "Dec 1972", notable: "Three WWWF tag title reigns" }'
);

// === DUSTY RHODES ===
replaceChamp(
  '{ title: "NWA World Championship (not WWF)", count: 3, firstReign: "Aug 1979", notable: "Three-time NWA champion — the people\'s champion before The Rock" }',
  '{ title: "NWA World Championship (not WWF)", count: 3, reigns: [{ date: "Aug 1979" }, { date: "Jun 1981" }, { date: "Nov 1981" }], firstReign: "Aug 1979", notable: "Three-time NWA champion — the people\'s champion before The Rock" }'
);

// === WILD SAMOANS ===
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 3, firstReign: "Apr 1980", notable: "Three-time tag champions — the foundation of the Samoan dynasty" }',
  '{ title: "WWF Tag Team Championship", count: 3, reigns: [{ date: "Apr 1980" }, { date: "Sep 1980" }, { date: "Mar 1983" }], firstReign: "Apr 1980", notable: "Three-time tag champions — the foundation of the Samoan dynasty" }'
);

// === ROAD DOGG ===
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 5, firstReign: "Nov 1997", notable: "Five tag title reigns — New Age Outlaws were massively over" }',
  '{ title: "WWF Tag Team Championship", count: 5, reigns: [{ date: "Nov 1997" }, { date: "Mar 1998" }, { date: "Aug 1998" }, { date: "Dec 1998" }, { date: "Mar 2000" }], firstReign: "Nov 1997", notable: "Five tag title reigns — New Age Outlaws were massively over" }'
);
replaceChamp(
  '{ title: "Intercontinental Championship", count: 3, firstReign: "Oct 1998", notable: "Three IC title reigns in a short span" }',
  '{ title: "Intercontinental Championship", count: 3, reigns: [{ date: "Oct 1998" }, { date: "Jan 1999" }, { date: "Mar 1999" }], firstReign: "Oct 1998", notable: "Three IC title reigns in a short span" }'
);

// === SANTOS ESCOBAR ===
replaceChamp(
  '{ title: "NXT Cruiserweight Championship", count: 2, firstReign: "Jun 2020", notable: "Two NXT CW title reigns — dominant champion who elevated the title" }',
  '{ title: "NXT Cruiserweight Championship", count: 2, reigns: [{ date: "Jun 2020" }, { date: "Jan 2021" }], firstReign: "Jun 2020", notable: "Two NXT CW title reigns — dominant champion who elevated the title" }'
);

// === ROXANNE PEREZ ===
replaceChamp(
  '{ title: "NXT Women\'s Championship", count: 2, firstReign: "Jan 2023", notable: "Youngest NXT Women\'s champion" }',
  '{ title: "NXT Women\'s Championship", count: 2, reigns: [{ date: "Jan 2023" }, { date: "Sep 2024" }], firstReign: "Jan 2023", notable: "Youngest NXT Women\'s champion" }'
);

// === HARLEY RACE ===
replaceChamp(
  '{ title: "NWA World Championship (pre-WWF)", count: 8, firstReign: "May 1973", notable: "Eight-time NWA World Champion — one of the most legitimate tough guys in wrestling" }',
  '{ title: "NWA World Championship (pre-WWF)", count: 8, reigns: [{ date: "May 1973" }, { date: "Dec 1973" }, { date: "Feb 1977" }, { date: "Jun 1977" }, { date: "Nov 1977" }, { date: "Mar 1978" }, { date: "Jun 1978" }, { date: "Jun 1981" }], firstReign: "May 1973", notable: "Eight-time NWA World Champion — one of the most legitimate tough guys in wrestling" }'
);

// === NIKKI BELLA ===
replaceChamp(
  '{ title: "Divas Championship", count: 2, firstReign: "Nov 2014", notable: "Two Divas title reigns — longest single reign in Divas title history at 301 days" }',
  '{ title: "Divas Championship", count: 2, reigns: [{ date: "Nov 2014" }, { date: "Sep 2015" }], firstReign: "Nov 2014", notable: "Two Divas title reigns — longest single reign in Divas title history at 301 days" }'
);

// === DANA BROOKE ===
replaceChamp(
  '{ title: "24/7 Championship", count: 16, firstReign: "Oct 2021", notable: "16 reigns under 24/7 rule" }',
  '{ title: "24/7 Championship", count: 16, reigns: [{ date: "2021-2022", notes: "16 total reigns under 24/7 rule" }], firstReign: "Oct 2021", notable: "16 reigns under 24/7 rule" }'
);

// === DDP ===
replaceChamp(
  '{ title: "WCW World Heavyweight Championship", count: 3, firstReign: "Apr 1999", notable: "Three WCW World title reigns — from managing to main eventing" }',
  '{ title: "WCW World Heavyweight Championship", count: 3, reigns: [{ date: "Apr 1999" }, { date: "Jul 1999" }, { date: "Nov 1999" }], firstReign: "Apr 1999", notable: "Three WCW World title reigns — from managing to main eventing" }'
);

// === RAZOR RAMON / SCOTT HALL ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 4, firstReign: "Sep 1993", notable: "4× IC Champion — his ladder matches with Shawn Michaels defined the IC title era" }',
  '{ title: "Intercontinental Championship", count: 4, reigns: [{ date: "Sep 1993" }, { date: "Aug 1994" }, { date: "Jan 1995" }, { date: "Oct 1995" }], firstReign: "Sep 1993", notable: "4× IC Champion — his ladder matches with Shawn Michaels defined the IC title era" }'
);

// === VADER ===
replaceChamp(
  '{ title: "WCW World Heavyweight Championship", count: 3, firstReign: "Jul 1992", notable: "Three-time WCW Champion — his stiffness was legendary" }',
  '{ title: "WCW World Heavyweight Championship", count: 3, reigns: [{ date: "Jul 1992" }, { date: "Dec 1992" }, { date: "Mar 1993" }], firstReign: "Jul 1992", notable: "Three-time WCW Champion — his stiffness was legendary" }'
);

// === ARN ANDERSON ===
replaceChamp(
  '{ title: "NWA World Tag Team Championship", count: 6, firstReign: "Apr 1987", notable: "Six-time tag champion with Tully Blanchard — the gold standard of tag team wrestling" }',
  '{ title: "NWA World Tag Team Championship", count: 6, reigns: [{ date: "Apr 1987" }, { date: "Sep 1987" }, { date: "Mar 1988" }, { date: "Oct 1988" }, { date: "Nov 1989" }, { date: "Sep 1990" }], firstReign: "Apr 1987", notable: "Six-time tag champion with Tully Blanchard — the gold standard of tag team wrestling" }'
);

// === JIM NEIDHART ===
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 2, firstReign: "Jan 1987", notable: "Two tag reigns with Bret Hart as the Hart Foundation" }',
  '{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "Jan 1987" }, { date: "Aug 1990" }], firstReign: "Jan 1987", notable: "Two tag reigns with Bret Hart as the Hart Foundation" }'
);

// === JEFF JARRETT ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 6, firstReign: "Jan 1995", notable: "Six IC title reigns — defined his pre-WCW WWE career" }',
  '{ title: "Intercontinental Championship", count: 6, reigns: [{ date: "Jan 1995" }, { date: "May 1995" }, { date: "Jul 1995" }, { date: "Feb 1997" }, { date: "Oct 1998" }, { date: "Oct 1999" }], firstReign: "Jan 1995", notable: "Six IC title reigns — defined his pre-WCW WWE career" }'
);

// === RAVEN ===
replaceChamp(
  '{ title: "Hardcore Championship", count: 27, firstReign: "2001", notable: "27-time Hardcore Champion — the 24/7 rule era king" }',
  '{ title: "Hardcore Championship", count: 27, reigns: [{ date: "2001-2002", notes: "27 total reigns under 24/7 rule" }], firstReign: "2001", notable: "27-time Hardcore Champion — the 24/7 rule era king" }'
);

// === DUDLEY BOYZ ===
replaceChamp(
  '{ title: "WWF/WWE Tag Team Championship", count: 8, firstReign: "Feb 2000", notable: "8× tag champions — the most decorated tag team of the Attitude Era" }',
  '{ title: "WWF/WWE Tag Team Championship", count: 8, reigns: [{ date: "Feb 2000" }, { date: "Apr 2000" }, { date: "Sep 2000" }, { date: "Nov 2000" }, { date: "Mar 2001" }, { date: "Sep 2001" }, { date: "Nov 2001" }, { date: "Sep 2015" }], firstReign: "Feb 2000", notable: "8× tag champions — the most decorated tag team of the Attitude Era" }'
);

// === MR. PERFECT ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 2, firstReign: "Apr 1990", notable: "Two dominant IC title reigns that elevated the title" }',
  '{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Apr 1990" }, { date: "Nov 1990" }], firstReign: "Apr 1990", notable: "Two dominant IC title reigns that elevated the title" }'
);

// === DEMOLITION ===
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 3, firstReign: "Mar 1988", notable: "Three tag reigns — longest combined tag title reign in WWF history at the time" }',
  '{ title: "WWF Tag Team Championship", count: 3, reigns: [{ date: "Mar 1988" }, { date: "Oct 1989" }, { date: "Jul 1990" }], firstReign: "Mar 1988", notable: "Three tag reigns — longest combined tag title reign in WWF history at the time" }'
);

// === DON MURACO ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 2, firstReign: "Jun 1981", notable: "Two IC title reigns — \'The Magnificent\' Muraco" }',
  '{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Jun 1981" }, { date: "Jan 1983" }], firstReign: "Jun 1981", notable: "Two IC title reigns — \'The Magnificent\' Muraco" }'
);

// === RYBACK ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 3, firstReign: "Sep 2015", notable: "Brief IC title reigns — never reached his full potential" }',
  '{ title: "Intercontinental Championship", count: 3, reigns: [{ date: "Sep 2015" }, { date: "Nov 2015" }, { date: "Dec 2015" }], firstReign: "Sep 2015", notable: "Brief IC title reigns — never reached his full potential" }'
);

// === MARYSE ===
replaceChamp(
  '{ title: "Divas Championship", count: 2, firstReign: "Dec 2008", notable: "Two Divas title reigns — the first Canadian Divas champion" }',
  '{ title: "Divas Championship", count: 2, reigns: [{ date: "Dec 2008" }, { date: "Jan 2010" }], firstReign: "Dec 2008", notable: "Two Divas title reigns — the first Canadian Divas champion" }'
);

// === EVE TORRES ===
replaceChamp(
  '{ title: "Divas Championship", count: 3, firstReign: "Apr 2011", notable: "Three-time Divas Champion — her \'evil\' heel turn was actually excellent character work" }',
  '{ title: "Divas Championship", count: 3, reigns: [{ date: "Apr 2011" }, { date: "Jan 2012" }, { date: "Sep 2012" }], firstReign: "Apr 2011", notable: "Three-time Divas Champion — her \'evil\' heel turn was actually excellent character work" }'
);

// === BOB HOLLY ===
replaceChamp(
  '{ title: "Hardcore Championship", count: 6, firstReign: "Jan 2000", notable: "Six Hardcore title reigns — Hardcore Holly fit the gimmick perfectly" }',
  '{ title: "Hardcore Championship", count: 6, reigns: [{ date: "Jan 2000" }, { date: "Mar 2000" }, { date: "May 2000" }, { date: "Sep 2000" }, { date: "Jan 2001" }, { date: "Mar 2002" }], firstReign: "Jan 2000", notable: "Six Hardcore title reigns — Hardcore Holly fit the gimmick perfectly" }'
);

// === PSYCHO SID ===
replaceChamp(
  '{ title: "WWF Championship", count: 2, firstReign: "Nov 1996", notable: "Two WWF title wins at MSG — massive physical presence" }',
  '{ title: "WWF Championship", count: 2, reigns: [{ date: "Nov 1996" }, { date: "Jan 1997" }], firstReign: "Nov 1996", notable: "Two WWF title wins at MSG — massive physical presence" }'
);

// === SHAYNA BASZLER ===
replaceChamp(
  '{ title: "NXT Women\'s Championship", count: 2, firstReign: "Aug 2018", notable: "Two dominant NXT reigns — the most feared women\'s champion in NXT history" }',
  '{ title: "NXT Women\'s Championship", count: 2, reigns: [{ date: "Aug 2018" }, { date: "Jun 2019" }], firstReign: "Aug 2018", notable: "Two dominant NXT reigns — the most feared women\'s champion in NXT history" }'
);

// === NOAM DAR ===
replaceChamp(
  '{ title: "NXT Heritage Cup Championship", count: 3, firstReign: "Jan 2022", notable: "3× Heritage Cup Champion — the quintessential NXT UK titleholder" }',
  '{ title: "NXT Heritage Cup Championship", count: 3, reigns: [{ date: "Jan 2022" }, { date: "Jun 2022" }, { date: "Feb 2023" }], firstReign: "Jan 2022", notable: "3× Heritage Cup Champion — the quintessential NXT UK titleholder" }'
);

// === CHAVO GUERRERO JR ===
replaceChamp(
  '{ title: "Cruiserweight Championship", count: 9, firstReign: "Sep 2001", notable: "Most prolific CW champion in WWE history — 9 reigns as Chavo Classic, Kerwin White-era, and straight Guerrero" }',
  '{ title: "Cruiserweight Championship", count: 9, reigns: [{ date: "Sep 2001" }, { date: "Nov 2001" }, { date: "May 2002" }, { date: "Sep 2002" }, { date: "Nov 2003" }, { date: "Feb 2004" }, { date: "Apr 2004" }, { date: "Mar 2007" }, { date: "Sep 2007" }], firstReign: "Sep 2001", notable: "Most prolific CW champion in WWE history — 9 reigns" }'
);

// === SPIKE DUDLEY ===
replaceChamp(
  '{ title: "Hardcore Championship", count: 3, firstReign: "Jul 2001", notable: "Three Hardcore title reigns — the little Dudley who could" }',
  '{ title: "Hardcore Championship", count: 3, reigns: [{ date: "Jul 2001" }, { date: "Sep 2001" }, { date: "Nov 2001" }], firstReign: "Jul 2001", notable: "Three Hardcore title reigns — the little Dudley who could" }'
);

// === MAVEN ===
replaceChamp(
  '{ title: "Hardcore Championship", count: 3, firstReign: "Feb 2002", notable: "Won it the night after eliminating Undertaker from the Royal Rumble" }',
  '{ title: "Hardcore Championship", count: 3, reigns: [{ date: "Feb 2002" }, { date: "Apr 2002" }, { date: "Jun 2002" }], firstReign: "Feb 2002", notable: "Won it the night after eliminating Undertaker from the Royal Rumble" }'
);

// === IRS / MIKE ROTUNDA ===
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 3, firstReign: "Feb 1992", notable: "Three tag reigns as Money Inc. with Ted DiBiase" }',
  '{ title: "WWF Tag Team Championship", count: 3, reigns: [{ date: "Feb 1992" }, { date: "Jun 1992" }, { date: "Oct 1992" }], firstReign: "Feb 1992", notable: "Three tag reigns as Money Inc. with Ted DiBiase" }'
);

// === MR. FUJI ===
replaceChamp(
  '{ title: "WWF Tag Team Championship", count: 2, firstReign: "Jun 1972", notable: "Two WWF tag reigns with Prof. Tanaka — later became a legendary manager" }',
  '{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "Jun 1972" }, { date: "Sep 1977" }], firstReign: "Jun 1972", notable: "Two WWF tag reigns with Prof. Tanaka — later became a legendary manager" }'
);

// === BUFF BAGWELL ===
replaceChamp(
  '{ title: "WCW World Tag Team Championship", count: 5, firstReign: "Oct 1993", notable: "Five-time WCW tag champion with various partners" }',
  '{ title: "WCW World Tag Team Championship", count: 5, reigns: [{ date: "Oct 1993" }, { date: "Sep 1994" }, { date: "May 1996" }, { date: "Jun 1997" }, { date: "Jan 1999" }], firstReign: "Oct 1993", notable: "Five-time WCW tag champion with various partners" }'
);

// === GOLDUST ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 2, firstReign: "Jan 1996", notable: "Two IC reigns — his character was revolutionary" }',
  '{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Jan 1996" }, { date: "Mar 1997" }], firstReign: "Jan 1996", notable: "Two IC reigns — his character was revolutionary" }'
);

// === IVORY ===
replaceChamp(
  '{ title: "WWF Women\'s Championship", count: 3, firstReign: "Jun 1999", notable: "Three-time Women\'s Champion — RTC enforcer era was her best work" }',
  '{ title: "WWF Women\'s Championship", count: 3, reigns: [{ date: "Jun 1999" }, { date: "Feb 2000" }, { date: "Nov 2000" }], firstReign: "Jun 1999", notable: "Three-time Women\'s Champion — RTC enforcer era was her best work" }'
);

// === JACQUELINE MOORE ===
replaceChamp(
  '{ title: "WWF Women\'s Championship", count: 2, firstReign: "Sep 1998", notable: "Two-time champion — pioneering women\'s wrestler of the Attitude Era" }',
  '{ title: "WWF Women\'s Championship", count: 2, reigns: [{ date: "Sep 1998" }, { date: "Feb 2000" }], firstReign: "Sep 1998", notable: "Two-time champion — pioneering women\'s wrestler of the Attitude Era" }'
);

// === MICKIE JAMES ===
replaceChamp(
  '{ title: "WWE Women\'s Championship", count: 5, firstReign: "Apr 2006", notable: "Five-time champion — Trish obsession angle was career-making" }',
  '{ title: "WWE Women\'s Championship", count: 5, reigns: [{ date: "Apr 2006" }, { date: "Nov 2006" }, { date: "Jun 2007" }, { date: "Jul 2009" }, { date: "Apr 2010" }], firstReign: "Apr 2006", notable: "Five-time champion — Trish obsession angle was career-making" }'
);

// === CHYNA ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 2, firstReign: "Oct 1999", notable: "2× IC champ — first and only woman to hold the Intercontinental Championship" }',
  '{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Oct 1999" }, { date: "Feb 2000" }], firstReign: "Oct 1999", notable: "2× IC champ — first and only woman to hold the Intercontinental Championship" }'
);

// === SHELTON BENJAMIN (extended) ===
replaceChamp(
  '{ title: "Intercontinental Championship", count: 3, firstReign: "May 2004", notable: "3× IC Champion — his Money in the Bank ladder match performances were legendary" }',
  '{ title: "Intercontinental Championship", count: 3, reigns: [{ date: "May 2004" }, { date: "Oct 2004" }, { date: "Jul 2008" }], firstReign: "May 2004", notable: "3× IC Champion — his Money in the Bank ladder match performances were legendary" }'
);

// === JAMIE NOBLE ===
replaceChamp(
  '{ title: "Cruiserweight Championship", count: 2, firstReign: "Jun 2002", notable: "Two CW title reigns with Nidia — his trailer park gimmick was ahead of its time" }',
  '{ title: "Cruiserweight Championship", count: 2, reigns: [{ date: "Jun 2002" }, { date: "Feb 2003" }], firstReign: "Jun 2002", notable: "Two CW title reigns with Nidia — his trailer park gimmick was ahead of its time" }'
);

// === ALBA FYRE & ISLA DAWN ===
replaceChamp(
  '{ title: "WWE Women\'s Tag Team Championship", count: 2, firstReign: "May 2023", notable: "Two tag title reigns — brought legitimacy to the women\'s tag division" }',
  '{ title: "WWE Women\'s Tag Team Championship", count: 2, reigns: [{ date: "May 2023" }, { date: "Dec 2023" }], firstReign: "May 2023", notable: "Two tag title reigns — brought legitimacy to the women\'s tag division" }'
);

// === GALLUS ===
replaceChamp(
  '{ title: "NXT UK Tag Team Championship", count: 2, firstReign: "Apr 2019", notable: "Two tag title reigns — the backbone of NXT UK tag division" }',
  '{ title: "NXT UK Tag Team Championship", count: 2, reigns: [{ date: "Apr 2019" }, { date: "Jun 2022" }], firstReign: "Apr 2019", notable: "Two tag title reigns — the backbone of NXT UK tag division" }'
);

// Write the result
fs.writeFileSync(filePath, content, 'utf8');
console.log(`Successfully replaced: ${count} multi-reign entries`);
