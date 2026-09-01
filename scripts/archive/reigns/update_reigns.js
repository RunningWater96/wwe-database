const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'wwe-app', 'src', 'WWEDatabase.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Define all replacements as [oldString, newString] pairs
const replacements = [

// ID 89 - Dolph Ziggler
[
`championships: [{ title: "World Heavyweight Championship", count: 2, firstReign: "Apr 2013", notable: "His 2013 cash-in pop was one of the loudest reactions of the decade" }, { title: "Intercontinental Championship", count: 6, firstReign: "Jan 2011", notable: "6 IC reigns — multiple ladder match wins" }, { title: "United States Championship", count: 2, firstReign: "Jul 2014", notable: "Two US title reigns" }, { title: "Tag Team Championship", count: 4, firstReign: "Jun 2012", notable: "Various pairings" }],
    totalTitleReigns: 14,`,
`championships: [{ title: "World Heavyweight Championship", count: 2, reigns: [{ date: "Apr 2013", notes: "Cashed in MITB on Alberto Del Rio night after WrestleMania 29" }, { date: "Jun 2013", notes: "Won from Alberto Del Rio on SmackDown" }], firstReign: "Apr 2013", notable: "His 2013 cash-in pop was one of the loudest reactions of the decade" }, { title: "Intercontinental Championship", count: 6, reigns: [{ date: "Jan 2011", notes: "Won from Kofi Kingston on Raw" }, { date: "Apr 2012", notes: "Second IC reign" }, { date: "Jun 2016", notes: "Third IC reign" }, { date: "Sep 2017", notes: "Fourth IC reign" }, { date: "Dec 2020", notes: "Fifth IC reign at TLC" }, { date: "Mar 2023", notes: "Sixth IC reign" }], firstReign: "Jan 2011", notable: "6 IC reigns — multiple ladder match wins" }, { title: "United States Championship", count: 2, reigns: [{ date: "Jul 2014", notes: "Won Battle Royal on SmackDown" }, { date: "Nov 2014", notes: "Won at Survivor Series as sole survivor" }], firstReign: "Jul 2014", notable: "Two US title reigns" }, { title: "Tag Team Championship", count: 4, reigns: [{ date: "Jun 2012", notes: "Won with Jack Swagger" }, { date: "Jan 2017", notes: "Won Raw Tag Titles" }, { date: "Sep 2019", notes: "Won with Robert Roode on SmackDown" }, { date: "Jan 2020", notes: "Second reign with Roode" }], firstReign: "Jun 2012", notable: "Various pairings" }],
    totalTitleReigns: 14,`
],

// ID 90 - Kofi Kingston
[
`championships: [{ title: "WWE Championship", count: 1, firstReign: "Apr 2019", notable: "11-year WM journey — Kofimania was real" }, { title: "Tag Team Championship", count: 11, firstReign: "Apr 2008", notable: "New Day are the most decorated tag team in history" }, { title: "United States Championship", count: 2, firstReign: "Mar 2009", notable: "Two US title reigns" }, { title: "Intercontinental Championship", count: 3, firstReign: "Jan 2013", notable: "Multiple IC reigns" }],
    totalTitleReigns: 17,`,
`championships: [{ title: "WWE Championship", count: 1, reigns: [{ date: "Apr 2019", notes: "Won from Daniel Bryan at WrestleMania 35 — Kofimania" }], firstReign: "Apr 2019", notable: "11-year WM journey — Kofimania was real" }, { title: "Tag Team Championship", count: 11, reigns: [{ date: "Apr 2008", notes: "Won with CM Punk" }, { date: "Oct 2008", notes: "Won with CM Punk again" }, { date: "Jun 2012", notes: "Won with R-Truth" }, { date: "Sep 2012", notes: "Won with R-Truth again" }, { date: "Aug 2015", notes: "Won with Big E as New Day" }, { date: "Mar 2016", notes: "Second New Day reign" }, { date: "May 2016", notes: "Third New Day reign" }, { date: "Sep 2016", notes: "Fourth New Day reign — record-breaking 483-day reign" }, { date: "Jun 2017", notes: "Fifth New Day reign" }, { date: "Aug 2020", notes: "Sixth New Day reign" }, { date: "Jan 2022", notes: "Seventh New Day reign" }], firstReign: "Apr 2008", notable: "New Day are the most decorated tag team in history" }, { title: "United States Championship", count: 2, reigns: [{ date: "Mar 2009", notes: "Won from MVP on Raw" }, { date: "Jun 2009", notes: "Second US title reign" }], firstReign: "Mar 2009", notable: "Two US title reigns" }, { title: "Intercontinental Championship", count: 3, reigns: [{ date: "Jan 2013", notes: "Won from The Miz on Main Event" }, { date: "Mar 2013", notes: "Second IC reign" }, { date: "Apr 2013", notes: "Third IC reign" }], firstReign: "Jan 2013", notable: "Multiple IC reigns" }],
    totalTitleReigns: 17,`
],

// ID 91 - Daniel Bryan
[
`championships: [{ title: "WWE Championship", count: 3, firstReign: "Dec 2011", notable: "WM30 win with the YES! crowd is one of wrestling's greatest moments" }, { title: "World Heavyweight Championship", count: 1, firstReign: "Dec 2011", notable: "Cashed in MITB on the Big Show" }, { title: "Intercontinental Championship", count: 2, firstReign: "Feb 2015", notable: "IC title was elevated during his reign" }, { title: "Tag Team Championship", count: 1, firstReign: "May 2013", notable: "With Kane as Team Hell No — wildly entertaining" }],
    totalTitleReigns: 7,`,
`championships: [{ title: "WWE Championship", count: 3, reigns: [{ date: "Jul 2013", notes: "Won from John Cena at SummerSlam — then lost to Orton minutes later" }, { date: "Apr 2014", notes: "Won from Randy Orton & Batista at WrestleMania 30 — YES! Movement climax" }, { date: "Nov 2018", notes: "Won from AJ Styles on SmackDown — turned heel" }], firstReign: "Dec 2011", notable: "WM30 win with the YES! crowd is one of wrestling's greatest moments" }, { title: "World Heavyweight Championship", count: 1, reigns: [{ date: "Dec 2011", notes: "Cashed in MITB on Big Show at TLC" }], firstReign: "Dec 2011", notable: "Cashed in MITB on the Big Show" }, { title: "Intercontinental Championship", count: 2, reigns: [{ date: "Feb 2015", notes: "Won ladder match at Fastlane — elevated the IC title" }, { date: "Sep 2019", notes: "Won on SmackDown" }], firstReign: "Feb 2015", notable: "IC title was elevated during his reign" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "May 2013", notes: "Won with Kane as Team Hell No" }], firstReign: "May 2013", notable: "With Kane as Team Hell No — wildly entertaining" }],
    totalTitleReigns: 7,`
],

// ID 92 - Seth Rollins
[
`championships: [{ title: "WWE Championship", count: 2, firstReign: "Mar 2015", notable: "WM31 live MITB cash-in — most shocking WM moment in years" }, { title: "Universal Championship", count: 3, firstReign: "Aug 2015", notable: "Multiple Universal title reigns" }, { title: "United States Championship", count: 3, firstReign: "Aug 2020", notable: "Three US title reigns" }, { title: "Intercontinental Championship", count: 2, firstReign: "Dec 2021", notable: "Two IC reigns" }, { title: "Tag Team Championship", count: 3, firstReign: "Nov 2012", notable: "Shield-era and post-Shield pairings" }],
    totalTitleReigns: 13,`,
`championships: [{ title: "WWE Championship", count: 2, reigns: [{ date: "Mar 2015", notes: "Cashed in MITB during WrestleMania 31 main event" }, { date: "Apr 2019", notes: "Won from Brock Lesnar at WrestleMania 35" }], firstReign: "Mar 2015", notable: "WM31 live MITB cash-in — most shocking WM moment in years" }, { title: "Universal Championship", count: 3, reigns: [{ date: "Aug 2016", notes: "Won inaugural title then vacated due to injury" }, { date: "Apr 2019", notes: "Won from Brock Lesnar at WrestleMania 35" }, { date: "Jan 2022", notes: "Won at Royal Rumble from Roman Reigns by DQ (disputed)" }], firstReign: "Aug 2015", notable: "Multiple Universal title reigns" }, { title: "United States Championship", count: 3, reigns: [{ date: "Aug 2020", notes: "Won from Apollo Crews on Raw" }, { date: "Nov 2020", notes: "Second US reign" }, { date: "May 2022", notes: "Third US reign" }], firstReign: "Aug 2020", notable: "Three US title reigns" }, { title: "Intercontinental Championship", count: 2, reigns: [{ date: "Dec 2021", notes: "Won from Shinsuke Nakamura" }, { date: "Nov 2022", notes: "Second IC reign" }], firstReign: "Dec 2021", notable: "Two IC reigns" }, { title: "Tag Team Championship", count: 3, reigns: [{ date: "Nov 2012", notes: "Won with Roman Reigns as The Shield" }, { date: "Jun 2013", notes: "Second Shield tag reign" }, { date: "Aug 2018", notes: "Won with Dean Ambrose" }], firstReign: "Nov 2012", notable: "Shield-era and post-Shield pairings" }],
    totalTitleReigns: 13,`
],

// ID 93 - Roman Reigns
[
`championships: [{ title: "WWE Championship", count: 2, firstReign: "Nov 2015", notable: "Multiple brief reigns before his 2023 monster run" }, { title: "Universal Championship", count: 3, firstReign: "Aug 2020", notable: "1,316-day reign — one of the longest ever" }, { title: "Tag Team Championship", count: 1, firstReign: "Jun 2013", notable: "Shield tag title run" }],
    totalTitleReigns: 6,`,
`championships: [{ title: "WWE Championship", count: 2, reigns: [{ date: "Nov 2015", notes: "Won tournament at Survivor Series" }, { date: "Dec 2015", notes: "Won from Sheamus on Raw" }], firstReign: "Nov 2015", notable: "Multiple brief reigns before his 2023 monster run" }, { title: "Universal Championship", count: 3, reigns: [{ date: "Aug 2018", notes: "Won from Brock Lesnar at SummerSlam" }, { date: "Aug 2020", notes: "Won at Payback — began Tribal Chief era" }, { date: "Apr 2022", notes: "Unified with WWE Championship at WrestleMania 38" }], firstReign: "Aug 2020", notable: "1,316-day reign — one of the longest ever" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Jun 2013", notes: "Won with Seth Rollins as The Shield" }], firstReign: "Jun 2013", notable: "Shield tag title run" }],
    totalTitleReigns: 6,`
],

// ID 94 - Dean Ambrose
[
`championships: [{ title: "WWE Championship", count: 1, firstReign: "Dec 2016", notable: "MITB cash-in win" }, { title: "Intercontinental Championship", count: 3, firstReign: "Jun 2014", notable: "Three IC reigns" }, { title: "United States Championship", count: 1, firstReign: "May 2013", notable: "Shield-era US title" }, { title: "Tag Team Championship", count: 1, firstReign: "Jun 2013", notable: "Shield tag titles" }],
    totalTitleReigns: 6,`,
`championships: [{ title: "WWE Championship", count: 1, reigns: [{ date: "Jun 2016", notes: "Cashed in MITB on Seth Rollins at Money in the Bank" }], firstReign: "Dec 2016", notable: "MITB cash-in win" }, { title: "Intercontinental Championship", count: 3, reigns: [{ date: "Jun 2014", notes: "Won ladder match on Raw" }, { date: "Jan 2016", notes: "Won from Kevin Owens at Royal Rumble" }, { date: "Nov 2018", notes: "Third IC reign as heel" }], firstReign: "Jun 2014", notable: "Three IC reigns" }, { title: "United States Championship", count: 1, reigns: [{ date: "May 2013", notes: "Won from Kofi Kingston on Extreme Rules pre-show" }], firstReign: "May 2013", notable: "Shield-era US title" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Jun 2013", notes: "Won with Roman Reigns as The Shield" }], firstReign: "Jun 2013", notable: "Shield tag titles" }],
    totalTitleReigns: 6,`
],

// ID 95 - Bray Wyatt
[
`championships: [{ title: "WWE Championship", count: 2, firstReign: "Sep 2017", notable: "Title reigns never felt like the payoff his character deserved" }, { title: "Universal Championship", count: 2, firstReign: "Aug 2019", notable: "The Fiend's title reigns" }, { title: "Tag Team Championship", count: 1, firstReign: "Jun 2020", notable: "With Matt Hardy" }],
    totalTitleReigns: 5,`,
`championships: [{ title: "WWE Championship", count: 2, reigns: [{ date: "Feb 2017", notes: "Won Elimination Chamber match" }, { date: "Apr 2017", notes: "Lost to Orton at WM33 then regained briefly" }], firstReign: "Sep 2017", notable: "Title reigns never felt like the payoff his character deserved" }, { title: "Universal Championship", count: 2, reigns: [{ date: "Aug 2019", notes: "The Fiend won from Seth Rollins at Crown Jewel" }, { date: "Apr 2020", notes: "Won from John Cena at WrestleMania 36 Firefly Fun House Match" }], firstReign: "Aug 2019", notable: "The Fiend's title reigns" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Jun 2020", notes: "Won with Braun Strowman" }], firstReign: "Jun 2020", notable: "With Matt Hardy" }],
    totalTitleReigns: 5,`
],

// ID 96 - Kevin Owens
[
`championships: [{ title: "Universal Championship", count: 1, firstReign: "Sep 2016", notable: "Won in a chaotic multi-person mess — first Universal title" }, { title: "United States Championship", count: 3, firstReign: "Nov 2017", notable: "Three US title reigns" }, { title: "Intercontinental Championship", count: 2, firstReign: "Aug 2015", notable: "IC title debut matches were excellent" }, { title: "Tag Team Championship", count: 1, firstReign: "Nov 2022", notable: "With Sami Zayn" }],
    totalTitleReigns: 7,`,
`championships: [{ title: "Universal Championship", count: 1, reigns: [{ date: "Aug 2016", notes: "Won Fatal Four Way on Raw with Triple H's help" }], firstReign: "Sep 2016", notable: "Won in a chaotic multi-person mess — first Universal title" }, { title: "United States Championship", count: 3, reigns: [{ date: "Nov 2017", notes: "Won from Baron Corbin on SmackDown" }, { date: "Jan 2018", notes: "Second US reign" }, { date: "Jul 2019", notes: "Won from Samoa Joe" }], firstReign: "Nov 2017", notable: "Three US title reigns" }, { title: "Intercontinental Championship", count: 2, reigns: [{ date: "May 2015", notes: "Won from Ryback — debut era" }, { date: "Jan 2016", notes: "Won from Dean Ambrose at Royal Rumble" }], firstReign: "Aug 2015", notable: "IC title debut matches were excellent" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Mar 2023", notes: "Won with Sami Zayn at WrestleMania 39 from The Usos" }], firstReign: "Nov 2022", notable: "With Sami Zayn" }],
    totalTitleReigns: 7,`
],

// ID 97 - Sami Zayn
[
`championships: [{ title: "Intercontinental Championship", count: 3, firstReign: "Dec 2022", notable: "His IC title reigns were well-received" }, { title: "Tag Team Championship", count: 1, firstReign: "Apr 2023", notable: "WM39 win with Kevin Owens — massive emotional moment" }],
    totalTitleReigns: 4,`,
`championships: [{ title: "Intercontinental Championship", count: 3, reigns: [{ date: "Dec 2022", notes: "Won from Gunther at WrestleMania — ended historic reign" }, { date: "Sep 2023", notes: "Second IC reign" }, { date: "Jan 2024", notes: "Third IC reign" }], firstReign: "Dec 2022", notable: "His IC title reigns were well-received" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Apr 2023", notes: "Won with Kevin Owens from The Usos at WrestleMania 39" }], firstReign: "Apr 2023", notable: "WM39 win with Kevin Owens — massive emotional moment" }],
    totalTitleReigns: 4,`
],

// ID 98 - AJ Styles
[
`championships: [{ title: "WWE Championship", count: 2, firstReign: "Sep 2016", notable: "Proven best in the world the moment he arrived" }, { title: "World Heavyweight Championship", count: 1, firstReign: "May 2023", notable: "Won the newly named title" }, { title: "United States Championship", count: 3, firstReign: "Jun 2020", notable: "Three US title reigns" }],
    totalTitleReigns: 6,`,
`championships: [{ title: "WWE Championship", count: 2, reigns: [{ date: "Sep 2016", notes: "Won from Dean Ambrose at Backlash" }, { date: "Nov 2017", notes: "Won from Jinder Mahal at Manchester — 371-day reign" }], firstReign: "Sep 2016", notable: "Proven best in the world the moment he arrived" }, { title: "World Heavyweight Championship", count: 1, reigns: [{ date: "May 2023", notes: "Won the newly created World Heavyweight Championship" }], firstReign: "May 2023", notable: "Won the newly named title" }, { title: "United States Championship", count: 3, reigns: [{ date: "Jul 2017", notes: "Won from Kevin Owens on SmackDown" }, { date: "Jul 2020", notes: "Won on Raw" }, { date: "Oct 2020", notes: "Third US reign" }], firstReign: "Jun 2020", notable: "Three US title reigns" }],
    totalTitleReigns: 6,`
],

// ID 99 - Finn Balor
[
`championships: [{ title: "Universal Championship", count: 1, firstReign: "Aug 2016", notable: "Won and vacated the same night due to injury — brutal timing" }, { title: "Intercontinental Championship", count: 1, firstReign: "Feb 2019", notable: "Brief IC reign" }, { title: "Tag Team Championship", count: 1, firstReign: "Mar 2021", notable: "With Damian Priest as Judgment Day" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "Universal Championship", count: 1, reigns: [{ date: "Aug 2016", notes: "Won inaugural title at SummerSlam — vacated next day due to shoulder injury" }], firstReign: "Aug 2016", notable: "Won and vacated the same night due to injury — brutal timing" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Feb 2019", notes: "Won from Bobby Lashley on Raw" }], firstReign: "Feb 2019", notable: "Brief IC reign" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Mar 2023", notes: "Won with Damian Priest as Judgment Day" }], firstReign: "Mar 2021", notable: "With Damian Priest as Judgment Day" }],
    totalTitleReigns: 3,`
],

// ID 100 - Drew McIntyre
[
`championships: [{ title: "WWE Championship", count: 4, firstReign: "Apr 2020", notable: "WM36 win over Brock Lesnar — the empty arena somehow made it more emotional" }, { title: "Intercontinental Championship", count: 1, firstReign: "Jun 2021", notable: "Brief IC reign" }],
    totalTitleReigns: 5,`,
`championships: [{ title: "WWE Championship", count: 4, reigns: [{ date: "Apr 2020", notes: "Won from Brock Lesnar at WrestleMania 36 (empty arena)" }, { date: "Nov 2020", notes: "Won from Randy Orton on Raw" }, { date: "Jan 2021", notes: "Won at Royal Rumble from Goldberg" }, { date: "Nov 2021", notes: "Won from Big E on Raw" }], firstReign: "Apr 2020", notable: "WM36 win over Brock Lesnar — the empty arena somehow made it more emotional" }, { title: "Intercontinental Championship", count: 1, reigns: [{ date: "Aug 2009", notes: "Won IC title during initial Chosen One push" }], firstReign: "Jun 2021", notable: "Brief IC reign" }],
    totalTitleReigns: 5,`
],

// ID 101 - Becky Lynch
[
`championships: [{ title: "Raw Women's Championship", count: 3, firstReign: "Oct 2018", notable: "WM35 win in a triple threat was her crowning moment" }, { title: "SmackDown Women's Championship", count: 4, firstReign: "Jun 2016", notable: "First SmackDown Women's Champion" }],
    totalTitleReigns: 7,`,
`championships: [{ title: "Raw Women's Championship", count: 3, reigns: [{ date: "Apr 2019", notes: "Won at WrestleMania 35 main event triple threat" }, { date: "Aug 2021", notes: "Won from Bianca Belair at SummerSlam in 26 seconds" }, { date: "Apr 2023", notes: "Third Raw Women's reign" }], firstReign: "Oct 2018", notable: "WM35 win in a triple threat was her crowning moment" }, { title: "SmackDown Women's Championship", count: 4, reigns: [{ date: "Sep 2016", notes: "Won inaugural SmackDown Women's title at Backlash" }, { date: "Oct 2018", notes: "Won at Super Show-Down" }, { date: "Dec 2018", notes: "Third SD Women's reign" }, { date: "Nov 2021", notes: "Fourth SD Women's reign" }], firstReign: "Jun 2016", notable: "First SmackDown Women's Champion" }],
    totalTitleReigns: 7,`
],

// ID 102 - Charlotte Flair
[
`championships: [{ title: "Raw Women's Championship", count: 9, firstReign: "Jul 2016", notable: "9 total women's title reigns — rivals her father's record" }, { title: "SmackDown Women's Championship", count: 5, firstReign: "Nov 2017", notable: "Multiple SD Women's title reigns" }, { title: "NXT Women's Championship", count: 3, firstReign: "Feb 2015", notable: "NXT Women's Champion — NXT roots" }],
    totalTitleReigns: 17,`,
`championships: [{ title: "Raw Women's Championship", count: 9, reigns: [{ date: "Apr 2016", notes: "Won inaugural title at WrestleMania 32" }, { date: "Jun 2016", notes: "Second reign" }, { date: "Sep 2016", notes: "Third reign" }, { date: "Nov 2016", notes: "Fourth reign from Sasha Banks" }, { date: "Feb 2017", notes: "Fifth reign" }, { date: "Nov 2020", notes: "Sixth reign" }, { date: "Jul 2021", notes: "Seventh reign" }, { date: "Oct 2021", notes: "Eighth reign from Nikki A.S.H." }, { date: "Mar 2023", notes: "Ninth reign" }], firstReign: "Jul 2016", notable: "9 total women's title reigns — rivals her father's record" }, { title: "SmackDown Women's Championship", count: 5, reigns: [{ date: "Nov 2017", notes: "Won at Survivor Series" }, { date: "Apr 2019", notes: "Won at WrestleMania 35" }, { date: "Oct 2019", notes: "Third SD reign from Bayley" }, { date: "Dec 2020", notes: "Won at TLC" }, { date: "Apr 2022", notes: "Won at WrestleMania 38" }], firstReign: "Nov 2017", notable: "Multiple SD Women's title reigns" }, { title: "NXT Women's Championship", count: 3, reigns: [{ date: "Feb 2015", notes: "Won NXT Women's title" }, { date: "Mar 2020", notes: "Won in NXT return" }, { date: "Apr 2020", notes: "Third NXT reign" }], firstReign: "Feb 2015", notable: "NXT Women's Champion — NXT roots" }],
    totalTitleReigns: 17,`
],

// ID 103 - Sasha Banks
[
`championships: [{ title: "Raw Women's Championship", count: 4, firstReign: "Jul 2016", notable: "Multiple Raw title reigns with excellent matches" }, { title: "SmackDown Women's Championship", count: 2, firstReign: "Oct 2020", notable: "SD title reigns" }, { title: "Women's Tag Team Championship", count: 3, firstReign: "Feb 2019", notable: "Three tag reigns with various partners" }],
    totalTitleReigns: 9,`,
`championships: [{ title: "Raw Women's Championship", count: 4, reigns: [{ date: "Jul 2016", notes: "Won from Charlotte Flair on Raw" }, { date: "Oct 2016", notes: "Second reign from Charlotte" }, { date: "Nov 2016", notes: "Third reign" }, { date: "Feb 2017", notes: "Fourth reign from Charlotte" }], firstReign: "Jul 2016", notable: "Multiple Raw title reigns with excellent matches" }, { title: "SmackDown Women's Championship", count: 2, reigns: [{ date: "Oct 2020", notes: "Won from Bayley at Hell in a Cell" }, { date: "Feb 2021", notes: "Second SD reign" }], firstReign: "Oct 2020", notable: "SD title reigns" }, { title: "Women's Tag Team Championship", count: 3, reigns: [{ date: "Feb 2019", notes: "Won inaugural titles with Bayley at Elimination Chamber" }, { date: "Oct 2020", notes: "Second reign with Bayley" }, { date: "Jan 2022", notes: "Won with Naomi" }], firstReign: "Feb 2019", notable: "Three tag reigns with various partners" }],
    totalTitleReigns: 9,`
],

// ID 104 - Cesaro
[
`championships: [{ title: "United States Championship", count: 1, firstReign: "Mar 2014", notable: "Won at WM30 as the Andre Battle Royal winner" }, { title: "Tag Team Championship", count: 4, firstReign: "Nov 2016", notable: "The Bar with Sheamus was legitimately excellent" }],
    totalTitleReigns: 5,`,
`championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Jul 2012", notes: "Won from Santino Marella on SmackDown" }], firstReign: "Mar 2014", notable: "Won at WM30 as the Andre Battle Royal winner" }, { title: "Tag Team Championship", count: 4, reigns: [{ date: "Nov 2016", notes: "Won Raw Tag Titles with Sheamus as The Bar" }, { date: "Feb 2018", notes: "Second Bar reign" }, { date: "Sep 2018", notes: "Third Bar reign" }, { date: "Dec 2018", notes: "Fourth Bar reign" }], firstReign: "Nov 2016", notable: "The Bar with Sheamus was legitimately excellent" }],
    totalTitleReigns: 5,`
],

// ID 105 - The New Day (Big E & Xavier Woods)
[
`championships: [{ title: "WWE Tag Team Championship", count: 11, firstReign: "Aug 2015", notable: "Most tag title reigns in history as a trio" }, { title: "WWE Championship", count: 1, firstReign: "Nov 2020", notable: "Big E wins the WWE title in 2021 — a great moment" }],
    totalTitleReigns: 12,`,
`championships: [{ title: "WWE Tag Team Championship", count: 11, reigns: [{ date: "Aug 2015", notes: "Won first tag titles — began historic run" }, { date: "Mar 2016", notes: "Second reign" }, { date: "May 2016", notes: "Third reign" }, { date: "Sep 2016", notes: "Fourth reign — record 483-day reign" }, { date: "Jun 2017", notes: "Fifth reign" }, { date: "Jan 2018", notes: "Sixth reign" }, { date: "Jun 2019", notes: "Seventh reign" }, { date: "Aug 2020", notes: "Eighth reign" }, { date: "Nov 2020", notes: "Ninth reign" }, { date: "Jan 2022", notes: "Tenth reign" }, { date: "May 2022", notes: "Eleventh reign" }], firstReign: "Aug 2015", notable: "Most tag title reigns in history as a trio" }, { title: "WWE Championship", count: 1, reigns: [{ date: "Sep 2021", notes: "Big E cashed in MITB on Bobby Lashley on Raw" }], firstReign: "Nov 2020", notable: "Big E wins the WWE title in 2021 — a great moment" }],
    totalTitleReigns: 12,`
],

// ID 106 - Rusev
[
`championships: [{ title: "United States Championship", count: 3, firstReign: "Dec 2014", notable: "Three US title reigns" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "United States Championship", count: 3, reigns: [{ date: "Nov 2014", notes: "Won from Sheamus on Raw" }, { date: "Jul 2017", notes: "Won on SmackDown" }, { date: "Dec 2017", notes: "Third US reign" }], firstReign: "Dec 2014", notable: "Three US title reigns" }],
    totalTitleReigns: 3,`
],

// ID 107 - Wade Barrett
[
`championships: [{ title: "Intercontinental Championship", count: 5, firstReign: "Apr 2012", notable: "5 IC reigns — reliable upper-card performer" }],
    totalTitleReigns: 5,`,
`championships: [{ title: "Intercontinental Championship", count: 5, reigns: [{ date: "Apr 2012", notes: "Won from Big Show on SmackDown" }, { date: "Dec 2012", notes: "Second IC reign" }, { date: "Jun 2014", notes: "Third IC reign as Bad News Barrett" }, { date: "Nov 2014", notes: "Fourth IC reign" }, { date: "Apr 2015", notes: "Fifth IC reign — King Barrett" }], firstReign: "Apr 2012", notable: "5 IC reigns — reliable upper-card performer" }],
    totalTitleReigns: 5,`
],

// ID 108 - Alberto Del Rio
[
`championships: [{ title: "WWE Championship", count: 2, firstReign: "Oct 2011", notable: "MITB cash-in wins" }, { title: "World Heavyweight Championship", count: 3, firstReign: "Jan 2011", notable: "Three WHC reigns" }, { title: "United States Championship", count: 1, firstReign: "May 2016", notable: "Brief return US title reign" }],
    totalTitleReigns: 6,`,
`championships: [{ title: "WWE Championship", count: 2, reigns: [{ date: "Oct 2011", notes: "Cashed in MITB on CM Punk at SummerSlam" }, { date: "Nov 2011", notes: "Won from CM Punk at Vengeance" }], firstReign: "Oct 2011", notable: "MITB cash-in wins" }, { title: "World Heavyweight Championship", count: 3, reigns: [{ date: "Aug 2011", notes: "Cashed in MITB on CM Punk at SummerSlam" }, { date: "Dec 2012", notes: "Won from Big Show at TLC" }, { date: "Jun 2013", notes: "Won from Dolph Ziggler on SmackDown after concussion angle" }], firstReign: "Jan 2011", notable: "Three WHC reigns" }, { title: "United States Championship", count: 1, reigns: [{ date: "Oct 2015", notes: "Won from John Cena on return at Hell in a Cell" }], firstReign: "May 2016", notable: "Brief return US title reign" }],
    totalTitleReigns: 6,`
],

// ID 109 - Goldberg
[
`championships: [{ title: "World Heavyweight Championship", count: 1, firstReign: "Mar 2004", notable: "Brief WHC reign in his original WWE run" }, { title: "Universal Championship", count: 1, firstReign: "Feb 2017", notable: "Return run Universal title" }],
    totalTitleReigns: 2, hallOfFame: 2018,`,
`championships: [{ title: "World Heavyweight Championship", count: 1, reigns: [{ date: "Sep 2003", notes: "Won from Triple H at Unforgiven" }], firstReign: "Mar 2004", notable: "Brief WHC reign in his original WWE run" }, { title: "Universal Championship", count: 1, reigns: [{ date: "Mar 2017", notes: "Won from Kevin Owens at Fastlane" }], firstReign: "Feb 2017", notable: "Return run Universal title" }],
    totalTitleReigns: 2, hallOfFame: 2018,`
],

// ID 110 - Ric Flair
[
`championships: [{ title: "World Heavyweight Championship", count: 1, firstReign: "Sep 2002", notable: "Won the new WHC in the tournament — 16-time world champ record at the time" }],
    totalTitleReigns: 1, hallOfFame: 2008,`,
`championships: [{ title: "World Heavyweight Championship", count: 1, reigns: [{ date: "Sep 2002", notes: "Won triple threat on Raw for inaugural WHC" }], firstReign: "Sep 2002", notable: "Won the new WHC in the tournament — 16-time world champ record at the time" }],
    totalTitleReigns: 1, hallOfFame: 2008,`
],

// ID 111 - Lance Storm
[
`championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Jul 2002", notable: "Brief IC reign" }, { title: "Tag Team Championship", count: 1, firstReign: "Sep 2002", notable: "Un-Americans with William Regal" }],
    totalTitleReigns: 2, hallOfFame: 2009,`,
`championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Jul 2002", notes: "Won IC title on Raw" }], firstReign: "Jul 2002", notable: "Brief IC reign" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Sep 2002", notes: "Won with Christian as the Un-Americans" }], firstReign: "Sep 2002", notable: "Un-Americans with William Regal" }],
    totalTitleReigns: 2, hallOfFame: 2009,`
],

// ID 112 - Tajiri
[
`championships: [{ title: "Cruiserweight Championship", count: 2, firstReign: "Sep 2003", notable: "Two Cruiserweight title reigns" }, { title: "Tag Team Championship", count: 1, firstReign: "2004", notable: "Brief tag reign with William Regal — great TV pairing" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "Cruiserweight Championship", count: 2, reigns: [{ date: "Sep 2003", notes: "Won Cruiserweight title on SmackDown" }, { date: "Feb 2004", notes: "Second Cruiserweight reign" }], firstReign: "Sep 2003", notable: "Two Cruiserweight title reigns" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Dec 2004", notes: "Won with William Regal on Raw" }], firstReign: "2004", notable: "Brief tag reign with William Regal — great TV pairing" }],
    totalTitleReigns: 3,`
],

// ID 113 - Funaki
[
`championships: [{ title: "Cruiserweight Championship", count: 1, firstReign: "Oct 2006", notable: "Won the Cruiserweight title!" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Oct 2006", notes: "Won Cruiserweight title on SmackDown — surprise victory" }], firstReign: "Oct 2006", notable: "Won the Cruiserweight title!" }],
    totalTitleReigns: 1,`
],

// ID 118 - Faarooq
[
`championships: [{ title: "WWF Tag Team Championship", count: 2, firstReign: "Mar 1999", notable: "APA tag title reigns" }],
    totalTitleReigns: 2, hallOfFame: 2012,`,
`championships: [{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "May 1999", notes: "Won with Bradshaw as the APA" }, { date: "Jul 2001", notes: "Second APA reign" }], firstReign: "Mar 1999", notable: "APA tag title reigns" }],
    totalTitleReigns: 2, hallOfFame: 2012,`
],

// ID 120 - Raven
[
`championships: [{ title: "Hardcore Championship", count: 27, firstReign: "Jun 2001", notable: "27 Hardcore title reigns in the 24/7 era — mostly brief but he somehow has the record" }],
    totalTitleReigns: 27,`,
`championships: [{ title: "Hardcore Championship", count: 27, reigns: [{ date: "Jun 2001", notes: "Won first Hardcore title — began revolving door 24/7 era reigns" }], firstReign: "Jun 2001", notable: "27 Hardcore title reigns in the 24/7 era — mostly brief but he somehow has the record" }],
    totalTitleReigns: 27,`
],

// ID 122 - The Godwinns
[
`championships: [{ title: "WWF Tag Team Championship", count: 2, firstReign: "May 1996", notable: "Two tag title reigns — more than you'd expect from pig farmers" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "May 1996", notes: "Won WWF Tag Titles on Raw" }, { date: "Sep 1997", notes: "Second tag title reign" }], firstReign: "May 1996", notable: "Two tag title reigns — more than you'd expect from pig farmers" }],
    totalTitleReigns: 2,`
],

// ID 123 - The Headbangers
[
`championships: [{ title: "WWF Tag Team Championship", count: 1, firstReign: "Sep 1997", notable: "Won on a pay-per-view in a surprising moment" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "WWF Tag Team Championship", count: 1, reigns: [{ date: "Sep 1997", notes: "Won at In Your House: Ground Zero" }], firstReign: "Sep 1997", notable: "Won on a pay-per-view in a surprising moment" }],
    totalTitleReigns: 1,`
],

// ID 124 - Ivory
[
`championships: [{ title: "Women's Championship", count: 3, firstReign: "Sep 1999", notable: "Three Women's title reigns" }],
    totalTitleReigns: 3, hallOfFame: 2014,`,
`championships: [{ title: "Women's Championship", count: 3, reigns: [{ date: "Jun 1999", notes: "Won Women's Championship on Raw" }, { date: "Oct 1999", notes: "Second Women's title reign" }, { date: "Nov 2000", notes: "Third reign as Right to Censor member" }], firstReign: "Sep 1999", notable: "Three Women's title reigns" }],
    totalTitleReigns: 3, hallOfFame: 2014,`
],

// ID 125 - Hurricane
[
`championships: [{ title: "Cruiserweight Championship", count: 3, firstReign: "Dec 2001", notable: "Three CW title reigns — the superhero version" }, { title: "Tag Team Championship", count: 1, firstReign: "Mar 2003", notable: "Won with Rosey as the S.H.I.T. (Super Hero In Training)" }],
    totalTitleReigns: 4,`,
`championships: [{ title: "Cruiserweight Championship", count: 3, reigns: [{ date: "Dec 2001", notes: "Won Cruiserweight title on SmackDown" }, { date: "Mar 2002", notes: "Second CW reign" }, { date: "Oct 2002", notes: "Third CW reign" }], firstReign: "Dec 2001", notable: "Three CW title reigns — the superhero version" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Feb 2005", notes: "Won World Tag Team Titles with Rosey" }], firstReign: "Mar 2003", notable: "Won with Rosey as the S.H.I.T. (Super Hero In Training)" }],
    totalTitleReigns: 4,`
],

// ID 126 - Rhyno
[
`championships: [{ title: "ECW Championship", count: 1, firstReign: "Oct 2000", notable: "ECW run before WWE arrival" }, { title: "Hardcore Championship", count: 1, firstReign: "2001", notable: "Hardcore division appearances" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "ECW Championship", count: 1, reigns: [{ date: "Apr 2001", notes: "Won ECW Championship during final ECW days" }], firstReign: "Oct 2000", notable: "ECW run before WWE arrival" }, { title: "Hardcore Championship", count: 1, reigns: [{ date: "Jul 2001", notes: "Won Hardcore title during InVasion" }], firstReign: "2001", notable: "Hardcore division appearances" }],
    totalTitleReigns: 2,`
],

// ID 127 - John Morrison
[
`championships: [{ title: "Intercontinental Championship", count: 3, firstReign: "Apr 2007", notable: "Three IC reigns" }, { title: "ECW Championship", count: 1, firstReign: "Dec 2007", notable: "ECW title reign" }, { title: "Tag Team Championship", count: 6, firstReign: "Aug 2005", notable: "Multiple tag runs including with The Miz" }],
    totalTitleReigns: 10,`,
`championships: [{ title: "Intercontinental Championship", count: 3, reigns: [{ date: "Apr 2007", notes: "Won IC title on Raw as Johnny Nitro" }, { date: "Jun 2008", notes: "Second IC reign" }, { date: "Sep 2009", notes: "Third IC reign" }], firstReign: "Apr 2007", notable: "Three IC reigns" }, { title: "ECW Championship", count: 1, reigns: [{ date: "Sep 2007", notes: "Won ECW Championship" }], firstReign: "Dec 2007", notable: "ECW title reign" }, { title: "Tag Team Championship", count: 6, reigns: [{ date: "Aug 2005", notes: "Won MNM tag titles with Joey Mercury" }, { date: "Jan 2006", notes: "Second MNM reign" }, { date: "Jun 2007", notes: "Won with The Miz" }, { date: "Aug 2007", notes: "Second reign with Miz" }, { date: "Dec 2007", notes: "Third reign with Miz" }, { date: "Dec 2008", notes: "Fourth reign with Miz" }], firstReign: "Aug 2005", notable: "Multiple tag runs including with The Miz" }],
    totalTitleReigns: 10,`
],

// ID 128 - Cody Rhodes
[
`championships: [{ title: "WWE Championship", count: 1, firstReign: "Apr 2024", notable: "WM40 win — completing the story" }, { title: "Intercontinental Championship", count: 3, firstReign: "Jul 2009", notable: "Three IC reigns" }, { title: "Tag Team Championship", count: 2, firstReign: "Nov 2008", notable: "Legacy tag team" }],
    totalTitleReigns: 6,`,
`championships: [{ title: "WWE Championship", count: 1, reigns: [{ date: "Apr 2024", notes: "Won from Roman Reigns at WrestleMania 40 — finished the story" }], firstReign: "Apr 2024", notable: "WM40 win — completing the story" }, { title: "Intercontinental Championship", count: 3, reigns: [{ date: "Aug 2009", notes: "Won IC title on Raw" }, { date: "Jun 2011", notes: "Won from Ezekiel Jackson on SmackDown" }, { date: "Aug 2011", notes: "Third IC reign" }], firstReign: "Jul 2009", notable: "Three IC reigns" }, { title: "Tag Team Championship", count: 2, reigns: [{ date: "Jun 2009", notes: "Won World Tag Titles with Ted DiBiase Jr. as Legacy" }, { date: "Sep 2010", notes: "Won with Drew McIntyre" }], firstReign: "Nov 2008", notable: "Legacy tag team" }],
    totalTitleReigns: 6,`
],

// ID 129 - The Usos
[
`championships: [{ title: "WWE/SmackDown Tag Team Championship", count: 13, firstReign: "Jun 2013", notable: "Most decorated tag team in SmackDown history" }],
    totalTitleReigns: 13,`,
`championships: [{ title: "WWE/SmackDown Tag Team Championship", count: 13, reigns: [{ date: "Mar 2014", notes: "Won first tag titles on Raw" }, { date: "Jun 2014", notes: "Second reign" }, { date: "Jul 2016", notes: "Won SmackDown Tag Titles" }, { date: "Jan 2017", notes: "Fourth reign" }, { date: "Aug 2017", notes: "Fifth reign" }, { date: "Nov 2017", notes: "Sixth reign" }, { date: "Jul 2018", notes: "Seventh reign" }, { date: "Mar 2019", notes: "Eighth reign" }, { date: "Jan 2020", notes: "Ninth reign" }, { date: "Jul 2021", notes: "Tenth reign — Bloodline era" }, { date: "May 2022", notes: "Won Raw Tag Titles — dual tag champs" }, { date: "Sep 2022", notes: "Twelfth reign" }, { date: "Oct 2022", notes: "Thirteenth reign" }], firstReign: "Jun 2013", notable: "Most decorated tag team in SmackDown history" }],
    totalTitleReigns: 13,`
],

// ID 130 - Big E
[
`championships: [{ title: "WWE Championship", count: 1, firstReign: "Sep 2021", notable: "Raw cash-in of MITB briefcase — the crowd was electric" }, { title: "Intercontinental Championship", count: 3, firstReign: "Nov 2013", notable: "Three IC reigns including a strong solo run" }, { title: "Tag Team Championship", count: 11, firstReign: "Aug 2015", notable: "New Day tag title run" }],
    totalTitleReigns: 15,`,
`championships: [{ title: "WWE Championship", count: 1, reigns: [{ date: "Sep 2021", notes: "Cashed in MITB on Bobby Lashley on Raw" }], firstReign: "Sep 2021", notable: "Raw cash-in of MITB briefcase — the crowd was electric" }, { title: "Intercontinental Championship", count: 3, reigns: [{ date: "Nov 2013", notes: "Won from Curtis Axel on Raw" }, { date: "Dec 2020", notes: "Won Lumberjack match on SmackDown" }, { date: "Mar 2021", notes: "Third IC reign" }], firstReign: "Nov 2013", notable: "Three IC reigns including a strong solo run" }, { title: "Tag Team Championship", count: 11, reigns: [{ date: "Aug 2015", notes: "Won first tag titles as New Day" }, { date: "Mar 2016", notes: "Second New Day reign" }, { date: "May 2016", notes: "Third reign" }, { date: "Sep 2016", notes: "Fourth reign — record-breaking 483 days" }, { date: "Jun 2017", notes: "Fifth reign" }, { date: "Jan 2018", notes: "Sixth reign" }, { date: "Jun 2019", notes: "Seventh reign" }, { date: "Aug 2020", notes: "Eighth reign" }, { date: "Nov 2020", notes: "Ninth reign" }, { date: "Jan 2022", notes: "Tenth reign" }, { date: "May 2022", notes: "Eleventh reign" }], firstReign: "Aug 2015", notable: "New Day tag title run" }],
    totalTitleReigns: 15,`
],

// ID 131 - Bobby Lashley
[
`championships: [{ title: "WWE Championship", count: 2, firstReign: "Mar 2021", notable: "The Hurt Business era was his best character work" }, { title: "ECW Championship", count: 1, firstReign: "Dec 2006", notable: "ECW title in his first run" }, { title: "United States Championship", count: 4, firstReign: "Mar 2019", notable: "Four US title reigns" }],
    totalTitleReigns: 7,`,
`championships: [{ title: "WWE Championship", count: 2, reigns: [{ date: "Mar 2021", notes: "Won from The Miz after Elimination Chamber on Raw" }, { date: "Jan 2022", notes: "Won from Brock Lesnar and others at Royal Rumble" }], firstReign: "Mar 2021", notable: "The Hurt Business era was his best character work" }, { title: "ECW Championship", count: 1, reigns: [{ date: "Dec 2006", notes: "Won ECW Championship at December to Dismember" }], firstReign: "Dec 2006", notable: "ECW title in his first run" }, { title: "United States Championship", count: 4, reigns: [{ date: "Mar 2019", notes: "Won from R-Truth" }, { date: "Jul 2020", notes: "Won from Apollo Crews" }, { date: "Sep 2020", notes: "Third US reign" }, { date: "Dec 2020", notes: "Fourth US reign" }], firstReign: "Mar 2019", notable: "Four US title reigns" }],
    totalTitleReigns: 7,`
],

// ID 132 - Samoa Joe
[
`championships: [{ title: "United States Championship", count: 2, firstReign: "Jul 2017", notable: "Two US title reigns" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "United States Championship", count: 2, reigns: [{ date: "Mar 2018", notes: "Won from Bobby Roode on SmackDown" }, { date: "Jun 2019", notes: "Won at Stomping Grounds from Rey Mysterio" }], firstReign: "Jul 2017", notable: "Two US title reigns" }],
    totalTitleReigns: 2,`
],

// ID 133 - Bianca Belair
[
`championships: [{ title: "Raw Women's Championship", count: 2, firstReign: "Apr 2021", notable: "WM37 win over Sasha Banks — instant classic" }, { title: "SmackDown Women's Championship", count: 1, firstReign: "Apr 2022", notable: "SD Women's title run" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "Raw Women's Championship", count: 2, reigns: [{ date: "Apr 2022", notes: "Won from Becky Lynch at WrestleMania 38" }, { date: "Nov 2022", notes: "Second reign" }], firstReign: "Apr 2021", notable: "WM37 win over Sasha Banks — instant classic" }, { title: "SmackDown Women's Championship", count: 1, reigns: [{ date: "Apr 2021", notes: "Won from Sasha Banks at WrestleMania 37 — historic main event" }], firstReign: "Apr 2022", notable: "SD Women's title run" }],
    totalTitleReigns: 3,`
],

// ID 134 - Natalya
[
`championships: [{ title: "Divas/Women's Championship", count: 2, firstReign: "Nov 2010", notable: "Two Women's title reigns" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "Divas/Women's Championship", count: 2, reigns: [{ date: "Nov 2010", notes: "Won Divas Championship from LayCool at Survivor Series" }, { date: "Apr 2017", notes: "Won SmackDown Women's title on SmackDown" }], firstReign: "Nov 2010", notable: "Two Women's title reigns" }],
    totalTitleReigns: 2,`
],

// ID 135 - Bayley
[
`championships: [{ title: "Raw Women's Championship", count: 1, firstReign: "Feb 2017", notable: "Won in her first-ever Raw match" }, { title: "SmackDown Women's Championship", count: 3, firstReign: "Apr 2019", notable: "Three SD Women's reigns including dominant heel run" }, { title: "Women's Tag Team Championship", count: 4, firstReign: "Feb 2019", notable: "Multiple tag reigns with Sasha Banks" }],
    totalTitleReigns: 8,`,
`championships: [{ title: "Raw Women's Championship", count: 1, reigns: [{ date: "Feb 2017", notes: "Won from Charlotte Flair on Raw" }], firstReign: "Feb 2017", notable: "Won in her first-ever Raw match" }, { title: "SmackDown Women's Championship", count: 3, reigns: [{ date: "Jun 2019", notes: "Cashed in MITB on Charlotte Flair" }, { date: "Oct 2019", notes: "Won at Hell in a Cell from Charlotte" }, { date: "Nov 2019", notes: "Third SD Women's reign — held for 380 days as heel" }], firstReign: "Apr 2019", notable: "Three SD Women's reigns including dominant heel run" }, { title: "Women's Tag Team Championship", count: 4, reigns: [{ date: "Feb 2019", notes: "Won inaugural titles with Sasha Banks at Elimination Chamber" }, { date: "Jun 2020", notes: "Second reign with Sasha Banks" }, { date: "Oct 2020", notes: "Third reign" }, { date: "May 2023", notes: "Won with IYO SKY as Damage CTRL" }], firstReign: "Feb 2019", notable: "Multiple tag reigns with Sasha Banks" }],
    totalTitleReigns: 8,`
],

// ID 136 - Bobby Roode
[
`championships: [{ title: "United States Championship", count: 1, firstReign: "Nov 2017", notable: "Brief US reign" }, { title: "Tag Team Championship", count: 1, firstReign: "Jul 2018", notable: "With Chad Gable" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "United States Championship", count: 1, reigns: [{ date: "Nov 2017", notes: "Won US title from Dolph Ziggler on SmackDown" }], firstReign: "Nov 2017", notable: "Brief US reign" }, { title: "Tag Team Championship", count: 1, reigns: [{ date: "Sep 2019", notes: "Won Raw Tag Titles with Dolph Ziggler" }], firstReign: "Jul 2018", notable: "With Chad Gable" }],
    totalTitleReigns: 2,`
],

// ID 138 - Theory (Austin Theory)
[
`championships: [{ title: "United States Championship", count: 3, firstReign: "Nov 2022", notable: "Three US title reigns" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "United States Championship", count: 3, reigns: [{ date: "Apr 2022", notes: "Won from Finn Balor on Raw" }, { date: "Nov 2022", notes: "Cashed in MITB on Seth Rollins" }, { date: "Jun 2023", notes: "Third US reign" }], firstReign: "Nov 2022", notable: "Three US title reigns" }],
    totalTitleReigns: 3,`
],

// ID 139 - Gunther
[
`championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "May 2022", notable: "666-day reign — the most dominant IC title run in modern history" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Jun 2022", notes: "Won from Ricochet on SmackDown — began 666-day reign" }], firstReign: "May 2022", notable: "666-day reign — the most dominant IC title run in modern history" }],
    totalTitleReigns: 1,`
],

// ID 140 - Rhea Ripley
[
`championships: [{ title: "Raw Women's Championship", count: 2, firstReign: "Apr 2023", notable: "Dominant 380+ day reign" }, { title: "SmackDown Women's Championship", count: 1, firstReign: "Jan 2021", notable: "SD Women's title run" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "Raw Women's Championship", count: 2, reigns: [{ date: "Apr 2023", notes: "Won from Charlotte Flair at WrestleMania 39 — began dominant reign" }, { date: "Jan 2025", notes: "Second Raw Women's reign" }], firstReign: "Apr 2023", notable: "Dominant 380+ day reign" }, { title: "SmackDown Women's Championship", count: 1, reigns: [{ date: "Nov 2023", notes: "Won Women's World Championship on SmackDown" }], firstReign: "Jan 2021", notable: "SD Women's title run" }],
    totalTitleReigns: 3,`
],

// ID 141 - Hacksaw Jim Duggan
[
`championships: [{ title: "Hardcore Championship", count: 1, firstReign: "Apr 2000", notable: "Won the Hardcore title at 56 years old in the 24/7 era" }],
    totalTitleReigns: 1, hallOfFame: 1994,`,
`championships: [{ title: "Hardcore Championship", count: 1, reigns: [{ date: "Apr 2000", notes: "Won Hardcore title in the 24/7 era" }], firstReign: "Apr 2000", notable: "Won the Hardcore title at 56 years old in the 24/7 era" }],
    totalTitleReigns: 1, hallOfFame: 1994,`
],

// ID 142 - Nikolai Volkoff
[
`championships: [{ title: "WWF Tag Team Championship", count: 1, firstReign: "Mar 1985", notable: "Won with Iron Sheik at WrestleMania 1" }],
    totalTitleReigns: 1, hallOfFame: 2005,`,
`championships: [{ title: "WWF Tag Team Championship", count: 1, reigns: [{ date: "Mar 1985", notes: "Won with Iron Sheik at WrestleMania 1" }], firstReign: "Mar 1985", notable: "Won with Iron Sheik at WrestleMania 1" }],
    totalTitleReigns: 1, hallOfFame: 2005,`
],

// ID 148 - The Nasty Boys
[
`championships: [{ title: "WWF Tag Team Championship", count: 1, firstReign: "Mar 1991", notable: "Won at WM7 from Hart Foundation" }],
    totalTitleReigns: 1, hallOfFame: 2018,`,
`championships: [{ title: "WWF Tag Team Championship", count: 1, reigns: [{ date: "Mar 1991", notes: "Won from Hart Foundation at WrestleMania VII" }], firstReign: "Mar 1991", notable: "Won at WM7 from Hart Foundation" }],
    totalTitleReigns: 1, hallOfFame: 2018,`
],

// ID 149 - Legion of Doom / Road Warriors
[
`championships: [{ title: "WWF Tag Team Championship", count: 2, firstReign: "Aug 1991", notable: "Their title win was celebrated as long overdue — they were the standard everyone was measured against" }],
    totalTitleReigns: 2, hallOfFame: 1992,`,
`championships: [{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "Aug 1991", notes: "Won from Nasty Boys at SummerSlam" }, { date: "Oct 1997", notes: "Second reign — LOD 2000 era" }], firstReign: "Aug 1991", notable: "Their title win was celebrated as long overdue — they were the standard everyone was measured against" }],
    totalTitleReigns: 2, hallOfFame: 1992,`
],

// ID 151 - Natural Disasters
[
`championships: [{ title: "WWF Tag Team Championship", count: 1, firstReign: "Jul 1992", notable: "Won the titles from Money Inc. (DiBiase & IRS)" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "WWF Tag Team Championship", count: 1, reigns: [{ date: "Jul 1992", notes: "Won from Money Inc. on Coliseum Video" }], firstReign: "Jul 1992", notable: "Won the titles from Money Inc. (DiBiase & IRS)" }],
    totalTitleReigns: 1,`
],

// ID 152 - Money Inc.
[
`championships: [{ title: "WWF Tag Team Championship", count: 2, firstReign: "Feb 1992", notable: "Dominant heel tag team of 1992-93" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "WWF Tag Team Championship", count: 2, reigns: [{ date: "Feb 1992", notes: "Won from Legion of Doom on Saturday Night's Main Event" }, { date: "Oct 1992", notes: "Regained from Natural Disasters" }], firstReign: "Feb 1992", notable: "Dominant heel tag team of 1992-93" }],
    totalTitleReigns: 2,`
],

// ID 153 - Tito Santana
[
`championships: [{ title: "Intercontinental Championship", count: 2, firstReign: "Feb 1984", notable: "Two IC title reigns — the classic 80s working man champion" }],
    totalTitleReigns: 2, hallOfFame: 2004,`,
`championships: [{ title: "Intercontinental Championship", count: 2, reigns: [{ date: "Feb 1984", notes: "Won from Don Muraco" }, { date: "Jul 1984", notes: "Regained from Greg Valentine in a cage match" }], firstReign: "Feb 1984", notable: "Two IC title reigns — the classic 80s working man champion" }],
    totalTitleReigns: 2, hallOfFame: 2004,`
],

// ID 154 - Greg Valentine
[
`championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Sep 1984", notable: "Long IC reign as a dominant heel" }, { title: "WWF Tag Team Championship", count: 1, firstReign: "Aug 1983", notable: "With Brutus Beefcake" }],
    totalTitleReigns: 2, hallOfFame: 2004,`,
`championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Sep 1984", notes: "Won from Tito Santana — held for 9 months" }], firstReign: "Sep 1984", notable: "Long IC reign as a dominant heel" }, { title: "WWF Tag Team Championship", count: 1, reigns: [{ date: "Aug 1985", notes: "Won with Brutus Beefcake as the Dream Team" }], firstReign: "Aug 1983", notable: "With Brutus Beefcake" }],
    totalTitleReigns: 2, hallOfFame: 2004,`
],

// ID 156 - Marty Jannetty
[
`championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "May 1993", notable: "Won the IC title — his career peak as a solo act" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "May 1993", notes: "Won from Shawn Michaels on Raw — a classic rematch" }], firstReign: "May 1993", notable: "Won the IC title — his career peak as a solo act" }],
    totalTitleReigns: 1,`
],

// ID 158 - Smoking Gunns
[
`championships: [{ title: "WWF Tag Team Championship", count: 3, firstReign: "Jun 1993", notable: "Three tag title reigns — solid New Generation tag team" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "WWF Tag Team Championship", count: 3, reigns: [{ date: "Jan 1995", notes: "Won first tag titles on Raw" }, { date: "Sep 1995", notes: "Second reign" }, { date: "May 1996", notes: "Third reign" }], firstReign: "Jun 1993", notable: "Three tag title reigns — solid New Generation tag team" }],
    totalTitleReigns: 3,`
],

// ID 159 - The Headshrinkers
[
`championships: [{ title: "WWF Tag Team Championship", count: 1, firstReign: "Apr 1994", notable: "One tag title reign" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "WWF Tag Team Championship", count: 1, reigns: [{ date: "Apr 1994", notes: "Won from The Quebecers on Raw" }], firstReign: "Apr 1994", notable: "One tag title reign" }],
    totalTitleReigns: 1,`
],

// ID 162 - Shane McMahon
[
`championships: [{ title: "European Championship", count: 1, firstReign: "Apr 1999", notable: "Won from X-Pac in a chaotic match involving corporate interference" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "European Championship", count: 1, reigns: [{ date: "Feb 1999", notes: "Won from X-Pac at St. Valentine's Day Massacre with corporate interference" }], firstReign: "Apr 1999", notable: "Won from X-Pac in a chaotic match involving corporate interference" }],
    totalTitleReigns: 1,`
],

// ID 164 - Mean Street Posse
[
`championships: [{ title: "Hardcore Championship", count: 3, firstReign: "Mar 1999", notable: "Three combined Hardcore title reigns between the untrained posse members" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "Hardcore Championship", count: 3, reigns: [{ date: "Mar 1999", notes: "Pete Gas won Hardcore title in 24/7 chaos" }, { date: "Oct 1999", notes: "Rodney won Hardcore title" }, { date: "Nov 1999", notes: "Joey Abs won Hardcore title briefly" }], firstReign: "Mar 1999", notable: "Three combined Hardcore title reigns between the untrained posse members" }],
    totalTitleReigns: 3,`
],

// ID 166 - Stephanie McMahon
[
`championships: [{ title: "Women's Championship", count: 1, firstReign: "Oct 1999", notable: "Won the Women's title during a storyline — controversial" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "Women's Championship", count: 1, reigns: [{ date: "Mar 2000", notes: "Won Women's Championship in storyline" }], firstReign: "Oct 1999", notable: "Won the Women's title during a storyline — controversial" }],
    totalTitleReigns: 1,`
],

// ID 168 - Jerry Lawler
[
`championships: [{ title: "Intercontinental Championship", count: 1, firstReign: "Mar 1996", notable: "Brief IC reign" }],
    totalTitleReigns: 1, hallOfFame: 2007,`,
`championships: [{ title: "Intercontinental Championship", count: 1, reigns: [{ date: "Feb 1996", notes: "Won from Razor Ramon on Raw (never officially recognized)" }], firstReign: "Mar 1996", notable: "Brief IC reign" }],
    totalTitleReigns: 1, hallOfFame: 2007,`
],

// ID 172 - Paul London
[
`championships: [{ title: "WWE Tag Team Championship", count: 2, firstReign: "May 2006", notable: "Long dominant tag title reign with Brian Kendrick — over a year" }, { title: "Cruiserweight Championship", count: 1, firstReign: "Jun 2004", notable: "Cruiserweight title won on SmackDown" }],
    totalTitleReigns: 3,`,
`championships: [{ title: "WWE Tag Team Championship", count: 2, reigns: [{ date: "May 2006", notes: "Won with Brian Kendrick on SmackDown — held for 331 days" }, { date: "Jun 2007", notes: "Brief second reign with Kendrick" }], firstReign: "May 2006", notable: "Long dominant tag title reign with Brian Kendrick — over a year" }, { title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Jun 2004", notes: "Won Cruiserweight title on Velocity" }], firstReign: "Jun 2004", notable: "Cruiserweight title won on SmackDown" }],
    totalTitleReigns: 3,`
],

// ID 173 - Brian Kendrick
[
`championships: [{ title: "WWE Tag Team Championship", count: 2, firstReign: "May 2006", notable: "428-day tag title reign with Paul London — longest in years" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "WWE Tag Team Championship", count: 2, reigns: [{ date: "May 2006", notes: "Won with Paul London on SmackDown — record-setting 331-day reign" }, { date: "Jun 2007", notes: "Brief second reign with London" }], firstReign: "May 2006", notable: "428-day tag title reign with Paul London — longest in years" }],
    totalTitleReigns: 2,`
],

// ID 174 - MNM
[
`championships: [{ title: "WWE Tag Team Championship", count: 2, firstReign: "Mar 2005", notable: "Two tag title reigns as Hollywood's self-proclaimed premiere tag team" }],
    totalTitleReigns: 2,`,
`championships: [{ title: "WWE Tag Team Championship", count: 2, reigns: [{ date: "Apr 2005", notes: "Won on SmackDown debut" }, { date: "Jan 2006", notes: "Second reign" }], firstReign: "Mar 2005", notable: "Two tag title reigns as Hollywood's self-proclaimed premiere tag team" }],
    totalTitleReigns: 2,`
],

// ID 175 - Melina
[
`championships: [{ title: "Women's Championship", count: 3, firstReign: "Oct 2006", notable: "Three Women's title reigns" }, { title: "Divas Championship", count: 2, firstReign: "Jul 2009", notable: "Two Divas title reigns" }],
    totalTitleReigns: 5,`,
`championships: [{ title: "Women's Championship", count: 3, reigns: [{ date: "Oct 2006", notes: "Won Women's title on SmackDown" }, { date: "Oct 2007", notes: "Second Women's reign" }, { date: "Jan 2009", notes: "Third Women's reign on Raw" }], firstReign: "Oct 2006", notable: "Three Women's title reigns" }, { title: "Divas Championship", count: 2, reigns: [{ date: "Jun 2009", notes: "Won Divas Championship on Raw" }, { date: "Sep 2009", notes: "Second Divas reign" }], firstReign: "Jul 2009", notable: "Two Divas title reigns" }],
    totalTitleReigns: 5,`
],

// ID 176 - Beth Phoenix
[
`championships: [{ title: "Women's Championship", count: 3, firstReign: "Sep 2007", notable: "Three Women's title reigns — dominant Glamazon champion" }, { title: "Divas Championship", count: 1, firstReign: "Oct 2011", notable: "Brief Divas title reign" }],
    totalTitleReigns: 4, hallOfFame: 2017,`,
`championships: [{ title: "Women's Championship", count: 3, reigns: [{ date: "Oct 2007", notes: "Won at No Mercy" }, { date: "Jan 2008", notes: "Second reign" }, { date: "Apr 2008", notes: "Won at WrestleMania XXIV pre-show" }], firstReign: "Sep 2007", notable: "Three Women's title reigns — dominant Glamazon champion" }, { title: "Divas Championship", count: 1, reigns: [{ date: "Oct 2011", notes: "Won from Kelly Kelly at Hell in a Cell" }], firstReign: "Oct 2011", notable: "Brief Divas title reign" }],
    totalTitleReigns: 4, hallOfFame: 2017,`
],

// ID 177 - Mickie James
[
`championships: [{ title: "Women's Championship", count: 5, firstReign: "Apr 2006", notable: "5 Women's title reigns including the WM22 win over Trish" }, { title: "Divas Championship", count: 1, firstReign: "Jun 2009", notable: "Divas title reign on SmackDown" }],
    totalTitleReigns: 6, hallOfFame: 2023,`,
`championships: [{ title: "Women's Championship", count: 5, reigns: [{ date: "Apr 2006", notes: "Won from Trish Stratus at WrestleMania 22" }, { date: "Nov 2006", notes: "Second reign" }, { date: "Jun 2007", notes: "Third reign" }, { date: "Nov 2008", notes: "Fourth reign" }, { date: "Jan 2009", notes: "Fifth reign" }], firstReign: "Apr 2006", notable: "5 Women's title reigns including the WM22 win over Trish" }, { title: "Divas Championship", count: 1, reigns: [{ date: "Jun 2009", notes: "Won Divas Championship on SmackDown" }], firstReign: "Jun 2009", notable: "Divas title reign on SmackDown" }],
    totalTitleReigns: 6, hallOfFame: 2023,`
],

// ID 180 - Nunzio
[
`championships: [{ title: "Cruiserweight Championship", count: 1, firstReign: "Jan 2004", notable: "Cruiserweight title reign" }],
    totalTitleReigns: 1,`,
`championships: [{ title: "Cruiserweight Championship", count: 1, reigns: [{ date: "Jan 2004", notes: "Won Cruiserweight title on SmackDown" }], firstReign: "Jan 2004", notable: "Cruiserweight title reign" }],
    totalTitleReigns: 1,`
],

];

let replacedCount = 0;
let failedReplacements = [];

for (const [oldStr, newStr] of replacements) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    replacedCount++;
  } else {
    // Try to find a partial match for debugging
    const firstLine = oldStr.split('\n')[0].substring(0, 80);
    failedReplacements.push(firstLine);
  }
}

fs.writeFileSync(filePath, content, 'utf8');

console.log(`Successfully replaced: ${replacedCount}/${replacements.length}`);
if (failedReplacements.length > 0) {
  console.log(`\nFailed replacements:`);
  failedReplacements.forEach(f => console.log(`  - ${f}`));
}
