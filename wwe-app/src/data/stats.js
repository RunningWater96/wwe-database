// WWE Career Statistics — keyed by wrestler ID
// Sources: Cagematch, ProFightDB, WWE.com, Bleacher Report, Sportskeeda
// Stats are WWE/WWF/WWWF career totals (approximate where exact records unavailable)
// wins/losses/draws = career W-L-D record
// ppvMatches = televised PPV/PLE matches; mainEvents = PPV/PLE main events
// rumbleAppearances / rumbleEliminations = Royal Rumble match stats
// longestReign = longest single title reign in days
// longestReignTitle = which title for that reign

const WRESTLER_STATS = {
  // ── WWWF / PRE-GOLDEN ──
  1: { // Bruno Sammartino
    wins: 1850, losses: 120, draws: 35, totalMatches: 2005,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 2803, longestReignTitle: 'WWWF Championship',
    yearsActive: '1959–1981', careerSpanYears: 22, wweDebut: '1959',
  },
  2: { // Pedro Morales
    wins: 950, losses: 200, draws: 20, totalMatches: 1170,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 1027, longestReignTitle: 'WWWF Championship',
    yearsActive: '1970–1987', careerSpanYears: 17, wweDebut: '1970',
  },
  3: { // Bob Backlund
    wins: 750, losses: 150, draws: 25, totalMatches: 925,
    ppvMatches: 3, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 2135, longestReignTitle: 'WWF Championship',
    yearsActive: '1977–2000', careerSpanYears: 23, wweDebut: '1977',
  },
  354: { // Superstar Billy Graham
    wins: 350, losses: 180, draws: 10, totalMatches: 540,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 296, longestReignTitle: 'WWWF Championship',
    yearsActive: '1977–1988', careerSpanYears: 11, wweDebut: '1977',
  },
  347: { // Pat Patterson
    wins: 400, losses: 200, draws: 15, totalMatches: 615,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 127, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1979–1984', careerSpanYears: 5, wweDebut: '1979',
  },

  // ── GOLDEN ERA ──
  4: { // Hulk Hogan
    wins: 1598, losses: 395, draws: 136, totalMatches: 2129,
    ppvMatches: 60, mainEvents: 20,
    rumbleAppearances: 6, rumbleEliminations: 12,
    longestReign: 1474, longestReignTitle: 'WWF Championship',
    yearsActive: '1979–2003', careerSpanYears: 24, wweDebut: '1979',
  },
  6: { // André the Giant
    wins: 900, losses: 100, draws: 30, totalMatches: 1030,
    ppvMatches: 8, mainEvents: 4,
    rumbleAppearances: 1, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1973–1992', careerSpanYears: 19, wweDebut: '1973',
  },
  5: { // Randy Savage
    wins: 780, losses: 410, draws: 15, totalMatches: 1205,
    ppvMatches: 35, mainEvents: 12,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 371, longestReignTitle: 'WWF Championship',
    yearsActive: '1985–1994', careerSpanYears: 9, wweDebut: '1985',
  },
  12: { // Ultimate Warrior
    wins: 425, losses: 120, draws: 5, totalMatches: 550,
    ppvMatches: 18, mainEvents: 8,
    rumbleAppearances: 3, rumbleEliminations: 6,
    longestReign: 293, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1987–1998', careerSpanYears: 11, wweDebut: '1987',
  },
  9: { // Ted DiBiase
    wins: 580, losses: 380, draws: 12, totalMatches: 972,
    ppvMatches: 22, mainEvents: 4,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1979–1993', careerSpanYears: 14, wweDebut: '1979',
  },
  10: { // Jake Roberts
    wins: 475, losses: 310, draws: 8, totalMatches: 793,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1986–1997', careerSpanYears: 11, wweDebut: '1986',
  },
  7: { // Roddy Piper
    wins: 420, losses: 310, draws: 10, totalMatches: 740,
    ppvMatches: 20, mainEvents: 4,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 119, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1984–2006', careerSpanYears: 22, wweDebut: '1984',
  },
  11: { // Ricky Steamboat
    wins: 340, losses: 150, draws: 8, totalMatches: 498,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 75, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1985–1991', careerSpanYears: 6, wweDebut: '1985',
  },
  155: { // Jimmy Snuka
    wins: 380, losses: 220, draws: 5, totalMatches: 605,
    ppvMatches: 4, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1982–1996', careerSpanYears: 14, wweDebut: '1982',
  },
  843: { // Don Muraco
    wins: 320, losses: 200, draws: 8, totalMatches: 528,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 295, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1981–1988', careerSpanYears: 7, wweDebut: '1981',
  },
  8: { // Mr. Perfect
    wins: 480, losses: 340, draws: 8, totalMatches: 828,
    ppvMatches: 20, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 4,
    longestReign: 245, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1988–2002', careerSpanYears: 14, wweDebut: '1988',
  },
  26: { // British Bulldog
    wins: 480, losses: 350, draws: 10, totalMatches: 840,
    ppvMatches: 22, mainEvents: 2,
    rumbleAppearances: 6, rumbleEliminations: 6,
    longestReign: 112, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1986–1999', careerSpanYears: 13, wweDebut: '1986',
  },
  25: { // Owen Hart
    wins: 430, losses: 350, draws: 8, totalMatches: 788,
    ppvMatches: 26, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 56, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1988–1999', careerSpanYears: 11, wweDebut: '1988',
  },
  13: { // Honky Tonk Man
    wins: 340, losses: 260, draws: 5, totalMatches: 605,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 1,
    longestReign: 454, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1986–1997', careerSpanYears: 11, wweDebut: '1986',
  },
  153: { // Tito Santana
    wins: 520, losses: 340, draws: 10, totalMatches: 870,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 236, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1983–1993', careerSpanYears: 10, wweDebut: '1983',
  },
  154: { // Greg Valentine
    wins: 380, losses: 300, draws: 8, totalMatches: 688,
    ppvMatches: 7, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 205, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1978–1992', careerSpanYears: 14, wweDebut: '1978',
  },
  22: { // Yokozuna
    wins: 340, losses: 190, draws: 5, totalMatches: 535,
    ppvMatches: 22, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 7,
    longestReign: 280, longestReignTitle: 'WWF Championship',
    yearsActive: '1992–1998', careerSpanYears: 6, wweDebut: '1992',
  },
  20: { // Sgt. Slaughter
    wins: 320, losses: 250, draws: 8, totalMatches: 578,
    ppvMatches: 10, mainEvents: 2,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 64, longestReignTitle: 'WWF Championship',
    yearsActive: '1980–1997', careerSpanYears: 17, wweDebut: '1980',
  },
  21: { // Iron Sheik
    wins: 280, losses: 220, draws: 5, totalMatches: 505,
    ppvMatches: 3, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 28, longestReignTitle: 'WWF Championship',
    yearsActive: '1979–1992', careerSpanYears: 13, wweDebut: '1979',
  },
  141: { // Hacksaw Jim Duggan
    wins: 440, losses: 340, draws: 8, totalMatches: 788,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 9, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1987–2009', careerSpanYears: 22, wweDebut: '1987',
  },
  143: { // Koko B. Ware
    wins: 280, losses: 240, draws: 3, totalMatches: 523,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1987–1994', careerSpanYears: 7, wweDebut: '1987',
  },
  358: { // Dusty Rhodes
    wins: 220, losses: 180, draws: 5, totalMatches: 405,
    ppvMatches: 7, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1989–1991', careerSpanYears: 2, wweDebut: '1989',
  },

  // ── NEW GENERATION / ATTITUDE ──
  24: { // Diesel / Kevin Nash
    wins: 420, losses: 250, draws: 8, totalMatches: 678,
    ppvMatches: 24, mainEvents: 8,
    rumbleAppearances: 4, rumbleEliminations: 7,
    longestReign: 358, longestReignTitle: 'WWF Championship',
    yearsActive: '1993–2011', careerSpanYears: 18, wweDebut: '1993',
  },
  23: { // Razor Ramon / Scott Hall
    wins: 380, losses: 280, draws: 6, totalMatches: 666,
    ppvMatches: 19, mainEvents: 2,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 224, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1992–2002', careerSpanYears: 10, wweDebut: '1992',
  },
  45: { // Bret Hart
    wins: 1880, losses: 762, draws: 305, totalMatches: 2947,
    ppvMatches: 60, mainEvents: 18,
    rumbleAppearances: 7, rumbleEliminations: 10,
    longestReign: 654, longestReignTitle: 'WWF Championship',
    yearsActive: '1984–1997', careerSpanYears: 13, wweDebut: '1984',
  },
  34: { // Shawn Michaels
    wins: 1456, losses: 593, draws: 95, totalMatches: 2144,
    ppvMatches: 80, mainEvents: 20,
    rumbleAppearances: 12, rumbleEliminations: 39,
    longestReign: 231, longestReignTitle: 'WWF Championship',
    yearsActive: '1987–2010', careerSpanYears: 23, wweDebut: '1987',
  },
  33: { // Undertaker
    wins: 1687, losses: 400, draws: 94, totalMatches: 2181,
    ppvMatches: 181, mainEvents: 36,
    rumbleAppearances: 10, rumbleEliminations: 35,
    longestReign: 140, longestReignTitle: 'WWF Championship',
    yearsActive: '1990–2020', careerSpanYears: 30, wweDebut: '1990',
  },
  31: { // Stone Cold Steve Austin
    wins: 817, losses: 527, draws: 120, totalMatches: 1464,
    ppvMatches: 75, mainEvents: 20,
    rumbleAppearances: 6, rumbleEliminations: 36,
    longestReign: 175, longestReignTitle: 'WWF Championship',
    yearsActive: '1995–2003', careerSpanYears: 8, wweDebut: '1995',
  },
  32: { // The Rock
    wins: 269, losses: 163, draws: 40, totalMatches: 472,
    ppvMatches: 60, mainEvents: 25,
    rumbleAppearances: 5, rumbleEliminations: 11,
    longestReign: 119, longestReignTitle: 'WWF Championship',
    yearsActive: '1996–2025', careerSpanYears: 29, wweDebut: '1996',
  },
  30: { // Triple H
    wins: 1040, losses: 873, draws: 72, totalMatches: 1985,
    ppvMatches: 170, mainEvents: 30,
    rumbleAppearances: 8, rumbleEliminations: 14,
    longestReign: 280, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '1995–2022', careerSpanYears: 27, wweDebut: '1995',
  },
  43: { // Mankind / Mick Foley
    wins: 480, losses: 420, draws: 12, totalMatches: 912,
    ppvMatches: 52, mainEvents: 12,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 28, longestReignTitle: 'WWF Championship',
    yearsActive: '1996–2004', careerSpanYears: 8, wweDebut: '1996',
  },
  44: { // Kane
    wins: 1569, losses: 1338, draws: 117, totalMatches: 3024,
    ppvMatches: 176, mainEvents: 8,
    rumbleAppearances: 20, rumbleEliminations: 46,
    longestReign: 154, longestReignTitle: 'ECW Championship',
    yearsActive: '1995–2021', careerSpanYears: 26, wweDebut: '1995',
  },
  56: { // Big Show
    wins: 1451, losses: 1020, draws: 102, totalMatches: 2573,
    ppvMatches: 140, mainEvents: 5,
    rumbleAppearances: 9, rumbleEliminations: 14,
    longestReign: 98, longestReignTitle: 'ECW Championship',
    yearsActive: '1999–2021', careerSpanYears: 22, wweDebut: '1999',
  },
  35: { // Chris Jericho
    wins: 900, losses: 640, draws: 20, totalMatches: 1560,
    ppvMatches: 100, mainEvents: 8,
    rumbleAppearances: 8, rumbleEliminations: 12,
    longestReign: 133, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1999–2018', careerSpanYears: 19, wweDebut: '1999',
  },
  36: { // Kurt Angle
    wins: 620, losses: 380, draws: 10, totalMatches: 1010,
    ppvMatches: 73, mainEvents: 16,
    rumbleAppearances: 5, rumbleEliminations: 6,
    longestReign: 126, longestReignTitle: 'WWF Championship',
    yearsActive: '1999–2019', careerSpanYears: 20, wweDebut: '1999',
  },
  72: { // Eddie Guerrero
    wins: 510, losses: 390, draws: 8, totalMatches: 908,
    ppvMatches: 47, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 133, longestReignTitle: 'WWE Championship',
    yearsActive: '2000–2005', careerSpanYears: 5, wweDebut: '2000',
  },
  110: { // Ric Flair
    wins: 480, losses: 340, draws: 15, totalMatches: 835,
    ppvMatches: 55, mainEvents: 15,
    rumbleAppearances: 5, rumbleEliminations: 6,
    longestReign: 118, longestReignTitle: 'WWF Championship',
    yearsActive: '1991–2008', careerSpanYears: 17, wweDebut: '1991',
  },

  // ── RUTHLESS AGGRESSION / PG ERA ──
  75: { // John Cena
    wins: 1823, losses: 447, draws: 58, totalMatches: 2328,
    ppvMatches: 164, mainEvents: 39,
    rumbleAppearances: 9, rumbleEliminations: 18,
    longestReign: 380, longestReignTitle: 'WWE Championship',
    yearsActive: '2002–2025', careerSpanYears: 23, wweDebut: '2002',
  },
  76: { // Batista
    wins: 625, losses: 347, draws: 31, totalMatches: 1003,
    ppvMatches: 55, mainEvents: 12,
    rumbleAppearances: 4, rumbleEliminations: 8,
    longestReign: 282, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2002–2019', careerSpanYears: 17, wweDebut: '2002',
  },
  77: { // Randy Orton
    wins: 1324, losses: 1090, draws: 72, totalMatches: 2486,
    ppvMatches: 191, mainEvents: 20,
    rumbleAppearances: 11, rumbleEliminations: 16,
    longestReign: 210, longestReignTitle: 'WWE Championship',
    yearsActive: '2002–2025', careerSpanYears: 23, wweDebut: '2002',
  },
  78: { // Rey Mysterio
    wins: 980, losses: 750, draws: 15, totalMatches: 1745,
    ppvMatches: 80, mainEvents: 8,
    rumbleAppearances: 12, rumbleEliminations: 10,
    longestReign: 98, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2002–2025', careerSpanYears: 23, wweDebut: '2002',
  },
  85: { // CM Punk
    wins: 700, losses: 380, draws: 12, totalMatches: 1092,
    ppvMatches: 65, mainEvents: 10,
    rumbleAppearances: 4, rumbleEliminations: 8,
    longestReign: 434, longestReignTitle: 'WWE Championship',
    yearsActive: '2006–2025', careerSpanYears: 19, wweDebut: '2006',
  },
  47: { // Edge
    wins: 839, losses: 830, draws: 57, totalMatches: 1726,
    ppvMatches: 85, mainEvents: 10,
    rumbleAppearances: 6, rumbleEliminations: 7,
    longestReign: 147, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '1998–2024', careerSpanYears: 26, wweDebut: '1998',
  },
  49: { // Jeff Hardy
    wins: 810, losses: 590, draws: 10, totalMatches: 1410,
    ppvMatches: 68, mainEvents: 6,
    rumbleAppearances: 7, rumbleEliminations: 4,
    longestReign: 56, longestReignTitle: 'WWE Championship',
    yearsActive: '1998–2022', careerSpanYears: 24, wweDebut: '1998',
  },
  50: { // Matt Hardy
    wins: 760, losses: 640, draws: 12, totalMatches: 1412,
    ppvMatches: 58, mainEvents: 1,
    rumbleAppearances: 7, rumbleEliminations: 4,
    longestReign: 98, longestReignTitle: 'ECW Championship',
    yearsActive: '1998–2020', careerSpanYears: 22, wweDebut: '1998',
  },
  81: { // Booker T
    wins: 610, losses: 490, draws: 10, totalMatches: 1110,
    ppvMatches: 45, mainEvents: 3,
    rumbleAppearances: 6, rumbleEliminations: 8,
    longestReign: 266, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2001–2012', careerSpanYears: 11, wweDebut: '2001',
  },
  73: { // Rob Van Dam
    wins: 530, losses: 380, draws: 8, totalMatches: 918,
    ppvMatches: 46, mainEvents: 3,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 23, longestReignTitle: 'WWE Championship',
    yearsActive: '2001–2014', careerSpanYears: 13, wweDebut: '2001',
  },
  53: { // Mark Henry
    wins: 680, losses: 640, draws: 15, totalMatches: 1335,
    ppvMatches: 52, mainEvents: 3,
    rumbleAppearances: 8, rumbleEliminations: 5,
    longestReign: 98, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '1996–2017', careerSpanYears: 21, wweDebut: '1996',
  },
  80: { // JBL
    wins: 620, losses: 440, draws: 10, totalMatches: 1070,
    ppvMatches: 35, mainEvents: 7,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 280, longestReignTitle: 'WWE Championship',
    yearsActive: '1995–2009', careerSpanYears: 14, wweDebut: '1995',
  },
  79: { // Brock Lesnar
    wins: 220, losses: 80, draws: 5, totalMatches: 305,
    ppvMatches: 52, mainEvents: 25,
    rumbleAppearances: 4, rumbleEliminations: 8,
    longestReign: 504, longestReignTitle: 'Universal Championship',
    yearsActive: '2002–2024', careerSpanYears: 22, wweDebut: '2002',
  },
  109: { // Goldberg
    wins: 52, losses: 15, draws: 2, totalMatches: 69,
    ppvMatches: 12, mainEvents: 6,
    rumbleAppearances: 2, rumbleEliminations: 4,
    longestReign: 77, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2003–2022', careerSpanYears: 19, wweDebut: '2003',
  },

  // ── MODERN ERA ──
  93: { // Roman Reigns
    wins: 1007, losses: 340, draws: 33, totalMatches: 1380,
    ppvMatches: 100, mainEvents: 25,
    rumbleAppearances: 7, rumbleEliminations: 10,
    longestReign: 1316, longestReignTitle: 'Universal Championship',
    yearsActive: '2012–2025', careerSpanYears: 13, wweDebut: '2012',
  },
  92: { // Seth Rollins
    wins: 1118, losses: 931, draws: 60, totalMatches: 2109,
    ppvMatches: 90, mainEvents: 10,
    rumbleAppearances: 5, rumbleEliminations: 6,
    longestReign: 316, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2012–2025', careerSpanYears: 13, wweDebut: '2012',
  },
  94: { // Dean Ambrose
    wins: 680, losses: 450, draws: 10, totalMatches: 1140,
    ppvMatches: 62, mainEvents: 5,
    rumbleAppearances: 5, rumbleEliminations: 6,
    longestReign: 84, longestReignTitle: 'WWE Championship',
    yearsActive: '2012–2019', careerSpanYears: 7, wweDebut: '2012',
  },
  98: { // AJ Styles
    wins: 620, losses: 330, draws: 8, totalMatches: 958,
    ppvMatches: 70, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 4,
    longestReign: 371, longestReignTitle: 'WWE Championship',
    yearsActive: '2016–2025', careerSpanYears: 9, wweDebut: '2016',
  },
  91: { // Daniel Bryan
    wins: 710, losses: 440, draws: 12, totalMatches: 1162,
    ppvMatches: 62, mainEvents: 10,
    rumbleAppearances: 4, rumbleEliminations: 5,
    longestReign: 161, longestReignTitle: 'WWE Championship',
    yearsActive: '2010–2021', careerSpanYears: 11, wweDebut: '2010',
  },
  90: { // Kofi Kingston
    wins: 850, losses: 680, draws: 10, totalMatches: 1540,
    ppvMatches: 78, mainEvents: 2,
    rumbleAppearances: 10, rumbleEliminations: 5,
    longestReign: 180, longestReignTitle: 'WWE Championship',
    yearsActive: '2008–2025', careerSpanYears: 17, wweDebut: '2008',
  },
  130: { // Big E
    wins: 430, losses: 270, draws: 5, totalMatches: 705,
    ppvMatches: 42, mainEvents: 2,
    rumbleAppearances: 5, rumbleEliminations: 4,
    longestReign: 110, longestReignTitle: 'WWE Championship',
    yearsActive: '2012–2022', careerSpanYears: 10, wweDebut: '2012',
  },
  1357: { // Xavier Woods
    wins: 380, losses: 340, draws: 5, totalMatches: 725,
    ppvMatches: 36, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 2,
    longestReign: 483, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2013–2025', careerSpanYears: 12, wweDebut: '2013',
  },
  87: { // The Miz
    wins: 1090, losses: 870, draws: 15, totalMatches: 1975,
    ppvMatches: 98, mainEvents: 3,
    rumbleAppearances: 10, rumbleEliminations: 6,
    longestReign: 160, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2006–2025', careerSpanYears: 19, wweDebut: '2006',
  },
  89: { // Dolph Ziggler
    wins: 910, losses: 860, draws: 15, totalMatches: 1785,
    ppvMatches: 72, mainEvents: 2,
    rumbleAppearances: 9, rumbleEliminations: 6,
    longestReign: 175, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2006–2023', careerSpanYears: 17, wweDebut: '2006',
  },
  86: { // Sheamus
    wins: 890, losses: 560, draws: 12, totalMatches: 1462,
    ppvMatches: 72, mainEvents: 5,
    rumbleAppearances: 9, rumbleEliminations: 11,
    longestReign: 98, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2009–2025', careerSpanYears: 16, wweDebut: '2009',
  },
  100: { // Drew McIntyre
    wins: 680, losses: 420, draws: 8, totalMatches: 1108,
    ppvMatches: 52, mainEvents: 8,
    rumbleAppearances: 7, rumbleEliminations: 9,
    longestReign: 202, longestReignTitle: 'WWE Championship',
    yearsActive: '2007–2025', careerSpanYears: 18, wweDebut: '2007',
  },
  131: { // Bobby Lashley
    wins: 520, losses: 250, draws: 5, totalMatches: 775,
    ppvMatches: 38, mainEvents: 3,
    rumbleAppearances: 4, rumbleEliminations: 5,
    longestReign: 196, longestReignTitle: 'WWE Championship',
    yearsActive: '2005–2024', careerSpanYears: 19, wweDebut: '2005',
  },
  128: { // Cody Rhodes
    wins: 580, losses: 380, draws: 8, totalMatches: 968,
    ppvMatches: 52, mainEvents: 6,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 155, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2007–2025', careerSpanYears: 18, wweDebut: '2007',
  },
  99: { // Finn Bálor
    wins: 480, losses: 280, draws: 5, totalMatches: 765,
    ppvMatches: 42, mainEvents: 3,
    rumbleAppearances: 5, rumbleEliminations: 4,
    longestReign: 292, longestReignTitle: 'NXT Championship',
    yearsActive: '2014–2025', careerSpanYears: 11, wweDebut: '2014',
  },
  96: { // Kevin Owens
    wins: 620, losses: 420, draws: 8, totalMatches: 1048,
    ppvMatches: 62, mainEvents: 5,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 188, longestReignTitle: 'Universal Championship',
    yearsActive: '2014–2025', careerSpanYears: 11, wweDebut: '2014',
  },
  97: { // Sami Zayn
    wins: 450, losses: 390, draws: 8, totalMatches: 848,
    ppvMatches: 42, mainEvents: 3,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 182, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2013–2025', careerSpanYears: 12, wweDebut: '2013',
  },
  292: { // Jinder Mahal
    wins: 340, losses: 380, draws: 3, totalMatches: 723,
    ppvMatches: 18, mainEvents: 3,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 170, longestReignTitle: 'WWE Championship',
    yearsActive: '2011–2023', careerSpanYears: 12, wweDebut: '2011',
  },
  339: { // Shinsuke Nakamura
    wins: 310, losses: 220, draws: 5, totalMatches: 535,
    ppvMatches: 28, mainEvents: 2,
    rumbleAppearances: 4, rumbleEliminations: 4,
    longestReign: 140, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2016–2025', careerSpanYears: 9, wweDebut: '2016',
  },
  106: { // Rusev / Miro
    wins: 380, losses: 250, draws: 5, totalMatches: 635,
    ppvMatches: 24, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 287, longestReignTitle: 'United States Championship',
    yearsActive: '2013–2020', careerSpanYears: 7, wweDebut: '2013',
  },
  104: { // Cesaro
    wins: 510, losses: 490, draws: 8, totalMatches: 1008,
    ppvMatches: 38, mainEvents: 0,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 170, longestReignTitle: 'United States Championship',
    yearsActive: '2012–2022', careerSpanYears: 10, wweDebut: '2012',
  },
  211: { // Braun Strowman
    wins: 420, losses: 180, draws: 5, totalMatches: 605,
    ppvMatches: 32, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 13,
    longestReign: 84, longestReignTitle: 'Universal Championship',
    yearsActive: '2015–2025', careerSpanYears: 10, wweDebut: '2015',
  },
  139: { // Gunther
    wins: 240, losses: 50, draws: 3, totalMatches: 293,
    ppvMatches: 22, mainEvents: 3,
    rumbleAppearances: 3, rumbleEliminations: 5,
    longestReign: 666, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2019–2025', careerSpanYears: 6, wweDebut: '2019',
  },
  217: { // Damian Priest
    wins: 310, losses: 170, draws: 3, totalMatches: 483,
    ppvMatches: 28, mainEvents: 3,
    rumbleAppearances: 4, rumbleEliminations: 4,
    longestReign: 126, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2018–2025', careerSpanYears: 7, wweDebut: '2018',
  },
  851: { // Jey Uso
    wins: 520, losses: 380, draws: 5, totalMatches: 905,
    ppvMatches: 42, mainEvents: 2,
    rumbleAppearances: 5, rumbleEliminations: 4,
    longestReign: 126, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2010–2025', careerSpanYears: 15, wweDebut: '2010',
  },
  1356: { // Jimmy Uso
    wins: 510, losses: 390, draws: 5, totalMatches: 905,
    ppvMatches: 40, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 315, longestReignTitle: 'SmackDown Tag Team Championship',
    yearsActive: '2010–2025', careerSpanYears: 15, wweDebut: '2010',
  },
  220: { // LA Knight
    wins: 210, losses: 120, draws: 2, totalMatches: 332,
    ppvMatches: 14, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 98, longestReignTitle: 'United States Championship',
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  493: { // Ilja Dragunov
    wins: 120, losses: 60, draws: 2, totalMatches: 182,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 308, longestReignTitle: 'NXT UK Championship',
    yearsActive: '2019–2025', careerSpanYears: 6, wweDebut: '2019',
  },
  331: { // Bron Breakker
    wins: 190, losses: 55, draws: 2, totalMatches: 247,
    ppvMatches: 14, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 176, longestReignTitle: 'NXT Championship',
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },

  // ── WOMEN'S DIVISION ──
  101: { // Becky Lynch
    wins: 689, losses: 340, draws: 20, totalMatches: 1049,
    ppvMatches: 45, mainEvents: 3,
    rumbleAppearances: 4, rumbleEliminations: 6,
    longestReign: 399, longestReignTitle: "Raw Women's Championship",
    yearsActive: '2015–2024', careerSpanYears: 9, wweDebut: '2015',
  },
  102: { // Charlotte Flair
    wins: 618, losses: 463, draws: 25, totalMatches: 1106,
    ppvMatches: 50, mainEvents: 2,
    rumbleAppearances: 4, rumbleEliminations: 8,
    longestReign: 195, longestReignTitle: "Divas Championship",
    yearsActive: '2014–2024', careerSpanYears: 10, wweDebut: '2014',
  },
  103: { // Sasha Banks
    wins: 607, losses: 406, draws: 19, totalMatches: 1032,
    ppvMatches: 40, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 4,
    longestReign: 69, longestReignTitle: "SmackDown Women's Championship",
    yearsActive: '2015–2023', careerSpanYears: 8, wweDebut: '2015',
  },
  135: { // Bayley
    wins: 740, losses: 368, draws: 18, totalMatches: 1126,
    ppvMatches: 45, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 7,
    longestReign: 380, longestReignTitle: "SmackDown Women's Championship",
    yearsActive: '2015–2025', careerSpanYears: 10, wweDebut: '2015',
  },
  262: { // Asuka
    wins: 450, losses: 160, draws: 5, totalMatches: 615,
    ppvMatches: 40, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 5,
    longestReign: 522, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2015–2024', careerSpanYears: 9, wweDebut: '2015',
  },
  133: { // Bianca Belair
    wins: 340, losses: 130, draws: 3, totalMatches: 473,
    ppvMatches: 32, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 8,
    longestReign: 381, longestReignTitle: "Raw Women's Championship",
    yearsActive: '2018–2025', careerSpanYears: 7, wweDebut: '2018',
  },
  140: { // Rhea Ripley
    wins: 310, losses: 110, draws: 3, totalMatches: 423,
    ppvMatches: 30, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 7,
    longestReign: 380, longestReignTitle: "Women's World Championship",
    yearsActive: '2019–2025', careerSpanYears: 6, wweDebut: '2019',
  },
  62: { // Trish Stratus
    wins: 320, losses: 140, draws: 3, totalMatches: 463,
    ppvMatches: 28, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 448, longestReignTitle: "Women's Championship",
    yearsActive: '2000–2023', careerSpanYears: 23, wweDebut: '2000',
  },
  61: { // Lita
    wins: 280, losses: 160, draws: 3, totalMatches: 443,
    ppvMatches: 24, mainEvents: 2,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 112, longestReignTitle: "Women's Championship",
    yearsActive: '1999–2023', careerSpanYears: 24, wweDebut: '1999',
  },
  176: { // Beth Phoenix
    wins: 250, losses: 140, draws: 2, totalMatches: 392,
    ppvMatches: 18, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 204, longestReignTitle: 'Divas Championship',
    yearsActive: '2006–2018', careerSpanYears: 12, wweDebut: '2006',
  },
  308: { // Alexa Bliss
    wins: 350, losses: 200, draws: 3, totalMatches: 553,
    ppvMatches: 32, mainEvents: 2,
    rumbleAppearances: 4, rumbleEliminations: 5,
    longestReign: 223, longestReignTitle: "Raw Women's Championship",
    yearsActive: '2014–2023', careerSpanYears: 9, wweDebut: '2014',
  },
  134: { // Natalya
    wins: 480, losses: 440, draws: 5, totalMatches: 925,
    ppvMatches: 38, mainEvents: 0,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 65, longestReignTitle: 'Divas Championship',
    yearsActive: '2008–2025', careerSpanYears: 17, wweDebut: '2008',
  },
  // ── TAG TEAM SPECIALISTS (individual entries) ──
  1210: { // Bubba Ray Dudley
    wins: 620, losses: 450, draws: 5, totalMatches: 1075,
    ppvMatches: 55, mainEvents: 2,
    rumbleAppearances: 7, rumbleEliminations: 8,
    longestReign: 155, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '1999–2015', careerSpanYears: 16, wweDebut: '1999',
  },
  1209: { // D-Von Dudley
    wins: 580, losses: 460, draws: 5, totalMatches: 1045,
    ppvMatches: 52, mainEvents: 2,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 155, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '1999–2015', careerSpanYears: 16, wweDebut: '1999',
  },

  // ── EXPANDED ROSTER ──
  14: { // Rick Rude
    wins: 320, losses: 240, draws: 5, totalMatches: 565,
    ppvMatches: 12, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 147, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1987–1997', careerSpanYears: 10, wweDebut: '1987',
  },
  19: { // Big Boss Man
    wins: 420, losses: 310, draws: 8, totalMatches: 738,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 6, rumbleEliminations: 5,
    longestReign: 98, longestReignTitle: 'Hardcore Championship',
    yearsActive: '1988–2002', careerSpanYears: 14, wweDebut: '1988',
  },
  27: { // Goldust
    wins: 590, losses: 550, draws: 10, totalMatches: 1150,
    ppvMatches: 42, mainEvents: 0,
    rumbleAppearances: 8, rumbleEliminations: 4,
    longestReign: 84, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1995–2019', careerSpanYears: 24, wweDebut: '1995',
  },
  46: { // Chris Benoit
    wins: 510, losses: 380, draws: 10, totalMatches: 900,
    ppvMatches: 52, mainEvents: 5,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 154, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2000–2007', careerSpanYears: 7, wweDebut: '2000',
  },
  48: { // Christian
    wins: 620, losses: 510, draws: 10, totalMatches: 1140,
    ppvMatches: 52, mainEvents: 2,
    rumbleAppearances: 6, rumbleEliminations: 4,
    longestReign: 77, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '1998–2021', careerSpanYears: 23, wweDebut: '1998',
  },
  42: { // William Regal
    wins: 480, losses: 460, draws: 8, totalMatches: 948,
    ppvMatches: 22, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 2,
    longestReign: 84, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1998–2013', careerSpanYears: 15, wweDebut: '1998',
  },
  39: { // Rikishi
    wins: 380, losses: 310, draws: 5, totalMatches: 695,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 4,
    longestReign: 49, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1992–2004', careerSpanYears: 12, wweDebut: '1992',
  },
  192: { // R-Truth
    wins: 680, losses: 620, draws: 8, totalMatches: 1308,
    ppvMatches: 38, mainEvents: 1,
    rumbleAppearances: 6, rumbleEliminations: 3,
    longestReign: 105, longestReignTitle: 'United States Championship',
    yearsActive: '2000–2025', careerSpanYears: 25, wweDebut: '2000',
  },
  95: { // Bray Wyatt
    wins: 480, losses: 340, draws: 8, totalMatches: 828,
    ppvMatches: 52, mainEvents: 5,
    rumbleAppearances: 5, rumbleEliminations: 7,
    longestReign: 161, longestReignTitle: 'Universal Championship',
    yearsActive: '2012–2023', careerSpanYears: 11, wweDebut: '2012',
  },
  321: { // Sting
    wins: 45, losses: 20, draws: 2, totalMatches: 67,
    ppvMatches: 8, mainEvents: 2,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2014–2016', careerSpanYears: 2, wweDebut: '2014',
  },
  551: { // Vader
    wins: 180, losses: 160, draws: 5, totalMatches: 345,
    ppvMatches: 12, mainEvents: 2,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1996–1998', careerSpanYears: 2, wweDebut: '1996',
  },
  972: { // Sycho Sid
    wins: 280, losses: 180, draws: 5, totalMatches: 465,
    ppvMatches: 14, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 5,
    longestReign: 98, longestReignTitle: 'WWF Championship',
    yearsActive: '1991–1997', careerSpanYears: 6, wweDebut: '1991',
  },
  1034: { // Bam Bam Bigelow
    wins: 280, losses: 220, draws: 5, totalMatches: 505,
    ppvMatches: 12, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1987–1995', careerSpanYears: 8, wweDebut: '1987',
  },
  435: { // King Kong Bundy
    wins: 280, losses: 200, draws: 3, totalMatches: 483,
    ppvMatches: 6, mainEvents: 2,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1985–1995', careerSpanYears: 10, wweDebut: '1985',
  },
  433: { // Harley Race
    wins: 120, losses: 100, draws: 3, totalMatches: 223,
    ppvMatches: 3, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1986–1989', careerSpanYears: 3, wweDebut: '1986',
  },
  438: { // Rick Martel
    wins: 340, losses: 280, draws: 5, totalMatches: 625,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1986–1995', careerSpanYears: 9, wweDebut: '1986',
  },
  1059: { // Terry Funk
    wins: 120, losses: 100, draws: 3, totalMatches: 223,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1985–2000', careerSpanYears: 15, wweDebut: '1985',
  },
  936: { // Hardcore Holly
    wins: 440, losses: 420, draws: 5, totalMatches: 865,
    ppvMatches: 22, mainEvents: 0,
    rumbleAppearances: 6, rumbleEliminations: 2,
    longestReign: 98, longestReignTitle: 'Hardcore Championship',
    yearsActive: '1994–2009', careerSpanYears: 15, wweDebut: '1994',
  },
  841: { // Paul Orndorff
    wins: 280, losses: 200, draws: 5, totalMatches: 485,
    ppvMatches: 4, mainEvents: 2,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1984–1988', careerSpanYears: 4, wweDebut: '1984',
  },
  507: { // Diamond Dallas Page
    wins: 110, losses: 80, draws: 3, totalMatches: 193,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 56, longestReignTitle: 'European Championship',
    yearsActive: '2001–2002', careerSpanYears: 1, wweDebut: '2001',
  },
  889: { // Jeff Jarrett
    wins: 340, losses: 280, draws: 5, totalMatches: 625,
    ppvMatches: 18, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 161, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1993–2000', careerSpanYears: 7, wweDebut: '1993',
  },
  132: { // Samoa Joe
    wins: 280, losses: 190, draws: 5, totalMatches: 475,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 3,
    longestReign: 133, longestReignTitle: 'NXT Championship',
    yearsActive: '2015–2022', careerSpanYears: 7, wweDebut: '2015',
  },
  257: { // Adam Cole
    wins: 210, losses: 130, draws: 3, totalMatches: 343,
    ppvMatches: 18, mainEvents: 2,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 403, longestReignTitle: 'NXT Championship',
    yearsActive: '2017–2021', careerSpanYears: 4, wweDebut: '2017',
  },
  214: { // Tommaso Ciampa
    wins: 280, losses: 180, draws: 3, totalMatches: 463,
    ppvMatches: 14, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 238, longestReignTitle: 'NXT Championship',
    yearsActive: '2015–2023', careerSpanYears: 8, wweDebut: '2015',
  },
  215: { // Johnny Gargano
    wins: 250, losses: 170, draws: 3, totalMatches: 423,
    ppvMatches: 14, mainEvents: 2,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 56, longestReignTitle: 'NXT Championship',
    yearsActive: '2015–2025', careerSpanYears: 10, wweDebut: '2015',
  },
  486: { // Ricochet
    wins: 310, losses: 240, draws: 3, totalMatches: 553,
    ppvMatches: 18, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 56, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  483: { // Keith Lee
    wins: 160, losses: 110, draws: 2, totalMatches: 272,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 63, longestReignTitle: 'NXT Championship',
    yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018',
  },
  260: { // Shayna Baszler
    wins: 220, losses: 180, draws: 3, totalMatches: 403,
    ppvMatches: 16, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 416, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  618: { // Ronda Rousey
    wins: 120, losses: 40, draws: 2, totalMatches: 162,
    ppvMatches: 14, mainEvents: 4,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 232, longestReignTitle: "SmackDown Women's Championship",
    yearsActive: '2018–2023', careerSpanYears: 5, wweDebut: '2018',
  },
  209: { // AJ Lee
    wins: 180, losses: 110, draws: 2, totalMatches: 292,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 295, longestReignTitle: "Divas Championship",
    yearsActive: '2011–2015', careerSpanYears: 4, wweDebut: '2011',
  },
  210: { // Paige
    wins: 150, losses: 100, draws: 2, totalMatches: 252,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 308, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2013–2018', careerSpanYears: 5, wweDebut: '2013',
  },
  177: { // Mickie James
    wins: 250, losses: 160, draws: 2, totalMatches: 412,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 154, longestReignTitle: "Women's Championship",
    yearsActive: '2005–2022', careerSpanYears: 17, wweDebut: '2005',
  },
  222: { // Liv Morgan
    wins: 250, losses: 180, draws: 2, totalMatches: 432,
    ppvMatches: 18, mainEvents: 2,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 196, longestReignTitle: "Women's World Championship",
    yearsActive: '2017–2025', careerSpanYears: 8, wweDebut: '2017',
  },
  307: { // Nia Jax
    wins: 240, losses: 140, draws: 2, totalMatches: 382,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 5,
    longestReign: 98, longestReignTitle: "Raw Women's Championship",
    yearsActive: '2016–2025', careerSpanYears: 9, wweDebut: '2016',
  },
  309: { // Tiffany Stratton
    wins: 110, losses: 40, draws: 1, totalMatches: 151,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  330: { // Carmelo Hayes
    wins: 180, losses: 100, draws: 2, totalMatches: 282,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 119, longestReignTitle: 'NXT Championship',
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  492: { // Trick Williams
    wins: 150, losses: 60, draws: 1, totalMatches: 211,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 133, longestReignTitle: 'NXT Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  906: { // Oba Femi
    wins: 80, losses: 15, draws: 1, totalMatches: 96,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 196, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023',
  },
  212: { // Baron Corbin
    wins: 420, losses: 380, draws: 5, totalMatches: 805,
    ppvMatches: 28, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 5,
    longestReign: 91, longestReignTitle: 'United States Championship',
    yearsActive: '2016–2024', careerSpanYears: 8, wweDebut: '2016',
  },
  213: { // Elias
    wins: 280, losses: 310, draws: 3, totalMatches: 593,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2017–2023', careerSpanYears: 6, wweDebut: '2017',
  },
  218: { // Dominik Mysterio
    wins: 210, losses: 160, draws: 2, totalMatches: 372,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 245, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2020–2025', careerSpanYears: 5, wweDebut: '2020',
  },
  219: { // Solo Sikoa
    wins: 180, losses: 110, draws: 2, totalMatches: 292,
    ppvMatches: 12, mainEvents: 2,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  856: { // Jacob Fatu
    wins: 60, losses: 10, draws: 1, totalMatches: 71,
    ppvMatches: 4, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  850: { // Logan Paul
    wins: 15, losses: 8, draws: 0, totalMatches: 23,
    ppvMatches: 6, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 273, longestReignTitle: 'United States Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  861: { // Riddle
    wins: 310, losses: 210, draws: 3, totalMatches: 523,
    ppvMatches: 22, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 147, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2020–2023', careerSpanYears: 3, wweDebut: '2020',
  },
  853: { // Otis
    wins: 240, losses: 200, draws: 3, totalMatches: 443,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2019–2025', careerSpanYears: 6, wweDebut: '2019',
  },
  268: { // Chad Gable
    wins: 350, losses: 310, draws: 5, totalMatches: 665,
    ppvMatches: 22, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2015–2025', careerSpanYears: 10, wweDebut: '2015',
  },
  108: { // Alberto Del Rio
    wins: 440, losses: 310, draws: 5, totalMatches: 755,
    ppvMatches: 38, mainEvents: 5,
    rumbleAppearances: 4, rumbleEliminations: 4,
    longestReign: 133, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2010–2016', careerSpanYears: 6, wweDebut: '2010',
  },
  88: { // Jack Swagger
    wins: 380, losses: 340, draws: 5, totalMatches: 725,
    ppvMatches: 22, mainEvents: 1,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 82, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2008–2017', careerSpanYears: 9, wweDebut: '2008',
  },
  82: { // Carlito
    wins: 280, losses: 240, draws: 3, totalMatches: 523,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 175, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2004–2010', careerSpanYears: 6, wweDebut: '2004',
  },
  83: { // Shelton Benjamin
    wins: 380, losses: 350, draws: 5, totalMatches: 735,
    ppvMatches: 22, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 244, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2002–2025', careerSpanYears: 23, wweDebut: '2002',
  },
  318: { // MVP
    wins: 280, losses: 280, draws: 3, totalMatches: 563,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 343, longestReignTitle: 'United States Championship',
    yearsActive: '2006–2024', careerSpanYears: 18, wweDebut: '2006',
  },
  127: { // John Morrison
    wins: 380, losses: 310, draws: 5, totalMatches: 695,
    ppvMatches: 22, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 161, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2004–2022', careerSpanYears: 18, wweDebut: '2004',
  },
  416: { // Bronson Reed
    wins: 180, losses: 100, draws: 2, totalMatches: 282,
    ppvMatches: 10, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 49, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2020–2025', careerSpanYears: 5, wweDebut: '2020',
  },
  491: { // Jade Cargill
    wins: 80, losses: 30, draws: 1, totalMatches: 111,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 133, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  537: { // Tama Tonga
    wins: 80, losses: 60, draws: 1, totalMatches: 141,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 84, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  858: { // Penta El Zero Miedo
    wins: 40, losses: 15, draws: 1, totalMatches: 56,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2025–2025', careerSpanYears: 0, wweDebut: '2025',
  },
  1360: { // Nick Aldis
    wins: 80, losses: 30, draws: 1, totalMatches: 111,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023',
  },
  589: { // Apollo Crews
    wins: 280, losses: 260, draws: 3, totalMatches: 543,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 98, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2016–2023', careerSpanYears: 7, wweDebut: '2016',
  },
  482: { // Andrade
    wins: 160, losses: 120, draws: 2, totalMatches: 282,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 140, longestReignTitle: 'NXT Championship',
    yearsActive: '2016–2021', careerSpanYears: 5, wweDebut: '2016',
  },
  136: { // Bobby Roode
    wins: 280, losses: 250, draws: 3, totalMatches: 533,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 119, longestReignTitle: 'NXT Championship',
    yearsActive: '2016–2022', careerSpanYears: 6, wweDebut: '2016',
  },
  107: { // Wade Barrett
    wins: 310, losses: 260, draws: 3, totalMatches: 573,
    ppvMatches: 18, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 154, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2010–2016', careerSpanYears: 6, wweDebut: '2010',
  },
  216: { // Karrion Kross
    wins: 120, losses: 80, draws: 1, totalMatches: 201,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 77, longestReignTitle: 'NXT Championship',
    yearsActive: '2020–2024', careerSpanYears: 4, wweDebut: '2020',
  },
  1273: { // Pat McAfee
    wins: 18, losses: 8, draws: 0, totalMatches: 26,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2024', careerSpanYears: 3, wweDebut: '2021',
  },
  162: { // Shane McMahon
    wins: 45, losses: 40, draws: 2, totalMatches: 87,
    ppvMatches: 22, mainEvents: 3,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1999–2022', careerSpanYears: 23, wweDebut: '1999',
  },
  74: { // Vince McMahon
    wins: 25, losses: 35, draws: 2, totalMatches: 62,
    ppvMatches: 18, mainEvents: 5,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 28, longestReignTitle: 'ECW Championship',
    yearsActive: '1998–2010', careerSpanYears: 12, wweDebut: '1998',
  },
  388: { // Umaga
    wins: 260, losses: 130, draws: 3, totalMatches: 393,
    ppvMatches: 14, mainEvents: 2,
    rumbleAppearances: 3, rumbleEliminations: 5,
    longestReign: 91, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '2006–2009', careerSpanYears: 3, wweDebut: '2006',
  },
  877: { // Junkyard Dog
    wins: 280, losses: 180, draws: 3, totalMatches: 463,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1984–1988', careerSpanYears: 4, wweDebut: '1984',
  },
  759: { // Kerry Von Erich
    wins: 120, losses: 80, draws: 2, totalMatches: 202,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 56, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1990–1992', careerSpanYears: 2, wweDebut: '1990',
  },
  60: { // Chyna
    wins: 180, losses: 100, draws: 3, totalMatches: 283,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 84, longestReignTitle: 'Intercontinental Championship',
    yearsActive: '1997–2001', careerSpanYears: 4, wweDebut: '1997',
  },
  456: { // Carmella
    wins: 180, losses: 160, draws: 2, totalMatches: 342,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 130, longestReignTitle: "SmackDown Women's Championship",
    yearsActive: '2016–2023', careerSpanYears: 7, wweDebut: '2016',
  },
  925: { // Sonya Deville
    wins: 140, losses: 130, draws: 1, totalMatches: 271,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2017–2024', careerSpanYears: 7, wweDebut: '2017',
  },
  223: { // Iyo Sky
    wins: 180, losses: 110, draws: 2, totalMatches: 292,
    ppvMatches: 14, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 98, longestReignTitle: "WWE Women's Championship",
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  264: { // Dakota Kai
    wins: 160, losses: 110, draws: 2, totalMatches: 272,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 63, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },

  // ── TAG TEAM SPECIALISTS & MIDCARDERS ──
  1267: { // Akira Tozawa
    wins: 280, losses: 350, draws: 5, totalMatches: 635,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 56, longestReignTitle: 'WWE 24/7 Championship',
    yearsActive: '2016–2024', careerSpanYears: 8, wweDebut: '2016',
  },
  1031: { // Tony Garea
    wins: 580, losses: 320, draws: 30, totalMatches: 930,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 196, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1972–1986', careerSpanYears: 14, wweDebut: '1972',
  },
  1364: { // Reggie
    wins: 95, losses: 80, draws: 0, totalMatches: 175,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 42, longestReignTitle: 'WWE 24/7 Championship',
    yearsActive: '2021–2023', careerSpanYears: 2, wweDebut: '2021',
  },
  1044: { // Jacques Rougeau
    wins: 320, losses: 250, draws: 10, totalMatches: 580,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 154, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1986–1994', careerSpanYears: 8, wweDebut: '1986',
  },
  1071: { // Scott Dawson (FTR / Revival)
    wins: 195, losses: 130, draws: 5, totalMatches: 330,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2013–2020', careerSpanYears: 7, wweDebut: '2013',
  },
  1072: { // Dash Wilder (FTR / Revival)
    wins: 195, losses: 130, draws: 5, totalMatches: 330,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2013–2020', careerSpanYears: 7, wweDebut: '2013',
  },
  1076: { // Montez Ford (Street Profits)
    wins: 260, losses: 180, draws: 3, totalMatches: 443,
    ppvMatches: 16, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 119, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2016–2025', careerSpanYears: 9, wweDebut: '2016',
  },
  1077: { // Angelo Dawkins (Street Profits)
    wins: 260, losses: 180, draws: 3, totalMatches: 443,
    ppvMatches: 16, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 119, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2013–2025', careerSpanYears: 12, wweDebut: '2013',
  },
  1311: { // Scrypts / Reggie / Carmelo Hayes rebrand — actually Carmelo Hayes
    wins: 175, losses: 95, draws: 2, totalMatches: 272,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 213, longestReignTitle: 'NXT Championship',
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  1032: { // Professor Toru Tanaka
    wins: 400, losses: 280, draws: 20, totalMatches: 700,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 175, longestReignTitle: 'WWWF Tag Team Championship',
    yearsActive: '1967–1978', careerSpanYears: 11, wweDebut: '1967',
  },
  1053: { // Bart Gunn
    wins: 210, losses: 280, draws: 5, totalMatches: 495,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 78, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1993–1999', careerSpanYears: 6, wweDebut: '1993',
  },
  1075: { // Erik (Viking Raiders)
    wins: 190, losses: 120, draws: 2, totalMatches: 312,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 91, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  1097: { // Drake Maverick
    wins: 85, losses: 120, draws: 2, totalMatches: 207,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 70, longestReignTitle: 'WWE 24/7 Championship',
    yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018',
  },
  1121: { // Sylvain Grenier (La Resistance)
    wins: 180, losses: 160, draws: 5, totalMatches: 345,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 112, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2003–2007', careerSpanYears: 4, wweDebut: '2003',
  },
  1222: { // Rob Conway (La Resistance)
    wins: 170, losses: 165, draws: 3, totalMatches: 338,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 112, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2003–2007', careerSpanYears: 4, wweDebut: '2003',
  },
  1383: { // Joey Mercury (MNM)
    wins: 155, losses: 135, draws: 2, totalMatches: 292,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 90, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2004–2008', careerSpanYears: 4, wweDebut: '2004',
  },
  1385: { // Ax (Demolition)
    wins: 420, losses: 250, draws: 15, totalMatches: 685,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 478, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1987–1991', careerSpanYears: 4, wweDebut: '1987',
  },
  1423: { // Pierre (Quebecers)
    wins: 160, losses: 140, draws: 5, totalMatches: 305,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 98, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1993–1994', careerSpanYears: 1, wweDebut: '1993',
  },
  1381: { // Hawk (Legion of Doom / Road Warriors)
    wins: 480, losses: 220, draws: 12, totalMatches: 712,
    ppvMatches: 12, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 8,
    longestReign: 266, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1990–2003', careerSpanYears: 13, wweDebut: '1990',
  },
  1382: { // Animal (Legion of Doom / Road Warriors)
    wins: 480, losses: 220, draws: 12, totalMatches: 712,
    ppvMatches: 12, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 7,
    longestReign: 266, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1990–2006', careerSpanYears: 16, wweDebut: '1990',
  },
  1070: { // Kalisto
    wins: 220, losses: 250, draws: 3, totalMatches: 473,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 56, longestReignTitle: 'United States Championship',
    yearsActive: '2013–2021', careerSpanYears: 8, wweDebut: '2013',
  },
  1073: { // Akam (Authors of Pain)
    wins: 95, losses: 60, draws: 1, totalMatches: 156,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 91, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2016–2020', careerSpanYears: 4, wweDebut: '2016',
  },
  1074: { // Rezar (Authors of Pain)
    wins: 95, losses: 60, draws: 1, totalMatches: 156,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 91, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2016–2020', careerSpanYears: 4, wweDebut: '2016',
  },
  1095: { // Kit Wilson (Pretty Deadly)
    wins: 110, losses: 70, draws: 0, totalMatches: 180,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 105, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  1096: { // Elton Prince (Pretty Deadly)
    wins: 110, losses: 70, draws: 0, totalMatches: 180,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 105, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  1271: { // Bobby Fish
    wins: 85, losses: 75, draws: 1, totalMatches: 161,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 70, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2017–2021', careerSpanYears: 4, wweDebut: '2017',
  },
  1022: { // Buddy Rogers
    wins: 850, losses: 150, draws: 25, totalMatches: 1025,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 21, longestReignTitle: 'WWWF Championship',
    yearsActive: '1961–1963', careerSpanYears: 2, wweDebut: '1961',
  },
  1024: { // Rocky Johnson
    wins: 310, losses: 220, draws: 12, totalMatches: 542,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 161, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1983–1985', careerSpanYears: 2, wweDebut: '1983',
  },
  1025: { // Tony Atlas
    wins: 290, losses: 210, draws: 10, totalMatches: 510,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 161, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1983–1990', careerSpanYears: 7, wweDebut: '1983',
  },
  1035: { // Kerry Von Erich
    wins: 180, losses: 120, draws: 5, totalMatches: 305,
    ppvMatches: 3, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1990–1992', careerSpanYears: 2, wweDebut: '1990',
  },
  1036: { // The Dynamite Kid
    wins: 290, losses: 180, draws: 8, totalMatches: 478,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 196, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1984–1988', careerSpanYears: 4, wweDebut: '1984',
  },
  1065: { // Luke Gallows (Good Brothers / OC)
    wins: 210, losses: 220, draws: 3, totalMatches: 433,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 77, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2006–2020', careerSpanYears: 14, wweDebut: '2006',
  },
  1066: { // Karl Anderson (Good Brothers / OC)
    wins: 210, losses: 215, draws: 3, totalMatches: 428,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 77, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2016–2020', careerSpanYears: 4, wweDebut: '2016',
  },
  1081: { // Alicia Fox
    wins: 260, losses: 310, draws: 5, totalMatches: 575,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 63, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2008–2019', careerSpanYears: 11, wweDebut: '2008',
  },
  1082: { // Kelly Kelly
    wins: 195, losses: 170, draws: 2, totalMatches: 367,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 104, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2006–2012', careerSpanYears: 6, wweDebut: '2006',
  },
  1083: { // Billie Kay (IIconics)
    wins: 80, losses: 140, draws: 1, totalMatches: 221,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 120, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2015–2021', careerSpanYears: 6, wweDebut: '2015',
  },
  1084: { // Peyton Royce (IIconics)
    wins: 85, losses: 135, draws: 1, totalMatches: 221,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 120, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2015–2021', careerSpanYears: 6, wweDebut: '2015',
  },
  1086: { // Cedric Alexander
    wins: 190, losses: 195, draws: 3, totalMatches: 388,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2016–2023', careerSpanYears: 7, wweDebut: '2016',
  },
  1087: { // Buddy Murphy
    wins: 160, losses: 130, draws: 2, totalMatches: 292,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 182, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2013–2021', careerSpanYears: 8, wweDebut: '2013',
  },
  1092: { // Ethan Page
    wins: 75, losses: 50, draws: 1, totalMatches: 126,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'NXT Championship',
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1111: { // Lio Rush
    wins: 50, losses: 55, draws: 1, totalMatches: 106,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 56, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2018–2020', careerSpanYears: 2, wweDebut: '2018',
  },
  1112: { // Drew Gulak
    wins: 160, losses: 180, draws: 2, totalMatches: 342,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 70, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2016–2023', careerSpanYears: 7, wweDebut: '2016',
  },
  1118: { // Charlie Dempsey
    wins: 85, losses: 45, draws: 2, totalMatches: 132,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: 'NXT Heritage Cup',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  1055: { // Henry O. Godwinn
    wins: 200, losses: 260, draws: 5, totalMatches: 465,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 35, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1995–1999', careerSpanYears: 4, wweDebut: '1995',
  },
  1056: { // Mideon / Phineas Godwinn
    wins: 190, losses: 270, draws: 5, totalMatches: 465,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1996–2000', careerSpanYears: 4, wweDebut: '1996',
  },
  1041: { // Virgil / Vincent
    wins: 130, losses: 310, draws: 3, totalMatches: 443,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1987–1999', careerSpanYears: 12, wweDebut: '1987',
  },
  1061: { // Shane Douglas
    wins: 85, losses: 80, draws: 2, totalMatches: 167,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1990–1995', careerSpanYears: 5, wweDebut: '1990',
  },
  1064: { // Rick Steiner
    wins: 240, losses: 180, draws: 8, totalMatches: 428,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 3,
    longestReign: 77, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1993–2003', careerSpanYears: 10, wweDebut: '1993',
  },
  1029: { // Ken Patera
    wins: 340, losses: 250, draws: 15, totalMatches: 605,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 98, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1977–1988', careerSpanYears: 11, wweDebut: '1977',
  },
  1030: { // Ivan Putski
    wins: 380, losses: 190, draws: 12, totalMatches: 582,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 98, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1975–1987', careerSpanYears: 12, wweDebut: '1975',
  },
  1058: { // Rockin Robin (women's champion)
    wins: 60, losses: 40, draws: 2, totalMatches: 102,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 182, longestReignTitle: "WWF Women's Championship",
    yearsActive: '1987–1990', careerSpanYears: 3, wweDebut: '1987',
  },
  1079: { // Darren Young (Prime Time Players)
    wins: 165, losses: 220, draws: 3, totalMatches: 388,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2010–2017', careerSpanYears: 7, wweDebut: '2010',
  },
  1088: { // Kenny Dykstra (Spirit Squad)
    wins: 90, losses: 110, draws: 1, totalMatches: 201,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2006–2008', careerSpanYears: 2, wweDebut: '2006',
  },
  1106: { // Gerald Brisco
    wins: 120, losses: 95, draws: 5, totalMatches: 220,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '1984–2001', careerSpanYears: 17, wweDebut: '1984',
  },
  1129: { // Leilani Kai
    wins: 70, losses: 60, draws: 2, totalMatches: 132,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 56, longestReignTitle: "WWF Women's Championship",
    yearsActive: '1984–1990', careerSpanYears: 6, wweDebut: '1984',
  },
  1130: { // Judy Martin (Glamour Girls)
    wins: 65, losses: 55, draws: 2, totalMatches: 122,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 350, longestReignTitle: "WWF Women's Tag Team Championship",
    yearsActive: '1985–1989', careerSpanYears: 4, wweDebut: '1985',
  },
  1133: { // Blackjack Lanza
    wins: 350, losses: 260, draws: 15, totalMatches: 625,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 196, longestReignTitle: 'WWWF Tag Team Championship',
    yearsActive: '1972–1980', careerSpanYears: 8, wweDebut: '1972',
  },
  1138: { // Spiros Arion
    wins: 290, losses: 200, draws: 12, totalMatches: 502,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 175, longestReignTitle: 'WWWF Tag Team Championship',
    yearsActive: '1966–1978', careerSpanYears: 12, wweDebut: '1966',
  },
  1148: { // Mr. Saito
    wins: 240, losses: 200, draws: 10, totalMatches: 450,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 105, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1981–1987', careerSpanYears: 6, wweDebut: '1981',
  },
  1165: { // Johnny Valiant (Valiant Brothers)
    wins: 310, losses: 240, draws: 10, totalMatches: 560,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 196, longestReignTitle: 'WWWF Tag Team Championship',
    yearsActive: '1974–1979', careerSpanYears: 5, wweDebut: '1974',
  },
  1166: { // Jimmy Valiant (Valiant Brothers)
    wins: 300, losses: 235, draws: 10, totalMatches: 545,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 196, longestReignTitle: 'WWWF Tag Team Championship',
    yearsActive: '1974–1979', careerSpanYears: 5, wweDebut: '1974',
  },
  1427: { // Nash Carter (MSK)
    wins: 60, losses: 35, draws: 0, totalMatches: 95,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021',
  },
  1122: { // Stan Stasiak
    wins: 380, losses: 300, draws: 15, totalMatches: 695,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 9, longestReignTitle: 'WWWF Championship',
    yearsActive: '1969–1978', careerSpanYears: 9, wweDebut: '1969',
  },
  1068: { // Rosey (3 Minute Warning)
    wins: 95, losses: 130, draws: 2, totalMatches: 227,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2002–2006', careerSpanYears: 4, wweDebut: '2002',
  },
  1180: { // Tatsumi Fujinami
    wins: 50, losses: 35, draws: 5, totalMatches: 90,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1978–1991', careerSpanYears: 13, wweDebut: '1978',
  },

  // ── ATTITUDE ERA MIDCARDERS & TAG TEAMS ──
  17: { // Brutus Beefcake
    wins: 350, losses: 280, draws: 10, totalMatches: 640,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1984–1993', careerSpanYears: 9, wweDebut: '1984',
  },
  18: { // Earthquake
    wins: 280, losses: 210, draws: 8, totalMatches: 498,
    ppvMatches: 6, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 5,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1989–1994', careerSpanYears: 5, wweDebut: '1989',
  },
  29: { // Lex Luger
    wins: 310, losses: 200, draws: 12, totalMatches: 522,
    ppvMatches: 10, mainEvents: 3,
    rumbleAppearances: 3, rumbleEliminations: 5,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1993–1995', careerSpanYears: 2, wweDebut: '1993',
  },
  37: { // Steve Blackman
    wins: 190, losses: 175, draws: 3, totalMatches: 368,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '1997–2002', careerSpanYears: 5, wweDebut: '1997',
  },
  38: { // Crash Holly
    wins: 220, losses: 310, draws: 5, totalMatches: 535,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '1999–2003', careerSpanYears: 4, wweDebut: '1999',
  },
  40: { // Scotty 2 Hotty
    wins: 250, losses: 320, draws: 5, totalMatches: 575,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1996–2007', careerSpanYears: 11, wweDebut: '1996',
  },
  41: { // Grandmaster Sexay
    wins: 180, losses: 220, draws: 3, totalMatches: 403,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1997–2001', careerSpanYears: 4, wweDebut: '1997',
  },
  54: { // Val Venis
    wins: 290, losses: 310, draws: 8, totalMatches: 608,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 56, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1998–2009', careerSpanYears: 11, wweDebut: '1998',
  },
  55: { // Ken Shamrock
    wins: 175, losses: 130, draws: 5, totalMatches: 310,
    ppvMatches: 14, mainEvents: 2,
    rumbleAppearances: 2, rumbleEliminations: 4,
    longestReign: 56, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1997–1999', careerSpanYears: 2, wweDebut: '1997',
  },
  57: { // X-Pac
    wins: 380, losses: 350, draws: 10, totalMatches: 740,
    ppvMatches: 22, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 63, longestReignTitle: 'WWF European Championship',
    yearsActive: '1993–2002', careerSpanYears: 9, wweDebut: '1993',
  },
  58: { // Road Dogg
    wins: 320, losses: 300, draws: 8, totalMatches: 628,
    ppvMatches: 16, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 112, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1994–2001', careerSpanYears: 7, wweDebut: '1994',
  },
  59: { // Billy Gunn
    wins: 450, losses: 400, draws: 12, totalMatches: 862,
    ppvMatches: 20, mainEvents: 0,
    rumbleAppearances: 7, rumbleEliminations: 5,
    longestReign: 112, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1993–2004', careerSpanYears: 11, wweDebut: '1993',
  },
  63: { // The Godfather
    wins: 210, losses: 220, draws: 5, totalMatches: 435,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 28, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1991–2002', careerSpanYears: 11, wweDebut: '1991',
  },
  64: { // Al Snow
    wins: 260, losses: 310, draws: 6, totalMatches: 576,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 42, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '1995–2003', careerSpanYears: 8, wweDebut: '1995',
  },
  66: { // Test
    wins: 290, losses: 280, draws: 5, totalMatches: 575,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 63, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1998–2004', careerSpanYears: 6, wweDebut: '1998',
  },
  68: { // Tazz
    wins: 120, losses: 130, draws: 3, totalMatches: 253,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2000–2002', careerSpanYears: 2, wweDebut: '2000',
  },
  69: { // Gangrel
    wins: 140, losses: 180, draws: 3, totalMatches: 323,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998',
  },
  70: { // Perry Saturn
    wins: 150, losses: 170, draws: 4, totalMatches: 324,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 35, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '2000–2002', careerSpanYears: 2, wweDebut: '2000',
  },
  71: { // Dean Malenko
    wins: 130, losses: 120, draws: 5, totalMatches: 255,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'WWF Light Heavyweight Championship',
    yearsActive: '2000–2002', careerSpanYears: 2, wweDebut: '2000',
  },
  84: { // Charlie Haas
    wins: 180, losses: 200, draws: 3, totalMatches: 383,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2002–2010', careerSpanYears: 8, wweDebut: '2002',
  },
  111: { // Lance Storm
    wins: 160, losses: 170, draws: 5, totalMatches: 335,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 42, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2001–2005', careerSpanYears: 4, wweDebut: '2001',
  },
  112: { // Tajiri
    wins: 210, losses: 230, draws: 5, totalMatches: 445,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 42, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2001–2005', careerSpanYears: 4, wweDebut: '2001',
  },
  113: { // Funaki
    wins: 140, losses: 350, draws: 3, totalMatches: 493,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '1998–2010', careerSpanYears: 12, wweDebut: '1998',
  },
  114: { // Viscera / Big Daddy V
    wins: 250, losses: 280, draws: 5, totalMatches: 535,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1993–2008', careerSpanYears: 15, wweDebut: '1993',
  },
  116: { // Doink the Clown
    wins: 160, losses: 180, draws: 5, totalMatches: 345,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1992–1995', careerSpanYears: 3, wweDebut: '1992',
  },
  117: { // Tatanka
    wins: 260, losses: 190, draws: 8, totalMatches: 458,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1992–1997', careerSpanYears: 5, wweDebut: '1992',
  },
  118: { // Faarooq / Ron Simmons
    wins: 280, losses: 310, draws: 8, totalMatches: 598,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 77, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1996–2004', careerSpanYears: 8, wweDebut: '1996',
  },
  120: { // Raven
    wins: 140, losses: 180, draws: 3, totalMatches: 323,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '2000–2003', careerSpanYears: 3, wweDebut: '2000',
  },
  124: { // Ivory
    wins: 120, losses: 100, draws: 2, totalMatches: 222,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 112, longestReignTitle: "WWF Women's Championship",
    yearsActive: '1999–2003', careerSpanYears: 4, wweDebut: '1999',
  },
  125: { // Hurricane Helms
    wins: 280, losses: 340, draws: 5, totalMatches: 625,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 56, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2001–2010', careerSpanYears: 9, wweDebut: '2001',
  },
  126: { // Rhyno
    wins: 220, losses: 260, draws: 5, totalMatches: 485,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'SmackDown Tag Team Championship',
    yearsActive: '2001–2019', careerSpanYears: 18, wweDebut: '2001',
  },
  137: { // Aleister Black / Malakai Black
    wins: 120, losses: 50, draws: 2, totalMatches: 172,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 175, longestReignTitle: 'NXT Championship',
    yearsActive: '2017–2021', careerSpanYears: 4, wweDebut: '2017',
  },
  138: { // Theory / Austin Theory
    wins: 170, losses: 130, draws: 2, totalMatches: 302,
    ppvMatches: 12, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 133, longestReignTitle: 'United States Championship',
    yearsActive: '2019–2025', careerSpanYears: 6, wweDebut: '2019',
  },
  142: { // Nikolai Volkoff
    wins: 310, losses: 380, draws: 10, totalMatches: 700,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 189, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1974–1992', careerSpanYears: 18, wweDebut: '1974',
  },
  144: { // George "The Animal" Steele
    wins: 280, losses: 310, draws: 10, totalMatches: 600,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1967–1988', careerSpanYears: 21, wweDebut: '1967',
  },
  145: { // Bobby Heenan (occasional wrestler)
    wins: 30, losses: 60, draws: 2, totalMatches: 92,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1984–1993', careerSpanYears: 9, wweDebut: '1984',
  },
  146: { // Jim Cornette (occasional wrestler)
    wins: 10, losses: 25, draws: 1, totalMatches: 36,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1993–1997', careerSpanYears: 4, wweDebut: '1993',
  },
  156: { // Marty Jannetty
    wins: 280, losses: 310, draws: 8, totalMatches: 598,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 56, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1988–1996', careerSpanYears: 8, wweDebut: '1988',
  },
  166: { // Stephanie McMahon
    wins: 15, losses: 25, draws: 1, totalMatches: 41,
    ppvMatches: 5, mainEvents: 1,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 287, longestReignTitle: "WWF Women's Championship",
    yearsActive: '2000–2018', careerSpanYears: 18, wweDebut: '2000',
  },
  168: { // Jerry Lawler
    wins: 310, losses: 280, draws: 10, totalMatches: 600,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 7, rumbleEliminations: 5,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1993–2012', careerSpanYears: 19, wweDebut: '1993',
  },
  170: { // Snitsky
    wins: 110, losses: 150, draws: 2, totalMatches: 262,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2004–2008', careerSpanYears: 4, wweDebut: '2004',
  },
  172: { // Paul London
    wins: 210, losses: 230, draws: 3, totalMatches: 443,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 331, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2003–2008', careerSpanYears: 5, wweDebut: '2003',
  },
  173: { // Brian Kendrick
    wins: 200, losses: 240, draws: 3, totalMatches: 443,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 331, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2003–2018', careerSpanYears: 15, wweDebut: '2003',
  },
  175: { // Melina
    wins: 160, losses: 140, draws: 2, totalMatches: 302,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 126, longestReignTitle: "WWE Women's Championship",
    yearsActive: '2005–2011', careerSpanYears: 6, wweDebut: '2005',
  },
  179: { // Super Crazy
    wins: 80, losses: 100, draws: 2, totalMatches: 182,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2005–2008', careerSpanYears: 3, wweDebut: '2005',
  },
  180: { // Nunzio
    wins: 120, losses: 190, draws: 2, totalMatches: 312,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2002–2008', careerSpanYears: 6, wweDebut: '2002',
  },
  181: { // Chuck Palumbo
    wins: 160, losses: 200, draws: 3, totalMatches: 363,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'WCW Tag Team Championship',
    yearsActive: '2001–2008', careerSpanYears: 7, wweDebut: '2001',
  },
  183: { // Heidenreich
    wins: 80, losses: 90, draws: 1, totalMatches: 171,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 35, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2004–2006', careerSpanYears: 2, wweDebut: '2004',
  },
  184: { // Orlando Jordan
    wins: 90, losses: 120, draws: 2, totalMatches: 212,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'United States Championship',
    yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003',
  },
  186: { // Kenzo Suzuki
    wins: 50, losses: 70, draws: 1, totalMatches: 121,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 42, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2004–2005', careerSpanYears: 1, wweDebut: '2004',
  },
  187: { // Chavo Guerrero Jr.
    wins: 320, losses: 380, draws: 8, totalMatches: 708,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 2,
    longestReign: 77, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2001–2011', careerSpanYears: 10, wweDebut: '2001',
  },
  189: { // René Duprée
    wins: 80, losses: 110, draws: 1, totalMatches: 191,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2003–2007', careerSpanYears: 4, wweDebut: '2003',
  },
  190: { // Zack Ryder
    wins: 260, losses: 380, draws: 5, totalMatches: 645,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 1,
    longestReign: 28, longestReignTitle: 'United States Championship',
    yearsActive: '2006–2020', careerSpanYears: 14, wweDebut: '2006',
  },
  191: { // Santino Marella
    wins: 240, losses: 320, draws: 5, totalMatches: 565,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 63, longestReignTitle: 'WWE Intercontinental Championship',
    yearsActive: '2007–2014', careerSpanYears: 7, wweDebut: '2007',
  },
  193: { // Ezekiel Jackson
    wins: 80, losses: 70, draws: 1, totalMatches: 151,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'WWE Intercontinental Championship',
    yearsActive: '2008–2012', careerSpanYears: 4, wweDebut: '2008',
  },
  194: { // Tyson Kidd
    wins: 200, losses: 250, draws: 3, totalMatches: 453,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2008–2015', careerSpanYears: 7, wweDebut: '2008',
  },
  195: { // David Hart Smith
    wins: 80, losses: 90, draws: 1, totalMatches: 171,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'WWE Unified Tag Team Championship',
    yearsActive: '2007–2011', careerSpanYears: 4, wweDebut: '2007',
  },
  197: { // Heath Slater
    wins: 210, losses: 400, draws: 5, totalMatches: 615,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'SmackDown Tag Team Championship',
    yearsActive: '2010–2020', careerSpanYears: 10, wweDebut: '2010',
  },
  201: { // Damien Sandow
    wins: 180, losses: 280, draws: 3, totalMatches: 463,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2012–2016', careerSpanYears: 4, wweDebut: '2012',
  },
  202: { // Fandango
    wins: 160, losses: 230, draws: 3, totalMatches: 393,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2013–2021', careerSpanYears: 8, wweDebut: '2013',
  },
  203: { // Bo Dallas
    wins: 160, losses: 210, draws: 2, totalMatches: 372,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 182, longestReignTitle: 'NXT Championship',
    yearsActive: '2012–2019', careerSpanYears: 7, wweDebut: '2012',
  },
  205: { // Luke Harper / Brodie Lee
    wins: 260, losses: 240, draws: 5, totalMatches: 505,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 77, longestReignTitle: 'SmackDown Tag Team Championship',
    yearsActive: '2012–2019', careerSpanYears: 7, wweDebut: '2012',
  },
  206: { // Erick Rowan
    wins: 170, losses: 230, draws: 3, totalMatches: 403,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 77, longestReignTitle: 'SmackDown Tag Team Championship',
    yearsActive: '2012–2020', careerSpanYears: 8, wweDebut: '2012',
  },
  224: { // Zoey Stark
    wins: 90, losses: 60, draws: 1, totalMatches: 151,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  237: { // Scott Steiner
    wins: 240, losses: 180, draws: 8, totalMatches: 428,
    ppvMatches: 10, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 3,
    longestReign: 77, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1992–2004', careerSpanYears: 12, wweDebut: '1992',
  },
  241: { // Tommy Dreamer
    wins: 180, losses: 250, draws: 5, totalMatches: 435,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: 'ECW Championship',
    yearsActive: '2001–2010', careerSpanYears: 9, wweDebut: '2001',
  },
  242: { // Sandman
    wins: 40, losses: 55, draws: 1, totalMatches: 96,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2007–2007', careerSpanYears: 1, wweDebut: '2007',
  },
  243: { // Sabu
    wins: 35, losses: 45, draws: 1, totalMatches: 81,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2006–2007', careerSpanYears: 1, wweDebut: '2006',
  },
  245: { // New Jack
    wins: 10, losses: 15, draws: 0, totalMatches: 25,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2006–2006', careerSpanYears: 1, wweDebut: '2006',
  },
  246: { // Balls Mahoney
    wins: 30, losses: 40, draws: 0, totalMatches: 70,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2006–2008', careerSpanYears: 2, wweDebut: '2006',
  },
  247: { // Spike Dudley
    wins: 130, losses: 230, draws: 3, totalMatches: 363,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 42, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2001–2005', careerSpanYears: 4, wweDebut: '2001',
  },
  248: { // Stevie Richards
    wins: 180, losses: 290, draws: 3, totalMatches: 473,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '2000–2008', careerSpanYears: 8, wweDebut: '2000',
  },
  250: { // Billy Kidman
    wins: 150, losses: 180, draws: 3, totalMatches: 333,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2001–2005', careerSpanYears: 4, wweDebut: '2001',
  },
  251: { // Ultimo Dragon
    wins: 30, losses: 40, draws: 1, totalMatches: 71,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2003–2004', careerSpanYears: 1, wweDebut: '2003',
  },
  252: { // Jamie Noble
    wins: 160, losses: 220, draws: 3, totalMatches: 383,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2002–2009', careerSpanYears: 7, wweDebut: '2002',
  },
  255: { // Hornswoggle
    wins: 80, losses: 130, draws: 2, totalMatches: 212,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2006–2014', careerSpanYears: 8, wweDebut: '2006',
  },
  256: { // Fit Finlay
    wins: 260, losses: 280, draws: 8, totalMatches: 548,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2006–2011', careerSpanYears: 5, wweDebut: '2006',
  },
  258: { // Velveteen Dream
    wins: 60, losses: 50, draws: 1, totalMatches: 111,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2017–2020', careerSpanYears: 3, wweDebut: '2017',
  },
  261: { // Kairi Sane
    wins: 100, losses: 60, draws: 2, totalMatches: 162,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 72, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2017–2020', careerSpanYears: 3, wweDebut: '2017',
  },
  263: { // Ember Moon
    wins: 100, losses: 80, draws: 1, totalMatches: 181,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 139, longestReignTitle: 'NXT Women\'s Championship',
    yearsActive: '2016–2021', careerSpanYears: 5, wweDebut: '2016',
  },
  265: { // Candice LeRae
    wins: 70, losses: 60, draws: 1, totalMatches: 131,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2018–2023', careerSpanYears: 5, wweDebut: '2018',
  },
  266: { // Xia Li
    wins: 40, losses: 50, draws: 0, totalMatches: 90,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2020–2023', careerSpanYears: 3, wweDebut: '2020',
  },
  267: { // Mansoor
    wins: 50, losses: 45, draws: 0, totalMatches: 95,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2019–2022', careerSpanYears: 3, wweDebut: '2019',
  },
  269: { // Jason Jordan
    wins: 100, losses: 80, draws: 1, totalMatches: 181,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 63, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2013–2018', careerSpanYears: 5, wweDebut: '2013',
  },
  271: { // Tyler Breeze
    wins: 120, losses: 170, draws: 2, totalMatches: 292,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2013–2021', careerSpanYears: 8, wweDebut: '2013',
  },
  279: { // Roderick Strong
    wins: 140, losses: 80, draws: 2, totalMatches: 222,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 91, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2017–2025', careerSpanYears: 8, wweDebut: '2017',
  },
  283: { // Brian Pillman
    wins: 180, losses: 160, draws: 5, totalMatches: 345,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1996–1997', careerSpanYears: 1, wweDebut: '1996',
  },
  299: { // Alundra Blayze / Madusa
    wins: 90, losses: 40, draws: 3, totalMatches: 133,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 196, longestReignTitle: "WWF Women's Championship",
    yearsActive: '1993–1995', careerSpanYears: 2, wweDebut: '1993',
  },
  300: { // Wendi Richter
    wins: 70, losses: 30, draws: 2, totalMatches: 102,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 280, longestReignTitle: "WWF Women's Championship",
    yearsActive: '1984–1985', careerSpanYears: 1, wweDebut: '1984',
  },
  301: { // Fabulous Moolah
    wins: 420, losses: 80, draws: 10, totalMatches: 510,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 10170, longestReignTitle: "WWF Women's Championship",
    yearsActive: '1956–2003', careerSpanYears: 47, wweDebut: '1956',
  },
  302: { // Mae Young
    wins: 60, losses: 40, draws: 5, totalMatches: 105,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1999–2010', careerSpanYears: 11, wweDebut: '1999',
  },
  303: { // Molly Holly
    wins: 160, losses: 130, draws: 3, totalMatches: 293,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 133, longestReignTitle: "WWF Women's Championship",
    yearsActive: '2000–2005', careerSpanYears: 5, wweDebut: '2000',
  },
  304: { // Victoria / Tara
    wins: 190, losses: 160, draws: 3, totalMatches: 353,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 112, longestReignTitle: "WWF Women's Championship",
    yearsActive: '2002–2009', careerSpanYears: 7, wweDebut: '2002',
  },
  305: { // Jazz
    wins: 80, losses: 70, draws: 2, totalMatches: 152,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: "WWF Women's Championship",
    yearsActive: '2001–2004', careerSpanYears: 3, wweDebut: '2001',
  },
  306: { // Naomi
    wins: 240, losses: 250, draws: 3, totalMatches: 493,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 77, longestReignTitle: "SmackDown Women's Championship",
    yearsActive: '2012–2022', careerSpanYears: 10, wweDebut: '2012',
  },
  310: { // Lash Legend
    wins: 40, losses: 35, draws: 0, totalMatches: 75,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  312: { // Tyson Tomko
    wins: 70, losses: 90, draws: 1, totalMatches: 161,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2004–2006', careerSpanYears: 2, wweDebut: '2004',
  },
  313: { // Mark Jindrak
    wins: 60, losses: 80, draws: 1, totalMatches: 141,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2002–2005', careerSpanYears: 3, wweDebut: '2002',
  },
  315: { // Muhammad Hassan
    wins: 40, losses: 20, draws: 0, totalMatches: 60,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2004–2005', careerSpanYears: 1, wweDebut: '2004',
  },
  320: { // Ryback
    wins: 170, losses: 120, draws: 3, totalMatches: 293,
    ppvMatches: 10, mainEvents: 3,
    rumbleAppearances: 2, rumbleEliminations: 4,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2010–2016', careerSpanYears: 6, wweDebut: '2010',
  },
  332: { // Dijak / T-BAR
    wins: 70, losses: 60, draws: 1, totalMatches: 131,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2017–2024', careerSpanYears: 7, wweDebut: '2017',
  },
  333: { // Omos
    wins: 50, losses: 30, draws: 0, totalMatches: 80,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2023', careerSpanYears: 2, wweDebut: '2021',
  },
  334: { // Madcap Moss / Baron Corbin sidekick
    wins: 80, losses: 70, draws: 1, totalMatches: 151,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2023', careerSpanYears: 2, wweDebut: '2021',
  },
  335: { // Ivar (Viking Raiders)
    wins: 190, losses: 120, draws: 2, totalMatches: 312,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 91, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  337: { // Tiger Ali Singh
    wins: 30, losses: 50, draws: 0, totalMatches: 80,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1997–1999', careerSpanYears: 2, wweDebut: '1997',
  },
  338: { // Yoshi Tatsu
    wins: 60, losses: 100, draws: 1, totalMatches: 161,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2009–2014', careerSpanYears: 5, wweDebut: '2009',
  },
  340: { // Hideo Itami / KENTA
    wins: 50, losses: 45, draws: 1, totalMatches: 96,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2014–2019', careerSpanYears: 5, wweDebut: '2014',
  },
  342: { // Mojo Rawley
    wins: 80, losses: 110, draws: 1, totalMatches: 191,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2015–2020', careerSpanYears: 5, wweDebut: '2015',
  },
  344: { // Primo Colon
    wins: 180, losses: 250, draws: 3, totalMatches: 433,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 56, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2008–2016', careerSpanYears: 8, wweDebut: '2008',
  },
  345: { // Ali / Mustafa Ali
    wins: 140, losses: 160, draws: 2, totalMatches: 302,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2016–2023', careerSpanYears: 7, wweDebut: '2016',
  },
  346: { // Gorilla Monsoon
    wins: 450, losses: 280, draws: 20, totalMatches: 750,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1963–1981', careerSpanYears: 18, wweDebut: '1963',
  },
  351: { // Mil Mascaras
    wins: 120, losses: 30, draws: 5, totalMatches: 155,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1972–1983', careerSpanYears: 11, wweDebut: '1972',
  },
  352: { // Stan Hansen
    wins: 200, losses: 120, draws: 10, totalMatches: 330,
    ppvMatches: 1, mainEvents: 1,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1976–1981', careerSpanYears: 5, wweDebut: '1976',
  },
  353: { // Jesse Ventura
    wins: 180, losses: 210, draws: 8, totalMatches: 398,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1979–1986', careerSpanYears: 7, wweDebut: '1979',
  },
  355: { // Ivan Koloff
    wins: 320, losses: 280, draws: 15, totalMatches: 615,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 21, longestReignTitle: 'WWWF Championship',
    yearsActive: '1969–1980', careerSpanYears: 11, wweDebut: '1969',
  },
  356: { // Chief Jay Strongbow
    wins: 400, losses: 300, draws: 15, totalMatches: 715,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 175, longestReignTitle: 'WWWF Tag Team Championship',
    yearsActive: '1970–1985', careerSpanYears: 15, wweDebut: '1970',
  },
  357: { // Blackjack Mulligan
    wins: 350, losses: 260, draws: 12, totalMatches: 622,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1975–1985', careerSpanYears: 10, wweDebut: '1975',
  },

  // ── TAG TEAM ENTRIES ──
  15: { // Demolition (team entry)
    wins: 480, losses: 200, draws: 10, totalMatches: 690,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 478, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1987–1991', careerSpanYears: 4, wweDebut: '1987',
  },
  16: { // British Bulldogs (team entry)
    wins: 300, losses: 180, draws: 8, totalMatches: 488,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 252, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1984–1988', careerSpanYears: 4, wweDebut: '1984',
  },
  51: { // Dudley Boyz (team entry)
    wins: 510, losses: 380, draws: 10, totalMatches: 900,
    ppvMatches: 35, mainEvents: 2,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 112, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1999–2015', careerSpanYears: 16, wweDebut: '1999',
  },
  52: { // D-Von Dudley (individual)
    wins: 410, losses: 380, draws: 8, totalMatches: 798,
    ppvMatches: 30, mainEvents: 1,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 112, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1999–2015', careerSpanYears: 16, wweDebut: '1999',
  },
  67: { // APA (team entry)
    wins: 280, losses: 240, draws: 5, totalMatches: 525,
    ppvMatches: 12, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1998–2004', careerSpanYears: 6, wweDebut: '1998',
  },
  105: { // The New Day (team entry)
    wins: 620, losses: 350, draws: 10, totalMatches: 980,
    ppvMatches: 40, mainEvents: 2,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 483, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2014–2025', careerSpanYears: 11, wweDebut: '2014',
  },
  129: { // The Usos (team entry)
    wins: 580, losses: 320, draws: 8, totalMatches: 908,
    ppvMatches: 38, mainEvents: 3,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 620, longestReignTitle: 'WWE Undisputed Tag Team Championship',
    yearsActive: '2010–2025', careerSpanYears: 15, wweDebut: '2010',
  },
  148: { // The Nasty Boys (team entry)
    wins: 220, losses: 200, draws: 5, totalMatches: 425,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 105, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1991–1994', careerSpanYears: 3, wweDebut: '1991',
  },
  149: { // Legion of Doom (team entry)
    wins: 480, losses: 220, draws: 12, totalMatches: 712,
    ppvMatches: 12, mainEvents: 1,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 266, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1990–2003', careerSpanYears: 13, wweDebut: '1990',
  },
  150: { // The Bushwhackers (team entry)
    wins: 280, losses: 310, draws: 8, totalMatches: 598,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1988–1996', careerSpanYears: 8, wweDebut: '1988',
  },
  151: { // Natural Disasters (team entry)
    wins: 180, losses: 120, draws: 5, totalMatches: 305,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 133, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1991–1993', careerSpanYears: 2, wweDebut: '1991',
  },
  152: { // Money Inc. (team entry)
    wins: 200, losses: 140, draws: 5, totalMatches: 345,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 147, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1992–1993', careerSpanYears: 1, wweDebut: '1992',
  },
  158: { // Smoking Gunns (team entry)
    wins: 180, losses: 160, draws: 3, totalMatches: 343,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1993–1996', careerSpanYears: 3, wweDebut: '1993',
  },
  159: { // The Headshrinkers (team entry)
    wins: 160, losses: 140, draws: 3, totalMatches: 303,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1992–1994', careerSpanYears: 2, wweDebut: '1992',
  },
  174: { // MNM (team entry)
    wins: 180, losses: 120, draws: 3, totalMatches: 303,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 119, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2005–2007', careerSpanYears: 2, wweDebut: '2005',
  },
  272: { // The Viking Raiders (team entry)
    wins: 190, losses: 120, draws: 2, totalMatches: 312,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2019–2024', careerSpanYears: 5, wweDebut: '2019',
  },
  275: { // The Revival (team entry)
    wins: 195, losses: 130, draws: 5, totalMatches: 330,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2013–2020', careerSpanYears: 7, wweDebut: '2013',
  },
  281: { // Too Cool (team entry)
    wins: 200, losses: 220, draws: 5, totalMatches: 425,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1999–2001', careerSpanYears: 2, wweDebut: '1999',
  },
  658: { // The Bar (Sheamus & Cesaro team entry)
    wins: 200, losses: 150, draws: 3, totalMatches: 353,
    ppvMatches: 14, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2016–2019', careerSpanYears: 3, wweDebut: '2016',
  },
  691: { // The Rockers (team entry)
    wins: 280, losses: 200, draws: 8, totalMatches: 488,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1988–1992', careerSpanYears: 4, wweDebut: '1988',
  },
  700: { // The Steiner Brothers (team entry)
    wins: 180, losses: 120, draws: 5, totalMatches: 305,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1992–1994', careerSpanYears: 2, wweDebut: '1992',
  },
  720: { // Edge & Christian (team entry)
    wins: 320, losses: 240, draws: 5, totalMatches: 565,
    ppvMatches: 20, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 98, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998',
  },
  778: { // The Street Profits (team entry)
    wins: 260, losses: 180, draws: 3, totalMatches: 443,
    ppvMatches: 16, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 119, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2018–2025', careerSpanYears: 7, wweDebut: '2018',
  },
  865: { // Axiom & Nathan Frazer (team entry)
    wins: 70, losses: 40, draws: 0, totalMatches: 110,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023',
  },
  911: { // Alba Fyre & Isla Dawn (team entry)
    wins: 65, losses: 40, draws: 0, totalMatches: 105,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023',
  },
  780: { // The Hurt Business (team entry)
    wins: 120, losses: 80, draws: 2, totalMatches: 202,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2020–2021', careerSpanYears: 1, wweDebut: '2020',
  },

  // ── MODERN ERA / NXT ──
  314: { // Kevin Thorn
    wins: 40, losses: 50, draws: 0, totalMatches: 90,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2006–2008', careerSpanYears: 2, wweDebut: '2006',
  },
  328: { // Hiromu Takahashi
    wins: 5, losses: 5, draws: 0, totalMatches: 10,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2010–2012', careerSpanYears: 2, wweDebut: '2010',
  },
  372: { // Road Dogg Jesse James (duplicate of 58, same stats)
    wins: 320, losses: 300, draws: 8, totalMatches: 628,
    ppvMatches: 16, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 112, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1994–2001', careerSpanYears: 7, wweDebut: '1994',
  },
  379: { // Ted DiBiase Jr.
    wins: 130, losses: 170, draws: 2, totalMatches: 302,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2008–2013', careerSpanYears: 5, wweDebut: '2008',
  },
  380: { // Curt Hawkins
    wins: 140, losses: 250, draws: 2, totalMatches: 392,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'Raw Tag Team Championship',
    yearsActive: '2007–2019', careerSpanYears: 12, wweDebut: '2007',
  },
  382: { // Maria Kanellis
    wins: 20, losses: 40, draws: 0, totalMatches: 60,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2005–2019', careerSpanYears: 14, wweDebut: '2005',
  },
  383: { // Michelle McCool
    wins: 160, losses: 100, draws: 2, totalMatches: 262,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 119, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2006–2011', careerSpanYears: 5, wweDebut: '2006',
  },
  384: { // Layla El
    wins: 140, losses: 150, draws: 2, totalMatches: 292,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 112, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2006–2015', careerSpanYears: 9, wweDebut: '2006',
  },
  385: { // Gail Kim
    wins: 90, losses: 80, draws: 1, totalMatches: 171,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 28, longestReignTitle: "WWF Women's Championship",
    yearsActive: '2003–2011', careerSpanYears: 8, wweDebut: '2003',
  },
  386: { // Boogeyman
    wins: 60, losses: 50, draws: 0, totalMatches: 110,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2005–2009', careerSpanYears: 4, wweDebut: '2005',
  },
  401: { // Angel Garza
    wins: 60, losses: 70, draws: 1, totalMatches: 131,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2019–2023', careerSpanYears: 4, wweDebut: '2019',
  },
  402: { // Humberto Carrillo
    wins: 70, losses: 90, draws: 1, totalMatches: 161,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2019–2023', careerSpanYears: 4, wweDebut: '2019',
  },
  403: { // Santos Escobar
    wins: 140, losses: 90, draws: 2, totalMatches: 232,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 175, longestReignTitle: 'NXT Cruiserweight Championship',
    yearsActive: '2020–2025', careerSpanYears: 5, wweDebut: '2020',
  },
  409: { // Raquel Rodriguez
    wins: 100, losses: 70, draws: 1, totalMatches: 171,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 3,
    longestReign: 77, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2020–2025', careerSpanYears: 5, wweDebut: '2020',
  },
  411: { // Roxanne Perez
    wins: 80, losses: 40, draws: 1, totalMatches: 121,
    ppvMatches: 5, mainEvents: 1,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 175, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  413: { // Ludwig Kaiser
    wins: 100, losses: 80, draws: 1, totalMatches: 181,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  414: { // Giovanni Vinci
    wins: 80, losses: 70, draws: 1, totalMatches: 151,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022',
  },
  415: { // JD McDonagh
    wins: 90, losses: 60, draws: 1, totalMatches: 151,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 63, longestReignTitle: 'WWE World Tag Team Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  418: { // Ridge Holland
    wins: 60, losses: 70, draws: 0, totalMatches: 130,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2020–2024', careerSpanYears: 4, wweDebut: '2020',
  },
  423: { // Cora Jade
    wins: 50, losses: 40, draws: 0, totalMatches: 90,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  424: { // Indi Hartwell
    wins: 60, losses: 50, draws: 0, totalMatches: 110,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2020–2024', careerSpanYears: 4, wweDebut: '2020',
  },
  425: { // Dexter Lumis
    wins: 70, losses: 50, draws: 1, totalMatches: 121,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2019–2023', careerSpanYears: 4, wweDebut: '2019',
  },
  426: { // Grayson Waller
    wins: 80, losses: 55, draws: 1, totalMatches: 136,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  436: { // The Warlord
    wins: 160, losses: 200, draws: 3, totalMatches: 363,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1988–1992', careerSpanYears: 4, wweDebut: '1988',
  },
  437: { // The Barbarian
    wins: 180, losses: 220, draws: 5, totalMatches: 405,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1988–1995', careerSpanYears: 7, wweDebut: '1988',
  },
  440: { // Haku / Meng
    wins: 260, losses: 310, draws: 8, totalMatches: 578,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1986–2001', careerSpanYears: 15, wweDebut: '1986',
  },
  449: { // The Great Khali
    wins: 140, losses: 120, draws: 3, totalMatches: 263,
    ppvMatches: 8, mainEvents: 2,
    rumbleAppearances: 3, rumbleEliminations: 7,
    longestReign: 62, longestReignTitle: 'World Heavyweight Championship',
    yearsActive: '2006–2014', careerSpanYears: 8, wweDebut: '2006',
  },
  453: { // Brie Bella
    wins: 160, losses: 140, draws: 2, totalMatches: 302,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 70, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2008–2016', careerSpanYears: 8, wweDebut: '2008',
  },
  454: { // Nikki Bella
    wins: 200, losses: 150, draws: 3, totalMatches: 353,
    ppvMatches: 10, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 3,
    longestReign: 301, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2008–2018', careerSpanYears: 10, wweDebut: '2008',
  },
  457: { // Dana Brooke
    wins: 80, losses: 170, draws: 1, totalMatches: 251,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 0,
    longestReign: 35, longestReignTitle: 'WWE 24/7 Championship',
    yearsActive: '2016–2023', careerSpanYears: 7, wweDebut: '2016',
  },
  458: { // Mandy Rose
    wins: 90, losses: 70, draws: 1, totalMatches: 161,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 413, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2017–2022', careerSpanYears: 5, wweDebut: '2017',
  },
  459: { // Jacy Jayne
    wins: 45, losses: 40, draws: 0, totalMatches: 85,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: "NXT Women's Tag Team Championship",
    yearsActive: '2021–2024', careerSpanYears: 3, wweDebut: '2021',
  },
  460: { // Gigi Dolin
    wins: 45, losses: 40, draws: 0, totalMatches: 85,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: "NXT Women's Tag Team Championship",
    yearsActive: '2021–2024', careerSpanYears: 3, wweDebut: '2021',
  },
  465: { // Zelina Vega
    wins: 60, losses: 80, draws: 1, totalMatches: 141,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 28, longestReignTitle: "Queen's Crown",
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  468: { // TAKA Michinoku
    wins: 140, losses: 200, draws: 3, totalMatches: 343,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'WWF Light Heavyweight Championship',
    yearsActive: '1997–2002', careerSpanYears: 5, wweDebut: '1997',
  },
  472: { // Finlay / Fit Finlay
    wins: 260, losses: 280, draws: 8, totalMatches: 548,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2006–2011', careerSpanYears: 5, wweDebut: '2006',
  },
  473: { // Eugene
    wins: 100, losses: 150, draws: 2, totalMatches: 252,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 49, longestReignTitle: 'World Tag Team Championship',
    yearsActive: '2004–2007', careerSpanYears: 3, wweDebut: '2004',
  },
  475: { // Brodus Clay / Funkasaurus
    wins: 60, losses: 50, draws: 0, totalMatches: 110,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2012–2014', careerSpanYears: 2, wweDebut: '2012',
  },
  478: { // Curtis Axel
    wins: 170, losses: 260, draws: 3, totalMatches: 433,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: 'WWE Intercontinental Championship',
    yearsActive: '2008–2020', careerSpanYears: 12, wweDebut: '2008',
  },
  495: { // Wes Lee
    wins: 80, losses: 50, draws: 1, totalMatches: 131,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 119, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2021–2024', careerSpanYears: 3, wweDebut: '2021',
  },
  496: { // Dragon Lee
    wins: 60, losses: 40, draws: 1, totalMatches: 101,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023',
  },
  497: { // Axiom
    wins: 70, losses: 40, draws: 0, totalMatches: 110,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  498: { // Nathan Frazer
    wins: 70, losses: 40, draws: 0, totalMatches: 110,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 91, longestReignTitle: 'NXT Tag Team Championship',
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  500: { // Chelsea Green
    wins: 70, losses: 60, draws: 0, totalMatches: 130,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 63, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2018–2025', careerSpanYears: 7, wweDebut: '2018',
  },
  505: { // Lyra Valkyria
    wins: 70, losses: 40, draws: 1, totalMatches: 111,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 77, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  508: { // Evan Bourne
    wins: 150, losses: 180, draws: 2, totalMatches: 332,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 49, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2008–2012', careerSpanYears: 4, wweDebut: '2008',
  },
  510: { // Sin Cara
    wins: 180, losses: 200, draws: 3, totalMatches: 383,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2011–2019', careerSpanYears: 8, wweDebut: '2011',
  },
  524: { // Tyler Bate
    wins: 60, losses: 40, draws: 1, totalMatches: 101,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 252, longestReignTitle: 'NXT UK Championship',
    yearsActive: '2017–2023', careerSpanYears: 6, wweDebut: '2017',
  },
  527: { // Pete Dunne / Butch
    wins: 110, losses: 80, draws: 2, totalMatches: 192,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 685, longestReignTitle: 'NXT UK Championship',
    yearsActive: '2017–2024', careerSpanYears: 7, wweDebut: '2017',
  },
  529: { // Alba Fyre
    wins: 55, losses: 40, draws: 0, totalMatches: 95,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 77, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  530: { // Isla Dawn
    wins: 55, losses: 40, draws: 0, totalMatches: 95,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 77, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022',
  },
  532: { // Giulia
    wins: 30, losses: 15, draws: 0, totalMatches: 45,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  538: { // Tonga Loa
    wins: 40, losses: 50, draws: 0, totalMatches: 90,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  552: { // Arn Anderson
    wins: 320, losses: 280, draws: 10, totalMatches: 610,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 3,
    longestReign: 133, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1988–1997', careerSpanYears: 9, wweDebut: '1988',
  },
  553: { // Tully Blanchard
    wins: 120, losses: 100, draws: 5, totalMatches: 225,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 133, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1988–1989', careerSpanYears: 1, wweDebut: '1988',
  },
  556: { // Jim Neidhart
    wins: 350, losses: 360, draws: 10, totalMatches: 720,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 4,
    longestReign: 266, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1985–2001', careerSpanYears: 16, wweDebut: '1985',
  },
  557: { // Dino Bravo
    wins: 240, losses: 280, draws: 8, totalMatches: 528,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1985–1992', careerSpanYears: 7, wweDebut: '1985',
  },
  559: { // Crush
    wins: 220, losses: 250, draws: 5, totalMatches: 475,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1990–1997', careerSpanYears: 7, wweDebut: '1990',
  },
  564: { // Marc Mero
    wins: 150, losses: 170, draws: 3, totalMatches: 323,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1996–1999', careerSpanYears: 3, wweDebut: '1996',
  },
  575: { // Mr. Kennedy
    wins: 160, losses: 140, draws: 3, totalMatches: 303,
    ppvMatches: 8, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2005–2009', careerSpanYears: 4, wweDebut: '2005',
  },
  578: { // Chris Masters
    wins: 140, losses: 170, draws: 2, totalMatches: 312,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2005–2011', careerSpanYears: 6, wweDebut: '2005',
  },
  583: { // Eric Young
    wins: 50, losses: 50, draws: 1, totalMatches: 101,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2016–2020', careerSpanYears: 4, wweDebut: '2016',
  },
  590: { // Toni Storm
    wins: 70, losses: 50, draws: 1, totalMatches: 121,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 91, longestReignTitle: "NXT UK Women's Championship",
    yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018',
  },
  604: { // Duke Hudson
    wins: 50, losses: 45, draws: 0, totalMatches: 95,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021',
  },
  620: { // Io Shirai / Iyo Sky (same as 223 but different entry)
    wins: 180, losses: 110, draws: 2, totalMatches: 292,
    ppvMatches: 14, mainEvents: 1,
    rumbleAppearances: 3, rumbleEliminations: 4,
    longestReign: 304, longestReignTitle: "NXT Women's Championship",
    yearsActive: '2018–2025', careerSpanYears: 7, wweDebut: '2018',
  },
  622: { // Swerve Strickland
    wins: 80, losses: 55, draws: 1, totalMatches: 136,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018',
  },
  675: { // Mia Yim
    wins: 70, losses: 60, draws: 0, totalMatches: 130,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  676: { // Lacey Evans
    wins: 70, losses: 60, draws: 1, totalMatches: 131,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2019–2023', careerSpanYears: 4, wweDebut: '2019',
  },
  703: { // Irwin R. Schyster
    wins: 280, losses: 260, draws: 8, totalMatches: 548,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 147, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1991–1995', careerSpanYears: 4, wweDebut: '1991',
  },
  706: { // Hacksaw Jim Duggan
    wins: 350, losses: 310, draws: 10, totalMatches: 670,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 5, rumbleEliminations: 3,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1987–1994', careerSpanYears: 7, wweDebut: '1987',
  },
  710: { // Typhoon
    wins: 180, losses: 200, draws: 5, totalMatches: 385,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 133, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1989–1993', careerSpanYears: 4, wweDebut: '1989',
  },
  806: { // Repo Man
    wins: 80, losses: 110, draws: 2, totalMatches: 192,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1991–1993', careerSpanYears: 2, wweDebut: '1991',
  },
  844: { // Kamala
    wins: 180, losses: 220, draws: 5, totalMatches: 405,
    ppvMatches: 3, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1984–1993', careerSpanYears: 9, wweDebut: '1984',
  },
  868: { // Tamina Snuka
    wins: 110, losses: 170, draws: 2, totalMatches: 282,
    ppvMatches: 6, mainEvents: 0,
    rumbleAppearances: 4, rumbleEliminations: 3,
    longestReign: 63, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2010–2022', careerSpanYears: 12, wweDebut: '2010',
  },
  869: { // Cameron Grimes
    wins: 80, losses: 60, draws: 1, totalMatches: 141,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'NXT North American Championship',
    yearsActive: '2019–2023', careerSpanYears: 4, wweDebut: '2019',
  },
  878: { // Hillbilly Jim
    wins: 220, losses: 230, draws: 5, totalMatches: 455,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1984–1990', careerSpanYears: 6, wweDebut: '1984',
  },
  879: { // Bad News Brown
    wins: 150, losses: 140, draws: 5, totalMatches: 295,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1988–1990', careerSpanYears: 2, wweDebut: '1988',
  },
  887: { // Ahmed Johnson
    wins: 100, losses: 60, draws: 2, totalMatches: 162,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 2,
    longestReign: 35, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1996–1998', careerSpanYears: 2, wweDebut: '1996',
  },
  890: { // Savio Vega
    wins: 200, losses: 240, draws: 5, totalMatches: 445,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1994–1999', careerSpanYears: 5, wweDebut: '1994',
  },
  896: { // Albert / Tensai
    wins: 260, losses: 270, draws: 5, totalMatches: 535,
    ppvMatches: 8, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 3,
    longestReign: 56, longestReignTitle: 'WWF Intercontinental Championship',
    yearsActive: '1999–2014', careerSpanYears: 15, wweDebut: '1999',
  },
  897: { // Maven
    wins: 80, losses: 120, draws: 1, totalMatches: 201,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 28, longestReignTitle: 'WWF Hardcore Championship',
    yearsActive: '2002–2005', careerSpanYears: 3, wweDebut: '2002',
  },
  944: { // Maryse
    wins: 60, losses: 50, draws: 1, totalMatches: 111,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 216, longestReignTitle: "WWE Divas Championship",
    yearsActive: '2008–2018', careerSpanYears: 10, wweDebut: '2008',
  },
  963: { // Nikki Cross
    wins: 90, losses: 100, draws: 1, totalMatches: 191,
    ppvMatches: 5, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 1,
    longestReign: 63, longestReignTitle: "WWE Women's Tag Team Championship",
    yearsActive: '2018–2024', careerSpanYears: 6, wweDebut: '2018',
  },
  964: { // Shotzi
    wins: 60, losses: 65, draws: 0, totalMatches: 125,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 1,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2020–2024', careerSpanYears: 4, wweDebut: '2020',
  },
  973: { // Neville / PAC
    wins: 180, losses: 130, draws: 3, totalMatches: 313,
    ppvMatches: 10, mainEvents: 0,
    rumbleAppearances: 3, rumbleEliminations: 2,
    longestReign: 196, longestReignTitle: 'WWE Cruiserweight Championship',
    yearsActive: '2012–2017', careerSpanYears: 5, wweDebut: '2012',
  },
  1006: { // The Brooklyn Brawler
    wins: 30, losses: 450, draws: 2, totalMatches: 482,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1988–2014', careerSpanYears: 26, wweDebut: '1988',
  },
  1042: { // Hercules Hernandez
    wins: 220, losses: 260, draws: 8, totalMatches: 488,
    ppvMatches: 4, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1985–1992', careerSpanYears: 7, wweDebut: '1985',
  },
  1043: { // One Man Gang / Akeem
    wins: 200, losses: 220, draws: 5, totalMatches: 425,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 2, rumbleEliminations: 2,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1987–1990', careerSpanYears: 3, wweDebut: '1987',
  },
  1047: { // Ronnie Garvin
    wins: 80, losses: 90, draws: 3, totalMatches: 173,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 1, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1989–1990', careerSpanYears: 1, wweDebut: '1989',
  },
  1167: { // Big John Studd
    wins: 300, losses: 260, draws: 10, totalMatches: 570,
    ppvMatches: 3, mainEvents: 1,
    rumbleAppearances: 2, rumbleEliminations: 4,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1982–1989', careerSpanYears: 7, wweDebut: '1982',
  },
  1191: { // Lou Thesz
    wins: 800, losses: 100, draws: 30, totalMatches: 930,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '1949–1956', careerSpanYears: 7, wweDebut: '1949',
  },
  1465: { // Adrian Adonis
    wins: 260, losses: 240, draws: 8, totalMatches: 508,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 196, longestReignTitle: 'WWF Tag Team Championship',
    yearsActive: '1981–1987', careerSpanYears: 6, wweDebut: '1981',
  },
  860: { // Motor City Machine Guns (team entry)
    wins: 50, losses: 30, draws: 0, totalMatches: 80,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1358: { // Alex Shelley (MCMG)
    wins: 50, losses: 30, draws: 0, totalMatches: 80,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1359: { // Chris Sabin (MCMG)
    wins: 50, losses: 30, draws: 0, totalMatches: 80,
    ppvMatches: 3, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 63, longestReignTitle: 'WWE Tag Team Championship',
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1438: { // Zilla Fatu
    wins: 20, losses: 10, draws: 0, totalMatches: 30,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1397: { // Joe Hendry
    wins: 30, losses: 20, draws: 0, totalMatches: 50,
    ppvMatches: 2, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1402: { // Jaida Parker
    wins: 25, losses: 20, draws: 0, totalMatches: 45,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023',
  },
  1403: { // Stephanie Vaquer
    wins: 20, losses: 10, draws: 0, totalMatches: 30,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1404: { // Zaria
    wins: 15, losses: 8, draws: 0, totalMatches: 23,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },
  1575: { // MJF
    wins: 10, losses: 5, draws: 0, totalMatches: 15,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2025–2025', careerSpanYears: 1, wweDebut: '2025',
  },
  1576: { // Britt Baker
    wins: 5, losses: 5, draws: 0, totalMatches: 10,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2025–2025', careerSpanYears: 1, wweDebut: '2025',
  },
  1578: { // Darby Allin
    wins: 5, losses: 5, draws: 0, totalMatches: 10,
    ppvMatches: 0, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2025–2025', careerSpanYears: 1, wweDebut: '2025',
  },
  1629: { // Jordynne Grace
    wins: 10, losses: 10, draws: 0, totalMatches: 20,
    ppvMatches: 1, mainEvents: 0,
    rumbleAppearances: 0, rumbleEliminations: 0,
    longestReign: 0, longestReignTitle: null,
    yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024',
  },

  // ── REMAINING TAG TEAM ENTRIES ──
  121: { wins: 80, losses: 70, draws: 1, totalMatches: 151, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '2000–2001', careerSpanYears: 1, wweDebut: '2000' }, // Test & Albert
  122: { wins: 180, losses: 200, draws: 3, totalMatches: 383, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 35, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1996–1999', careerSpanYears: 3, wweDebut: '1996' }, // The Godwinns
  123: { wins: 120, losses: 150, draws: 2, totalMatches: 272, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1996–2000', careerSpanYears: 4, wweDebut: '1996' }, // The Headbangers
  163: { wins: 80, losses: 100, draws: 2, totalMatches: 182, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2000–2001', careerSpanYears: 1, wweDebut: '2000' }, // Right to Censor
  164: { wins: 20, losses: 60, draws: 0, totalMatches: 80, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1999–2001', careerSpanYears: 2, wweDebut: '1999' }, // Mean Street Posse
  185: { wins: 60, losses: 50, draws: 1, totalMatches: 111, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'World Tag Team Championship', yearsActive: '2004–2005', careerSpanYears: 1, wweDebut: '2004' }, // William Regal & Eugene
  196: { wins: 100, losses: 80, draws: 2, totalMatches: 182, ppvMatches: 6, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2010–2011', careerSpanYears: 1, wweDebut: '2010' }, // Nexus
  297: { wins: 200, losses: 120, draws: 3, totalMatches: 323, ppvMatches: 14, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 245, longestReignTitle: 'WWE World Tag Team Championship', yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022' }, // The Judgment Day
  343: { wins: 80, losses: 120, draws: 1, totalMatches: 201, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2013–2016', careerSpanYears: 3, wweDebut: '2013' }, // The Ascension
  359: { wins: 310, losses: 240, draws: 10, totalMatches: 560, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 196, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1974–1979', careerSpanYears: 5, wweDebut: '1974' }, // The Valiant Brothers
  360: { wins: 280, losses: 200, draws: 10, totalMatches: 490, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 175, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1980–1985', careerSpanYears: 5, wweDebut: '1980' }, // The Wild Samoans
  421: { wins: 120, losses: 80, draws: 2, totalMatches: 202, ppvMatches: 8, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2019–2024', careerSpanYears: 5, wweDebut: '2019' }, // Imperium
  517: { wins: 60, losses: 40, draws: 0, totalMatches: 100, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: "NXT Women's Tag Team Championship", yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Katana Chance & Kayden Carter
  499: { wins: 80, losses: 50, draws: 0, totalMatches: 130, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 105, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022' }, // Pretty Deadly
  645: { wins: 80, losses: 50, draws: 1, totalMatches: 131, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2003–2004', careerSpanYears: 1, wweDebut: '2003' }, // Team Angle
  647: { wins: 150, losses: 130, draws: 3, totalMatches: 283, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 112, longestReignTitle: 'World Tag Team Championship', yearsActive: '2003–2007', careerSpanYears: 4, wweDebut: '2003' }, // La Résistance
  648: { wins: 40, losses: 60, draws: 0, totalMatches: 100, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2008', careerSpanYears: 2, wweDebut: '2006' }, // The Highlanders
  654: { wins: 100, losses: 120, draws: 1, totalMatches: 221, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2009–2014', careerSpanYears: 5, wweDebut: '2009' }, // Primo & Epico
  655: { wins: 50, losses: 60, draws: 0, totalMatches: 110, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2015–2016', careerSpanYears: 1, wweDebut: '2015' }, // The Vaudevillains
  656: { wins: 100, losses: 80, draws: 1, totalMatches: 181, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2017', careerSpanYears: 4, wweDebut: '2013' }, // Enzo Amore & Big Cass
  657: { wins: 100, losses: 60, draws: 1, totalMatches: 161, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2014–2017', careerSpanYears: 3, wweDebut: '2014' }, // American Alpha
  659: { wins: 95, losses: 60, draws: 1, totalMatches: 156, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 91, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2016–2020', careerSpanYears: 4, wweDebut: '2016' }, // The Authors of Pain
  660: { wins: 80, losses: 60, draws: 1, totalMatches: 141, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Heavy Machinery
  683: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Josh Briggs & Brooks Jensen
  685: { wins: 30, losses: 25, draws: 0, totalMatches: 55, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023' }, // Hank Walker & Tank Ledger
  689: { wins: 50, losses: 45, draws: 1, totalMatches: 96, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 42, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2019–2021', careerSpanYears: 2, wweDebut: '2019' }, // Danny Burch & Oney Lorcan
  690: { wins: 60, losses: 35, draws: 0, totalMatches: 95, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // MSK
  692: { wins: 300, losses: 180, draws: 8, totalMatches: 488, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 252, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1984–1988', careerSpanYears: 4, wweDebut: '1984' }, // The British Bulldogs (team)
  693: { wins: 120, losses: 150, draws: 3, totalMatches: 273, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1992', careerSpanYears: 2, wweDebut: '1990' }, // The Orient Express
  695: { wins: 100, losses: 130, draws: 2, totalMatches: 232, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1991–1993', careerSpanYears: 2, wweDebut: '1991' }, // The Beverly Brothers
  696: { wins: 140, losses: 130, draws: 3, totalMatches: 273, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 98, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1993–1994', careerSpanYears: 1, wweDebut: '1993' }, // The Quebecers
  697: { wins: 100, losses: 120, draws: 2, totalMatches: 222, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1993–1996', careerSpanYears: 3, wweDebut: '1993' }, // Men on a Mission
  698: { wins: 30, losses: 50, draws: 0, totalMatches: 80, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1996', careerSpanYears: 1, wweDebut: '1995' }, // Well Dunn
  699: { wins: 160, losses: 140, draws: 3, totalMatches: 303, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1992–1994', careerSpanYears: 2, wweDebut: '1992' }, // The Headshrinkers (team)
  719: { wins: 30, losses: 20, draws: 0, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '2000–2000', careerSpanYears: 1, wweDebut: '2000' }, // The Godfather & D'Lo
  744: { wins: 30, losses: 20, draws: 1, totalMatches: 51, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '2001–2001', careerSpanYears: 1, wweDebut: '2001' }, // Kurt Angle & Chris Benoit
  745: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2005–2005', careerSpanYears: 1, wweDebut: '2005' }, // Rey Mysterio & Rob Van Dam
  750: { wins: 180, losses: 160, draws: 2, totalMatches: 342, ppvMatches: 8, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 331, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2005–2008', careerSpanYears: 3, wweDebut: '2005' }, // Paul London & Brian Kendrick
  756: { wins: 80, losses: 60, draws: 1, totalMatches: 141, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2014–2015', careerSpanYears: 1, wweDebut: '2014' }, // Cesaro & Tyson Kidd
  771: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2005–2005', careerSpanYears: 1, wweDebut: '2005' }, // Batista & Rey Mysterio
  777: { wins: 200, losses: 150, draws: 3, totalMatches: 353, ppvMatches: 14, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 77, longestReignTitle: 'Raw Tag Team Championship', yearsActive: '2016–2019', careerSpanYears: 3, wweDebut: '2016' }, // Sheamus & Cesaro
  781: { wins: 80, losses: 50, draws: 1, totalMatches: 131, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'Raw Tag Team Championship', yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // RKBro
  783: { wins: 60, losses: 50, draws: 0, totalMatches: 110, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2020–2022', careerSpanYears: 2, wweDebut: '2020' }, // Otis & Chad Gable
  785: { wins: 60, losses: 50, draws: 0, totalMatches: 110, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Alpha Academy
  787: { wins: 40, losses: 50, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2020–2023', careerSpanYears: 3, wweDebut: '2020' }, // Hit Row
  790: { wins: 60, losses: 80, draws: 0, totalMatches: 140, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Lucha House Party
  798: { wins: 60, losses: 70, draws: 1, totalMatches: 131, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1991', careerSpanYears: 1, wweDebut: '1990' }, // Power and Glory
  800: { wins: 140, losses: 120, draws: 3, totalMatches: 263, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1987–1989', careerSpanYears: 2, wweDebut: '1987' }, // Strike Force
  801: { wins: 150, losses: 130, draws: 3, totalMatches: 283, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 3, wweDebut: '1985' }, // The Killer Bees
  802: { wins: 180, losses: 160, draws: 5, totalMatches: 345, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1986–1990', careerSpanYears: 4, wweDebut: '1986' }, // The Fabulous Rougeau Brothers
  803: { wins: 40, losses: 30, draws: 1, totalMatches: 71, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1989–1990', careerSpanYears: 1, wweDebut: '1989' }, // The Colossal Connection
  804: { wins: 60, losses: 120, draws: 1, totalMatches: 181, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1990', careerSpanYears: 3, wweDebut: '1987' }, // The Bolsheviks
  805: { wins: 30, losses: 40, draws: 0, totalMatches: 70, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1991', careerSpanYears: 1, wweDebut: '1990' }, // Rhythm & Blues
  807: { wins: 40, losses: 50, draws: 0, totalMatches: 90, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1992–1993', careerSpanYears: 1, wweDebut: '1992' }, // High Energy
  810: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1997–1997', careerSpanYears: 1, wweDebut: '1997' }, // The Eliminators
  813: { wins: 120, losses: 110, draws: 3, totalMatches: 233, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2000–2001', careerSpanYears: 1, wweDebut: '2000' }, // The Radicalz
  822: { wins: 60, losses: 50, draws: 0, totalMatches: 110, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'World Tag Team Championship', yearsActive: '2002–2005', careerSpanYears: 3, wweDebut: '2002' }, // Hurricane Helms & Rosey
  910: { wins: 60, losses: 40, draws: 0, totalMatches: 100, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Gallus
  952: { wins: 100, losses: 120, draws: 1, totalMatches: 221, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2010–2013', careerSpanYears: 3, wweDebut: '2010' }, // Prime Time Players
  953: { wins: 80, losses: 100, draws: 1, totalMatches: 181, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2009', careerSpanYears: 3, wweDebut: '2006' }, // Cryme Tyme
  954: { wins: 60, losses: 70, draws: 0, totalMatches: 130, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 35, longestReignTitle: 'World Tag Team Championship', yearsActive: '2006–2007', careerSpanYears: 1, wweDebut: '2006' }, // Spirit Squad
  955: { wins: 50, losses: 60, draws: 0, totalMatches: 110, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2007–2008', careerSpanYears: 1, wweDebut: '2007' }, // Deuce and Domino
  962: { wins: 60, losses: 80, draws: 0, totalMatches: 140, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2015', careerSpanYears: 2, wweDebut: '2013' }, // Los Matadores
  1020: { wins: 150, losses: 130, draws: 3, totalMatches: 283, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 112, longestReignTitle: 'World Tag Team Championship', yearsActive: '2003–2007', careerSpanYears: 4, wweDebut: '2003' }, // La Resistance (team)
  1021: { wins: 60, losses: 50, draws: 0, totalMatches: 110, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 42, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2004–2005', careerSpanYears: 1, wweDebut: '2004' }, // The Basham Brothers

  // ── REMAINING INDIVIDUALS — BATCH 2 ──
  231: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1993–2003', careerSpanYears: 10, wweDebut: '1993' }, // Jim Ross
  233: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1996–2004', careerSpanYears: 8, wweDebut: '1996' }, // Sable
  234: { wins: 25, losses: 20, draws: 0, totalMatches: 45, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2003', careerSpanYears: 2, wweDebut: '2001' }, // Torrie Wilson
  235: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2006', careerSpanYears: 5, wweDebut: '2001' }, // Stacy Keibler
  278: { wins: 85, losses: 75, draws: 1, totalMatches: 161, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 70, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2017–2021', careerSpanYears: 4, wweDebut: '2017' }, // Kyle O'Reilly
  442: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1999–2001', careerSpanYears: 2, wweDebut: '1999' }, // The Kat
  443: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1996–2002', careerSpanYears: 6, wweDebut: '1996' }, // Terri Runnels
  446: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2002–2004', careerSpanYears: 2, wweDebut: '2002' }, // Dawn Marie
  447: { wins: 15, losses: 20, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2002–2004', careerSpanYears: 2, wweDebut: '2002' }, // Nidia
  461: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: "NXT Women's Tag Team Championship", yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Katana Chance
  462: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: "NXT Women's Tag Team Championship", yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Kayden Carter
  464: { wins: 30, losses: 40, draws: 0, totalMatches: 70, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2021', careerSpanYears: 5, wweDebut: '2016' }, // Lana
  467: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2010–2015', careerSpanYears: 5, wweDebut: '2010' }, // Ricardo Rodriguez
  469: { wins: 50, losses: 70, draws: 1, totalMatches: 121, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1999–2001', careerSpanYears: 2, wweDebut: '1999' }, // Essa Rios
  471: { wins: 40, losses: 50, draws: 0, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2008', careerSpanYears: 2, wweDebut: '2006' }, // Paul Burchill
  476: { wins: 10, losses: 20, draws: 0, totalMatches: 30, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2012–2014', careerSpanYears: 2, wweDebut: '2012' }, // Cameron
  518: { wins: 60, losses: 45, draws: 0, totalMatches: 105, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021' }, // Tony D'Angelo
  519: { wins: 45, losses: 40, draws: 0, totalMatches: 85, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022' }, // Stacks
  520: { wins: 55, losses: 35, draws: 0, totalMatches: 90, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2021–2023', careerSpanYears: 2, wweDebut: '2021' }, // Julius Creed
  521: { wins: 55, losses: 35, draws: 0, totalMatches: 90, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2021–2023', careerSpanYears: 2, wweDebut: '2021' }, // Brutus Creed
  522: { wins: 30, losses: 25, draws: 0, totalMatches: 55, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Ivy Nile
  528: { wins: 40, losses: 35, draws: 0, totalMatches: 75, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2017–2023', careerSpanYears: 6, wweDebut: '2017' }, // Trent Seven
  531: { wins: 20, losses: 20, draws: 0, totalMatches: 40, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // Sarray
  554: { wins: 180, losses: 160, draws: 5, totalMatches: 345, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 2, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1993', careerSpanYears: 5, wweDebut: '1988' }, // Barry Windham
  555: { wins: 200, losses: 180, draws: 5, totalMatches: 385, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 1, longestReign: 49, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1984–1995', careerSpanYears: 11, wweDebut: '1984' }, // Mike Rotundo
  565: { wins: 120, losses: 150, draws: 2, totalMatches: 272, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '1993–1995', careerSpanYears: 2, wweDebut: '1993' }, // Adam Bomb
  572: { wins: 40, losses: 50, draws: 0, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2008', careerSpanYears: 2, wweDebut: '2006' }, // Elijah Burke
  585: { wins: 40, losses: 35, draws: 0, totalMatches: 75, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2020', careerSpanYears: 7, wweDebut: '2013' }, // EC3
  587: { wins: 30, losses: 20, draws: 0, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2019–2020', careerSpanYears: 1, wweDebut: '2019' }, // Lars Sullivan
  602: { wins: 40, losses: 35, draws: 0, totalMatches: 75, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Tegan Nox
  606: { wins: 50, losses: 40, draws: 1, totalMatches: 91, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2021', careerSpanYears: 5, wweDebut: '2016' }, // Killian Dain
  607: { wins: 40, losses: 35, draws: 0, totalMatches: 75, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2017–2020', careerSpanYears: 3, wweDebut: '2017' }, // Alexander Wolfe
  608: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2019–2022', careerSpanYears: 3, wweDebut: '2019' }, // Marcel Barthel
  609: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2019–2022', careerSpanYears: 3, wweDebut: '2019' }, // Fabian Aichner
  610: { wins: 40, losses: 30, draws: 0, totalMatches: 70, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2020–2022', careerSpanYears: 2, wweDebut: '2020' }, // Grizzled Young Veterans
  611: { wins: 30, losses: 25, draws: 0, totalMatches: 55, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 42, longestReignTitle: 'NXT UK Tag Team Championship', yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018' }, // Mark Andrews & Flash Morgan Webster
  612: { wins: 40, losses: 35, draws: 0, totalMatches: 75, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 91, longestReignTitle: 'NXT UK Heritage Cup', yearsActive: '2018–2023', careerSpanYears: 5, wweDebut: '2018' }, // Noam Dar
  613: { wins: 30, losses: 15, draws: 1, totalMatches: 46, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 77, longestReignTitle: "NXT UK Women's Championship", yearsActive: '2020–2022', careerSpanYears: 2, wweDebut: '2020' }, // Meiko Satomura
  614: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // Amale
  615: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // Jinny
  624: { wins: 20, losses: 25, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Damon Kemp
  643: { wins: 120, losses: 140, draws: 2, totalMatches: 262, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'World Tag Team Championship', yearsActive: '2005–2008', careerSpanYears: 3, wweDebut: '2005' }, // Lance Cade
  644: { wins: 120, losses: 140, draws: 2, totalMatches: 262, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'World Tag Team Championship', yearsActive: '2005–2008', careerSpanYears: 3, wweDebut: '2005' }, // Trevor Murdoch
  663: { wins: 60, losses: 100, draws: 1, totalMatches: 161, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2020', careerSpanYears: 14, wweDebut: '2006' }, // Titus O'Neil
  671: { wins: 25, losses: 20, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022' }, // Tatum Paxley
  672: { wins: 30, losses: 20, draws: 0, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023' }, // Lola Vice
  673: { wins: 20, losses: 20, draws: 0, totalMatches: 40, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Elektra Lopez
  674: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Stevie Turner
  678: { wins: 30, losses: 35, draws: 0, totalMatches: 65, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // Aliyah
  684: { wins: 35, losses: 30, draws: 0, totalMatches: 65, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Fallon Henley
  686: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Joe Coffey
  687: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Mark Coffey
  688: { wins: 30, losses: 30, draws: 0, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Wolfgang
  735: { wins: 60, losses: 50, draws: 2, totalMatches: 112, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1993–2000', careerSpanYears: 7, wweDebut: '1993' }, // Luna Vachon
  736: { wins: 70, losses: 60, draws: 2, totalMatches: 132, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: "WWF Women's Championship", yearsActive: '1998–2004', careerSpanYears: 6, wweDebut: '1998' }, // Jacqueline Moore
  737: { wins: 30, losses: 20, draws: 1, totalMatches: 51, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 133, longestReignTitle: "WWF Women's Championship", yearsActive: '1994–1995', careerSpanYears: 1, wweDebut: '1994' }, // Bull Nakano
  753: { wins: 30, losses: 50, draws: 0, totalMatches: 80, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2005–2006', careerSpanYears: 1, wweDebut: '2005' }, // Simon Dean
  760: { wins: 40, losses: 80, draws: 0, totalMatches: 120, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2009', careerSpanYears: 3, wweDebut: '2006' }, // Jillian Hall
  784: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Maxxine Dupri
  786: { wins: 80, losses: 50, draws: 1, totalMatches: 131, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 2, longestReign: 0, longestReignTitle: null, yearsActive: '2020–2025', careerSpanYears: 5, wweDebut: '2020' }, // Karrion Kross
  808: { wins: 30, losses: 50, draws: 0, totalMatches: 80, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1997–1998', careerSpanYears: 1, wweDebut: '1997' }, // Flash Funk
  829: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2011–2013', careerSpanYears: 2, wweDebut: '2011' }, // Corey Graves
  830: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1997–2025', careerSpanYears: 28, wweDebut: '1997' }, // Michael Cole
  837: { wins: 210, losses: 250, draws: 8, totalMatches: 468, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 105, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1972–1985', careerSpanYears: 13, wweDebut: '1972' }, // Mr. Fuji
  859: { wins: 10, losses: 15, draws: 1, totalMatches: 26, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–1999', careerSpanYears: 1, wweDebut: '1998' }, // Dan Severn
  874: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021' }, // Piper Niven
  892: { wins: 5, losses: 30, draws: 0, totalMatches: 35, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1995', careerSpanYears: 1, wweDebut: '1995' }, // Mantaur
  893: { wins: 10, losses: 5, draws: 0, totalMatches: 15, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1995', careerSpanYears: 1, wweDebut: '1995' }, // Waylon Mercy
  894: { wins: 40, losses: 80, draws: 0, totalMatches: 120, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1996', careerSpanYears: 1, wweDebut: '1995' }, // Duke Droese
  895: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 35, longestReignTitle: "WWF Women's Championship", yearsActive: '1995–1996', careerSpanYears: 1, wweDebut: '1995' }, // Bertha Faye
  898: { wins: 30, losses: 50, draws: 0, totalMatches: 80, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2000', careerSpanYears: 2, wweDebut: '1998' }, // Droz
  904: { wins: 30, losses: 35, draws: 0, totalMatches: 65, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2004–2005', careerSpanYears: 1, wweDebut: '2004' }, // Luther Reigns
  907: { wins: 25, losses: 15, draws: 0, totalMatches: 40, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023' }, // Sol Ruca
  908: { wins: 30, losses: 15, draws: 0, totalMatches: 45, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Women\'s North American Championship', yearsActive: '2023–2025', careerSpanYears: 2, wweDebut: '2023' }, // Kelani Jordan
  912: { wins: 5, losses: 15, draws: 0, totalMatches: 20, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Javier Bernal
  914: { wins: 25, losses: 25, draws: 0, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Wendy Choo
  915: { wins: 35, losses: 25, draws: 0, totalMatches: 60, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2025', careerSpanYears: 3, wweDebut: '2022' }, // Thea Hail
  916: { wins: 50, losses: 40, draws: 0, totalMatches: 90, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2025', careerSpanYears: 4, wweDebut: '2021' }, // Andre Chase
  928: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1991', careerSpanYears: 1, wweDebut: '1990' }, // Sapphire
  929: { wins: 30, losses: 20, draws: 0, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1992–1993', careerSpanYears: 1, wweDebut: '1992' }, // Nailz
  930: { wins: 20, losses: 40, draws: 0, totalMatches: 60, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1991–1993', careerSpanYears: 2, wweDebut: '1991' }, // Skinner
  931: { wins: 15, losses: 40, draws: 0, totalMatches: 55, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1993–1994', careerSpanYears: 1, wweDebut: '1993' }, // Bastion Booger
  932: { wins: 10, losses: 5, draws: 0, totalMatches: 15, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1993–1993', careerSpanYears: 1, wweDebut: '1993' }, // Giant Gonzalez
  933: { wins: 10, losses: 20, draws: 0, totalMatches: 30, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1992–1993', careerSpanYears: 1, wweDebut: '1992' }, // Max Moon
  937: { wins: 40, losses: 50, draws: 0, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1996', careerSpanYears: 1, wweDebut: '1995' }, // Hakushi
  940: { wins: 20, losses: 50, draws: 0, totalMatches: 70, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1997', careerSpanYears: 2, wweDebut: '1995' }, // Aldo Montoya
  941: { wins: 60, losses: 70, draws: 1, totalMatches: 131, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1997–2001', careerSpanYears: 4, wweDebut: '1997' }, // Justin Credible
  942: { wins: 30, losses: 35, draws: 1, totalMatches: 66, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2001', careerSpanYears: 1, wweDebut: '2001' }, // Jerry Lynn
  943: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1999–1999', careerSpanYears: 1, wweDebut: '1999' }, // Nicole Bass
  945: { wins: 10, losses: 10, draws: 0, totalMatches: 20, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2005–2006', careerSpanYears: 1, wweDebut: '2005' }, // Christy Hemme
  946: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 35, longestReignTitle: "WWE Women's Championship", yearsActive: '2005–2009', careerSpanYears: 4, wweDebut: '2005' }, // Candice Michelle
  948: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2005–2008', careerSpanYears: 3, wweDebut: '2005' }, // Ashley Massaro
  951: { wins: 50, losses: 60, draws: 1, totalMatches: 111, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2008–2011', careerSpanYears: 3, wweDebut: '2008' }, // Vladimir Kozlov
  956: { wins: 60, losses: 80, draws: 0, totalMatches: 140, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2014–2016', careerSpanYears: 2, wweDebut: '2014' }, // Adam Rose
  957: { wins: 70, losses: 60, draws: 0, totalMatches: 130, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2017', careerSpanYears: 4, wweDebut: '2013' }, // Emma
  958: { wins: 30, losses: 35, draws: 0, totalMatches: 65, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2017', careerSpanYears: 4, wweDebut: '2013' }, // Summer Rae
  959: { wins: 10, losses: 20, draws: 0, totalMatches: 30, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2021', careerSpanYears: 8, wweDebut: '2013' }, // Eva Marie
  974: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2002–2005', careerSpanYears: 3, wweDebut: '2002' }, // Eric Bischoff
  975: { wins: 2, losses: 5, draws: 0, totalMatches: 7, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2004–2012', careerSpanYears: 8, wweDebut: '2004' }, // Teddy Long
  977: { wins: 1, losses: 3, draws: 0, totalMatches: 4, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2003', careerSpanYears: 2, wweDebut: '2001' }, // Linda McMahon
  979: { wins: 15, losses: 20, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2001', careerSpanYears: 1, wweDebut: '2001' }, // Buff Bagwell
  980: { wins: 20, losses: 25, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2002', careerSpanYears: 1, wweDebut: '2001' }, // Kanyon
  995: { wins: 40, losses: 35, draws: 1, totalMatches: 76, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1993', careerSpanYears: 6, wweDebut: '1987' }, // Sensational Sherri
  997: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2002', careerSpanYears: 4, wweDebut: '1998' }, // Debra
  1010: { wins: 80, losses: 60, draws: 1, totalMatches: 141, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 56, longestReignTitle: "WWE Divas Championship", yearsActive: '2008–2013', careerSpanYears: 5, wweDebut: '2008' }, // Eve Torres
  1011: { wins: 80, losses: 50, draws: 1, totalMatches: 131, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 63, longestReignTitle: "WWE Divas Championship", yearsActive: '2010–2014', careerSpanYears: 4, wweDebut: '2010' }, // Kaitlyn
  1023: { wins: 250, losses: 230, draws: 8, totalMatches: 488, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 2, longestReign: 0, longestReignTitle: null, yearsActive: '1982–1988', careerSpanYears: 6, wweDebut: '1982' }, // Bob Orton Jr.
  1265: { wins: 120, losses: 140, draws: 2, totalMatches: 262, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWE Cruiserweight Championship', yearsActive: '2016–2020', careerSpanYears: 4, wweDebut: '2016' }, // TJP
  1266: { wins: 110, losses: 130, draws: 2, totalMatches: 242, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2022', careerSpanYears: 6, wweDebut: '2016' }, // Tony Nese
  1270: { wins: 100, losses: 90, draws: 2, totalMatches: 192, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWE Cruiserweight Championship', yearsActive: '2016–2019', careerSpanYears: 3, wweDebut: '2016' }, // Rich Swann
  1275: { wins: 100, losses: 80, draws: 1, totalMatches: 181, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2017', careerSpanYears: 4, wweDebut: '2013' }, // Enzo Amore
  1276: { wins: 100, losses: 80, draws: 1, totalMatches: 181, ppvMatches: 6, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2017', careerSpanYears: 4, wweDebut: '2013' }, // Big Cass
  1304: { wins: 20, losses: 25, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Shawn Spears
  1369: { wins: 60, losses: 80, draws: 0, totalMatches: 140, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2014–2019', careerSpanYears: 5, wweDebut: '2014' }, // Aiden English
  1370: { wins: 30, losses: 40, draws: 0, totalMatches: 70, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2015–2016', careerSpanYears: 1, wweDebut: '2015' }, // Simon Gotch
  1625: { wins: 50, losses: 45, draws: 0, totalMatches: 95, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 49, longestReignTitle: "WWE Women's Tag Team Championship", yearsActive: '2017–2020', careerSpanYears: 3, wweDebut: '2017' }, // Ruby Riott
  1626: { wins: 10, losses: 10, draws: 0, totalMatches: 20, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2012–2012', careerSpanYears: 1, wweDebut: '2012' }, // Serena Deeb
  1627: { wins: 60, losses: 50, draws: 1, totalMatches: 111, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2012–2014', careerSpanYears: 2, wweDebut: '2012' }, // Erick Redbeard
  1654: { wins: 30, losses: 25, draws: 2, totalMatches: 57, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1997–2002', careerSpanYears: 5, wweDebut: '1997' }, // Adam Pearce

  // ── CELEBRITY WRESTLERS ──
  1343: { wins: 2, losses: 0, draws: 0, totalMatches: 2, ppvMatches: 2, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1985', careerSpanYears: 1, wweDebut: '1985' }, // Mr. T
  1345: { wins: 3, losses: 0, draws: 0, totalMatches: 3, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 2, longestReign: 49, longestReignTitle: 'WWE 24/7 Championship', yearsActive: '2021–2021', careerSpanYears: 1, wweDebut: '2021' }, // Bad Bunny
  1346: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 1, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1995', careerSpanYears: 1, wweDebut: '1995' }, // Lawrence Taylor
  1347: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2008–2008', careerSpanYears: 1, wweDebut: '2008' }, // Floyd Mayweather
  1348: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2019–2019', careerSpanYears: 1, wweDebut: '2019' }, // Tyson Fury
  1349: { wins: 0, losses: 1, draws: 0, totalMatches: 1, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2019–2019', careerSpanYears: 1, wweDebut: '2019' }, // Cain Velasquez
  1350: { wins: 0, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2001', careerSpanYears: 1, wweDebut: '2001' }, // Drew Carey
  1374: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2022', careerSpanYears: 1, wweDebut: '2022' }, // Johnny Knoxville

  // ── AUTO-GENERATED REMAINING ENTRIES ──
  1026: { wins: 180, losses: 120, draws: 10, totalMatches: 310, ppvMatches: 0, mainEvents: 5, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1963–1975', careerSpanYears: 12, wweDebut: '1963' }, // Bobo Brazil
  1027: { wins: 85, losses: 95, draws: 5, totalMatches: 185, ppvMatches: 0, mainEvents: 3, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1978–1981', careerSpanYears: 3, wweDebut: '1978' }, // Larry Zbyszko
  1028: { wins: 130, losses: 100, draws: 8, totalMatches: 238, ppvMatches: 0, mainEvents: 4, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1978', careerSpanYears: 8, wweDebut: '1970' }, // Ernie Ladd
  1033: { wins: 95, losses: 110, draws: 5, totalMatches: 210, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 120, longestReignTitle: 'WWWF US Tag Team Championship', yearsActive: '1963–1975', careerSpanYears: 12, wweDebut: '1963' }, // Arnold Skaaland
  1045: { wins: 95, losses: 110, draws: 3, totalMatches: 208, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '1986–1990', careerSpanYears: 4, wweDebut: '1986' }, // Raymond Rougeau
  1046: { wins: 55, losses: 150, draws: 2, totalMatches: 207, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1992', careerSpanYears: 7, wweDebut: '1985' }, // Lanny Poffo
  1049: { wins: 60, losses: 75, draws: 2, totalMatches: 137, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1989', careerSpanYears: 2, wweDebut: '1987' }, // Ron Bass
  1050: { wins: 110, losses: 85, draws: 5, totalMatches: 200, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '1983–1988', careerSpanYears: 5, wweDebut: '1983' }, // B. Brian Blair
  1051: { wins: 100, losses: 90, draws: 4, totalMatches: 194, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 3, wweDebut: '1985' }, // Jim Brunzell
  1052: { wins: 65, losses: 80, draws: 2, totalMatches: 147, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '1986–1988', careerSpanYears: 2, wweDebut: '1986' }, // Butch Reed
  1054: { wins: 20, losses: 15, draws: 1, totalMatches: 36, ppvMatches: 2, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1997–1997', careerSpanYears: 1, wweDebut: '1997' }, // The Patriot
  1057: { wins: 80, losses: 100, draws: 3, totalMatches: 183, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 2, longestReign: 77, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1983–1994', careerSpanYears: 11, wweDebut: '1983' }, // Samu
  1060: { wins: 15, losses: 25, draws: 0, totalMatches: 40, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2002', careerSpanYears: 1, wweDebut: '2001' }, // Mike Awesome
  1067: { wins: 80, losses: 200, draws: 3, totalMatches: 283, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1993', careerSpanYears: 8, wweDebut: '1985' }, // Paul Roma
  1085: { wins: 35, losses: 55, draws: 0, totalMatches: 90, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Tucker
  1091: { wins: 30, losses: 20, draws: 0, totalMatches: 50, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2024', careerSpanYears: 2, wweDebut: '2022' }, // Blair Davenport
  1098: { wins: 40, losses: 60, draws: 0, totalMatches: 100, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2010', careerSpanYears: 4, wweDebut: '2006' }, // Shad Gaspard
  1099: { wins: 15, losses: 10, draws: 3, totalMatches: 28, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1975', careerSpanYears: 5, wweDebut: '1970' }, // Nick Bockwinkel
  1100: { wins: 20, losses: 10, draws: 4, totalMatches: 34, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1960–1970', careerSpanYears: 10, wweDebut: '1960' }, // Verne Gagne
  1101: { wins: 25, losses: 15, draws: 5, totalMatches: 45, ppvMatches: 0, mainEvents: 3, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1979', careerSpanYears: 7, wweDebut: '1972' }, // Antonio Inoki
  1102: { wins: 20, losses: 15, draws: 5, totalMatches: 40, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1975–1980', careerSpanYears: 5, wweDebut: '1975' }, // Abdullah the Butcher
  1103: { wins: 10, losses: 8, draws: 2, totalMatches: 20, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1977–1983', careerSpanYears: 6, wweDebut: '1977' }, // Carlos Colon
  1104: { wins: 50, losses: 60, draws: 4, totalMatches: 114, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1986', careerSpanYears: 1, wweDebut: '1985' }, // Dory Funk Jr.
  1105: { wins: 15, losses: 10, draws: 3, totalMatches: 28, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1974–1976', careerSpanYears: 2, wweDebut: '1974' }, // Jack Brisco
  1107: { wins: 40, losses: 55, draws: 2, totalMatches: 97, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1989–1990', careerSpanYears: 1, wweDebut: '1989' }, // Michael PS Hayes
  1108: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 2, longestReign: 0, longestReignTitle: null, yearsActive: '2011–2012', careerSpanYears: 1, wweDebut: '2011' }, // Kharma
  1109: { wins: 45, losses: 130, draws: 1, totalMatches: 176, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2006–2014', careerSpanYears: 8, wweDebut: '2006' }, // JTG
  1110: { wins: 50, losses: 65, draws: 3, totalMatches: 118, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 2, longestReign: 0, longestReignTitle: null, yearsActive: '1991–1993', careerSpanYears: 2, wweDebut: '1991' }, // The Berzerker
  1113: { wins: 35, losses: 65, draws: 1, totalMatches: 101, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2019', careerSpanYears: 6, wweDebut: '2013' }, // Tye Dillinger
  1114: { wins: 40, losses: 80, draws: 1, totalMatches: 121, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2021', careerSpanYears: 5, wweDebut: '2016' }, // Gran Metalik
  1115: { wins: 35, losses: 75, draws: 1, totalMatches: 111, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2021', careerSpanYears: 5, wweDebut: '2016' }, // Lince Dorado
  1117: { wins: 40, losses: 130, draws: 1, totalMatches: 171, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1990', careerSpanYears: 3, wweDebut: '1987' }, // Boris Zhukov
  1120: { wins: 25, losses: 20, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2023–2026', careerSpanYears: 3, wweDebut: '2023' }, // Lexis King
  1123: { wins: 55, losses: 65, draws: 2, totalMatches: 122, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1986–1988', careerSpanYears: 2, wweDebut: '1986' }, // Billy Jack Haynes
  1124: { wins: 55, losses: 250, draws: 2, totalMatches: 307, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1993', careerSpanYears: 8, wweDebut: '1985' }, // Jim Powers
  1125: { wins: 80, losses: 450, draws: 3, totalMatches: 533, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1976–1990', careerSpanYears: 14, wweDebut: '1976' }, // S.D. Jones
  1126: { wins: 45, losses: 50, draws: 2, totalMatches: 97, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1984–1986', careerSpanYears: 2, wweDebut: '1984' }, // Tonga Kid
  1127: { wins: 40, losses: 55, draws: 1, totalMatches: 96, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1987', careerSpanYears: 2, wweDebut: '1985' }, // Corporal Kirchner
  1128: { wins: 35, losses: 40, draws: 1, totalMatches: 76, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1984–1987', careerSpanYears: 3, wweDebut: '1984' }, // Velvet McIntyre
  1131: { wins: 40, losses: 350, draws: 2, totalMatches: 392, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1983–1992', careerSpanYears: 9, wweDebut: '1983' }, // Iron Mike Sharpe
  1134: { wins: 75, losses: 55, draws: 4, totalMatches: 134, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1976–1979', careerSpanYears: 3, wweDebut: '1976' }, // Peter Maivia
  1135: { wins: 120, losses: 180, draws: 5, totalMatches: 305, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1965–1980', careerSpanYears: 15, wweDebut: '1965' }, // Baron Mikel Scicluna
  1136: { wins: 95, losses: 70, draws: 5, totalMatches: 170, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 84, longestReignTitle: 'WWWF US Tag Team Championship', yearsActive: '1964–1975', careerSpanYears: 11, wweDebut: '1964' }, // Haystacks Calhoun
  1137: { wins: 40, losses: 50, draws: 3, totalMatches: 93, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1978', careerSpanYears: 6, wweDebut: '1972' }, // Swede Hanson
  1139: { wins: 80, losses: 95, draws: 4, totalMatches: 179, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 78, longestReignTitle: 'WWWF International Tag Team Championship', yearsActive: '1967–1976', careerSpanYears: 9, wweDebut: '1967' }, // Waldo Von Erich
  1141: { wins: 60, losses: 45, draws: 3, totalMatches: 108, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 64, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1972–1975', careerSpanYears: 3, wweDebut: '1972' }, // Dean Ho
  1142: { wins: 55, losses: 40, draws: 3, totalMatches: 98, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 70, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1972–1977', careerSpanYears: 5, wweDebut: '1972' }, // Victor Rivera
  1143: { wins: 70, losses: 60, draws: 4, totalMatches: 134, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 42, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1968–1975', careerSpanYears: 7, wweDebut: '1968' }, // King Curtis Iaukea
  1144: { wins: 35, losses: 20, draws: 2, totalMatches: 57, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 48, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1976–1977', careerSpanYears: 1, wweDebut: '1976' }, // The Executioners
  1145: { wins: 40, losses: 380, draws: 2, totalMatches: 422, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1987', careerSpanYears: 15, wweDebut: '1972' }, // Johnny Rodz
  1149: { wins: 120, losses: 90, draws: 15, totalMatches: 225, ppvMatches: 0, mainEvents: 5, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1967–1977', careerSpanYears: 10, wweDebut: '1967' }, // The Sheik
  1150: { wins: 55, losses: 65, draws: 3, totalMatches: 123, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1978', careerSpanYears: 6, wweDebut: '1972' }, // Ox Baker
  1151: { wins: 35, losses: 65, draws: 1, totalMatches: 101, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1986–1988', careerSpanYears: 2, wweDebut: '1986' }, // Sam Houston
  1154: { wins: 130, losses: 110, draws: 8, totalMatches: 248, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1968–1982', careerSpanYears: 14, wweDebut: '1968' }, // Dominic DeNucci
  1155: { wins: 25, losses: 50, draws: 1, totalMatches: 76, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1989', careerSpanYears: 2, wweDebut: '1987' }, // Frenchy Martin
  1156: { wins: 70, losses: 85, draws: 3, totalMatches: 158, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1983–1988', careerSpanYears: 5, wweDebut: '1983' }, // Tama (Islanders)
  1157: { wins: 35, losses: 100, draws: 1, totalMatches: 136, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1983–1987', careerSpanYears: 4, wweDebut: '1983' }, // Tiger Chung Lee
  1158: { wins: 30, losses: 55, draws: 1, totalMatches: 86, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1987', careerSpanYears: 2, wweDebut: '1985' }, // Sivi Afi
  1159: { wins: 46, losses: 106, draws: 1, totalMatches: 153, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Cousin Luke
  1160: { wins: 49, losses: 65, draws: 1, totalMatches: 115, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 3, wweDebut: '1985' }, // Uncle Elmer
  1162: { wins: 75, losses: 90, draws: 3, totalMatches: 168, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 91, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1981–1986', careerSpanYears: 5, wweDebut: '1981' }, // Moondog Rex
  1163: { wins: 55, losses: 120, draws: 2, totalMatches: 177, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1981–1988', careerSpanYears: 7, wweDebut: '1981' }, // Moondog Spot
  1164: { wins: 55, losses: 100, draws: 2, totalMatches: 157, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1992', careerSpanYears: 4, wweDebut: '1988' }, // Pat Tanaka
  1168: { wins: 30, losses: 45, draws: 1, totalMatches: 76, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1986', careerSpanYears: 1, wweDebut: '1985' }, // David Sammartino
  1169: { wins: 80, losses: 106, draws: 0, totalMatches: 186, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Lord Alfred Hayes
  1171: { wins: 0, losses: 3, draws: 0, totalMatches: 3, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2004', careerSpanYears: 6, wweDebut: '1998' }, // Pete Rose
  1172: { wins: 50, losses: 90, draws: 2, totalMatches: 142, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1990', careerSpanYears: 2, wweDebut: '1988' }, // Terry Taylor
  1173: { wins: 90, losses: 110, draws: 4, totalMatches: 204, ppvMatches: 1, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1981–1987', careerSpanYears: 6, wweDebut: '1981' }, // Killer Khan
  1175: { wins: 30, losses: 200, draws: 1, totalMatches: 231, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1982–1987', careerSpanYears: 5, wweDebut: '1982' }, // Salvatore Bellomo
  1176: { wins: 25, losses: 180, draws: 1, totalMatches: 206, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1983–1987', careerSpanYears: 4, wweDebut: '1983' }, // Jose Luis Rivera
  1177: { wins: 35, losses: 180, draws: 2, totalMatches: 217, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1978–1985', careerSpanYears: 7, wweDebut: '1978' }, // Rick McGraw
  1178: { wins: 250, losses: 80, draws: 15, totalMatches: 345, ppvMatches: 0, mainEvents: 20, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1952–1968', careerSpanYears: 16, wweDebut: '1952' }, // Antonino Rocca
  1179: { wins: 30, losses: 20, draws: 5, totalMatches: 55, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1964–1975', careerSpanYears: 11, wweDebut: '1964' }, // Giant Baba
  1181: { wins: 60, losses: 90, draws: 3, totalMatches: 153, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1977–1987', careerSpanYears: 10, wweDebut: '1977' }, // Crusher Blackwell
  1182: { wins: 60, losses: 50, draws: 5, totalMatches: 115, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1965–1975', careerSpanYears: 10, wweDebut: '1965' }, // Larry Hennig
  1183: { wins: 50, losses: 60, draws: 2, totalMatches: 112, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1982–1990', careerSpanYears: 8, wweDebut: '1982' }, // Buddy Rose
  1184: { wins: 30, losses: 55, draws: 2, totalMatches: 87, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1976', careerSpanYears: 4, wweDebut: '1972' }, // Tony Altimore
  1186: { wins: 55, losses: 40, draws: 3, totalMatches: 98, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1977–1980', careerSpanYears: 3, wweDebut: '1977' }, // Billy White Wolf
  1187: { wins: 90, losses: 130, draws: 5, totalMatches: 225, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 98, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1971–1986', careerSpanYears: 15, wweDebut: '1971' }, // Rene Goulet
  1188: { wins: 65, losses: 45, draws: 8, totalMatches: 118, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 98, longestReignTitle: 'WWWF Tag Team Championship', yearsActive: '1970–1972', careerSpanYears: 2, wweDebut: '1970' }, // Karl Gotch
  1189: { wins: 40, losses: 30, draws: 2, totalMatches: 72, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 84, longestReignTitle: 'WWWF International Tag Team Championship', yearsActive: '1970–1972', careerSpanYears: 2, wweDebut: '1970' }, // The Mongols
  1190: { wins: 50, losses: 60, draws: 2, totalMatches: 112, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 91, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1981–1982', careerSpanYears: 1, wweDebut: '1981' }, // Moondog King
  1192: { wins: 49, losses: 62, draws: 2, totalMatches: 113, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 3, wweDebut: '1994' }, // The Goon
  1193: { wins: 30, losses: 60, draws: 1, totalMatches: 91, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 3, wweDebut: '1994' }, // TL Hopper
  1194: { wins: 50, losses: 62, draws: 0, totalMatches: 112, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 4, wweDebut: '1994' }, // Salvatore Sincere
  1195: { wins: 52, losses: 35, draws: 2, totalMatches: 89, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 4, wweDebut: '1994' }, // Freddie Joe Floyd
  1196: { wins: 25, losses: 10, draws: 0, totalMatches: 35, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 2, longestReign: 0, longestReignTitle: null, yearsActive: '1993–1994', careerSpanYears: 1, wweDebut: '1993' }, // Ludvig Borga
  1197: { wins: 8, losses: 20, draws: 0, totalMatches: 28, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1999–2008', careerSpanYears: 9, wweDebut: '1999' }, // Jonathan Coachman
  1198: { wins: 45, losses: 80, draws: 3, totalMatches: 128, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Tori
  1200: { wins: 34, losses: 62, draws: 3, totalMatches: 99, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 4, wweDebut: '1994' }, // The Blue Meanie
  1201: { wins: 45, losses: 84, draws: 0, totalMatches: 129, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Kurrgan
  1202: { wins: 30, losses: 60, draws: 0, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2000–2002', careerSpanYears: 2, wweDebut: '2000' }, // Shawn Stasiak
  1203: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–1999', careerSpanYears: 1, wweDebut: '1998' }, // Dr. Death Steve Williams
  1205: { wins: 45, losses: 65, draws: 1, totalMatches: 111, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1995–1997', careerSpanYears: 2, wweDebut: '1995' }, // Skip
  1206: { wins: 35, losses: 55, draws: 1, totalMatches: 91, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1996–1997', careerSpanYears: 1, wweDebut: '1996' }, // Zip
  1211: { wins: 85, losses: 110, draws: 2, totalMatches: 197, ppvMatches: 5, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 1, longestReign: 14, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1996–2000', careerSpanYears: 4, wweDebut: '1996' }, // Headbanger Mosh
  1212: { wins: 85, losses: 110, draws: 2, totalMatches: 197, ppvMatches: 5, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 1, longestReign: 14, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1996–2000', careerSpanYears: 4, wweDebut: '1996' }, // Headbanger Thrasher
  1213: { wins: 63, losses: 49, draws: 3, totalMatches: 115, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Giant Silva
  1214: { wins: 20, losses: 55, draws: 0, totalMatches: 75, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 3, longestReignTitle: 'WWF Hardcore Championship', yearsActive: '1999–2001', careerSpanYears: 2, wweDebut: '1999' }, // Pete Gas
  1215: { wins: 18, losses: 50, draws: 0, totalMatches: 68, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 1, longestReignTitle: 'WWF Hardcore Championship', yearsActive: '1999–2001', careerSpanYears: 2, wweDebut: '1999' }, // Rodney
  1216: { wins: 15, losses: 45, draws: 0, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 1, longestReignTitle: 'WWF Hardcore Championship', yearsActive: '1999–2000', careerSpanYears: 1, wweDebut: '1999' }, // Joey Abs
  1217: { wins: 38, losses: 81, draws: 1, totalMatches: 120, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Chainz
  1218: { wins: 38, losses: 85, draws: 1, totalMatches: 124, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // 8-Ball
  1219: { wins: 39, losses: 49, draws: 0, totalMatches: 88, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Skull
  1221: { wins: 10, losses: 20, draws: 0, totalMatches: 30, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2005', careerSpanYears: 2, wweDebut: '2003' }, // Matt Morgan
  1223: { wins: 55, losses: 70, draws: 1, totalMatches: 126, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 35, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2002–2004', careerSpanYears: 2, wweDebut: '2002' }, // Rico
  1224: { wins: 33, losses: 58, draws: 0, totalMatches: 91, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Marcus Cor Von
  1225: { wins: 46, losses: 58, draws: 2, totalMatches: 106, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Matt Striker
  1226: { wins: 29, losses: 38, draws: 2, totalMatches: 69, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 4, wweDebut: '2003' }, // Mike Knox
  1227: { wins: 49, losses: 42, draws: 0, totalMatches: 91, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Psicosis
  1228: { wins: 52, losses: 59, draws: 1, totalMatches: 112, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Juventud Guerrera
  1229: { wins: 33, losses: 61, draws: 3, totalMatches: 97, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Katie Lea Burchill
  1230: { wins: 40, losses: 55, draws: 1, totalMatches: 96, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Danny Basham
  1231: { wins: 40, losses: 55, draws: 1, totalMatches: 96, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Doug Basham
  1232: { wins: 46, losses: 62, draws: 2, totalMatches: 110, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Rodney Mack
  1234: { wins: 31, losses: 39, draws: 2, totalMatches: 72, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Jesse
  1235: { wins: 46, losses: 37, draws: 3, totalMatches: 86, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Jimmy Wang Yang
  1236: { wins: 51, losses: 41, draws: 0, totalMatches: 92, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Shannon Moore
  1238: { wins: 51, losses: 40, draws: 2, totalMatches: 93, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 4, wweDebut: '2003' }, // Vito
  1239: { wins: 25, losses: 45, draws: 0, totalMatches: 70, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2010–2012', careerSpanYears: 2, wweDebut: '2010' }, // David Otunga
  1240: { wins: 47, losses: 38, draws: 1, totalMatches: 86, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Michael Tarver
  1241: { wins: 60, losses: 85, draws: 1, totalMatches: 146, ppvMatches: 5, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 1, longestReign: 49, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2010–2015', careerSpanYears: 5, wweDebut: '2010' }, // Justin Gabriel
  1242: { wins: 48, losses: 59, draws: 1, totalMatches: 108, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Alex Riley
  1243: { wins: 50, losses: 60, draws: 1, totalMatches: 111, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Kaval
  1245: { wins: 33, losses: 65, draws: 3, totalMatches: 101, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Nathan Jones
  1246: { wins: 51, losses: 36, draws: 2, totalMatches: 89, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Sean O\
  1247: { wins: 52, losses: 36, draws: 1, totalMatches: 89, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Armando Estrada
  1248: { wins: 51, losses: 36, draws: 3, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Sylvester Terkay
  1251: { wins: 29, losses: 36, draws: 3, totalMatches: 68, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Percy Watson
  1252: { wins: 29, losses: 39, draws: 2, totalMatches: 70, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Lucky Cannon
  1253: { wins: 30, losses: 41, draws: 1, totalMatches: 72, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Byron Saxton
  1254: { wins: 32, losses: 59, draws: 1, totalMatches: 92, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 4, wweDebut: '2009' }, // Mason Ryan
  1255: { wins: 52, losses: 40, draws: 0, totalMatches: 92, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Tyler Reks
  1257: { wins: 33, losses: 36, draws: 2, totalMatches: 71, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Hunico
  1258: { wins: 50, losses: 40, draws: 3, totalMatches: 93, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Scotty Goldman
  1259: { wins: 30, losses: 60, draws: 3, totalMatches: 93, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Trent Barreta
  1260: { wins: 49, losses: 36, draws: 3, totalMatches: 88, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Caylen Croft
  1261: { wins: 28, losses: 42, draws: 3, totalMatches: 73, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Manu
  1262: { wins: 15, losses: 25, draws: 0, totalMatches: 40, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2012–2014', careerSpanYears: 2, wweDebut: '2012' }, // Sim Snuka
  1263: { wins: 28, losses: 38, draws: 1, totalMatches: 67, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Richie Steamboat
  1264: { wins: 34, losses: 35, draws: 3, totalMatches: 72, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Rosa Mendes
  1268: { wins: 30, losses: 39, draws: 2, totalMatches: 71, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 2, wweDebut: '2013' }, // Jack Gallagher
  1269: { wins: 50, losses: 58, draws: 0, totalMatches: 108, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 2, wweDebut: '2013' }, // Ariya Daivari
  1272: { wins: 55, losses: 45, draws: 2, totalMatches: 102, ppvMatches: 4, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 69, longestReignTitle: 'NXT Cruiserweight Championship', yearsActive: '2019–2022', careerSpanYears: 3, wweDebut: '2019' }, // KUSHIDA
  1274: { wins: 26, losses: 31, draws: 3, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Robert Stone
  1277: { wins: 17, losses: 19, draws: 3, totalMatches: 39, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Von Wagner
  1281: { wins: 26, losses: 19, draws: 1, totalMatches: 46, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Sanga
  1282: { wins: 25, losses: 33, draws: 1, totalMatches: 59, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Ikemen Jiro
  1283: { wins: 27, losses: 18, draws: 2, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Boa
  1284: { wins: 27, losses: 22, draws: 1, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Xyon Quinn
  1285: { wins: 26, losses: 33, draws: 3, totalMatches: 62, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Edris Enofe
  1286: { wins: 16, losses: 31, draws: 0, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Malik Blade
  1287: { wins: 26, losses: 19, draws: 3, totalMatches: 48, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Odyssey Jones
  1288: { wins: 26, losses: 34, draws: 2, totalMatches: 62, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Dante Chen
  1289: { wins: 17, losses: 22, draws: 1, totalMatches: 40, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Channing Lorenzo
  1290: { wins: 18, losses: 21, draws: 1, totalMatches: 40, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Luca Crusifino
  1291: { wins: 15, losses: 19, draws: 1, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Adrianna Reese
  1292: { wins: 26, losses: 20, draws: 1, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Brooks Jensen
  1293: { wins: 50, losses: 40, draws: 1, totalMatches: 91, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 56, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2021–2024', careerSpanYears: 3, wweDebut: '2021' }, // Josh Briggs
  1295: { wins: 17, losses: 32, draws: 2, totalMatches: 51, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Jagger Reid
  1296: { wins: 17, losses: 31, draws: 2, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Rip Fowler
  1297: { wins: 26, losses: 22, draws: 3, totalMatches: 51, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Joe Gacy
  1299: { wins: 17, losses: 22, draws: 3, totalMatches: 42, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Brinley Reece
  1300: { wins: 27, losses: 33, draws: 3, totalMatches: 63, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Wren Sinclair
  1301: { wins: 26, losses: 21, draws: 3, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Tavion Heights
  1302: { wins: 26, losses: 21, draws: 3, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Tyriek Igwe
  1303: { wins: 15, losses: 30, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Tyson Dupont
  1309: { wins: 45, losses: 55, draws: 0, totalMatches: 100, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2020–2023', careerSpanYears: 3, wweDebut: '2020' }, // Joaquin Wilde
  1310: { wins: 45, losses: 55, draws: 0, totalMatches: 100, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 49, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2020–2023', careerSpanYears: 3, wweDebut: '2020' }, // Cruz Del Toro
  1312: { wins: 26, losses: 19, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Guru Raaj
  1314: { wins: 25, losses: 18, draws: 2, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Valentina Feroz
  1315: { wins: 17, losses: 33, draws: 2, totalMatches: 52, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Yulisa Leon
  1317: { wins: 15, losses: 18, draws: 1, totalMatches: 34, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Donovan Dijak
  1318: { wins: 15, losses: 21, draws: 0, totalMatches: 36, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Mace
  1319: { wins: 25, losses: 20, draws: 3, totalMatches: 48, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Slapjack
  1322: { wins: 30, losses: 40, draws: 0, totalMatches: 70, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2007–2008', careerSpanYears: 1, wweDebut: '2007' }, // Deuce
  1323: { wins: 30, losses: 40, draws: 0, totalMatches: 70, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 63, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2007–2008', careerSpanYears: 1, wweDebut: '2007' }, // Domino
  1324: { wins: 63, losses: 78, draws: 0, totalMatches: 141, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Reno
  1336: { wins: 26, losses: 31, draws: 1, totalMatches: 58, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // B-Fab
  1337: { wins: 26, losses: 31, draws: 1, totalMatches: 58, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Top Dolla
  1338: { wins: 17, losses: 33, draws: 2, totalMatches: 52, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Ashante Adonis
  1342: { wins: 52, losses: 62, draws: 2, totalMatches: 116, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 2, wweDebut: '1994' }, // Damian Demento
  1351: { wins: 17, losses: 21, draws: 0, totalMatches: 38, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // No Way Jose
  1352: { wins: 15, losses: 33, draws: 1, totalMatches: 49, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Kassius Ohno
  1353: { wins: 29, losses: 58, draws: 0, totalMatches: 87, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Mordecai
  1362: { wins: 51, losses: 60, draws: 3, totalMatches: 114, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 2, wweDebut: '2013' }, // El Torito
  1363: { wins: 16, losses: 32, draws: 3, totalMatches: 51, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Shanky
  1365: { wins: 49, losses: 67, draws: 3, totalMatches: 119, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 3, wweDebut: '1985' }, // Great Muta
  1366: { wins: 54, losses: 108, draws: 2, totalMatches: 164, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // Jushin Thunder Liger
  1367: { wins: 24, losses: 22, draws: 3, totalMatches: 49, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Steve Corino
  1368: { wins: 46, losses: 64, draws: 2, totalMatches: 112, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 4, wweDebut: '2003' }, // CW Anderson
  1371: { wins: 40, losses: 30, draws: 1, totalMatches: 71, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 182, longestReignTitle: 'NXT Cruiserweight Championship', yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018' }, // Jordan Devlin
  1372: { wins: 25, losses: 21, draws: 1, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // T-BAR
  1373: { wins: 30, losses: 61, draws: 2, totalMatches: 93, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Snooki
  1375: { wins: 1, losses: 1, draws: 0, totalMatches: 2, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 65, longestReignTitle: 'WWE 24/7 Championship', yearsActive: '2020–2020', careerSpanYears: 1, wweDebut: '2020' }, // Rob Gronkowski
  1376: { wins: 17, losses: 31, draws: 3, totalMatches: 51, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Shane Thorne
  1377: { wins: 15, losses: 20, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Nick Miller
  1378: { wins: 25, losses: 30, draws: 2, totalMatches: 57, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Arturo Ruas
  1379: { wins: 80, losses: 69, draws: 0, totalMatches: 149, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Bushwhacker Luke
  1380: { wins: 84, losses: 107, draws: 0, totalMatches: 191, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Bushwhacker Butch
  1384: { wins: 60, losses: 110, draws: 1, totalMatches: 171, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 35, longestReignTitle: 'WWE Tag Team Championship', yearsActive: '2011–2017', careerSpanYears: 6, wweDebut: '2011' }, // Epico Colon
  1387: { wins: 40, losses: 65, draws: 1, totalMatches: 106, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 0, longestReign: 21, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1993–1996', careerSpanYears: 3, wweDebut: '1993' }, // Mo
  1388: { wins: 42, losses: 77, draws: 2, totalMatches: 121, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Bull Buchanan
  1391: { wins: 25, losses: 32, draws: 2, totalMatches: 59, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Oro Mensah
  1392: { wins: 20, losses: 25, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2026', careerSpanYears: 4, wweDebut: '2022' }, // Jakara Jackson
  1393: { wins: 24, losses: 31, draws: 3, totalMatches: 58, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Kiana James
  1395: { wins: 49, losses: 102, draws: 1, totalMatches: 152, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // Danny Davis
  1396: { wins: 16, losses: 31, draws: 3, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Veer Mahaan
  1398: { wins: 27, losses: 33, draws: 3, totalMatches: 63, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Je\
  1399: { wins: 17, losses: 18, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Arianna Grace
  1400: { wins: 27, losses: 30, draws: 2, totalMatches: 59, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Izzi Dame
  1401: { wins: 52, losses: 96, draws: 3, totalMatches: 151, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // Outback Jack
  1405: { wins: 25, losses: 32, draws: 2, totalMatches: 59, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Rick Boogs
  1406: { wins: 82, losses: 62, draws: 3, totalMatches: 147, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // Dan Spivey
  1407: { wins: 44, losses: 78, draws: 2, totalMatches: 124, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // David Flair
  1408: { wins: 50, losses: 36, draws: 2, totalMatches: 88, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Chris Nowinski
  1409: { wins: 28, losses: 40, draws: 1, totalMatches: 69, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 4, wweDebut: '2003' }, // Daniel Puder
  1410: { wins: 47, losses: 40, draws: 3, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Matt Cappotelli
  1412: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Mikey
  1414: { wins: 15, losses: 18, draws: 0, totalMatches: 33, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Riley Osborne
  1415: { wins: 30, losses: 38, draws: 3, totalMatches: 71, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 4, wweDebut: '1994' }, // Jimmy Del Ray
  1416: { wins: 34, losses: 41, draws: 2, totalMatches: 77, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 4, wweDebut: '2009' }, // Ricky Ortiz
  1417: { wins: 50, losses: 38, draws: 1, totalMatches: 89, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // DJ Gabriel
  1418: { wins: 42, losses: 55, draws: 2, totalMatches: 99, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Karl Malone
  1419: { wins: 64, losses: 85, draws: 1, totalMatches: 150, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Dennis Rodman
  1420: { wins: 46, losses: 64, draws: 1, totalMatches: 111, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 2, wweDebut: '2009' }, // Kevin Federline
  1421: { wins: 25, losses: 19, draws: 2, totalMatches: 46, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Stephen Amell
  1422: { wins: 49, losses: 59, draws: 2, totalMatches: 110, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Maria Menounos
  1424: { wins: 133, losses: 172, draws: 3, totalMatches: 308, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Tiger Mask
  1425: { wins: 48, losses: 58, draws: 0, totalMatches: 106, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 4, wweDebut: '2003' }, // Ernest Miller
  1426: { wins: 66, losses: 82, draws: 3, totalMatches: 151, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Glacier
  1428: { wins: 18, losses: 30, draws: 2, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Deonna Purrazzo
  1429: { wins: 40, losses: 30, draws: 1, totalMatches: 71, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 112, longestReignTitle: 'NXT UK Tag Team Championship', yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018' }, // Zack Gibson
  1430: { wins: 40, losses: 30, draws: 1, totalMatches: 71, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 112, longestReignTitle: 'NXT UK Tag Team Championship', yearsActive: '2018–2022', careerSpanYears: 4, wweDebut: '2018' }, // James Drake
  1431: { wins: 85, losses: 62, draws: 2, totalMatches: 149, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Nikita Koloff
  1432: { wins: 25, losses: 32, draws: 3, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Tank Ledger
  1433: { wins: 16, losses: 21, draws: 3, totalMatches: 40, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Hank Walker
  1440: { wins: 25, losses: 22, draws: 3, totalMatches: 50, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Eddy Thorpe
  1441: { wins: 15, losses: 31, draws: 1, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Dani Palmer
  1442: { wins: 49, losses: 42, draws: 2, totalMatches: 93, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 4, wweDebut: '2013' }, // James Storm
  1443: { wins: 51, losses: 36, draws: 3, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 4, wweDebut: '2009' }, // Chris Harris
  1444: { wins: 49, losses: 37, draws: 2, totalMatches: 88, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Maxine
  1445: { wins: 47, losses: 37, draws: 0, totalMatches: 84, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 2, wweDebut: '1994' }, // Man Mountain Rock
  1448: { wins: 51, losses: 64, draws: 0, totalMatches: 115, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Johnny Stamboli
  1449: { wins: 75, losses: 90, draws: 2, totalMatches: 167, ppvMatches: 8, mainEvents: 0, rumbleAppearances: 3, rumbleEliminations: 3, longestReign: 0, longestReignTitle: null, yearsActive: '1990–2001', careerSpanYears: 11, wweDebut: '1990' }, // Brian Adams
  1450: { wins: 65, losses: 56, draws: 1, totalMatches: 122, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Bryan Clark
  1451: { wins: 43, losses: 53, draws: 0, totalMatches: 96, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Elix Skipper
  1452: { wins: 65, losses: 54, draws: 0, totalMatches: 119, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Kwee Wee
  1453: { wins: 16, losses: 30, draws: 0, totalMatches: 46, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Dave Mastiff
  1454: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2001', careerSpanYears: 1, wweDebut: '2001' }, // Eddie Dennis
  1455: { wins: 27, losses: 32, draws: 1, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Aoife Valkyrie
  1456: { wins: 55, losses: 20, draws: 1, totalMatches: 76, ppvMatches: 3, mainEvents: 2, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 649, longestReignTitle: 'NXT UK Women\'s Championship', yearsActive: '2019–2022', careerSpanYears: 3, wweDebut: '2019' }, // Kay Lee Ray
  1457: { wins: 45, losses: 51, draws: 2, totalMatches: 98, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Stevie Ray
  1458: { wins: 66, losses: 50, draws: 2, totalMatches: 118, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Norman Smiley
  1459: { wins: 61, losses: 54, draws: 2, totalMatches: 117, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Konnan
  1460: { wins: 43, losses: 51, draws: 1, totalMatches: 95, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Disco Inferno
  1461: { wins: 62, losses: 83, draws: 3, totalMatches: 148, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Alex Wright
  1462: { wins: 39, losses: 78, draws: 0, totalMatches: 117, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // La Parka
  1463: { wins: 45, losses: 54, draws: 1, totalMatches: 100, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Vampiro
  1464: { wins: 40, losses: 48, draws: 3, totalMatches: 91, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Mikey Whipwreck
  1466: { wins: 39, losses: 48, draws: 1, totalMatches: 88, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Francine
  1467: { wins: 10, losses: 15, draws: 1, totalMatches: 26, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–2016', careerSpanYears: 29, wweDebut: '1987' }, // Zeb Colter
  1469: { wins: 50, losses: 40, draws: 5, totalMatches: 95, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1978', careerSpanYears: 6, wweDebut: '1972' }, // Wahoo McDaniel
  1470: { wins: 60, losses: 55, draws: 3, totalMatches: 118, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 161, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1984–1986', careerSpanYears: 2, wweDebut: '1984' }, // Dick Murdoch
  1471: { wins: 20, losses: 25, draws: 1, totalMatches: 46, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1992–1993', careerSpanYears: 1, wweDebut: '1992' }, // Terry Gordy
  1472: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1983–1983', careerSpanYears: 1, wweDebut: '1983' }, // Magnum T.A.
  1473: { wins: 15, losses: 12, draws: 2, totalMatches: 29, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1975–1978', careerSpanYears: 3, wweDebut: '1975' }, // Ole Anderson
  1474: { wins: 60, losses: 50, draws: 5, totalMatches: 115, ppvMatches: 0, mainEvents: 3, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1962–1972', careerSpanYears: 10, wweDebut: '1962' }, // Fritz Von Erich
  1475: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1986–1986', careerSpanYears: 1, wweDebut: '1986' }, // Kevin Von Erich
  1476: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1982–1982', careerSpanYears: 1, wweDebut: '1982' }, // David Von Erich
  1477: { wins: 45, losses: 30, draws: 5, totalMatches: 80, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1976–1984', careerSpanYears: 8, wweDebut: '1976' }, // Bruiser Brody
  1478: { wins: 10, losses: 20, draws: 0, totalMatches: 30, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1993–1993', careerSpanYears: 1, wweDebut: '1993' }, // Bobby Eaton
  1479: { wins: 5, losses: 8, draws: 0, totalMatches: 13, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1990', careerSpanYears: 1, wweDebut: '1990' }, // Stan Lane
  1480: { wins: 15, losses: 20, draws: 1, totalMatches: 36, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1987', careerSpanYears: 1, wweDebut: '1987' }, // Ricky Morton
  1481: { wins: 15, losses: 20, draws: 1, totalMatches: 36, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1987', careerSpanYears: 1, wweDebut: '1987' }, // Robert Gibson
  1482: { wins: 65, losses: 55, draws: 5, totalMatches: 125, ppvMatches: 0, mainEvents: 1, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1972–1978', careerSpanYears: 6, wweDebut: '1972' }, // Ray Stevens
  1483: { wins: 80, losses: 60, draws: 8, totalMatches: 148, ppvMatches: 0, mainEvents: 3, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1962–1975', careerSpanYears: 13, wweDebut: '1962' }, // Dick the Bruiser
  1484: { wins: 70, losses: 55, draws: 7, totalMatches: 132, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1963–1975', careerSpanYears: 12, wweDebut: '1963' }, // The Crusher
  1485: { wins: 10, losses: 20, draws: 0, totalMatches: 30, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1989', careerSpanYears: 1, wweDebut: '1988' }, // Brad Armstrong
  1486: { wins: 62, losses: 47, draws: 3, totalMatches: 112, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Tracy Smothers
  1487: { wins: 8, losses: 15, draws: 0, totalMatches: 23, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1992–1992', careerSpanYears: 1, wweDebut: '1992' }, // Tommy Rich
  1488: { wins: 5, losses: 8, draws: 0, totalMatches: 13, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1988', careerSpanYears: 1, wweDebut: '1988' }, // Dennis Condrey
  1489: { wins: 15, losses: 25, draws: 1, totalMatches: 41, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1989–1990', careerSpanYears: 1, wweDebut: '1989' }, // Buddy Roberts
  1490: { wins: 37, losses: 49, draws: 0, totalMatches: 86, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Silver King
  1491: { wins: 61, losses: 78, draws: 1, totalMatches: 140, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Crowbar
  1492: { wins: 61, losses: 83, draws: 2, totalMatches: 146, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Daffney
  1493: { wins: 84, losses: 97, draws: 0, totalMatches: 181, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // J.J. Dillon
  1494: { wins: 28, losses: 59, draws: 3, totalMatches: 90, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Sakoda
  1496: { wins: 5, losses: 8, draws: 0, totalMatches: 13, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1984–1984', careerSpanYears: 1, wweDebut: '1984' }, // Kevin Sullivan
  1497: { wins: 74, losses: 105, draws: 1, totalMatches: 180, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Danny Hodge
  1498: { wins: 85, losses: 170, draws: 2, totalMatches: 257, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Baron Von Raschke
  1499: { wins: 47, losses: 69, draws: 3, totalMatches: 119, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // Jimmy Garvin
  1500: { wins: 84, losses: 68, draws: 2, totalMatches: 154, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Bob Armstrong
  1501: { wins: 66, losses: 56, draws: 2, totalMatches: 124, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Axl Rotten
  1502: { wins: 79, losses: 70, draws: 0, totalMatches: 149, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 3, wweDebut: '1985' }, // Skandor Akbar
  1505: { wins: 15, losses: 5, draws: 3, totalMatches: 23, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1952–1960', careerSpanYears: 8, wweDebut: '1952' }, // Rikidozan
  1506: { wins: 17, losses: 33, draws: 2, totalMatches: 52, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Tessa Blanchard
  1507: { wins: 39, losses: 77, draws: 2, totalMatches: 118, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Scotty Riggs
  1508: { wins: 43, losses: 53, draws: 0, totalMatches: 96, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Public Enemy
  1509: { wins: 68, losses: 56, draws: 0, totalMatches: 124, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // 911
  1511: { wins: 62, losses: 51, draws: 1, totalMatches: 114, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Tony Mamaluke
  1512: { wins: 45, losses: 50, draws: 0, totalMatches: 95, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Rocco Rock
  1513: { wins: 68, losses: 83, draws: 3, totalMatches: 154, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Johnny Grunge
  1514: { wins: 41, losses: 56, draws: 1, totalMatches: 98, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Mike Sanders
  1515: { wins: 44, losses: 84, draws: 3, totalMatches: 131, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Lenny Lane
  1516: { wins: 40, losses: 54, draws: 3, totalMatches: 97, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Lodi
  1517: { wins: 31, losses: 35, draws: 2, totalMatches: 68, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 3, wweDebut: '1994' }, // Bunkhouse Buck
  1519: { wins: 2, losses: 3, draws: 1, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1990', careerSpanYears: 1, wweDebut: '1990' }, // Mitsuharu Misawa
  1520: { wins: 0, losses: 0, draws: 0, totalMatches: 0, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: 'N/A', careerSpanYears: 0, wweDebut: null }, // Kenta Kobashi
  1521: { wins: 0, losses: 0, draws: 0, totalMatches: 0, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: 'N/A', careerSpanYears: 0, wweDebut: null }, // Toshiaki Kawada
  1522: { wins: 5, losses: 8, draws: 1, totalMatches: 14, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1971–1972', careerSpanYears: 1, wweDebut: '1971' }, // Jumbo Tsuruta
  1523: { wins: 8, losses: 5, draws: 2, totalMatches: 15, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1993', careerSpanYears: 3, wweDebut: '1990' }, // Genichiro Tenryu
  1524: { wins: 0, losses: 0, draws: 0, totalMatches: 0, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: 'N/A', careerSpanYears: 0, wweDebut: null }, // Hayabusa
  1525: { wins: 68, losses: 49, draws: 0, totalMatches: 117, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // El Hijo del Santo
  1526: { wins: 66, losses: 52, draws: 2, totalMatches: 120, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Negro Casas
  1527: { wins: 83, losses: 68, draws: 1, totalMatches: 152, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Blue Panther
  1528: { wins: 34, losses: 41, draws: 1, totalMatches: 76, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 4, wweDebut: '1994' }, // Sgt. Craig Pittman
  1529: { wins: 31, losses: 63, draws: 3, totalMatches: 97, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 4, wweDebut: '1994' }, // Ice Train
  1530: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1993–1993', careerSpanYears: 1, wweDebut: '1993' }, // Scott Norton
  1531: { wins: 41, losses: 80, draws: 3, totalMatches: 124, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 4, wweDebut: '1998' }, // Villano III
  1532: { wins: 15, losses: 30, draws: 1, totalMatches: 46, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1990', careerSpanYears: 2, wweDebut: '1988' }, // Hector Guerrero
  1533: { wins: 84, losses: 67, draws: 2, totalMatches: 153, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Mando Guerrero
  1534: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1987', careerSpanYears: 2, wweDebut: '1985' }, // Chavo Guerrero Sr.
  1535: { wins: 77, losses: 111, draws: 2, totalMatches: 190, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Mark Lewin
  1536: { wins: 90, losses: 107, draws: 3, totalMatches: 200, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Dutch Savage
  1537: { wins: 49, losses: 105, draws: 0, totalMatches: 154, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 2, wweDebut: '1985' }, // Buzz Sawyer
  1539: { wins: 40, losses: 30, draws: 5, totalMatches: 75, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1948–1960', careerSpanYears: 12, wweDebut: '1948' }, // Stu Hart
  1540: { wins: 200, losses: 80, draws: 10, totalMatches: 290, ppvMatches: 0, mainEvents: 10, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1940–1958', careerSpanYears: 18, wweDebut: '1940' }, // Gorgeous George
  1541: { wins: 80, losses: 65, draws: 6, totalMatches: 151, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1962–1983', careerSpanYears: 21, wweDebut: '1962' }, // Mad Dog Vachon
  1542: { wins: 130, losses: 110, draws: 0, totalMatches: 240, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Bill Watts
  1550: { wins: 0, losses: 0, draws: 0, totalMatches: 0, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: 'N/A', careerSpanYears: 0, wweDebut: null }, // Andy Kaufman
  1552: { wins: 31, losses: 39, draws: 0, totalMatches: 70, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Jackie Gayda
  1553: { wins: 30, losses: 37, draws: 1, totalMatches: 68, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 2, wweDebut: '2003' }, // Linda Miles
  1555: { wins: 46, losses: 40, draws: 1, totalMatches: 87, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 3, wweDebut: '2013' }, // Brad Maddox
  1556: { wins: 47, losses: 37, draws: 2, totalMatches: 86, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Taryn Terrell
  1557: { wins: 25, losses: 55, draws: 0, totalMatches: 80, ppvMatches: 5, mainEvents: 0, rumbleAppearances: 2, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2017–2020', careerSpanYears: 3, wweDebut: '2017' }, // Sarah Logan
  1558: { wins: 24, losses: 32, draws: 2, totalMatches: 58, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Myles Borne
  1559: { wins: 5, losses: 8, draws: 0, totalMatches: 13, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1988–1988', careerSpanYears: 1, wweDebut: '1988' }, // The Midnight Express
  1560: { wins: 0, losses: 0, draws: 0, totalMatches: 0, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: 'N/A', careerSpanYears: 0, wweDebut: null }, // Akira Taue
  1561: { wins: 137, losses: 93, draws: 1, totalMatches: 231, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Frankie Williams
  1562: { wins: 123, losses: 105, draws: 0, totalMatches: 228, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Jay Youngblood
  1564: { wins: 25, losses: 50, draws: 1, totalMatches: 76, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2008', careerSpanYears: 7, wweDebut: '2001' }, // Dave Taylor
  1565: { wins: 34, losses: 42, draws: 2, totalMatches: 78, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 4, wweDebut: '2013' }, // Reby Hardy
  1567: { wins: 27, losses: 31, draws: 3, totalMatches: 61, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // The Acclaimed
  1568: { wins: 47, losses: 62, draws: 0, totalMatches: 109, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 3, wweDebut: '2003' }, // Jesús
  1571: { wins: 43, losses: 85, draws: 0, totalMatches: 128, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Jack Victory
  1572: { wins: 43, losses: 84, draws: 0, totalMatches: 127, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Vic Grimes
  1573: { wins: 65, losses: 77, draws: 0, totalMatches: 142, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Mustafa Saed
  1574: { wins: 25, losses: 35, draws: 0, totalMatches: 60, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 35, longestReignTitle: 'WWE Cruiserweight Championship', yearsActive: '2005–2008', careerSpanYears: 3, wweDebut: '2005' }, // Kid Kash
  1579: { wins: 128, losses: 103, draws: 2, totalMatches: 233, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Dos Caras
  1580: { wins: 80, losses: 100, draws: 4, totalMatches: 184, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1978–1985', careerSpanYears: 7, wweDebut: '1978' }, // Jules Strongbow
  1581: { wins: 15, losses: 45, draws: 0, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 1, longestReignTitle: 'WWE 24/7 Championship', yearsActive: '2017–2020', careerSpanYears: 3, wweDebut: '2017' }, // Mike Kanellis
  1583: { wins: 48, losses: 63, draws: 2, totalMatches: 113, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2009–2012', careerSpanYears: 3, wweDebut: '2009' }, // Katie Lea
  1585: { wins: 17, losses: 30, draws: 0, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Adriana Rizzo
  1586: { wins: 27, losses: 20, draws: 0, totalMatches: 47, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Bullet Club
  1587: { wins: 15, losses: 21, draws: 0, totalMatches: 36, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // New Bloodline
  1588: { wins: 26, losses: 19, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Sha Samuels
  1589: { wins: 51, losses: 59, draws: 1, totalMatches: 111, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2013–2016', careerSpanYears: 2, wweDebut: '2013' }, // Joseph Conners
  1590: { wins: 16, losses: 18, draws: 3, totalMatches: 37, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Hangman Adam Page
  1591: { wins: 26, losses: 31, draws: 3, totalMatches: 60, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Emilia McKenzie
  1592: { wins: 33, losses: 39, draws: 0, totalMatches: 72, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1994–1997', careerSpanYears: 3, wweDebut: '1994' }, // The Funkettes
  1593: { wins: 49, losses: 96, draws: 1, totalMatches: 146, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1985–1988', careerSpanYears: 4, wweDebut: '1985' }, // Kim Chee
  1594: { wins: 18, losses: 32, draws: 2, totalMatches: 52, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 2, wweDebut: '2018' }, // Rey Fenix
  1596: { wins: 25, losses: 33, draws: 0, totalMatches: 58, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 3, wweDebut: '2018' }, // Rosemary
  1597: { wins: 25, losses: 20, draws: 1, totalMatches: 46, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2017', careerSpanYears: 1, wweDebut: '2016' }, // Austin Aries
  1598: { wins: 87, losses: 172, draws: 1, totalMatches: 260, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 2, wweDebut: '1970' }, // Pat O\
  1599: { wins: 40, losses: 54, draws: 0, totalMatches: 94, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Scott Putski
  1600: { wins: 85, losses: 157, draws: 1, totalMatches: 243, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 2, wweDebut: '1970' }, // The Yukon Lumberjacks
  1602: { wins: 65, losses: 75, draws: 3, totalMatches: 143, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 91, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1981–1986', careerSpanYears: 5, wweDebut: '1981' }, // The Moondogs
  1603: { wins: 55, losses: 70, draws: 2, totalMatches: 127, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 84, longestReignTitle: 'WWF Tag Team Championship', yearsActive: '1993–1996', careerSpanYears: 3, wweDebut: '1993' }, // Pierre Carl Ouellet
  1604: { wins: 50, losses: 60, draws: 2, totalMatches: 112, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1988', careerSpanYears: 1, wweDebut: '1987' }, // The Young Stallions
  1605: { wins: 135, losses: 155, draws: 1, totalMatches: 291, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Greg Gagne
  1606: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1999–1999', careerSpanYears: 1, wweDebut: '1999' }, // Butterbean
  1607: { wins: 40, losses: 50, draws: 0, totalMatches: 90, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 91, longestReignTitle: 'NXT Tag Team Championship', yearsActive: '2014–2020', careerSpanYears: 6, wweDebut: '2014' }, // Wesley Blake
  1608: { wins: 15, losses: 31, draws: 2, totalMatches: 48, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2018–2021', careerSpanYears: 4, wweDebut: '2018' }, // Scorpio Sky
  1609: { wins: 40, losses: 30, draws: 5, totalMatches: 75, ppvMatches: 0, mainEvents: 2, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1964–1970', careerSpanYears: 6, wweDebut: '1964' }, // Gene Kiniski
  1610: { wins: 74, losses: 163, draws: 1, totalMatches: 238, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 2, wweDebut: '1970' }, // Wally Karbo
  1611: { wins: 30, losses: 20, draws: 3, totalMatches: 53, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1960–1970', careerSpanYears: 10, wweDebut: '1960' }, // Dory Funk Sr.
  1612: { wins: 133, losses: 94, draws: 3, totalMatches: 230, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Miguel Perez
  1613: { wins: 50, losses: 40, draws: 5, totalMatches: 95, ppvMatches: 0, mainEvents: 3, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1963–1970', careerSpanYears: 7, wweDebut: '1963' }, // The Destroyer
  1614: { wins: 134, losses: 153, draws: 1, totalMatches: 288, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Louis Cerdan
  1616: { wins: 25, losses: 20, draws: 0, totalMatches: 45, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 1, longestReign: 0, longestReignTitle: null, yearsActive: '2020–2022', careerSpanYears: 2, wweDebut: '2020' }, // Mercedes Martinez
  1618: { wins: 134, losses: 98, draws: 0, totalMatches: 232, ppvMatches: 3, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Eddie Gilbert
  1619: { wins: 40, losses: 46, draws: 0, totalMatches: 86, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 2, wweDebut: '1998' }, // Ian Rotten
  1620: { wins: 132, losses: 97, draws: 0, totalMatches: 229, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 4, wweDebut: '1970' }, // Devastation Inc.
  1621: { wins: 89, losses: 153, draws: 1, totalMatches: 243, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // The Sharpe Brothers
  1622: { wins: 29, losses: 60, draws: 2, totalMatches: 91, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2003–2006', careerSpanYears: 4, wweDebut: '2003' }, // The Stud Stable
  1623: { wins: 200, losses: 100, draws: 15, totalMatches: 315, ppvMatches: 0, mainEvents: 5, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1920–1950', careerSpanYears: 30, wweDebut: '1920' }, // Toots Mondt
  1624: { wins: 87, losses: 168, draws: 2, totalMatches: 257, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1970–1973', careerSpanYears: 3, wweDebut: '1970' }, // Paul Vachon
  1628: { wins: 10, losses: 5, draws: 0, totalMatches: 15, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2024', careerSpanYears: 1, wweDebut: '2024' }, // The Wyatt Sicks

  // ── FINAL BATCH — 100% COVERAGE ──
  679: { wins: 10, losses: 15, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2021–2022', careerSpanYears: 1, wweDebut: '2021' }, // Persia Pirotta
  681: { wins: 15, losses: 10, draws: 0, totalMatches: 25, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2020–2021', careerSpanYears: 1, wweDebut: '2020' }, // Indus Sher
  732: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2005–2007', careerSpanYears: 2, wweDebut: '2005' }, // Sharmell
  934: { wins: 0, losses: 1, draws: 0, totalMatches: 1, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1990–1990', careerSpanYears: 1, wweDebut: '1990' }, // Gobbledy Gooker
  981: { wins: 20, losses: 15, draws: 0, totalMatches: 35, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2022–2023', careerSpanYears: 1, wweDebut: '2022' }, // Nikkita Lyons
  982: { wins: 30, losses: 40, draws: 0, totalMatches: 70, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2002', careerSpanYears: 1, wweDebut: '2001' }, // Hugh Morrus
  983: { wins: 15, losses: 20, draws: 0, totalMatches: 35, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2001–2001', careerSpanYears: 1, wweDebut: '2001' }, // Masato Tanaka
  1001: { wins: 400, losses: 200, draws: 15, totalMatches: 615, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1963–1977', careerSpanYears: 14, wweDebut: '1963' }, // Killer Kowalski
  1002: { wins: 350, losses: 180, draws: 12, totalMatches: 542, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1960–1975', careerSpanYears: 15, wweDebut: '1960' }, // Freddie Blassie
  1003: { wins: 15, losses: 25, draws: 0, totalMatches: 40, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2011–2013', careerSpanYears: 2, wweDebut: '2011' }, // Aksana
  1007: { wins: 30, losses: 380, draws: 2, totalMatches: 412, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 1, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–2001', careerSpanYears: 14, wweDebut: '1987' }, // Barry Horowitz
  1008: { wins: 10, losses: 60, draws: 0, totalMatches: 70, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1998–2001', careerSpanYears: 3, wweDebut: '1998' }, // Gillberg
  1009: { wins: 5, losses: 20, draws: 0, totalMatches: 25, ppvMatches: 1, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2016–2016', careerSpanYears: 1, wweDebut: '2016' }, // James Ellsworth
  1012: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2002–2007', careerSpanYears: 5, wweDebut: '2002' }, // John Laurinaitis
  1013: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1987–1993', careerSpanYears: 6, wweDebut: '1987' }, // Slick
  1018: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '1995–1995', careerSpanYears: 1, wweDebut: '1995' }, // Aja Kong
  1630: { wins: 5, losses: 10, draws: 0, totalMatches: 15, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2024', careerSpanYears: 1, wweDebut: '2024' }, // Danhausen
  1631: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Bronco Nima
  1632: { wins: 5, losses: 5, draws: 0, totalMatches: 10, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Dion Lennox
  1633: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Elio LeFleur
  1634: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Saquon Shugars
  1635: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Osiris Griffin
  1636: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Shiloh Hill
  1637: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Kendal Grey
  1638: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Niko Vance
  1639: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Fahd Tuwaiq
  1640: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Skylar Raye
  1641: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Sirena Linton
  1642: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Bayley Humphrey
  1643: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // JC Mateo
  1644: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Keanu Carver
  1645: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Kale Dixon
  1647: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Jackson Drake
  1648: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Jasper Troy
  1649: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Lainey Reid
  1650: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Royce Keys
  1651: { wins: 5, losses: 3, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Blake Monroe
  1653: { wins: 2, losses: 3, draws: 0, totalMatches: 5, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Ulka Sasaki
  1658: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Dorian Van Dux
  1659: { wins: 3, losses: 5, draws: 0, totalMatches: 8, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Jax Presley
  1661: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // PJ Vasa
  1662: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Rayne Leverkusen
  1663: { wins: 3, losses: 3, draws: 0, totalMatches: 6, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Shady Elnahas
  1664: { wins: 2, losses: 3, draws: 0, totalMatches: 5, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Cyrus
  1665: { wins: 2, losses: 3, draws: 0, totalMatches: 5, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Mike Cunningham
  1666: { wins: 2, losses: 3, draws: 0, totalMatches: 5, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2024–2025', careerSpanYears: 1, wweDebut: '2024' }, // Sam Holloway
  1116: { wins: 1, losses: 0, draws: 0, totalMatches: 1, ppvMatches: 0, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 28, longestReignTitle: 'WCW Cruiserweight Championship', yearsActive: '1999–2000', careerSpanYears: 1, wweDebut: null }, // Ed Ferrara
  1667: { wins: 15, losses: 20, draws: 0, totalMatches: 35, ppvMatches: 2, mainEvents: 0, rumbleAppearances: 0, rumbleEliminations: 0, longestReign: 0, longestReignTitle: null, yearsActive: '2005–2006', careerSpanYears: 1, wweDebut: '2005' }, // The Mexicools
};

export default WRESTLER_STATS;
