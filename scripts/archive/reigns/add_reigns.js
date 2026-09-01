const fs = require('fs');

const filePath = 'c:\\Users\\bes68\\OneDrive\\Desktop\\Claude Projects\\WWE Database\\wwe-app\\src\\WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// This maps line-level patterns to find the right spot.
// We'll find each `id: NNN,` line, then scan forward for championship entries on that wrestler,
// and add reigns arrays.

// Reign data organized by wrestler ID and title
const reignsByIdAndTitle = {
  354: { "WWWF Championship": [[{ date: "Apr 1977", notes: "Won from Bruno Sammartino" }]] },
  355: { "WWWF Championship": [[{ date: "Jan 1971", notes: "Won from Bruno Sammartino, ending 7-year reign" }]] },
  356: { "WWWF Tag Team Championship": [[{ date: "Dec 1972", notes: "Won with Sonny King" }, { date: "Jun 1976", notes: "Won with Billy White Wolf" }, { date: "Nov 1978", notes: "Won with Jules Strongbow" }]] },
  357: { "WWWF Tag Team Championship": [[{ date: "Aug 1975", notes: "Won with Blackjack Lanza" }]] },
  359: { "WWWF Tag Team Championship": [[{ date: "May 1974", notes: "Won from Tony Garea & Dean Ho" }]] },
  360: { "WWF Tag Team Championship": [[{ date: "Apr 1980", notes: "Won from Ivan Putski & Tito Santana" }, { date: "Mar 1982", notes: "Won from Tony Garea & Rick Martel" }, { date: "Mar 1983", notes: "Third tag title reign" }]] },
  361: { "WWF Tag Team Championship": [[{ date: "Oct 1987", notes: "Won from Hart Foundation" }]] },
  372: {
    "WWF Tag Team Championship": [[{ date: "Nov 1998", notes: "First reign with Billy Gunn" }, { date: "Mar 1999", notes: "Second reign with Billy Gunn" }, { date: "Aug 1999", notes: "Third reign with Billy Gunn" }, { date: "Nov 1999", notes: "Fourth reign with Billy Gunn" }, { date: "Apr 2000", notes: "Fifth reign with Billy Gunn" }]],
    "Hardcore Championship": [[{ date: "Mar 1999", notes: "Won Hardcore title" }, { date: "Apr 1999", notes: "Second Hardcore reign" }, { date: "May 1999", notes: "Third Hardcore reign" }]]
  },
  376: { "King of the Ring": [[{ date: "Jun 1995", notes: "Won King of the Ring tournament" }]] },
  380: { "Raw Tag Team Championship": [[{ date: "Apr 2019", notes: "Won at WrestleMania 35 with Zack Ryder after 269-match losing streak" }]] },
  381: {
    "Women's Championship": [[{ date: "Oct 2006", notes: "Won from Lita" }, { date: "Jun 2009", notes: "Won from Maryse" }]],
    "Divas Championship": [[{ date: "Jun 2009", notes: "Won Divas title" }]]
  },
  383: {
    "Women's Championship": [[{ date: "Jun 2008", notes: "Won Divas Championship on SmackDown" }]],
    "Divas Championship": [[{ date: "Sep 2009", notes: "Won from Melina" }, { date: "Feb 2010", notes: "Second Divas title reign" }]]
  },
  384: { "Divas Championship": [[{ date: "May 2012", notes: "Won from Nikki Bella at Extreme Rules" }]] },
  385: { "Women's Championship": [[{ date: "Jul 2003", notes: "Won in debut match Battle Royal on Raw" }]] },
  388: { "Intercontinental Championship": [[{ date: "Oct 2007", notes: "Won from Jeff Hardy" }]] },
  403: { "NXT Cruiserweight Championship": [[{ date: "Jun 2020", notes: "Won from Drake Maverick" }, { date: "Jan 2021", notes: "Regained from Gran Metalik" }]] },
  409: {
    "NXT Women's Championship": [[{ date: "Apr 2021", notes: "Won from Io Shirai at NXT TakeOver: Stand & Deliver" }]],
    "Women's Tag Team Championship": [[{ date: "Apr 2022", notes: "Won with Aliyah" }, { date: "Sep 2022", notes: "Won with Aliyah again" }]]
  },
  411: { "NXT Women's Championship": [[{ date: "Feb 2023", notes: "Won after Mandy Rose vacated" }, { date: "Sep 2024", notes: "Won second reign" }]] },
  416: { "NXT North American Championship": [[{ date: "Apr 2021", notes: "Won from Johnny Gargano" }]] },
  417: { "NXT UK Championship": [[{ date: "Jan 2017", notes: "Won inaugural UK Championship tournament" }]] },
  438: { "WWF Tag Team Championship": [[{ date: "Oct 1987", notes: "Won with Tito Santana as Strike Force from Hart Foundation" }]] },
  440: { "WWF Tag Team Championship": [[{ date: "Dec 1989", notes: "Won with Andre the Giant as Colossal Connection from Demolition" }]] },
  442: { "Women's Championship": [[{ date: "Nov 1999", notes: "Won evening gown pool match at Survivor Series" }]] },
  448: { "Women's Championship": [[{ date: "Aug 2002", notes: "Won from Trish Stratus" }, { date: "Jan 2004", notes: "Won from Ivory" }]] },
  449: { "World Heavyweight Championship": [[{ date: "Jul 2007", notes: "Won 20-man Battle Royal on SmackDown" }]] },
  453: { "Divas Championship": [[{ date: "May 2011", notes: "Won from Eve Torres via Twin Magic" }]] },
  454: { "Divas Championship": [[{ date: "Apr 2013", notes: "Won from Kaitlyn" }, { date: "Nov 2014", notes: "Won from AJ Lee at Survivor Series — 298-day reign" }]] },
  456: {
    "SmackDown Women's Championship": [[{ date: "Apr 2018", notes: "Cashed in MITB on Charlotte Flair after 287 days" }]],
    "Women's Tag Team Championship": [[{ date: "May 2021", notes: "Won with Zelina Vega" }]]
  },
  457: { "24/7 Championship": [[{ date: "Aug 2021", notes: "First 24/7 title win" }, { date: "Sep 2021", notes: "Second reign" }, { date: "Oct 2021", notes: "Third reign" }, { date: "Nov 2021", notes: "Fourth reign" }, { date: "Jan 2022", notes: "Fifth reign" }, { date: "Mar 2022", notes: "Sixth reign" }, { date: "May 2022", notes: "Seventh reign" }, { date: "Jul 2022", notes: "Eighth reign" }, { date: "Aug 2022", notes: "Ninth reign" }, { date: "Sep 2022", notes: "Tenth reign" }, { date: "Oct 2022", notes: "Eleventh reign" }, { date: "Nov 2022", notes: "Twelfth reign" }, { date: "Dec 2022", notes: "Thirteenth reign" }, { date: "Jan 2023", notes: "Fourteenth reign" }, { date: "Feb 2023", notes: "Fifteenth reign" }, { date: "Mar 2023", notes: "Sixteenth reign" }]] },
  458: { "NXT Women's Championship": [[{ date: "Oct 2021", notes: "Won from Raquel Gonzalez — began 413-day reign" }]] },
  459: { "NXT Women's Tag Championship": [[{ date: "Oct 2021", notes: "Won with Gigi Dolin under Toxic Attraction" }, { date: "Apr 2022", notes: "Second reign with Gigi Dolin" }]] },
  460: { "NXT Women's Tag Championship": [[{ date: "Oct 2021", notes: "Won with Jacy Jayne under Toxic Attraction" }, { date: "Apr 2022", notes: "Second reign with Jacy Jayne" }]] },
  461: { "NXT Women's Tag Championship": [[{ date: "Jan 2022", notes: "Won with Kayden Carter" }, { date: "Jul 2022", notes: "Second reign with Kayden Carter" }, { date: "Dec 2022", notes: "Third reign with Kayden Carter" }]] },
  462: { "NXT Women's Tag Championship": [[{ date: "Jan 2022", notes: "Won with Katana Chance" }, { date: "Jul 2022", notes: "Second reign with Katana Chance" }, { date: "Dec 2022", notes: "Third reign with Katana Chance" }]] },
  465: { "Women's Tag Team Championship": [[{ date: "Nov 2022", notes: "Won with Carmella" }]] },
  468: { "WWF Light Heavyweight Championship": [[{ date: "Dec 1997", notes: "Won inaugural WWF Light Heavyweight Championship on Raw" }]] },
  469: { "Light Heavyweight Championship": [[{ date: "Feb 2000", notes: "Won from Gillberg" }]] },
  472: { "United States Championship": [[{ date: "Jun 2006", notes: "Won from Bobby Lashley on SmackDown" }]] },
  478: { "Intercontinental Championship": [[{ date: "Jun 2013", notes: "Won from Wade Barrett with Paul Heyman's backing" }]] },
  482: { "NXT Championship": [[{ date: "Jan 2019", notes: "Won from Johnny Gargano" }]] },
  483: {
    "NXT Championship": [[{ date: "Aug 2020", notes: "Won from Adam Cole at Great American Bash" }]],
    "NXT North American Championship": [[{ date: "Jun 2020", notes: "Won from Johnny Gargano" }]]
  },
  486: {
    "Intercontinental Championship": [[{ date: "May 2019", notes: "Won pre-show at Money in the Bank" }]],
    "United States Championship": [[{ date: "Nov 2019", notes: "Won from AJ Styles" }]]
  },
  491: { "WWE Women's Tag Team Championship": [[{ date: "Mar 2024", notes: "Won at WrestleMania 40 with Bianca Belair" }]] },
  492: { "NXT Championship": [[{ date: "Apr 2024", notes: "Won from Carmelo Hayes at Spring Breakin'" }]] },
  493: {
    "NXT Championship": [[{ date: "Sep 2023", notes: "Won from Carmelo Hayes on NXT" }]],
    "NXT UK Championship": [[{ date: "Sep 2021", notes: "Won from WALTER — 5-star match classic" }]]
  },
  495: { "NXT North American Championship": [[{ date: "Oct 2022", notes: "Won from Carmelo Hayes on NXT" }]] },
  496: { "NXT North American Championship": [[{ date: "Aug 2023", notes: "Won from Dominik Mysterio on NXT" }]] },
  497: { "NXT Tag Team Championship": [[{ date: "Oct 2023", notes: "Won with Nathan Frazer" }]] },
  498: { "NXT Tag Team Championship": [[{ date: "Oct 2023", notes: "Won with Axiom" }]] },
  499: {
    "NXT UK Tag Team Championship": [[{ date: "Jun 2021", notes: "Won from Moustache Mountain" }]],
    "NXT Tag Team Championship": [[{ date: "Sep 2022", notes: "Won on NXT" }]]
  },
  500: { "WWE Women's Tag Team Championship": [[{ date: "Oct 2023", notes: "Won with Piper Niven" }]] },
  501: { "WWE Women's Tag Team Championship": [[{ date: "Oct 2023", notes: "Won with Chelsea Green" }]] },
  505: { "NXT Women's Championship": [[{ date: "Oct 2023", notes: "Won at NXT Halloween Havoc in Ireland" }]] },
  507: { "WCW World Heavyweight Championship": [[{ date: "Apr 1997", notes: "Won from Macho Man on Nitro" }, { date: "Apr 1998", notes: "Won from Sting at Spring Stampede" }, { date: "Apr 1999", notes: "Won from Ric Flair" }]] },
  508: { "WWE Tag Team Championship": [[{ date: "Aug 2011", notes: "Won with Kofi Kingston as Air Boom" }]] },
  509: { "Intercontinental Championship": [[{ date: "Jun 2013", notes: "Won from Wade Barrett as a Paul Heyman Guy" }]] },
  517: { "NXT Women's Tag Team Championship": [[{ date: "Jan 2022", notes: "First reign" }, { date: "Jul 2022", notes: "Second reign" }, { date: "Dec 2022", notes: "Third reign" }]] },
  518: { "NXT North American Championship": [[{ date: "Oct 2023", notes: "Won in NXT" }]] },
  520: { "NXT Tag Team Championship": [[{ date: "Apr 2022", notes: "Won with Brutus Creed at Stand & Deliver" }]] },
  521: { "NXT Tag Team Championship": [[{ date: "Apr 2022", notes: "Won with Julius Creed at Stand & Deliver" }]] },
  522: { "NXT Women's Tag Team Championship": [[{ date: "Jul 2023", notes: "Won with Tatum Paxley" }]] },
  524: {
    "WWE UK Championship": [[{ date: "Jan 2017", notes: "Won inaugural UK Championship tournament" }]],
    "NXT Tag Team Championship": [[{ date: "Oct 2021", notes: "Won with Pete Dunne as Moustache Mountain" }]]
  },
  525: { "NXT UK Championship": [[{ date: "Apr 2019", notes: "Won from Pete Dunne — began record 870-day reign" }]] },
  527: {
    "NXT UK Championship": [[{ date: "Jan 2017", notes: "Won inaugural UK Championship — began 685-day reign" }]],
    "NXT Tag Team Championship": [[{ date: "Oct 2021", notes: "Won with Tyler Bate as Moustache Mountain" }]]
  },
  528: { "NXT UK Tag Team Championship": [[{ date: "Jun 2018", notes: "Won with Tyler Bate as Moustache Mountain" }, { date: "Dec 2019", notes: "Second reign with Tyler Bate" }]] },
  529: { "NXT UK Women's Championship": [[{ date: "Aug 2019", notes: "Won from Toni Storm — began 649-day reign" }]] },
  530: { "WWE Women's Tag Team Championship": [[{ date: "Aug 2023", notes: "Won with Alba Fyre" }]] },
  537: { "SmackDown Tag Team Championship": [[{ date: "Jun 2024", notes: "Won with Tonga Loa as part of Bloodline" }]] },
  538: { "SmackDown Tag Team Championship": [[{ date: "Jun 2024", notes: "Won with Tama Tonga as Guerrillas of Destiny" }]] },
  551: { "WCW World Heavyweight Championship": [[{ date: "Jul 1992", notes: "Won from Sting in WCW" }, { date: "Dec 1992", notes: "Second WCW World title reign" }, { date: "Mar 1993", notes: "Third WCW World title reign" }]] },
  552: { "NWA World Tag Team Championship": [[{ date: "Jan 1985", notes: "Won with Ole Anderson" }, { date: "Jul 1985", notes: "Second reign" }, { date: "Oct 1986", notes: "Third reign" }, { date: "Mar 1987", notes: "Fourth reign" }, { date: "Sep 1987", notes: "Won with Tully Blanchard" }, { date: "Mar 1988", notes: "Sixth reign" }]] },
  553: { "WWF Tag Team Championship": [[{ date: "Jul 1989", notes: "Won with Arn Anderson as the Brain Busters from Demolition" }]] },
  554: { "WWF Tag Team Championship": [[{ date: "Jan 1985", notes: "Won with Mike Rotundo as US Express" }]] },
  555: {
    // Two entries, first is US Express, second is Money Inc.
    "WWF Tag Team Championship": [
      [{ date: "Jan 1985", notes: "Won with Barry Windham as US Express" }],
      [{ date: "Feb 1993", notes: "Won with Ted DiBiase as Money Inc." }, { date: "Jun 1993", notes: "Second Money Inc. reign" }]
    ]
  },
  556: { "WWF Tag Team Championship": [[{ date: "Jan 1987", notes: "Won with Bret Hart as Hart Foundation from British Bulldogs" }, { date: "Aug 1990", notes: "Won with Bret Hart — second Hart Foundation reign" }]] },
  560: { "Intercontinental Championship": [[{ date: "Sep 1993", notes: "Won from Rick Martel" }, { date: "Apr 1994", notes: "Won at WrestleMania X in first ladder match" }, { date: "Aug 1994", notes: "Third IC reign from Diesel" }, { date: "Jan 1995", notes: "Fourth IC reign" }]] },
  561: {
    "WWF Championship": [[{ date: "Nov 1994", notes: "Won from Bob Backlund in 8 seconds at house show" }]],
    "WWF Tag Team Championship": [[{ date: "Jun 1994", notes: "Won with Shawn Michaels" }, { date: "Aug 1994", notes: "Second reign with Shawn Michaels" }, { date: "Sep 1994", notes: "Third tag reign" }]]
  },
  564: { "Intercontinental Championship": [[{ date: "Jun 1996", notes: "Won from Goldust" }]] },
  575: { "United States Championship": [[{ date: "Aug 2005", notes: "Won from Orlando Jordan on SmackDown" }]] },
  579: {
    "United States Championship": [[{ date: "Oct 2004", notes: "Won from John Cena in debut match" }]],
    "Intercontinental Championship": [[{ date: "Jan 2006", notes: "Won from Ric Flair on Raw" }]]
  },
  582: {
    "NXT Championship": [[{ date: "Nov 2017", notes: "Won from Drew McIntyre at NXT TakeOver: Brooklyn III" }]],
    "Raw Tag Team Championship": [[{ date: "Oct 2019", notes: "Won with Dolph Ziggler" }]]
  },
  589: { "Intercontinental Championship": [[{ date: "Apr 2021", notes: "Won from Big E at WrestleMania 37" }]] },
  590: { "NXT UK Women's Championship": [[{ date: "Aug 2018", notes: "Won inaugural NXT UK Women's Championship" }]] },
  608: { "NXT UK Tag Team Championship": [[{ date: "Oct 2020", notes: "Won with Fabian Aichner as Imperium" }]] },
  609: { "NXT UK Tag Team Championship": [[{ date: "Oct 2020", notes: "Won with Marcel Barthel as Imperium" }]] },
  610: { "NXT UK Tag Team Championship": [[{ date: "Jun 2019", notes: "Won inaugural NXT UK Tag Team Championship" }, { date: "Sep 2020", notes: "Second reign" }]] },
  611: { "NXT UK Tag Team Championship": [[{ date: "Nov 2020", notes: "Won on NXT UK" }]] },
  612: { "NXT Heritage Cup Championship": [[{ date: "Jan 2022", notes: "Won Heritage Cup" }, { date: "Jun 2022", notes: "Second Heritage Cup reign" }, { date: "Nov 2022", notes: "Third Heritage Cup reign" }]] },
  613: { "NXT UK Women's Championship": [[{ date: "Mar 2021", notes: "Won from Kay Lee Ray" }]] },
  616: { "United States Championship": [[{ date: "Feb 2015", notes: "Won from Rusev" }]] },
  617: {
    "Raw Women's Championship": [[{ date: "Apr 2019", notes: "Won at WrestleMania 35 — pinned Ronda Rousey" }, { date: "Aug 2021", notes: "Won from Bianca Belair at SummerSlam" }]],
    "SmackDown Women's Championship": [[{ date: "Oct 2018", notes: "Won from Charlotte at Hell in a Cell" }, { date: "Nov 2018", notes: "Regained from Charlotte" }]],
    "Women's World Championship": [[{ date: "Sep 2023", notes: "Won post-return" }]]
  },
  618: {
    "Raw Women's Championship": [[{ date: "Aug 2018", notes: "Won from Alexa Bliss at SummerSlam" }]],
    "SmackDown Women's Championship": [[{ date: "Apr 2022", notes: "Won from Charlotte at WrestleMania 38" }, { date: "Jul 2022", notes: "Won I Quit match from Liv Morgan" }]]
  },
  619: { "NXT Women's Championship": [[{ date: "Apr 2019", notes: "Won from Kairi Sane" }, { date: "Sep 2019", notes: "Second reign — continued dominance" }]] },
  620: { "NXT Women's Championship": [[{ date: "Aug 2020", notes: "Won from Charlotte Flair — began 322-day reign" }]] },
  621: { "NXT Women's Championship": [[{ date: "Oct 2021", notes: "Won NXT Women's title" }]] },
  622: { "NXT North American Championship": [[{ date: "Apr 2021", notes: "Won on NXT" }]] },
  626: { "WWE Tag Team Championship": [[{ date: "Apr 2023", notes: "Won with Kevin Owens at WrestleMania 39" }]] },
  627: { "WWE Championship": [[{ date: "Apr 2024", notes: "Won from Roman Reigns at WrestleMania 40" }]] },
  628: { "World Heavyweight Championship": [[{ date: "May 2023", notes: "Won inaugural World Heavyweight Championship at Night of Champions" }, { date: "Jan 2024", notes: "Won second reign" }]] },
  629: {
    "Intercontinental Championship": [[{ date: "May 2022", notes: "Won from Ricochet — began record 663-day reign" }]],
    "World Heavyweight Championship": [[{ date: "Aug 2024", notes: "Won at SummerSlam" }]]
  },
  630: {
    "World Heavyweight Championship": [[{ date: "Aug 2004", notes: "Won from Chris Benoit at SummerSlam — youngest WHC at 24" }, { date: "Oct 2007", notes: "Won from Triple H" }, { date: "Jan 2009", notes: "Won at Royal Rumble" }, { date: "Sep 2011", notes: "Won from Christian" }]],
    "WWE Championship": [[{ date: "Apr 2007", notes: "First WWE title reign" }, { date: "Oct 2007", notes: "Second reign" }, { date: "Sep 2008", notes: "Third reign" }, { date: "Jan 2009", notes: "Fourth reign" }, { date: "Oct 2009", notes: "Fifth reign" }, { date: "Jun 2013", notes: "Won MITB cash-in from Daniel Bryan" }, { date: "Nov 2013", notes: "Won TLC unification match" }, { date: "Sep 2015", notes: "Won from Seth Rollins" }, { date: "Feb 2017", notes: "Won Elimination Chamber" }, { date: "Nov 2020", notes: "Won from Drew McIntyre" }]]
  },
  631: { "WWE Championship": [[{ date: "Apr 2005", notes: "Won from JBL at WrestleMania 21" }, { date: "Jan 2006", notes: "Won from Edge at Royal Rumble" }, { date: "Sep 2006", notes: "Won from Edge at Unforgiven" }, { date: "Oct 2007", notes: "Won from Randy Orton" }, { date: "Nov 2008", notes: "Won from Chris Jericho" }, { date: "Apr 2009", notes: "Won from Edge at Backlash" }, { date: "Feb 2010", notes: "Won Elimination Chamber" }, { date: "Sep 2011", notes: "Won from Alberto Del Rio" }, { date: "Oct 2012", notes: "Won from CM Punk" }, { date: "Jan 2013", notes: "Won Royal Rumble" }, { date: "Jun 2014", notes: "Won from Bray Wyatt" }, { date: "Sep 2014", notes: "Twelfth reign" }, { date: "Jan 2017", notes: "Won from AJ Styles — tied Flair's 16 record" }]] },
  632: {
    "World Heavyweight Championship": [[{ date: "Apr 2005", notes: "Won from Triple H at WrestleMania 21" }, { date: "Nov 2005", notes: "Won from Eddie Guerrero" }, { date: "Sep 2007", notes: "Won from Great Khali" }, { date: "Jun 2009", notes: "Won from Randy Orton" }]],
    "WWE Championship": [[{ date: "Feb 2014", notes: "Won Royal Rumble" }, { date: "May 2014", notes: "Won in Evolution vs Shield" }]]
  },
  633: { "WWE Championship": [[{ date: "Jul 2011", notes: "Won from John Cena at Money in the Bank — began 434-day reign" }]] },
  634: {
    "WWE Championship": [[{ date: "Sep 2016", notes: "Won from Dean Ambrose at Backlash" }, { date: "Nov 2017", notes: "Won from Jinder Mahal" }]],
    "United States Championship": [[{ date: "Jul 2018", notes: "First US title" }, { date: "Sep 2018", notes: "Second US reign" }, { date: "Mar 2020", notes: "Third US reign" }, { date: "May 2020", notes: "Fourth US reign" }]]
  },
  635: {
    "Universal Championship": [[{ date: "Aug 2016", notes: "Won Fatal Four Way on Raw — Triple H interference" }]],
    "WWE Championship": [[{ date: "Jan 2025", notes: "Won from Cody Rhodes at Saturday Night's Main Event" }]]
  },
  636: {
    "Universal Championship": [[{ date: "Aug 2016", notes: "Won inaugural Universal Championship at SummerSlam — vacated due to shoulder injury" }]],
    "NXT Championship": [[{ date: "Mar 2015", notes: "Won from Kevin Owens at NXT TakeOver: Brooklyn" }]]
  },
  637: {
    "Universal Championship": [[{ date: "Aug 2020", notes: "Won at Payback — Tribal Chief era began" }, { date: "Aug 2021", notes: "Continued reign after WrestleMania" }]],
    "WWE Championship": [[{ date: "Apr 2022", notes: "Won from Brock Lesnar at WrestleMania 38 — unified titles" }, { date: "Jul 2023", notes: "Undisputed reign continued" }]]
  },
  638: { "Intercontinental Championship": [[{ date: "Apr 2024", notes: "Won from Gunther on Raw — first singles title" }]] },
  639: {
    "United States Championship": [[{ date: "Oct 2018", notes: "Won from Jeff Hardy" }, { date: "Jan 2019", notes: "Won from Rusev" }, { date: "Jul 2019", notes: "Won from Samoa Joe" }]],
    "Intercontinental Championship": [[{ date: "Mar 2022", notes: "Won from Sami Zayn" }]]
  },
  640: { "United States Championship": [[{ date: "Dec 2014", notes: "Won from Sheamus — undefeated streak" }, { date: "Sep 2016", notes: "Won from Roman Reigns" }, { date: "Mar 2017", notes: "Won from Roman Reigns again" }]] },
  641: {
    "WWE Championship": [[{ date: "Dec 2009", notes: "Won from John Cena in Tables match" }, { date: "Jun 2010", notes: "Won Fatal Four Way PPV" }, { date: "Nov 2015", notes: "Cashed in MITB on Roman Reigns" }]],
    "World Heavyweight Championship": [[{ date: "Apr 2012", notes: "Won from Daniel Bryan in 18 seconds at WrestleMania 28" }, { date: "Dec 2012", notes: "Won Chairs match at TLC" }]]
  },
  642: {
    "SmackDown Women's Championship": [[{ date: "Apr 2021", notes: "Won from Sasha Banks at WrestleMania 37 main event" }, { date: "Jan 2023", notes: "Won at Royal Rumble" }]],
    "Raw Women's Championship": [[{ date: "Sep 2022", notes: "Won from Becky Lynch" }, { date: "Mar 2023", notes: "Second Raw Women's reign" }]],
    "WWE Women's Tag Championship": [[{ date: "Mar 2024", notes: "Won at WrestleMania 40 with Jade Cargill" }]]
  },
  643: { "World Tag Team Championship": [[{ date: "Dec 2006", notes: "Won with Trevor Murdoch" }]] },
  644: { "World Tag Team Championship": [[{ date: "Dec 2006", notes: "Won with Lance Cade" }]] },
  645: { "WWE Tag Team Championship": [[{ date: "Mar 2003", notes: "Won as Team Angle on SmackDown" }, { date: "Jul 2003", notes: "Second reign" }]] },
  646: { "WWE Tag Team Championship": [[{ date: "Apr 2005", notes: "Won from Rey Mysterio & Eddie Guerrero" }, { date: "Jan 2006", notes: "Second reign" }]] },
  647: { "World Tag Team Championship": [[{ date: "Jun 2003", notes: "Won from Kane & Rob Van Dam" }, { date: "Feb 2004", notes: "Second reign" }, { date: "Nov 2004", notes: "Third reign" }]] },
  649: { "WWE Tag Team Championship": [[{ date: "Apr 2007", notes: "Won from London & Kendrick on SmackDown" }]] },
  651: { "World Tag Team Championship": [[{ date: "Apr 2006", notes: "Won from Big Show & Kane" }]] },
  654: { "WWE Tag Team Championship": [[{ date: "Jan 2012", notes: "Won from Air Boom" }]] },
  655: { "NXT Tag Team Championship": [[{ date: "Sep 2015", notes: "Won on NXT" }]] },
  657: { "SmackDown Tag Team Championship": [[{ date: "Dec 2016", notes: "Won inaugural SmackDown Tag Team Championship" }]] },
  658: { "Raw Tag Team Championship": [[{ date: "Oct 2017", notes: "Won from Seth Rollins & Dean Ambrose" }, { date: "Feb 2018", notes: "Second Raw tag reign" }, { date: "Sep 2018", notes: "Third Raw tag reign" }]] },
  659: {
    "NXT Tag Team Championship": [[{ date: "Jan 2017", notes: "Won at NXT TakeOver under Paul Ellering" }]],
    "Raw Tag Team Championship": [[{ date: "Oct 2018", notes: "Won on Raw" }]]
  },
  660: { "SmackDown Tag Team Championship": [[{ date: "Aug 2020", notes: "Won on SmackDown" }]] },
  667: {
    "Raw Women's Championship": [[{ date: "Aug 2016", notes: "Won from Charlotte on Raw" }, { date: "Nov 2016", notes: "Won from Charlotte" }, { date: "Feb 2017", notes: "Won from Charlotte" }]],
    "SmackDown Women's Championship": [[{ date: "Oct 2020", notes: "Won from Bayley at Hell in a Cell" }]]
  },
  668: {
    "NXT North American Championship": [[{ date: "Apr 2022", notes: "Won on NXT" }, { date: "Oct 2022", notes: "Second reign" }]],
    "NXT Championship": [[{ date: "Apr 2023", notes: "Won NXT Championship" }]]
  },
  669: { "NXT Tag Team Championship": [[{ date: "Oct 2023", notes: "First NXT Tag title reign" }, { date: "Jun 2024", notes: "Second reign" }]] },
  670: { "NXT Women's Tag Team Championship": [[{ date: "Jun 2022", notes: "Won with Roxanne Perez" }]] },
  671: { "NXT Women's Tag Team Championship": [[{ date: "Jul 2023", notes: "Won with Ivy Nile" }]] },
  677: {
    "SmackDown Women's Championship": [[{ date: "Nov 2017", notes: "Won from Naomi at Survivor Series" }]],
    "WWE Women's Tag Team Championship": [[{ date: "Apr 2019", notes: "First reign" }, { date: "Sep 2021", notes: "Won with Tamina" }]]
  },
  678: { "WWE Women's Tag Team Championship": [[{ date: "Sep 2022", notes: "Won with Raquel Rodriguez" }]] },
  679: { "NXT Women's Tag Team Championship": [[{ date: "Feb 2022", notes: "Won with Indi Hartwell" }]] },
  682: { "NXT North American Championship": [[{ date: "Aug 2022", notes: "Won on NXT" }]] },
  687: { "NXT UK Tag Team Championship": [[{ date: "Sep 2022", notes: "Won with Wolfgang as Gallus" }]] },
  688: { "NXT UK Tag Team Championship": [[{ date: "Sep 2022", notes: "Won with Mark Coffey as Gallus" }]] },
  689: { "NXT Tag Team Championship": [[{ date: "Jan 2021", notes: "Won from Breezango on NXT" }]] },
  690: { "NXT Tag Team Championship": [[{ date: "Apr 2021", notes: "Won on NXT" }]] },
  692: { "WWF Tag Team Championship": [[{ date: "Apr 1986", notes: "Won at WrestleMania 2" }]] },
  696: { "WWF Tag Team Championship": [[{ date: "Sep 1993", notes: "Won from Steiner Brothers" }, { date: "Jan 1994", notes: "Won second reign" }, { date: "Mar 1994", notes: "Third reign" }]] },
  699: { "WWF Tag Team Championship": [[{ date: "Apr 1994", notes: "Won from Quebecers on Raw" }]] },
  700: { "WWF Tag Team Championship": [[{ date: "Jun 1993", notes: "Won from Money Inc. on Raw" }]] },
  701: { "Intercontinental Championship": [[{ date: "May 1993", notes: "Won from Shawn Michaels on Raw" }]] },
  702: { "WWF Championship": [[{ date: "Jan 1991", notes: "Won from Ultimate Warrior at Royal Rumble" }]] },
  703: { "WWF Tag Team Championship": [[{ date: "Feb 1993", notes: "Won with Ted DiBiase as Money Inc." }, { date: "Jun 1993", notes: "Second Money Inc. reign" }]] },
  707: { "Intercontinental Championship": [[{ date: "Apr 1989", notes: "Won from Ultimate Warrior at WrestleMania V" }]] },
  708: {
    "WWF Championship": [[{ date: "Apr 1990", notes: "Won from Hulk Hogan at WrestleMania VI" }]],
    "Intercontinental Championship": [[{ date: "Aug 1988", notes: "Won from Honky Tonk Man at SummerSlam in 31 seconds" }]]
  },
  709: { "WWF Tag Team Championship": [[{ date: "Jul 1992", notes: "Won with Typhoon as Natural Disasters" }]] },
  710: { "WWF Tag Team Championship": [[{ date: "Jul 1992", notes: "Won with Earthquake as Natural Disasters" }]] },
  713: { "WWF Tag Team Championship": [[{ date: "Mar 1985", notes: "Won with Iron Sheik at WrestleMania I" }]] },
  715: { "Hardcore Championship": [[{ date: "Aug 1999", notes: "Won Hardcore title" }, { date: "Nov 1999", notes: "Second Hardcore reign" }]] },
  716: {
    "European Championship": [[{ date: "Aug 1998", notes: "Won from Triple H" }, { date: "Oct 1998", notes: "Second European reign" }, { date: "Feb 1999", notes: "Third European reign" }]],
    "Intercontinental Championship": [[{ date: "Jun 1999", notes: "Won from Jeff Jarrett" }]]
  },
  718: { "Hardcore Championship": [[{ date: "Jan 2001", notes: "Won Hardcore title" }, { date: "Mar 2001", notes: "Second Hardcore reign" }, { date: "Jun 2001", notes: "Third Hardcore reign" }]] },
  719: { "WWF Tag Team Championship": [[{ date: "Jul 1999", notes: "Won on Raw" }]] },
  721: { "Intercontinental Championship": [[{ date: "Apr 2000", notes: "Won from Chris Jericho" }]] },
  722: {
    "WWE Championship": [[{ date: "Oct 2000", notes: "Won from The Rock at No Mercy" }, { date: "Sep 2001", notes: "Won from Steve Austin" }, { date: "Jun 2003", notes: "Won from Brock Lesnar" }, { date: "Jul 2004", notes: "Won from Eddie Guerrero" }]],
    "World Heavyweight Championship": [[{ date: "Feb 2006", notes: "Won at No Way Out" }, { date: "Oct 2006", notes: "Second WHC reign" }]]
  },
  723: {
    "Undisputed WWE Championship": [[{ date: "Dec 2001", notes: "Defeated both Stone Cold and The Rock at Vengeance" }]],
    "Intercontinental Championship": [[{ date: "Dec 1999", notes: "Won from Chyna" }, { date: "Jan 2000", notes: "Second IC reign" }, { date: "Apr 2000", notes: "Third IC reign" }, { date: "May 2001", notes: "Fourth IC reign" }, { date: "Oct 2001", notes: "Fifth IC reign" }, { date: "Feb 2002", notes: "Sixth IC reign" }, { date: "Oct 2002", notes: "Seventh IC reign" }, { date: "Jun 2006", notes: "Eighth IC reign" }, { date: "Jun 2008", notes: "Ninth IC reign" }]]
  },
  724: {
    "WWF/WWE Championship": [[{ date: "Aug 1999", notes: "Won from Mankind on Raw" }, { date: "Jan 2000", notes: "Won at Royal Rumble" }, { date: "May 2000", notes: "Third reign" }, { date: "Apr 2001", notes: "Won from Steve Austin" }, { date: "Mar 2002", notes: "Won at WrestleMania X8" }]],
    "World Heavyweight Championship": [[{ date: "Sep 2002", notes: "Awarded inaugural World Heavyweight Championship" }, { date: "Jan 2003", notes: "Won from Shawn Michaels" }, { date: "Dec 2003", notes: "Won from Goldberg" }, { date: "Oct 2004", notes: "Won from Chris Benoit" }, { date: "Jan 2005", notes: "Won from Batista" }]]
  },
  725: { "WWF Championship": [[{ date: "Mar 1996", notes: "Won Boyhood Dream from Bret Hart at WrestleMania XII" }, { date: "Nov 1997", notes: "Montreal Screwjob" }, { date: "Dec 1997", notes: "Regained on Raw" }, { date: "Nov 2002", notes: "Won Elimination Chamber from Triple H" }]] },
  726: { "Universal Championship": [[{ date: "Feb 2017", notes: "Won from Kevin Owens in 22 seconds" }]] },
  727: {
    "WWE Championship": [[{ date: "Nov 2008", notes: "Won from Triple H" }]],
    "World Heavyweight Championship": [[{ date: "Jun 2009", notes: "Won Extreme Rules match from Edge" }]]
  },
  728: { "Cruiserweight Championship": [[{ date: "Jun 2002", notes: "Won on SmackDown" }]] },
  729: {
    "WWE Championship": [[{ date: "Jun 2006", notes: "Won from John Cena at ECW One Night Stand" }]],
    "Intercontinental Championship": [[{ date: "Mar 2002", notes: "Won from William Regal" }, { date: "Jul 2002", notes: "Second IC reign" }, { date: "Oct 2002", notes: "Third IC reign" }, { date: "Jun 2003", notes: "Fourth IC reign" }, { date: "Sep 2003", notes: "Fifth IC reign" }, { date: "Jul 2006", notes: "Sixth IC reign" }]]
  },
  730: {
    "World Heavyweight Championship": [[{ date: "Jul 2006", notes: "Won as King Booker" }]],
    "United States Championship": [[{ date: "Oct 2004", notes: "Won on SmackDown" }]]
  },
  731: { "Intercontinental Championship": [[{ date: "Jan 1996", notes: "Won from Razor Ramon" }, { date: "Jul 2002", notes: "Won from Chris Jericho" }]] },
  733: { "WWF/WWE Women's Championship": [[{ date: "Apr 2001", notes: "First Women's Championship" }, { date: "Dec 2001", notes: "Second reign" }, { date: "Aug 2002", notes: "Third reign" }, { date: "May 2003", notes: "Fourth reign" }, { date: "Jul 2004", notes: "Fifth reign" }, { date: "Jan 2005", notes: "Sixth reign" }, { date: "Sep 2005", notes: "Seventh reign — retired as champion at WM22" }]] },
  734: { "WWF Women's Championship": [[{ date: "Nov 1999", notes: "First Women's Championship" }, { date: "Feb 2000", notes: "Second reign" }, { date: "Nov 2000", notes: "Third reign during Right to Censor" }]] },
  736: { "WWF Women's Championship": [[{ date: "Sep 1998", notes: "Won from Sable on Raw" }, { date: "Feb 2000", notes: "Second reign" }]] },
  737: { "WWF Women's Championship": [[{ date: "Nov 1994", notes: "Won from Alundra Blayze on Raw" }]] },
  738: { "WWF Women's Championship": [[{ date: "Dec 1993", notes: "Awarded Women's Championship after title revival" }, { date: "Apr 1994", notes: "Regained from Bull Nakano" }, { date: "Nov 1994", notes: "Third reign" }]] },
  739: { "WWF Women's Championship": [[{ date: "Jul 1984", notes: "Won from Fabulous Moolah at MTV event" }, { date: "Feb 1985", notes: "Regained at WrestleMania I" }]] },
  740: { "WWF Women's Championship": [[{ date: "Sep 1956", notes: "Won inaugural Women's Championship (kayfabe)" }, { date: "Jul 1984", notes: "Second recognized reign" }, { date: "Nov 1985", notes: "Won from Wendi Richter in Original Screwjob" }, { date: "Oct 1999", notes: "Won at age 76" }]] },
  741: {
    "Undisputed WWE Championship": [[{ date: "Aug 2002", notes: "Won from The Rock at SummerSlam at age 25" }]],
    "WWE Championship": [[{ date: "Sep 2003", notes: "Won from Kurt Angle" }, { date: "Mar 2004", notes: "Won from Eddie Guerrero" }, { date: "Mar 2014", notes: "Conquered The Streak" }, { date: "Jan 2022", notes: "Won at Day 1" }]]
  },
  742: {
    "WWE Championship": [[{ date: "Feb 2004", notes: "Won from Brock Lesnar at No Way Out" }]],
    "United States Championship": [[{ date: "Jul 2003", notes: "Won from Chris Benoit on SmackDown" }]]
  },
  743: {
    "WWE Championship": [[{ date: "Nov 1999", notes: "Won Triple Threat at Survivor Series" }, { date: "Nov 2002", notes: "Won from Brock Lesnar" }]],
    "World Heavyweight Championship": [[{ date: "Dec 2002", notes: "Won from Triple H" }, { date: "Jul 2003", notes: "Won on SmackDown" }, { date: "Feb 2012", notes: "Won from Daniel Bryan" }]]
  },
  744: { "WWE Tag Team Championship": [[{ date: "Jun 2004", notes: "Won on SmackDown" }]] },
  745: { "WWE Tag Team Championship": [[{ date: "Jan 2006", notes: "Won on SmackDown" }]] },
  746: { "World Heavyweight Championship": [[{ date: "Sep 2011", notes: "Won from Randy Orton — Hall of Pain era" }]] },
  747: { "Cruiserweight Championship": [[{ date: "Jul 2002", notes: "First CW title" }, { date: "Nov 2002", notes: "Second reign" }, { date: "Feb 2003", notes: "Third reign" }, { date: "Apr 2003", notes: "Fourth reign" }, { date: "Jun 2004", notes: "Fifth reign" }, { date: "Sep 2004", notes: "Sixth reign" }, { date: "Jan 2005", notes: "Seventh reign" }, { date: "Apr 2005", notes: "Eighth reign" }, { date: "Aug 2007", notes: "Ninth reign" }]] },
  748: { "Hardcore Championship": [[{ date: "Mar 2001", notes: "Won Hardcore title" }, { date: "Jun 2001", notes: "Second reign" }, { date: "Aug 2001", notes: "Third reign" }]] },
  749: { "Cruiserweight Championship": [[{ date: "Sep 2004", notes: "Won on SmackDown" }]] },
  750: { "WWE Tag Team Championship": [[{ date: "May 2006", notes: "Won from MNM — began record 428-day reign" }]] },
  751: { "Cruiserweight Championship": [[{ date: "Jan 2006", notes: "Won from Kid Kash — began record 385-day reign" }]] },
  755: { "WWE Tag Team Championship": [[{ date: "Feb 2015", notes: "Won with Cesaro on Raw" }]] },
  756: { "WWE Tag Team Championship": [[{ date: "Feb 2015", notes: "Won on Raw" }]] },
  757: { "Unified WWE Tag Team Championship": [[{ date: "Apr 2010", notes: "Won with Tyson Kidd as Hart Dynasty at WrestleMania 26" }]] },
  759: { "WWE Tag Team Championship": [[{ date: "Nov 2007", notes: "Won SmackDown tag titles" }, { date: "Apr 2008", notes: "Second reign" }, { date: "Dec 2008", notes: "Third reign" }]] },
  761: { "Divas Championship": [[{ date: "Sep 2012", notes: "Won Divas title" }]] },
  762: {
    "Divas Championship": [[{ date: "Jul 2008", notes: "Won inaugural Divas Championship on SmackDown" }, { date: "Feb 2010", notes: "Second Divas title reign" }]],
    "Women's Championship": [[{ date: "Jun 2009", notes: "Won Women's Championship" }]]
  },
};

