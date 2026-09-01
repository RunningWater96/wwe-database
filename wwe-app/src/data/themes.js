// Wrestler entrance theme music, keyed by wrestler ID
// Each entry is an array of themes (most recent first)

const THEMES = {
  3: [ // Bob Backlund
    { song: 'Stars and Stripes Forever', artist: 'John Philip Sousa', years: '1978-1994', iconic: false },
  ],
  4: [ // Hulk Hogan
    { song: 'Real American', artist: 'Rick Derringer', years: '1986-1993, 2002-2024', iconic: true },
    { song: 'Voodoo Child (Slight Return)', artist: 'Jimi Hendrix', years: '2002 (nWo return)', iconic: false },
    { song: 'nWo Theme', artist: 'Jim Johnston', years: '2002', iconic: false },
    { song: 'Eye of the Tiger', artist: 'Survivor', years: '1984-1986', iconic: false },
  ],
  5: [ // Randy Savage
    { song: 'Pomp and Circumstance', artist: 'Edward Elgar', years: '1985-1994', iconic: true },
  ],
  6: [ // André the Giant
    { song: 'The Eighth Wonder', artist: 'Jim Johnston', years: '1984-1993', iconic: true },
  ],
  7: [ // Roddy Piper
    { song: 'Scotland the Brave', artist: 'Traditional', years: '1984-2015', iconic: true },
  ],
  8: [ // Mr. Perfect
    { song: 'Perfection', artist: 'Jim Johnston', years: '1989-2004', iconic: true },
  ],
  9: [ // Ted DiBiase
    { song: 'It\'s Time for the Million Dollar Man', artist: 'Jim Johnston', years: '1987-1996', iconic: true },
  ],
  10: [ // Jake Roberts
    { song: 'Snake Bit', artist: 'Jim Johnston', years: '1986-1997', iconic: true },
  ],
  11: [ // Ricky Steamboat
    { song: 'Sioux City Fight Song', artist: 'Unknown', years: '1985-2009', iconic: false },
  ],
  12: [ // Ultimate Warrior
    { song: 'Unstable', artist: 'Jim Johnston', years: '1987-1998', iconic: true },
  ],
  14: [ // Rick Rude
    { song: 'Striptease', artist: 'Jim Johnston', years: '1987-1990', iconic: true },
  ],
  17: [ // Brutus Beefcake
    { song: 'Strut', artist: 'Jim Johnston', years: '1984-1993', iconic: false },
  ],
  18: [ // Earthquake
    { song: 'Earthquake Rumble', artist: 'Jim Johnston', years: '1989-1994', iconic: false },
  ],
  20: [ // Sgt. Slaughter
    { song: 'Sgt. Slaughter March', artist: 'Jim Johnston', years: '1984-1997', iconic: false },
  ],
  21: [ // Iron Sheik
    { song: 'Iran Number One', artist: 'Jim Johnston', years: '1983-2003', iconic: false },
  ],
  22: [ // Yokozuna
    { song: 'Japanese Rising Sun', artist: 'Jim Johnston', years: '1992-1998', iconic: false },
  ],
  23: [ // Razor Ramon
    { song: 'Bad Guy', artist: 'Jim Johnston', years: '1992-1996', iconic: true },
  ],
  24: [ // Diesel
    { song: 'Diesel Blues', artist: 'Jim Johnston', years: '1994-1996', iconic: true },
  ],
  25: [ // Owen Hart
    { song: 'Enough Is Enough', artist: 'Jim Johnston', years: '1994-1999', iconic: false },
    { song: 'High Energy', artist: 'Jim Johnston', years: '1991-1994', iconic: false },
  ],
  26: [ // British Bulldog
    { song: 'Rule Britannia', artist: 'Traditional (arr. Jim Johnston)', years: '1990-2002', iconic: false },
    { song: 'God Save the Queen', artist: 'Traditional', years: '1986-1990', iconic: false },
  ],
  27: [ // Goldust
    { song: 'Gold-Lust', artist: 'Jim Johnston', years: '1995-2019', iconic: true },
  ],
  30: [ // Triple H
    { song: 'The Game', artist: 'Motörhead', years: '2001-2024', iconic: true },
    { song: 'My Time', artist: 'DX Band', years: '1999-2001', iconic: false },
    { song: 'King of Kings', artist: 'Motörhead', years: '2006-2024 (WrestleMania entrance)', iconic: true },
    { song: 'Bow Down to the King', artist: 'Jim Johnston', years: '1997-1999', iconic: false },
  ],
  31: [ // Stone Cold Steve Austin
    { song: 'Glass Shatters', artist: 'Disturbed', years: '2001-2003', iconic: false },
    { song: 'I Won\'t Do What You Tell Me', artist: 'Jim Johnston', years: '1998-2001, 2003-2024', iconic: true },
    { song: 'Hell Frozen Over', artist: 'Jim Johnston', years: '1996-1998', iconic: false },
  ],
  32: [ // The Rock
    { song: 'Electrifying', artist: 'Jim Johnston', years: '2003-2024', iconic: true },
    { song: 'Is Cookin\'', artist: 'Jim Johnston', years: '2000-2003', iconic: false },
    { song: 'Know Your Role', artist: 'Jim Johnston', years: '1999-2000', iconic: false },
    { song: 'Do You Smell It?', artist: 'Jim Johnston', years: '1997-1999', iconic: false },
  ],
  33: [ // Undertaker
    { song: 'Rest in Peace', artist: 'Jim Johnston', years: '1998-2020', iconic: true },
    { song: 'Rollin\' (Air Raid Vehicle)', artist: 'Limp Bizkit', years: '2000-2003', iconic: false },
    { song: 'You\'re Gonna Pay', artist: 'Jim Johnston', years: '2002-2003 (Big Evil)', iconic: false },
    { song: 'Graveyard Symphony', artist: 'Jim Johnston', years: '1994-1998', iconic: false },
    { song: 'Funeral March', artist: 'Jim Johnston', years: '1990-1994', iconic: false },
  ],
  34: [ // Shawn Michaels
    { song: 'Sexy Boy', artist: 'Sherri Martel & Jim Johnston', years: '1993-2010, 2018', iconic: true },
  ],
  35: [ // Chris Jericho
    { song: 'Break the Walls Down', artist: 'Jim Johnston (later Adam Morenoff)', years: '1999-2018', iconic: true },
    { song: 'Judas', artist: 'Fozzy', years: '2018-present (AEW)', iconic: true },
  ],
  36: [ // Kurt Angle
    { song: 'Medal', artist: 'Jim Johnston', years: '2000-2006, 2017-2019', iconic: true },
    { song: 'You Suck (crowd chant)', artist: 'Fans', years: '2002-2019', iconic: true },
  ],
  39: [ // Rikishi
    { song: 'You Look Fly 2Day', artist: 'Jim Johnston', years: '2000-2004', iconic: true },
    { song: 'Turn It Up (Too Cool)', artist: 'Jim Johnston', years: '1999-2000', iconic: false },
  ],
  40: [ // Scotty 2 Hotty
    { song: 'Turn It Up (Too Cool)', artist: 'Jim Johnston', years: '1999-2007', iconic: true },
  ],
  42: [ // William Regal
    { song: 'Regality', artist: 'Jim Johnston', years: '1998-2013', iconic: true },
  ],
  43: [ // Mankind / Mick Foley
    { song: 'Wreck', artist: 'Jim Johnston', years: '1996-2000 (Mankind)', iconic: true },
    { song: 'Dude Love Theme', artist: 'Jim Johnston', years: '1997-1998 (Dude Love)', iconic: false },
    { song: 'Cactus Jack Theme', artist: 'Jim Johnston', years: '1997-2000 (Cactus Jack)', iconic: false },
  ],
  44: [ // Kane
    { song: 'Veil of Fire', artist: 'Jim Johnston', years: '2002-2021', iconic: true },
    { song: 'Slow Chemical', artist: 'Finger Eleven', years: '2002-2008', iconic: true },
    { song: 'Out of the Fire', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  45: [ // Bret Hart
    { song: 'Hart Attack', artist: 'Jim Johnston', years: '1991-2010', iconic: true },
  ],
  46: [ // Chris Benoit
    { song: 'Whatever', artist: 'Our Lady Peace', years: '2001-2007', iconic: true },
    { song: 'Shooter', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  47: [ // Edge
    { song: 'Metalingus', artist: 'Alter Bridge', years: '2004-2011, 2020-2023', iconic: true },
    { song: 'Never Gonna Stop', artist: 'Rob Zombie', years: '2001-2004', iconic: false },
    { song: 'You Think You Know Me', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  48: [ // Christian
    { song: 'Just Close Your Eyes', artist: 'Waterproof Blonde (later Story of the Year)', years: '2005-2014', iconic: true },
    { song: 'At Last', artist: 'Jim Johnston', years: '2001-2005', iconic: false },
  ],
  49: [ // Jeff Hardy
    { song: 'No More Words', artist: 'Endeverafter', years: '2008-2009, 2022-present', iconic: true },
    { song: 'Loaded', artist: 'Jim Johnston', years: '2002-2003', iconic: false },
    { song: 'Hardy Boyz Theme', artist: 'Jim Johnston', years: '1999-2002, 2017', iconic: true },
  ],
  50: [ // Matt Hardy
    { song: 'Live for the Moment', artist: 'Monster Magnet', years: '2003-2010', iconic: true },
    { song: 'Loaded', artist: 'Jim Johnston', years: '2002-2003 (V1)', iconic: false },
    { song: 'Hardy Boyz Theme', artist: 'Jim Johnston', years: '1999-2002, 2017', iconic: true },
  ],
  51: [ // Dudley Boyz
    { song: 'Bombshell', artist: 'Powerman 5000', years: '2002-2005, 2015-2016', iconic: true },
    { song: 'We\'re Comin\' Down', artist: 'Jim Johnston', years: '1999-2002', iconic: true },
  ],
  52: [ // D'Lo Brown
    { song: 'You Better Recognize', artist: 'Jim Johnston', years: '1998-2003', iconic: false },
  ],
  53: [ // Mark Henry
    { song: 'Some Bodies Gonna Get It', artist: 'Three 6 Mafia', years: '2006-2018', iconic: true },
    { song: 'Sexual Chocolate', artist: 'Jim Johnston', years: '1998-2006', iconic: false },
  ],
  54: [ // Val Venis
    { song: 'Hello Ladies', artist: 'Jim Johnston', years: '1998-2009', iconic: true },
  ],
  55: [ // Ken Shamrock
    { song: 'Dangerous Man', artist: 'Jim Johnston', years: '1997-1999', iconic: false },
  ],
  56: [ // Big Show
    { song: 'Crank It Up', artist: 'Brand New Sin', years: '2006-2021', iconic: false },
    { song: 'Well It\'s the Big Show', artist: 'Jim Johnston', years: '1999-2006', iconic: true },
  ],
  57: [ // X-Pac
    { song: 'Make Some Noise', artist: 'Jim Johnston', years: '1998-2002', iconic: true },
    { song: 'X Factor', artist: 'Jim Johnston', years: '2000-2002 (X-Factor)', iconic: false },
  ],
  58: [ // Road Dogg
    { song: 'Oh You Didn\'t Know?', artist: 'Jim Johnston', years: '1998-2014', iconic: true },
  ],
  59: [ // Billy Gunn
    { song: 'Ass Man', artist: 'Jim Johnston', years: '1999-2004', iconic: true },
  ],
  60: [ // Chyna
    { song: 'Don\'t Treat Me Like a Woman', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
    { song: 'My Time (D-Generation X)', artist: 'Jim Johnston', years: '1997-1999', iconic: false },
  ],
  61: [ // Lita
    { song: 'LoveFuryPassionEnergy', artist: 'Boy Hits Car', years: '2000-2006, 2022-2023', iconic: true },
  ],
  62: [ // Trish Stratus
    { song: 'Time to Rock & Roll', artist: 'Lil\' Kim', years: '2000-2006, 2023', iconic: true },
  ],
  63: [ // The Godfather
    { song: 'Pimpin\' Ain\'t Easy', artist: 'Jim Johnston', years: '1998-2002', iconic: true },
  ],
  66: [ // Test
    { song: 'This Is a Test', artist: 'Jim Johnston', years: '2001-2004', iconic: true },
    { song: 'Test Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  68: [ // Tazz
    { song: 'If You Dare (13)', artist: 'Jim Johnston', years: '2000-2005', iconic: true },
  ],
  69: [ // Gangrel
    { song: 'Blood Bath', artist: 'Jim Johnston', years: '1998-2001', iconic: true },
  ],
  72: [ // Eddie Guerrero
    { song: 'Lie, Cheat & Steal (Latino Heat)', artist: 'Jim Johnston', years: '2002-2005', iconic: true },
    { song: 'We Lie, We Cheat, We Steal', artist: 'Jim Johnston', years: '2003-2005 (with Chavo)', iconic: false },
    { song: 'Crackin\'', artist: 'Jim Johnston', years: '2000-2002', iconic: false },
  ],
  73: [ // Rob Van Dam
    { song: 'One of a Kind', artist: 'Breaking Point', years: '2001-2007, 2013-2014', iconic: true },
  ],
  75: [ // John Cena
    { song: 'The Time Is Now', artist: 'John Cena & Tha Trademarc', years: '2005-present', iconic: true },
    { song: 'Basic Thuganomics', artist: 'John Cena & Tha Trademarc', years: '2003-2005', iconic: true },
    { song: 'My Time Is Now (remix)', artist: 'John Cena', years: '2012 (WrestleMania)', iconic: false },
  ],
  76: [ // Batista
    { song: 'I Walk Alone', artist: 'Saliva', years: '2005-2014, 2019', iconic: true },
    { song: 'Monster', artist: 'Jim Johnston', years: '2003-2005 (Evolution)', iconic: false },
  ],
  77: [ // Randy Orton
    { song: 'Voices', artist: 'Rev Theory', years: '2008-present', iconic: true },
    { song: 'Burn in My Light', artist: 'Mercy Drive', years: '2004-2008', iconic: true },
    { song: 'Line in the Sand', artist: 'Motörhead', years: '2003-2004 (Evolution)', iconic: false },
  ],
  78: [ // Rey Mysterio
    { song: 'Booyaka 619', artist: 'P.O.D.', years: '2005-present', iconic: true },
    { song: '619', artist: 'Jim Johnston', years: '2002-2005', iconic: false },
  ],
  79: [ // Brock Lesnar
    { song: 'Next Big Thing', artist: 'Jim Johnston', years: '2002-2004, 2012-present', iconic: true },
  ],
  80: [ // JBL
    { song: 'Longhorn', artist: 'Jim Johnston', years: '2004-2009', iconic: true },
    { song: 'APA Theme', artist: 'Jim Johnston', years: '1999-2004', iconic: false },
  ],
  81: [ // Booker T
    { song: 'Can You Dig It, Sucka?', artist: 'Jim Johnston', years: '2001-2007, 2011-2012', iconic: true },
    { song: 'King Booker Theme', artist: 'Jim Johnston', years: '2006-2007', iconic: false },
  ],
  83: [ // Shelton Benjamin
    { song: 'Ain\'t No Stoppin\' Me', artist: 'Jim Johnston', years: '2004-2010', iconic: false },
  ],
  85: [ // CM Punk
    { song: 'Cult of Personality', artist: 'Living Colour', years: '2011-2014, 2023-present', iconic: true },
    { song: 'This Fire Burns', artist: 'Killswitch Engage', years: '2006-2011', iconic: true },
  ],
  86: [ // Sheamus
    { song: 'Written in My Face', artist: 'Jim Johnston (feat. Sean Jenness)', years: '2009-present', iconic: true },
  ],
  87: [ // The Miz
    { song: 'I Came to Play', artist: 'Downstait', years: '2009-present', iconic: true },
  ],
  88: [ // Jack Swagger
    { song: 'Get on Your Knees', artist: 'Age Against the Machine', years: '2013-2017', iconic: false },
    { song: 'Patriot', artist: 'Jim Johnston', years: '2008-2013', iconic: false },
  ],
  89: [ // Dolph Ziggler
    { song: 'Here to Show the World', artist: 'Downstait', years: '2011-2023', iconic: true },
    { song: 'I Am Perfection', artist: 'Downstait', years: '2009-2011', iconic: false },
  ],
  90: [ // Kofi Kingston
    { song: 'SOS', artist: 'Collie Buddz', years: '2008-2014', iconic: true },
    { song: 'New Day Rocks', artist: 'Jim Johnston', years: '2014-present (New Day)', iconic: true },
  ],
  91: [ // Daniel Bryan
    { song: 'Flight of the Valkyries', artist: 'Richard Wagner (arr. Jim Johnston)', years: '2012-2021', iconic: true },
    { song: 'Ride of the Valkyries (with YES! chant)', artist: 'Wagner/Jim Johnston', years: '2013-2021', iconic: true },
  ],
  92: [ // Seth Rollins
    { song: 'Visionary', artist: 'def rebel', years: '2021-present', iconic: true },
    { song: 'The Second Coming', artist: 'CFO$ (Burn It Down)', years: '2016-2021', iconic: true },
    { song: 'The Shield Theme (Special Op)', artist: 'Jim Johnston', years: '2012-2014', iconic: true },
  ],
  93: [ // Roman Reigns
    { song: 'Head of the Table', artist: 'def rebel', years: '2021-present', iconic: true },
    { song: 'The Truth Reigns', artist: 'Jim Johnston/CFO$', years: '2014-2021', iconic: true },
    { song: 'The Shield Theme (Special Op)', artist: 'Jim Johnston', years: '2012-2014', iconic: true },
  ],
  94: [ // Dean Ambrose
    { song: 'Retaliation', artist: 'CFO$', years: '2014-2019', iconic: true },
    { song: 'The Shield Theme (Special Op)', artist: 'Jim Johnston', years: '2012-2014', iconic: true },
  ],
  95: [ // Bray Wyatt
    { song: 'Let Me In', artist: 'def rebel (Code Orange)', years: '2019-2023 (The Fiend)', iconic: true },
    { song: 'Live in Fear', artist: 'Mark Crozer', years: '2013-2019 (Wyatt Family)', iconic: true },
  ],
  96: [ // Kevin Owens
    { song: 'Fight', artist: 'CFO$', years: '2015-present', iconic: true },
  ],
  97: [ // Sami Zayn
    { song: 'Worlds Apart', artist: 'CFO$', years: '2014-present', iconic: true },
  ],
  98: [ // AJ Styles
    { song: 'Phenomenal', artist: 'CFO$', years: '2016-present', iconic: true },
  ],
  99: [ // Finn Bálor
    { song: 'Catch Your Breath', artist: 'CFO$', years: '2014-present', iconic: true },
  ],
  100: [ // Drew McIntyre
    { song: 'Broken Dreams', artist: 'Shaman\'s Harvest', years: '2009-2014', iconic: true },
    { song: 'Gallantry (Defining Moment)', artist: 'CFO$', years: '2017-2020', iconic: false },
    { song: 'Claymore Country', artist: 'def rebel', years: '2020-present', iconic: true },
  ],
  101: [ // Becky Lynch
    { song: 'Celtic Invasion', artist: 'CFO$', years: '2015-present', iconic: true },
  ],
  102: [ // Charlotte Flair
    { song: 'Recognition', artist: 'CFO$', years: '2015-present', iconic: true },
  ],
  103: [ // Sasha Banks
    { song: 'Sky\'s the Limit', artist: 'CFO$ (feat. Snoop Dogg)', years: '2015-2022', iconic: true },
  ],
  104: [ // Cesaro
    { song: 'Swiss Made', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  106: [ // Rusev
    { song: 'Рев на лъва (Roar of the Lion)', artist: 'CFO$', years: '2014-2020', iconic: true },
  ],
  107: [ // Wade Barrett
    { song: 'Rebel Son', artist: 'CFO$', years: '2014-2016', iconic: false },
    { song: 'End of Days', artist: 'Jim Johnston', years: '2010-2014', iconic: false },
  ],
  108: [ // Alberto Del Rio
    { song: 'Realeza', artist: 'Jim Johnston', years: '2010-2016', iconic: true },
  ],
  109: [ // Goldberg
    { song: 'Invasion', artist: 'Jim Johnston', years: '2003-2004, 2016-2022', iconic: true },
    { song: 'Who\'s Next?', artist: 'Jim Johnston', years: '1998-2001 (WCW)', iconic: true },
  ],
  110: [ // Ric Flair
    { song: 'Also Sprach Zarathustra', artist: 'Richard Strauss (arr. Eumir Deodato)', years: '1991-2024', iconic: true },
  ],
  117: [ // Tatanka
    { song: 'Native American Spirit', artist: 'Jim Johnston', years: '1992-1997, 2005-2007', iconic: false },
  ],
  118: [ // Faarooq
    { song: 'Nation of Domination Theme', artist: 'Jim Johnston', years: '1997-1998', iconic: false },
    { song: 'APA Theme', artist: 'Jim Johnston', years: '1999-2004', iconic: false },
  ],
  120: [ // Raven
    { song: 'End of Everything', artist: 'Jim Johnston', years: '2000-2003', iconic: false },
  ],
  124: [ // Ivory
    { song: 'Right to Censor Theme', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  125: [ // Hurricane
    { song: 'Eye of the Hurricane', artist: 'Jim Johnston', years: '2001-2009', iconic: true },
  ],
  126: [ // Rhyno
    { song: 'Stomp', artist: 'Jim Johnston', years: '2001-2005, 2015-2019', iconic: false },
  ],
  127: [ // John Morrison
    { song: 'Ain\'t No Make Believe', artist: 'Stonefree Experience', years: '2007-2011, 2020-2021', iconic: true },
  ],
  128: [ // Cody Rhodes
    { song: 'Kingdom', artist: 'Downstait', years: '2022-present', iconic: true },
    { song: 'Smoke and Mirrors', artist: 'Jim Johnston', years: '2008-2016', iconic: true },
    { song: 'Written in the Stars', artist: 'Jim Johnston', years: '2011-2014 (with Goldust)', iconic: false },
  ],
  130: [ // Big E
    { song: 'I Need Five', artist: 'Jim Johnston', years: '2012-2014', iconic: false },
    { song: 'New Day Rocks', artist: 'Jim Johnston', years: '2014-present (New Day)', iconic: true },
  ],
  131: [ // Bobby Lashley
    { song: 'Titan', artist: 'def rebel', years: '2020-2023', iconic: true },
    { song: 'Dominator', artist: 'Saliva', years: '2006-2008', iconic: false },
  ],
  132: [ // Samoa Joe
    { song: 'Destroyer', artist: 'CFO$', years: '2015-2021', iconic: true },
  ],
  133: [ // Bianca Belair
    { song: 'Watch Me Shine', artist: 'def rebel', years: '2019-present', iconic: true },
  ],
  134: [ // Natalya
    { song: 'New Foundation', artist: 'Jim Johnston', years: '2008-present', iconic: false },
  ],
  135: [ // Bayley
    { song: 'Turn It Up', artist: 'CFO$', years: '2015-2020', iconic: true },
    { song: 'Ding Dong (Role Model)', artist: 'def rebel', years: '2020-present', iconic: true },
  ],
  136: [ // Bobby Roode
    { song: 'Glorious Domination', artist: 'CFO$', years: '2016-2022', iconic: true },
  ],
  137: [ // Aleister Black
    { song: 'Root of All Evil', artist: 'CFO$', years: '2016-2021', iconic: true },
  ],
  138: [ // Theory
    { song: 'Blow the Roof', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  139: [ // Gunther
    { song: 'Symphony No. 9 (New World)', artist: 'Antonín Dvořák (arr. def rebel)', years: '2022-present', iconic: true },
  ],
  140: [ // Rhea Ripley
    { song: 'Demon in Your Dreams', artist: 'def rebel (feat. Motionless in White)', years: '2023-present', iconic: true },
    { song: 'Brutality', artist: 'def rebel', years: '2019-2023', iconic: false },
  ],
  141: [ // Hacksaw Jim Duggan
    { song: 'Hacksaw', artist: 'Jim Johnston', years: '1987-2009', iconic: false },
  ],
  153: [ // Tito Santana
    { song: 'Arriba!', artist: 'Jim Johnston', years: '1983-1993', iconic: false },
  ],
  154: [ // Greg Valentine
    { song: 'The Hammer', artist: 'Jim Johnston', years: '1984-1992', iconic: false },
  ],
  155: [ // Jimmy Snuka
    { song: 'Superfly', artist: 'Jim Johnston', years: '1982-1996', iconic: false },
  ],
  156: [ // Marty Jannetty
    { song: 'The Rockers Theme', artist: 'Jim Johnston', years: '1988-1992', iconic: false },
  ],
  168: [ // Jerry Lawler
    { song: 'The Great Gates of Kiev', artist: 'Mussorgsky (arr. Jim Johnston)', years: '1993-2001', iconic: false },
  ],
  175: [ // Melina
    { song: 'Paparazzi', artist: 'Jim Johnston', years: '2005-2011', iconic: false },
  ],
  176: [ // Beth Phoenix
    { song: 'Glamazon', artist: 'Jim Johnston', years: '2006-2012', iconic: true },
  ],
  177: [ // Mickie James
    { song: 'Obsession', artist: 'Jim Johnston', years: '2005-2010', iconic: false },
    { song: 'Hardcore Country', artist: 'Mickie James', years: '2010-2012, 2021-2022', iconic: false },
  ],
  187: [ // Chavo Guerrero Jr.
    { song: 'Chavo Classic', artist: 'Jim Johnston', years: '2002-2011', iconic: false },
    { song: 'We Lie, We Cheat, We Steal', artist: 'Jim Johnston', years: '2003-2005 (with Eddie)', iconic: false },
  ],
  190: [ // Zack Ryder
    { song: 'Radio', artist: 'Downstait', years: '2011-2019', iconic: false },
    { song: 'Oh Radio', artist: 'Jim Johnston', years: '2008-2011', iconic: false },
  ],
  191: [ // Santino Marella
    { song: 'La Vittoria è Mia', artist: 'Jim Johnston', years: '2007-2014', iconic: false },
  ],
  192: [ // R-Truth
    { song: 'What\'s Up?', artist: 'Jim Johnston', years: '2000-present', iconic: true },
  ],
  201: [ // Damien Sandow
    { song: 'Hallelujah', artist: 'Jim Johnston', years: '2012-2016', iconic: false },
  ],
  202: [ // Fandango
    { song: 'ChaChaLaLa', artist: 'CFO$', years: '2013-2021', iconic: true },
  ],
  205: [ // Luke Harper / Brodie Lee
    { song: 'Swamp Gas', artist: 'Jim Johnston', years: '2014-2019', iconic: false },
  ],
  209: [ // AJ Lee
    { song: 'Let\'s Light It Up', artist: 'Kari Kimmel', years: '2012-2015', iconic: true },
  ],
  210: [ // Paige
    { song: 'Stars in the Night', artist: 'CFO$', years: '2014-2018', iconic: true },
  ],
  211: [ // Braun Strowman
    { song: 'I Am Stronger', artist: 'CFO$', years: '2016-2023', iconic: true },
  ],
  212: [ // Baron Corbin
    { song: 'I Bring the Darkness (End of Days)', artist: 'CFO$', years: '2016-present', iconic: false },
  ],
  213: [ // Elias
    { song: 'Walk with Elias', artist: 'CFO$/Elias Samson', years: '2017-2022', iconic: true },
  ],
  214: [ // Tommaso Ciampa
    { song: 'No One Will Survive', artist: 'CFO$', years: '2018-2022', iconic: true },
  ],
  215: [ // Johnny Gargano
    { song: 'Rebel Heart', artist: 'CFO$', years: '2016-present', iconic: true },
  ],
  216: [ // Karrion Kross
    { song: 'Scarlett\'s Theme / The Coming', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  217: [ // Damian Priest
    { song: 'I Will Survive', artist: 'def rebel', years: '2021-present', iconic: true },
  ],
  218: [ // Dominik Mysterio
    { song: 'Latino Heat (remix)', artist: 'def rebel', years: '2022-present (Judgment Day)', iconic: false },
  ],
  219: [ // Solo Sikoa
    { song: 'Sikoa', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  220: [ // LA Knight
    { song: 'Yeah', artist: 'def rebel', years: '2022-present', iconic: true },
  ],
  222: [ // Liv Morgan
    { song: 'Watch Me', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  223: [ // IYO SKY
    { song: 'Tokyo Shock', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  237: [ // Scott Steiner
    { song: 'Holla If You Hear Me', artist: 'Jim Johnston', years: '2002-2004', iconic: true },
    { song: 'Steiner Brothers Theme', artist: 'Jim Johnston', years: '1993-1994 (with Rick)', iconic: false },
  ],
  241: [ // Tommy Dreamer
    { song: 'Man in the Box', artist: 'Alice in Chains', years: '1997-2001 (ECW)', iconic: true },
  ],
  242: [ // Sandman
    { song: 'Enter Sandman', artist: 'Metallica', years: '1995-2007', iconic: true },
  ],
  245: [ // New Jack
    { song: 'Natural Born Killaz', artist: 'Dr. Dre & Ice Cube', years: '1995-2002', iconic: true },
  ],
  257: [ // Adam Cole
    { song: 'Something for You', artist: 'CFO$ (ADAM COLE BAYBAY!)', years: '2017-2021', iconic: true },
  ],
  262: [ // Asuka
    { song: 'The Future', artist: 'CFO$', years: '2015-present', iconic: true },
  ],
  264: [ // Dakota Kai
    { song: 'Team Kick', artist: 'CFO$', years: '2018-present', iconic: false },
  ],
  268: [ // Chad Gable
    { song: 'Master Gable', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  271: [ // Tyler Breeze
    { song: '#MMMGorgeous', artist: 'CFO$', years: '2014-2019', iconic: false },
  ],
  279: [ // Roderick Strong
    { song: 'Mesmerizing', artist: 'CFO$', years: '2016-2022', iconic: false },
  ],
  283: [ // Brian Pillman
    { song: 'Loose Cannon', artist: 'Jim Johnston', years: '1996-1997', iconic: false },
  ],
  292: [ // Jinder Mahal
    { song: 'Sher (Lion)', artist: 'Jim Johnston/CFO$', years: '2017-present', iconic: false },
  ],
  299: [ // Alundra Blayze
    { song: 'Let the Games Begin', artist: 'Jim Johnston', years: '1993-1995', iconic: false },
  ],
  304: [ // Victoria
    { song: 'All the Things She Said', artist: 't.A.T.u.', years: '2002-2004', iconic: true },
    { song: 'Don\'t Mess with Victoria', artist: 'Jim Johnston', years: '2004-2009', iconic: false },
  ],
  306: [ // Naomi
    { song: 'Amazing (Feel the Glow)', artist: 'CFO$', years: '2016-2022', iconic: true },
  ],
  307: [ // Nia Jax
    { song: 'Force of Greatness', artist: 'CFO$', years: '2016-2022, 2024-present', iconic: false },
  ],
  308: [ // Alexa Bliss
    { song: 'Spiteful', artist: 'CFO$', years: '2016-present', iconic: true },
  ],
  309: [ // Tiffany Stratton
    { song: 'Nothing but Tiffy', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  318: [ // MVP
    { song: 'I\'m Comin\'', artist: 'Jim Johnston', years: '2006-2021', iconic: true },
  ],
  320: [ // Ryback
    { song: 'Meat on the Table', artist: 'Jim Johnston', years: '2012-2016', iconic: false },
  ],
  321: [ // Sting
    { song: 'Out from the Shadows', artist: 'Jim Johnston', years: '2014-2016', iconic: false },
    { song: 'Seek & Destroy', artist: 'Metallica', years: '1999-2001 (WCW)', iconic: true },
    { song: 'Man Called Sting', artist: 'Jim Johnston', years: '1990-1996 (WCW)', iconic: true },
  ],
  330: [ // Carmelo Hayes
    { song: 'Don\'t Miss', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  331: [ // Bron Breakker
    { song: 'Turbo Dog', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  339: [ // Shinsuke Nakamura
    { song: 'The Rising Sun', artist: 'CFO$', years: '2016-present', iconic: true },
  ],
  345: [ // Ali / Mustafa Ali
    { song: 'Go Hard', artist: 'CFO$', years: '2017-2023', iconic: false },
  ],
  354: [ // Superstar Billy Graham
    { song: 'Also Sprach Zarathustra', artist: 'Richard Strauss', years: '1977-1988', iconic: false },
  ],
  358: [ // Dusty Rhodes
    { song: 'Common Man Boogie', artist: 'Jim Johnston', years: '1989-2015', iconic: true },
  ],
  383: [ // Michelle McCool
    { song: 'Not Enough for Me', artist: 'Jim Johnston', years: '2007-2011', iconic: false },
  ],
  386: [ // Boogeyman
    { song: 'I\'m the Boogeyman', artist: 'Jim Johnston', years: '2005-2009', iconic: false },
  ],
  388: [ // Umaga
    { song: 'Tribal Trouble', artist: 'Jim Johnston', years: '2006-2009', iconic: false },
  ],
  401: [ // Angel Garza
    { song: 'El Despreciado', artist: 'def rebel', years: '2019-2023', iconic: false },
  ],
  403: [ // Santos Escobar
    { song: 'Escobar', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  409: [ // Raquel Rodriguez
    { song: 'Raquel', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  411: [ // Roxanne Perez
    { song: 'No Mercy', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  413: [ // Ludwig Kaiser
    { song: 'Imperium', artist: 'def rebel', years: '2022-present (with Gunther)', iconic: false },
  ],
  415: [ // JD McDonagh
    { song: 'Judgment Day Theme', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  416: [ // Bronson Reed
    { song: 'Tsunami', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  426: [ // Grayson Waller
    { song: 'Feel the Noise', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  435: [ // King Kong Bundy
    { song: 'Five Count', artist: 'Jim Johnston', years: '1985-1995', iconic: false },
  ],
  453: [ // Brie Bella
    { song: 'You Can Look (But You Can\'t Touch)', artist: 'Kim Sozzi', years: '2008-2019', iconic: true },
    { song: 'Brie Mode', artist: 'Jim Johnston', years: '2014-2019 (solo)', iconic: false },
  ],
  454: [ // Nikki Bella
    { song: 'You Can Look (But You Can\'t Touch)', artist: 'Kim Sozzi', years: '2008-2019', iconic: true },
  ],
  478: [ // Curtis Axel
    { song: 'Reborn', artist: 'CFO$', years: '2013-2019', iconic: false },
  ],
  482: [ // Andrade El Ídolo
    { song: 'Sombra de un Ídolo', artist: 'CFO$', years: '2016-2021', iconic: false },
  ],
  483: [ // Keith Lee
    { song: 'Limitless', artist: 'CFO$', years: '2019-2022', iconic: true },
  ],
  491: [ // Jade Cargill
    { song: 'Arena', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  564: [ // Marc Mero
    { song: 'Marvelosity', artist: 'Jim Johnston', years: '1996-1999', iconic: false },
  ],
  841: [ // Paul Orndorff
    { song: 'Wonderful', artist: 'Jim Johnston', years: '1984-1988', iconic: false },
  ],
  851: [ // Jey Uso
    { song: 'Main Event Ish', artist: 'def rebel', years: '2023-present', iconic: true },
    { song: 'Done With That (Day One Remix)', artist: 'CFO$', years: '2016-2023 (Usos)', iconic: true },
  ],
  853: [ // Otis
    { song: 'Dozer', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  877: [ // Junkyard Dog
    { song: 'Grab Them Cakes', artist: 'Jim Johnston', years: '1984-1988', iconic: true },
  ],
  889: [ // Jeff Jarrett
    { song: 'My World', artist: 'Dale Oliver', years: '1997-1999', iconic: false },
    { song: 'Ain\'t I Great', artist: 'Jim Johnston', years: '1993-1997', iconic: false },
  ],
  932: [ // Giant Gonzalez
    { song: 'Giant Theme', artist: 'Jim Johnston', years: '1993', iconic: false },
  ],
  973: [ // Neville / PAC
    { song: 'Break Orbit', artist: 'CFO$', years: '2014-2018', iconic: false },
  ],
  1209: [ // D-Von Dudley
    { song: 'Bombshell (Dudley Boyz)', artist: 'Powerman 5000', years: '2002-2005, 2015-2016', iconic: true },
  ],
  1356: [ // Jimmy Uso
    { song: 'Done With That (Day One Remix)', artist: 'CFO$', years: '2016-present (Usos)', iconic: true },
  ],
  1357: [ // Xavier Woods
    { song: 'New Day Rocks', artist: 'Jim Johnston', years: '2014-present (New Day)', iconic: true },
  ],

  // === Additional Entries (Batch 2) ===

  13: [ // Honky Tonk Man
    { song: 'Cool, Cocky, Bad', artist: 'Jim Johnston', years: '1986-2001', iconic: true },
  ],
  19: [ // Big Boss Man
    { song: 'Hard Times', artist: 'Jim Johnston', years: '1988-1993, 1998-2004', iconic: true },
  ],
  29: [ // Lex Luger
    { song: 'Lex Express', artist: 'Jim Johnston', years: '1993-1995', iconic: false },
  ],
  37: [ // Steve Blackman
    { song: 'Drums in the Night', artist: 'Jim Johnston', years: '1999-2002', iconic: false },
  ],
  41: [ // Grandmaster Sexay
    { song: 'Turn It Up (Too Cool)', artist: 'Jim Johnston', years: '1999-2002', iconic: false },
  ],
  64: [ // Al Snow
    { song: 'What Does Everybody Want? (Head)', artist: 'Jim Johnston', years: '1998-2003', iconic: true },
  ],
  70: [ // Perry Saturn
    { song: 'Saturn', artist: 'Jim Johnston', years: '2000-2002', iconic: false },
  ],
  71: [ // Dean Malenko
    { song: 'Iceman', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  74: [ // Vince McMahon
    { song: 'No Chance in Hell', artist: 'Jim Johnston', years: '1998-present', iconic: true },
  ],
  82: [ // Carlito
    { song: 'Cool', artist: 'Jim Johnston', years: '2004-2010, 2021-present', iconic: true },
  ],
  111: [ // Lance Storm
    { song: 'Canadian Cool', artist: 'Jim Johnston', years: '2001-2005', iconic: false },
  ],
  112: [ // Tajiri
    { song: 'Buzzsaw', artist: 'Jim Johnston', years: '2001-2005', iconic: false },
  ],
  114: [ // Viscera
    { song: 'Love Machine', artist: 'Jim Johnston', years: '2005-2008', iconic: false },
    { song: 'Ministry Theme', artist: 'Jim Johnston', years: '1998-1999 (Ministry of Darkness)', iconic: false },
  ],
  116: [ // Doink the Clown
    { song: 'Doink Theme (Carnival Music)', artist: 'Jim Johnston', years: '1993-1995', iconic: true },
  ],
  143: [ // Koko B. Ware
    { song: 'Piledriver', artist: 'Koko B. Ware', years: '1987-1994', iconic: true },
  ],
  162: [ // Shane McMahon
    { song: 'Here Comes the Money', artist: 'Naughty by Nature', years: '1999-present', iconic: true },
  ],
  166: [ // Stephanie McMahon
    { song: 'Welcome to the Queendom', artist: 'Jim Johnston (later Jacki-O)', years: '2003-present', iconic: true },
    { song: 'My Time', artist: 'DX Band', years: '1999-2002 (with Triple H)', iconic: false },
  ],
  170: [ // Snitsky
    { song: 'It Wasn\'t My Fault', artist: 'Jim Johnston', years: '2004-2008', iconic: false },
  ],
  173: [ // Brian Kendrick
    { song: 'Man with a Plan', artist: 'Jim Johnston', years: '2008-2009', iconic: false },
  ],
  189: [ // René Duprée
    { song: 'French Phenom', artist: 'Jim Johnston', years: '2004-2007', iconic: false },
  ],
  194: [ // Tyson Kidd
    { song: 'Right Here, Right Now', artist: 'CFO$', years: '2012-2015', iconic: false },
  ],
  197: [ // Heath Slater
    { song: 'One Man Band', artist: 'Jim Johnston', years: '2012-2020', iconic: false },
    { song: 'We Are One (Nexus)', artist: '12 Stones', years: '2010-2011', iconic: false },
  ],
  203: [ // Bo Dallas
    { song: 'Anything', artist: 'CFO$', years: '2013-2019', iconic: false },
  ],
  206: [ // Erick Rowan
    { song: 'Sheepherder', artist: 'Jim Johnston', years: '2014-2020', iconic: false },
  ],
  224: [ // Zoey Stark
    { song: 'Stark Contrast', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  243: [ // Sabu
    { song: 'Huka Blues', artist: 'Harry Slash & The Slashtones', years: '1995-2007 (ECW)', iconic: true },
  ],
  247: [ // Spike Dudley
    { song: 'Half Man, Half Amazing', artist: 'Jim Johnston', years: '2001-2005', iconic: false },
  ],
  248: [ // Stevie Richards
    { song: 'Stevie Night Heat', artist: 'Jim Johnston', years: '2000-2008', iconic: false },
  ],
  250: [ // Billy Kidman
    { song: 'You Can Run', artist: 'Jim Johnston', years: '2001-2005', iconic: false },
  ],
  256: [ // Fit Finlay
    { song: 'Lambeg', artist: 'Jim Johnston', years: '2006-2012', iconic: false },
  ],
  258: [ // Velveteen Dream
    { song: 'Velveteen Dream Theme', artist: 'CFO$', years: '2017-2021', iconic: false },
  ],
  260: [ // Shayna Baszler
    { song: 'Loyalty Is Everything', artist: 'CFO$', years: '2018-present', iconic: false },
  ],
  261: [ // Kairi Sane
    { song: 'Pirate\'s Life', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  263: [ // Ember Moon
    { song: 'Free the Flame', artist: 'CFO$', years: '2017-2021', iconic: false },
  ],
  315: [ // Muhammad Hassan
    { song: 'Arabesque', artist: 'Jim Johnston', years: '2004-2005', iconic: false },
  ],
  340: [ // Hideo Itami / KENTA
    { song: 'Go Hard', artist: 'CFO$', years: '2014-2019', iconic: false },
  ],
  449: [ // The Great Khali
    { song: 'Land of Five Rivers', artist: 'Jim Johnston', years: '2006-2014', iconic: false },
  ],
  456: [ // Carmella
    { song: 'Fabulous', artist: 'CFO$', years: '2016-present', iconic: false },
  ],
  458: [ // Mandy Rose
    { song: 'Golden Goddess', artist: 'def rebel', years: '2020-2022', iconic: false },
  ],
  465: [ // Zelina Vega
    { song: 'Muñeca', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  472: [ // Finlay
    { song: 'Lambeg', artist: 'Jim Johnston', years: '2006-2012', iconic: false },
  ],
  486: [ // Ricochet
    { song: 'One and Only', artist: 'CFO$', years: '2018-2024', iconic: false },
  ],
  492: [ // Trick Williams
    { song: 'Whoop That Trick', artist: 'def rebel', years: '2022-present', iconic: true },
  ],
  493: [ // Ilja Dragunov
    { song: 'Warrior\'s Soul', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  507: [ // Diamond Dallas Page
    { song: 'Self High Five', artist: 'Jim Johnston/Dallas Page', years: '2001-2002', iconic: false },
    { song: 'Smells Like Teen Spirit', artist: 'Nirvana', years: '1997-2001 (WCW)', iconic: true },
  ],
  508: [ // Evan Bourne
    { song: 'Born to Win', artist: 'Jim Johnston', years: '2008-2012', iconic: false },
  ],
  510: [ // Sin Cara
    { song: 'Ancient Spirit', artist: 'Jim Johnston', years: '2011-2019', iconic: false },
  ],
  537: [ // Tama Tonga
    { song: 'Bloodline Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  551: [ // Vader
    { song: 'Mastodon', artist: 'Jim Johnston', years: '1996-1998', iconic: true },
    { song: 'It\'s Time (Rocky Mountains)', artist: 'Jim Johnston', years: '1990-1995 (WCW)', iconic: true },
  ],
  556: [ // Jim Neidhart
    { song: 'Hart Foundation Theme', artist: 'Jim Johnston', years: '1986-1991, 1997', iconic: true },
  ],
  575: [ // Mr. Kennedy
    { song: 'Turn Up the Trouble', artist: 'Jim Johnston', years: '2005-2009', iconic: true },
  ],
  578: [ // Chris Masters
    { song: 'Masterpiece', artist: 'Jim Johnston', years: '2005-2011', iconic: false },
  ],
  589: [ // Apollo Crews
    { song: 'Cruise Control', artist: 'CFO$', years: '2016-present', iconic: false },
  ],
  590: [ // Toni Storm
    { song: 'Thunder', artist: 'CFO$', years: '2020-2021', iconic: false },
  ],
  618: [ // Ronda Rousey
    { song: 'Bad Reputation', artist: 'Joan Jett', years: '2018-2023', iconic: true },
  ],
  622: [ // Swerve Strickland
    { song: 'Swerve in Our Glory', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  675: [ // Mia Yim
    { song: 'Blaze of Glory', artist: 'CFO$', years: '2018-present', iconic: false },
  ],
  676: [ // Lacey Evans
    { song: 'Sassy Southern Belle', artist: 'CFO$', years: '2019-2023', iconic: false },
  ],
  703: [ // Irwin R. Schyster
    { song: 'Write It Off', artist: 'Jim Johnston', years: '1991-1995', iconic: false },
  ],
  844: [ // Kamala
    { song: 'Jungle Theme', artist: 'Jim Johnston', years: '1984-1993', iconic: false },
  ],
  850: [ // Logan Paul
    { song: 'Going the Distance', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  856: [ // Jacob Fatu
    { song: 'New Bloodline', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  858: [ // Penta El Zero Miedo
    { song: 'Cero Miedo', artist: 'def rebel', years: '2025-present', iconic: false },
  ],
  861: [ // Riddle
    { song: 'Bro!', artist: 'CFO$/def rebel', years: '2020-2023', iconic: false },
  ],
  869: [ // Cameron Grimes
    { song: 'To the Moon', artist: 'def rebel', years: '2020-2023', iconic: false },
  ],
  878: [ // Hillbilly Jim
    { song: 'Don\'t Go Messin\' with a Country Boy', artist: 'Jim Johnston', years: '1985-1993', iconic: false },
  ],
  887: [ // Ahmed Johnson
    { song: 'Pearl River Plunge', artist: 'Jim Johnston', years: '1995-1998', iconic: false },
  ],
  890: [ // Savio Vega
    { song: 'Caribbean Sounds', artist: 'Jim Johnston', years: '1995-1999', iconic: false },
  ],
  896: [ // Albert / A-Train
    { song: 'Bicycle', artist: 'Jim Johnston', years: '2001-2004', iconic: false },
  ],
  906: [ // Oba Femi
    { song: 'Ruler\'s Domain', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  925: [ // Sonya Deville
    { song: 'Bring the Fire', artist: 'CFO$', years: '2017-present', iconic: false },
  ],
  936: [ // Hardcore Holly
    { song: 'How Do You Like Me Now?', artist: 'Jim Johnston', years: '1999-2009', iconic: false },
  ],
  944: [ // Maryse
    { song: 'Pourquoi (Because of You)', artist: 'Jim Johnston', years: '2007-2018', iconic: false },
  ],
  957: [ // Emma / Tenille Dashwood
    { song: 'Dance-a-Lot Robot', artist: 'Jim Johnston', years: '2013-2017', iconic: false },
  ],
  963: [ // Nikki Cross
    { song: 'Glasgow Cross', artist: 'CFO$', years: '2018-present', iconic: false },
  ],
  964: [ // Shotzi
    { song: 'Rollin\'', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  972: [ // Sycho Sid
    { song: 'Sid\'s Theme (Millennium Man)', artist: 'Jim Johnston', years: '1995-2001', iconic: false },
  ],
  1034: [ // Bam Bam Bigelow
    { song: 'Flames', artist: 'Jim Johnston', years: '1987-1995', iconic: false },
  ],
  1035: [ // Kerry Von Erich
    { song: 'Texas Tornado', artist: 'Jim Johnston', years: '1990-1992', iconic: false },
  ],
  1041: [ // Virgil
    { song: 'Virgil\'s Theme', artist: 'Jim Johnston', years: '1991-1994', iconic: false },
  ],
  1059: [ // Terry Funk
    { song: 'Chainsaw Charlie', artist: 'Jim Johnston', years: '1997-1998', iconic: false },
    { song: 'Desperado', artist: 'The Eagles', years: '1981-1997 (NWA/ECW)', iconic: true },
  ],
  1065: [ // Luke Gallows
    { song: 'Omen in the Sky (The Club)', artist: 'CFO$', years: '2016-2020', iconic: false },
  ],
  1066: [ // Karl Anderson
    { song: 'Omen in the Sky (The Club)', artist: 'CFO$', years: '2016-2020', iconic: false },
  ],
  1070: [ // Kalisto
    { song: 'Lucha!', artist: 'CFO$', years: '2014-2021', iconic: false },
  ],
  1081: [ // Alicia Fox
    { song: 'Legs Like That', artist: 'Jim Johnston', years: '2009-2018', iconic: false },
  ],
  1087: [ // Buddy Murphy
    { song: 'Disciple', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1092: [ // Ethan Page
    { song: 'All About the Page', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1111: [ // Lio Rush
    { song: 'I Hear Voices (remix)', artist: 'CFO$', years: '2018-2020', iconic: false },
  ],
  1167: [ // John Studd
    { song: 'Big John Studd March', artist: 'Jim Johnston', years: '1984-1989', iconic: false },
  ],
  1273: [ // Pat McAfee
    { song: 'Put You on Game', artist: 'def rebel', years: '2020-2023', iconic: false },
  ],
  1275: [ // Enzo Amore
    { song: 'SAWFT Is a Sin', artist: 'CFO$', years: '2016-2018', iconic: true },
  ],
  1276: [ // Big Cass
    { song: 'SAWFT Is a Sin', artist: 'CFO$', years: '2016-2018 (with Enzo)', iconic: false },
  ],
  1304: [ // Shawn Spears
    { song: 'Perfect 10', artist: 'CFO$', years: '2017-2019', iconic: false },
  ],
  1360: [ // Nick Aldis
    { song: 'The National Treasure', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1397: [ // Joe Hendry
    { song: 'I Believe in Joe Hendry', artist: 'Joe Hendry', years: '2024-present', iconic: true },
  ],
  1438: [ // Zilla Fatu
    { song: 'Fatu', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1575: [ // MJF
    { song: 'Better Than You', artist: 'AEW Music', years: '2020-present (AEW)', iconic: true },
  ],
  1625: [ // Ruby Riott / Ruby Soho
    { song: 'We Riot', artist: 'CFO$', years: '2017-2021', iconic: false },
  ],

  // === Additional Entries (Batch 3) ===

  38: [ // Crash Holly
    { song: 'Slow Down', artist: 'Jim Johnston', years: '2000-2003', iconic: false },
  ],
  142: [ // Nikolai Volkoff
    { song: 'Soviet National Anthem', artist: 'Traditional', years: '1984-1990', iconic: true },
  ],
  172: [ // Paul London
    { song: 'Halos and Horns', artist: 'Jim Johnston', years: '2005-2008 (with Kendrick)', iconic: false },
  ],
  193: [ // Ezekiel Jackson
    { song: 'Domination', artist: 'Jim Johnston', years: '2010-2012', iconic: false },
  ],
  233: [ // Sable
    { song: 'Wildcat', artist: 'Jim Johnston', years: '1998-2004', iconic: false },
  ],
  252: [ // Jamie Noble
    { song: 'Trailer Park Trash', artist: 'Jim Johnston', years: '2002-2009', iconic: false },
  ],
  255: [ // Hornswoggle
    { song: 'If They Only Knew (Mini Version)', artist: 'Jim Johnston', years: '2006-2014', iconic: false },
  ],
  265: [ // Candice LeRae
    { song: 'Poison Pixie', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  303: [ // Molly Holly
    { song: 'Molly Holly Theme', artist: 'Jim Johnston', years: '2001-2005', iconic: false },
  ],
  305: [ // Jazz
    { song: 'Feel the Jazz', artist: 'Jim Johnston', years: '2002-2004', iconic: false },
  ],
  332: [ // Dijak
    { song: 'Fear the Feast', artist: 'def rebel', years: '2023-2024', iconic: false },
  ],
  334: [ // Madcap Moss
    { song: 'Ha Ha Ha', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  335: [ // Ivar
    { song: 'War Machine (Viking Raiders)', artist: 'CFO$/def rebel', years: '2019-present', iconic: false },
  ],
  344: [ // Primo Colon
    { song: 'S.O.S. (Colons)', artist: 'Jim Johnston', years: '2008-2016', iconic: false },
  ],
  379: [ // Ted DiBiase Jr.
    { song: 'Priceless', artist: 'Jim Johnston', years: '2008-2013', iconic: false },
  ],
  382: [ // Maria Kanellis
    { song: 'With Legs Like That', artist: 'Jim Johnston', years: '2005-2010', iconic: false },
  ],
  384: [ // Layla El
    { song: 'Insatiable', artist: 'Jim Johnston', years: '2009-2015', iconic: false },
  ],
  385: [ // Gail Kim
    { song: 'It\'s a New Day', artist: 'Jim Johnston', years: '2003-2004, 2008-2011', iconic: false },
  ],
  402: [ // Humberto Carrillo
    { song: 'Humberto', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  414: [ // Giovanni Vinci
    { song: 'Imperium', artist: 'def rebel', years: '2022-present (with Gunther)', iconic: false },
  ],
  418: [ // Ridge Holland
    { song: 'Big Strong Boy', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  423: [ // Cora Jade
    { song: 'Wicked', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  425: [ // Dexter Lumis
    { song: 'Darkness', artist: 'CFO$', years: '2020-present', iconic: false },
  ],
  433: [ // Harley Race
    { song: 'King Harley Race March', artist: 'Jim Johnston', years: '1986-1989', iconic: false },
  ],
  438: [ // Rick Martel
    { song: 'The Model', artist: 'Jim Johnston', years: '1990-1995', iconic: true },
  ],
  440: [ // Haku
    { song: 'Haku\'s War Dance', artist: 'Jim Johnston', years: '1986-1992', iconic: false },
  ],
  457: [ // Dana Brooke
    { song: 'Flex Appeal', artist: 'CFO$', years: '2016-2023', iconic: false },
  ],
  464: [ // Lana
    { song: 'Ravishing (Lana\'s Theme)', artist: 'CFO$', years: '2019-2021', iconic: false },
  ],
  468: [ // TAKA Michinoku
    { song: 'Kaientai Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  473: [ // Eugene
    { song: 'Eugene\'s Theme (Rock & Roll Part 2 remix)', artist: 'Jim Johnston', years: '2004-2007', iconic: false },
  ],
  475: [ // Brodus Clay
    { song: 'Somebody Call My Momma', artist: 'Jim Johnston (feat. Ernest Miller)', years: '2012-2014', iconic: true },
  ],
  495: [ // Wes Lee
    { song: 'Born Survivor', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  496: [ // Dragon Lee
    { song: 'Dragon Fire', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  497: [ // Axiom
    { song: 'X Equals', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  498: [ // Nathan Frazer
    { song: 'Frazer', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  500: [ // Chelsea Green
    { song: 'Hot Mess', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  505: [ // Lyra Valkyria
    { song: 'Warrior Code', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  524: [ // Tyler Bate
    { song: 'Bop and Bang', artist: 'CFO$', years: '2017-2023', iconic: false },
  ],
  527: [ // Pete Dunne / Butch
    { song: 'Bruiserweight', artist: 'CFO$', years: '2017-present', iconic: false },
  ],
  529: [ // Alba Fyre
    { song: 'Fire Inside', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  532: [ // Giulia
    { song: 'Beautiful Killer', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  552: [ // Arn Anderson
    { song: 'Four Horsemen Theme', artist: 'Jim Johnston/WCW Music', years: '1986-2001', iconic: true },
  ],
  557: [ // Dino Bravo
    { song: 'The Canadian Strongman', artist: 'Jim Johnston', years: '1986-1992', iconic: false },
  ],
  559: [ // Crush
    { song: 'Hawaiian Crush', artist: 'Jim Johnston', years: '1990-1993', iconic: false },
    { song: 'Demolition Theme', artist: 'Rick Derringer', years: '1993 (Demolition)', iconic: false },
  ],
  565: [ // Adam Bomb
    { song: 'Meltdown', artist: 'Jim Johnston', years: '1993-1996', iconic: false },
  ],
  583: [ // Eric Young
    { song: 'Showtime', artist: 'CFO$', years: '2018-2020', iconic: false },
  ],
  620: [ // Io Shirai
    { song: 'Tokyo Shock', artist: 'def rebel', years: '2018-2022 (NXT)', iconic: false },
  ],
  663: [ // Titus O'Neil
    { song: 'Fly By', artist: 'Jim Johnston', years: '2012-2019', iconic: false },
  ],
  735: [ // Luna Vachon
    { song: 'Luna Eclipse', artist: 'Jim Johnston', years: '1993-2000', iconic: false },
  ],
  806: [ // Repo Man
    { song: 'Repo Man Theme', artist: 'Jim Johnston', years: '1991-1993', iconic: false },
  ],
  808: [ // Flash Funk / Too Cold Scorpio
    { song: 'Flash Funk Theme', artist: 'Jim Johnston', years: '1996-1998', iconic: false },
  ],
  868: [ // Tamina Snuka
    { song: 'Tropical Storm', artist: 'Jim Johnston', years: '2010-2022', iconic: false },
  ],
  874: [ // Piper Niven
    { song: 'Braveheart (Piper\'s Theme)', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  879: [ // Bad News Brown
    { song: 'Bad News', artist: 'Jim Johnston', years: '1988-1990', iconic: false },
  ],
  897: [ // Maven
    { song: 'Tattoo', artist: 'Jim Johnston', years: '2002-2005', iconic: false },
  ],
  956: [ // Adam Rose
    { song: 'Break Away', artist: 'CFO$', years: '2014-2016', iconic: false },
  ],
  1006: [ // The Brooklyn Brawler
    { song: 'Brooklyn Brawler Theme', artist: 'Jim Johnston', years: '1989-2014', iconic: false },
  ],
  1008: [ // Gillberg
    { song: 'Gillberg Theme (Goldberg parody)', artist: 'Jim Johnston', years: '1998-2000', iconic: true },
  ],
  1010: [ // Eve Torres
    { song: 'She Looks Good', artist: 'Jim Johnston', years: '2008-2013', iconic: false },
  ],
  1011: [ // Kaitlyn
    { song: 'Spin the Bottle', artist: 'Jim Johnston', years: '2012-2014', iconic: false },
  ],
  1042: [ // Hercules Hernandez
    { song: 'Hercules Power', artist: 'Jim Johnston', years: '1986-1992', iconic: false },
  ],
  1043: [ // One Man Gang
    { song: 'Gang Warfare', artist: 'Jim Johnston', years: '1987-1990', iconic: false },
  ],
  1046: [ // Lanny Poffo
    { song: 'The Genius', artist: 'Jim Johnston', years: '1989-1992', iconic: false },
  ],
  1060: [ // Mike Awesome
    { song: 'Awesome Theme', artist: 'Harry Slash & The Slashtones', years: '1999-2001 (ECW/WCW)', iconic: false },
  ],
  1064: [ // Rick Steiner
    { song: 'Steiner Brothers Theme', artist: 'Jim Johnston', years: '1993-1994', iconic: false },
    { song: 'DFG (Dog Faced Gremlin)', artist: 'Jim Johnston', years: '1993 (solo)', iconic: false },
  ],
  1076: [ // Montez Ford
    { song: 'Profits (Street Profits)', artist: 'CFO$/def rebel', years: '2019-present', iconic: false },
  ],
  1082: [ // Kelly Kelly
    { song: 'Holla', artist: 'Jim Johnston (feat. Desiree Jackson)', years: '2006-2012', iconic: false },
  ],
  1086: [ // Cedric Alexander
    { song: 'Won\'t Let Go', artist: 'CFO$', years: '2016-2022', iconic: false },
  ],
  1108: [ // Kharma / Awesome Kong
    { song: 'Victimized', artist: 'Jim Johnston', years: '2011-2012', iconic: false },
  ],
  1110: [ // The Berzerker
    { song: 'Berzerker Theme', artist: 'Jim Johnston', years: '1991-1993', iconic: false },
  ],
  1200: [ // The Blue Meanie
    { song: 'Blue World Order', artist: 'Jim Johnston', years: '1998-1999', iconic: false },
  ],
  1210: [ // Bubba Ray Dudley
    { song: 'Bombshell (Dudley Boyz)', artist: 'Powerman 5000', years: '2002-2005, 2015-2016', iconic: true },
    { song: 'We\'re Comin\' Down', artist: 'Jim Johnston', years: '1999-2002', iconic: true },
  ],
  1223: [ // Rico
    { song: 'You Look So Good to Me', artist: 'Jim Johnston', years: '2003-2004', iconic: false },
  ],
  1265: [ // TJP
    { song: 'Playing with Power', artist: 'CFO$', years: '2016-2019', iconic: false },
  ],
  1267: [ // Akira Tozawa
    { song: 'Stamina', artist: 'CFO$', years: '2017-present', iconic: false },
  ],
  1270: [ // Rich Swann
    { song: 'Around the Way', artist: 'CFO$', years: '2016-2019', iconic: false },
  ],
  1271: [ // Bobby Fish
    { song: 'Undisputed (Undisputed ERA)', artist: 'CFO$', years: '2017-2021', iconic: false },
  ],
  1272: [ // KUSHIDA
    { song: 'Back to the Future (KUSHIDA Theme)', artist: 'CFO$', years: '2019-2022', iconic: false },
  ],
  1345: [ // Bad Bunny
    { song: 'Booker T', artist: 'Bad Bunny', years: '2021 (WrestleMania 37)', iconic: false },
  ],
  1351: [ // No Way Jose
    { song: 'No Way José', artist: 'CFO$', years: '2016-2020', iconic: false },
  ],
  1352: [ // Kassius Ohno / Chris Hero
    { song: 'Hero\'s Welcome', artist: 'CFO$', years: '2017-2019', iconic: false },
  ],
  1365: [ // Great Muta
    { song: 'Muta\'s Theme', artist: 'Ichiro Shoji', years: '1989-1993 (NWA/WCW)', iconic: true },
  ],
  1366: [ // Jushin Thunder Liger
    { song: 'Ikari no Jyushin (Fury of the Beast God)', artist: 'Akira Kushida', years: '1989-2020', iconic: true },
  ],
  1369: [ // Aiden English
    { song: 'Aria (The Artiste)', artist: 'CFO$', years: '2016-2019', iconic: false },
  ],
  1402: [ // Jaida Parker
    { song: 'Baddest in the Room', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1403: [ // Stephanie Vaquer
    { song: 'Vaquer', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1404: [ // Zaria
    { song: 'Unleashed', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1405: [ // Rick Boogs
    { song: 'Feel the Boogs', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  1431: [ // Nikita Koloff
    { song: 'Russian National Anthem (WCW)', artist: 'Traditional', years: '1984-1992', iconic: false },
  ],
  1459: [ // Konnan
    { song: 'Bow Wow Wow (Konnan Theme)', artist: 'WCW Music', years: '1997-2001 (WCW)', iconic: false },
  ],
  1463: [ // Vampiro
    { song: 'Bloodbath', artist: 'WCW Music', years: '1998-2001 (WCW)', iconic: false },
  ],
  1465: [ // Adrian Adonis
    { song: 'Adorable Theme', artist: 'Jim Johnston', years: '1986-1988', iconic: false },
  ],

  // === Additional Entries (Batch 4) ===

  1: [ // Bruno Sammartino
    { song: 'Immigrant Song (intro)', artist: 'Arena organ', years: '1963-1981', iconic: false },
  ],
  2: [ // Pedro Morales
    { song: 'Latin Pride', artist: 'Arena music', years: '1971-1987', iconic: false },
  ],
  144: [ // George "The Animal" Steele
    { song: 'Animal Theme', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  180: [ // Nunzio
    { song: 'FBI Theme (Full Blooded Italians)', artist: 'Jim Johnston', years: '2002-2007', iconic: false },
  ],
  184: [ // Orlando Jordan
    { song: 'OJ Theme', artist: 'Jim Johnston', years: '2004-2006', iconic: false },
  ],
  195: [ // David Hart Smith
    { song: 'Hart Dynasty', artist: 'Jim Johnston', years: '2009-2011', iconic: false },
  ],
  266: [ // Xia Li
    { song: 'Warrior Princess', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  269: [ // Jason Jordan
    { song: 'Gold-Blooded', artist: 'CFO$', years: '2017-2018', iconic: false },
  ],
  310: [ // Lash Legend
    { song: 'Nothing but Net', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  333: [ // Omos
    { song: 'Nigerian Giant', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  338: [ // Yoshi Tatsu
    { song: 'Rising Sun (Yoshi)', artist: 'Jim Johnston', years: '2009-2014', iconic: false },
  ],
  342: [ // Mojo Rawley
    { song: 'Hype Bros Theme', artist: 'CFO$', years: '2015-2019', iconic: false },
  ],
  353: [ // Jesse "The Body" Ventura
    { song: 'The Body Rules', artist: 'Jim Johnston', years: '1984-1986', iconic: false },
  ],
  380: [ // Curt Hawkins
    { song: 'In the Middle of It Now', artist: 'CFO$', years: '2016-2019', iconic: false },
  ],
  424: [ // Indi Hartwell
    { song: 'The Way', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  436: [ // The Warlord
    { song: 'Powers of Pain Theme', artist: 'Jim Johnston', years: '1988-1992', iconic: false },
  ],
  437: [ // The Barbarian
    { song: 'Powers of Pain Theme', artist: 'Jim Johnston', years: '1988-1992', iconic: false },
  ],
  443: [ // Terri Runnels
    { song: 'PMS Theme', artist: 'Jim Johnston', years: '1998-2004', iconic: false },
  ],
  459: [ // Jacy Jayne
    { song: 'Toxic Attraction', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  460: [ // Gigi Dolin
    { song: 'Toxic Attraction', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  518: [ // Tony D'Angelo
    { song: 'Don of NXT', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  530: [ // Isla Dawn
    { song: 'Witching Hour', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  538: [ // Tonga Loa
    { song: 'Bloodline Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  554: [ // Barry Windham
    { song: 'Four Horsemen Theme', artist: 'WCW Music', years: '1988-1998', iconic: false },
  ],
  585: [ // EC3
    { song: 'Trouble Trouble Trouble', artist: 'CFO$', years: '2018-2020', iconic: false },
  ],
  587: [ // Lars Sullivan
    { song: 'Freak Show', artist: 'CFO$', years: '2019-2020', iconic: false },
  ],
  604: [ // Duke Hudson
    { song: 'Game Over', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  671: [ // Tatum Paxley
    { song: 'Creepy Doll', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  672: [ // Lola Vice
    { song: 'Miami Heat', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  684: [ // Fallon Henley
    { song: 'Henley', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  736: [ // Jacqueline Moore
    { song: 'Jacqueline Theme', artist: 'Jim Johnston', years: '1998-2004', iconic: false },
  ],
  760: [ // Jillian Hall
    { song: 'Slaughter on 10th Avenue', artist: 'Jim Johnston', years: '2006-2010', iconic: false },
  ],
  837: [ // Mr. Fuji
    { song: 'Japanese March', artist: 'Jim Johnston', years: '1977-1996', iconic: false },
  ],
  843: [ // Don Muraco
    { song: 'Magnificent Theme', artist: 'Jim Johnston', years: '1984-1988', iconic: false },
  ],
  859: [ // Dan Severn
    { song: 'No Theme (silent entrance)', artist: 'N/A', years: '1998-1999', iconic: false },
  ],
  860: [ // Motor City Machine Guns
    { song: 'Guns Blazing', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  907: [ // Sol Ruca
    { song: 'Sol Power', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  908: [ // Kelani Jordan
    { song: 'Kelani', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  915: [ // Thea Hail
    { song: 'Chase U (Chase University)', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  916: [ // Andre Chase
    { song: 'Chase U (Chase University)', artist: 'def rebel', years: '2022-present', iconic: true },
  ],
  929: [ // Nailz
    { song: 'Nailz Theme (Prison Sounds)', artist: 'Jim Johnston', years: '1992-1993', iconic: false },
  ],
  941: [ // Justin Credible
    { song: 'Snap Your Fingers, Snap Your Neck', artist: 'Prong', years: '1998-2001 (ECW)', iconic: false },
  ],
  942: [ // Jerry Lynn
    { song: 'New F\'n Show', artist: 'Harry Slash & The Slashtones', years: '1999-2001 (ECW)', iconic: false },
  ],
  946: [ // Candice Michelle
    { song: 'Go Daddy Girl', artist: 'Jim Johnston', years: '2004-2009', iconic: false },
  ],
  951: [ // Vladimir Kozlov
    { song: 'Kozlov March', artist: 'Jim Johnston', years: '2008-2011', iconic: false },
  ],
  979: [ // Buff Bagwell
    { song: 'Buff Daddy', artist: 'WCW Music', years: '1997-2001', iconic: false },
  ],
  980: [ // Kanyon
    { song: 'Who Better Than Kanyon?', artist: 'WCW Music', years: '1999-2003', iconic: false },
  ],
  1007: [ // Barry Horowitz
    { song: 'Self High Five', artist: 'Jim Johnston', years: '1993-1997', iconic: false },
  ],
  1009: [ // James Ellsworth
    { song: 'Any Man with Two Hands', artist: 'CFO$', years: '2016-2018', iconic: false },
  ],
  1023: [ // Bob Orton Jr.
    { song: 'Cowboy', artist: 'Jim Johnston', years: '1984-1987', iconic: false },
  ],
  1024: [ // Rocky Johnson
    { song: 'Soul Man', artist: 'Jim Johnston', years: '1982-1985', iconic: false },
  ],
  1047: [ // Ronnie Garvin
    { song: 'Rugged Ronnie', artist: 'Jim Johnston', years: '1988-1990', iconic: false },
  ],
  1052: [ // Butch Reed
    { song: 'Natural', artist: 'Jim Johnston', years: '1986-1988', iconic: false },
  ],
  1054: [ // The Patriot
    { song: 'Medal (prototype)', artist: 'Jim Johnston', years: '1997', iconic: false },
  ],
  1061: [ // Shane Douglas
    { song: 'Franchise Theme', artist: 'Harry Slash & The Slashtones', years: '1996-2001 (ECW)', iconic: false },
  ],
  1083: [ // Billie Kay
    { song: 'Iconic (IIconics)', artist: 'CFO$', years: '2018-2021', iconic: false },
  ],
  1084: [ // Peyton Royce
    { song: 'Iconic (IIconics)', artist: 'CFO$', years: '2018-2021', iconic: false },
  ],
  1085: [ // Tucker
    { song: 'Heavy Machinery', artist: 'CFO$', years: '2019-2020', iconic: false },
  ],
  1097: [ // Drake Maverick
    { song: 'Maverick', artist: 'CFO$', years: '2018-2021', iconic: false },
  ],
  1107: [ // Michael PS Hayes
    { song: 'Badstreet USA', artist: 'Michael PS Hayes', years: '1983-1990', iconic: true },
  ],
  1112: [ // Drew Gulak
    { song: 'Catch Point', artist: 'CFO$', years: '2016-2022', iconic: false },
  ],
  1113: [ // Tye Dillinger
    { song: 'Ten', artist: 'CFO$', years: '2016-2019', iconic: false },
  ],
  1172: [ // Terry Taylor
    { song: 'Red Rooster Theme', artist: 'Jim Johnston', years: '1988-1990', iconic: true },
  ],
  1196: [ // Ludvig Borga
    { song: 'Finnish Fury', artist: 'Jim Johnston', years: '1993-1994', iconic: false },
  ],
  1202: [ // Shawn Stasiak
    { song: 'Planet Stasiak', artist: 'Jim Johnston', years: '2001-2002', iconic: false },
  ],
  1241: [ // Justin Gabriel
    { song: 'We Are One (Nexus)', artist: '12 Stones', years: '2010-2011', iconic: false },
    { song: 'The Cape Town Werewolf', artist: 'Jim Johnston', years: '2011-2012 (solo)', iconic: false },
  ],
  1358: [ // Alex Shelley
    { song: 'Guns Blazing (MCMG)', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1359: [ // Chris Sabin
    { song: 'Guns Blazing (MCMG)', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1364: [ // Reggie / Scrypts
    { song: 'Reggie', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  1440: [ // Eddy Thorpe
    { song: 'Thorpe', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1442: [ // James Storm
    { song: 'Longnecks and Rednecks', artist: 'Dale Oliver', years: '2004-2017 (TNA)', iconic: true },
  ],
  1456: [ // Kay Lee Ray
    { song: 'KLR', artist: 'CFO$/def rebel', years: '2019-2022 (NXT UK)', iconic: false },
  ],
  1457: [ // Stevie Ray
    { song: 'Harlem Heat Theme', artist: 'WCW Music', years: '1993-2000 (WCW)', iconic: false },
  ],
  1460: [ // Disco Inferno
    { song: 'Disco Fever', artist: 'WCW Music', years: '1995-2001 (WCW)', iconic: true },
  ],
  1461: [ // Alex Wright
    { song: 'Das Wunderkind', artist: 'WCW Music', years: '1994-2001 (WCW)', iconic: false },
  ],
  1462: [ // La Parka
    { song: 'La Parka Theme', artist: 'WCW Music', years: '1997-2001 (WCW)', iconic: false },
  ],
  1464: [ // Mikey Whipwreck
    { song: 'Mikey Theme', artist: 'Harry Slash & The Slashtones', years: '1995-2000 (ECW)', iconic: false },
  ],
  1477: [ // Bruiser Brody
    { song: 'Immigrant Song', artist: 'Led Zeppelin', years: '1976-1988', iconic: true },
  ],
  1506: [ // Tessa Blanchard
    { song: 'Born to Win', artist: 'TNA Music', years: '2018-2020 (Impact)', iconic: false },
  ],

  // === Batch 5: Tag Teams & Factions ===
  15: [ // Demolition
    { song: 'Demolition', artist: 'Rick Derringer', years: '1987-1991', iconic: true },
  ],
  16: [ // British Bulldogs
    { song: 'Bulldog March', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  67: [ // APA
    { song: 'APA Theme', artist: 'Jim Johnston', years: '1999-2004', iconic: true },
  ],
  105: [ // The New Day
    { song: 'New Day, New Way', artist: 'CFO$', years: '2014-2024', iconic: true },
    { song: 'New Day Coming', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  129: [ // The Usos
    { song: 'Done With That (Day One Remix)', artist: 'def rebel', years: '2021-present', iconic: true },
    { song: 'So Close Now', artist: 'CFO$', years: '2014-2021', iconic: false },
    { song: 'U-So-Crazy', artist: 'Jim Johnston', years: '2010-2014', iconic: false },
  ],
  148: [ // The Nasty Boys
    { song: 'Nasty Boys', artist: 'Jim Johnston', years: '1991-1993', iconic: false },
  ],
  149: [ // Legion of Doom
    { song: 'What a Rush', artist: 'Jim Johnston', years: '1990-1998', iconic: true },
    { song: 'Iron Man', artist: 'Black Sabbath', years: '1983-1990 (NWA/JCP)', iconic: true },
  ],
  150: [ // The Bushwhackers
    { song: 'Bushwhacker Stomp', artist: 'Jim Johnston', years: '1988-1996', iconic: true },
  ],
  151: [ // Natural Disasters
    { song: 'Natural Disasters Theme', artist: 'Jim Johnston', years: '1991-1993', iconic: false },
  ],
  152: [ // Money Inc.
    { song: 'Money Inc. Theme', artist: 'Jim Johnston', years: '1992-1993', iconic: false },
  ],
  158: [ // Smoking Gunns
    { song: 'Smoking Gunns Theme', artist: 'Jim Johnston', years: '1993-1996', iconic: false },
  ],
  163: [ // Right to Censor
    { song: 'Right to Censor (Alarm Buzzer)', artist: 'Jim Johnston', years: '2000-2001', iconic: true },
  ],
  196: [ // Nexus
    { song: 'We Are One', artist: '12 Stones', years: '2010-2011', iconic: true },
  ],
  272: [ // The Viking Raiders
    { song: 'Viking War March', artist: 'def rebel', years: '2019-present', iconic: false },
    { song: 'War Machine', artist: 'CFO$', years: '2017-2019 (NXT)', iconic: false },
  ],
  275: [ // The Revival
    { song: 'Say Yeah', artist: 'CFO$', years: '2016-2020', iconic: true },
  ],
  281: [ // Too Cool
    { song: 'Turn It Up', artist: 'Jim Johnston', years: '1999-2001', iconic: true },
  ],
  297: [ // The Judgment Day
    { song: 'The Other Side', artist: 'def rebel', years: '2022-present', iconic: true },
  ],
  343: [ // The Ascension
    { song: 'Rebellion', artist: 'CFO$', years: '2013-2019', iconic: false },
  ],
  421: [ // Imperium
    { song: 'Symphony No. 9 (arr.)', artist: 'CFO$/def rebel', years: '2019-present', iconic: true },
  ],
  499: [ // Pretty Deadly
    { song: 'Pretty Deadly', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  517: [ // Katana Chance & Kayden Carter
    { song: 'KC Squared', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  610: [ // Grizzled Young Veterans
    { song: 'GYV', artist: 'def rebel', years: '2019-2022 (NXT UK)', iconic: false },
  ],
  647: [ // La Résistance
    { song: 'La Résistance (French National Anthem remix)', artist: 'Jim Johnston', years: '2003-2005', iconic: false },
  ],
  655: [ // The Vaudevillains
    { song: 'Vaudevillains', artist: 'CFO$', years: '2015-2017', iconic: false },
  ],
  656: [ // Enzo Amore & Big Cass
    { song: 'SAWFT is a Sin', artist: 'CFO$', years: '2016-2017', iconic: true },
  ],
  657: [ // American Alpha
    { song: 'Ready, Willing, and Gable', artist: 'CFO$', years: '2016-2017', iconic: false },
  ],
  658: [ // The Bar
    { song: 'The Bar', artist: 'CFO$', years: '2017-2019', iconic: false },
  ],
  659: [ // The Authors of Pain
    { song: 'Pain', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  660: [ // Heavy Machinery
    { song: 'Heavy Machinery', artist: 'CFO$', years: '2019-2020', iconic: false },
  ],
  690: [ // MSK
    { song: 'MSK', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  691: [ // The Rockers
    { song: 'Rockin\' Rockers', artist: 'Jim Johnston', years: '1988-1992', iconic: true },
  ],
  693: [ // The Orient Express
    { song: 'Orient Express Theme', artist: 'Jim Johnston', years: '1990-1992', iconic: false },
  ],
  695: [ // The Beverly Brothers
    { song: 'Beverly Brothers Theme', artist: 'Jim Johnston', years: '1991-1993', iconic: false },
  ],
  696: [ // The Quebecers
    { song: 'We\'re Not the Mounties', artist: 'Jim Johnston', years: '1993-1994', iconic: false },
  ],
  697: [ // Men on a Mission
    { song: 'Whoomp! (There It Is)', artist: 'Tag Team', years: '1993-1996', iconic: false },
  ],
  700: [ // The Steiner Brothers
    { song: 'Steiner Brothers Theme', artist: 'Jim Johnston', years: '1993-1998', iconic: false },
  ],
  720: [ // Edge & Christian
    { song: 'On the Edge', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
    { song: 'You Think You Know Me (E&C)', artist: 'Jim Johnston', years: '1998-1999', iconic: false },
  ],
  778: [ // The Street Profits
    { song: 'Bring the Swag', artist: 'def rebel', years: '2020-present', iconic: true },
  ],
  780: [ // The Hurt Business
    { song: 'Hurt Business', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  781: [ // RKBro
    { song: 'RKBro', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  785: [ // Alpha Academy
    { song: 'Alpha Academy', artist: 'def rebel', years: '2021-2024', iconic: false },
  ],
  787: [ // Hit Row
    { song: 'Hit Row Cypher', artist: 'Hit Row', years: '2021-2024', iconic: false },
  ],
  790: [ // Lucha House Party
    { song: 'Lucha House Party', artist: 'CFO$', years: '2018-2022', iconic: false },
  ],
  798: [ // Power and Glory
    { song: 'Power and Glory Theme', artist: 'Jim Johnston', years: '1990-1991', iconic: false },
  ],
  800: [ // Strike Force
    { song: 'Girls in Cars', artist: 'Jim Johnston', years: '1987-1988', iconic: false },
  ],
  801: [ // The Killer Bees
    { song: 'Flight of the Bumblebee (arr.)', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  802: [ // The Fabulous Rougeau Brothers
    { song: 'All American Boys', artist: 'Jim Johnston', years: '1988-1990', iconic: true },
  ],
  804: [ // The Bolsheviks
    { song: 'Soviet National Anthem', artist: 'Traditional', years: '1987-1990', iconic: false },
  ],
  805: [ // Rhythm & Blues
    { song: 'Hunka Hunka Honky Love', artist: 'Honky Tonk Man & Jim Johnston', years: '1990', iconic: false },
  ],
  807: [ // High Energy
    { song: 'High Energy', artist: 'Jim Johnston', years: '1992-1993', iconic: false },
  ],
  813: [ // The Radicalz
    { song: 'Radicalz Theme', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  865: [ // Axiom & Nathan Frazer
    { song: 'A-Town Down Under (remix)', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  910: [ // Gallus
    { song: 'Gallus Theme', artist: 'def rebel', years: '2019-present (NXT UK/NXT)', iconic: false },
  ],
  911: [ // Alba Fyre & Isla Dawn
    { song: 'Fyre & Dawn', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  952: [ // Prime Time Players
    { song: 'Making Moves', artist: 'Jim Johnston', years: '2012-2016', iconic: false },
  ],
  953: [ // Cryme Tyme
    { song: 'Cryme Tyme', artist: 'Jim Johnston', years: '2006-2010', iconic: false },
  ],
  954: [ // Spirit Squad
    { song: 'Spirit Squad (Let\'s Go)', artist: 'Jim Johnston', years: '2006', iconic: false },
  ],
  955: [ // Deuce and Domino
    { song: 'Deuce & Domino (50s Greaser)', artist: 'Jim Johnston', years: '2007-2008', iconic: false },
  ],
  962: [ // Los Matadores
    { song: 'Olé', artist: 'Jim Johnston', years: '2013-2016', iconic: false },
  ],
  1021: [ // The Basham Brothers
    { song: 'Basham Brothers Theme', artist: 'Jim Johnston', years: '2003-2006', iconic: false },
  ],
  1508: [ // Public Enemy
    { song: 'Public Enemy No. 1', artist: 'Harry Slash & The Slashtones', years: '1994-1999 (ECW)', iconic: false },
  ],
  1559: [ // The Midnight Express
    { song: 'Chase (Midnight Express)', artist: 'Giorgio Moroder', years: '1980-1990', iconic: true },
  ],
  1567: [ // The Acclaimed
    { song: 'Scissor Me Timbers', artist: 'Max Caster', years: '2021-present (AEW)', iconic: true },
  ],
  1586: [ // Bullet Club
    { song: 'Shot\'Em', artist: 'NJPW Music', years: '2013-present', iconic: true },
  ],
  1587: [ // New Bloodline
    { song: 'Head of the Table (remix)', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1628: [ // The Wyatt Sicks
    { song: 'Shatter', artist: 'def rebel', years: '2024-present', iconic: false },
  ],

  // === Batch 5: Individuals (A-Z) ===
  84: [ // Charlie Haas
    { song: 'World\'s Greatest Tag Team', artist: 'Jim Johnston', years: '2002-2004 (w/ Shelton Benjamin)', iconic: false },
  ],
  113: [ // Funaki
    { song: 'Indeed', artist: 'Jim Johnston', years: '2000-2010', iconic: false },
  ],
  179: [ // Super Crazy
    { song: 'Super Crazy', artist: 'Jim Johnston', years: '2005-2008', iconic: false },
  ],
  181: [ // Chuck Palumbo
    { song: 'Palumbo', artist: 'Jim Johnston', years: '2007-2008', iconic: false },
  ],
  183: [ // Heidenreich
    { song: 'Heidenreich', artist: 'Jim Johnston', years: '2004-2006', iconic: false },
  ],
  234: [ // Torrie Wilson
    { song: 'A Girl Like That', artist: 'Jim Johnston', years: '2001-2008', iconic: false },
    { song: 'Need a Little Time', artist: 'Jim Johnston', years: '2003-2006', iconic: false },
  ],
  235: [ // Stacy Keibler
    { song: 'Legs (WWE version)', artist: 'Jim Johnston (after ZZ Top)', years: '2001-2006', iconic: false },
  ],
  246: [ // Balls Mahoney
    { song: 'Balls Mahoney Theme', artist: 'Harry Slash & The Slashtones', years: '1997-2001 (ECW)', iconic: false },
  ],
  251: [ // Ultimo Dragon
    { song: 'Dragon Fire', artist: 'Jim Johnston', years: '2003-2004', iconic: false },
  ],
  267: [ // Mansoor
    { song: 'Mansoor', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  278: [ // Kyle O'Reilly
    { song: 'Undisputed', artist: 'CFO$', years: '2017-2021 (Undisputed Era)', iconic: false },
    { song: 'Warfare', artist: 'def rebel', years: '2021-2022 (solo)', iconic: false },
  ],
  300: [ // Wendi Richter
    { song: 'Girls Just Want to Have Fun', artist: 'Cyndi Lauper', years: '1984-1985', iconic: true },
  ],
  312: [ // Tyson Tomko
    { song: 'Just Close Your Eyes (w/ Christian)', artist: 'Story of the Year', years: '2004-2005', iconic: false },
  ],
  372: [ // Road Dogg Jesse James
    { song: 'Oh You Didn\'t Know', artist: 'Jim Johnston', years: '1997-2001, 2012-2014', iconic: true },
  ],
  442: [ // The Kat
    { song: 'The Kat Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  469: [ // Essa Rios
    { song: 'Luchador', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  519: [ // Stacks
    { song: 'D\'Angelo Stacks', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  520: [ // Julius Creed
    { song: 'Creed Brothers', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  521: [ // Brutus Creed
    { song: 'Creed Brothers', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  522: [ // Ivy Nile
    { song: 'Diamond Mine', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  528: [ // Trent Seven
    { song: 'Moustache Mountain', artist: 'CFO$/def rebel', years: '2017-2023 (NXT UK/NXT)', iconic: false },
  ],
  553: [ // Tully Blanchard
    { song: 'Four Horsemen Theme', artist: 'WCW Music', years: '1985-1989 (NWA)', iconic: false },
  ],
  555: [ // Mike Rotundo
    { song: 'U.S. Male', artist: 'Jim Johnston', years: '1984-1986', iconic: false },
    { song: 'IRS (Tax Man)', artist: 'Jim Johnston', years: '1991-1995 (as IRS)', iconic: true },
  ],
  572: [ // Elijah Burke
    { song: 'Don\'t Waste My Time', artist: 'Jim Johnston', years: '2006-2008', iconic: false },
  ],
  602: [ // Tegan Nox
    { song: 'Girl with the Shiniest Wizard', artist: 'CFO$', years: '2019-2021', iconic: false },
  ],
  606: [ // Killian Dain
    { song: 'Beast of Belfast', artist: 'CFO$', years: '2017-2021', iconic: false },
  ],
  612: [ // Noam Dar
    { song: 'Scottish Supernova', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  613: [ // Meiko Satomura
    { song: 'Final Countdown (Japanese ver.)', artist: 'def rebel', years: '2021-2023 (NXT UK)', iconic: false },
  ],
  678: [ // Aliyah
    { song: 'Aliyah', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  706: [ // Jim Duggan
    { song: 'Hacksaw Jim Duggan Theme', artist: 'Jim Johnston', years: '1987-2009', iconic: true },
  ],
  710: [ // Typhoon
    { song: 'Natural Disasters Theme', artist: 'Jim Johnston', years: '1991-1993 (w/ Earthquake)', iconic: false },
  ],
  737: [ // Bull Nakano
    { song: 'Bull Nakano Theme', artist: 'Jim Johnston', years: '1994-1995', iconic: false },
  ],
  753: [ // Simon Dean
    { song: 'Simon System', artist: 'Jim Johnston', years: '2004-2006', iconic: false },
  ],
  822: [ // Hurricane Helms & Rosey
    { song: 'Eye of the Hurricane (S.H.I.T.)', artist: 'Jim Johnston', years: '2004-2005', iconic: false },
  ],
  893: [ // Waylon Mercy
    { song: 'Mercy Theme', artist: 'Jim Johnston', years: '1995', iconic: false },
  ],
  894: [ // Duke Droese
    { song: 'The Dumpster', artist: 'Jim Johnston', years: '1994-1996', iconic: false },
  ],
  895: [ // Bertha Faye
    { song: 'Bertha Faye Theme', artist: 'Jim Johnston', years: '1995-1996', iconic: false },
  ],
  914: [ // Wendy Choo
    { song: 'Wendy Choo', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  930: [ // Skinner
    { song: 'Skinner Theme', artist: 'Jim Johnston', years: '1991-1993', iconic: false },
  ],
  931: [ // Bastion Booger
    { song: 'Booger Man', artist: 'Jim Johnston', years: '1993-1994', iconic: false },
  ],
  937: [ // Hakushi
    { song: 'Hakushi Theme', artist: 'Jim Johnston', years: '1994-1996', iconic: false },
  ],
  940: [ // Aldo Montoya
    { song: 'Portuguese Man-O-War', artist: 'Jim Johnston', years: '1994-1997', iconic: false },
  ],
  945: [ // Christy Hemme
    { song: 'When I Grow Up', artist: 'Jim Johnston', years: '2004-2005', iconic: false },
  ],
  958: [ // Summer Rae
    { song: 'Rush of Power', artist: 'CFO$', years: '2013-2017', iconic: false },
  ],
  959: [ // Eva Marie
    { song: 'She Looks Good', artist: 'CFO$', years: '2013-2016', iconic: false },
    { song: 'Eva-Lution', artist: 'def rebel', years: '2021', iconic: false },
  ],
  982: [ // Hugh Morrus
    { song: 'Laughing Man', artist: 'WCW Music', years: '1996-2001 (WCW)', iconic: false },
  ],
  981: [ // Nikkita Lyons
    { song: 'Nikkita Lyons', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1049: [ // Ron Bass
    { song: 'Outlaw Theme', artist: 'Jim Johnston', years: '1988-1989', iconic: false },
  ],
  1055: [ // Henry O. Godwinn
    { song: 'Slop Drop', artist: 'Jim Johnston', years: '1995-1998', iconic: false },
  ],
  1067: [ // Paul Roma
    { song: 'Power and Glory Theme', artist: 'Jim Johnston', years: '1990-1991 (w/ Hercules)', iconic: false },
  ],
  1071: [ // Scott Dawson
    { song: 'Say Yeah (Revival)', artist: 'CFO$', years: '2016-2020', iconic: false },
  ],
  1072: [ // Dash Wilder
    { song: 'Say Yeah (Revival)', artist: 'CFO$', years: '2016-2020', iconic: false },
  ],
  1073: [ // Akam
    { song: 'Pain (AoP)', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  1074: [ // Rezar
    { song: 'Pain (AoP)', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  1075: [ // Erik
    { song: 'Viking War March', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  1077: [ // Angelo Dawkins
    { song: 'Bring the Swag (Street Profits)', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  1079: [ // Darren Young
    { song: 'Making Moves (PTP)', artist: 'Jim Johnston', years: '2012-2016', iconic: false },
  ],
  1088: [ // Kenny Dykstra
    { song: 'Spirit Squad (Let\'s Go)', artist: 'Jim Johnston', years: '2006', iconic: false },
    { song: 'Dykstra Theme', artist: 'Jim Johnston', years: '2007-2008', iconic: false },
  ],
  1091: [ // Blair Davenport
    { song: 'Queen of the Ring', artist: 'def rebel', years: '2023-2024', iconic: false },
  ],
  1095: [ // Kit Wilson
    { song: 'Pretty Deadly', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  1096: [ // Elton Prince
    { song: 'Pretty Deadly', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  1098: [ // Shad Gaspard
    { song: 'Cryme Tyme', artist: 'Jim Johnston', years: '2006-2010', iconic: false },
  ],
  1109: [ // JTG
    { song: 'Cryme Tyme', artist: 'Jim Johnston', years: '2006-2010', iconic: false },
  ],
  1114: [ // Gran Metalik
    { song: 'Lucha House Party', artist: 'CFO$', years: '2018-2022', iconic: false },
  ],
  1115: [ // Lince Dorado
    { song: 'Lucha House Party', artist: 'CFO$', years: '2018-2022', iconic: false },
  ],
  1118: [ // Charlie Dempsey
    { song: 'No Quarters', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1120: [ // Lexis King
    { song: 'Lexis King', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1203: [ // Dr. Death Steve Williams
    { song: 'Dr. Death Theme', artist: 'Jim Johnston', years: '1998-1999', iconic: false },
  ],
  1227: [ // Psicosis
    { song: 'Psicosis Theme', artist: 'WCW Music', years: '1996-2001 (WCW)', iconic: false },
  ],
  1228: [ // Juventud Guerrera
    { song: 'Juvi Juice', artist: 'WCW Music', years: '1997-2001 (WCW)', iconic: false },
  ],
  1235: [ // Jimmy Wang Yang
    { song: 'Redneck', artist: 'Jim Johnston', years: '2006-2010', iconic: false },
  ],
  1236: [ // Shannon Moore
    { song: 'MF2 (Mattitude)', artist: 'Jim Johnston', years: '2003 (w/ Matt Hardy)', iconic: false },
  ],
  1242: [ // Alex Riley
    { song: 'Say It to My Face', artist: 'Downstait', years: '2011-2013', iconic: false },
  ],
  1266: [ // Tony Nese
    { song: 'Premier Athlete', artist: 'CFO$', years: '2017-2021', iconic: false },
  ],
  1268: [ // Jack Gallagher
    { song: 'Gentleman', artist: 'CFO$', years: '2016-2020', iconic: false },
  ],
  1269: [ // Ariya Daivari
    { song: 'Daivari', artist: 'CFO$', years: '2016-2021', iconic: false },
  ],
  1277: [ // Von Wagner
    { song: 'Von Wagner', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  1287: [ // Odyssey Jones
    { song: 'Odyssey Jones', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1297: [ // Joe Gacy
    { song: 'Gacy', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1309: [ // Joaquin Wilde
    { song: 'Legado del Fantasma', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  1310: [ // Cruz Del Toro
    { song: 'Legado del Fantasma', artist: 'def rebel', years: '2021-present', iconic: false },
  ],
  1317: [ // Donovan Dijak
    { song: 'Feast Your Eyes', artist: 'CFO$/def rebel', years: '2018-2024', iconic: false },
  ],
  1336: [ // B-Fab
    { song: 'Hit Row Cypher', artist: 'Hit Row', years: '2021', iconic: false },
  ],
  1337: [ // Top Dolla
    { song: 'Hit Row Cypher', artist: 'Hit Row', years: '2021-2024', iconic: false },
  ],
  1338: [ // Ashante Adonis
    { song: 'Hit Row Cypher', artist: 'Hit Row', years: '2021-2024', iconic: false },
  ],
  1353: [ // Mordecai
    { song: 'Mordecai Theme', artist: 'Jim Johnston', years: '2004', iconic: false },
  ],
  1371: [ // Jordan Devlin
    { song: 'Devlin', artist: 'CFO$/def rebel', years: '2018-2022 (NXT UK)', iconic: false },
  ],
  1372: [ // T-BAR
    { song: 'RETRIBUTION', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1376: [ // Shane Thorne
    { song: 'Thorne', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1379: [ // Bushwhacker Luke
    { song: 'Bushwhacker Stomp', artist: 'Jim Johnston', years: '1988-1996', iconic: false },
  ],
  1380: [ // Bushwhacker Butch
    { song: 'Bushwhacker Stomp', artist: 'Jim Johnston', years: '1988-1996', iconic: false },
  ],
  1381: [ // Hawk
    { song: 'What a Rush (Legion of Doom)', artist: 'Jim Johnston', years: '1990-1998', iconic: true },
  ],
  1382: [ // Animal
    { song: 'What a Rush (Legion of Doom)', artist: 'Jim Johnston', years: '1990-2006', iconic: true },
  ],
  1385: [ // Ax
    { song: 'Demolition', artist: 'Rick Derringer', years: '1987-1991', iconic: true },
  ],
  1391: [ // Oro Mensah
    { song: 'Oro Mensah', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1414: [ // Riley Osborne
    { song: 'Chase U (Chase University)', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1425: [ // Ernest Miller
    { song: 'Somebody Call My Mama', artist: 'WCW Music', years: '1998-2001 (WCW)', iconic: true },
  ],
  1426: [ // Glacier
    { song: 'Glacier (Sub-Zero)', artist: 'WCW Music', years: '1996-1999 (WCW)', iconic: false },
  ],
  1428: [ // Deonna Purrazzo
    { song: 'Virtuosa', artist: 'TNA Music', years: '2020-present (TNA/WWE)', iconic: false },
  ],
  1458: [ // Norman Smiley
    { song: 'Norman Theme (Screamin\' Norman)', artist: 'WCW Music', years: '1998-2001 (WCW)', iconic: false },
  ],
  1475: [ // Kevin Von Erich
    { song: 'Kerry/Kevin Von Erich Theme', artist: 'WCCW Music', years: '1979-1995', iconic: false },
  ],
  1478: [ // Bobby Eaton
    { song: 'Chase (Midnight Express)', artist: 'Giorgio Moroder', years: '1983-1990 (NWA)', iconic: false },
  ],
  1480: [ // Ricky Morton
    { song: 'Rock \'n\' Roll Express Theme', artist: 'NWA/WCW Music', years: '1983-2005', iconic: true },
  ],
  1481: [ // Robert Gibson
    { song: 'Rock \'n\' Roll Express Theme', artist: 'NWA/WCW Music', years: '1983-2005', iconic: false },
  ],
  1485: [ // Brad Armstrong
    { song: 'Armstrong Theme', artist: 'WCW Music', years: '1990-2001 (WCW)', iconic: false },
  ],
  1489: [ // Buddy Roberts
    { song: 'Badstreet USA (Freebirds)', artist: 'Michael PS Hayes', years: '1983-1990', iconic: false },
  ],
  1496: [ // Kevin Sullivan
    { song: 'Sullivan Theme', artist: 'WCW Music', years: '1984-2001 (NWA/WCW)', iconic: false },
  ],
  1530: [ // Scott Norton
    { song: 'nWo Theme', artist: 'Jim Johnston/WCW Music', years: '1997-2001 (WCW nWo)', iconic: false },
  ],
  1557: [ // Sarah Logan
    { song: 'Riott Squad', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  1574: [ // Kid Kash
    { song: 'Kid Kash Theme', artist: 'Harry Slash & The Slashtones', years: '1999-2001 (ECW)', iconic: false },
  ],
  1576: [ // Britt Baker
    { song: 'The Role Model', artist: 'AEW Music', years: '2020-present (AEW)', iconic: true },
  ],
  1578: [ // Darby Allin
    { song: 'I Fell', artist: 'AEW Music', years: '2019-present (AEW)', iconic: true },
  ],
  1590: [ // Hangman Adam Page
    { song: 'Ghost Town Triumph', artist: 'AEW Music', years: '2019-present (AEW)', iconic: true },
  ],
  1594: [ // Rey Fenix
    { song: 'Lucha Brothers', artist: 'AEW Music', years: '2019-present (AEW)', iconic: false },
  ],
  1596: [ // Rosemary
    { song: 'Left Behind', artist: 'TNA Music', years: '2016-present (Impact)', iconic: false },
  ],
  1597: [ // Austin Aries
    { song: 'Ambition and Vision', artist: 'CFO$', years: '2016-2017 (WWE)', iconic: false },
    { song: 'Greatest Man That Ever Lived', artist: 'TNA Music', years: '2012-2016 (TNA)', iconic: false },
  ],
  1616: [ // Mercedes Martinez
    { song: 'Mercedes Martinez', artist: 'def rebel', years: '2020-2022', iconic: false },
  ],
  1626: [ // Serena Deeb
    { song: 'Straight Edge Society', artist: 'Jim Johnston', years: '2010 (w/ CM Punk)', iconic: false },
  ],
  1627: [ // Erick Redbeard
    { song: 'Sheepherder', artist: 'Mark Crozer', years: '2013-2020 (as Erick Rowan)', iconic: false },
  ],
  1629: [ // Jordynne Grace
    { song: 'Grace', artist: 'TNA Music', years: '2018-present (TNA)', iconic: false },
  ],
  1630: [ // Danhausen
    { song: 'Very Nice, Very Evil', artist: 'AEW Music', years: '2022-present', iconic: false },
  ],

  // === Batch 5: WCW/NXT/Misc Known Themes ===
  164: [ // Mean Street Posse
    { song: 'Mean Street Posse Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  174: [ // MNM
    { song: 'MNM (Paparazzi)', artist: 'Jim Johnston', years: '2005-2007', iconic: false },
  ],
  337: [ // Tiger Ali Singh
    { song: 'Singh Theme', artist: 'Jim Johnston', years: '1997-1999', iconic: false },
  ],
  446: [ // Dawn Marie
    { song: 'Dawn Marie Theme', artist: 'Jim Johnston', years: '2002-2005', iconic: false },
  ],
  607: [ // Alexander Wolfe
    { song: 'Sanity', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  608: [ // Marcel Barthel
    { song: 'Imperium (Symphony No. 9)', artist: 'CFO$/def rebel', years: '2019-2022 (NXT)', iconic: false },
  ],
  609: [ // Fabian Aichner
    { song: 'Imperium (Symphony No. 9)', artist: 'CFO$/def rebel', years: '2019-2022 (NXT)', iconic: false },
  ],
  624: [ // Damon Kemp
    { song: 'Diamond Mine', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  643: [ // Lance Cade
    { song: 'Cade & Murdoch', artist: 'Jim Johnston', years: '2005-2008', iconic: false },
  ],
  644: [ // Trevor Murdoch
    { song: 'Cade & Murdoch', artist: 'Jim Johnston', years: '2005-2008', iconic: false },
  ],
  648: [ // The Highlanders
    { song: 'Highlanders Theme', artist: 'Jim Johnston', years: '2006-2008', iconic: false },
  ],
  686: [ // Joe Coffey
    { song: 'Gallus Theme', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  687: [ // Mark Coffey
    { song: 'Gallus Theme', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  688: [ // Wolfgang
    { song: 'Gallus Theme', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  898: [ // Droz
    { song: 'Blood', artist: 'Jim Johnston', years: '1998-1999', iconic: false },
  ],
  904: [ // Luther Reigns
    { song: 'Luther Reigns Theme', artist: 'Jim Johnston', years: '2004-2005', iconic: false },
  ],
  983: [ // Masato Tanaka
    { song: 'Tanaka Theme', artist: 'Harry Slash & The Slashtones', years: '1998-2001 (ECW)', iconic: false },
  ],
  1201: [ // Kurrgan
    { song: 'Oddities Theme (We\'re All Freaks)', artist: 'Insane Clown Posse', years: '1998-1999', iconic: false },
  ],
  1239: [ // David Otunga
    { song: 'We Are One (Nexus)', artist: '12 Stones', years: '2010-2011', iconic: false },
    { song: 'All About the Power', artist: 'Jim Johnston', years: '2011-2013 (solo)', iconic: false },
  ],
  1240: [ // Michael Tarver
    { song: 'We Are One (Nexus)', artist: '12 Stones', years: '2010', iconic: false },
  ],
  1318: [ // Mace
    { song: 'RETRIBUTION', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1319: [ // Slapjack
    { song: 'RETRIBUTION', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1383: [ // Joey Mercury
    { song: 'MNM (Paparazzi)', artist: 'Jim Johnston', years: '2005-2007', iconic: false },
  ],
  1427: [ // Nash Carter
    { song: 'MSK', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  1429: [ // Zack Gibson
    { song: 'GYV', artist: 'def rebel', years: '2019-2022 (Grizzled Young Veterans)', iconic: false },
  ],
  1430: [ // James Drake
    { song: 'GYV', artist: 'def rebel', years: '2019-2022 (Grizzled Young Veterans)', iconic: false },
  ],
  1443: [ // Chris Harris
    { song: 'America\'s Most Wanted', artist: 'TNA Music', years: '2002-2007 (TNA)', iconic: false },
  ],
  1471: [ // Terry Gordy
    { song: 'Badstreet USA (Freebirds)', artist: 'Michael PS Hayes', years: '1983-1993', iconic: false },
  ],
  1487: [ // Tommy Rich
    { song: 'Tommy Rich Theme', artist: 'NWA Music', years: '1979-1992 (NWA)', iconic: false },
  ],
  1501: [ // Axl Rotten
    { song: 'Rotten Theme', artist: 'Harry Slash & The Slashtones', years: '1995-2001 (ECW)', iconic: false },
  ],
  1507: [ // Scotty Riggs
    { song: 'American Males', artist: 'WCW Music', years: '1995-1997 (w/ Bagwell, WCW)', iconic: true },
  ],
  1529: [ // Ice Train
    { song: 'Ice Train Theme', artist: 'WCW Music', years: '1995-1998 (WCW)', iconic: false },
  ],

  // === Batch 5: More Individuals & Legends ===
  186: [ // Kenzo Suzuki
    { song: 'Rising Sun', artist: 'Jim Johnston', years: '2004-2005', iconic: false },
  ],
  301: [ // Fabulous Moolah
    { song: 'Moolah Theme', artist: 'Jim Johnston', years: '1984-2007', iconic: false },
  ],
  313: [ // Mark Jindrak
    { song: 'Jindrak Theme', artist: 'Jim Johnston', years: '2003-2005', iconic: false },
  ],
  314: [ // Kevin Thorn
    { song: 'New Breed (ECW)', artist: 'Jim Johnston', years: '2006-2008', iconic: false },
  ],
  471: [ // Paul Burchill
    { song: 'Burchill Theme', artist: 'Jim Johnston', years: '2006-2010', iconic: false },
  ],
  1022: [ // Buddy Rogers
    { song: 'Nature Boy (Original)', artist: 'Jim Johnston', years: '1960s', iconic: false },
  ],
  1044: [ // Jacques Rougeau
    { song: 'All American Boys', artist: 'Jim Johnston', years: '1988-1990 (Rougeaus)', iconic: false },
    { song: 'The Mountie', artist: 'Jim Johnston', years: '1991-1992', iconic: false },
  ],
  1100: [ // Verne Gagne
    { song: 'Verne Gagne March', artist: 'AWA Music', years: '1960s-1980s (AWA)', iconic: false },
  ],
  1101: [ // Antonio Inoki
    { song: 'Toukon (Fighting Spirit)', artist: 'Muhammad Ali Orchestra', years: '1972-1998', iconic: true },
  ],
  1104: [ // Dory Funk Jr.
    { song: 'Funk Theme', artist: 'NWA/AJPW Music', years: '1970s-1980s', iconic: false },
  ],
  1148: [ // Mr. Saito
    { song: 'Mr. Saito Theme', artist: 'Jim Johnston', years: '1987-1992', iconic: false },
  ],
  1191: [ // Lou Thesz
    { song: 'No dedicated theme', artist: 'Various orchestral', years: '1940s-1960s', iconic: false },
  ],
  1192: [ // The Goon
    { song: 'Goon Theme (Hockey Organ)', artist: 'Jim Johnston', years: '1996-1997', iconic: false },
  ],
  1193: [ // TL Hopper
    { song: 'TL Hopper Theme', artist: 'Jim Johnston', years: '1996-1997', iconic: false },
  ],
  1194: [ // Salvatore Sincere
    { song: 'Sincere Theme', artist: 'Jim Johnston', years: '1996-1997', iconic: false },
  ],
  1195: [ // Freddie Joe Floyd
    { song: 'Freddie Joe Theme', artist: 'Jim Johnston', years: '1996-1997', iconic: false },
  ],
  1205: [ // Skip
    { song: 'Bodydonnas Theme', artist: 'Jim Johnston', years: '1995-1996', iconic: false },
  ],
  1206: [ // Zip
    { song: 'Bodydonnas Theme', artist: 'Jim Johnston', years: '1995-1996', iconic: false },
  ],
  1211: [ // Headbanger Mosh
    { song: 'Headbangers Theme', artist: 'Jim Johnston', years: '1996-2000', iconic: false },
  ],
  1212: [ // Headbanger Thrasher
    { song: 'Headbangers Theme', artist: 'Jim Johnston', years: '1996-2000', iconic: false },
  ],
  1225: [ // Matt Striker
    { song: 'Striker Theme', artist: 'Jim Johnston', years: '2005-2009', iconic: false },
  ],
  1245: [ // Nathan Jones
    { song: 'Colossus', artist: 'Jim Johnston', years: '2003-2004', iconic: false },
  ],
  1254: [ // Mason Ryan
    { song: 'New Nexus', artist: 'Jim Johnston', years: '2011', iconic: false },
  ],
  1445: [ // Man Mountain Rock
    { song: 'Guitar Man', artist: 'Jim Johnston', years: '1995', iconic: false },
  ],
  1469: [ // Wahoo McDaniel
    { song: 'Wahoo Theme', artist: 'NWA Music', years: '1970s-1990s (NWA/WCW)', iconic: false },
  ],
  1472: [ // Magnum T.A.
    { song: 'Magnum Force', artist: 'NWA Music', years: '1984-1986 (NWA)', iconic: false },
  ],
  1492: [ // Daffney
    { song: 'Daffney Scream', artist: 'WCW Music', years: '1999-2001 (WCW)', iconic: false },
  ],
  1519: [ // Mitsuharu Misawa
    { song: 'Spartan X', artist: 'AJPW Music', years: '1985-2009', iconic: true },
  ],
  1520: [ // Kenta Kobashi
    { song: 'Grand Sword', artist: 'AJPW Music', years: '1993-2013', iconic: true },
  ],
  1521: [ // Toshiaki Kawada
    { song: 'Holy War', artist: 'AJPW Music', years: '1990-2010', iconic: true },
  ],
  1522: [ // Jumbo Tsuruta
    { song: 'Jumbo Theme (J)', artist: 'AJPW Music', years: '1972-1999', iconic: true },
  ],
  1523: [ // Genichiro Tenryu
    { song: 'Thunder Storm', artist: 'AJPW Music', years: '1976-2015', iconic: false },
  ],
  1524: [ // Hayabusa
    { song: 'Hayabusa Theme', artist: 'FMW Music', years: '1995-2001', iconic: false },
  ],
  1525: [ // El Hijo del Santo
    { song: 'Santo Theme', artist: 'CMLL Music', years: '1982-2020', iconic: false },
  ],
  1526: [ // Negro Casas
    { song: 'Negro Casas Theme', artist: 'CMLL Music', years: '1979-present', iconic: false },
  ],
  1505: [ // Rikidozan
    { song: 'No dedicated theme', artist: 'Orchestral', years: '1950s-1963', iconic: false },
  ],
  1540: [ // Gorgeous George
    { song: 'Pomp and Circumstance (original use)', artist: 'Edward Elgar', years: '1940s-1962', iconic: true },
  ],

  // === Batch 6: Tag Team Combos & More ===
  121: [ // Test & Albert
    { song: 'T&A Theme', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  122: [ // The Godwinns
    { song: 'Slop Drop', artist: 'Jim Johnston', years: '1995-1998', iconic: false },
  ],
  123: [ // The Headbangers
    { song: 'Headbangers Theme', artist: 'Jim Johnston', years: '1996-2000', iconic: false },
  ],
  159: [ // The Headshrinkers
    { song: 'Headshrinkers Theme', artist: 'Jim Johnston', years: '1992-1994', iconic: false },
  ],
  360: [ // The Wild Samoans
    { song: 'Samoan Theme', artist: 'Jim Johnston', years: '1980-1985', iconic: false },
  ],
  461: [ // Katana Chance
    { song: 'KC Squared', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  462: [ // Kayden Carter
    { song: 'KC Squared', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  531: [ // Sarray
    { song: 'Sarray', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  645: [ // Team Angle
    { song: 'Team Angle (Medal remix)', artist: 'Jim Johnston', years: '2003', iconic: false },
  ],
  654: [ // Primo & Epico
    { song: 'Primo & Epico (Caribbean Cool)', artist: 'Jim Johnston', years: '2012-2014', iconic: false },
  ],
  683: [ // Josh Briggs & Brooks Jensen
    { song: 'Briggs & Jensen', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  689: [ // Danny Burch & Oney Lorcan
    { song: 'Burch & Lorcan', artist: 'CFO$', years: '2020-2021', iconic: false },
  ],
  692: [ // The British Bulldogs
    { song: 'Bulldog March', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  699: [ // The Headshrinkers
    { song: 'Headshrinkers Theme', artist: 'Jim Johnston', years: '1992-1994', iconic: false },
  ],
  750: [ // Paul London & Brian Kendrick
    { song: 'London & Kendrick Theme', artist: 'Jim Johnston', years: '2005-2007', iconic: false },
  ],
  759: [ // The Miz & John Morrison
    { song: 'Miz & Morrison Theme', artist: 'Jim Johnston', years: '2008-2009', iconic: false },
  ],
  786: [ // Karrion Kross & Scarlett
    { song: 'Fall and Pray', artist: 'def rebel', years: '2020-present', iconic: false },
  ],
  810: [ // The Eliminators
    { song: 'Eliminators Theme', artist: 'Harry Slash & The Slashtones', years: '1996-1998 (ECW)', iconic: false },
  ],
  1020: [ // La Resistance
    { song: 'La Résistance (French National Anthem remix)', artist: 'Jim Johnston', years: '2003-2005', iconic: false },
  ],
  1045: [ // Raymond Rougeau
    { song: 'All American Boys (Rougeaus)', artist: 'Jim Johnston', years: '1988-1990', iconic: false },
  ],
  1050: [ // B. Brian Blair
    { song: 'Flight of the Bumblebee (Killer Bees)', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  1051: [ // Jim Brunzell
    { song: 'Flight of the Bumblebee (Killer Bees)', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  1056: [ // Mideon
    { song: 'Ministry of Darkness', artist: 'Jim Johnston', years: '1999 (w/ Undertaker)', iconic: false },
    { song: 'Phineas Godwinn Theme', artist: 'Jim Johnston', years: '1996-1998', iconic: false },
  ],
  1057: [ // Samu
    { song: 'Headshrinkers Theme', artist: 'Jim Johnston', years: '1992-1994', iconic: false },
  ],
  1068: [ // Rosey
    { song: 'S.H.I.T. Theme', artist: 'Jim Johnston', years: '2004-2005 (w/ Hurricane)', iconic: false },
  ],
  1117: [ // Boris Zhukov
    { song: 'Soviet National Anthem (Bolsheviks)', artist: 'Traditional', years: '1987-1990', iconic: false },
  ],
  1121: [ // Sylvain Grenier
    { song: 'La Résistance', artist: 'Jim Johnston', years: '2003-2005', iconic: false },
  ],
  1123: [ // Billy Jack Haynes
    { song: 'Full Nelson Theme', artist: 'Jim Johnston', years: '1986-1988', iconic: false },
  ],
  1131: [ // Iron Mike Sharpe
    { song: 'Iron Mike Theme', artist: 'Jim Johnston', years: '1983-1995', iconic: false },
  ],
  1155: [ // Frenchy Martin
    { song: 'Frenchy Martin Theme', artist: 'Jim Johnston', years: '1986-1989', iconic: false },
  ],
  1156: [ // Tama (Islanders)
    { song: 'Islanders Theme', artist: 'Jim Johnston', years: '1986-1989', iconic: false },
  ],
  1164: [ // Pat Tanaka
    { song: 'Orient Express Theme', artist: 'Jim Johnston', years: '1990-1992', iconic: false },
  ],
  1173: [ // Killer Khan
    { song: 'Killer Khan Theme', artist: 'Jim Johnston', years: '1981-1987', iconic: false },
  ],
  1179: [ // Giant Baba
    { song: 'Giant Baba Theme', artist: 'AJPW Music', years: '1960-1999', iconic: true },
  ],
  1180: [ // Tatsumi Fujinami
    { song: 'Dragon Suplex', artist: 'NJPW Music', years: '1978-2000s', iconic: true },
  ],
  1198: [ // Tori
    { song: 'Tori Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  1222: [ // Rob Conway
    { song: 'Just Look at Me', artist: 'Jim Johnston', years: '2005-2007', iconic: false },
    { song: 'La Résistance', artist: 'Jim Johnston', years: '2003-2005 (w/ Grenier)', iconic: false },
  ],
  1224: [ // Marcus Cor Von
    { song: 'Cor Von Theme', artist: 'Jim Johnston', years: '2007-2008', iconic: false },
  ],
  1226: [ // Mike Knox
    { song: 'Knox Theme', artist: 'Jim Johnston', years: '2008-2010', iconic: false },
  ],
  1238: [ // Vito
    { song: 'Vito Theme', artist: 'Jim Johnston', years: '2006-2007', iconic: false },
  ],
  1243: [ // Kaval
    { song: 'Kaval Theme', artist: 'Jim Johnston', years: '2010', iconic: false },
  ],
  1255: [ // Tyler Reks
    { song: 'Tyler Reks Theme', artist: 'Jim Johnston', years: '2010-2012', iconic: false },
  ],
  1257: [ // Hunico
    { song: 'Hunico Theme', artist: 'Jim Johnston', years: '2011-2014', iconic: false },
  ],
  1258: [ // Scotty Goldman
    { song: 'Goldman Theme', artist: 'Jim Johnston', years: '2008-2009', iconic: false },
  ],
  1259: [ // Trent Barreta
    { song: 'Barreta Theme', artist: 'Jim Johnston', years: '2010-2012', iconic: false },
  ],
  1264: [ // Rosa Mendes
    { song: 'Rosa Mendes Theme', artist: 'Jim Johnston', years: '2009-2016', iconic: false },
  ],
  1274: [ // Robert Stone
    { song: 'Robert Stone Brand', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1281: [ // Sanga
    { song: 'Sanga', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  1282: [ // Ikemen Jiro
    { song: 'Ikemen Jiro', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  1285: [ // Edris Enofe
    { song: 'Enofe & Blade', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1286: [ // Malik Blade
    { song: 'Enofe & Blade', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1292: [ // Brooks Jensen
    { song: 'Jensen', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1295: [ // Jagger Reid
    { song: 'Dyad', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  1296: [ // Rip Fowler
    { song: 'Dyad', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  1322: [ // Deuce
    { song: 'Deuce & Domino (50s Greaser)', artist: 'Jim Johnston', years: '2007-2008', iconic: false },
  ],
  1323: [ // Domino
    { song: 'Deuce & Domino (50s Greaser)', artist: 'Jim Johnston', years: '2007-2008', iconic: false },
  ],
  1324: [ // Reno
    { song: 'Reno Theme', artist: 'WCW Music', years: '2000-2001 (WCW)', iconic: false },
  ],
  1342: [ // Damian Demento
    { song: 'Demento Theme', artist: 'Jim Johnston', years: '1992-1993', iconic: false },
  ],
  1362: [ // El Torito
    { song: 'Olé (Los Matadores)', artist: 'Jim Johnston', years: '2013-2016', iconic: false },
  ],
  1363: [ // Shanky
    { song: 'Shanky', artist: 'def rebel', years: '2021-2022', iconic: false },
  ],
  1367: [ // Steve Corino
    { song: 'Corino Theme', artist: 'Harry Slash & The Slashtones', years: '1998-2001 (ECW)', iconic: false },
  ],
  1368: [ // CW Anderson
    { song: 'Anderson Theme', artist: 'Harry Slash & The Slashtones', years: '1999-2001 (ECW)', iconic: false },
  ],
  1370: [ // Simon Gotch
    { song: 'Vaudevillains', artist: 'CFO$', years: '2015-2017', iconic: false },
  ],
  1384: [ // Epico Colon
    { song: 'Primo & Epico', artist: 'Jim Johnston', years: '2012-2014', iconic: false },
  ],
  1387: [ // Mo
    { song: 'Men on a Mission', artist: 'Jim Johnston', years: '1993-1996', iconic: false },
  ],
  1388: [ // Bull Buchanan
    { song: 'Right to Censor', artist: 'Jim Johnston', years: '2000-2001', iconic: false },
  ],
  1392: [ // Jakara Jackson
    { song: 'Jakara Jackson', artist: 'def rebel', years: '2023-present', iconic: false },
  ],
  1393: [ // Kiana James
    { song: 'Kiana James', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1396: [ // Veer Mahaan
    { song: 'Veer Mahaan', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  1399: [ // Arianna Grace
    { song: 'Arianna Grace', artist: 'def rebel', years: '2023-2024', iconic: false },
  ],
  1401: [ // Outback Jack
    { song: 'Outback Jack Theme', artist: 'Jim Johnston', years: '1987-1988', iconic: false },
  ],
  1406: [ // Dan Spivey
    { song: 'Waylon Mercy Theme', artist: 'Jim Johnston', years: '1995 (as Waylon Mercy)', iconic: false },
    { song: 'Skyscrapers Theme', artist: 'Jim Johnston/WCW', years: '1989-1990 (WCW)', iconic: false },
  ],
  1424: [ // Tiger Mask
    { song: 'Tiger Mask Theme', artist: 'NJPW Music', years: '1981-present', iconic: true },
  ],
  1432: [ // Tank Ledger
    { song: 'Tank Ledger', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1433: [ // Hank Walker
    { song: 'Hank Walker', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1441: [ // Dani Palmer
    { song: 'Dani Palmer', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1448: [ // Johnny Stamboli
    { song: 'Full Blooded Italians (FBI)', artist: 'Harry Slash', years: '1999-2001 (ECW)', iconic: false },
  ],
  1449: [ // Brian Adams
    { song: 'KroniK Theme', artist: 'WCW Music', years: '2000-2001 (WCW)', iconic: false },
  ],
  1450: [ // Bryan Clark
    { song: 'KroniK Theme', artist: 'WCW Music', years: '2000-2001 (WCW)', iconic: false },
  ],
  1451: [ // Elix Skipper
    { song: 'Skipper Theme', artist: 'WCW Music', years: '2000-2001 (WCW)', iconic: false },
  ],
  1452: [ // Kwee Wee
    { song: 'Kwee Wee Theme', artist: 'WCW Music', years: '2000-2001 (WCW)', iconic: false },
  ],
  1453: [ // Dave Mastiff
    { song: 'Dave Mastiff', artist: 'def rebel', years: '2019-2022 (NXT UK)', iconic: false },
  ],
  1454: [ // Eddie Dennis
    { song: 'Eddie Dennis', artist: 'def rebel', years: '2019-2021 (NXT UK)', iconic: false },
  ],
  1455: [ // Aoife Valkyrie
    { song: 'Aoife Valkyrie', artist: 'def rebel', years: '2020-2022 (NXT UK)', iconic: false },
  ],
  1473: [ // Ole Anderson
    { song: 'Four Horsemen Theme', artist: 'NWA/WCW Music', years: '1985-1993 (NWA)', iconic: false },
  ],
  1474: [ // Fritz Von Erich
    { song: 'Von Erich Theme', artist: 'WCCW Music', years: '1960s-1982', iconic: false },
  ],
  1479: [ // Stan Lane
    { song: 'Chase (Midnight Express)', artist: 'Giorgio Moroder', years: '1987-1990 (NWA)', iconic: false },
  ],
  1488: [ // Dennis Condrey
    { song: 'Chase (Midnight Express)', artist: 'Giorgio Moroder', years: '1983-1987 (NWA)', iconic: false },
  ],
  1499: [ // Jimmy Garvin
    { song: 'Badstreet USA (Freebirds)', artist: 'Michael PS Hayes', years: '1989-1993 (WCW)', iconic: false },
  ],
  1498: [ // Baron Von Raschke
    { song: 'The Claw', artist: 'AWA Music', years: '1970s-1980s (AWA)', iconic: false },
  ],
  1509: [ // 911
    { song: '911 Theme', artist: 'Harry Slash & The Slashtones', years: '1994-1996 (ECW)', iconic: false },
  ],
  1512: [ // Rocco Rock
    { song: 'Public Enemy No. 1', artist: 'Harry Slash', years: '1994-1999 (ECW)', iconic: false },
  ],
  1513: [ // Johnny Grunge
    { song: 'Public Enemy No. 1', artist: 'Harry Slash', years: '1994-1999 (ECW)', iconic: false },
  ],
  1560: [ // Akira Taue
    { song: 'Akira Taue Theme', artist: 'AJPW Music', years: '1988-2013', iconic: false },
  ],
  1581: [ // Mike Kanellis
    { song: 'Power of Love', artist: 'CFO$', years: '2017-2020', iconic: false },
  ],
  1588: [ // Sha Samuels
    { song: 'Sha Samuels', artist: 'def rebel', years: '2021-2022 (NXT UK)', iconic: false },
  ],
  1589: [ // Joseph Conners
    { song: 'Joseph Conners', artist: 'def rebel', years: '2019-2021 (NXT UK)', iconic: false },
  ],
  1591: [ // Emilia McKenzie
    { song: 'Emilia McKenzie', artist: 'def rebel', years: '2022-2023 (NXT UK)', iconic: false },
  ],
  1603: [ // Pierre Carl Ouellet
    { song: 'Quebecers Theme', artist: 'Jim Johnston', years: '1993-1994', iconic: false },
  ],
  1604: [ // The Young Stallions
    { song: 'Young Stallions Theme', artist: 'Jim Johnston', years: '1986-1988', iconic: false },
  ],
  1607: [ // Wesley Blake
    { song: 'Blake & Murphy', artist: 'CFO$', years: '2015-2016', iconic: false },
  ],
  1608: [ // Scorpio Sky
    { song: 'SCU (SoCal Uncensored)', artist: 'AEW Music', years: '2019-2022 (AEW)', iconic: false },
  ],
  1102: [ // Abdullah the Butcher
    { song: 'No dedicated theme', artist: 'Various', years: '1960s-2010s', iconic: false },
  ],
  1027: [ // Larry Zbyszko
    { song: 'Zbyszko Theme', artist: 'WCW Music', years: '1989-2001 (WCW/AWA)', iconic: false },
  ],
  1029: [ // Ken Patera
    { song: 'Olympic Theme', artist: 'Jim Johnston', years: '1984-1988', iconic: false },
  ],
  1030: [ // Ivan Putski
    { song: 'Polish National Anthem (arr.)', artist: 'Jim Johnston', years: '1977-1987', iconic: false },
  ],
  1036: [ // The Dynamite Kid
    { song: 'Bulldog March (British Bulldogs)', artist: 'Jim Johnston', years: '1985-1988', iconic: false },
  ],
  1053: [ // Bart Gunn
    { song: 'Smoking Gunns Theme', artist: 'Jim Johnston', years: '1993-1996', iconic: false },
    { song: 'Brawl for All', artist: 'Jim Johnston', years: '1998-1999 (solo)', iconic: false },
  ],
  1058: [ // Rockin Robin
    { song: 'Rockin\' Robin (Bobby Day)', artist: 'Bobby Day', years: '1988-1990', iconic: false },
  ],
  328: [ // Hiromu Takahashi
    { song: 'Time Bomb', artist: 'NJPW Music', years: '2016-present', iconic: false },
  ],
  352: [ // Stan Hansen
    { song: 'Sunrise', artist: 'Spectrum', years: '1981-2000', iconic: true },
  ],
  1003: [ // Aksana
    { song: 'Aksana Theme', artist: 'Jim Johnston', years: '2011-2014', iconic: false },
  ],
  1018: [ // Aja Kong
    { song: 'Jungle Emperor (Aja Kong)', artist: 'AJW Music', years: '1986-present', iconic: false },
  ],
  476: [ // Cameron
    { song: 'Somebody Call My Mama (Funkadactyls)', artist: 'Jim Johnston', years: '2012-2016', iconic: false },
  ],
  447: [ // Nidia
    { song: 'Tough Enough Winner', artist: 'Jim Johnston', years: '2002-2004', iconic: false },
  ],
  1151: [ // Sam Houston
    { song: 'Sam Houston Theme', artist: 'Jim Johnston', years: '1987-1989', iconic: false },
  ],
  1221: [ // Matt Morgan
    { song: 'Matt Morgan Theme', artist: 'Jim Johnston', years: '2003-2005', iconic: false },
  ],
  892: [ // Mantaur
    { song: 'Mantaur Theme', artist: 'Jim Johnston', years: '1995', iconic: false },
  ],
  933: [ // Max Moon
    { song: 'Max Moon Theme (Space)', artist: 'Jim Johnston', years: '1992-1993', iconic: false },
  ],
  1585: [ // Adriana Rizzo
    { song: 'Adriana Rizzo', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1311: [ // Scrypts
    { song: 'Scrypts', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  948: [ // Ashley Massaro
    { song: 'Let Me Show You', artist: 'Jim Johnston', years: '2005-2008', iconic: false },
  ],
  928: [ // Sapphire
    { song: 'Sapphire Theme', artist: 'Jim Johnston', years: '1990-1991', iconic: false },
  ],
  1284: [ // Xyon Quinn
    { song: 'Xyon Quinn', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  1283: [ // Boa
    { song: 'Boa', artist: 'def rebel', years: '2020-2023', iconic: false },
  ],
  1288: [ // Dante Chen
    { song: 'Dante Chen', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  673: [ // Elektra Lopez
    { song: 'Legado del Fantasma', artist: 'def rebel', years: '2021-2023', iconic: false },
  ],
  615: [ // Jinny
    { song: 'Jinny', artist: 'def rebel', years: '2019-2022 (NXT UK)', iconic: false },
  ],
  611: [ // Mark Andrews & Flash Morgan Webster
    { song: 'Andrews & Webster', artist: 'def rebel', years: '2019-2022 (NXT UK)', iconic: false },
  ],
  1416: [ // Ricky Ortiz
    { song: 'Rally Up', artist: 'Jim Johnston', years: '2008-2009', iconic: false },
  ],
  1417: [ // DJ Gabriel
    { song: 'DJ Gabriel Theme', artist: 'Jim Johnston', years: '2008-2009', iconic: false },
  ],
  1408: [ // Chris Nowinski
    { song: 'Nowinski Theme', artist: 'Jim Johnston', years: '2002-2003', iconic: false },
  ],
  1555: [ // Brad Maddox
    { song: 'Maddox Theme', artist: 'Jim Johnston', years: '2012-2015', iconic: false },
  ],
  1556: [ // Taryn Terrell
    { song: 'Taryn Terrell', artist: 'TNA Music', years: '2013-2016 (TNA)', iconic: false },
  ],
  1103: [ // Carlos Colon
    { song: 'Carlos Colon Theme', artist: 'WWC Music', years: '1970s-2000s (WWC)', iconic: false },
  ],
  1099: [ // Nick Bockwinkel
    { song: 'Bockwinkel Theme', artist: 'AWA Music', years: '1970s-1987 (AWA)', iconic: false },
  ],
  1470: [ // Dick Murdoch
    { song: 'Texas Outlaws', artist: 'NWA Music', years: '1970s-1990s', iconic: false },
  ],
  1537: [ // Buzz Sawyer
    { song: 'Buzz Sawyer Theme', artist: 'NWA Music', years: '1983-1989 (NWA)', iconic: false },
  ],
  1476: [ // David Von Erich
    { song: 'Von Erich Theme', artist: 'WCCW Music', years: '1977-1984', iconic: false },
  ],
  784: [ // Maxxine Dupri
    { song: 'Maximum Male Models', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  934: [ // Gobbledy Gooker
    { song: 'Turkey in the Straw', artist: 'Traditional', years: '1990', iconic: false },
  ],
  1025: [ // Tony Atlas
    { song: 'Tony Atlas Theme', artist: 'Jim Johnston', years: '1983-2008', iconic: false },
  ],
  1028: [ // Ernie Ladd
    { song: 'Ernie Ladd Theme', artist: 'Various', years: '1960s-1980s', iconic: false },
  ],
  1126: [ // Tonga Kid
    { song: 'Tonga Kid Theme', artist: 'Jim Johnston', years: '1984-1986', iconic: false },
  ],
  1127: [ // Corporal Kirchner
    { song: 'Kirchner March', artist: 'Jim Johnston', years: '1985-1987', iconic: false },
  ],
  1124: [ // Jim Powers
    { song: 'Young Stallions Theme', artist: 'Jim Johnston', years: '1986-1988 (w/ Roma)', iconic: false },
  ],
  1511: [ // Tony Mamaluke
    { song: 'FBI (Full Blooded Italians)', artist: 'Harry Slash', years: '2000-2001 (ECW)', iconic: false },
  ],
  1289: [ // Channing Lorenzo
    { song: 'D\'Angelo Family', artist: 'def rebel', years: '2022-present', iconic: false },
  ],
  1290: [ // Luca Crusifino
    { song: 'D\'Angelo Family', artist: 'def rebel', years: '2022-2024', iconic: false },
  ],
  1300: [ // Wren Sinclair
    { song: 'No Quarter Catch Crew', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1301: [ // Tavion Heights
    { song: 'Tavion Heights', artist: 'def rebel', years: '2024-present', iconic: false },
  ],

  // === Batch 7: Final identifiable entries ===
  351: [ // Mil Mascaras
    { song: 'Sky High', artist: 'Jigsaw', years: '1975-2000s', iconic: true },
  ],
  355: [ // Ivan Koloff
    { song: 'Russian March', artist: 'NWA/WWF Music', years: '1970s-1990s', iconic: false },
  ],
  467: [ // Ricardo Rodriguez
    { song: 'Realeza (w/ Alberto Del Rio)', artist: 'Jim Johnston', years: '2011-2014', iconic: false },
  ],
  614: [ // Amale
    { song: 'Amale', artist: 'def rebel', years: '2021-2022 (NXT UK)', iconic: false },
  ],
  681: [ // Indus Sher
    { song: 'Indus Sher', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  685: [ // Hank Walker & Tank Ledger
    { song: 'Hank & Tank', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  698: [ // Well Dunn
    { song: 'Well Dunn Theme', artist: 'Jim Johnston', years: '1994-1995', iconic: false },
  ],
  719: [ // The Godfather & D'Lo Brown
    { song: 'Pimpin\' Ain\'t Easy', artist: 'Jim Johnston', years: '2000', iconic: false },
  ],
  744: [ // Kurt Angle & Chris Benoit
    { song: 'Medal (Team Angle)', artist: 'Jim Johnston', years: '2002', iconic: false },
  ],
  756: [ // Cesaro & Tyson Kidd
    { song: 'Cesaro/Kidd Theme', artist: 'CFO$', years: '2014-2015', iconic: false },
  ],
  777: [ // Sheamus & Cesaro
    { song: 'The Bar', artist: 'CFO$', years: '2017-2019', iconic: false },
  ],
  783: [ // Otis & Chad Gable
    { song: 'Alpha Academy', artist: 'def rebel', years: '2021-2024', iconic: false },
  ],
  803: [ // The Colossal Connection
    { song: 'Colossal Connection Theme', artist: 'Jim Johnston', years: '1989-1990', iconic: false },
  ],
  912: [ // Javier Bernal
    { song: 'Bernal', artist: 'def rebel', years: '2022-2023', iconic: false },
  ],
  995: [ // Sensational Sherri
    { song: 'Sensational Sherri Theme', artist: 'Jim Johnston', years: '1987-1993', iconic: false },
  ],
  1106: [ // Gerald Brisco
    { song: 'Brisco Brothers Theme', artist: 'Jim Johnston', years: '1984-2001', iconic: false },
  ],
  1149: [ // The Sheik
    { song: 'Sheik Theme', artist: 'Various', years: '1960s-1980s', iconic: false },
  ],
  1150: [ // Ox Baker
    { song: 'Ox Baker Theme', artist: 'Various', years: '1970s-1980s', iconic: false },
  ],
  1162: [ // Moondog Rex
    { song: 'Moondogs Theme', artist: 'Jim Johnston', years: '1981-1986', iconic: false },
  ],
  1163: [ // Moondog Spot
    { song: 'Moondogs Theme', artist: 'Jim Johnston', years: '1981-1986', iconic: false },
  ],
  1166: [ // Jimmy Valiant
    { song: 'Boys from New York City', artist: 'The Ad Libs', years: '1979-1992 (NWA/WWF)', iconic: true },
  ],
  1197: [ // Jonathan Coachman
    { song: 'Coach Theme', artist: 'Jim Johnston', years: '2005-2008', iconic: false },
  ],
  1214: [ // Pete Gas
    { song: 'Mean Street Posse Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  1215: [ // Rodney
    { song: 'Mean Street Posse Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  1216: [ // Joey Abs
    { song: 'Mean Street Posse Theme', artist: 'Jim Johnston', years: '1999-2001', iconic: false },
  ],
  1217: [ // Chainz
    { song: 'Disciples of Apocalypse', artist: 'Jim Johnston', years: '1997-1998', iconic: false },
  ],
  1218: [ // 8-Ball
    { song: 'Disciples of Apocalypse', artist: 'Jim Johnston', years: '1997-1998', iconic: false },
  ],
  1219: [ // Skull
    { song: 'Disciples of Apocalypse', artist: 'Jim Johnston', years: '1997-1998', iconic: false },
  ],
  1229: [ // Katie Lea Burchill
    { song: 'Burchill Theme', artist: 'Jim Johnston', years: '2008-2010', iconic: false },
  ],
  1230: [ // Danny Basham
    { song: 'Basham Brothers Theme', artist: 'Jim Johnston', years: '2003-2006', iconic: false },
  ],
  1231: [ // Doug Basham
    { song: 'Basham Brothers Theme', artist: 'Jim Johnston', years: '2003-2006', iconic: false },
  ],
  1247: [ // Armando Estrada
    { song: 'Estrada Theme', artist: 'Jim Johnston', years: '2006-2008', iconic: false },
  ],
  1248: [ // Sylvester Terkay
    { song: 'Terkay Theme', artist: 'Jim Johnston', years: '2006-2007', iconic: false },
  ],
  1377: [ // Nick Miller
    { song: 'TM61', artist: 'CFO$', years: '2016-2018 (NXT)', iconic: false },
  ],
  1378: [ // Arturo Ruas
    { song: 'Arturo Ruas', artist: 'def rebel', years: '2020-2021', iconic: false },
  ],
  1407: [ // David Flair
    { song: 'Flair Theme (remix)', artist: 'WCW Music', years: '1999-2001 (WCW)', iconic: false },
  ],
  1415: [ // Jimmy Del Ray
    { song: 'Heavenly Bodies Theme', artist: 'Jim Johnston', years: '1993-1995', iconic: false },
  ],
  1423: [ // Pierre
    { song: 'Quebecers Theme', artist: 'Jim Johnston', years: '1993-1994', iconic: false },
  ],
  1444: [ // Maxine
    { song: 'Maxine Theme', artist: 'Jim Johnston', years: '2011-2012', iconic: false },
  ],
  1486: [ // Tracy Smothers
    { song: 'FBI (Full Blooded Italians)', artist: 'ECW Music', years: '1999-2001 (ECW)', iconic: false },
  ],
  1491: [ // Crowbar
    { song: 'Crowbar Theme', artist: 'WCW Music', years: '1999-2001 (WCW)', iconic: false },
  ],
  1515: [ // Lenny Lane
    { song: 'Lenny Lane Theme', artist: 'WCW Music', years: '1999-2001 (WCW)', iconic: false },
  ],
  1516: [ // Lodi
    { song: 'Lodi Theme', artist: 'WCW Music', years: '1998-2001 (WCW)', iconic: false },
  ],
  1517: [ // Bunkhouse Buck
    { song: 'Bunkhouse Buck Theme', artist: 'WCW Music', years: '1994-1996 (WCW)', iconic: false },
  ],
  1532: [ // Hector Guerrero
    { song: 'Gobbledy Gooker / Guerrero Theme', artist: 'WCW Music', years: '1990s (WCW)', iconic: false },
  ],
  1534: [ // Chavo Guerrero Sr.
    { song: 'Guerrero Theme', artist: 'NWA/WCW Music', years: '1970s-1990s', iconic: false },
  ],
  1564: [ // Dave Taylor
    { song: 'Dave Taylor Theme', artist: 'WCW Music', years: '1995-2001 (WCW)', iconic: false },
  ],
  1602: [ // The Moondogs
    { song: 'Moondogs Theme', artist: 'Jim Johnston', years: '1981-1986', iconic: false },
  ],
  1654: [ // Adam Pearce
    { song: 'No entrance music (authority figure)', artist: 'N/A', years: '2020-present', iconic: false },
  ],
  185: [ // William Regal & Eugene
    { song: 'He\'s a Man (w/ Regal solo)', artist: 'Jim Johnston', years: '2004-2005', iconic: false },
  ],
  1293: [ // Josh Briggs
    { song: 'Briggs', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1400: [ // Izzi Dame
    { song: 'Izzi Dame', artist: 'def rebel', years: '2023-2024', iconic: false },
  ],
  1558: [ // Myles Borne
    { song: 'Chase U (Chase University)', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1631: [ // Bronco Nima
    { song: 'OTM', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1632: [ // Dion Lennox
    { song: 'OTM', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1637: [ // Kendal Grey
    { song: 'Kendal Grey', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1643: [ // JC Mateo
    { song: 'JC Mateo', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1650: [ // Royce Keys
    { song: 'Royce Keys', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1651: [ // Blake Monroe
    { song: 'Blake Monroe', artist: 'def rebel', years: '2024-present', iconic: false },
  ],

  // -- AUTO-GENERATED: Missing theme entries --
  145: [ // Bobby Heenan
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  146: [ // Jim Cornette
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  231: [ // Jim Ross
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1997-2002', iconic: false },
  ],
  302: [ // Mae Young
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  346: [ // Gorilla Monsoon
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  347: [ // Pat Patterson
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  356: [ // Chief Jay Strongbow
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  357: [ // Blackjack Mulligan
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  359: [ // The Valiant Brothers
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  674: [ // Stevie Turner
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  679: [ // Persia Pirotta
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  732: [ // Sharmell
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  745: [ // Rey Mysterio & Rob Van Dam
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  771: [ // Batista & Rey Mysterio
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  829: [ // Corey Graves
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  830: [ // Michael Cole
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  943: [ // Nicole Bass
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  974: [ // Eric Bischoff
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  975: [ // Teddy Long
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  977: [ // Linda McMahon
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  997: [ // Debra
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1001: [ // Killer Kowalski
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1002: [ // Freddie Blassie
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1012: [ // John Laurinaitis
    { song: 'WWE Theme', artist: 'Jim Johnston', years: '2008-2014', iconic: false },
  ],
  1013: [ // Slick
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1026: [ // Bobo Brazil
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1031: [ // Tony Garea
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1032: [ // Professor Toru Tanaka
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1033: [ // Arnold Skaaland
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1105: [ // Jack Brisco
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1122: [ // Stan Stasiak
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1125: [ // S.D. Jones
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1128: [ // Velvet McIntyre
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1129: [ // Leilani Kai
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1130: [ // Judy Martin
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1133: [ // Blackjack Lanza
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1134: [ // Peter Maivia
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1135: [ // Baron Mikel Scicluna
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1136: [ // Haystacks Calhoun
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1137: [ // Swede Hanson
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1138: [ // Spiros Arion
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1139: [ // Waldo Von Erich
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1141: [ // Dean Ho
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1142: [ // Victor Rivera
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1143: [ // King Curtis Iaukea
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1144: [ // The Executioners
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1145: [ // Johnny Rodz
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1154: [ // Dominic DeNucci
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1157: [ // Tiger Chung Lee
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1158: [ // Sivi Afi
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1159: [ // Cousin Luke
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1160: [ // Uncle Elmer
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1165: [ // Johnny Valiant
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1168: [ // David Sammartino
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1169: [ // Lord Alfred Hayes
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1171: [ // Pete Rose
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1175: [ // Salvatore Bellomo
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1176: [ // Jose Luis Rivera
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1177: [ // Rick McGraw
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1178: [ // Antonino Rocca
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1181: [ // Crusher Blackwell
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1182: [ // Larry Hennig
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1183: [ // Buddy Rose
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1184: [ // Tony Altimore
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1186: [ // Billy White Wolf
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1187: [ // Rene Goulet
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1188: [ // Karl Gotch
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1189: [ // The Mongols
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1190: [ // Moondog King
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1213: [ // Giant Silva
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1232: [ // Rodney Mack
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1234: [ // Jesse
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1246: [ // Sean O'Haire
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1251: [ // Percy Watson
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1252: [ // Lucky Cannon
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1253: [ // Byron Saxton
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1260: [ // Caylen Croft
    { song: 'WWE Theme', artist: 'Jim Johnston', years: '2008-2014', iconic: false },
  ],
  1261: [ // Manu
    { song: 'WWE Theme', artist: 'Jim Johnston', years: '2008-2014', iconic: false },
  ],
  1262: [ // Sim Snuka
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1263: [ // Richie Steamboat
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1291: [ // Adrianna Reese
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1299: [ // Brinley Reece
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1302: [ // Tyriek Igwe
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1303: [ // Tyson Dupont
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1312: [ // Guru Raaj
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1314: [ // Valentina Feroz
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1315: [ // Yulisa Leon
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1343: [ // Mr. T
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1346: [ // Lawrence Taylor
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1347: [ // Floyd Mayweather
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1348: [ // Tyson Fury
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1349: [ // Cain Velasquez
    { song: 'WWE Theme', artist: 'def rebel', years: '2019-present', iconic: false },
  ],
  1350: [ // Drew Carey
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1373: [ // Snooki
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1374: [ // Johnny Knoxville
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1375: [ // Rob Gronkowski
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1395: [ // Danny Davis
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1398: [ // Je'Von Evans
    { song: 'NXT Theme', artist: 'CFO$', years: '2014-2022', iconic: false },
  ],
  1409: [ // Daniel Puder
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1410: [ // Matt Cappotelli
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1412: [ // Mikey
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1418: [ // Karl Malone
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1419: [ // Dennis Rodman
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1420: [ // Kevin Federline
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1421: [ // Stephen Amell
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1422: [ // Maria Menounos
    { song: 'Celebrity Entrance', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1466: [ // Francine
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1997-2002', iconic: false },
  ],
  1467: [ // Zeb Colter
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1482: [ // Ray Stevens
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1483: [ // Dick the Bruiser
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1484: [ // The Crusher
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1490: [ // Silver King
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1493: [ // J.J. Dillon
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1494: [ // Sakoda
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1497: [ // Danny Hodge
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1500: [ // Bob Armstrong
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1502: [ // Skandor Akbar
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1514: [ // Mike Sanders
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1527: [ // Blue Panther
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1528: [ // Sgt. Craig Pittman
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1531: [ // Villano III
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1533: [ // Mando Guerrero
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1535: [ // Mark Lewin
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1536: [ // Dutch Savage
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1539: [ // Stu Hart
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1541: [ // Mad Dog Vachon
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1542: [ // Bill Watts
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1550: [ // Andy Kaufman
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1970s-1980s', iconic: false },
  ],
  1552: [ // Jackie Gayda
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1553: [ // Linda Miles
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '2000s', iconic: false },
  ],
  1561: [ // Frankie Williams
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1562: [ // Jay Youngblood
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1565: [ // Reby Hardy
    { song: 'WWE Theme', artist: 'def rebel', years: '2014-2019', iconic: false },
  ],
  1568: [ // Jesús
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1571: [ // Jack Victory
    { song: 'No Chance in Hell', artist: 'WWE Music Group', years: '1997-2002', iconic: false },
  ],
  1572: [ // Vic Grimes
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1573: [ // Mustafa Saed
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1579: [ // Dos Caras
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1580: [ // Jules Strongbow
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1583: [ // Katie Lea
    { song: 'WWE Theme', artist: 'Jim Johnston', years: '2008-2014', iconic: false },
  ],
  1592: [ // The Funkettes
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1593: [ // Kim Chee
    { song: 'WWF Theme', artist: 'WWE Music Group', years: '1985-1993', iconic: false },
  ],
  1598: [ // Pat O'Connor
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1599: [ // Scott Putski
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1600: [ // The Yukon Lumberjacks
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1605: [ // Greg Gagne
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1606: [ // Butterbean
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1609: [ // Gene Kiniski
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1610: [ // Wally Karbo
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1611: [ // Dory Funk Sr.
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1612: [ // Miguel Perez
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1613: [ // The Destroyer
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1614: [ // Louis Cerdan
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1618: [ // Eddie Gilbert
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1619: [ // Ian Rotten
    { song: 'WWF Attitude Theme', artist: 'Jim Johnston', years: '1997-2002', iconic: false },
  ],
  1620: [ // Devastation Inc.
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1621: [ // The Sharpe Brothers
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1622: [ // The Stud Stable
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1623: [ // Toots Mondt
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1624: [ // Paul Vachon
    { song: 'WWE Theme', artist: 'WWE Music Group', years: '2019-present', iconic: false },
  ],
  1633: [ // Elio LeFleur
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1634: [ // Saquon Shugars
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1635: [ // Osiris Griffin
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1636: [ // Shiloh Hill
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1638: [ // Niko Vance
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1639: [ // Fahd Tuwaiq
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1640: [ // Skylar Raye
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1641: [ // Sirena Linton
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1642: [ // Bayley Humphrey
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1644: [ // Keanu Carver
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1645: [ // Kale Dixon
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1647: [ // Jackson Drake
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1648: [ // Jasper Troy
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1649: [ // Lainey Reid
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1653: [ // Ulka Sasaki
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1658: [ // Dorian Van Dux
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1659: [ // Jax Presley
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1661: [ // PJ Vasa
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1662: [ // Rayne Leverkusen
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1663: [ // Shady Elnahas
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1664: [ // Cyrus
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1665: [ // Mike Cunningham
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1666: [ // Sam Holloway
    { song: 'NXT Theme', artist: 'def rebel', years: '2024-present', iconic: false },
  ],
  1116: [ // Ed Ferrara
    { song: 'WCW Generic Theme', artist: 'WCW Music', years: '1999-2001', iconic: false },
  ],
  1667: [ // The Mexicools
    { song: 'Mexican Riding Lawnmower Theme', artist: 'WWE Music Group', years: '2005-2006', iconic: false },
  ],
};

export default THEMES;
