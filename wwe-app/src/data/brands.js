// WWE Brand assignments and history
// Brands: Raw, SmackDown, NXT
// Brand splits: 2002-2011 (first split), 2016-present (second split)

export const BRAND_COLORS = {
  Raw: '#E31837',
  SmackDown: '#005BBB',
  NXT: '#D4AF37',
};

// Tag team/faction draft split notes (keyed by wrestler ID)
export const DRAFT_NOTES = {
  51: 'Split in 2002 Draft — Bubba Ray to Raw, D-Von to SmackDown',
  67: 'APA split in 2002 Draft — Faarooq to SmackDown, Bradshaw to SmackDown (reunited)',
  129: 'Usos split in 2024 — Jey Uso drafted to Raw, Jimmy Uso to SmackDown',
  105: 'New Day kept together through multiple drafts; remained on same brand',
  297: 'Judgment Day remained on Raw as a faction through 2023-2025',
  421: 'Imperium split across brands — Gunther to Raw, some members stayed on SmackDown/NXT',
  196: 'Nexus disbanded before brands mattered; Wade Barrett drafted to SmackDown 2010',
};

// Brand data keyed by wrestler ID
const WRESTLER_BRANDS = {
  // ── WWWF / PRE-GOLDEN (pre-brand split, no brand data) ──────────

  // ── GOLDEN ERA ──────────────────────────────────────────────────
  // Most Golden Era wrestlers retired before brand splits

  4: { // Hulk Hogan
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2002', to: '2002' },
      { brand: 'SmackDown', from: '2003', to: '2003' },
    ],
  },

  // ── NEW GENERATION / ATTITUDE / RUTHLESS AGGRESSION ─────────────

  30: { // Triple H
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'Raw', from: '2005', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2016' },
    ],
  },

  31: { // Stone Cold Steve Austin
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2003' },
    ],
  },

  32: { // The Rock
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
    ],
  },

  33: { // Undertaker
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'SmackDown', from: '2004', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2010' },
      { brand: 'SmackDown', from: '2010', to: '2011' },
    ],
  },

  34: { // Shawn Michaels
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2010' },
    ],
  },

  35: { // Chris Jericho
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'Raw', from: '2007', to: '2008' },
      { brand: 'SmackDown', from: '2008', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2010' },
      { brand: 'SmackDown', from: '2010', to: '2010' },
      { brand: 'Raw', from: '2012', to: '2012' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
    ],
  },

  36: { // Kurt Angle
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2002' },
      { brand: 'SmackDown', from: '2002', to: '2006' },
      { brand: 'Raw', from: '2017', to: '2019' },
    ],
  },

  39: { // Rikishi
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
    ],
  },

  42: { // William Regal
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2008' },
    ],
  },

  43: { // Mankind/Mick Foley
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2002' },
      { brand: 'Raw', from: '2003', to: '2004' },
    ],
  },

  44: { // Kane
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2006' },
      { brand: 'Raw', from: '2006', to: '2008' },
      { brand: 'SmackDown', from: '2008', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2016' },
      { brand: 'Raw', from: '2017', to: '2018' },
    ],
  },

  46: { // Chris Benoit
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2007' },
    ],
  },

  47: { // Edge
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2007' },
      { brand: 'SmackDown', from: '2007', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2010' },
      { brand: 'SmackDown', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  48: { // Christian
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2002' },
      { brand: 'SmackDown', from: '2002', to: '2005' },
      { brand: 'SmackDown', from: '2011', to: '2011' },
    ],
  },

  49: { // Jeff Hardy
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2006', to: '2007' },
      { brand: 'SmackDown', from: '2008', to: '2009' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2021' },
    ],
  },

  50: { // Matt Hardy
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2003', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2010' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2020' },
    ],
  },

  51: { // Dudley Boyz
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2002' },
      { brand: 'SmackDown', from: '2003', to: '2005' },
      { brand: 'Raw', from: '2015', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2016' },
    ],
  },

  53: { // Mark Henry
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2005' },
      { brand: 'SmackDown', from: '2006', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2011' },
      { brand: 'SmackDown', from: '2011', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2018' },
    ],
  },

  56: { // Big Show
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2004', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2018' },
    ],
  },

  57: { // X-Pac
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2002' },
    ],
  },

  58: { // Road Dogg
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2002' },
    ],
  },

  59: { // Billy Gunn
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
    ],
  },

  61: { // Lita
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2006' },
    ],
  },

  62: { // Trish Stratus
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2006' },
    ],
  },

  66: { // Test
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2007' },
    ],
  },

  68: { // Tazz
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2006' },
    ],
  },

  72: { // Eddie Guerrero
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2005' },
    ],
  },

  73: { // Rob Van Dam
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2007' },
    ],
  },

  74: { // Vince McMahon
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2007' },
    ],
  },

  75: { // John Cena
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2005' },
      { brand: 'Raw', from: '2005', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2019' },
    ],
  },

  76: { // Batista
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2008' },
      { brand: 'SmackDown', from: '2008', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2010' },
    ],
  },

  77: { // Randy Orton
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2007' },
      { brand: 'SmackDown', from: '2007', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
    ],
  },

  78: { // Rey Mysterio
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2011' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  79: { // Brock Lesnar
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2012', to: '2014' },
      { brand: 'Raw', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2021', to: '2022' },
    ],
  },

  80: { // JBL
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2006' },
      { brand: 'Raw', from: '2006', to: '2007' },
      { brand: 'SmackDown', from: '2007', to: '2009' },
    ],
  },

  81: { // Booker T
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2004' },
      { brand: 'SmackDown', from: '2004', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2007' },
    ],
  },

  82: { // Carlito
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2004', to: '2005' },
      { brand: 'Raw', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2010' },
    ],
  },

  83: { // Shelton Benjamin
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2006' },
      { brand: 'SmackDown', from: '2006', to: '2010' },
      { brand: 'SmackDown', from: '2017', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
    ],
  },

  85: { // CM Punk
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2006', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  86: { // Sheamus
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2009', to: '2011' },
      { brand: 'SmackDown', from: '2012', to: '2014' },
      { brand: 'Raw', from: '2014', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  87: { // The Miz
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2006', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2018' },
      { brand: 'Raw', from: '2018', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: null },
    ],
  },

  88: { // Jack Swagger
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2013', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2017' },
    ],
  },

  89: { // Dolph Ziggler
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2023' },
    ],
  },

  90: { // Kofi Kingston
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2008', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: null },
    ],
  },

  91: { // Daniel Bryan
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2021' },
    ],
  },

  92: { // Seth Rollins
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2012', to: '2014' },
      { brand: 'Raw', from: '2014', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2019', to: null },
    ],
  },

  93: { // Roman Reigns
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2012', to: '2013' },
      { brand: 'Raw', from: '2014', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  94: { // Dean Ambrose / Jon Moxley
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2012', to: '2013' },
      { brand: 'Raw', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
    ],
  },

  95: { // Bray Wyatt
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2012', to: '2013' },
      { brand: 'SmackDown', from: '2013', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2022', to: '2023' },
    ],
  },

  96: { // Kevin Owens
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2015' },
      { brand: 'Raw', from: '2015', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  97: { // Sami Zayn
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2013', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  98: { // AJ Styles
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  99: { // Finn Balor
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'NXT', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: null },
    ],
  },

  100: { // Drew McIntyre
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2007', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2010' },
      { brand: 'SmackDown', from: '2010', to: '2011' },
      { brand: 'NXT', from: '2017', to: '2018' },
      { brand: 'Raw', from: '2018', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: '2024' },
      { brand: 'Raw', from: '2024', to: '2025' },
      { brand: 'SmackDown', from: '2025', to: null },
    ],
  },

  101: { // Becky Lynch
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2015' },
      { brand: 'SmackDown', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2022' },
      { brand: 'Raw', from: '2023', to: '2024' },
      { brand: 'Raw', from: '2025', to: null },
    ],
  },

  102: { // Charlotte Flair
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2013', to: '2015' },
      { brand: 'Raw', from: '2015', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2021', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2023' },
    ],
  },

  103: { // Sasha Banks / Mercedes Mone
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2013', to: '2015' },
      { brand: 'Raw', from: '2015', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2022' },
    ],
  },

  104: { // Cesaro
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2013', to: '2015' },
      { brand: 'SmackDown', from: '2015', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2022' },
    ],
  },

  106: { // Rusev / Miro
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2018', to: '2020' },
    ],
  },

  107: { // Wade Barrett
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2016' },
    ],
  },

  108: { // Alberto Del Rio
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2011', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2016' },
    ],
  },

  109: { // Goldberg
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2003', to: '2004' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2020', to: '2020' },
    ],
  },

  110: { // Ric Flair
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'Raw', from: '2005', to: '2008' },
    ],
  },

  111: { // Lance Storm
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2004' },
    ],
  },

  112: { // Tajiri
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2003', to: '2005' },
    ],
  },

  118: { // Faarooq
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
    ],
  },

  125: { // Hurricane
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2005' },
      { brand: 'SmackDown', from: '2005', to: '2007' },
    ],
  },

  126: { // Rhyno
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2002' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
    ],
  },

  127: { // John Morrison
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2011' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2022' },
    ],
  },

  128: { // Cody Rhodes
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2007', to: '2008' },
      { brand: 'SmackDown', from: '2008', to: '2010' },
      { brand: 'SmackDown', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2022', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  129: { // The Usos
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2024' },
    ],
  },

  130: { // Big E
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2012', to: '2013' },
      { brand: 'Raw', from: '2013', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
    ],
  },

  131: { // Bobby Lashley
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2008' },
      { brand: 'Raw', from: '2018', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2023' },
    ],
  },

  132: { // Samoa Joe
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
    ],
  },

  133: { // Bianca Belair
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: null },
    ],
  },

  134: { // Natalya
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  135: { // Bayley
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2013', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2022', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  136: { // Bobby Roode
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2018' },
      { brand: 'Raw', from: '2018', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
    ],
  },

  137: { // Aleister Black / Malakai Black
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2017', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
    ],
  },

  138: { // Theory / Austin Theory
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  139: { // Gunther
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  140: { // Rhea Ripley
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2021' },
      { brand: 'Raw', from: '2021', to: null },
    ],
  },

  162: { // Shane McMahon
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'SmackDown', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
    ],
  },

  166: { // Stephanie McMahon
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2003', to: '2009' },
    ],
  },


  172: { // Paul London
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2004', to: '2008' },
    ],
  },

  173: { // Brian Kendrick
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2004', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2009' },
    ],
  },

  175: { // Melina
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2011' },
    ],
  },

  176: { // Beth Phoenix
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2006', to: '2008' },
      { brand: 'SmackDown', from: '2008', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2012' },
    ],
  },

  177: { // Mickie James
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2005', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2010' },
    ],
  },

  187: { // Chavo Guerrero Jr.
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2005' },
      { brand: 'Raw', from: '2005', to: '2006' },
      { brand: 'SmackDown', from: '2006', to: '2007' },
      { brand: 'Raw', from: '2008', to: '2011' },
    ],
  },

  190: { // Zack Ryder / Matt Cardona
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'Raw', from: '2008', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2020' },
    ],
  },

  191: { // Santino Marella
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2007', to: '2009' },
      { brand: 'SmackDown', from: '2009', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
    ],
  },

  192: { // R-Truth
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: null },
    ],
  },

  194: { // Tyson Kidd
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2009', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'NXT', from: '2014', to: '2015' },
    ],
  },

  197: { // Heath Slater
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2018' },
      { brand: 'Raw', from: '2018', to: '2020' },
    ],
  },

  205: { // Luke Harper / Brodie Lee
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2013', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
    ],
  },

  206: { // Erick Rowan
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2013', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
    ],
  },

  210: { // Paige
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2013', to: '2014' },
      { brand: 'Raw', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2018' },
    ],
  },

  211: { // Braun Strowman
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2022', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  212: { // Baron Corbin
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2018' },
      { brand: 'Raw', from: '2018', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2023' },
    ],
  },

  213: { // Elias
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
    ],
  },

  214: { // Tommaso Ciampa
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2023' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  215: { // Johnny Gargano
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  216: { // Karrion Kross
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  217: { // Damian Priest
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2025' },
      { brand: 'SmackDown', from: '2025', to: null },
    ],
  },

  218: { // Dominik Mysterio
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2022' },
      { brand: 'Raw', from: '2022', to: null },
    ],
  },

  219: { // Solo Sikoa
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  220: { // LA Knight
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  222: { // Liv Morgan
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2022' },
      { brand: 'Raw', from: '2022', to: null },
    ],
  },

  223: { // IYO SKY
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2022' },
      { brand: 'Raw', from: '2022', to: null },
    ],
  },

  224: { // Zoey Stark
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2023' },
      { brand: 'Raw', from: '2023', to: '2024' },
    ],
  },

  237: { // Scott Steiner
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2003', to: '2004' },
    ],
  },

  241: { // Tommy Dreamer
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2003' },
    ],
  },

  257: { // Adam Cole
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2017', to: '2021' },
    ],
  },

  260: { // Shayna Baszler
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2023' },
    ],
  },

  262: { // Asuka
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2023' },
    ],
  },

  264: { // Dakota Kai
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2022' },
      { brand: 'Raw', from: '2022', to: null },
    ],
  },

  265: { // Candice LeRae
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  268: { // Chad Gable
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2018' },
      { brand: 'Raw', from: '2018', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: null },
    ],
  },

  272: { // The Viking Raiders
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  297: { // The Judgment Day
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2022', to: null },
    ],
  },

  306: { // Naomi
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2010', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  307: { // Nia Jax
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2021' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  308: { // Alexa Bliss
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2023' },
    ],
  },

  309: { // Tiffany Stratton
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  318: { // MVP
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2006', to: '2008' },
      { brand: 'Raw', from: '2008', to: '2010' },
      { brand: 'Raw', from: '2020', to: '2022' },
    ],
  },

  320: { // Ryback
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2010', to: '2012' },
      { brand: 'Raw', from: '2012', to: '2014' },
      { brand: 'Raw', from: '2014', to: '2016' },
    ],
  },

  321: { // Sting
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2015', to: '2015' },
    ],
  },

  330: { // Carmelo Hayes
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  331: { // Bron Breakker
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  335: { // Ivar
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  339: { // Shinsuke Nakamura
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2023' },
    ],
  },

  345: { // Ali / Mustafa Ali
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  401: { // Angel Garza
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  402: { // Humberto Carrillo
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  403: { // Santos Escobar
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  409: { // Raquel Rodriguez
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2023' },
      { brand: 'Raw', from: '2023', to: '2024' },
    ],
  },

  411: { // Roxanne Perez
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: null },
    ],
  },

  413: { // Ludwig Kaiser
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  414: { // Giovanni Vinci
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2024' },
    ],
  },

  415: { // JD McDonagh
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  416: { // Bronson Reed
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  421: { // Imperium (faction)
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  423: { // Cora Jade
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: null },
    ],
  },

  426: { // Grayson Waller
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  453: { // Brie Bella
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2011' },
      { brand: 'Raw', from: '2012', to: '2014' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
    ],
  },

  454: { // Nikki Bella
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2011' },
      { brand: 'Raw', from: '2012', to: '2015' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
    ],
  },

  456: { // Carmella
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  461: { // Katana Chance
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  462: { // Kayden Carter
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  465: { // Zelina Vega
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2021', to: '2021' },
      { brand: 'Raw', from: '2021', to: null },
    ],
  },

  482: { // Andrade
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  483: { // Keith Lee
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2022' },
    ],
  },

  486: { // Ricochet
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2024' },
    ],
  },

  491: { // Jade Cargill
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  492: { // Trick Williams
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: null },
    ],
  },

  493: { // Ilja Dragunov
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: '2024' },
    ],
  },

  496: { // Dragon Lee
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2023', to: '2024' },
      { brand: 'Raw', from: '2024', to: '2024' },
    ],
  },

  499: { // Pretty Deadly
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  500: { // Chelsea Green
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  505: { // Lyra Valkyria
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  518: { // Tony D'Angelo
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: null },
    ],
  },

  522: { // Ivy Nile
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  527: { // Pete Dunne / Butch / Rayo Americano
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2017', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  529: { // Alba Fyre
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2024' },
      { brand: 'Raw', from: '2024', to: '2024' },
    ],
  },

  532: { // Giulia
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2024', to: null },
    ],
  },

  537: { // Tama Tonga
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  538: { // Tonga Loa
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2024', to: '2024' },
    ],
  },

  589: { // Apollo Crews
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2015', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  618: { // Ronda Rousey
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2018', to: '2019' },
      { brand: 'SmackDown', from: '2022', to: '2023' },
    ],
  },

  672: { // Lola Vice
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2023', to: null },
    ],
  },

  784: { // Maxxine Dupri
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2022', to: '2023' },
      { brand: 'Raw', from: '2023', to: null },
    ],
  },

  850: { // Logan Paul
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2022', to: '2024' },
    ],
  },

  851: { // Jey Uso
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  853: { // Otis
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: null },
    ],
  },

  856: { // Jacob Fatu
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  858: { // Penta El Zero Miedo
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2025', to: '2025' },
    ],
  },

  860: { // Motor City Machine Guns
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2024', to: '2025' },
    ],
  },

  861: { // Riddle
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  865: { // Axiom & Nathan Frazer
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2023', to: '2025' },
    ],
  },

  874: { // Piper Niven
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  896: { // Albert / Tensai
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2012', to: '2014' },
    ],
  },

  906: { // Oba Femi
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2023', to: null },
    ],
  },

  908: { // Kelani Jordan
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2023', to: null },
    ],
  },

  925: { // Sonya Deville
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'SmackDown', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: '2024' },
      { brand: 'Raw', from: '2024', to: null },
    ],
  },

  936: { // Hardcore Holly
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2003' },
      { brand: 'Raw', from: '2003', to: '2005' },
      { brand: 'SmackDown', from: '2006', to: '2008' },
    ],
  },

  944: { // Maryse
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2007', to: '2009' },
      { brand: 'Raw', from: '2009', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2018' },
    ],
  },

  963: { // Nikki Cross
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2022' },
      { brand: 'Raw', from: '2022', to: null },
    ],
  },

  964: { // Shotzi
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2022' },
      { brand: 'Raw', from: '2022', to: '2024' },
    ],
  },

  973: { // Neville / PAC
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2012', to: '2015' },
      { brand: 'Raw', from: '2015', to: '2017' },
    ],
  },

  1065: { // Luke Gallows
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2006', to: '2008' },
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2020', to: '2021' },
    ],
  },

  1066: { // Karl Anderson
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2016', to: '2019' },
      { brand: 'Raw', from: '2020', to: '2021' },
    ],
  },

  1070: { // Kalisto
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2013', to: '2015' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2019' },
    ],
  },

  1075: { // Erik (Viking Raiders)
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
      { brand: 'Raw', from: '2021', to: '2023' },
    ],
  },

  1076: { // Montez Ford
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  1077: { // Angelo Dawkins
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2022' },
      { brand: 'SmackDown', from: '2022', to: null },
    ],
  },

  1081: { // Alicia Fox
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2008', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
      { brand: 'Raw', from: '2016', to: '2018' },
    ],
  },

  1085: { // Tucker (Heavy Machinery)
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2016', to: '2018' },
      { brand: 'SmackDown', from: '2018', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
    ],
  },

  1086: { // Cedric Alexander
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2018', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2022' },
    ],
  },

  1091: { // Blair Davenport
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  1092: { // Ethan Page
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2024', to: null },
    ],
  },

  1095: { // Kit Wilson (Pretty Deadly)
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  1096: { // Elton Prince (Pretty Deadly)
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  1118: { // Charlie Dempsey
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2025' },
    ],
  },

  1209: { // D-Von Dudley
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2002', to: '2004' },
      { brand: 'Raw', from: '2004', to: '2005' },
    ],
  },

  1210: { // Bubba Ray Dudley
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2004' },
      { brand: 'SmackDown', from: '2004', to: '2005' },
    ],
  },

  1267: { // Akira Tozawa
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2023' },
    ],
  },

  1273: { // Pat McAfee
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2021', to: '2023' },
    ],
  },

  1275: { // Enzo Amore
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2018' },
    ],
  },

  1276: { // Big Cass
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'Raw', from: '2016', to: '2017' },
      { brand: 'SmackDown', from: '2017', to: '2018' },
    ],
  },

  1336: { // B-Fab
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2021', to: '2023' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  1356: { // Jimmy Uso
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2010', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2024' },
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  1357: { // Xavier Woods
    currentBrand: 'Raw',
    brandHistory: [
      { brand: 'Raw', from: '2013', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2017' },
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'SmackDown', from: '2019', to: '2020' },
      { brand: 'Raw', from: '2020', to: null },
    ],
  },

  1360: { // Nick Aldis
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  1397: { // Joe Hendry
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2024', to: '2024' },
    ],
  },

  1398: { // Je'Von Evans
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2023', to: null },
    ],
  },

  1402: { // Jaida Parker
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2023', to: '2025' },
    ],
  },

  1403: { // Stephanie Vaquer
    currentBrand: 'NXT',
    brandHistory: [
      { brand: 'NXT', from: '2024', to: null },
    ],
  },

  1404: { // Zaria
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2024', to: '2025' },
    ],
  },

  1557: { // Sarah Logan
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2017', to: '2020' },
    ],
  },

  1587: { // New Bloodline (faction)
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'SmackDown', from: '2024', to: null },
    ],
  },

  1625: { // Ruby Riott
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2017', to: '2019' },
      { brand: 'Raw', from: '2019', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2021' },
    ],
  },

  // ── Michin (Mia Yim) ────────────────────────────────────────────
  675: { // Mia Yim / Michin
    currentBrand: 'SmackDown',
    brandHistory: [
      { brand: 'NXT', from: '2018', to: '2020' },
      { brand: 'Raw', from: '2020', to: '2021' },
      { brand: 'SmackDown', from: '2023', to: null },
    ],
  },

  // ── Additional active roster members ────────────────────────────

  497: { // Axiom
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2025' },
    ],
  },

  498: { // Nathan Frazer
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2022', to: '2025' },
    ],
  },

  590: { // Toni Storm
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2017', to: '2020' },
      { brand: 'SmackDown', from: '2021', to: '2022' },
    ],
  },

  1112: { // Drew Gulak
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2018', to: '2020' },
      { brand: 'SmackDown', from: '2020', to: '2022' },
    ],
  },

  1317: { // Donovan Dijak
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2017', to: '2020' },
      { brand: 'NXT', from: '2022', to: '2024' },
      { brand: 'Raw', from: '2024', to: '2024' },
    ],
  },

  1304: { // Shawn Spears
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2006', to: '2010' },
      { brand: 'Raw', from: '2010', to: '2011' },
    ],
  },

  1369: { // Aiden English
    currentBrand: null,
    brandHistory: [
      { brand: 'NXT', from: '2014', to: '2016' },
      { brand: 'SmackDown', from: '2016', to: '2019' },
    ],
  },

  507: { // Diamond Dallas Page
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2001', to: '2002' },
    ],
  },

  449: { // The Great Khali
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2006', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2008' },
      { brand: 'SmackDown', from: '2008', to: '2011' },
    ],
  },

  508: { // Evan Bourne
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2008', to: '2011' },
    ],
  },

  510: { // Sin Cara
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2011', to: '2011' },
      { brand: 'SmackDown', from: '2016', to: '2019' },
    ],
  },

  575: { // Mr. Kennedy
    currentBrand: null,
    brandHistory: [
      { brand: 'SmackDown', from: '2005', to: '2007' },
      { brand: 'Raw', from: '2007', to: '2009' },
    ],
  },

  578: { // Chris Masters
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2005', to: '2007' },
      { brand: 'SmackDown', from: '2007', to: '2008' },
      { brand: 'Raw', from: '2009', to: '2011' },
    ],
  },

  // ── Wrestlers who were primarily brand-split era ─────────────────

  27: { // Goldust
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2002', to: '2003' },
      { brand: 'SmackDown', from: '2003', to: '2003' },
      { brand: 'Raw', from: '2003', to: '2004' },
      { brand: 'SmackDown', from: '2008', to: '2009' },
      { brand: 'Raw', from: '2013', to: '2016' },
      { brand: 'Raw', from: '2018', to: '2019' },
    ],
  },

  1358: { // Alex Shelley (Motor City Machine Guns)
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2024', to: '2025' },
    ],
  },

  1359: { // Chris Sabin (Motor City Machine Guns)
    currentBrand: null,
    brandHistory: [
      { brand: 'Raw', from: '2024', to: '2025' },
    ],
  },
  1: { currentBrand: null, brandHistory: [] },
  209: { currentBrand: null, brandHistory: [] },
  231: { currentBrand: null, brandHistory: [] },
  255: { currentBrand: null, brandHistory: [] },
  271: { currentBrand: null, brandHistory: [] },
  275: { currentBrand: null, brandHistory: [] },
  278: { currentBrand: null, brandHistory: [] },
  292: { currentBrand: null, brandHistory: [] },
  372: { currentBrand: null, brandHistory: [] },
  624: { currentBrand: null, brandHistory: [] },
  647: { currentBrand: null, brandHistory: [] },
  654: { currentBrand: null, brandHistory: [] },
  671: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2021' }] },
  695: { currentBrand: null, brandHistory: [] },
  780: { currentBrand: null, brandHistory: [] },
  800: { currentBrand: null, brandHistory: [] },
  887: { currentBrand: null, brandHistory: [] },
  962: { currentBrand: null, brandHistory: [] },
  1018: { currentBrand: null, brandHistory: [] },
  1141: { currentBrand: null, brandHistory: [] },
  1148: { currentBrand: null, brandHistory: [] },
  1342: { currentBrand: null, brandHistory: [] },
  1391: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2022' }] },
  1438: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024' }] },

  // === Added March 2026: Missing current roster wrestlers ===
  1629: { currentBrand: 'SmackDown', brandHistory: [{ brand: 'NXT', from: 'Jun 2024', to: 'Jan 2026' }, { brand: 'SmackDown', from: 'Jan 2026', to: null }] },
  1630: { currentBrand: 'Raw', brandHistory: [{ brand: 'Raw', from: 'Mar 2026', to: null }] },
  1631: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2022', to: null }] },
  1632: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1633: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1634: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1635: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1636: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1637: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1638: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1639: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: 'Jan 2026', to: null }] },
  1640: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1641: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1642: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1643: { currentBrand: 'SmackDown', brandHistory: [{ brand: 'SmackDown', from: 'May 2025', to: null }] },
  1644: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1645: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1647: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1648: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1649: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1650: { currentBrand: null, brandHistory: [{ brand: 'WWE', from: 'Jan 2026', to: null }] },
  1651: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1653: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: 'Feb 2026', to: null }] },

  1654: { currentBrand: 'Raw', brandHistory: [{ brand: 'Raw', from: '2020', to: null }] },
  1658: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1659: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1661: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1662: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1663: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },

  1664: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1665: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },
  1666: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2025', to: null }] },

  1251: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2010', to: '2013' }] },
  1441: { currentBrand: 'NXT', brandHistory: [{ brand: 'NXT', from: '2024', to: null }] },
  1627: { currentBrand: 'Raw', brandHistory: [{ brand: 'NXT', from: '2012', to: '2014' }, { brand: 'Raw', from: '2014', to: '2020' }, { brand: 'Raw', from: '2024', to: null }] },
  1628: { currentBrand: 'Raw', brandHistory: [{ brand: 'Raw', from: '2024', to: null }] },


  // -- AUTO-GENERATED: Missing brand entries --
  2: { currentBrand: null, brandHistory: [] }, // Pedro Morales
  3: { currentBrand: null, brandHistory: [] }, // Bob Backlund
  5: { currentBrand: null, brandHistory: [] }, // Randy Savage
  6: { currentBrand: null, brandHistory: [] }, // André the Giant
  7: { currentBrand: null, brandHistory: [] }, // Roddy Piper
  8: { currentBrand: null, brandHistory: [] }, // Mr. Perfect
  9: { currentBrand: null, brandHistory: [] }, // Ted DiBiase
  10: { currentBrand: null, brandHistory: [] }, // Jake Roberts
  11: { currentBrand: null, brandHistory: [] }, // Ricky Steamboat
  12: { currentBrand: null, brandHistory: [] }, // Ultimate Warrior
  13: { currentBrand: null, brandHistory: [] }, // Honky Tonk Man
  14: { currentBrand: null, brandHistory: [] }, // Rick Rude
  15: { currentBrand: null, brandHistory: [] }, // Demolition
  16: { currentBrand: null, brandHistory: [] }, // British Bulldogs
  17: { currentBrand: null, brandHistory: [] }, // Brutus Beefcake
  18: { currentBrand: null, brandHistory: [] }, // Earthquake
  19: { currentBrand: null, brandHistory: [] }, // Big Boss Man
  20: { currentBrand: null, brandHistory: [] }, // Sgt. Slaughter
  21: { currentBrand: null, brandHistory: [] }, // Iron Sheik
  22: { currentBrand: null, brandHistory: [] }, // Yokozuna
  23: { currentBrand: null, brandHistory: [] }, // Razor Ramon
  24: { currentBrand: null, brandHistory: [] }, // Diesel
  25: { currentBrand: null, brandHistory: [] }, // Owen Hart
  26: { currentBrand: null, brandHistory: [] }, // British Bulldog
  29: { currentBrand: null, brandHistory: [] }, // Lex Luger
  37: { currentBrand: null, brandHistory: [] }, // Steve Blackman
  38: { currentBrand: null, brandHistory: [] }, // Crash Holly
  40: { currentBrand: null, brandHistory: [] }, // Scotty 2 Hotty
  41: { currentBrand: null, brandHistory: [] }, // Grandmaster Sexay
  45: { currentBrand: null, brandHistory: [] }, // Bret Hart
  52: { currentBrand: null, brandHistory: [] }, // D'Lo Brown
  54: { currentBrand: null, brandHistory: [] }, // Val Venis
  55: { currentBrand: null, brandHistory: [] }, // Ken Shamrock
  60: { currentBrand: null, brandHistory: [] }, // Chyna
  63: { currentBrand: null, brandHistory: [] }, // The Godfather
  64: { currentBrand: null, brandHistory: [] }, // Al Snow
  69: { currentBrand: null, brandHistory: [] }, // Gangrel
  70: { currentBrand: null, brandHistory: [] }, // Perry Saturn
  71: { currentBrand: null, brandHistory: [] }, // Dean Malenko
  84: { currentBrand: null, brandHistory: [] }, // Charlie Haas
  113: { currentBrand: null, brandHistory: [] }, // Funaki
  114: { currentBrand: null, brandHistory: [] }, // Viscera
  116: { currentBrand: null, brandHistory: [] }, // Doink the Clown
  117: { currentBrand: null, brandHistory: [] }, // Tatanka
  120: { currentBrand: null, brandHistory: [] }, // Raven
  121: { currentBrand: null, brandHistory: [] }, // Test & Albert
  122: { currentBrand: null, brandHistory: [] }, // The Godwinns
  123: { currentBrand: null, brandHistory: [] }, // The Headbangers
  124: { currentBrand: null, brandHistory: [] }, // Ivory
  141: { currentBrand: null, brandHistory: [] }, // Hacksaw Jim Duggan
  142: { currentBrand: null, brandHistory: [] }, // Nikolai Volkoff
  143: { currentBrand: null, brandHistory: [] }, // Koko B. Ware
  144: { currentBrand: null, brandHistory: [] }, // George Steele
  145: { currentBrand: null, brandHistory: [] }, // Bobby Heenan
  146: { currentBrand: null, brandHistory: [] }, // Jim Cornette
  148: { currentBrand: null, brandHistory: [] }, // The Nasty Boys
  149: { currentBrand: null, brandHistory: [] }, // Legion of Doom
  150: { currentBrand: null, brandHistory: [] }, // The Bushwhackers
  151: { currentBrand: null, brandHistory: [] }, // Natural Disasters
  152: { currentBrand: null, brandHistory: [] }, // Money Inc.
  153: { currentBrand: null, brandHistory: [] }, // Tito Santana
  154: { currentBrand: null, brandHistory: [] }, // Greg Valentine
  155: { currentBrand: null, brandHistory: [] }, // Jimmy Snuka
  156: { currentBrand: null, brandHistory: [] }, // Marty Jannetty
  158: { currentBrand: null, brandHistory: [] }, // Smoking Gunns
  159: { currentBrand: null, brandHistory: [] }, // The Headshrinkers
  163: { currentBrand: null, brandHistory: [] }, // Right to Censor
  164: { currentBrand: null, brandHistory: [] }, // Mean Street Posse
  168: { currentBrand: null, brandHistory: [] }, // Jerry Lawler
  170: { currentBrand: null, brandHistory: [] }, // Snitsky
  174: { currentBrand: null, brandHistory: [] }, // MNM
  179: { currentBrand: null, brandHistory: [] }, // Super Crazy
  180: { currentBrand: null, brandHistory: [] }, // Nunzio
  181: { currentBrand: null, brandHistory: [] }, // Chuck Palumbo
  183: { currentBrand: null, brandHistory: [] }, // Heidenreich
  184: { currentBrand: null, brandHistory: [] }, // Orlando Jordan
  185: { currentBrand: null, brandHistory: [] }, // William Regal & Eugene
  186: { currentBrand: null, brandHistory: [] }, // Kenzo Suzuki
  189: { currentBrand: null, brandHistory: [] }, // René Duprée
  193: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Ezekiel Jackson
  195: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // David Hart Smith
  201: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Damien Sandow
  202: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Fandango
  203: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Bo Dallas
  233: { currentBrand: null, brandHistory: [] }, // Sable
  234: { currentBrand: null, brandHistory: [] }, // Torrie Wilson
  235: { currentBrand: null, brandHistory: [] }, // Stacy Keibler
  242: { currentBrand: null, brandHistory: [] }, // Sandman
  243: { currentBrand: null, brandHistory: [] }, // Sabu
  245: { currentBrand: null, brandHistory: [] }, // New Jack
  246: { currentBrand: null, brandHistory: [] }, // Balls Mahoney
  247: { currentBrand: null, brandHistory: [] }, // Spike Dudley
  248: { currentBrand: null, brandHistory: [] }, // Stevie Richards
  250: { currentBrand: null, brandHistory: [] }, // Billy Kidman
  251: { currentBrand: null, brandHistory: [] }, // Ultimo Dragon
  252: { currentBrand: null, brandHistory: [] }, // Jamie Noble
  256: { currentBrand: null, brandHistory: [] }, // Fit Finlay
  258: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Velveteen Dream
  261: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Kairi Sane
  263: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Ember Moon
  266: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Xia Li
  267: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Mansoor
  269: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Jason Jordan
  279: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Roderick Strong
  281: { currentBrand: null, brandHistory: [] }, // Too Cool
  283: { currentBrand: null, brandHistory: [] }, // Brian Pillman
  299: { currentBrand: null, brandHistory: [] }, // Alundra Blayze
  300: { currentBrand: null, brandHistory: [] }, // Wendi Richter
  301: { currentBrand: null, brandHistory: [] }, // Fabulous Moolah
  302: { currentBrand: null, brandHistory: [] }, // Mae Young
  303: { currentBrand: null, brandHistory: [] }, // Molly Holly
  304: { currentBrand: null, brandHistory: [] }, // Victoria
  305: { currentBrand: null, brandHistory: [] }, // Jazz
  310: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Lash Legend
  312: { currentBrand: null, brandHistory: [] }, // Tyson Tomko
  313: { currentBrand: null, brandHistory: [] }, // Mark Jindrak
  314: { currentBrand: null, brandHistory: [] }, // Kevin Thorn
  315: { currentBrand: null, brandHistory: [] }, // Muhammad Hassan
  328: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Hiromu Takahashi
  332: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Dijak
  333: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Omos
  334: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Madcap Moss
  337: { currentBrand: null, brandHistory: [] }, // Tiger Ali Singh
  338: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Yoshi Tatsu
  340: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Hideo Itami
  342: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Mojo Rawley
  343: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // The Ascension
  344: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Primo Colon
  346: { currentBrand: null, brandHistory: [] }, // Gorilla Monsoon
  347: { currentBrand: null, brandHistory: [] }, // Pat Patterson
  351: { currentBrand: null, brandHistory: [] }, // Mil Mascaras
  352: { currentBrand: null, brandHistory: [] }, // Stan Hansen
  353: { currentBrand: null, brandHistory: [] }, // Jesse Ventura
  354: { currentBrand: null, brandHistory: [] }, // Superstar Billy Graham
  355: { currentBrand: null, brandHistory: [] }, // Ivan Koloff
  356: { currentBrand: null, brandHistory: [] }, // Chief Jay Strongbow
  357: { currentBrand: null, brandHistory: [] }, // Blackjack Mulligan
  358: { currentBrand: null, brandHistory: [] }, // Dusty Rhodes
  359: { currentBrand: null, brandHistory: [] }, // The Valiant Brothers
  360: { currentBrand: null, brandHistory: [] }, // The Wild Samoans
  379: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Ted DiBiase Jr.
  380: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Curt Hawkins
  382: { currentBrand: null, brandHistory: [] }, // Maria Kanellis
  383: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Michelle McCool
  384: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Layla El
  385: { currentBrand: null, brandHistory: [] }, // Gail Kim
  386: { currentBrand: null, brandHistory: [] }, // Boogeyman
  388: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Umaga
  418: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Ridge Holland
  424: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Indi Hartwell
  425: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Dexter Lumis
  433: { currentBrand: null, brandHistory: [] }, // Harley Race
  435: { currentBrand: null, brandHistory: [] }, // King Kong Bundy
  436: { currentBrand: null, brandHistory: [] }, // The Warlord
  437: { currentBrand: null, brandHistory: [] }, // The Barbarian
  438: { currentBrand: null, brandHistory: [] }, // Rick Martel
  440: { currentBrand: null, brandHistory: [] }, // Haku
  442: { currentBrand: null, brandHistory: [] }, // The Kat
  443: { currentBrand: null, brandHistory: [] }, // Terri Runnels
  446: { currentBrand: null, brandHistory: [] }, // Dawn Marie
  447: { currentBrand: null, brandHistory: [] }, // Nidia
  457: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Dana Brooke
  458: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Mandy Rose
  459: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Jacy Jayne
  460: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Gigi Dolin
  464: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Lana
  467: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Ricardo Rodriguez
  468: { currentBrand: null, brandHistory: [] }, // TAKA Michinoku
  469: { currentBrand: null, brandHistory: [] }, // Essa Rios
  471: { currentBrand: null, brandHistory: [] }, // Paul Burchill
  472: { currentBrand: null, brandHistory: [] }, // Finlay
  473: { currentBrand: null, brandHistory: [] }, // Eugene
  475: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Brodus Clay
  476: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Cameron
  478: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Curtis Axel
  495: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Wes Lee
  517: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Katana Chance & Kayden Carter
  519: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Stacks
  520: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Julius Creed
  521: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Brutus Creed
  524: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Tyler Bate
  528: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Trent Seven
  530: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Isla Dawn
  531: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Sarray
  551: { currentBrand: null, brandHistory: [] }, // Vader
  552: { currentBrand: null, brandHistory: [] }, // Arn Anderson
  553: { currentBrand: null, brandHistory: [] }, // Tully Blanchard
  554: { currentBrand: null, brandHistory: [] }, // Barry Windham
  555: { currentBrand: null, brandHistory: [] }, // Mike Rotundo
  556: { currentBrand: null, brandHistory: [] }, // Jim Neidhart
  557: { currentBrand: null, brandHistory: [] }, // Dino Bravo
  559: { currentBrand: null, brandHistory: [] }, // Crush
  564: { currentBrand: null, brandHistory: [] }, // Marc Mero
  565: { currentBrand: null, brandHistory: [] }, // Adam Bomb
  572: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Elijah Burke
  583: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Eric Young
  585: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // EC3
  587: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Lars Sullivan
  602: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Tegan Nox
  604: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Duke Hudson
  606: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Killian Dain
  607: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Alexander Wolfe
  608: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Marcel Barthel
  609: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Fabian Aichner
  610: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Grizzled Young Veterans
  611: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Mark Andrews & Flash Morgan Webster
  612: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Noam Dar
  613: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Meiko Satomura
  614: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Amale
  615: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Jinny
  620: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Io Shirai
  622: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Swerve Strickland
  643: { currentBrand: null, brandHistory: [] }, // Lance Cade
  644: { currentBrand: null, brandHistory: [] }, // Trevor Murdoch
  645: { currentBrand: null, brandHistory: [] }, // Team Angle
  648: { currentBrand: null, brandHistory: [] }, // The Highlanders
  655: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // The Vaudevillains
  656: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Enzo Amore & Big Cass
  657: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // American Alpha
  658: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // The Bar
  659: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // The Authors of Pain
  660: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Heavy Machinery
  663: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Titus O'Neil
  673: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Elektra Lopez
  674: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Stevie Turner
  676: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Lacey Evans
  678: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Aliyah
  679: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Persia Pirotta
  681: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Indus Sher
  683: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Josh Briggs & Brooks Jensen
  684: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Fallon Henley
  685: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Hank Walker & Tank Ledger
  686: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Joe Coffey
  687: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Mark Coffey
  688: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Wolfgang
  689: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Danny Burch & Oney Lorcan
  690: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // MSK
  691: { currentBrand: null, brandHistory: [] }, // The Rockers
  692: { currentBrand: null, brandHistory: [] }, // The British Bulldogs
  693: { currentBrand: null, brandHistory: [] }, // The Orient Express
  696: { currentBrand: null, brandHistory: [] }, // The Quebecers
  697: { currentBrand: null, brandHistory: [] }, // Men on a Mission
  698: { currentBrand: null, brandHistory: [] }, // Well Dunn
  699: { currentBrand: null, brandHistory: [] }, // The Headshrinkers
  700: { currentBrand: null, brandHistory: [] }, // The Steiner Brothers
  703: { currentBrand: null, brandHistory: [] }, // Irwin R. Schyster
  706: { currentBrand: null, brandHistory: [] }, // Jim Duggan
  710: { currentBrand: null, brandHistory: [] }, // Typhoon
  719: { currentBrand: null, brandHistory: [] }, // The Godfather & D'Lo Brown
  720: { currentBrand: null, brandHistory: [] }, // Edge & Christian
  732: { currentBrand: null, brandHistory: [] }, // Sharmell
  735: { currentBrand: null, brandHistory: [] }, // Luna Vachon
  736: { currentBrand: null, brandHistory: [] }, // Jacqueline Moore
  737: { currentBrand: null, brandHistory: [] }, // Bull Nakano
  744: { currentBrand: null, brandHistory: [] }, // Kurt Angle & Chris Benoit
  745: { currentBrand: null, brandHistory: [] }, // Rey Mysterio & Rob Van Dam
  750: { currentBrand: null, brandHistory: [] }, // Paul London & Brian Kendrick
  753: { currentBrand: null, brandHistory: [] }, // Simon Dean
  756: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Cesaro & Tyson Kidd
  759: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // The Miz & John Morrison
  760: { currentBrand: null, brandHistory: [] }, // Jillian Hall
  771: { currentBrand: null, brandHistory: [] }, // Batista & Rey Mysterio
  777: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Sheamus & Cesaro
  778: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // The Street Profits
  781: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // RKBro
  783: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Otis & Chad Gable
  785: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Alpha Academy
  786: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Karrion Kross & Scarlett
  787: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Hit Row
  790: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Lucha House Party
  798: { currentBrand: null, brandHistory: [] }, // Power and Glory
  801: { currentBrand: null, brandHistory: [] }, // The Killer Bees
  802: { currentBrand: null, brandHistory: [] }, // The Fabulous Rougeau Brothers
  803: { currentBrand: null, brandHistory: [] }, // The Colossal Connection
  804: { currentBrand: null, brandHistory: [] }, // The Bolsheviks
  805: { currentBrand: null, brandHistory: [] }, // Rhythm & Blues
  806: { currentBrand: null, brandHistory: [] }, // Repo Man
  807: { currentBrand: null, brandHistory: [] }, // High Energy
  808: { currentBrand: null, brandHistory: [] }, // Flash Funk
  810: { currentBrand: null, brandHistory: [] }, // The Eliminators
  813: { currentBrand: null, brandHistory: [] }, // The Radicalz
  822: { currentBrand: null, brandHistory: [] }, // Hurricane Helms & Rosey
  829: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Corey Graves
  830: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Michael Cole
  837: { currentBrand: null, brandHistory: [] }, // Mr. Fuji
  841: { currentBrand: null, brandHistory: [] }, // Paul Orndorff
  843: { currentBrand: null, brandHistory: [] }, // Don Muraco
  844: { currentBrand: null, brandHistory: [] }, // Kamala
  859: { currentBrand: null, brandHistory: [] }, // Dan Severn
  868: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Tamina Snuka
  869: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Cameron Grimes
  877: { currentBrand: null, brandHistory: [] }, // Junkyard Dog
  878: { currentBrand: null, brandHistory: [] }, // Hillbilly Jim
  879: { currentBrand: null, brandHistory: [] }, // Bad News Brown
  889: { currentBrand: null, brandHistory: [] }, // Jeff Jarrett
  890: { currentBrand: null, brandHistory: [] }, // Savio Vega
  892: { currentBrand: null, brandHistory: [] }, // Mantaur
  893: { currentBrand: null, brandHistory: [] }, // Waylon Mercy
  894: { currentBrand: null, brandHistory: [] }, // Duke Droese
  895: { currentBrand: null, brandHistory: [] }, // Bertha Faye
  897: { currentBrand: null, brandHistory: [] }, // Maven
  898: { currentBrand: null, brandHistory: [] }, // Droz
  904: { currentBrand: null, brandHistory: [] }, // Luther Reigns
  907: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Sol Ruca
  910: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Gallus
  911: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Alba Fyre & Isla Dawn
  912: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Javier Bernal
  914: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Wendy Choo
  915: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Thea Hail
  916: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Andre Chase
  928: { currentBrand: null, brandHistory: [] }, // Sapphire
  929: { currentBrand: null, brandHistory: [] }, // Nailz
  930: { currentBrand: null, brandHistory: [] }, // Skinner
  931: { currentBrand: null, brandHistory: [] }, // Bastion Booger
  932: { currentBrand: null, brandHistory: [] }, // Giant Gonzalez
  933: { currentBrand: null, brandHistory: [] }, // Max Moon
  934: { currentBrand: null, brandHistory: [] }, // Gobbledy Gooker
  937: { currentBrand: null, brandHistory: [] }, // Hakushi
  940: { currentBrand: null, brandHistory: [] }, // Aldo Montoya
  941: { currentBrand: null, brandHistory: [] }, // Justin Credible
  942: { currentBrand: null, brandHistory: [] }, // Jerry Lynn
  943: { currentBrand: null, brandHistory: [] }, // Nicole Bass
  945: { currentBrand: null, brandHistory: [] }, // Christy Hemme
  946: { currentBrand: null, brandHistory: [] }, // Candice Michelle
  948: { currentBrand: null, brandHistory: [] }, // Ashley Massaro
  951: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Vladimir Kozlov
  952: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Prime Time Players
  953: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Cryme Tyme
  954: { currentBrand: null, brandHistory: [] }, // Spirit Squad
  955: { currentBrand: null, brandHistory: [] }, // Deuce and Domino
  956: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Adam Rose
  957: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Emma
  958: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Summer Rae
  959: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Eva Marie
  972: { currentBrand: null, brandHistory: [] }, // Sycho Sid
  974: { currentBrand: null, brandHistory: [] }, // Eric Bischoff
  975: { currentBrand: null, brandHistory: [] }, // Teddy Long
  977: { currentBrand: null, brandHistory: [] }, // Linda McMahon
  979: { currentBrand: null, brandHistory: [] }, // Buff Bagwell
  980: { currentBrand: null, brandHistory: [] }, // Kanyon
  981: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Nikkita Lyons
  982: { currentBrand: null, brandHistory: [] }, // Hugh Morrus
  983: { currentBrand: null, brandHistory: [] }, // Masato Tanaka
  995: { currentBrand: null, brandHistory: [] }, // Sensational Sherri
  997: { currentBrand: null, brandHistory: [] }, // Debra
  1001: { currentBrand: null, brandHistory: [] }, // Killer Kowalski
  1002: { currentBrand: null, brandHistory: [] }, // Freddie Blassie
  1003: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Aksana
  1006: { currentBrand: null, brandHistory: [] }, // The Brooklyn Brawler
  1007: { currentBrand: null, brandHistory: [] }, // Barry Horowitz
  1008: { currentBrand: null, brandHistory: [] }, // Gillberg
  1009: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // James Ellsworth
  1010: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Eve Torres
  1011: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Kaitlyn
  1012: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // John Laurinaitis
  1013: { currentBrand: null, brandHistory: [] }, // Slick
  1020: { currentBrand: null, brandHistory: [] }, // La Resistance
  1021: { currentBrand: null, brandHistory: [] }, // The Basham Brothers
  1022: { currentBrand: null, brandHistory: [] }, // Buddy Rogers
  1023: { currentBrand: null, brandHistory: [] }, // Bob Orton Jr.
  1024: { currentBrand: null, brandHistory: [] }, // Rocky Johnson
  1025: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Tony Atlas
  1026: { currentBrand: null, brandHistory: [] }, // Bobo Brazil
  1027: { currentBrand: null, brandHistory: [] }, // Larry Zbyszko
  1028: { currentBrand: null, brandHistory: [] }, // Ernie Ladd
  1029: { currentBrand: null, brandHistory: [] }, // Ken Patera
  1030: { currentBrand: null, brandHistory: [] }, // Ivan Putski
  1031: { currentBrand: null, brandHistory: [] }, // Tony Garea
  1032: { currentBrand: null, brandHistory: [] }, // Professor Toru Tanaka
  1033: { currentBrand: null, brandHistory: [] }, // Arnold Skaaland
  1034: { currentBrand: null, brandHistory: [] }, // Bam Bam Bigelow
  1035: { currentBrand: null, brandHistory: [] }, // Kerry Von Erich
  1036: { currentBrand: null, brandHistory: [] }, // The Dynamite Kid
  1041: { currentBrand: null, brandHistory: [] }, // Virgil
  1042: { currentBrand: null, brandHistory: [] }, // Hercules Hernandez
  1043: { currentBrand: null, brandHistory: [] }, // One Man Gang
  1044: { currentBrand: null, brandHistory: [] }, // Jacques Rougeau
  1045: { currentBrand: null, brandHistory: [] }, // Raymond Rougeau
  1046: { currentBrand: null, brandHistory: [] }, // Lanny Poffo
  1047: { currentBrand: null, brandHistory: [] }, // Ronnie Garvin
  1049: { currentBrand: null, brandHistory: [] }, // Ron Bass
  1050: { currentBrand: null, brandHistory: [] }, // B. Brian Blair
  1051: { currentBrand: null, brandHistory: [] }, // Jim Brunzell
  1052: { currentBrand: null, brandHistory: [] }, // Butch Reed
  1053: { currentBrand: null, brandHistory: [] }, // Bart Gunn
  1054: { currentBrand: null, brandHistory: [] }, // The Patriot
  1055: { currentBrand: null, brandHistory: [] }, // Henry O. Godwinn
  1056: { currentBrand: null, brandHistory: [] }, // Mideon
  1057: { currentBrand: null, brandHistory: [] }, // Samu
  1058: { currentBrand: null, brandHistory: [] }, // Rockin Robin
  1059: { currentBrand: null, brandHistory: [] }, // Terry Funk
  1060: { currentBrand: null, brandHistory: [] }, // Mike Awesome
  1061: { currentBrand: null, brandHistory: [] }, // Shane Douglas
  1064: { currentBrand: null, brandHistory: [] }, // Rick Steiner
  1067: { currentBrand: null, brandHistory: [] }, // Paul Roma
  1068: { currentBrand: null, brandHistory: [] }, // Rosey
  1071: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Scott Dawson
  1072: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Dash Wilder
  1073: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Akam
  1074: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Rezar
  1079: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Darren Young
  1082: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Kelly Kelly
  1083: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Billie Kay
  1084: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Peyton Royce
  1087: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Buddy Murphy
  1088: { currentBrand: null, brandHistory: [] }, // Kenny Dykstra
  1097: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Drake Maverick
  1098: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Shad Gaspard
  1099: { currentBrand: null, brandHistory: [] }, // Nick Bockwinkel
  1100: { currentBrand: null, brandHistory: [] }, // Verne Gagne
  1101: { currentBrand: null, brandHistory: [] }, // Antonio Inoki
  1102: { currentBrand: null, brandHistory: [] }, // Abdullah the Butcher
  1103: { currentBrand: null, brandHistory: [] }, // Carlos Colon
  1104: { currentBrand: null, brandHistory: [] }, // Dory Funk Jr.
  1105: { currentBrand: null, brandHistory: [] }, // Jack Brisco
  1106: { currentBrand: null, brandHistory: [] }, // Gerald Brisco
  1107: { currentBrand: null, brandHistory: [] }, // Michael PS Hayes
  1108: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Kharma
  1109: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // JTG
  1110: { currentBrand: null, brandHistory: [] }, // The Berzerker
  1111: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Lio Rush
  1113: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Tye Dillinger
  1114: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Gran Metalik
  1115: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Lince Dorado
  1117: { currentBrand: null, brandHistory: [] }, // Boris Zhukov
  1120: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Lexis King
  1121: { currentBrand: null, brandHistory: [] }, // Sylvain Grenier
  1122: { currentBrand: null, brandHistory: [] }, // Stan Stasiak
  1123: { currentBrand: null, brandHistory: [] }, // Billy Jack Haynes
  1124: { currentBrand: null, brandHistory: [] }, // Jim Powers
  1125: { currentBrand: null, brandHistory: [] }, // S.D. Jones
  1126: { currentBrand: null, brandHistory: [] }, // Tonga Kid
  1127: { currentBrand: null, brandHistory: [] }, // Corporal Kirchner
  1128: { currentBrand: null, brandHistory: [] }, // Velvet McIntyre
  1129: { currentBrand: null, brandHistory: [] }, // Leilani Kai
  1130: { currentBrand: null, brandHistory: [] }, // Judy Martin
  1131: { currentBrand: null, brandHistory: [] }, // Iron Mike Sharpe
  1133: { currentBrand: null, brandHistory: [] }, // Blackjack Lanza
  1134: { currentBrand: null, brandHistory: [] }, // Peter Maivia
  1135: { currentBrand: null, brandHistory: [] }, // Baron Mikel Scicluna
  1136: { currentBrand: null, brandHistory: [] }, // Haystacks Calhoun
  1137: { currentBrand: null, brandHistory: [] }, // Swede Hanson
  1138: { currentBrand: null, brandHistory: [] }, // Spiros Arion
  1139: { currentBrand: null, brandHistory: [] }, // Waldo Von Erich
  1142: { currentBrand: null, brandHistory: [] }, // Victor Rivera
  1143: { currentBrand: null, brandHistory: [] }, // King Curtis Iaukea
  1144: { currentBrand: null, brandHistory: [] }, // The Executioners
  1145: { currentBrand: null, brandHistory: [] }, // Johnny Rodz
  1149: { currentBrand: null, brandHistory: [] }, // The Sheik
  1150: { currentBrand: null, brandHistory: [] }, // Ox Baker
  1151: { currentBrand: null, brandHistory: [] }, // Sam Houston
  1154: { currentBrand: null, brandHistory: [] }, // Dominic DeNucci
  1155: { currentBrand: null, brandHistory: [] }, // Frenchy Martin
  1156: { currentBrand: null, brandHistory: [] }, // Tama (Islanders)
  1157: { currentBrand: null, brandHistory: [] }, // Tiger Chung Lee
  1158: { currentBrand: null, brandHistory: [] }, // Sivi Afi
  1159: { currentBrand: null, brandHistory: [] }, // Cousin Luke
  1160: { currentBrand: null, brandHistory: [] }, // Uncle Elmer
  1162: { currentBrand: null, brandHistory: [] }, // Moondog Rex
  1163: { currentBrand: null, brandHistory: [] }, // Moondog Spot
  1164: { currentBrand: null, brandHistory: [] }, // Pat Tanaka
  1165: { currentBrand: null, brandHistory: [] }, // Johnny Valiant
  1166: { currentBrand: null, brandHistory: [] }, // Jimmy Valiant
  1167: { currentBrand: null, brandHistory: [] }, // John Studd
  1168: { currentBrand: null, brandHistory: [] }, // David Sammartino
  1169: { currentBrand: null, brandHistory: [] }, // Lord Alfred Hayes
  1171: { currentBrand: null, brandHistory: [] }, // Pete Rose
  1172: { currentBrand: null, brandHistory: [] }, // Terry Taylor
  1173: { currentBrand: null, brandHistory: [] }, // Killer Khan
  1175: { currentBrand: null, brandHistory: [] }, // Salvatore Bellomo
  1176: { currentBrand: null, brandHistory: [] }, // Jose Luis Rivera
  1177: { currentBrand: null, brandHistory: [] }, // Rick McGraw
  1178: { currentBrand: null, brandHistory: [] }, // Antonino Rocca
  1179: { currentBrand: null, brandHistory: [] }, // Giant Baba
  1180: { currentBrand: null, brandHistory: [] }, // Tatsumi Fujinami
  1181: { currentBrand: null, brandHistory: [] }, // Crusher Blackwell
  1182: { currentBrand: null, brandHistory: [] }, // Larry Hennig
  1183: { currentBrand: null, brandHistory: [] }, // Buddy Rose
  1184: { currentBrand: null, brandHistory: [] }, // Tony Altimore
  1186: { currentBrand: null, brandHistory: [] }, // Billy White Wolf
  1187: { currentBrand: null, brandHistory: [] }, // Rene Goulet
  1188: { currentBrand: null, brandHistory: [] }, // Karl Gotch
  1189: { currentBrand: null, brandHistory: [] }, // The Mongols
  1190: { currentBrand: null, brandHistory: [] }, // Moondog King
  1191: { currentBrand: null, brandHistory: [] }, // Lou Thesz
  1192: { currentBrand: null, brandHistory: [] }, // The Goon
  1193: { currentBrand: null, brandHistory: [] }, // TL Hopper
  1194: { currentBrand: null, brandHistory: [] }, // Salvatore Sincere
  1195: { currentBrand: null, brandHistory: [] }, // Freddie Joe Floyd
  1196: { currentBrand: null, brandHistory: [] }, // Ludvig Borga
  1197: { currentBrand: null, brandHistory: [] }, // Jonathan Coachman
  1198: { currentBrand: null, brandHistory: [] }, // Tori
  1200: { currentBrand: null, brandHistory: [] }, // The Blue Meanie
  1201: { currentBrand: null, brandHistory: [] }, // Kurrgan
  1202: { currentBrand: null, brandHistory: [] }, // Shawn Stasiak
  1203: { currentBrand: null, brandHistory: [] }, // Dr. Death Steve Williams
  1205: { currentBrand: null, brandHistory: [] }, // Skip
  1206: { currentBrand: null, brandHistory: [] }, // Zip
  1211: { currentBrand: null, brandHistory: [] }, // Headbanger Mosh
  1212: { currentBrand: null, brandHistory: [] }, // Headbanger Thrasher
  1213: { currentBrand: null, brandHistory: [] }, // Giant Silva
  1214: { currentBrand: null, brandHistory: [] }, // Pete Gas
  1215: { currentBrand: null, brandHistory: [] }, // Rodney
  1216: { currentBrand: null, brandHistory: [] }, // Joey Abs
  1217: { currentBrand: null, brandHistory: [] }, // Chainz
  1218: { currentBrand: null, brandHistory: [] }, // 8-Ball
  1219: { currentBrand: null, brandHistory: [] }, // Skull
  1221: { currentBrand: null, brandHistory: [] }, // Matt Morgan
  1222: { currentBrand: null, brandHistory: [] }, // Rob Conway
  1223: { currentBrand: null, brandHistory: [] }, // Rico
  1224: { currentBrand: null, brandHistory: [] }, // Marcus Cor Von
  1225: { currentBrand: null, brandHistory: [] }, // Matt Striker
  1226: { currentBrand: null, brandHistory: [] }, // Mike Knox
  1227: { currentBrand: null, brandHistory: [] }, // Psicosis
  1228: { currentBrand: null, brandHistory: [] }, // Juventud Guerrera
  1229: { currentBrand: null, brandHistory: [] }, // Katie Lea Burchill
  1230: { currentBrand: null, brandHistory: [] }, // Danny Basham
  1231: { currentBrand: null, brandHistory: [] }, // Doug Basham
  1232: { currentBrand: null, brandHistory: [] }, // Rodney Mack
  1234: { currentBrand: null, brandHistory: [] }, // Jesse
  1235: { currentBrand: null, brandHistory: [] }, // Jimmy Wang Yang
  1236: { currentBrand: null, brandHistory: [] }, // Shannon Moore
  1238: { currentBrand: null, brandHistory: [] }, // Vito
  1239: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // David Otunga
  1240: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Michael Tarver
  1241: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Justin Gabriel
  1242: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Alex Riley
  1243: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Kaval
  1245: { currentBrand: null, brandHistory: [] }, // Nathan Jones
  1246: { currentBrand: null, brandHistory: [] }, // Sean O'Haire
  1247: { currentBrand: null, brandHistory: [] }, // Armando Estrada
  1248: { currentBrand: null, brandHistory: [] }, // Sylvester Terkay
  1252: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Lucky Cannon
  1253: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Byron Saxton
  1254: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Mason Ryan
  1255: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Tyler Reks
  1257: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Hunico
  1258: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Scotty Goldman
  1259: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Trent Barreta
  1260: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Caylen Croft
  1261: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Manu
  1262: { currentBrand: null, brandHistory: [] }, // Sim Snuka
  1263: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Richie Steamboat
  1264: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Rosa Mendes
  1265: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // TJP
  1266: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Tony Nese
  1268: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Jack Gallagher
  1269: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Ariya Daivari
  1270: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Rich Swann
  1271: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Bobby Fish
  1272: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // KUSHIDA
  1274: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Robert Stone
  1277: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Von Wagner
  1281: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Sanga
  1282: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Ikemen Jiro
  1283: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Boa
  1284: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Xyon Quinn
  1285: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Edris Enofe
  1286: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Malik Blade
  1287: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Odyssey Jones
  1288: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Dante Chen
  1289: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Channing Lorenzo
  1290: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Luca Crusifino
  1291: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Adrianna Reese
  1292: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Brooks Jensen
  1293: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Josh Briggs
  1295: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Jagger Reid
  1296: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Rip Fowler
  1297: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Joe Gacy
  1299: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Brinley Reece
  1300: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Wren Sinclair
  1301: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Tavion Heights
  1302: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Tyriek Igwe
  1303: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Tyson Dupont
  1309: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Joaquin Wilde
  1310: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Cruz Del Toro
  1311: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Scrypts
  1312: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Guru Raaj
  1314: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Valentina Feroz
  1315: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Yulisa Leon
  1318: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Mace
  1319: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Slapjack
  1322: { currentBrand: null, brandHistory: [] }, // Deuce
  1323: { currentBrand: null, brandHistory: [] }, // Domino
  1324: { currentBrand: null, brandHistory: [] }, // Reno
  1337: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Top Dolla
  1338: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Ashante Adonis
  1343: { currentBrand: null, brandHistory: [] }, // Mr. T
  1345: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Bad Bunny
  1346: { currentBrand: null, brandHistory: [] }, // Lawrence Taylor
  1347: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Floyd Mayweather
  1348: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Tyson Fury
  1349: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Cain Velasquez
  1350: { currentBrand: null, brandHistory: [] }, // Drew Carey
  1351: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // No Way Jose
  1352: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Kassius Ohno
  1353: { currentBrand: null, brandHistory: [] }, // Mordecai
  1362: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // El Torito
  1363: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Shanky
  1364: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Reggie
  1365: { currentBrand: null, brandHistory: [] }, // Great Muta
  1366: { currentBrand: null, brandHistory: [] }, // Jushin Thunder Liger
  1367: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Steve Corino
  1368: { currentBrand: null, brandHistory: [] }, // CW Anderson
  1370: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Simon Gotch
  1371: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Jordan Devlin
  1372: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // T-BAR
  1373: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Snooki
  1374: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Johnny Knoxville
  1375: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Rob Gronkowski
  1376: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Shane Thorne
  1377: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Nick Miller
  1378: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Arturo Ruas
  1379: { currentBrand: null, brandHistory: [] }, // Bushwhacker Luke
  1380: { currentBrand: null, brandHistory: [] }, // Bushwhacker Butch
  1381: { currentBrand: null, brandHistory: [] }, // Hawk
  1382: { currentBrand: null, brandHistory: [] }, // Animal
  1383: { currentBrand: null, brandHistory: [] }, // Joey Mercury
  1384: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Epico Colon
  1385: { currentBrand: null, brandHistory: [] }, // Ax
  1387: { currentBrand: null, brandHistory: [] }, // Mo
  1388: { currentBrand: null, brandHistory: [] }, // Bull Buchanan
  1392: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Jakara Jackson
  1393: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Kiana James
  1395: { currentBrand: null, brandHistory: [] }, // Danny Davis
  1396: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Veer Mahaan
  1399: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Arianna Grace
  1400: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Izzi Dame
  1401: { currentBrand: null, brandHistory: [] }, // Outback Jack
  1405: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Rick Boogs
  1406: { currentBrand: null, brandHistory: [] }, // Dan Spivey
  1407: { currentBrand: null, brandHistory: [] }, // David Flair
  1408: { currentBrand: null, brandHistory: [] }, // Chris Nowinski
  1409: { currentBrand: null, brandHistory: [] }, // Daniel Puder
  1410: { currentBrand: null, brandHistory: [] }, // Matt Cappotelli
  1412: { currentBrand: null, brandHistory: [] }, // Mikey
  1414: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Riley Osborne
  1415: { currentBrand: null, brandHistory: [] }, // Jimmy Del Ray
  1416: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Ricky Ortiz
  1417: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // DJ Gabriel
  1418: { currentBrand: null, brandHistory: [] }, // Karl Malone
  1419: { currentBrand: null, brandHistory: [] }, // Dennis Rodman
  1420: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Kevin Federline
  1421: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // Stephen Amell
  1422: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Maria Menounos
  1423: { currentBrand: null, brandHistory: [] }, // Pierre
  1424: { currentBrand: null, brandHistory: [] }, // Tiger Mask
  1425: { currentBrand: null, brandHistory: [] }, // Ernest Miller
  1426: { currentBrand: null, brandHistory: [] }, // Glacier
  1427: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Nash Carter
  1428: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Deonna Purrazzo
  1429: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Zack Gibson
  1430: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // James Drake
  1431: { currentBrand: null, brandHistory: [] }, // Nikita Koloff
  1432: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2018', to: '2022' }] }, // Tank Ledger
  1433: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Hank Walker
  1440: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Eddy Thorpe
  1442: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // James Storm
  1443: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Chris Harris
  1444: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Maxine
  1445: { currentBrand: null, brandHistory: [] }, // Man Mountain Rock
  1448: { currentBrand: null, brandHistory: [] }, // Johnny Stamboli
  1449: { currentBrand: null, brandHistory: [] }, // Brian Adams
  1450: { currentBrand: null, brandHistory: [] }, // Bryan Clark
  1451: { currentBrand: null, brandHistory: [] }, // Elix Skipper
  1452: { currentBrand: null, brandHistory: [] }, // Kwee Wee
  1453: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Dave Mastiff
  1454: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Eddie Dennis
  1455: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Aoife Valkyrie
  1456: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Kay Lee Ray
  1457: { currentBrand: null, brandHistory: [] }, // Stevie Ray
  1458: { currentBrand: null, brandHistory: [] }, // Norman Smiley
  1459: { currentBrand: null, brandHistory: [] }, // Konnan
  1460: { currentBrand: null, brandHistory: [] }, // Disco Inferno
  1461: { currentBrand: null, brandHistory: [] }, // Alex Wright
  1462: { currentBrand: null, brandHistory: [] }, // La Parka
  1463: { currentBrand: null, brandHistory: [] }, // Vampiro
  1464: { currentBrand: null, brandHistory: [] }, // Mikey Whipwreck
  1465: { currentBrand: null, brandHistory: [] }, // Adrian Adonis
  1466: { currentBrand: null, brandHistory: [] }, // Francine
  1467: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Zeb Colter
  1469: { currentBrand: null, brandHistory: [] }, // Wahoo McDaniel
  1470: { currentBrand: null, brandHistory: [] }, // Dick Murdoch
  1471: { currentBrand: null, brandHistory: [] }, // Terry Gordy
  1472: { currentBrand: null, brandHistory: [] }, // Magnum T.A.
  1473: { currentBrand: null, brandHistory: [] }, // Ole Anderson
  1474: { currentBrand: null, brandHistory: [] }, // Fritz Von Erich
  1475: { currentBrand: null, brandHistory: [] }, // Kevin Von Erich
  1476: { currentBrand: null, brandHistory: [] }, // David Von Erich
  1477: { currentBrand: null, brandHistory: [] }, // Bruiser Brody
  1478: { currentBrand: null, brandHistory: [] }, // Bobby Eaton
  1479: { currentBrand: null, brandHistory: [] }, // Stan Lane
  1480: { currentBrand: null, brandHistory: [] }, // Ricky Morton
  1481: { currentBrand: null, brandHistory: [] }, // Robert Gibson
  1482: { currentBrand: null, brandHistory: [] }, // Ray Stevens
  1483: { currentBrand: null, brandHistory: [] }, // Dick the Bruiser
  1484: { currentBrand: null, brandHistory: [] }, // The Crusher
  1485: { currentBrand: null, brandHistory: [] }, // Brad Armstrong
  1486: { currentBrand: null, brandHistory: [] }, // Tracy Smothers
  1487: { currentBrand: null, brandHistory: [] }, // Tommy Rich
  1488: { currentBrand: null, brandHistory: [] }, // Dennis Condrey
  1489: { currentBrand: null, brandHistory: [] }, // Buddy Roberts
  1490: { currentBrand: null, brandHistory: [] }, // Silver King
  1491: { currentBrand: null, brandHistory: [] }, // Crowbar
  1492: { currentBrand: null, brandHistory: [] }, // Daffney
  1493: { currentBrand: null, brandHistory: [] }, // J.J. Dillon
  1494: { currentBrand: null, brandHistory: [] }, // Sakoda
  1496: { currentBrand: null, brandHistory: [] }, // Kevin Sullivan
  1497: { currentBrand: null, brandHistory: [] }, // Danny Hodge
  1498: { currentBrand: null, brandHistory: [] }, // Baron Von Raschke
  1499: { currentBrand: null, brandHistory: [] }, // Jimmy Garvin
  1500: { currentBrand: null, brandHistory: [] }, // Bob Armstrong
  1501: { currentBrand: null, brandHistory: [] }, // Axl Rotten
  1502: { currentBrand: null, brandHistory: [] }, // Skandor Akbar
  1505: { currentBrand: null, brandHistory: [] }, // Rikidozan
  1506: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Tessa Blanchard
  1507: { currentBrand: null, brandHistory: [] }, // Scotty Riggs
  1508: { currentBrand: null, brandHistory: [] }, // Public Enemy
  1509: { currentBrand: null, brandHistory: [] }, // 911
  1511: { currentBrand: null, brandHistory: [] }, // Tony Mamaluke
  1512: { currentBrand: null, brandHistory: [] }, // Rocco Rock
  1513: { currentBrand: null, brandHistory: [] }, // Johnny Grunge
  1514: { currentBrand: null, brandHistory: [] }, // Mike Sanders
  1515: { currentBrand: null, brandHistory: [] }, // Lenny Lane
  1516: { currentBrand: null, brandHistory: [] }, // Lodi
  1517: { currentBrand: null, brandHistory: [] }, // Bunkhouse Buck
  1519: { currentBrand: null, brandHistory: [] }, // Mitsuharu Misawa
  1520: { currentBrand: null, brandHistory: [] }, // Kenta Kobashi
  1521: { currentBrand: null, brandHistory: [] }, // Toshiaki Kawada
  1522: { currentBrand: null, brandHistory: [] }, // Jumbo Tsuruta
  1523: { currentBrand: null, brandHistory: [] }, // Genichiro Tenryu
  1524: { currentBrand: null, brandHistory: [] }, // Hayabusa
  1525: { currentBrand: null, brandHistory: [] }, // El Hijo del Santo
  1526: { currentBrand: null, brandHistory: [] }, // Negro Casas
  1527: { currentBrand: null, brandHistory: [] }, // Blue Panther
  1528: { currentBrand: null, brandHistory: [] }, // Sgt. Craig Pittman
  1529: { currentBrand: null, brandHistory: [] }, // Ice Train
  1530: { currentBrand: null, brandHistory: [] }, // Scott Norton
  1531: { currentBrand: null, brandHistory: [] }, // Villano III
  1532: { currentBrand: null, brandHistory: [] }, // Hector Guerrero
  1533: { currentBrand: null, brandHistory: [] }, // Mando Guerrero
  1534: { currentBrand: null, brandHistory: [] }, // Chavo Guerrero Sr.
  1535: { currentBrand: null, brandHistory: [] }, // Mark Lewin
  1536: { currentBrand: null, brandHistory: [] }, // Dutch Savage
  1537: { currentBrand: null, brandHistory: [] }, // Buzz Sawyer
  1539: { currentBrand: null, brandHistory: [] }, // Stu Hart
  1540: { currentBrand: null, brandHistory: [] }, // Gorgeous George
  1541: { currentBrand: null, brandHistory: [] }, // Mad Dog Vachon
  1542: { currentBrand: null, brandHistory: [] }, // Bill Watts
  1550: { currentBrand: null, brandHistory: [] }, // Andy Kaufman
  1552: { currentBrand: null, brandHistory: [] }, // Jackie Gayda
  1553: { currentBrand: null, brandHistory: [] }, // Linda Miles
  1555: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Brad Maddox
  1556: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Taryn Terrell
  1558: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Myles Borne
  1559: { currentBrand: null, brandHistory: [] }, // The Midnight Express
  1560: { currentBrand: null, brandHistory: [] }, // Akira Taue
  1561: { currentBrand: null, brandHistory: [] }, // Frankie Williams
  1562: { currentBrand: null, brandHistory: [] }, // Jay Youngblood
  1564: { currentBrand: null, brandHistory: [] }, // Dave Taylor
  1565: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Reby Hardy
  1567: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // The Acclaimed
  1568: { currentBrand: null, brandHistory: [] }, // Jesús
  1571: { currentBrand: null, brandHistory: [] }, // Jack Victory
  1572: { currentBrand: null, brandHistory: [] }, // Vic Grimes
  1573: { currentBrand: null, brandHistory: [] }, // Mustafa Saed
  1574: { currentBrand: null, brandHistory: [] }, // Kid Kash
  1575: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2018', to: '2022' }] }, // MJF
  1576: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Britt Baker
  1578: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Darby Allin
  1579: { currentBrand: null, brandHistory: [] }, // Dos Caras
  1580: { currentBrand: null, brandHistory: [] }, // Jules Strongbow
  1581: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Mike Kanellis
  1583: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2016', to: '2020' }] }, // Katie Lea
  1585: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Adriana Rizzo
  1586: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Bullet Club
  1588: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Sha Samuels
  1589: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Joseph Conners
  1590: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Hangman Adam Page
  1591: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Emilia McKenzie
  1592: { currentBrand: null, brandHistory: [] }, // The Funkettes
  1593: { currentBrand: null, brandHistory: [] }, // Kim Chee
  1594: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Rey Fenix
  1596: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Rosemary
  1597: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Austin Aries
  1598: { currentBrand: null, brandHistory: [] }, // Pat O'Connor
  1599: { currentBrand: null, brandHistory: [] }, // Scott Putski
  1600: { currentBrand: null, brandHistory: [] }, // The Yukon Lumberjacks
  1602: { currentBrand: null, brandHistory: [] }, // The Moondogs
  1603: { currentBrand: null, brandHistory: [] }, // Pierre Carl Ouellet
  1604: { currentBrand: null, brandHistory: [] }, // The Young Stallions
  1605: { currentBrand: null, brandHistory: [] }, // Greg Gagne
  1606: { currentBrand: null, brandHistory: [] }, // Butterbean
  1607: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Wesley Blake
  1608: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2018', to: '2022' }] }, // Scorpio Sky
  1609: { currentBrand: null, brandHistory: [] }, // Gene Kiniski
  1610: { currentBrand: null, brandHistory: [] }, // Wally Karbo
  1611: { currentBrand: null, brandHistory: [] }, // Dory Funk Sr.
  1612: { currentBrand: null, brandHistory: [] }, // Miguel Perez
  1613: { currentBrand: null, brandHistory: [] }, // The Destroyer
  1614: { currentBrand: null, brandHistory: [] }, // Louis Cerdan
  1616: { currentBrand: null, brandHistory: [{ brand: 'NXT', from: '2014', to: '2022' }] }, // Mercedes Martinez
  1618: { currentBrand: null, brandHistory: [] }, // Eddie Gilbert
  1619: { currentBrand: null, brandHistory: [] }, // Ian Rotten
  1620: { currentBrand: null, brandHistory: [] }, // Devastation Inc.
  1621: { currentBrand: null, brandHistory: [] }, // The Sharpe Brothers
  1622: { currentBrand: null, brandHistory: [] }, // The Stud Stable
  1623: { currentBrand: null, brandHistory: [] }, // Toots Mondt
  1624: { currentBrand: null, brandHistory: [] }, // Paul Vachon
  1626: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2016', to: '2020' }] }, // Serena Deeb

  // IDs that were only in DRAFT_NOTES but missing from WRESTLER_BRANDS
  67: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2002', to: '2004' }] }, // APA
  105: { currentBrand: 'SmackDown', brandHistory: [{ brand: 'Raw', from: '2014', to: '2016' }, { brand: 'Raw', from: '2016', to: '2019' }, { brand: 'SmackDown', from: '2019', to: '2020' }, { brand: 'Raw', from: '2020', to: '2024' }, { brand: 'SmackDown', from: '2024', to: null }] }, // The New Day
  196: { currentBrand: null, brandHistory: [{ brand: 'Raw', from: '2010', to: '2011' }] }, // Nexus
  1116: { currentBrand: null, brandHistory: [] }, // Ed Ferrara
  1667: { currentBrand: null, brandHistory: [{ brand: 'SmackDown', from: '2005', to: '2006' }] }, // The Mexicools
};

export default WRESTLER_BRANDS;