// Now process the file line by line
let currentId = null;
let idLineIndex = null;
let modified = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Detect wrestler ID
  const idMatch = line.match(/id:\s*(\d+),/);
  if (idMatch) {
    currentId = parseInt(idMatch[1]);
    idLineIndex = i;
  }

  // Only process IDs >= 351
  if (currentId === null || currentId < 351) continue;

  // Check if this wrestler has reign data
  if (!reignsByIdAndTitle[currentId]) continue;

  // Look for championship entries that don't already have reigns
  // Pattern: title: "...", count: N, firstReign:
  // We want to insert reigns: [...], before firstReign:

  const titleData = reignsByIdAndTitle[currentId];

  for (const [titleKey, reignsList] of Object.entries(titleData)) {
    // Escape for regex
    const escapedTitle = titleKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // For titles with multiple championship entries (like ID 555 WWF Tag Team Championship),
    // reignsList will be an array of arrays. Otherwise it's an array with one array.
    let occurrences = reignsList;

    // Check if this is the multi-occurrence format (array of arrays where inner elements are also arrays)
    const isMultiOccurrence = Array.isArray(reignsList[0]) && Array.isArray(reignsList[0][0]);
    if (!isMultiOccurrence) {
      occurrences = [reignsList[0]]; // Wrap single occurrence
    }

    let occurrenceIdx = 0;

    // Search from the current id's line position
    for (let j = idLineIndex; j < Math.min(idLineIndex + 30, lines.length); j++) {
      if (occurrenceIdx >= occurrences.length) break;

      const currentLine = lines[j];

      // Check if we've moved to another wrestler (new id:)
      if (j > idLineIndex) {
        const nextIdMatch = currentLine.match(/^\s*id:\s*(\d+),/);
        if (nextIdMatch && parseInt(nextIdMatch[1]) !== currentId) break;
      }

      // Check if this line has the championship title we're looking for
      if (currentLine.includes(`title: "${titleKey}"`) || currentLine.includes(`title: '${titleKey}'`)) {
        // Check it doesn't already have reigns
        if (currentLine.includes('reigns:')) continue;

        // Find the pattern: count: N, firstReign: and insert reigns before firstReign
        const reignsJson = JSON.stringify(occurrences[occurrenceIdx]);
        const replacement = currentLine.replace(
          /(count:\s*\d+,\s*)(firstReign:)/,
          `$1reigns: ${reignsJson}, $2`
        );

        if (replacement !== currentLine) {
          lines[j] = replacement;
          modified++;
          occurrenceIdx++;
        }
      }
    }
  }
}

// Write the file
fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Done! Modified ${modified} championship entries with reigns arrays.`);
