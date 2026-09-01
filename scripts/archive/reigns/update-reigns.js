const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'wwe-app', 'src', 'WWEDatabase.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Helper: replace a specific championship line for a given wrestler
// We match on the exact championships array string and replace with reigns added

const replacements = [
  // ID 181 - Chuck Palumbo (already done)
  // ID 183 - Heidenreich (already done)

  // ID 184 - Orlando Jordan
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Jul 2004", notable: "Defended it in 27 seconds against Benoit — record for shortest successful defense" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 185,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Jul 2004", notes: "Won from John Cena on SmackDown" }], firstReign: "Jul 2004", notable: "Defended it in 27 seconds against Benoit — record for shortest successful defense" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 185,`
  },

  // ID 186 - Kenzo Suzuki
  {
    old: `championships: [{ title: "WWE Tag Team Championship", count: 1, firstReign: "Jul 2004", notable: "Won with René Duprée on SmackDown" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 187,`,
    new: `championships: [{ title: "WWE Tag Team Championship", count: 1, reigns: [{ date: "Jul 2004", notes: "Won with René Duprée on SmackDown" }], firstReign: "Jul 2004", notable: "Won with René Duprée on SmackDown" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 187,`
  },

  // ID 187 - Chavo Guerrero Jr.
  {
    old: `championships: [{ title: "Cruiserweight Championship", count: 4, firstReign: "Mar 2004", notable: "Multiple CW title reigns" }, { title: "ECW Championship", count: 1, firstReign: "Jan 2008", notable: "Won at Royal Rumble from CM Punk" }, { title: "Tag Team Championship", count: 1, firstReign: "Nov 2008", notable: "With Bam Neely briefly" }],
    totalTitleReigns: 6, hallOfFame: null,`,
    new: `championships: [{ title: "Cruiserweight Championship", count: 4, reigns: [{ date: "Mar 2004", notes: "Won on SmackDown" }, { date: "Jul 2004", notes: "Second CW reign" }, { date: "Sep 2004", notes: "Third CW reign" }, { date: "Jan 2005", notes: "Fourth CW reign" }], firstReign: "Mar 2004", notable: "Multiple CW title reigns" }, { title: "ECW Championship", count: 1, reigns: [{ date: "Jan 2008", notes: "Won at Royal Rumble from CM Punk" }], firstReign: "Jan 2008", notable: "Won at Royal Rumble from CM Punk" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Nov 2008", notes: "Won with Bam Neely" }], firstReign: "Nov 2008", notable: "With Bam Neely briefly" }],
    totalTitleReigns: 6, hallOfFame: null,`
  },

  // ID 189 - René Duprée
  {
    old: `championships: [{ title: "WWE Tag Team Championship", count: 2, firstReign: "Jun 2003", notable: "Two tag title reigns — youngest champion at 19" }],
    totalTitleReigns: 2, hallOfFame: null,
  },
  // ── MORE PG ERA`,
    new: `championships: [{ title: "WWE Tag Team Championship", count: 2, reigns: [{ date: "Jun 2003", notes: "Won as La Résistance with Sylvain Grenier" }, { date: "Jul 2004", notes: "Won with Kenzo Suzuki on SmackDown" }], firstReign: "Jun 2003", notable: "Two tag title reigns — youngest champion at 19" }],
    totalTitleReigns: 2, hallOfFame: null,
  },
  // ── MORE PG ERA`
  },

  // ID 190 - Zack Ryder
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Oct 2020", notable: "Long-overdue IC title win at WM36" }, { title: "United States Championship", count: 1, firstReign: "Dec 2011", notable: "Won the US title at TLC — then lost momentum immediately" }],
    totalTitleReigns: 2, hallOfFame: null,
  },
  {
    id: 191,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Apr 2020", notes: "Won at WrestleMania 36" }], firstReign: "Apr 2020", notable: "Long-overdue IC title win at WM36" }, { title: "United States Championship", count: 1, reigns: [{ date: "Dec 2011", notes: "Won at TLC pay-per-view" }], firstReign: "Dec 2011", notable: "Won the US title at TLC — then lost momentum immediately" }],
    totalTitleReigns: 2, hallOfFame: null,
  },
  {
    id: 191,`
  },

  // ID 191 - Santino Marella
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 2, firstReign: "Apr 2007", notable: "Won on his debut night — and again later" }, { title: "Tag Team Championship", count: 2, firstReign: "May 2009", notable: "Two tag title reigns" } ],
    totalTitleReigns: 4, hallOfFame: null,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Apr 2007", notes: "Won on Raw debut night in Milan, Italy" }, { date: "Jun 2012", notes: "Second IC reign" }], firstReign: "Apr 2007", notable: "Won on his debut night — and again later" }, { title: "Tag Team Championship", count: 2, reigns: [{ date: "May 2009", notes: "Won with Beth Phoenix (inter-gender pairing)" }, { date: "Mar 2012", notes: "Won with Vladimir Kozlov" }], firstReign: "May 2009", notable: "Two tag title reigns" } ],
    totalTitleReigns: 4, hallOfFame: null,`
  },

  // ID 192 - R-Truth
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Aug 2022", notable: "Brief IC reign" }, { title: "United States Championship", count: 2, firstReign: "May 2011", notable: "Two US title reigns" }, { title: "Tag Team Championship", count: 4, firstReign: "Nov 2011", notable: "Various tag runs" }],
    totalTitleReigns: 7, hallOfFame: null,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Aug 2022", notes: "Won on Raw" }], firstReign: "Aug 2022", notable: "Brief IC reign" }, { title: "United States Championship", count: 2, reigns: [{ date: "May 2010", notes: "Won from The Miz on Raw" }, { date: "Nov 2010", notes: "Second US title reign" }], firstReign: "May 2010", notable: "Two US title reigns" }, { title: "Tag Team Championship", count: 4, reigns: [{ date: "Nov 2011", notes: "Won 24/7 Championship era tag titles" }, { date: "Jun 2019", notes: "Won with Carmella (mixed tag)" }, { date: "Nov 2019", notes: "Won with Carmella again" }, { date: "May 2022", notes: "Won with The Miz" }], firstReign: "Nov 2011", notable: "Various tag runs" }],
    totalTitleReigns: 7, hallOfFame: null,`
  },

  // ID 193 - Ezekiel Jackson
  {
    old: `championships: [{ title: "ECW Championship", count: 1, firstReign: "Mar 2010", notable: "ECW's final champion — won from Christian" }, { title: "Intercontinental Championship", count: 1, firstReign: "May 2011", notable: "Brief IC reign" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "ECW Championship", count: 1, reigns: [{ date: "Feb 2010", notes: "Won on the final ECW episode from Christian" }], firstReign: "Feb 2010", notable: "ECW's final champion — won from Christian" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Jun 2011", notes: "Won on SmackDown from Wade Barrett" }], firstReign: "Jun 2011", notable: "Brief IC reign" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 194 - Tyson Kidd
  {
    old: `championships: [{ title: "Tag Team Championship", count: 1, firstReign: "Aug 2015", notable: "Won with Cesaro — solid technical tag team" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 195,`,
    new: `championships: [{ title: "Tag Team Championship", count: 1, reigns: [{ date: "Mar 2015", notes: "Won with Cesaro on Raw — Kidd & Cesaro" }], firstReign: "Mar 2015", notable: "Won with Cesaro — solid technical tag team" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 195,`
  },

  // ID 195 - David Hart Smith
  {
    old: `championships: [{ title: "WWE Tag Team Championship", count: 1, firstReign: "Aug 2010", notable: "Hart Dynasty won the Unified Tag titles" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 196,`,
    new: `championships: [{ title: "WWE Tag Team Championship", count: 1, reigns: [{ date: "Apr 2010", notes: "Hart Dynasty won Unified Tag Titles on Raw from ShoMiz" }], firstReign: "Apr 2010", notable: "Hart Dynasty won the Unified Tag titles" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 196,`
  },

  // ID 196 - Nexus (tag titles)
  {
    old: `championships: [{ title: "WWE Tag Team Championship", count: 1, firstReign: "Sep 2010", notable: "Justin Gabriel and Heath Slater held the tag titles as Nexus members" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 197,`,
    new: `championships: [{ title: "WWE Tag Team Championship", count: 1, reigns: [{ date: "Sep 2010", notes: "Justin Gabriel and Heath Slater won on Raw as Nexus" }], firstReign: "Sep 2010", notable: "Justin Gabriel and Heath Slater held the tag titles as Nexus members" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 197,`
  },

  // ID 197 - Heath Slater
  {
    old: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, firstReign: "Sep 2016", notable: "Won with Rhyno on the SmackDown reboot draft show — a completely unexpected feel-good moment" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  // ── REALITY ERA ADDITIONS`,
    new: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "Sep 2016", notes: "Won with Rhyno on the SmackDown brand reboot" }], firstReign: "Sep 2016", notable: "Won with Rhyno on the SmackDown reboot draft show — a completely unexpected feel-good moment" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  // ── REALITY ERA ADDITIONS`
  },

  // ID 203 - Bo Dallas
  {
    old: `championships: [{ title: "NXT Championship", count: 1, firstReign: "Apr 2013", notable: "NXT Champion before his main roster call-up" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 205,`,
    new: `championships: [{ title: "NXT Championship", count: 1, reigns: [{ date: "Apr 2013", notes: "Won NXT Championship on NXT television" }], firstReign: "Apr 2013", notable: "NXT Champion before his main roster call-up" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 205,`
  },

  // ID 205 - Luke Harper / Brodie Lee
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Nov 2014", notable: "Brief but beloved IC reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 206,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Nov 2014", notes: "Won on SmackDown from Dolph Ziggler" }], firstReign: "Nov 2014", notable: "Brief but beloved IC reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 206,`
  },

  // ID 206 - Erick Rowan
  {
    old: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, firstReign: "Dec 2019", notable: "Won with Daniel Bryan in a bizarre heel turn pairing" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 207,`,
    new: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "Jul 2019", notes: "Won with Daniel Bryan on SmackDown" }], firstReign: "Jul 2019", notable: "Won with Daniel Bryan in a bizarre heel turn pairing" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 207,`
  },

  // ID 209 - AJ Lee
  {
    old: `championships: [{ title: "Divas Championship", count: 3, firstReign: "Jun 2012", notable: "295-day reign — set the record; CM Punk's then-wife who outshone everyone in her division" }],
    totalTitleReigns: 3, hallOfFame: null,
  },
  {
    id: 210,`,
    new: `championships: [{ title: "Divas Championship", count: 3, reigns: [{ date: "Jun 2012", notes: "Won in a battle royal on Raw" }, { date: "Jun 2013", notes: "Won from Kaitlyn at Payback — 295-day record reign" }, { date: "Mar 2014", notes: "Won from Nikki Bella on Raw" }], firstReign: "Jun 2012", notable: "295-day reign — set the record; CM Punk's then-wife who outshone everyone in her division" }],
    totalTitleReigns: 3, hallOfFame: null,
  },
  {
    id: 210,`
  },

  // ID 210 - Paige
  {
    old: `championships: [{ title: "Divas Championship", count: 2, firstReign: "Apr 2014", notable: "Won on her debut night — one of the best debut moments in history" }],
    totalTitleReigns: 2, hallOfFame: null,
  },
  // ── MODERN ERA ADDITIONS`,
    new: `championships: [{ title: "Divas Championship", count: 2, reigns: [{ date: "Apr 2014", notes: "Won on Raw debut night after WrestleMania 30 from AJ Lee" }, { date: "Aug 2014", notes: "Won from AJ Lee at SummerSlam" }], firstReign: "Apr 2014", notable: "Won on her debut night — one of the best debut moments in history" }],
    totalTitleReigns: 2, hallOfFame: null,
  },
  // ── MODERN ERA ADDITIONS`
  },

  // ID 211 - Braun Strowman
  {
    old: `championships: [{ title: "Universal Championship", count: 1, firstReign: "Aug 2020", notable: "Won at WM36 in the empty arena era" }, { title: "Intercontinental Championship", count: 1, firstReign: "Jan 2020", notable: "Brief IC reign" }, { title: "Raw Tag Team Championship", count: 1, firstReign: "Oct 2018", notable: "Won with a 10-year-old fan Nicholas from the audience" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "Universal Championship", count: 1, reigns: [{ date: "Apr 2020", notes: "Won at WrestleMania 36 from Goldberg in empty arena" }], firstReign: "Apr 2020", notable: "Won at WM36 in the empty arena era" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Feb 2020", notes: "Won from Shinsuke Nakamura on SmackDown" }], firstReign: "Feb 2020", notable: "Brief IC reign" }, { title: "Raw Tag Team Championship", count: 1, reigns: [{ date: "Apr 2018", notes: "Won at WrestleMania 34 with 10-year-old Nicholas from audience" }], firstReign: "Apr 2018", notable: "Won with a 10-year-old fan Nicholas from the audience" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 212 - Baron Corbin
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Aug 2017", notable: "US title reign" }, { title: "Intercontinental Championship", count: 1, firstReign: "Sep 2018", notable: "Brief IC reign" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Aug 2017", notes: "Won at SummerSlam from AJ Styles" }], firstReign: "Aug 2017", notable: "US title reign" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Dec 2019", notes: "Won on SmackDown" }], firstReign: "Dec 2019", notable: "Brief IC reign" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 213 - Elias
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Aug 2022", notable: "Brief IC reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 214,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Aug 2022", notes: "Won as Ezekiel on Raw (later revealed as Elias)" }], firstReign: "Aug 2022", notable: "Brief IC reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 214,`
  },

  // ID 214 - Tommaso Ciampa
  {
    old: `championships: [{ title: "NXT Championship", count: 2, firstReign: "Jun 2018", notable: "Two NXT title reigns — was the crown jewel of the NXT Black & Gold era" }, { title: "Intercontinental Championship", count: 1, firstReign: "Mar 2022", notable: "Brief IC reign on main roster" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 2, reigns: [{ date: "Jul 2018", notes: "Won in a #1 Contender's Tournament at NXT TakeOver: Chicago II" }, { date: "Jun 2019", notes: "Second NXT title reign, won from Adam Cole" }], firstReign: "Jul 2018", notable: "Two NXT title reigns — was the crown jewel of the NXT Black & Gold era" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Mar 2022", notes: "Won briefly on Raw" }], firstReign: "Mar 2022", notable: "Brief IC reign on main roster" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 215 - Johnny Gargano
  {
    old: `championships: [{ title: "NXT Championship", count: 3, firstReign: "Apr 2019", notable: "Three NXT title reigns — NXT's heart and soul" }, { title: "NXT Tag Team Championship", count: 2, firstReign: "Jun 2017", notable: "DIY with Ciampa — beloved before the heel turn" }],
    totalTitleReigns: 5, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 3, reigns: [{ date: "Apr 2019", notes: "Won at NXT TakeOver: New York from Adam Cole" }, { date: "Oct 2019", notes: "Won at NXT TakeOver: WarGames (vacated)" }, { date: "Dec 2019", notes: "Third reign, won on NXT television" }], firstReign: "Apr 2019", notable: "Three NXT title reigns — NXT's heart and soul" }, { title: "NXT Tag Team Championship", count: 2, reigns: [{ date: "Jan 2017", notes: "DIY won at NXT TakeOver: Toronto from The Revival" }, { date: "Jun 2017", notes: "Second reign as DIY with Ciampa" }], firstReign: "Jan 2017", notable: "DIY with Ciampa — beloved before the heel turn" }],
    totalTitleReigns: 5, hallOfFame: null,`
  },

  // ID 216 - Karrion Kross
  {
    old: `championships: [{ title: "NXT Championship", count: 2, firstReign: "Jun 2020", notable: "Dominant NXT Champion before disappointing main roster call-up" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 2, reigns: [{ date: "Aug 2020", notes: "Won at NXT TakeOver: XXX from Keith Lee" }, { date: "Apr 2021", notes: "Won at NXT TakeOver: Stand & Deliver from Finn Balor" }], firstReign: "Aug 2020", notable: "Dominant NXT Champion before disappointing main roster call-up" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 217 - Damian Priest
  {
    old: `championships: [{ title: "World Heavyweight Championship", count: 1, firstReign: "Apr 2024", notable: "MITB cash-in the night after WM40" }, { title: "United States Championship", count: 1, firstReign: "Dec 2021", notable: "US title reign" }, { title: "Tag Team Championship", count: 1, firstReign: "Jan 2022", notable: "With Finn Bálor as Judgment Day" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "World Heavyweight Championship", count: 1, reigns: [{ date: "Apr 2024", notes: "MITB cash-in on Drew McIntyre the night after WrestleMania 40" }], firstReign: "Apr 2024", notable: "MITB cash-in the night after WM40" }, { title: "United States Championship", count: 1, reigns: [{ date: "Aug 2021", notes: "Won at SummerSlam from Sheamus" }], firstReign: "Aug 2021", notable: "US title reign" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Oct 2022", notes: "Won with Finn Balor as Judgment Day" }], firstReign: "Oct 2022", notable: "With Finn Bálor as Judgment Day" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 218 - Dominik Mysterio
  {
    old: `championships: [{ title: "NXT North American Championship", count: 1, firstReign: "Apr 2023", notable: "Won the NXT title during a cross-brand invasion angle" }, { title: "Tag Team Championship", count: 1, firstReign: "Sep 2023", notable: "With Finn Bálor" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT North American Championship", count: 1, reigns: [{ date: "Apr 2023", notes: "Won during NXT cross-brand invasion" }], firstReign: "Apr 2023", notable: "Won the NXT title during a cross-brand invasion angle" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Sep 2023", notes: "Won with Finn Balor on Raw" }], firstReign: "Sep 2023", notable: "With Finn Bálor" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 219 - Solo Sikoa
  {
    old: `championships: [{ title: "Tag Team Championship", count: 1, firstReign: "Sep 2023", notable: "Won Undisputed Tag titles with Roman Reigns in a brief reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 220,`,
    new: `championships: [{ title: "Tag Team Championship", count: 1, reigns: [{ date: "Sep 2023", notes: "Won Undisputed WWE Tag Team titles with Roman Reigns on SmackDown" }], firstReign: "Sep 2023", notable: "Won Undisputed Tag titles with Roman Reigns in a brief reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 220,`
  },

  // ID 220 - LA Knight
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Jan 2024", notable: "Long-overdue title win following months of massive organic fan support" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 222,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Oct 2023", notes: "Won at Crown Jewel from the Miz" }], firstReign: "Oct 2023", notable: "Long-overdue title win following months of massive organic fan support" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 222,`
  },

  // ID 222 - Liv Morgan
  {
    old: `championships: [{ title: "SmackDown Women's Championship", count: 1, firstReign: "Jul 2022", notable: "Emotional MITB cash-in on Ronda Rousey" }, { title: "Women's World Championship", count: 1, firstReign: "Jun 2024", notable: "Second world title run" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "SmackDown Women's Championship", count: 1, reigns: [{ date: "Jul 2022", notes: "MITB cash-in on Ronda Rousey at Money in the Bank" }], firstReign: "Jul 2022", notable: "Emotional MITB cash-in on Ronda Rousey" }, { title: "Women's World Championship", count: 1, reigns: [{ date: "Jun 2024", notes: "Won from Becky Lynch at King and Queen of the Ring" }], firstReign: "Jun 2024", notable: "Second world title run" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 223 - Iyo Sky
  {
    old: `championships: [{ title: "Women's Championship", count: 1, firstReign: "Aug 2023", notable: "MITB cash-in — first Japanese-born Women's Champion in WWE" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 224,`,
    new: `championships: [{ title: "Women's Championship", count: 1, reigns: [{ date: "Aug 2023", notes: "MITB cash-in at SummerSlam — first Japanese-born Women's Champion in WWE" }], firstReign: "Aug 2023", notable: "MITB cash-in — first Japanese-born Women's Champion in WWE" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 224,`
  },

  // ID 233 - Sable
  {
    old: `championships: [{ title: "Women's Championship", count: 1, firstReign: "Nov 1998", notable: "Won during the height of Attitude Era pushes" }],
    totalTitleReigns: 1, hallOfFame: 2004,`,
    new: `championships: [{ title: "Women's Championship", count: 1, reigns: [{ date: "Nov 1998", notes: "Won at Survivor Series from Jacqueline" }], firstReign: "Nov 1998", notable: "Won during the height of Attitude Era pushes" }],
    totalTitleReigns: 1, hallOfFame: 2004,`
  },

  // ID 241 - Tommy Dreamer
  {
    old: `championships: [{ title: "ECW Championship", count: 1, firstReign: "Feb 2010", notable: "Won on the final ECW episode — an emotional farewell to the brand" }, { title: "Hardcore Championship", count: 2, firstReign: "Apr 2001", notable: "Hardcore title runs" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "ECW Championship", count: 1, reigns: [{ date: "Feb 2010", notes: "Won on the final ECW episode — emotional farewell" }], firstReign: "Feb 2010", notable: "Won on the final ECW episode — an emotional farewell to the brand" }, { title: "Hardcore Championship", count: 2, reigns: [{ date: "Apr 2001", notes: "First Hardcore title reign" }, { date: "Jun 2001", notes: "Second Hardcore title reign" }], firstReign: "Apr 2001", notable: "Hardcore title runs" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 242 - Sandman
  {
    old: `championships: [{ title: "Hardcore Championship", count: 1, firstReign: "Jun 2006", notable: "Brief Hardcore-style reign in WWE ECW" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 243,`,
    new: `championships: [{ title: "Hardcore Championship", count: 1, reigns: [{ date: "Jun 2006", notes: "Brief reign during WWE's ECW revival" }], firstReign: "Jun 2006", notable: "Brief Hardcore-style reign in WWE ECW" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 243,`
  },

  // ID 243 - Sabu
  {
    old: `championships: [{ title: "ECW Championship", count: 1, firstReign: "Jun 2006", notable: "Won the re-launched ECW Championship at One Night Stand" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 245,`,
    new: `championships: [{ title: "ECW Championship", count: 1, reigns: [{ date: "Jul 2006", notes: "Won on ECW television" }], firstReign: "Jul 2006", notable: "Won the re-launched ECW Championship at One Night Stand" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 245,`
  },

  // ID 247 - Spike Dudley
  {
    old: `championships: [{ title: "Hardcore Championship", count: 3, firstReign: "Mar 2001", notable: "Three Hardcore title reigns using his speed against bigger opponents" }, { title: "Cruiserweight Championship", count: 1, firstReign: "Sep 2003", notable: "Won the Cruiserweight title" }, { title: "Tag Team Championship", count: 3, firstReign: "Oct 2001", notable: "With various Dudley family members" }],
    totalTitleReigns: 7, hallOfFame: null,`,
    new: `championships: [{ title: "Hardcore Championship", count: 3, reigns: [{ date: "Mar 2001", notes: "First Hardcore title reign" }, { date: "Jun 2001", notes: "Second Hardcore reign" }, { date: "Oct 2001", notes: "Third Hardcore reign" }], firstReign: "Mar 2001", notable: "Three Hardcore title reigns using his speed against bigger opponents" }, { title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Sep 2003", notes: "Won on SmackDown" }], firstReign: "Sep 2003", notable: "Won the Cruiserweight title" }, { title: "Tag Team Championship", count: 3, reigns: [{ date: "Oct 2001", notes: "Won with Tazz" }, { date: "Dec 2001", notes: "Won with Bubba Ray Dudley" }, { date: "Feb 2002", notes: "Won with Tazz again" }], firstReign: "Oct 2001", notable: "With various Dudley family members" }],
    totalTitleReigns: 7, hallOfFame: null,`
  },

  // ID 248 - Stevie Richards
  {
    old: `championships: [{ title: "Hardcore Championship", count: 22, firstReign: "Nov 2001", notable: "22 Hardcore title reigns in the 24/7 era — tied with Crash Holly for most chaotic champion" }],
    totalTitleReigns: 22, hallOfFame: null,`,
    new: `championships: [{ title: "Hardcore Championship", count: 22, reigns: [{ date: "Nov 2001", notes: "First of 22 reigns in the 24/7 Hardcore era (reigns too numerous to list individually)" }], firstReign: "Nov 2001", notable: "22 Hardcore title reigns in the 24/7 era — tied with Crash Holly for most chaotic champion" }],
    totalTitleReigns: 22, hallOfFame: null,`
  },

  // ID 250 - Billy Kidman
  {
    old: `championships: [{ title: "Cruiserweight Championship", count: 7, firstReign: "Oct 1998 (WCW)", notable: "Primarily a WCW champion but continued in WWE's CW division" }],
    totalTitleReigns: 7, hallOfFame: null,`,
    new: `championships: [{ title: "Cruiserweight Championship", count: 7, reigns: [{ date: "Oct 1998", notes: "First CW reign in WCW" }, { date: "Jan 1999", notes: "Second WCW CW reign" }, { date: "Mar 1999", notes: "Third WCW CW reign" }, { date: "Oct 1999", notes: "Fourth WCW CW reign" }, { date: "Jul 2001", notes: "Fifth reign (WCW invasion era)" }, { date: "Sep 2001", notes: "Sixth CW reign in WWE" }, { date: "Jun 2003", notes: "Seventh CW reign on SmackDown" }], firstReign: "Oct 1998 (WCW)", notable: "Primarily a WCW champion but continued in WWE's CW division" }],
    totalTitleReigns: 7, hallOfFame: null,`
  },

  // ID 251 - Ultimo Dragon
  {
    old: `championships: [{ title: "Cruiserweight Championship", count: 1, firstReign: "Sep 2003 (WWE)", notable: "Brief WWE CW reign" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Sep 2003", notes: "Won on SmackDown" }], firstReign: "Sep 2003 (WWE)", notable: "Brief WWE CW reign" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 252 - Jamie Noble
  {
    old: `championships: [{ title: "Cruiserweight Championship", count: 1, firstReign: "Jul 2002", notable: "Dominant CW title reign for nearly a year" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Jul 2002", notes: "Won on SmackDown from The Hurricane" }], firstReign: "Jul 2002", notable: "Dominant CW title reign for nearly a year" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 255 - Hornswoggle
  {
    old: `championships: [{ title: "Cruiserweight Championship", count: 1, firstReign: "Sep 2007", notable: "Last Cruiserweight Champion — the title was retired shortly after his reign as a comedic swan song" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Sep 2007", notes: "Won on Raw — final Cruiserweight Champion before title retired" }], firstReign: "Sep 2007", notable: "Last Cruiserweight Champion — the title was retired shortly after his reign as a comedic swan song" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 256 - Fit Finlay
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Jan 2006", notable: "US title reign on SmackDown" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Jul 2006", notes: "Won on SmackDown from Bobby Lashley" }], firstReign: "Jul 2006", notable: "US title reign on SmackDown" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 257 - Adam Cole
  {
    old: `championships: [{ title: "NXT Championship", count: 1, firstReign: "Jun 2019", notable: "NXT Champion — his reign and rivalries defined the 2019 NXT era" }, { title: "NXT North American Championship", count: 1, firstReign: "Apr 2019", notable: "Longest NA title reign at the time" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 1, reigns: [{ date: "Jun 2019", notes: "Won at NXT TakeOver: XXV in a fatal five-way" }], firstReign: "Jun 2019", notable: "NXT Champion — his reign and rivalries defined the 2019 NXT era" }, { title: "NXT North American Championship", count: 1, reigns: [{ date: "Nov 2018", notes: "Won at NXT TakeOver: WarGames II" }], firstReign: "Nov 2018", notable: "Longest NA title reign at the time" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 258 - Velveteen Dream
  {
    old: `championships: [{ title: "NXT North American Championship", count: 1, firstReign: "Jun 2019", notable: "Won the NA title in a brief but celebrated reign" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "NXT North American Championship", count: 1, reigns: [{ date: "Jun 2019", notes: "Won on NXT television from Buddy Murphy" }], firstReign: "Jun 2019", notable: "Won the NA title in a brief but celebrated reign" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 260 - Shayna Baszler
  {
    old: `championships: [{ title: "NXT Women's Championship", count: 2, firstReign: "Jan 2019", notable: "Two dominant NXT Women's title reigns" }, { title: "Women's Tag Team Championship", count: 1, firstReign: "Sep 2020", notable: "Won with Nia Jax" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Women's Championship", count: 2, reigns: [{ date: "Aug 2018", notes: "Won at NXT TakeOver: Brooklyn IV from Kairi Sane" }, { date: "Sep 2019", notes: "Won at NXT TakeOver: Toronto from Io Shirai, Mia Yim, and Candice LeRae" }], firstReign: "Aug 2018", notable: "Two dominant NXT Women's title reigns" }, { title: "Women's Tag Team Championship", count: 1, reigns: [{ date: "Sep 2020", notes: "Won at Payback with Nia Jax" }], firstReign: "Sep 2020", notable: "Won with Nia Jax" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 261 - Kairi Sane
  {
    old: `championships: [{ title: "NXT Women's Championship", count: 1, firstReign: "Aug 2018", notable: "Won the Mae Young Classic and NXT title" }, { title: "Women's Tag Team Championship", count: 1, firstReign: "Oct 2019", notable: "Kabuki Warriors with Asuka" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Women's Championship", count: 1, reigns: [{ date: "Apr 2018", notes: "Won at NXT TakeOver: New Orleans from Shayna Baszler" }], firstReign: "Apr 2018", notable: "Won the Mae Young Classic and NXT title" }, { title: "Women's Tag Team Championship", count: 1, reigns: [{ date: "Oct 2019", notes: "Kabuki Warriors won at Hell in a Cell from Alexa Bliss & Nikki Cross" }], firstReign: "Oct 2019", notable: "Kabuki Warriors with Asuka" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 262 - Asuka
  {
    old: `championships: [{ title: "NXT Women's Championship", count: 1, firstReign: "Jun 2016", notable: "910-day undefeated reign in NXT" }, { title: "Raw Women's Championship", count: 2, firstReign: "Apr 2019", notable: "Two Raw Women's title reigns" }, { title: "SmackDown Women's Championship", count: 3, firstReign: "Nov 2020", notable: "Three SD Women's title reigns" }, { title: "Women's Tag Team Championship", count: 2, firstReign: "Oct 2019", notable: "Kabuki Warriors with Kairi Sane, then with Bianca" }],
    totalTitleReigns: 8, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Women's Championship", count: 1, reigns: [{ date: "Apr 2016", notes: "Won at NXT TakeOver: Dallas from Bayley — began historic undefeated streak" }], firstReign: "Apr 2016", notable: "910-day undefeated reign in NXT" }, { title: "Raw Women's Championship", count: 2, reigns: [{ date: "Jun 2019", notes: "Won on Raw" }, { date: "May 2020", notes: "Awarded title when Becky Lynch vacated due to pregnancy" }], firstReign: "Jun 2019", notable: "Two Raw Women's title reigns" }, { title: "SmackDown Women's Championship", count: 3, reigns: [{ date: "Dec 2018", notes: "Won at TLC from Becky Lynch" }, { date: "Jul 2020", notes: "Won on SmackDown from Bayley" }, { date: "Jan 2023", notes: "Won at Royal Rumble from Bianca Belair (via interference)" }], firstReign: "Dec 2018", notable: "Three SD Women's title reigns" }, { title: "Women's Tag Team Championship", count: 2, reigns: [{ date: "Oct 2019", notes: "Kabuki Warriors won at Hell in a Cell with Kairi Sane" }, { date: "Jan 2023", notes: "Won with Bianca Belair" }], firstReign: "Oct 2019", notable: "Kabuki Warriors with Kairi Sane, then with Bianca" }],
    totalTitleReigns: 8, hallOfFame: null,`
  },

  // ID 263 - Ember Moon
  {
    old: `championships: [{ title: "NXT Women's Championship", count: 1, firstReign: "Apr 2017", notable: "Reliable NXT Women's Champion" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Women's Championship", count: 1, reigns: [{ date: "Nov 2017", notes: "Won at NXT TakeOver: WarGames from Asuka" }], firstReign: "Nov 2017", notable: "Reliable NXT Women's Champion" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 264 - Dakota Kai
  {
    old: `championships: [{ title: "Women's Tag Team Championship", count: 2, firstReign: "Sep 2022", notable: "Two Women's Tag title reigns with Iyo Sky as Damage CTRL" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "Women's Tag Team Championship", count: 2, reigns: [{ date: "Sep 2022", notes: "Won with Iyo Sky as Damage CTRL on Raw" }, { date: "Mar 2023", notes: "Second reign with Iyo Sky" }], firstReign: "Sep 2022", notable: "Two Women's Tag title reigns with Iyo Sky as Damage CTRL" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 268 - Chad Gable
  {
    old: `championships: [{ title: "Raw Tag Team Championship", count: 2, firstReign: "Jan 2017", notable: "American Alpha tag titles with Jason Jordan" }, { title: "SmackDown Tag Team Championship", count: 1, firstReign: "Aug 2018", notable: "Won with Bobby Roode" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Dec 2016", notes: "American Alpha won on SmackDown (later became SD titles)" }, { date: "Feb 2017", notes: "Second American Alpha reign with Jason Jordan" }], firstReign: "Dec 2016", notable: "American Alpha tag titles with Jason Jordan" }, { title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "Aug 2018", notes: "Won with Bobby Roode on SmackDown" }], firstReign: "Aug 2018", notable: "Won with Bobby Roode" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 269 - Jason Jordan
  {
    old: `championships: [{ title: "Raw Tag Team Championship", count: 2, firstReign: "Jan 2017", notable: "American Alpha tag title wins" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Dec 2016", notes: "American Alpha won on SmackDown with Chad Gable" }, { date: "Feb 2017", notes: "Second American Alpha reign with Chad Gable" }], firstReign: "Dec 2016", notable: "American Alpha tag title wins" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 270 - Breezango
  {
    old: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, firstReign: "Feb 2021", notable: "Finally got their title win — the crowd loved it" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 271,`,
    new: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "Feb 2021", notes: "Won on SmackDown from Robert Roode & Dolph Ziggler" }], firstReign: "Feb 2021", notable: "Finally got their title win — the crowd loved it" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 271,`
  },

  // ID 271 - Tyler Breeze
  {
    old: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, firstReign: "Feb 2021", notable: "With Fandango as Breezango" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "Feb 2021", notes: "Won with Fandango as Breezango" }], firstReign: "Feb 2021", notable: "With Fandango as Breezango" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 272 - Viking Raiders
  {
    old: `championships: [{ title: "Raw Tag Team Championship", count: 2, firstReign: "May 2019", notable: "Two Raw tag title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Sep 2019", notes: "Won on Raw from The OC (Gallows & Anderson)" }, { date: "Nov 2022", notes: "Second Raw Tag reign" }], firstReign: "Sep 2019", notable: "Two Raw tag title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 273 - Authors of Pain
  {
    old: `championships: [{ title: "NXT Tag Team Championship", count: 1, firstReign: "Jan 2017", notable: "Dominant NXT tag title reign" }, { title: "Raw Tag Team Championship", count: 1, firstReign: "Oct 2018", notable: "Raw tag title win" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Tag Team Championship", count: 1, reigns: [{ date: "Jan 2017", notes: "Won at NXT TakeOver: San Antonio from DIY" }], firstReign: "Jan 2017", notable: "Dominant NXT tag title reign" }, { title: "Raw Tag Team Championship", count: 1, reigns: [{ date: "Sep 2018", notes: "Won on Raw" }], firstReign: "Sep 2018", notable: "Raw tag title win" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 274 - Street Profits
  {
    old: `championships: [{ title: "Raw Tag Team Championship", count: 2, firstReign: "Apr 2020", notable: "Two Raw tag title reigns" }, { title: "SmackDown Tag Team Championship", count: 1, firstReign: "Oct 2021", notable: "SD tag title run" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Mar 2020", notes: "Won on Raw from Seth Rollins & Buddy Murphy" }, { date: "Jul 2020", notes: "Won second Raw tag titles" }], firstReign: "Mar 2020", notable: "Two Raw tag title reigns" }, { title: "SmackDown Tag Team Championship", count: 1, reigns: [{ date: "Aug 2020", notes: "Won on SmackDown from Cesaro & Shinsuke Nakamura" }], firstReign: "Aug 2020", notable: "SD tag title run" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 275 - The Revival / FTR
  {
    old: `championships: [{ title: "NXT Tag Team Championship", count: 2, firstReign: "Sep 2015", notable: "Two dominant NXT tag title reigns" }, { title: "Raw Tag Team Championship", count: 2, firstReign: "Apr 2018", notable: "Two Raw tag runs — criminally misused on main roster" }],
    totalTitleReigns: 4, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Tag Team Championship", count: 2, reigns: [{ date: "Nov 2015", notes: "Won at NXT TakeOver: London" }, { date: "May 2016", notes: "Second NXT tag reign" }], firstReign: "Nov 2015", notable: "Two dominant NXT tag title reigns" }, { title: "Raw Tag Team Championship", count: 2, reigns: [{ date: "Feb 2019", notes: "Won on Raw from Bobby Roode & Chad Gable" }, { date: "Jun 2019", notes: "Second Raw tag reign" }], firstReign: "Feb 2019", notable: "Two Raw tag runs — criminally misused on main roster" }],
    totalTitleReigns: 4, hallOfFame: null,`
  },

  // ID 276 - DIY
  {
    old: `championships: [{ title: "NXT Tag Team Championship", count: 1, firstReign: "Nov 2016", notable: "Their title win was an emotional high point of NXT 2016" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Tag Team Championship", count: 1, reigns: [{ date: "Jan 2017", notes: "Won at NXT TakeOver: Toronto from The Revival" }], firstReign: "Jan 2017", notable: "Their title win was an emotional high point of NXT 2016" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 277 - Undisputed Era
  {
    old: `championships: [{ title: "NXT Tag Team Championship", count: 5, firstReign: "Oct 2017", notable: "Multiple NXT tag title reigns across different pairings within the faction" }, { title: "NXT North American Championship", count: 1, firstReign: "Apr 2019", notable: "Roderick Strong's NA title within the faction" }],
    totalTitleReigns: 6, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Tag Team Championship", count: 5, reigns: [{ date: "Aug 2018", notes: "Kyle O'Reilly & Roderick Strong won at NXT TakeOver: Brooklyn IV" }, { date: "Mar 2019", notes: "Bobby Fish & Kyle O'Reilly won" }, { date: "Jul 2019", notes: "Third UE tag reign (Fish & O'Reilly)" }, { date: "Oct 2019", notes: "Fourth UE tag reign" }, { date: "Jan 2020", notes: "Fifth UE tag reign (O'Reilly & Strong)" }], firstReign: "Aug 2018", notable: "Multiple NXT tag title reigns across different pairings within the faction" }, { title: "NXT North American Championship", count: 1, reigns: [{ date: "Jun 2019", notes: "Roderick Strong won at NXT TakeOver: XXV" }], firstReign: "Jun 2019", notable: "Roderick Strong's NA title within the faction" }],
    totalTitleReigns: 6, hallOfFame: null,`
  },

  // ID 278 - Kyle O'Reilly
  {
    old: `championships: [{ title: "NXT Championship", count: 1, firstReign: "Apr 2021", notable: "Brief but celebrated NXT title reign" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 1, reigns: [{ date: "Mar 2021", notes: "Won in a fatal four-way at NXT TakeOver: Stand & Deliver (brief)" }], firstReign: "Mar 2021", notable: "Brief but celebrated NXT title reign" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 279 - Roderick Strong
  {
    old: `championships: [{ title: "NXT North American Championship", count: 2, firstReign: "Jun 2019", notable: "Two NA title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT North American Championship", count: 2, reigns: [{ date: "Jun 2019", notes: "Won at NXT TakeOver: XXV" }, { date: "Dec 2019", notes: "Second NA title reign won on NXT television" }], firstReign: "Jun 2019", notable: "Two NA title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 290 - Primo & Epico Colon
  {
    old: `championships: [{ title: "WWE Tag Team Championship", count: 1, firstReign: "Jan 2012", notable: "Tag title reign in the midst of the tag division rebuild" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 292,`,
    new: `championships: [{ title: "WWE Tag Team Championship", count: 1, reigns: [{ date: "Jan 2012", notes: "Won on Raw from Air Boom (Kofi Kingston & Evan Bourne)" }], firstReign: "Jan 2012", notable: "Tag title reign in the midst of the tag division rebuild" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 292,`
  },

  // ID 292 - Jinder Mahal
  {
    old: `championships: [{ title: "WWE Championship", count: 1, firstReign: "May 2017", notable: "The most surprising title reign in recent memory — went from 3MB jobber to WWE Champion" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "WWE Championship", count: 1, reigns: [{ date: "May 2017", notes: "Won at Backlash from Randy Orton — shocking upset" }], firstReign: "May 2017", notable: "The most surprising title reign in recent memory — went from 3MB jobber to WWE Champion" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 299 - Alundra Blayze / Madusa
  {
    old: `championships: [{ title: "WWF Women's Championship", count: 3, firstReign: "Dec 1993", notable: "Three Women's title reigns — revived the division" }],
    totalTitleReigns: 3, hallOfFame: 2015,`,
    new: `championships: [{ title: "WWF Women's Championship", count: 3, reigns: [{ date: "Dec 1993", notes: "Won from Bull Nakano" }, { date: "Apr 1994", notes: "Regained from Bull Nakano" }, { date: "Oct 1995", notes: "Third reign before departing to WCW" }], firstReign: "Dec 1993", notable: "Three Women's title reigns — revived the division" }],
    totalTitleReigns: 3, hallOfFame: 2015,`
  },

  // ID 300 - Wendi Richter
  {
    old: `championships: [{ title: "WWF Women's Championship", count: 2, firstReign: "Jul 1984", notable: "First major woman pushed as a crossover star — MTV/WWF connection" }],
    totalTitleReigns: 2, hallOfFame: 2010,`,
    new: `championships: [{ title: "WWF Women's Championship", count: 2, reigns: [{ date: "Jul 1984", notes: "Won from Fabulous Moolah on MTV's The Brawl to End It All" }, { date: "Feb 1985", notes: "Regained from Leilani Kai at WrestleMania I" }], firstReign: "Jul 1984", notable: "First major woman pushed as a crossover star — MTV/WWF connection" }],
    totalTitleReigns: 2, hallOfFame: 2010,`
  },

  // ID 301 - Fabulous Moolah
  {
    old: `championships: [{ title: "WWF Women's Championship", count: 4, firstReign: "Sep 1956", notable: "28-year combined reign — the most dominant individual title run in all of wrestling history" }],
    totalTitleReigns: 4, hallOfFame: 1995,`,
    new: `championships: [{ title: "WWF Women's Championship", count: 4, reigns: [{ date: "Sep 1956", notes: "Won the original Women's Championship — held for nearly 28 years" }, { date: "Jul 1985", notes: "Regained from Wendi Richter as the Spider Lady" }, { date: "Oct 1999", notes: "Won at age 76 on Raw" }, { date: "Jun 2004", notes: "Brief ceremonial reign" }], firstReign: "Sep 1956", notable: "28-year combined reign — the most dominant individual title run in all of wrestling history" }],
    totalTitleReigns: 4, hallOfFame: 1995,`
  },

  // ID 302 - Mae Young
  {
    old: `championships: [{ title: "Women's Championship", count: 1, firstReign: "Feb 2000", notable: "Won the Women's title at 77 years old — the oldest champion in WWE history" }],
    totalTitleReigns: 1, hallOfFame: 2008,`,
    new: `championships: [{ title: "Women's Championship", count: 1, reigns: [{ date: "Feb 2000", notes: "Won on Raw at age 77 — oldest champion in WWE history" }], firstReign: "Feb 2000", notable: "Won the Women's title at 77 years old — the oldest champion in WWE history" }],
    totalTitleReigns: 1, hallOfFame: 2008,`
  },

  // ID 303 - Molly Holly
  {
    old: `championships: [{ title: "Women's Championship", count: 2, firstReign: "Aug 2002", notable: "Two Women's title reigns — much better wrestler than her push suggested" }],
    totalTitleReigns: 2, hallOfFame: 2021,`,
    new: `championships: [{ title: "Women's Championship", count: 2, reigns: [{ date: "Jun 2002", notes: "Won on Raw from Trish Stratus" }, { date: "Nov 2003", notes: "Won from Lita on Raw" }], firstReign: "Jun 2002", notable: "Two Women's title reigns — much better wrestler than her push suggested" }],
    totalTitleReigns: 2, hallOfFame: 2021,`
  },

  // ID 304 - Victoria
  {
    old: `championships: [{ title: "Women's Championship", count: 2, firstReign: "Nov 2002", notable: "Two Women's title reigns — underrated as a champion and performer" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "Women's Championship", count: 2, reigns: [{ date: "Nov 2002", notes: "Won from Trish Stratus at Survivor Series in a Hardcore match" }, { date: "Feb 2004", notes: "Won on Raw from Lita" }], firstReign: "Nov 2002", notable: "Two Women's title reigns — underrated as a champion and performer" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 305 - Jazz
  {
    old: `championships: [{ title: "Women's Championship", count: 2, firstReign: "Feb 2002", notable: "Two Women's title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "Women's Championship", count: 2, reigns: [{ date: "Feb 2002", notes: "Won from Trish Stratus on Raw" }, { date: "Jun 2003", notes: "Won from Trish Stratus again" }], firstReign: "Feb 2002", notable: "Two Women's title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 306 - Naomi
  {
    old: `championships: [{ title: "SmackDown Women's Championship", count: 2, firstReign: "Feb 2017", notable: "Two SD Women's title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "SmackDown Women's Championship", count: 2, reigns: [{ date: "Feb 2017", notes: "Won at Elimination Chamber" }, { date: "Apr 2017", notes: "Won at WrestleMania 33 from Alexa Bliss" }], firstReign: "Feb 2017", notable: "Two SD Women's title reigns" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 307 - Nia Jax
  {
    old: `championships: [{ title: "Raw Women's Championship", count: 1, firstReign: "Apr 2018", notable: "Won by defeating Alexa Bliss" }, { title: "Women's Tag Team Championship", count: 1, firstReign: "Sep 2020", notable: "Won with Shayna Baszler" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Women's Championship", count: 1, reigns: [{ date: "Apr 2018", notes: "Won at WrestleMania 34 from Alexa Bliss" }], firstReign: "Apr 2018", notable: "Won by defeating Alexa Bliss" }, { title: "Women's Tag Team Championship", count: 1, reigns: [{ date: "Sep 2020", notes: "Won at Payback with Shayna Baszler" }], firstReign: "Sep 2020", notable: "Won with Shayna Baszler" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 308 - Alexa Bliss
  {
    old: `championships: [{ title: "Raw Women's Championship", count: 3, firstReign: "Apr 2017", notable: "Three Raw Women's title reigns" }, { title: "SmackDown Women's Championship", count: 2, firstReign: "Oct 2016", notable: "Two SD Women's title reigns — first SD Women's Champion of significance" }, { title: "Women's Tag Team Championship", count: 1, firstReign: "Feb 2019", notable: "Won with Nikki Cross" }],
    totalTitleReigns: 6, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Women's Championship", count: 3, reigns: [{ date: "Apr 2017", notes: "Won at Payback from Bayley" }, { date: "Aug 2017", notes: "Won at SummerSlam from Sasha Banks" }, { date: "Jun 2018", notes: "Won Money in the Bank cash-in on Nia Jax" }], firstReign: "Apr 2017", notable: "Three Raw Women's title reigns" }, { title: "SmackDown Women's Championship", count: 2, reigns: [{ date: "Sep 2016", notes: "Won on SmackDown from Becky Lynch" }, { date: "Feb 2017", notes: "Won on SmackDown from Naomi" }], firstReign: "Sep 2016", notable: "Two SD Women's title reigns — first SD Women's Champion of significance" }, { title: "Women's Tag Team Championship", count: 1, reigns: [{ date: "Jun 2019", notes: "Won on Raw with Nikki Cross" }], firstReign: "Jun 2019", notable: "Won with Nikki Cross" }],
    totalTitleReigns: 6, hallOfFame: null,`
  },

  // ID 309 - Tiffany Stratton
  {
    old: `championships: [{ title: "NXT Women's Championship", count: 1, firstReign: "Aug 2023", notable: "NXT Women's Champion" }, { title: "Women's Championship", count: 1, firstReign: "Jan 2025", notable: "MITB cash-in world title win" }],
    totalTitleReigns: 2, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Women's Championship", count: 1, reigns: [{ date: "Sep 2023", notes: "Won on NXT television" }], firstReign: "Sep 2023", notable: "NXT Women's Champion" }, { title: "Women's Championship", count: 1, reigns: [{ date: "Jan 2025", notes: "MITB cash-in on Nia Jax on SmackDown" }], firstReign: "Jan 2025", notable: "MITB cash-in world title win" }],
    totalTitleReigns: 2, hallOfFame: null,`
  },

  // ID 317 - Ken Kennedy / Mr. Kennedy
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Feb 2007", notable: "Brief US title reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 318,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Nov 2006", notes: "Won on SmackDown from Chris Benoit" }], firstReign: "Nov 2006", notable: "Brief US title reign" }],
    totalTitleReigns: 1, hallOfFame: null,
  },
  {
    id: 318,`
  },

  // ID 318 - MVP
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Mar 2007", notable: "343-day US title reign — one of the dominant mid-card reigns of the era" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "May 2007", notes: "Won from Chris Benoit on SmackDown — held for 343 days" }], firstReign: "May 2007", notable: "343-day US title reign — one of the dominant mid-card reigns of the era" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 320 - Ryback
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 3, firstReign: "Aug 2015", notable: "Three IC title reigns after his main event push never materialized" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 3, reigns: [{ date: "Sep 2015", notes: "Won at Night of Champions from Miz" }, { date: "Oct 2015", notes: "Regained on Raw" }, { date: "Nov 2015", notes: "Third brief IC reign" }], firstReign: "Sep 2015", notable: "Three IC title reigns after his main event push never materialized" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 321 - Sting
  {
    old: `championships: [{ title: "United States Championship", count: 1, firstReign: "Oct 2015", notable: "His US title win felt like the culmination of a 30-year career finally coming full circle" }],
    totalTitleReigns: 1, hallOfFame: 2016,`,
    new: `championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Sep 2015", notes: "Won at Night of Champions from Seth Rollins (injured during match)" }], firstReign: "Sep 2015", notable: "His US title win felt like the culmination of a 30-year career finally coming full circle" }],
    totalTitleReigns: 1, hallOfFame: 2016,`
  },

  // ID 330 - Carmelo Hayes
  {
    old: `championships: [{ title: "NXT Championship", count: 1, firstReign: "Apr 2023", notable: "NXT Championship win validated his top-star billing" }, { title: "NXT North American Championship", count: 2, firstReign: "May 2022", notable: "Two NA title reigns before NXT title" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 1, reigns: [{ date: "Apr 2023", notes: "Won at NXT Stand & Deliver from Bron Breakker" }], firstReign: "Apr 2023", notable: "NXT Championship win validated his top-star billing" }, { title: "NXT North American Championship", count: 2, reigns: [{ date: "Oct 2021", notes: "Won in a ladder match on NXT" }, { date: "May 2022", notes: "Second NA title reign" }], firstReign: "Oct 2021", notable: "Two NA title reigns before NXT title" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 331 - Bron Breakker
  {
    old: `championships: [{ title: "NXT Championship", count: 2, firstReign: "Jan 2022", notable: "Two dominant NXT title reigns — considered a future WWE Champion" }, { title: "Intercontinental Championship", count: 1, firstReign: "Nov 2024", notable: "IC title run as his main roster push begins" }],
    totalTitleReigns: 3, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Championship", count: 2, reigns: [{ date: "Jan 2022", notes: "Won at NXT New Year's Evil from Tommaso Ciampa" }, { date: "Sep 2022", notes: "Second reign won on NXT television" }], firstReign: "Jan 2022", notable: "Two dominant NXT title reigns — considered a future WWE Champion" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Oct 2024", notes: "Won on Raw — beginning main roster title push" }], firstReign: "Oct 2024", notable: "IC title run as his main roster push begins" }],
    totalTitleReigns: 3, hallOfFame: null,`
  },

  // ID 333 - Omos
  {
    old: `championships: [{ title: "Raw Tag Team Championship", count: 1, firstReign: "May 2021", notable: "Won with AJ Styles" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "Raw Tag Team Championship", count: 1, reigns: [{ date: "Apr 2021", notes: "Won at WrestleMania 37 with AJ Styles from The New Day" }], firstReign: "Apr 2021", notable: "Won with AJ Styles" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 339 - Shinsuke Nakamura
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 4, firstReign: "Apr 2019", notable: "Four IC title reigns — the definitive IC champion of his era" }, { title: "United States Championship", count: 1, firstReign: "Nov 2022", notable: "Brief US title reign" }],
    totalTitleReigns: 5, hallOfFame: null,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 4, reigns: [{ date: "Apr 2019", notes: "Won at WrestleMania 35 from Finn Balor" }, { date: "Sep 2019", notes: "Won on SmackDown" }, { date: "Nov 2019", notes: "Third IC reign on SmackDown" }, { date: "Jan 2020", notes: "Fourth IC reign" }], firstReign: "Apr 2019", notable: "Four IC title reigns — the definitive IC champion of his era" }, { title: "United States Championship", count: 1, reigns: [{ date: "Nov 2022", notes: "Won on SmackDown" }], firstReign: "Nov 2022", notable: "Brief US title reign" }],
    totalTitleReigns: 5, hallOfFame: null,`
  },

  // ID 343 - The Ascension
  {
    old: `championships: [{ title: "NXT Tag Team Championship", count: 1, firstReign: "May 2013", notable: "Dominant NXT tag title reign — main roster call-up destroyed their momentum" }],
    totalTitleReigns: 1, hallOfFame: null,`,
    new: `championships: [{ title: "NXT Tag Team Championship", count: 1, reigns: [{ date: "Sep 2013", notes: "Won on NXT television — held for a dominant 364-day reign" }], firstReign: "Sep 2013", notable: "Dominant NXT tag title reign — main roster call-up destroyed their momentum" }],
    totalTitleReigns: 1, hallOfFame: null,`
  },

  // ID 347 - Pat Patterson
  {
    old: `championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Sep 1979", notable: "THE first IC Champion — all 90+ champions that followed exist because of him" }],
    totalTitleReigns: 1, hallOfFame: 1996,`,
    new: `championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Sep 1979", notes: "Won the first-ever Intercontinental Championship in a tournament in Rio de Janeiro" }], firstReign: "Sep 1979", notable: "THE first IC Champion — all 90+ champions that followed exist because of him" }],
    totalTitleReigns: 1, hallOfFame: 1996,`
  },
];

let changeCount = 0;
let failedCount = 0;

for (const r of replacements) {
  if (content.includes(r.old)) {
    content = content.replace(r.old, r.new);
    changeCount++;
  } else {
    failedCount++;
    // Show first 80 chars of what we tried to find
    console.log(`FAILED to find: ${r.old.substring(0, 100)}...`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Done! ${changeCount} replacements made, ${failedCount} failed.`);
