const PERSONAL = {
  4: { // Hulk Hogan
    spouses: [
      { name: "Linda Claridge", years: "1983–2009", notes: "Married 26 years; two children. Highly publicized divorce." },
      { name: "Jennifer McDaniel", years: "2010–2021", notes: "Second marriage; ended in divorce." }
    ],
    children: [
      { name: "Brooke Hogan", born: 1988, notes: "Singer, reality TV star on 'Hogan Knows Best'" },
      { name: "Nick Hogan", born: 1990, notes: "Involved in 2007 car crash that left passenger John Graziano with permanent brain damage" }
    ],
    legalIssues: [
      { year: "2012", incident: "Sex tape scandal", details: "A sex tape was leaked online, recorded without his knowledge. Led to a lawsuit against Gawker Media." },
      { year: "2015", incident: "Racial slur controversy", details: "Audio surfaced of Hogan using racial slurs. WWE terminated his contract and removed him from the Hall of Fame. Reinstated in 2018." },
      { year: "2016", incident: "Gawker lawsuit verdict", details: "Won $140 million judgment against Gawker Media, bankrupting the company." }
    ],
    announcing: [],
    facts: [
      "Real name is Terry Bollea. Originally played bass guitar in a band before being recruited into wrestling.",
      "Starred as Thunderlips in Rocky III (1982).",
      "His WrestleMania III match with Andre the Giant drew a reported 93,173 fans to the Pontiac Silverdome.",
      "His heel turn as 'Hollywood Hogan' in 1996 helped launch the Monday Night Wars."
    ],
  },
  5: { // Randy Savage
    spouses: [
      { name: "Elizabeth Hulette (Miss Elizabeth)", years: "1984–1992", notes: "Their on-screen relationship was one of wrestling's greatest love stories." },
      { name: "Lynn Payne", years: "1999–2004", notes: "Also appeared as his valet in WCW as 'Gorgeous George.'" },
      { name: "Lynne Thompson", years: "2010-2011", notes: "Married shortly before his death in May 2011" }
    ],
    children: [],
    legalIssues: [],
    announcing: [
      { role: "Color Commentary", show: "Raw/Superstars", years: "1993–1994", notes: "Color commentator alongside Vince McMahon while sidelined from in-ring action" }
    ],
    facts: [
      "Was a minor league baseball player in the Cincinnati Reds and St. Louis Cardinals organizations.",
      "His WrestleMania III match against Ricky Steamboat is widely considered one of the greatest ever.",
      "Voiced 'Bonesaw McGraw' in the 2002 Spider-Man film — 'I got you for three minutes!'"
    ],
  },
  7: { // Roddy Piper
    spouses: [
      { name: "Kitty Toombs", years: "1982–2015", notes: "Married until his death; together over 30 years" }
    ],
    children: [
      { name: "Anastacia Toombs", born: 1987, notes: "Daughter" },
      { name: "Ariel Toombs", born: 1989, notes: "Co-authored a book about her father" },
      { name: "Colton Toombs", born: 1993, notes: "Son" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name was Roderick Toombs. Born in Saskatchewan — not Scotland as his character implied.",
      "Left home at age 13 and lived on the streets. Began wrestling at age 15.",
      "Starred in John Carpenter's 'They Live' (1988) — 'I have come here to chew bubblegum and kick ass.'",
      "His 'Piper's Pit' was one of the most influential talk show segments in wrestling history."
    ],
  },
  30: { // Triple H
    spouses: [
      { name: "Stephanie McMahon", years: "2003–present", notes: "Married in real life after an on-screen storyline marriage." }
    ],
    children: [
      { name: "Aurora Rose Levesque", born: 2006, notes: "Eldest daughter" },
      { name: "Murphy Claire Levesque", born: 2008, notes: "Second daughter" },
      { name: "Vaughn Evelyn Levesque", born: 2010, notes: "Third daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name is Paul Michael Levesque. From Nashua, New Hampshire.",
      "Founded and ran NXT, transforming it into WWE's critically acclaimed developmental brand.",
      "Suffered a serious cardiac event in September 2021. Retired from in-ring competition.",
      "Took over as WWE's Head of Creative in July 2022 after Vince McMahon's resignation."
    ],
  },
  31: { // Stone Cold Steve Austin
    spouses: [
      { name: "Kathryn Burrhus", years: "1990–1992", notes: "First wife." },
      { name: "Jeannie Clarke (Lady Blossom)", years: "1992–1999", notes: "English wrestler/valet. Two daughters together." },
      { name: "Debra Marshall", years: "2000–2003", notes: "Marriage ended after a domestic violence incident." },
      { name: "Kristin Feres", years: "2009–present", notes: "Fourth wife." }
    ],
    children: [
      { name: "Jade Adams", born: 1992, notes: "Daughter with Jeannie Clarke" },
      { name: "Loren Adams", born: 1996, notes: "Daughter with Jeannie Clarke" }
    ],
    legalIssues: [
      { year: "2002", incident: "Domestic violence arrest", details: "Arrested for domestic assault against then-wife Debra Marshall. Pleaded no contest, received probation." }
    ],
    announcing: [],
    facts: [
      "The 'Austin 3:16' promo after King of the Ring 1996 birthed the Attitude Era.",
      "His neck was broken by Owen Hart's piledriver at SummerSlam 1997.",
      "His rivalry with Vince McMahon is the most financially successful feud in wrestling history.",
      "Came out of retirement after 19 years for one match at WrestleMania 38 (2022)."
    ],
  },
  32: { // The Rock
    spouses: [
      { name: "Dany Garcia", years: "1997–2008", notes: "College sweetheart from University of Miami. She remained his business manager." },
      { name: "Lauren Hashian", years: "2019–present", notes: "Two daughters together." }
    ],
    children: [
      { name: "Simone Johnson", born: 2001, notes: "Works in WWE as 'Ava'" },
      { name: "Jasmine Johnson", born: 2015, notes: "Daughter with Lauren Hashian" },
      { name: "Tiana Johnson", born: 2018, notes: "Daughter with Lauren Hashian" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Third-generation wrestler: grandfather Peter Maivia and father Rocky Johnson were both pro wrestlers.",
      "Had only $7 in his pocket when cut from the CFL's Calgary Stampeders.",
      "Became the highest-paid actor in Hollywood.",
      "Co-owns the XFL football league, purchased out of bankruptcy in 2020."
    ],
  },
  33: { // Undertaker
    spouses: [
      { name: "Jodi Lynn", years: "1989–1999", notes: "First wife; one son." },
      { name: "Sara Calaway", years: "2000–2007", notes: "Second wife; two daughters." },
      { name: "Michelle McCool", years: "2010–present", notes: "Former Divas Champion; one daughter." }
    ],
    children: [
      { name: "Gunner Calaway", born: 1993, notes: "Son from first marriage" },
      { name: "Chasey Calaway", born: 2002, notes: "Daughter with Sara" },
      { name: "Gracie Calaway", born: 2005, notes: "Daughter with Sara" },
      { name: "Kaia Faith Calaway", born: 2012, notes: "Daughter with Michelle McCool" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name is Mark William Calaway. From Houston, Texas.",
      "His WrestleMania streak lasted 21-0 before Brock Lesnar ended it at WrestleMania 30.",
      "Maintained kayfabe for nearly 30 years, rarely appearing out of character in public.",
      "Retired at Survivor Series 2020, exactly 30 years after his debut."
    ],
  },
  34: { // Shawn Michaels
    spouses: [
      { name: "Rebecca Curci-Hickenbottom", years: "1999–present", notes: "Former WCW Nitro Girl 'Whisper.' Credited with helping him overcome addiction." }
    ],
    children: [
      { name: "Cameron Kade Hickenbottom", born: 2000, notes: "Son" },
      { name: "Cheyenne Michelle Hickenbottom", born: 2004, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Was addicted to painkillers in the late 1990s; born-again Christian faith helped him get clean.",
      "His back injury at the 1998 Royal Rumble forced a 4-year retirement.",
      "Trained Daniel Bryan at his San Antonio Wrestling Academy.",
      "Known as 'Mr. WrestleMania' for consistently delivering career-defining matches."
    ],
  },
  36: { // Kurt Angle
    spouses: [
      { name: "Karen Jarrett", years: "1998–2008", notes: "Later married Jeff Jarrett, Angle's rival in TNA." },
      { name: "Giovanna Yannotti", years: "2012–present", notes: "Former actress." }
    ],
    children: [
      { name: "Kyra Angle", born: 2002, notes: "Daughter with Karen" },
      { name: "Kody Angle", born: 2005, notes: "Son with Karen" },
      { name: "Giuliana Angle", born: 2011, notes: "Daughter with Giovanna" },
      { name: "Sophia Angle", born: 2012, notes: "Daughter with Giovanna" }
    ],
    legalIssues: [
      { year: "2007–2013", incident: "Multiple DUI arrests", details: "Struggled with painkiller addiction and alcoholism stemming from wrestling injuries." }
    ],
    announcing: [],
    facts: [
      "Won an Olympic gold medal at the 1996 Atlanta Olympics with a 'broken freakin' neck.'",
      "Transitioned from amateur to professional wrestling faster than almost anyone in history.",
      "Inducted into the WWE Hall of Fame in 2017."
    ],
  },
  45: { // Bret Hart
    spouses: [
      { name: "Julie Smadu", years: "1982–2002", notes: "First wife; four children." },
      { name: "Cinzia Rota", years: "2010–present", notes: "Italian-born second wife." }
    ],
    children: [
      { name: "Jade Hart", born: 1983, notes: "Daughter" },
      { name: "Dallas Hart", born: 1985, notes: "Son" },
      { name: "Alexandra Hart", born: 1988, notes: "Daughter" },
      { name: "Blade Hart", born: 1990, notes: "Son" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Eighth of twelve children of Stu and Helen Hart.",
      "The Montreal Screwjob at Survivor Series 1997 remains the most controversial moment in wrestling history.",
      "Suffered a stroke in 2002; survived prostate cancer in 2016.",
      "His brother Owen died at Over the Edge 1999 when his harness malfunctioned."
    ],
  },
  47: { // Edge
    spouses: [
      { name: "Alannah Morley", years: "2001-2004", notes: "First marriage" },
      { name: "Lisa Ortiz", years: "2004", notes: "Second marriage, quickly annulled" },
      { name: "Beth Phoenix", years: "2016–present", notes: "Fellow WWE Hall of Famer. Two daughters." }
    ],
    children: [
      { name: "Lyric Rose Copeland", born: 2016, notes: "Daughter" },
      { name: "Ashlyn Jean Copeland", born: 2020, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Forced to retire in 2011 due to cervical spinal stenosis.",
      "Made a miraculous return at the 2020 Royal Rumble after 9 years.",
      "Won the first-ever Money in the Bank ladder match at WrestleMania 21.",
      "Left WWE for AEW in 2023, wrestling under his real name Adam Copeland."
    ],
  },
  72: { // Eddie Guerrero
    spouses: [
      { name: "Vickie Guerrero", years: "1990–2005", notes: "Married until his death. She later became a prominent WWE authority figure." }
    ],
    children: [
      { name: "Shaul Guerrero", born: 1990, notes: "Eldest daughter" },
      { name: "Sherilyn Guerrero", born: 1996, notes: "Daughter" },
      { name: "Kaylie Guerrero", born: 2002, notes: "Youngest daughter" }
    ],
    legalIssues: [
      { year: "2001", incident: "WWE release for substance abuse", details: "Released due to addiction. Entered rehab and made one of wrestling's greatest comeback stories." }
    ],
    announcing: [],
    facts: [
      "Part of the legendary Guerrero wrestling dynasty from El Paso, Texas.",
      "His 2004 WWE Championship win is one of wrestling's greatest redemption stories.",
      "'I Lie, I Cheat, I Steal' became one of the most beloved gimmicks in WWE history.",
      "Died November 13, 2005 at age 38 from acute heart failure."
    ],
  },
  74: { // Vince McMahon
    spouses: [
      { name: "Linda McMahon", years: "1966–present", notes: "Business partner in building WWE. Later served as SBA Administrator." }
    ],
    children: [
      { name: "Shane McMahon", born: 1970, notes: "Former WWE performer and executive." },
      { name: "Stephanie McMahon", born: 1976, notes: "Married Triple H, served as WWE Chief Brand Officer." }
    ],
    legalIssues: [
      { year: "1994", incident: "Federal steroid trial", details: "Indicted on steroid distribution charges. Acquitted on all counts." },
      { year: "2022", incident: "Sexual misconduct allegations", details: "Hush money payments totaling $12M+ reported. Resigned as CEO/Chairman." },
      { year: "2024", incident: "Janel Grant lawsuit", details: "Federal lawsuit alleging sexual abuse and trafficking. Resigned from TKO Group." }
    ],
    announcing: [
      { role: "Play-by-Play", show: "Raw/Superstars/PPV", years: "1971–1997", notes: "WWF's lead announcer for decades before 'Mr. McMahon' debuted." }
    ],
    facts: [
      "Born in a trailer park in North Carolina. Did not meet his father until age 12.",
      "Purchased the WWF in 1982 and transformed it into a global empire.",
      "Created WrestleMania in 1985.",
      "His 'Mr. McMahon' villain is considered one of the greatest heel characters ever."
    ],
  },
  75: { // John Cena
    spouses: [
      { name: "Elizabeth Huberdeau", years: "2009–2012", notes: "First wife." },
      { name: "Shay Shariatzadeh", years: "2020–present", notes: "Electrical engineer." }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Has granted over 650 Make-A-Wish wishes, more than any other individual.",
      "Is fluent in Mandarin Chinese.",
      "Successfully transitioned to Hollywood — Fast & Furious, Peacemaker.",
      "Announced 2025 as his retirement tour from WWE."
    ],
  },
  77: { // Randy Orton
    spouses: [
      { name: "Samantha Speno", years: "2007–2013", notes: "First wife; one daughter." },
      { name: "Kim Marie Kessler", years: "2015–present", notes: "Second wife." }
    ],
    children: [
      { name: "Alanna Marie Orton", born: 2008, notes: "Daughter" },
      { name: "Brooklyn Rose Orton", born: 2016, notes: "Daughter with Kim" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Third-generation wrestler. Youngest World Heavyweight Champion at age 24.",
      "The RKO 'outta nowhere' became one of the most viral memes in wrestling history.",
      "14 world championship reigns.",
      "Returned at Survivor Series 2023 after 18 months recovering from spinal fusion surgery."
    ],
  },
  78: { // Rey Mysterio
    spouses: [
      { name: "Angie Gutierrez", years: "1996–present", notes: "High school sweetheart." }
    ],
    children: [
      { name: "Dominik Mysterio", born: 1997, notes: "WWE wrestler; currently feuding with his own father" },
      { name: "Aalyah Mysterio", born: 2001, notes: "Has appeared in WWE storylines" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "At 5'6\" he is the smallest person ever to win the World Heavyweight Championship.",
      "Began wrestling at age 14, trained by his uncle Rey Mysterio Sr.",
      "Popularized the 619 move, named after San Diego's area code."
    ],
  },
  79: { // Brock Lesnar
    spouses: [
      { name: "Rena Mero (Sable)", years: "2006–present", notes: "Former WWE personality." }
    ],
    children: [
      { name: "Mya Lynn Lesnar", born: 2002, notes: "Collegiate track and field athlete" },
      { name: "Luke Lesnar", born: 2002, notes: "Twin son" },
      { name: "Turk Lesnar", born: 2009, notes: "Son" },
      { name: "Duke Lesnar", born: 2010, notes: "Son" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Two-time NCAA Division I heavyweight wrestling champion.",
      "Lives on a farm in rural Saskatchewan, famously preferring isolation.",
      "Became UFC Heavyweight Champion in 2008.",
      "Ended The Undertaker's WrestleMania streak (21-0) at WrestleMania 30."
    ],
  },
  85: { // CM Punk
    spouses: [
      { name: "AJ Lee (April Mendez)", years: "2014–present", notes: "Fellow WWE wrestler." }
    ],
    children: [],
    legalIssues: [],
    announcing: [
      { role: "Panelist", show: "WWE Backstage on FS1", years: "2019-2020", notes: "His first public return to the WWE umbrella after leaving in 2014. Served as an analyst alongside Renee Paquette and Booker T." }
    ],
    facts: [
      "Is straight edge — no alcohol, drugs, or tobacco. Core to his wrestling persona.",
      "His 434-day WWE Championship reign is one of the longest in the modern era.",
      "His 'Pipe Bomb' promo (June 27, 2011) is one of the most groundbreaking in wrestling history.",
      "Returned to WWE at Survivor Series 2023 after nearly a decade away."
    ],
  },
  87: { // The Miz
    spouses: [
      { name: "Maryse Ouellet", years: "2014–present", notes: "Fellow wrestler; starred together in 'Miz & Mrs.'" }
    ],
    children: [
      { name: "Monroe Sky Mizanin", born: 2018, notes: "Daughter" },
      { name: "Madison Jade Mizanin", born: 2019, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Got his start on MTV's 'The Real World' (2001).",
      "Was banned from the WWE locker room early on; forced to change in the hallway.",
      "Hosted WrestleMania 39."
    ],
  },
  91: { // Daniel Bryan
    spouses: [
      { name: "Brie Bella", years: "2014–present", notes: "WWE wrestler from the Bella Twins." }
    ],
    children: [
      { name: "Birdie Joe Danielson", born: 2017, notes: "Daughter" },
      { name: "Buddy Dessert Danielson", born: 2020, notes: "Son" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Trained by Shawn Michaels. Wrestled as 'The American Dragon' on the indie circuit.",
      "The 'YES! Movement' was one of the most organic fan-driven stories in WWE history.",
      "Retired in 2016 due to concussions, cleared to return in 2018.",
      "Left WWE for AEW in 2021 under his real name Bryan Danielson."
    ],
  },
  92: { // Seth Rollins
    spouses: [
      { name: "Becky Lynch (Rebecca Quin)", years: "2021–present", notes: "Fellow WWE main eventer." }
    ],
    children: [
      { name: "Roux Rollins", born: 2020, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Won the first-ever NXT Championship.",
      "Cashed in Money in the Bank during the WrestleMania 31 main event — one of the greatest WM moments.",
      "Founded the Black and Brave Wrestling Academy in Davenport, Iowa."
    ],
  },
  93: { // Roman Reigns
    spouses: [
      { name: "Galina Becker", years: "2014–present", notes: "College sweetheart from Georgia Tech." }
    ],
    children: [
      { name: "Joelle Anoa'i", born: 2008, notes: "Daughter" },
      { name: "Twin boys", born: 2016, notes: "Sons" },
      { name: "Twin boys", born: 2020, notes: "Sons" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Part of the Anoa'i wrestling family (related to The Rock, Yokozuna, Rikishi, The Usos).",
      "Diagnosed with leukemia in 2007; it returned in 2018 — relinquished the title on live TV.",
      "His 'Tribal Chief' heel turn in 2020 is one of the greatest character reinventions ever.",
      "Held the Universal Championship for over 1,316 days."
    ],
  },
  95: { // Bray Wyatt
    spouses: [
      { name: "Samantha Rotunda", years: "2012–2017", notes: "First wife; two daughters." },
      { name: "JoJo Offerman", years: "2019–2023", notes: "WWE ring announcer; two children." }
    ],
    children: [
      { name: "Kendyl Rotunda", born: 2013, notes: "Daughter" },
      { name: "Cadyn Rotunda", born: 2016, notes: "Daughter" },
      { name: "Knash Rotunda", born: 2019, notes: "Son with JoJo" },
      { name: "Hyrie Rotunda", born: 2020, notes: "Daughter with JoJo" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Son of IRS (Mike Rotunda), grandson of Blackjack Mulligan. Bo Dallas is his brother.",
      "Created 'The Fiend' character himself, including designing the mask.",
      "The Firefly Fun House Match against Cena at WrestleMania 36 was a cinematic masterpiece.",
      "Died August 24, 2023 at age 36 from a heart attack."
    ],
  },
  96: { // Kevin Owens
    spouses: [
      { name: "Karina Steen", years: "2007–present", notes: "Very private about personal life." }
    ],
    children: [
      { name: "Owen Steen", born: 2008, notes: "His ring name 'Kevin Owens' derives from his son's name" },
      { name: "Elodie Steen", born: 2014, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "From Quebec, Canada. His son Owen was named after Owen Hart.",
      "Defeated John Cena clean in his first main roster match.",
      "Is a massive Disney fan."
    ],
  },
  98: { // AJ Styles
    spouses: [
      { name: "Wendy Jones Styles", years: "2000–present", notes: "Very private." }
    ],
    children: [
      { name: "Ajay Jones", born: 2005, notes: "Son" },
      { name: "Avery Jones", born: 2007, notes: "Son" },
      { name: "Albey Jones", born: 2009, notes: "Son" },
      { name: "Anney Jones", born: 2014, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Grew up in extreme poverty in a Georgia trailer park.",
      "Named best wrestler in the world during his TNA/NJPW years.",
      "His Royal Rumble 2016 debut received one of the biggest pops in Rumble history.",
      "Deeply religious and open about his Christian faith."
    ],
  },
  101: { // Becky Lynch
    spouses: [
      { name: "Seth Rollins (Colby Lopez)", years: "2021–present", notes: "Fellow WWE main eventer." }
    ],
    children: [
      { name: "Roux Rollins", born: 2020, notes: "Relinquished the Raw Women's title on TV to announce her pregnancy." }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Born in Limerick, Ireland. Main evented WrestleMania 35 — the first women's WM main event.",
      "'The Man' persona was born organically when fans rallied behind her after SummerSlam 2018.",
      "Before wrestling, she worked as a clown at children's parties and trained as a flight attendant."
    ],
  },
  102: { // Charlotte Flair
    spouses: [
      { name: "Andrade El Idolo", years: "2022–present", notes: "Fellow wrestler; married in Mexico." }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Daughter of Ric Flair. 14-time women's world champion.",
      "Her brother Reid died of a drug overdose in 2013 at age 25.",
      "First woman to main event a modern WWE PPV (Evolution 2018)."
    ],
  },
  103: { // Sasha Banks
    spouses: [
      { name: "Sarath Ton (Mikaze)", years: "2016–present", notes: "WWE costume designer." }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "First cousin of Snoop Dogg.",
      "Her HIAC match with Bayley (2016) was the first women's Hell in a Cell.",
      "Appeared as Koska Reeves in 'The Mandalorian' — one of the few wrestlers in a Star Wars property."
    ],
  },
  110: { // Ric Flair
    spouses: [
      { name: "Leslie Goodman", years: "1971–1983", notes: "First wife." },
      { name: "Elizabeth Harrell", years: "1983–2006", notes: "Mother of Charlotte." },
      { name: "Tiffany VanDemark", years: "2006–2009", notes: "Third wife." },
      { name: "Jackie Beems", years: "2009–2014", notes: "Fourth wife." },
      { name: "Wendy Barlow", years: "2018–present", notes: "Fifth wife." }
    ],
    children: [
      { name: "David Flair", born: 1979, notes: "Son; wrestled briefly in WCW" },
      { name: "Ashley Fliehr (Charlotte Flair)", born: 1986, notes: "14-time women's champion" },
      { name: "Reid Fliehr", born: 1988, notes: "Died of a drug overdose in 2013 at age 25" }
    ],
    legalIssues: [
      { year: "Multiple", incident: "Financial troubles", details: "Severe financial difficulties despite earning millions, attributed to lavish lifestyle and multiple divorces." }
    ],
    announcing: [
      { role: "Color Commentary", show: "WCW Monday Nitro", years: "1998-1999", notes: "Provided color commentary during periods away from in-ring competition in WCW" }
    ],
    facts: [
      "Recognized as a 16-time world champion.",
      "Survived a 1975 plane crash that broke his back in three places.",
      "Nearly died in 2017 when his intestine ruptured — placed in a medically induced coma.",
      "Had his 'Last Match' in July 2022 at age 73."
    ],
  },
  128: { // Cody Rhodes
    spouses: [
      { name: "Brandi Rhodes", years: "2013–present", notes: "Former WWE/AEW personality." }
    ],
    children: [
      { name: "Liberty Iris Rhodes", born: 2021, notes: "Daughter" }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Son of Dusty Rhodes, half-brother of Goldust.",
      "Co-founded AEW in 2019 before returning to WWE in 2022.",
      "Tore his pectoral muscle before Hell in a Cell 2022 and still competed.",
      "Won the Undisputed WWE Championship at WrestleMania 40, completing 'finish the story.'"
    ],
  },
  140: { // Rhea Ripley
    spouses: [
      { name: "Buddy Matthews", years: "2024–present", notes: "Fellow wrestler." }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "From Adelaide, South Australia. Started training at age 14.",
      "Won the inaugural NXT UK Women's Championship.",
      "Her 'Mami' dynamic with Dominik Mysterio became one of WWE's most entertaining pairings."
    ],
  },
  168: { // Jerry Lawler
    spouses: [
      { name: "Kay Lawler", years: "1971-1984", notes: "First wife" },
      { name: "Stacy Carter", years: "2000-2003", notes: "Also known as The Kat in WWE" }
    ],
    children: [
      { name: "Brian Christopher Lawler", born: 1972, notes: "Son; wrestled as Grandmaster Sexay. Died in 2018." }
    ],
    legalIssues: [
      { year: "2012", incident: "Domestic assault arrest", details: "Arrested on domestic assault charges in Memphis. The charges were later dropped." }
    ],
    announcing: [
      { role: "Color Commentary", show: "Raw/PPV", years: "1993–2014", notes: "Defined the Raw color commentary role for over two decades." }
    ],
    facts: [
      "King of Memphis wrestling for decades, holding the USWA title over 50 times.",
      "His feud with Andy Kaufman is one of the most famous celebrity-wrestling interactions ever.",
      "Suffered a real cardiac arrest on live TV during Raw in 2012. Was resuscitated.",
      "Is a talented caricature artist."
    ],
  },
  81: { // Booker T
    spouses: [
      { name: "Sharmell Sullivan-Huffman", years: "2005–present", notes: "Former WCW Nitro Girl turned 'Queen Sharmell.'" }
    ],
    children: [
      { name: "Brandon Huffman", notes: "Son" },
      { name: "Kendrick Huffman", notes: "Son (twin with Brandon)" }
    ],
    legalIssues: [
      { year: "1987", incident: "Armed robbery conviction", details: "Before wrestling, convicted of armed robbery of a Wendy's. Served 19 months. Speaks openly about it as a turning point." }
    ],
    announcing: [
      { role: "Color Commentary", show: "SmackDown/Raw", years: "2011–2015", notes: "SmackDown commentator and pre-show analyst." }
    ],
    facts: [
      "His 'Five time!' catchphrase came from his WCW World Championship reigns.",
      "Runs 'Reality of Wrestling' wrestling school in Houston.",
      "His Spinarooni is one of the most beloved signature taunts in wrestling history."
    ],
  },
  49: { // Jeff Hardy
    spouses: [
      { name: "Beth Britt", years: "2011–present", notes: "Together since 1999." }
    ],
    children: [
      { name: "Ruby Claire Hardy", born: 2010, notes: "Daughter" },
      { name: "Nera Quinn Hardy", born: 2015, notes: "Daughter" }
    ],
    legalIssues: [
      { year: "2009", incident: "Drug trafficking charges", details: "Arrested; prescription drugs found at home. Served 10 days in jail." },
      { year: "2022", incident: "DUI arrest", details: "Arrested for DUI in Florida. Released by WWE shortly before." }
    ],
    announcing: [],
    facts: [
      "He and brother Matt started wrestling in their backyard as kids.",
      "First appeared in WWE at age 16 as a jobber in 1994.",
      "Is an accomplished amateur artist and musician.",
      "His struggles with substance abuse have been one of wrestling's most public battles."
    ],
  },
  44: { // Kane (Glenn Jacobs)
    spouses: [{ name: "Crystal Maurisa Goins", years: "1995–present", notes: "Married before his WWE career began" }],
    children: [{ name: "Arista", born: 0, notes: "Stepdaughter" }, { name: "Devan", born: 0, notes: "Stepdaughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Elected Mayor of Knox County, Tennessee in 2018 and re-elected in 2022.", "Holds a degree in English literature from Northeast Missouri State University.", "Outspoken libertarian who has written columns for Glenn Beck’s TheBlaze website.", "Co-founded a State Farm insurance agency in Knoxville, Tennessee."],
  },
  43: { // Mankind / Mick Foley
    spouses: [{ name: "Collette Foley (née Christie)", years: "1992–present", notes: "Married since early in his career" }],
    children: [{ name: "Dewey Foley", born: 1992, notes: "Appeared on WWE TV as a child" }, { name: "Noelle Foley", born: 1993, notes: "Appeared on WWE TV and briefly involved in wrestling media" }, { name: "Hughie Foley", born: 1998, notes: "Son" }, { name: "Mickey Foley", born: 2002, notes: "Youngest child" }],
    legalIssues: [],
    announcing: [],
    facts: ["NYT bestselling author; 'Have a Nice Day!' debuted at #1 on the bestseller list in 1999.", "Performs as Santa Claus for charity events and is a passionate Christmas enthusiast.", "Lost two-thirds of his right ear during a 1994 match in Munich against Vader.", "Stand-up comedian who has toured extensively with one-man shows."],
  },
  56: { // Big Show (Paul Wight)
    spouses: [{ name: "Melissa Ann Piavis", years: "1997–2002", notes: "First wife; divorced" }, { name: "Bess Katramados", years: "2002–present", notes: "Second wife; former model" }],
    children: [{ name: "Cierra Wight", born: 1998, notes: "Daughter from first marriage; pursued modeling and volleyball" }],
    legalIssues: [],
    announcing: [],
    facts: ["Had surgery to remove a pituitary tumor which successfully halted his acromegaly-driven growth.", "Starred in the Netflix comedy series 'The Big Show Show' (2020).", "Was billed as 'the son of Andre' early in WCW, though they were not related.", "Appeared in films including 'Knucklehead' (2010) and 'Fighting with My Family' (2019)."],
  },
  76: { // Batista (Dave Bautista)
    spouses: [{ name: "Glenda Bautista", years: "1990–1998", notes: "First wife; divorced" }, { name: "Angie Bautista", years: "1998–2006", notes: "Second wife; divorced" }, { name: "Sarah Jade", years: "2015–2019", notes: "Third wife; competitive pole fitness athlete; divorced" }],
    children: [{ name: "Keilani Bautista", born: 1990, notes: "Daughter from first marriage" }, { name: "Athena Bautista", born: 1992, notes: "Daughter from first marriage" }, { name: "Oliver Bautista", born: 2005, notes: "Son adopted with second wife Angie" }],
    legalIssues: [],
    announcing: [],
    facts: ["Filipino-American; dual citizen of the United States and the Philippines.", "Major Hollywood star: Drax in Guardians of the Galaxy, Blade Runner 2049, Dune, Glass Onion.", "Competed in MMA with a 1-0 professional record, winning his lone fight in 2012.", "Worked as a bouncer and lifeguard before breaking into professional wrestling."],
  },
  53: { // Mark Henry
    spouses: [{ name: "Jana Henry", years: "2002–present", notes: "Married" }],
    children: [{ name: "Jacob Henry", born: 2004, notes: "Son" }, { name: "Joanna Henry", born: 2006, notes: "Daughter" }],
    legalIssues: [],
    announcing: [
      { role: "Pre-show Analyst", show: "WWE Kickoff Shows", years: "2018-2021", notes: "Regular panelist on WWE pay-per-view pre-shows and occasional Raw commentator" }
    ],
    facts: ["Legitimately one of the strongest men ever: held WDFPF powerlifting records including a 2,336 lb total.", "Competed in weightlifting at the 1992 Barcelona and 1996 Atlanta Olympics.", "Signed by WWE in 1996 for a 10-year, $10 million contract.", "Won the 2002 Arnold Strongman Classic competition."],
  },
  109: { // Goldberg
    spouses: [{ name: "Wanda Ferraton", years: "2005–present", notes: "Stunt double and actress" }],
    children: [{ name: "Gage Goldberg", born: 2006, notes: "Son; has appeared with Goldberg on WWE television" }],
    legalIssues: [],
    announcing: [],
    facts: ["Played professional football for the Los Angeles Rams, Atlanta Falcons, and Carolina Panthers.", "His WCW undefeated streak was billed at 173-0, though the exact number is disputed.", "Trained in martial arts and was a competitive kickboxer before wrestling.", "His entrance with pyrotechnics and security escort became one of the most iconic in wrestling history."],
  },
  35: { // Chris Jericho
    spouses: [{ name: "Jessica Lockhart Irvine", years: "2000–present", notes: "Met while Jericho was in WWE" }],
    children: [{ name: "Ash Irvine", born: 2003, notes: "Twin son" }, { name: "Cheyenne Irvine", born: 2003, notes: "Twin daughter" }, { name: "Sierra Irvine", born: 2006, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Lead vocalist of the rock/metal band Fozzy.", "Host of the hugely popular 'Talk Is Jericho' podcast.", "NYT bestselling author with multiple books including 'A Lion's Tale'.", "Son of former NHL player Ted Irvine (Rangers, Kings)."],
  },
  61: { // Lita (Amy Dumas)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["The love triangle with Matt Hardy and Edge in 2005 was a real-life situation that became a storyline.", "Fronted the punk band The Luchagors.", "Passionate animal rescue advocate.", "Traveled to Mexico early in her career to train in lucha libre, inspiring her high-flying style."],
  },
  50: { // Matt Hardy
    spouses: [{ name: "Reby Sky (Rebecca Reyes)", years: "2013–present", notes: "Model and musician" }],
    children: [{ name: "Maxel Hardy", born: 2015, notes: "Appeared in Broken Matt Hardy segments as 'King Maxel'" }, { name: "Wolfgang Hardy", born: 2018, notes: "Named after Mozart" }, { name: "Bartholomew Hardy", born: 2020, notes: "Third son" }],
    legalIssues: [{ year: "2011", incident: "DWI arrest", details: "Arrested for driving while impaired in North Carolina." }],
    announcing: [],
    facts: ["Created the 'Broken' Matt Hardy character in TNA/Impact in 2016, a viral sensation.", "The Hardy Boyz pioneered TLC matches and are considered one of the greatest tag teams ever.", "Grew up in Cameron, NC, where he and Jeff started backyard promotion OMEGA."],
  },
  10: { // Jake "The Snake" Roberts
    spouses: [{ name: "Cheryl Roberts", years: "1975–1999", notes: "Divorced after long marriage" }],
    children: [{ name: "Brandy Roberts", born: 0, notes: "Daughter" }, { name: "Jake Roberts Jr.", born: 0, notes: "Son" }],
    legalIssues: [{ year: "2002", incident: "Substance-related incidents", details: "Numerous arrests related to alcohol and drug addiction over the years." }],
    announcing: [],
    facts: ["Pioneered psychology and promo work; one of the greatest talkers ever despite never winning a world title.", "Recovery from addiction chronicled through DDP Yoga — became an inspirational success story.", "Featured in the documentary 'Beyond the Mat' (1999).", "His father Grizzly Smith was also a wrestler; Jake had a deeply troubled childhood."],
  },
  6: { // Andre the Giant
    spouses: [],
    children: [{ name: "Robin Christensen-Roussimoff", born: 1979, notes: "Daughter; Andre acknowledged paternity but was largely absent" }],
    legalIssues: [],
    announcing: [],
    facts: ["Stood approximately 7'4\" and weighed over 500 lbs due to acromegaly.", "Legendary drinker; stories include consuming 106 beers in a single sitting.", "Appeared as Fezzik in 'The Princess Bride' (1987).", "Inaugural WWE Hall of Fame inductee in 1993, the year of his death."],
  },
  25: { // Owen Hart
    spouses: [{ name: "Martha Hart (née Patterson)", years: "1989–1999", notes: "Widowed; Martha became a fierce advocate against WWE" }],
    children: [{ name: "Oje Hart", born: 1992, notes: "Son" }, { name: "Athena Hart", born: 1995, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Died May 23, 1999, at Over the Edge when a harness malfunctioned — fell 78 feet into the ring.", "Martha Hart sued WWE and settled for $18 million; allowed his Hall of Fame induction in 2022.", "Widely regarded as one of the most gifted technical wrestlers, trained in the Hart Dungeon.", "Youngest of Stu and Helen Hart's 12 children."],
  },
  26: { // British Bulldog (Davey Boy Smith)
    spouses: [{ name: "Diana Hart Smith", years: "1984–2000", notes: "Daughter of Stu Hart, sister of Bret Hart; divorced" }],
    children: [{ name: "Harry Smith", born: 1985, notes: "Son; became David Hart Smith in WWE's Hart Dynasty" }, { name: "Georgia Smith", born: 1988, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["His SummerSlam 1992 match vs Bret Hart at Wembley Stadium (~80,000 fans) is considered one of the greatest ever.", "Originally from Golborne, Lancashire, England; trained in the Hart Dungeon.", "Famously performed a running powerslam on the 580+ lb Yokozuna.", "Died May 18, 2002, at age 39 from a heart attack."],
  },
  321: { // Sting
    spouses: [{ name: "Sue Borden", years: "1986–2010", notes: "First wife; divorced" }, { name: "Sabine Glenn Borden", years: "2015–present", notes: "Second wife" }],
    children: [{ name: "Garrett Borden", born: 1988, notes: "Son; briefly wrestled in TNA" }, { name: "Steven Borden Jr.", born: 1991, notes: "Son" }],
    legalIssues: [],
    announcing: [],
    facts: ["Never appeared in WWF/WWE during the Monday Night Wars — the biggest star to avoid the company until 2014.", "Born-again Christian who credits faith with overcoming personal struggles.", "Transformation from surfer Sting to Crow-inspired Sting (1996-97) is one of wrestling's greatest reinventions.", "Retired after AEW Revolution 2024, ending a career spanning nearly 40 years."],
  },
  9: { // Ted DiBiase Sr.
    spouses: [{ name: "Melanie DiBiase", years: "1981–present", notes: "Long-term marriage" }],
    children: [{ name: "Ted DiBiase Jr.", born: 1982, notes: "Wrestled in WWE 2008–2013, part of Legacy stable" }, { name: "Mike DiBiase", born: 0, notes: "Also pursued wrestling briefly" }, { name: "Brett DiBiase", born: 0, notes: "Son" }],
    legalIssues: [{ year: "2020", incident: "Mississippi welfare fraud scandal", details: "Connected to Mississippi welfare funds misuse; Ted Jr. and Brett faced charges related to misspent TANF funds." }],
    announcing: [],
    facts: ["Adoptive father 'Iron' Mike DiBiase was also a pro wrestler who died of a heart attack in the ring in 1969.", "Became an ordained Christian minister after retiring from wrestling.", "The Million Dollar Belt was a real custom-made gold-plated championship.", "Trained by Dory Funk Jr. and wrestled in Mid-South Wrestling before WWF."],
  },
  23: { // Razor Ramon / Scott Hall
    spouses: [{ name: "Dana Lee Hall", years: "1990s–divorced", notes: "Had children together" }],
    children: [{ name: "Cody Hall", born: 1991, notes: "Became a professional wrestler, worked in NJPW" }, { name: "Cassidy Hall", born: 0, notes: "Daughter" }],
    legalIssues: [{ year: "2011", incident: "Multiple arrests", details: "Numerous incidents related to public intoxication and disorderly conduct over the years." }],
    announcing: [],
    facts: ["Founding member of the NWO alongside Hulk Hogan and Kevin Nash, which changed the wrestling business.", "DDP helped him get sober through DDP Yoga, documented in 'The Resurrection of Jake the Snake'.", "Died on March 14, 2022, at age 63 after complications from hip surgery.", "Inducted into the WWE Hall of Fame twice: as Razor Ramon (2014) and with the NWO (2020)."],
  },
  24: { // Diesel / Kevin Nash
    spouses: [{ name: "Tamara Nash", years: "1988–present", notes: "Long-term marriage" }],
    children: [{ name: "Tristen Nash", born: 1996, notes: "Son; tragically died in October 2022 at age 26 from cardiac arrest" }],
    legalIssues: [],
    announcing: [],
    facts: ["Tore his quadricep multiple times, including the famous 2002 Royal Rumble return where he tore it simply walking to the ring.", "Appeared in films including 'The Punisher' (2004), 'John Wick' (2014), and 'Magic Mike' (2012).", "Played professional basketball in Europe before entering wrestling.", "Co-founded the NWO with Hulk Hogan and Scott Hall."],
  },
  62: { // Trish Stratus
    spouses: [{ name: "Ron Fisico", years: "2006–present", notes: "High school sweetheart" }],
    children: [{ name: "Maximus Fisico", born: 2013, notes: "Son" }, { name: "Madison Patricia Fisico", born: 2014, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Born in Toronto, Ontario, Canada; of Greek descent.", "Seven-time WWE Women's Champion, considered one of the greatest female wrestlers ever.", "Opened a yoga studio called 'Stratusphere' in Toronto.", "Retired at Unforgiven 2006 as Women's Champion, returned multiple times including a 2023 run."],
  },
  60: { // Chyna (Joanie Laurer)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Had a high-profile relationship with Triple H during DX; the breakup when HHH began dating Stephanie McMahon was very public.", "First woman to enter the Royal Rumble match and first female Intercontinental Champion.", "Died on April 20, 2016, at age 46 from an accidental overdose.", "Posthumously inducted into the WWE Hall of Fame in 2019 as part of D-Generation X."],
  },
  46: { // Chris Benoit
    spouses: [{ name: "Martina Benoit", years: "1988–2003", notes: "First wife; divorced" }, { name: "Nancy Benoit (Woman)", years: "2000–2007", notes: "Former WCW manager; murdered by Chris in June 2007" }],
    children: [{ name: "David Benoit", born: 1993, notes: "Son from first marriage; has pursued wrestling" }, { name: "Megan Benoit", born: 0, notes: "Daughter from first marriage" }, { name: "Daniel Benoit", born: 2000, notes: "Son with Nancy; murdered by Chris at age 7" }],
    legalIssues: [{ year: "2007", incident: "Murder-suicide", details: "On June 22–24, 2007, Chris murdered his wife Nancy and son Daniel before hanging himself. CTE was found in his brain." }],
    announcing: [],
    facts: ["Posthumous brain examination found severe CTE; his brain resembled that of an 85-year-old Alzheimer's patient.", "Known as 'The Canadian Crippler'; trained in the Hart Family Dungeon.", "Won the World Heavyweight Championship at WrestleMania XX in a triple threat with HHH and Shawn Michaels.", "WWE has essentially erased him from their history; not in the Hall of Fame and rarely mentioned."],
  },
  48: { // Christian (Jason Reso)
    spouses: [{ name: "Denise Hartmann Reso", years: "2001–present", notes: "Married in 2001" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Best friends with Edge (Adam Copeland) since childhood in Orangeville, Ontario.", "Won the World Heavyweight Championship twice in 2011 after nearly two decades.", "Retired in 2014 due to concussions, made a surprise return at the 2021 Royal Rumble.", "Signed with AEW in 2022, became TNT Champion with a notable heel run."],
  },
  42: { // William Regal (Darren Matthews)
    spouses: [],
    children: [{ name: "Bailey Matthews", born: 0, notes: "Son; has pursued amateur wrestling" }],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "NXT", years: "2014–2020", notes: "Beloved commentator and GM on NXT" }],
    facts: ["Born in Blackpool, England; started wrestling at age 15 in the British wrestling scene.", "Very open about his past struggles with alcohol and drug addiction and his recovery.", "Served as trainer and coach at the WWE Performance Center, helping develop NXT talent.", "Had a brief AEW stint in 2022 with the Blackpool Combat Club before returning to WWE."],
  },
  80: { // JBL (John Bradshaw Layfield)
    spouses: [{ name: "Meredith Whitney", years: "2005–present", notes: "Prominent Wall Street analyst" }],
    children: [],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "SmackDown", years: "2006–2009", notes: "Full-time commentator after in-ring retirement" }, { role: "Color Commentator", show: "Raw/Various", years: "2012–2017", notes: "Returned alongside Michael Cole" }],
    facts: ["A successful stock market investor and financial commentator; appeared regularly on Fox News.", "Faced bullying allegations from multiple wrestlers including the Blue Meanie incident at ECW One Night Stand 2005.", "Climbed mountains on multiple continents for charity.", "His transformation from APA brawler to JBL in 2004 is one of the most dramatic character reinventions in WWE."],
  },
  120: { // Raven (Scott Levy)
    spouses: [],
    children: [],
    legalIssues: [{ year: "2008", incident: "Lawsuit against WWE", details: "Part of former wrestlers who sued WWE seeking employee classification for benefits; ultimately unsuccessful." }],
    announcing: [],
    facts: ["Highly educated; attended the University of Delaware, known as one of the most intellectual wrestlers.", "Created the Raven character himself, drawing from grunge culture and psychological depth.", "Held over 30 championships across ECW, WCW, WWE, and TNA.", "Was childhood friends with Tommy Dreamer, incorporated into his ECW storylines."],
  },
  89: { // Dolph Ziggler (Nick Nemeth)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Nicholas Theodore Nemeth; three-time All-American amateur wrestler at Kent State University.", "Pursues stand-up comedy and has performed at clubs under his real name.", "His brother Ryan Nemeth is also a professional wrestler who has worked for AEW.", "Holds a degree in political science from Kent State."],
  },
  90: { // Kofi Kingston
    spouses: [{ name: "Kori Campfield", years: "2014–present", notes: "Private marriage" }],
    children: [{ name: "Khi", born: 2013, notes: "Son" }, { name: "Orion", born: 0, notes: "Son" }],
    legalIssues: [],
    announcing: [],
    facts: ["Born Kofi Nahaje Sarkodie-Mensah in Kumasi, Ghana; raised in Winchester, Massachusetts.", "Became the first African-born WWE Champion at WrestleMania 35 (2019) — dubbed KofiMania.", "Was originally given a Jamaican accent gimmick early in WWE before it was quietly dropped.", "Has been a member of The New Day with Big E and Xavier Woods since 2014."],
  },
  94: { // Dean Ambrose / Jon Moxley
    spouses: [{ name: "Renee Paquette", years: "2017–present", notes: "Married April 2017; known as Renee Young in WWE" }],
    children: [{ name: "Nora", born: 2021, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Jonathan David Good; grew up in a troubled household in Cincinnati, Ohio.", "Left WWE in 2019, debuted in AEW as Jon Moxley, becoming a multi-time AEW World Champion.", "Known for extreme hardcore style honed in CZW and independent promotions.", "Was a member of The Shield alongside Roman Reigns and Seth Rollins."],
  },
  97: { // Sami Zayn (Rami Sebei)
    spouses: [{ name: "Joelle", years: "2019–present", notes: "Private ceremony" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Rami Sebei; born in Laval, Quebec to Syrian immigrant parents.", "Founded the Sami For Syria campaign through UNICEF, raising funds for mobile medical units.", "Wrestled as El Generico on the indie circuit, wearing a mask with an orphanage backstory.", "His rivalry with Kevin Owens spans over two decades from their indie days to WWE."],
  },
  99: { // Finn Bálor (Fergal Devitt)
    spouses: [{ name: "Vero Rodriguez", years: "2019–present", notes: "Mexican journalist" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Fergal Devitt; from Bray, County Wicklow, Ireland.", "Co-founded the Bullet Club stable in NJPW in 2013 while wrestling as Prince Devitt.", "Was the inaugural WWE Universal Champion in 2016 but vacated the next night due to a shoulder injury.", "Known as an avid LEGO collector and enthusiast."],
  },
  100: { // Drew McIntyre
    spouses: [{ name: "Taryn Terrell", years: "2010–2011", notes: "Divorced; she was also a wrestler" }, { name: "Kaitlyn Frohnapfel", years: "2016–present", notes: "Married December 2016" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Andrew Galloway IV; from Ayr, Scotland.", "Dubbed 'The Chosen One' by Vince McMahon in 2009, released in 2014, rebuilt on the indie circuit, returned 2017.", "Won the WWE Championship at WrestleMania 36 (2020), first held without a live audience due to COVID.", "Close friends with Sheamus; the two trained together in Ireland early in their careers."],
  },
  86: { // Sheamus (Stephen Farrelly)
    spouses: [{ name: "Isabella Revilla", years: "2023–present", notes: "Married in 2023" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Stephen Farrelly; from Dublin, Ireland with a degree in IT.", "Runs the popular YouTube channel Celtic Warrior Workouts.", "Appeared in Teenage Mutant Ninja Turtles: Out of the Shadows (2016).", "Close friends with Drew McIntyre; they teamed and feuded throughout their careers."],
  },
  108: { // Alberto Del Rio
    spouses: [{ name: "Angela Velkei", years: "2000s–2014", notes: "Divorced; mother of his children" }],
    children: [{ name: "Sofia", born: 0, notes: "Daughter" }, { name: "José Alberto Jr.", born: 0, notes: "Son" }],
    legalIssues: [{ year: "2020", incident: "Arrested on sexual assault charges", details: "Charged in San Antonio, Texas with sexual assault of a former partner." }],
    announcing: [],
    facts: ["Real name José Alberto Rodríguez; son of Dos Caras, nephew of Mil Máscaras — a legendary Mexican wrestling family.", "Had a high-profile relationship with WWE wrestler Paige marked by public controversy.", "Competed professionally in MMA with a 9–5 record, including fights in Pride FC.", "First Mexican-born WWE Champion and World Heavyweight Champion."],
  },
  39: { // Rikishi (Solofa Fatu)
    spouses: [{ name: "Talisua Fuavai-Fatu", years: "1980s–present", notes: "Long-term marriage" }],
    children: [{ name: "Jonathan Fatu (Jimmy Uso)", born: 1985, notes: "Son; WWE wrestler" }, { name: "Joshua Fatu (Jey Uso)", born: 1985, notes: "Son; WWE wrestler (twin)" }, { name: "Joseph Fatu (Solo Sikoa)", born: 1993, notes: "Son; WWE wrestler" }],
    legalIssues: [],
    announcing: [],
    facts: ["Member of the legendary Anoa'i wrestling family, cousin of The Rock and Roman Reigns.", "Father of The Usos (Jimmy and Jey) and Solo Sikoa, continuing the Anoa'i dynasty.", "Part of Too Cool with Scotty 2 Hotty and Grandmaster Sexay, famous for post-match dancing.", "Inducted into the WWE Hall of Fame in 2015."],
  },
  73: { // Rob Van Dam
    spouses: [{ name: "Sonya Dye", years: "1998–2018", notes: "Divorced after ~20 years" }, { name: "Katie Forbes", years: "2022–present", notes: "Fellow professional wrestler" }],
    children: [],
    legalIssues: [{ year: "2006", incident: "Drug possession arrest", details: "Found with marijuana and Vicodin; lost both the WWE Championship and ECW Championship as a result." }],
    announcing: [],
    facts: ["Real name Robert Szatkowski; from Battle Creek, Michigan.", "Held the ECW Television Championship for a record 23 months.", "Outspoken advocate for marijuana legalization throughout his career.", "Won the WWE Championship by defeating John Cena at ECW One Night Stand 2006 — one of the most iconic crowd reactions ever."],
  },
  55: { // Ken Shamrock
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Kenneth Wayne Kilpatrick; was adopted by Bob Shamrock who ran a group home for troubled youth.", "Pioneered the crossover between MMA and wrestling; inducted into the UFC Hall of Fame in 2003.", "Known as 'The World's Most Dangerous Man'; fought in UFC, Pride, and Bellator.", "His UFC Superfight Championship win over Dan Severn in 1996 was a landmark in early MMA history."],
  },
  124: { // Ivory (Lisa Moretti)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Lisa Mary Moretti; one of the most well-trained female wrestlers of her era.", "Key member of the Right to Censor stable.", "Dedicated animal rescue advocate.", "Three-time WWE Women's Champion; inducted into the WWE Hall of Fame in 2018."],
  },
  8: { // Mr. Perfect / Curt Hennig
    spouses: [{ name: "Leonice Hennig", years: "1986–2003", notes: "Married until his death" }],
    children: [{ name: "Joe Hennig (Curtis Axel)", born: 1979, notes: "WWE wrestler as Curtis Axel and Michael McGillicutty" }, { name: "Amy Hennig", born: 0, notes: "Daughter" }, { name: "Katie Hennig", born: 0, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Father Larry 'The Ax' Hennig was a major AWA tag team star.", "Exceptional all-around athlete – excelled at football, basketball, and baseball.", "Died February 10, 2003 at age 44.", "His 'Perfect' vignettes showing flawless athletic feats were often done in a single take."],
  },
  12: { // Ultimate Warrior
    spouses: [{ name: "Shari Tyree", years: "1983–1991", notes: "First marriage; divorced" }, { name: "Dana Viale Warrior", years: "1999–2014", notes: "Married until his death" }],
    children: [{ name: "Indiana Marin Warrior", born: 2000, notes: "Daughter" }, { name: "Mattigan Twain Warrior", born: 2002, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Legally changed his name to Warrior in 1993.", "Died April 8, 2014 – just one day after his WWE Hall of Fame induction speech.", "The WWE 'Warrior Award' at the Hall of Fame ceremony is named in his honor.", "Originally teamed with Sting as the Blade Runners before going solo."],
  },
  22: { // Yokozuna
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Rodney Anoaʻi – member of the legendary Anoa'i family (cousin to The Rock, Rikishi).", "Died October 23, 2000 at age 34 from pulmonary edema; weighed over 700 lbs.", "Despite his sumo gimmick, he was Samoan, not Japanese.", "Won the 1993 Royal Rumble and main-evented WrestleMania IX and X."],
  },
  57: { // X-Pac / Sean Waltman
    spouses: [],
    children: [{ name: "Jesse Waltman", born: 0, notes: "Son" }],
    legalIssues: [{ year: "2010", incident: "Drug arrest", details: "Arrested at Minneapolis airport with methamphetamine and marijuana." }],
    announcing: [],
    facts: ["Member of both the NWO (WCW) and DX (WWF) – one of few in both iconic factions.", "Debuted as the 1-2-3 Kid after upsetting Razor Ramon on Raw in 1993.", "Had a relationship with Chyna in the early 2000s.", "Has been open about his battles with addiction throughout his career."],
  },
  58: { // Road Dogg / Jesse James
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Brian Gerard James – son of 'Bullet' Bob Armstrong, brother of referee Scott Armstrong.", "Held prominent backstage WWE roles as a writer and producer after retiring.", "'Oh, you didn't know? Your ass better call somebody!' became an Attitude Era catchphrase.", "Multi-time Tag Team Champion with Billy Gunn as the New Age Outlaws."],
  },
  59: { // Billy Gunn
    spouses: [],
    children: [{ name: "Austin Gunn (Austin Sopp)", born: 1997, notes: "AEW wrestler" }, { name: "Colten Gunn (Colten Sopp)", born: 1999, notes: "AEW wrestler" }],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Monty Sopp – one of the most decorated tag team wrestlers in WWE history.", "Served as a coach and trainer in AEW alongside his sons Austin and Colten.", "Won the 1999 King of the Ring tournament.", "Briefly wrestled as 'Mr. Ass' during the Attitude Era."],
  },
  68: { // Tazz
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "SmackDown", years: "2000–2006", notes: "Transitioned from wrestler to commentary after neck injuries" }, { role: "Color Commentator", show: "ECW (relaunch)", years: "2006–2009", notes: "Called matches for the revived ECW brand" }],
    facts: ["Real name Peter Senerchia – the 'Human Suplex Machine' in ECW.", "Retired from in-ring competition due to neck injuries.", "Considered one of ECW's greatest champions.", "From Brooklyn, New York – the Red Hook neighborhood."],
  },
  83: { // Shelton Benjamin
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Two-time NCAA Division I All-American wrestler at the University of Minnesota.", "Was a legitimate amateur wrestling teammate of Brock Lesnar.", "The 'Momma Benjamin' comedy segments featured actress Thea Vidale, not his real mother.", "Known for incredible athleticism – his Money in the Bank ladder spots are legendary."],
  },
  88: { // Jack Swagger / Jake Hager
    spouses: [{ name: "Catalina White Hager", years: "2010–present", notes: "Former model" }],
    children: [{ name: "Presley Hager", born: 0, notes: "Daughter" }, { name: "Knox Hager", born: 0, notes: "Son" }],
    legalIssues: [{ year: "2013", incident: "DUI arrest", details: "Arrested for DUI and marijuana possession shortly after winning the World Heavyweight Championship." }],
    announcing: [],
    facts: ["All-American amateur wrestler at the University of Oklahoma.", "Transitioned to MMA with Bellator after leaving WWE.", "Won the World Heavyweight Championship by cashing in MITB in 2010.", "Competed in AEW as Jake Hager in Chris Jericho's Inner Circle."],
  },
  104: { // Cesaro / Claudio Castagnoli
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Born in Lucerne, Switzerland – speaks five languages: German, French, Italian, English, and Swiss German.", "Known for extraordinary strength: the Giant Swing, Neutralizer, and UFO spinning move.", "Joined AEW in 2022 as Claudio Castagnoli, member of the Blackpool Combat Club.", "Was one half of 'The Bar' tag team with Sheamus in WWE."],
  },
  106: { // Rusev / Miro
    spouses: [{ name: "CJ Perry (Lana)", years: "2016–present", notes: "Also his on-screen WWE manager" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Miroslav Barnyashev, born in Plovdiv, Bulgaria.", "Joined AEW in 2020 as Miro, reinventing himself as 'God's Favorite Champion'.", "Became a popular Twitch streamer and gaming personality.", "Had a dominant undefeated streak in WWE upon debuting in 2014."],
  },
  107: { // Wade Barrett / Stu Bennett
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "NXT", years: "2020–2021", notes: "Returned to WWE in a commentary role" }, { role: "Color Commentator", show: "SmackDown", years: "2021–present", notes: "Full-time commentary team member" }],
    facts: ["Born Stuart Alexander Bennett in Preston, Lancashire, England.", "Had a background in bare-knuckle fighting before wrestling.", "Led the Nexus faction in 2010, debuting by destroying the Raw set.", "Acted in action films during his time away from WWE."],
  },
  130: { // Big E
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Was a competitive powerlifter – raw squat of 711 lbs and bench press of 490 lbs.", "Suffered a broken neck in March 2022 from a botched suplex; has not returned to the ring.", "First Black man to hold the WWE Championship, cashing in MITB on Bobby Lashley in 2021.", "Founding member of The New Day with Kofi Kingston and Xavier Woods."],
  },
  131: { // Bobby Lashley
    spouses: [{ name: "Kristal Marshall", years: "2007–divorced", notes: "Former WWE Diva" }],
    children: [{ name: "Myles Lashley", born: 0, notes: "Son" }, { name: "Naomi Lashley", born: 0, notes: "Daughter" }],
    legalIssues: [],
    announcing: [],
    facts: ["Served in the United States Army before becoming a professional wrestler.", "Competed in MMA in Bellator and Strikeforce.", "Won the WWE Championship in 2021 as the dominant 'All Mighty' champion.", "Three-time ECW Champion and multi-time US and IC Champion."],
  },
  133: { // Bianca Belair
    spouses: [{ name: "Montez Ford", years: "2018–present", notes: "Both active WWE wrestlers" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Standout track and field athlete at the University of Tennessee – heptathlon and hurdles.", "Her braid is real hair and she uses it as a weapon in matches.", "Defeated Sasha Banks at WrestleMania 37 – first time two Black women headlined WrestleMania.", "EST stands for all superlatives – strongest, fastest, toughest, etc."],
  },
  134: { // Natalya
    spouses: [{ name: "TJ Wilson (Tyson Kidd)", years: "2013–present", notes: "WWE producer; severe spinal cord injury in 2015 ended his in-ring career" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Daughter of Jim 'The Anvil' Neidhart, granddaughter of Stu Hart – third-generation wrestler.", "First female Hart family member to compete in a WWE ring.", "Starred in the reality TV show 'Total Divas' from 2013.", "Won the inaugural Women's Tag Team Championship with Beth Phoenix."],
  },
  135: { // Bayley
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Pamela Rose Martinez, from San Jose, California.", "Was formerly engaged to fellow wrestler Aaron Solow.", "Her hugger gimmick was inspired by her real-life fandom of Macho Man and Eddie Guerrero.", "Successfully transitioned from beloved babyface hugger to one of WWE's top heels."],
  },
  162: { // Shane McMahon
    spouses: [{ name: "Marissa McMahon (née Mazzola)", years: "1996–present", notes: "Daughter of a former referee" }],
    children: [{ name: "Declan McMahon", born: 2004, notes: "" }, { name: "Kenyon McMahon", born: 2006, notes: "" }, { name: "Rogan McMahon", born: 2010, notes: "" }],
    legalIssues: [],
    announcing: [],
    facts: ["Survived a helicopter crash-landing in 2009 off the coast of Long Island.", "Served as CEO of YOU On Demand, a China-based digital media company.", "Known for death-defying leaps off Hell in a Cell and the titantron.", "Left WWE in 2009 for business ventures before returning in 2016."],
  },
  166: { // Stephanie McMahon
    spouses: [{ name: "Triple H (Paul Levesque)", years: "2003–present", notes: "On-screen storyline marriage in 1999 led to real relationship" }],
    children: [{ name: "Aurora Rose Levesque", born: 2006, notes: "" }, { name: "Murphy Claire Levesque", born: 2008, notes: "" }, { name: "Vaughn Evelyn Levesque", born: 2010, notes: "" }],
    legalIssues: [],
    announcing: [],
    facts: ["Served as WWE Chief Brand Officer and briefly co-CEO in 2022.", "Active in WWE's partnership with Connor's Cure pediatric cancer charity.", "Fourth-generation McMahon involved in the wrestling business.", "Resigned as co-CEO in January 2023 when Vince McMahon returned to the board."],
  },
  176: { // Beth Phoenix
    spouses: [{ name: "Edge (Adam Copeland)", years: "2016–present", notes: "Married October 2016" }],
    children: [{ name: "Lyric Rose Copeland", born: 2016, notes: "Daughter" }, { name: "Ruby Ever Copeland", born: 2018, notes: "Daughter" }],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "NXT", years: "2019–2023", notes: "Regular commentary team member" }],
    facts: ["Inducted into the WWE Hall of Fame in 2017.", "Known as 'The Glamazon' – one of the strongest women in WWE history.", "Real name Elizabeth Kocianski Copeland.", "Won both the Divas Championship and Women's Championship."],
  },
  177: { // Mickie James
    spouses: [{ name: "Nick Aldis (Magnus)", years: "2015–present", notes: "Fellow professional wrestler" }],
    children: [{ name: "Donovan Patrick Aldis", born: 2014, notes: "Son" }],
    legalIssues: [],
    announcing: [],
    facts: ["Released country music albums including 'Somebody's Gonna Pay' (2013).", "Won TNA/Impact Knockouts Championship multiple times after leaving WWE.", "The 'Piggy James' body-shaming storyline in 2009-2010 was widely criticized.", "Has won 8 women's championships across WWE and TNA/Impact."],
  },
  127: { // John Morrison / Johnny Mundo
    spouses: [{ name: "Taya Valkyrie (Kira Forster)", years: "2018–present", notes: "Both worked in Lucha Underground and Impact" }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Highly skilled in parkour and free-running, incorporating it into his wrestling style.", "Starred in the film 'Boone: The Bounty Hunter'.", "Won the ECW, Intercontinental, and multiple tag team championships.", "Worked in Lucha Underground as 'Johnny Mundo' and won the Lucha Underground Championship."],
  },
  146: { // Jim Cornette
    spouses: [{ name: "Stacy Cornette", years: "", notes: "Long-time wife and business partner at OVW" }],
    children: [],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "Various WWE", years: "1997–2005", notes: "Commentary stints throughout WWE tenure" }, { role: "Host", show: "Jim Cornette Experience Podcast", years: "2017–present", notes: "Popular wrestling podcast" }],
    facts: ["His signature weapon was a tennis racket which he used as a manager.", "Ran OVW as WWE's developmental territory, training Cena, Batista, Lesnar, and more.", "Widely considered one of the greatest wrestling managers and talkers in history.", "Known for extremely vocal and controversial opinions on modern wrestling."],
  },
  141: { // Hacksaw Jim Duggan
    spouses: [{ name: "Debra Duggan", years: "1994–present", notes: "" }],
    children: [],
    legalIssues: [{ year: "1987", incident: "Arrested with The Iron Sheik", details: "Both found with drugs in a car on the NJ Turnpike – shocking since they were on-screen rivals." }],
    announcing: [],
    facts: ["Won the first-ever Royal Rumble match in 1988.", "Survived prostate cancer and kidney cancer.", "His 2x4 board and 'HOOOOO!' chant made him one of the most recognizable 80s wrestlers.", "Played offensive lineman for the Atlanta Falcons before becoming a wrestler."],
  },
  145: { // Bobby Heenan
    spouses: [{ name: "Cynthia Jean Heenan", years: "1978–2017", notes: "Married until his death" }],
    children: [{ name: "Jessica Heenan", born: 0, notes: "Daughter" }],
    legalIssues: [],
    announcing: [{ role: "Color Commentator", show: "WWF Prime Time/Raw", years: "1986–1993", notes: "Legendary broadcast team with Gorilla Monsoon" }, { role: "Color Commentator", show: "WCW Nitro", years: "1994–2001", notes: "Part of WCW broadcast team" }],
    facts: ["Widely regarded as the greatest wrestling manager of all time.", "His banter with Gorilla Monsoon is the gold standard of wrestling commentary.", "Battled throat cancer for years before his death on September 17, 2017.", "WWE Hall of Famer inducted twice – individually and as part of the Heenan Family."],
  },
  20: { // Sgt. Slaughter
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Real name Robert Remus; served in the United States Marine Corps.", "His Iraqi sympathizer heel turn during the Gulf War generated legitimate death threats.", "Had an official G.I. Joe action figure – one of the few real people in the toy line.", "Won the WWF Championship from Ultimate Warrior at the 1991 Royal Rumble."],
  },
  11: { // Ricky Steamboat
    spouses: [{ name: "Bonnie Steamboat", years: "", notes: "Long-time wife" }],
    children: [{ name: "Richie Steamboat", born: 1987, notes: "Briefly pursued wrestling in WWE/FCW developmental" }],
    legalIssues: [],
    announcing: [],
    facts: ["His WrestleMania III match with Randy Savage is widely considered one of the greatest ever.", "Real name Richard Blood; of partial Japanese descent, billed from Hawaii.", "Known for never working heel – spent virtually his entire career as a babyface.", "Won the NWA World Heavyweight Championship from Ric Flair in 1989."],
  },
  17: { // Brutus Beefcake
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Suffered a devastating 1990 parasailing accident that shattered his face, requiring massive reconstruction.", "Real name Ed Leslie; one of Hulk Hogan's closest friends since high school in Tampa.", "Wrestled under numerous gimmicks: The Disciple, Booty Man, Zodiac, Butcher in WCW.", "Was part of the NWO storyline due to his friendship with Hogan."],
  },
  29: { // Lex Luger
    spouses: [],
    children: [],
    legalIssues: [{ year: "2003", incident: "Drug charges", details: "Miss Elizabeth died at his home from acute toxicity; Luger faced drug possession charges." }],
    announcing: [],
    facts: ["Played in the NFL as a defensive lineman for the Green Bay Packers before wrestling.", "Suffered a spinal stroke in 2007 that left him requiring a wheelchair.", "Was in a relationship with Miss Elizabeth at the time of her death in 2003.", "Headlined SummerSlam 1993 vs Yokozuna after the 'Lex Express' bus tour."],
  },
  153: { // Tito Santana
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Became a school teacher after retiring, teaching Spanish in New Jersey.", "One half of Strike Force with Rick Martel, winning the WWF Tag Team Championship.", "Real name Merced Solis; one of the most prominent Hispanic wrestlers of the 1980s.", "Two-time Intercontinental Champion."],
  },
  156: { // Marty Jannetty
    spouses: [],
    children: [],
    legalIssues: [{ year: "2016", incident: "Controversial Facebook post", details: "Made a disturbing post about making a man 'disappear'; police investigated." }],
    announcing: [],
    facts: ["One half of The Rockers with Shawn Michaels; their Barber Shop window breakup is iconic.", "'The Jannetty' became a wrestling term for the tag team partner left behind.", "Has had well-documented personal struggles with substance abuse.", "Despite personal issues, was considered extremely talented in his prime."],
  },
  82: { // Carlito
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Son of Carlos Colón Sr., legendary promoter who ran WWC in Puerto Rico.", "Brother of Primo Colón; part of the Colón wrestling dynasty.", "Signature move: spitting apple in opponents' faces – 'That's not cool.'", "Won the Intercontinental Championship in his 2004 debut, defeating John Cena."],
  },
  125: { // Hurricane Helms
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Worked as a backstage producer and agent for WWE after his in-ring career.", "His 'Hurricane' superhero gimmick became one of the most beloved comedy characters.", "Won the WCW Cruiserweight Championship three times before WWE.", "Scored a famous pinfall victory over The Rock on Raw in 2003."],
  },
  139: { // Gunther
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ["Austrian wrestler; real name Walter Hahn, performed as WALTER in NXT UK.", "Held the NXT UK Championship for a record-breaking 870+ days.", "His Intercontinental Championship reign was one of the longest in the title's history.", "Leader of the Imperium stable with Ludwig Kaiser and Giovanni Vinci."],
  },
  830: { // Michael Cole
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [
      { role: "Backstage Interviewer", show: "SmackDown / Raw", years: "1997-1999", notes: "Started as a backstage interviewer." },
      { role: "Play-by-Play", show: "SmackDown", years: "1999-2008", notes: "Became SmackDown's lead voice alongside Tazz." },
      { role: "Play-by-Play", show: "Raw / SmackDown / PPV", years: "2008-present", notes: "WWE's lead announcer and Voice of WWE. The longest-tenured active commentator in company history." }
    ],
    facts: [
      "Real name Sean Michael Coulthard, born December 8, 1968 in Syracuse, New York.",
      "Worked as a broadcast journalist covering conflicts in Yugoslavia, Rwanda, and Haiti for CBS News before joining WWE in 1997.",
      "His heel commentator run (2010-2012) including a match against Jerry Lawler at WrestleMania 27 was one of the most divisive storylines ever.",
      "Vince McMahon famously fed lines to Cole through his headset for years."
    ],
  },
  346: { // Gorilla Monsoon
    spouses: [
      { name: "Maureen Marella", years: "1960s-1999", notes: "Married until his death." }
    ],
    children: [
      { name: "Joey Marella", born: 1963, notes: "WWE referee who died in a car accident on July 4, 1994 at age 31." }
    ],
    legalIssues: [],
    announcing: [
      { role: "Play-by-Play / Color", show: "WWF Championship Wrestling / Prime Time Wrestling", years: "1974-1994", notes: "His pairing with Bobby Heenan on Prime Time Wrestling is considered the gold standard of wrestling commentary." },
      { role: "On-screen WWF President", show: "Raw / PPV", years: "1995-1997", notes: "Served as the kayfabe WWF President during the New Generation era." }
    ],
    facts: [
      "Real name Robert James Marella, born June 4, 1937 in Rochester, New York.",
      "Was a major in-ring attraction in the 1960s-70s before transitioning to commentary, billed at over 400 lbs.",
      "Popularized wrestling commentary phrases like 'Will you stop!' (to Heenan) and calling the ring the 'Squared Circle.'",
      "Died on October 6, 1999 at age 62 from heart failure."
    ],
  },
  347: { // Pat Patterson
    spouses: [],
    children: [],
    legalIssues: [
      { year: "1992", incident: "Sex scandal allegations", details: "Resigned from WWE amid allegations of sexual misconduct. Denied the claims and returned within a year." }
    ],
    announcing: [],
    facts: [
      "Real name Pierre Clermont, born January 19, 1941 in Montreal, Quebec, Canada.",
      "Was the first openly gay professional wrestling star. Came out publicly later in life.",
      "Credited with creating the Royal Rumble match concept, one of WWE's most enduring match types.",
      "Recognized as the first-ever WWF Intercontinental Champion in 1979.",
      "Served as one of Vince McMahon's top creative minds and agents backstage for decades.",
      "Died December 2, 2020 at age 79 from liver failure."
    ],
  },
  143: { // Koko B. Ware
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name James Ware, born June 20, 1957 in Union City, Tennessee.",
      "His macaw parrot named Frankie was one of the most beloved animal sidekicks in wrestling history.",
      "Teamed with Owen Hart as 'High Energy' in 1992-1993.",
      "Inducted into the WWE Hall of Fame in 2009.",
      "Was a legitimate tag team standout in Memphis before his WWF run."
    ],
  },
  13: { // Honky Tonk Man
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Roy Wayne Farris, born January 25, 1953 in Memphis, Tennessee. He is a cousin of Jerry Lawler.",
      "Held the WWF Intercontinental Championship for a then-record 454 consecutive days (1987-1988).",
      "Lost the IC title in just 31 seconds to Ultimate Warrior at SummerSlam 1988, one of the most famous squash matches ever.",
      "Known for strumming a prop guitar during his Elvis-inspired entrance.",
      "Had a real-life falling out with WWE over pay and creative disputes."
    ],
  },
  54: { // Val Venis
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Sean Allen Morley, born March 6, 1971 in Oakville, Ontario, Canada. Son of Canadian wrestler 'Bulldog' Bob Brown.",
      "His Val Venis adult film star gimmick was one of the most risque characters in the Attitude Era.",
      "Also portrayed 'Chief Morley' authority figure in 2003 on Raw.",
      "Became a vocal libertarian political commentator after retiring from wrestling.",
      "Was part of the Right to Censor stable in 2000-2001, a complete reversal of his usual character."
    ],
  },
  63: { // The Godfather
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Charles Wright, born May 16, 1961 in Las Vegas, Nevada.",
      "Had more character reinventions than almost any WWE wrestler: Papa Shango, Kama, Kama Mustafa, The Godfather, and Goodfather.",
      "His 'Ho Train' entrance was one of the most popular acts of the Attitude Era.",
      "Inducted into the WWE Hall of Fame in 2016.",
      "Operates a bar in Las Vegas after retiring from wrestling."
    ],
  },
  247: { // Spike Dudley
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Matthew Hyson, from Providence, Rhode Island.",
      "Despite the storyline, he is not related to Bubba Ray or D-Von Dudley.",
      "At around 150 lbs, he was one of the lightest competitors in WWE, making his hardcore matches impressive.",
      "Held the WWE European Championship and Hardcore Championship.",
      "Retired from wrestling and became a school teacher after leaving WWE."
    ],
  },
  551: { // Vader
    spouses: [
      { name: "Grace White", years: "1978-2008", notes: "Were together for many years; later divorced." }
    ],
    children: [
      { name: "Jesse White", born: 1990, notes: "Son; became a professional wrestler." }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Leon Allen White, from Lynwood, California.",
      "Played offensive lineman at University of Colorado and briefly in the NFL with the Los Angeles Rams.",
      "Was a massive star in Japan as IWGP Heavyweight Champion in New Japan Pro-Wrestling.",
      "Known for incredible agility despite weighing over 450 lbs — could perform moonsaults.",
      "Passed away on June 18, 2018 at age 63 from pneumonia.",
      "Mick Foley lost his ear during a match against Vader in WCW in 1994."
    ],
  },
  18: { // Earthquake
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name John Tenta, from Surrey, British Columbia, Canada.",
      "Trained as a sumo wrestler in Japan under the Sadogatake stable — one of very few North Americans to do so.",
      "Was a standout amateur wrestler and football player at Louisiana State University.",
      "Passed away on June 7, 2006 at age 42 from bladder cancer.",
      "Despite his massive size (over 460 lbs), was known for being incredibly gentle and kind outside the ring.",
      "Also wrestled as Golga (in The Oddities) and Shark in WCW."
    ],
  },
  388: { // Umaga
    spouses: [],
    children: [],
    legalIssues: [
      { year: "2007", incident: "Wellness Policy violation", details: "Suspended by WWE for violating the Wellness Policy." },
      { year: "2009", incident: "Wellness Policy violation and release", details: "Fired by WWE after refusing to enter rehabilitation following a second Wellness Policy violation." }
    ],
    announcing: [],
    facts: [
      "Real name Edward Smith Fatu, from San Francisco, California.",
      "Member of the Anoa'i wrestling family; nephew of Afa and Sika, cousin to The Rock and Roman Reigns.",
      "Brother of Rosey (Matt Anoa'i) who also wrestled in WWE as part of Three Minute Warning.",
      "Previously wrestled as Jamal in Three Minute Warning before being repackaged as Umaga.",
      "Passed away on December 4, 2009 at age 36 from acute drug toxicity.",
      "Despite his 'Samoan Bulldozer' character, he was known backstage as a gentle, kind person."
    ],
  },
  440: { // Haku
    spouses: [],
    children: [
      { name: "Tama Tonga (Tevita Fifita)", born: 1983, notes: "Adopted son; wrestler in NJPW and later WWE." },
      { name: "Tanga Loa (Taula Fifita)", born: 1983, notes: "Son; wrestler, partners with Tama Tonga as Guerrillas of Destiny." }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Tonga Fifita, from the Kingdom of Tonga.",
      "Universally regarded by wrestlers as the toughest and most legitimately dangerous man in professional wrestling history.",
      "Numerous stories describe him biting people's noses off and fighting multiple men at once in bar fights.",
      "Despite his legendary toughness, he is described as an incredibly kind, gentle, and humble family man.",
      "His sons Tama Tonga and Tanga Loa became successful wrestlers in New Japan Pro-Wrestling and WWE.",
      "Held the WWF Tag Team Championship with Andre the Giant as The Colossal Connection."
    ],
  },
  117: { // Tatanka
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Chris Chavis, from Pembroke, North Carolina.",
      "Is of Lumbee Native American descent and his wrestling character celebrated his heritage.",
      "Went on an undefeated streak lasting over two years (1992-1993), one of the longest in WWE history.",
      "His undefeated streak was famously broken by Ludvig Borga in 1993.",
      "Before wrestling, he was a standout amateur wrestler and bodybuilder."
    ],
  },
  118: { // Faarooq / Ron Simmons
    spouses: [
      { name: "Lottie Simmons", years: "1990s-present", notes: "Longtime wife." }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      "Real name Ron Simmons, from Perry, Georgia.",
      "Became the first African-American WCW World Heavyweight Champion in 1992, a groundbreaking moment in wrestling.",
      "Was an All-American nose guard at Florida State University and played briefly in the NFL with the Cleveland Browns.",
      "Became famous for his recurring 'DAMN!' segment on WWE television in the mid-2000s.",
      "Formed the APA (Acolytes Protection Agency) with JBL, one of the most popular tag teams of the Attitude Era.",
      "Inducted into the WWE Hall of Fame in 2012."
    ],
  },

  14: { // Rick Rude
    spouses: [{ name: "Michelle Rude", years: "1980s-1999", notes: "Married until his death" }],
    children: [
      { name: "Richard Rood Jr.", notes: "Son" },
      { name: "Cody Rood", notes: "Son" }
    ],
    facts: [
      "Real name Richard Erwin Rood.",
      "Died April 20, 1999 at age 40 from heart failure caused by a mixed drug overdose.",
      "Was the only wrestler to appear on both Raw and Nitro on the same night (November 17, 1997) - live on Nitro and pre-taped on Raw.",
      "Was close friends with Curt Hennig and the two trained together.",
      "Known for his incredible physique and custom airbrushed ring attire."
    ],
  },
  19: { // Big Boss Man
    spouses: [{ name: "Angela Traylor", years: "1980s-2004", notes: "Married until his death" }],
    facts: [
      "Real name Ray Washington Traylor Jr.",
      "Worked as a corrections officer at the Cobb County Adult Detention Center in Georgia before entering wrestling.",
      "Died September 22, 2004 at age 41 from a heart attack.",
      "His wrestling gimmick was directly inspired by his real-life career as a prison guard."
    ],
  },
  21: { // Iron Sheik
    spouses: [{ name: "Caryl Peterson", years: "1976-2023", notes: "Married until his death" }],
    children: [
      { name: "Tanya Vaziri", notes: "Daughter; murdered in 2003 by her boyfriend" },
      { name: "Nikki Vaziri", notes: "Daughter" },
      { name: "Marie Vaziri", notes: "Daughter" }
    ],
    legalIssues: [
      { year: "1987", incident: "Drug arrest with Hacksaw Duggan", details: "Arrested with Jim Duggan for possession of cocaine and marijuana on the New Jersey Turnpike; both fired from WWF." }
    ],
    facts: [
      "Real name Hossein Khosrow Ali Vaziri, born March 15, 1942 in Tehran, Iran.",
      "Died June 7, 2023 at age 81.",
      "Was a legitimate amateur wrestling champion who represented Iran in the 1968 Olympics in Greco-Roman wrestling.",
      "His daughter Tanya was murdered in 2003, which deeply affected him.",
      "Became a beloved social media personality in later years, known for his unfiltered profane rants on Twitter.",
      "Inducted into the WWE Hall of Fame in 2005."
    ],
  },
  27: { // Goldust
    spouses: [
      { name: "Terri Runnels", years: "1993-1999", notes: "Divorced; she also worked in WWE as Marlena" },
      { name: "Milena Martelloni", years: "2002-unknown", notes: "Second marriage" },
      { name: "Aksana", years: "2009-2011", notes: "WWE Diva; marriage helped her obtain a green card; divorced" }
    ],
    children: [
      { name: "Dakota Avery Runnels", born: 1994, notes: "Daughter with Terri Runnels" }
    ],
    facts: [
      "Real name Dustin Patrick Runnels.",
      "Son of Dusty Rhodes and half-brother of Cody Rhodes.",
      "Has been open about his past battles with drug and alcohol addiction.",
      "The Goldust character was considered extremely controversial in the mid-1990s for its androgynous nature.",
      "Has worked for WWE across five different decades (1990s-2020s)."
    ],
  },
  132: { // Samoa Joe
    spouses: [{ name: "Jessica Seanoa", years: "2007-present", notes: "Married" }],
    announcing: [
      { role: "Color Commentator", show: "Raw", years: "2020", notes: "Served as commentator during periods when sidelined by injury" }
    ],
    facts: [
      "Real name Nuufolau Joel Seanoa, born March 17, 1979 in Orange County, California.",
      "Of Samoan heritage but is NOT part of the Anoa'i wrestling family dynasty.",
      "Trained at the Ultimate Pro Wrestling academy alongside John Cena.",
      "Held the TNA World Heavyweight Championship a record-tying five times.",
      "Suffered multiple concussions and injuries that frequently interrupted his WWE career."
    ],
  },
  137: { // Aleister Black
    spouses: [
      { name: "Zelina Vega (Thea Trinidad)", years: "2018-present", notes: "Fellow WWE wrestler" }
    ],
    facts: [
      "Real name Tom Budgen, born May 19, 1985 in Amsterdam, Netherlands.",
      "Has an extensive background in kickboxing with a professional record.",
      "Was NXT Champion during his first WWE run.",
      "Left WWE in 2021 and debuted in AEW as Malakai Black.",
      "Has spoken openly about dealing with depression and mental health issues."
    ],
  },
  142: { // Nikolai Volkoff
    facts: [
      "Real name Josip Nikolai Peruzovic, born October 14, 1947 in Split, Croatia (then Yugoslavia).",
      "Died July 29, 2018 at age 70.",
      "Despite his Russian heel gimmick, he was actually Croatian and defected from Communist Yugoslavia.",
      "Was a legitimate amateur wrestler and weightlifter who competed internationally.",
      "Became a U.S. citizen and was very patriotic in real life, the opposite of his anti-American gimmick.",
      "Inducted into the WWE Hall of Fame in 2005."
    ],
  },
  144: { // George Steele
    spouses: [{ name: "Pat Myers", years: "1960s-2017", notes: "Married until his death" }],
    children: [
      { name: "Dennis Myers", notes: "Son" },
      { name: "Felicia Myers", notes: "Daughter" }
    ],
    facts: [
      "Real name William James Myers, born April 16, 1937 in Detroit, Michigan.",
      "Died February 16, 2017 at age 79.",
      "Was a high school football coach and teacher while wrestling part-time for years.",
      "Had a master's degree in education from Central Michigan University.",
      "His 'Animal' persona was entirely a character; he was highly intelligent and well-spoken in real life.",
      "Inducted into the WWE Hall of Fame in 1995."
    ],
  },
  154: { // Greg Valentine
    facts: [
      "Real name Jonathan Anthony Wisniski Jr., born September 20, 1950 in Seattle, Washington.",
      "Son of legendary tough-guy wrestler Johnny Valentine.",
      "His father Johnny Valentine was paralyzed in the same 1975 plane crash that broke Ric Flair's back.",
      "Known for his devastating figure-four leglock and incredibly stiff in-ring style.",
      "Inducted into the WWE Hall of Fame in 2004."
    ],
  },
  155: { // Jimmy Snuka
    spouses: [
      { name: "Sharon Snuka", years: "1970s-1980s", notes: "First wife" },
      { name: "Carole Snuka", years: "1990s-2017", notes: "Second wife; married until his death" }
    ],
    children: [
      { name: "Tamina Snuka", notes: "Daughter; WWE wrestler known as Tamina" },
      { name: "Jimmy Snuka Jr. (Deuce)", notes: "Son; wrestled in WWE as Deuce" }
    ],
    legalIssues: [
      { year: "1983", incident: "Death of Nancy Argentino", details: "Girlfriend Nancy Argentino found dead in a hotel room in Allentown, PA; ruled inconclusive; no charges filed initially." },
      { year: "2015", incident: "Third-degree murder charge", details: "Charged with third-degree murder for the 1983 death; dismissed in 2017 after he was declared mentally incompetent due to dementia and terminal stomach cancer." }
    ],
    facts: [
      "Real name James Reiher Snuka, born May 18, 1943 in Fiji.",
      "Died January 15, 2017 at age 73.",
      "His Superfly Splash from the top of the steel cage at MSG in 1983 is one of the most iconic moments in wrestling history.",
      "Mick Foley has cited Snuka's cage dive as the moment that inspired him to become a wrestler."
    ],
  },
  192: { // R-Truth
    facts: [
      "Real name Ronnie Aaron Killings, born January 19, 1972 in Atlanta, Georgia.",
      "Was the first Black NWA World Heavyweight Champion in the title's 56-year history (2002, in TNA).",
      "Known for incredible athleticism and longevity, still performing high-level matches in his 50s.",
      "His comedic character who constantly gets confused became one of WWE's most beloved acts.",
      "Won the 24/7 Championship a record number of times.",
      "Has spoken about growing up in poverty and how wrestling saved his life."
    ],
  },
  210: { // Paige
    spouses: [
      { name: "Ronnie Radke", years: "2018-present", notes: "Lead singer of Falling in Reverse" }
    ],
    children: [
      { name: "Son", born: 2022, notes: "With Ronnie Radke" }
    ],
    announcing: [
      { role: "On-screen GM", show: "SmackDown", years: "2018-2019", notes: "Served as SmackDown General Manager after career-ending injury" }
    ],
    facts: [
      "Real name Saraya-Jade Bevis, born August 17, 1992 in Norwich, England.",
      "Comes from the Bevis wrestling family - both parents and brothers are professional wrestlers.",
      "Became the youngest WWE Divas Champion at age 21.",
      "Was forced to retire in 2018 due to a career-ending neck injury.",
      "Was the subject of the 2019 biographical film 'Fighting with My Family' starring Florence Pugh.",
      "Returned to wrestling in AEW in 2022 under her real first name Saraya."
    ],
  },
  211: { // Braun Strowman
    facts: [
      "Real name Adam Joseph Scherr, born September 17, 1983 in Sherrills Ford, North Carolina.",
      "Was a professional strongman before wrestling, competing in the Arnold Amateur Strongman Classic.",
      "Won the 2012 North Carolina's Strongest Man competition.",
      "Trained at the WWE Performance Center with no prior wrestling experience.",
      "Stands 6 feet 8 inches and weighed around 385 pounds during his active career.",
      "Has been open about mental health struggles and significant weight loss transformation."
    ],
  },
  217: { // Damian Priest
    facts: [
      "Real name Luis Martinez, born September 26, 1982 in New York City.",
      "Of Puerto Rican descent; grew up in the Bronx.",
      "Worked the independent circuit for years as Punishment Martinez before signing with WWE in 2018.",
      "Won the World Heavyweight Championship at WrestleMania 40 in 2024.",
      "Has spoken about his deep pride in his Puerto Rican heritage."
    ],
  },
  218: { // Dominik Mysterio
    facts: [
      "Real name Dominik Gutierrez, born April 1, 1997 in San Diego, California.",
      "Son of legendary WWE wrestler Rey Mysterio.",
      "Was famously part of the Eddie Guerrero vs. Rey Mysterio 'custody of Dominik' storyline in 2005.",
      "Made his in-ring debut at SummerSlam 2020 alongside his father against Seth Rollins.",
      "Turned heel against his father to join The Judgment Day faction in 2022.",
      "His on-screen romantic storyline with Rhea Ripley became one of WWE's most popular pairings."
    ],
  },
  219: { // Solo Sikoa
    facts: [
      "Real name Joseph Leati Anoa'i, born March 18, 1993 in Sacramento, California.",
      "Member of the legendary Anoa'i wrestling family.",
      "Real-life younger brother of Jimmy and Jey Uso (The Usos).",
      "Son of Rikishi. Roman Reigns is his real-life cousin.",
      "Played football before transitioning to professional wrestling.",
      "Was a standout in NXT before being called to the main roster as the enforcer of The Bloodline."
    ],
  },
  220: { // LA Knight
    facts: [
      "Real name Andrew Hankinson, born November 14, 1982 in Hagerstown, Maryland.",
      "Spent over 15 years on the independent circuit before achieving mainstream success.",
      "Previously known as Eli Drake in Impact Wrestling where he was a main event-level talent.",
      "His catchphrase 'Yeah!' and charismatic promos made him one of WWE's most organically popular stars.",
      "Is considered one of the best examples of a late-career breakout star in modern wrestling."
    ],
  },
  222: { // Liv Morgan
    facts: [
      "Real name Gionna Jene Daddio, born June 8, 1994 in Paramus, New Jersey.",
      "Worked as a Hooters waitress before being signed by WWE in 2014.",
      "Was part of The Riott Squad faction with Ruby Riott and Sarah Logan.",
      "Won her first Women's Championship at Money in the Bank 2022.",
      "Has been open about being a lifelong WWE fan who dreamed of becoming a wrestler since childhood."
    ],
  },
  233: { // Sable
    spouses: [
      { name: "Wayne Richardson", years: "1986-1991", notes: "First husband; died in a car accident in 1991" },
      { name: "Marc Mero", years: "1994-2004", notes: "Fellow WWE wrestler; divorced" },
      { name: "Brock Lesnar", years: "2006-present", notes: "Married fellow WWE wrestler Brock Lesnar; they live on a farm in Saskatchewan, Canada" }
    ],
    children: [
      { name: "Mariah Richardson", born: 1991, notes: "Daughter from first marriage" },
      { name: "Turk Lesnar", born: 2009, notes: "Son with Brock Lesnar" },
      { name: "Duke Lesnar", born: 2010, notes: "Son with Brock Lesnar" }
    ],
    legalIssues: [
      { year: "1999", incident: "Lawsuit against WWE", details: "Filed a $110 million lawsuit against WWE alleging sexual harassment; settled out of court." }
    ],
    facts: [
      "Real name Rena Marlette Lesnar (nee Greek), born August 8, 1967 in Jacksonville, Florida.",
      "Was one of the biggest crossover stars of the Attitude Era.",
      "Appeared on the cover of Playboy in April 1999, one of the highest-selling issues ever.",
      "Her first husband Wayne Richardson died in a car crash.",
      "Lives a very private life on a farm in rural Saskatchewan, Canada with Brock Lesnar."
    ],
  },
  237: { // Scott Steiner
    spouses: [{ name: "Christa Steiner", years: "2000-present", notes: "Married" }],
    children: [
      { name: "Brock Rechsteiner", notes: "Son; played college football at University of Michigan like his father" }
    ],
    legalIssues: [
      { year: "2007", incident: "Road rage incident", details: "Arrested for allegedly threatening a man with a weapon during a road rage incident in Georgia." },
      { year: "2009", incident: "Threatening behavior", details: "Arrested for threats made at a wrestling event." }
    ],
    facts: [
      "Real name Scott Carl Rechsteiner, born July 29, 1962 in Bay City, Michigan.",
      "Was an All-American amateur wrestler at the University of Michigan.",
      "Brother of Rick Steiner; together they formed one of the greatest tag teams in wrestling history.",
      "Known for his infamous 'Steiner Math' promo which became one of the most memed promos in wrestling history.",
      "His Frankensteiner (top rope hurricanrana) was revolutionary for a man of his size."
    ],
  },
  262: { // Asuka
    facts: [
      "Real name Kanako Urai, born September 26, 1981 in Osaka, Japan.",
      "Was a freelance graphic designer before becoming a full-time wrestler.",
      "Holds the record for the longest undefeated streak in WWE history at 914 days.",
      "Is a skilled video game player and streams on social media.",
      "Known for elaborate face paint and costumes which she often designs herself.",
      "Was the first winner of the Women's Royal Rumble match in 2018."
    ],
  },
  52: { // D'Lo Brown
    facts: [
      "Real name Accie Julius Connor, born February 26, 1971 in Chicago, Illinois.",
      "Has a degree in accounting from the University of Maine.",
      "Was involved in a devastating in-ring accident in 1999 when he accidentally dropped Droz, leaving him a quadriplegic.",
      "Has spoken publicly about the emotional toll the Droz accident took on him.",
      "Was the first Euro-Continental Champion, holding the European and Intercontinental titles simultaneously.",
      "Became a road agent/producer for WWE behind the scenes after his in-ring career."
    ],
  },
  2: { // Pedro Morales
    facts: [
      "Born in Culebra, Puerto Rico on October 22, 1942.",
      "First Triple Crown Champion in WWE history.",
      "Died on February 12, 2019 at age 76 due to Parkinson's disease complications.",
      "Held the WWE Championship for 1,027 days, one of the longest reigns ever.",
      "Was a huge star in the New York Puerto Rican community.",
      "Inducted into the WWE Hall of Fame in 1995."
    ],
    announcing: [{ role: "Color Commentator", show: "WWE Spanish broadcasts", years: "1990s", notes: "Provided Spanish language commentary" }],
  },
  3: { // Bob Backlund
    spouses: [{ name: "Corki Backlund", years: "1979-present", notes: "Long-time marriage" }],
    children: [{ name: "Carrie Backlund", notes: "Daughter" }],
    facts: [
      "Real name Robert Louis Backlund, born August 14, 1949 in Princeton, Minnesota.",
      "Held the WWE Championship for 2,135 days from 1978 to 1983.",
      "NCAA Division II wrestling champion at North Dakota State College of Science.",
      "Ran for U.S. Congress in Connecticut in 2000 as a Republican but lost.",
      "Known for his clean-cut lifestyle - did not drink, smoke, or use drugs.",
      "Earned a master's degree in education.",
      "His second WWE Championship reign in 1994 lasted only three days."
    ],
  },
  66: { // Test
    legalIssues: [{ year: "2009", incident: "Posthumous drug findings", details: "Autopsy revealed accidental overdose of oxycodone; history of steroid use was noted." }],
    facts: [
      "Real name Andrew James Robert Patrick Martin, born March 17, 1975 in Whitby, Ontario, Canada.",
      "Died on March 13, 2009 at age 33 from an accidental drug overdose.",
      "Was a former bouncer before entering professional wrestling.",
      "Had a famous on-screen storyline engagement to Stephanie McMahon in 1999.",
      "His brain was donated to research and showed signs of CTE (chronic traumatic encephalopathy)."
    ],
  },
  126: { // Rhyno
    facts: [
      "Real name Terrance Gerin, born October 7, 1975 in Detroit, Michigan.",
      "Ran for public office in Michigan - won the Republican primary in 2014 but lost the general election.",
      "Was one of the top ECW stars before joining WWE.",
      "Known for his finishing move 'The Gore' - a devastating spear.",
      "Won the SmackDown Tag Team Championship with Heath Slater in 2016."
    ],
  },
  138: { // Theory
    facts: [
      "Real name Austin White, born August 2, 1997 in McDonough, Georgia.",
      "One of the youngest wrestlers on the WWE roster.",
      "Was personally mentored on-screen by Vince McMahon in a storyline in 2022.",
      "Won the Money in the Bank contract in 2022 at age 24, making him the youngest winner.",
      "Won the United States Championship, becoming the youngest US Champion in WWE history."
    ],
  },
  190: { // Zack Ryder
    spouses: [{ name: "Chelsea Green", years: "2021-present", notes: "Married fellow professional wrestler Chelsea Green" }],
    facts: [
      "Real name Matthew Brett Cardona, born May 14, 1985 in Merrick, Long Island, New York.",
      "Pioneered the use of YouTube and social media in wrestling with his show 'Z! True Long Island Story'.",
      "Won the Intercontinental Championship at WrestleMania 32 in 2016.",
      "Is a massive action figure collector and toy enthusiast.",
      "After WWE release in 2020, reinvented himself as Matt Cardona on the indie scene."
    ],
  },
  191: { // Santino Marella
    children: [
      { name: "Bianca Carelli", born: 2002, notes: "Daughter; signed with WWE as a wrestler under the name Arianna Grace" }
    ],
    facts: [
      "Real name Anthony Carelli, born March 14, 1974 in Mississauga, Ontario, Canada.",
      "Holds a legitimate black belt in judo and competed internationally for Canada.",
      "Opened the Battle Arts Academy wrestling school in Mississauga, Ontario.",
      "His daughter Bianca Carelli (Arianna Grace) signed with WWE NXT.",
      "Set the record for fastest Royal Rumble elimination (1 second) in 2009.",
      "The 'Cobra' finishing move became one of the most over comedy gimmicks in WWE."
    ],
  },
  194: { // Tyson Kidd
    spouses: [{ name: "Natalya Neidhart", years: "2013-present", notes: "Married fellow WWE wrestler Natalya; featured on Total Divas" }],
    facts: [
      "Real name Theodore James Wilson, born July 11, 1980 in Calgary, Alberta, Canada.",
      "Trained in the Hart family Dungeon; considered the last graduate of the Hart Dungeon.",
      "Suffered a severe spinal cord injury in June 2015 during a match with Samoa Joe that nearly killed him.",
      "Had two vertebrae fused and required a metal plate in his neck.",
      "Transitioned to a backstage producer role in WWE after his career-ending injury.",
      "His wife Natalya is the daughter of Jim 'The Anvil' Neidhart."
    ],
  },
  197: { // Heath Slater
    spouses: [{ name: "Stephanie Miller", years: "2010s-present", notes: "Married with children" }],
    facts: [
      "Real name Heath Wallace Miller, born February 15, 1984 in Pineville, West Virginia.",
      "His 'I got kids!' promo became one of the most memorable moments of the 2016 WWE Draft.",
      "Was a founding member of the Nexus faction in 2010.",
      "Part of the 3MB comedy stable with Drew McIntyre and Jinder Mahal.",
      "Won the SmackDown Tag Team Championship with Rhyno at Backlash 2016.",
      "Grew up in the small town of Pineville, West Virginia, population around 600."
    ],
  },
  202: { // Fandango
    facts: [
      "Real name Curtis Jonathan Hussey, born April 18, 1981 in Spring Hill, Florida.",
      "Was a former NFL hopeful who tried out as a wide receiver.",
      "His entrance theme 'ChaChaLaLa' became a viral phenomenon at WrestleMania 29 in 2013.",
      "The crowd singing his theme ('Fandangoing') trended worldwide and charted on iTunes.",
      "Later formed the beloved comedy tag team Breezango with Tyler Breeze."
    ],
  },
  205: { // Luke Harper / Brodie Lee
    spouses: [{ name: "Amanda Huber", years: "2008-2020", notes: "Married until his death; became an advocate for his legacy" }],
    children: [
      { name: "Brodie Lee Jr.", born: 2012, notes: "Son; became the youngest AEW signing as '-1' in tribute to his father" },
      { name: "Nolan Huber", notes: "Second son" }
    ],
    facts: [
      "Real name Jonathan Huber, born December 16, 1979 in Rochester, New York.",
      "Died on December 26, 2020 at age 41 from idiopathic pulmonary fibrosis.",
      "His death shocked the wrestling world as his illness was not publicly known.",
      "AEW dedicated an entire episode of Dynamite to his memory.",
      "Was a beloved figure backstage in both WWE and AEW, known for his kindness.",
      "Was a member of the Wyatt Family as Luke Harper in WWE."
    ],
  },
  212: { // Baron Corbin
    spouses: [{ name: "Rochelle Roman", years: "2017-present", notes: "Married in 2017" }],
    children: [{ name: "Daughter", born: 2019, notes: "Has a daughter" }],
    facts: [
      "Real name Thomas Pestock, born September 13, 1984 in Lenexa, Kansas.",
      "Played professional football as an offensive lineman for the Arizona Cardinals and Indianapolis Colts.",
      "Competed in amateur boxing, winning the Golden Gloves championship in Kansas City.",
      "Won the Andre the Giant Memorial Battle Royal at WrestleMania 32.",
      "Was Mr. Money in the Bank in 2017 but failed his cash-in against Jinder Mahal."
    ],
  },
  213: { // Elias
    facts: [
      "Real name Jeffrey Sciullo, born November 22, 1987 in Pittsburgh, Pennsylvania.",
      "Is a legitimate musician and guitar player - his wrestling gimmick is based on his real talent.",
      "His catchphrase 'WWE stands for Walk With Elias' became very popular.",
      "Briefly portrayed 'Ezekiel,' claiming to be Elias's younger brother, in a storyline with Kevin Owens in 2022.",
      "Is from the Pittsburgh area and is a fan of Pittsburgh sports teams."
    ],
  },
  214: { // Tommaso Ciampa
    spouses: [{ name: "Jessie Ward", years: "2010s-present", notes: "Married; she is a former NXT ring announcer" }],
    children: [{ name: "Willow Ciampa", born: 2017, notes: "Daughter" }],
    facts: [
      "Real name Tommaso Whitney, born May 8, 1985 in Boston, Massachusetts.",
      "His NXT feud with Johnny Gargano is considered one of the greatest rivalries in NXT history.",
      "Suffered multiple serious injuries including a torn ACL and neck surgery.",
      "Known for refusing to have entrance music as NXT Champion, entering in silence.",
      "Grew up in the Boston area and is a passionate Boston sports fan."
    ],
  },
  215: { // Johnny Gargano
    spouses: [{ name: "Candice LeRae", years: "2016-present", notes: "Married fellow wrestler Candice LeRae" }],
    children: [{ name: "Quill Gargano", born: 2022, notes: "Son; named after Marvel's Star-Lord (Peter Quill)" }],
    facts: [
      "Real name John Anthony Nicholas Gargano, born August 14, 1987 in Cleveland, Ohio.",
      "Known as 'Johnny Wrestling' - considered one of the greatest NXT wrestlers ever.",
      "Was the first NXT Triple Crown Champion.",
      "Left WWE in December 2021 but returned in August 2022.",
      "Is a massive Disney and pop culture enthusiast.",
      "Named his son Quill after the Marvel character Star-Lord."
    ],
  },
  216: { // Karrion Kross
    spouses: [{ name: "Scarlett Bordeaux (Elizabeth Chihaia)", years: "2022-present", notes: "Married fellow wrestler Scarlett, his on-screen manager" }],
    facts: [
      "Real name Kevin Kesar, born July 19, 1985 in New York.",
      "Of Greek and Puerto Rican descent.",
      "Had two separate runs in WWE - debuted in NXT 2020, released 2021, returned 2022.",
      "Was NXT Champion twice during his first WWE run.",
      "Worked in Impact Wrestling as Killer Kross before joining WWE.",
      "Known for his hourglass entrance gimmick symbolizing time running out for opponents."
    ],
  },
  223: { // Iyo Sky
    facts: [
      "Real name Masami Odate, born May 12, 1990 in Yokohama, Japan.",
      "Began wrestling at age 15 in the Japanese joshi (women's) wrestling scene.",
      "Was a major star in Stardom promotion in Japan before joining WWE.",
      "Won the WWE Women's Championship and was the 2023 Money in the Bank winner.",
      "Previously wrestled as Io Shirai in NXT, where she was NXT Women's Champion.",
      "Known for her moonsault, considered one of the most beautiful in wrestling."
    ],
  },
  234: { // Torrie Wilson
    spouses: [
      { name: "Billy Kidman (Peter Gruner)", years: "2003-2008", notes: "Married fellow WWE wrestler; divorced" },
      { name: "Justin Williams", years: "2019-present", notes: "Married in 2019" }
    ],
    facts: [
      "Real name Torrie Anne Wilson, born July 24, 1975 in Boise, Idaho.",
      "Was a fitness model and appeared in Playboy magazine twice (2003 and 2004).",
      "Inducted into the WWE Hall of Fame in 2019.",
      "After retiring, became a fitness entrepreneur and dog rescue advocate.",
      "Originally started in WCW before moving to WWE in 2001 during the Invasion angle."
    ],
  },
  235: { // Stacy Keibler
    spouses: [{ name: "Jared Pobre", years: "2014-present", notes: "Married tech entrepreneur in a beach ceremony in Mexico" }],
    children: [
      { name: "Ava Grace Pobre", born: 2014, notes: "Daughter" },
      { name: "Bodhi Brooks Pobre", born: 2018, notes: "Son" },
      { name: "Isabelle Pobre", born: 2019, notes: "Daughter" }
    ],
    facts: [
      "Real name Stacy Ann-Marie Keibler, born October 14, 1979 in Rosedale, Maryland.",
      "At 5 feet 11 inches, she was known for having the longest legs in WWE.",
      "Was a Baltimore Ravens cheerleader and won a WCW Nitro Girl contest to enter wrestling.",
      "Dated George Clooney from 2011 to 2013.",
      "Appeared as a contestant on Dancing with the Stars Season 2 in 2006, finishing third.",
      "Started in WCW as 'Miss Hancock' before joining WWE."
    ],
  },
  241: { // Tommy Dreamer
    spouses: [{ name: "Beulah McGillicutty (Trisa Hayes)", years: "2002-present", notes: "Married his real-life partner and ECW valet" }],
    children: [
      { name: "Briana Laughlin", notes: "Daughter" },
      { name: "Kiera Laughlin", notes: "Daughter" }
    ],
    facts: [
      "Real name Thomas James Laughlin, born February 14, 1971 in Yonkers, New York.",
      "Is synonymous with ECW - often called 'The Heart and Soul of ECW'.",
      "Opened and operates House of Hardcore wrestling promotion.",
      "His feud with Raven in ECW is considered one of the greatest in the promotion's history.",
      "Married Beulah McGillicutty (real name Trisa Hayes), his on-screen ECW valet."
    ],
  },
  250: { // Billy Kidman
    spouses: [
      { name: "Torrie Wilson", years: "2003-2008", notes: "Married fellow WWE star; divorced" }
    ],
    facts: [
      "Real name Peter Alan Gruner Jr., born May 11, 1974 in Allentown, Pennsylvania.",
      "Known for his Shooting Star Press, one of the most spectacular finishers in wrestling.",
      "Was part of the Filthy Animals stable in WCW with Rey Mysterio and Eddie Guerrero.",
      "Transitioned to a backstage producer role in WWE after retiring from in-ring competition.",
      "Started wrestling as a teenager, debuting at just 19 years old in WCW."
    ],
  },
  257: { // Adam Cole
    spouses: [{ name: "Britt Baker", years: "2017-present", notes: "Long-term relationship with AEW wrestler and licensed dentist Dr. Britt Baker" }],
    facts: [
      "Real name Austin Jenkins, born July 5, 1989 in Lancaster, Pennsylvania.",
      "Was the longest-reigning NXT Champion in history at 403 days.",
      "Led the Undisputed Era faction in NXT, one of the most dominant groups in NXT history.",
      "Suffered a severe brain injury at AEW in 2023 that threatened his career.",
      "Is an avid video game streamer on Twitch.",
      "His catchphrase 'Adam Cole Bay Bay!' became one of wrestling's most popular catchphrases."
    ],
  },
  260: { // Shayna Baszler
    facts: [
      "Real name Shayna Andrea Baszler, born August 8, 1980 in Sioux Falls, South Dakota.",
      "Is a legitimate MMA fighter with an 11-11 professional MMA record.",
      "Appeared on Season 18 of The Ultimate Fighter as part of Ronda Rousey's team.",
      "Close real-life friends with Ronda Rousey, Marina Shafir, and Jessamyn Duke (the Four Horsewomen of MMA).",
      "Was a dominant two-time NXT Women's Champion.",
      "Known for her submission-based wrestling style, particularly her Kirifuda Clutch."
    ],
  },
  268: { // Chad Gable
    facts: [
      "Real name Charles Betts, born March 8, 1986 in Minneapolis, Minnesota.",
      "Was a legitimate Olympic wrestler - competed in freestyle wrestling at the 2012 London Olympics.",
      "Was an alternate for the 2008 Beijing Olympics wrestling team as well.",
      "Won multiple national wrestling championships at Northern Michigan University.",
      "Was part of the tag team American Alpha with Jason Jordan in NXT.",
      "The 'Shorty G' gimmick was widely disliked by fans, leading WWE to drop it."
    ],
  },
  136: { // Bobby Roode
    spouses: [{ name: "Tracey Roode", years: "2000s-present", notes: "Married; keeps family life private" }],
    facts: [
      "Real name Robert Francis Roode Jr., born May 11, 1977 in Peterborough, Ontario, Canada.",
      "Spent over a decade in TNA/Impact Wrestling as a multi-time World Heavyweight Champion.",
      "His entrance theme 'Glorious Domination' became one of the most popular themes in NXT history.",
      "Was part of the long-running tag team Beer Money Inc. with James Storm in TNA.",
      "Joined WWE at age 39, considered a late bloomer."
    ],
  },

  283: { // Brian Pillman
    spouses: [{ name: "Melanie Pillman", years: "1994-1997", notes: "Married until his death" }],
    children: [{ name: "Brian Pillman Jr.", born: 1998, notes: "Born after his father's death, became a professional wrestler" }],
    facts: [
      "Found dead in his hotel room on October 5, 1997, the night before the Badd Blood pay-per-view.",
      "Cause of death was a previously undetected heart condition, with painkillers contributing.",
      "Was a legitimate NFL player, playing for the Cincinnati Bengals before wrestling.",
      "Pioneered the 'Loose Cannon' gimmick that blurred the line between kayfabe and reality.",
      "Was part of the Hollywood Blonds tag team with Steve Austin in WCW."
    ],
  },
  299: { // Alundra Blayze (Madusa)
    facts: [
      "Real name Debra Miceli.",
      "Infamously threw the WWF Women's Championship in the trash on WCW Monday Nitro in December 1995.",
      "Became a monster truck driver and competed in monster truck rallies after wrestling.",
      "Inducted into the WWE Hall of Fame in 2015.",
      "Trained in Japan and was highly respected in joshi puroresu."
    ],
  },
  301: { // Fabulous Moolah
    children: [{ name: "Mary", born: 1955, notes: "Daughter given up at birth, later reunited with Moolah" }],
    legalIssues: [{ year: "2018", incident: "Posthumous abuse allegations", details: "Multiple former female wrestlers alleged Moolah exploited and controlled young women trainees, leading WWE to rename a battle royal named after her." }],
    facts: [
      "Real name Mary Lillian Ellison.",
      "Held the NWA/WWF Women's Championship for a recognized reign of 28 years (1956-1984).",
      "Passed away on November 2, 2007, at age 84.",
      "Inducted into the WWE Hall of Fame in 1995.",
      "Her legacy became highly controversial due to allegations of exploitation."
    ],
  },
  302: { // Mae Young
    facts: [
      "Real name Johnnie Mae Young, born March 12, 1923.",
      "Passed away on January 14, 2014, at age 90.",
      "Never married, was fully dedicated to professional wrestling her entire life.",
      "Famous for her incredible toughness, taking extreme bumps well into her 70s including being powerbombed through a table.",
      "The comedic storyline where she gave birth to a hand became one of the most bizarre moments in WWE history.",
      "Inducted into the WWE Hall of Fame in 2004."
    ],
  },
  303: { // Molly Holly
    facts: [
      "Real name Nora Greenwald.",
      "After retiring from wrestling, she became a trained EMT and volunteered extensively.",
      "Traveled to Africa and other countries for humanitarian and missionary work.",
      "Shaved her head at WrestleMania XX after losing to Victoria.",
      "Known as one of the most technically skilled women wrestlers of her era.",
      "Inducted into the WWE Hall of Fame in 2021."
    ],
  },
  304: { // Victoria
    facts: [
      "Real name Lisa Marie Varon.",
      "Before wrestling, she was a fitness competitor and bodybuilder.",
      "After leaving WWE, opened a restaurant called The Squared Circle in Chicago.",
      "Wrestled in TNA as Tara after her WWE run.",
      "Was a two-time WWE Women's Champion."
    ],
  },
  306: { // Naomi
    spouses: [{ name: "Jimmy Uso (Jonathan Fatu)", years: "2014-present", notes: "Fellow WWE wrestler and member of the Anoa'i family" }],
    facts: [
      "Real name Trinity Fatu (born Trinity McCray).",
      "Was a dancer for the Orlando Magic NBA team before joining WWE.",
      "Appeared on the reality show Total Divas.",
      "Her Glow entrance with blacklight-reactive gear became one of the most popular entrances in WWE.",
      "Through her marriage to Jimmy Uso, she is part of the legendary Anoa'i wrestling family."
    ],
  },
  307: { // Nia Jax
    facts: [
      "Real name Savelina Fanene.",
      "Is a member of the Anoa'i wrestling family, being a cousin of The Rock.",
      "Was a plus-size model before entering professional wrestling.",
      "Attended college on a basketball scholarship.",
      "Was released from WWE in November 2021, then returned in 2023."
    ],
  },
  308: { // Alexa Bliss
    spouses: [{ name: "Ryan Cabrera", years: "2022-present", notes: "Married musician Ryan Cabrera on April 9, 2022" }],
    children: [{ name: "Hendrix Ryan Cabrera", born: 2023, notes: "Daughter born November 2023" }],
    facts: [
      "Real name Alexis Cabrera (born Kaufman).",
      "Competed in the Arnold Classic in bodybuilding and fitness competitions as a teenager.",
      "Suffered from an eating disorder as a teenager and has been open about her recovery.",
      "Won the first ever Women's Money in the Bank ladder match.",
      "Is a big fan of Disney and has had Disney-themed ring gear.",
      "Is a multiple-time Raw and SmackDown Women's Champion."
    ],
  },
  318: { // MVP
    legalIssues: [{ year: "1998", incident: "Armed robbery conviction", details: "Served approximately nine and a half years in prison for armed robbery before beginning his wrestling career." }],
    facts: [
      "Real name Hassan Hamin Assad (born Alvin Antonio Burke Jr.).",
      "Converted to Islam while in prison and changed his name.",
      "Used his time in prison to completely turn his life around, becoming a motivational speaker.",
      "Created the VIP Lounge talk show segment in WWE.",
      "Had successful stints in New Japan Pro-Wrestling after his main WWE run."
    ],
  },
  331: { // Bron Breakker
    facts: [
      "Real name Bronson Rechsteiner.",
      "Son of Rick Steiner and nephew of Scott Steiner.",
      "Was a standout football player at Kennesaw State University.",
      "Won the NXT Championship multiple times before being called up to the main roster.",
      "Known for his explosive power and athleticism that mirrors his father and uncle's style."
    ],
  },
  339: { // Shinsuke Nakamura
    spouses: [{ name: "Harumi Maekawa", years: "2007-present", notes: "Largely keeps personal life private" }],
    facts: [
      "Born in Mineyama, Kyoto, Japan on February 24, 1980.",
      "Has a legitimate 3rd degree black belt in Kyokushin Karate.",
      "Competed in mixed martial arts, going 3-1-1 in his MMA career.",
      "Known as the King of Strong Style.",
      "His entrance theme The Rising Sun became one of the most popular in WWE history.",
      "Won the 2018 Royal Rumble match.",
      "Was one of the longest-reigning IWGP Intercontinental Champions in NJPW history."
    ],
  },
  353: { // Jesse Ventura
    spouses: [{ name: "Terry Masters", years: "1975-present", notes: "Married since July 18, 1975" }],
    children: [{ name: "Tyrel Ventura", born: 1979, notes: "Son, worked as a film director" }, { name: "Jade Ventura", born: 1983, notes: "Daughter" }],
    legalIssues: [{ year: "2014", incident: "Defamation lawsuit", details: "Won a defamation lawsuit against the estate of American Sniper author Chris Kyle, awarded $1.8 million." }],
    announcing: [{ role: "Color Commentator", show: "WWF programming", years: "1985-1990", notes: "Iconic commentator alongside Gorilla Monsoon and Vince McMahon" }],
    facts: [
      "Real name James George Janos.",
      "Served as the 38th Governor of Minnesota from 1999 to 2003.",
      "Was a United States Navy UDT/SEAL team member.",
      "Appeared in the movie Predator alongside Arnold Schwarzenegger.",
      "Filed and won a lawsuit against Vince McMahon over wrestling royalties."
    ],
  },
  354: { // Superstar Billy Graham
    spouses: [{ name: "Valerie Graham", years: "1970s-2023", notes: "Wife who stayed with him throughout his health struggles" }],
    legalIssues: [{ year: "1988", incident: "Steroid testimony", details: "Admitted to widespread steroid use and later testified about steroid culture in wrestling." }],
    facts: [
      "Real name Eldridge Wayne Coleman.",
      "Passed away on May 17, 2023, at age 79.",
      "Was the WWWF Champion from 1977 to 1978; his reign directly influenced the Hulk Hogan era.",
      "Hulk Hogan openly admitted to modeling his look, style, and promos after Billy Graham.",
      "Trained as a bodybuilder with Arnold Schwarzenegger in the 1970s.",
      "Suffered severe health problems from steroid use, including liver failure; received a liver transplant in 2002.",
      "Inducted into the WWE Hall of Fame in 2004."
    ],
  },
  358: { // Dusty Rhodes
    spouses: [{ name: "Sandra Ford", years: "1965-1975", notes: "First wife, ended in divorce" }, { name: "Michelle Rubio", years: "1978-2015", notes: "Second wife, married until his death" }],
    children: [{ name: "Dustin Rhodes (Goldust)", born: 1969, notes: "Son from first marriage" }, { name: "Cody Rhodes", born: 1985, notes: "Son from second marriage" }],
    announcing: [{ role: "Color Commentator", show: "NXT", years: "2013-2015", notes: "Beloved commentator and ambassador for NXT" }],
    facts: [
      "Real name Virgil Riley Runnels Jr.",
      "Passed away on June 11, 2015, at age 69.",
      "Known as The American Dream, one of the most iconic characters in wrestling history.",
      "His 'Hard Times' promo is widely considered one of the greatest wrestling promos of all time.",
      "Was a three-time NWA World Heavyweight Champion.",
      "Created the concept of the WarGames match.",
      "Was instrumental in developing NXT talent as a trainer at the WWE Performance Center."
    ],
  },
  433: { // Harley Race
    spouses: [{ name: "Vivian Race", years: "1960s-1970s", notes: "First wife who died in a car accident along with their infant child" }, { name: "B.J. Race", years: "1970s-2019", notes: "Second wife, married until his death" }],
    facts: [
      "Real name Harley Leland Race.",
      "Passed away on August 1, 2019, at age 76, due to lung cancer.",
      "Was an eight-time NWA World Heavyweight Champion.",
      "Suffered a devastating personal tragedy when his first wife and infant child were killed in a car accident.",
      "Opened World League Wrestling promotion and training school in Eldon, Missouri.",
      "Was known as the toughest man in wrestling."
    ],
  },
  435: { // King Kong Bundy
    facts: [
      "Real name Christopher Alan Pallies.",
      "Passed away on March 4, 2019, at age 61.",
      "Was known for demanding five-count pinfalls instead of three.",
      "Main evented WrestleMania 2 against Hulk Hogan in a steel cage match.",
      "Was a stand-up comedian after his wrestling career.",
      "Appeared on Married... with Children as Al Bundy's friend."
    ],
  },
  453: { // Brie Bella
    spouses: [{ name: "Daniel Bryan (Bryan Danielson)", years: "2014-present", notes: "Married April 11, 2014; fellow professional wrestler" }],
    children: [{ name: "Birdie Joe Danielson", born: 2017, notes: "Daughter" }, { name: "Buddy Dessert Danielson", born: 2020, notes: "Son born same day as Nikki's son Matteo" }],
    facts: [
      "Real name Brianna Monique Danielson (born Garcia-Colace).",
      "Twin sister of Nikki Bella, born November 21, 1983.",
      "Starred on Total Bellas and Total Divas on E! Network.",
      "Is of Mexican and Italian descent.",
      "Inducted into the WWE Hall of Fame in 2020 as part of The Bella Twins."
    ],
  },
  454: { // Nikki Bella
    spouses: [{ name: "Artem Chigvintsev", years: "2022-2024", notes: "Professional dancer from Dancing with the Stars; arrested for domestic violence in 2024; divorced" }],
    children: [{ name: "Matteo Artemovich Chigvintsev", born: 2020, notes: "Son" }],
    legalIssues: [{ year: "2024", incident: "DUI arrest", details: "Arrested for DUI in Napa Valley, California in September 2024." }],
    facts: [
      "Real name Stephanie Nicole Garcia-Colace.",
      "Twin sister of Brie Bella, born November 21, 1983.",
      "Was engaged to John Cena from 2017 to 2018 before calling off the wedding.",
      "Set the record for longest-reigning Divas Champion at 301 days.",
      "Started a wine brand called Belle Radici.",
      "Was a cast member on Deal or No Deal.",
      "Inducted into the WWE Hall of Fame in 2020 as part of The Bella Twins."
    ],
  },
  456: { // Carmella
    spouses: [{ name: "Corey Graves (Matthew Polinsky)", years: "2022-present", notes: "Married fellow WWE personality Corey Graves" }],
    facts: [
      "Real name Leah Van Dale.",
      "Daughter of Paul Van Dale, a professional wrestler who competed in WCW.",
      "Was a cheerleader for the New England Patriots in the NFL.",
      "Also worked as a dancer for the Los Angeles Lakers NBA team.",
      "Won the first ever Women's Money in the Bank contract in 2017."
    ],
  },
  507: { // Diamond Dallas Page
    spouses: [{ name: "Kimberly Page", years: "1991-2005", notes: "Former Nitro Girl and WCW personality; divorced" }, { name: "Brenda Nair", years: "2015-present", notes: "Third wife" }],
    facts: [
      "Real name Page Joseph Falkinburg Jr.",
      "Did not begin wrestling until age 35, remarkably late for a main event career.",
      "Created DDP Yoga, a fitness program that helped transform lives including Jake Roberts and Scott Hall.",
      "The documentary 'The Resurrection of Jake the Snake' chronicled his work helping Jake Roberts.",
      "Was a three-time WCW World Heavyweight Champion.",
      "Before wrestling, he was a nightclub manager in New Jersey.",
      "Inducted into the WWE Hall of Fame in 2017."
    ],
  },
  618: { // Ronda Rousey
    spouses: [{ name: "Travis Browne", years: "2017-present", notes: "Fellow MMA fighter" }],
    children: [{ name: "La'akea Makalapuaokalanipo Browne", born: 2021, notes: "Daughter" }],
    facts: [
      "Won a bronze medal in judo at the 2008 Beijing Olympics.",
      "Was the first female UFC Champion (inaugural Women's Bantamweight Champion).",
      "Her mother AnnMaria De Mars was the first American to win the World Judo Championships (1984).",
      "Main evented WrestleMania 35, the first women's match to main event WrestleMania.",
      "Has appeared in films including The Expendables 3 and Furious 7.",
      "Has spoken openly about suffering from depression and suicidal thoughts after UFC losses."
    ],
  },
  850: { // Logan Paul
    legalIssues: [{ year: "2017", incident: "Aokigahara Forest controversy", details: "Filmed and uploaded a video showing a deceased person in Japan's Aokigahara Forest, resulting in massive backlash." }, { year: "2023", incident: "CryptoZoo controversy", details: "Faced a class-action lawsuit over his CryptoZoo NFT project alleged to be a scam." }],
    facts: [
      "Real name Logan Alexander Paul, born April 1, 1995 in Westlake, Ohio.",
      "Rose to fame on the Vine app before transitioning to YouTube.",
      "His brother Jake Paul is also a celebrity boxer and internet personality.",
      "Had a boxing exhibition match against Floyd Mayweather Jr. in June 2021.",
      "Co-founded the energy drink company Prime Hydration with KSI.",
      "Won the WWE United States Championship.",
      "Despite being a celebrity crossover, received praise for his athleticism and in-ring ability."
    ],
  },
  851: { // Jey Uso
    spouses: [{ name: "Takecia Travis", years: "2015-present", notes: "Married in 2015" }],
    children: [{ name: "Jayla Fatu", born: 2015, notes: "Daughter" }, { name: "Jey Fatu Jr.", born: 2018, notes: "Son" }],
    facts: [
      "Real name Joshua Samuel Fatu.",
      "Twin brother of Jimmy Uso (Jonathan Fatu).",
      "Part of the Anoa'i family; son of Rikishi, cousin of Roman Reigns and The Rock.",
      "His breakout came during the Bloodline storyline, where his emotional feud with Roman Reigns elevated him to main event status.",
      "The Usos became the longest-reigning tag team champions in WWE history.",
      "His 'Yeet' catchphrase became massively popular in 2023-2024."
    ],
  },
  37: { // Steve Blackman
    facts: [
      "Contracted dysentery and malaria while training in martial arts in South Africa, sidelining him for years.",
      "Holds black belts in multiple martial arts disciplines.",
      "Known as 'The Lethal Weapon' due to his legitimate martial arts background.",
      "After retiring, opened a martial arts school and personal training business.",
      "Was one of the most legitimately tough competitors in the WWF locker room."
    ],
  },
  64: { // Al Snow
    announcing: [{ role: "Head Trainer", show: "WWE Tough Enough", years: "2001-2015", notes: "Served as head trainer for multiple seasons" }],
    facts: [
      "Real name Allen Ray Sarven.",
      "His 'Head' gimmick with a mannequin head became one of the most iconic comedy props in WWE history.",
      "Became head of TNA Wrestling's talent development program.",
      "Ran Ohio Valley Wrestling as head trainer, developing future WWE stars.",
      "Holds a degree in education."
    ],
  },
  70: { // Perry Saturn
    legalIssues: [{ year: "2004", incident: "Shot while saving a woman", details: "Was shot twice in the neck while saving a woman from assault in Atlanta. Fell into drug addiction and homelessness afterward." }],
    facts: [
      "Real name Perry Arthur Satullo.",
      "Served in the United States Army as a Ranger before entering professional wrestling.",
      "Was genuinely shot twice while intervening to save a woman being assaulted in 2004.",
      "Struggled with drug addiction and was homeless for years after leaving wrestling.",
      "Was rediscovered by fans around 2011 and received help getting clean.",
      "His 'Moppy' storyline in WWE involved a romantic attachment to a mop."
    ],
  },
  71: { // Dean Malenko
    facts: [
      "Real name Dean Simon.",
      "Son of legendary wrestler and trainer Boris Malenko.",
      "Known as 'The Man of 1,000 Holds' for his vast technical wrestling repertoire.",
      "Worked as a WWE producer from 2001 until retirement in 2019 due to Parkinson's disease.",
      "Considered one of the greatest pure technical wrestlers in history."
    ],
  },
  175: { // Melina
    facts: [
      "Real name Melina Nava Perez.",
      "Known for her extremely flexible ring entrance with a split on the ring apron.",
      "Three-time Women's Champion and two-time Divas Champion in WWE.",
      "Was in a long-term relationship with John Morrison (John Hennigan)."
    ],
  },
  201: { // Damien Sandow
    facts: [
      "Real name Aaron Steven Haddad.",
      "Is of Lebanese and Italian descent.",
      "His 'Damien Mizdow' stunt double gimmick became one of the most over acts in WWE in 2014.",
      "Was Money in the Bank briefcase holder in 2013 but failed his cash-in against John Cena.",
      "After WWE, returned to using Aron Stevens in the NWA."
    ],
  },
  203: { // Bo Dallas
    spouses: [{ name: "Sarah Backman", years: "2016-present", notes: "Swedish arm wrestling champion" }],
    facts: [
      "Real name Taylor Michael Rotunda.",
      "Son of WWE Hall of Famer Mike Rotunda (IRS) and grandson of Blackjack Mulligan.",
      "Brother of Windham Rotunda (Bray Wyatt), who passed away on August 24, 2023.",
      "Was the youngest NXT Champion in history at the time.",
      "His wife Sarah Backman is a multi-time World Arm Wrestling Champion from Sweden.",
      "Returned to WWE in 2024 as Uncle Howdy to honor his late brother's legacy.",
      "Third-generation professional wrestler."
    ],
  },
  206: { // Erick Rowan
    facts: [
      "Real name Joseph Ruud.",
      "Is of Norwegian descent and stands 6 feet 8 inches tall.",
      "Is an accomplished home winemaker, which was incorporated into his WWE character.",
      "Was a member of the Wyatt Family alongside Bray Wyatt and Luke Harper.",
      "Before wrestling, competed in track and field including shot put and discus.",
      "Has a degree in exercise science."
    ],
  },
  243: { // Sabu
    legalIssues: [
      { year: "2002", incident: "Drug possession", details: "Arrested for possession of controlled substances." },
      { year: "2016", incident: "DUI and drug possession", details: "Arrested for DUI and possession of controlled substances." }
    ],
    facts: [
      "Real name Terry Michael Brunk.",
      "Nephew of wrestling legend The Original Sheik (Ed Farhat).",
      "Pioneer of extreme hardcore and high-flying wrestling style in ECW.",
      "His body is covered in scars from years of extreme matches involving barbed wire, fire, and tables.",
      "Was nicknamed 'The Homicidal, Suicidal, Genocidal, Death-Defying Maniac'."
    ],
  },
  265: { // Candice LeRae
    spouses: [{ name: "Johnny Gargano", years: "2016-present", notes: "Fellow WWE wrestler" }],
    children: [{ name: "Quill Gargano", born: 2022, notes: "Son, born February 17, 2022" }],
    facts: [
      "Was one of the first women to wrestle extensively in intergender matches on the independent scene.",
      "Known as 'The Poison Pixie' on the indie scene before joining WWE.",
      "Is from Winnipeg, Manitoba, Canada.",
      "Met husband Johnny Gargano on the independent wrestling circuit."
    ],
  },
  279: { // Roderick Strong
    spouses: [{ name: "Marina Shafir", years: "2018-present", notes: "Fellow wrestler and MMA fighter, one of the Four Horsewomen of MMA" }],
    children: [{ name: "Troy Strong", born: 2019, notes: "First child" }],
    facts: [
      "Real name Christopher Lindsey.",
      "Had an extremely difficult upbringing; his mother was addicted to drugs and his father was largely absent.",
      "Was essentially homeless as a teenager and lived out of wrestling schools.",
      "Known for having one of the best backbreakers in professional wrestling.",
      "Member of The Undisputed Era in NXT alongside Adam Cole, Kyle O'Reilly, and Bobby Fish."
    ],
  },
  309: { // Tiffany Stratton
    facts: [
      "Real name Tiffany Jean Stratton.",
      "Was an accomplished gymnast before transitioning to professional wrestling.",
      "Her in-ring style incorporates her gymnastics background with the Prettiest Moonsault Ever.",
      "Is from Prior Lake, Minnesota.",
      "Successfully cashed in Money in the Bank on Nia Jax in January 2025 to win the WWE Women's Championship."
    ],
  },
  320: { // Ryback
    facts: [
      "Real name Ryan Allen Reeves.",
      "Was a finalist on WWE Tough Enough Season 4 in 2004.",
      "His 'Feed Me More' catchphrase became one of the most popular crowd chants around 2012-2013.",
      "Has been very vocal about WWE's pay structure and treatment of independent contractors.",
      "Started his own supplement brand called 'Feed Me More Nutrition'.",
      "Legally retained the rights to the name 'Ryback' after leaving WWE."
    ],
  },
  330: { // Carmelo Hayes
    facts: [
      "Real name Caleb Hayes, from Boston, Massachusetts.",
      "Was a standout basketball player in high school before choosing professional wrestling.",
      "Won the inaugural NXT Breakout Tournament in 2021.",
      "His catchphrase 'Him' and 'Melo Don't Miss' became popular fan chants.",
      "Is one of the youngest stars to win the NXT Championship."
    ],
  },
  345: { // Ali (Mustafa Ali)
    spouses: [{ name: "Uzma Ali", years: "2010-present", notes: "Married in 2010" }],
    children: [{ name: "Daughter", born: 2012, notes: "First child" }, { name: "Daughter", born: 2015, notes: "Second child" }, { name: "Son", born: 2019, notes: "Third child" }],
    facts: [
      "Real name Adeel Alam.",
      "Is a Pakistani-American Muslim who has been outspoken about representing his community.",
      "Was a police officer in Homewood, Illinois before becoming a full-time professional wrestler.",
      "Used his platform to combat stereotypes of Muslim and Middle Eastern people in wrestling.",
      "Requested and was granted his release from WWE in 2023."
    ],
  },
  383: { // Michelle McCool
    spouses: [{ name: "Jeremy McCool", years: "2001-2006", notes: "First marriage, ended in divorce" }, { name: "The Undertaker (Mark Calaway)", years: "2010-present", notes: "Third wife of The Undertaker" }],
    children: [{ name: "Kaia Faith Calaway", born: 2012, notes: "Daughter with The Undertaker" }],
    facts: [
      "Real name Michelle Leigh Calaway (nee McCool).",
      "Was a middle school science teacher in Palatka, Florida before joining WWE.",
      "Won the 2004 WWE Diva Search, which launched her wrestling career.",
      "Married to The Undertaker, one of WWE's biggest legends.",
      "Is a two-time Divas Champion and two-time Women's Champion."
    ],
  },
  438: { // Rick Martel
    facts: [
      "Real name Richard Vigneault, from Quebec City, Canada.",
      "Held the AWA World Heavyweight Championship for over a year (1984-1985).",
      "Formed the iconic tag team Strike Force with Tito Santana.",
      "His 'Model' Rick Martel gimmick with 'Arrogance' cologne spray was one of the most memorable characters of the early 1990s.",
      "Had a blindfold match with Jake Roberts at WrestleMania VII.",
      "Considered one of the greatest Canadian professional wrestlers of all time."
    ],
  },
  458: { // Mandy Rose
    spouses: [{ name: "Tino Sabbatelli", years: "2022-present", notes: "Fellow former WWE NXT wrestler" }],
    legalIssues: [{ year: "2022", incident: "WWE release over content", details: "Released from WWE in December 2022 after posting content on her FanTime page that violated her contract." }],
    facts: [
      "Real name Amanda Rose Saccomanno.",
      "Was a contestant on WWE Tough Enough in 2015, finishing as runner-up.",
      "Was a fitness competitor and bodybuilder before entering wrestling.",
      "Graduated from Iona College with a degree in speech pathology.",
      "Had one of the longest NXT Women's Championship reigns at over 400 days."
    ],
  },
  465: { // Zelina Vega
    spouses: [{ name: "Malakai Black (Tom Budgen)", years: "2018-present", notes: "Fellow professional wrestler" }],
    facts: [
      "Real name Thea Megan Trinidad.",
      "Her father was a victim of the September 11, 2001 terrorist attacks at the World Trade Center.",
      "Was only 10 years old when her father died on 9/11.",
      "Is of Puerto Rican and Dominican descent, from Queens, New York.",
      "Is an avid cosplayer and competitive gamer.",
      "Was fired from WWE in 2020 for supporting unionization on social media, but was rehired in 2021.",
      "Won the inaugural Queen's Crown Tournament in 2021."
    ],
  },
  482: { // Andrade El Idolo
    spouses: [{ name: "Charlotte Flair (Ashley Fliehr)", years: "2022-present", notes: "Fellow WWE wrestler; married June 4, 2022 in Mexico" }],
    facts: [
      "Real name Manuel Alfonso Andrade Oropeza, from Gomez Palacio, Mexico.",
      "Is a third-generation professional wrestler from a renowned Mexican wrestling family.",
      "Wrestled in CMLL as 'La Sombra' before signing with WWE.",
      "His wife Charlotte Flair is the daughter of Ric Flair.",
      "Left WWE in 2021, wrestled for AEW, then returned to WWE in 2024."
    ],
  },
  486: { // Ricochet
    spouses: [{ name: "Samantha Irvin", years: "2023-present", notes: "WWE ring announcer; engaged in 2023" }],
    facts: [
      "Real name Trevor Mann, from Paducah, Kentucky.",
      "Competed as Prince Puma in Lucha Underground where he won the Championship.",
      "Has a son from a previous relationship.",
      "His athleticism has drawn comparisons to Spider-Man.",
      "Won the NXT North American Championship and WWE Intercontinental Championship.",
      "Left WWE in 2024 and signed with AEW and New Japan Pro-Wrestling."
    ],
  },
  491: { // Jade Cargill
    spouses: [{ name: "Brandon Phillips", years: "2010s-present", notes: "Former MLB All-Star who played for the Cincinnati Reds" }],
    children: [{ name: "Bailey Quinn Phillips", born: 2017, notes: "Daughter" }],
    facts: [
      "Real name Jade Deshawn Cargill.",
      "Was a standout basketball player at Jacksonville University on scholarship.",
      "Has a bachelor's degree in social science.",
      "Went undefeated for over a year in AEW with 60+ consecutive wins before signing with WWE.",
      "Debuted at the 2024 Royal Rumble."
    ],
  },
  706: { // Jim Duggan
    spouses: [{ name: "Debra Duggan", years: "1994-present", notes: "Married in 1994" }],
    children: [{ name: "Celia Duggan", born: 1994, notes: "Daughter" }, { name: "Rebecca Duggan", born: 1997, notes: "Daughter" }],
    legalIssues: [{ year: "1987", incident: "Drug arrest with Iron Sheik", details: "Arrested with Iron Sheik on the New Jersey Turnpike for drug possession. Both fired from WWF. Duggan rehired after rehabilitation." }],
    facts: [
      "Real name James Edward Duggan.",
      "Played football at SMU and was briefly signed by the NFL's Atlanta Falcons.",
      "Won the first-ever Royal Rumble match in 1988.",
      "Was diagnosed with prostate cancer in 1998 and beat it.",
      "Was diagnosed with kidney cancer in 2023 and underwent surgery.",
      "Inducted into the WWE Hall of Fame in 2011."
    ],
  },
  // Batch 11 - Classic & Modern Era
  889: {
    spouses: [
      { name: "Jill Jarrett", years: "1993-1997", notes: "Had three daughters together; Jill passed away from breast cancer in 1999" },
      { name: "Karen Angle", years: "2010-present", notes: "Previously married to wrestler Kurt Angle; married Jeff in 2010" }
    ],
    children: [
      { name: "Joslyn Jarrett", born: 1993, notes: "Daughter with first wife Jill" },
      { name: "Jaclyn Jarrett", born: 1995, notes: "Daughter with first wife Jill" },
      { name: "Jerlyn Jarrett", born: 1997, notes: "Daughter with first wife Jill" },
      { name: "Kody Jarrett", born: 2012, notes: "Son with Karen" },
      { name: "Kenzie Jarrett", born: 2014, notes: "Daughter with Karen" }
    ],
    facts: [
      "Third-generation wrestler; son of promoter Jerry Jarrett and grandson of wrestler/promoter Eddie Marlin",
      "Co-founded TNA Wrestling (now Impact Wrestling) in 2002 with his father Jerry",
      "Had a famous dispute with WWE in 1999 where he held the Intercontinental Championship hostage and demanded payment before dropping the title to Chyna",
      "First wife Jill passed away from breast cancer in 1999, which deeply affected his personal and professional life",
      "WWE Hall of Fame inductee in the Class of 2018",
      "Known for his guitar-smashing gimmick, reportedly breaking over 10,000 guitars throughout his career",
      "His marriage to Kurt Angles ex-wife Karen became a major storyline in TNA Wrestling"
    ]
  },
  972: {
    spouses: [
      { name: "Sabrina Eudy", years: "1988-2024", notes: "Married until his death in 2024" }
    ],
    children: [
      { name: "Gunnar Eudy", born: 1990, notes: "Son who briefly pursued a wrestling career" },
      { name: "Frank Eudy", born: 1993, notes: "Son" }
    ],
    legalIssues: [
      { year: "1993", incident: "Stabbing incident with Arn Anderson", details: "During a bar fight at a hotel in Blackburn, England during a WCW UK tour, Sid and Arn Anderson got into an altercation involving scissors; both men were hospitalized" }
    ],
    facts: [
      "Real name Sidney Raymond Eudy; stood 6 feet 9 inches tall and weighed over 300 pounds",
      "Diagnosed with Non-Hodgkin lymphoma in 2023 and passed away on August 26, 2024 at age 63",
      "Owned and operated a successful softball complex in Marion, Arkansas called The Compound",
      "Was an avid softball player and competed in senior softball leagues during his time away from wrestling",
      "Suffered one of the most gruesome injuries in wrestling history when he snapped his leg during a big boot attempt at WCW Sin in January 2001",
      "Won the WWF Championship twice and the WCW World Heavyweight Championship twice",
      "Known for his infamous promo botch: We have half the brain that you do!"
    ]
  },
  974: {
    spouses: [
      { name: "Loree Bischoff", years: "1984-present", notes: "Married since 1984; longtime marriage spanning his entire wrestling career" }
    ],
    children: [
      { name: "Garett Bischoff", born: 1988, notes: "Son who had a brief wrestling career in TNA/Impact Wrestling" },
      { name: "Montanna Bischoff", born: 1991, notes: "Daughter" }
    ],
    announcing: [
      { role: "Play-by-play announcer", show: "AWA Championship Wrestling", years: "1987-1990", notes: "Started his wrestling career as a telecaster for the AWA" },
      { role: "Announcer", show: "WCW Saturday Night / WCW Monday Nitro", years: "1991-1993", notes: "Debuted as announcer at The Great American Bash 1991 before transitioning to executive role" }
    ],
    facts: [
      "Holds a black belt in taekwondo and trained in amateur wrestling",
      "Before wrestling, he owned a construction company, worked as a veterinary assistant, and ran a butcher shop with meat delivery service",
      "As President of WCW, he launched Monday Nitro which beat WWF Raw in the ratings for 83 consecutive weeks",
      "Published autobiography Controversy Creates Cash in 2006 through WWE Books",
      "Lives in Cody, Wyoming where he owns a ranch",
      "Inducted into the WWE Hall of Fame in 2021"
    ]
  },
  552: {
    spouses: [
      { name: "Erin Anderson (nee Lunde)", years: "1984-present", notes: "Longtime wife; married throughout his wrestling career" }
    ],
    children: [
      { name: "Brock Anderson", born: 1998, notes: "Son who became a professional wrestler; competed in AEW alongside his father" },
      { name: "Barrett Anderson", born: 1996, notes: "Son" }
    ],
    legalIssues: [
      { year: "1993", incident: "Stabbing incident with Sid Eudy", details: "During a WCW UK tour in Blackburn, England, got into a violent altercation with Sid Vicious in a hotel bar involving scissors; Anderson was stabbed multiple times" }
    ],
    facts: [
      "Real name Martin Anthony Lunde; not actually related to Ole Anderson or Gene Anderson despite the kayfabe family connection",
      "Considered by many to be the greatest member of The Four Horsemen stable",
      "His career as an active wrestler ended due to cervical spine fusion surgery in 1997",
      "Served as a producer and agent for WWE from 2001 to 2019",
      "Joined AEW as a coach and on-screen personality in 2019, managing and training his son Brock",
      "The spinebuster is widely considered his signature move and one of the best ever executed in wrestling",
      "His Glock Anderson promo in 2019 on AEW television went viral and revitalized his career"
    ]
  },
  553: {
    spouses: [
      { name: "First wife", years: "1977-1983", notes: "Divorced" },
      { name: "Second wife", years: "1985-present", notes: "Has remained private about personal life after becoming a born-again Christian" }
    ],
    children: [
      { name: "Tessa Blanchard", born: 1995, notes: "Daughter who became a professional wrestler and won the Impact Wrestling World Championship" },
      { name: "Tully Blanchard Jr.", born: 1980, notes: "Son from first marriage" }
    ],
    legalIssues: [
      { year: "1989", incident: "Failed drug test", details: "Was fired from the WWF after failing a drug test for cocaine; the incident led to his religious conversion" }
    ],
    facts: [
      "Son of wrestling promoter Joe Blanchard; grew up in San Antonio, Texas",
      "Attended West Texas State University where he played football alongside future wrestlers Tito Santana and Ted DiBiase",
      "Became a born-again Christian on November 13, 1989, shortly after being fired from the WWF",
      "Has operated a prison ministry where he preaches to inmates",
      "His daughter Tessa Blanchard became the first woman to win the Impact World Championship in 2020",
      "Was one of the original Four Horsemen alongside Ric Flair, Arn Anderson, and Ole Anderson"
    ]
  },
  841: {
    children: [
      { name: "Travis Orndorff", born: 1981, notes: "Son who announced his fathers death on social media in 2021" }
    ],
    facts: [
      "Real name Paul Parlette Orndorff Jr.; born October 29, 1949 in Brandon, Florida",
      "Played football at the University of Tampa and was drafted by the New Orleans Saints in the 1973 NFL Draft",
      "Was the co-main eventer of the first WrestleMania in 1985, teaming with Roddy Piper against Hulk Hogan and Mr. T",
      "His right arm visibly atrophied later in life due to a nerve injury in his neck from wrestling",
      "Suffered from CTE (chronic traumatic encephalopathy) which was confirmed after his death",
      "Passed away on July 12, 2021 at age 71; his son Travis revealed he had been dealing with dementia in his final years",
      "Was known as Mr. Wonderful, one of the most recognizable nicknames in 1980s wrestling",
      "WWE Hall of Fame inductee in the Class of 2005"
    ]
  },
  877: {
    facts: [
      "Real name Sylvester Ritter; born December 13, 1952 in Wadesboro, North Carolina",
      "Graduated from Fayetteville State University with a degree in political science",
      "Was a standout college football player, earning honorable mention All-American status twice",
      "Was selected by the Green Bay Packers but knee and back surgeries ended his football career",
      "Trained future wrestlers Rodney Mack and Jazz",
      "Died on June 2, 1998 at age 45 in a single-car accident on Interstate 20 near Forest, Mississippi",
      "The apparent cause of the accident was falling asleep at the wheel while returning from his daughters graduation",
      "Inducted into the WWE Hall of Fame in the Class of 2004"
    ]
  },
  995: {
    children: [
      { name: "Jared", born: 1977, notes: "Son from her first marriage" }
    ],
    facts: [
      "Real name Sherri Russell, later Sherri Martel; born February 8, 1958 in New Orleans, Louisiana",
      "Trained under Butch Moore in Memphis, Tennessee and at The Fabulous Moolahs wrestling school",
      "Managed some of the biggest names in wrestling: Randy Savage, Shawn Michaels, Ted DiBiase, and Harlem Heat",
      "Her emotional reunion with Shawn Michaels at the 1997 Royal Rumble is one of wrestlings most memorable moments",
      "Inducted into the WWE Hall of Fame in the Class of 2006",
      "Passed away on June 15, 2007 at age 49 in Birmingham, Alabama; cause of death was an accidental overdose"
    ]
  },
  735: {
    spouses: [
      { name: "Tom Nash", years: "1980s", notes: "First husband; childhood friend" },
      { name: "David Heath (Gangrel)", years: "1994-2006", notes: "Fellow professional wrestler" }
    ],
    facts: [
      "Real name Gertrude Elizabeth Vachon; born January 12, 1962 in Atlanta, Georgia",
      "Part of a legendary wrestling family: daughter of Paul Mad Dog Vachon, niece of Vivian and Maurice Vachon",
      "Was the first woman to appear in a WWF video game (WWF Raw on SNES/Genesis in 1994)",
      "Shaved her head as part of her wrestling persona, which was groundbreaking for women in wrestling",
      "Died on August 27, 2010 at age 48; her death was ruled an accidental overdose",
      "Inducted posthumously into the WWE Hall of Fame in the Class of 2019"
    ]
  },
  736: {
    facts: [
      "Real name Jacqueline DeLois Moore; born January 6, 1964 in Dallas, Texas",
      "One of the most versatile female wrestlers of her era, competing against both men and women",
      "Won the WWE Cruiserweight Championship in 2004, making her the only woman to hold that title",
      "Trained in kickboxing and holds a background in martial arts",
      "Inducted into the WWE Hall of Fame in the Class of 2016",
      "Also worked as a trainer at WWE Performance Center",
      "Had a notable career in USWA in Memphis before joining WWF/WWE"
    ]
  },
  737: {
    legalIssues: [
      { year: "1995", incident: "Cocaine possession", details: "Was found in possession of cocaine and immediately fired from the WWF" },
      { year: "1997", incident: "Drug possession in Japan", details: "Was arrested in Japan on drug possession charges which impacted her wrestling career" }
    ],
    facts: [
      "Real name Keiko Nakano; born January 8, 1968 in Kawaguchi, Saitama, Japan",
      "After retiring from wrestling in 1997, she became a professional golfer in 1998",
      "Qualified for the LPGA and joined the Duramed Futures Tour in January 2006",
      "Considered one of the most dominant female wrestlers in Japanese wrestling history",
      "Her matches with Alundra Blayze in 1994-1995 are considered among the best womens matches in WWF history",
      "Inducted into the WWE Hall of Fame in the Class of 2011",
      "Also competed professionally in golf on the Japanese LPGA Tour"
    ]
  },
  844: {
    facts: [
      "Real name James Harris; born May 28, 1950 in Senatobia, Mississippi",
      "Grew up in extreme poverty in Coldwater, Mississippi after his father was killed during a dice game when Harris was about four years old",
      "Worked as a sharecropper to help support his family of four sisters",
      "Trained by Bobo Brazil and Tiny Tim Hampton after moving to Michigan",
      "Suffered severe health problems later in life including diabetes which led to the amputation of both legs",
      "Had multiple fundraisers organized by the wrestling community to help cover his medical expenses",
      "Passed away on August 9, 2020 at age 70 from COVID-19 complications",
      "Despite being portrayed as an uncivilized Ugandan character, Harris was actually a soft-spoken man from Mississippi"
    ]
  },
  859: {
    facts: [
      "Real name Daniel DeWayne Severn; born June 8, 1958 in Flint, Michigan",
      "Holds the record for most combined MMA wins in history with over 100 victories",
      "Was the first and only man to simultaneously hold an MMA championship (UFC) and a professional wrestling championship (NWA) at the same time",
      "His first NWA World Heavyweight Championship reign lasted four years, the longest in over two decades",
      "Competed in UFC 4, 5, 6, and Ultimate Ultimate 1995, winning UFC 5 and Ultimate Ultimate 95",
      "Trained by Al Snow for professional wrestling",
      "Holds a legitimate background in amateur wrestling, judo, and multiple martial arts disciplines",
      "Was inducted into the UFC Hall of Fame in 2005 and the WWE Hall of Fame in 2024"
    ]
  },
  861: {
    spouses: [
      { name: "Lisa Riddle", years: "2011-2022", notes: "Divorced; had children together" }
    ],
    children: [
      { name: "Allison Riddle", born: 2012, notes: "Daughter" },
      { name: "Matthew Riddle Jr.", born: 2014, notes: "Son" },
      { name: "Zachary Riddle", born: 2016, notes: "Son" }
    ],
    legalIssues: [
      { year: "2013", incident: "UFC release for marijuana", details: "Released from the UFC in February 2013 after testing positive for marijuana for the second time" },
      { year: "2020", incident: "Sexual assault allegations", details: "Former independent wrestler accused Riddle of sexual assault; Riddle denied the allegations and filed a countersuit; the matter was eventually settled" }
    ],
    facts: [
      "Real name Matthew Fredricks Riddle; born January 14, 1986 in Allentown, Pennsylvania",
      "Was a National wrestling champion in high school and a New York state wrestling champion",
      "Competed on The Ultimate Fighter Season 7 before entering the UFC",
      "Had an 8-3-2 record in professional MMA before transitioning to pro wrestling",
      "Known for his laid-back bro persona and wrestling barefoot",
      "Trained at the Monster Factory wrestling school in 2015 to begin his pro wrestling career"
    ]
  },
  858: {
    facts: [
      "Born February 26, 1985 in Mexico City, Mexico",
      "His real identity is kept secret in the tradition of Mexican masked wrestlers (luchadores)",
      "Brother of fellow professional wrestler Rey Fenix; together they form the Lucha Brothers tag team",
      "Has competed under numerous names including Pentagon Jr., Pentagon Dark, and Penta El Zero Miedo",
      "Known for his arm-breaking signature move called the Fear Factor and the armbreaker",
      "Had a highly successful run in AEW before signing with WWE in 2025",
      "His signature taunt Cero Miedo (Zero Fear) became one of the most popular catchphrases in modern wrestling",
      "Has competed in AAA, CMLL, Impact Wrestling, Lucha Underground, and AEW"
    ]
  },
  856: {
    legalIssues: [
      { year: "2016", incident: "DUI arrest", details: "Was arrested for driving under the influence" },
      { year: "2018", incident: "Second DUI arrest", details: "Received a second DUI arrest which delayed his signing with major promotions" }
    ],
    facts: [
      "Member of the legendary Anoa’i/Fatu wrestling family",
      "Son of Sam Fatu (The Tonga Kid/Tama from The Islanders tag team in WWF)",
      "Nephew of the late Umaga (Eddie Fatu)",
      "Cousin of The Usos, Roman Reigns, and Yokozuna among others",
      "Trained by his uncle Rikishi",
      "Was a standout in Major League Wrestling (MLW) as their World Heavyweight Champion before joining WWE in 2024",
      "His debut in WWE as a member of The Bloodline alongside Solo Sikoa was one of the most anticipated debuts of 2024",
      "Has seven children as of 2023"
    ]
  },
  853: {
    facts: [
      "Real name Nikola Bogojevic; born December 21, 1991 in Superior, Wisconsin",
      "One of the most decorated amateur wrestlers in Wisconsin state history",
      "Went 48-0 with an undefeated record in his senior year of high school wrestling",
      "Multiple USA Wrestling All-American and national Greco-Roman champion",
      "Attended Colorado State University-Pueblo where he studied Recreation",
      "Trained and mentored at USA Olympic Training facilities by Olympic gold medalist Rulon Gardner",
      "Of Serbian descent, which inspired parts of his Heavy Machinery tag team persona",
      "Won the Money in the Bank briefcase in 2020 during the unique cinematic match at WWE headquarters"
    ]
  },
  829: {
    spouses: [
      { name: "Amy Polinsky", years: "2009-2023", notes: "Divorced; had three children together" },
      { name: "Carmella (Leah Van Dale)", years: "2022-present", notes: "Began dating fellow WWE personality Carmella after separation from first wife" }
    ],
    children: [
      { name: "Three children with first wife", born: 2011, notes: "Names kept private" },
      { name: "Child with Carmella", born: 2023, notes: "Had a child with Carmella (Leah Van Dale)" }
    ],
    announcing: [
      { role: "Color commentator", show: "NXT", years: "2014-2016", notes: "Transitioned to commentary after being forced to retire due to concussions" },
      { role: "Color commentator", show: "WWE Raw", years: "2016-2019, 2021-present", notes: "Main roster commentary position" },
      { role: "Color commentator", show: "WWE SmackDown", years: "2019-2021", notes: "Moved between brands during WWE draft periods" }
    ],
    facts: [
      "Real name Matthew Polinsky; born February 24, 1984 in Pittsburgh, Pennsylvania",
      "Was forced to retire from in-ring competition on December 11, 2014 due to multiple concussions",
      "Former NXT Tag Team Champion with Adrian Neville (PAC)",
      "His transition from wrestler to commentator is considered one of the most successful in modern WWE history"
    ]
  },
  944: {
    spouses: [
      { name: "The Miz (Mike Mizanin)", years: "2014-present", notes: "Married on February 20, 2014 in the Bahamas; the couple stars in Miz and Mrs reality show" }
    ],
    children: [
      { name: "Monroe Sky Mizanin", born: 2018, notes: "First daughter" },
      { name: "Madison Jade Mizanin", born: 2019, notes: "Second daughter" }
    ],
    facts: [
      "Real name Maryse Mizanin (nee Ouellet); born January 21, 1983 in Montreal, Quebec, Canada",
      "Won Miss Hawaiian Tropic Canada in 2003",
      "Is fluently bilingual in English and French",
      "Stars alongside her husband The Miz in the USA Network reality show Miz and Mrs",
      "Two-time WWE Divas Champion",
      "Took a hiatus from wrestling from 2011 to 2016 before returning to manage her husband"
    ]
  },
  868: {
    facts: [
      "Real name Sarona Moana-Marie Reiher Snuka; born January 10, 1978 in Vancouver, Washington",
      "Daughter of WWE Hall of Famer Jimmy Superfly Snuka",
      "Younger sister of former WWE wrestler Sim Snuka (Deuce)",
      "Of Samoan, Tongan, and Japanese descent",
      "Part of the extended Anoa’i wrestling family through Samoan heritage connections",
      "One of the longest-tenured female wrestlers on the WWE roster, spanning from 2010 to 2023",
      "Won the WWE Womens Tag Team Championship with Natalya in 2021",
      "Before wrestling, she was a basketball player and worked as a nightclub bouncer"
    ]
  },
  925: {
    legalIssues: [
      { year: "2020", incident: "Stalker/attempted kidnapping at her home", details: "A fan broke into her home in Lutz, Florida with a knife and zip ties; he had been stalking her for months; he was arrested and convicted" }
    ],
    facts: [
      "Real name Daria Rae Berenato; born September 24, 1993 in Shamong, New Jersey",
      "Is openly gay, making her one of the first openly LGBTQ performers in WWE",
      "Competed on WWE Tough Enough in 2015",
      "Has a background in judo and mixed martial arts",
      "Was part of the original Absolution stable with Paige and Mandy Rose",
      "The attempted kidnapping at her home in 2020 became a major news story and led to increased security awareness for wrestlers"
    ]
  },
  590: {
    spouses: [
      { name: "Juice Robinson (Joseph Robinson)", years: "2021-present", notes: "Became engaged in 2021; fellow professional wrestler from New Japan Pro-Wrestling" }
    ],
    facts: [
      "Real name Toni Rossall; born October 19, 1995 in Gold Coast, Queensland, Australia",
      "Grew up in New Zealand before moving to the United Kingdom to pursue her wrestling career",
      "Began training at age 13, making her one of the youngest starters in modern womens wrestling",
      "Had successful runs in Stardom (Japan), Progress Wrestling (UK), and World of Sport Wrestling (UK) before joining WWE",
      "Left WWE in December 2021, then joined AEW where she became AEW Womens Champion",
      "Her Timeless Toni Storm gimmick in AEW, inspired by Old Hollywood glamour, was critically acclaimed",
      "Won the AEW Womens World Championship in 2023"
    ]
  },
  620: {
    spouses: [
      { name: "EVIL (Takaaki Watanabe)", years: "2019-present", notes: "Married fellow New Japan Pro-Wrestling star EVIL" }
    ],
    facts: [
      "Real name Masami Odate; born May 8, 1990 in the Kanto region of Japan",
      "Considered one of the greatest female wrestlers to come out of Japan in the modern era",
      "Was a top star in Stardom promotion in Japan before signing with WWE in 2018",
      "Won the NXT Womens Championship and became IYO SKY in the main roster rebranding",
      "Won the WWE Womens Championship at WrestleMania 40 in 2024 as part of Damage CTRL",
      "Her moonsault is widely regarded as one of the most beautiful in all of wrestling",
      "Formed the stable Damage CTRL with Bayley, Dakota Kai, and Kairi Sane in WWE"
    ]
  },

  // Batch 12 - Mid-card & Modern Stars
  187: {
    facts: [
      "Real name Salvador Guerrero IV, known as Chavo Guerrero Jr.",
      "Third-generation wrestler from the legendary Guerrero wrestling family",
      "Nephew of Eddie Guerrero, son of Chavo Guerrero Sr., grandson of Gory Guerrero",
      "Portrayed the role of Hector Guerrero in the Young Rock TV series",
      "Served as a stunt coordinator and wrestling consultant for the GLOW Netflix series",
      "Won the ECW Championship and the Cruiserweight Championship multiple times",
      "Formed the tag team Los Guerreros with his uncle Eddie Guerrero",
      "Also competed in TNA, Lucha Underground, and various indie promotions after WWE"
    ]
  },
  508: {
    legalIssues: [
      { year: "2011", incident: "Wellness Policy Violation", details: "Received a 30-day suspension from WWE for a violation of the Wellness Policy" },
      { year: "2012", incident: "Second Wellness Policy Violation", details: "Received a second Wellness Policy suspension, contributing to his release from WWE" }
    ],
    facts: [
      "Real name Matthew Sydal, performed as Evan Bourne in WWE",
      "Known for his spectacular Shooting Star Press finisher",
      "Won the WWE Tag Team Championship with Kofi Kingston as Air Boom",
      "Before WWE, competed as Matt Sydal in Ring of Honor and various indie promotions",
      "After leaving WWE, competed in New Japan Pro-Wrestling, AEW, Ring of Honor, and Impact Wrestling",
      "His career was significantly derailed by a broken foot combined with Wellness Policy violations"
    ]
  },
  510: {
    legalIssues: [
      { year: "2013", incident: "Wellness Policy Violation (original Sin Cara)", details: "The original Sin Cara (Luis Urive/Mistico) was suspended 30 days for violating the WWE Wellness Policy" },
      { year: "2015", incident: "DUI Arrest (original Sin Cara)", details: "Luis Urive was arrested for DUI in San Antonio, Texas, shortly before his WWE release" }
    ],
    facts: [
      "The Sin Cara character had two performers: originally Luis Urive (Mistico) from 2011 to 2014, then Jorge Arias (Hunico) took over the role permanently",
      "Luis Urive was a massive star in CMLL Mexico as Mistico before coming to WWE with huge expectations",
      "The original Sin Cara was known for frequent botches and communication difficulties due to a language barrier",
      "WWE quietly replaced the original performer without publicly acknowledging the switch",
      "Jorge Arias was released from WWE in 2019 and returned to the Mexican wrestling scene",
      "The original Mistico returned to CMLL and regained his popularity in Mexico"
    ]
  },
  583: {
    facts: [
      "Real name Jeremy Fritz, born in Florence, South Carolina but raised in Nashville, Tennessee",
      "Despite his American birth, he spent much of his career in Canada, primarily with TNA/Impact Wrestling",
      "Won the TNA World Heavyweight Championship twice",
      "Led the faction Team Canada in TNA during the mid-2000s",
      "Also led the stable Sanity in WWE NXT and on the main roster",
      "Known for his comedic and unhinged character work throughout his career",
      "Suffered a serious neck injury that required surgery and kept him out of action for an extended period"
    ]
  },
  585: {
    facts: [
      "Real name Michael Hutter, born in Batavia, New York",
      "EC3 stands for Ethan Carter III, portraying a spoiled nephew of Dixie Carter in TNA",
      "Won the TNA World Heavyweight Championship",
      "Was initially in WWE as Derrick Bateman on NXT season 4, then returned years later as EC3",
      "His second WWE run in 2019 was widely considered a major misuse of his talents",
      "Known for his excellent promo skills and character work"
    ]
  },
  622: {
    facts: [
      "Real name Shane Strickland, born in Tacoma, Washington",
      "Won the AEW World Championship, becoming one of the youngest world champions in a major promotion",
      "Before AEW, competed in WWE/NXT as Isaiah Swerve Scott, winning the NXT North American Championship",
      "Made his name on the independent scene, particularly in Lucha Underground as Killshot",
      "Known for his high-flying and hard-hitting hybrid wrestling style",
      "Won the MLW World Middleweight Championship before joining WWE"
    ]
  },
  492: {
    facts: [
      "Real name Matrick Belton, born in Atlanta, Georgia",
      "Won the NXT Championship, becoming a breakout star of NXT 2.0",
      "Was a standout college football player before transitioning to professional wrestling",
      "Known for his charismatic personality and catchphrase Whoop That Trick",
      "Trained at the WWE Performance Center",
      "Called up to the main WWE roster on SmackDown"
    ]
  },
  493: {
    facts: [
      "Real name Ilja Dragunov, born in Moscow, Russia but raised in Dortmund, Germany",
      "Won the NXT United Kingdom Championship and later the NXT Championship",
      "Known for his extraordinarily intense and physical wrestling style, often called the Mad Dragon",
      "Had an iconic rivalry with WALTER (Gunther) in NXT UK, producing multiple Match of the Year candidates",
      "Competed extensively in wXw (Westside Xtreme Wrestling) in Germany before joining WWE",
      "Was called up to the main WWE roster in 2024"
    ]
  },
  500: {
    spouses: [
      { name: "Matt Cardona (Zack Ryder)", years: "2022-present", notes: "Married fellow wrestler Matt Cardona in 2022" }
    ],
    facts: [
      "Real name Chelsea Green, born in Victoria, British Columbia, Canada",
      "Was released from WWE in 2021 after a short main roster run, then re-signed in 2022",
      "Won the WWE Womens Tag Team Championship",
      "Appeared on TNA/Impact Wrestling as Laurel Van Ness, winning the Impact Knockouts Championship",
      "Known for her comedic Hot Mess character",
      "Competed on season 6 of Tough Enough before being signed by WWE",
      "Her second WWE run has been far more successful than her initial stint"
    ]
  },
  505: {
    facts: [
      "Real name Dani Palmer, born in Dublin, Ireland",
      "Won the NXT Womens Championship, becoming one of Irelands most prominent female wrestlers",
      "First Irish-born woman to win a championship in WWE",
      "Known for her athletic in-ring style featuring a spinning heel kick and leg drop finisher",
      "Was called up to the main WWE roster in 2024",
      "Trained at various wrestling schools in the UK and Ireland before being signed to NXT"
    ]
  },
  906: {
    facts: [
      "Real name Oluwadamilola Ogunleye, born in Lagos, Nigeria",
      "Stands approximately 6 feet 5 inches tall and is known for his incredible athleticism for his size",
      "Won the NXT North American Championship multiple times and the NXT Championship",
      "Was a standout track and field athlete before transitioning to professional wrestling",
      "Known for his dominant, powerhouse style mixed with surprising agility",
      "One of the youngest NXT champions in the brands history"
    ]
  },
  936: {
    legalIssues: [
      { year: "2008", incident: "Domestic Dispute", details: "Was involved in a domestic incident with his wife that received media attention" }
    ],
    facts: [
      "Real name Robert William Howard, born in Mobile, Alabama",
      "Known for his extremely stiff and physical wrestling style, which led to real-life heat with several wrestlers",
      "Wrote an autobiography titled The Hardcore Truth: The Bob Holly Story",
      "Had a near-fatal incident in 2002 when Brock Lesnar dropped him on his neck during a powerbomb, requiring surgery",
      "Started his WWE career with the Thurman Sparky Plugg race car driver gimmick",
      "Won the WWE Hardcore Championship multiple times",
      "Spent 15 years with WWE from 1994 to 2009, making him one of the longer-tenured midcard wrestlers"
    ]
  },
  896: {
    facts: [
      "Real name Matthew Jason Bloom, born in Boston, Massachusetts",
      "Has had numerous WWE personas including Prince Albert, Albert, A-Train, Tensai, and Sweet T",
      "Stands 6 feet 7 inches tall and weighs over 350 pounds",
      "Spent several years wrestling in Japan as Giant Bernard, becoming a major star in New Japan Pro-Wrestling",
      "Won the IWGP Tag Team Championship in New Japan with Karl Anderson",
      "After retiring from in-ring competition, became the head coach at the WWE Performance Center in Orlando",
      "Was a key figure in developing NXT talent as the lead trainer",
      "Had an unexpected comedic tag team with Brodus Clay as Tons of Funk"
    ]
  },
  897: {
    facts: [
      "Real name Maven Huffman, born in Charlottesville, Virginia",
      "Won the first season of WWF Tough Enough in 2001, earning a WWE contract",
      "Famous for eliminating The Undertaker from the 2002 Royal Rumble, one of the most memorable Rumble moments",
      "The Undertaker immediately pulled him out and beat him through the arena afterward",
      "Won the WWE Hardcore Championship",
      "After leaving WWE, stepped away from wrestling almost entirely",
      "Became a personal trainer and fitness professional after his wrestling career ended"
    ]
  },
  564: {
    spouses: [
      { name: "Sable (Rena Mero)", years: "1994-2004", notes: "Married to WWE star Sable; divorced in 2004" }
    ],
    facts: [
      "Real name Marc Mero, born in Buffalo, New York",
      "Was married to Sable, who became a bigger star than him in WWE, causing real-life tension",
      "Previously wrestled as Johnny B. Badd in WCW, a flamboyant Little Richard-inspired character",
      "Won the WCW Television Championship three times as Johnny B. Badd",
      "Won the WWE Intercontinental Championship",
      "Became a motivational speaker after retiring, giving talks at schools about making positive choices",
      "Was a Golden Gloves boxing champion before entering professional wrestling",
      "Suffered multiple knee injuries that shortened his in-ring career"
    ]
  },
  559: {
    legalIssues: [
      { year: "1993", incident: "Anabolic Steroid Charges", details: "Was one of several WWF wrestlers implicated in a steroid distribution case" },
      { year: "1998", incident: "Domestic Violence Arrest", details: "Arrested for domestic violence in Florida" }
    ],
    facts: [
      "Real name Brian Adams, born in Kona, Hawaii",
      "Passed away on August 13, 2007 at the age of 44 from an accidental overdose",
      "Originally debuted in WWE as one half of Demolition, replacing the original Ax",
      "Best known for his solo run as Crush with a Hawaiian surfer gimmick in the early 1990s",
      "Later joined the Nation of Domination and then became part of Kronik tag team with Bryan Clark in WCW",
      "His death came just weeks after the Chris Benoit tragedy, adding to scrutiny of wrestler deaths",
      "Stood 6 feet 6 inches tall and was known for his impressive physique"
    ]
  },
  963: {
    spouses: [
      { name: "Killian Dain (Damian Mackle)", years: "2019-present", notes: "Married fellow WWE/NXT wrestler Killian Dain" }
    ],
    facts: [
      "Real name Nicola Glencross, born in Glasgow, Scotland",
      "Won the WWE Womens Tag Team Championship and the NXT Womens Championship",
      "Known for her unhinged, chaotic character Nikki Cross and later the superhero-inspired Nikki A.S.H.",
      "Was part of the SAnitY faction in NXT alongside Eric Young, Alexander Wolfe, and Killian Dain",
      "The Nikki A.S.H. character won the Money in the Bank briefcase in 2021 and cashed in to win the Raw Womens Championship",
      "Reverted back to the darker Nikki Cross character after the A.S.H. gimmick ended"
    ]
  },
  964: {
    facts: [
      "Real name Ashley Urbanski, born in the San Francisco Bay Area, California",
      "Served in the United States Marine Corps before becoming a professional wrestler",
      "Known for her punk rock aesthetic with extensive tattoos and an edgy presentation",
      "Often rode a miniature tank to the ring in NXT",
      "Won the NXT Womens Tag Team Championship with Ember Moon",
      "Trained at Santino Brothers Wrestling Academy and competed on the indie scene as Shotzi Blackheart",
      "Known for her daredevil style and willingness to take high-risk bumps"
    ]
  },
  675: {
    spouses: [
      { name: "Keith Lee", years: "2022-present", notes: "Married fellow wrestler Keith Lee" }
    ],
    facts: [
      "Real name Stephanie Hym, born in Fontana, California to a Korean-American family",
      "Has competed in WWE, TNA/Impact Wrestling, and various independent promotions over a career spanning more than a decade",
      "Won the Impact Knockouts Championship",
      "Was part of the Retribution faction in WWE during 2020, performing under the name Reckoning",
      "Known for her hard-hitting style and martial arts influenced moveset",
      "Her father was in the military and she grew up moving frequently"
    ]
  },
  676: {
    spouses: [
      { name: "Alfonso Estrella-Kadlec", years: "Unknown-present", notes: "Husband, served in the military" }
    ],
    children: [
      { name: "Summer Estrella-Kadlec", born: 2014, notes: "Daughter, has appeared in WWE storylines" },
      { name: "Second child", born: 2021, notes: "Had another child during her time away from WWE" }
    ],
    facts: [
      "Real name Macey Estrella-Kadlec, born near Fort Stewart, Georgia",
      "Served in the United States Marine Corps and completed tours of duty including service in Afghanistan",
      "One of the few WWE wrestlers with actual military combat experience",
      "Competed on season 6 of WWE Tough Enough alongside Chelsea Green",
      "Took time off from WWE in 2021 due to pregnancy",
      "Her character evolved from a patriotic Marine to a snobbish Southern Belle heel"
    ]
  },
  337: {
    facts: [
      "Real name Gurjit Singh Hans, born in London, England and raised in Burnaby, British Columbia, Canada",
      "Son of Tiger Jeet Singh, a legendary professional wrestler and huge star in Japan and Canada",
      "Second-generation wrestler who never achieved the same level of fame as his father",
      "Was part of a storyline where he would pay audience members money and then humiliate them",
      "Had a relatively short WWE career from 1997 to 2002",
      "His father Tiger Jeet Singh was inducted into the WWE Hall of Fame in 2021"
    ]
  },
  449: {
    spouses: [
      { name: "Harminder Kaur", years: "2002-present", notes: "Wife, married in India" }
    ],
    children: [
      { name: "Avleen", born: 2014, notes: "Daughter" }
    ],
    facts: [
      "Real name Dalip Singh Rana, born in Dhiraina, Himachal Pradesh, India",
      "Stands 7 feet 1 inch tall due to acromegaly, which causes gigantism",
      "Was a police officer in the Punjab Police in India before becoming a professional wrestler",
      "Won the World Heavyweight Championship, becoming the first Indian-born WWE World Champion",
      "Inducted into the WWE Hall of Fame in 2021",
      "Opened the Continental Wrestling Entertainment (CWE) wrestling promotion and training school in India",
      "Appeared in several Bollywood films and Indian reality TV shows after his wrestling career",
      "His hands were measured at 12.5 inches across, among the largest of any wrestler in history"
    ]
  },
  473: {
    facts: [
      "Real name Nicholas Dinsmore, born in Louisville, Kentucky",
      "His Eugene character was controversial but he received praise for his sensitive portrayal",
      "Was a highly skilled technical wrestler trained at Ohio Valley Wrestling (OVW), serving as a trainer",
      "Trained numerous WWE stars at OVW including John Cena, Brock Lesnar, Batista, and Randy Orton",
      "Was OVW Heavyweight Champion multiple times and considered one of the best technical wrestlers never to get a serious push",
      "His real wrestling ability far exceeded what the Eugene character showcased",
      "Has continued wrestling on the independent circuit for many years after leaving WWE"
    ]
  },
  575: {
    announcing: [
      { role: "Color Commentator", show: "Impact Wrestling", years: "2010s", notes: "Did brief commentary stints" }
    ],
    facts: [
      "Real name Kenneth Anderson, born in Two Rivers, Wisconsin",
      "Famous for his self-introduction catchphrase: MIIIISTEEERRR KENNEDYYYYY... (pause) ...KENNEDY!",
      "Won the Money in the Bank ladder match at WrestleMania 23 in 2007 but never successfully cashed in",
      "Was fired from WWE in 2009 reportedly due to being too reckless in the ring",
      "Won the TNA World Heavyweight Championship as Mr. Anderson in TNA/Impact Wrestling",
      "Was originally planned to be revealed as the illegitimate son of Vince McMahon before the storyline was changed",
      "Had his Money in the Bank briefcase taken from him due to a kayfabe injury, with Edge eventually winning it"
    ]
  },
  // Batch 13 - ECW/Cruiserweight/Legends
  38: {
    facts: [
      "Real name Michael Lockwood; born August 25, 1971 in Anaheim, California",
      "Passed away on November 6, 2003 at age 32; death was ruled an accidental overdose",
      "Was billed as the cousin of Hardcore Holly despite no real family relation",
      "Won the WWF Hardcore Championship over 20 times, becoming synonymous with the 24/7 rule",
      "Stood about 5 feet 10 inches but was billed as a superheavyweight, played for comedy",
      "Worked in WCW briefly as Mad Mikey before joining WWF in 1999"
    ]
  },
  40: {
    facts: [
      "Real name Scott Garland; born July 2, 1973 in Westbrook, Maine",
      "Famous for the Worm finishing sequence, one of the most crowd-pleasing moves in WWE history",
      "Was part of the tag team Too Cool with Grandmaster Sexay and their dance partner Rikishi",
      "Won the WWF Tag Team Championship with Grandmaster Sexay",
      "Also competed as Scott Taylor early in his WWF career",
      "Won the WCW Cruiserweight Championship near the end of the Invasion angle",
      "Worked as a trainer at the WWE Performance Center after retiring from in-ring competition"
    ]
  },
  41: {
    legalIssues: [
      { year: "2000", incident: "Arrest at Nashville airport", details: "Arrested for disorderly conduct" },
      { year: "2007", incident: "Drug-related arrest", details: "Arrested on drug charges in Memphis, Tennessee" }
    ],
    facts: [
      "Real name Brian Christopher Lawler; born January 10, 1972 in Memphis, Tennessee",
      "Son of Jerry The King Lawler",
      "Passed away on July 29, 2018 at age 46 in a Hardeman County jail in Tennessee",
      "Formed the tag team Too Cool with Scotty 2 Hotty",
      "Won the WWF Tag Team Championship as part of Too Cool",
      "Had a successful run in USWA in Memphis before joining WWF",
      "Known for his hip-hop inspired persona and dancing with Scotty 2 Hotty and Rikishi",
      "Was a second-generation wrestler who initially concealed his relationship to Jerry Lawler in WWF"
    ]
  },
  69: {
    spouses: [
      { name: "Luna Vachon", years: "2002-2010", notes: "Married fellow wrestler Luna Vachon; she passed away in 2010" }
    ],
    facts: [
      "Real name David William Heath; born September 14, 1969 in Jacksonville, Florida",
      "Led the vampire-themed stable The Brood alongside Edge and Christian",
      "The Brood entrance with the ring of fire and blood bath segments became iconic in the Attitude Era",
      "The Brood theme music composed by Harry Slash and The Slashtones remains a fan favorite",
      "Trained by Boris Malenko in Florida",
      "Has operated a wrestling school in the years since leaving WWE",
      "Was originally known as Vampire Warrior on the independent circuit before joining WWF in 1998"
    ]
  },
  111: {
    facts: [
      "Real name Lance Tyler Evers; born June 3, 1969 in Sarnia, Ontario, Canada",
      "Trained at the Hart Brothers Pro Wrestling Camp in Calgary under the Hart family",
      "Had a highly successful career in ECW before moving to WCW and then WWE",
      "In WCW, famously held the WCW United States, Cruiserweight, and Hardcore Championships simultaneously",
      "Was part of the Un-Americans stable in WWE with Christian, Test, and William Regal",
      "Became a producer and trainer for WWE after retiring from active competition",
      "Operated Storm Wrestling Academy in Calgary, training future stars"
    ]
  },
  112: {
    facts: [
      "Real name Yoshihiro Tajiri; born September 29, 1970 in Tochigi, Japan",
      "Famous for his green mist attack and stiff kicks",
      "Won the WWF Cruiserweight Championship and WWF Light Heavyweight Championship",
      "Also won the WWE Tag Team Championship with William Regal",
      "Competed extensively in ECW before joining WWE, where he was a fan favorite",
      "Was elected to the Tochigi Prefectural Assembly in Japan in 2023, entering politics",
      "Known as The Japanese Buzzsaw for his hard-hitting kick-based style",
      "Had a memorable feud and partnership with William Regal in WWE"
    ]
  },
  172: {
    facts: [
      "Real name Paul Michael London; born April 16, 1980 in Austin, Texas",
      "Formed a highly successful tag team with Brian Kendrick in WWE",
      "Won the WWE Tag Team Championship and held the titles for a record-setting reign of 331 days",
      "Known for his high-flying style and Shooting Star Press finisher",
      "Trained at the Texas Wrestling Academy under Shawn Michaels and Rudy Boy Gonzalez",
      "Was famously grinning on camera during the limousine explosion angle involving Vince McMahon in 2007",
      "Won the WWE Cruiserweight Championship"
    ]
  },
  173: {
    legalIssues: [
      { year: "2019", incident: "Arrest at LAX airport", details: "Detained at Los Angeles International Airport after a felony warrant" }
    ],
    facts: [
      "Real name Brian David Kendrick; born May 29, 1979 in Fairfax, Virginia",
      "Formed a long-running tag team with Paul London, winning the WWE Tag Team Championship",
      "Had a singles push as The Brian Kendrick with Ezekiel Jackson as his bodyguard in 2008-2009",
      "Trained at Shawn Michaels Texas Wrestling Academy",
      "Returned to WWE for the Cruiserweight Classic in 2016 and had a run on 205 Live",
      "A planned AEW appearance in 2022 was cancelled after controversial comments surfaced online"
    ]
  },
  245: {
    legalIssues: [
      { year: "1996", incident: "Mass Transit incident", details: "Bladed an untrained 17-year-old during an ECW show; was acquitted of assault charges" },
      { year: "2009", incident: "Scaffold incident", details: "Threw opponent off a scaffold during an independent show, resulting in serious injuries" }
    ],
    facts: [
      "Real name Jerome Young; born January 3, 1963 in Atlanta, Georgia",
      "Passed away on May 14, 2021 at age 58 from a heart attack at his home in Fayetteville, North Carolina",
      "Best known for his time in ECW as a member of The Gangstas tag team with Mustafa Saed",
      "Was the subject of a Dark Side of the Ring episode which became one of the most watched in the series",
      "His entrance music was Natural Born Killaz by Dr. Dre and Ice Cube",
      "Suffered brain damage from a scaffold fall at ECW Living Dangerously 2000",
      "Was notorious for being one of the most dangerous and unpredictable wrestlers in wrestling history"
    ]
  },
  248: {
    facts: [
      "Real name Michael Manna; born October 9, 1971 in Philadelphia, Pennsylvania",
      "One of the most prominent performers in ECW history, known for his Stevie Kick",
      "Led the Blue World Order (bWo) stable in ECW, a parody of the New World Order",
      "Was the initial leader of the Right to Censor stable in WWE",
      "Has been credited as one of the most underrated workers of his generation",
      "Also worked behind the scenes as a producer for WWE in later years"
    ]
  },
  251: {
    facts: [
      "Real name Yoshihiro Asai; born December 12, 1966 in Aichi, Japan",
      "Invented the Asai Moonsault, one of the most widely used moves in professional wrestling",
      "Held championships in nine different promotions simultaneously at one point",
      "Competed in New Japan Pro Wrestling, WCW, and WWE among many other promotions",
      "Won the WCW Cruiserweight Championship",
      "His WWE run in 2003-2004 was considered underwhelming compared to his legendary career in Japan and Mexico",
      "Was integral to popularizing the cruiserweight style that influenced generations of wrestlers",
      "Had a memorable entrance wearing a full-length cape and mask"
    ]
  },
  252: {
    legalIssues: [
      { year: "2020", incident: "Domestic incident", details: "Arrested on domestic battery charges in West Virginia" }
    ],
    facts: [
      "Real name James Gibson; born December 23, 1976 in Hanover, West Virginia",
      "Won the WWE Cruiserweight Championship multiple times",
      "Won the ROH World Championship as James Gibson in 2005",
      "Was paired with Nidia in a trailer park couple gimmick on SmackDown",
      "Known for his tough, hard-nosed Appalachian style despite being a cruiserweight",
      "Worked as a producer for WWE after his in-ring career wound down"
    ]
  },
  256: {
    children: [
      { name: "David Finlay Jr.", born: 1993, notes: "Professional wrestler who competes in NJPW; won the IWGP World Heavyweight Championship" }
    ],
    facts: [
      "Real name David Edward Finlay; born October 20, 1958 in Carrickfergus, Northern Ireland",
      "Known as one of the toughest and most technically skilled wrestlers in the business",
      "Had a long career in European wrestling before joining WCW and later WWE",
      "Won the WCW Television Championship and the United States Championship",
      "Had a memorable late-career run in WWE with his shillelagh and sidekick Hornswoggle",
      "Worked extensively as a producer and agent for WWE, credited with helping improve the womens division",
      "His son David Finlay Jr. became a top star in New Japan Pro Wrestling",
      "Trained in the British and European wrestling style, known for his stiff in-ring work"
    ]
  },
  261: {
    facts: [
      "Real name Kairi Sane (born Kairi Hojo); born September 23, 1988 in Hikari, Yamaguchi, Japan",
      "Won the inaugural Mae Young Classic tournament in 2017",
      "Won the NXT Womens Championship",
      "Known for her InSane Elbow (diving elbow drop from the top rope)",
      "Was a highly decorated wrestler in Stardom in Japan, winning the World of Stardom Championship",
      "Her pirate-themed character was very popular with fans",
      "Left WWE in 2020 and returned to Stardom in Japan, then came back to WWE in 2024",
      "Trained as a professional yachtswoman and her pirate gimmick was inspired by her love of the sea"
    ]
  },
  263: {
    facts: [
      "Real name Adrienne Reese; born October 31, 1988 in Dallas, Texas",
      "Competed in WWE as Ember Moon and later joined AEW/ROH as Athena",
      "Won the NXT Womens Championship",
      "Won the ROH Womens World Championship in AEW with a dominant reign of over 500 days",
      "Is of African-American and Native American heritage",
      "Was a popular figure in the womens evolution era in NXT",
      "Had multiple knee and Achilles injuries that hampered her main roster run"
    ]
  },
  264: {
    facts: [
      "Real name Cheree Georgina Crowley; born November 6, 1987 in Auckland, New Zealand",
      "Was part of the Damage CTRL faction with Bayley, IYO SKY, and Kairi Sane",
      "Won the NXT Tag Team Championship and WWE Womens Tag Team Championship",
      "Originally competed in NXT as a member of Team Kick with Tegan Nox",
      "Was released in 2021, then re-signed and returned to NXT before moving to main roster",
      "Of Samoan and New Zealand descent",
      "Won the NXT Womens Championship during her second NXT run"
    ]
  },
  300: {
    facts: [
      "Real name Wendi Richter; born September 6, 1961 in Dallas, Texas",
      "Was central to the Rock n Wrestling Connection era alongside Cyndi Lauper in the mid-1980s",
      "Won the WWF Womens Championship from The Fabulous Moolah at The Brawl to End It All on MTV in 1984",
      "Was infamously screwed out of the Womens Championship in the Original Screwjob in November 1985",
      "The incident predated the Montreal Screwjob by 12 years",
      "Was inducted into the WWE Hall of Fame in 2010",
      "Her partnership with Cyndi Lauper helped bring mainstream attention to professional wrestling in the 1980s",
      "Was a trailblazer for womens wrestling in the United States"
    ]
  },
  305: {
    facts: [
      "Real name Carlene Denise Moore-Begnaud; born January 27, 1972 in New Orleans, Louisiana",
      "Won the WWE Womens Championship twice and the ECW Womens Championship",
      "Was one of the toughest and most physical womens wrestlers of her era",
      "Had a notable rivalry with Trish Stratus that helped elevate womens wrestling in WWE",
      "Competed in ECW before joining WWE during the Attitude Era",
      "Also competed in TNA/Impact Wrestling where she won the TNA Knockouts Championship",
      "Known for her aggressive, hard-hitting style that stood out in the womens division"
    ]
  },
  351: {
    facts: [
      "Real name Aaron Rodriguez; born July 15, 1942 in San Luis Potosi, Mexico",
      "One of the most legendary luchadors in the history of professional wrestling",
      "Was the first Mexican wrestler to be featured prominently in the WWWF/WWF",
      "Never lost his mask in a Lucha de Apuestas match, a point of great pride in lucha libre tradition",
      "Inducted into the WWE Hall of Fame in 2012",
      "Uncle of Alberto Del Rio and Dos Caras Jr.",
      "Known for being notoriously difficult to work with due to his refusal to lose matches",
      "His feather-adorned masks and capes made him one of the most visually iconic wrestlers ever"
    ]
  },
  352: {
    facts: [
      "Real name John Stanley Hansen; born August 29, 1949 in Knox City, Texas",
      "One of the biggest foreign stars in the history of Japanese professional wrestling",
      "Famous for his devastating Western Lariat finishing move, which became iconic in Japan",
      "Competed primarily in All Japan Pro Wrestling (AJPW) for most of his career",
      "Won the AJPW Triple Crown Heavyweight Championship multiple times",
      "Accidentally broke Bruno Sammartinos neck with a bodyslam in a WWWF match in 1976",
      "Was inducted into the WWE Hall of Fame in 2016",
      "Wore thick glasses due to extremely poor eyesight, which some say contributed to his stiff working style",
      "Lived in Japan for decades and became a beloved figure in Japanese culture",
      "Was West Texas State University football teammates with the Funks and Bruiser Brody"
    ]
  },
  382: {
    spouses: [
      { name: "Mike Bennett (Mike Kanellis)", years: "2014-present", notes: "Married fellow professional wrestler; they have worked together in WWE, ROH, and Impact" }
    ],
    children: [
      { name: "Fredrica Moon Kanellis-Bennett", born: 2019, notes: "First child, born while Maria was signed with WWE" },
      { name: "Carver Mars Bennett", born: 2020, notes: "Second child" }
    ],
    facts: [
      "Real name Maria Louise Kanellis-Bennett; born February 25, 1982 in Ottawa, Illinois",
      "Originally appeared on WWE as a diva search contestant and backstage interviewer",
      "Appeared on the cover of Playboy magazine in 2008",
      "Competed in both WWE and Impact Wrestling as an in-ring performer and manager",
      "Also appeared on The Celebrity Apprentice",
      "Known for her work as a manager and valet in addition to in-ring competition"
    ]
  },
  385: {
    spouses: [
      { name: "Robert Irvine", years: "2012-present", notes: "Married celebrity chef and Food Network star Robert Irvine" }
    ],
    facts: [
      "Real name Gail Kim-Irvine; born February 20, 1977 in Toronto, Ontario, Canada",
      "Of Korean descent, born to Korean immigrant parents in Canada",
      "Won the WWE Womens Championship in her debut match in 2003, a historic achievement",
      "Won the TNA Knockouts Championship multiple times and is considered the greatest Knockouts Champion ever",
      "Was inducted into the TNA/Impact Wrestling Hall of Fame in 2016",
      "Famously eliminated herself from a battle royal on Raw in 2011 in frustration",
      "After retiring, worked as a producer and agent for Impact Wrestling",
      "Considered one of the greatest female professional wrestlers in North American history"
    ]
  },
  386: {
    facts: [
      "Real name Martin Wright; born July 15, 1964 in Phoenix, Arizona",
      "Won the fourth season of WWE Tough Enough at age 40, making him the oldest winner",
      "Known for his bizarre character that involved eating worms, clocks, and other strange objects",
      "Served in the United States Army before becoming a professional wrestler",
      "Had a relatively late start in wrestling, not debuting until his 40s",
      "His catchphrase was Im the Boogeyman, and Im coming to get ya!",
      "Continued to make sporadic appearances at WWE events and Royal Rumbles for years after his initial run"
    ]
  },

  // Batch 14 - Mid-card & Modern
  84: {
    spouses: [
      { name: "Jackie Gayda", years: "2005-present", notes: "Fellow WWE wrestler; married in 2005" }
    ],
    children: [
      { name: "Charlie Haas III", born: 2007, notes: "Son" },
      { name: "Tessa Haas", born: 2009, notes: "Daughter" }
    ],
    facts: [
      "Real name Charles Quentin Haas II; born March 27, 1972 in Edmond, Oklahoma",
      "Brother of late wrestler Russ Haas, who passed away from a heart attack in 2001 at age 27",
      "Trained at Funkin Dojo by Dory Funk Jr.",
      "Former All-American amateur wrestler at Seton Hall University",
      "Formed the Worlds Greatest Tag Team with Shelton Benjamin in WWE",
      "Had a comedic gimmick impersonating other wrestlers in 2008-2009"
    ]
  },
  113: {
    announcing: [
      { role: "Commentator", show: "Velocity/SmackDown", years: "2004-2008", notes: "Self-declared SmackDowns Number One Announcer in a comedic role" }
    ],
    facts: [
      "Real name Shoichi Funaki; born October 21, 1968 in Aichi Prefecture, Japan",
      "One of the longest-tenured wrestlers in WWE history, employed from 1998 to 2010",
      "Self-proclaimed himself SmackDowns Number One Announcer",
      "Was part of Kai En Tai faction with Taka Michinoku",
      "Worked extensively as a WWE backstage interviewer and occasional commentator",
      "Never held a major singles championship in WWE but was beloved by fans"
    ]
  },
  114: {
    legalIssues: [
      { year: "2007", incident: "Wellness Policy Violation", details: "Suspended by WWE for violation of the Wellness Policy" }
    ],
    facts: [
      "Real name Nelson Frazier Jr.; born February 14, 1971 in Memphis, Tennessee",
      "Stood 6 feet 9 inches tall and weighed over 480 pounds at his heaviest",
      "Passed away on February 18, 2014 at age 43 from a heart attack",
      "Debuted in WWE as Mabel, part of the tag team Men on a Mission with Mo",
      "Won the 1995 King of the Ring tournament as King Mabel",
      "Reinvented himself multiple times: Mabel, Viscera, Big Daddy V, and The Worlds Largest Love Machine",
      "Had a memorable stint as Big Daddy V managed by Matt Striker in ECW"
    ]
  },
  116: {
    facts: [
      "Originally portrayed by Matt Osborne, who created the character in 1992",
      "Matt Osborne passed away on June 28, 2013 at age 56 from an accidental drug overdose",
      "The Doink character was also portrayed by Steve Lombardi, Ray Apollo, and others",
      "Originally debuted as a heel clown who played cruel pranks on fans and wrestlers",
      "Later turned babyface and was paired with a miniature sidekick named Dink",
      "Osborne was the son of wrestler Buddy Osborne",
      "The heel version of Doink is considered one of the most creative characters of the early 1990s"
    ]
  },
  170: {
    facts: [
      "Real name Gene Snisky; born September 19, 1967 in Nesquehoning, Pennsylvania",
      "Stood 6 feet 8 inches tall and weighed approximately 300 pounds",
      "Best remembered for his angle where he punted a baby doll on Raw in 2004",
      "Catchphrase was It wasnt my fault after accidentally causing a storyline miscarriage",
      "Played college football at Syracuse University",
      "Former bodybuilder before transitioning to professional wrestling",
      "Released from WWE in 2008 and continued on the independent circuit"
    ]
  },
  258: {
    legalIssues: [
      { year: "2020", incident: "Accusations of inappropriate conduct", details: "Multiple individuals accused him of sending unsolicited messages to minors during the Speaking Out movement; WWE released him in May 2020" },
      { year: "2021", incident: "Arrested", details: "Arrested in February 2021 on charges in Orlando, Florida" }
    ],
    facts: [
      "Real name Patrick Clark Jr.; born September 3, 1995 in Washington, D.C.",
      "Appeared on WWE Tough Enough Season 6 in 2015 at age 19",
      "The Velveteen Dream character was inspired by Prince and other flamboyant pop icons",
      "Was considered one of NXTs top prospects before his release",
      "Had a highly praised NXT TakeOver match against Aleister Black in 2018",
      "Known for incorporating his opponents name or likeness into his ring attire"
    ]
  },
  269: {
    facts: [
      "Real name Nathan Everhart; born March 10, 1988 in Indianapolis, Indiana",
      "Was adopted; a 2017 storyline revealed Kurt Angle as his kayfabe father on Raw",
      "Suffered a severe neck injury in late 2017 that effectively ended his in-ring career",
      "Won the NXT Tag Team Championship with Chad Gable as American Alpha",
      "American Alpha was considered one of NXTs best tag teams",
      "Was a standout amateur wrestler before signing with WWE",
      "Currently works as a WWE producer/agent backstage"
    ]
  },
  332: {
    facts: [
      "Real name Chris Dijak; born February 17, 1989",
      "Stood 6 feet 7 inches tall, an imposing athlete with remarkable agility for his size",
      "Worked in NXT as Dominik Dijakovic and later as T-BAR in the Retribution stable",
      "The Retribution gimmick was widely criticized by fans and wrestlers alike",
      "Known for his Feast Your Eyes finishing move",
      "Had an acclaimed rivalry with Keith Lee in NXT in 2019",
      "Released from WWE in 2024"
    ]
  },
  333: {
    facts: [
      "Real name Tolulope Omogbehin; born May 12, 1994 in Lagos, Nigeria",
      "Stands 7 feet 3 inches tall, one of the tallest wrestlers in WWE history",
      "Attended Morgan State University and the University of South Florida on basketball scholarships",
      "Debuted as AJ Styles enforcer/bodyguard on Raw in 2021",
      "Won the Andre the Giant Memorial Battle Royal at WrestleMania 37",
      "Despite his enormous size, he is known for being soft-spoken and humble backstage",
      "One of the few Nigerian-born wrestlers to compete in WWE"
    ]
  },
  334: {
    facts: [
      "Real name Michael John Rallis; born April 2, 1993",
      "Originally appeared in WWE as Riddick Moss, winning the 24/7 Championship",
      "Repackaged as Madcap Moss with a comedy gimmick delivering bad jokes alongside Happy Corbin",
      "Later dropped the comedy gimmick and became a more serious competitor",
      "Played college football at Northeastern University",
      "Won the Andre the Giant Memorial Battle Royal at WrestleMania 38 in 2022"
    ]
  },
  379: {
    spouses: [
      { name: "Kristen DiBiase", years: "2008-present", notes: "Married in 2008" }
    ],
    legalIssues: [
      { year: "2020", incident: "Mississippi welfare fraud scandal", details: "Implicated in the Mississippi welfare fraud scandal involving the misuse of TANF funds through a nonprofit organization" },
      { year: "2022", incident: "Continued legal proceedings", details: "Faced ongoing legal proceedings related to the Mississippi welfare embezzlement case" }
    ],
    facts: [
      "Real name Theodore Marvin DiBiase Jr.; born November 8, 1982 in Baton Rouge, Louisiana",
      "Son of WWE Hall of Famer Ted DiBiase Sr. (The Million Dollar Man)",
      "Third-generation wrestler (grandfather Iron Mike DiBiase was also a pro wrestler)",
      "Formed the tag team Priceless with Cody Rhodes",
      "Won the World Tag Team Championship with Cody Rhodes",
      "Retired from in-ring competition in 2013 to pursue ministry and speaking engagements"
    ]
  },
  443: {
    spouses: [
      { name: "Dustin Runnels (Goldust)", years: "1993-1999", notes: "Marriage ended in divorce" }
    ],
    children: [
      { name: "Dakota Runnels", born: 1994, notes: "Daughter with Dustin Runnels" }
    ],
    facts: [
      "Real name Terri Lynne Boatright; born October 5, 1966 in Gainesville, Florida",
      "Originally debuted in WWE as Marlena, the cigar-smoking valet of Goldust",
      "One of the original WWE Divas from the Attitude Era",
      "Had notable on-screen feuds with The Kat, Stacy Keibler, and others",
      "Was featured as a backstage interviewer at various points in her career"
    ]
  },
  464: {
    spouses: [
      { name: "Miroslav Barnyashev (Rusev/Miro)", years: "2016-present", notes: "Married fellow WWE wrestler Rusev on July 29, 2016; wedding featured on Total Divas" }
    ],
    facts: [
      "Real name Catherine Joy Perry; born March 24, 1985 in Gainesville, Florida",
      "Raised partly in Tallinn, Estonia and speaks fluent Russian",
      "Originally a dancer and model before joining WWE",
      "Appeared on Total Divas and Total Bellas reality shows",
      "Managed Rusev as part of the Rusev Day phenomenon in 2018",
      "Was involved in a controversial love triangle storyline with Rusev and Bobby Lashley in 2019-2020",
      "Released from WWE in June 2021"
    ]
  },
  472: {
    children: [
      { name: "David Finlay Jr.", born: 1993, notes: "Professional wrestler in NJPW; won the IWGP World Heavyweight Championship" }
    ],
    facts: [
      "Real name David Edward Finlay Sr.; born October 20, 1958 in Carrickfergus, Northern Ireland",
      "One of the toughest competitors from the European wrestling scene",
      "Known for his shillelagh (Irish walking stick) as a weapon",
      "Had a storyline where Hornswoggle was revealed as his kayfabe son",
      "Won the United States Championship from Bobby Lashley in 2006",
      "Worked extensively as a WWE producer and trainer",
      "Widely respected backstage for training younger talent, particularly in ring psychology"
    ]
  },
  478: {
    facts: [
      "Real name Joseph Curtis Hennig; born October 1, 1979 in Champlin, Minnesota",
      "Son of WWE Hall of Famer Mr. Perfect Curt Hennig",
      "Grandson of wrestler Larry The Axe Hennig, making him third-generation",
      "Originally debuted in WWE as Michael McGillicutty on NXT Season 2",
      "Was repackaged as Curtis Axel in 2013 with Paul Heyman as his manager",
      "Was a member of the Social Outcasts stable with Heath Slater, Bo Dallas, and Adam Rose",
      "Also part of The Nexus faction in 2010-2011",
      "Won the WWE Intercontinental Championship",
      "Released from WWE in April 2020"
    ]
  },
  483: {
    spouses: [
      { name: "Mia Yim", years: "2022-present", notes: "Married fellow WWE wrestler Mia Yim on September 3, 2022" }
    ],
    facts: [
      "Real name Keith Lee Jr.; born November 8, 1984 in Wichita Falls, Texas",
      "Attended Texas A&M University on a football scholarship",
      "Stands 6 feet 2 inches and weighs over 300 pounds, known for remarkable agility despite his size",
      "Won both the NXT Championship and NXT North American Championship simultaneously in 2020",
      "Had a standout showing in the 2020 Royal Rumble that made him a fan favorite",
      "His catchphrase is Bask in His Glory and Limitless was his moniker",
      "Released from WWE in November 2021, later signed with AEW",
      "Known for performing a Spirit Bomb and a moonsault despite his size"
    ]
  },
  527: {
    facts: [
      "Real name Peter Thomas England; born November 11, 1993 in Birmingham, England",
      "Was the longest-reigning WWE United Kingdom Champion at 685 days",
      "Began training at age 12 in the British independent wrestling scene",
      "Was a key part of the inaugural WWE UK Championship Tournament in 2017",
      "Known for his joint manipulation and hard-hitting style",
      "Rebranded as Butch as part of the Brawling Brutes stable with Sheamus and Ridge Holland",
      "The Butch rebranding was controversial with fans who preferred his Pete Dunne character",
      "Returned to the Pete Dunne name in 2024",
      "Considered one of the greatest British wrestlers of his generation"
    ]
  },
  537: {
    facts: [
      "Real name Alipate Aloisio Leone; born November 15, 1982 in Samoa",
      "Son of WWE Hall of Famer Haku (Meng/King Haku)",
      "Brother of Tanga Loa, with whom he formed the Guerrillas of Destiny in NJPW",
      "Spent over a decade in New Japan Pro-Wrestling becoming a multi-time IWGP Tag Team Champion",
      "Member of the Bullet Club faction in NJPW",
      "Signed with WWE in 2024 and joined the Bloodline faction",
      "His father Haku is legendary in wrestling for being considered the toughest man in the business"
    ]
  },
  554: {
    facts: [
      "Real name Barry Clinton Windham; born July 4, 1960 in Sweetwater, Texas",
      "Son of legendary wrestler Blackjack Mulligan (Robert Windham)",
      "Brother-in-law of Mike Rotunda (IRS); his sister Stephanie married Rotunda",
      "Uncle of Bray Wyatt (Windham Rotunda) and Bo Dallas (Taylor Rotunda)",
      "Was part of the legendary Four Horsemen stable in NWA/WCW",
      "Won the NWA World Heavyweight Championship",
      "Known for his flying lariat finisher and being one of the best big men in wrestling history",
      "Stood 6 feet 6 inches and was considered ahead of his time athletically",
      "Suffered from health issues later in life including multiple strokes"
    ]
  },
  556: {
    spouses: [
      { name: "Elizabeth Hart", years: "1985-2018", notes: "Married until his death; sister of Bret Hart" }
    ],
    children: [
      { name: "Natalya Neidhart", born: 1982, notes: "Daughter; WWE wrestler known as Natalya" },
      { name: "Jennifer Neidhart", notes: "Daughter" }
    ],
    legalIssues: [
      { year: "2010", incident: "Drug possession arrest", details: "Arrested for drug possession and outstanding warrants" }
    ],
    facts: [
      "Real name James Henry Neidhart; born February 8, 1955 in Reno, Nevada",
      "Passed away on August 13, 2018 at age 63 from an accidental fall due to Alzheimers-related complications",
      "Was a shot putter who tried out for the 1980 US Olympic team",
      "Played for the Oakland Raiders and Dallas Cowboys in NFL training camps",
      "Famous as one half of the Hart Foundation tag team with Bret Hart",
      "Was known for his distinctive goatee and loud, cackling laugh",
      "His nickname The Anvil came from his thick build and toughness",
      "Appeared on Total Divas through his daughter Natalya"
    ]
  },
  663: {
    legalIssues: [
      { year: "2016", incident: "On-air suspension", details: "Suspended 90 days (later reduced to 60) for grabbing Vince McMahons arm on live television during a Daniel Bryan farewell segment on Raw" }
    ],
    facts: [
      "Real name Thaddeus Michael Bullard Sr.; born April 29, 1977 in Boynton Beach, Florida",
      "Was placed in a group home at age 11 after a difficult childhood involving abuse",
      "Played college football at the University of Florida as a defensive end",
      "One of WWEs most active philanthropists, regularly recognized for community work",
      "Founded the Bullard Family Foundation",
      "Known for the viral Titus Worldslide moment at the 2018 Greatest Royal Rumble where he slid under the ring",
      "Was a member of the Prime Time Players tag team with Darren Young",
      "Uses his platform to advocate for at-risk youth"
    ]
  },
  703: {
    spouses: [
      { name: "Stephanie Windham", years: "1984-present", notes: "Daughter of wrestler Blackjack Mulligan; sister of Barry Windham" }
    ],
    children: [
      { name: "Windham Rotunda", born: 1987, notes: "Son; WWE wrestler known as Bray Wyatt, who passed away August 24, 2023" },
      { name: "Taylor Rotunda", born: 1990, notes: "Son; WWE wrestler known as Bo Dallas/Uncle Howdy" }
    ],
    facts: [
      "Real name Michael Irwin Rotunda; born March 30, 1958 in St. Petersburg, Florida",
      "The IRS character was a villainous tax collector who berated fans for not paying their taxes",
      "Before IRS, he wrestled under his real name Mike Rotunda in multiple promotions",
      "Won the NWA World Tag Team Championship multiple times",
      "Was a member of the Varsity Club in WCW with Rick Steiner and Kevin Sullivan",
      "Collegiate wrestling star at Syracuse University, where he was an All-American",
      "Brother-in-law of Barry Windham",
      "Worked as a WWE agent/producer after retiring from in-ring competition",
      "The IRS gimmick included wrestling in a full dress shirt and tie"
    ]
  },
  // Batch 15 - Legends & Attitude Era
  355: {
    facts: [
      "Born Oreal Donald Perras on August 25, 1942 in Montreal, Quebec, Canada",
      "Died on February 18, 2017 at age 74",
      "Famous for ending Bruno Sammartinos nearly eight-year WWWF Championship reign on January 18, 1971",
      "His title reign lasted only three weeks before losing to Pedro Morales",
      "Adopted the Ivan Koloff ring name playing a Russian heel despite being Canadian",
      "Worked extensively in Jim Crockett Promotions and the NWA in the 1980s",
      "Had a notable tag team with nephew Nikita Koloff in the NWA",
      "Became an ordained minister and motivational speaker after retiring from wrestling"
    ]
  },
  356: {
    facts: [
      "Born Joseph Luke Scarpa on October 4, 1928 in Philadelphia, Pennsylvania",
      "Died on April 3, 2012 at age 83",
      "Of Italian-American descent despite portraying a Native American character throughout his career",
      "One of the most popular babyfaces in WWWF during the 1970s and early 1980s",
      "Won the WWWF Tag Team Championship multiple times with various partners",
      "Had a legendary feud with Greg Valentine and Superstar Billy Graham",
      "Inducted into the WWE Hall of Fame in 1994",
      "His war dance comeback was one of the most popular crowd reactions in WWWF history",
      "Worked as an agent for WWF/WWE behind the scenes after retiring"
    ]
  },
  357: {
    children: [
      { name: "Barry Windham", born: 1960, notes: "Became a major wrestling star in NWA, WCW, and WWF" },
      { name: "Kendall Windham", born: 1965, notes: "Also became a professional wrestler" }
    ],
    facts: [
      "Born Robert Deroy Windham on November 26, 1942 in Sweetwater, Texas",
      "Died on September 9, 2016 at age 73",
      "Stood approximately 6 feet 9 inches and weighed around 330 pounds",
      "Patriarch of the Windham wrestling family",
      "Formed the famous Blackjacks tag team with Blackjack Lanza winning the WWWF Tag Team Championship",
      "Also worked as Big Machine as part of the Machines tag team in WWF",
      "Grandfather of Bray Wyatt (Windham Rotunda) and Bo Dallas (Taylor Rotunda)",
      "Father-in-law of Mike Rotunda who married his daughter Stephanie",
      "Inducted into the WWE Hall of Fame in 2006"
    ]
  },
  555: {
    spouses: [
      { name: "Stephanie Windham", years: "1984-present", notes: "Daughter of Blackjack Mulligan" }
    ],
    children: [
      { name: "Windham Rotunda (Bray Wyatt)", born: 1987, notes: "Became major WWE star; passed away August 24, 2023" },
      { name: "Taylor Rotunda (Bo Dallas)", born: 1990, notes: "WWE wrestler known as Bo Dallas/Uncle Howdy" }
    ],
    facts: [
      "Born Michael Robert Rotunda on March 30, 1958 in St. Petersburg, Florida",
      "Standout amateur wrestler at Syracuse University",
      "Won the WWF Tag Team Championship with Barry Windham as part of the US Express",
      "Later portrayed the IRS (Irwin R. Schyster) character in WWF in the early 1990s",
      "Teamed with Ted DiBiase as Money Inc. winning the WWF Tag Team Championship",
      "Also competed in WCW as a member of the Varsity Club",
      "Won the NWA World Television Championship in WCW",
      "Part of the legendary Windham-Rotunda wrestling family"
    ]
  },
  557: {
    facts: [
      "Born Adolfo Bresciano on August 2, 1948 in Montreal, Quebec, Canada",
      "Died on March 10, 1993 at age 44; his death was ruled a homicide",
      "Was shot in his home by a hitman; the murder was connected to a cigarette smuggling ring",
      "Held the Canadian Heavyweight Championship multiple times",
      "Was managed by Frenchy Martin in WWF during the late 1980s",
      "Known for his contested 715-pound bench press on WWF television",
      "Competed in the 1988 Royal Rumble and other major WWF events",
      "Of Italian-Canadian descent, grew up in the Montreal wrestling scene"
    ]
  },
  843: {
    facts: [
      "Born Donald Muraco on September 10, 1949 in Sunset Beach, Hawaii",
      "Known as The Magnificent Muraco during his WWF career",
      "Two-time WWF Intercontinental Champion in the early 1980s",
      "Had legendary feuds with Jimmy Snuka and Pedro Morales",
      "Won the first King of the Ring tournament in 1985",
      "Known for his excellent promo skills and charisma",
      "Inducted into the WWE Hall of Fame in 2004"
    ]
  },
  878: {
    facts: [
      "Born James Henry Morris on May 5, 1952 in Hanceville, Alabama",
      "Trained by Jerry Lawler in Memphis wrestling before joining WWF",
      "One of the most popular babyfaces in WWF during the mid-1980s Hulkamania era",
      "His hillbilly character was presented as a friend and ally of Hulk Hogan",
      "Participated in WrestleMania 2 in a battle royal featuring NFL players and wrestlers",
      "Inducted into the WWE Hall of Fame in 2018",
      "Known for his good nature and popularity with young fans"
    ]
  },
  879: {
    facts: [
      "Born Allen James Coage on September 20, 1943 in New York City, New York",
      "Died on March 6, 2007 at age 63 from a heart attack",
      "Won an Olympic bronze medal in judo at the 1976 Montreal Olympics representing the United States",
      "Known for his stiff and legitimate tough-guy wrestling style",
      "Had notable feuds with Bret Hart and Roddy Piper in WWF",
      "Also competed in Stampede Wrestling in Calgary before joining WWF",
      "His finisher was the Ghetto Blaster, a running enzuigiri kick",
      "Was a legitimate martial artist and judo champion before entering pro wrestling",
      "Also competed in New Japan Pro-Wrestling where he was known as Bad News Allen"
    ]
  },
  890: {
    facts: [
      "Born Juan Rivera on November 6, 1964 in Vega Alta, Puerto Rico",
      "Competed in WWF as Kwang (a ninja character) before becoming Savio Vega",
      "One of the most popular Puerto Rican wrestlers in WWF history",
      "Had notable feuds with Steve Austin including multiple Strap Matches",
      "Was a founding member of the Nation of Domination before leaving the group",
      "Later led Los Boricuas faction during the WWF gang wars storyline in 1997",
      "Had a long career in the International Wrestling Association in Puerto Rico"
    ]
  },
  898: {
    facts: [
      "Born Darren Drozdov on November 10, 1969 in New Jersey",
      "Previously played in the NFL for the Denver Broncos",
      "Was initially known for his ability to vomit on command, which became his WWF gimmick",
      "Was a member of the Legion of Doom 2000 tag team with Road Warrior Animal and Hawk",
      "Suffered a severe spinal injury during a match with DLo Brown on SmackDown on October 5, 1999",
      "The injury rendered him a quadriplegic and ended his wrestling career",
      "After his injury he contributed as a columnist for WWE.com for several years",
      "Has been an inspiration for his positive attitude despite the severity of his injury"
    ]
  },
  942: {
    facts: [
      "Born Jerry Lynn on February 13, 1963 in Minneapolis, Minnesota",
      "Known for his legendary series of matches against Rob Van Dam in ECW",
      "Held the ECW World Television Championship",
      "Won the TNA X Division Championship multiple times",
      "Known as one of the most technically proficient cruiserweight wrestlers of his generation",
      "Trained at Brad Rheinganss wrestling school in Minnesota",
      "Retired from full-time competition in 2013 and worked as a trainer"
    ]
  },
  941: {
    legalIssues: [
      { year: "2010", incident: "DUI arrest", details: "Arrested for driving under the influence" }
    ],
    facts: [
      "Born Peter Joseph Polaco on October 1, 1973 in New Haven, Connecticut",
      "Best known for his work in ECW as Justin Credible",
      "Won the ECW World Heavyweight Championship in 2000",
      "Was a member of the Impact Players tag team with Lance Storm in ECW",
      "Earlier in his career worked in WWF as Aldo Montoya the Portuguese Man O War",
      "Was trained by Killer Kowalski at his wrestling school",
      "His finishing move was Thats Incredible, a tombstone piledriver variant"
    ]
  },
  945: {
    announcing: [
      { role: "Ring announcer and interviewer", show: "TNA Impact", years: "2006-2012", notes: "Longtime ring announcer for TNA/Impact Wrestling" }
    ],
    facts: [
      "Born Christy Lee Hemme on October 28, 1980 in Temecula, California",
      "Won the WWE Diva Search competition in 2004",
      "Appeared on the cover of Playboy magazine in April 2005",
      "Left WWE in 2005 and joined TNA Wrestling",
      "Became the longtime ring announcer for TNA/Impact Wrestling",
      "Also pursued a music career releasing several singles",
      "Was one of the most recognizable female personalities in TNA history"
    ]
  },
  946: {
    spouses: [
      { name: "Ken Anderson (Mr. Kennedy)", years: "2011-present", notes: "Married fellow professional wrestler" }
    ],
    facts: [
      "Born Candice Michelle Beckman on September 30, 1978 in Milwaukee, Wisconsin",
      "Won the WWE Womens Championship in 2007 defeating Melina",
      "Was the GoDaddy spokeswoman appearing in multiple Super Bowl commercials",
      "Appeared on the cover of Playboy magazine in April 2006",
      "Known for her finishing move the Candy Wrapper",
      "Suffered a broken clavicle in 2007 that cut her title reign short"
    ]
  },
  948: {
    children: [
      { name: "Alexa", born: 2001, notes: "Daughter whom Ashley frequently mentioned publicly" }
    ],
    facts: [
      "Born Ashley Marie Massaro on May 26, 1979 in Babylon, New York",
      "Died on May 16, 2019 at age 39",
      "Won the 2005 WWE Raw Diva Search competition",
      "Appeared on the cover of Playboy magazine in March 2007",
      "Competed on the television show Survivor: China in 2007 as part of a cross-promotion with WWE",
      "Was known for her punk rock look and energetic personality",
      "Was a single mother who was very open about her love for her daughter",
      "Also pursued a career in radio broadcasting in the New York area"
    ]
  },
  973: {
    facts: [
      "Born Benjamin Satterley on August 24, 1986 in Newcastle upon Tyne, England",
      "Won the first NXT Championship and was the inaugural champion",
      "Became the WWE Cruiserweight Champion, known as the King of the Cruiserweights",
      "Known for his spectacular Red Arrow finishing move, a corkscrew shooting star press",
      "Left WWE in 2018 and became a top star in All Elite Wrestling as PAC",
      "Previously competed as PAC in Dragon Gate in Japan before joining WWE",
      "Considered one of the most gifted high-flyers in modern wrestling history"
    ]
  },
  975: {
    announcing: [
      { role: "On-screen General Manager", show: "SmackDown", years: "2004-2008", notes: "Served as the on-screen General Manager of SmackDown" },
      { role: "On-screen General Manager", show: "ECW on Syfy", years: "2008-2010", notes: "Managed the ECW brand on television" },
      { role: "On-screen General Manager", show: "SmackDown", years: "2010-2012", notes: "Returned to manage SmackDown again" }
    ],
    facts: [
      "Born Theodore Rufus Long on November 15, 1947 in Atlanta, Georgia",
      "Started in wrestling as a referee in WCW and Jim Crockett Promotions",
      "Became a manager handling acts like Rodney Mack and Mark Henry before becoming GM",
      "Famous catchphrase was Holla holla holla and making tag team matches",
      "One of the longest-serving authority figures in WWE television history",
      "Inducted into the WWE Hall of Fame in 2017",
      "Known for his entertaining personality and beloved status among WWE fans"
    ]
  },
  977: {
    spouses: [
      { name: "Vince McMahon", years: "1966-present", notes: "Married WWE Chairman Vince McMahon" }
    ],
    children: [
      { name: "Shane McMahon", born: 1970, notes: "WWE executive and on-screen performer" },
      { name: "Stephanie McMahon", born: 1976, notes: "WWE Chief Brand Officer and on-screen authority figure" }
    ],
    facts: [
      "Born Linda Marie Edwards on October 4, 1948 in New Bern, North Carolina",
      "Served as CEO of WWE (then WWF) for years",
      "Ran for the United States Senate in Connecticut in 2010 and 2012 but lost both races",
      "Appointed as Administrator of the Small Business Administration by President Donald Trump in 2017",
      "Played a major on-screen role in the Attitude Era McMahon family storylines",
      "Served on the Board of Directors of WWE for decades",
      "One of the most powerful women in the history of professional wrestling business"
    ]
  },
  979: {
    facts: [
      "Born Marcus Alexander Bagwell on January 10, 1970 in Marietta, Georgia",
      "Best known for his career in WCW where he was a member of the New World Order",
      "Won the WCW World Tag Team Championship multiple times with various partners",
      "His WCW career spanned from 1990 to 2001",
      "Had a very brief and unsuccessful stint in WWE in 2001 during the WCW invasion angle",
      "Was released from WWE after only one match on Raw due to reported attitude problems",
      "Suffered a legitimate broken neck during a match with Kanyon in WCW in 1998"
    ]
  },
  980: {
    facts: [
      "Born Christopher Klucsarits on January 4, 1970 in Queens, New York",
      "Died on April 2, 2010 at age 40; his death was ruled a suicide",
      "Known for his work in WCW as Kanyon and as Mortis",
      "Won the WCW United States Heavyweight Championship",
      "Won the WCW World Tag Team Championship with Diamond Dallas Page",
      "His catchphrase was Who betta than Kanyon",
      "Was innovative in the ring with a unique offensive moveset including the Flatliner",
      "Came out publicly as gay before his death and discussed the challenges of being gay in wrestling"
    ]
  },
  997: {
    spouses: [
      { name: "Steve McMichael", years: "1989-1998", notes: "Former NFL player who also competed in WCW" },
      { name: "Steve Austin", years: "2000-2003", notes: "Married Stone Cold Steve Austin" }
    ],
    legalIssues: [
      { year: "2002", incident: "Domestic incident with Steve Austin", details: "Both Debra and Steve Austin were involved in a domestic violence incident that led to Austins arrest and guilty plea" }
    ],
    facts: [
      "Born Debra Gale Marshall on March 5, 1960 in Tuscaloosa, Alabama",
      "Best known as a manager and valet in WCW and WWF",
      "Managed Jeff Jarrett in WWF and helped him win the Intercontinental Championship",
      "Won the WWF Womens Championship in 1999",
      "After the domestic violence incident with Austin she largely retreated from public life",
      "Had previously competed in various beauty pageants before entering wrestling",
      "Was one of the most prominent female managers during the Attitude Era"
    ]
  },

  // Batch 16 - Modern & International Stars
  340: {
    facts: [
      "Real name Kenta Kobayashi; born April 12, 1981 in Saitama, Japan",
      "Wrestled as KENTA in Pro Wrestling NOAH before joining WWE as Hideo Itami",
      "His Go 2 Sleep finishing move was later adopted by CM Punk",
      "Suffered numerous injuries during his WWE/NXT tenure including a shoulder injury that sidelined him for over a year",
      "Was the first Japanese wrestler signed to NXT",
      "Left WWE in 2019 and returned to NJPW",
      "Trained at Mitsuharu Misawas dojo in All Japan Pro Wrestling"
    ]
  },
  384: {
    facts: [
      "Real name Layla El-Young; born June 25, 1977 in London, England",
      "Winner of the 2006 Diva Search competition",
      "Was a professional dancer and Miami Heat dance team member before joining WWE",
      "Held the WWE Divas Championship",
      "Formed the tag team LayCool with Michelle McCool",
      "Born to a Moroccan father and Spanish mother, raised in England",
      "Retired from in-ring competition in 2015"
    ]
  },
  401: {
    facts: [
      "Real name Humberto Angel Garza Solano; born June 3, 1997 in Monterrey, Nuevo Leon, Mexico",
      "Third generation professional wrestler from the Garza wrestling family",
      "Nephew of Hector Garza who was a star in WCW and CMLL",
      "Cousin of Humberto Carrillo who also wrestled in WWE",
      "Became the youngest CMLL World Cruiserweight Champion in history",
      "Known for removing his pants during his ring entrance and giving them to a female fan",
      "Was part of Legado del Fantasma stable in NXT"
    ]
  },
  403: {
    facts: [
      "Born in Mexico City, Mexico",
      "Third generation professional wrestler",
      "Grandson of El Santo, one of the most legendary luchadores in Mexican history",
      "Wrestled as King Cuerno in Lucha Underground where he was known for his hunting persona",
      "Leader of the Legado del Fantasma faction in NXT and later on the main roster",
      "Former NXT Cruiserweight Champion"
    ]
  },
  409: {
    facts: [
      "Real name Delia Victoria Gonzalez-Kothari; born July 11, 1990 in Texas",
      "Stands 6 feet 0 inches, one of the tallest women in WWE history",
      "Former college basketball player at Texas A&M International University",
      "Won the NXT Womens Championship",
      "Won the inaugural NXT Womens Tag Team Championship with Dakota Kai",
      "Known as Big Mami Cool and La Brooklynita as ring nicknames",
      "Trained at the WWE Performance Center"
    ]
  },
  411: {
    facts: [
      "Real name Carla Roxanne Gonzalez Perez; born in 2001 from the San Antonio, Texas area",
      "Began training as a teenager at Booker Ts Reality of Wrestling promotion",
      "Became the youngest NXT Womens Champion in history",
      "Won the NXT Womens Breakout Tournament in 2022",
      "Cited Bayley as an inspiration growing up"
    ]
  },
  416: {
    facts: [
      "Real name Jermaine Jonah Haas; born October 11, 1988 in Melbourne, Australia",
      "Known for his devastating Tsunami top rope splash finishing move",
      "Was released from WWE in August 2021 then re-signed later that same year",
      "Formerly wrestled as Jonah Rock on the independent circuit",
      "Former PROGRESS Wrestling World Champion",
      "Weighs approximately 280 pounds with remarkable agility for his size"
    ]
  },
  425: {
    facts: [
      "Real name Samuel Thomas Shaw; born October 11, 1987",
      "Previously wrestled in TNA/Impact Wrestling as Samuel Shaw",
      "Known for his silent creepy character who communicates primarily through drawings",
      "Former NXT Tag Team Champion with Johnny Gargano as The Way",
      "Was part of The Way stable in NXT alongside Johnny Gargano, Candice LeRae, and Indi Hartwell",
      "Stands 6 feet 3 inches tall"
    ]
  },
  426: {
    facts: [
      "Real name Matthew Barker; born in Sydney, Australia",
      "Known for his arrogant social media influencer heel character",
      "Won the NXT Tag Team Championship",
      "Known for his trash talk and ability to generate strong crowd reactions as a heel",
      "Was part of the Australian independent wrestling scene before joining WWE"
    ]
  },
  468: {
    facts: [
      "Real name Masao Yoshida; born October 26, 1973 in Iwate Prefecture, Japan",
      "Won the inaugural WWE Light Heavyweight Championship in a tournament in 1997",
      "Founded the Kaientai Dojo promotion in Japan",
      "Was part of the Kaientai faction in WWE with Funaki",
      "Known for the Michinoku Driver finishing move which is still widely used in wrestling",
      "Had memorable comedic segments with dubbed English voices alongside Funaki",
      "Trained many future stars at his Kaientai Dojo"
    ]
  },
  475: {
    legalIssues: [
      { year: "2014", incident: "Arrest", details: "Arrested in connection with a traffic stop incident" }
    ],
    facts: [
      "Real name George Murdoch; born February 21, 1980 in Pasadena, California",
      "Stands 6 feet 7 inches tall and weighs approximately 375 pounds",
      "Known for his Funkasaurus dancing gimmick with the Funkadactyls Cameron and Naomi",
      "Was originally repackaged from a monster heel to a dancing babyface",
      "Released from WWE in 2014",
      "Later appeared as Tyrus in Impact Wrestling and NWA, winning the NWA Worlds Heavyweight Championship",
      "Became a commentator and personality on Fox News"
    ]
  },
  524: {
    facts: [
      "Real name Tyler Bate; born March 7, 1997 in Dudley, England",
      "Became the first ever WWE United Kingdom Champion at age 19",
      "His match against Pete Dunne at NXT TakeOver Chicago is considered an all-time classic",
      "Known for incredible strength relative to his size including the Tyler Driver 97",
      "Youngest champion in WWE history when he won the UK title in January 2017",
      "Part of the British Strong Style group alongside Pete Dunne and Trent Seven"
    ]
  },
  532: {
    facts: [
      "Real name Giulia Shinohara; born of an Italian father and Japanese mother",
      "Became a major star in the Japanese promotion STARDOM",
      "Founded the Donna del Mondo stable in STARDOM",
      "Signed with WWE and debuted in NXT in 2024",
      "Bilingual in Japanese and Italian",
      "Considered one of the biggest international signings for NXT"
    ]
  },
  538: {
    facts: [
      "Real name Alipate Aloisio Leone; born November 15, 1982 in Samoa",
      "Son of WWE Hall of Famer Haku (Meng/King Haku)",
      "Brother of Tama Tonga, with whom he formed the Guerrillas of Destiny in NJPW",
      "Spent over a decade in New Japan Pro-Wrestling becoming a multi-time IWGP Tag Team Champion",
      "Member of the Bullet Club faction in NJPW",
      "Signed with WWE in 2024 and joined the Bloodline faction"
    ]
  },
  565: {
    facts: [
      "Real name Bryan James Clark; born March 8, 1964 in Harrisburg, Pennsylvania",
      "Stood 6 feet 8 inches tall and weighed approximately 280 pounds",
      "Also wrestled as Wrath in WCW where he had a notable undefeated streak",
      "His Adam Bomb character was based on the Three Mile Island nuclear accident",
      "Managed by Harvey Wippleman during his early WWE run",
      "Was part of the tag team KroniK with Brian Adams (Crush) in WCW",
      "His ring attire featured hazmat and nuclear themed gear"
    ]
  },
  578: {
    legalIssues: [
      { year: "2009", incident: "DUI arrest", details: "Arrested for driving under the influence in California" }
    ],
    facts: [
      "Real name Christopher Alan Mordetzky; born January 6, 1983 in Los Angeles, California",
      "Stood 6 feet 4 inches and weighed approximately 275 pounds",
      "Known for his Masterlock Challenge where fans and wrestlers tried to break his full nelson",
      "Bobby Lashley was the first to break the Masterlock on television",
      "Was a bodybuilding competitor before becoming a professional wrestler",
      "Had two runs with WWE from 2003 to 2007 and 2009 to 2011",
      "Later wrestled in Impact Wrestling and the NWA under the name Chris Adonis"
    ]
  },
  589: {
    facts: [
      "Real name Sesugh Uhaa; born August 22, 1987 in Sacramento, California",
      "Of Nigerian descent, born in the United States",
      "Wrestled on the independent circuit as Uhaa Nation before signing with WWE",
      "Had a notable run in the Dragon Gate promotion in Japan",
      "Won the United States Championship and Intercontinental Championship in WWE",
      "Known for exceptional athleticism and high-flying moves despite his muscular build",
      "Was repackaged as Commander Azeez before returning to action as Apollo Crews"
    ]
  },
  643: {
    legalIssues: [
      { year: "2008", incident: "DUI arrest", details: "Arrested for driving under the influence" }
    ],
    facts: [
      "Real name Lance McNaught; born January 7, 1981 in Amarillo, Texas",
      "Died August 13, 2010 at age 29 from heart failure related to an enlarged heart",
      "Trained by Shawn Michaels",
      "Formed a successful tag team with Trevor Murdoch winning the World Tag Team Championship",
      "Was mentored by Shawn Michaels in a storyline",
      "Was considered to have significant potential before his untimely passing"
    ]
  },
  644: {
    facts: [
      "Real name William Mueller; born October 5, 1979 in Rogersville, Missouri",
      "Formed a successful tag team with Lance Cade winning the World Tag Team Championship",
      "Adopted the tribute ring name from the late Dick Murdoch",
      "Won the NWA Worlds Heavyweight Championship, becoming a key figure in the NWA revival",
      "Known for his hard-hitting brawling style reminiscent of classic Southern wrestling",
      "Trained by Harley Race at his World League Wrestling academy"
    ]
  },
  732: {
    spouses: [
      { name: "Booker T (Robert Booker Tio Huffman)", years: "2005-present", notes: "Married in Houston, Texas" }
    ],
    facts: [
      "Real name Sharmell Sullivan-Huffman; born November 2, 1970",
      "Won the 1991 Miss Black America pageant",
      "Was a Nitro Girl named Storm in WCW",
      "Managed her real-life husband Booker T during his King Booker reign in WWE",
      "Inducted into the WWE Hall of Fame in 2019 alongside Booker T",
      "Was involved in storylines with Kurt Angle and Eddie Guerrero"
    ]
  },
  760: {
    facts: [
      "Real name Jillian Fletcher; born in Louisville, Kentucky",
      "Had a character gimmick of a terrible singer who would sing before matches to annoy the crowd",
      "Originally debuted in WWE with a facial growth prosthetic that was removed by Boogeyman",
      "Worked as JBLs image consultant before becoming a full-time wrestler",
      "Trained at Ohio Valley Wrestling, WWEs former developmental territory",
      "Also appeared in TNA/Impact Wrestling after leaving WWE"
    ]
  },
  806: {
    facts: [
      "Real name Barry Alan Darsow; born October 6, 1959 in Minneapolis, Minnesota",
      "Best known as Smash of the tag team Demolition alongside Ax and later Crush",
      "Demolition held the WWF Tag Team Championship three times with a record-breaking longest reign",
      "The Repo Man gimmick featured him repossessing items from fans and wrestlers",
      "Also wrestled as Krusher Khruschev in the NWA and WCW",
      "Repo Man wore a half mask and sneaked around stealing possessions",
      "Demolitions face paint and style were inspired by the band KISS and the Road Warriors"
    ]
  },
  808: {
    facts: [
      "Real name Charles Scaggs; born January 10, 1964 in Philadelphia, Pennsylvania",
      "Better known as 2 Cold Scorpio on the independent circuit and in ECW",
      "Was one of the pioneering high-flyers in American wrestling during the early 1990s",
      "Known for performing the 450 Splash which he popularized in American wrestling",
      "Won the ECW World Television Championship and ECW World Tag Team Championship",
      "The Flash Funk persona featured a 1970s funk dancer theme with backup dancers called the Funkettes",
      "Also had success in Japan wrestling for WAR and other promotions",
      "Considered one of the most innovative aerial wrestlers of his generation"
    ]
  },
  1002: {
    spouses: [
      { name: "Miyako Osaki", years: "1969-2003", notes: "Married until his passing" }
    ],
    announcing: [
      { role: "Manager and occasional commentator", show: "Various WWF/WWE programming", years: "1960s-2003", notes: "One of the most legendary managers in wrestling history" }
    ],
    facts: [
      "Born Frederick Kenneth Blassie on February 8, 1918 in St. Louis, Missouri",
      "Died June 2, 2003 at age 85",
      "Known as Classy Freddie Blassie and The Hollywood Fashion Plate",
      "Famous for calling fans pencil-neck geeks which became his signature catchphrase",
      "Released a novelty song called Pencil Neck Geeks that charted in the 1970s",
      "Managed numerous WWF Champions including Iron Sheik, Nikolai Volkoff, and early Hulk Hogan",
      "Inducted into the WWE Hall of Fame in 1994",
      "Served in the United States Navy during World War II",
      "Had a career spanning over five decades from the 1940s to the 2000s",
      "Appeared in the Andy Kaufman wrestling angle and related events"
    ]
  },
  // Batch 17 - ECW/Divas/Modern
  242: {
    children: [
      { name: "Tyler Fullington", notes: "Appeared on ECW programming as a child" }
    ],
    facts: [
      "Real name James Fullington; born November 18, 1963 in Philadelphia, Pennsylvania",
      "Known for his Singapore cane and beer-drinking entrance in ECW",
      "Was part of the ECW Originals faction in WWE",
      "His hardcore style made him one of ECWs most iconic figures",
      "Continued wrestling on the independent circuit for years after ECW closed"
    ]
  },
  246: {
    facts: [
      "Real name Jonathan Rechner; born November 21, 1972 in Carteret, New Jersey",
      "Passed away on April 12, 2016 at age 44 from a heart attack",
      "Known for his chair-swinging style and partnership with Axl Rotten in ECW",
      "The team was known as The Hardcore Chair Swingin Freaks",
      "Also competed in WWE during the ECW brand revival",
      "Was trained by Homicide and Larry Sharpe"
    ]
  },
  315: {
    facts: [
      "Real name Marc Copani; born February 25, 1981 in Syracuse, New York",
      "Portrayed a controversial Arab-American character on WWE television in 2004-2005",
      "His character drew significant mainstream media attention and controversy",
      "Managed by Daivari on WWE programming",
      "Became a high school teacher and football coach after leaving wrestling",
      "UPN network executives pressured WWE to remove the character following the 2005 London bombings"
    ]
  },
  189: {
    facts: [
      "Real name Rene Goguen; born January 1, 1983 in Moncton, New Brunswick, Canada",
      "Became the youngest WWE Tag Team Champion in history at age 19",
      "Won the tag titles alongside Sylvain Grenier as La Resistance",
      "His father was a professional wrestler known as Emile Dupree",
      "Third generation wrestler from a Canadian wrestling family",
      "Left WWE in 2007 and competed in Japan for New Japan Pro-Wrestling"
    ]
  },
  193: {
    facts: [
      "Real name Rycklon Stephens; born April 22, 1978 in Georgetown, Guyana",
      "Was the last ECW Champion in WWE history, defeating Christian in 2010",
      "Grew up in Harlem, New York after moving from Guyana as a child",
      "Was part of The Corre stable on SmackDown alongside Wade Barrett, Heath Slater, and Justin Gabriel",
      "Won the Intercontinental Championship in 2011",
      "Known for his powerhouse style and impressive physique"
    ]
  },
  195: {
    facts: [
      "Real name Harry Smith; born August 2, 1985 in Calgary, Alberta, Canada",
      "Son of British Bulldog Davey Boy Smith and Diana Hart",
      "Grandson of Stu Hart, making him part of the legendary Hart wrestling family",
      "Nephew of Bret Hart, Owen Hart, and other Hart family members",
      "Was part of The Hart Dynasty with Tyson Kidd and Natalya in WWE",
      "Won the WWE Tag Team Championship with Tyson Kidd as The Hart Dynasty",
      "Has also competed in NJPW as Davey Boy Smith Jr",
      "Trained in the Hart family Dungeon in Calgary"
    ]
  },
  224: {
    facts: [
      "Real name Rebekah Kunkel; born February 2, 1996",
      "Competed in the Mae Young Classic tournament before signing with WWE",
      "Known for her athletic in-ring style and the Z360 finishing move",
      "Was part of a tag team and alliance with Shayna Baszler on the main roster",
      "Formerly competed on the independent circuit including Shimmer"
    ]
  },
  312: {
    facts: [
      "Real name Travis Tomko; born July 8, 1975 in Allentown, Pennsylvania",
      "Served as Tyson Tomko the Problem Solver as a bodyguard for Christian in WWE",
      "Later competed in TNA Wrestling where he partnered with AJ Styles",
      "Also spent time in Japan wrestling for NJPW and AJPW",
      "Former bouncer before entering professional wrestling",
      "Stood approximately 6 feet 6 inches and weighed around 280 pounds"
    ]
  },
  344: {
    facts: [
      "Real name Edwin Carlo Colon; born December 21, 1982 in San Juan, Puerto Rico",
      "Son of legendary Puerto Rican wrestler and promoter Carlos Colon",
      "Brother of Epico who he teamed with as Los Matadores and The Colons in WWE",
      "Cousin of Carlito who also had a notable WWE career",
      "Won the WWE Tag Team Championship multiple times with Epico",
      "Third generation professional wrestler from the Colon wrestling dynasty",
      "His family runs the WWC promotion in Puerto Rico"
    ]
  },
  380: {
    facts: [
      "Real name Brian Myers; born January 26, 1985 in Queens, New York",
      "Was part of the Major Brothers tag team with Zack Ryder in WWE developmental",
      "Won the WWE Tag Team Championship with Zack Ryder",
      "Had a notable losing streak storyline in WWE that lasted over a year",
      "Ended his losing streak at WrestleMania 35 by winning the Raw Tag Team Championship with Zack Ryder",
      "Has since competed in Impact Wrestling under his real name Brian Myers",
      "Co-hosts the Major Wrestling Figure Podcast with Matt Cardona (formerly Zack Ryder)"
    ]
  },
  402: {
    facts: [
      "Real name Humberto Garza Solano; born May 28, 1995 in Monterrey, Nuevo Leon, Mexico",
      "Member of the Garza wrestling family in Mexico",
      "Nephew of Hector Garza, a legendary Mexican luchador",
      "Cousin of Angel Garza who also competed in WWE",
      "Known for his high-flying style and athleticism",
      "Third generation professional wrestler"
    ]
  },
  413: {
    facts: [
      "Real name Marcel Sieber; born August 28, 1990 in Chemnitz, Germany",
      "Competed as Marcel Barthel in NXT before being repackaged as Ludwig Kaiser",
      "Part of the Imperium faction alongside Gunther and Giovanni Vinci",
      "Won the NXT Tag Team Championship as part of Imperium",
      "Known for his technical European style of wrestling",
      "Serves as the right-hand man to Gunther on SmackDown"
    ]
  },
  415: {
    facts: [
      "Real name John Desmond McDonagh; born August 17, 1990 in Dublin, Ireland",
      "Formerly known as Jordan Devlin in NXT UK and the independent scene",
      "Won the NXT Cruiserweight Championship",
      "Trained by Finn Balor early in his career in Ireland",
      "Was part of the Judgment Day faction on Raw",
      "Competed extensively in Progress Wrestling and other European promotions before WWE",
      "Considered one of Irelands top professional wrestling exports"
    ]
  },
  418: {
    facts: [
      "Born August 10, 1988 in Sheffield, England",
      "Former rugby league player before transitioning to professional wrestling",
      "Played rugby league professionally including time in the Super League",
      "Was part of the Brawling Brutes stable with Sheamus and Butch (Pete Dunne) on SmackDown",
      "Known for his powerhouse style and rugby-influenced moves",
      "Stands approximately 6 feet 3 inches and weighs around 252 pounds"
    ]
  },
  442: {
    spouses: [
      { name: "Jerry The King Lawler", years: "2000-2003", notes: "Met through WWE" }
    ],
    facts: [
      "Real name Stacy Carter; born October 27, 1971 in Memphis, Tennessee",
      "Was married to Jerry The King Lawler during her time in WWE",
      "Won the WWF Womens Championship once",
      "Her departure from WWE coincided with Jerry Lawlers temporary departure from commentary",
      "Was part of the Attitude Era diva roster"
    ]
  },
  446: {
    legalIssues: [
      { year: "2005", incident: "Wrongful termination lawsuit", details: "Filed a lawsuit against WWE claiming she was fired for being pregnant" }
    ],
    facts: [
      "Real name Dawn Marie Psaltis; born November 3, 1970 in Woodbridge, New Jersey",
      "Known for her role on SmackDown in the early 2000s",
      "Was involved in a controversial storyline with Torrie Wilson and her on-screen father Al Wilson",
      "Also competed in ECW before joining WWE",
      "Was part of the SmackDown diva roster from 2002 to 2005"
    ]
  },
  457: {
    facts: [
      "Real name Ashley Mae Sebera; born January 29, 1989 in Seven Hills, Ohio",
      "Former competitive gymnast and fitness model before entering professional wrestling",
      "Was a bodybuilding and fitness competition champion before WWE",
      "Won the WWE 24/7 Championship multiple times",
      "Known for her athletic background and powerlifting ability"
    ]
  },
  572: {
    facts: [
      "Real name Da Shawn Ware; born December 20, 1978 in Jacksonville, Florida",
      "Was a prominent performer on the ECW brand revival in WWE",
      "Known as The Paragon of Virtue during his WWE run",
      "Also competed in TNA Wrestling as D Angelo Dinero (The Pope)",
      "His Pope character became very popular in TNA",
      "Had a charismatic persona and strong mic skills"
    ]
  },
  587: {
    legalIssues: [
      { year: "2020", incident: "Social media controversy", details: "Past social media posts containing racist and homophobic content surfaced leading to significant controversy" }
    ],
    facts: [
      "Real name Dylan Miley; born June 21, 1988 in Greeley, Colorado",
      "Had a powerful debut on the main roster destroying multiple wrestlers in squash matches",
      "Known for his massive physique standing approximately 6 feet 3 inches and weighing around 300 pounds",
      "Was shelved multiple times due to anxiety issues related to performing",
      "Past controversial social media posts led to his suspension and eventual release from WWE"
    ]
  },
  869: {
    facts: [
      "Real name Trevor Lee; born April 18, 1994 in Cameron, North Carolina",
      "Was a prominent independent wrestler before signing with WWE",
      "Competed in TNA and PWG among other promotions as Trevor Lee",
      "Won the NXT North American Championship",
      "Known for his To the Moon gimmick in NXT involving a stock market investor persona",
      "Known for his charismatic personality and comedic timing in promos"
    ]
  },
  874: {
    facts: [
      "Real name Kimberly Benson; born July 28, 1994 in Airdrie, Scotland",
      "Former bodybuilder and powerlifter before entering professional wrestling",
      "Won Miss Universe Great Britain in 2015",
      "Competed in NXT UK before moving to the main roster",
      "Was briefly renamed Doudrop on the main roster before reverting to Piper Niven",
      "Known for her power-based offense and impressive strength"
    ]
  },
  957: {
    facts: [
      "Real name Tenille Dashwood; born March 1, 1989 in Melbourne, Victoria, Australia",
      "Was the first NXT Womens Champion in WWE history",
      "Left WWE and competed in Impact Wrestling and Ring of Honor as Tenille Dashwood",
      "Returned to WWE in 2021",
      "Known for her dance-inspired entrance and the Emma Lock submission hold"
    ]
  },
  958: {
    facts: [
      "Real name Danielle Louise Moinet; born November 28, 1983 in Manhasset, New York",
      "Former NFL cheerleader for the Washington Commanders",
      "Was a cast member on the E Network reality show Total Divas",
      "Stood approximately 5 feet 10 inches making her one of the taller divas on the roster",
      "Has pursued acting and modeling career after leaving WWE",
      "Competed in WWE from 2012 to 2017"
    ]
  },
  959: {
    spouses: [
      { name: "Jonathan Coyle", years: "2014-present", notes: "Fellow fitness competitor and wrestler" }
    ],
    facts: [
      "Real name Natalie Eva Marie Nelson; born September 19, 1984 in Walnut Creek, California",
      "Was a main cast member on the E Network reality show Total Divas",
      "Known more for her appearances on Total Divas than in-ring competition",
      "Has pursued a career in acting appearing in several films",
      "Known for her signature red hair",
      "Has built a successful fitness and lifestyle brand outside of wrestling"
    ]
  },
  1010: {
    spouses: [
      { name: "Rener Gracie", years: "2014-present", notes: "Member of the legendary Gracie Brazilian Jiu-Jitsu family" }
    ],
    facts: [
      "Real name Eve Marie Torres; born August 21, 1984 in Denver, Colorado",
      "Won the WWE Divas Championship three times",
      "Won the 2007 Diva Search competition to earn her WWE contract",
      "Has a Brazilian Jiu-Jitsu background under the Gracie family",
      "Married Rener Gracie of the famous Gracie martial arts family",
      "Known for her athletic ability and legitimate grappling skills",
      "Has been involved in self-defense advocacy and womens empowerment campaigns"
    ]
  },

  // Batch 18 - Misc/Comedy/Managers
  179: {
    facts: [
      "Real name Francisco Islas Rueda; born October 12, 1973 in Tulancingo, Hidalgo, Mexico",
      "Known for his high-flying Moonsault performed from virtually anywhere in the arena",
      "Competed extensively in ECW, WWE, and various Mexican and Japanese promotions",
      "Won the ECW World Television Championship",
      "Was part of the Mexicools stable in WWE alongside Juventud Guerrera and Psicosis",
      "Known for his triple Moonsault spot off a chair, the ropes, then the top turnbuckle"
    ]
  },
  180: {
    facts: [
      "Real name James Maritato; born December 7, 1971 in Brooklyn, New York",
      "Best known as Little Guido in ECW as part of the Full Blooded Italians stable",
      "Won the ECW World Tag Team Championship",
      "Won the WWE Cruiserweight Championship",
      "Trained at the Monster Factory wrestling school in New Jersey",
      "Worked as a trainer and producer for WWE after his in-ring career wound down"
    ]
  },
  181: {
    facts: [
      "Real name Charles Andrew Palumbo; born June 15, 1971 in Queens, New York",
      "Stands approximately 6 feet 6 inches tall",
      "Debuted in WCW as part of the Natural Born Thrillers stable",
      "Formed a notable tag team with Sean OHaire in WCW winning the WCW World Tag Team Championship twice",
      "Also teamed with Billy Gunn in WWE",
      "Had a biker gimmick in WWE during the mid 2000s",
      "Retired from professional wrestling and pursued interests in motorcycles"
    ]
  },
  183: {
    facts: [
      "Real name Jon Heidenreich; born September 27, 1969 in Hailey, Idaho",
      "Stands approximately 6 feet 7 inches tall",
      "Had an intense and unhinged character in WWE from 2004 to 2006",
      "Was involved in a memorable feud with The Undertaker",
      "Formed an unlikely tag team with Road Warrior Animal winning the WWE Tag Team Championship in 2005",
      "Known for reciting poetry to fans at ringside as part of his character"
    ]
  },
  184: {
    facts: [
      "Real name Orlando Jordan; born April 21, 1974 in Miami, Florida",
      "Served as a member of JBLs Cabinet stable in WWE",
      "Won the WWE United States Championship in 2005",
      "His US Championship reign was notable for a series of extremely quick losses to Chris Benoit",
      "Came out as bisexual and incorporated that into his wrestling persona in TNA",
      "Played college football before transitioning to professional wrestling"
    ]
  },
  267: {
    facts: [
      "Real name Mansoor Al-Shehail; born February 1, 1995 in Riyadh, Saudi Arabia",
      "Raised in the United States",
      "Won a 50-man Battle Royal at the Super ShowDown event in Jeddah, Saudi Arabia in 2019",
      "Was undefeated at WWE events held in Saudi Arabia for an extended period",
      "Trained at the WWE Performance Center in Orlando",
      "Was part of the Maximum Male Models group on SmackDown"
    ]
  },
  313: {
    facts: [
      "Real name Mark Edward Jindrak; born January 29, 1977 in Auburn, New York",
      "Stands approximately 6 feet 6 inches tall",
      "Was originally slated to be part of the Evolution stable in WWE before being replaced by Batista",
      "Was part of the Natural Born Thrillers stable in WCW",
      "Won the WCW World Tag Team Championship with Sean OHaire",
      "Moved to CMLL in Mexico where he became a major star under the name Marco Corleone",
      "Became one of the most popular foreign wrestlers in Mexican wrestling history"
    ]
  },
  335: {
    spouses: [
      { name: "Sarah Logan (Sarah Rowe)", years: "2020-present", notes: "Fellow WWE wrestler" }
    ],
    children: [
      { name: "Cash Raymond Rowe", born: 2021, notes: "Son with Sarah Logan" }
    ],
    facts: [
      "Real name Todd Smith; born December 10, 1988 in Roanoke, Virginia",
      "Known as Ivar of the Viking Raiders tag team alongside Erik",
      "Won the NXT Tag Team Championship and Raw Tag Team Championship with Erik",
      "Known for his incredible agility despite his size including cartwheels and handsprings",
      "Won tag team championships in multiple promotions including ROH and NJPW",
      "Suffered a serious neck injury in 2020 that required surgery",
      "Married fellow WWE wrestler Sarah Logan in 2020"
    ]
  },
  338: {
    facts: [
      "Real name Naofumi Yamamoto; born July 25, 1977 in Gifu, Japan",
      "Was a notable star in New Japan Pro-Wrestling before signing with WWE",
      "Competed on ECW and later Raw and SmackDown from 2009 to 2014",
      "Known for his stiff striking style and roundhouse kicks",
      "Was trained in the New Japan Dojo system",
      "Returned to Japan after his WWE career to compete on the independent scene"
    ]
  },
  342: {
    facts: [
      "Real name Dean Muhtadi; born July 17, 1986 in Bethesda, Maryland",
      "Played professional football in the NFL for the Arizona Cardinals and Green Bay Packers",
      "Was on the Green Bay Packers roster during their Super Bowl XLV championship season",
      "Formed the Hype Bros tag team with Zack Ryder in NXT and on SmackDown",
      "Won the Andre the Giant Memorial Battle Royal at WrestleMania 33 in 2017",
      "Holds a degree from the University of Maryland where he played football",
      "Father is of Libyan descent"
    ]
  },
  423: {
    facts: [
      "Real name Brianna Coda; born January 19, 2002 in Illinois",
      "One of the youngest signees in WWE Performance Center history",
      "Had a notable alliance and subsequent rivalry with Roxanne Perez in NXT",
      "Known for her skateboard which she used as part of her entrance and character",
      "Won the NXT Womens Tag Team Championship with Roxanne Perez",
      "Started training for professional wrestling as a teenager"
    ]
  },
  424: {
    facts: [
      "Real name Samantha De Martin; born February 10, 1997 in Melbourne, Australia",
      "Was part of The Way faction in NXT led by Johnny Gargano and Candice LeRae",
      "Had a popular comedic storyline involving a romantic relationship with Dexter Lumis on NXT",
      "Won the NXT Womens Tag Team Championship",
      "Won the WWE Womens Tag Team Championship on the main roster with Candice LeRae",
      "Known for her power-based moveset"
    ]
  },
  447: {
    facts: [
      "Real name Nidia Guenard; born October 14, 1979 in San Juan, Puerto Rico",
      "Won the first season of WWE Tough Enough alongside Maven in 2001",
      "Competed on SmackDown in the early 2000s",
      "Was romantically paired with Jamie Noble on screen as part of a trailer park couple gimmick",
      "Had an angle where she was blinded by Tajiri spraying green mist in her eyes",
      "Left WWE in 2004 after being released as part of roster cuts"
    ]
  },
  467: {
    announcing: [
      { role: "Personal Ring Announcer", show: "SmackDown and Raw", years: "2010-2013", notes: "Served as Alberto Del Rios personal ring announcer" }
    ],
    facts: [
      "Real name Jesus Rodriguez; born January 28, 1986 in San Luis Potosi, Mexico",
      "Best known for his role as Alberto Del Rios personal ring announcer from 2010 to 2013",
      "His signature introduction involved rolling the R in Alberto and dramatically announcing the name",
      "Was also a trained wrestler and competed in matches on occasion",
      "Known for his comedic timing and charismatic ring announcing style"
    ]
  },
  753: {
    facts: [
      "Real name Mike Bucci; born November 22, 1972 in Hazlet, New Jersey",
      "Previously wrestled in ECW as Nova where he was a well-known performer",
      "The Simon Dean character was a fitness guru gimmick on WWE television in 2004-2005",
      "As Simon Dean he came to the ring with a scooter and promoted the Simon System fitness product",
      "Worked as a trainer at the WWE Performance Center after his in-ring career",
      "Was known in ECW for performing other wrestlers finishing moves as part of his gimmick"
    ]
  },
  893: {
    facts: [
      "Real name Dan Spivey; born October 28, 1958 in Tampa, Florida",
      "Stood approximately 6 feet 7 inches tall",
      "The Waylon Mercy character was based on Robert De Niros Max Cady from the 1991 film Cape Fear",
      "Would shake opponents hands and speak softly before matches then become violent during them",
      "The character debuted in 1995 and is widely credited as a major inspiration for Bray Wyatts original character",
      "Had Hawaiian shirts and a southern gentleman demeanor as part of the character",
      "His catchphrase was You know what I mean",
      "The character was short-lived due to Spiveys recurring injuries",
      "Previously competed as part of the Skyscrapers tag team with Sid Vicious in WCW"
    ]
  },
  928: {
    facts: [
      "Real name Juanita Wright; born October 14, 1940",
      "Passed away on September 22, 1996",
      "Best known as the valet and dance partner of the American Dream Dusty Rhodes",
      "Appeared at WrestleMania VI accompanying Dusty Rhodes to the ring",
      "Was involved in a feud with Queen Sherri and Randy Savage alongside Dusty Rhodes",
      "Was one of the few African American women featured prominently on WWE television in that era"
    ]
  },
  932: {
    facts: [
      "Real name Jorge Gonzalez; born January 31, 1966 in El Colorado, Formosa, Argentina",
      "Passed away on September 22, 2010 at age 44",
      "Stood approximately 7 feet 7 inches tall, one of the tallest wrestlers in history",
      "Suffered from acromegaly and gigantism similar to Andre the Giant",
      "Played professional basketball in Argentina before entering wrestling",
      "Was briefly in WCW as El Gigante before moving to WWE",
      "Most famous for his feud with The Undertaker at WrestleMania IX in 1993",
      "Wore a full body suit airbrushed with muscles during his WWE appearances",
      "Was managed by Harvey Wippleman during his time in WWE",
      "His cause of death was related to complications from diabetes connected to his gigantism"
    ]
  },
  956: {
    legalIssues: [
      { year: "2014", incident: "Domestic violence arrest", details: "Arrested on a domestic violence charge which contributed to his release from WWE" },
      { year: "2016", incident: "Arrest", details: "Arrested on charges of domestic battery and violation of a restraining order" }
    ],
    facts: [
      "Real name Raymond Leppan; born November 2, 1979 in Cape Town, South Africa",
      "Had a party character gimmick with the Exotic Express, costumed party-goers who accompanied him to the ring",
      "Previously competed in NXT as Leo Kruger with a South African hunter gimmick",
      "The Leo Kruger character was more serious and well received by NXT audiences",
      "Was suspended and later released by WWE in 2016",
      "His catchphrase was Its a party"
    ]
  },
  1001: {
    facts: [
      "Real name Wladek Kowalski; born October 13, 1926 in Windsor, Ontario, Canada",
      "Passed away on August 30, 2008 at age 81",
      "Stood approximately 6 feet 7 inches tall",
      "Of Polish descent, born in Canada",
      "One of the most feared heels in professional wrestling during the 1950s, 1960s, and 1970s",
      "Infamous for accidentally tearing off part of Yukon Erics ear during a match",
      "Operated a famous wrestling school in Malden, Massachusetts that trained many future stars",
      "Trained Triple H, Chyna, Kofi Kingston, and Perry Saturn among others",
      "Was inducted into the WWE Hall of Fame in 1996",
      "Was known as a strict vegetarian later in life"
    ]
  },
  1008: {
    facts: [
      "Real name Duane Gill; born August 25, 1962",
      "Was a parody of WCW wrestler Goldberg during the Monday Night Wars era",
      "Won the WWE Light Heavyweight Championship in 1998 in a comedic upset",
      "His entrance mimicked Goldberg complete with sparklers and security escort but in a low-budget fashion",
      "Had been a jobber in WWF for many years before the Gillberg character was created",
      "Continued to make sporadic appearances on WWE television as a nostalgia act",
      "Had one of the longest Light Heavyweight Championship reigns despite being a comedy character"
    ]
  },
  1009: {
    facts: [
      "Real name James Morris Ellsworth; born December 20, 1984 in Baltimore, Maryland",
      "Became famous from a squash match against Braun Strowman on Raw in 2016 where he said Any man with two hands has a fighting chance",
      "Despite being brought in as enhancement talent, he became so popular WWE signed him to a contract",
      "Had a memorable storyline helping Carmella win the first Womens Money in the Bank ladder match",
      "Became a cult favorite due to his underdog appearance and lack of traditional wrestling physique",
      "Was released by WWE in 2017 but continued on the independent circuit"
    ]
  },
  1012: {
    spouses: [
      { name: "Kathy Colace", years: "2010-2012", notes: "Mother of The Bella Twins; marriage ended in divorce" }
    ],
    legalIssues: [
      { year: "2022", incident: "Fired by WWE", details: "Terminated from his position as WWE Head of Talent Relations following investigation into Vince McMahons misconduct" }
    ],
    announcing: [
      { role: "On-screen authority figure", show: "Raw", years: "2007-2012", notes: "Served as GM of Raw known for his monotone delivery and People Power catchphrase" }
    ],
    facts: [
      "Real name John Laurinaitis; born July 31, 1962 in Philadelphia, Pennsylvania",
      "Brother of Road Warrior Animal (Joe Laurinaitis) of the legendary Legion of Doom",
      "Had a successful in-ring career in Japan as Johnny Ace in All Japan Pro Wrestling",
      "Credited with inventing the Ace Crusher finishing move, later adapted as the Diamond Cutter and the RKO",
      "Was the head of talent relations for WWE for many years",
      "Married Kathy Colace making him the Bella Twins stepfather",
      "Was terminated from WWE in 2022 amid investigations into corporate misconduct"
    ]
  },
  // Batch 19 - Kenzo Suzuki to Meiko Satomura
  186: {
    spouses: [
      { name: "Hiroko", notes: "Also served as his on-screen manager in WWE" }
    ],
    facts: [
      "Real name is Kenichiro Suzuki",
      "Born March 30 1972 in Chiba Japan",
      "Was a New Japan Pro-Wrestling regular before signing with WWE in 2004",
      "Competed in Mixed Martial Arts fights in Japan before transitioning to wrestling",
      "Paired with Hiroko and Rene Dupree on SmackDown in a brief tag team run",
      "Released from WWE in 2005 and returned to the Japanese wrestling circuit"
    ]
  },
  266: {
    facts: [
      "Real name is Zhao Xia",
      "Born May 4 1988 in Chongqing China",
      "Trained in wushu and traditional Chinese martial arts before wrestling",
      "One of the first Chinese women to compete in WWE",
      "Debuted in the Mae Young Classic tournament in 2018",
      "Portrayed a dark villainous character inspired by Chinese mythology on SmackDown"
    ]
  },
  310: {
    facts: [
      "Real name is Anriel Howard",
      "Born November 12 1997 in Atlanta Georgia",
      "Stands 6 feet 1 inch tall",
      "Played Division I basketball at Mississippi State and Texas A&M",
      "Signed with WWE in 2021 after her basketball career",
      "Formed a tag team partnership with Jakara Jackson in NXT"
    ]
  },
  314: {
    spouses: [
      { name: "Shelly Martinez", years: "2006-2008", notes: "Shelly also performed in WWE as Ariel alongside him in ECW" }
    ],
    facts: [
      "Real name is Kevin Fertig",
      "Born February 5 1977 in Memphis Tennessee",
      "Stands 6 feet 6 inches tall and weighs approximately 260 pounds",
      "Originally appeared in WWE as Mordecai a pale crusader character on SmackDown in 2004",
      "Repackaged as the vampire character Kevin Thorn in the revived ECW brand in 2006",
      "Trained at Ohio Valley Wrestling WWEs former developmental territory"
    ]
  },
  328: {
    facts: [
      "Real name is Hiromu Takahashi",
      "Born December 4 1989 in Tokyo Japan",
      "One of New Japan Pro-Wrestlings biggest junior heavyweight stars",
      "Has held the IWGP Junior Heavyweight Championship multiple times",
      "Known for his high-risk daredevil style and eccentric personality",
      "Carries a stuffed cat named Daryl to the ring as a signature prop",
      "Suffered a severe neck injury in 2018 and made a successful comeback"
    ]
  },
  414: {
    facts: [
      "Real name is Fabian Aichner",
      "Born January 24 1990 in Merano South Tyrol Italy",
      "One of the few Italian-born wrestlers to compete in WWE",
      "Competed in the Cruiserweight Classic tournament in 2016",
      "Was part of the Imperium stable alongside Gunther and Ludwig Kaiser",
      "Trained extensively in European independent promotions before joining WWE"
    ]
  },
  436: {
    facts: [
      "Real name is Terry Szopinski",
      "Born November 22 1966 in Alliance Ohio",
      "Stands 6 feet 3 inches tall and weighs approximately 320 pounds",
      "Formed one half of the Powers of Pain tag team with The Barbarian",
      "Managed by Mr. Fuji during the Powers of Pain era in WWF",
      "Known for his incredible physique and feats of strength",
      "Was originally brought into WWF as a rival to Demolition"
    ]
  },
  437: {
    facts: [
      "Real name is Sione Vailahi",
      "Born September 20 1958 in Tonga",
      "Stands 6 feet 2 inches tall and weighs approximately 300 pounds",
      "Formed the Powers of Pain tag team with The Warlord",
      "Also competed as one half of The Headshrinkers with Samu",
      "Had stints in WWF WCW and various international promotions across multiple decades"
    ]
  },
  459: {
    facts: [
      "Born February 27 1994",
      "Formed the tag team Toxic Attraction with Gigi Dolin and Mandy Rose in NXT",
      "Toxic Attraction held the NXT Womens Tag Team Championships",
      "The Toxic Attraction stable dominated NXT during 2021 and 2022",
      "Trained at the WWE Performance Center in Orlando Florida"
    ]
  },
  460: {
    facts: [
      "Real name is Priscilla Kelly",
      "Born August 20 1997",
      "Well known on the independent wrestling scene before signing with WWE",
      "Formed the tag team Toxic Attraction with Jacy Jayne and Mandy Rose in NXT",
      "Held the NXT Womens Tag Team Championship with Jacy Jayne",
      "Known for her dark and edgy persona on the independent circuit before WWE"
    ]
  },
  469: {
    facts: [
      "Real name is Mario Gutierrez",
      "Born November 19 1979 in Mexico City Mexico",
      "Known as Papi Chulo before being repackaged as Essa Rios in WWF",
      "Performed high-flying lucha libre style moves including his signature moonsault",
      "Managed by Lita early in her WWF career before she joined the Hardy Boyz",
      "Trained at the CMLL wrestling school in Mexico City"
    ]
  },
  471: {
    facts: [
      "Real name is Paul Birchall",
      "Born January 12 1979 in Cheltenham England",
      "Was paired with his real-life sister Katie Lea Burchill in a controversial on-screen storyline",
      "Portrayed a pirate gimmick early in his WWE run inspired by Pirates of the Caribbean",
      "Competed on ECW and SmackDown brands during his WWE tenure from 2006 to 2010",
      "Trained by Jon Ritchie at the NWA Hammerlock promotion in the United Kingdom"
    ]
  },
  476: {
    facts: [
      "Real name is Ariane Nicole Andrew",
      "Born November 3 1987 in Northridge California",
      "Was one half of the Funkadactyls tag team with Naomi",
      "Appeared as a cast member on the reality show Total Divas",
      "Known for her catchphrase Girl Bye",
      "Started as a dancer and model before transitioning to wrestling"
    ]
  },
  495: {
    facts: [
      "Born January 29 1995 in Columbia South Carolina",
      "Formerly one half of the tag team MSK with Nash Carter in NXT",
      "MSK won the NXT Tag Team Championships multiple times",
      "Known for his high-flying and fast-paced wrestling style",
      "Competed as a singles competitor after the dissolution of MSK"
    ]
  },
  496: {
    facts: [
      "Born May 10 1995 in Coahuila Mexico",
      "Member of the legendary Munoz wrestling family in Mexico",
      "Younger brother of Rush another prominent professional wrestler",
      "Held the CMLL World Lightweight Championship",
      "Known for his incredibly athletic lucha libre style"
    ]
  },
  518: {
    facts: [
      "Real name is Joe Ariola",
      "Born August 30 1998 in Freehold New Jersey",
      "Stands 6 feet 1 inch tall and weighs approximately 230 pounds",
      "Portrays a mob boss inspired character in NXT",
      "Was a standout amateur wrestler in New Jersey before signing with WWE",
      "Won the NXT Heritage Cup Championship",
      "His character leads a faction known as The Family in NXT"
    ]
  },
  528: {
    facts: [
      "Real name is Benjamin Webb",
      "Born February 14 1986 in Wolverhampton England",
      "Was a founding member of British Strong Style alongside Pete Dunne and Tyler Bate",
      "Won the NXT Tag Team Championship",
      "One of the most prominent figures in the British independent wrestling scene",
      "Known for his hard-hitting style and trademark mustache"
    ]
  },
  529: {
    facts: [
      "Born November 22 1992 in Glasgow Scotland",
      "Previously competed under the ring name Kay Lee Ray on the independent circuit",
      "Won the NXT UK Womens Championship with a record-setting reign",
      "Known for her aggressive style and use of the KLR Bomb finisher",
      "Teams with Isla Dawn as part of the tag team known as The Unholy Union"
    ]
  },
  530: {
    facts: [
      "Real name is Courtney Stewart",
      "Born September 23 1993 in Glasgow Scotland",
      "Teams with Alba Fyre as The Unholy Union",
      "Portrays a dark mystical character with occult inspired imagery",
      "Competed extensively on the UK independent scene before joining NXT UK",
      "The Unholy Union won the WWE Womens Tag Team Championships"
    ]
  },
  602: {
    facts: [
      "Real name is Steffanie Newell",
      "Born September 15 1994 in Bargoed Wales",
      "One of the first Welsh women to compete in WWE",
      "Has undergone multiple ACL surgeries throughout her career",
      "Competed in the first Mae Young Classic tournament in 2017",
      "Previously competed on the UK independent scene as Nixon Newell"
    ]
  },
  604: {
    facts: [
      "Real name is Jaron Clements",
      "Born October 23 1993 in Melbourne Australia",
      "Stands 6 feet 5 inches tall and weighs approximately 240 pounds",
      "Competed on the Australian independent wrestling scene before signing with WWE",
      "Originally appeared in NXT under the name Brendan Vink",
      "Has a background in Australian rules football",
      "Repackaged as Duke Hudson with a poker player and cardsharp gimmick in NXT"
    ]
  },
  606: {
    spouses: [
      { name: "Nikki Cross", years: "2019-present", notes: "Both are professional wrestlers who met through the wrestling business" }
    ],
    facts: [
      "Real name is Damian Mackle",
      "Born June 1 1987 in Belfast Northern Ireland",
      "Stands 6 feet 4 inches tall and weighs approximately 275 pounds",
      "Was a key member of the stable SAnitY in NXT alongside Nikki Cross Eric Young and Alexander Wolfe",
      "Known for his hard-hitting brawling style and big man agility",
      "Competed extensively in ICW (Insane Championship Wrestling) in Scotland before WWE"
    ]
  },
  612: {
    facts: [
      "Real name is Noam Dar",
      "Born March 3 1993 in Ayr Scotland to an Israeli father",
      "One of the youngest professional wrestlers in UK history debuting at age 16",
      "Competed in the inaugural Cruiserweight Classic tournament in 2016",
      "Won the NXT Heritage Cup Championship",
      "Known for his charismatic personality and technical wrestling ability",
      "Led a faction called The Meta-Four in NXT"
    ]
  },
  613: {
    facts: [
      "Real name is Meiko Satomura",
      "Born January 23 1979 in Hirosaki Aomori Japan",
      "Widely regarded as one of the greatest female wrestlers in history",
      "Trained under the legendary Chigusa Nagayo",
      "Founded the Sendai Girls Pro Wrestling promotion in Japan in 2006",
      "Won the NXT UK Womens Championship in 2021",
      "Known for her devastating Scorpio Rising and Pele Kick finishing moves"
    ]
  },
  // Batch 20 - Tatum Paxley to Kaitlyn
  672: {
    facts: [
      "Real name is Valerie Loureda",
      "Professional MMA fighter before signing with WWE in 2023",
      "Competed in Bellator MMA with a 4-1 record",
      "Born on July 19 1998 in Miami Florida",
      "Cuban-American heritage and trained in taekwondo from a young age",
      "Known for incorporating MMA striking into her wrestling style"
    ]
  },
  678: {
    facts: [
      "Real name is Nhooph Al-Areebi",
      "Born on February 23 1994 in Toronto Ontario Canada",
      "Of Iraqi descent",
      "First Arab-Canadian woman to sign with WWE",
      "Appeared on the reality show Tough Enough season 6",
      "Released and re-signed by WWE multiple times"
    ]
  },
  684: {
    facts: [
      "Member of the Chase University faction on NXT",
      "Trained on the independent circuit before signing with WWE",
      "Part of the tag team with Kiana James before their split"
    ]
  },
  784: {
    facts: [
      "Real name is Sydney Zmrzel",
      "Fitness model and bodybuilder before joining WWE",
      "Portrayed the role of Maximum Male Models valet on SmackDown",
      "Former NCAA Division I track and field athlete",
      "Transitioned from a modeling character to an in-ring competitor on NXT"
    ]
  },
  892: {
    facts: [
      "Real name is Mike Halac",
      "Debuted in WWE in 1995 with a half-man half-bull gimmick",
      "Managed by Jim Cornette during part of his run",
      "Wore a bull headpiece to the ring as part of his entrance",
      "Considered one of the more unusual gimmicks of the mid-1990s WWF era",
      "Had a brief tenure in the company before being released"
    ]
  },
  894: {
    facts: [
      "Real name is Mike Droese",
      "Portrayed a garbage man character in the WWF during the mid-1990s",
      "Carried a trash can to the ring as part of his gimmick",
      "Drew number one in the 1996 Royal Rumble match",
      "Stood approximately 6 feet 6 inches tall",
      "Competed primarily from 1994 to 1996 in the WWF"
    ]
  },
  895: {
    facts: [
      "Real name is Rhonda Ann Sing",
      "Born on February 21 1961 and passed away on July 27 2001",
      "Also competed as Monster Ripper in All Japan Womens Pro Wrestling",
      "Managed by Harvey Wippleman in the WWF",
      "Won championships in Japan and was highly respected internationally",
      "Her WWF character was portrayed as Harvey Wipplemans girlfriend"
    ]
  },
  904: {
    facts: [
      "Real name is Matt Wiese",
      "Stood approximately 6 feet 4 inches tall and weighed around 270 pounds",
      "Played college football and had a tryout with the NFL",
      "Portrayed a bodyguard and enforcer role in WWE from 2003 to 2005",
      "Associated with SmackDown and worked closely in storylines with Kurt Angle"
    ]
  },
  907: {
    facts: [
      "Real name is Soleil Ruca",
      "Known for her athletic high-flying wrestling style on NXT",
      "Signature move is the Sol Snatcher a springboard splash",
      "Background in surfing which influences her character and persona",
      "California native with a laid-back surfer gimmick"
    ]
  },
  908: {
    facts: [
      "Competed on NXT as a high-flying athletic competitor",
      "Won the inaugural NXT Womens North American Championship in 2024",
      "Known for her acrobatic and agile in-ring style",
      "Trained at the WWE Performance Center in Orlando Florida"
    ]
  },
  914: {
    facts: [
      "Known for her sleepy and pajama-wearing character on NXT",
      "Competed on the independent circuit before signing with WWE",
      "Of Asian-American heritage",
      "Her character evolved from a narcoleptic gimmick to a more aggressive persona",
      "Trained at the WWE Performance Center"
    ]
  },
  915: {
    facts: [
      "Member of Chase University faction on NXT led by Andre Chase",
      "Known for her undersized but spirited underdog character",
      "Extremely young when she signed with WWE making her one of the youngest roster members",
      "Her character is an enthusiastic student at Chase University",
      "Has shown rapid improvement as an in-ring performer on NXT"
    ]
  },
  916: {
    facts: [
      "Real name is Andrew Boudreaux",
      "Leader of the Chase University faction on NXT",
      "His character is a passionate and animated college professor and coach",
      "Known for the Chase U catchphrase and leading crowd chants",
      "Competed on the independent circuit before joining WWE"
    ]
  },
  929: {
    legalIssues: [
      { year: "1992", incident: "Assault on Vince McMahon", details: "Kevin Wacholz choked Vince McMahon backstage at a WWF event which led to his immediate firing and a real-life assault charge" }
    ],
    facts: [
      "Real name is Kevin Wacholz",
      "Portrayed a convict character in the WWF in 1992",
      "His gimmick was that of a recently released prison inmate",
      "Feuded primarily with The Big Boss Man in a law enforcement vs convict rivalry",
      "Had a very short WWF tenure due to the backstage choking incident with Vince McMahon",
      "Previously wrestled as The Prisoner in the AWA"
    ]
  },
  930: {
    facts: [
      "Real name is Steve Keirn",
      "Portrayed a Florida Everglades alligator hunter character in the WWF",
      "Carried alligator claws and spit tobacco juice at opponents",
      "Before the Skinner gimmick he was one half of the Fabulous Ones tag team in Memphis and Florida",
      "His partner in the Fabulous Ones was Stan Lane",
      "Later became a trainer at the WWE Performance Center helping develop future talent",
      "Competed in the WWF from 1991 to 1993 as Skinner"
    ]
  },
  931: {
    facts: [
      "Real name is Mike Shaw",
      "Born on May 9 1957 and passed away on September 11 2010",
      "Previously competed as Makhan Singh in Stampede Wrestling and as Norman the Lunatic in WCW",
      "His WWF gimmick was an unkempt and grotesque character with poor hygiene",
      "Stood approximately 6 feet 2 inches and weighed over 350 pounds",
      "Had a memorable feud with Bam Bam Bigelow in 1993"
    ]
  },
  937: {
    facts: [
      "Real name is Kensuke Shinzaki",
      "Japanese wrestler who competed in the WWF in 1995",
      "His character was inspired by Japanese calligraphy and spiritual themes",
      "Known for painting kanji symbols on his face and body",
      "Had notable matches with Bret Hart in the WWF",
      "Went on to have a very successful career in Japan with All Japan Pro Wrestling",
      "His in-ring style combined traditional Japanese strong style with high-flying moves"
    ]
  },
  943: {
    facts: [
      "Real name is Nicole Bass",
      "Born on February 10 1964 and passed away on February 17 2018",
      "Stood approximately 6 feet 2 inches tall",
      "Professional bodybuilder who competed in the NPC and IFBB",
      "Appeared in the WWF in 1999 as a bodyguard for Sable and later Val Venis",
      "Also appeared on The Howard Stern Show multiple times"
    ]
  },
  951: {
    facts: [
      "Real name is Oleg Prudius",
      "Born on March 25 1979 in Kiev Ukraine",
      "Legitimate amateur wrestler and martial artist before joining WWE",
      "Competed in WWE from 2008 to 2011 primarily on SmackDown and ECW",
      "Known for his stiff and hard-hitting in-ring style"
    ]
  },
  981: {
    facts: [
      "Fitness competitor and athlete before joining WWE NXT",
      "Known for her powerful and athletic wrestling style",
      "Gained a strong fan following quickly during her time on NXT in 2022",
      "Dealt with injuries that kept her out of action for extended periods"
    ]
  },
  982: {
    facts: [
      "Real name is William DeMott",
      "Born on August 5 1966",
      "Best known for his WCW career as Hugh Morrus a member of the Dungeon of Doom",
      "His finishing move was the No Laughing Matter moonsault impressive for a man his size",
      "Later became a head trainer at the WWE Performance Center",
      "Also competed in WCW as Captain Rection during the Misfits in Action stable",
      "Resigned from his WWE training position in 2015 amid allegations of bullying trainees"
    ]
  },
  1006: {
    facts: [
      "Real name is Steve Lombardi",
      "Born on April 18 1961 in Brooklyn New York",
      "One of the most well-known enhancement talent in WWF/WWE history",
      "Spent over 20 years with the company from the 1980s through the 2000s",
      "Also appeared under other gimmicks including Abe Knuckleball Schwartz and Kim Chee the Kamala handler",
      "Despite his losing record he was beloved backstage and considered an invaluable worker",
      "Worked backstage as a road agent and producer after his in-ring career wound down"
    ]
  },
  1011: {
    spouses: [
      { name: "PJ Braun", years: "2014-2017", notes: "Fitness industry entrepreneur" }
    ],
    facts: [
      "Real name is Celeste Beryl Bonin",
      "Born on January 7 1986 in Houston Texas",
      "Won NXT season 3 in 2010 earning a WWE contract",
      "Won the WWE Divas Championship at WrestleMania 29 in 2013 in a match against AJ Lee",
      "Fitness model and bodybuilder who competed in NPC figure competitions",
      "Retired from wrestling in 2014 to pursue her fitness brand and supplement company",
      "Has been open about personal struggles and mental health advocacy"
    ]
  },
  // Batch 21 - Katana Chance to Persia Pirotta
  461: {
    facts: [
      "Real name is Katrina Catanzaro",
      "Born on August 3 1994 in Queens New York",
      "Stands 5 feet 1 inch tall",
      "Was a competitive cheerleader and gymnast before wrestling",
      "Previously performed on the independent circuit as Katrina before signing with WWE in 2019",
      "Won the NXT Womens Tag Team Championship with partner Kayden Carter"
    ]
  },
  462: {
    facts: [
      "Born on October 24 1992",
      "From Kalamazoo Michigan",
      "Played college basketball before transitioning to professional wrestling",
      "Signed with WWE in 2018 and developed in NXT",
      "Won the NXT Womens Tag Team Championship alongside Katana Chance"
    ]
  },
  497: {
    facts: [
      "Real name is Augusto Cesar Fernandez Ortiz",
      "Born on October 18 1997 in Madrid Spain",
      "Was a breakout star in the European independent wrestling scene performing as A-Kid",
      "Won the NXT UK Heritage Cup Championship at just 23 years old",
      "Known for a highly technical and high-flying hybrid wrestling style"
    ]
  },
  498: {
    facts: [
      "Real name is Benjamin Carter",
      "Born on November 3 1997 in Nottingham England",
      "Gained viral attention for matches in PROGRESS Wrestling and other UK promotions before signing with WWE",
      "Made a guest appearance on AEW television before ultimately signing with WWE in 2021",
      "Won the NXT Tag Team Championship with Axiom",
      "Known for an explosive high-flying style with remarkable agility"
    ]
  },
  519: {
    facts: [
      "Real name is Channing Lorenzo",
      "From Long Island New York",
      "Portrays a mobster-inspired character as an enforcer in the Family faction",
      "Signed with WWE in 2021 and trained at the WWE Performance Center",
      "Previously known as Channing Stacks Lorenzo before shortening his ring name to Stacks"
    ]
  },
  520: {
    facts: [
      "Born in 1997",
      "From a decorated amateur wrestling background",
      "He and his brother Brutus Creed are legitimate brothers in real life",
      "Won the NXT Tag Team Championship as part of the Creed Brothers",
      "Was a member of the Diamond Mine faction led by Roderick Strong",
      "Known for an intensely physical in-ring style"
    ]
  },
  521: {
    facts: [
      "Born in 1998",
      "Younger brother of Julius Creed and the two are real-life siblings",
      "Like his brother has a strong amateur wrestling pedigree",
      "Was part of the Diamond Mine faction in NXT",
      "Won the NXT Tag Team Championship alongside Julius as the Creed Brothers"
    ]
  },
  522: {
    facts: [
      "From the Atlanta Georgia area",
      "Has a background in track and field athletics and functional fitness",
      "Was the female member of the Diamond Mine faction in NXT",
      "Known for an aggressive submission-based wrestling style and exceptional physical conditioning",
      "Signed with WWE and trained at the Performance Center before debuting in 2021"
    ]
  },
  531: {
    facts: [
      "Born on July 10 1996 in Koshigaya Saitama Japan",
      "Stands 5 feet 2 inches tall",
      "Began training in professional wrestling at age 13 and debuted at just 15 years old",
      "Was a top star in the Japanese promotion Diana and held their world championship",
      "Signed with WWE in 2020 and competed in both NXT and NXT UK",
      "Returned to the Japanese wrestling scene after departing WWE"
    ]
  },
  607: {
    facts: [
      "Real name is Axel Tischer",
      "Born on September 21 1986 in Dresden Germany",
      "Was part of the SAnitY faction in NXT alongside Eric Young Killian Dain and Nikki Cross",
      "Later became a member of Imperium alongside Walter Marcel Barthel and Fabian Aichner in NXT UK",
      "Had a successful career on the German and European independent circuit under the name Axel Dieter Jr",
      "His father Axel Dieter was a well-known professional wrestler in Germany"
    ]
  },
  608: {
    facts: [
      "Real name is Marcel Reichwein",
      "Born on November 25 1990 in Germany",
      "Was a member of Imperium in NXT UK and NXT alongside Walter Alexander Wolfe and Fabian Aichner",
      "Had an extensive career in European wrestling before signing with WWE",
      "Known for a technical European style of wrestling"
    ]
  },
  673: {
    facts: [
      "Real name is Jessica Garza",
      "Born on February 14 1997",
      "From San Antonio Texas",
      "Was part of Legado del Fantasma faction in NXT alongside Santos Escobar",
      "Appeared on the Tough Enough reality competition series"
    ]
  },
  674: {
    facts: [
      "From England",
      "Competed primarily on NXT UK programming",
      "Was part of the UK independent wrestling scene before signing with WWE",
      "Released from her WWE contract when NXT UK was wound down"
    ]
  },
  679: {
    facts: [
      "Real name is Deborah Seal",
      "Born on June 14 1993 in Melbourne Australia",
      "Stands 5 feet 10 inches tall",
      "Has an Italian and Australian background which inspired her ring name",
      "Worked as a personal trainer and fitness model before her wrestling career",
      "Was released from WWE in 2022 and has since worked on the independent circuit"
    ]
  },
  // Batch 22 - Gallus to Fabian Aichner
  686: {
    facts: [
      "Born in Glasgow Scotland",
      "Known as the Iron King in NXT UK",
      "Part of the stable Gallus alongside his brother Mark Coffey and Wolfgang",
      "Trained at the Insane Championship Wrestling academy in Scotland",
      "Was a mainstay of the Scottish and British independent wrestling scene before signing with WWE"
    ]
  },
  687: {
    facts: [
      "Born in Glasgow Scotland",
      "Brother of Joe Coffey and fellow member of the Gallus stable",
      "Competed extensively on the Scottish independent scene before joining NXT UK",
      "Gallus operated as a dominant faction in NXT UK portraying tough Glasgow enforcers",
      "Trained alongside his brother at Insane Championship Wrestling in Scotland"
    ]
  },
  688: {
    facts: [
      "Born in Ayrshire Scotland",
      "The third member of the Gallus stable in NXT UK alongside Joe and Mark Coffey",
      "Known for his powerhouse style despite not being related to the Coffey brothers",
      "Was a prominent figure in Insane Championship Wrestling in Scotland before joining WWE",
      "Previously held the ICW World Heavyweight Championship"
    ]
  },
  912: {
    facts: [
      "Competed on NXT television in 2022 as a lower-card talent",
      "Portrayed a social media influencer character on NXT",
      "Was released from WWE after a relatively short stint on the NXT roster",
      "Based out of the WWE Performance Center in Orlando Florida"
    ]
  },
  933: {
    facts: [
      "The Max Moon gimmick was originally created for Konnan who briefly played the character in 1992",
      "The role was taken over by Paul Diamond after Konnan left the WWF",
      "The character wore an elaborate futuristic costume with arm-mounted pyrotechnics",
      "The costume reportedly cost over 100000 dollars to produce",
      "The gimmick involved a space-themed entrance with jetpack-like effects",
      "Paul Diamond had previously wrestled in the WWF as one half of Badd Company with Pat Tanaka"
    ]
  },
  934: {
    facts: [
      "Debuted at the 1990 Survivor Series by hatching from a giant egg in one of wrestlings most infamous segments",
      "The man inside the costume was veteran wrestler Hector Guerrero brother of Eddie Guerrero",
      "The segment is widely regarded as one of the worst gimmick reveals in WWE history",
      "The giant egg had been promoted for weeks on WWF television building enormous anticipation",
      "Mean Gene Okerlund danced with the Gobbledy Gooker in the ring after the reveal",
      "Hector Guerrero was a respected in-ring talent who took the role as a favor to the WWF"
    ]
  },
  940: {
    facts: [
      "Real name is Peter Joseph Polaco born November 1 1973 in Hartford Connecticut",
      "The Aldo Montoya character was a Portuguese wrestler who wore a yellow jockstrap as a face mask",
      "The jockstrap mask became one of the most ridiculed gimmick accessories in WWF history",
      "After leaving the WWF he reinvented himself as Justin Credible and became a main eventer in ECW",
      "Won the ECW World Heavyweight Championship in 2000",
      "Was trained by Killer Kowalski at his wrestling school in Massachusetts"
    ]
  },
  983: {
    facts: [
      "Born November 30 1973 in Mito Ibaraki Japan",
      "Became famous for his brutal hardcore matches in ECW against Mike Awesome",
      "His rivalry with Mike Awesome is considered one of the greatest feuds in ECW history",
      "Competed briefly in the WWF and appeared in the 2001 Royal Rumble match",
      "Known for his incredible toughness and ability to absorb punishment in extreme matches",
      "Had a long career in Japan wrestling for promotions including ZERO1 and Pro Wrestling NOAH",
      "Won multiple championships in Japan including the ZERO1 World Heavyweight Championship"
    ]
  },
  1003: {
    facts: [
      "Real name is Zivile Raudoniene born in Alytus Lithuania",
      "Won the 2009 WWE Diva Search competition",
      "One of the few Lithuanian-born performers in WWE history",
      "Had an on-screen romantic storyline with Goldust on WWE television",
      "Also had an on-screen relationship angle with Antonio Cesaro",
      "Competed in WWE from 2009 to 2014 before being released"
    ]
  },
  1007: {
    facts: [
      "Born in St. Petersburg Florida on November 21 1962",
      "Famous for his self-congratulatory habit of patting himself on the back which became his signature mannerism",
      "Spent most of his career as enhancement talent putting over other wrestlers in the WWF and WCW",
      "Had a memorable underdog storyline in 1995 where he finally won a match on WWF television to a big crowd reaction",
      "Defeated Skip of the Bodydonnas in his most notable WWF victory",
      "Wore suspenders with a Star of David as part of his ring attire",
      "Was a competent technical wrestler respected backstage despite his role as a jobber"
    ]
  },
  1013: {
    facts: [
      "Real name is Kenneth Maurice Johnson born in Houston Texas",
      "Known as the Doctor of Style he was one of the most charismatic managers in WWF history",
      "Managed notable wrestlers including Akeem the Twin Towers Kamala and the Warlord",
      "Was an ordained minister and occasionally performed wedding ceremonies",
      "After leaving wrestling he pursued a career in ministry full time",
      "Known for his flamboyant suits and smooth-talking personality as a heel manager",
      "Also released a music single called Jive Soul Bro which became a minor WWF novelty hit"
    ]
  },
  614: {
    facts: [
      "French professional wrestler who competed in NXT UK",
      "One of the few French female wrestlers to sign with WWE",
      "Competed on the NXT UK brand from 2020 to 2022",
      "Brought a hard-hitting European style to the NXT UK womens division"
    ]
  },
  615: {
    facts: [
      "Real name is Jinny Majid of British and Malaysian heritage",
      "Known as the Fashionista on the British independent scene before joining NXT UK",
      "Was one of the top female performers on the UK independent circuit before signing with WWE",
      "Competed in NXT UK from 2018 through its closure",
      "Known for her fashion-forward persona and confident heel character",
      "Was a regular competitor in PROGRESS Wrestling and other major UK promotions"
    ]
  },
  609: {
    facts: [
      "Born December 24 1990 in Bolzano South Tyrol Italy",
      "Competed in NXT and NXT UK representing Italy as Fabian Aichner",
      "Was a standout athlete who competed in bobsled before transitioning to professional wrestling",
      "Formed a successful tag team with Marcel Barthel in NXT UK",
      "Trained at the WWE Performance Center after being signed through a European tryout",
      "Known for impressive athleticism and power moves including a springboard moonsault despite his muscular build"
    ]
  },

  837: { // Mr. Fuji
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Born Harry Fujiwara in Honolulu Hawaii', 'Five-time WWF Tag Team Champion as a wrestler with Professor Toru Tanaka and Mr. Saito', 'Managed Yokozuna to two WWF Championship reigns', 'Known for throwing ceremonial salt into opponents eyes as both a wrestler and manager', 'Passed away in August 2016 at age 82'],
  },
  1022: { // Buddy Rogers
    spouses: [{ name: 'Multiple marriages', years: '1940s-1992', notes: 'Details of personal life kept private during his era' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['First-ever WWWF World Heavyweight Champion in 1963', 'His strutting showman persona directly inspired Ric Flair who adopted the Nature Boy name', 'Lost the WWWF title to Bruno Sammartino in just 48 seconds', 'One of the biggest box office draws in wrestling during the 1950s and 1960s', 'Passed away on June 26 1992 at age 71 from multiple strokes'],
  },
  1023: { // Bob Orton Jr.
    spouses: [{ name: 'Elaine Orton', years: '1970s-present', notes: 'Mother of Randy Orton' }],
    children: [{ name: 'Randy Orton', born: '1980', notes: 'WWE Hall of Famer and 14-time world champion' }],
    legalIssues: [],
    announcing: [],
    facts: ['Third-generation wrestler - father Bob Orton Sr. and son Randy Orton both competed in WWE', 'Wore an arm cast as a weapon for so long that it became his permanent gimmick in the WWF', 'Inducted into the WWE Hall of Fame in 2005 by his son Randy', 'Was in Roddy Pipers corner at the main event of the first WrestleMania'],
  },
  1024: { // Rocky Johnson
    spouses: [{ name: 'Ata Maivia', years: '1978-2003', notes: 'Daughter of Peter Maivia and mother of Dwayne The Rock Johnson' }],
    children: [{ name: 'Dwayne The Rock Johnson', born: '1972', notes: 'Became one of the biggest wrestling and Hollywood stars in history' }],
    legalIssues: [],
    announcing: [],
    facts: ['Father of Dwayne The Rock Johnson', 'With Tony Atlas became first Black tag team to win the WWF Tag Team Championship in 1983', 'Son-in-law of High Chief Peter Maivia', 'Part of the legendary Anoa i Samoan wrestling dynasty through marriage', 'Passed away on January 15 2020 at age 75'],
  },
  1025: { // Tony Atlas
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Competed as a professional bodybuilder winning multiple titles', 'First Black tag team champion in WWF history alongside Rocky Johnson', 'Returned to WWE decades later as a comedic character and manager', 'His distinctive booming laugh became one of his most recognizable traits', 'Struggled with homelessness and substance abuse after his initial wrestling career'],
  },
  1026: { // Bobo Brazil
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One of the most important pioneers for Black wrestlers in professional wrestling history', 'Main-evented during an era of widespread racial segregation in America', 'His finishing move the Coco Butt was a powerful headbutt', 'First Black wrestler to win a recognized world championship in North America', 'Inducted into the WWE Hall of Fame in 1994 as part of the inaugural class', 'Passed away on January 20 1998 at age 73'],
  },
  1027: { // Larry Zbyszko
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [{ role: 'Color Commentator', show: 'WCW Monday Nitro', years: '1999-2001', notes: 'Called matches during the Monday Night Wars era' }],
    facts: ['Turned on his mentor Bruno Sammartino in one of wrestlings most famous betrayals', 'Their feud drew a record crowd of over 36000 to Shea Stadium in August 1980', 'Son-in-law of Verne Gagne', 'Claimed the self-given title of The Living Legend after turning on Bruno', 'Had a successful career in AWA and WCW after leaving the WWF'],
  },
  1028: { // Ernie Ladd
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Played professional football for the San Diego Chargers Houston Oilers and Kansas City Chiefs', 'At six feet nine inches was one of the tallest wrestlers of his era', 'One of the first major professional athletes to cross over from football to wrestling', 'Became a civil rights activist after retiring from wrestling', 'Inducted into the WWE Hall of Fame in 1995', 'Passed away on March 10 2007 at age 68 from colon cancer'],
  },
  1029: { // Ken Patera
    spouses: [],
    children: [],
    legalIssues: [{ year: '1984', incident: 'Arrested after McDonalds incident', details: 'Threw a boulder through a McDonalds window in Waukesha Wisconsin after being refused service. Led to a violent confrontation with police officers. Served two years in prison.' }],
    announcing: [],
    facts: ['Competed in the 1972 Munich Olympics as a weightlifter', 'Could bench press over 500 pounds and was one of the strongest men in wrestling', 'Won the WWF Intercontinental Championship from Pat Patterson in 1980', 'Returned to the WWF as a babyface in 1987 after serving prison time', 'Was trained by Verne Gagne in the AWA'],
  },
  1030: { // Ivan Putski
    spouses: [],
    children: [{ name: 'Scott Putski', born: '1966', notes: 'Also competed in professional wrestling' }],
    legalIssues: [],
    announcing: [],
    facts: ['Born Jozef Bednarski in Krakow Poland', 'His Polish Power gimmick made him extremely popular with Polish-American fans', 'Won the WWF Tag Team Championship with Tito Santana in 1979', 'Known for his incredible physique that rivaled any bodybuilder of his era'],
  },
  1031: { // Tony Garea
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Born in Auckland New Zealand', 'Five-time WWF Tag Team Champion with four different partners making him one of the most decorated tag team wrestlers in early WWF history', 'Worked as a WWF road agent and producer for decades after retiring from active competition', 'Partners included Haystacks Calhoun Dean Ho Larry Zbyszko Peter Maivia and Rick Martel'],
  },
  1032: { // Professor Toru Tanaka
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Born Charles Kalani Jr. in Honolulu Hawaii - was actually of Hawaiian descent not Japanese', 'Three-time WWWF Tag Team Champion with Mr. Fuji', 'Known for throwing ceremonial salt into opponents eyes before matches', 'Also had a career in Hollywood appearing in several films', 'Passed away on August 22 2000 at age 70'],
  },
  1033: { // Arnold Skaaland
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Managed both Bruno Sammartino and Bob Backlund during their legendary WWWF/WWF Championship reigns', 'Threw in the towel when the Iron Sheik had Bob Backlund in the camel clutch ending Backlunds nearly six-year championship reign', 'Started as a wrestler known as The Golden Boy before becoming a manager', 'Was one of the most trusted figures in the WWWF organization for decades', 'Inducted into the WWE Hall of Fame in 1994', 'Passed away on September 14 2007 at age 83'],
  },
  1034: { // Bam Bam Bigelow
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Despite weighing nearly 400 pounds could perform moonsaults cartwheels and other agile maneuvers', 'His flame-tattooed head made him one of the most visually distinctive wrestlers ever', 'Main-evented WrestleMania XI against NFL star Lawrence Taylor', 'In 2000 rescued three children from a burning building suffering second-degree burns', 'Passed away on January 19 2007 at age 45'],
  },
  1035: { // Kerry Von Erich
    spouses: [{ name: 'Catherine Dunn', years: '1985-1992', notes: 'Married until his passing' }],
    children: [{ name: 'Lacey Von Erich', born: '1986', notes: 'Briefly competed in TNA/Impact Wrestling' }],
    legalIssues: [{ year: '1992', incident: 'Drug possession charges', details: 'Faced charges related to substance abuse issues that plagued the Von Erich family' }],
    announcing: [],
    facts: ['Most charismatic member of the legendary Von Erich wrestling family', 'Lost his right foot in a 1986 motorcycle accident but kept it secret from fans and most wrestlers', 'Won the NWA World Heavyweight Championship from Ric Flair in 1984 at Texas Stadium', 'Tragically took his own life on February 18 1993 at age 33', 'The Von Erich family has been called the most tragic family in wrestling history'],
  },
  1036: { // The Dynamite Kid
    spouses: [{ name: 'Michelle Smadu', years: '1984-1991', notes: 'Married during his WWF run' }],
    children: [{ name: 'Bronwyne Billington', born: '1985', notes: 'Born during the British Bulldogs peak' }],
    legalIssues: [],
    announcing: [],
    facts: ['Widely considered one of the most influential in-ring performers in wrestling history', 'His matches against Tiger Mask in New Japan revolutionized the junior heavyweight style', 'Won the WWF Tag Team Championship with cousin Davey Boy Smith at WrestleMania 2', 'Steroid abuse and a punishing wrestling style left him wheelchair-bound in his final years', 'Passed away on his 60th birthday December 5 2018', 'His style directly influenced Shawn Michaels Chris Benoit and Daniel Bryan'],
  },
  1041: { // Virgil
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Real name Michael Jones from Brooklyn New York', 'His babyface turn against Ted DiBiase at the 1991 Royal Rumble was a huge crowd moment', 'Won the Million Dollar Championship from DiBiase at SummerSlam 1991', 'Became an internet meme in later years for selling autographs and photos at conventions', 'Also wrestled in WCW as Vincent and in TNA as Curly Bill'],
  },
  1042: { // Hercules Hernandez
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One of the most muscular wrestlers of the 1980s Golden Era', 'Member of Bobby Heenans Family of wrestlers', 'Feuded with Billy Jack Haynes in a full nelson challenge at WrestleMania III', 'Formed Power and Glory tag team with Paul Roma', 'His contract was sold by Heenan to Ted DiBiase leading to his face turn', 'Passed away on March 6 2004 at age 47 from heart disease'],
  },
  1043: { // One Man Gang
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Weighed approximately 450 pounds during his peak', 'Runner-up in the first King of the Ring tournament in 1988 losing to Ted DiBiase', 'Infamously repackaged from a biker brawler into Akeem the African Dream', 'Formed the Twin Towers tag team with Big Boss Man managed by Slick', 'Also competed in WCW and various independent promotions'],
  },
  1044: { // Jacques Rougeau
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Member of the legendary Rougeau wrestling family of Montreal Quebec', 'Had two distinct successful personas - The Mountie and half of The Quebecers', 'Won the Intercontinental Championship from Bret Hart in January 1992', 'Three-time WWF Tag Team Champion as one half of The Quebecers', 'Used a shock stick cattle prod as The Mountie to incapacitate opponents', 'The Fabulous Rougeaus heel theme All American Boys was ahead of its time'],
  },
  1045: { // Raymond Rougeau
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [{ role: 'French-Language Commentator', show: 'WWF/WWE Canadian broadcasts', years: '1990-2002', notes: 'Became lead French-language commentator for WWE in Canada after retiring from in-ring competition' }],
    facts: ['Elder brother of Jacques Rougeau and part of the Rougeau wrestling dynasty', 'Retired from active wrestling in 1990 to become a French-language commentator', 'The Fabulous Rougeaus brilliantly turned heel singing All American Boys while being French-Canadian', 'The Rougeau family has produced multiple generations of professional wrestlers in Quebec'],
  },
  1046: { // Lanny Poffo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Brother of Randy Macho Man Savage', 'Had two distinct personas - the beloved Leaping Lanny Poffo and the heel intellectual The Genius', 'As Leaping Lanny would throw frisbees with poems written on them to the crowd before matches', 'As The Genius wore a graduation cap and managed Mr. Perfect', 'Was extremely loyal to his brother Randy - left WCW when they would not also sign Randy', 'Passed away on February 2 2023 at age 68'],
  },

  710: { // Typhoon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Real name Fred Ottman from Tampa Florida', 'Originally debuted as Tugboat a friendly sailor character allied with Hulk Hogan', 'Turned heel and became Typhoon forming the Natural Disasters with Earthquake', 'Won the WWF Tag Team Championship with Earthquake from Money Inc.', 'Infamously appeared in WCW as The Shockmaster tripping and falling through a wall on live TV in one of wrestlings most embarrassing moments'],
  },
  1047: { // Ronnie Garvin
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Won the NWA World Heavyweight Championship from Ric Flair in 1987', 'Known as Hands of Stone for his devastating punches', 'Had a memorable feud with Greg Valentine including a submission match series', 'Served as a ringside official in the WWF for a brief period', 'Born in Montreal Quebec Canada despite his American gimmick'],
  },
  1049: { // Ron Bass
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Carried a bullwhip named Miss Betsy to the ring', 'Infamously attacked Brutus Beefcake with his spurs leaving him bloodied which was a very controversial angle for its time', 'A legitimate tough guy from Texas', 'Had success in multiple territories before coming to the WWF', 'Passed away on January 7 2017 at age 68'],
  },
  1050: { // B. Brian Blair
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of the Killer Bees tag team with Jim Brunzell', 'The teams mask-switching strategy was one of the most memorable gimmicks of the 1980s', 'Had a singles run in the WWF before forming the Bees', 'Was involved in politics in the Tampa Bay area after his wrestling career', 'Named after the B. Brian Blair character but his real first name is Brian'],
  },
  1051: { // Jim Brunzell
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Known for having one of the best dropkicks in wrestling history', 'Previously teamed with Greg Gagne as the High Flyers in the AWA', 'One half of the Killer Bees with B. Brian Blair', 'The Killer Bees were one of the most popular tag teams of the mid-1980s WWF', 'Competed in the first ever WrestleMania in a tag team match'],
  },
  1052: { // Butch Reed
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['His nickname The Natural referred to his bleached-blond hair which was obviously dyed', 'Later formed the successful tag team Doom with Ron Simmons in WCW', 'Managed by Slick during his WWF run', 'Was a former Mid-South Wrestling standout before joining the WWF', 'Passed away on February 5 2021 at age 66'],
  },
  1053: { // Bart Gunn
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Three-time WWF Tag Team Champion as one half of the Smoking Gunns with Billy Gunn', 'Won the infamous Brawl for All legitimate toughman tournament in 1998', 'Was brutally knocked out by Butterbean in 35 seconds at WrestleMania XV', 'The Brawl for All was considered one of the worst ideas in WWF history', 'Also competed in Japan as Mike Barton after leaving the WWF'],
  },
  1054: { // The Patriot
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Real name Del Wilkes from Columbia South Carolina', 'Challenged Bret Hart for the WWF Championship at In Your House Ground Zero in 1997', 'His patriotic gimmick was a perfect foil for the anti-American Hart Foundation', 'Career was cut tragically short by severe spinal injuries', 'Was more successful in All Japan Pro Wrestling than in his brief WWF run', 'Passed away on June 1 2017 at age 59'],
  },
  1055: { // Henry O. Godwinn
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['His ring name was a play on words - H.O.G. (Henry O. Godwinn)', 'Famously slopped Triple H with pig slop leading to a memorable feud', 'Two-time WWF Tag Team Champion with Phineas', 'Real name Mark Canterbury from Bitters Arkansas', 'The Godwinns pig farmer gimmick was one of the most memorable comedy acts of the New Generation era'],
  },
  1056: { // Mideon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Had two vastly different WWE personas - the comedic Phineas I. Godwinn and the dark Mideon', 'Was brainwashed by The Undertaker in a memorable storyline transformation into Mideon', 'Two-time WWF Tag Team Champion as one of the Godwinns', 'His final gimmick Naked Mideon saw him wandering backstage with minimal clothing', 'Real name Dennis Knight'],
  },
  1057: { // Samu
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Son of Afa of the Wild Samoans and nephew of Sika', 'Part of the legendary Anoa i Samoan wrestling family that includes Roman Reigns The Rock and The Usos', 'Won the WWF Tag Team Championship as one of the Headshrinkers with Fatu who later became Rikishi', 'The Headshrinkers gimmick was a tribute to the original Wild Samoans', 'Also competed in WCW and various independent promotions'],
  },
  1058: { // Rockin Robin
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Won the WWF Womens Championship from Sensational Sherri in October 1988', 'Was the last recognized WWF Womens Champion before the title was deactivated in 1990', 'Daughter of wrestler Grizzly Smith', 'Sister of Jake The Snake Roberts and Sam Houston though these connections were not mentioned on TV', 'Her entrance theme was a cover of Bobby Days Rockin Robin'],
  },
  1059: { // Terry Funk
    spouses: [{ name: 'Vicki Funk', years: '1965-2023', notes: 'Married until his passing in 2023' }],
    children: [{ name: 'Brandee Funk', born: '1970s', notes: 'Daughter' }],
    legalIssues: [],
    announcing: [{ role: 'Color Commentator', show: 'WWF', years: '1985-1986', notes: 'Provided commentary during his first WWF stint' }],
    facts: ['Competed in professional wrestling for over 50 years across every major promotion', 'Won the NWA World Heavyweight Championship from Harley Race in 1975', 'Returned to WWF as Chainsaw Charlie teaming with Cactus Jack', 'Retired and unretired more times than any other wrestler in history', 'The Funks ranch in Amarillo Texas was the family wrestling territory', 'Passed away on August 23 2023 at age 79', 'Brother of Dory Funk Jr. and son of Dory Funk Sr.'],
  },
  1060: { // Mike Awesome
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Was ECW World Heavyweight Champion before controversially jumping to WCW while still holding the title', 'Despite being an incredibly talented big man was given comedy gimmicks in WCW and WWE', 'Known for his Awesome Bomb powerbomb and his suicide dives despite weighing over 280 pounds', 'Had a brief WWE run during the Invasion angle', 'Passed away on February 17 2007 at age 42'],
  },
  1061: { // Shane Douglas
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Best known as The Franchise of ECW', 'His WWF run as Dean Douglas with a professor gimmick was widely considered a waste of his talent', 'Won the Intercontinental Championship from Shawn Michaels in October 1995 but was made to forfeit it the same night', 'Threw down the NWA World Title in 1994 to crown himself ECW Champion in a legendary moment', 'Real name Troy Martin from Pittsburgh Pennsylvania'],
  },
  1064: { // Rick Steiner
    spouses: [],
    children: [{ name: 'Bron Breakker', born: '1998', notes: 'WWE NXT Champion and rising star whose real name is Bronson Rechsteiner' }],
    legalIssues: [],
    announcing: [],
    facts: ['One half of the Steiner Brothers with his younger brother Scott', 'The Steiner Brothers were considered one of the most legitimately tough tag teams in wrestling history', 'Won the WWF Tag Team Championship from Money Inc. in 1993', 'His son Bron Breakker became NXT Champion carrying on the family legacy', 'Also known as The Dog-Faced Gremlin', 'Had extensive careers in both the WWF and WCW'],
  },
  1065: { // Luke Gallows
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Had multiple WWE personas including Festus a mentally impaired character who went berserk at the ring bell', 'Was a member of CM Punks Straight Edge Society', 'Also briefly appeared as Fake Kane', 'Founded The Good Brothers tag team with Karl Anderson through their Bullet Club connection', 'Won the Raw Tag Team Championship with Karl Anderson in 2017', 'One of the tallest tag team specialists in modern WWE at nearly seven feet tall'],
  },
  1066: { // Karl Anderson
    spouses: [{ name: 'Christine Bui Allegra', years: '2018-present', notes: 'Married after his time in Japan' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['A founding member of the Bullet Club in New Japan Pro-Wrestling', 'Known as The Machine Gun from his time in Japan where he was a major star', 'Won the Raw Tag Team Championship with Luke Gallows in WWE', 'Came to WWE in 2016 alongside Gallows to align with AJ Styles forming The Club', 'Also competed in TNA/Impact Wrestling as part of The Good Brothers'],
  },
  1067: { // Paul Roma
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Was one half of the Young Stallions with Jim Powers in the late 1980s', 'Formed Power and Glory with Hercules Hernandez', 'Controversially became a member of the Four Horsemen in WCW which was widely criticized by fans', 'His Power and Glory team had one of the most devastating tag finishers of the era', 'Also had a brief stint in WCW as a singles competitor'],
  },
  1068: { // Rosey
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Brother of Umaga and member of the Anoa i Samoan wrestling dynasty', 'Debuted as part of Three Minute Warning with Jamal enforcing for Eric Bischoff', 'Was repackaged as a Super Hero in Training mentored by The Hurricane', 'Won the World Tag Team Championship with The Hurricane', 'Passed away on April 17 2017 at age 47 from congestive heart failure'],
  },
  1070: { // Kalisto
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Two-time United States Champion defeating Alberto Del Rio both times', 'Teamed with Sin Cara as the Lucha Dragons', 'Led the Lucha House Party faction on the main roster', 'Known for his Salida del Sol finisher which is a modified stunner', 'Previously competed on the independent circuit as Samuray del Sol', 'Won the NXT Tag Team Championship with Sin Cara'],
  },
  1071: { // Scott Dawson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of The Revival with Dash Wilder considered one of the best tag teams of their generation', 'Two-time NXT Tag Team Champions and won both the Raw and SmackDown Tag Team Championships', 'Called themselves the Top Guys and Say Yeah became their catchphrase', 'After leaving WWE they became FTR in AEW winning tag titles in multiple promotions worldwide', 'Their old-school tag team style was praised as the best in modern wrestling'],
  },

  1072: { // Dash Wilder
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of The Revival widely considered one of the best tag teams of their generation', 'Won tag team championships in NXT Raw and SmackDown', 'After leaving WWE became Dax Harwood of FTR winning tag titles in AEW ROH AAA and NJPW', 'Suffered a broken jaw during a match in NXT', 'Their catchphrase Say Yeah and Top Guys moniker became iconic'],
  },
  1073: { // Akam
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Born Sunny Dhinsa of Indian-Canadian descent', 'One half of the Authors of Pain originally managed by Paul Ellering', 'Won tag team championships in both NXT and on the main roster', 'Was briefly managed by Drake Maverick after Paul Ellering was separated from the team', 'Suffered a torn ACL in 2019 that kept him out for several months'],
  },
  1074: { // Rezar
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Born Gzim Selmani of Albanian descent', 'One half of the Authors of Pain with Akam', 'Won tag team championships in NXT and on the main roster', 'A torn pectoral muscle in 2020 effectively ended his full-time WWE career', 'Was one of the largest and most physically imposing tag team specialists in NXT history'],
  },
  1075: { // Erik
    spouses: [{ name: 'Sarah Logan', years: '2018-present', notes: 'Fellow WWE wrestler - member of the Riott Squad' }],
    children: [{ name: 'Raymond Cash Rowe', born: '2021', notes: 'Born during his WWE career' }],
    legalIssues: [],
    announcing: [],
    facts: ['Formerly known as Rowe as part of War Machine and War Raiders before becoming Viking Raiders', 'Won tag team championships across NXT Raw and SmackDown', 'Married to fellow WWE wrestler Sarah Logan', 'The Viking Raiders name change from War Raiders initially drew fan criticism', 'Known for his incredible power and hard-hitting style'],
  },
  1076: { // Montez Ford
    spouses: [{ name: 'Bianca Belair', years: '2018-present', notes: 'Fellow WWE wrestler and multiple-time womens champion' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['A former United States Marine before entering professional wrestling', 'Married to Bianca Belair making them one of WWEs most prominent power couples', 'Known for his incredible frog splash and athletic ability', 'Won tag team championships in NXT Raw and SmackDown with Angelo Dawkins', 'Widely considered a future singles world champion due to his charisma and athleticism'],
  },
  1077: { // Angelo Dawkins
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['A former standout football player before joining WWE', 'One of the longest-tenured NXT developmental wrestlers before breaking through with the Street Profits', 'Won tag team championships in NXT Raw and SmackDown with Montez Ford', 'Known for his red Solo cup and We Want the Smoke catchphrase', 'His infectious personality and crowd connection made the Street Profits fan favorites'],
  },
  1079: { // Darren Young
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Made history in 2013 as the first openly gay active professional wrestler in a major promotion', 'An original member of The Nexus from Season 1 of NXT', 'Won the WWE Tag Team Championship with Titus O Neil as the Prime Time Players', 'Had a brief push with legendary Bob Backlund as his life coach', 'Real name Frederick Rosser - continues to wrestle on the independent circuit'],
  },
  1081: { // Alicia Fox
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One of the longest-tenured female competitors in WWE history with over a decade of service', 'First African-American Divas Champion winning from Melina in 2010', 'Known for her incredible Northern Lights suplex and unpredictable personality', 'Also served as a backstage interviewer and WWE ambassador', 'Her trademark move was a spinning scissors kick'],
  },
  1082: { // Kelly Kelly
    spouses: [{ name: 'Sheldon Souray', years: '2016-present', notes: 'Former NHL player' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Real name Barbara Jean Blank - entered WWE as a model with minimal wrestling training', 'Debuted on the rebooted ECW on Sci-Fi in 2006', 'Won the Divas Championship from Brie Bella in 2011', 'Improved dramatically from her debut to become a credible in-ring competitor', 'Was one of the most popular Divas of her era and appeared in multiple Royal Rumble matches'],
  },
  1083: { // Billie Kay
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Australian wrestler who formed The IIconics with real-life best friend Peyton Royce', 'Won the WWE Womens Tag Team Championship at WrestleMania 35', 'Her resume-handing gimmick after The IIconics split was a comedic highlight of WWE programming', 'Trained at the Lance Storm Wrestling Academy', 'Her comedic timing and obnoxious heel persona made her one of the most entertaining performers in the womens division'],
  },
  1084: { // Peyton Royce
    spouses: [{ name: 'Shinsuke Nakamura', years: '2021-present', notes: 'Fellow WWE wrestler and former multi-time champion' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Australian wrestler who formed The IIconics with real-life best friend Billie Kay', 'Won the WWE Womens Tag Team Championship at WrestleMania 35', 'Married to fellow WWE wrestler Shinsuke Nakamura', 'Continued wrestling after WWE as Cassie Lee in various promotions', 'Was considered the more in-ring focused half of The IIconics'],
  },
  1085: { // Tucker
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['A former amateur wrestler who played the cerebral half of Heavy Machinery with Otis', 'Known for his surprising agility despite his large frame', 'Turned heel by betraying Otis and costing him the Money in the Bank contract', 'The Heavy Machinery team was beloved for their Steaks and Weights catchphrase', 'Real name Levi Cooper from the state of Minnesota'],
  },
  1086: { // Cedric Alexander
    spouses: [{ name: 'Big Swole', years: '2017-present', notes: 'Fellow professional wrestler whose real name is Aerial Monroe' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Won the Cruiserweight Championship from Mustafa Ali at WrestleMania 34', 'Was one of the top stars of 205 Live', 'Later joined The Hurt Business stable with Bobby Lashley MVP and Shelton Benjamin', 'Known for his incredible athleticism including his Lumbar Check finisher', 'Competed in the original Cruiserweight Classic tournament'],
  },
  1087: { // Buddy Murphy
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Australian wrestler known as the Best Kept Secret for his incredible in-ring ability', 'Won the Cruiserweight Championship and held it for over nine months', 'Had memorable feuds with Roman Reigns and Daniel Bryan on SmackDown', 'Became one of Seth Rollins disciples during the Monday Night Messiah storyline', 'Previously teamed with Wesley Blake as Blake and Murphy in NXT'],
  },
  1088: { // Kenny Dykstra
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Was one of the youngest wrestlers on the WWE roster during his tenure', 'Member of the Spirit Squad cheerleader stable that won the World Tag Team Championship', 'Was repackaged as the more serious Kenny Dykstra after the Spirit Squad disbanded', 'Had a real-life relationship with Mickie James that was incorporated into a storyline', 'Also competed on the independent circuit after leaving WWE'],
  },
  1091: { // Blair Davenport
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['British wrestler who previously competed as Bea Priestley in various promotions', 'Had a notable rivalry with Meiko Satomura in NXT UK', 'Suffered a broken leg during an NXT UK match that sidelined her for months', 'Known for her aggressive heel style and calculating villainous persona', 'Made her name in the UK and Japanese independent wrestling scenes before joining WWE'],
  },
  1092: { // Ethan Page
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Canadian wrestler who competed in Impact Wrestling and AEW before joining WWE', 'Won the NXT Championship establishing himself as the top heel in the brand', 'Known for his All Ego persona combining size athleticism and promo ability', 'Previously teamed with Scorpio Sky as The Men of the Year in AEW', 'His YouTube vlog series was popular among wrestling fans'],
  },
  1095: { // Kit Wilson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of Pretty Deadly with Elton Prince', 'Won the NXT UK Tag Team Championship before moving to NXT', 'Two-time NXT Tag Team Champions', 'Their flamboyant narcissistic characters and comedic timing made them unique in the tag division', 'Known for their elaborate and theatrical ring entrances'],
  },
  1096: { // Elton Prince
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of Pretty Deadly with Kit Wilson', 'Won the NXT UK Tag Team Championship before moving to NXT', 'Two-time NXT Tag Team Champions', 'Their self-obsessed pretty boy gimmick was one of the most entertaining acts in NXT', 'Originally competed in NXT UK before the brand merged into NXT'],
  },

  1097: { // Drake Maverick
    spouses: [{ name: 'Renee Michelle', years: '2019-present', notes: 'Fellow professional wrestler - their wedding was featured on WWE TV' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Previously known as Rockstar Spud in TNA/Impact Wrestling', 'His emotional promo after being released during COVID-19 cuts went viral and led to him being re-signed through the NXT Cruiserweight Championship tournament', 'Served as General Manager of 205 Live', 'Also managed the Authors of Pain on the main roster', 'His wedding was used as a comedic storyline on WWE TV with R-Truth crashing it to win the 24/7 Championship'],
  },
  1098: { // Shad Gaspard
    spouses: [{ name: 'Siliana Gaspard', years: '2009-2020', notes: 'Married until his passing' }],
    children: [{ name: 'Aryeh Gaspard', born: '2010', notes: 'Shad sacrificed his life to save Aryeh from drowning' }],
    legalIssues: [],
    announcing: [],
    facts: ['Died heroically on May 17 2020 when he instructed lifeguards to save his 10-year-old son first as they were caught in a riptide off Venice Beach', 'Posthumously received the Warrior Award at the WWE Hall of Fame ceremony in 2022', 'Was a competitive bodybuilder and trained MMA fighter', 'After leaving WWE he worked as an actor and personal trainer', 'His act of selfless heroism was widely praised and he was recognized by the City of Los Angeles'],
  },
  1099: { // Nick Bockwinkel
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Four-time AWA World Heavyweight Champion', 'Managed by the legendary Bobby Heenan throughout most of his career', 'Known for his sophisticated vocabulary and articulate interview style', 'His father Warren Bockwinkel was also a professional wrestler', 'Considered one of the greatest technical wrestlers and talkers in wrestling history', 'Passed away on November 14 2015 at age 80'],
  },
  1100: { // Verne Gagne
    spouses: [{ name: 'Mary Gagne', years: '1953-2015', notes: 'Married until his passing' }],
    children: [{ name: 'Greg Gagne', born: '1948', notes: 'Also competed as a professional wrestler in the AWA' }],
    legalIssues: [{ year: '2009', incident: 'Nursing home incident', details: 'While suffering from dementia and Alzheimers disease he was involved in an altercation at his nursing home that resulted in another residents death - no charges were filed due to his mental state' }],
    announcing: [],
    facts: ['Founded the American Wrestling Association in 1960', 'Ten-time AWA World Heavyweight Champion', 'His training camp produced many future legends including Ric Flair The Iron Sheik Sgt. Slaughter Ricky Steamboat and many more', 'Was a two-time NCAA wrestling champion at the University of Minnesota', 'Also competed in the 1948 Olympic Trials', 'Passed away on April 27 2015 at age 89 after battling Alzheimers disease'],
  },
  1101: { // Antonio Inoki
    spouses: [{ name: 'Mitsuko Inoki', years: '1971-1987', notes: 'First marriage' }, { name: 'Multiple subsequent marriages', years: '1988-2022', notes: 'Married several more times' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Founded New Japan Pro-Wrestling in 1972 making it the largest wrestling promotion in Japan', 'His 1976 match against Muhammad Ali is considered a precursor to modern mixed martial arts', 'Served as a member of the Japanese House of Councillors from 1989 to 2019', 'His trademark finishing move was the enzuigiri kick', 'His chin was one of the most recognizable physical features in all of sports', 'Passed away on October 1 2022 at age 79'],
  },
  1102: { // Abdullah the Butcher
    spouses: [],
    children: [],
    legalIssues: [{ year: '2014', incident: 'Lawsuit over hepatitis transmission', details: 'A fellow wrestler filed a lawsuit alleging Abdullah transmitted hepatitis C through blading during matches' }],
    announcing: [],
    facts: ['Born Lawrence Robert Shreve in Windsor Ontario Canada despite his Sudanese gimmick', 'His forehead was so severely scarred from decades of blading that objects could literally be placed in the grooves', 'Competed in professional wrestling for over 50 years across the globe', 'Owned a restaurant called Abdullahs Steak and Ribs in Atlanta Georgia', 'Never held a major American championship - his appeal was purely as a attraction and brawler', 'Inducted into the WWE Hall of Fame in 2011'],
  },
  1103: { // Carlos Colon
    spouses: [],
    children: [{ name: 'Carlito', born: '1979', notes: 'Former WWE Intercontinental Champion' }, { name: 'Primo Colon', born: '1982', notes: 'Former WWE Tag Team Champion as part of the Colons' }],
    legalIssues: [],
    announcing: [],
    facts: ['The most famous professional wrestler in Puerto Rican history', 'Founded and promoted the World Wrestling Council in Puerto Rico', 'Father of WWE wrestlers Carlito and Primo', 'His feuds with Bruiser Brody and Abdullah the Butcher are legendary in Puerto Rican wrestling', 'Made wrestling a cultural institution in Puerto Rico', 'Inducted into the WWE Hall of Fame in 2014'],
  },
  1104: { // Dory Funk Jr.
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Held the NWA World Heavyweight Championship for over four years from 1969 to 1973', 'Brother of Terry Funk and son of promoter Dory Funk Sr.', 'Ran the Funking Conservatory wrestling school that trained many future WWE stars', 'The Funks Amarillo Texas territory was one of the most respected in wrestling', 'Known for his spinning toe hold finishing move', 'Inducted into the WWE Hall of Fame in 2009'],
  },
  1105: { // Jack Brisco
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Won the NWA World Heavyweight Championship in 1973', 'Was an NCAA wrestling champion at Oklahoma State University', 'Along with Gerald he helped Vince McMahon gain control of the WWWF/WWF by selling their shares in the company', 'Considered one of the finest pure wrestlers of his generation', 'Inducted into the WWE Hall of Fame in 2008', 'Passed away on February 1 2010 at age 68'],
  },
  1106: { // Gerald Brisco
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Brother of NWA World Champion Jack Brisco', 'Became one of Vince McMahons stooges alongside Pat Patterson during the Attitude Era', 'Won the Hardcore Championship in a memorably comedic reign', 'One of WWEs most important talent scouts discovering and signing many future stars', 'Helped Vince McMahon gain control of the WWF by selling the Brisco brothers shares', 'Inducted into the WWE Hall of Fame in 2008 alongside his brother Jack'],
  },
  1107: { // Michael PS Hayes
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [{ role: 'Color Commentator', show: 'WWF TV as Dok Hendrix', years: '1995-1997', notes: 'Provided commentary under the Dok Hendrix persona' }],
    facts: ['Leader of the Fabulous Freebirds one of the most influential tag teams in wrestling history', 'The Freebird Rule allowing any two of three members to defend the tag titles was named after his team', 'His feud with the Von Erichs in World Class Championship Wrestling is considered one of the greatest rivalries ever', 'The entrance theme Badstreet USA became iconic in wrestling', 'Worked as a key WWE producer and creative team member for decades', 'Inducted into the WWE Hall of Fame in 2016 as part of the Fabulous Freebirds'],
  },
  1108: { // Kharma
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Known as Awesome Kong in TNA/Impact where she was one of the most dominant womens champions', 'Her WWE debut in 2011 saw her destroy multiple Divas establishing her as an unstoppable force', 'Her WWE run was cut short by a pregnancy announcement', 'Competed in the 2012 Royal Rumble match as the only woman in the match', 'Is credited with helping elevate womens wrestling in TNA alongside Gail Kim', 'Real name Kia Stevens from Carson California'],
  },
  1109: { // JTG
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of the beloved tag team Cryme Tyme with Shad Gaspard', 'Remained on the WWE roster for years after the tag team split despite minimal TV time', 'His continued employment without significant TV time became a running joke among wrestling fans', 'Wrote a book about his experiences in WWE called Damn Why Did I Write This Book', 'From Brooklyn New York which was central to the Cryme Tyme characters', 'Honored his late partner Shad Gaspard after Shads heroic death in 2020'],
  },
  1110: { // The Berzerker
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Real name John Nord from Minneapolis Minnesota', 'Previously competed as Nord the Barbarian in the AWA and other territories', 'His HUSS chant was his signature battle cry', 'Managed by Mr. Fuji during his WWF run', 'Known for attempting to throw opponents over the top rope to the arena floor', 'Had a notable feud with The Undertaker in the early 1990s'],
  },
  1111: { // Lio Rush
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Served as Bobby Lashleys hype man and manager on Raw in a memorable pairing', 'Won the NXT Cruiserweight Championship', 'Despite being one of the smallest competitors in WWE his charisma and athleticism stood out', 'Announced his retirement from wrestling multiple times but returned each time', 'Also had brief runs in AEW and NJPW', 'Known for his incredible frog splash from the top rope'],
  },
  1112: { // Drew Gulak
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Won the Cruiserweight Championship on 205 Live', 'Created memorable PowerPoint presentation segments about improving 205 Live', 'Became a training partner and advisor for Daniel Bryan on SmackDown', 'His no-fly zone gimmick banned high-flying moves in the cruiserweight division', 'A highly respected technical wrestler known for his submission-based style', 'Also competed in various independent promotions before and after WWE'],
  },
  1113: { // Tye Dillinger
    spouses: [{ name: 'Peyton Royce', years: '2018-2019', notes: 'Brief marriage to fellow WWE wrestler - later divorced' }],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['His Perfect 10 gimmick and the accompanying 10 chant made him one of the most over acts in NXT', 'Despite his NXT popularity he never won a championship in WWE', 'Was a Royal Rumble entrant at number 10 playing into his gimmick', 'Previously competed as Gavin Spears and Stan in earlier WWE runs', 'Left WWE and later competed in AEW as Shawn Spears', 'Was briefly married to Peyton Royce'],
  },
  1114: { // Gran Metalik
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Also known as Mascara Dorada in CMLL and New Japan Pro-Wrestling', 'Was one of the standout performers in the original Cruiserweight Classic tournament', 'Part of the Lucha House Party faction with Kalisto and Lince Dorado', 'Known for his incredible rope-walking ability and aerial skills', 'Competed on 205 Live as one of its top talents', 'Struggled with English-language promos which limited his push in WWE'],
  },
  1115: { // Lince Dorado
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Puerto Rican luchador known for his golden cat-themed mask', 'Part of the Lucha House Party with Kalisto and Gran Metalik', 'Competed on 205 Live as a high-flying fan favorite', 'Known for his shooting star press', 'One of the few Puerto Rican luchadores in WWE history', 'His energetic personality made him popular with younger fans'],
  },
  1117: { // Boris Zhukov
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Real name James John Harrell - an American portraying a Soviet Russian villain', 'One half of the Bolsheviks with Nikolai Volkoff', 'The Bolsheviks were infamously defeated by the Hart Foundation in 19 seconds at WrestleMania VI', 'Their pre-match routine of singing the Soviet national anthem generated enormous heat', 'Also competed in the AWA and various independent promotions', 'The Bolsheviks gimmick was a product of Cold War era wrestling booking'],
  },
  1118: { // Charlie Dempsey
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Son of WWE Hall of Famer William Regal', 'Won the NXT Heritage Cup Championship carrying on his fathers legacy of British catch wrestling', 'Founded the No Quarter Catch Crew faction in NXT', 'His old-school grappling style pays homage to his fathers legendary career', 'One of the youngest second-generation wrestlers currently active in NXT', 'Brother of Pretty Deadly member Elton Prince - they are part of the Mayhen wrestling family'],
  },
  1120: { // Lexis King
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['Son of the legendary Brian Pillman who passed away in 1997', 'Previously competed on the independent circuit and in AEW as Brian Pillman Jr.', 'His Lexis King persona in NXT represents carving out his own identity separate from his fathers legacy', 'Second-generation wrestler carrying the weight of his fathers legendary but tragic career', 'Has shown flashes of the charisma that made his father famous'],
  },
  1121: { // Sylvain Grenier
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: ['One half of La Resistance with Rene Dupree and later Rob Conway', 'Three-time World Tag Team Champion', 'Their anti-American French sympathizer gimmick generated massive heat during the time of the Iraq War', 'Would wave a French flag and sing La Marseillaise to infuriate audiences', 'From Quebec Canada as part of the French-Canadian heel tradition in wrestling', 'Also had a brief singles run after La Resistance disbanded'],
  },
  1122: { // Stan Stasiak
    spouses: [
      { name: 'Berdene Stasiak', years: '1960s–2018', notes: 'Married until his death. Long-lasting marriage.' }
    ],
    children: [
      { name: 'Shawn Stasiak', born: 1970, notes: 'Followed his father into professional wrestling; competed in WWE as Shawn Stasiak and Meat.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was George Stipich. Born in Arvada, Colorado to parents of Croatian descent.',
      'Won the WWWF Heavyweight Championship from Pedro Morales in December 1973, holding it for nine days before losing to Bruno Sammartino.',
      'His finishing move was the heart punch, a devastating closed-fist strike to the chest.',
      'Trained alongside fellow wrestler Waldo Von Erich early in his career.',
      'Competed actively from the 1960s through the early 1980s across multiple territories.'
    ],
  },
  1123: { // Billy Jack Haynes
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2017', incident: 'Murder-suicide attempt', details: 'Shot his wife and then attempted suicide. His wife survived; Haynes was charged with attempted murder and assault.' },
      { year: '2019', incident: 'Legal proceedings', details: 'Deemed unfit to stand trial due to severe brain damage, believed to be from years of wrestling.' }
    ],
    announcing: [],
    facts: [
      'Real name is William Jack Haynes. From Portland, Oregon.',
      'Best known for his full nelson finishing move; had a memorable match with Hercules at WrestleMania III.',
      'Was a prominent star in Pacific Northwest Wrestling before joining WWE in 1986.',
      'Has been an outspoken advocate regarding concussion-related brain injuries in professional wrestling.',
      'Competed in WWE from 1986 to 1988 before returning to the independent circuit.'
    ],
  },
  1124: { // Jim Powers
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Manley. From Carteret, New Jersey.',
      'Teamed with Paul Roma as the Young Stallions, a popular tag team in the late 1980s WWF.',
      'Was primarily used as an enhancement talent but remained with WWF for nearly a decade (1984–1993).',
      'Known for his impressive physique and high-energy style.',
      'After leaving WWE, continued wrestling on the independent circuit for many years.'
    ],
  },
  1125: { // S.D. Jones
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Conrad Efraim. Born in Antigua and raised in Philadelphia, Pennsylvania.',
      'Known for being squashed by King Kong Bundy in nine seconds at the first WrestleMania in 1985, one of the quickest matches in WrestleMania history.',
      'Was a beloved fan favorite and one of the first prominent Black wrestlers in the WWWF/WWF.',
      'Competed in the WWF from 1978 through 1990, primarily as a midcard and enhancement talent.',
      'Passed away in 2008 at age 63.'
    ],
  },
  1126: { // Tonga Kid
    spouses: [],
    children: [
      { name: 'Tama Tonga (Alipate Aloisio Leone)', born: 1987, notes: 'Became a professional wrestler; member of Bullet Club and The Bloodline in WWE.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tonga Fifita, also known as Sam Fatu. He is a member of the legendary Anoa\'i/Fatu Samoan wrestling dynasty.',
      'Competed in WWF in 1984-1985, notably feuding with Roddy Piper alongside Jimmy Snuka.',
      'Also wrestled as Tama in the Islanders tag team with Haku.',
      'Brother of Haku (Meng) and uncle to many wrestlers in the Tongan/Samoan wrestling family.',
      'Was a high-flyer ahead of his time, known for his aerial crossbody finisher.'
    ],
  },
  1127: { // Corporal Kirchner
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Michael Penzel. His military-themed gimmick was based on actual U.S. Army service.',
      'Won a flag match against Nikolai Volkoff at the first Saturday Night\'s Main Event in 1985.',
      'Was part of the WWF roster from 1985 to 1987 during the Rock \'n\' Wrestling era.',
      'Competed in various territories including the AWA before joining the WWF.',
      'His patriotic American soldier character was popular during the height of Cold War-era wrestling storylines.'
    ],
  },
  1128: { // Velvet McIntyre
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Dublin, Ireland but raised in Canada. One of the top female wrestlers of the 1980s.',
      'Challenged for the WWF Women\'s Championship multiple times against The Fabulous Moolah and Lelani Kai.',
      'Known for her victory roll and moonsault, which was rare for women\'s wrestling in the 1980s.',
      'Competed in the first women\'s tag team match at WrestleMania 2 in 1986.',
      'Retired from wrestling in the early 1990s and largely stayed out of the public eye.'
    ],
  },
  1129: { // Leilani Kai
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Patricia Schroeder. From Tampa, Florida.',
      'Won the WWF Women\'s Championship from Wendi Richter on February 18, 1985, with help from The Fabulous Moolah.',
      'Lost the Women\'s title to Wendi Richter at the first WrestleMania.',
      'Teamed with Judy Martin as the Glamour Girls, one of the top women\'s tag teams of the 1980s.',
      'Had a career spanning over three decades in women\'s professional wrestling.'
    ],
  },
  1130: { // Judy Martin
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Homestead, Florida. Was one of the top female wrestlers of the 1980s.',
      'Formed the Glamour Girls tag team with Leilani Kai, managed by Jimmy Hart.',
      'The Glamour Girls held the WWF Women\'s Tag Team Championship.',
      'Competed in the WWF during the mid-to-late 1980s, often in high-profile matches on major cards.',
      'Retired from wrestling in the early 1990s after a career spanning over a decade.'
    ],
  },
  1131: { // Iron Mike Sharpe
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Michael Sharpe. Billed from Hamilton, Ontario, Canada.',
      'Known as "Canada\'s Greatest Athlete," he wore a black leather forearm guard that he used as a weapon.',
      'Was one of the WWF\'s most recognizable enhancement talents throughout the 1980s and early 1990s.',
      'Was famous for his loud, exaggerated yelling and vocalizations during matches.',
      'Son of wrestler Mike Sharpe Sr. and nephew of wrestler Ben Sharpe, making him a second-generation performer.',
      'Continued training wrestlers after retiring from the ring.'
    ],
  },
  1133: { // Blackjack Lanza
    spouses: [
      { name: 'Wife (name private)', years: '1970s–2023', notes: 'Married for decades until his passing.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was John Lanzo. From Phoenix, Arizona.',
      'Teamed with Blackjack Mulligan as The Blackjacks, one of the top heel tag teams of the 1970s.',
      'The Blackjacks held the WWWF Tag Team Championship in 1975.',
      'After retiring from in-ring action, became a road agent and producer for WWE for many years.',
      'Was known for his tough, brawling style and cowboy hat persona alongside Mulligan.'
    ],
  },
  1134: { // Peter Maivia
    spouses: [
      { name: 'Lia Maivia', years: '1956–1982', notes: 'Married until his death. She later became a wrestling promoter in Hawaii.' }
    ],
    children: [
      { name: 'Ata Maivia Johnson', born: 1948, notes: 'Mother of Dwayne "The Rock" Johnson. Adopted by Peter Maivia.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Fanene Leifi Pita Maivia. Born in Samoa.',
      'Grandfather of Dwayne "The Rock" Johnson through his adopted daughter Ata.',
      'Was a top star in the WWWF in the 1970s, feuding with and later teaming with Bob Backlund.',
      'Had a traditional Samoan pe\'a (full body tattoo), which became iconic in wrestling.',
      'Promoted wrestling in Hawaii through Polynesian Pacific Pro Wrestling after retiring from active competition.'
    ],
  },
  1135: { // Baron Mikel Scicluna
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Michael Scicluna. Actually born in Malta, making his "Baron" gimmick partly rooted in reality.',
      'Held the WWWF Tag Team Championship with King Curtis Iaukea in 1972.',
      'Competed in the WWWF/WWF from the 1960s through the 1980s, one of the longest tenures of his era.',
      'Was inducted into the WWE Hall of Fame as part of the Legacy wing.',
      'Known for his foreign heel persona and his use of brass knuckles hidden in his trunks.'
    ],
  },
  1136: { // Haystacks Calhoun
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was William Dee Calhoun. Billed at over 600 pounds.',
      'Wore overalls and a horseshoe around his neck, becoming one of wrestling\'s most recognizable characters.',
      'Was a top babyface in the WWWF in the 1960s and 1970s, often main-eventing at Madison Square Garden.',
      'Teamed with Bruno Sammartino in several tag team matches against top heel teams.',
      'One of the original super-heavyweight attractions in professional wrestling history.'
    ],
  },
  1137: { // Swede Hanson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Robert Ford Smith. From Henderson, Texas — not actually Swedish.',
      'Teamed with Blackjack Lanza in various tag teams during the 1970s.',
      'Was a prominent tag team wrestler in the Mid-Atlantic and WWWF territories.',
      'Known for his large frame and brawling style typical of 1970s heel wrestlers.',
      'Competed across multiple territories during the territory era of professional wrestling.'
    ],
  },
  1138: { // Spiros Arion
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Andréas Arìstou Pournarákou. Actually born in Greece, which was rare for foreign gimmicks of the era.',
      'Held the WWWF Tag Team Championship with Bruno Sammartino in 1967 and with Victor Rivera in 1969.',
      'Turned heel on Bruno Sammartino in a famous angle, leading to a major feud.',
      'Was one of the top draws in the WWWF during the late 1960s and early 1970s.',
      'His feud with Pedro Morales was a major program in the WWWF.'
    ],
  },
  1139: { // Waldo Von Erich
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Walter Paul Sieber. Born in Toronto, Canada — not Germany as his character suggested.',
      'No relation to the famous Von Erich wrestling family from Texas despite sharing the ring name.',
      'Used a Prussian military officer gimmick, complete with a monocle and Iron Cross.',
      'Was a top heel in the WWWF during the 1960s and 1970s.',
      'Held tag team gold in multiple territories throughout his career.'
    ],
  },
  1142: { // Victor Rivera
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Puerto Rico. Was one of the pioneering Puerto Rican wrestlers in the WWWF.',
      'Won the WWWF Tag Team Championship with Spiros Arion in 1969.',
      'Also held the WWWF Tag Team Championship with Bruno Sammartino.',
      'Was a popular babyface in the WWWF during the late 1960s and early 1970s.',
      'Helped pave the way for future Puerto Rican and Latino wrestlers in mainstream American wrestling.'
    ],
  },
  1143: { // King Curtis Iaukea
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Curtis Iaukea. From Honolulu, Hawaii.',
      'Won the WWWF Tag Team Championship with Baron Mikel Scicluna in 1972.',
      'Was a fixture in Hawaiian wrestling and helped promote the sport across the Pacific Islands.',
      'Despite his heel persona in the WWWF, he was a beloved babyface in Hawaii.',
      'Was a legitimate descendant of Hawaiian royalty, lending authenticity to his "King" moniker.',
      'Had a career spanning from the 1960s through the early 1980s.'
    ],
  },
  1145: { // Johnny Rodz
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Johnny Rodriguez. From New York City.',
      'Known as the "Unpredictable" Johnny Rodz. Was one of the most reliable enhancement talents in WWWF/WWF history.',
      'Opened the famous Johnny Rodz wrestling school in Brooklyn, training numerous future stars.',
      'Trained notable wrestlers including Taz, Tommy Dreamer, Bubba Ray Dudley, and Matt Morgan.',
      'Competed in the WWWF/WWF from the 1970s through the 1980s, working with virtually every top star of the era.'
    ],
  },
  1149: { // The Sheik
    spouses: [
      { name: 'Joyce Farhat', years: '1959–2003', notes: 'Married until his death. She managed the family\'s wrestling promotion.' }
    ],
    children: [
      { name: 'Tom Farhat', born: 1960, notes: 'Son who helped manage the family business.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Edward George Farhat. From Lansing, Michigan, of Lebanese descent.',
      'Was one of the most famous and feared heels in wrestling history, known for throwing fireballs and using a pencil as a weapon.',
      'Promoted Big Time Wrestling out of Detroit for decades, making himself the perennial top attraction.',
      'Uncle of Sabu (Terry Brunk), who adopted a similar extreme wrestling style.',
      'His matches often ended in bloody brawls; he was a pioneer of hardcore wrestling.',
      'Inducted into the WWE Hall of Fame in 2007.'
    ],
  },
  1150: { // Ox Baker
    spouses: [],
    children: [
      { name: 'Doug Baker', born: 1966, notes: 'Son' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Douglas Baker. From Waterloo, Iowa.',
      'His "heart punch" finisher gained notoriety because two opponents (Alberto Torres and Ray Gunkel) died after matches with him, though the deaths were unrelated.',
      'Appeared in the 1981 cult film "Escape from New York" alongside Kurt Russell.',
      'Was known for his terrifying appearance, bushy eyebrows, and handlebar mustache.',
      'Became a beloved figure in his later years, making convention appearances and selling merchandise.'
    ],
  },
  1151: { // Sam Houston
    spouses: [
      { name: 'Baby Doll (Nickla Roberts)', years: '1986–1988', notes: 'Brief marriage to fellow wrestling personality.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Michael Smith. Son of wrestler Grizzly Smith and brother of Jake "The Snake" Roberts and Rockin\' Robin.',
      'Named after the famous Texas historical figure; billed from Houston, Texas.',
      'Competed in the WWF from 1987 to 1989, primarily in the midcard and on TV tapings.',
      'Also worked in World Class Championship Wrestling, Mid-South, and other territories.',
      'His family had a tragic history, with his father\'s actions casting a shadow over the family for decades.'
    ],
  },
  1154: { // Dominic DeNucci
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Dominic DeNucci. Born in Campobasso, Italy and raised in Pittsburgh, Pennsylvania.',
      'Won the WWF Tag Team Championship with Pat Barrett and also with Dino Bravo.',
      'Best known as a trainer; his most famous student was Mick Foley.',
      'Also trained Shane Douglas, among other notable wrestlers.',
      'Competed in the WWWF/WWF from the 1960s through the early 1980s.'
    ],
  },
  1155: { // Frenchy Martin
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Guy Martin. From Montreal, Quebec, Canada.',
      'Best known as the manager of Dino Bravo in the late 1980s WWF, carrying a Quebec flag to the ring.',
      'Was an accomplished in-ring competitor in Canadian wrestling circuits before his managing role.',
      'His partnership with Dino Bravo included the infamous "World\'s Strongest Man" bench press segment.',
      'Retired from the wrestling business in the early 1990s.'
    ],
  },
  1156: { // Tama (Islanders)
    spouses: [],
    children: [
      { name: 'Tama Tonga (Alipate Aloisio Leone)', born: 1987, notes: 'Became a professional wrestler in NJPW and WWE; adopted son.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tonga Fifita, also known as Sam Fatu. This is the same person as Tonga Kid (ID 1126) at a different stage of his career.',
      'Formed the Islanders tag team with Haku in the WWF from 1986 to 1989.',
      'The Islanders turned heel and were managed by Bobby "The Brain" Heenan.',
      'A member of the Anoa\'i/Fatu Samoan wrestling dynasty.',
      'The Islanders had a famous angle where they stole Matilda, the British Bulldogs\' mascot bulldog.'
    ],
  },
  1157: { // Tiger Chung Lee
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Chung Hoon Lee. Actually born in Korea, though often billed with a generic Asian heel gimmick.',
      'Competed in the WWF from 1983 to 1987 as a heel.',
      'Used martial arts-style offense including chops and kicks.',
      'Was primarily used as a mid-level heel and enhancement talent during the Rock \'n\' Wrestling era.',
      'Also competed in the NWA and various territories before joining the WWF.'
    ],
  },
  1158: { // Sivi Afi
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Sivi Afi. From Tonga.',
      'Served as a replacement for Jimmy Snuka in the WWF when Snuka left the company in the mid-1980s.',
      'Known for using a high crossbody off the top rope as his finishing move, similar to Snuka\'s style.',
      'Competed in the WWF primarily from 1985 to 1987.',
      'Was one of several Polynesian wrestlers featured in the WWF during the 1980s.'
    ],
  },
  1159: { // Cousin Luke
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Gene Petit. From Mudlick, Kentucky (kayfabe) — actually from the southern United States.',
      'Was a member of the Hillbillies stable alongside Hillbilly Jim, Uncle Elmer, and Cousin Junior.',
      'The Hillbillies were popular comedy babyfaces in the WWF during 1985-1986.',
      'Competed primarily in tag matches and six-man tag matches during his WWF tenure.',
      'Had a relatively short WWF run compared to the leader of the group, Hillbilly Jim.'
    ],
  },
  1160: { // Uncle Elmer
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Stan Frazier. Also competed as Plowboy Frazier and Uncle Elmer.',
      'Was part of the Hillbillies group in the WWF alongside Hillbilly Jim and Cousin Luke.',
      'Had a famous on-screen wedding on Saturday Night\'s Main Event in 1985.',
      'Was a large man billed at well over 350 pounds, known for his size and comedy spots.',
      'Also competed as Big Daddy Dink and in various regional territories throughout his career.'
    ],
  },
  1162: { // Moondog Rex
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Randy Colley. From Harrisburg, Pennsylvania.',
      'Won the WWF Tag Team Championship with Moondog King in 1981, defeating Tony Garea and Rick Martel.',
      'The Moondogs gimmick featured them carrying large bones to the ring and behaving wildly.',
      'Continued the Moondogs gimmick with various partners throughout the 1980s and 1990s.',
      'Also briefly wrestled under other gimmicks including Smash in Demolition before being replaced by Barry Darsow.'
    ],
  },
  1163: { // Moondog Spot
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Larry Booker. From Pensacola, Florida.',
      'Replaced Moondog King as part of the Moondogs tag team alongside Moondog Rex.',
      'Known for carrying a large bone to the ring as part of the Moondogs gimmick.',
      'Competed in multiple territories including the USWA and various independents.',
      'Continued wrestling on the independent circuit well into the 2000s until shortly before his death in 2003.'
    ],
  },
  1164: { // Pat Tanaka
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Pat Tanaka. From Honolulu, Hawaii.',
      'Best known as one half of the Orient Express tag team with Akio Sato and later Kato (Paul Diamond).',
      'Also competed in the AWA as part of Badd Company with Paul Diamond, winning the AWA World Tag Team Championship.',
      'Was a skilled wrestler known for his martial arts kicks and fast-paced style.',
      'Continued wrestling on the independent circuit long after leaving the WWF.'
    ],
  },
  1165: { // Johnny Valiant
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Thomas Sullivan. From Pittsburgh, Pennsylvania.',
      'Won the WWWF Tag Team Championship with Jimmy Valiant as The Valiant Brothers in 1974.',
      'Later became a manager in the WWF, managing Brutus Beefcake, Luscious Johnny V\'s stable, and others.',
      'Also managed the Dream Team (Greg Valentine and Brutus Beefcake).',
      'Trained multiple wrestlers at his wrestling school after retiring from in-ring competition.',
      'Tragically killed when struck by a pickup truck in 2018.'
    ],
  },
  1166: { // Jimmy Valiant
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Fanning. Known as "The Boogie Woogie Man."',
      'Won the WWWF Tag Team Championship with Johnny Valiant as The Valiant Brothers in 1974.',
      'Despite the tag team name, he and Johnny Valiant were not actually related.',
      'Was one of the most popular babyfaces in the southeastern territories, particularly in Mid-Atlantic/JCP.',
      'Known for his eccentric personality, dancing, and crowd interaction.'
    ],
  },
  1167: { // John Studd
    spouses: [
      { name: 'Janet', years: '1980s–1995', notes: 'Married until his death from cancer.' }
    ],
    children: [
      { name: 'Sean Minton', born: 1978, notes: 'Son who also briefly pursued professional wrestling.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was John Minton. Billed at 6\'10" and over 360 pounds.',
      'Won the first-ever Royal Rumble match in 1989.',
      'His feud with Andre the Giant was a major WWF program, including the famous $15,000 Body Slam Challenge.',
      'Was part of the main event scene in the WWF during the 1980s as a top heel managed by Bobby Heenan.',
      'Inducted into the WWE Hall of Fame in 2004.'
    ],
  },
  1168: { // David Sammartino
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is David Sammartino. Son of legendary WWWF champion Bruno Sammartino.',
      'Competed in the WWF in the mid-1980s, often teaming with his father in tag matches.',
      'Faced Brutus Beefcake (managed by Johnny Valiant) at the first WrestleMania with Bruno in his corner.',
      'The pressure of following in his father\'s footsteps proved challenging; he left the WWF by 1986.',
      'Had a complicated relationship with his father that was eventually reconciled later in life.'
    ],
  },
  1169: { // Lord Alfred Hayes
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Interviewer/Commentator', show: 'WWF Television', years: '1982–1995', notes: 'Served as backstage interviewer, segment host, and occasional commentator. Known for hosting "Update" segments.' }
    ],
    facts: [
      'Real name was Alfred Hayes. Actually from London, England — his British persona was genuine.',
      'Was a successful in-ring competitor in the UK and North America before transitioning to a broadcast role.',
      'Famous for his refined British mannerisms and the phrase "Well, let me tell you something..."',
      'Hosted the "Lord Alfred Hayes Update" segments on WWF programming.',
      'Was a beloved presence on WWF television throughout the 1980s and into the 1990s.'
    ],
  },
  1171: { // Pete Rose
    spouses: [
      { name: 'Karolyn Englehardt', years: '1964–1980', notes: 'First marriage; ended in divorce.' },
      { name: 'Carol J. Woliung', years: '1984–2011', notes: 'Second marriage; ended in divorce.' }
    ],
    children: [
      { name: 'Fawn Rose', born: 1964, notes: 'Daughter from first marriage.' },
      { name: 'Pete Rose Jr.', born: 1969, notes: 'Son who played minor league baseball.' },
      { name: 'Tyler Rose', born: 1984, notes: 'Son from second marriage.' },
      { name: 'Cara Rose', born: 1989, notes: 'Daughter from second marriage.' }
    ],
    legalIssues: [
      { year: '1990', incident: 'Gambling ban from baseball', details: 'Agreed to a permanent ban from Major League Baseball after an investigation found he bet on games while managing the Cincinnati Reds.' },
      { year: '1990', incident: 'Tax evasion conviction', details: 'Pleaded guilty to filing false income tax returns and served five months in federal prison.' }
    ],
    announcing: [],
    facts: [
      'MLB\'s all-time hits leader with 4,256 career hits. Known as "Charlie Hustle."',
      'Made guest appearances at WrestleMania XIV, XV, and 2000, getting tombstoned by Kane each time.',
      'Was inducted into the WWE Hall of Fame in 2004 — a Hall of Fame he can be in, unlike Baseball\'s.',
      'His recurring WrestleMania appearances became a beloved tradition in the late Attitude Era.'
    ],
  },
  1172: { // Terry Taylor
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Terry Taylor. From Vero Beach, Florida.',
      'Widely considered one of the most talented in-ring workers of the 1980s, particularly in Mid-South and NWA.',
      'His WWF career was hampered by the Red Rooster gimmick, widely considered one of the worst gimmicks ever given to a talented wrestler.',
      'Went on to become a highly respected road agent and producer for WWE, WCW, and TNA.',
      'Won the UWF Television Championship and Mid-South North American Heavyweight Championship.'
    ],
  },
  1173: { // Killer Khan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Masashi Ozawa. From Niigata, Japan.',
      'Known for the storyline where he "broke" Andre the Giant\'s ankle, leading to a major feud.',
      'Used the Asiatic Spike and a green mist-spraying gimmick as his weapons.',
      'Competed in the WWF during the early 1980s before returning to compete in Japan.',
      'Was a top heel in New Japan Pro-Wrestling as well as in the WWF.'
    ],
  },
  1175: { // Salvatore Bellomo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Salvatore Bellomo. Born in Italy, raised in Belgium.',
      'Competed in the WWF during the mid-1980s as a midcard babyface.',
      'Also wrestled in ECW in the early 1990s during the promotion\'s transition from Eastern Championship Wrestling.',
      'Was known for his energetic style and European background.',
      'Competed across multiple countries including the United States, Canada, and Europe.'
    ],
  },
  1176: { // Jose Luis Rivera
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Puerto Rico. Competed in the WWF primarily during the 1980s.',
      'Was a reliable enhancement talent who could make opponents look good in the ring.',
      'Also competed in Puerto Rico\'s World Wrestling Council (WWC), where he held championship gold.',
      'Wrestled in both tag team and singles competition throughout his WWF tenure.',
      'Was part of the WWF roster during the height of the Rock \'n\' Wrestling era.'
    ],
  },
  1177: { // Rick McGraw
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Richard John McGraw. From Charlotte, North Carolina.',
      'Was a promising young wrestler in the WWF during the early 1980s before his untimely death.',
      'Known for his quickness and athleticism in an era dominated by larger wrestlers.',
      'Tragically passed away in 1985 at just 30 years old due to a drug overdose.',
      'Was beginning to gain momentum in the WWF at the time of his passing.'
    ],
  },
  1178: { // Antonino Rocca
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Antonino Biasetton. Born in Treviso, Italy, raised in Argentina.',
      'Was one of the biggest box-office draws in wrestling history during the 1950s and 1960s.',
      'His acrobatic, high-flying style filled Madison Square Garden regularly and was decades ahead of its time.',
      'Helped popularize professional wrestling on early television in the northeastern United States.',
      'His drawing power was instrumental in the formation of the WWWF (later WWE).'
    ],
  },
  1179: { // Giant Baba
    spouses: [
      { name: 'Motoko Baba', years: '1971–1999', notes: 'Married until his death. She took over All Japan Pro Wrestling after his passing.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Shohei Baba. From Sanjo, Niigata, Japan. Stood 6\'10".',
      'Founded All Japan Pro Wrestling (AJPW) in 1972 and ran it until his death in 1999.',
      'Was a former professional baseball player in Japan before entering wrestling.',
      'Held the NWA World Heavyweight Championship three times, making him one of the most decorated Japanese wrestlers.',
      'Had a working relationship with the WWF and hosted WWF talent in Japan.',
      'Considered one of the most important figures in Japanese professional wrestling history.'
    ],
  },
  1180: { // Tatsumi Fujinami
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tatsumi Fujinami. From Oita, Japan.',
      'Won the WWWF Junior Heavyweight Championship in 1978, making him a star in both Japan and the United States.',
      'Is a legend of New Japan Pro-Wrestling and held the IWGP Heavyweight Championship.',
      'Known as "The Dragon"; his rivalry with Riki Choshu is one of the greatest in Japanese wrestling history.',
      'Was inducted into the WWE Hall of Fame in 2015.',
      'His technical wrestling style influenced generations of Japanese and American wrestlers.'
    ],
  },
  1181: { // Crusher Blackwell
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Jerry Blackwell. From Stone Mountain, Georgia.',
      'Billed at over 450 pounds, was one of the most agile big men in wrestling during the 1980s.',
      'Was a top star in the AWA, feuding with major names including Jerry Lawler and the Road Warriors.',
      'Known for his surprisingly athletic splashes despite his enormous size.',
      'Also competed briefly in the WWWF/WWF and various NWA territories.'
    ],
  },
  1182: { // Larry Hennig
    spouses: [
      { name: 'Irene Hennig', years: '1950s–2018', notes: 'Married for decades; mother of Curt Hennig.' }
    ],
    children: [
      { name: 'Curt Hennig (Mr. Perfect)', born: 1958, notes: 'Became one of the greatest wrestlers of all time as Mr. Perfect in the WWF.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Lawrence Henry Hennig. From Minneapolis, Minnesota.',
      'Known as "The Axe" — was a top tag team wrestler in the AWA during the 1960s and 1970s.',
      'Teamed with Harley Race as one of the most successful tag teams in AWA history.',
      'Father of Curt "Mr. Perfect" Hennig and grandfather of Curtis Axel (Joe Hennig).',
      'Was a legitimate tough man known for his hard-hitting style in the ring.'
    ],
  },
  1183: { // Buddy Rose
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Paul Perschmann. From Las Vegas, Nevada.',
      'Was one of the biggest stars in Pacific Northwest Wrestling, feuding with Roddy Piper.',
      'His matches with Piper in Portland drew massive audiences and are considered classics.',
      'In the WWF, used a gimmick called "Playboy" Buddy Rose and later "Blow Away" Buddy Rose.',
      'Was known for his excellent psychology and ability to work a crowd despite being underutilized nationally.'
    ],
  },
  1184: { // Tony Altimore
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competed in the WWWF/WWF during the 1970s and early 1980s.',
      'Was primarily used as an enhancement talent in the WWWF territory.',
      'Competed during the era of Bruno Sammartino and Bob Backlund as WWWF champions.',
      'Worked primarily in the northeastern United States wrestling scene.'
    ],
  },
  1186: { // Billy White Wolf
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Adnan Bin Abdul Kaissie Al-Kaissy. From Baghdad, Iraq.',
      'Later became known as General Adnan in the WWF, managing Sgt. Slaughter during the controversial Iraqi sympathizer angle.',
      'Won the WWWF Tag Team Championship with Chief Jay Strongbow in 1977.',
      'Claims to have been a personal friend of Iraqi president Saddam Hussein.',
      'Competed in multiple territories under both his Billy White Wolf and Adnan Al-Kaissie names.'
    ],
  },
  1187: { // Rene Goulet
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Robert Bedard. From Montreal, Quebec, Canada — not France as his gimmick implied.',
      'Won the WWF Tag Team Championship with Karl Gotch in 1971.',
      'Served as a WWF road agent and producer for many years after his in-ring career.',
      'Known for wearing a glove that he would use as a "claw" weapon — the Iron Glove.',
      'Was a trusted backstage figure in the WWF/WWE for decades.'
    ],
  },
  1188: { // Karl Gotch
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Karl Istaz. Born in Antwerp, Belgium.',
      'Known as "The God of Wrestling" in Japan for his enormous influence on Japanese professional wrestling.',
      'Won the WWWF Tag Team Championship with Rene Goulet in 1971.',
      'Was an Olympic-level amateur wrestler who competed for Belgium in the 1948 Olympics.',
      'Trained many of the top Japanese shooters and catch wrestlers, including Antonio Inoki.',
      'His emphasis on submission and catch wrestling profoundly shaped the Japanese strong style.'
    ],
  },
  1190: { // Moondog King
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Edward White. From Orangeburg, South Carolina.',
      'Won the WWF Tag Team Championship with Moondog Rex in 1981.',
      'Left the WWF after a car accident in 1981, which led to Moondog Spot replacing him.',
      'The Moondogs were a wild, bone-carrying heel tag team that was among the top acts in the early 1980s WWF.',
      'Also competed in various NWA territories throughout his career.'
    ],
  },
  1191: { // Lou Thesz
    spouses: [
      { name: 'Charlie Thesz', years: '1990s–2002', notes: 'Final wife; married until his death.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Aloysius Martin Thesz. From Banat, Michigan.',
      'Recognized as NWA World Heavyweight Champion six times, spanning from 1937 to 1966.',
      'Widely considered one of the greatest professional wrestlers of all time and a legitimate tough man.',
      'Invented or popularized several moves including the Thesz Press, which was later used by Steve Austin.',
      'Competed actively for over 40 years, with his last match in 1990 at age 74.',
      'Was inducted into every major wrestling hall of fame worldwide.'
    ],
  },
  1192: { // The Goon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Played by Bill Irwin. The Goon was an ice hockey-themed gimmick in the WWF in 1996.',
      'Bill Irwin was actually a well-traveled and respected wrestler who competed in multiple territories.',
      'The character skated to the ring and used hockey-inspired offense.',
      'The gimmick is remembered as one of the more outlandish characters of the mid-1990s "New Generation" era.',
      'Irwin also competed as "The Goon" in squash matches on Raw and Superstars before quietly being phased out.'
    ],
  },
  1193: { // TL Hopper
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Played by Tony Anthony, who also competed as Dirty White Boy in Smoky Mountain Wrestling.',
      'The TL Hopper character was a wrestling plumber who carried a plunger to the ring.',
      'Is widely regarded as one of the most derided gimmicks of the mid-1990s WWF.',
      'Tony Anthony was actually a skilled worker best known for his Smoky Mountain Wrestling run with Jim Cornette.',
      'The character appeared in the WWF in 1996-1997 before being dropped.'
    ],
  },
  1194: { // Salvatore Sincere
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Played by Tom Brandi. The Salvatore Sincere character was an Italian-American pretty-boy heel.',
      'Tom Brandi also wrestled in the WWF under his own name and as Johnny Gunn.',
      'The character appeared in the WWF during 1996-1997, part of the occupation-based gimmick era.',
      'Brandi competed on the independent circuit for many years after his WWF run.',
      'Was a regular on WWF Superstars and Raw during the character\'s brief run.'
    ],
  },
  1195: { // Freddie Joe Floyd
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Played by Tracy Smothers, a veteran of Smoky Mountain Wrestling and multiple territories.',
      'The Freddie Joe Floyd character was a good ol\' boy babyface in the WWF in 1996-1997.',
      'Tracy Smothers was best known as part of the tag team The Southern Boys / Young Pistols.',
      'Also had a notable run in ECW as an Italian-American character and FBI member.',
      'Was considered an excellent worker who never got a major push in the WWF despite his talent.'
    ],
  },
  1196: { // Ludvig Borga
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tony Halme. From Helsinki, Finland.',
      'Was a legitimate heavyweight boxer and MMA fighter before entering professional wrestling.',
      'Competed in the WWF in 1993-1994 as a Finnish nationalist heel who criticized America.',
      'Had a notable feud with Lex Luger during the "Lex Express" era.',
      'After wrestling, was elected to the Finnish Parliament in 2003.',
      'Was a Finnish amateur boxing champion and competed in the UFC.'
    ],
  },
  1197: { // Jonathan Coachman
    spouses: [
      { name: 'Amy Coachman', years: '2000s–present', notes: 'Private marriage.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Interviewer/Commentator', show: 'Raw/SmackDown/PPVs', years: '1999–2008', notes: 'Served as backstage interviewer, commentator, and occasional on-screen personality in WWE.' },
      { role: 'Anchor', show: 'ESPN', years: '2008–2018', notes: 'Worked as an anchor and reporter for ESPN after leaving WWE.' },
      { role: 'Commentator', show: 'Raw', years: '2018', notes: 'Briefly returned to WWE as a Raw commentator in 2018.' }
    ],
    facts: [
      'Real name is Jonathan Coachman. From Kansas.',
      'Started as a backstage interviewer and became one of WWE\'s most prominent on-air personalities.',
      'Also competed in occasional matches, including at WrestleMania and Taboo Tuesday.',
      'Successfully transitioned from WWE to mainstream sports broadcasting with ESPN.',
      'Known for his heel persona on WWE television, often antagonizing babyfaces.'
    ],
  },
  1198: { // Tori
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Terri Poch. From Portland, Oregon.',
      'Trained at Stu Hart\'s Hart Dungeon in Calgary, Alberta.',
      'Had a notable feud with Sable in the WWF and later became associated with Kane and then D-Generation X.',
      'Was managed by and storyline-linked to Kane before turning heel and joining DX with X-Pac.',
      'Left WWE in 2001 and has since remained largely out of the wrestling business.'
    ],
  },
  1200: { // The Blue Meanie
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Brian Heffron. From Neptune, New Jersey.',
      'Was part of the bWo (Blue World Order), a parody of the nWo, in ECW alongside Stevie Richards and Nova.',
      'The bWo became one of ECW\'s most beloved comedy acts.',
      'Had a brief stint in the WWF in 1998-1999 and returned to WWE in 2005.',
      'Was legitimately punched and bloodied by JBL during the ECW One Night Stand 2005 event.'
    ],
  },
  1201: { // Kurrgan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Robert Maillet. From New Brunswick, Canada.',
      'Stood 7\'0" tall and was a former national-level amateur wrestler in Canada.',
      'Was a member of The Truth Commission and later The Oddities in the WWF.',
      'Successfully transitioned to acting, appearing in films such as "300," "Sherlock Holmes," and "Pacific Rim."',
      'The Oddities became a popular act with their dancing gimmick managed by the Insane Clown Posse.'
    ],
  },
  1202: { // Shawn Stasiak
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Shawn Stasiak. Son of former WWWF champion Stan Stasiak.',
      'Debuted in the WWF in 1999 as Meat, a character managed by Pretty Mean Sisters (PMS).',
      'Was released from WWE after reportedly secretly recording backstage conversations.',
      'Also competed in WCW under his real name in 2000-2001.',
      'Became a chiropractor after leaving the wrestling business.',
      'Was a second-generation wrestler who struggled to find his footing in the industry.'
    ],
  },
  1203: { // Dr. Death Steve Williams
    spouses: [
      { name: 'Wife', years: '1980s–2009', notes: 'Married until his death from cancer.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Steve Williams. From Lakewood, Colorado.',
      'Was an All-American wrestler at the University of Oklahoma.',
      'Was a huge star in All Japan Pro Wrestling, winning the AJPW Triple Crown Heavyweight Championship.',
      'His "Dr. Death" WWF push was derailed after losing to Bart Gunn in the Brawl for All in 1998.',
      'Teamed with Terry Gordy as the Miracle Violence Connection, one of the greatest tag teams in Japanese wrestling history.',
      'Passed away from throat cancer in 2009 at age 49.'
    ],
  },
  1205: { // Skip
    spouses: [
      { name: 'Sunny (Tammy Lynn Sytch)', years: '1992–2000s', notes: 'Long-term relationship; they were partners both on-screen and off. Never legally married but were longtime partners.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Chris Candido. Skip was his fitness guru character in the WWF\'s Body Donnas tag team.',
      'Formed the Body Donnas with Zip (Tom Prichard), managed by Sunny.',
      'Was considered one of the most talented workers of his generation despite limited WWF opportunities.',
      'Won the NWA World Heavyweight Championship and was a star in Smoky Mountain Wrestling and ECW.',
      'Tragically died in 2005 at age 33 from a blood clot following surgery on a broken leg sustained at a TNA event.'
    ],
  },
  1206: { // Zip
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tom Prichard. From Jacksonville, Florida.',
      'Teamed with Chris Candido (Skip) as the Body Donnas, managed by Sunny.',
      'Also well known as one half of the Heavenly Bodies tag team with Jimmy Del Ray in Smoky Mountain Wrestling.',
      'Became a highly respected trainer at WWE\'s developmental territory (OVW and later the Performance Center).',
      'Trained numerous future WWE stars and is considered one of the best trainers in wrestling history.',
      'Brother of Bruce Prichard (Brother Love), a longtime WWE executive.'
    ],
  },
  1209: { // D-Von Dudley
    spouses: [
      { name: 'Wife (name private)', years: '2000s–present', notes: 'Private marriage.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Devon Hughes. From New Rochelle, New York.',
      'One half of the Dudley Boyz with Bubba Ray, widely considered the greatest tag team in professional wrestling history.',
      'The Dudley Boyz won tag team championships in ECW, WWE, TNA, and New Japan — the only team to hold major titles in all four promotions.',
      'Known for the "Testify!" catchphrase and the "Wassup" headbutt spot.',
      'Became a producer and agent for WWE after retiring from in-ring competition.',
      'Was ordained as a minister and has been involved in church ministry.'
    ],
  },
  1210: { // Bubba Ray Dudley
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Mark LoMonaco. From Queens, New York.',
      'One half of the Dudley Boyz with D-Von, winning a record number of tag team championships across multiple promotions.',
      'The Dudley Boyz are famous for putting opponents through tables, making "Get the tables!" one of wrestling\'s most iconic catchphrases.',
      'Competed as Bully Ray in TNA, where he became TNA World Heavyweight Champion and leader of the Aces & Eights faction.',
      'Was instrumental in some of the most memorable TLC (Tables, Ladders, and Chairs) matches in WWE history alongside D-Von.',
      'Inducted into the WWE Hall of Fame as part of the Dudley Boyz in 2018.'
    ],
  },
  1211: { // Headbanger Mosh
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Charles Warrington. The Headbangers were a heavy metal/mosh pit themed tag team.',
      'Won the WWF Tag Team Championship with Thrasher in 1997.',
      'The Headbangers were known for wearing plaid skirts/kilts to the ring as part of their eccentric look.',
      'Also competed in the infamous Brawl for All tournament in 1998.',
      'The team competed in the WWF/WWE from 1996 to 2000 and returned for occasional appearances.'
    ],
  },
  1212: { // Headbanger Thrasher
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Glenn Ruth. One half of the Headbangers with Mosh.',
      'Won the WWF Tag Team Championship with Mosh in September 1997.',
      'The Headbangers had a fun, counterculture gimmick inspired by the mosh pit subculture.',
      'Also briefly appeared in a cross-dressing angle where they impersonated women.',
      'The team was a fixture of the WWF tag division during the Attitude Era transition period.'
    ],
  },
  1213: { // Giant Silva
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Paulo César da Silva. From Marília, São Paulo, Brazil.',
      'Stood 7\'2" tall and was a professional basketball player in Brazil before wrestling.',
      'Was a member of The Oddities in the WWF alongside Kurrgan, Golga, and Luna Vachon.',
      'Also competed in MMA, fighting in PRIDE Fighting Championships in Japan.',
      'His enormous size made him an attraction, though his in-ring skills were limited.'
    ],
  },
  1214: { // Pete Gas
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Peter Gasparino. From Greenwich, Connecticut.',
      'Was a member of the Mean Street Posse alongside Rodney and Joey Abs.',
      'The Mean Street Posse were portrayed as Shane McMahon\'s childhood friends from Greenwich.',
      'Pete Gas was actually a real-life friend of Shane McMahon, lending authenticity to the gimmick.',
      'The group competed in the WWF during 1999-2000, mostly in comedic roles.'
    ],
  },
  1215: { // Rodney
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Rodney Leinhardt. From Greenwich, Connecticut.',
      'Was a member of the Mean Street Posse with Pete Gas and Joey Abs.',
      'Like Pete Gas, was an actual childhood friend of Shane McMahon.',
      'The Mean Street Posse served as Shane McMahon\'s entourage during the Corporate Ministry era.',
      'Had a limited wrestling career focused almost entirely on his Mean Street Posse run in 1999-2000.'
    ],
  },
  1216: { // Joey Abs
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Joseph Abboud. Was a member of the Mean Street Posse with Pete Gas and Rodney.',
      'Unlike the other Posse members, Joey Abs was actually a trained professional wrestler.',
      'Competed in the WWF Hardcore Championship scene during his tenure.',
      'The Mean Street Posse acted as Shane McMahon\'s lackeys during the Attitude Era.',
      'Left the WWF in 2000 along with the rest of the Mean Street Posse.'
    ],
  },
  1217: { // Chainz
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Brian Lee Harris. From Oak Ridge, Tennessee.',
      'Was a member of the Disciples of Apocalypse (DOA) biker faction in the WWF.',
      'Previously portrayed a fake Undertaker in a storyline in 1994.',
      'Also wrestled in Smoky Mountain Wrestling and USWA before joining the WWF.',
      'The DOA feuded with the Nation of Domination and Los Boricuas during 1997-1998.'
    ],
  },
  1218: { // 8-Ball
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Don Harris. One half of the Harris Brothers (twin brothers) with Skull.',
      'Was a member of the Disciples of Apocalypse (DOA) in the WWF.',
      'The Harris Brothers also competed in WCW as Creative Control, the Blu Brothers in WWF, and other gimmicks.',
      'Being identical twins, they frequently switched places during matches to confuse opponents and referees.',
      'Also worked as backstage security and agents in WCW and TNA.'
    ],
  },
  1219: { // Skull
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ron Harris. Twin brother of Don Harris (8-Ball).',
      'Was a member of the Disciples of Apocalypse (DOA) in the WWF alongside 8-Ball and Chainz.',
      'The Harris Brothers had numerous tag team gimmicks across WWF, WCW, and TNA.',
      'Previously competed in the WWF as Eli Blu of the Blu Brothers tag team.',
      'The twins used their identical appearance to their advantage in matches throughout their careers.'
    ],
  },
  1221: { // Matt Morgan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Matt Morgan. From Fairfield, Connecticut. Stands 6\'9".',
      'Was part of the third season of WWE\'s Tough Enough reality show.',
      'Had a stuttering gimmick in WWE that was widely criticized and hindered his push.',
      'Found greater success in TNA/Impact Wrestling, where he was a multiple-time tag team champion.',
      'Was trained at Johnny Rodz\'s wrestling school in Brooklyn.',
      'Later entered politics and was elected mayor of Longwood, Florida in 2019.'
    ],
  },
  1222: { // Rob Conway
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Robert Conway. From Louisville, Kentucky.',
      'Was a member of La Résistance with Sylvain Grenier, winning the World Tag Team Championship.',
      'Also had a singles run with the "Con-Man" and "Just Look at Me" gimmick.',
      'Trained at Ohio Valley Wrestling (OVW), WWE\'s developmental territory.',
      'Continued wrestling on the independent circuit and in NWA after leaving WWE.'
    ],
  },
  1223: { // Rico
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Rico Constantino. From Las Vegas, Nevada.',
      'Was a former Las Vegas Metropolitan Police Department officer before becoming a wrestler.',
      'Trained at WCW\'s Power Plant and appeared in WCW before joining WWE.',
      'His flamboyant character in WWE was a camp, ambiguously gay persona that got surprisingly over with the crowd.',
      'Managed and teamed with Charlie Haas and later was part of various tag team combinations.',
      'Won the World Tag Team Championship with Charlie Haas in 2004.'
    ],
  },
  1224: { // Marcus Cor Von
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Monty Brown. From Flint, Michigan.',
      'Was a former professional football player who played for the Buffalo Bills and New England Patriots.',
      'Was known as "The Alpha Male" in TNA, where he was one of the company\'s top stars.',
      'His finisher "The Pounce" was a devastating running body check that became iconic.',
      'Left WWE in 2007 to care for family members and never returned to professional wrestling.',
      'Was widely considered to have star potential that was never fully realized in WWE.'
    ],
  },
  1225: { // Matt Striker
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2005', incident: 'Fired from teaching', details: 'Lost his job as a New York City public school teacher after it was discovered he called in sick to wrestle at independent shows.' }
    ],
    announcing: [
      { role: 'Commentator/Interviewer', show: 'ECW/SmackDown/NXT', years: '2008–2013', notes: 'Transitioned from in-ring to commentary, calling matches on ECW and serving as backstage interviewer on various shows.' }
    ],
    facts: [
      'Real name is Matt Kaye. From Queens, New York.',
      'Was an actual high school teacher before becoming a full-time wrestler, which inspired his gimmick.',
      'Transitioned from wrestling to become a well-regarded commentator and interviewer in WWE.',
      'Also worked as a commentator for Lucha Underground and various other promotions.',
      'Was known for his knowledge of wrestling history, which he displayed on commentary.'
    ],
  },
  1226: { // Mike Knox
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Mike Hettinga. From Minneapolis, Minnesota.',
      'Was the on-screen boyfriend of Kelly Kelly during the early ECW brand relaunch in 2006.',
      'Later reinvented himself with a menacing loner gimmick with a large beard.',
      'Competed in WWE from 2006 to 2010 across ECW and Raw brands.',
      'Also competed in TNA and on the independent circuit after leaving WWE.'
    ],
  },
  1227: { // Psicosis
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Dionicio Castellanos Torres. From Tijuana, Mexico.',
      'Was one of the top high-flying cruiserweights in WCW, known for his innovative aerial offense.',
      'Had a memorable rivalry with Rey Mysterio that was showcased in both Mexico and WCW.',
      'Competed in WWE\'s SmackDown cruiserweight division in the mid-2000s as part of the Mexicools.',
      'Was known for wearing a distinctive mask and performing death-defying dives.'
    ],
  },
  1228: { // Juventud Guerrera
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2003', incident: 'Arrest in Australia', details: 'Arrested in Australia for property damage and erratic behavior while touring with WWE, leading to his dismissal.' }
    ],
    announcing: [],
    facts: [
      'Real name is Juventud Guerrero Llanes. From Mexico City, Mexico.',
      'Son of the legendary luchador Fuerza Guerrera.',
      'Won the WCW Cruiserweight Championship and was a key part of the cruiserweight revolution in WCW.',
      'Was part of the Mexicools faction in WWE alongside Psicosis and Super Crazy.',
      'His WCW matches with Rey Mysterio, Billy Kidman, and other cruiserweights are regarded as classics.'
    ],
  },
  1229: { // Katie Lea Burchill
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Katie Lea Burchill (ring name). Born Nikki Maylan in Dorset, England.',
      'Was paired with Paul Burchill as a sibling duo with an incest-innuendo storyline that was quickly dropped.',
      'Also competed in TNA as Winter and in the UK independent scene.',
      'Was trained by the legendary Fit Finlay.',
      'Later known by her married name Katie Burchill-Rotunda after marrying into the Rotunda wrestling family.'
    ],
  },
  1230: { // Danny Basham
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Daniel Hollie. From Louisville, Kentucky.',
      'Teamed with Doug Basham as the Basham Brothers in WWE from 2003 to 2006.',
      'The Bashams won the WWE Tag Team Championship twice.',
      'Trained at Ohio Valley Wrestling (OVW), WWE\'s developmental territory.',
      'Also had a storyline where they served as JBL\'s cabinet members/enforcers on SmackDown.'
    ],
  },
  1231: { // Doug Basham
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Doug Basham. From Winchester, Kentucky.',
      'Teamed with Danny Basham as the Basham Brothers, winning the WWE Tag Team Championship.',
      'Competed in OVW before being called up to the main SmackDown roster.',
      'Also had a notable run in OVW as part of the developmental system.',
      'The Bashams used twin magic spots despite not actually being twins.'
    ],
  },
  1232: { // Rodney Mack
    spouses: [
      { name: 'Jazz (Carlene Moore)', years: '2000s–present', notes: 'Married fellow WWE wrestler Jazz.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Rodney Begnaud. From Kansas City, Missouri.',
      'Was managed by Theodore Long and featured in the "White Boy Challenge" angle on Raw.',
      'Married to former WWE Women\'s Champion Jazz.',
      'Competed in WWE from 2003 to 2004 before being released.',
      'Also competed on the independent circuit and in various regional promotions.'
    ],
  },
  1234: { // Jesse
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Raygordy. Teamed with Festus as the team of Jesse and Festus on SmackDown.',
      'The team had a unique gimmick where Festus was docile until the bell rang.',
      'Had a relatively short run on SmackDown in 2007-2008.',
      'Was released from WWE and continued on the independent circuit.',
      'Was trained in WWE\'s developmental system before being called up to the main roster.'
    ],
  },
  1235: { // Jimmy Wang Yang
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Yun. From Quantico, Virginia, of Korean descent.',
      'His gimmick was a redneck cowboy Asian character, playing against ethnic stereotypes.',
      'Previously competed in WCW as Jimmy Yang and Akio in WWE.',
      'Was a talented cruiserweight known for his moonsault and high-flying ability.',
      'Competed in WWE from 2006 to 2010, mostly on SmackDown.',
      'Was actually a skilled bull rider in real life, adding legitimacy to his cowboy persona.'
    ],
  },
  1236: { // Shannon Moore
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Shannon Brian Moore. From Cameron, North Carolina — same hometown as the Hardy Boyz.',
      'Was a close friend and associate of Matt and Jeff Hardy, appearing as part of their entourage.',
      'Competed in WCW as part of Three Count with Shane Helms and Evan Karagias.',
      'Later adopted a "Prince of Punk" persona with a distinctive mohawk.',
      'Won the WWE Cruiserweight Championship in 2003.',
      'Also competed in TNA Wrestling alongside Jeff Hardy.'
    ],
  },
  1238: { // Vito
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Vito LoGrasso. From New Haven, Connecticut.',
      'Competed in WCW as part of the Natural Born Thrillers group and as a mobster character.',
      'In WWE, became known for his comedy gimmick of wrestling in a dress on SmackDown.',
      'Was part of a concussion lawsuit against WWE, claiming long-term brain damage from his career.',
      'Also competed in ECW and various independent promotions throughout his career.'
    ],
  },
  1239: { // David Otunga
    spouses: [
      { name: 'Jennifer Hudson', years: '2008–2017', notes: 'Engaged to the Oscar-winning singer/actress. They have one son together but never married; separated in 2017.' }
    ],
    children: [
      { name: 'David Daniel Otunga Jr.', born: 2009, notes: 'Son with Jennifer Hudson.' }
    ],
    legalIssues: [],
    announcing: [
      { role: 'Commentator/Analyst', show: 'Raw/Pre-shows', years: '2014–2017', notes: 'Served as a commentator and panelist on WWE pre-show panels.' }
    ],
    facts: [
      'Real name is David Daniel Otunga. From Elgin, Illinois.',
      'Holds a law degree from Harvard Law School and is a practicing attorney.',
      'Was part of the original Nexus faction that invaded Raw in 2010.',
      'His Harvard Law background was incorporated into his on-screen character.',
      'Also appeared as a panelist and legal analyst on CNN.'
    ],
  },
  1240: { // Michael Tarver
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tyrone Evans. From Akron, Ohio.',
      'Was a member of the original Nexus faction on Raw in 2010.',
      'Known for wearing hand wraps as part of his character, emphasizing his striking ability.',
      'Was the first member eliminated from the Nexus storyline.',
      'Had a background in amateur boxing before entering professional wrestling.',
      'Was released from WWE in 2011 and competed on the independent circuit afterward.'
    ],
  },
  1241: { // Justin Gabriel
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Paul Lloyd Jr. From Cape Town, South Africa.',
      'Known for his spectacular 450 Splash finishing move.',
      'Was a member of the Nexus and later The Corre faction.',
      'Won the WWE Tag Team Championship with Heath Slater as part of the Nexus.',
      'Before WWE, competed in various promotions including a stint in the UK.',
      'After leaving WWE, competed as PJ Black in Lucha Underground and on the independent circuit.'
    ],
  },
  1242: { // Alex Riley
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Commentator', show: 'NXT', years: '2013–2016', notes: 'Served as a commentator on NXT programming after his in-ring push stalled.' }
    ],
    facts: [
      'Real name is Kevin Kiley Jr. From Fairfax, Virginia.',
      'Was the "rookie" paired with The Miz on the second season of NXT.',
      'Served as The Miz\'s on-screen protégé and lackey before eventually turning on him.',
      'Had a brief push as a babyface after splitting from The Miz but it fizzled quickly.',
      'Son of Kevin Kiley, who also worked in the wrestling business.'
    ],
  },
  1243: { // Kaval
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Brandon Silvestry. Better known by his independent wrestling name Low Ki.',
      'Won the second season of NXT (competition format) in 2010 with LayCool as his mentors.',
      'Was one of the first stars of Ring of Honor and TNA\'s X Division.',
      'Known for his stiff martial arts-inspired strikes, double stomp, and Warrior\'s Way finisher.',
      'Despite winning NXT Season 2, was released from WWE within months and returned to the indie scene.',
      'Won the IWGP Junior Heavyweight Championship in New Japan Pro-Wrestling.'
    ],
  },
  1245: { // Nathan Jones
    spouses: [],
    children: [],
    legalIssues: [
      { year: '1990s', incident: 'Criminal conviction', details: 'Served time in an Australian prison for armed robbery before entering professional wrestling.' }
    ],
    announcing: [],
    facts: [
      'Real name is Nathan Jones. From Gold Coast, Australia.',
      'Stood 6\'10" and was billed as having a strongman and powerlifting background.',
      'Was originally planned to team with The Undertaker at WrestleMania XIX but was pulled from the match.',
      'His WWE run was brief (2003) due to limited in-ring ability despite his impressive physical stature.',
      'Went on to have a career in film, appearing in movies like "Troy" and "Mad Max: Fury Road."'
    ],
  },
  1246: { // Sean O'Haire
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2010', incident: 'Domestic violence arrest', details: 'Arrested on domestic violence charges in South Carolina.' }
    ],
    announcing: [],
    facts: [
      'Real name was Sean Haire. From Hilton Head Island, South Carolina.',
      'Was one of the most promising athletes in WCW during its final years, winning the WCW Tag Team Championship with Chuck Palumbo.',
      'Had a "Devil\'s Advocate" gimmick in WWE with memorable vignettes, but the push was abandoned.',
      'Was a highly athletic 6\'6" competitor with a legitimate kickboxing background.',
      'Tragically passed away in 2014 at age 43.'
    ],
  },
  1247: { // Armando Estrada
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Hazem Ali. From San Juan, Puerto Rico.',
      'Best known as the cigar-smoking manager of Umaga on Raw.',
      'Also served as the on-screen General Manager of ECW.',
      'His exaggerated Cuban-style accent and catchphrase "My name-a is Armando Alejandro Estrrrrrada!" became memorable.',
      'Was released from WWE in 2008 after his managerial and authority figure roles concluded.'
    ],
  },
  1248: { // Sylvester Terkay
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Sylvester Terkay. From Baldwinsville, New York.',
      'Was a legitimate NCAA Division I All-American wrestler at North Carolina State.',
      'Also had a professional MMA career before joining WWE.',
      'Competed briefly on the ECW brand in 2006-2007, paired with Elijah Burke as his manager.',
      'His WWE run was very short despite his impressive athletic credentials.'
    ],
  },
  1251: { // Percy Watson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Nick McNeil. Was a standout football player at Texas A&M-Commerce.',
      'Won season two of NXT alongside MVP as his pro.',
      'Known for his high-energy persona and signature glasses.',
    ],
  },
  1252: { // Lucky Cannon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Thomas Latimer. Competed on NXT season two and season four.',
      'Was trained at FCW (Florida Championship Wrestling) developmental territory.',
    ],
  },
  1253: { // Byron Saxton
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Play-by-Play/Color Commentary', show: 'SmackDown/Raw/Main Event', years: '2014-2021', notes: 'Transitioned from in-ring competitor to full-time commentator and backstage interviewer.' }
    ],
    facts: [
      'Real name is Bryan Kelly. Competed on NXT season four before moving to commentary.',
      'Served as a backstage interviewer and commentator across multiple WWE shows.',
      'Was part of the SmackDown commentary team alongside Mauro Ranallo and JBL.',
    ],
  },
  1254: { // Mason Ryan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Barri Griffiths. Hails from Cardiff, Wales.',
      'Was a member of The New Nexus alongside CM Punk.',
      'His imposing physique drew frequent comparisons to Batista.',
      'Competed as a bodybuilder and powerlifter before entering professional wrestling.',
    ],
  },
  1255: { // Tyler Reks
    spouses: [
      { name: 'Priscilla Tuft', years: '2002-2020', notes: 'Married for 18 years before divorcing.' }
    ],
    children: [
      { name: 'Malibu Tuft', born: 2009, notes: 'Daughter.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Gabbi Tuft (formerly Gabriel Tuft). Came out as a transgender woman in 2021.',
      'Retired from WWE in 2012. Known for the Burning Hammer finishing move, one of the few WWE wrestlers to use it.',
      'After retirement, became a motivational speaker and fitness entrepreneur.',
    ],
  },
  1257: { // Hunico
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Jorge Arias. Later performed as Sin Cara after taking over the role from the original.',
      'Originally from Mexico, trained in the Mexican lucha libre style.',
      'Portrayed two distinct characters in WWE: Hunico and the second Sin Cara.',
    ],
  },
  1258: { // Scotty Goldman
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Colton Cabana. Best known as Colt Cabana on the independent circuit.',
      'Close friends with CM Punk for years before a highly publicized falling out and lawsuit over comments on his podcast about WWE doctor Chris Amann.',
      'His "Art of Wrestling" podcast was one of the first and most popular wrestling podcasts.',
      'Has wrestled all over the world including ROH, NJPW, AEW, and numerous independent promotions.',
    ],
  },
  1259: { // Trent Barreta
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Greg Marasciulo. Later became known as Trent Beretta in AEW and NJPW.',
      'Formed a tag team with Caylen Croft called The Dudebusters in WWE.',
      'Became a prominent tag team wrestler as one half of Best Friends with Chuck Taylor.',
    ],
  },
  1260: { // Caylen Croft
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Michael Brendli. Teamed with Trent Barreta as The Dudebusters.',
      'Trained at FCW before being called up to the main roster.',
    ],
  },
  1261: { // Manu
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Afamasaga Gordon Anoa\'i. Member of the famous Anoa\'i wrestling family.',
      'Son of Afa of The Wild Samoans tag team.',
      'Was briefly aligned with Legacy (Randy Orton, Ted DiBiase Jr., and Cody Rhodes) before being removed from the group.',
    ],
  },
  1262: { // Sim Snuka
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Sim Snuka. Son of WWE Hall of Famer Jimmy "Superfly" Snuka.',
      'Teamed with Manu and later Deuce in WWE.',
      'Part of the second generation of Snuka family wrestlers.',
    ],
  },
  1263: { // Richie Steamboat
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Richard Blood Jr. Son of WWE Hall of Famer Ricky "The Dragon" Steamboat.',
      'A back injury ended his wrestling career prematurely while in NXT/FCW developmental.',
      'Showed great promise in FCW, drawing comparisons to his legendary father.',
    ],
  },
  1264: { // Rosa Mendes
    spouses: [],
    children: [
      { name: 'Jordan Elizabeth', born: 2017, notes: 'Daughter with Bobby Schubenski.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Milena Roucka. Born in Vancouver, British Columbia, Canada.',
      'Was a contestant on the first season of NXT (the original game show format).',
      'Openly discussed her struggles with alcoholism and credited WWE with helping her get treatment.',
      'Of Costa Rican descent; was a model before entering professional wrestling.',
    ],
  },
  1265: { // TJP
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Theodore James Perkins. Also known as TJ Perkins.',
      'Won the inaugural WWE Cruiserweight Classic tournament in 2016.',
      'Started training at age 13 and had his first professional match at age 15.',
      'Known for his video game-inspired entrance and persona.',
    ],
  },
  1266: { // Tony Nese
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Anthony Nese. Known for his chiseled physique and ab-counting entrance.',
      'Competed in the Cruiserweight Classic tournament before joining 205 Live.',
      'Won the WrestleMania 35 pre-show Cruiserweight Championship match against Buddy Murphy.',
      'Trained on the independent circuit in the northeastern United States.',
    ],
  },
  1267: { // Akira Tozawa
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Kobe, Japan. Trained under legendary trainer Ultimo Dragon.',
      'Known for his loud battle cry and high-energy style.',
      'Competed extensively in Dragon Gate promotion in Japan before joining WWE.',
      'Won the WWE 24/7 Championship on numerous occasions, becoming a fixture of the title\'s comedy segments.',
    ],
  },
  1268: { // Jack Gallagher
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2020', incident: 'Speaking Out allegations', details: 'Accused of sexual assault during the #SpeakingOut movement. Released by WWE in August 2020.' }
    ],
    announcing: [],
    facts: [
      'Real name is Jack Maybury. From Manchester, England.',
      'Known for his British gentleman persona, complete with an umbrella used as a weapon.',
      'Competed in the inaugural Cruiserweight Classic tournament in 2016.',
    ],
  },
  1269: { // Ariya Daivari
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ariya Daivari. Brother of former WWE wrestler Shawn Daivari.',
      'From Minneapolis, Minnesota. Of Iranian descent.',
      'Was a mainstay of the 205 Live cruiserweight division.',
    ],
  },
  1270: { // Rich Swann
    spouses: [
      { name: 'Su Yung (Vannarah Riggs)', years: '2017-present', notes: 'Fellow professional wrestler, known for her work in Impact Wrestling.' }
    ],
    children: [],
    legalIssues: [
      { year: '2017', incident: 'Domestic battery arrest', details: 'Arrested for battery and false imprisonment involving his wife. Charges were later dropped. WWE suspended and eventually released him.' }
    ],
    announcing: [],
    facts: [
      'From Baltimore, Maryland. Became an orphan at a young age after losing both parents.',
      'Known for his high-flying style and dancing entrance.',
      'Won the Impact Wrestling World Championship in 2020.',
      'Was the first WWE Cruiserweight Champion under the 205 Live brand.',
    ],
  },
  1271: { // Bobby Fish
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Robert Anthony Fish. Holds a legitimate black belt in martial arts.',
      'Formed The Undisputed Era with Adam Cole, Kyle O\'Reilly, and Roderick Strong in NXT.',
      'Won the NXT Tag Team Championship with Kyle O\'Reilly as reDRagon.',
      'Spent years on the independent circuit and in ROH before joining WWE in 2017.',
    ],
  },
  1272: { // KUSHIDA
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Mie Prefecture, Japan. One of NJPW\'s most decorated junior heavyweight wrestlers.',
      'Won the IWGP Junior Heavyweight Championship six times in NJPW.',
      'His character and entrance are heavily inspired by the "Back to the Future" film series.',
      'Signed with WWE in 2019 and competed in NXT before returning to Japan.',
    ],
  },
  1273: { // Pat McAfee
    spouses: [
      { name: 'Samantha McAfee', years: '2020-present', notes: 'Married in 2020.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Color Commentary', show: 'SmackDown', years: '2022-2023', notes: 'Joined the SmackDown commentary team alongside Michael Cole, widely praised for his enthusiasm and natural talent.' },
      { role: 'Color Commentary', show: 'Raw', years: '2024', notes: 'Moved to Monday Night Raw commentary after SmackDown run.' }
    ],
    facts: [
      'Former NFL punter for the Indianapolis Colts (2009-2016). Two-time Pro Bowl selection.',
      'Hosts "The Pat McAfee Show," a popular sports talk show.',
      'Had notable matches at NXT TakeOver and WrestleMania against the likes of Adam Cole and Austin Theory.',
      'Known for his incredible athleticism and willingness to take big bumps despite limited wrestling training.',
    ],
  },
  1274: { // Robert Stone
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Robbie E (Robert Strauss). Previously known as Robbie E in TNA/Impact Wrestling.',
      'Managed the "Robert Stone Brand" in NXT, representing various wrestlers.',
      'Won the TNA Television Championship during his time in Impact Wrestling.',
    ],
  },
  1275: { // Enzo Amore
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2018', incident: 'Sexual assault investigation', details: 'Suspended and released by WWE after a sexual assault allegation became public. The investigation was closed with no charges filed due to insufficient evidence.' }
    ],
    announcing: [],
    facts: [
      'Real name is Eric Arndt. From Hackensack, New Jersey.',
      'His catchphrase "My name is Enzo Amore and I am a certified G and a bonafide stud, and you CAN\'T TEACH THAT!" became one of WWE\'s most popular promos.',
      'Formed an extremely popular tag team with Big Cass in NXT and on the main roster.',
      'After WWE, pursued a rap career under the name "nZo" and "Real1."',
      'Suffered a concussion during a match at the Payback 2016 PPV.',
    ],
  },
  1276: { // Big Cass
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is William Morrissey. Stands 7 feet tall.',
      'Formed a popular tag team with Enzo Amore in NXT and on the main roster.',
      'Openly discussed his battles with alcoholism and mental health issues after his WWE release.',
      'Competed in Impact Wrestling and AEW as W. Morrissey after leaving WWE.',
    ],
  },
  1277: { // Von Wagner
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Large powerhouse competitor who stood out for his imposing size in NXT.',
      'Was aligned with Robert Stone as his manager in NXT.',
      'Known for his power-based offensive style in NXT 2.0.',
    ],
  },
  1281: { // Sanga
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Veer Mahaan (Rinku Singh). Originally from India.',
      'Was a professional baseball pitcher, signed by the Pittsburgh Pirates after winning the Indian reality show "Million Dollar Arm."',
      'His story was adapted into the 2014 Disney film "Million Dollar Arm" starring Jon Hamm.',
      'Transitioned from baseball to professional wrestling through the WWE Performance Center.',
    ],
  },
  1282: { // Ikemen Jiro
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Osaka, Japan. "Ikemen" translates to "handsome man" in Japanese.',
      'Known for his flashy jacket collection, wearing unique and colorful jackets to the ring.',
      'Trained in Japan before signing with WWE\'s NXT brand.',
    ],
  },
  1283: { // Boa
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tian Bing. From China, one of the few Chinese-born wrestlers in WWE history.',
      'Trained at the WWE Performance Center and competed primarily in NXT.',
      'Was part of a horror-themed storyline involving Mei Ying in NXT.',
    ],
  },
  1284: { // Xyon Quinn
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Daniel Vidot. From Australia.',
      'Was a professional rugby league player in the NRL (National Rugby League) before transitioning to wrestling.',
      'Played for the Brisbane Broncos, Gold Coast Titans, and Canberra Raiders in the NRL.',
    ],
  },
  1285: { // Edris Enofe
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Teamed with Malik Blade as a regular tag team in NXT.',
      'Known for his athletic, high-flying style in NXT.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1286: { // Malik Blade
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Formed a tag team with Edris Enofe in NXT.',
      'Known for his energetic in-ring style and fan-friendly demeanor.',
      'Developed through the WWE Performance Center system.',
    ],
  },
  1287: { // Odyssey Jones
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2023', incident: 'WWE release', details: 'Released by WWE amid reported allegations of misconduct. Details were not fully publicized.' }
    ],
    announcing: [],
    facts: [
      'Known for his large frame and surprising agility.',
      'Was a fan favorite in NXT before being called up to the main roster.',
      'Competed on the main roster alongside the New Day before his release.',
    ],
  },
  1288: { // Dante Chen
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Singapore, the first Singaporean wrestler signed by WWE.',
      'Trained at the WWE Performance Center.',
      'Competed regularly on NXT programming.',
    ],
  },
  1289: { // Channing Lorenzo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Member of Tony D\'Angelo\'s "The Family" faction in NXT.',
      'Played a mob-themed enforcer character in NXT.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1290: { // Luca Crusifino
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Part of Tony D\'Angelo\'s "The Family" faction in NXT.',
      'Played a wise-guy mob character alongside Channing Lorenzo.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1291: { // Adrianna Reese
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competed in NXT as a developing talent.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1292: { // Brooks Jensen
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Son of former WWE wrestler Bull Buchanan (Barry Buchanan).',
      'Formed a tag team with Josh Briggs in NXT.',
      'Had storylines involving Fallon Henley as their associated valet in NXT.',
    ],
  },
  1293: { // Josh Briggs
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Stands 6\'7". Known for his hard-hitting power style.',
      'Won the NXT Tag Team Championship with Brooks Jensen.',
      'Competed on the independent circuit before signing with WWE.',
    ],
  },
  1295: { // Jagger Reid
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Previously performed as James Drake in NXT UK, where he teamed with Zack Gibson as Grizzled Young Veterans.',
      'Won the NXT UK Tag Team Championship as part of Grizzled Young Veterans.',
      'Formed The Dyad with Rip Fowler in NXT as part of Joe Gacy\'s Schism faction.',
    ],
  },
  1296: { // Rip Fowler
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Previously performed as Jax Dane on the independent circuit.',
      'Formed The Dyad tag team with Jagger Reid in NXT as part of the Schism faction led by Joe Gacy.',
      'Had an extensive career on the indie scene before joining WWE.',
    ],
  },
  1297: { // Joe Gacy
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Led the Schism faction in NXT, which included Jagger Reid, Rip Fowler, and Ava.',
      'His character explored cult-leader themes in NXT.',
      'Competed on the independent circuit before signing with WWE.',
    ],
  },
  1299: { // Brinley Reece
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Was a college cheerleader and dancer before joining WWE.',
      'Competed as a developing talent in NXT.',
    ],
  },
  1300: { // Wren Sinclair
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Became associated with the No Quarter Catch Crew faction in NXT.',
      'Competed as a developing talent in NXT.',
      'Known for her energetic character work.',
    ],
  },
  1301: { // Tavion Heights
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Background in amateur wrestling.',
      'Competed as a developing talent in NXT.',
    ],
  },
  1302: { // Tyriek Igwe
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Teamed with Tyson Dupont as a tag team in NXT.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1303: { // Tyson Dupont
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Teamed with Tyriek Igwe as a tag team in NXT.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1304: { // Shawn Spears
    spouses: [
      { name: 'Peyton Royce (Cassie Lee)', years: '2019-present', notes: 'Married fellow professional wrestler Cassie Lee, known in WWE as Peyton Royce of The IIconics.' }
    ],
    children: [
      { name: 'Daughter', born: 2023, notes: 'First child together.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ronnie Arneill. From Niagara Falls, Ontario, Canada.',
      'Previously performed as Tye Dillinger in WWE NXT, known for his "Perfect 10" gimmick where crowds would chant "10!" for him.',
      'Competed in AEW and was a member of The Pinnacle faction led by MJF.',
      'Originally signed with WWE in 2006 and had a long developmental run before gaining popularity in NXT.',
    ],
  },
  1309: { // Joaquin Wilde
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is DJZ (Giovani Eufemia). Previously known as DJ Zema Ion and DJZ in TNA/Impact Wrestling.',
      'Won the TNA X Division Championship.',
      'Part of Legado Del Fantasma faction led by Santos Escobar in NXT.',
    ],
  },
  1310: { // Cruz Del Toro
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Previously known as Raul Mendoza. From Mexico City, Mexico.',
      'Competed in the Cruiserweight Classic tournament in 2016.',
      'Part of Legado Del Fantasma faction led by Santos Escobar in NXT and on the main roster.',
    ],
  },
  1311: { // Scrypts
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Also performed as Reggie on the main roster. Real name is Reginal Thomas.',
      'Former Cirque du Soleil performer with an acrobatic background.',
      'Had a character transformation from the acrobatic Reggie to the masked Scrypts persona in NXT.',
    ],
  },
  1312: { // Guru Raaj
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Of Indian descent. Competed as a lower-card talent in NXT.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1314: { // Valentina Feroz
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Brazilian jiu-jitsu practitioner who transitioned into professional wrestling.',
      'Competed as a developing talent in NXT.',
    ],
  },
  1315: { // Yulisa Leon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'From Puerto Rico. Teamed with Valentina Feroz in NXT.',
      'Trained at the WWE Performance Center.',
    ],
  },
  1317: { // Donovan Dijak
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Christopher Dijak. Known as Dominik Dijakovic and T-BAR during various WWE runs.',
      'Stands 6\'7" and is known for an incredibly athletic big-man style, performing moonsaults despite his size.',
      'Had notable feuds with Keith Lee in NXT that were critically acclaimed.',
      'Was part of the Retribution faction before reverting to his Dijak identity.',
    ],
  },
  1318: { // Mace
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Commentary', show: 'Raw', years: '2019-2019', notes: 'Served briefly as a commentator on Raw under his real name Dio Maddin before moving to an in-ring role.' }
    ],
    facts: [
      'Real name is Brennan Williams (also known as Dio Maddin). Was a college football player.',
      'Was a member of the Retribution faction under the name Mace.',
      'Briefly served on Raw commentary in 2019 before Brock Lesnar attacked him on-screen, transitioning him to an in-ring role.',
    ],
  },
  1319: { // Slapjack
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Slapjack was the Retribution faction identity of Shane Thorne (Shane Haste).',
      'The masked Retribution gimmick was a departure from his tag team work as part of The Mighty.',
      'After Retribution disbanded, he was released from WWE.',
    ],
  },
  1322: { // Deuce
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Reiher Jr. Son of legendary wrestler Jimmy "Superfly" Snuka.',
      'Formed the 1950s greaser-themed tag team Deuce & Domino with Cliff Compton.',
      'Won the WWE Tag Team Championship with Domino in 2007.',
    ],
  },
  1323: { // Domino
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Cliff Compton. Formed the Deuce & Domino tag team.',
      'Won the WWE Tag Team Championship with Deuce.',
      'Had an active career on the independent circuit after leaving WWE.',
    ],
  },
  1324: { // Reno
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Rick Cornell. Competed primarily in WCW.',
      'Won the WCW Hardcore Championship.',
      'Was part of the Natural Born Thrillers stable in WCW alongside Sean O\'Haire, Chuck Palumbo, and others.',
    ],
  },
  1336: { // B-Fab
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Briana Brandy. A rapper, singer, and songwriter in addition to being a wrestler.',
      'Was part of the Hit Row faction alongside Top Dolla, Ashante Adonis, and Swerve Strickland.',
      'Performed Hit Row\'s entrance music and raps.',
    ],
  },
  1337: { // Top Dolla
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is AJ Francis. Former NFL player who played for several teams.',
      'Was a member of the Hit Row faction in NXT and on the main roster.',
      'Played college football at the University of Maryland.',
    ],
  },
  1338: { // Ashante Adonis
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tehuti Miles. Was part of the Hit Row faction.',
      'Trained at the WWE Performance Center.',
      'Known for his charismatic persona and athletic in-ring style.',
    ],
  },
  1343: { // Mr. T
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Laurence Tureaud. Famous actor known for "The A-Team" and "Rocky III."',
      'Teamed with Hulk Hogan in the main event of the first WrestleMania (1985) against Roddy Piper and Paul Orndorff.',
      'Also competed at WrestleMania 2 in a boxing match against "Rowdy" Roddy Piper.',
      'Inducted into the WWE Hall of Fame in 2014.',
      'His involvement was crucial to establishing WrestleMania as a mainstream crossover event.',
    ],
  },
  1345: { // Bad Bunny
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Benito Antonio Martinez Ocasio. Puerto Rican reggaeton and Latin trap artist, one of the best-selling music artists in the world.',
      'Performed his song "Booker T" live at the Royal Rumble 2021.',
      'Competed at WrestleMania 37, teaming with Damian Priest to defeat The Miz and John Morrison. His in-ring performance was widely praised.',
      'Also competed at WrestleMania 38, defeating The Miz in a singles match at WrestleMania Backlash 2022.',
      'Trained extensively with WWE talent and showed remarkable athleticism and dedication to the craft.',
    ],
  },
  1346: { // Lawrence Taylor
    spouses: [],
    children: [],
    legalIssues: [
      { year: '1995', incident: 'Tax evasion', details: 'Faced financial and legal troubles related to tax issues throughout the 1990s.' },
      { year: '2009', incident: 'Sexual misconduct charge', details: 'Pleaded guilty to sexual misconduct with an underage girl. Registered as a sex offender.' }
    ],
    announcing: [],
    facts: [
      'Full name Lawrence Julius Taylor. Legendary NFL linebacker for the New York Giants, widely considered one of the greatest football players of all time.',
      'Main evented WrestleMania XI (1995) against Bam Bam Bigelow, winning the match.',
      'Two-time Super Bowl champion and NFL MVP. Inducted into the Pro Football Hall of Fame in 1999.',
      'One of the most high-profile celebrity appearances in WrestleMania history.',
    ],
  },
  1347: { // Floyd Mayweather
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2012', incident: 'Domestic battery conviction', details: 'Sentenced to 90 days in jail for domestic battery against his ex-girlfriend. Served two months.' }
    ],
    announcing: [],
    facts: [
      'Full name Floyd Joy Mayweather Jr. Retired with a 50-0 professional boxing record.',
      'Competed at WrestleMania XXIV (2008) against Big Show in a No DQ match, winning the bout.',
      'One of the highest-paid athletes in sports history.',
      'His WrestleMania appearance featured a storyline that began at No Way Out 2008 when he broke Big Show\'s nose.',
    ],
  },
  1348: { // Tyson Fury
    spouses: [
      { name: 'Paris Fury', years: '2008-present', notes: 'Childhood sweethearts who married in 2008. Have seven children together.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Full name Tyson Luke Fury. WBC and lineal heavyweight boxing champion from Manchester, England.',
      'Defeated Braun Strowman at WWE Crown Jewel 2019 in Saudi Arabia by countout.',
      'Named after Mike Tyson by his father. Known as "The Gypsy King."',
      'Has been open about his struggles with depression and mental health, helping to raise awareness.',
    ],
  },
  1349: { // Cain Velasquez
    spouses: [
      { name: 'Michelle Velasquez', years: '2011-present', notes: 'Married.' }
    ],
    children: [],
    legalIssues: [
      { year: '2022', incident: 'Attempted murder charge', details: 'Charged with attempted murder after allegedly shooting at a man accused of molesting a relative. Spent eight months in custody before being released on bail. Charges resolved in 2024.' }
    ],
    announcing: [],
    facts: [
      'Former UFC Heavyweight Champion, widely regarded as one of the greatest MMA heavyweights.',
      'Appeared at WWE Crown Jewel 2019, confronting and attacking Brock Lesnar.',
      'Had a brief WWE run that was cut short by a knee injury.',
      'Two-time NCAA Division I All-American wrestler at Arizona State University.',
    ],
  },
  1350: { // Drew Carey
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Famous comedian, actor, and TV host known for "The Drew Carey Show" and "The Price is Right."',
      'Entered the Royal Rumble match in 2001, famously eliminated himself.',
      'Inducted into the WWE Hall of Fame in 2011 in the celebrity wing.',
      'His Royal Rumble appearance was a comedic segment where he offered money to Kane to spare him.',
    ],
  },
  1351: { // No Way Jose
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Levis Valenzuela Jr. Of Dominican descent.',
      'Known for his conga line entrance where fans and other performers would dance to the ring with him.',
      'Was a popular act in NXT before being called up to the main roster.',
    ],
  },
  1352: { // Kassius Ohno
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Chris Hero. One of the most respected independent wrestlers of his generation.',
      'Known for his devastating elbow strikes, a move he perfected on the independent circuit.',
      'Had two separate runs in NXT (2012-2013 and 2017-2020).',
      'Won numerous championships in ROH, PWG, and other major independent promotions as Chris Hero.',
      'Was part of the Kings of Wrestling tag team with Claudio Castagnoli (Cesaro).',
    ],
  },
  1353: { // Mordecai
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kevin Fertig. Later performed as Kevin Thorn in the ECW revival.',
      'The Mordecai character was a pale, religious zealot dressed in all white, intended as a foil to The Undertaker.',
      'The character was quickly abandoned after only a few months on SmackDown in 2004.',
    ],
  },
  1356: { // Jimmy Uso
    spouses: [
      { name: 'Naomi (Trinity Fatu)', years: '2014-present', notes: 'Married fellow WWE wrestler Naomi. Their relationship was featured on the reality show "Total Divas."' }
    ],
    children: [],
    legalIssues: [
      { year: '2013', incident: 'DUI arrest', details: 'Arrested for DUI in Florida.' },
      { year: '2019', incident: 'Second DUI arrest', details: 'Arrested for DUI in Pensacola, Florida. Also cited for speeding.' },
      { year: '2019', incident: 'Third DUI arrest', details: 'Arrested again for DUI later that same year in Escambia County.' }
    ],
    announcing: [],
    facts: [
      'Real name is Jonathan Solofa Fatu. Twin brother of Jey Uso. Son of Rikishi and grandson of Peter Maivia.',
      'Member of the legendary Anoa\'i wrestling family.',
      'As part of The Usos, is one of the most decorated tag teams in WWE history, holding the tag titles numerous times.',
      'Was part of The Bloodline faction alongside Roman Reigns.',
    ],
  },
  1357: { // Xavier Woods
    spouses: [
      { name: 'Jess Watson', years: '2015-present', notes: 'Married.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Austin Watson. Holds a Ph.D. in educational psychology from Capella University.',
      'Hosts the popular YouTube gaming channel "UpUpDownDown" which features numerous WWE wrestlers.',
      'Co-founder of The New Day with Kofi Kingston and Big E, one of the most popular and decorated factions in WWE history.',
      'Won the King of the Ring tournament in 2021.',
      'Is an avid gamer and has competed in esports events.',
    ],
  },
  1358: { // Alex Shelley
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Patrick Martin. From Detroit, Michigan.',
      'One half of the Motor City Machine Guns with Chris Sabin, widely regarded as one of the greatest tag teams of their era.',
      'Won the TNA/Impact World Tag Team Championship multiple times with Sabin.',
      'Known for his technical wrestling ability and innovation in tag team wrestling.',
    ],
  },
  1359: { // Chris Sabin
    spouses: [
      { name: 'Velvet Sky (Jamie Szantyr)', years: '2016-present', notes: 'Married fellow professional wrestler Velvet Sky.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Joshua Moore. From Detroit, Michigan.',
      'Won the TNA World Heavyweight Championship in 2013, cashing in the X Division title for the opportunity.',
      'One half of the Motor City Machine Guns with Alex Shelley.',
      'A six-time TNA X Division Champion, one of the most decorated X Division wrestlers in history.',
    ],
  },
  1360: { // Nick Aldis
    spouses: [
      { name: 'Mickie James', years: '2015-present', notes: 'Partner/married to former WWE Women\'s Champion Mickie James. They have a son together.' }
    ],
    children: [
      { name: 'Donovan Patrick Aldis', born: 2014, notes: 'Son with Mickie James.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Nicholas Aldis. From King\'s Lynn, Norfolk, England.',
      'Was the longest-reigning NWA Worlds Heavyweight Champion in the modern era.',
      'Previously performed in TNA/Impact Wrestling as Magnus, winning the TNA World Heavyweight Championship.',
      'Became the SmackDown General Manager in WWE in 2023.',
    ],
  },
  1362: { // El Torito
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Mascarita Dorada. A Mexican mini-estrella (dwarf wrestler) from Mexico City.',
      'Served as the mascot for Los Matadores (Primo and Epico) in WWE.',
      'Had a WeeLC match at Extreme Rules 2014 against Hornswoggle that was surprisingly well received.',
      'Highly accomplished in Mexican lucha libre, winning numerous championships.',
    ],
  },
  1363: { // Shanky
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Saurav Gurjar. From Haryana, India.',
      'Stands approximately 7 feet tall. Was formerly a basketball player in India.',
      'Had a comedic dancing gimmick alongside Jinder Mahal on SmackDown.',
    ],
  },
  1364: { // Reggie
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Reginal Thomas. Former Cirque du Soleil performer.',
      'His acrobatic abilities made him stand out, frequently performing flips and gymnastic moves during matches.',
      'Won the WWE 24/7 Championship multiple times.',
      'Also performed as Scrypts in NXT.',
    ],
  },
  1365: { // Great Muta
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Keiji Mutoh. One of the most iconic wrestlers in Japanese wrestling history.',
      'Popularized the "mist" — spraying colored poison mist into opponents\' faces.',
      'Innovated the Shining Wizard knee strike, which has been adopted by countless wrestlers worldwide.',
      'Won world championships in NJPW, AJPW, WCW, and multiple Japanese promotions.',
      'Had his retirement match in 2023 at the Tokyo Dome, one of the most emotional farewell events in wrestling history.',
      'Inducted into the WWE Hall of Fame in 2023.',
    ],
  },
  1366: { // Jushin Thunder Liger
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Keiichi Yamada. One of the most influential junior heavyweight wrestlers of all time.',
      'His character was based on a manga/anime series called "Jushin Liger."',
      'Won the IWGP Junior Heavyweight Championship a record 11 times.',
      'Had his final match at NJPW Wrestle Kingdom 14 in January 2020.',
      'Inducted into the WWE Hall of Fame in 2020, despite spending nearly his entire career in Japan.',
      'Competed in over 30 years of professional wrestling across multiple continents.',
    ],
  },
  1367: { // Steve Corino
    spouses: [],
    children: [
      { name: 'Colby Corino', born: 1997, notes: 'Son who also became a professional wrestler.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Steve Corino. From Winnipeg, Manitoba, Canada.',
      'Won the ECW World Heavyweight Championship in 2000.',
      'Became a producer and coach at the WWE Performance Center after his in-ring career.',
      'Was known as "The King of Old School" on the independent circuit.',
    ],
  },
  1368: { // CW Anderson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Carl Anderson. Known for his hard-hitting, old-school style.',
      'Was an ECW original, competing throughout the promotion\'s final years.',
      'Billed as a descendant of the famous Anderson wrestling family, though not actually related.',
      'Known for his devastating left-hand spinebuster, inspired by Arn Anderson.',
    ],
  },
  1369: { // Aiden English
    spouses: [
      { name: 'Shaul Guerrero', years: '2016-2019', notes: 'Married the daughter of the late Eddie Guerrero. They later divorced.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Commentary', show: '205 Live', years: '2020-2021', notes: 'Provided commentary for 205 Live after transitioning from in-ring competition.' }
    ],
    facts: [
      'Real name is Matthew Rehwoldt. Trained as a Shakespearean actor before entering wrestling.',
      'Was one half of The Vaudevillains tag team with Simon Gotch.',
      'Became Rusev\'s singing herald, performing operatic introductions as "The Artiste" Aiden English.',
      'Has a background in theater and used his vocal talents as part of his character work.',
    ],
  },
  1370: { // Simon Gotch
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kevin Kesar. Formed The Vaudevillains tag team with Aiden English, a vaudeville-era themed team.',
      'Named after the legitimate early 20th-century professional wrestling champion Frank Gotch.',
      'Won the NXT Tag Team Championship with Aiden English.',
    ],
  },
  1371: { // Jordan Devlin
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2020', incident: 'Speaking Out allegations', details: 'Accused of domestic abuse during the #SpeakingOut movement. He denied the allegations.' }
    ],
    announcing: [],
    facts: [
      'Real name is Jordan Devlin. From Bray, County Wicklow, Ireland.',
      'Trained by Finn Balor (as Fergal Devitt) and billed as his protege.',
      'Won the NXT Cruiserweight Championship in 2020.',
      'Later performed under the name JD McDonagh in NXT and on the main roster.',
    ],
  },
  1372: { // T-BAR
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'T-BAR was the Retribution faction identity of Dominik Dijakovic (Christopher Dijak).',
      'The masked Retribution character was widely seen as a misuse of Dijak\'s considerable in-ring talent.',
      'After Retribution disbanded, he eventually returned to the Dijak name.',
    ],
  },
  1373: { // Snooki
    spouses: [
      { name: 'Jionni LaValle', years: '2014-present', notes: 'Married in 2014 after several years together. They have three children.' }
    ],
    children: [
      { name: 'Lorenzo Dominic LaValle', born: 2012, notes: 'Son.' },
      { name: 'Giovanna Marie LaValle', born: 2014, notes: 'Daughter.' },
      { name: 'Angelo James LaValle', born: 2019, notes: 'Son.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Nicole Elizabeth Polizzi. Famous reality TV star from "Jersey Shore."',
      'Competed at WrestleMania XXVII (2011), teaming with Trish Stratus and John Morrison against Dolph Ziggler and LayCool.',
      'Performed a surprisingly athletic cartwheel splash during her WrestleMania match.',
    ],
  },
  1374: { // Johnny Knoxville
    spouses: [
      { name: 'Melanie Clapp', years: '1995-2008', notes: 'First marriage. One daughter together.' },
      { name: 'Naomi Nelson', years: '2010-present', notes: 'Second marriage.' }
    ],
    children: [
      { name: 'Madison Clapp', born: 1996, notes: 'Daughter from first marriage.' },
      { name: 'Rocko Akira Clapp', born: 2009, notes: 'Son with Naomi Nelson.' },
      { name: 'Arlo Lemoyne Yoko Clapp', born: 2011, notes: 'Daughter with Naomi Nelson.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Philip John Clapp. Creator and star of the "Jackass" franchise.',
      'Entered the 2022 Royal Rumble match and competed against Sami Zayn at WrestleMania 38 in an Anything Goes match.',
      'His WrestleMania match with Sami Zayn was filled with comedy spots involving various "Jackass" props and stunts.',
      'No stranger to pain given his career in "Jackass," which prepared him uniquely for wrestling bumps.',
    ],
  },
  1375: { // Rob Gronkowski
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Full name Robert James Gronkowski. Legendary NFL tight end, primarily for the New England Patriots.',
      'Won the WWE 24/7 Championship at WrestleMania 36 (2020) by jumping off a platform onto a group of wrestlers.',
      'Hosted WrestleMania 36, which was the first WrestleMania held without a live audience due to COVID-19.',
      'Four-time Super Bowl champion and one of the greatest tight ends in NFL history.',
    ],
  },
  1376: { // Shane Thorne
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Shane Haste. From Melbourne, Australia.',
      'Formed TMDK (The Mighty Don\'t Kneel) with Nick Miller, competing in NXT as The Mighty.',
      'Had an extensive career in Pro Wrestling NOAH in Japan before joining WWE.',
      'Also performed as Slapjack in the Retribution faction.',
    ],
  },
  1377: { // Nick Miller
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Mikey Nicholls. From Melbourne, Australia.',
      'Formed TMDK (The Mighty Don\'t Kneel) with Shane Thorne, competing in NXT as The Mighty.',
      'Had a highly successful career in Pro Wrestling NOAH in Japan.',
    ],
  },
  1378: { // Arturo Ruas
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Thiago Oliveira. Brazilian mixed martial artist and professional wrestler.',
      'Background in Brazilian jiu-jitsu and MMA before transitioning to pro wrestling.',
      'Competed in NXT with a submission-heavy, MMA-influenced style.',
    ],
  },
  1379: { // Bushwhacker Luke
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Luke Williams. From Auckland, New Zealand.',
      'One half of The Bushwhackers with Butch Miller, known for their arm-swinging walk and crowd interaction.',
      'Before their comedic WWF run, they were known as The Sheepherders and competed in ultra-violent matches worldwide.',
      'Inducted into the WWE Hall of Fame in 2015 as part of The Bushwhackers.',
      'The Bushwhackers held tag team championships in numerous territories throughout the 1970s and 1980s.',
    ],
  },
  1380: { // Bushwhacker Butch
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Robert Miller. From Auckland, New Zealand.',
      'One half of The Bushwhackers with Luke Williams, one of WWE\'s most beloved tag teams.',
      'As The Sheepherders, they were known as one of the most violent tag teams in wrestling before adopting the family-friendly Bushwhackers gimmick.',
      'Inducted into the WWE Hall of Fame in 2015 as part of The Bushwhackers.',
      'Competed in wrestling for over 40 years across multiple countries.',
    ],
  },
  1381: { // Hawk
    spouses: [
      { name: 'Dale Wolfe', years: '1992–2003', notes: 'Married until his death in 2003.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Michael Hegstrand. Born in Minneapolis, Minnesota.',
      'One half of the legendary Road Warriors/Legion of Doom tag team with Animal.',
      'Known for his face paint, spiked shoulder pads, and intense promos.',
      'The Road Warriors were one of the most dominant tag teams in wrestling history, holding titles in virtually every major promotion.',
      'Struggled with substance abuse issues throughout his career, which were briefly incorporated into a controversial WWE storyline in 1998.',
      'Inducted into the WWE Hall of Fame in 2011 as part of the Legion of Doom.'
    ],
  },
  1382: { // Animal
    spouses: [
      { name: 'Julie Laurinaitis', years: '1990–2020', notes: 'Married until his death in 2020.' }
    ],
    children: [
      { name: 'James Laurinaitis', born: 1986, notes: 'Became a standout NFL linebacker for the St. Louis Rams.' },
      { name: 'Joseph Laurinaitis Jr.', born: 1988, notes: 'Son' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Joseph Laurinaitis. Born in Philadelphia, Pennsylvania.',
      'One half of the Road Warriors/Legion of Doom with Hawk, one of the most decorated tag teams ever.',
      'Brother of John Laurinaitis, who became a WWE executive and on-screen authority figure.',
      'His son James Laurinaitis was an All-American at Ohio State and played eight NFL seasons.',
      'The Road Warriors\' finishing move, the Doomsday Device, became one of the most iconic tag team finishers.',
      'Inducted into the WWE Hall of Fame in 2011 as part of the Legion of Doom.'
    ],
  },
  1383: { // Joey Mercury
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2007', incident: 'Drug-related arrest', details: 'Arrested on pharmacy fraud charges related to obtaining prescription drugs. Was released by WWE.' },
      { year: '2011', incident: 'Warrant arrest', details: 'Arrested on outstanding warrant related to earlier charges.' }
    ],
    announcing: [],
    facts: [
      'Real name is Adam Birch. Born in Leonardtown, Maryland.',
      'One half of MNM tag team with Johnny Nitro (John Morrison) and managed by Melina.',
      'Suffered a gruesome broken nose at Armageddon 2006 when hit by a ladder, requiring reconstructive surgery.',
      'Became a backstage producer and agent for WWE after retiring from in-ring competition.',
      'Struggled publicly with painkiller addiction following multiple injuries.'
    ],
  },
  1384: { // Epico Colon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Orlando Colon Nieves. Part of the Colon wrestling dynasty from Puerto Rico.',
      'Cousin of Primo and Carlito. Son of wrestler Jose Estrada Sr.',
      'Won the WWE Tag Team Championship with Primo in 2012.',
      'Competed in NXT under his real name and later returned to Puerto Rico\'s World Wrestling Council.',
      'Third-generation professional wrestler from one of Puerto Rico\'s most storied wrestling families.'
    ],
  },
  1385: { // Ax
    spouses: [
      { name: 'Betty Eadie', years: '1975–2023', notes: 'Long-term marriage until his death.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Bill Eadie. Born in Brownsville, Pennsylvania.',
      'One half of Demolition with Smash, the longest-reigning WWF Tag Team Champions at 478 days.',
      'Previously competed as Masked Superstar and Super Machine in various promotions.',
      'Demolition\'s face paint and leather attire drew comparisons to the Road Warriors.',
      'After wrestling, became a school teacher in Pennsylvania.',
      'Inducted into many fans\' wish lists for the WWE Hall of Fame but Demolition has not yet been inducted.'
    ],
  },
  1387: { // Mo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Robert Horne. Born in Philadelphia, Pennsylvania.',
      'Best known as one half of Men on a Mission tag team with Mabel (Viscera/Big Daddy V).',
      'Also served as Mabel\'s manager when Mabel competed as King Mabel after winning King of the Ring 1995.',
      'Trained at Afa the Wild Samoan\'s wrestling school.',
      'Men on a Mission\'s gimmick was a hip-hop inspired tag team with colorful attire.'
    ],
  },
  1388: { // Bull Buchanan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Barry Buchanan. Born in Florence, South Carolina.',
      'Competed under multiple gimmicks in WWE including Recon (Truth Commission), B-Squared, and Bull Buchanan.',
      'Teamed with The Goodfather as part of the Right to Censor stable.',
      'Had a brief run as B-Squared alongside John Cena in the early days of Cena\'s career.',
      'Known for his impressive agility despite his large frame, able to perform a top-rope leg drop.'
    ],
  },
  1392: { // Jakara Jackson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Signed with WWE and assigned to NXT as part of their women\'s division.',
      'Became a member of the Meta-Four faction in NXT alongside Noam Dar, Lash Legend, and Oro Mensah.',
      'Formed a tag team with Lash Legend that became a prominent pairing in NXT\'s women\'s tag division.',
      'Known for her charisma and personality as part of the Meta-Four group.'
    ],
  },
  1393: { // Kiana James
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kiana Van Ness. Born in Orlando, Florida.',
      'Her character was a business-savvy corporate woman who carried a briefcase to the ring.',
      'Competed primarily in NXT\'s women\'s division.',
      'Formed a tag team with Izzi Dame in NXT.',
      'Was released from WWE in 2024 after spending her entire WWE career in NXT.'
    ],
  },
  1395: { // Danny Davis
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Daniel Davis. Known primarily as a referee turned wrestler in the WWF.',
      'Was kayfabe "suspended" as a referee for biased officiating, favoring the Hart Foundation and other heels.',
      'Competed at WrestleMania III in a mixed tag match with the Hart Foundation against the British Bulldogs and Tito Santana.',
      'Later became a trainer at Ohio Valley Wrestling (OVW), WWE\'s former developmental territory.',
      'Helped train numerous future WWE stars including John Cena, Batista, Brock Lesnar, and Randy Orton at OVW.'
    ],
  },
  1396: { // Veer Mahaan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Rinku Singh. Born in Bhadohi, Uttar Pradesh, India.',
      'Was discovered through the reality TV show "The Million Dollar Arm" — a baseball pitching contest in India.',
      'Signed a professional baseball contract with the Pittsburgh Pirates and played in their minor league system.',
      'His journey from Indian javelin thrower to minor league baseball player to WWE was documented in the Disney film "Million Dollar Arm" (2014).',
      'Debuted on WWE main roster on Raw in 2022 after an extended "Veer is coming" promotional campaign.'
    ],
  },
  1397: { // Joe Hendry
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Born in Edinburgh, Scotland.',
      'Known for his viral entrance songs where he creates custom musical parodies about his opponents.',
      'Had a successful career in TNA/Impact Wrestling before joining NXT in 2024.',
      'His "I Believe in Joe Hendry" catchphrase and song became a viral sensation on social media.',
      'Holds a degree in marketing, which he incorporates into his character work and self-promotion.',
      'Known for his comedic timing and ability to connect with crowds through music and humor.'
    ],
  },
  1398: { // Je'Von Evans
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Born in 2004 in Akron, Ohio, making him one of the youngest wrestlers signed by WWE.',
      'Signed with WWE as a teenager and was assigned to NXT.',
      'Known for his high-flying, explosive athletic style.',
      'Quickly became a fan favorite in NXT due to his energy and natural charisma.',
      'Represents a new generation of young talent being developed through NXT.'
    ],
  },
  1399: { // Arianna Grace
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Giuliana Daniela Lanzetti. Daughter of wrestler Santino Marella.',
      'Her character was a pageant queen who incorporated beauty pageant mannerisms.',
      'Competed in NXT\'s women\'s division.',
      'Second-generation wrestler carrying on her father\'s legacy in WWE.',
      'Her comedic character work drew comparisons to her father\'s entertaining persona.'
    ],
  },
  1400: { // Izzi Dame
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Signed with WWE and competed in NXT\'s women\'s division.',
      'Stood out due to her height and athletic build, giving her a physical advantage.',
      'Formed a tag team partnership with Kiana James in NXT.',
      'Was released from her WWE contract in 2024.',
      'Known for her power-based wrestling style.'
    ],
  },
  1401: { // Outback Jack
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Peter Stilsbury. Born in Adelaide, South Australia.',
      'His character was an Australian outback bushman, debuting in WWF in 1987 with elaborate vignettes filmed in Australia.',
      'Despite heavy promotional investment, his WWF run was short-lived as the character failed to get over.',
      'Previously wrestled in Australia and Japan before coming to the WWF.',
      'His promotional vignettes are remembered as one of the more expensive failed gimmick launches of the era.'
    ],
  },
  1402: { // Jaida Parker
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competed in NXT\'s women\'s division as a hard-hitting competitor.',
      'Played college basketball before transitioning to professional wrestling.',
      'Known for her physical, aggressive in-ring style.',
      'Has been featured in prominent storylines in NXT including feuds with top women\'s division talent.',
      'Represents WWE\'s push to develop homegrown female talent through the NXT system.'
    ],
  },
  1403: { // Stephanie Vaquer
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Born in Santiago, Chile.',
      'Had a highly acclaimed career in CMLL (Mexico) and NJPW (Japan) before signing with WWE.',
      'Known as one of the top female wrestlers in the world prior to her WWE signing.',
      'Won multiple championships in CMLL and Stardom.',
      'Her signing to WWE in 2024 was considered a major acquisition for the NXT women\'s division.',
      'Known for her technical wrestling ability and hard-hitting style influenced by lucha libre.'
    ],
  },
  1404: { // Zaria
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Delta Miles. Previously competed as Delta on the independent scene.',
      'Made a dramatic debut at NXT Halloween Havoc 2024.',
      'Known for her imposing physical presence and power-based offense.',
      'Her character has a dark, warrior-like persona.',
      'Quickly positioned as a top prospect in the NXT women\'s division upon arrival.'
    ],
  },
  1405: { // Rick Boogs
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Eric Bugenhagen. Born in Joliet, Illinois.',
      'Known for playing electric guitar during Shinsuke Nakamura\'s entrance on SmackDown.',
      'Was a standout amateur wrestler at the University of Minnesota.',
      'His energetic, guitar-shredding persona made him a fan favorite.',
      'Suffered a serious knee injury at WrestleMania 38 that sidelined him for an extended period.',
      'His character was one of the more unique personality gimmicks on SmackDown before his injury.'
    ],
  },
  1406: { // Dan Spivey
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Daniel Spivey. Born in Apopka, Florida.',
      'Competed as Waylon Mercy in the WWF in 1995, a character inspired by Robert De Niro\'s Max Cady from Cape Fear.',
      'The Waylon Mercy character is considered ahead of its time and inspired the later Bray Wyatt character.',
      'Teamed with Sid Vicious as the Skyscrapers in WCW.',
      'Was forced to retire due to chronic back injuries that cut his career short.',
      'Played college football at the University of Florida.'
    ],
  },
  1407: { // David Flair
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is David Ric Fliehr. Born in Minneapolis, Minnesota.',
      'Son of legendary 16-time world champion Ric Flair.',
      'Won the WCW United States Championship and WCW Tag Team Championship.',
      'Was part of a major WCW storyline involving a controversial pregnancy angle with Stacy Keibler.',
      'Retired from wrestling relatively early, unable to escape the enormous shadow of his father\'s legacy.',
      'His brother Reid Flair also pursued wrestling but tragically passed away in 2013.'
    ],
  },
  1408: { // Chris Nowinski
    spouses: [
      { name: 'Melissa Nowinski', years: '2017–present', notes: 'Married after his transition from wrestling to concussion research.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Christopher Nowinski. Born in Arlington Heights, Illinois.',
      'Harvard University graduate — one of the few Ivy League graduates to compete in WWE.',
      'Won the Tough Enough III competition in 2002.',
      'Retired from wrestling due to post-concussion syndrome and became a leading advocate for brain injury research.',
      'Co-founded the Concussion Legacy Foundation and helped establish the Sports Legacy Institute with Dr. Robert Cantu.',
      'His work has been instrumental in changing concussion protocols across professional sports.'
    ],
  },
  1409: { // Daniel Puder
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Born in Providence, Rhode Island.',
      'Won the $1,000,000 Tough Enough competition in 2004.',
      'Had a famous on-air incident with Kurt Angle where he attempted a kimura lock during a legitimate grappling exchange on SmackDown.',
      'Had an MMA background before entering wrestling.',
      'His WWE career was very brief — he was released in 2005 shortly after winning Tough Enough.',
      'Went into real estate and business ventures after leaving wrestling.'
    ],
  },
  1410: { // Matt Cappotelli
    spouses: [
      { name: 'Lindsay Cappotelli', years: '2016–2018', notes: 'Married before his passing from brain cancer.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Matthew Jason Cappotelli. Born in Cincinnati, Ohio.',
      'Co-won Tough Enough III alongside John Morrison in 2002.',
      'His career was cut short by a brain tumor diagnosis in 2005.',
      'Despite initial successful surgery, the cancer returned and he passed away in 2018 at age 38.',
      'Was remembered fondly by fellow wrestlers and fans for his determination and positive attitude.'
    ],
  },
  1412: { // Mikey
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Mike Mondo. Born in Rochester, New York.',
      'Member of the Spirit Squad faction in WWE in 2006 — a group of male cheerleaders.',
      'The Spirit Squad won the World Tag Team Championship under Freebird Rules.',
      'After the Spirit Squad was disbanded, he continued wrestling on the independent circuit.',
      'Had a brief return to WWE television on NXT in later years.'
    ],
  },
  1414: { // Riley Osborne
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competed in NXT as a high-flying competitor.',
      'Trained at a young age and signed with WWE for their developmental system.',
      'Known for his aerial offense and willingness to take risks in the ring.',
      'Was associated with Chase University faction in NXT alongside Andre Chase.',
      'Represents the next generation of NXT developmental talent.'
    ],
  },
  1415: { // Jimmy Del Ray
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was James Manley. Born in Nashville, Tennessee.',
      'Best known as one half of the Heavenly Bodies tag team with Tom Prichard in Smoky Mountain Wrestling and WWF.',
      'Managed by Jim Cornette throughout much of his career.',
      'The Heavenly Bodies had a notable feud with the Steiner Brothers in WWF.',
      'Also competed in USWA and various other territories throughout his career.'
    ],
  },
  1416: { // Ricky Ortiz
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Richard Green. Born in Miami, Florida.',
      'Was a professional arena football player before transitioning to professional wrestling.',
      'Known for his rally towel gimmick where he would throw towels to the audience.',
      'Competed on ECW brand during its WWE revival era.',
      'His WWE career was relatively brief, lasting from 2008 to 2009.'
    ],
  },
  1417: { // DJ Gabriel
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ryan Genesis. Born in Coventry, England.',
      'His character was a dancing DJ who came to the ring with his dance partner Alicia Fox.',
      'Competed on the ECW brand during its WWE revival era in 2008-2009.',
      'Alicia Fox went on to have a much more successful career in WWE after their pairing ended.',
      'His WWE run was brief, and he returned to the European independent scene after being released.'
    ],
  },
  1418: { // Karl Malone
    spouses: [
      { name: 'Kay Kinsey', years: '1990–present', notes: 'Long-term marriage.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'NBA Hall of Famer known as "The Mailman" who played for the Utah Jazz and Los Angeles Lakers.',
      'Teamed with Diamond Dallas Page against Hulk Hogan and Dennis Rodman at WCW Bash at the Beach 1998.',
      'Had a second WCW appearance at Road Wild 1998 teaming with DDP against Hogan and Bischoff.',
      'Two-time NBA MVP and 14-time NBA All-Star.',
      'His involvement in WCW was part of the company\'s strategy of using celebrity crossovers during the Monday Night Wars.'
    ],
  },
  1419: { // Dennis Rodman
    spouses: [
      { name: 'Annie Bakes', years: '1992–1993', notes: 'Brief marriage.' },
      { name: 'Carmen Electra', years: '1998–1999', notes: 'Famously short-lived marriage lasting only nine days before annulment filing.' },
      { name: 'Michelle Moyer', years: '2003–2012', notes: 'Third marriage; had two children together.' }
    ],
    children: [
      { name: 'Alexis Rodman', born: 1988, notes: 'Daughter from relationship with Annie Bakes' },
      { name: 'DJ Rodman', born: 2001, notes: 'Son; played college basketball at Washington State' },
      { name: 'Trinity Rodman', born: 2002, notes: 'Professional soccer player for the U.S. Women\'s National Team and Washington Spirit' }
    ],
    legalIssues: [
      { year: '1999', incident: 'Domestic violence arrest', details: 'Arrested on domestic violence charges.' },
      { year: '2003–2012', incident: 'Multiple public incidents', details: 'Numerous arrests and public intoxication incidents throughout the 2000s.' }
    ],
    announcing: [],
    facts: [
      'NBA Hall of Famer, five-time NBA champion known for his rebounding and eccentric personality.',
      'Made multiple WCW appearances, most notably teaming with Hulk Hogan against DDP and Karl Malone at Bash at the Beach 1998.',
      'His WCW involvement included missing NBA game preparation time, which generated mainstream controversy.',
      'Known for his friendship with North Korean leader Kim Jong-un, making multiple controversial trips to North Korea.',
      'His daughter Trinity Rodman became one of the top women\'s soccer players in the world.'
    ],
  },
  1420: { // Kevin Federline
    spouses: [
      { name: 'Shar Jackson', years: '2001–2004', notes: 'Relationship, not married. Two children together.' },
      { name: 'Britney Spears', years: '2004–2007', notes: 'High-profile marriage and divorce.' },
      { name: 'Victoria Prince', years: '2013–present', notes: 'Third marriage.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Former backup dancer and ex-husband of pop star Britney Spears.',
      'Made a guest appearance on WWE Raw in January 2007, defeating John Cena in a match with interference.',
      'His appearance was part of WWE\'s strategy to generate mainstream media attention.',
      'The angle was designed to generate heel heat — the crowd was furious when he pinned Cena.',
      'One of the more memorable celebrity guest spots in WWE history due to the sheer audience outrage.'
    ],
  },
  1421: { // Stephen Amell
    spouses: [
      { name: 'Cassandra Jean Amell', years: '2012–present', notes: 'Married; former America\'s Next Top Model contestant.' }
    ],
    children: [
      { name: 'Maverick Alexandra Jean Amell', born: 2013, notes: 'Daughter' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Canadian actor best known for playing Oliver Queen/Green Arrow in the TV series "Arrow."',
      'Competed at SummerSlam 2015 teaming with Neville against Stardust and King Barrett.',
      'Also wrestled at All In 2018 in a singles match against Christopher Daniels.',
      'Is a legitimate wrestling fan who trained for his matches and earned respect from the locker room.',
      'Performed his own stunts on "Arrow" which prepared him well for the physicality of wrestling.'
    ],
  },
  1422: { // Maria Menounos
    spouses: [
      { name: 'Keven Undergaro', years: '2017–present', notes: 'Long-time partner before marriage; married on live TV on New Year\'s Eve.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Television personality, journalist, and entertainment reporter known for work on Extra and E! News.',
      'Competed in multiple WWE matches, including WrestleMania XXVIII where she teamed with Kelly Kelly.',
      'Underwent surgery for a brain tumor (meningioma) in 2017, which was benign.',
      'Is a lifelong wrestling fan who actively sought opportunities to appear in WWE.',
      'Won her WrestleMania match despite competing with a cracked rib suffered during training.'
    ],
  },
  1423: { // Pierre
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Carl Ouellet. Born in Quebec City, Quebec, Canada.',
      'One half of The Quebecers tag team with Jacques Rougeau in the WWF.',
      'The Quebecers won the WWF Tag Team Championship three times.',
      'Also competed in ECW as one of the FBI (Full Blooded Italians) members as PCO (Pierre Carl Ouellet).',
      'Had a career resurgence on the independent scene in the 2010s and 2020s as PCO, known for his extreme style despite his age.'
    ],
  },
  1424: { // Tiger Mask
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'The original Tiger Mask was Satoru Sayama, who revolutionized junior heavyweight wrestling in the early 1980s.',
      'The character is based on a Japanese manga/anime series of the same name.',
      'Made appearances in WWF in the early 1980s, having classic matches with the Dynamite Kid.',
      'Multiple wrestlers have portrayed Tiger Mask over the decades — the most prominent being Sayama (Tiger Mask I) and Mitsuharu Misawa (Tiger Mask II).',
      'The Tiger Mask character has been a cultural icon in Japanese wrestling and inspired generations of masked high-flyers.',
      'Misawa went on to become one of the greatest wrestlers ever as himself in All Japan Pro Wrestling.'
    ],
  },
  1425: { // Ernest Miller
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ernest Miller. Born in Macon, Georgia.',
      'Was a three-time world karate champion before entering professional wrestling.',
      'Known as "The Cat" in WCW, famous for his catchphrase "Somebody call my mama!"',
      'Had a run as WCW Commissioner during the later years of the company.',
      'Made a brief appearance in WWE after the WCW purchase, primarily working as a backstage interviewer.',
      'James Brown made an appearance with him during WCW, connecting to his "funkiest" persona.'
    ],
  },
  1426: { // Glacier
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ray Lloyd. Born in Altoona, Pennsylvania.',
      'His character was heavily inspired by Sub-Zero from the Mortal Kombat video game franchise.',
      'WCW reportedly spent around $35,000 on his entrance with laser effects and snow machines.',
      'His elaborate entrance and gimmick made him one of the most expensive presentations in WCW.',
      'Had a legitimate martial arts background, holding multiple karate championships.',
      'Despite the investment, the Glacier character is often cited as one of WCW\'s most excessive gimmick projects.'
    ],
  },
  1427: { // Nash Carter
    spouses: [
      { name: 'Kimber Lee', years: '2021–2022', notes: 'Marriage ended amid domestic abuse allegations.' }
    ],
    children: [],
    legalIssues: [
      { year: '2022', incident: 'Domestic abuse allegations', details: 'Kimber Lee posted photos alleging domestic abuse, leading to Nash Carter\'s release from WWE.' }
    ],
    announcing: [],
    facts: [
      'Real name is Zachary Green. Born in Dayton, Ohio.',
      'One half of MSK tag team with Wes Lee in NXT, where they won the NXT Tag Team Championship twice.',
      'Previously competed as Zachary Wentz in Impact Wrestling as part of The Rascalz.',
      'Was released from WWE in 2022 following allegations of domestic abuse.',
      'He and Wes Lee were considered one of NXT\'s most exciting tag teams before his release.'
    ],
  },
  1428: { // Deonna Purrazzo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Born in Livingston, New Jersey.',
      'Known as "The Virtuosa" — a technically gifted submission specialist.',
      'Won the Impact Knockouts Championship multiple times, establishing herself as one of the top women in Impact Wrestling.',
      'Originally signed with WWE in 2018 but was released before making an impact. Found stardom in Impact Wrestling.',
      'Signed with WWE/NXT in 2024 for a second run with the company.',
      'Known for her Fujiwara armbar finisher called the Venus de Milo.'
    ],
  },
  1429: { // Zack Gibson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Jack Mayall. Born in Liverpool, England.',
      'Known for his catchphrase "Soon to be recognized!" and heel promos about Liverpool.',
      'Won the NXT UK Tag Team Championship with James Drake as Grizzled Young Veterans.',
      'Was repackaged as part of Gallus in NXT under the name Wolfgang\'s stablemate before becoming part of various factions.',
      'Considered one of the top British wrestlers of his generation and a staple of NXT UK.'
    ],
  },
  1430: { // James Drake
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Drake. Born in Manchester, England.',
      'One half of the Grizzled Young Veterans tag team with Zack Gibson in NXT UK.',
      'Won the NXT UK Tag Team Championship as part of the Grizzled Young Veterans.',
      'Was later repackaged as part of Gallus in NXT.',
      'Known for his hard-hitting style and chemistry with tag partner Zack Gibson.'
    ],
  },
  1431: { // Nikita Koloff
    spouses: [
      { name: 'Mandy Koloff', years: '1983–1989', notes: 'First wife; passed away from Hodgkin\'s lymphoma.' },
      { name: 'Victoria Koloff', years: '1993–present', notes: 'Second wife.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Nelson Scott Simpson. Born in Minneapolis, Minnesota — not Russia as his character portrayed.',
      'Created the "Russian Nightmare" character during the Cold War era as a counter to Dusty Rhodes\' "American Dream."',
      'Despite being billed from the Soviet Union, he had no Russian heritage whatsoever.',
      'His face turn after marrying Dusty Rhodes\' valet Baby Doll and his eventual alliance with Dusty was one of the most compelling storylines in NWA history.',
      'Became an ordained minister and Christian motivational speaker after retiring from wrestling.',
      'Was inducted into the WWE Hall of Fame in 2024 (Legacy wing being a common request).'
    ],
  },
  1432: { // Tank Ledger
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competes in NXT as a powerhouse competitor.',
      'Known for his impressive physique and power-based offense.',
      'Has been paired with Hank Walker as a tag team in NXT.',
      'Represents WWE\'s developmental talent being groomed through the NXT system.',
      'His hard-hitting style has drawn attention from WWE officials.'
    ],
  },
  1433: { // Hank Walker
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competes in NXT as a babyface competitor.',
      'Has a law enforcement background that was incorporated into his character.',
      'Teamed with Tank Ledger as a tag team in NXT.',
      'Known for his blue-collar everyman persona that resonates with audiences.',
      'Has shown steady improvement during his time in NXT developmental.'
    ],
  },
  1440: { // Eddy Thorpe
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Andrew Lockhart.',
      'His character incorporates his Native American heritage.',
      'Was a professional DJ and musician before entering professional wrestling.',
      'Competed in NXT, where he was involved in feuds with several prominent competitors.',
      'Known for blending his musical background with his wrestling persona.'
    ],
  },
  1441: { // Dani Palmer
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Competes in NXT\'s women\'s division.',
      'Known as an underdog babyface in the NXT women\'s division.',
      'Has shown consistent improvement during her time in developmental.',
      'Trained through the WWE Performance Center system.',
      'Her never-give-up attitude has made her a fan favorite in NXT.'
    ],
  },
  1442: { // James Storm
    spouses: [
      { name: 'Dani Storm', years: '2008–present', notes: 'Married; she has accompanied him to events.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Allen Cox. Born in Nashville, Tennessee.',
      'Known as "The Cowboy" and "The Tennessee Cowboy."',
      'One half of America\'s Most Wanted with Chris Harris, one of TNA\'s most successful tag teams.',
      'Won the TNA World Heavyweight Championship in 2011, defeating Kurt Angle.',
      'Made a brief appearance in NXT in 2015 but never signed a full-time WWE contract.',
      'His catchphrase "Sorry About Your Damn Luck" became iconic in TNA/Impact Wrestling.'
    ],
  },
  1443: { // Chris Harris
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Christopher Harris. Born in Fort Wright, Kentucky.',
      'One half of America\'s Most Wanted with James Storm in TNA, one of the company\'s most dominant tag teams.',
      'America\'s Most Wanted won the NWA World Tag Team Championship six times in TNA.',
      'Had a brief WWE stint in 2008 under the name Braden Walker, which became infamous for his "knock knock" promo.',
      'His "Braden Walker" run is considered one of the shortest and most forgettable WWE debuts.',
      'Was far more successful in TNA where he was a top tag team competitor for years.'
    ],
  },
  1444: { // Maxine
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Karlee Perez. Also known as Catrina in Lucha Underground.',
      'Competed on NXT season 3 (the original competition format) in 2010.',
      'Later became known for her role as Catrina/Melissa in Lucha Underground, which was her most acclaimed work.',
      'Her Catrina character — a supernatural figure who gave "the Lick of Death" — was a fan favorite in Lucha Underground.',
      'Transitioned between WWE and other promotions, finding her greatest character success outside WWE.'
    ],
  },
  1445: { // Man Mountain Rock
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Maxx Baumann. Born in Pensacola, Florida.',
      'His gimmick was a guitar-playing rock musician who would play a custom guitar in the ring.',
      'Previously competed as Maxx Payne in WCW, where he had a notably darker character.',
      'As Maxx Payne in WCW, he carried a boombox and was known for his Paynkiller armbar finisher.',
      'His WWF run as Man Mountain Rock was a significantly lighter character compared to his WCW persona.',
      'Was a legitimate musician who incorporated real guitar playing into his wrestling character.'
    ],
  },
  1448: { // Johnny Stamboli
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is John Hugger. Born in Providence, Rhode Island.',
      'Was a member of the FBI (Full Blooded Italians) faction in WWE alongside Nunzio and Chuck Palumbo.',
      'Previously competed in WCW as Johnny the Bull.',
      'Known for his power moves including a devastating top-rope leg drop.',
      'Had his most notable run as part of the SmackDown roster in the early 2000s.'
    ],
  },
  1449: { // Brian Adams
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2000', incident: 'Drug-related arrest', details: 'Arrested on drug charges during his time in WCW.' }
    ],
    announcing: [],
    facts: [
      'Real name was Bryan Adams (not the singer). Born in Kona, Hawaii.',
      'Competed in WWF as Crush — a Hawaiian babyface who was later turned into a heel.',
      'Was part of Demolition as the third member, replacing Ax in the later years of the team.',
      'Also competed as one half of KroniK tag team with Bryan Clark in WCW.',
      'Passed away in 2007 at the age of 43.',
      'Had multiple character reinventions from Hawaiian Crush to biker gang member to tag team powerhouse.'
    ],
  },
  1450: { // Bryan Clark
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Bryan Clark. Born in Harrisburg, Pennsylvania.',
      'Competed in WWF as Adam Bomb, a character with a nuclear/radiation gimmick managed by Harvey Wippleman.',
      'Later competed in WCW as Wrath, known for his "Meltdown" finishing move.',
      'Formed KroniK tag team with Brian Adams (Crush) in WCW.',
      'KroniK had a disastrous one-night return in WWE in 2001, and both were released immediately after.',
      'His Adam Bomb character was repackaged from heel to face, becoming a fan-friendly character who threw souvenir items to crowds.'
    ],
  },
  1451: { // Elix Skipper
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Elix Skipper. Born in Union, New Jersey.',
      'Known as "Primetime" Elix Skipper in WCW and TNA.',
      'Famous for walking across the top of the steel cage in a TNA match — one of the most jaw-dropping spots in wrestling history.',
      'Was a member of Team Canada in WCW alongside Lance Storm.',
      'Won the NWA World Tag Team Championship in TNA with Christopher Daniels as XXX.',
      'His cage walk at TNA Turning Point 2004 is considered one of the greatest high spots ever performed.'
    ],
  },
  1452: { // Kwee Wee
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Allan Funk. Born in Concord, North Carolina.',
      'His Kwee Wee character in WCW was a flamboyant, effeminate persona that was considered controversial.',
      'Also competed as "Angry Allan" Funk when his character would snap into a rage.',
      'Had a brief run in the dying days of WCW before the company was purchased by WWE.',
      'Continued wrestling on the independent circuit after WCW closed.'
    ],
  },
  1453: { // Dave Mastiff
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is David Sheridan. Born in Dudley, England.',
      'Known as "The Bomber" on the British independent scene before joining NXT UK.',
      'Was a prominent competitor in NXT UK throughout its run.',
      'Known for his surprising agility despite his large frame, capable of performing sentons and diving headbutts.',
      'Was a fixture of the British wrestling scene for many years before WWE came calling.'
    ],
  },
  1454: { // Eddie Dennis
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Born in Swansea, Wales.',
      'Worked as a school teacher while wrestling on the British independent circuit.',
      'Competed in NXT UK as a heel character.',
      'Was a prominent figure in Welsh professional wrestling before signing with WWE.',
      'Known for using his intelligence and teacher background as part of his heel persona.'
    ],
  },
  1455: { // Aoife Valkyrie
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kacy Sheridan. Born in Dublin, Ireland.',
      'Competed in NXT UK as a high-flying competitor.',
      'Had a background in martial arts and kickboxing before entering wrestling.',
      'Known for her impressive aerial offense and striking ability.',
      'One of the few Irish women to compete in the NXT UK women\'s division.'
    ],
  },
  1456: { // Kay Lee Ray
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kayleigh Rae. Born in Kilmarnock, Scotland.',
      'Held the NXT UK Women\'s Championship for a record-setting 649 days.',
      'Was later repackaged as Alba Fyre on the main NXT brand after NXT UK closed.',
      'Won the WWE Women\'s Tag Team Championship as part of a team with Isla Dawn.',
      'Is one of Scotland\'s most accomplished professional wrestlers, male or female.',
      'Had an extensive career on the UK and European independent scene before signing with WWE.'
    ],
  },
  1457: { // Stevie Ray
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Color Commentary', show: 'WCW Thunder/Worldwide', years: '1999–2001', notes: 'Provided commentary on WCW programming after stepping back from active competition.' }
    ],
    facts: [
      'Real name is Lash Huffman. Born in Houston, Texas.',
      'One half of Harlem Heat with his brother Booker T, winning the WCW Tag Team Championship 10 times.',
      'Harlem Heat is considered one of the greatest tag teams in WCW history.',
      'While his brother Booker T went on to massive singles success, Stevie Ray remained primarily a tag team and midcard performer.',
      'Known for his "fruit booty" catchphrase and intense promos.'
    ],
  },
  1458: { // Norman Smiley
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Norman Smiley. Born in St. George\'s, Grenada, and raised in England.',
      'Famous for his "Big Wiggle" dance celebration in the ring.',
      'Won the WCW Hardcore Championship and became a beloved comedic character in WCW\'s later years.',
      'Was actually a technically gifted wrestler trained in the European style who chose to adopt a comedic persona.',
      'Became a trainer at the WWE Performance Center, helping develop future WWE talent.',
      'His Norman Smiley Hardcore Championship run featured him wearing various protective equipment out of cowardice, creating hilarious moments.'
    ],
  },
  1459: { // Konnan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Carlos Santiago Espada Moises. Born in Santiago de Cuba, Cuba, and raised in San Diego, California.',
      'Was a massive star in Mexican wrestling (AAA and CMLL) before coming to WCW.',
      'Member of the nWo Wolfpac and later the Filthy Animals faction in WCW.',
      'Known for his catchphrases "Arriba la raza" and "Orale" and his hip-hop inspired persona.',
      'Became a booker and executive in AAA and TNA/Impact Wrestling after his active career.',
      'Underwent a kidney transplant in 2019 and publicly documented his health struggles.'
    ],
  },
  1460: { // Disco Inferno
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Glenn Gilbertti. Born in Brooklyn, New York.',
      'His character was a disco-dancing wrestler who would dance during and between matches.',
      'Won the WCW Television Championship twice.',
      'Later worked as a writer and booker for TNA/Impact Wrestling.',
      'Known for being an outspoken commentator on wrestling podcasts and social media.',
      'Despite his comedic gimmick, he was trusted in high-profile angles including involvement in nWo storylines.'
    ],
  },
  1461: { // Alex Wright
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Bernd Alexander Wright. Born in Nuremberg, Germany.',
      'Known as "Das Wunderkind" — debuted in WCW as a teenager, one of the youngest competitors in major promotion history.',
      'Won the WCW Television Championship and WCW Cruiserweight Championship.',
      'Later repackaged as Berlyn — a heel German character with anti-American sentiments.',
      'His father Steve Wright was also a professional wrestler, making Alex a second-generation performer.',
      'Was genuinely one of the most talented young wrestlers in WCW during the mid-1990s.'
    ],
  },
  1462: { // La Parka
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'The original La Parka\'s real name was Adolfo Tapia. Born in Cuernavaca, Mexico.',
      'Known for his skeleton costume and for dancing in the ring while playing an air guitar with a steel chair.',
      'Became a cult favorite in WCW despite being primarily used as a jobber to the stars.',
      'The "Chairman of WCW" nickname came from his frequent use of steel chairs.',
      'There were multiple wrestlers who used the La Parka name — the WCW version later competed as L.A. Park in Mexico.',
      'His charisma and showmanship made him one of the most entertaining and beloved WCW performers despite limited push.'
    ],
  },
  1463: { // Vampiro
    spouses: [],
    children: [
      { name: 'Dasha Kuret', born: 2000, notes: 'Daughter; appeared on wrestling programming' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ian Hodgkinson. Born in Thunder Bay, Ontario, Canada.',
      'Was a massive star in Mexico\'s CMLL and AAA promotions before joining WCW.',
      'Known for his gothic/vampire-inspired persona and feud with Sting in WCW.',
      'Had a memorable Inferno Match with Sting at WCW Great American Bash 2000.',
      'Became a referee, commentator, and producer for AAA in Mexico after retiring from active competition.',
      'Worked as the Director of Talent for Lucha Libre AAA.'
    ],
  },
  1464: { // Mikey Whipwreck
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Michael Watson. Born in Buffalo, New York.',
      'Was the ultimate underdog babyface in ECW, winning the ECW World Heavyweight Championship, ECW Television Championship, and ECW Tag Team Championship.',
      'Won the ECW World Title from The Sandman in a huge upset that became one of ECW\'s most memorable moments.',
      'Teamed with Yoshihiro Tajiri as an unlikely but popular tag team in ECW.',
      'Made a brief appearance in WCW in 2000.',
      'Became a wrestling trainer after retiring, running a school in New York.'
    ],
  },
  1465: { // Adrian Adonis
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Keith Franke. Born in Buffalo, New York.',
      'Started as a tough biker/street fighter character before transitioning to the flamboyant "Adorable" Adrian Adonis persona.',
      'Had a famous feud with Roddy Piper that culminated in a Hair vs. Hair match at WrestleMania III.',
      'Hosted "The Flower Shop" segment, a talk show that rivaled Piper\'s Pit.',
      'Tragically killed in a car accident in Newfoundland, Canada in 1988 at the age of 34.',
      'Was considered one of the most talented in-ring workers of his era despite his character changes.'
    ],
  },
  1466: { // Francine
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Francine Fournier. Born in New Brunswick, New Jersey.',
      'Known as "The Queen of Extreme" in ECW.',
      'Was one of ECW\'s most prominent female personalities, managing multiple top stars including Shane Douglas, Tommy Dreamer, and The Pitbulls.',
      'Her rivalry with Beulah McGillicutty was a major part of ECW\'s women\'s presentation.',
      'Made a brief appearance in WWE during the ECW revival in 2006.',
      'Inducted into many ECW fans\' personal halls of fame as the most iconic woman in the promotion\'s history.'
    ],
  },
  1467: { // Zeb Colter
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Wayne Keown. Born in Nashville, Tennessee.',
      'Previously competed as Dutch Mantel in various territories, particularly in Puerto Rico where he was a major star.',
      'His Zeb Colter character was a controversial anti-immigration pundit who managed Jack Swagger and later Cesaro.',
      'Was a longtime booker and creative mind in wrestling, working behind the scenes in WWE, WCW, TNA, and SMW.',
      'His "We the People" catchphrase with Jack Swagger generated significant mainstream media attention.',
      'Was one of the most respected wrestling minds in the business as a booker and agent.'
    ],
  },
  1469: { // Wahoo McDaniel
    spouses: [
      { name: 'Ata McDaniel', years: '1960s–1970s', notes: 'First marriage.' },
      { name: 'JoAnn McDaniel', years: '1980s–2002', notes: 'Later marriage, lasted until his death.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Edward Hugh McDaniel. Born in Bernice, Oklahoma. Of Choctaw and Chickasaw heritage.',
      'Was a professional football player in the AFL and NFL, playing for teams including the Houston Oilers, Denver Broncos, New York Jets, and Miami Dolphins.',
      'Won numerous NWA regional championships throughout the territories era.',
      'His chops were legendary — considered some of the most devastating in wrestling history.',
      'Passed away in 2002 at the age of 63 from complications of diabetes and kidney failure.',
      'Was one of the most prominent Native American athletes in both football and professional wrestling history.'
    ],
  },
  1470: { // Dick Murdoch
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Horace Dick Murdoch. Born in Waxahachie, Texas.',
      'Son of wrestler Frankie Hill Murdoch — a second-generation performer.',
      'Won the WWF Tag Team Championship with Adrian Adonis in 1984.',
      'Was known as a brilliant technical wrestler with a reputation as one of the toughest men in the business.',
      'Competed in every major territory in the United States as well as All Japan Pro Wrestling.',
      'Passed away in 1996 at the age of 49. Was considered one of the most naturally talented wrestlers of his generation.'
    ],
  },
  1471: { // Terry Gordy
    spouses: [
      { name: 'Vicki Gordy', years: '1987–2001', notes: 'Married until his death in 2001.' }
    ],
    children: [
      { name: 'Ray Gordy (Jesse)', born: 1982, notes: 'Wrestled in WWE as Jesse in the Gymini tag team and in TNA as Chase Stevens\' partner.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Terry Ray Gordy. One-third of the legendary Fabulous Freebirds with Michael Hayes and Buddy Roberts.',
      'Began wrestling professionally at age 14, one of the youngest ever to break into the business.',
      'Known for his devastating powerbomb, which became one of the most feared finishers of the 1980s.',
      'Had a legendary series of matches in All Japan Pro Wrestling against Stan Hansen, Jumbo Tsuruta, and others.',
      'Suffered a prescription drug overdose in 1993 that left him in a coma and caused permanent brain damage, effectively ending his career.'
    ],
  },
  1472: { // Magnum T.A.
    spouses: [
      { name: 'Courtney Cox (not the actress)', years: '1990s', notes: 'Private marriage.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [
      { role: 'Color Commentary', show: 'WCW Saturday Night', years: '1990–1992', notes: 'Served as commentator after his career-ending car accident.' }
    ],
    facts: [
      'Real name is Terry Wayne Allen. Was being groomed as the next NWA World Champion before a car accident ended his career in 1986.',
      'His I Quit match against Tully Blanchard at Starrcade 1985 is considered one of the greatest matches in NWA/WCW history.',
      'Suffered a broken neck in a single-car accident on October 14, 1986, on a rain-slicked road near Charlotte, NC.',
      'His ring name was inspired by the Tom Selleck TV show Magnum, P.I.',
      'Was inducted into the WWE Hall of Fame as part of the Class of 2023.'
    ],
  },
  1473: { // Ole Anderson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Alan Robert Rogowski. Not actually related to Gene Anderson despite the kayfabe family connection.',
      'Was a founding member of the original Four Horsemen alongside Ric Flair, Arn Anderson, and Tully Blanchard in 1985.',
      'Served as a booker for WCW/NWA at various times in the 1980s and 1990s.',
      'Known for his tough, no-nonsense persona both in and out of the ring.',
      'Published the controversial autobiography "Inside Out: How Corporate America Destroyed Professional Wrestling" in 2003.'
    ],
  },
  1474: { // Fritz Von Erich
    spouses: [
      { name: 'Doris Adkisson', years: '1955–1997', notes: 'Married until his death. Together they had six sons.' }
    ],
    children: [
      { name: 'Jack Adkisson Jr.', born: 1952, notes: 'Died by electrocution at age 6 in 1959.' },
      { name: 'David Von Erich', born: 1958, notes: 'Wrestler who died in 1984 in Tokyo, Japan.' },
      { name: 'Kevin Von Erich', born: 1957, notes: 'The only surviving Von Erich brother; WWE Hall of Famer.' },
      { name: 'Kerry Von Erich', born: 1960, notes: 'NWA World Champion; died in 1993.' },
      { name: 'Mike Von Erich', born: 1964, notes: 'Wrestler who died in 1987.' },
      { name: 'Chris Von Erich', born: 1969, notes: 'Wrestler who died in 1991.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Jack Barton Adkisson Sr. Created the Von Erich heel persona based on a German villain character.',
      'Founded World Class Championship Wrestling (WCCW), one of the most successful regional promotions of the 1980s.',
      'Lost five of his six sons during his lifetime, a family tragedy often called the "Von Erich Curse."',
      'His finishing move, the Iron Claw (a vice-like grip applied to the skull), became one of wrestling\'s most iconic holds.',
      'Inducted into the WWE Hall of Fame in 2009.'
    ],
  },
  1475: { // Kevin Von Erich
    spouses: [
      { name: 'Pam Von Erich', years: '1982–present', notes: 'Long-time wife; they have sons who have entered professional wrestling.' }
    ],
    children: [
      { name: 'Ross Von Erich', born: 1988, notes: 'Professional wrestler; competes in Major League Wrestling (MLW).' },
      { name: 'Marshall Von Erich', born: 1990, notes: 'Professional wrestler; teams with brother Ross.' },
      { name: 'Jett Von Erich', born: 1993, notes: 'Son.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kevin Ross Adkisson. The only surviving Von Erich brother.',
      'Known for his barefoot wrestling style and athleticism, particularly his diving body press from the top rope.',
      'Held the NWA World Tag Team Championship and WCCW World Heavyweight Championship multiple times.',
      'Retired from active wrestling in 1995 and lived a quiet life on a ranch in Maui, Hawaii for many years.',
      'Inducted into the WWE Hall of Fame in the Class of 2009 alongside his father Fritz and brothers David and Kerry.'
    ],
  },
  1476: { // David Von Erich
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was David Alan Adkisson. Considered the most naturally talented of the Von Erich brothers.',
      'Was reportedly being groomed to become NWA World Heavyweight Champion before his untimely death.',
      'Died on February 10, 1984, in Tokyo, Japan, officially from acute enteritis, though the circumstances remain debated.',
      'Held the WCCW World Tag Team Championship with brother Kerry.',
      'Inducted posthumously into the WWE Hall of Fame in 2009 as part of the Von Erich family.'
    ],
  },
  1477: { // Bruiser Brody
    spouses: [
      { name: 'Barbara Goodish', years: '1980s–1988', notes: 'Partner; together they had a son, Geoffrey.' }
    ],
    children: [
      { name: 'Geoffrey Dean Goodish', born: 1983, notes: 'Son of Brody.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Frank Donald Goodish. Played college football at West Texas State University alongside other future wrestlers.',
      'Known for his wild, brawling style and his signature entrance swinging a chain above his head.',
      'Was murdered on July 17, 1988, in the shower area of a locker room in Bayamon, Puerto Rico, stabbed by wrestler Jose Huertas Gonzalez (Invader I).',
      'Gonzalez was acquitted of the murder in a controversial trial where key witnesses were not present.',
      'Was one of the biggest draws in Japan during the 1980s, particularly in All Japan Pro Wrestling.'
    ],
  },
  1478: { // Bobby Eaton
    spouses: [
      { name: 'Donna Eaton', years: '1980s', notes: 'First wife.' },
      { name: 'Taryn Terrell', years: '2005–2006', notes: 'Brief marriage to fellow wrestler Taryn Terrell (Tiffany in WWE).' }
    ],
    children: [
      { name: 'Dustin Eaton', born: 1985, notes: 'Son.' },
      { name: 'Dylan Eaton', born: 1990, notes: 'Son who pursued professional wrestling.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Robert Lee Eaton. One-half of the Midnight Express, widely regarded as one of the greatest tag teams in wrestling history.',
      'Known as "Beautiful Bobby" and was considered one of the most fundamentally sound workers of his era.',
      'His top-rope legdrop was one of the most visually impressive moves of the 1980s.',
      'Teamed with both Dennis Condrey and Stan Lane as the Midnight Express under manager Jim Cornette.',
      'Also had success as part of the Dangerous Alliance in WCW, managed by Paul E. Dangerously (Paul Heyman).'
    ],
  },
  1479: { // Stan Lane
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Stanley Lane. Replaced Dennis Condrey in the Midnight Express in 1987.',
      'Known for his martial arts-inspired kicks and athletic style.',
      'Held the NWA World Tag Team Championship multiple times with Bobby Eaton.',
      'Before joining the Midnight Express, teamed with Steve Keirn as the Fabulous Ones in Memphis wrestling.',
      'Left professional wrestling in the early 1990s and pursued a career in information technology.'
    ],
  },
  1480: { // Ricky Morton
    spouses: [],
    children: [
      { name: 'Kerry Morton', born: 1999, notes: 'Professional wrestler who has competed in ROH and NWA.' }
    ],
    legalIssues: [
      { year: '2007', incident: 'Drug possession arrest', details: 'Arrested on drug possession charges in Tennessee.' }
    ],
    announcing: [],
    facts: [
      'Real name is Richard Wendell Morton. One-half of the Rock \'n\' Roll Express with Robert Gibson.',
      'The "face-in-peril" style he perfected became known as "playing Ricky Morton" — a term still used in wrestling terminology today.',
      'The Rock \'n\' Roll Express was inducted into the WWE Hall of Fame in 2017.',
      'His father, Paul Morton, was also a professional wrestler.',
      'Continues to wrestle on the independent circuit well into his 60s.'
    ],
  },
  1481: { // Robert Gibson
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ruben Edward Gibson. One-half of the Rock \'n\' Roll Express with Ricky Morton.',
      'Known for the hot tag — his explosive comebacks after Morton\'s extended beatdowns became a template for tag team wrestling.',
      'Held tag team championships across NWA, WCW, and SMW territories.',
      'Inducted into the WWE Hall of Fame in 2017 as part of the Rock \'n\' Roll Express.',
      'Suffered a serious knee injury in 1987 that required reconstructive surgery but returned to continue his career.'
    ],
  },
  1482: { // Ray Stevens
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Carl Raymond Stevens. Known as "The Crippler" long before Chris Benoit used the moniker.',
      'Considered one of the greatest workers of the 1960s and 1970s, particularly in the San Francisco territory.',
      'His feud with Pat Patterson drew some of the biggest crowds in San Francisco wrestling history.',
      'Managed by Captain Lou Albano during his WWF run in the early 1980s.',
      'Inducted posthumously into the WWE Hall of Fame in 2023.'
    ],
  },
  1483: { // Dick the Bruiser
    spouses: [
      { name: 'Louise Afflis', years: '1958–1991', notes: 'Married until his death.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was William James Afflis. Played in the NFL for the Green Bay Packers before becoming a wrestler.',
      'Co-promoted the Indianapolis-based World Wrestling Association (WWA) territory with Wilbur Snyder.',
      'Was one of the toughest men in professional wrestling — known for legitimate fights both in and out of the ring.',
      'Frequently tagged with The Crusher in one of the most popular Midwest tag teams of the 1960s-70s.',
      'Appeared on "The Tonight Show Starring Johnny Carson" in a famous segment where he challenged the host.'
    ],
  },
  1484: { // The Crusher
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Reginald Lisowski. One of the most beloved wrestlers in the Midwest, particularly in Milwaukee and the AWA.',
      'Held the AWA World Heavyweight Championship three times.',
      'Frequently tagged with Dick the Bruiser as one of the most popular tag teams in the American Wrestling Association.',
      'Known for his catchphrase promising to "crush dem bones" and his beer-drinking, blue-collar persona.',
      'Was a legitimate amateur wrestling champion in Wisconsin before turning professional.'
    ],
  },
  1485: { // Brad Armstrong
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Bradley James Armstrong. Son of "Bullet" Bob Armstrong and brother of Scott, Steve, and Brian (Road Dogg).',
      'Considered by many peers and experts as one of the most technically gifted yet underutilized wrestlers in WCW history.',
      'Won the WCW World Light Heavyweight Championship.',
      'Also performed under masks as Arachnaman (a Spider-Man parody that drew a cease-and-desist from Marvel), Badstreet, and Buzzkill.',
      'His brother Brian "Road Dogg" Armstrong achieved far greater mainstream fame in WWE, something seen as ironic given Brad\'s superior in-ring ability.'
    ],
  },
  1486: { // Tracy Smothers
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Tracy Smothers. Versatile performer who worked in multiple territories and styles throughout his career.',
      'Competed in the WWF, WCW, ECW, and Smoky Mountain Wrestling among other promotions.',
      'Teamed with Steve Armstrong as the Young Pistols (originally the Wild-Eyed Southern Boys) in WCW.',
      'In ECW, reinvented himself as an Italian-American character as part of the FBI (Full Blooded Italians).',
      'Known for his toughness and willingness to work hard in any role given to him.'
    ],
  },
  1487: { // Tommy Rich
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Thomas Southerland Richardson. Won the NWA World Heavyweight Championship from Harley Race on April 27, 1981.',
      'His reign as NWA World Champion lasted only four days, one of the shortest in the title\'s history.',
      'Known as "Wildfire" Tommy Rich, he was one of the biggest stars in Georgia Championship Wrestling in the early 1980s.',
      'His feud with Buzz Sawyer was one of the most intense rivalries in Georgia wrestling history.',
      'Continued wrestling on the independent circuit for decades after his peak years.'
    ],
  },
  1488: { // Dennis Condrey
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Dennis Condrey. Original member of the Midnight Express alongside Bobby Eaton, managed by Jim Cornette.',
      'Before teaming with Eaton, he formed an earlier version of the Midnight Express with Randy Rose in the Southeast.',
      'Left the Midnight Express abruptly in 1987, leading to Stan Lane replacing him.',
      'Returned briefly to feud with Eaton and Lane, forming a rival Midnight Express team with Randy Rose.',
      'Considered an excellent tag team worker whose chemistry with Bobby Eaton helped define 1980s tag team wrestling.'
    ],
  },
  1489: { // Buddy Roberts
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Dale Hey. One-third of the Fabulous Freebirds alongside Michael Hayes and Terry Gordy.',
      'The Freebirds\' feud with the Von Erichs in WCCW is considered one of the greatest feuds in wrestling history.',
      'The "Freebird Rule" (any two members of a group can defend tag titles) originated from the Fabulous Freebirds.',
      'Often considered the unsung workhorse of the Freebirds, doing much of the in-ring heavy lifting.',
      'Lost his hair in a famous Hair vs. Hair match against Chris Adams in WCCW.'
    ],
  },
  1490: { // Silver King
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Cesar Cuauhtemoc Gonzalez Barron. Second-generation luchador, son of Dr. Wagner.',
      'Competed in both WCW and CMLL, bringing lucha libre style to American audiences.',
      'Appeared in the Jack Black movie "Nacho Libre" (2006) as the wrestling villain Ramses.',
      'Won the CMLL World Tag Team Championship and NWA World Middleweight Championship.',
      'Tragically died in the ring on May 11, 2019, during a match in London, England.'
    ],
  },
  1491: { // Crowbar
    spouses: [
      { name: 'Daffney (Shannon Spruill)', years: '2000s', notes: 'Had an on-screen and off-screen relationship with fellow WCW performer Daffney.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Devon Storm (born Chris Ford). Also wrestled under the name Devon Storm in ECW.',
      'Won the WCW World Cruiserweight Championship and WCW Hardcore Championship.',
      'His real-life relationship with Daffney was incorporated into WCW storylines.',
      'After retiring from wrestling, became a firefighter and EMT.',
      'Was known for his hardcore wrestling style and willingness to take extreme bumps.'
    ],
  },
  1492: { // Daffney
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Shannon Claire Spruill. Known for her "Scream Queen" gimmick and horror-themed character in WCW.',
      'Won the WCW Cruiserweight Championship, one of the few women to hold a men\'s title in a major promotion.',
      'Suffered multiple serious injuries during her career, including concussions that led to long-term health issues.',
      'Filed a lawsuit against TNA Wrestling in 2011 after suffering injuries she claimed were not properly addressed.',
      'Was also a trained actress and model outside of professional wrestling.'
    ],
  },
  1493: { // J.J. Dillon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Morrison. Best known as the manager of the Four Horsemen in the NWA/WCW.',
      'Served as a road agent, booker, and in executive roles for both WCW and WWE.',
      'Was the on-screen chairman of the WCW Championship Committee in the late 1990s.',
      'Also wrestled as a competitor earlier in his career in various territories.',
      'His association with the Four Horsemen made him one of the most recognizable managers of the 1980s.'
    ],
  },
  1494: { // Sakoda
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Ryan Sakoda. Japanese-American wrestler who competed in WWE\'s SmackDown brand in 2003-2004.',
      'Was paired with Tajiri and later with Akio (Jimmy Wang Yang) as a villainous duo.',
      'Trained at the UPW (Ultimate Pro Wrestling) developmental system.',
      'Had a relatively brief WWE career before being released in 2004.',
      'Competed on the independent circuit before and after his WWE stint.'
    ],
  },
  1496: { // Kevin Sullivan
    spouses: [
      { name: 'Nancy Toffoloni (Woman)', years: '1985–1997', notes: 'Their real-life divorce occurred partly because of Nancy\'s on-screen angle with Chris Benoit, which turned into a real relationship.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kevin Francis Sullivan. Best known for his Satanic-themed "Prince of Darkness" character in Florida and WCW.',
      'Served as a booker for WCW, including during the Monday Night Wars era.',
      'Led the villainous Dungeon of Doom faction that feuded with Hulk Hogan in WCW.',
      'Booked the Chris Benoit/Nancy (Woman) angle that led to his own real-life divorce when the two fell in love.',
      'Was considered one of the most creative minds in wrestling as a booker despite mixed reception from fans.'
    ],
  },
  1497: { // Danny Hodge
    spouses: [
      { name: 'Dolores Hodge', years: '1960s–2020', notes: 'Long-time wife.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Daniel Allen Hodge. Considered one of the toughest and most legitimate athletes in wrestling history.',
      'Was an Olympic silver medalist in wrestling (1956 Melbourne Olympics) and a three-time NCAA wrestling champion.',
      'Was famous for being able to crush an apple with his bare hand using just one hand.',
      'Held the NWA World Junior Heavyweight Championship a record number of times.',
      'Was also a Golden Gloves boxing champion, making him one of the most decorated multi-sport combat athletes ever.'
    ],
  },
  1498: { // Baron Von Raschke
    spouses: [
      { name: 'Bonnie Raschke', years: '1970s–present', notes: 'Long-time wife.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Donald Raschke. Former amateur wrestling standout at the University of Nebraska.',
      'His finishing move, "The Claw" (brain claw), was one of the most feared holds in the AWA.',
      'Best known for his runs in the AWA, where he was one of the top villains throughout the 1970s and 1980s.',
      'Despite his German heel character, he was born and raised in Omaha, Nebraska.',
      'Known for his catchphrase "Dat is da end!" when applying his finishing hold.'
    ],
  },
  1499: { // Jimmy Garvin
    spouses: [
      { name: 'Patricia Williams (Precious)', years: '1983–present', notes: 'His real-life wife who served as his valet "Precious" throughout his career.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Allen Williams. Known as "Gorgeous" Jimmy Garvin.',
      'His real-life wife Patricia accompanied him as his valet "Precious" throughout his career.',
      'Became an honorary member of the Fabulous Freebirds and won the NWA World Tag Team Championship with Michael Hayes.',
      'Competed in WCCW, the NWA, and WCW during his career.',
      'His feud with Chris Adams in WCCW was one of the promotion\'s most popular programs.'
    ],
  },
  1500: { // Bob Armstrong
    spouses: [],
    children: [
      { name: 'Brad Armstrong', born: 1962, notes: 'Professional wrestler known for his technical skill; died in 2012.' },
      { name: 'Scott Armstrong', born: 1964, notes: 'Professional wrestler and longtime WWE referee.' },
      { name: 'Steve Armstrong', born: 1965, notes: 'Professional wrestler; teamed with Tracy Smothers as the Young Pistols.' },
      { name: 'Brian Armstrong (Road Dogg)', born: 1969, notes: 'WWE star as Road Dogg Jesse James, member of D-Generation X and New Age Outlaws.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Joseph Melton James. Known as "Bullet" Bob Armstrong.',
      'Patriarch of the Armstrong wrestling family, with four sons who all became professional wrestlers.',
      'Was a major star in the Southeastern territories, particularly Georgia and Alabama.',
      'Held multiple regional heavyweight championships throughout the 1970s and 1980s.',
      'Inducted into the WWE Hall of Fame in 2011.'
    ],
  },
  1501: { // Axl Rotten
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2009', incident: 'Drug-related arrest', details: 'Arrested multiple times for drug-related charges including possession.' },
      { year: '2014', incident: 'Arrest at wrestling convention', details: 'Arrested for allegedly attempting to purchase controlled substances.' }
    ],
    announcing: [],
    facts: [
      'Real name was Brian Knighton. Best known for his hardcore wrestling style in ECW.',
      'Frequently teamed with Balls Mahoney as a hardcore tag team in ECW.',
      'Was one of the original ECW roster members who helped define the promotion\'s extreme style.',
      'Struggled with drug addiction throughout his life, which he was open about in interviews.',
      'His ring name was a play on Guns N\' Roses frontman Axl Rose.'
    ],
  },
  1502: { // Skandor Akbar
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was James Allen Wehba. Managed the villainous stable known as Devastation Inc. in WCCW and other promotions.',
      'Was of Lebanese descent and used a Middle Eastern heel persona that was typical of the era.',
      'His Devastation Inc. faction was one of the most successful heel stables in Texas wrestling.',
      'Also worked as a booker and agent behind the scenes in various territories.',
      'Was considered one of the best heel managers in the history of Texas wrestling.'
    ],
  },
  1505: { // Rikidozan
    spouses: [
      { name: 'Tanaka Keiko', years: '1963–1963', notes: 'Married shortly before his death.' }
    ],
    children: [
      { name: 'Mitsuo Momota', born: 1948, notes: 'Professional wrestler in Japan.' },
      { name: 'Yoshinori Momota', born: 1963, notes: 'Son.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Kim Sin-rak (Korean birth name); adopted the Japanese name Mitsuhiro Momota. Born in what is now North Korea.',
      'Known as the "Father of Puroresu" (Japanese professional wrestling) — he established pro wrestling as a major sport in Japan.',
      'His matches were among the highest-rated television programs in Japanese history during the 1950s and early 1960s.',
      'Was stabbed by a yakuza member, Katsushi Murata, on December 8, 1963, and died on December 15 from peritonitis complications.',
      'His Korean heritage was kept secret during his lifetime and only became widely known after his death.'
    ],
  },
  1506: { // Tessa Blanchard
    spouses: [
      { name: 'Daga (real name Miguel Garcia)', years: '2020–2022', notes: 'Married fellow wrestler Daga; later separated.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Daughter of Tully Blanchard and stepdaughter of Magnum T.A. Third-generation wrestler.',
      'Became the first woman to win the Impact World Championship (a men\'s world title) in January 2020.',
      'Her Impact World Championship win was controversial, coinciding with allegations of bullying and racially insensitive behavior from fellow wrestlers.',
      'Trained by her father Tully Blanchard and competed in Impact Wrestling, WOW, and other promotions.',
      'Was stripped of the Impact World Championship in 2020 after refusing to return to the company during the COVID-19 pandemic.'
    ],
  },
  1507: { // Scotty Riggs
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Scott Ronald Rumker. Best known for teaming with Buff Bagwell as American Males in WCW.',
      'The American Males tag team was known for their catchy entrance theme song.',
      'After the American Males split, had a gimmick where he wore an eyepatch after an injury angle.',
      'Competed in WCW from 1995 to 2000.',
      'Also competed in ECW and on the independent circuit.'
    ],
  },
  1509: { // 911
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Al Poling. Stood 6\'6" and was known for his imposing presence as Paul Heyman\'s enforcer in ECW.',
      'His primary move was the chokeslam, which he delivered to opponents, referees, and anyone else Paul E. Dangerously directed.',
      'Was one of the most popular acts in early ECW despite having a very limited wrestling moveset.',
      'Fans would chant "911!" during ECW events demanding his appearance.',
      'His ECW tenure was relatively brief but left a memorable impression during the promotion\'s formative years.'
    ],
  },
  1511: { // Tony Mamaluke
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Tony Mamaluke (also worked under his real name). Member of the FBI (Full Blooded Italians) in ECW.',
      'Joined the FBI in its later era, teaming with Little Guido and Tracy Smothers.',
      'Known for his technical wrestling and submission-based style.',
      'Competed in ECW, WWE, and TNA during his career.',
      'Was part of the ECW roster during the promotion\'s final years before it closed in 2001.'
    ],
  },
  1512: { // Rocco Rock
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Ted Petty. One-half of Public Enemy with Johnny Grunge.',
      'Public Enemy was one of the most popular tag teams in ECW history, known for putting opponents through tables.',
      'Before forming Public Enemy, was a skilled high-flyer who competed under various names including Flyboy Rocco Rock.',
      'Also competed in WCW and briefly in WWF with Public Enemy, though their runs outside ECW were less successful.',
      'Was considered a highly innovative wrestler who helped popularize table spots in American wrestling.'
    ],
  },
  1513: { // Johnny Grunge
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Michael Durham. One-half of Public Enemy with Rocco Rock.',
      'Public Enemy\'s wild brawling style and table-breaking matches helped define ECW\'s hardcore identity.',
      'Their entrance to "Here Comes the Hotstepper" became one of ECW\'s most recognizable entrance themes.',
      'Competed in WCW and WWF with Rocco Rock as Public Enemy.',
      'Struggled with substance abuse issues later in his life.'
    ],
  },
  1514: { // Mike Sanders
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Michael Sanders. Came through the WCW Power Plant training facility.',
      'Served as the "Above Average" Mike Sanders in WCW, known for his mic work and arrogant character.',
      'Was briefly the WCW Commissioner/authority figure during the promotion\'s final year.',
      'Was part of the Natural Born Thrillers faction in WCW alongside Sean O\'Haire, Chuck Palumbo, and others.',
      'His career was cut short when WCW closed in 2001 and he did not get picked up by WWE.'
    ],
  },
  1515: { // Lenny Lane
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Leonard Goldberg. Competed primarily in WCW\'s cruiserweight division.',
      'Was part of a controversial tag team with Lodi called "Lenny and Lodi" which had a flamboyant gimmick.',
      'Won the WCW Cruiserweight Championship once in 1999.',
      'Was a solid in-ring worker who was often underutilized in WCW.',
      'Also competed on the independent circuit and in brief stints with other promotions.'
    ],
  },
  1516: { // Lodi
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Brad Cain. Best known as a member of Raven\'s Flock in WCW.',
      'Became famous for carrying humorous protest signs to the ring during WCW Nitro.',
      'Later teamed with Lenny Lane in a flamboyant tag team.',
      'Had a brief appearance in WWE as one of the Tough Enough trainers.',
      'After wrestling, transitioned to a career outside the industry.'
    ],
  },
  1517: { // Bunkhouse Buck
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Golden, son of legendary wrestler/promoter Buck Robley.',
      'Competed in WCW as the rugged brawler Bunkhouse Buck, managed by Colonel Robert Parker.',
      'Teamed with Terry Funk in a Bunkhouse match stipulation that suited his rough fighting style.',
      'Was part of the Stud Stable faction in WCW alongside Colonel Parker and Arn Anderson.',
      'Also competed under the name Jimmy Golden in other territories before WCW.'
    ],
  },
  1519: { // Mitsuharu Misawa
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Mitsuharu Misawa. Considered one of the greatest professional wrestlers of all time.',
      'Originally debuted as Tiger Mask II in All Japan Pro Wrestling before unmasking to become Misawa.',
      'His matches with Toshiaki Kawada, Kenta Kobashi, and Akira Taue are regarded as some of the best matches in wrestling history.',
      'Founded Pro Wrestling NOAH in 2000 after leading a mass exodus from All Japan Pro Wrestling.',
      'Died on June 13, 2009, after taking a belly-to-back suplex during a match — one of the most tragic in-ring deaths in wrestling history.'
    ],
  },
  1520: { // Kenta Kobashi
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Full name is Kenta Kobashi. Lost his first 63 matches in All Japan Pro Wrestling before getting his first win.',
      'His Burning Lariat finishing move is considered one of the most devastating finishers in puroresu history.',
      'His March 2003 GHC Heavyweight Championship match against Mitsuharu Misawa is often rated as the greatest match ever by Japanese wrestling historians.',
      'Battled kidney cancer in 2006, underwent surgery, and made a miraculous return to the ring.',
      'His retirement match on March 1, 2013 at Nippon Budokan drew an emotional sellout crowd.'
    ],
  },
  1521: { // Toshiaki Kawada
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Full name is Toshiaki Kawada. Known as "Dangerous K" for his stiff, hard-hitting wrestling style.',
      'Formed a legendary tag team with Mitsuharu Misawa called "Super Generation Army" before becoming bitter rivals.',
      'His Triple Crown Heavyweight Championship wins were among the most celebrated moments in All Japan history.',
      'Known for his devastating kicks, particularly his spinning back kick and running Gamengiri.',
      'Stayed with All Japan Pro Wrestling when Misawa left to form NOAH, remaining loyal to the company.'
    ],
  },
  1522: { // Jumbo Tsuruta
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Tomomi Tsuruta. One of the greatest Japanese professional wrestlers of all time.',
      'Represented Japan in amateur wrestling at the 1972 Munich Olympics before turning professional.',
      'Held the NWA International Heavyweight Championship, the PWF World Heavyweight Championship, and the Triple Crown Heavyweight Championship.',
      'His feud with Mitsuharu Misawa, beginning with their legendary June 1990 match, is considered a turning point in All Japan history.',
      'Was diagnosed with Hepatitis B which forced his retirement; he died of liver failure in 2000 at age 49.'
    ],
  },
  1523: { // Genichiro Tenryu
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Genichiro Shimada. Former sumo wrestler who transitioned to professional wrestling.',
      'Founded Super World of Sports (SWS) promotion in 1990, which had a brief working agreement with WWF.',
      'Won the Triple Crown Heavyweight Championship and was a main event star in All Japan and other promotions.',
      'Known for his stiff chops and enzuigiri kicks, maintaining a hard-hitting style throughout his career.',
      'Had one of the longest active careers in wrestling history, competing from 1976 until his retirement in 2015 at age 65.'
    ],
  },
  1524: { // Hayabusa
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Eiji Ezaki. One of the most innovative high-flyers in Japanese wrestling history.',
      'Known for his daring aerial moves including the Phoenix Splash (a 450 splash with a twist) in Frontier Martial-Arts Wrestling (FMW).',
      'Was the top star and franchise player of FMW throughout the 1990s.',
      'Suffered a career-ending injury on October 22, 2001, when a springboard moonsault went wrong, leaving him paralyzed from the chest down.',
      'Despite his paralysis, he learned to walk again through years of rehabilitation and made public appearances before his death in 2016.'
    ],
  },
  1525: { // El Hijo del Santo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Jorge Nuñez. Son of the legendary El Santo, the most iconic figure in lucha libre history.',
      'Carried on his father\'s legacy by wearing the silver mask and becoming one of the biggest stars in Mexican wrestling.',
      'Won numerous championships in CMLL, UWA, and other Mexican promotions.',
      'His matches with Negro Casas are considered some of the finest in lucha libre history.',
      'Like his father, has never been unmasked in a professional match, keeping the mystique of the Santo legacy alive.'
    ],
  },
  1526: { // Negro Casas
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is José Casas Ruiz. Brother of Heavy Metal and part of the legendary Casas wrestling family.',
      'Considered one of the greatest technical wrestlers in lucha libre history.',
      'Has competed in CMLL for over four decades, making him one of the longest-tenured performers in any promotion.',
      'His rivalries with El Hijo del Santo, Atlantis, and others are considered the gold standard of lucha libre storytelling.',
      'Known for his signature submission La Casita (a schoolboy-type pin/submission combination).'
    ],
  },
  1527: { // Blue Panther
    spouses: [],
    children: [
      { name: 'Blue Panther Jr.', born: 1991, notes: 'Professional wrestler in CMLL, following in his father\'s footsteps.' },
      { name: 'The Panther (Cachorro)', born: 1993, notes: 'Professional wrestler in CMLL.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Genaro Vazquez. One of the most respected technical wrestlers in the history of lucha libre.',
      'Has competed in CMLL for over 40 years, known for his mat wrestling excellence.',
      'Lost his mask to Villano III in a famous match in 1999 — considered one of the greatest mask vs. mask matches in lucha history.',
      'Won the CMLL World Heavyweight Championship and numerous tag team titles.',
      'Has trained many current generation CMLL wrestlers.'
    ],
  },
  1528: { // Sgt. Craig Pittman
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Craig Pittman. A legitimate U.S. Marine who used his military background as his wrestling gimmick.',
      'Competed in WCW during the mid-1990s, known for his cross armbreaker submission finisher.',
      'Had Teddy Long as his manager during part of his WCW run.',
      'Served in the United States Marine Corps before entering professional wrestling.',
      'Was known for his legitimate grappling skills which translated into a ground-based wrestling style.'
    ],
  },
  1529: { // Ice Train
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Harold Hogue. Competed in WCW during the mid-1990s.',
      'Teamed with Scott Norton as the tag team Fire & Ice in WCW.',
      'Was trained at the WCW Power Plant.',
      'Known for his impressive power moves and athleticism for his size.',
      'Had Teddy Long as his manager during part of his WCW career.'
    ],
  },
  1530: { // Scott Norton
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Scott Frederick Norton. Known for his incredible legitimate strength.',
      'Won the IWGP Heavyweight Championship in New Japan Pro Wrestling, becoming one of the most successful American heavyweights in NJPW history.',
      'Was a member of nWo in WCW, serving as the group\'s powerhouse enforcer.',
      'Was an arm wrestling champion before entering professional wrestling.',
      'Teamed with Ice Train as Fire & Ice in WCW before joining nWo.'
    ],
  },
  1531: { // Villano III
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Arturo Muñoz Casas. Part of the legendary Villano wrestling family alongside his four brothers (Villano I, II, IV, and V).',
      'Considered the most talented and decorated of the Villano brothers.',
      'Won Blue Panther\'s mask in one of the most famous mask vs. mask matches in lucha libre history in 1999.',
      'Won the CMLL World Heavyweight Championship and was a major star in Mexican wrestling for decades.',
      'Competed from the 1970s through the 2010s, spanning one of the longest careers in lucha libre.'
    ],
  },
  1532: { // Hector Guerrero
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Hector Manuel Guerrero Llanes. Member of the legendary Guerrero wrestling family.',
      'Brother of Eddie, Chavo Sr., and Mando Guerrero, and son of Gory Guerrero.',
      'Played the character Gobbledy Gooker at the 1990 Survivor Series — widely considered one of the worst gimmicks in WWE history.',
      'Also competed as the masked Lazer-Tron and under his own name in various territories.',
      'Was a talented wrestler who was often overshadowed by his more famous siblings, particularly Eddie.'
    ],
  },
  1533: { // Mando Guerrero
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Armando Guerrero Llanes. Member of the Guerrero wrestling dynasty.',
      'Son of Gory Guerrero and brother of Eddie, Chavo Sr., and Hector.',
      'Trained many wrestlers during his career, including his nephew Chavo Guerrero Jr.',
      'Competed primarily in the Los Angeles territory and Mexican promotions.',
      'Was known as one of the more reserved members of the Guerrero family but was respected for his in-ring ability.'
    ],
  },
  1534: { // Chavo Guerrero Sr.
    spouses: [],
    children: [
      { name: 'Chavo Guerrero Jr.', born: 1970, notes: 'Professional wrestler who competed in WCW, WWE, TNA, and Lucha Underground.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Salvador Guerrero III. Eldest of the Guerrero brothers in their generation.',
      'Son of legendary wrestler Gory Guerrero and part of the Guerrero wrestling dynasty.',
      'Was a top star in the Los Angeles wrestling territory during the 1970s and 1980s.',
      'Competed against his own brothers and family members in various angles throughout his career.',
      'His son Chavo Jr. carried on the family legacy in WCW and WWE.'
    ],
  },
  1535: { // Mark Lewin
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Mark Lewin. Known as "Maniac" Mark Lewin in his later career.',
      'Was a major star in multiple territories across the United States and internationally, particularly in Australia.',
      'Used the sleeper hold as his finishing move, which became one of the most protected finishers of his era.',
      'Competed from the 1950s through the 1980s, spanning four decades of professional wrestling.',
      'Became known for an increasingly unhinged persona later in his career, managed by J.J. Dillon.'
    ],
  },
  1536: { // Dutch Savage
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Frank Stewart. A major star in the Pacific Northwest wrestling territory.',
      'Was one of the biggest draws in Portland Wrestling during the 1960s and 1970s.',
      'Also promoted wrestling shows in the Pacific Northwest region.',
      'Known for his brawling style and tough-guy persona.',
      'Was a beloved figure in Oregon and Washington wrestling circles for decades.'
    ],
  },
  1537: { // Buzz Sawyer
    spouses: [],
    children: [],
    legalIssues: [
      { year: '1980s', incident: 'Various incidents', details: 'Known for erratic and sometimes violent behavior outside the ring.' }
    ],
    announcing: [],
    facts: [
      'Real name was Bruce Woyan. Known as "Mad Dog" Buzz Sawyer.',
      'His feud with Tommy Rich in Georgia Championship Wrestling was one of the bloodiest and most intense rivalries of the early 1980s.',
      'Was considered one of the most talented and explosive workers of his generation.',
      'Competed in GCW, Mid-South, and New Japan Pro Wrestling, where he was a popular performer.',
      'His career and life were cut short due to substance abuse issues; he died in 1992 at age 32.'
    ],
  },
  1539: { // Stu Hart
    spouses: [
      { name: 'Helen Smith Hart', years: '1947–1998', notes: 'Married for over 50 years until her death. Together they had 12 children.' }
    ],
    children: [
      { name: 'Bret Hart', born: 1957, notes: 'WWE Hall of Famer, five-time WWE Champion.' },
      { name: 'Owen Hart', born: 1965, notes: 'WWE performer who tragically died during a pay-per-view entrance in 1999.' },
      { name: 'Keith Hart', born: 1948, notes: 'Professional wrestler.' },
      { name: 'Bruce Hart', born: 1950, notes: 'Professional wrestler and booker for Stampede Wrestling.' },
      { name: 'Smith Hart', born: 1948, notes: 'Professional wrestler, eldest son.' },
      { name: 'Dean Hart', born: 1954, notes: 'Professional wrestler who died in 1990.' },
      { name: 'Ross Hart', born: 1952, notes: 'Professional wrestler.' },
      { name: 'Wayne Hart', born: 1953, notes: 'Professional wrestler and referee.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Stewart Edward Hart. Patriarch of the Hart wrestling family dynasty.',
      'Founded Stampede Wrestling in Calgary, Alberta, which ran from the 1950s until 1989.',
      'His "Hart Dungeon" in the family basement was one of wrestling\'s most legendary and feared training grounds.',
      'Trained countless wrestlers including his own sons, Chris Benoit, Chris Jericho, Jushin Thunder Liger, and many more.',
      'Had 12 children, 8 of whom were sons, and many became professional wrestlers or married into the business.',
      'Inducted into the WWE Hall of Fame in 2010.'
    ],
  },
  1540: { // Gorgeous George
    spouses: [
      { name: 'Betty Wagner', years: '1939–1962', notes: 'First wife who helped create the Gorgeous George character. Their act was one of the first in wrestling history to incorporate a valet.' },
      { name: 'Cherie Dupre', years: '1963–1963', notes: 'Married shortly before his death.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was George Raymond Wagner. Considered the original wrestling villain and the first true character in professional wrestling.',
      'His flamboyant persona — bleached blond hair, sequined robes, having valets spray the ring with perfume — inspired Muhammad Ali, James Brown, and countless wrestlers.',
      'Was the first nationally recognized wrestling star via television in the late 1940s and early 1950s.',
      'Helped make television a viable medium by being one of the first major TV draws — more Americans bought TVs to watch Gorgeous George than almost any other attraction.',
      'His gimmick directly influenced later performers including Ric Flair, "Adorable" Adrian Adonis, Goldust, and The Miz.'
    ],
  },
  1541: { // Mad Dog Vachon
    spouses: [
      { name: 'Germaine Vachon', years: '1960s–2013', notes: 'Long-time wife; married until his death.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Maurice Vachon. Born in Ville-Emard, Montreal, Quebec, Canada.',
      'Won a gold medal in wrestling at the 1950 British Empire Games (now Commonwealth Games).',
      'Held the AWA World Heavyweight Championship and was one of the top villains in the territory.',
      'Lost his lower left leg in a car accident in 1987 when he was hit by a car while jogging.',
      'Inducted into the WWE Hall of Fame in 2010 alongside his legacy as one of wrestling\'s toughest competitors.'
    ],
  },
  1542: { // Bill Watts
    spouses: [],
    children: [
      { name: 'Erik Watts', born: 1969, notes: 'Professional wrestler who competed in WCW; his push was controversial among fans.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is William F. Watts Jr. Also known as "Cowboy" Bill Watts.',
      'Founded and promoted Mid-South Wrestling (later the Universal Wrestling Federation/UWF), one of the hottest territories of the 1980s.',
      'His Mid-South territory was known for its realistic, hard-hitting product and launched careers of stars like Jim Duggan, Ted DiBiase, and the Junkyard Dog.',
      'Served briefly as Executive Vice President of WCW in 1992 but was fired after controversial racial comments in a published interview resurfaced.',
      'Inducted into the WWE Hall of Fame in 2009.',
      'As a wrestler, was a successful performer in the 1960s and 1970s before transitioning to promoting.'
    ],
  },
  1550: { // Andy Kaufman
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Andrew Geoffrey Kaufman. Legendary comedian and performance artist.',
      'His feud with Jerry "The King" Lawler is one of the most famous worked/shoot angles in wrestling history.',
      'Challenged women to intergender wrestling matches, proclaiming himself the "Inter-Gender Wrestling Champion of the World" — a performance art piece that blurred reality and fiction.',
      'His famous confrontation with Lawler on Late Night with David Letterman in 1982 had audiences debating whether it was real for decades.',
      'Was posthumously inducted into the WWE Hall of Fame as part of the celebrity wing.'
    ],
  },
  1552: { // Jackie Gayda
    spouses: [
      { name: 'Charlie Haas', years: '2005–present', notes: 'Married fellow WWE wrestler Charlie Haas.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Jacqueline Gayda-Haas. Won the WWE Tough Enough III competition in 2002.',
      'Her tag team match on Raw in 2002 (with Christopher Nowinski vs. Trish Stratus and Bradshaw) was infamously voted "Worst Worked Match of the Year" by Wrestling Observer.',
      'Managed Charlie Haas and Rico on SmackDown as part of a tag team angle.',
      'Married fellow wrestler Charlie Haas and retired from in-ring competition.',
      'Also worked as a fitness model before and during her wrestling career.'
    ],
  },
  1553: { // Linda Miles
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Linda Miles. Won WWE Tough Enough II alongside Jackie Gayda.',
      'Performed in WWE\'s developmental system and occasionally on SmackDown under the name Shaniqua.',
      'As Shaniqua, managed the Basham Brothers tag team in a dominatrix-style character.',
      'Had a brief stint as one of the more physically imposing women on the WWE roster.',
      'Her wrestling career was relatively short-lived compared to other Tough Enough winners.'
    ],
  },
  1555: { // Brad Maddox
    spouses: [],
    children: [],
    legalIssues: [
      { year: '2020', incident: 'Controversial social media incident', details: 'Released from WWE in 2015; later involved in a controversial personal video incident that garnered media attention.' }
    ],
    announcing: [],
    facts: [
      'Real name is Tyler Kluttz (also known as Brad Maddox). Competed as a referee and on-screen personality in WWE.',
      'Became the on-screen General Manager of Raw in 2013 after transitioning from a referee role.',
      'His interference as a referee in the Hell in a Cell 2012 match between CM Punk and Ryback was a major storyline.',
      'Had a brief in-ring career in WWE before transitioning to a managerial/authority role.',
      'Was released from WWE in 2015 and subsequently worked on the independent circuit.'
    ],
  },
  1556: { // Taryn Terrell
    spouses: [
      { name: 'Bobby Eaton', years: '2005–2006', notes: 'Brief marriage to veteran wrestler Bobby Eaton; quickly divorced.' },
      { name: 'Drew Galloway (Drew McIntyre)', years: '2010–2011', notes: 'Married fellow WWE wrestler Drew McIntyre; filed for divorce citing domestic issues.' }
    ],
    children: [],
    legalIssues: [
      { year: '2010', incident: 'Domestic dispute arrest', details: 'Arrested during a domestic incident while married to Drew McIntyre; charges were later dropped.' }
    ],
    announcing: [],
    facts: [
      'Real name is Taryn Terrell. Competed in WWE under the ring name Tiffany, serving as the on-screen General Manager of ECW.',
      'Won the TNA Knockouts Championship and was one of the top women\'s performers in Impact Wrestling.',
      'Left professional wrestling to focus on her family and pursued a career in real estate.',
      'Was the final on-screen General Manager of the ECW brand before it was cancelled in 2010.',
      'Her "Last Knockout Standing" match against Gail Kim in TNA was highly praised by critics.'
    ],
  },
  1557: { // Sarah Logan
    spouses: [
      { name: 'Raymond Rowe (Erik)', years: '2018–present', notes: 'Married her Viking Raiders tag partner Erik (formerly Raymond Rowe) in December 2018.' }
    ],
    children: [
      { name: 'Raymond Cash Rowe', born: 2021, notes: 'Son born in February 2021.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Sarah Rowe. Competed on Season 6 of WWE Tough Enough before signing with NXT.',
      'Grew up in a rural Kentucky household and is an avid outdoorswoman who hunts and lives off the land.',
      'Was part of the original Riott Squad with Liv Morgan and Ruby Riott from 2017 to 2020.',
      'Returned to WWE in 2022 as Valhalla, a viking warrior character aligned with her real-life husband Erik.'
    ],
  },
  1558: { // Myles Borne
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is David Bostian III. One of the few deaf wrestlers to compete at WWE\'s developmental level.',
      'Relies entirely on visual cues and ring awareness during matches, as he cannot hear referee instructions or crowd reactions.',
      'Was a standout amateur wrestler before signing with WWE.',
      'Has competed regularly on NXT Level Up and NXT television.'
    ],
  },
  1559: { // The Midnight Express
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Bobby Eaton and Stan Lane were the most famous iteration of the team, managed by Jim Cornette.',
      'The original Midnight Express featured Bobby Eaton and Dennis Condrey before Lane replaced Condrey in 1987.',
      'Won multiple NWA World Tag Team Championships and are considered one of the greatest tag teams in wrestling history.',
      'Their rivalry with the Rock \'n\' Roll Express is regarded as one of the best tag team feuds ever.'
    ],
  },
  1560: { // Akira Taue
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'One of All Japan Pro Wrestling\'s Four Pillars of Heaven alongside Misawa, Kobashi, and Kawada.',
      'Was a former sumo wrestler before transitioning to professional wrestling.',
      'Formed the Holy Demon Army tag team with Toshiaki Kawada.',
      'Won the Triple Crown Heavyweight Championship and remained loyal to All Japan throughout his career.'
    ],
  },
  1561: { // Frankie Williams
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'A regular enhancement talent (jobber) on WWWF/WWF television in the late 1970s and early 1980s.',
      'Best remembered for being attacked by Roddy Piper on Piper\'s Pit, helping establish Piper as a top heel.',
      'Despite rarely winning, was a trusted and reliable performer who worked with many top stars of his era.'
    ],
  },
  1562: { // Jay Youngblood
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Steven Nicolas Romero. Was of Native American (Lakota Sioux) heritage.',
      'Best known for his NWA World Tag Team Championship partnership with Ricky Steamboat.',
      'Tragically died on September 2, 1985, at just 30 years old from a suspected heart attack.',
      'Was considered a rising singles star in the NWA before his untimely death.'
    ],
  },
  1564: { // Dave Taylor
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is David Taylor. British technical wrestler trained in the European catch-as-catch-can style.',
      'Teamed with William Regal as part of The Blue Bloods in WCW during the 1990s.',
      'Had a brief WWE return in 2006-2008 as Regal\'s tag partner on SmackDown.',
      'Known for his stiff, European-style in-ring work throughout his career.'
    ],
  },
  1565: { // Reby Hardy
    spouses: [
      { name: 'Matt Hardy', years: '2013–present', notes: 'Married Matt Hardy in 2013. Appeared prominently alongside him in Impact Wrestling\'s Broken Universe storyline.' }
    ],
    children: [
      { name: 'Maxel Hardy', born: 2015, notes: 'First son, who appeared as part of the Broken Hardy compound segments.' },
      { name: 'Wolfgang Xander Hardy', born: 2017, notes: 'Second son.' },
      { name: 'Bartholomew Kit Hardy', born: 2020, notes: 'Third son.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Rebecca Victoria Reyes. Began as a model and independent wrestler before joining Matt Hardy on screen.',
      'Played Queen Rebecca in Impact Wrestling\'s beloved Broken Universe storyline segments.',
      'Has been vocal on social media defending the Hardy family and their business interests.',
      'Previously competed as a wrestler on the independent circuit before focusing on her role as a manager and personality.'
    ],
  },
  1567: { // The Acclaimed
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Max Caster and Anthony Bowens formed the team in AEW, becoming multiple-time AEW World Tag Team Champions.',
      'Known for Caster\'s pre-match rap disses of opponents and the viral "Scissor Me, Daddy Ass" catchphrase.',
      'Managed by WWE Hall of Famer Billy Gunn, who became an integral part of their act.',
      'Anthony Bowens is one of the most prominent openly LGBTQ+ wrestlers in professional wrestling history.'
    ],
  },
  1568: { // Jesús (Aguilera)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Aaron Aguilera. Served as Carlito Caribbean Cool\'s bodyguard on SmackDown in 2004-2005.',
      'Most notable for a storyline where he stabbed John Cena in a nightclub parking lot.',
      'The angle led to a street fight between Cena and Jesus at Armageddon 2004.',
      'Had previously competed in OVW developmental before his SmackDown run.'
    ],
  },
  1571: { // Jack Victory
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Kenneth Rinehurst. A journeyman wrestler and manager who worked across multiple territories and ECW.',
      'Best known for his association with Steve Corino in ECW, managing him from a wheelchair after breaking his leg.',
      'Also competed in Jim Crockett Promotions and various NWA territories in the 1980s.',
      'Was a dependable mid-card performer and manager throughout a career spanning over two decades.'
    ],
  },
  1572: { // Vic Grimes
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Victor Grimes. A member of Da Baldies faction in ECW alongside Tony DeVito.',
      'Infamous for a dangerous scaffold spot with New Jack at ECW Living Dangerously 2000 that went horribly wrong, with both men falling off course.',
      'New Jack later threw him off a scaffold at an XPW event in what many believe was intentional retaliation for the earlier botch.',
      'Largely retired from wrestling after the mid-2000s due to the physical toll of his hardcore style.'
    ],
  },
  1573: { // Mustafa Saed
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Terrance Blalock. One half of The Gangstas tag team alongside New Jack.',
      'The Gangstas debuted in Smoky Mountain Wrestling before becoming a major act in ECW.',
      'Known for violent, weapon-filled tag team brawls that defined ECW\'s extreme style.',
      'Left ECW in 1997 and largely retired from active competition.'
    ],
  },
  1574: { // Kid Kash
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is David Cash. Won the ECW Television Championship and later the WWE Cruiserweight Championship.',
      'Also competed extensively in TNA, where he was a multiple-time X Division Champion.',
      'Known for a high-flying, fast-paced in-ring style despite his relatively small stature.',
      'Trained by Ricky Morton and worked across ECW, WWE, and TNA over his career.'
    ],
  },
  1575: { // MJF
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Maxwell Jacob Friedman. Two-time AEW World Champion and one of wrestling\'s top heels.',
      'Held the AEW World Championship for over 400 days in his first reign.',
      'Known for exceptional promo ability, the Dynamite Diamond Ring angle, and his "Salt of the Earth" persona.',
      'Grew up on Long Island, New York, and incorporates his Jewish heritage into his character.'
    ],
  },
  1576: { // Britt Baker
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Brittany Baker. A practicing dentist who simultaneously pursued a professional wrestling career.',
      'The first woman signed to AEW, becoming the company\'s inaugural AEW Women\'s World Champion.',
      'Real-life longtime partner of Adam Cole.',
      'Her D.M.D. character and "Role Model" catchphrase became one of AEW\'s most popular acts.'
    ],
  },
  1578: { // Darby Allin
    spouses: [
      { name: 'Priscilla Kelly', years: '2018–2021', notes: 'Married fellow wrestler Priscilla Kelly; later divorced.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Samuel Ratsch. An avid skateboarder whose daredevil style is influenced by punk rock and extreme sports.',
      'Was Sting\'s hand-picked tag team partner during Sting\'s final in-ring run in AEW.',
      'Known for his signature face paint (half-black, half-white) and the Coffin Drop finisher.',
      'Named himself after Darby Crash of the Germs and GG Allin, two punk rock icons.'
    ],
  },
  1579: { // Dos Caras
    spouses: [],
    children: [
      { name: 'Alberto Rodriguez (Alberto Del Rio / Dos Caras Jr.)', notes: 'Son who became a major WWE star as Alberto Del Rio, winning multiple world championships.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Jose Luis Rodriguez. Brother of legendary luchador Mil Mascaras.',
      'Three-time UWA World Heavyweight Champion and a major star in Mexican wrestling.',
      'Father of Alberto Del Rio, continuing the family\'s wrestling dynasty.',
      'Competed primarily in CMLL and UWA beginning in 1970, and is considered one of the greatest Mexican heavyweights.'
    ],
  },
  1580: { // Jules Strongbow
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Francis Huntington. An enrolled member of the Oneida Nation of Wisconsin who used his authentic Native American heritage.',
      'Two-time WWF Tag Team Champion alongside kayfabe brother Chief Jay Strongbow in 1982-1983.',
      'Unlike Chief Jay Strongbow (who was Italian-American), Jules was genuinely of Native American descent.',
      'Competed primarily in the WWF and various northeast territories during the early 1980s.'
    ],
  },
  1581: { // Mike Kanellis
    spouses: [
      { name: 'Maria Kanellis', years: '2014–present', notes: 'Married fellow wrestler Maria Kanellis. The couple signed with WWE together in 2017 and were released together in 2020.' }
    ],
    children: [
      { name: 'Fredrica Moon Bennett', born: 2018, notes: 'First daughter, born while both parents were in WWE.' },
      { name: 'Carver Mars Bennett', born: 2020, notes: 'Second child, born shortly before their WWE release.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Michael Bennett. A notable ROH and TNA performer before signing with WWE alongside wife Maria.',
      'Competed on 205 Live and Raw under the Mike Kanellis name.',
      'Has been open about his past struggles with addiction and substance abuse.',
      'Currently competes on the independent circuit as Mike Bennett after his WWE release.'
    ],
  },
  1583: { // Katie Lea
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Katarina Waters. A German-born, British-raised wrestler who appeared in WWE as Paul Burchill\'s kayfabe sister.',
      'Later competed in TNA as Winter, forming a notable pairing with Angelina Love.',
      'Known for a strong technical wrestling style despite being given limited opportunities in WWE.',
      'Also had a career in music and performed under various independent wrestling personas.'
    ],
  },
  1585: { // Adriana Rizzo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Anna Jade Keefer. A former five-time NCAA All-American in track and field before transitioning to wrestling.',
      'Member of Tony D\'Angelo\'s mob-themed NXT faction, The D\'Angelo Family.',
      'Her athletic background gives her a unique combination of speed and power in the ring.',
      'Signed with WWE as part of their NIL (Next In Line) initiative to recruit collegiate athletes.'
    ],
  },
  1586: { // Bullet Club
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Formed in 2013 in NJPW by Prince Devitt (Finn Balor) as a villainous gaijin (foreigner) faction.',
      'One of the most merchandised factions in wrestling history, with their T-shirts becoming a cultural phenomenon.',
      'Alumni include AJ Styles, Kenny Omega, The Young Bucks, Karl Anderson, Luke Gallows, Cody Rhodes, and Hangman Adam Page.',
      'The faction\'s influence extended beyond NJPW, directly inspiring the creation of AEW by several of its former members.'
    ],
  },
  1587: { // New Bloodline
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Splinter faction formed by Solo Sikoa in 2024 during Roman Reigns\' post-WrestleMania 40 hiatus.',
      'Members included Jacob Fatu, Tama Tonga, and Tonga Loa, all with real Samoan/Tongan heritage.',
      'Engaged in a civil war storyline with Roman Reigns\' returning original Bloodline faction.',
      'Jacob Fatu\'s addition was highly anticipated by fans due to his reputation on the independent circuit.'
    ],
  },
  1588: { // Sha Samuels
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Shaheen Sherif. An English independent wrestling star known for his brash East End cockney character.',
      'Appeared on WWE NXT UK from 2021 to 2022 before being released as part of the brand\'s transition.',
      'Was a fixture on the British independent wrestling scene for over a decade before his WWE stint.',
      'Also worked as an actor and appeared in British television productions.'
    ],
  },
  1589: { // Joseph Conners
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Joseph Buckton. Competed in the inaugural WWE UK Championship Tournament in 2017.',
      'Appeared on NXT UK from its launch until his release in 2021.',
      'Now works as a trainer at Elevation Wrestling Academy in England.',
      'Was one of the top heels on the British independent scene before signing with WWE.'
    ],
  },
  1590: { // Hangman Adam Page
    spouses: [
      { name: 'Amanda Page', years: '2020–present', notes: 'Married in 2020.' }
    ],
    children: [
      { name: 'Daughter', born: 2022, notes: 'First child, a daughter.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Stephen Woltz. A founding member of AEW and The Elite faction.',
      'His long-running character arc of the "anxious millennial cowboy" culminated in winning the AEW World Championship from Kenny Omega.',
      'Was a member of the Bullet Club in NJPW before AEW\'s formation.',
      'Known for his Buckshot Lariat finisher and beer-drinking celebrations with fans.'
    ],
  },
  1591: { // Emilia McKenzie
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Millie McKenzie. Signed with WWE NXT UK at a young age, known for an aggressive, hard-hitting style.',
      'Released from WWE in 2022 and went on to win the Sendai Girls World Championship in Japan.',
      'Has been praised for her maturity and ability in the ring despite her young age.',
      'Continues to be one of the top young female wrestlers on the international independent circuit.'
    ],
  },
  1592: { // The Funkettes (Cameron & Naomi)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'The Funkettes were the two dancing valets who accompanied Flash Funk (2 Cold Scorpio) during his 1996-1997 WWF run.',
      'Real names were Nadine Ellis and Traci Swain, who served as part of his funk-themed presentation.',
      'Not to be confused with the Funkadactyls (Cameron and Naomi) who accompanied Brodus Clay.',
      'Their role was primarily decorative, serving as dancers during Flash Funk\'s entrance.'
    ],
  },
  1593: { // Kim Chee (Steve Lombardi)
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'The Kim Chee character was most frequently played by Steve Lombardi, better known as the Brooklyn Brawler.',
      'Served as the masked, safari-helmet-wearing handler for Kamala the Ugandan Giant.',
      'Lombardi was one of WWE\'s most dependable utility players, performing in various roles for decades.',
      'The Kim Chee role was used during Kamala\'s WWF stints in 1986-87 and 1992-93.'
    ],
  },
  1594: { // Rey Fenix
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Mexican luchador and younger brother of Penta (Pentagon Jr.).',
      'One half of the Lucha Brothers tag team, winning the AEW World Tag Team Championship and AEW World Trios Championship.',
      'Signed with WWE in 2025 after his AEW contract expired.',
      'Known for one of the most spectacular and athletic lucha libre styles in modern wrestling.'
    ],
  },
  1596: { // Rosemary
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Holly Letkeman. A Canadian wrestler known for her demon/undead Rosemary persona.',
      'Four-time Impact Knockouts World Tag Team Champion and former Impact Knockouts Champion.',
      'Her character blends horror elements with an aggressive in-ring style.',
      'Had brief appearances on WWE NXT in addition to her lengthy Impact Wrestling career.'
    ],
  },
  1597: { // Austin Aries
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Daniel Solwold Jr. Three-time TNA/Impact World Champion and six-time X Division Champion.',
      'Had a WWE run in 2016-2017 that included winning the NXT Championship and competing on 205 Live.',
      'Known as one of independent wrestling\'s most talented performers and an outspoken vegan and animal rights advocate.',
      'His "A Double" nickname and brash heel persona made him a top attraction across multiple promotions.'
    ],
  },
  1598: { // Pat O'Connor
    spouses: [
      { name: 'Jan O\'Connor', years: '1950s–1990', notes: 'Married until his death in 1990.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Patrick O\'Connor. Born in New Zealand and became NWA World Heavyweight Champion from 1959 to 1961.',
      'Lost the NWA title to Buddy Rogers in the "Match of the Century" at Comiskey Park before nearly 39,000 fans.',
      'Inducted into the WWE Hall of Fame in 2016 as part of the Legacy wing.',
      'After retiring from wrestling, he became a successful insurance salesman in the Kansas City area.'
    ],
  },
  1599: { // Scott Putski
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is James Bednarski. Second-generation wrestler and son of WWF legend Ivan Putski.',
      'Had a brief WWF run in 1997 competing in the light heavyweight division before moving to WCW.',
      'Never achieved the same level of success as his father despite being given opportunities.',
      'Eventually left the wrestling business and pursued other careers.'
    ],
  },
  1600: { // The Yukon Lumberjacks
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'WWWF Tag Team Champions in 1978, managed by Captain Lou Albano.',
      'The team consisted of Scott Irwin and Lumberjack Pierre (Eric the Lumberjack).',
      'Won the WWWF Tag Team titles in June 1978 and held them for 148 days.',
      'Lost the titles to Tony Garea and Larry Zbyszko.'
    ],
  },
  1602: { // The Moondogs
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Moondog Rex and Moondog Spot won the WWF Tag Team Championship in 1981.',
      'The wild, unkempt team carried bones to the ring as part of their gimmick.',
      'The team had multiple iterations over the years with different members adopting the Moondog name.',
      'Their predecessors, the original Moondogs (Rex and King), were also a popular act in multiple territories.'
    ],
  },
  1603: { // Pierre Carl Ouellet
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Carl Ouellet. Three-time WWF Tag Team Champion as Pierre of The Quebecers alongside Jacques Rougeau.',
      'Was later repackaged as the pirate character Jean-Pierre LaFitte in the WWF.',
      'Had a remarkable late-career resurgence in Impact Wrestling and ROH as PCO, competing well into his 50s.',
      'Known for his incredible durability and death-defying spots despite his age during his PCO run.'
    ],
  },
  1604: { // The Young Stallions
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Jim Powers and Paul Roma formed this WWF tag team from 1987 to 1989.',
      'Were positioned as young, athletic fan favorites but never won the WWF Tag Team Championship.',
      'Paul Roma later became a member of the Four Horsemen in WCW.',
      'Jim Powers continued as a mid-card singles wrestler in the WWF through the early 1990s.'
    ],
  },
  1605: { // Greg Gagne
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Gregory Gagne. Son of AWA founder and promoter Verne Gagne.',
      'Two-time AWA Tag Team Champion as one half of the High Flyers with Jim Brunzell.',
      'Critics often accused Verne of giving Greg a push beyond his talent level due to nepotism.',
      'Also worked behind the scenes in the AWA and later in WCW as a creative consultant.'
    ],
  },
  1606: { // Butterbean
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Eric Esch. A four-time IBA World Heavyweight boxing champion and Toughman Contest legend.',
      'Knocked out Brawl for All winner Bart Gunn in just 35 seconds at WrestleMania XV in 1999.',
      'Weighed over 400 pounds during many of his fights and wrestling appearances.',
      'Also competed in MMA and kickboxing, and appeared in the movie "Jackass: The Movie."'
    ],
  },
  1607: { // Wesley Blake
    spouses: [
      { name: 'Sara Lee', years: '2017–2022', notes: 'Married Tough Enough winner Sara Lee. She tragically passed away in October 2022 at age 30.' }
    ],
    children: [
      { name: 'Children', notes: 'Has three children with Sara Lee.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Cory Weston. Won the NXT Tag Team Championship with Buddy Murphy, managed by Alexa Bliss.',
      'Later formed the Forgotten Sons stable with Steve Cutler and Jaxson Ryker in NXT.',
      'His wife Sara Lee (Tough Enough Season 6 winner) tragically passed away in October 2022.',
      'Was released from WWE in 2021 and has since competed on the independent circuit.'
    ],
  },
  1608: { // Scorpio Sky
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Schuyler Andrews. A founding member of the AEW roster.',
      'Was one-third of the inaugural AEW World Tag Team Champions as part of SoCal Uncensored with Christopher Daniels and Frankie Kazarian.',
      'Won the TNT Championship twice during his AEW tenure.',
      'Competed extensively on the Southern California independent scene before AEW.'
    ],
  },
  1609: { // Gene Kiniski
    spouses: [
      { name: 'Barbara Kiniski', notes: 'Married for many years.' }
    ],
    children: [
      { name: 'Kelly Kiniski', notes: 'Son who also became a professional wrestler.' },
      { name: 'Nick Kiniski', notes: 'Son who also competed in wrestling.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Eugene Kiniski. A former CFL football player who became NWA World Heavyweight Champion from 1966 to 1969.',
      'Held the NWA title for 1,131 days before losing to Dory Funk Jr.',
      'Known as "Canada\'s Greatest Athlete" due to his legitimate athletic background.',
      'Died on April 14, 2010, at age 81 in Blaine, Washington.'
    ],
  },
  1610: { // Wally Karbo
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Walter Karbo. Co-founded the American Wrestling Association alongside Verne Gagne in 1960.',
      'Served as the AWA\'s matchmaker and on-air commissioner for decades.',
      'Helped build the AWA into one of the most powerful wrestling territories in North America.',
      'Died on December 15, 1997. Inducted into the Professional Wrestling Hall of Fame.'
    ],
  },
  1611: { // Dory Funk Sr.
    spouses: [],
    children: [
      { name: 'Dory Funk Jr.', born: 1941, notes: 'Son who became NWA World Heavyweight Champion.' },
      { name: 'Terry Funk', born: 1944, notes: 'Son who became NWA World Heavyweight Champion and hardcore legend.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Dorrance Funk. Father of Dory Funk Jr. and Terry Funk, two of wrestling\'s all-time greats.',
      'A 17-time NWA North American Heavyweight Champion based out of Amarillo, Texas.',
      'His Western States Sports promotion launched the careers of Stan Hansen, Harley Race, and others.',
      'Died on June 3, 1973. His sons carried on his legacy as two of the greatest wrestlers in history.'
    ],
  },
  1612: { // Miguel Perez
    spouses: [],
    children: [
      { name: 'Miguel Perez Jr.', notes: 'Son who also became a professional wrestler, competing in WWF in the late 1990s.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'A Puerto Rican wrestling legend who formed an iconic tag team with Antonino Rocca in the 1950s and 1960s.',
      'One of the first major Puerto Rican stars in mainstream American wrestling.',
      'Competed in multiple main events at Madison Square Garden during wrestling\'s territorial era.',
      'Died on January 4, 2009. His son Miguel Perez Jr. also competed in professional wrestling.'
    ],
  },
  1613: { // The Destroyer (Dick Beyer)
    spouses: [
      { name: 'Wilma Beyer', notes: 'Married for many decades until his death.' }
    ],
    children: [
      { name: 'Kurt Beyer', notes: 'Son who also briefly competed in wrestling.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Dick Beyer. Popularized the figure-four leglock before Ric Flair made it famous.',
      'Was one of the first American wrestlers to become a major superstar in Japan, achieving legendary status there.',
      'Held championships across NWA territories, the AWA, and Japanese promotions.',
      'Died on March 7, 2019, at age 88. Was inducted into the WWE Hall of Fame in 2024.'
    ],
  },
  1614: { // Louis Cerdan
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Gino Brito. Won the WWWF World Tag Team Championship with Tony Parisi in 1975 under his Louis Cerdan ring name.',
      'Later became a major wrestling promoter in the Montreal area under his real name.',
      'Promoted International Wrestling (Lutte Internationale) in Quebec, which featured many top names.',
      'One of the most influential figures in Canadian wrestling history both in and out of the ring.'
    ],
  },
  1616: { // Mercedes Martinez
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is Jazmin Benitez. Of Puerto Rican descent and one of the most respected veterans in women\'s wrestling.',
      'Competed in both Mae Young Classic tournaments and signed with WWE for NXT in 2020.',
      'Had stints in both NXT and NXT UK, winning the NXT Women\'s Tag Team Championship.',
      'Has over two decades of experience across ROH, Shimmer, and numerous independent promotions.'
    ],
  },
  1618: { // Eddie Gilbert
    spouses: [
      { name: 'Missy Hyatt', years: '1987–1989', notes: 'Brief marriage to fellow wrestling personality Missy Hyatt.' }
    ],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Thomas Gilbert Jr. Known as "Hot Stuff" Eddie Gilbert.',
      'Served as ECW\'s first head booker before Paul Heyman took over the promotion.',
      'Was an innovative mind in wrestling who worked as a wrestler, booker, and promoter across Mid-South, Memphis, and NWA territories.',
      'Died on February 18, 1995, at just 33 years old from a heart attack. His father Tommy Gilbert was also a wrestler.'
    ],
  },
  1619: { // Ian Rotten
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name is John Williams. Formed the Bad Breed tag team with Axl Rotten in ECW (no real relation despite the shared name).',
      'Founded the IWA Mid-South promotion in Kentucky after leaving ECW in 1995.',
      'IWA Mid-South became known for extreme hardcore wrestling and helped launch the career of CM Punk.',
      'His promotion\'s "King of the Death Match" tournaments attracted international deathmatch wrestlers.'
    ],
  },
  1620: { // Devastation Inc.
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'A heel stable in World Class Championship Wrestling managed by Skandor Akbar.',
      'Featured a revolving door of members including Kamala, King Kong Bundy, and a young Undertaker (then known as The Master of Pain).',
      'Skandor Akbar was one of the most hated managers in Texas wrestling history.',
      'The stable was a dominant villainous force in WCCW throughout the 1980s.'
    ],
  },
  1621: { // The Sharpe Brothers
    spouses: [],
    children: [
      { name: 'Iron Mike Sharpe', notes: 'Mike Sharpe\'s son "Iron" Mike Sharpe became a well-known WWF enhancement talent in the 1980s.' }
    ],
    legalIssues: [],
    announcing: [],
    facts: [
      'Ben Sharpe and Mike Sharpe won the inaugural NWA World Tag Team Championship in 1951.',
      'Among the first major western wrestlers to tour and compete in Japan, helping build international wrestling bridges.',
      'Canadian brothers who were pioneering figures in professional wrestling\'s tag team division.',
      'Mike Sharpe\'s son, "Iron" Mike Sharpe, later became a fixture in the WWF as a regular performer.'
    ],
  },
  1622: { // The Stud Stable
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'WCW heel stable managed by Colonel Robert Parker active from 1994 to 1997.',
      'Members included Arn Anderson, Terry Funk, Bunkhouse Buck, and Meng at various times.',
      'Feuded heavily with Dusty and Dustin Rhodes in a major WCW storyline.',
      'Colonel Parker\'s on-screen romance with Sherri Martel was a memorable subplot during the stable\'s run.'
    ],
  },
  1623: { // Toots Mondt
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Joseph Raymond Mondt. A revolutionary wrestling promoter and innovator.',
      'Co-founded the Capitol Wrestling Corporation in 1952 with Jess McMahon, laying the foundation for what became WWE.',
      'Was instrumental in the 1963 creation of the WWWF alongside Vincent J. McMahon.',
      'Died on June 11, 1976. Inducted into the WWE Hall of Fame in 2008 as part of the Legacy wing.'
    ],
  },
  1624: { // Paul Vachon
    spouses: [],
    children: [],
    legalIssues: [],
    announcing: [],
    facts: [
      'Real name was Paul Vachon. Nicknamed "The Butcher" and brother of Maurice "Mad Dog" Vachon.',
      'AWA World Tag Team Champion alongside his brother Mad Dog Vachon.',
      'Competed across Canadian and American territories throughout the 1960s, 1970s, and 1980s.',
      'Died on September 2, 2013, at age 75. The Vachon family is one of Canadian wrestling\'s most storied dynasties.'
    ],
  },
  1627: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Originally from Minneapolis, Minnesota, with a background in competitive Rubik\'s Cube solving — a contrast to his imposing image.',
      'Trained at the Black and Brave Wrestling Academy, which was co-founded by Seth Rollins.',
      'Teamed with Luke Harper as The Bludgeon Brothers, winning the SmackDown Tag Team Championship at WrestleMania 34.',
      'Original member of the Wyatt Family alongside Bray Wyatt and Luke Harper.',
      'Known for wearing a sheep mask to the ring as part of the Wyatt Family gimmick.',
      'Returned in 2024 as Ramblin Rabbit in The Wyatt Sicks faction honoring the late Bray Wyatt.',
    ],
  },
  15: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Demolition (Ax & Smash) were WWF Tag Team Champions three times.',
      'Held the longest WWF Tag Team Championship reign at 478 days.',
      'Created as WWF\'s answer to the Road Warriors/Legion of Doom.'
    ],
  },
  16: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'British Bulldogs consisted of Davey Boy Smith and the Dynamite Kid.',
      'Won the WWF Tag Team Championship at WrestleMania 2 in front of 75,000+ fans.',
      'Dynamite Kid is considered one of the most influential junior heavyweights of all time.'
    ],
  },
  51: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Dudley Boyz (Bubba Ray & D-Von) are the most decorated tag team in wrestling history with 23 tag title reigns across WWE, WCW, ECW, and TNA.',
      'Pioneered the use of tables as a weapon and signature spot in wrestling.',
      'Inducted into the WWE Hall of Fame in 2018.'
    ],
  },
  67: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'APA (Acolytes Protection Agency) consisted of Bradshaw (JBL) and Faarooq (Ron Simmons).',
      'Known for their backstage poker games and beer-drinking segments.',
      'Served as hired muscle and bodyguards for various wrestlers.'
    ],
  },
  105: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The New Day (Kofi Kingston, Big E, Xavier Woods) are the longest-reigning Raw Tag Team Champions at 483 days.',
      'Xavier Woods runs the popular UpUpDownDown YouTube gaming channel.',
      'Started as a gospel-inspired act before evolving into their beloved positive/trombone-playing personas.'
    ],
  },
  121: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Test & Albert (T&A) were managed by Trish Stratus early in her WWE career.',
      'Albert later became Tensai and then a beloved commentator in NXT as Jason Albert.'
    ],
  },
  122: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Godwinns (Henry O. Godwinn & Phineas I. Godwinn) were a hog-farming tag team.',
      'Known for their slop bucket, which they would dump on opponents.'
    ],
  },
  123: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Headbangers (Mosh & Thrasher) were known for their grunge/metal personas.',
      'Won the WWF Tag Team Championship in 1997.'
    ],
  },
  129: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Usos (Jimmy & Jey) are the sons of Rikishi and grandsons of Peter Maivia.',
      'Hold the record for longest tag team title reign in WWE history at 620+ days.',
      'Members of the legendary Anoa\'i wrestling family.'
    ],
  },
  148: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Nasty Boys (Brian Knobbs & Jerry Sags) were WWF Tag Team Champions once.',
      'Known for their brawling style and Pit Stop finishing move.'
    ],
  },
  149: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Legion of Doom (Hawk & Animal) are widely considered the greatest tag team of all time.',
      'Won tag team gold in every major promotion (WWF, NWA, AWA).',
      'Inducted into the WWE Hall of Fame in 2011.'
    ],
  },
  150: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Bushwhackers (Luke & Butch) originated from New Zealand.',
      'Known as The Sheepherders in their earlier, more violent incarnation.',
      'Inducted into the WWE Hall of Fame in 2015.'
    ],
  },
  151: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Natural Disasters consisted of Earthquake and Typhoon.',
      'Won the WWF Tag Team Championship in 1992.'
    ],
  },
  152: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Money Inc. consisted of Ted DiBiase and IRS (Irwin R. Schyster).',
      'Won the WWF Tag Team Championship twice.',
      'Both members were second-generation wrestlers.'
    ],
  },
  158: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Smoking Gunns (Billy & Bart Gunn) were a cowboy-themed tag team.',
      'Won the WWF Tag Team Championship three times.',
      'Billy Gunn later found greater fame in the New Age Outlaws with Road Dogg.'
    ],
  },
  159: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Headshrinkers (Samu & Fatu) were members of the Anoa\'i wrestling family.',
      'Fatu later became Rikishi and had a successful singles career.'
    ],
  },
  163: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Right to Censor was a censorship-themed stable featuring Steven Richards, The Goodfather, Bull Buchanan, Ivory, and Val Venis.',
      'A parody of the Parents Television Council which was criticizing WWE at the time.'
    ],
  },
  164: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Mean Street Posse (Pete Gas, Rodney, Joey Abs) were Shane McMahon\'s childhood friends from Greenwich, Connecticut.',
      'Played spoiled rich kid characters who served as Shane\'s lackeys.'
    ],
  },
  174: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'MNM (Joey Mercury, Johnny Nitro, Melina) were three-time WWE Tag Team Champions.',
      'Johnny Nitro later became John Morrison/Johnny Mundo.'
    ],
  },
  185: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'William Regal & Eugene were an unlikely tag team pairing.',
      'Eugene (Nick Dinsmore) was a talented wrestler portraying a special needs character who was a savant for wrestling.'
    ],
  },
  196: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Nexus was a faction of NXT Season 1 rookies who invaded Raw in June 2010.',
      'Their debut attack on Raw is considered one of the most memorable moments in WWE history.',
      'Led by Wade Barrett, the group included Daniel Bryan, Justin Gabriel, Heath Slater, and others.'
    ],
  },
  272: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Viking Raiders (Erik & Ivar) competed as War Machine and War Raiders before WWE.',
      'Won tag team titles in NXT, Raw, and SmackDown.'
    ],
  },
  281: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Too Cool (Scotty 2 Hotty & Grandmaster Sexay) were one of the most popular acts during the Attitude Era.',
      'Scotty\'s "The Worm" became one of the most iconic crowd-pleasing moves in WWE history.',
      'Grandmaster Sexay (Brian Christopher) was the son of Jerry "The King" Lawler.'
    ],
  },
  297: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Judgment Day was originally formed by Edge before being taken over by Finn Balor.',
      'Has included Damian Priest, Rhea Ripley, Dominik Mysterio, JD McDonagh, and Carlito.',
      'Became one of the most dominant factions on Raw from 2022-2025.'
    ],
  },
  343: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Ascension (Konnor & Viktor) were NXT Tag Team Champions for a record 364 days.',
      'Their main roster run was less successful than their dominant NXT tenure.'
    ],
  },
  359: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Valiant Brothers (Johnny & Jimmy Valiant) were WWWF Tag Team Champions.',
      'Known for their bleached-blonde hair and flamboyant personas.'
    ],
  },
  360: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Wild Samoans (Afa & Sika) are the patriarchs of the Anoa\'i wrestling dynasty.',
      'Won the WWF Tag Team Championship three times.',
      'Inducted into the WWE Hall of Fame in 2007.'
    ],
  },
  421: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Imperium was formed by WALTER (Gunther) in NXT UK as a European wrestling purist faction.',
      'Has included Ludwig Kaiser, Giovanni Vinci, and Alexander Wolfe.'
    ],
  },
  499: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Pretty Deadly (Elton Prince & Kit Wilson) are former NXT Tag Team Champions.',
      'Known for their flamboyant personas and entertaining tag team work.'
    ],
  },
  517: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Katana Chance & Kayden Carter are former NXT Women\'s Tag Team Champions.',
      'Known for their high-energy and athletic tag team style.'
    ],
  },
  860: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Motor City Machine Guns (Alex Shelley & Chris Sabin) are considered one of the greatest tag teams of the 21st century.',
      'Spent most of their career in TNA before signing with WWE in 2024.',
      'Won the WWE Tag Team Championship.'
    ],
  },
  865: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Axiom & Nathan Frazer are former NXT Tag Team Champions.',
      'Both are known for their high-flying, fast-paced wrestling style.'
    ],
  },
  910: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Gallus (Joe Coffey, Mark Coffey, Wolfgang) were a dominant faction in NXT UK.',
      'The Coffey brothers are real-life siblings from Scotland.'
    ],
  },
  911: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Alba Fyre & Isla Dawn are former WWE Women\'s Tag Team Champions.',
      'Both represent Scottish heritage in their personas.'
    ],
  },
  952: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Prime Time Players (Darren Young & Titus O\'Neil) were WWE Tag Team Champions.',
      'Darren Young became the first openly gay professional wrestler in WWE.'
    ],
  },
  953: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Cryme Tyme (JTG & Shad Gaspard) were a popular tag team known for their street-wise personas.',
      'Shad Gaspard tragically drowned in 2020 while saving his son from a riptide, earning posthumous recognition as a hero.'
    ],
  },
  954: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Spirit Squad was a group of male cheerleaders consisting of Kenny, Johnny, Mitch, Nicky, and Mikey.',
      'Nicky later became Dolph Ziggler and had a highly successful singles career.'
    ],
  },
  955: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Deuce and Domino were a 1950s greaser-themed tag team managed by Cherry.',
      'Won the WWE Tag Team Championship once in 2007.'
    ],
  },
  1020: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'La Resistance (Sylvain Grenier & Rob Conway) were a French anti-American tag team.',
      'Won the World Tag Team Championship three times.'
    ],
  },
  1021: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Basham Brothers (Doug & Danny Basham) were SmackDown Tag Team Champions.',
      'Managed by Shaniqua during their initial run.'
    ],
  },
  1144: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Executioners were a masked tag team in the WWWF.',
      'Won the WWWF Tag Team Championship in 1976.'
    ],
  },
  1189: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Mongols (Bepo & Geto Mongol) were a WWWF Tag Team Championship-winning team.',
      'One of the earliest "foreign menace" tag teams in WWWF history.'
    ],
  },
  1508: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Public Enemy (Rocco Rock & Johnny Grunge) were ECW Tag Team Champions.',
      'Known for their table-centric hardcore wrestling style.',
      'Had a brief run in WWE in 1999.'
    ],
  },
  1625: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Ruby Riott (Dori Prange) led the Riott Squad with Liv Morgan and Sarah Logan.',
      'Competed extensively on the independent circuit as Heidi Lovelace before joining WWE.',
      'Later competed in AEW as Ruby Soho.'
    ],
  },
  1626: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'Serena Deeb famously shaved her head to join CM Punk\'s Straight Edge Society.',
      'Became NWA Women\'s World Champion in AEW, earning widespread critical acclaim.',
      'Considered one of the best technical women\'s wrestlers of her generation.'
    ],
  },
  1628: {
    spouses: [],
    children: [],
    legalIssues: [],
    facts: [
      'The Wyatt Sicks were formed in 2024 to honor the memory of the late Bray Wyatt.',
      'Led by Uncle Howdy (Bo Dallas), Bray Wyatt\'s real-life brother.',
      'Each member adopted a persona inspired by Bray\'s Firefly Fun House characters.'
    ],
  },
  1: {
    realName: 'Bruno Leopoldo Francesco Sammartino',
    spouse: 'Carol Sammartino (m. 1959)',
    children: ['David Sammartino (wrestler)', 'Danny Sammartino', 'Darryl Sammartino'],
    facts: [
      'Born in Pizzoferrato, Italy — survived WWII as a child hiding in the mountains from Nazi occupation',
      'Sold out Madison Square Garden 187 times — a record that will never be broken',
      'Combined WWWF title reign of 4,040 days — the longest in major wrestling history',
      'Refused to drop the title to wrestlers he felt were unworthy — had legendary creative control',
      'Had a real-life falling out with WWE that lasted decades before reconciling for his 2013 Hall of Fame induction',
    ],
  },
  209: {
    realName: 'April Jeanette Mendez',
    spouse: 'CM Punk (Phil Brooks) (m. 2014)',
    children: ['Larry (son, born 2024)'],
    facts: [
      'Grew up in a troubled home — family was homeless at times during her childhood',
      'Retired from wrestling in 2015 at age 28 — wrote a memoir "Crazy Is My Superpower"',
      'Her 295-day Divas Championship reign set the record for longest reign',
      'Known for her love of comic books and video games — wore Chuck Taylor sneakers to the ring',
    ],
  },
  231: {
    realName: 'James William Ross',
    spouse: 'Jan Ross (m. 1993, d. 2017)',
    children: [],
    facts: [
      'Suffered from Bell\'s palsy — a recurring condition that periodically paralyzed half his face',
      'Called the most iconic moments in wrestling history including Stone Cold vs. Bret Hart at WM13',
      'Was publicly humiliated on-air multiple times by Vince McMahon despite being beloved by fans',
      'Ran a successful BBQ sauce business — "J.R.\'s Family BBQ"',
      'Published multiple books about his career and the wrestling industry',
    ],
  },
  255: {
    realName: 'Dylan Mark Postl',
    spouse: null,
    children: [],
    facts: [
      'Has a form of dwarfism called achondroplasia — was discovered by Fit Finlay who brought him to WWE',
      'Was revealed as Vince McMahon\'s "illegitimate son" in a 2007 storyline — one of the silliest angles of the PG era',
      'Was the last-ever WWE Cruiserweight Champion before the title was retired',
      'Appeared in multiple comedy segments and was genuinely popular with young fans',
    ],
  },
  271: {
    realName: 'Michael Shane Rallis',
    spouse: null,
    children: [],
    facts: [
      'Canadian wrestler who was a huge star in NXT but never got a proper main roster push',
      'His "Breezango Fashion Files" segments with Fandango were some of the most creative comedy in WWE',
      'Used a selfie phone as part of his entrance — the Prince Pretty gimmick was ahead of its time for social media era',
    ],
  },
  275: {
    realName: 'David Harwood (Dash Wilder) & Daniel Wheeler (Scott Dawson)',
    spouse: null,
    children: [],
    facts: [
      'Left WWE in 2020 — became FTR in AEW where they are widely considered the best tag team in the world',
      'Their "No flips, just fists" motto was a deliberate contrast to the high-flying modern tag style',
      'Won tag team championships in WWE, AEW, AAA, and NJPW — one of the most decorated tag teams ever',
    ],
  },
  278: {
    realName: 'Kyle Martin O\'Reilly',
    spouse: null,
    children: [],
    facts: [
      'Has a legitimate background in Brazilian Jiu-Jitsu and MMA',
      'Was a key member of the Undisputed Era — NXT\'s most dominant faction',
      'Left WWE for AEW in 2022',
    ],
  },
  292: {
    realName: 'Yuvraj Singh Dhesi',
    spouse: null,
    children: [],
    facts: [
      'Canadian of Punjabi Sikh descent — his title reign was designed to expand WWE\'s Indian market',
      'Went from 3MB comedy jobber to WWE Champion — one of the most dramatic career turnarounds',
      'The Singh Brothers (now Bollywood Boyz) served as his valets during his championship run',
      'Related to Gama Singh, a veteran Canadian wrestler',
    ],
  },
  372: {
    realName: 'Brian Gerard James',
    spouse: null,
    children: [],
    facts: [
      'Son of "Bullet" Bob Armstrong, brother of Brad and Scott Armstrong — a wrestling family',
      'His pre-match introduction with Billy Gunn became one of the most crowd-interactive moments of the Attitude Era',
      'Later became a WWE road agent/producer behind the scenes',
      'Had a brief run as "The Roadie" — Jeff Jarrett\'s assistant — before finding fame as Road Dogg',
      'Inducted into the WWE Hall of Fame as part of DX in 2019',
    ],
  },
  624: {
    realName: 'Damon Kemp',
    spouse: null,
    children: [],
    facts: [
      'Was part of Diamond Mine stable in NXT before turning on the group',
      'College amateur wrestling background from the University of Minnesota',
    ],
  },
  647: {
    realName: 'René Duprée & Sylvain Grenier',
    spouse: null,
    children: [],
    facts: [
      'René Duprée was the youngest tag team champion in WWE history at 19 years old',
      'Drew enormous heat by singing the French national anthem before matches during post-9/11 anti-French sentiment',
      'Rob Conway later replaced Duprée in the group',
    ],
  },
  654: {
    realName: 'Carlos Edwin Colón Jr. (Primo) & Orlando Colón Nieves (Epico)',
    spouse: null,
    children: [],
    facts: [
      'Members of the legendary Colón wrestling family from Puerto Rico',
      'Their father Carlos Colón Sr. is one of the biggest stars in Puerto Rican wrestling history',
      'Were later repackaged as Los Matadores with bullfighter gimmick and El Torito mascot',
    ],
  },
  671: {
    realName: 'Tatum Paxley',
    spouse: null,
    children: [],
    facts: [
      'Australian wrestler who signed with WWE in 2021',
      'Known for her obsessive, stalker-like character that fixates on other NXT women',
      'Won the NXT Women\'s Tag Team Championship with Ivy Nile',
    ],
  },
  695: {
    realName: 'Mike Enos & Wayne Bloom',
    spouse: null,
    children: [],
    facts: [
      'Previously known as the Destruction Crew in the AWA',
      'Managed by The Genius (Lanny Poffo), Randy Savage\'s brother',
      'Despite their heel act, were respected workers behind the scenes',
    ],
  },
  780: {
    realName: 'MVP, Bobby Lashley, Shelton Benjamin, Cedric Alexander',
    spouse: null,
    children: [],
    facts: [
      'MVP was the architect and mouthpiece of the group',
      'Bobby Lashley won the WWE Championship while in the faction',
      'The group was broken up prematurely — widely regarded as a creative mistake',
      'Their coordinated suit-wearing aesthetic was one of the most professional faction looks in WWE history',
    ],
  },
  800: {
    realName: 'Tito Santana (Merced Solis) & Rick Martel (Richard Vigneault)',
    spouse: null,
    children: [],
    facts: [
      'Won the WWF Tag Team Championship in October 1987',
      'Their breakup when Martel abandoned Santana during a match led to one of the best feuds of 1989',
      'Martel went on to become "The Model" Rick Martel — one of the era\'s best mid-card heels',
    ],
  },
  887: {
    realName: 'Tony Norris',
    spouse: null,
    children: [],
    facts: [
      'Was the first African-American Intercontinental Champion — a historic accomplishment',
      'Had one of the most impressive physiques in wrestling history — genuinely massive',
      'His Pearl River Plunge (sitout powerbomb) was one of the most devastating finishers of the era',
      'Career was significantly shortened by chronic kidney and shoulder injuries',
      'His promos were notoriously difficult to understand — became a running joke among fans',
    ],
  },
  962: {
    realName: 'Primo Colón & Epico Colón',
    spouse: null,
    children: [],
    facts: [
      'Primo and Epico repackaged as Spanish bullfighters with a tiny bull mascot named El Torito',
      'El Torito was actually Mascarita Dorada, a renowned mini-wrestler from Mexico',
      'The WeeLC match between El Torito and Hornswoggle at Extreme Rules 2014 was surprisingly entertaining',
    ],
  },
  1018: {
    realName: 'Erika Shishido',
    spouse: null,
    children: [],
    facts: [
      'Considered one of the greatest joshi (women\'s) wrestlers in Japanese history',
      'Her spinning backfist was one of the most legitimately dangerous moves in wrestling',
      'Her WWF appearances in 1995 were very brief — she deserved a much longer run',
      'Dominated All Japan Women\'s Pro Wrestling (AJW) in the 1990s',
    ],
  },
  1141: {
    realName: 'Dean Ho',
    spouse: null,
    children: [],
    facts: [
      'Hawaiian-born wrestler who was one of the first prominent Asian-Pacific Islander stars in WWWF',
      'Teamed with Tony Garea to win the WWWF Tag Team Championship',
      'Known for his speed and high-flying ability in an era dominated by heavyweight brawlers',
    ],
  },
  1148: {
    realName: 'Masanori Saito',
    spouse: null,
    children: [],
    facts: [
      'Japanese martial artist who teamed with Mr. Fuji in the WWWF/WWF',
      'Won the WWF Tag Team Championship twice with Mr. Fuji',
      'Also had a notable career in the AWA — won the AWA World Heavyweight Championship in 1990',
      'Known for his stiff, credible wrestling style rooted in legitimate martial arts',
    ],
  },
  1342: {
    realName: 'Phil Theis',
    spouse: null,
    children: [],
    facts: [
      'Was The Undertaker\'s opponent on the very first Monday Night Raw on January 11, 1993',
      'His deranged character talked to voices in his head — a precursor to later "crazy" gimmicks',
      'Had a very brief WWF run in 1992-1993 but is forever linked to Raw\'s debut episode',
    ],
  },
  1391: {
    realName: 'Nana Osei Mensah',
    spouse: null,
    children: [],
    facts: [
      'Ghanaian-born high-flyer who is a member of the Meta-Four faction in NXT',
      'Known for his incredible agility and springboard moves',
      'Part of the Meta-Four alongside Noam Dar, Lash Legend, and Jakara Jackson',
    ],
  },
  1438: {
    realName: 'Thavone Fatu',
    spouse: null,
    children: [],
    facts: [
      'Member of the legendary Anoa\'i wrestling dynasty',
      'Signed with WWE in 2024 as one of the youngest members of the family to join',
      'Known for his explosive athleticism and Samoan toughness',
    ],
  },
  610: {
    realName: 'Zack Gibson & James Drake',
    spouse: null, children: [],
    facts: ['NXT UK Tag Team Champions who brought old-school British tag wrestling to NXT UK', 'Gibson\'s heel promos were among NXT UK\'s most entertaining segments'],
  },
  611: {
    realName: 'Mark Andrews & Flash Morgan Webster',
    spouse: null, children: [],
    facts: ['Welsh high-flyers who represented the UK indie scene in NXT UK', 'Andrews was a veteran of British wrestling before joining NXT UK'],
  },
  645: {
    realName: 'Charlie Haas & Shelton Benjamin',
    spouse: null, children: [],
    facts: ['Both had legitimate amateur wrestling backgrounds', 'Managed by Kurt Angle — the team was literally called Team Angle', 'Later rebranded as The World\'s Greatest Tag Team'],
  },
  648: {
    realName: 'Robbie McAllister & Rory McAllister',
    spouse: null, children: [],
    facts: ['Scottish tag team who wore kilts and played to the Scottish warrior stereotype', 'Had a brief but entertaining run on Raw in 2006-2007'],
  },
  655: {
    realName: 'Matt Rehwoldt (Aiden English) & Simon Gotch',
    spouse: null, children: [],
    facts: ['Their 1920s Vaudeville-era throwback gimmick was unique in modern wrestling', 'Rehwoldt later found more success as Rusev Day\'s singing herald', 'Gotch was released after a backstage altercation with Sin Cara'],
  },
  656: {
    realName: 'Eric Arndt (Enzo) & William Morrissey (Big Cass)',
    spouse: null, children: [],
    facts: ['S-A-W-F-T! — their catchphrases became crowd-wide phenomena', 'Most over debut act in NXT history', 'Enzo was released in 2018 following misconduct allegations; Cass was released due to attitude issues', 'Morrissey later competed in Impact Wrestling and AEW'],
  },
  657: {
    realName: 'Jason Jordan & Chad Gable',
    spouse: null, children: [],
    facts: ['Both had NCAA Division I wrestling backgrounds', 'Jordan was later revealed as Kurt Angle\'s storyline son — a controversial angle', 'Jordan\'s career was cut short by a neck injury', 'Gable went on to success as Shorty G and then in Alpha Academy with Otis'],
  },
  658: {
    realName: 'Claudio Castagnoli (Cesaro) & Stephen Farrelly (Sheamus)',
    spouse: null, children: [],
    facts: ['Five combined Raw and SmackDown tag title reigns', 'Started as reluctant partners who despised each other — became genuinely great friends', 'Their chemistry was remarkable given their very different styles'],
  },
  659: {
    realName: 'Sunny Dhinsa (Akam) & Jonny Siniela (Rezar)',
    spouse: null, children: [],
    facts: ['Managed by Paul Ellering in NXT — a nostalgic nod to the Road Warriors', 'Among the most physically imposing tag teams WWE has produced', 'Rezar\'s bicep tear derailed their main roster momentum'],
  },
  660: {
    realName: 'Nikola Bogojevic (Otis) & Sawyer Fulton (Tucker)',
    spouse: null, children: [],
    facts: ['Otis won the Money in the Bank briefcase at WrestleMania 36', 'Otis\'s romance storyline with Mandy Rose was genuinely sweet', 'Tucker turned heel and cost Otis the briefcase — breaking up the team'],
  },
  681: {
    realName: 'Rinku Singh (Veer) & Sanga',
    spouse: null, children: [],
    facts: ['Rinku Singh was a former Indian baseball pitcher who appeared on the reality show Million Dollar Arm', 'The team was a developmental project in NXT', 'Both were later given singles pushes on the main roster'],
  },
  683: {
    realName: 'Josh Briggs & Brooks Jensen',
    spouse: null, children: [],
    facts: ['Country-boy tag team in NXT', 'Their storyline with Fallon Henley was one of NXT\'s most followed romantic subplots', 'Jensen had a memorable heel turn that split the team'],
  },
  685: {
    realName: 'Hank Walker & Tank Ledger',
    spouse: null, children: [],
    facts: ['Blue-collar tag team in NXT', 'Both had football backgrounds before transitioning to wrestling'],
  },
  689: {
    realName: 'Danny Burch & Oney Lorcan',
    spouse: null, children: [],
    facts: ['Won the NXT Tag Team Championship', 'Burch is British; Lorcan is American — their hard-hitting style made them fan favorites', 'Both were known for their stiff, physical wrestling style'],
  },
  690: {
    realName: 'Wes Lee & Nash Carter',
    spouse: null, children: [],
    facts: ['Won NXT Tag Team Championship multiple times', 'Nash Carter (Zachary Green) was released in 2022 following domestic abuse allegations', 'Wes Lee went on to a successful NXT singles career including the North American Championship'],
  },
  691: {
    realName: 'Shawn Michaels & Marty Jannetty',
    spouse: null, children: [],
    facts: ['One of the greatest tag teams in WWF history — their matches with the Hart Foundation are legendary', 'Their breakup — Michaels superkicking Jannetty through the Barber Shop window — is the most iconic tag team split in history', 'Michaels became "The Heartbreak Kid" and one of the greatest of all time; Jannetty never matched that success'],
  },
  692: {
    realName: 'Davey Boy Smith & Tom Billington (Dynamite Kid)',
    spouse: null, children: [],
    facts: ['British tag team who won the WWF Tag Team Championship', 'Dynamite Kid is credited as a pioneer of high-flying heavyweight wrestling, influencing Chris Benoit and many others', 'Dynamite Kid\'s career ended due to severe spinal injuries; he died in 2018', 'Davey Boy Smith had the iconic WrestleMania match at Wembley Stadium and died in 2002 at age 39'],
  },
  693: {
    realName: 'Pat Tanaka & Akio Sato (later Paul Diamond as Kato)',
    spouse: null, children: [],
    facts: ['Managed by Mr. Fuji', 'Paul Diamond wrestled under a mask as Kato when Sato left', 'Had memorable feuds with the Rockers'],
  },
  696: {
    realName: 'Jacques Rougeau & Carl Ouellet (Pierre)',
    spouse: null, children: [],
    facts: ['Three-time WWF Tag Team Champions', 'Jacques was part of the legendary Rougeau wrestling family from Montreal', 'Managed by Johnny Polo (who later became Raven in ECW)'],
  },
  697: {
    realName: 'Nelson Frazier Jr. (Mabel) & Robert Horne (Mo)',
    spouse: null, children: [],
    facts: ['Managed by Oscar who rapped their entrance theme', 'Mabel won King of the Ring 1995 — widely considered the worst KOTR winner ever', 'Mabel was later repackaged as Viscera and Big Daddy V', 'Mabel died in 2014 at age 43'],
  },
  698: {
    realName: 'Timothy Well & Steven Dunn',
    spouse: null, children: [],
    facts: ['Managed by Harvey Wippleman', 'Enhancement-level heel tag team of the early 1990s'],
  },
  699: {
    realName: 'Samu & Fatu (Rikishi)',
    spouse: null, children: [],
    facts: ['Part of the Anoa\'i wrestling dynasty', 'Fatu later became Rikishi — one of the most popular acts of the Attitude Era', 'Won the WWF Tag Team Championship', 'Managed by Afa (one of the original Wild Samoans)'],
  },
  700: {
    realName: 'Robert Rechsteiner (Rick) & Scott Rechsteiner (Scott)',
    spouse: null, children: [],
    facts: ['Real-life brothers from the University of Michigan', 'Won the WWF Tag Team Championship', 'Scott Steiner later reinvented himself as Big Poppa Pump with one of wrestling\'s most remarkable physical transformations', 'One of the most decorated tag teams across multiple promotions (WCW, WWF, NWA)'],
  },
  719: {
    realName: 'Charles Wright (The Godfather) & D\'Lo Brown',
    spouse: null, children: [],
    facts: ['Unlikely tag team pairing from the Attitude Era', 'The Godfather\'s pimp character was unique to the anything-goes Attitude Era'],
  },
  720: {
    realName: 'Adam Copeland (Edge) & Jason Reso (Christian)',
    spouse: null, children: [],
    facts: ['Real-life best friends since childhood in Toronto', 'Seven-time WWF Tag Team Champions — one of the most decorated tag teams in history', 'Their TLC matches with the Dudley Boyz and Hardy Boyz revolutionized tag team wrestling', 'Both went on to become world champions as singles wrestlers'],
  },
  744: {
    realName: 'Kurt Angle & Chris Benoit',
    spouse: null, children: [],
    facts: ['Two of the most technically gifted wrestlers in history as a tag team', 'Their real-life mutual respect for each other\'s amateur wrestling backgrounds was evident in their chemistry'],
  },
  745: {
    realName: 'Rey Mysterio & Rob Van Dam',
    spouse: null, children: [],
    facts: ['Two of the most popular babyfaces of the Ruthless Aggression Era paired as a tag team', 'Combined high-flying styles made for spectacular matches'],
  },
  750: {
    realName: 'Paul London & Brian Kendrick',
    spouse: null, children: [],
    facts: ['Longest-reigning WWE Tag Team Champions in SmackDown history at the time', 'Both were high-flyers from the cruiserweight division', 'Ashley Massaro was briefly their valet'],
  },
  756: {
    realName: 'Claudio Castagnoli (Cesaro) & TJ Wilson (Tyson Kidd)',
    spouse: null, children: [],
    facts: ['One of the most technically sound tag teams of their era', 'Kidd\'s career was ended by a severe spinal injury in 2015 — came within millimeters of being paralyzed', 'Kidd transitioned to a successful career as a WWE producer'],
  },
  759: {
    realName: 'Michael Mizanin (The Miz) & John Morrison',
    spouse: null, children: [],
    facts: ['Won multiple tag team championships across two separate runs together', 'Their "Dirt Sheet" backstage talk show was one of the most entertaining comedy segments in WWE'],
  },
  771: {
    realName: 'Dave Bautista (Batista) & Rey Mysterio',
    spouse: null, children: [],
    facts: ['Unlikely size-mismatched tag team that worked brilliantly', 'Won the WWE Tag Team Championship on SmackDown'],
  },
  777: {
    realName: 'Stephen Farrelly (Sheamus) & Claudio Castagnoli (Cesaro)',
    spouse: null, children: [],
    facts: ['Same team as The Bar (ID 658) but in an earlier incarnation', 'Their chemistry as reluctant partners became one of Raw\'s best ongoing storylines'],
  },
  778: {
    realName: 'Kenneth Crawford (Montez Ford) & Joseph Williams (Angelo Dawkins)',
    spouse: null, children: [],
    facts: ['WE WANT THE SMOKE!', 'Montez Ford is married to Bianca Belair — wrestling\'s power couple', 'Ford\'s frog splash is considered one of the most athletic in WWE history', 'Multiple Raw and SmackDown Tag Team Champions'],
  },
  781: {
    realName: 'Randy Orton & Matt Riddle',
    spouse: null, children: [],
    facts: ['The funniest odd-couple tag team in recent WWE history', 'Riddle\'s stoner enthusiasm contrasting with Orton\'s icy irritation was comedy gold', 'Won the Raw Tag Team Championship twice', 'The team ended when Orton suffered a severe spinal injury'],
  },
  783: {
    realName: 'Nikola Bogojevic (Otis) & Chad Gable',
    spouse: null, children: [],
    facts: ['Alpha Academy — Gable\'s strict teacher / Otis\'s enthusiastic student', 'Their crowd participation chant "SHOOSH" became organically popular'],
  },
  785: {
    realName: 'Chad Gable, Otis, Maxxine Dupri',
    spouse: null, children: [],
    facts: ['Alpha Academy as a full faction including Maxxine Dupri', 'Maxxine\'s transition from manager to wrestler was a genuine character growth arc'],
  },
  786: {
    realName: 'Kross (Kevin Kross) & Scarlett Bordeaux',
    spouse: null, children: [],
    facts: ['Real-life married couple', 'Scarlett\'s hourglass entrance was one of the most visually striking in NXT history', 'Kross held the NXT Championship but was immediately depushed on the main roster initially'],
  },
  787: {
    realName: 'Swerve Strickland, B-Fab, Top Dolla, Ashante Adonis',
    spouse: null, children: [],
    facts: ['Rap-themed faction from NXT', 'The entire group was called up to SmackDown then immediately released in one of WWE\'s most baffling decisions', 'Swerve went on to become AEW World Champion'],
  },
  790: {
    realName: 'Gran Metalik, Lince Dorado, Kalisto',
    spouse: null, children: [],
    facts: ['Lucha libre-themed trio', 'All three competed in the Cruiserweight Classic', 'Kalisto previously held the United States Championship'],
  },
  798: {
    realName: 'Paul Roma & Ray Fernandez (Hercules)',
    spouse: null, children: [],
    facts: ['Managed by Slick', 'Their combined power made them a formidable heel team in the early 1990s', 'Roma later joined the Four Horsemen in WCW — one of the most controversial Horsemen selections ever'],
  },
  801: {
    realName: 'Brian Blair & Jim Brunzell',
    spouse: null, children: [],
    facts: ['Known for their "masked confusion" tactic — putting on identical masks to confuse referees', 'Never won the WWF Tag Team Championship despite being consistently popular', 'One of the most beloved babyface tag teams of the mid-1980s'],
  },
  802: {
    realName: 'Jacques & Raymond Rougeau',
    spouse: null, children: [],
    facts: ['Real brothers from the famous Rougeau wrestling family of Montreal', 'Turned heel by singing "All American Boys" — French-Canadians singing about loving America was brilliantly annoying', 'Jacques later became The Mountie — a heel RCMP character'],
  },
  803: {
    realName: 'André the Giant & King Haku (Tonga Fifita)',
    spouse: null, children: [],
    facts: ['Managed by Bobby "The Brain" Heenan', 'Won the WWF Tag Team Championship at a Saturday Night\'s Main Event', 'Short-lived team formed near the end of André\'s career'],
  },
  804: {
    realName: 'Nikolai Volkoff & Boris Zhukov',
    spouse: null, children: [],
    facts: ['Soviet heel gimmick during the Cold War era', 'Volkoff would sing the Soviet national anthem before matches to generate massive heat', 'Enhancement-level tag team by the late 1980s'],
  },
  805: {
    realName: 'Wayne Ferris (Honky Tonk Man) & Johnny Wisniski Jr. (Greg Valentine)',
    spouse: null, children: [],
    facts: ['Managed by Jimmy Hart', 'Elvis impersonator and veteran brawler made an odd but entertaining heel duo', 'Their combined entrance with Jimmy Hart\'s megaphone was peak WWF silliness'],
  },
  807: {
    realName: 'Owen Hart & Koko B. Ware',
    spouse: null, children: [],
    facts: ['Colorful high-energy babyface team from the early 1990s', 'Owen Hart went on to become one of the most talented performers in WWF history', 'Koko B. Ware was known for his pet macaw Frankie'],
  },
  810: {
    realName: 'Perry Saturn & John Kronus',
    spouse: null, children: [],
    facts: ['Dominant ECW Tag Team Champions known for their Total Elimination finisher', 'Saturn later had a successful singles career in WCW and WWE', 'Kronus died in 2007 at age 38'],
  },
  813: {
    realName: 'Chris Benoit, Eddie Guerrero, Dean Malenko, Perry Saturn',
    spouse: null, children: [],
    facts: ['Four WCW midcarders who jumped ship to WWF together in January 2000', 'One of the most significant talent raids in wrestling history', 'All four went on to hold championships in WWE', 'Their defection was a major blow to WCW during the Monday Night Wars'],
  },
  822: {
    realName: 'Shane Helms (Hurricane) & Matt Anoa\'i (Rosey)',
    spouse: null, children: [],
    facts: ['S.H.I.T. — Super Hero In Training (Rosey\'s designation)', 'Won the World Tag Team Championship', 'Rosey was a member of the Anoa\'i wrestling family (brother of Roman Reigns\' father)', 'Rosey passed away in 2017 at age 47'],
  },

  // === Added March 2026: Missing current roster wrestlers ===
  1629: { spouses: [{ name: 'Jonathan Gresham', status: 'divorced' }], children: [], facts: ['Legitimate competitive powerlifter', 'Three-time TNA Knockouts Champion', 'Made history appearing in NXT while still TNA champion'] },
  1630: { spouses: [], children: [], facts: ['Very nice, very evil catchphrase', 'Known for cursing opponents', 'Collects human teeth as part of his character', 'Former AEW wrestler'] },
  1631: { spouses: [], children: [], facts: ['Childhood friends with Lucien Price', 'Former offensive lineman at University of Idaho'] },
  1632: { spouses: [], children: [], facts: ['Member of DarkState faction'] },
  1633: { spouses: [], children: [], facts: ['NXT Speed Champion'] },
  1634: { spouses: [], children: [], facts: ['Former Division I college football player', 'Part of DarkState faction', 'NXT Tag Team Champion with Osiris Griffin'] },
  1635: { spouses: [], children: [], facts: ['Part of DarkState faction', 'NXT Tag Team Champion with Saquon Shugars', 'Former defensive lineman at Syracuse University', 'Briefly on New Orleans Saints preseason roster', 'Ring name inspired by Egyptian heritage'] },
  1636: { spouses: [], children: [], facts: ['Won LFG Season 2 to earn NXT contract', 'Mentored by The Undertaker on LFG', 'Was runner-up in LFG Season 1', 'Real name is Thunder Justice Keck'] },
  1637: { spouses: [], children: [], facts: ['Evolve Women\'s Champion', 'Three-time NAIA wrestling champion at Life University', '10-time high school All-American wrestler', 'Member of No Quarter Catch Crew'] },
  1638: { spouses: [], children: [], facts: [] },
  1639: { spouses: [], children: [], facts: ['WWE\'s first Saudi super heavyweight', 'Former champion arm wrestler and powerlifter', 'Debuted at Royal Rumble 2026 kickoff in Riyadh'] },
  1640: { spouses: [], children: [], facts: ['Previously appeared as Dani Sekelsky on LFG', 'Female winner of LFG Season 2', 'Background in cheerleading', 'Nicknamed The Shooting Star'] },
  1641: { spouses: [], children: [], facts: ['Nicknamed La Diablita', 'Former University of Arkansas gymnast', 'Hand-picked by Shawn Michaels for WWE LFG', 'Had only one week of wrestling training before LFG'] },
  1642: { spouses: [], children: [], facts: ['Not related to the main roster star Bayley', 'Nicknamed The Bone Collector', 'Background in acrobatic gymnastics', 'Endorsed by The Undertaker on LFG', 'Part of WWE NIL program'] },
  1643: { spouses: [], children: [], facts: ['Represented Guam in the 2004 Olympics (freestyle wrestling)', 'Former NJPW NEVER Openweight Champion', 'Three-time IWGP Tag Team Champion in NJPW', 'Member of The MFT alongside Jacob Fatu'] },
  1644: { spouses: [], children: [], facts: ['Former defensive tackle at Temple University', 'Signed to NXT January 2026'] },
  1645: { spouses: [], children: [], facts: ['Former college baseball player', 'Member of Chase University'] },
  1647: { spouses: [], children: [], facts: [] },
  1648: { spouses: [], children: [], facts: ['Won inaugural LFG Season 1', 'Attacked Oba Femi immediately after winning LFG', 'Held NXT Speed Championship for 105 days'] },
  1649: { spouses: [], children: [], facts: ['Member of Fatal Influence faction'] },
  1650: { spouses: [], children: [], facts: ['Formerly Powerhouse Hobbs in AEW', 'Former AEW TNT Champion', 'Former AEW World Trios Champion', 'Debuted at Royal Rumble 2026 entering at #14'] },
  1651: { spouses: [], children: [], facts: ['Former AEW Women\'s World Champion as Mariah May', 'From London, grew up in Islington', 'Debuted in NXT June 2025 as Blake Monroe', 'Street fight vs Jaida Parker at NXT Vengeance Day 2026'] },
  1653: { spouses: [], children: [], facts: ['Former UFC flyweight fighter (MMA record: 24-10-2)', 'On excursion from Pro Wrestling NOAH', 'Former GHC National Champion', 'Former GHC Tag Team Champion', 'Transitioned from MMA to pro wrestling in January 2024'] },

  1654: { spouses: [], children: [], facts: ['Five-time NWA World Heavyweight Champion', 'NWA Hall of Fame inductee', 'Joined WWE as a producer in 2018', 'Became on-screen GM of Raw in 2023', 'Signature move: Piledriver'] },
  1658: { spouses: [], children: [], facts: ['Belgian wrestler from Mons', 'Experienced European independent circuit veteran', 'Signed to NXT'] },
  1659: { spouses: [], children: [], facts: ['From Middletown, Maryland', 'Competes on WWE EVOLVE brand'] },
  1661: { spouses: [], children: [], facts: ['From Sumner, Washington', 'Competes on WWE EVOLVE brand'] },
  1662: { spouses: [], children: [], facts: ['British wrestler from London', 'Competes in NXT'] },
  1663: { spouses: [], children: [], facts: ['One of the first Egyptian wrestlers signed to WWE', 'From Alexandria, Egypt', 'Competes in NXT'] },

  1664: { spouses: [], children: [], facts: ['Competes on WWE EVOLVE brand'] },
  1665: { spouses: [], children: [], facts: ['From Dallas, Texas', 'Competes on WWE EVOLVE brand'] },
  1666: { spouses: [], children: [], facts: ['From Ohio', 'Born in 2000', 'Competes on WWE EVOLVE brand'] },

  1116: { spouses: [], children: [], facts: ['Former WWF head writer alongside Vince Russo', 'Helped shape the Attitude Era as a writer', 'Portrayed Oklahoma in WCW, a controversial parody of Jim Ross', 'Won the WCW Cruiserweight Championship as Oklahoma'] },
  1667: { spouses: [], children: [], facts: ['Lucha libre faction on SmackDown in 2005-2006', 'Members rode lawnmowers to the ring as a satirical commentary', 'All three members were former WCW and ECW cruiserweight stars', 'Brief but entertaining SmackDown run showcasing high-flying action'] },

};

export default PERSONAL;
