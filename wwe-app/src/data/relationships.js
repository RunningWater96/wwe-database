const RELATIONSHIPS = {
  // ── WWWF / Golden Era ──────────────────────────────────────────
  4: { // Hulk Hogan
    alternateNames: ["Hulk Hogan", "Hollywood Hogan", "Terry Bollea", "Mr. America", "Thunderlips"],
    allies: ["Randy Savage (Mega Powers)", "Brutus Beefcake", "Mr. T", "Ultimate Warrior", "Miss Elizabeth"],
    rivals: ["André the Giant", "Randy Savage", "Undertaker", "Yokozuna", "Sgt. Slaughter", "Ric Flair", "King Kong Bundy", "Iron Sheik", "The Rock"]
  },
  6: { // André the Giant
    alternateNames: ["André the Giant", "The Eighth Wonder of the World", "André René Roussimoff"],
    allies: ["Haku"],
    rivals: ["Hulk Hogan", "Big John Studd", "Ultimate Warrior", "Jake Roberts"],
  
    managers: ["Bobby Heenan"],
},
  5: { // Randy Savage
    alternateNames: ["Macho Man Randy Savage", "Macho King"],
    allies: ["Hulk Hogan (Mega Powers)", "Lanny Poffo"],
    rivals: ["Hulk Hogan", "Ricky Steamboat", "Jake Roberts", "Ric Flair", "Ultimate Warrior", "Ted DiBiase"],
    managers: ['Miss Elizabeth', 'Sensational Sherri']
},
  10: { // Jake Roberts
    alternateNames: ["Jake 'The Snake' Roberts"],
    allies: [],
    rivals: ["Rick Rude", "André the Giant", "Undertaker", "Jerry Lawler", "Randy Savage"]
  },
  7: { // Roddy Piper
    alternateNames: ["Rowdy Roddy Piper", "Hot Rod"],
    allies: ["Cyndi Lauper", "Frankie Williams"],
    rivals: ["Hulk Hogan", "Mr. T", "Adrian Adonis", "Goldust", "Jerry Lawler"]
  },
  // ── New Generation / Attitude Era ──────────────────────────────
  45: { // Bret Hart
    alternateNames: ["Bret 'Hitman' Hart", "The Excellence of Execution", "The Best There Is, Was, And Ever Will Be", "The Hart Foundation"],
    allies: ["Jim Neidhart (Hart Foundation)", "Owen Hart (sometimes)", "British Bulldog", "Brian Pillman"],
    rivals: ["Shawn Michaels", "Stone Cold Steve Austin", "Vince McMahon", "Owen Hart", "Jerry Lawler", "Yokozuna", "Undertaker", "Diesel", "Kane"]
  },
  31: { // Stone Cold Steve Austin
    alternateNames: ["Stone Cold", "Steve Austin", "Stunning Steve Austin", "The Ringmaster", "The Texas Rattlesnake", "The Bionic Redneck"],
    allies: ["Jim Ross", "Mankind (briefly)", "The Rock (Attitude Era alliances)"],
    rivals: ["Vince McMahon", "The Rock", "Triple H", "Undertaker", "Kane", "Kurt Angle", "Chris Jericho", "Bret Hart", "Brian Pillman"]
  },
  30: { // Triple H
    alternateNames: ["Triple H", "HHH", "The Game", "The Cerebral Assassin", "The King of Kings", "Hunter Hearst Helmsley", "Terra Ryzing", "The Corporation", "The Authority", "Evolution", "D-Generation X", "DX"],
    allies: ["Shawn Michaels (DX)", "Ric Flair (Evolution)", "Stephanie McMahon", "Batista (Evolution)", "Randy Orton (Evolution/Authority)"],
    rivals: ["The Rock", "Stone Cold Steve Austin", "Mick Foley", "Undertaker", "Shawn Michaels", "Daniel Bryan", "Batista", "Randy Orton", "Brock Lesnar", "Roman Reigns"]
  },
  43: { // Mick Foley
    alternateNames: ["Mick Foley", "Mankind", "Cactus Jack", "Dude Love", "Mrs. Foley's Baby Boy"],
    allies: ["The Rock (Rock 'n' Sock Connection)", "Al Snow", "Terry Funk"],
    rivals: ["Undertaker", "Triple H", "The Rock", "Randy Orton", "Edge", "Ric Flair"]
  },
  44: { // Kane
    alternateNames: ["Kane", "The Big Red Machine", "The Devil's Favorite Demon", "Isaac Yankem D.D.S.", "Fake Diesel", "Glenn Jacobs", "Corporate Kane", "Citizen Kane"],
    allies: ["Undertaker (Brothers of Destruction)", "Daniel Bryan (Team Hell No)", "X-Pac"],
    rivals: ["Undertaker", "Shane McMahon", "Triple H", "Big Show", "Pete Rose"],
    managers: ['Paul Bearer']
},
  // ── Ruthless Aggression ────────────────────────────────────────
  36: { // Kurt Angle
    alternateNames: ["Kurt Angle", "The Wrestling Machine", "Olympic Gold Medalist"],
    allies: ["Team Angle (Shelton Benjamin, Charlie Haas)", "Luther Reigns"],
    rivals: ["Stone Cold Steve Austin", "The Rock", "Brock Lesnar", "John Cena", "Undertaker", "Shawn Michaels", "Eddie Guerrero", "Chris Benoit"]
  },
  47: { // Edge
    alternateNames: ["Edge", "The Rated-R Superstar", "The Ultimate Opportunist", "Adam Copeland"],
    allies: ["Christian (E&C)", "Randy Orton (Rated-RKO)", "Lita"],
    rivals: ["Undertaker", "John Cena", "Mick Foley", "Matt Hardy", "Jeff Hardy", "Randy Orton", "Batista", "Chris Jericho", "Kane"],
    managers: ['Vickie Guerrero']
},
  // ── Modern Era ─────────────────────────────────────────────────
  // ── Bloodline / Usos / Modern Factions ─────────────────────────
  // ── Legends / Part-timers ──────────────────────────────────────
  972: { // Psycho Sid
    alternateNames: ["Psycho Sid", "Sid Justice", "Sycho Sid", "Sid Vicious", "The Master and Ruler of the World", "Los Guerreros"],
    allies: ["Shawn Michaels (briefly)", "The Corporation"],
    rivals: ["Hulk Hogan", "Undertaker", "Shawn Michaels", "Bret Hart", "Diesel"]
  },
  // ── LA Knight / Newer Stars ────────────────────────────────────
  851: { // Jey Uso (solo)
    alternateNames: ["Jey Uso", "Main Event Jey", "YEET", "Right Hand Man"],
    allies: ["Sami Zayn", "Cody Rhodes", "Jimmy Uso (brother)"],
    rivals: ["Roman Reigns", "Solo Sikoa", "Jimmy Uso (2023)", "Gunther", "Bron Breakker"]
  },
  856: { // Jacob Fatu
    alternateNames: ["Jacob Fatu", "The Samoan Werewolf"],
    allies: ["Solo Sikoa (New Bloodline)", "Tama Tonga", "Tonga Loa"],
    rivals: ["Roman Reigns", "Cody Rhodes", "Jey Uso", "Kevin Owens"]
  },
  973: { // Neville/PAC
    alternateNames: ["Neville", "PAC", "Adrian Neville", "The Man That Gravity Forgot", "King of the Cruiserweights", "The Bastard", "The Dangerous Alliance (WCW)"],
    allies: ["Ricochet (NXT)"],
    rivals: ["Sami Zayn (NXT)", "TJ Perkins", "Austin Aries", "Rich Swann"]
  },



  // ── BATCH 2: GOLDEN ERA & WWWF ──────────────────────────────────
  2: { alternateNames: ["Pedro Morales"], allies: ["Bruno Sammartino"], rivals: ["Don Muraco", "The Magnificent Muraco", "Greg Valentine"] },
  3: { alternateNames: ["Bob Backlund", "Mr. Backlund", "The Crossface Chickenwing Guy"], allies: [], rivals: ["Superstar Billy Graham", "Iron Sheik", "Bret Hart", "Diesel"], managers: ["Arnold Skaaland"] },
  9: { alternateNames: ["The Million Dollar Man", "Ted DiBiase Sr."], allies: ["Virgil (bodyguard)", "IRS (Money Inc.)"], rivals: ["Randy Savage", "Hulk Hogan", "Virgil", "Dusty Rhodes"], managers: ['Sensational Sherri'] },
  13: { alternateNames: ["Honky Tonk Man", "HTM", "The Greatest Intercontinental Champion of All Time"], allies: ["Greg Valentine (Rhythm & Blues)"], rivals: ["Randy Savage", "Ultimate Warrior", "Jake Roberts", "Brutus Beefcake"], managers: ["Jimmy Hart"] },
  141: { alternateNames: ["Hacksaw Jim Duggan", "USA! USA!"], allies: ["Hulk Hogan"], rivals: ["Nikolai Volkoff", "Iron Sheik", "Harley Race", "André the Giant", "Yokozuna"] },
  142: { alternateNames: ["Nikolai Volkoff"], allies: ["Iron Sheik", "Boris Zhukov"], rivals: ["Hacksaw Jim Duggan", "The Killer Bees"], managers: ["Freddie Blassie"] },
  143: { alternateNames: ["Koko B. Ware", "The Birdman", "Frankie the Macaw"], allies: ["Owen Hart (High Energy)"], rivals: ["Big Boss Man", "Honky Tonk Man"] },
  144: { alternateNames: ["George 'The Animal' Steele", "The Animal"], allies: ["Miss Elizabeth (one-sided crush)"], rivals: ["Randy Savage"] },
  145: { alternateNames: ["Bobby 'The Brain' Heenan", "The Weasel", "Bobby Heenan", "The Heenan Family"], allies: ["André the Giant", "Haku", "Mr. Perfect", "Ric Flair", "The Heenan Family"], rivals: ["Hulk Hogan", "Gorilla Monsoon", "Ultimate Warrior"] },
  146: { alternateNames: ["Jim Cornette", "The Louisville Lip"], allies: ["Midnight Express", "Yokozuna", "Vader", "Owen Hart"], rivals: ["Vince Russo"] },
  153: { alternateNames: ["Tito Santana", "El Matador", "Arriba!"], allies: ["Rick Martel (Strike Force)"], rivals: ["Rick Martel", "Greg Valentine", "Honky Tonk Man", "Shawn Michaels"] },
  155: { alternateNames: ["Superfly Jimmy Snuka", "The Superfly"], allies: ["Roddy Piper (briefly)"], rivals: ["Roddy Piper", "Don Muraco", "The Undertaker"] },
  156: { alternateNames: ["Marty Jannetty", "The Rocker", "The New Rockers"], allies: ["Shawn Michaels (Rockers)"], rivals: ["Shawn Michaels"] },
  283: { alternateNames: ["Brian Pillman", "Flyin' Brian", "The Loose Cannon"], allies: ["Bret Hart (Hart Foundation)", "Stone Cold Steve Austin"], rivals: ["Stone Cold Steve Austin", "Goldust"] },
  346: { alternateNames: ["Gorilla Monsoon", "Gino Marella"], allies: ["Bobby Heenan (broadcast partner)", "Jesse Ventura"], rivals: ["Bobby Heenan (kayfabe)"] },
  347: { alternateNames: ["Pat Patterson", "The First IC Champion"], allies: ["Vince McMahon", "Gerald Brisco"], rivals: ["Sgt. Slaughter", "Greg Valentine"] },
  352: { alternateNames: ["Stan Hansen", "The Lariat"], allies: ["Terry Funk", "Bruiser Brody"], rivals: ["Bruno Sammartino", "André the Giant", "Vader"] },
  353: { alternateNames: ["Jesse 'The Body' Ventura", "Jesse Ventura", "The Governor"], allies: ["Gorilla Monsoon (broadcast)"], rivals: ["Hulk Hogan", "Bruno Sammartino"] },
  358: { alternateNames: ["Dusty Rhodes", "The American Dream", "The Common Man"], allies: ["Sapphire", "Legion of Doom"], rivals: ["Ric Flair", "Ted DiBiase", "Randy Savage", "The Four Horsemen"] },
  360: { alternateNames: ["Afa & Sika", "The Wild Samoans"], allies: [], rivals: ["Rocky Johnson", "The Strongbows"], managers: ["Captain Lou Albano"] },

  // ── BATCH 2: NEW GENERATION ─────────────────────────────────────
  14: { // Rick Rude
    alternateNames: ["Ravishing Rick Rude", "Richard Rood", "Simply Ravishing", "The Dangerous Alliance (WCW)"],
    allies: ["Mr. Perfect (tag partner)", "D-Generation X", "The Dangerous Alliance (WCW)"],
    rivals: ["Ultimate Warrior", "Jake Roberts", "Ricky Steamboat", "Dustin Rhodes (WCW)", "Sting (WCW)"],
  
    managers: ["Bobby Heenan", "Paul Heyman"],
},
  15: { // Demolition
    alternateNames: ["Demolition"],
    allies: ["Crush (third member)"],
    rivals: ["The Hart Foundation", "Brain Busters", "Powers of Pain", "Legion of Doom", "The Colossal Connection"],
  
    managers: ["Mr. Fuji"],
},
  17: { // Brutus Beefcake
    alternateNames: ["Brutus The Barber Beefcake", "The Barber", "Ed Leslie", "The Disciple", "The Booty Man", "Brother Bruti", "The Zodiac", "The Butcher"],
    allies: ["Hulk Hogan (best friend and tag partner)", "Greg Valentine (Dream Team partner)"],
    rivals: ["Greg Valentine (post-breakup)", "Honky Tonk Man", "Ted DiBiase", "Mr. Perfect", "Money Inc.", "Kevin Sullivan (WCW)"],
  
    managers: ["Johnny Valiant", "Jimmy Hart"],
},
  18: { // Earthquake
    alternateNames: ["Earthquake", "John Tenta", "Golga", "Shark (WCW)", "Avalanche (WCW)"],
    allies: ["Typhoon (Natural Disasters tag partner)", "Dino Bravo (tag partner)", "The Oddities"],
    rivals: ["Hulk Hogan", "André the Giant", "Jake Roberts", "Yokozuna", "Tugboat"],
  
    managers: ["Jimmy Hart"],
},
  19: { // Big Boss Man
    alternateNames: ["Big Boss Man", "Ray Traylor", "Big Bubba Rogers (WCW)", "The Guardian Angel (WCW)", "Twin Towers"],
    allies: ["Akeem (Twin Towers tag partner)", "The Corporation", "Vince McMahon (Attitude Era)", "Ken Shamrock (tag partner)"],
    rivals: ["Nailz", "The Mountie", "Bobby Heenan", "Akeem (post-breakup)", "The Undertaker", "Al Snow", "Big Show", "The Rock", "Mankind"],
  
    managers: ["Slick"],
},
  20: { // Sgt. Slaughter
    alternateNames: ["Sgt. Slaughter", "Robert Remus", "The Sarge"],
    allies: ["Colonel Mustafa (Iron Sheik)", "Corporal Kirchner (tag partner)"],
    rivals: ["Hulk Hogan", "Iron Sheik (early feud)", "Nikolai Volkoff", "Ultimate Warrior", "Hacksaw Jim Duggan"],
  
    managers: ["General Adnan"],
},
  21: { // Iron Sheik
    alternateNames: ["The Iron Sheik", "Hossein Khosrow Ali Vaziri", "Colonel Mustafa"],
    allies: ["Nikolai Volkoff (tag partner)", "Sgt. Slaughter (as Colonel Mustafa)", "General Adnan"],
    rivals: ["Hulk Hogan", "Sgt. Slaughter (early feud)", "Bob Backlund", "Hacksaw Jim Duggan", "Tito Santana"],
  
    managers: ["Freddie Blassie"],
},
  22: { // Yokozuna
    alternateNames: ["Yokozuna", "Kokina Maximus"],
    allies: ["Owen Hart (tag partner)", "The Headshrinkers / Samoan SWAT Team"],
    rivals: ["Hulk Hogan", "Bret Hart", "Lex Luger", "The Undertaker", "Razor Ramon", "Randy Savage", "Stone Cold Steve Austin"],
  
    managers: ["Mr. Fuji", "Jim Cornette"],
},
  23: { // Razor Ramon
    alternateNames: ["Razor Ramon", "The Bad Guy"],
    allies: ["The 1-2-3 Kid (tag partner)", "Kevin Nash (Kliq member)", "Shawn Michaels (Kliq member)", "Savio Vega (ally)"],
    rivals: ["Shawn Michaels", "The 1-2-3 Kid (after heel turn)", "Ted DiBiase", "Jeff Jarrett", "Goldust", "IRS", "Rick Martel"]
  },
  24: { // Diesel
    alternateNames: ["Diesel", "Big Daddy Cool"],
    allies: ["Shawn Michaels (Kliq member and bodyguard)", "Razor Ramon (Kliq member)", "The 1-2-3 Kid (Kliq member)"],
    rivals: ["Bret Hart", "The Undertaker", "Shawn Michaels", "Sycho Sid", "Mabel", "British Bulldog", "Yokozuna", "Bob Backlund", "Jeff Jarrett"]
  },
  25: { // Owen Hart
    alternateNames: ["Owen Hart", "The King of Harts", "The Rocket", "The Blue Blazer"],
    allies: ["Bret Hart (early tag partner)", "Jim Neidhart (tag partner)", "The Hart Foundation", "British Bulldog (tag partner)", "Yokozuna (tag partner)", "Jeff Jarrett (tag partner)"],
    rivals: ["Bret Hart (brother vs brother)", "Shawn Michaels", "Stone Cold Steve Austin", "Triple H", "The 1-2-3 Kid", "Razor Ramon"]
  },
  26: { // British Bulldog
    alternateNames: ["The British Bulldog", "Davey Boy Smith"],
    allies: ["Dynamite Kid (British Bulldogs tag team)", "Owen Hart (tag partner)", "The Hart Foundation", "Jim Neidhart", "Diana Hart (wife and valet)"],
    rivals: ["Bret Hart", "Shawn Michaels", "Owen Hart (occasional)", "The Warlord", "Ken Shamrock", "Steve Austin"],
  
    managers: ["Jim Cornette"],
},
  27: { // Goldust
    alternateNames: ["Goldust", "Dustin Rhodes", "Dustin Runnels", "The Bizarre One", "The Natural", "Black Reign (TNA)"],
    allies: ["Booker T (tag partner)", "R-Truth (tag partner)", "Cody Rhodes", "Dusty Rhodes (father)"],
    rivals: ["Razor Ramon", "Roddy Piper", "Ahmed Johnson", "The Undertaker", "Triple H", "Val Venis", "Randy Orton", "Cody Rhodes (family feud)"],
  
    managers: ["Marlena/Terri Runnels"],
},
  29: { // Lex Luger
    alternateNames: ["Lex Luger", "The Total Package", "The Narcissist", "Lawrence Pfohl"],
    allies: ["Sting (WCW tag partner)", "The Four Horsemen (WCW)", "British Bulldog (Allied Powers tag team)", "Miss Elizabeth (WCW)", "The Wolfpac (nWo)"],
    rivals: ["Yokozuna", "Hulk Hogan (WCW)", "Ric Flair", "Barry Windham", "Tatanka", "Randy Savage (WCW)"]
  },
  37: { // Steve Blackman
    alternateNames: ["Steve Blackman", "The Lethal Weapon"],
    allies: ["Al Snow (Head Cheese tag team)", "Ken Shamrock (brief alliance)", "Grandmaster Sexay (tag partner)"],
    rivals: ["Ken Shamrock", "Shane McMahon (hardcore feuds)", "Chris Jericho", "Crash Holly (Hardcore title)"]
  },
  38: { // Crash Holly
    alternateNames: ["Crash Holly", "Mike Lockwood", "Elroy"],
    allies: ["Hardcore Holly (Holly Cousins tag team)", "Molly Holly (storyline cousin)"],
    rivals: ["Steve Blackman (Hardcore title)", "Perry Saturn", "Mean Street Posse (Hardcore feuds)", "Hardcore Holly (cousin rivalry)"]
  },
  39: { // Rikishi
    alternateNames: ["Rikishi", "Rikishi Phatu", "Fatu", "The Sultan", "Make a Difference Fatu"],
    allies: ["Too Cool (Scotty 2 Hotty and Grandmaster Sexay)", "The Headshrinkers (Samu)", "Yokozuna (cousin)"],
    rivals: ["Steve Austin (ran over Austin storyline)", "Triple H", "The Rock (post-heel turn)", "Val Venis", "Chris Benoit", "Big Show"],
  
    managers: ["Afa"],
},
  40: { // Scotty 2 Hotty
    alternateNames: ["Scotty 2 Hotty", "Scott Taylor", "Scott Garland"],
    allies: ["Rikishi (Too Cool)", "Grandmaster Sexay (Too Cool)"],
    rivals: ["Dean Malenko", "Albert", "Eddie Guerrero", "Tajiri", "William Regal"]
  },
  41: { // Grandmaster Sexay
    alternateNames: ["Grandmaster Sexay", "Brian Christopher", "Brian Christopher Lawler", "Brian Lawler"],
    allies: ["Scotty 2 Hotty (Too Cool)", "Rikishi (Too Cool)", "Jerry Lawler (father)"],
    rivals: ["Taka Michinoku", "Dean Malenko", "Jeff Jarrett", "Essa Rios"]
  },
  46: { // Chris Benoit
    alternateNames: ["Chris Benoit", "The Rabid Wolverine", "The Crippler", "The Canadian Crippler", "Pegasus Kid (Japan)", "Wild Pegasus"],
    allies: ["Eddie Guerrero (best friend and tag partner)", "Dean Malenko (Radicalz)", "Perry Saturn (Radicalz)", "The Four Horsemen (WCW)", "Chris Jericho (tag partner)"],
    rivals: ["Kevin Sullivan (WCW)", "Triple H", "Kurt Angle", "The Rock", "Booker T", "Chris Jericho", "Shawn Michaels", "Edge", "Randy Orton"]
  },
  48: { // Christian
    alternateNames: ["Christian", "Christian Cage", "Captain Charisma", "William Jason Reso", "Jay Reso"],
    allies: ["Edge (tag team partner and best friend)", "Gangrel (The Brood)", "Chris Jericho (tag partner)", "Tyson Tomko (enforcer)", "Lance Storm (fellow Canadian)"],
    rivals: ["Edge (post-breakup)", "Chris Jericho", "Rob Van Dam", "Jeff Hardy", "Randy Orton", "John Cena", "Alberto Del Rio", "Booker T"]
  },
  49: { // Jeff Hardy
    alternateNames: ["Jeff Hardy", "The Charismatic Enigma", "Brother Nero (TNA)", "Willow (TNA)", "The Rainbow-Haired Warrior"],
    allies: ["Matt Hardy (Hardy Boyz brother)", "Lita (Team Xtreme)", "The Undertaker (mutual respect)", "R-Truth (tag partner)"],
    rivals: ["The Undertaker", "Triple H", "CM Punk", "Edge", "Randy Orton", "Matt Hardy (brother vs brother)", "Umaga", "Sheamus"]
  },
  50: { // Matt Hardy
    alternateNames: ["Matt Hardy", "Matt Hardy Version 1", "Broken Matt Hardy", "Woken Matt Hardy", "Matthew Moore Hardy", "The Hardy Boyz"],
    allies: ["Jeff Hardy (brother - Hardy Boyz)", "Lita (manager/valet)", "MVP (tag partner)", "Shannon Moore (Mattitude Follower)", "Reby Hardy (wife/manager in TNA)"],
    rivals: ["Edge (feud over Lita)", "Jeff Hardy (brother rivalry)", "MVP (rivalry turned alliance)", "Bray Wyatt (Ultimate Deletion)", "The Undertaker"]
  },
  51: { // Dudley Boyz
    alternateNames: ["The Dudley Boyz", "Team 3D"],
    allies: ["Spike Dudley (half-brother)"],
    rivals: ["The Hardy Boyz", "Edge & Christian", "APA (tag rivalry)", "Rob Van Dam (ECW)", "Tommy Dreamer (ECW)"],
  
    managers: ["Stacy Keibler", "Joel Gertner"],
},
  54: { // Val Venis
    alternateNames: ["Val Venis", "Sean Morley", "The Big Valbowski", "Chief Morley"],
    allies: ["Right to Censor (Steven Richards - Bull Buchanan - The Godfather - Ivory)", "Lance Storm (Un-Americans)", "Test (Un-Americans)"],
    rivals: ["Ken Shamrock (IC title feud)", "Goldust", "Rikishi", "D'Lo Brown", "Kaientai"]
  },
  55: { // Ken Shamrock
    alternateNames: ["Ken Shamrock", "The Worlds Most Dangerous Man"],
    allies: ["Big Boss Man (tag partner)"],
    rivals: ["The Rock (IC title feud)", "Owen Hart", "Steve Blackman", "Dan Severn", "Vader", "Val Venis", "Mankind", "Chris Jericho"]
  },
  57: { // X-Pac
    alternateNames: ["X-Pac", "The 1-2-3 Kid", "Syxx (WCW)", "Lightning Kid", "Sean Waltman", "6-Pac"],
    allies: ["D-Generation X", "nWo (WCW as Syxx)", "Kevin Nash (Kliq)", "Scott Hall (Kliq)", "Kane (tag partner)", "Albert"],
    rivals: ["Razor Ramon (1-2-3 Kid upset)", "Shane McMahon (European title)", "Jeff Jarrett", "Eddie Guerrero", "Chyna (post-breakup)"]
  },
  58: { // Road Dogg
    alternateNames: ["Road Dogg", "The Roadie", "Jesse James", "B.G. James (TNA)", "Brian Girard James", "New Age Outlaws"],
    allies: ["Billy Gunn (New Age Outlaws)", "D-Generation X", "Jeff Jarrett (Roadie era)", "Konnan (3Live Kru in TNA)"],
    rivals: ["Mankind", "LOD 2000", "APA", "Jeff Jarrett (turned on as Roadie)"]
  },
  59: { // Billy Gunn
    alternateNames: ["Billy Gunn", "Mr. Ass", "Bad Ass Billy Gunn", "Rockabilly", "Kip James (TNA)", "Monty Sopp"],
    allies: ["Road Dogg (New Age Outlaws)", "D-Generation X", "Bart Gunn (Smoking Gunns)", "Chuck Palumbo (Billy and Chuck)", "The Acclaimed (AEW)"],
    rivals: ["The Rock (King of the Ring feud)", "Big Show", "Chyna", "Eddie Guerrero", "Honky Tonk Man (Rockabilly era)"]
  },
  62: { // Trish Stratus
    alternateNames: ["Trish Stratus", "Patricia Anne Stratigeas", "The Queen of Queens"],
    allies: ["Lita (tag partner and friend)", "Christian (storyline couple)", "Chris Jericho (storyline)", "Test"],
    rivals: ["Lita (rivalry)", "Mickie James (obsessed fan storyline)", "Victoria (hardcore feud)", "Stephanie McMahon", "Jazz (Womens title)", "Molly Holly", "Beth Phoenix", "Becky Lynch (2023)"]
  },
  63: { // The Godfather
    alternateNames: ["The Godfather", "Papa Shango", "Kama", "Kama Mustafa", "The Goodfather", "Charles Wright"],
    allies: ["Right to Censor (as The Godfather)", "Nation of Domination", "Ministry of Darkness"],
    rivals: ["The Undertaker (as Papa Shango)", "Ultimate Warrior (Papa Shango era)", "Goldust", "Val Venis"]
  },
  66: { // Test
    alternateNames: ["Test", "Andrew Martin"],
    allies: ["Albert", "Scott Steiner (tag partner)", "Lance Storm", "Stephanie McMahon (storyline fiance)"],
    rivals: ["Triple H (Stephanie McMahon wedding)", "Shane McMahon", "Eddie Guerrero (IC title)", "Albert (former partner turned rival)", "Chris Jericho", "Brock Lesnar"],
  
    managers: ["Stacy Keibler"],
},
  618: { // Ronda Rousey
    alternateNames: ["Ronda Rousey", "Rowdy Ronda Rousey", "The Baddest Woman on the Planet"],
    allies: ["The Rock (WrestleMania 31 segment)", "Kurt Angle (WrestleMania 34 tag partner)", "Natalya (ally)", "Shayna Baszler (tag partner and friend)"],
    rivals: ["Becky Lynch (WrestleMania 35 main event)", "Charlotte Flair (WrestleMania 38)", "Stephanie McMahon (WrestleMania 34)", "Alexa Bliss", "Nia Jax", "Liv Morgan", "Shayna Baszler"]
  },
  620: { // Io Shirai
    alternateNames: ["Io Shirai", "IYO SKY", "The Genius of the Sky", "The Evil Genius", "Masami Odate"],
    allies: ["Damage CTRL", "Kairi Sane (Sky Pirates tag team)", "Bayley (Damage CTRL leader)"],
    rivals: ["Rhea Ripley (NXT Womens Championship)", "Charlotte Flair (NXT)", "Candice LeRae (NXT)", "Bianca Belair", "Toni Storm (NXT)"]
  },

  837: { // Mr. Fuji
    alternateNames: ['The Devious One', "Mr. Fuji & Mr. Saito", "Mr. Fuji and Professor Toru Tanaka"],
    allies: ['Professor Toru Tanaka', 'Yokozuna', 'Demolition', 'The Orient Express', 'George Steele'],
    rivals: ['Chief Jay Strongbow', 'Tony Garea', 'Bret Hart (as Yokozunas manager)', 'The Steiner Brothers'],
  },
  1022: { // Buddy Rogers
    alternateNames: ['Nature Boy Buddy Rogers', 'The Original Nature Boy'],
    allies: ["Buddy Rogers"],
    rivals: ['Bruno Sammartino', "Pat O'Connor", 'Antonino Rocca', 'Lou Thesz'],
  
    managers: ['Grand Wizard'],
},
  1023: { // Bob Orton Jr.
    alternateNames: ['Ace', 'Cowboy Bob Orton'],
    allies: ['Roddy Piper', 'Paul Orndorff', 'Randy Orton (son)'],
    rivals: ['Hulk Hogan', 'Mr. T', 'The Undertaker'],
  },
  1024: { // Rocky Johnson
    alternateNames: ['The Soulman'],
    allies: ['Tony Atlas', 'The Rock (son)', 'Peter Maivia (father-in-law)'],
    rivals: ['The Wild Samoans', 'Don Muraco', 'Greg Valentine'],
  },
  1025: { // Tony Atlas
    alternateNames: ['Mr. USA', 'Saba Simba'],
    allies: ['Rocky Johnson', 'Mark Henry'],
    rivals: ['The Wild Samoans', 'Nikolai Volkoff', 'The Iron Sheik'],
  },
  1026: { // Bobo Brazil
    alternateNames: ['The South American Heavyweight Champion'],
    allies: ['Bruno Sammartino', 'Chief Jay Strongbow'],
    rivals: ['Killer Kowalski', 'The Sheik', 'Freddie Blassie', 'Ernie Ladd'],
  },
  1027: { // Larry Zbyszko
    alternateNames: ['The Living Legend', 'The New Living Legend', 'The Cruncher'],
    allies: ['Bruno Sammartino (early mentor)', 'Bobby Heenan'],
    rivals: ['Bruno Sammartino', 'Pedro Morales'],
  },
  1028: { // Ernie Ladd
    alternateNames: ['The Big Cat'],
    allies: [],
    rivals: ["André the Giant", 'Bruno Sammartino', 'Pedro Morales', 'Bobo Brazil'],
  
    managers: ['Freddie Blassie'],
},
  1029: { // Ken Patera
    alternateNames: ['The Olympic Strongman'],
    allies: ['Big John Studd'],
    rivals: ['Pat Patterson', 'Bob Backlund', 'Hulk Hogan', 'Bobby Heenan (after face turn)'],
  
    managers: ['Bobby Heenan'],
},
  1030: { // Ivan Putski
    alternateNames: ['Polish Power'],
    allies: ['Tito Santana', 'Scott Putski (son)'],
    rivals: ['The Valiant Brothers', 'Nikolai Volkoff', 'The Iron Sheik'],
  },
  1031: { // Tony Garea
    alternateNames: [],
    allies: ['Haystacks Calhoun', 'Dean Ho', 'Rick Martel', 'Larry Zbyszko (early career)'],
    rivals: ['The Executioners', 'The Yukon Lumberjacks', 'Mr. Fuji and Professor Toru Tanaka'],
  },
  1032: { // Professor Toru Tanaka
    alternateNames: ['Professor Tanaka', 'Toru Tanaka'],
    allies: ['Mr. Fuji', 'Mr. Saito'],
    rivals: ['Tony Garea', 'Chief Jay Strongbow', 'Haystacks Calhoun'],
  },
  1033: { // Arnold Skaaland
    alternateNames: ['The Golden Boy'],
    allies: ['Bruno Sammartino', 'Bob Backlund', 'Vince McMahon Sr.'],
    rivals: ['The Iron Sheik'],
  },
  1034: { // Bam Bam Bigelow
    alternateNames: ['The Beast from the East'],
    allies: ['Luna Vachon', 'Ted DiBiase', 'Diesel', 'Shane McMahon'],
    rivals: ['Lawrence Taylor', 'Goldberg', 'Tatanka', 'Doink the Clown'],
  },
  1035: { // Kerry Von Erich
    alternateNames: ['The Texas Tornado', 'The Modern Day Warrior', "The Von Erichs"],
    allies: ['Kevin Von Erich (brother)', 'Ultimate Warrior', "Legion of Doom"],
    rivals: ['Mr. Perfect', 'Ric Flair', 'Jerry Lawler', 'The Freebirds'],
  },
  1036: { // The Dynamite Kid
    alternateNames: ['Dynamite Kid', 'The Dynamite Kid'],
    allies: ['Davey Boy Smith (cousin and tag partner)', 'Bret Hart'],
    rivals: ['Tiger Mask', 'The Dream Team', 'The Hart Foundation', 'Jacques Rougeau'],
  },
  1041: { // Virgil
    alternateNames: ['Vincent (WCW)', 'Curly Bill', 'Soul Train Jones'],
    allies: ['Ted DiBiase (before face turn)', 'Roddy Piper', 'Hulk Hogan'],
    rivals: ['Ted DiBiase', "Repo Man", 'Nailz'],
  },
  1042: { // Hercules Hernandez
    alternateNames: ['Hercules', 'Super Invader'],
    allies: ['Paul Roma'],
    rivals: ['Billy Jack Haynes', 'Ted DiBiase', 'Ultimate Warrior'],
  
    managers: ['Bobby Heenan', 'Slick'],
},
  1043: { // One Man Gang
    alternateNames: ['Akeem', 'Akeem the African Dream', 'OMG'],
    allies: ['Big Boss Man (Twin Towers)', 'Ted DiBiase'],
    rivals: ['Hulk Hogan', 'Randy Savage', 'Jim Duggan', 'Ultimate Warrior'],
  
    managers: ['Slick'],
},
  1044: { // Jacques Rougeau
    alternateNames: ['The Mountie', 'Jacques Rougeau Jr.'],
    allies: ['Raymond Rougeau (brother)', 'Pierre Carl Ouellet'],
    rivals: ['The Rockers', 'The British Bulldogs', 'Bret Hart', 'Roddy Piper'],
  
    managers: ['Jimmy Hart'],
},
  1045: { // Raymond Rougeau
    alternateNames: ['Ray Rougeau'],
    allies: ['Jacques Rougeau (brother)'],
    rivals: ['The Rockers', 'The British Bulldogs', 'The Young Stallions'],
  
    managers: ['Jimmy Hart'],
},
  1046: { // Lanny Poffo
    alternateNames: ['Leaping Lanny Poffo', 'The Genius'],
    allies: ['Randy Savage (brother)', 'Mr. Perfect'],
    rivals: ['Hulk Hogan', 'Brutus Beefcake'],
  },

  710: { // Typhoon
    alternateNames: ['Tugboat', 'The Shockmaster'],
    allies: ['Earthquake', 'Hulk Hogan'],
    rivals: ['Money Inc.', 'The Nasty Boys', 'The Beverly Brothers'],
  
    managers: ['Jimmy Hart'],
},
  1047: { // Ronnie Garvin
    alternateNames: ['Rugged Ronnie Garvin', 'Hands of Stone'],
    allies: ['Jimmy Garvin (kayfabe brother)'],
    rivals: ['Greg Valentine', 'Ric Flair', 'Dino Bravo'],
  },
  1049: { // Ron Bass
    alternateNames: ['Outlaw Ron Bass'],
    allies: [],
    rivals: ['Brutus Beefcake', 'Hulk Hogan', 'Tito Santana'],
  
    managers: ['Danny Davis'],
},
  1050: { // B. Brian Blair
    alternateNames: ['Bee One'],
    allies: ['Jim Brunzell', 'Jumping Jim Brunzell'],
    rivals: ["Iron Sheik", 'The Dream Team'],
  },
  1051: { // Jim Brunzell
    alternateNames: ['Jumping Jim Brunzell'],
    allies: ['B. Brian Blair', 'Greg Gagne (AWA High Flyers)'],
    rivals: ['The Hart Foundation', "Iron Sheik", 'The Dream Team'],
  },
  1052: { // Butch Reed
    alternateNames: ['Hacksaw Butch Reed', 'The Natural'],
    allies: ['Ron Simmons (Doom in WCW)'],
    rivals: ['Koko B. Ware', 'Junkyard Dog', 'Tito Santana'],
  
    managers: ['Slick'],
},
  1053: { // Bart Gunn
    alternateNames: ['Mike Barton'],
    allies: ['Billy Gunn', 'Smoking Gunns'],
    rivals: ["Owen Hart", 'The Bodydonnas', 'Butterbean'],
  },
  1054: { // The Patriot
    alternateNames: ['Del Wilkes'],
    allies: ["Legion of Doom", 'Bret Hart (initial ally)'],
    rivals: ['Bret Hart', 'The Hart Foundation', 'The British Bulldog'],
  },
  1055: { // Henry O. Godwinn
    alternateNames: ['H.O.G.', 'Henry Godwinn'],
    allies: ['Phineas I. Godwinn', 'Hillbilly Jim'],
    rivals: ['The New Rockers', 'The Smoking Gunns', 'The Bodydonnas', 'Triple H'],
  },
  1056: { // Mideon
    alternateNames: ['Phineas I. Godwinn', 'Dennis Knight', 'Naked Mideon'],
    allies: ['Henry O. Godwinn', 'The Undertaker', 'Viscera'],
    rivals: ['The Smoking Gunns', 'The Bodydonnas', "APA"],
  },
  1057: { // Samu
    alternateNames: ['The Samoan Savage', 'Headshrinker Samu'],
    allies: ['Fatu', "The Wild Samoans (Afa)", 'Captain Lou Albano'],
    rivals: ['The Quebecers', "Shawn Michaels", 'Men on a Mission'],
  },
  1058: { // Rockin Robin
    alternateNames: [],
    allies: ['Velvet McIntyre'],
    rivals: ['Sensational Sherri', 'Judy Martin', 'The Glamour Girls'],
  },
  1059: { // Terry Funk
    alternateNames: ['Chainsaw Charlie', 'The Funker', "The Funk Brothers", "The Funks"],
    allies: ['Cactus Jack (Mick Foley)', 'Dory Funk Jr. (brother)', 'Dusty Rhodes'],
    rivals: ['Ric Flair', 'Jerry Lawler', 'Sabu', "New Age Outlaws"],
  },
  1060: { // Mike Awesome
    alternateNames: ['That 70s Guy', 'The Fat Chick Thriller', 'The Gladiator'],
    allies: ['Lance Storm'],
    rivals: ['Tommy Dreamer', 'Tazz', 'The Undertaker'],
  },
  1061: { // Shane Douglas
    alternateNames: ['Dean Douglas', 'The Franchise'],
    allies: [],
    rivals: ['Razor Ramon', 'Shawn Michaels', 'Ahmed Johnson'],
  
    managers: ['Francine'],
},
  1064: { // Rick Steiner
    alternateNames: ['The Dog-Faced Gremlin'],
    allies: ['Scott Steiner (brother)', 'Sting'],
    rivals: ['Money Inc.', 'The Headshrinkers', 'The Nasty Boys'],
  },
  1065: { // Luke Gallows
    alternateNames: ['Festus', 'Doc Gallows', 'Fake Kane'],
    allies: ['Karl Anderson', 'AJ Styles', 'CM Punk', "Finn Bálor"],
    rivals: ['Seth Rollins', 'Dean Ambrose', 'The Hardy Boyz', "Enzo Amore & Big Cass"],
  },
  1066: { // Karl Anderson
    alternateNames: ['The Machine Gun', 'Karl Machine Gun Anderson'],
    allies: ['Luke Gallows', 'AJ Styles', "Finn Bálor"],
    rivals: ['Seth Rollins', 'Dean Ambrose', 'The Hardy Boyz', "Enzo Amore & Big Cass"],
  },
  1067: { // Paul Roma
    alternateNames: [],
    allies: ['Jim Powers', 'Hercules Hernandez'],
    rivals: ["The Warlord", 'The Rockers', "Legion of Doom"],
  
    managers: ['Slick'],
},
  1068: { // Rosey
    alternateNames: ['Super Hero in Training', 'S.H.I.T.', 'Matt Anoa i'],
    allies: ['The Hurricane', 'Jamal', 'Umaga (brother)'],
    rivals: ['La Resistance', 'The Dudley Boyz', "Goldust"],
  },
  1070: { // Kalisto
    alternateNames: ['Samuray del Sol'],
    allies: ['Sin Cara', 'Gran Metalik', 'Lince Dorado'],
    rivals: ['Alberto Del Rio', 'Braun Strowman', 'Baron Corbin', 'The Ascension'],
  },
  1071: { // Scott Dawson
    alternateNames: ['Shatter Machine Scott Dawson'],
    allies: ['Dash Wilder', 'Randy Orton (brief alliance)'],
    rivals: ['DIY', 'American Alpha', 'The New Day', 'The Usos'],
  },

  1072: { // Dash Wilder
    alternateNames: ['Dax Harwood (AEW)', 'Dash Wilder'],
    allies: ['Scott Dawson', 'Randy Orton (brief alliance)'],
    rivals: ['DIY', 'American Alpha', 'The New Day', 'The Usos', 'The Hardy Boyz'],
  },
  1073: { // Akam
    alternateNames: [],
    allies: ['Rezar', 'Seth Rollins'],
    rivals: ['DIY', "Undisputed Era", 'The Viking Raiders', 'The Street Profits'],
  
    managers: ['Paul Ellering', 'Drake Maverick'],
},
  1074: { // Rezar
    alternateNames: [],
    allies: ['Akam', 'Seth Rollins'],
    rivals: ['DIY', "Undisputed Era", 'The Viking Raiders', 'The Street Profits'],
  
    managers: ['Paul Ellering', 'Drake Maverick'],
},
  1075: { // Erik
    alternateNames: ['Rowe', 'War Machine'],
    allies: ['Ivar', "Sarah Logan"],
    rivals: ['The Street Profits', 'The Usos', 'The New Day'],
  },
  1076: { // Montez Ford
    alternateNames: [],
    allies: ['Angelo Dawkins', 'Bianca Belair (wife)'],
    rivals: ['The Usos', 'Alpha Academy', "RKBro", 'The Bloodline'],
  },
  1077: { // Angelo Dawkins
    alternateNames: [],
    allies: ['Montez Ford'],
    rivals: ['The Usos', 'Alpha Academy', "RKBro"],
  },
  1079: { // Darren Young
    alternateNames: ['Fred Rosser'],
    allies: ["Titus O'Neil", 'Bob Backlund (life coach)', "Nexus / Wade Barrett's Army"],
    rivals: ['The Ascension', "Titus O'Neil"],
  },
  1081: { // Alicia Fox
    alternateNames: ['Foxy'],
    allies: ['Jinder Mahal (storyline)'],
    rivals: ['Melina', 'Mickie James', 'Paige', 'Bayley'],
  },
  1082: { // Kelly Kelly
    alternateNames: ['K2'],
    allies: ['Eve Torres', 'Natalya'],
    rivals: ['Beth Phoenix', 'Brie Bella', 'Layla', 'Maryse'],
  },
  1083: { // Billie Kay
    alternateNames: ['Jessica McKay'],
    allies: ['Peyton Royce (best friend)', 'Carmella'],
    rivals: ['Bayley', 'Sasha Banks', 'Asuka', 'The Kabuki Warriors'],
  },
  1084: { // Peyton Royce
    alternateNames: ['Cassie Lee'],
    allies: ['Billie Kay (best friend)', 'Shinsuke Nakamura (husband)'],
    rivals: ['Bayley', 'Sasha Banks', 'Asuka', 'The Kabuki Warriors'],
  },
  1085: { // Tucker
    alternateNames: ['Tucker Knight'],
    allies: ['Otis (before betrayal)', 'The Miz'],
    rivals: ['Otis', 'The New Day', 'The Miz (later)'],
  },
  1086: { // Cedric Alexander
    alternateNames: [],
    allies: ['Bobby Lashley', 'MVP', 'Shelton Benjamin', 'Mustafa Ali'],
    rivals: ['Buddy Murphy', 'Drew Gulak', 'Ricochet'],
  },
  1087: { // Buddy Murphy
    alternateNames: ['Buddy Matthews', 'Buddy Murphy'],
    allies: ['Seth Rollins', "Rey Mysterio", "Wesley Blake"],
    rivals: ['Roman Reigns', 'Daniel Bryan', 'Rey Mysterio', 'Cedric Alexander'],
  },
  1088: { // Kenny Dykstra
    alternateNames: ['Kenny of the Spirit Squad', 'Ken Doane'],
    allies: ['Mickie James (storyline)'],
    rivals: ['D-Generation X', 'Ric Flair', 'John Cena'],
  },
  1091: { // Blair Davenport
    alternateNames: ['Bea Priestley'],
    allies: [],
    rivals: ['Meiko Satomura', 'Tiffany Stratton', 'Fallon Henley'],
  },
  1092: { // Ethan Page
    alternateNames: ['All Ego', 'Julian'],
    allies: ['Scorpio Sky (AEW)'],
    rivals: ['Trick Williams', 'Shawn Spears', 'Oro Mensah'],
  },
  1095: { // Kit Wilson
    alternateNames: [],
    allies: ['Elton Prince'],
    rivals: ['The Creed Brothers', 'Gallus', 'Chase University'],
  },
  1096: { // Elton Prince
    alternateNames: ['Lewis Howley'],
    allies: ['Kit Wilson'],
    rivals: ['The Creed Brothers', 'Gallus', 'Chase University'],
  },

  1097: { // Drake Maverick
    alternateNames: ['Rockstar Spud'],
    allies: ['Akam', 'Rezar', 'Authors of Pain'],
    rivals: ['Elias', 'Robert Roode', 'EC3'],
  },
  1098: { // Shad Gaspard
    alternateNames: ['Da Shad'],
    allies: ['JTG', 'John Cena'],
    rivals: ["Lance Cade", "The Miz & John Morrison", 'JTG (brief feud after split)'],
  },
  1099: { // Nick Bockwinkel
    alternateNames: ['Handsome Nick Bockwinkel'],
    allies: ['Ray Stevens'],
    rivals: ['Verne Gagne', 'Hulk Hogan', 'Curt Hennig', 'Jerry Lawler'],
  
    managers: ['Bobby Heenan'],
},
  1100: { // Verne Gagne
    alternateNames: ['The AWA Legend'],
    allies: ['Wally Karbo', 'Mad Dog Vachon'],
    rivals: ['Nick Bockwinkel', 'The Crusher', 'Fritz Von Erich', 'Gene Kiniski'],
  },
  1101: { // Antonio Inoki
    alternateNames: ['Strong Machine (masked)', 'The Emperor of Strong Style'],
    allies: ['Hulk Hogan (NJPW)', 'Tiger Mask'],
    rivals: ['Stan Hansen', 'Ric Flair', "André the Giant"],
  },
  1102: { // Abdullah the Butcher
    alternateNames: ['The Madman from the Sudan', 'Abby'],
    allies: ['The Sheik'],
    rivals: ['Carlos Colon', 'Bruiser Brody', 'Dusty Rhodes', 'The Sheik (sometimes)'],
  
    managers: ['Gary Hart'],
},
  1103: { // Carlos Colon
    alternateNames: ['The Universal Champion'],
    allies: ['Pedro Morales', 'Carlito (son)', 'Primo (son)'],
    rivals: ['Abdullah the Butcher', 'Bruiser Brody', 'Ric Flair', 'Stan Hansen'],
  },
  1104: { // Dory Funk Jr.
    alternateNames: ['Hoss Funk'],
    allies: ['Terry Funk (brother)', 'Dory Funk Sr. (father)'],
    rivals: ['Harley Race', 'Jack Brisco', 'Giant Baba'],
  },
  1105: { // Jack Brisco
    alternateNames: [],
    allies: ['Gerald Brisco (brother)', 'Dory Funk Jr.'],
    rivals: ['Harley Race', 'Terry Funk', 'Giant Baba', 'The Funks'],
  },
  1106: { // Gerald Brisco
    alternateNames: [],
    allies: ['Jack Brisco (brother)', 'Pat Patterson', 'Vince McMahon'],
    rivals: ['The Fabulous Freebirds', 'Crash Holly (Hardcore title)', "Mean Street Posse"],
  },
  1107: { // Michael PS Hayes
    alternateNames: ['Purely Sexy', 'Dok Hendrix', "The Fabulous Freebirds"],
    allies: ['Terry Gordy', 'Buddy Roberts', 'Jimmy Garvin'],
    rivals: ['The Von Erichs', "Legion of Doom", 'The Midnight Express'],
  },
  1108: { // Kharma
    alternateNames: ['Awesome Kong', 'Amazing Kong'],
    allies: ['Gail Kim (TNA)'],
    rivals: ['Eve Torres', 'Melina', 'Gail Kim (TNA rival)'],
  },
  1109: { // JTG
    alternateNames: [],
    allies: ['Shad Gaspard'],
    rivals: ["Lance Cade", "The Miz & John Morrison", 'Shad Gaspard (brief feud after split)'],
  },
  1110: { // The Berzerker
    alternateNames: ['Nord the Barbarian', 'The Viking', 'John Nord'],
    allies: [],
    rivals: ['The Undertaker', 'Virgil', 'El Matador (Tito Santana)'],
  
    managers: ['Mr. Fuji'],
},
  1111: { // Lio Rush
    alternateNames: ['The Man of the Hour', 'The 23-Year-Old Piece of Gold'],
    allies: ['Bobby Lashley'],
    rivals: ['Akira Tozawa', 'Kalisto', 'Tony Nese', 'Angel Garza'],
  },
  1112: { // Drew Gulak
    alternateNames: [],
    allies: ['Daniel Bryan', 'Humberto Carrillo'],
    rivals: ["Enzo Amore & Big Cass", 'Mustafa Ali', 'Tony Nese', 'The Brian Kendrick'],
  },
  1113: { // Tye Dillinger
    alternateNames: ['The Perfect 10', 'Gavin Spears', 'Stan', 'Shawn Spears (AEW)'],
    allies: ['Bobby Roode (NXT)', 'Cody Rhodes (AEW)'],
    rivals: ['Bobby Roode', 'Eric Young', 'Baron Corbin', 'Samoa Joe'],
  },
  1114: { // Gran Metalik
    alternateNames: ['Mascara Dorada'],
    allies: ['Kalisto', 'Lince Dorado'],
    rivals: ['TJ Perkins', 'Tony Nese', 'Drew Gulak', 'Ariya Daivari'],
  },
  1115: { // Lince Dorado
    alternateNames: ['The Golden Lynx'],
    allies: ['Kalisto', 'Gran Metalik'],
    rivals: ['Tony Nese', 'Drew Gulak', 'Ariya Daivari', "The Singh Brothers"],
  },
  1117: { // Boris Zhukov
    alternateNames: ['Private Jim Nelson'],
    allies: ['Nikolai Volkoff'],
    rivals: ['The Hart Foundation', 'The Rockers', "The Warlord"],
  
    managers: ['Slick'],
},
  1118: { // Charlie Dempsey
    alternateNames: [],
    allies: ['William Regal (father)', 'Myles Borne', 'Tavion Heights'],
    rivals: ['Chase University', "Tony D'Angelo"],
  },
  1120: { // Lexis King
    alternateNames: ['Brian Pillman Jr.'],
    allies: [],
    rivals: ['Trick Williams', 'Von Wagner', 'Axiom'],
  },
  1121: { // Sylvain Grenier
    alternateNames: [],
    allies: ["René Duprée", 'Rob Conway', 'Robert Conway'],
    rivals: ['The Dudley Boyz', "Rob Van Dam", "Hurricane"],
  },

  663: { // Titus O Neil
    alternateNames: [],
    allies: ["Darren Young", 'Apollo Crews', 'Dana Brooke'],
    rivals: ['The New Day', 'The Ascension'],
  },
  676: { // Lacey Evans
    alternateNames: ['The Lady of WWE', 'The Sassy Southern Belle'],
    allies: ['Ric Flair (storyline)', 'Sgt. Slaughter'],
    rivals: ['Becky Lynch', 'Bayley', 'Charlotte Flair', 'Natalya'],
  },
  829: { // Corey Graves
    alternateNames: ['Sterling James Keenan'],
    allies: ['Michael Cole (commentary team)', 'Pat McAfee (commentary team)'],
    rivals: ['Byron Saxton (commentary rivalry)', 'Carmella (wife)'],
  },

  // ── BATCH: IDs 1122+ ─────────────────────────────────────────────

  // ── WWWF & GOLDEN ERA ADDITIONS ──────────────────────────────────
  1122: { // Stan Stasiak
    alternateNames: ['The Heart Punch'],
    allies: [],
    rivals: ['Pedro Morales', 'Bruno Sammartino'],
  },
  1123: { // Billy Jack Haynes
    alternateNames: ['BJH'],
    allies: [],
    rivals: ['Hercules', "Honky Tonk Man"],
  },
  1124: { // Jim Powers
    alternateNames: ['Young Stallion'],
    allies: ['Paul Roma (Young Stallions)'],
    rivals: ['Demolition'],
  },
  1125: { // S.D. Jones
    alternateNames: ['Special Delivery Jones'],
    allies: ['Tito Santana'],
    rivals: ['King Kong Bundy'],
  },
  1126: { // Tonga Kid
    alternateNames: ['Tama', 'Island Warrior'],
    allies: ['Jimmy Snuka'],
    rivals: ['Roddy Piper', "Bob Orton Jr."],
  },
  1127: { // Corporal Kirchner
    alternateNames: ['Military Man'],
    allies: [],
    rivals: ['Nikolai Volkoff', 'Iron Sheik'],
  },
  1128: { // Velvet McIntyre
    alternateNames: [],
    allies: [],
    rivals: ['Fabulous Moolah', 'Sensational Sherri'],
  },
  1129: { // Leilani Kai
    alternateNames: [],
    allies: ['Judy Martin (Glamour Girls)'],
    rivals: ['Wendi Richter', 'Velvet McIntyre'],
  
    managers: ['Fabulous Moolah'],
},
  1130: { // Judy Martin
    alternateNames: ['Glamour Girl', "The Glamour Girls", "The Jumping Bomb Angels"],
    allies: ['Leilani Kai (Glamour Girls)'],
    rivals: ['The Jumping Bomb Angels', 'Velvet McIntyre'],
  
    managers: ['Jimmy Hart'],
},
  1131: { // Iron Mike Sharpe
    alternateNames: ["Canada's Greatest Athlete"],
    allies: [],
    rivals: ["Tito Santana", "Tony Atlas", "Rocky Johnson"],
  },
  1133: { // Blackjack Lanza
    alternateNames: ['Cowboy'],
    allies: ['Blackjack Mulligan (Blackjacks)'],
    rivals: ['Tony Garea', 'Dean Ho', 'Dominic DeNucci'],
  
    managers: ['Bobby Heenan'],
},
  1134: { // Peter Maivia
    alternateNames: ['High Chief Peter Maivia'],
    allies: ['Bruno Sammartino'],
    rivals: ['Bob Backlund', 'Superstar Billy Graham'],
  },
  1135: { // Baron Mikel Scicluna
    alternateNames: ['The Baron'],
    allies: ['King Curtis Iaukea'],
    rivals: ['Bruno Sammartino', 'Pedro Morales'],
  },
  1136: { // Haystacks Calhoun
    alternateNames: ['600-lb Country Boy'],
    allies: ['Tony Garea'],
    rivals: ['The Mongols'],
  },
  1137: { // Swede Hanson
    alternateNames: [],
    allies: [],
    rivals: ['Bruno Sammartino'],
  },
  1138: { // Spiros Arion
    alternateNames: ['The Golden Greek'],
    allies: ['Bruno Sammartino', 'Victor Rivera'],
    rivals: ['Bruno Sammartino (after heel turn)'],
  },
  1139: { // Waldo Von Erich
    alternateNames: ['Prussian Menace'],
    allies: ['Professor Toru Tanaka'],
    rivals: ['Bruno Sammartino', 'Pedro Morales'],
  },
  1142: { // Victor Rivera
    alternateNames: [],
    allies: ['Spiros Arion', 'Bruno Sammartino'],
    rivals: ['The Valiant Brothers'],
  },
  1143: { // King Curtis Iaukea
    alternateNames: ['Polynesian Monarch'],
    allies: ['Baron Mikel Scicluna'],
    rivals: ['Pedro Morales', 'Bruno Sammartino'],
  },
  1144: { // The Executioners
    alternateNames: ['Masked Villains'],
    allies: [],
    rivals: ['Tony Garea', 'Larry Zbyszko'],
  
    managers: ['Captain Lou Albano'],
},
  1145: { // Johnny Rodz
    alternateNames: ['The Unpredictable One'],
    allies: [],
    rivals: ['Bruno Sammartino', 'Pedro Morales', 'Tony Garea'],
  },
  1149: { // The Sheik
    alternateNames: ['The Original Sheik', 'Ed Farhat'],
    allies: [],
    rivals: ['Bruno Sammartino', 'Bobo Brazil'],
  },
  1150: { // Ox Baker
    alternateNames: ['Heart Punch Villain'],
    allies: [],
    rivals: ['Bruno Sammartino', "André the Giant"],
  },
  1151: { // Sam Houston
    alternateNames: ['Cowboy'],
    allies: [],
    rivals: ['Danny Davis'],
  },
  1154: { // Dominic DeNucci
    alternateNames: ['Italian Babyface'],
    allies: ['Dino Bravo'],
    rivals: ['Mr. Fuji & Mr. Saito'],
  },
  1155: { // Frenchy Martin
    alternateNames: [],
    allies: ['Dino Bravo (managed)'],
    rivals: ['Hulk Hogan', 'Jim Duggan'],
  },
  1156: { // Tama (Islanders)
    alternateNames: ['Tama'],
    allies: ['Haku (Islanders)'],
    rivals: ['British Bulldogs', 'The Killer Bees'],
  
    managers: ['Bobby Heenan'],
},
  1157: { // Tiger Chung Lee
    alternateNames: [],
    allies: [],
    rivals: ['Tito Santana', 'Pedro Morales'],
  
    managers: ['Freddie Blassie'],
},
  1158: { // Sivi Afi
    alternateNames: ['Superfly Protege'],
    allies: ['Jimmy Snuka'],
    rivals: ['Nikolai Volkoff'],
  },
  1159: { // Cousin Luke
    alternateNames: [],
    allies: ['Hillbilly Jim', 'Uncle Elmer'],
    rivals: ['The Funk Brothers'],
  },
  1160: { // Uncle Elmer
    alternateNames: ['Plowboy Frazier'],
    allies: ['Hillbilly Jim', 'Cousin Luke'],
    rivals: ['King Kong Bundy'],
  },
  1162: { // Moondog Rex
    alternateNames: ['Caveman'],
    allies: ['Moondog King', 'Moondog Spot'],
    rivals: ['Tony Garea', 'Rick Martel', 'The Wild Samoans'],
  
    managers: ['Captain Lou Albano'],
},
  1163: { // Moondog Spot
    alternateNames: ['Caveman'],
    allies: ['Moondog Rex'],
    rivals: ['Tony Garea', 'Rick Martel'],
  },
  1164: { // Pat Tanaka
    alternateNames: ['Orient Express', 'Badd Company'],
    allies: ['Akio Sato (Orient Express)', 'Paul Diamond (Badd Company)'],
    rivals: ['The Rockers', 'The Hart Foundation'],
  
    managers: ['Mr. Fuji'],
},
  1165: { // Johnny Valiant
    alternateNames: ['Luscious Johnny V'],
    allies: ['Jimmy Valiant (brother)', "Greg Valentine"],
    rivals: ['Tony Garea', 'Chief Jay Strongbow'],
  },
  1166: { // Jimmy Valiant
    alternateNames: ['Handsome Jimmy', 'The Boogie Woogie Man'],
    allies: ['Johnny Valiant (brother)'],
    rivals: ['Tony Garea', 'Chief Jay Strongbow'],
  },
  1167: { // John Studd
    alternateNames: ['Big John Studd'],
    allies: ['King Kong Bundy'],
    rivals: ["André the Giant", 'Hulk Hogan'],
  
    managers: ['Bobby Heenan'],
},
  1168: { // David Sammartino
    alternateNames: ['Bruno\'s Son'],
    allies: ['Bruno Sammartino (father)'],
    rivals: ['Brutus Beefcake', 'Johnny Valiant'],
  },
  1169: { // Lord Alfred Hayes
    alternateNames: ['British Commentator'],
    allies: ['Gorilla Monsoon (broadcast)'],
    rivals: [],
  },
  1171: { // Pete Rose
    alternateNames: ['Charlie Hustle'],
    allies: [],
    rivals: ['Kane'],
  },
  1172: { // Terry Taylor
    alternateNames: ['The Red Rooster'],
    allies: ['Bobby Heenan (briefly)'],
    rivals: ['Bobby Heenan', 'Mr. Perfect'],
  },
  1173: { // Killer Khan
    alternateNames: ['Mongolian Monster'],
    allies: [],
    rivals: ["André the Giant", 'Hulk Hogan'],
  
    managers: ['Freddie Blassie'],
},
  1175: { // Salvatore Bellomo
    alternateNames: [],
    allies: ['Tony Garea'],
    rivals: ['Iron Sheik', 'Nikolai Volkoff'],
  },
  1176: { // Jose Luis Rivera
    alternateNames: [],
    allies: ['Tony Garea (tag partner)', 'Tito Santana'],
    rivals: ['The Wild Samoans', 'Iron Sheik'],
  },
  1177: { // Rick McGraw
    alternateNames: ['Quick Draw McGraw'],
    allies: ['Tony Garea'],
    rivals: ['Larry Zbyszko', 'Greg Valentine'],
  },
  1178: { // Antonino Rocca
    alternateNames: ['The Original High Flyer'],
    allies: ['Miguel Perez'],
    rivals: [],
  },
  1179: { // Giant Baba
    alternateNames: ['Shohei Baba'],
    allies: [],
    rivals: ['The Destroyer', 'The Sheik'],
  },
  1180: { // Tatsumi Fujinami
    alternateNames: ['The Dragon'],
    allies: [],
    rivals: ['Dynamite Kid', 'Tiger Mask'],
  },
  1181: { // Crusher Blackwell
    alternateNames: ['Jerry Blackwell'],
    allies: [],
    rivals: ['Hulk Hogan'],
  },
  1182: { // Larry Hennig
    alternateNames: ['Larry The Axe Hennig'],
    allies: ['Harley Race'],
    rivals: ['Verne Gagne', 'Nick Bockwinkel'],
  },
  1183: { // Buddy Rose
    alternateNames: ['Playboy Buddy Rose'],
    allies: [],
    rivals: ['Roddy Piper'],
  },
  1184: { // Tony Altimore
    alternateNames: [],
    allies: ['Louis Cerdan'],
    rivals: [],
  },
  1186: { // Billy White Wolf
    alternateNames: ['General Adnan', 'Adnan Al-Kaissie'],
    allies: ['Chief Jay Strongbow', 'Sgt. Slaughter (as General Adnan)'],
    rivals: ['Hulk Hogan (as General Adnan)', 'Ultimate Warrior'],
  },
  1187: { // Rene Goulet
    alternateNames: ['The Iron Claw'],
    allies: ['Karl Gotch'],
    rivals: ['Pedro Morales'],
  },
  1188: { // Karl Gotch
    alternateNames: ['God of Wrestling'],
    allies: ['Rene Goulet'],
    rivals: ['Bruno Sammartino'],
  },
  1189: { // The Mongols
    alternateNames: ['Bepo Mongol & Geto Mongol'],
    allies: [],
    rivals: ['Bruno Sammartino'],
  
    managers: ['Captain Lou Albano'],
},
  1190: { // Moondog King
    alternateNames: [],
    allies: ['Moondog Rex'],
    rivals: ['Tony Garea', 'Rick Martel'],
  },
  1191: { // Lou Thesz
    alternateNames: ['The Thesz Press', 'Six-Time NWA Champion'],
    allies: [],
    rivals: ['Buddy Rogers', 'Gorgeous George'],
  },

  // ── NEW GENERATION ERA ADDITIONS ─────────────────────────────────
  1192: { // The Goon
    alternateNames: ['Bill Irwin'],
    allies: [],
    rivals: ['Jake Roberts', 'Undertaker'],
  },
  1193: { // TL Hopper
    alternateNames: ['Tony Anthony', 'Dirty White Boy'],
    allies: [],
    rivals: ['Aldo Montoya', 'Jake Roberts'],
  },
  1194: { // Salvatore Sincere
    alternateNames: ['Tom Brandi'],
    allies: [],
    rivals: ['Savio Vega', 'Barry Horowitz'],
  },
  1195: { // Freddie Joe Floyd
    alternateNames: ['Tracy Smothers'],
    allies: [],
    rivals: ['Hunter Hearst Helmsley', 'Leif Cassidy'],
  },
  1196: { // Ludvig Borga
    alternateNames: ['Tony Halme'],
    allies: [],
    rivals: ['Lex Luger', 'Tatanka'],
  },
  1197: { // Jonathan Coachman
    alternateNames: ['The Coach'],
    allies: ['Eric Bischoff'],
    rivals: ['Stone Cold Steve Austin', 'Jerry Lawler'],
  },
  1198: { // Tori
    alternateNames: ['Terri Poch'],
    allies: ['Kane (storyline)'],
    rivals: ['Sable', 'Ivory'],
  },
  1200: { // The Blue Meanie
    alternateNames: ['Brian Heffron', 'Bluedust'],
    allies: ['Stevie Richards (bWo)', 'Nova (bWo)'],
    rivals: ['JBL'],
  },
  1201: { // Kurrgan
    alternateNames: ['The Interrogator', 'Robert Maillet', "The Oddities", "The Truth Commission"],
    allies: ['The Truth Commission'],
    rivals: [],
  },
  1202: { // Shawn Stasiak
    alternateNames: ['Meat'],
    allies: ['Pretty Mean Sisters (PMS)'],
    rivals: [],
  },
  1203: { // Dr. Death Steve Williams
    alternateNames: ['Dr. Death'],
    allies: ['Terry Gordy (Miracle Violence Connection)'],
    rivals: ['Bart Gunn (Brawl for All)'],
  },
  1205: { // Skip
    alternateNames: ['Chris Candido', 'Bodydonna Skip', 'The Bodydonna', "The Bodydonnas"],
    allies: ['Zip (Bodydonnas)', 'Tammy Lynn Sytch'],
    rivals: ['The Godwinns', 'The Smoking Gunns'],
  
    managers: ['Sunny'],
},
  1206: { // Zip
    alternateNames: ['Tom Prichard', 'The Bodydonna', 'Heavenly Bodies'],
    allies: ['Skip (Bodydonnas)', 'Jimmy Del Ray (Heavenly Bodies)'],
    rivals: ['The Godwinns', 'The Smoking Gunns'],
  
    managers: ['Sunny'],
},

  // ── ATTITUDE ERA ADDITIONS ───────────────────────────────────────
  1209: { // D-Von Dudley
    alternateNames: ['Reverend D-Von', 'Testify!'],
    allies: ['Bubba Ray Dudley', 'Spike Dudley', 'Batista (Deacon)'],
    rivals: ['The Hardy Boyz', 'Edge & Christian', "APA"],
  },
  1210: { // Bubba Ray Dudley
    alternateNames: ['Bully Ray', 'Brother Ray', 'Get the Tables!'],
    allies: ['D-Von Dudley', 'Spike Dudley'],
    rivals: ['The Hardy Boyz', 'Edge & Christian', "APA", 'Stacy Keibler'],
  },
  1211: { // Headbanger Mosh
    alternateNames: ['Beaver Cleavage', 'Charles Warrington'],
    allies: ['Headbanger Thrasher'],
    rivals: ['The Godwinns'],
  },
  1212: { // Headbanger Thrasher
    alternateNames: ['Glenn Ruth'],
    allies: ['Headbanger Mosh'],
    rivals: ['The Godwinns'],
  },
  1213: { // Giant Silva
    alternateNames: ['The Oddities Giant'],
    allies: ['The Oddities (Kurrgan, Golga, Luna Vachon)'],
    rivals: ['The Jackyl'],
  },
  1214: { // Pete Gas
    alternateNames: ['Mean Street Posse'],
    allies: ['Shane McMahon', 'Rodney', 'Joey Abs'],
    rivals: ['Mankind', 'Test'],
  },
  1215: { // Rodney
    alternateNames: ['Mean Street Posse'],
    allies: ['Shane McMahon', 'Pete Gas', 'Joey Abs'],
    rivals: ['Test'],
  },
  1216: { // Joey Abs
    alternateNames: ['Mean Street Posse'],
    allies: ['Shane McMahon', 'Pete Gas', 'Rodney'],
    rivals: ['Test'],
  },
  1217: { // Chainz
    alternateNames: ['Brian Lee', 'Disciples of Apocalypse'],
    allies: ['DOA (8-Ball, Skull, Crush)'],
    rivals: ['Nation of Domination', 'Los Boricuas'],
  },
  1218: { // 8-Ball
    alternateNames: ['Don Harris', 'Harris Brothers', 'Blu Brothers'],
    allies: ['Skull (twin brother)', 'DOA (Chainz, Crush)'],
    rivals: ['Nation of Domination', 'Los Boricuas'],
  },
  1219: { // Skull
    alternateNames: ['Ron Harris', 'Harris Brothers', 'Blu Brothers'],
    allies: ['8-Ball (twin brother)', 'DOA (Chainz, Crush)'],
    rivals: ['Nation of Domination', 'Los Boricuas'],
  },

  // ── RUTHLESS AGGRESSION ERA ADDITIONS ─────────────────────────────
  1221: { // Matt Morgan
    alternateNames: ['The Blueprint'],
    allies: ['Brock Lesnar (briefly)'],
    rivals: [],
  },
  1222: { // Rob Conway
    alternateNames: ['The Con-Man', 'La Resistance'],
    allies: ['Sylvain Grenier (La Resistance)', 'René Duprée (La Resistance)'],
    rivals: ['The Dudley Boyz', "Hurricane Helms & Rosey"],
  },
  1223: { // Rico
    alternateNames: ['Rico Constantino', 'Flamboyant Stylist'],
    allies: ["Billy Gunn", 'Charlie Haas'],
    rivals: ['La Resistance'],
  },
  1224: { // Marcus Cor Von
    alternateNames: ['Monty Brown', 'The Alpha Male'],
    allies: ['The New Breed (Elijah Burke, Matt Striker, Kevin Thorn)'],
    rivals: ['Bobby Lashley', 'CM Punk', 'Tommy Dreamer'],
  },
  1225: { // Matt Striker
    alternateNames: ['Teacher Turned Wrestler'],
    allies: ['The New Breed (Marcus Cor Von, Elijah Burke)'],
    rivals: ['Balls Mahoney', 'Sandman'],
  },
  1226: { // Mike Knox
    alternateNames: [],
    allies: ['Kelly Kelly (storyline)'],
    rivals: ['Rey Mysterio', 'Finlay'],
  },
  1227: { // Psicosis
    alternateNames: ['Nicho el Millonario'],
    allies: ['Super Crazy (Mexicools)', 'Juventud Guerrera (Mexicools)'],
    rivals: ['Rey Mysterio', 'The FBI'],
  },
  1228: { // Juventud Guerrera
    alternateNames: ['Juvi', 'The Juice'],
    allies: ['Psicosis (Mexicools)', 'Super Crazy (Mexicools)'],
    rivals: ['Rey Mysterio', 'Billy Kidman'],
  },
  1229: { // Katie Lea Burchill
    alternateNames: ['Winter (TNA)'],
    allies: ['Paul Burchill (on-screen brother)'],
    rivals: ['Mickie James', 'Kelly Kelly'],
  },
  1230: { // Danny Basham
    alternateNames: ['Basham Brothers'],
    allies: ['Doug Basham'],
    rivals: ['Los Guerreros', 'Rey Mysterio & Rob Van Dam'],
  
    managers: ['Shaniqua'],
},
  1231: { // Doug Basham
    alternateNames: ['Basham Brothers'],
    allies: ['Danny Basham'],
    rivals: ['Los Guerreros', 'Rey Mysterio & Rob Van Dam'],
  
    managers: ['Shaniqua'],
},
  1232: { // Rodney Mack
    alternateNames: ['Five Minute White Boy Challenge'],
    allies: ['Jazz (wife)'],
    rivals: ['Goldust', 'Lance Storm'],
  
    managers: ['Theodore Long'],
},
  1234: { // Jesse
    alternateNames: ['Rycklon Stephens'],
    allies: ['Festus (tag partner)'],
    rivals: ["The Miz & John Morrison"],
  },
  1235: { // Jimmy Wang Yang
    alternateNames: ['Asian Redneck', "Akio"],
    allies: ['Shannon Moore'],
    rivals: ["Chavo Guerrero Jr.", 'Jamie Noble'],
  },
  1236: { // Shannon Moore
    alternateNames: ['Mattitude Follower', 'MF-er'],
    allies: ["Matt Hardy", 'Jimmy Wang Yang'],
    rivals: ["Chavo Guerrero Jr."],
  },
  1238: { // Vito
    alternateNames: ['Big Vito', 'Vito LoGrasso'],
    allies: ['Johnny the Bull (Mamalukes)'],
    rivals: [],
  },
  1239: { // David Otunga
    alternateNames: ['Legal Analyst'],
    allies: ['Nexus', 'John Cena (forced tag partner)'],
    rivals: ['John Cena'],
  },
  1240: { // Michael Tarver
    alternateNames: ['Nexus Enforcer'],
    allies: ['Nexus'],
    rivals: ['John Cena'],
  },
  1241: { // Justin Gabriel
    alternateNames: ['PJ Black', '450 Splash Specialist'],
    allies: ['Nexus', 'Heath Slater (tag partner)'],
    rivals: ['John Cena'],
  },
  1242: { // Alex Riley
    alternateNames: ['The Miz\'s Apprentice', 'A-Ri'],
    allies: ['The Miz (mentor)'],
    rivals: ['The Miz'],
  },
  1243: { // Kaval
    alternateNames: ['Low Ki'],
    allies: ['LayCool (NXT mentors)'],
    rivals: [],
  },
  1245: { // Nathan Jones
    alternateNames: ['Australian Giant'],
    allies: ['Undertaker'],
    rivals: ['Big Show'],
  },
  1246: { // Sean O'Haire
    alternateNames: ["The Devil's Advocate"],
    allies: ['Chuck Palumbo (WCW tag partner)', 'Roddy Piper (briefly)'],
    rivals: [],
  },
  1247: { // Armando Estrada
    alternateNames: ['Armando Alejandro Estrada'],
    allies: ['Umaga (managed)'],
    rivals: ['John Cena', 'Bobby Lashley'],
  },
  1248: { // Sylvester Terkay
    alternateNames: [],
    allies: ['Elijah Burke'],
    rivals: [],
  },

  // ── PG ERA ADDITIONS ─────────────────────────────────────────────
  1251: { // Percy Watson
    alternateNames: ['Oh Yeah!'],
    allies: ['Showtime Percy Watson'],
    rivals: ['Alex Riley', 'Darren Young'],
  },
  1252: { // Lucky Cannon
    alternateNames: [],
    allies: ['Mark Henry (NXT pro)'],
    rivals: ['Tyler Reks', 'Derrick Bateman'],
  },
  1253: { // Byron Saxton
    alternateNames: ['NXT Commentator'],
    allies: ['Michael Cole (commentary team)'],
    rivals: ['Corey Graves (commentary banter)'],
  },
  1254: { // Mason Ryan
    alternateNames: ['Batista 2.0'],
    allies: ["Nexus / Wade Barrett's Army", 'CM Punk (New Nexus leader)'],
    rivals: [],
  },
  1255: { // Tyler Reks
    alternateNames: ['Gabbi Tuft'],
    allies: ['Curt Hawkins (tag partner)'],
    rivals: [],
  },
  1257: { // Hunico
    alternateNames: ['Sin Cara Negro'],
    allies: ['Camacho'],
    rivals: ['Sin Cara'],
  },
  1258: { // Scotty Goldman
    alternateNames: ['Colt Cabana'],
    allies: ['CM Punk (friend)'],
    rivals: [],
  },
  1259: { // Trent Barreta
    alternateNames: ['Trent Beretta', 'Trent?'],
    allies: ['Caylen Croft (Dude Busters)'],
    rivals: [],
  },
  1260: { // Caylen Croft
    alternateNames: [],
    allies: ['Trent Barreta (Dude Busters)'],
    rivals: [],
  },
  1261: { // Manu
    alternateNames: ['Matt Anoa\'i'],
    allies: ['Randy Orton (Legacy, briefly)', 'Cody Rhodes', 'Ted DiBiase Jr.'],
    rivals: [],
  },
  1262: { // Sim Snuka
    alternateNames: ['Deuce'],
    allies: ['Domino (Deuce & Domino)'],
    rivals: ["Batista", "Paul London & Brian Kendrick"],
  
    managers: ['Cherry'],
},
  1263: { // Richie Steamboat
    alternateNames: ['Richard Blood Jr.'],
    allies: ['Ricky Steamboat (father)'],
    rivals: ['Leo Kruger', 'Kassius Ohno'],
  },
  1264: { // Rosa Mendes
    alternateNames: ['Milena Roucka'],
    allies: ['Primo & Epico (managed)'],
    rivals: [],
  },

  // ── REALITY & MODERN ERA ADDITIONS ────────────────────────────────
  1265: { // TJP
    alternateNames: ['TJ Perkins', 'Cruiserweight Classic Champion'],
    allies: [],
    rivals: ['Rich Swann', 'Neville', 'Brian Kendrick'],
  },
  1266: { // Tony Nese
    alternateNames: ['The Premier Athlete'],
    allies: [],
    rivals: ['Buddy Murphy', 'Cedric Alexander'],
  },
  1267: { // Akira Tozawa
    alternateNames: ['Ah Ah Ah!'],
    allies: ['Titus Worldwide (Titus O\'Neil, Apollo Crews)'],
    rivals: ['Neville', 'R-Truth (24/7 title)'],
  },
  1268: { // Jack Gallagher
    alternateNames: ['Gentleman Jack'],
    allies: [],
    rivals: ['Hideo Itami', 'Cedric Alexander'],
  },
  1269: { // Ariya Daivari
    alternateNames: ['The Persian Lion'],
    allies: ['Shawn Daivari (brother)'],
    rivals: ['Cedric Alexander', 'Mustafa Ali'],
  },
  1270: { // Rich Swann
    alternateNames: ["Can't Hold Us Down"],
    allies: [],
    rivals: ['TJ Perkins', 'Neville', 'Brian Kendrick'],
  },
  1271: { // Bobby Fish
    alternateNames: ['reDRagon'],
    allies: ['Kyle O\'Reilly (reDRagon)', 'Adam Cole (Undisputed Era)', 'Roderick Strong (Undisputed Era)'],
    rivals: ['War Raiders', 'Moustache Mountain'],
  },
  1272: { // KUSHIDA
    alternateNames: ['Time Splitter', 'Kushida'],
    allies: [],
    rivals: ['Roderick Strong', 'Carmelo Hayes'],
  },
  1273: { // Pat McAfee
    alternateNames: ['NFL Punter'],
    allies: [],
    rivals: ['Adam Cole', 'Austin Theory', 'Vince McMahon'],
  },
  1274: { // Robert Stone
    alternateNames: ['Robbie E'],
    allies: ['Von Wagner (managed)', 'Mercedes Martinez (managed)'],
    rivals: [],
  },
  1275: { // Enzo Amore
    alternateNames: ['Certified G', 'nZo', 'How You Doin'],
    allies: ['Big Cass'],
    rivals: ['The Revival', "Rusev", 'Neville'],
  },
  1276: { // Big Cass
    alternateNames: ['W. Morrissey', 'Colin Cassady'],
    allies: ["Enzo Amore & Big Cass"],
    rivals: ['Daniel Bryan', 'Big Show'],
  },
  1277: { // Von Wagner
    alternateNames: [],
    allies: [],
    rivals: ['Bron Breakker'],
  
    managers: ['Robert Stone'],
},
  1281: { // Sanga
    alternateNames: ['Saurav Gurjar'],
    allies: ['Veer Mahaan (Indus Sher)'],
    rivals: [],
  },
  1282: { // Ikemen Jiro
    alternateNames: ['The Jacket Artist'],
    allies: ['Kushida'],
    rivals: ['Grayson Waller', 'Duke Hudson'],
  },
  1283: { // Boa
    alternateNames: ['Tian Bing'],
    allies: ['Mei Ying'],
    rivals: [],
  },
  1284: { // Xyon Quinn
    alternateNames: ['Daniel Vidot'],
    allies: [],
    rivals: ['Sanga', 'Andre Chase'],
  },
  1285: { // Edris Enofe
    alternateNames: [],
    allies: ['Malik Blade (tag partner)'],
    rivals: ['The Dyad', 'Pretty Deadly'],
  },
  1286: { // Malik Blade
    alternateNames: [],
    allies: ['Edris Enofe (tag partner)'],
    rivals: ['The Dyad', 'Pretty Deadly'],
  },
  1287: { // Odyssey Jones
    alternateNames: [],
    allies: [],
    rivals: ['Von Wagner', 'Andre Chase'],
  },
  1288: { // Dante Chen
    alternateNames: ['Singapore Sensation'],
    allies: [],
    rivals: ['Javier Bernal', 'Charlie Dempsey'],
  },
  1289: { // Channing Lorenzo
    alternateNames: [],
    allies: ['Tony D\'Angelo (D\'Angelo Family)', 'Luca Crusifino', 'Adrianna Reese'],
    rivals: ['Chase University'],
  },
  1290: { // Luca Crusifino
    alternateNames: [],
    allies: ['Tony D\'Angelo (D\'Angelo Family)', 'Channing Lorenzo', 'Adrianna Reese'],
    rivals: ['Chase University'],
  },
  1291: { // Adrianna Reese
    alternateNames: [],
    allies: ['Tony D\'Angelo (D\'Angelo Family)', 'Channing Lorenzo', 'Luca Crusifino'],
    rivals: [],
  },
  1292: { // Brooks Jensen
    alternateNames: [],
    allies: ['Josh Briggs (tag partner)', 'Fallon Henley'],
    rivals: ['Pretty Deadly'],
  },
  1293: { // Josh Briggs
    alternateNames: [],
    allies: ['Brooks Jensen (tag partner)', 'Fallon Henley'],
    rivals: ['Pretty Deadly'],
  },
  1295: { // Jagger Reid
    alternateNames: ['The Dyad'],
    allies: ['Rip Fowler (Dyad)', 'Joe Gacy (Schism)'],
    rivals: ['Chase University', "Edris Enofe"],
  },
  1296: { // Rip Fowler
    alternateNames: ['The Dyad'],
    allies: ['Jagger Reid (Dyad)', 'Joe Gacy (Schism)'],
    rivals: ['Chase University'],
  },
  1297: { // Joe Gacy
    alternateNames: ['Schism Leader', 'Schism'],
    allies: ['The Dyad (Jagger Reid, Rip Fowler)', 'Ava'],
    rivals: ['Bron Breakker', 'Chase University'],
  },
  1299: { // Brinley Reece
    alternateNames: [],
    allies: [],
    rivals: ['Lash Legend', 'Tiffany Stratton'],
  },
  1300: { // Wren Sinclair
    alternateNames: [],
    allies: ['Charlie Dempsey (No Quarter Catch Crew)', 'Myles Borne', 'Tavion Heights'],
    rivals: [],
  },
  1301: { // Tavion Heights
    alternateNames: [],
    allies: ['Charlie Dempsey (No Quarter Catch Crew)', 'Myles Borne', 'Wren Sinclair'],
    rivals: [],
  },
  1302: { // Tyriek Igwe
    alternateNames: [],
    allies: ['Tyson Dupont (tag partner)'],
    rivals: [],
  },
  1303: { // Tyson Dupont
    alternateNames: [],
    allies: ['Tyriek Igwe (tag partner)'],
    rivals: [],
  },
  1304: { // Shawn Spears
    alternateNames: ['Tye Dillinger', 'The Perfect 10', 'Gavin Spears'],
    allies: ['Sim Snuka (Deuce & Domino)'],
    rivals: ['Bobby Roode'],
  },
  1309: { // Joaquin Wilde
    alternateNames: ['DJ Zema Ion'],
    allies: ['Santos Escobar (Legado Del Fantasma)', 'Cruz Del Toro', 'Zelina Vega'],
    rivals: ['Hit Row', 'The Street Profits'],
  },
  1310: { // Cruz Del Toro
    alternateNames: ['Raul Mendoza'],
    allies: ['Santos Escobar (Legado Del Fantasma)', 'Joaquin Wilde', 'Zelina Vega'],
    rivals: ['Hit Row', 'The Street Profits'],
  },
  1311: { // Scrypts
    alternateNames: ['Reggie', '24/7 Champion'],
    allies: ['Carmella (storyline)'],
    rivals: ['R-Truth (24/7 title)', 'Dana Brooke'],
  },
  1312: { // Guru Raaj
    alternateNames: [],
    allies: ['Sanga'],
    rivals: ['Grayson Waller'],
  },
  1314: { // Valentina Feroz
    alternateNames: [],
    allies: ['Yulisa Leon (tag partner)'],
    rivals: [],
  },
  1315: { // Yulisa Leon
    alternateNames: [],
    allies: ['Valentina Feroz (tag partner)'],
    rivals: [],
  },
  1317: { // Donovan Dijak
    alternateNames: ['Dijak', 'T-Bar', 'Dominik Dijakovic', 'Feast Your Eyes'],
    allies: ["T-BAR"],
    rivals: ['Keith Lee', 'Ilja Dragunov'],
  },
  1318: { // Mace
    alternateNames: ['Dio Maddin'],
    allies: ['Retribution'],
    rivals: [],
  },
  1319: { // Slapjack
    alternateNames: ['Shane Thorne', 'TM-61', 'The Mighty'],
    allies: ['Nick Miller (TM-61)'],
    rivals: [],
  },
  1322: { // Deuce
    alternateNames: ['James Reiher'],
    allies: ['Domino (Deuce & Domino)'],
    rivals: ["Paul London & Brian Kendrick", "Batista"],
  
    managers: ['Cherry'],
},
  1323: { // Domino
    alternateNames: ['Cliff Compton'],
    allies: ['Deuce (Deuce & Domino)'],
    rivals: ["Paul London & Brian Kendrick", "Batista"],
  
    managers: ['Cherry'],
},
  1324: { // Reno
    alternateNames: ['Natural Born Thrillers'],
    allies: ['Natural Born Thrillers (Sean O\'Haire, Chuck Palumbo, Mark Jindrak)'],
    rivals: [],
  },
  1336: { // B-Fab
    alternateNames: ['Briana Brandy'],
    allies: ['Hit Row (Top Dolla, Ashante Adonis, Swerve Strickland)'],
    rivals: [],
  },
  1337: { // Top Dolla
    alternateNames: ['AJ Francis'],
    allies: ['Hit Row (B-Fab, Ashante Adonis, Swerve Strickland)'],
    rivals: ['Pretty Deadly'],
  },
  1338: { // Ashante Adonis
    alternateNames: ['Tehuti Miles'],
    allies: ['Hit Row (Top Dolla, B-Fab, Swerve Strickland)'],
    rivals: ['Pretty Deadly'],
  },
  1343: { // Mr. T
    alternateNames: ['Clubber Lang'],
    allies: ['Hulk Hogan'],
    rivals: ['Roddy Piper', 'Paul Orndorff'],
  },
  1345: { // Bad Bunny
    alternateNames: ['Benito'],
    allies: ['Damian Priest'],
    rivals: ['The Miz', 'John Morrison'],
  },
  1346: { // Lawrence Taylor
    alternateNames: ['LT'],
    allies: [],
    rivals: ['Bam Bam Bigelow'],
  },
  1347: { // Floyd Mayweather
    alternateNames: ['Money Mayweather', 'Floyd Money Mayweather'],
    allies: [],
    rivals: ['Big Show'],
  },
  1348: { // Tyson Fury
    alternateNames: ['The Gypsy King'],
    allies: [],
    rivals: ['Braun Strowman'],
  },
  1349: { // Cain Velasquez
    alternateNames: [],
    allies: ['Rey Mysterio'],
    rivals: ['Brock Lesnar'],
  },
  1350: { // Drew Carey
    alternateNames: [],
    allies: [],
    rivals: ['Kane (Royal Rumble)'],
  },
  1351: { // No Way Jose
    alternateNames: ['Conga Line'],
    allies: [],
    rivals: ['Baron Corbin', 'Jinder Mahal'],
  },
  1352: { // Kassius Ohno
    alternateNames: ['Chris Hero', 'Kings of Wrestling'],
    allies: ['Cesaro (Kings of Wrestling)'],
    rivals: ['Hideo Itami', 'Velveteen Dream'],
  },
  1353: { // Mordecai
    alternateNames: ['Kevin Thorn', 'Kevin Fertig'],
    allies: [],
    rivals: ['Scotty 2 Hotty', 'Hardcore Holly'],
  },
  1356: { // Jimmy Uso
    alternateNames: ['Right Hand Man', 'Uce'],
    allies: ['Jey Uso (brother)', 'Roman Reigns (Bloodline)', 'Naomi (wife)'],
    rivals: ['The New Day', 'The Street Profits', 'Sami Zayn', 'Kevin Owens'],
  },
  1357: { // Xavier Woods
    alternateNames: ['Consequences Creed', 'King Woods', 'UpUpDownDown'],
    allies: ['Big E (New Day)', 'Kofi Kingston (New Day)'],
    rivals: ['The Usos', 'The Viking Raiders', 'Sheamus'],
  },
  1358: { // Alex Shelley
    alternateNames: ['Motor City Machine Guns'],
    allies: ['Chris Sabin (MCMG)'],
    rivals: ['The Usos', 'Pretty Deadly'],
  },
  1359: { // Chris Sabin
    alternateNames: ['Motor City Machine Guns'],
    allies: ['Alex Shelley (MCMG)'],
    rivals: ['The Usos', 'Pretty Deadly'],
  },
  1360: { // Nick Aldis
    alternateNames: ['Magnus', 'NWA Champion'],
    allies: ['Michael Hayes'],
    rivals: ['Cody Rhodes', 'Tim Storm'],
  },
  1362: { // El Torito
    alternateNames: ['Mascarita Dorada'],
    allies: ['Los Matadores (Primo & Epico)'],
    rivals: ['Hornswoggle'],
  },
  1363: { // Shanky
    alternateNames: ['Dilsher Shanky'],
    allies: ['Jinder Mahal'],
    rivals: [],
  },
  1364: { // Reggie
    alternateNames: ['Scrypts', 'Olivier Rouget'],
    allies: ['Carmella (storyline)'],
    rivals: ['R-Truth (24/7 title)', 'Dana Brooke (24/7 title)'],
  },
  1365: { // Great Muta
    alternateNames: ['Keiji Mutoh', 'Green Mist Master'],
    allies: [],
    rivals: ['Sting', 'Ric Flair'],
  },
  1366: { // Jushin Thunder Liger
    alternateNames: ['Keiichi Yamada'],
    allies: [],
    rivals: ['Tyler Breeze (NXT farewell)'],
  },
  1367: { // Steve Corino
    alternateNames: ['King of Old School'],
    allies: [],
    rivals: ['Dusty Rhodes', 'Jerry Lynn'],
  },
  1368: { // CW Anderson
    alternateNames: ['Carl Anderson'],
    allies: [],
    rivals: ['Tommy Dreamer'],
  },
  1369: { // Aiden English
    alternateNames: ['Matthew Rehwoldt', 'The Vaudevillains', 'The Artiste'],
    allies: ['Simon Gotch (Vaudevillains)', 'Rusev (Rusev Day singer)'],
    rivals: ['Rusev (feud over Lana)', 'Shinsuke Nakamura'],
  },
  1370: { // Simon Gotch
    alternateNames: ['Ryan Parmeter', 'The Vaudevillains'],
    allies: ['Aiden English (Vaudevillains)'],
    rivals: ['Enzo Amore & Big Cass', 'American Alpha'],
  },
  1371: { // Jordan Devlin
    alternateNames: ['JD McDonagh', 'The Irish Ace'],
    allies: ["Finn Bálor", 'Judgment Day (Damian Priest, Rhea Ripley)'],
    rivals: ['WALTER', 'Ilja Dragunov'],
  },
  1372: { // T-BAR
    alternateNames: ['Dominik Dijakovic', 'Dijak'],
    allies: ['Retribution'],
    rivals: ['Keith Lee', 'Ilja Dragunov'],
  },
  1373: { // Snooki
    alternateNames: ['Nicole LaValle'],
    allies: ['Trish Stratus', 'John Morrison'],
    rivals: ['LayCool', 'Dolph Ziggler'],
  },
  1374: { // Johnny Knoxville
    alternateNames: ['Jackass Star'],
    allies: [],
    rivals: ['Sami Zayn'],
  },
  1375: { // Rob Gronkowski
    alternateNames: ['Gronk'],
    allies: ['Mojo Rawley'],
    rivals: [],
  },
  1376: { // Shane Thorne
    alternateNames: ['TM-61', 'The Mighty', 'TMDK', 'Slapjack'],
    allies: ['Nick Miller (TM-61/The Mighty)'],
    rivals: ['Undisputed Era'],
  },
  1377: { // Nick Miller
    alternateNames: ['TM-61', 'The Mighty'],
    allies: ['Shane Thorne (TM-61/The Mighty)'],
    rivals: ['Undisputed Era'],
  },
  1378: { // Arturo Ruas
    alternateNames: ['Thiago Oliveira'],
    allies: ['Thatcher (tag partner)'],
    rivals: ['Kushida', 'Danny Burch'],
  },
  1379: { // Bushwhacker Luke
    alternateNames: ['Luke Williams', 'The Sheepherders'],
    allies: ['Bushwhacker Butch'],
    rivals: ['The Beverly Brothers', 'The Nasty Boys'],
  },
  1380: { // Bushwhacker Butch
    alternateNames: ['Robert Miller', 'The Sheepherders'],
    allies: ['Bushwhacker Luke'],
    rivals: ['The Beverly Brothers', 'The Nasty Boys'],
  },
  1381: { // Hawk
    alternateNames: ['Road Warrior Hawk', 'Legion of Doom'],
    allies: ['Animal (Road Warriors)'],
    rivals: ['Demolition', 'The Nasty Boys', 'Money Inc.'],
  
    managers: ['Paul Ellering'],
},
  1382: { // Animal
    alternateNames: ['Road Warrior Animal', 'Legion of Doom'],
    allies: ['Hawk (Road Warriors)', 'Heidenreich (LOD 2005)'],
    rivals: ['Demolition', 'The Nasty Boys', 'Money Inc.'],
  
    managers: ['Paul Ellering'],
},
  1383: { // Joey Mercury
    alternateNames: ['Adam Birch', 'MNM'],
    allies: ['Johnny Nitro (MNM)', 'Melina (MNM)'],
    rivals: ['The Hardy Boyz', "Paul London & Brian Kendrick"],
  },
  1384: { // Epico Colon
    alternateNames: ['Fernando', 'Los Matadores'],
    allies: ['Primo (tag partner)'],
    rivals: ['The Usos'],
  
    managers: ['Rosa Mendes'],
},
  1385: { // Ax
    alternateNames: ['Bill Eadie', 'Demolition'],
    allies: ['Smash (Demolition)', 'Crush (Demolition)'],
    rivals: ['The Hart Foundation', "Brain Busters", 'Legion of Doom'],
  
    managers: ['Mr. Fuji'],
},
  1387: { // Mo
    alternateNames: ['Men on a Mission', 'Oscar'],
    allies: ['Mabel (Men on a Mission)', "Oscar"],
    rivals: ['The Quebecers'],
  },
  1388: { // Bull Buchanan
    alternateNames: ['B-Squared', 'B²'],
    allies: ['Big Boss Man', 'Right to Censor', 'John Cena (briefly)'],
    rivals: ["APA", 'The Hardy Boyz'],
  },
  1392: { // Jakara Jackson
    alternateNames: [],
    allies: ['Meta-Four (Noam Dar, Lash Legend, Oro Mensah)', 'Lash Legend (tag partner)'],
    rivals: [],
  },
  1393: { // Kiana James
    alternateNames: [],
    allies: [],
    rivals: ['Fallon Henley'],
  },
  1395: { // Danny Davis
    alternateNames: ['Corrupt Referee'],
    allies: [],
    rivals: ['British Bulldogs', 'Tito Santana'],
  
    managers: ['Jimmy Hart'],
},
  1396: { // Veer Mahaan
    alternateNames: ['Rinku Singh', 'Million Dollar Arm'],
    allies: ['Sanga (Indus Sher)', 'Jinder Mahal'],
    rivals: ['Dominik Mysterio'],
  },
  1397: { // Joe Hendry
    alternateNames: ['Believe in Joe Hendry'],
    allies: ['Trick Williams'],
    rivals: ['Ethan Page'],
  },
  1398: { // Je'Von Evans
    alternateNames: [],
    allies: [],
    rivals: ['Shawn Spears'],
  },
  1399: { // Arianna Grace
    alternateNames: ['Santino Marella\'s Daughter'],
    allies: ['Santino Marella (father)'],
    rivals: ['Thea Hail', 'Karmen Petrovic'],
  },
  1400: { // Izzi Dame
    alternateNames: [],
    allies: [],
    rivals: ['Thea Hail', 'Wendy Choo'],
  },
  1401: { // Outback Jack
    alternateNames: ['Peter Stilsbury'],
    allies: [],
    rivals: ['Nikolai Volkoff', 'Iron Sheik', 'Sika'],
  },
  1402: { // Jaida Parker
    alternateNames: [],
    allies: [],
    rivals: ['Lola Vice'],
  },
  1403: { // Stephanie Vaquer
    alternateNames: ['Chilean Star'],
    allies: [],
    rivals: ['Giulia', 'Roxanne Perez'],
  },
  1404: { // Zaria
    alternateNames: ['AQA', 'Delta Harris'],
    allies: [],
    rivals: ['Fatal Influence', 'Stephanie Vaquer'],
  },
  1405: { // Rick Boogs
    alternateNames: ['Eric Bugenhagen', 'Bugenhagen'],
    allies: ['Shinsuke Nakamura'],
    rivals: ['The Usos'],
  },
  1406: { // Dan Spivey
    alternateNames: ['Waylon Mercy', 'U.S. Express', 'The Skyscrapers'],
    allies: ['Mike Rotundo (U.S. Express)', 'Sid Vicious (Skyscrapers)'],
    rivals: ["Iron Sheik"],
  },
  1407: { // David Flair
    alternateNames: ['Ric Flair\'s Son'],
    allies: ['Ric Flair (father)'],
    rivals: [],
  },
  1408: { // Chris Nowinski
    alternateNames: ['Harvard Heel'],
    allies: [],
    rivals: ['Matt Hardy'],
  },
  1409: { // Daniel Puder
    alternateNames: ['Tough Enough 4 Winner'],
    allies: [],
    rivals: ['Kurt Angle'],
  },
  1410: { // Matt Cappotelli
    alternateNames: ['Tough Enough 3 Winner'],
    allies: ['John Hennigan (Tough Enough co-winner)'],
    rivals: [],
  },
  1412: { // Mikey (Spirit Squad)
    alternateNames: ['Mike Mondo', 'Spirit Squad'],
    allies: ['Spirit Squad (Kenny, Nicky, Johnny, Mitch)'],
    rivals: ['Triple H', 'Shawn Michaels'],
  },
  1414: { // Riley Osborne
    alternateNames: [],
    allies: ['Chase U (Andre Chase, Thea Hail, Duke Hudson)'],
    rivals: [],
  },
  1415: { // Jimmy Del Ray
    alternateNames: ['Heavenly Bodies'],
    allies: ['Tom Prichard (Heavenly Bodies)'],
    rivals: ['The Steiner Brothers', "Smoking Gunns"],
  
    managers: ['Jim Cornette'],
},
  1416: { // Ricky Ortiz
    alternateNames: ['Rally Towel'],
    allies: [],
    rivals: ['Mark Henry', 'Jack Swagger'],
  },
  1417: { // DJ Gabriel
    alternateNames: ['Adam Mayfield'],
    allies: ['Alicia Fox'],
    rivals: [],
  },
  1418: { // Karl Malone
    alternateNames: ['The Mailman'],
    allies: ['DDP'],
    rivals: ['Hulk Hogan', 'Dennis Rodman'],
  },
  1419: { // Dennis Rodman
    alternateNames: ['The Worm'],
    allies: ['nWo', 'Hulk Hogan'],
    rivals: ['DDP', 'Karl Malone'],
  },
  1420: { // Kevin Federline
    alternateNames: ['K-Fed'],
    allies: ['Umaga'],
    rivals: ['John Cena'],
  },
  1421: { // Stephen Amell
    alternateNames: ['Arrow Star'],
    allies: ['Neville'],
    rivals: ['Stardust', 'King Barrett'],
  },
  1422: { // Maria Menounos
    alternateNames: [],
    allies: ['Kelly Kelly'],
    rivals: ['Beth Phoenix', 'Eve Torres'],
  },
  1423: { // Pierre
    alternateNames: ['Carl Ouellet', 'The Quebecers'],
    allies: ['Jacques Rougeau (Quebecers)', 'Johnny Polo (Raven, manager)'],
    rivals: ['The Steiner Brothers', 'Men on a Mission', "Marty Jannetty"],
  },
  1424: { // Tiger Mask
    alternateNames: ['Satoru Sayama', 'The Original Tiger Mask'],
    allies: [],
    rivals: ['Dynamite Kid'],
  },
  1425: { // Ernest Miller
    alternateNames: ['The Cat', 'Somebody Call My Mama'],
    allies: ['Glacier'],
    rivals: ['Goldberg', 'Perry Saturn', 'Jerry Lawler'],
  },
  1426: { // Glacier
    alternateNames: ['Sub-Zero Inspired', 'Blood Runs Cold'],
    allies: [],
    rivals: ['Mortis', 'Wrath'],
  },
  1427: { // Nash Carter
    alternateNames: ['Zachary Wentz', 'MSK', 'The Rascalz'],
    allies: ['Wes Lee (MSK)'],
    rivals: ['Imperium', 'The Creed Brothers'],
  },
  1428: { // Deonna Purrazzo
    alternateNames: ['The Virtuosa'],
    allies: [],
    rivals: ['Roxanne Perez'],
  },
  1429: { // Zack Gibson
    alternateNames: ['Grizzled Young Veterans'],
    allies: ['James Drake (GYV)'],
    rivals: ['Moustache Mountain', "Tyler Bate"],
  },
  1430: { // James Drake
    alternateNames: ['Grizzled Young Veterans'],
    allies: ['Zack Gibson (GYV)'],
    rivals: ['Moustache Mountain', "Tyler Bate"],
  },
  1431: { // Nikita Koloff
    alternateNames: ['The Russian Nightmare'],
    allies: [],
    rivals: ['Magnum T.A.', 'Ric Flair', 'Lex Luger'],
  },
  1432: { // Tank Ledger
    alternateNames: [],
    allies: ['Hank Walker (tag partner)'],
    rivals: [],
  },
  1433: { // Hank Walker
    alternateNames: [],
    allies: ['Tank Ledger (tag partner)'],
    rivals: [],
  },
  1440: { // Eddy Thorpe
    alternateNames: [],
    allies: [],
    rivals: ['Lexis King'],
  },
  1441: { // Dani Palmer
    alternateNames: [],
    allies: [],
    rivals: ['Arianna Grace', 'Lash Legend'],
  },
  1442: { // James Storm
    alternateNames: ['The Cowboy', 'Americas Most Wanted', 'Beer Money'],
    allies: ['Chris Harris (AMW)', 'Bobby Roode (Beer Money)'],
    rivals: ['Bobby Roode', 'AJ Styles'],
  },
  1443: { // Chris Harris
    alternateNames: ['Wildcat Chris Harris', 'Americas Most Wanted'],
    allies: ['James Storm (AMW)'],
    rivals: ['James Storm'],
  },
  1444: { // Maxine
    alternateNames: ['Catrina', 'Karlee Perez'],
    allies: ['Johnny Curtis (storyline)'],
    rivals: ['Kaitlyn', 'Aksana'],
  },
  1445: { // Man Mountain Rock
    alternateNames: ['Maxx Payne'],
    allies: [],
    rivals: ['Jeff Jarrett'],
  },
  1448: { // Johnny Stamboli
    alternateNames: ['Johnny the Bull', 'FBI', 'Full Blooded Italians'],
    allies: ['Chuck Palumbo (FBI)', 'Nunzio (FBI)'],
    rivals: [],
  },
  1449: { // Brian Adams
    alternateNames: ['Crush (later)', 'KroniK'],
    allies: ['Bryan Clark (KroniK)'],
    rivals: ['Undertaker'],
  },
  1450: { // Bryan Clark
    alternateNames: ['Adam Bomb', 'Wrath', 'KroniK'],
    allies: ['Brian Adams (KroniK)'],
    rivals: ['Undertaker'],
  },
  1451: { // Elix Skipper
    alternateNames: ['Primetime'],
    allies: ['Christopher Daniels (tag partner)', 'Low Ki'],
    rivals: ['AJ Styles', 'Chris Sabin'],
  },
  1452: { // Kwee Wee
    alternateNames: ['Allan Funk'],
    allies: [],
    rivals: ['Mike Sanders', 'Jason Jett'],
  
    managers: ['Paisley'],
},
  1453: { // Dave Mastiff
    alternateNames: ['The Bomber'],
    allies: ['Jack Starz'],
    rivals: ['Joe Coffey', 'Eddie Dennis', 'Trent Seven'],
  },
  1454: { // Eddie Dennis
    alternateNames: [],
    allies: ['Pretty Deadly'],
    rivals: ['Dave Mastiff', 'Trent Seven', 'Tyler Bate'],
  },
  1455: { // Aoife Valkyrie
    alternateNames: [],
    allies: [],
    rivals: ['Meiko Satomura', 'Kay Lee Ray', 'Jinny'],
  },
  1456: { // Kay Lee Ray
    alternateNames: ['Alba Fyre'],
    allies: ['Isla Dawn (tag partner)'],
    rivals: ['Toni Storm', 'Meiko Satomura'],
  },
  1457: { // Stevie Ray
    alternateNames: ['Harlem Heat'],
    allies: ['Booker T (Harlem Heat, brother)'],
    rivals: ['The Nasty Boys', 'The Steiner Brothers'],
  },
  1458: { // Norman Smiley
    alternateNames: ['The Big Wiggle', 'Screamin Norman'],
    allies: [],
    rivals: ['Meng', 'Bam Bam Bigelow', 'Brian Knobbs'],
  },
  1459: { // Konnan
    alternateNames: ['K-Dawg', 'K-Dog'],
    allies: ['Filthy Animals (Rey Mysterio, Eddie Guerrero)'],
    rivals: ['Disco Inferno', 'Chris Jericho'],
  },
  1460: { // Disco Inferno
    alternateNames: ['Glenn Gilbertti', 'The Disco Dancer'],
    allies: [],
    rivals: ['Konnan', 'Alex Wright'],
  },
  1461: { // Alex Wright
    alternateNames: ['Das Wunderkind', 'Berlyn'],
    allies: [],
    rivals: ['Disco Inferno', 'Chris Jericho'],
  },
  1462: { // La Parka
    alternateNames: ['The Chairman of WCW', 'LA Park'],
    allies: [],
    rivals: ['Disco Inferno'],
  },
  1463: { // Vampiro
    alternateNames: ['Ian Hodgkinson'],
    allies: [],
    rivals: ['Sting'],
  },
  1464: { // Mikey Whipwreck
    alternateNames: ['ECW Champion'],
    allies: ['The Unholy Alliance (Yoshihiro Tajiri)'],
    rivals: ['Steve Austin (ECW)', 'Sandman'],
  },
  1465: { // Adrian Adonis
    alternateNames: ['Adorable Adrian Adonis', 'Keith Franke'],
    allies: ['Jesse Ventura', 'Dick Murdoch'],
    rivals: ['Roddy Piper', 'Hulk Hogan'],
  
    managers: ['Jimmy Hart'],
},
  1466: { // Francine
    alternateNames: ['The Queen of Extreme'],
    allies: ['Shane Douglas', 'Tommy Dreamer'],
    rivals: ['Beulah McGillicutty'],
  },
  1467: { // Zeb Colter
    alternateNames: ['Dutch Mantell', 'Dirty Dutch', 'Uncle Zeb'],
    allies: ['Jack Swagger (Real Americans)', 'Cesaro (Real Americans)', 'Alberto Del Rio'],
    rivals: ['El Torito', 'Los Matadores'],
  },
  1469: { // Wahoo McDaniel
    alternateNames: ['Chief Wahoo McDaniel'],
    allies: [],
    rivals: ['Ric Flair', 'Greg Valentine'],
  },
  1470: { // Dick Murdoch
    alternateNames: ['Captain Redneck'],
    allies: ['Adrian Adonis (tag partner)', 'Dusty Rhodes'],
    rivals: ["André the Giant"],
  },
  1471: { // Terry Gordy
    alternateNames: ['Bam Bam', 'The Freebirds'],
    allies: ['Michael PS Hayes (Freebirds)', 'Buddy Roberts (Freebirds)'],
    rivals: ['The Von Erichs'],
  },
  1472: { // Magnum T.A.
    alternateNames: ['Terry Allen'],
    allies: ['Dusty Rhodes'],
    rivals: ['Nikita Koloff', 'Tully Blanchard', 'The Four Horsemen'],
  },
  1473: { // Ole Anderson
    alternateNames: ['The Four Horsemen'],
    allies: ['Arn Anderson (Four Horsemen)', 'Ric Flair (Four Horsemen)', 'Tully Blanchard'],
    rivals: ['Dusty Rhodes', "Legion of Doom"],
  },
  1474: { // Fritz Von Erich
    alternateNames: ['Jack Adkisson', 'The Iron Claw'],
    allies: ["The Von Erichs"],
    rivals: ['The Freebirds', 'Ric Flair'],
  },
  1475: { // Kevin Von Erich
    alternateNames: ['The Golden Warrior'],
    allies: ['Kerry Von Erich (brother)', 'David Von Erich (brother)'],
    rivals: ['The Freebirds', 'Ric Flair'],
  },
  1476: { // David Von Erich
    alternateNames: [],
    allies: ['Kevin Von Erich (brother)', 'Kerry Von Erich (brother)'],
    rivals: ['The Freebirds', 'Ric Flair'],
  },
  1477: { // Bruiser Brody
    alternateNames: ['Frank Goodish', 'King Kong Brody'],
    allies: ['Stan Hansen'],
    rivals: ['Abdullah the Butcher', 'Lex Luger'],
  },
  1478: { // Bobby Eaton
    alternateNames: ['Beautiful Bobby', 'Midnight Express'],
    allies: ['Dennis Condrey (Midnight Express)', 'Stan Lane (Midnight Express)'],
    rivals: ['Rock n Roll Express', "Legion of Doom"],
  
    managers: ['Jim Cornette'],
},
  1479: { // Stan Lane
    alternateNames: ['Sweet Stan', 'Midnight Express'],
    allies: ['Bobby Eaton (Midnight Express)'],
    rivals: ['Rock n Roll Express', "Legion of Doom"],
  
    managers: ['Jim Cornette'],
},
  1480: { // Ricky Morton
    alternateNames: ['Rock n Roll Express'],
    allies: ['Robert Gibson (Rock n Roll Express)', 'Jim Cornette (managed briefly)'],
    rivals: ['Midnight Express', 'The Four Horsemen'],
  },
  1481: { // Robert Gibson
    alternateNames: ['Rock n Roll Express'],
    allies: ['Ricky Morton (Rock n Roll Express)'],
    rivals: ['Midnight Express', 'The Four Horsemen'],
  },
  1482: { // Ray Stevens
    alternateNames: ['The Crippler'],
    allies: ['Pat Patterson'],
    rivals: ['Bruno Sammartino'],
  },
  1483: { // Dick the Bruiser
    alternateNames: ['Richard Afflis'],
    allies: ['The Crusher'],
    rivals: [],
  },
  1484: { // The Crusher
    alternateNames: ['Reginald Lisowski'],
    allies: ['Dick the Bruiser'],
    rivals: [],
  },
  1485: { // Brad Armstrong
    alternateNames: ['B.A.', 'Buzzkill', 'Arachnaman', "Armstrong family"],
    allies: ['Armstrong family'],
    rivals: [],
  },
  1486: { // Tracy Smothers
    alternateNames: ['Freddie Joe Floyd'],
    allies: ['Little Guido (FBI)'],
    rivals: [],
  },
  1487: { // Tommy Rich
    alternateNames: ['Wildfire'],
    allies: [],
    rivals: ['Buzz Sawyer'],
  },
  1488: { // Dennis Condrey
    alternateNames: ['Midnight Express'],
    allies: ['Bobby Eaton (Midnight Express)'],
    rivals: ['Rock n Roll Express'],
  
    managers: ['Jim Cornette'],
},
  1489: { // Buddy Roberts
    alternateNames: ['The Freebirds'],
    allies: ['Michael PS Hayes (Freebirds)', 'Terry Gordy (Freebirds)'],
    rivals: ['The Von Erichs'],
  },
  1490: { // Silver King
    alternateNames: ['Dr. Wagner Jr. (no)', 'Ramses'],
    allies: ['La Parka'],
    rivals: [],
  },
  1491: { // Crowbar
    alternateNames: ['Devon Storm'],
    allies: ['Daffney'],
    rivals: ['David Flair'],
  },
  1492: { // Daffney
    alternateNames: ['Scream Queen'],
    allies: ['Crowbar', 'David Flair'],
    rivals: ['Miss Hancock'],
  },
  1493: { // J.J. Dillon
    alternateNames: ['James J. Dillon', 'Four Horsemen Manager'],
    allies: ['The Four Horsemen (managed)'],
    rivals: ['Dusty Rhodes'],
  },
  1494: { // Sakoda
    alternateNames: [],
    allies: ['Tajiri', 'Akio'],
    rivals: [],
  },
  1496: { // Kevin Sullivan
    alternateNames: ['The Taskmaster', "Dungeon of Doom"],
    allies: ['Dungeon of Doom'],
    rivals: ['Hulk Hogan', 'Chris Benoit'],
  },
  1497: { // Danny Hodge
    alternateNames: ['The Natural'],
    allies: [],
    rivals: ['Hiro Matsuda', 'Angelo Poffo'],
  },
  1498: { // Baron Von Raschke
    alternateNames: ['The Claw'],
    allies: [],
    rivals: ['Verne Gagne'],
  },
  1499: { // Jimmy Garvin
    alternateNames: ['Gorgeous Jimmy Garvin', 'The Freebirds'],
    allies: ['Michael PS Hayes (Freebirds)'],
    rivals: ['Dusty Rhodes'],
  
    managers: ['Precious'],
},
  1500: { // Bob Armstrong
    alternateNames: ['Bullet Bob Armstrong'],
    allies: ['Armstrong family'],
    rivals: [],
  },
  1501: { // Axl Rotten
    alternateNames: ['Brian Knighton'],
    allies: ['Balls Mahoney (ECW tag partner)'],
    rivals: ['Ian Rotten'],
  },
  1502: { // Skandor Akbar
    alternateNames: ['Manager'],
    allies: ['Devastation Inc.'],
    rivals: ["The Von Erichs"],
  },
  1505: { // Rikidozan
    alternateNames: ['Father of Japanese Wrestling', 'Kim Sin-nak'],
    allies: [],
    rivals: ['The Sharpe Brothers', 'Fred Blassie'],
  },
  1506: { // Tessa Blanchard
    alternateNames: ['Tully Blanchard\'s Daughter'],
    allies: ['Tully Blanchard (father)'],
    rivals: ['Sasha Banks', 'Gail Kim'],
  },
  1507: { // Scotty Riggs
    alternateNames: ['American Males'],
    allies: ['Buff Bagwell (American Males)'],
    rivals: ['Raven'],
  },
  1508: { // Public Enemy
    alternateNames: ['Rocco Rock & Johnny Grunge'],
    allies: [],
    rivals: ['Dudley Boyz'],
  },
  1509: { // 911
    alternateNames: ['Al Poling'],
    allies: ['Paul Heyman (ECW)'],
    rivals: [],
  },
  1511: { // Tony Mamaluke
    alternateNames: ['FBI'],
    allies: ['Little Guido (FBI)'],
    rivals: [],
  },
  1512: { // Rocco Rock
    alternateNames: ['Public Enemy'],
    allies: ['Johnny Grunge (Public Enemy)'],
    rivals: ['The Dudley Boyz'],
  },
  1513: { // Johnny Grunge
    alternateNames: ['Public Enemy'],
    allies: ['Rocco Rock (Public Enemy)'],
    rivals: ['The Dudley Boyz'],
  },
  1514: { // Mike Sanders
    alternateNames: ['Above Average', 'Natural Born Thrillers'],
    allies: ['Natural Born Thrillers'],
    rivals: [],
  },
  1515: { // Lenny Lane
    alternateNames: ['Lenny Lane'],
    allies: ['Lodi'],
    rivals: [],
  },
  1516: { // Lodi
    alternateNames: ['The Flock'],
    allies: ['Raven (The Flock)', 'Lenny Lane'],
    rivals: [],
  },
  1517: { // Bunkhouse Buck
    alternateNames: ['Jimmy Golden'],
    allies: ['Arn Anderson'],
    rivals: ['Dusty Rhodes', 'Dustin Rhodes'],
  
    managers: ['Colonel Robert Parker'],
},
  1519: { // Mitsuharu Misawa
    alternateNames: ['Tiger Mask II', 'Emerald Flowsion'],
    allies: [],
    rivals: ['Toshiaki Kawada', 'Jumbo Tsuruta', 'Kenta Kobashi'],
  },
  1520: { // Kenta Kobashi
    alternateNames: ['Burning Hammer', 'The Iron Man'],
    allies: ['Mitsuharu Misawa'],
    rivals: ['Toshiaki Kawada', 'Mitsuharu Misawa', 'Akira Taue'],
  },
  1521: { // Toshiaki Kawada
    alternateNames: ['Dangerous K'],
    allies: ["Akira Taue"],
    rivals: ['Mitsuharu Misawa', 'Kenta Kobashi'],
  },
  1522: { // Jumbo Tsuruta
    alternateNames: ['Tomomi Tsuruta'],
    allies: [],
    rivals: ['Mitsuharu Misawa', 'Giant Baba'],
  },
  1523: { // Genichiro Tenryu
    alternateNames: [],
    allies: [],
    rivals: ['Giant Baba', 'Stan Hansen', 'Jumbo Tsuruta'],
  },
  1524: { // Hayabusa
    alternateNames: ['The Phoenix'],
    allies: ['Shinzaki'],
    rivals: ['Mr. Gannosuke', 'Atsushi Onita', 'Mike Awesome'],
  },
  1525: { // El Hijo del Santo
    alternateNames: ['Son of El Santo'],
    allies: [],
    rivals: ['Negro Casas'],
  },
  1526: { // Negro Casas
    alternateNames: [],
    allies: [],
    rivals: ['El Hijo del Santo'],
  },
  1527: { // Pete Dunne
    alternateNames: ["Butch", "Rayo Americano"],
    allies: [],
    rivals: ['Negro Casas'],
  },
  1528: { // Sgt. Craig Pittman
    alternateNames: ['Pittbull'],
    allies: [],
    rivals: ['Eddie Guerrero', 'Chris Benoit'],
  
    managers: ['Teddy Long'],
},
  1529: { // Ice Train
    alternateNames: [],
    allies: ['Scott Norton (Fire & Ice)'],
    rivals: [],
  },
  1530: { // Scott Norton
    alternateNames: ['Flash Norton', 'nWo'],
    allies: ['Ice Train (Fire & Ice)', 'nWo'],
    rivals: [],
  },
  1531: { // Villano III
    alternateNames: [],
    allies: ['Villano I', 'Villano IV', 'Villano V'],
    rivals: ['Atlantis', 'El Hijo del Santo', 'Blue Panther'],
  },
  1532: { // Hector Guerrero
    alternateNames: ['Gobbledy Gooker', 'Lazertron'],
    allies: ['Guerrero Family'],
    rivals: [],
  },
  1533: { // Mando Guerrero
    alternateNames: [],
    allies: ['Guerrero Family'],
    rivals: [],
  },
  1534: { // Chavo Guerrero Sr.
    alternateNames: ['Chavo Classic', "Guerrero Family"],
    allies: ['Guerrero Family'],
    rivals: [],
  },
  1535: { // Mark Lewin
    alternateNames: ['The Maniac'],
    allies: ['Don Curtis (tag partner)'],
    rivals: ['Killer Kowalski', 'The Sheik'],
  },
  1536: { // Dutch Savage
    alternateNames: ['Frank Stewart'],
    allies: ['Jimmy Snuka (tag partner)'],
    rivals: ['Buddy Rose', 'Roddy Piper'],
  },
  1537: { // Buzz Sawyer
    alternateNames: ['Mad Dog Buzz Sawyer'],
    allies: [],
    rivals: ['Tommy Rich'],
  },
  606: { // Killian Dain
    alternateNames: ['Big Damo', 'Damian Mackle'],
    allies: ['Sanity (Eric Young, Alexander Wolfe, Nikki Cross)', 'Drake Maverick'],
    rivals: ['Pete Dunne', 'Matt Riddle', 'Keith Lee'],
  },
  607: { // Alexander Wolfe
    alternateNames: ['Axel Tischer'],
    allies: ['Sanity (Eric Young, Killian Dain, Nikki Cross)', 'Imperium (Walter, Marcel Barthel, Fabian Aichner)'],
    rivals: ['Undisputed Era', 'British Strong Style'],
  },
  608: { // Marcel Barthel
    alternateNames: ['Axel Dieter Jr.', 'Ludwig Kaiser'],
    allies: ['Imperium (Walter, Alexander Wolfe, Fabian Aichner)', 'Gunther'],
    rivals: ['British Strong Style', 'Gallus', 'Matt Riddle'],
  },
  609: { // Fabian Aichner
    alternateNames: ['Giovanni Vinci'],
    allies: ['Imperium (Walter, Marcel Barthel, Alexander Wolfe)', 'Ludwig Kaiser'],
    rivals: ['British Strong Style', 'Gallus', 'Matt Riddle'],
  },
  612: { // Noam Dar
    alternateNames: ['The Scottish Supernova'],
    allies: ['Sha Samuels', 'Mark Coffey'],
    rivals: ['Tyler Bate', 'Jordan Devlin', 'A-Kid', 'Trent Seven'],
  },
  613: { // Meiko Satomura
    alternateNames: ['The Final Boss'],
    allies: [],
    rivals: ['Kay Lee Ray', 'Blair Davenport', 'Io Shirai'],
  },
  614: { // Amale
    alternateNames: [],
    allies: [],
    rivals: ['Meiko Satomura', 'Kay Lee Ray'],
  },
  615: { // Jinny
    alternateNames: [],
    allies: ['Joseph Conners'],
    rivals: ['Toni Storm', 'Kay Lee Ray', 'Meiko Satomura'],
  },
  622: { // Swerve Strickland
    alternateNames: ['Isaiah Scott', 'Killshot', 'Shane Strickland'],
    allies: ['Hit Row (B-Fab, Top Dolla, Ashante Adonis)'],
    rivals: ['Keith Lee', 'Santos Escobar', 'Hangman Adam Page'],
  },
  643: { // Lance Cade
    alternateNames: ['Garrison Cade', 'Lance Cade'],
    allies: ['Trevor Murdoch', 'Shawn Michaels', 'Chris Jericho'],
    rivals: ["The Hardy Boyz", 'Cryme Tyme', 'Paul London & Brian Kendrick'],
  },
  644: { // Trevor Murdoch
    alternateNames: [],
    allies: ['Lance Cade'],
    rivals: ['Cryme Tyme', 'Paul London & Brian Kendrick'],
  },
  672: { // Lola Vice
    alternateNames: ['Valerie Loureda'],
    allies: [],
    rivals: ['Natalya', 'Shayna Baszler', 'Kelani Jordan'],
  },
  673: { // Elektra Lopez
    alternateNames: [],
    allies: ['Legado del Fantasma (Santos Escobar, Cruz Del Toro, Joaquin Wilde)'],
    rivals: ['Cora Jade', 'Roxanne Perez'],
  },
  674: { // Stevie Turner
    alternateNames: [],
    allies: [],
    rivals: ['Emilia McKenzie', 'Meiko Satomura'],
  },
  675: { // Mia Yim
    alternateNames: ['Reckoning', 'Jade', "Michin"],
    allies: ['Retribution (Mustafa Ali, T-Bar, Mace, Slapjack)', "Mia Yim"],
    rivals: ['Bayley', 'Damage CTRL', 'Shayna Baszler', 'Chelsea Green'],
  },
  678: { // Aliyah
    alternateNames: ['Nhooph Al-Areebi'],
    allies: ['Raquel Rodriguez', 'Robert Stone'],
    rivals: ['Toxic Attraction', 'Damage CTRL'],
  },
  679: { // Persia Pirotta
    alternateNames: ['Indi Hartwell'],
    allies: ['Indi Hartwell', 'Dexter Lumis'],
    rivals: ['Toxic Attraction'],
  },
  684: { // Fallon Henley
    alternateNames: [],
    allies: ['Kiana James', 'Josh Briggs', 'Brooks Jensen'],
    rivals: ['Toxic Attraction', 'Tiffany Stratton', 'Kiana James'],
  },
  686: { // Joe Coffey
    alternateNames: ['The Iron King'],
    allies: ['Gallus (Mark Coffey, Wolfgang)'],
    rivals: ['Imperium', 'British Strong Style', 'Tyler Bate'],
  },
  687: { // Mark Coffey
    alternateNames: [],
    allies: ['Gallus (Joe Coffey, Wolfgang)', 'Noam Dar'],
    rivals: ['Imperium', 'British Strong Style', 'Moustache Mountain'],
  },
  688: { // Wolfgang
    alternateNames: [],
    allies: ['Gallus (Joe Coffey, Mark Coffey)'],
    rivals: ['Imperium', 'Ilja Dragunov'],
  },
  703: { // Irwin R. Schyster
    alternateNames: ['I.R.S.', 'Mike Rotunda', 'Michael Wallstreet', 'IRS'],
    allies: ['Ted DiBiase (Money Inc.)', 'Bray Wyatt (son)', 'Bo Dallas (son)'],
    rivals: ['Tatanka', 'Razor Ramon', 'Undertaker', "The Steiner Brothers"],
  },
  706: { // Jim Duggan
    alternateNames: ['Hacksaw Jim Duggan'],
    allies: ['Sgt. Slaughter', 'Nikolai Volkoff'],
    rivals: ["André the Giant", 'Harley Race', 'Yokozuna', 'Iron Sheik', 'Ted DiBiase'],
  },
  732: { // Sharmell
    alternateNames: ['Sharmell Sullivan-Huffman'],
    allies: ['Booker T'],
    rivals: ['Kurt Angle'],
  },
  735: { // Luna Vachon
    alternateNames: ['Luna', 'Angelle Vachon'],
    allies: ['Bam Bam Bigelow', 'Shawn Michaels'],
    rivals: ['Sable', 'Madusa', 'Ivory'],
  },
  736: { // Jacqueline Moore
    alternateNames: ['Jacqueline', 'Miss Texas'],
    allies: ['Marc Mero', 'Terri Runnels'],
    rivals: ['Sable', 'Luna Vachon', 'Ivory', 'Trish Stratus'],
  },
  737: { // Bull Nakano
    alternateNames: [],
    allies: ['Luna Vachon'],
    rivals: ['Alundra Blayze', 'Aja Kong'],
  },
  753: { // Simon Dean
    alternateNames: ['Nova', 'Simon Dean'],
    allies: ['Blue World Order (ECW)'],
    rivals: ['Bobby Lashley', 'Hardcore Holly'],
  },
  760: { // Jillian Hall
    alternateNames: [],
    allies: ['JBL', 'Melina'],
    rivals: ['Ashley Massaro', 'Mickie James', 'Kelly Kelly'],
  },
  784: { // Maxxine Dupri
    alternateNames: ['Sofia Cromwell', 'Maxine'],
    allies: ['Maximum Male Models (LA Knight, Mace, Mansoor)', 'Alpha Academy'],
    rivals: ['Chelsea Green', 'Piper Niven'],
  },
  806: { // Repo Man
    alternateNames: ['Smash', 'Barry Darsow', 'Krusher Khruschev', 'Blacktop Bully'],
    allies: ['Demolition (Ax, Crush)'],
    rivals: ['British Bulldog', 'Randy Savage', 'Tito Santana'],
  },
  808: { // Flash Funk
    alternateNames: ['2 Cold Scorpio', 'Scorp'],
    allies: ['Too Cool', 'The Funkettes'],
    rivals: ['Goldust', 'Jeff Jarrett'],
  },
  830: { // Michael Cole
    alternateNames: [],
    allies: ['Tazz', 'Jerry Lawler', 'Pat McAfee', 'Corey Graves'],
    rivals: ['Jerry Lawler', 'JBL', 'The Miz'],
  },
  1539: { // Stu Hart
    alternateNames: [],
    allies: ['Bret Hart (son)', 'Owen Hart (son)', 'British Bulldog (son-in-law)'],
    rivals: [],
  },
  1540: { // Gorgeous George
    alternateNames: ['George Raymond Wagner', 'The Human Orchid'],
    allies: [],
    rivals: ['Antonino Rocca', 'Lou Thesz'],
  },
  1541: { // Mad Dog Vachon
    alternateNames: ['Maurice Vachon'],
    allies: ['Luna Vachon (daughter)', 'Paul Vachon (brother)'],
    rivals: ['Verne Gagne', 'Mad Dog Buzz Sawyer'],
  },
  1542: { // Bill Watts
    alternateNames: ['Cowboy Bill Watts'],
    allies: ['Jim Ross'],
    rivals: [],
  },
  1550: { // Andy Kaufman
    alternateNames: [],
    allies: [],
    rivals: ['Jerry Lawler'],
  },
  1552: { // Jackie Gayda
    alternateNames: [],
    allies: ['Charlie Haas', 'Rico'],
    rivals: ['Trish Stratus', 'Jazz'],
  },
  1553: { // Linda Miles
    alternateNames: ['Shaniqua'],
    allies: ['Basham Brothers'],
    rivals: ['Torrie Wilson', 'Dawn Marie'],
  },
  1555: { // Brad Maddox
    alternateNames: [],
    allies: ['Vickie Guerrero'],
    rivals: ['Ryback', 'Randy Orton'],
  },
  1556: { // Taryn Terrell
    alternateNames: ['Tiffany', 'Taryn Terrell'],
    allies: ['The Dollhouse (Jade, Marti Bell)'],
    rivals: ['Gail Kim', 'Awesome Kong'],
  },
  1557: { alternateNames: ["Sarah Logan", "Sarah Rowe", "Valhalla"], allies: ["Ruby Riott", "Liv Morgan", "Ivar", "Erik"], rivals: ["Bayley", "Becky Lynch", "Asuka", "Naomi"] },
  1558: { alternateNames: ["Myles Borne", "David Bostian III"], allies: [], rivals: ["Charlie Dempsey", "Tavion Heights"] },
  1559: { alternateNames: ["The Midnight Express"], allies: ["Bobby Eaton", "Jim Cornette"], rivals: ["Legion of Doom", "Ricky Steamboat"] },
  1560: { alternateNames: ["Akira Taue", "Holy Demon Army"], allies: ["Giant Baba", "Kenta Kobashi", "Toshiaki Kawada"], rivals: ["Kenta Kobashi", "Toshiaki Kawada"] },
  1561: { alternateNames: ["Frankie Williams"], allies: [], rivals: ["Buddy Rogers", "Antonino Rocca"] },
  1562: { alternateNames: ["Jay Youngblood", "Steven Romero"], allies: ["Ricky Steamboat", "Chief Jay Strongbow"], rivals: [] },
  1564: { alternateNames: ["Dave Taylor"], allies: ["William Regal"], rivals: [] },
  1565: { alternateNames: ["Reby Hardy", "Reby Sky", "Rebecca Reyes"], allies: ["Matt Hardy"], rivals: [] },
  1567: { alternateNames: ["The Acclaimed", "Max Caster & Anthony Bowens"], allies: [], rivals: [] },
  1568: { alternateNames: ["Jesús", "Aaron Aguilera"], allies: ["Carlito"], rivals: [] },
  1571: { alternateNames: ["Jack Victory", "Kenneth Rinehurst"], allies: ["Steve Corino", "Raven"], rivals: ["Tommy Dreamer"] },
  1572: { alternateNames: ["Vic Grimes"], allies: ["New Jack"], rivals: ["Tommy Dreamer", "Raven"] },
  1573: { alternateNames: ["Mustafa Saed"], allies: ["New Jack"], rivals: ["Tommy Dreamer", "Raven", "Axl Rotten"] },
  1574: { alternateNames: ["Kid Kash", "David Cash"], allies: [], rivals: ["Rey Mysterio", "Paul London", "Billy Kidman"] },
  1575: { alternateNames: ["MJF", "Maxwell Jacob Friedman", "The Salt of the Earth"], allies: [], rivals: ["CM Punk", "Darby Allin"] },
  1576: { alternateNames: ["Britt Baker", "Dr. Britt Baker D.M.D."], allies: ["Adam Cole"], rivals: [] },
  1578: { alternateNames: ["Darby Allin"], allies: ["Sting"], rivals: ["MJF", "CM Punk"] },
  1579: { alternateNames: ["Dos Caras"], allies: ["Mil Mascaras"], rivals: [] },
  1580: { alternateNames: ["Jules Strongbow", "Francis Huntington"], allies: ["Chief Jay Strongbow", "Tony Atlas", "Tony Garea"], rivals: [] },
  1581: { alternateNames: ["Mike Kanellis", "Michael Bennett", "Mike Bennett"], allies: ["Maria Kanellis"], rivals: [] },
  1583: { alternateNames: ["Katie Lea", "Katarina Waters", "Winter"], allies: ["Paul Burchill", "William Regal"], rivals: [] },
  1585: { alternateNames: ["Adriana Rizzo"], allies: ["Tony D'Angelo"], rivals: [] },
  1586: { alternateNames: ["Bullet Club"], allies: ["Finn Bálor", "AJ Styles", "Tama Tonga", "Tonga Loa"], rivals: [] },
  1587: { alternateNames: ["New Bloodline"], allies: ["Solo Sikoa", "Tama Tonga", "Tonga Loa"], rivals: ["Roman Reigns", "Cody Rhodes"] },
  1588: { alternateNames: ["Sha Samuels"], allies: ["Noam Dar"], rivals: [] },
  1589: { alternateNames: ["Joseph Conners"], allies: [], rivals: ["Pete Dunne", "Tyler Bate", "Trent Seven"] },
  1590: { alternateNames: ["Hangman Adam Page", "Hangman", "The Anxious Millennial Cowboy"], allies: ["Swerve Strickland"], rivals: ["MJF", "CM Punk", "Swerve Strickland"] },
  1591: { alternateNames: ["Emilia McKenzie", "Millie McKenzie"], allies: ["Stevie Turner"], rivals: [] },
  1592: { alternateNames: ["The Funkettes"], allies: ["Flash Funk"], rivals: [] },
  1593: { alternateNames: ["Kim Chee", "Brooklyn Brawler", "Steve Lombardi"], allies: ["Kamala", "Mr. Fuji"], rivals: [] },
  1594: { alternateNames: ["Rey Fenix", "Rey Fénix"], allies: ["Penta El Zero Miedo", "Alex Abrahantes"], rivals: [] },
  1596: { alternateNames: ["Rosemary", "The Demon Assassin"], allies: ["Decay (faction)"], rivals: ["Jade", "Taya Valkyrie", "Allie"] },
  1597: { alternateNames: ["Austin Aries", "A-Double", "The Greatest Man That Ever Lived"], allies: [], rivals: ["Neville"] },
  1598: { alternateNames: ["Pat O'Connor"], allies: ["Antonino Rocca"], rivals: ["Buddy Rogers"] },
  1599: { alternateNames: ["Scott Putski"], allies: ["Ivan Putski"], rivals: [] },
  1600: { alternateNames: ["The Yukon Lumberjacks"], allies: ["Captain Lou Albano"], rivals: ["Tony Garea"] },
  1602: { alternateNames: ["The Moondogs"], allies: ["Captain Lou Albano"], rivals: ["Tony Atlas", "Rocky Johnson"] },
  1603: { alternateNames: ["Pierre Carl Ouellet", "The Quebecers", "Jean-Pierre LaFitte"], allies: ["Jacques Rougeau", "Jim Cornette"], rivals: [] },
  1604: { alternateNames: ["The Young Stallions"], allies: ["Jim Powers"], rivals: ["Demolition", "The Nasty Boys"] },
  1605: { alternateNames: ["Greg Gagne"], allies: ["Verne Gagne", "Jim Brunzell"], rivals: [] },
  1606: { alternateNames: ["Butterbean", "Eric Esch"], allies: [], rivals: ["Bart Gunn"] },
  1607: { alternateNames: ["Wesley Blake", "Cory Weston"], allies: ["Buddy Murphy"], rivals: [] },
  1608: { alternateNames: ["Scorpio Sky"], allies: ["Ethan Page"], rivals: [] },
  1609: { alternateNames: ["Gene Kiniski", "Big Thunder"], allies: [], rivals: ["Dory Funk Jr.", "Pat O'Connor"] },
  1610: { alternateNames: ["Wally Karbo"], allies: ["Verne Gagne"], rivals: [] },
  1611: { alternateNames: ["Dory Funk Sr."], allies: ["Dory Funk Jr."], rivals: [] },
  1612: { alternateNames: ["Miguel Perez"], allies: ["Antonino Rocca", "Pedro Morales"], rivals: [] },
  1613: { alternateNames: ["The Destroyer", "Dr. X"], allies: [], rivals: ["Rikidozan"] },
  1614: { alternateNames: ["Louis Cerdan", "Gino Brito"], allies: ["Captain Lou Albano"], rivals: [] },
  1616: { alternateNames: ["Mercedes Martinez"], allies: ["Sonya Deville"], rivals: ["Becky Lynch", "Shayna Baszler", "Mia Yim"] },
  1618: { alternateNames: ["Eddie Gilbert", "Hot Stuff Eddie Gilbert"], allies: ["Missy Hyatt", "Paul Heyman"], rivals: [] },
  1619: { alternateNames: ["Ian Rotten"], allies: ["Axl Rotten"], rivals: ["New Jack"] },
  1620: { alternateNames: ["Devastation Inc."], allies: ["Skandor Akbar"], rivals: [] },
  1621: { alternateNames: ["The Sharpe Brothers"], allies: [], rivals: ["Bruno Sammartino", "Pedro Morales"] },
  1622: { alternateNames: ["The Stud Stable"], allies: ["Colonel Robert Parker"], rivals: [] },
  1623: { alternateNames: ["Toots Mondt"], allies: ["Vince McMahon Sr.", "Pat Patterson"], rivals: [] },
  1624: { alternateNames: ["Paul Vachon", "The Butcher"], allies: ["Mad Dog Vachon"], rivals: ["Bruno Sammartino", "Pedro Morales"] },

  // ── Missing Tag Team / Faction Relationships ─────────────────────
  16: { alternateNames: ["British Bulldogs", "Davey Boy Smith & The Dynamite Kid"], allies: ["Bret Hart", "Jim Neidhart", "Captain Lou Albano"], rivals: ["The Hart Foundation", "The Dream Team", "The Rougeau Brothers", "Demolition"] },
  610: { alternateNames: ["GYV", "Grizzled Young Veterans"], allies: [], rivals: ["Moustache Mountain", "Pretty Deadly", "Gallus"] },
  611: { alternateNames: ["Flash Morgan Webster & Mark Andrews"], allies: ["Trent Seven"], rivals: ["Grizzled Young Veterans", "Pretty Deadly"] },
  645: { alternateNames: ["Team Angle", "World's Greatest Tag Team"], allies: ["Kurt Angle (mentor)", "Paul Heyman"], rivals: ["Los Guerreros", "Edge & Rey Mysterio", "Benoit & Rhyno"] },
  648: { alternateNames: ["The Highlanders", "Rory & Robbie McAllister"], allies: [], rivals: ["The Spirit Squad", "Cade & Murdoch", "Cryme Tyme"] },
  655: { alternateNames: ["The Vaudevillains", "Simon Gotch & Aiden English"], allies: [], rivals: ["Enzo & Cass", "American Alpha", "The New Day"] },
  656: { alternateNames: ["Enzo & Cass", "Enzo Amore & Big Cass", "Realest Guys in the Room"], allies: ["Carmella"], rivals: ["The Vaudevillains", "Chris Jericho & Kevin Owens", "The Revival", "Luke Gallows & Karl Anderson"] },
  657: { alternateNames: ["American Alpha", "Jason Jordan & Chad Gable", "Ready Willing & Gable"], allies: ["The Hype Bros"], rivals: ["The Revival", "The Vaudevillains", "The Usos", "The Wyatt Family"] },
  658: { alternateNames: ["The Bar", "Sheamus & Cesaro"], allies: [], rivals: ["The New Day", "The Usos", "Seth Rollins & Dean Ambrose", "The Hardy Boyz"] },
  659: { alternateNames: ["AOP", "Authors of Pain", "Akam & Rezar"], allies: ["Seth Rollins"], rivals: ["American Alpha", "DIY", "The Revival", "The Viking Raiders"], managers: ["Paul Ellering", "Drake Maverick"] },
  660: { alternateNames: ["Heavy Machinery", "Tucker Knight & Otis"], allies: ["Mandy Rose"], rivals: ["The Miz & John Morrison", "The New Day", "Dolph Ziggler & Robert Roode"] },
  681: { alternateNames: ["Indus Sher", "Rinku Singh & Saurav Gurjar"], allies: [], rivals: ["Imperium", "Ever-Rise"], managers: ["Malcolm Bivens"] },
  683: { alternateNames: ["Briggs & Jensen", "Josh Briggs & Brooks Jensen"], allies: ["Fallon Henley", "Kiana James"], rivals: ["Pretty Deadly", "The Dyad", "Gallus"] },
  685: { alternateNames: ["Hank & Tank", "Hank Walker & Tank Ledger"], allies: [], rivals: ["The D'Angelo Family", "The Dyad"] },
  689: { alternateNames: ["Burch & Lorcan", "Danny Burch & Oney Lorcan"], allies: ["Pat McAfee"], rivals: ["Undisputed ERA", "Breezango", "Imperium"] },
  690: { alternateNames: ["MSK", "Wes Lee & Nash Carter"], allies: [], rivals: ["Imperium", "Grizzled Young Veterans", "The Creed Brothers"] },
  691: { alternateNames: ["The Rockers", "Shawn Michaels & Marty Jannetty"], allies: [], rivals: ["The Hart Foundation", "The Brain Busters", "The Orient Express", "The Nasty Boys"] },
  692: { alternateNames: ["British Bulldogs"], allies: ["Matilda (mascot)"], rivals: ["The Hart Foundation", "The Dream Team", "Demolition", "The Islanders"], managers: ["Lou Albano"] },
  693: { alternateNames: ["The Orient Express", "Sato & Tanaka", "Kato & Tanaka"], allies: [], rivals: ["The Rockers", "The Legion of Doom", "The Bushwhackers"], managers: ["Mr. Fuji"] },
  696: { alternateNames: ["The Quebecers", "Jacques & Pierre"], allies: [], rivals: ["The Steiner Brothers", "Men on a Mission", "The Headshrinkers"], managers: ["Johnny Polo"] },
  697: { alternateNames: ["Men on a Mission", "MOM", "Mabel & Mo"], allies: [], rivals: ["The Quebecers", "The Headshrinkers", "Yokozuna & Owen Hart"], managers: ["Oscar"] },
  698: { alternateNames: ["Well Dunn", "Steven Dunn & Timothy Well"], allies: [], rivals: ["The Smokin' Gunns", "1-2-3 Kid & Bob Holly"], managers: ["Harvey Wippleman"] },
  699: { alternateNames: ["The Headshrinkers"], allies: [], rivals: ["The Quebecers", "Yokozuna & Owen Hart", "Money Inc."], managers: ["Afa", "Captain Lou Albano"] },
  700: { alternateNames: ["The Steiner Brothers", "Rick Steiner & Scott Steiner"], allies: [], rivals: ["The Quebecers", "Money Inc.", "The Headshrinkers", "The Outsiders"] },
  719: { alternateNames: ["Godfather & D'Lo"], allies: [], rivals: ["The Dudley Boyz", "T & A", "Edge & Christian"] },
  720: { alternateNames: ["Edge & Christian", "E&C"], allies: ["Gangrel (Brood)"], rivals: ["The Hardy Boyz", "The Dudley Boyz", "The APA", "Too Cool"] },
  744: { alternateNames: ["Team Angle", "Angle & Benoit"], allies: [], rivals: ["Los Guerreros", "Edge & Rey Mysterio"] },
  745: { alternateNames: ["Mysterio & RVD", "Rey Mysterio & Rob Van Dam"], allies: [], rivals: ["The Dudley Boyz", "MNM", "Edge & Randy Orton"] },
  750: { alternateNames: ["Londrick", "London & Kendrick"], allies: ["Ashley Massaro"], rivals: ["MNM", "KC James & Idol Stevens", "William Regal & Dave Taylor", "Deuce 'n Domino"] },
  756: { alternateNames: ["Cesaro & Kidd", "Tyson Kidd & Cesaro"], allies: ["Natalya"], rivals: ["The New Day", "The Usos", "The Ascension", "Los Matadores"] },
  759: { alternateNames: ["Miz & Morrison", "The Dirt Sheet Duo"], allies: [], rivals: ["DX", "John Cena & Cryme Tyme", "The Colóns", "CM Punk"] },
  771: { alternateNames: ["Batista & Mysterio", "Bautista & Mysterio"], allies: [], rivals: ["MNM", "Mark Henry & MVP"] },
  777: { alternateNames: ["The Bar", "Sheamus & Cesaro"], allies: [], rivals: ["The New Day", "The Usos", "Seth Rollins & Dean Ambrose", "The Hardy Boyz"] },
  778: { alternateNames: ["The Street Profits", "Montez Ford & Angelo Dawkins"], allies: ["Bianca Belair"], rivals: ["The Usos", "Alpha Academy", "The Viking Raiders", "RKBro"] },
  781: { alternateNames: ["RKBro", "Randy Orton & Riddle"], allies: [], rivals: ["Alpha Academy", "The Usos", "The Street Profits", "The Bloodline"] },
  783: { alternateNames: ["Otis & Chad Gable", "Alpha Academy"], allies: ["Maxxine Dupri"], rivals: ["RKBro", "The Street Profits", "The Usos"] },
  785: { alternateNames: ["Alpha Academy", "Chad Gable & Otis"], allies: ["Maxxine Dupri"], rivals: ["RKBro", "The Street Profits", "The Usos", "Sami Zayn"] },
  786: { alternateNames: ["Karrion Kross & Scarlett", "Kross & Scarlett"], allies: [], rivals: ["Drew McIntyre", "The Bloodline"] },
  787: { alternateNames: ["Hit Row", "Top Dolla & Ashante Adonis"], allies: ["B-Fab"], rivals: ["Legado del Fantasma", "Pretty Deadly", "The Viking Raiders"] },
  790: { alternateNames: ["Lucha House Party", "LHP"], allies: [], rivals: ["Legado del Fantasma", "The Hurt Business", "The Street Profits"] },
  798: { alternateNames: ["Power and Glory", "Hercules & Paul Roma"], allies: [], rivals: ["The Rockers", "Legion of Doom"], managers: ["Slick"] },
  801: { alternateNames: ["The Killer Bees", "B. Brian Blair & Jim Brunzell"], allies: [], rivals: ["The Hart Foundation", "The Dream Team", "The Islanders"] },
  802: { alternateNames: ["The Fabulous Rougeau Brothers", "Jacques & Raymond Rougeau"], allies: [], rivals: ["The Rockers", "The Bushwhackers", "The Hart Foundation", "The Young Stallions"], managers: ["Jimmy Hart"] },
  803: { alternateNames: ["The Colossal Connection", "André the Giant & Haku"], allies: [], rivals: ["Demolition", "The Rockers"], managers: ["Bobby Heenan"] },
  804: { alternateNames: ["The Bolsheviks", "Nikolai Volkoff & Boris Zhukov"], allies: [], rivals: ["The Hart Foundation", "The Bushwhackers", "The Rockers"], managers: ["Slick"] },
  805: { alternateNames: ["Rhythm & Blues", "The Honky Tonk Man & Greg Valentine"], allies: [], rivals: ["The Bushwhackers", "The Hart Foundation"], managers: ["Jimmy Hart"] },
  807: { alternateNames: ["High Energy", "Owen Hart & Koko B. Ware"], allies: [], rivals: ["Money Inc.", "The Headshrinkers", "The Beverly Brothers"] },
  810: { alternateNames: ["The Eliminators", "Perry Saturn & John Kronus"], allies: [], rivals: ["The Dudley Boyz", "Sabu & Rob Van Dam", "The Gangstas"] },
  813: { alternateNames: ["The Radicalz", "Dean Malenko, Chris Benoit, Eddie Guerrero & Perry Saturn"], allies: [], rivals: ["DX", "Too Cool", "The Hardy Boyz", "The APA"] },
  822: { alternateNames: ["Hurricane & Rosey", "Hurri-Cane & Super Hero In Training"], allies: ["Mighty Molly", "Stacy Keibler"], rivals: ["La Résistance", "The Dudley Boyz", "3 Minute Warning"] },
  1625: { alternateNames: ["Ruby Riott", "Ruby Soho", "Heidi Lovelace"], allies: ["Liv Morgan", "Sarah Logan"], rivals: ["Bayley", "Natalya", "Charlotte Flair", "Becky Lynch"] },
  1626: { alternateNames: ["Serena Deeb", "Serena"], allies: ["CM Punk", "Luke Gallows", "Joey Mercury"], rivals: ["Beth Phoenix"] },
  // Missing tag team/group entries
  209: {
    allies: ['CM Punk', 'Kaitlyn'],
    rivals: ['Nikki Bella', 'Paige', 'Natalya', 'Eve Torres'],
    alternateNames: ['Miss Elizabeth (storyline)'],
  },
  231: {
    allies: ['Jerry Lawler'],
    rivals: [],
    alternateNames: ['Good Ol JR', 'JR'],
  },
  255: {
    allies: ['Fit Finlay'],
    rivals: ['El Torito'],
    alternateNames: ['Little Bastard', 'Swoggle'],
  },
  271: {
    allies: ['Fandango'],
    rivals: ['Dolph Ziggler'],
    alternateNames: ['Prince Pretty'],
  },
  275: {
    allies: [],
    rivals: ['The New Day', 'The Usos'],
    alternateNames: ['FTR', 'Dash & Dawson'],
  },
  278: {
    allies: ['Adam Cole', 'Bobby Fish', 'Roderick Strong'],
    rivals: ['Adam Cole', 'Pete Dunne'],
    alternateNames: [],
  },
  292: {
    allies: ['The Singh Brothers'],
    rivals: ['Randy Orton', 'AJ Styles', 'Shinsuke Nakamura'],
    alternateNames: ['The Modern Day Maharaja'],
  },
  372: {
    allies: ['Billy Gunn', 'Triple H', 'Shawn Michaels', 'X-Pac'],
    rivals: ['Mankind', 'The Rock', 'New Age Outlaws opponents'],
    alternateNames: ['The Roadie', 'Road Dogg'],
  },
  624: {
    allies: ['Julius Creed', 'Brutus Creed'],
    rivals: ['Julius Creed'],
  },
  647: {
    allies: [],
    rivals: ['The Dudley Boyz', 'Hurricane & Rosey'],
  },
  654: {
    allies: ['Rosa Mendes'],
    rivals: ['Air Boom', 'Epico & Primo opponents'],
  },
  671: {
    allies: ['Ivy Nile'],
    rivals: ['Wendy Choo', 'Lyra Valkyria'],
  },
  695: {
    allies: ['The Genius'],
    rivals: ['The Natural Disasters', 'The Bushwhackers'],
  },
  780: {
    allies: [],
    rivals: ['The New Day', 'Retribution'],
    alternateNames: ['THB'],
  },
  800: {
    allies: [],
    rivals: ['Demolition', 'The Brain Busters'],
    alternateNames: ['Tito Santana & Rick Martel'],
  },
  887: {
    allies: ['The Rock', 'Faarooq'],
    rivals: ['Goldust', 'Marc Mero', 'The Nation of Domination'],
    alternateNames: ['The Pearl River Powerhouse'],
  },
  962: {
    allies: ['El Torito'],
    rivals: ['The Usos', 'The Real Americans'],
    alternateNames: ['Primo & Epico', 'The Colons'],
  },
  1018: {
    allies: [],
    rivals: ['Alundra Blayze'],
  },
  1141: {
    alternateNames: [],
    allies: ['Tony Garea'],
    rivals: ['Mr. Fuji & Mr. Saito'],
  },
  1148: {
    alternateNames: ['Masa Saito'],
    allies: ['Mr. Fuji'],
    rivals: ['Tony Garea', 'Dean Ho'],
  },
  1342: {
    alternateNames: [],
    allies: [],
    rivals: ['The Undertaker', 'Bret Hart'],
  },
  1391: {
    allies: ['Noam Dar', 'Lash Legend', 'Jakara Jackson'],
    rivals: ['Tyler Bate', 'Nathan Frazer'],
  },
  1438: {
    allies: [],
    rivals: [],
    alternateNames: ['Zilla'],
  },

  527: { alternateNames: ['Butch', 'Rayo Americano'], allies: ['Tyler Bate', 'Ludwig Kaiser', 'Sheamus', 'Ridge Holland'], rivals: [] },
  190: { alternateNames: ['Matt Cardona'], allies: ['Curt Hawkins'], rivals: ['Mojo Rawley'] },
  // === Added March 2026: Missing current roster wrestlers ===
  1629: { alternateNames: ['Jordynne Grace'], allies: [], rivals: ['Roxanne Perez', 'Blake Monroe'] },
  1630: { alternateNames: ['Danhausen'], allies: [], rivals: [] },
  1631: { alternateNames: [], allies: ['Lucien Price'], rivals: ['Hank Walker', 'Tank Ledger'] },
  1632: { alternateNames: [], allies: ['Robert Stone', 'Cutler James', 'Saquon Shugars', 'Osiris Griffin'], rivals: ["Tony D'Angelo"] },
  1633: { alternateNames: ['Aigle Blanc'], allies: [], rivals: [] },
  1634: { alternateNames: [], allies: ['Osiris Griffin', 'Robert Stone', 'Cutler James', 'Dion Lennox'], rivals: ["Je'Von Evans"] },
  1635: { alternateNames: [], allies: ['Saquon Shugars', 'Robert Stone', 'Cutler James', 'Dion Lennox'], rivals: [] },
  1636: { alternateNames: [], allies: [], rivals: [] },
  1637: { alternateNames: [], allies: [], rivals: [] },
  1638: { alternateNames: [], allies: [], rivals: [] }, // The Culling
  1639: { alternateNames: [], allies: [], rivals: [] },
  1640: { alternateNames: ['Dani Sekelsky'], allies: [], rivals: [] },
  1641: { alternateNames: ['La Diablita'], allies: [], rivals: [] },
  1642: { alternateNames: ['The Bone Collector'], allies: [], rivals: [] },
  1643: { alternateNames: ['Jeff Cobb', 'Matanza Cueto'], allies: ['Jacob Fatu', 'Tama Tonga', 'Tonga Loa'], rivals: [] },
  1644: { alternateNames: [], allies: [], rivals: [] },
  1645: { alternateNames: [], allies: ['Andre Chase', 'Uriah Connors'], rivals: ['Uriah Connors'] },
  1647: { alternateNames: [], allies: ['Brad Baylor', 'Ricky Smokes'], rivals: [] },
  1648: { alternateNames: [], allies: [], rivals: [] },
  1649: { alternateNames: [], allies: ['Fallon Henley', 'Jacy Jayne'], rivals: [] },
  1650: { alternateNames: ['Powerhouse Hobbs', 'Will Hobbs'], allies: [], rivals: ['Damian Priest'] },
  1651: { alternateNames: ['Mariah May', 'The Glamour'], allies: [], rivals: ['Jordynne Grace', 'Jaida Parker'] },
  1653: { alternateNames: [], allies: [], rivals: [] },

  134: { alternateNames: ['Nattie', 'Nattie Neidhart'], allies: ['Tyson Kidd', 'Beth Phoenix', 'Tamina'], rivals: ['Becky Lynch', 'Ronda Rousey', 'Charlotte Flair', 'Lacey Evans'] },
  1654: { alternateNames: [], allies: [], rivals: [] },
  1658: { alternateNames: [], allies: [], rivals: [] },
  1659: { alternateNames: [], allies: [], rivals: [] },
  1661: { alternateNames: [], allies: [], rivals: [] },
  1662: { alternateNames: [], allies: [], rivals: [] },
  1663: { alternateNames: [], allies: [], rivals: [] },

  1664: { alternateNames: ['Cyrus Habibi-Likio'], allies: [], rivals: [] },
  1665: { alternateNames: [], allies: [], rivals: [] },
  1666: { alternateNames: [], allies: [], rivals: [] },

  1627: { alternateNames: ['Erick Rowan', 'Rowan'], allies: ['Bray Wyatt', 'Luke Harper', 'Braun Strowman', 'Uncle Howdy'], rivals: ['The Rock', 'Roman Reigns', 'Daniel Bryan'] },
  1628: { alternateNames: ['Wyatt Sicks', 'The Wyatt 6'], allies: [], rivals: ['Chad Gable', 'The Miz', 'American Made'] },

  // ── MANAGERS-ONLY ADDITIONS ────────────────────────────────────
  33: { // Undertaker
    alternateNames: ['The Undertaker', 'The Deadman', 'The Phenom', 'The American Badass', 'Mark Calaway', 'Mean Mark Callous'],
    allies: ['Kane (Brothers of Destruction)', 'Paul Bearer'],
    rivals: ['Mankind', 'Kane', 'Triple H', 'Shawn Michaels', 'Edge', 'Batista', 'Brock Lesnar', 'Roman Reigns'],
    managers: ['Paul Bearer'],
  },
  34: { // Shawn Michaels
    alternateNames: ['The Heartbreak Kid', 'HBK', 'The Showstopper', 'Mr. WrestleMania', 'The Icon'],
    allies: ['Triple H (DX)', 'Diesel (bodyguard)', 'Marty Jannetty (Rockers)'],
    rivals: ['Bret Hart', 'Undertaker', 'Triple H', 'Chris Jericho', 'Razor Ramon', 'Kurt Angle', 'Ric Flair'],
    managers: ['Sensational Sherri', 'José Lothario'],
  },
  79: { // Brock Lesnar
    alternateNames: ['Brock Lesnar', 'The Beast Incarnate', 'The Conqueror', 'The Next Big Thing'],
    allies: ['Paul Heyman'],
    rivals: ['Undertaker', 'John Cena', 'Roman Reigns', 'Goldberg', 'Kurt Angle', 'The Rock', 'CM Punk', 'Drew McIntyre'],
    managers: ['Paul Heyman'],
  },
  85: { // CM Punk
    alternateNames: ['CM Punk', 'The Best in the World', 'The Voice of the Voiceless', 'The Straight Edge Superstar'],
    allies: ['Paul Heyman', 'Luke Gallows (SES)'],
    rivals: ['John Cena', 'The Rock', 'Jeff Hardy', 'Randy Orton', 'Chris Jericho', 'Undertaker', 'Brock Lesnar', 'Drew McIntyre'],
    managers: ['Paul Heyman'],
  },
  88: { // Jack Swagger
    alternateNames: ['Jack Swagger', 'Jake Hager', 'The All-American American'],
    allies: ['Zeb Colter'],
    rivals: ['Alberto Del Rio', 'Dolph Ziggler', 'John Cena', 'Edge'],
    managers: ['Zeb Colter', 'Vickie Guerrero'],
  },
  89: { // Dolph Ziggler
    alternateNames: ['Dolph Ziggler', 'Nicky (Spirit Squad)', 'The Showoff'],
    allies: ['AJ Lee', 'Big E (early)'],
    rivals: ['John Cena', 'The Miz', 'Seth Rollins', 'Drew McIntyre', 'Edge', 'Jack Swagger'],
    managers: ['Vickie Guerrero', 'AJ Lee'],
  },
  93: { // Roman Reigns
    alternateNames: ['Roman Reigns', 'The Tribal Chief', 'The Head of the Table', 'The Big Dog', 'OTC'],
    allies: ['The Usos (Bloodline)', 'Solo Sikoa (Bloodline)', 'Paul Heyman (Special Counsel)'],
    rivals: ['Brock Lesnar', 'John Cena', 'Seth Rollins', 'Cody Rhodes', 'Jey Uso', 'Kevin Owens', 'Drew McIntyre'],
    managers: ['Paul Heyman'],
  },
  104: { // Cesaro
    alternateNames: ['Cesaro', 'Claudio Castagnoli', 'Antonio Cesaro', 'The Swiss Superman'],
    allies: ['Sheamus (The Bar)', 'Tyson Kidd'],
    rivals: ['John Cena', 'Sami Zayn', 'The Miz', 'Seth Rollins'],
    managers: ['Paul Heyman', 'Zeb Colter'],
  },
  106: { // Rusev
    alternateNames: ['Rusev', 'Alexander Rusev', 'Miro', 'The Bulgarian Brute', 'Rusev Day'],
    allies: ['Aiden English (Rusev Day)'],
    rivals: ['John Cena', 'Roman Reigns', 'Bobby Lashley', 'Dolph Ziggler'],
    managers: ['Lana'],
  },
  118: { // Faarooq
    alternateNames: ['Farooq', 'Faarooq', 'Ron Simmons', 'DAMN!'],
    allies: ['Bradshaw (APA)', 'The Rock (Nation of Domination)'],
    rivals: ['The Rock', 'The Undertaker', 'Ahmed Johnson'],
    managers: ['Sunny'],
  },
  131: { // Bobby Lashley
    alternateNames: ['Bobby Lashley', 'The All Mighty', 'The Dominator'],
    allies: ['MVP (Hurt Business)', 'Cedric Alexander (Hurt Business)', 'Shelton Benjamin (Hurt Business)'],
    rivals: ['Drew McIntyre', 'The Miz', 'Brock Lesnar', 'Roman Reigns', 'Donald Trump (WM Battle of Billionaires)'],
    managers: ['MVP'],
  },
  216: { // Karrion Kross
    alternateNames: ['Karrion Kross', 'Killer Kross', 'The Doomsday Prophet'],
    allies: ['Scarlett'],
    rivals: ['Drew McIntyre', 'Rey Mysterio', 'The New Day'],
    managers: ['Scarlett'],
  },
  401: { // Angel Garza
    alternateNames: ['Angel Garza', 'Humberto Carrillo (cousin team)'],
    allies: ['Andrade', 'Austin Theory'],
    rivals: ['Humberto Carrillo', 'Rey Mysterio'],
    managers: ['Zelina Vega'],
  },
  478: { // Curtis Axel
    alternateNames: ['Curtis Axel', 'Michael McGillicutty', 'Joe Hennig'],
    allies: ['Ryback (Rybaxel)', 'Bo Dallas (The B-Team)'],
    rivals: ['The Miz', 'Kofi Kingston'],
    managers: ['Paul Heyman'],
  },
  482: { // Andrade El Ídolo
    alternateNames: ['Andrade', 'Andrade El Ídolo', 'La Sombra', 'Andrade "Cien" Almas'],
    allies: ['Angel Garza', 'Charlotte Flair'],
    rivals: ['Rey Mysterio', 'Johnny Gargano', 'Aleister Black'],
    managers: ['Zelina Vega'],
  },
  564: { // Marc Mero
    alternateNames: ['Marc Mero', 'Johnny B. Badd', 'Wildman Marc Mero'],
    allies: ['Sable'],
    rivals: ['Triple H', 'Goldust', 'Tom Brandi'],
    managers: ['Sable'],
  },
  932: { // Giant Gonzalez
    alternateNames: ['Giant Gonzalez', 'El Gigante', 'Jorge González'],
    allies: [],
    rivals: ['Undertaker'],
    managers: ['Harvey Wippleman'],
  },

  // ── Alternate Name Mappings ────────────────────────────────────────
  138: { alternateNames: ['Austin Theory'], allies: [], rivals: [] },
  861: { alternateNames: ['Matt Riddle'], allies: [], rivals: [] },
  345: { alternateNames: ['Mustafa Ali'], allies: [], rivals: [] },
  139: { alternateNames: ['WALTER', 'Walter'], allies: [], rivals: [] },
  173: { alternateNames: ['The Brian Kendrick'], allies: [], rivals: [] },
  107: { alternateNames: ['King Barrett'], allies: [], rivals: [] },
  507: { alternateNames: ['DDP'], allies: [], rivals: [] },
  114: { alternateNames: ['Mabel', 'King Mabel'], allies: [], rivals: [] },
  868: { alternateNames: ['Tamina'], allies: [], rivals: [] },
  384: { alternateNames: ['Layla'], allies: [], rivals: [] },
  125: { alternateNames: ['The Hurricane'], allies: [], rivals: [] },
  1667: { alternateNames: ['Mexicools', 'Los Mexicools'], allies: ['Super Crazy', 'Psicosis', 'Juventud Guerrera'], rivals: ['BWO', 'Blue World Order'] },

};

export default RELATIONSHIPS;
