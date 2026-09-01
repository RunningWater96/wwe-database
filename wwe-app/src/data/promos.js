// Famous catchphrases and promos, keyed by wrestler ID
// Each entry: { quote, context, year, iconic }

const PROMOS = {
  4: [ // Hulk Hogan
    { quote: 'Whatcha gonna do when Hulkamania runs wild on you?!', context: 'Signature catchphrase', year: '1984', iconic: true },
    { quote: 'Let me tell you something, brother!', context: 'Interview opener', year: '1984', iconic: true },
    { quote: 'But whose side is he on?!', context: 'nWo heel turn at Bash at the Beach', year: '1996', iconic: true },
  ],
  5: [ // Randy Savage
    { quote: 'Ooh yeah! The cream of the crop rises to the top!', context: 'Coffee creamer promo', year: '1987', iconic: true },
    { quote: 'The Macho Man is the tower of power, too sweet to be sour!', context: 'Signature promo style', year: '1988', iconic: true },
  ],
  7: [ // Roddy Piper
    { quote: 'Just when they think they got the answers, I change the questions!', context: 'Piper\'s Pit', year: '1985', iconic: true },
    { quote: 'I have come here to chew bubblegum and kick ass... and I\'m all out of bubblegum.', context: 'They Live movie (crossed over to wrestling)', year: '1988', iconic: true },
  ],
  9: [ // Ted DiBiase
    { quote: 'Everybody\'s got a price! Hahahaha!', context: 'Million Dollar Man signature', year: '1987', iconic: true },
    { quote: 'Money, money, money, money, money!', context: 'Entrance theme lyric and signature laugh', year: '1988', iconic: true },
    { quote: 'You see, I can buy anything I want. And what I want is the WWF Championship!', context: 'Failed to buy the title from Andre, leading to the tournament at WrestleMania IV', year: '1988', iconic: false },
  ],
  10: [ // Jake Roberts
    { quote: 'Trust me.', context: 'Signature two-word catchphrase', year: '1986', iconic: true },
    { quote: 'The snake knows where you sleep.', context: 'Psychological promo style', year: '1991', iconic: false },
  ],
  12: [ // Ultimate Warrior
    { quote: 'Load the spaceship with the rocket fuel! Load it with the warriors!', context: 'Warrior\'s incoherent intensity', year: '1990', iconic: true },
    { quote: 'The power of the Warrior will be felt by all who stand in my path!', context: 'Pre-match intensity promo on Superstars', year: '1989', iconic: false },
    { quote: 'Hulk Hogan, I can feel the warriors running through my veins!', context: 'Challenge to Hogan before WrestleMania VI', year: '1990', iconic: true },
  ],
  14: [ // Rick Rude
    { quote: 'What I\'d like to have right now is for all you fat, out-of-shape sweat hogs to keep the noise down.', context: 'Signature crowd insult', year: '1988', iconic: true },
    { quote: 'Hit my music!', context: 'First person to appear on both Raw and Nitro on the same night', year: '1997', iconic: true },
    { quote: 'Simply Ravishing!', context: 'Signature self-description with hip swivel', year: '1989', iconic: true },
  ],
  22: [ // Yokozuna
    { quote: 'Banzai!', context: 'Banzai Drop signature call', year: '1993', iconic: false },
    { quote: 'Yokozuna ichiban!', context: 'Japanese for "Yokozuna is number one" — used in rare interviews', year: '1993', iconic: false },
    { quote: 'No one can move me!', context: 'Immovable object persona — backed by Mr. Fuji at ringside', year: '1994', iconic: false },
  ],
  23: [ // Razor Ramon / Scott Hall
    { quote: 'Say hello to the bad guy.', context: 'Entrance catchphrase', year: '1993', iconic: true },
    { quote: 'Hey yo!', context: 'Signature greeting/entrance', year: '1996', iconic: true },
    { quote: 'Hard work pays off, dreams come true. Bad times don\'t last, but bad guys do.', context: 'Hall of Fame speech', year: '2014', iconic: true },
    { quote: 'You want a war? You got one.', context: 'Nitro invasion promo', year: '1996', iconic: false },
  ],
  24: [ // Diesel / Kevin Nash
    { quote: 'Big Daddy Cool is in the house.', context: 'nWo era entrance', year: '1996', iconic: false },
    { quote: 'Big Daddy Cool is in the house!', context: 'Diesel entrance', year: '1994', iconic: false },
  ],
  25: [ // Owen Hart
    { quote: 'Enough is enough, and it\'s time for a change!', context: 'King of Harts heel turn', year: '1994', iconic: true },
    { quote: 'I am not a nugget!', context: 'Nation of Domination feud', year: '1998', iconic: true },
  ],
  27: [ // Goldust
    { quote: 'You\'ll never forget the name of... Goldust.', context: 'Androgynous character intro', year: '1995', iconic: true },
    { quote: 'Shattered dreams... that\'s what you\'ll have when I\'m done with you.', context: 'Shattered Dreams finisher-based persona promo', year: '1996', iconic: false },
    { quote: 'The name on the marquee is Goldust, and this is my world.', context: 'Golden age character promos on Raw', year: '1996', iconic: false },
  ],
  30: [ // Triple H
    { quote: 'I am the Game, and I am that damn good!', context: 'The Game persona', year: '2000', iconic: true },
    { quote: 'Time to play the game!', context: 'Entrance catchphrase', year: '2001', iconic: true },
    { quote: 'Am I f***ing going over?', context: 'Backstage catchphrase (industry joke)', year: '2003', iconic: false },
  ],
  31: [ // Stone Cold Steve Austin
    { quote: 'Austin 3:16 says I just whipped your ass!', context: 'King of the Ring 1996, birth of the Austin era', year: '1996', iconic: true },
    { quote: 'And that\'s the bottom line, because Stone Cold said so!', context: 'Signature promo closer', year: '1997', iconic: true },
    { quote: 'Give me a hell yeah!', context: 'Crowd interaction catchphrase', year: '1998', iconic: true },
    { quote: 'What?!', context: 'Interruption catchphrase', year: '2001', iconic: true },
    { quote: 'DTA: Don\'t Trust Anybody.', context: 'Austin\'s philosophy', year: '1997', iconic: false },
  ],
  32: [ // The Rock
    { quote: 'If you smell what The Rock is cookin\'!', context: 'Signature catchphrase', year: '1998', iconic: true },
    { quote: 'It doesn\'t matter what your name is!', context: 'Interview interruption', year: '1999', iconic: true },
    { quote: 'Finally, The Rock has come back to [city name]!', context: 'Entrance promo', year: '1999', iconic: true },
    { quote: 'Know your role and shut your mouth!', context: 'Heel Rock catchphrase', year: '1999', iconic: true },
    { quote: 'The most electrifying man in sports entertainment!', context: 'Self-description', year: '2000', iconic: true },
    { quote: 'Lay the smackdown on your candy ass!', context: 'Named the show SmackDown', year: '1999', iconic: true },
    { quote: 'Just bring it!', context: 'Challenge catchphrase', year: '2001', iconic: false },
  ],
  33: [ // Undertaker
    { quote: 'Rest... in... peace.', context: 'Signature farewell', year: '1990', iconic: true },
    { quote: 'You will never be able to rest in peace if you step into my yard.', context: 'American Badass era', year: '2002', iconic: false },
  ],
  34: [ // Shawn Michaels
    { quote: 'I\'m just a sexy boy! I\'m not your boy toy!', context: 'Entrance theme lyrics/catchphrase', year: '1993', iconic: true },
    { quote: 'I lost my smile.', context: 'Controversial retirement promo', year: '1997', iconic: true },
  ],
  35: [ // Chris Jericho
    { quote: 'Welcome to Raw is Jericho!', context: 'WWE debut - Millennium countdown', year: '1999', iconic: true },
    { quote: 'You stupid idiot!', context: 'Heel catchphrase', year: '2016', iconic: true },
    { quote: 'I am the best in the world at what I do.', context: 'Signature boast', year: '2008', iconic: false },
    { quote: 'Drink it in, man!', context: 'Scarf Jericho era', year: '2016', iconic: false },
  ],
  36: [ // Kurt Angle
    { quote: 'It\'s true, it\'s true!', context: 'Olympic gold medal boast', year: '2000', iconic: true },
    { quote: 'Oh, it\'s true. It\'s damn true!', context: 'Evolution of catchphrase', year: '2001', iconic: true },
    { quote: 'I won a gold medal with a broken freakin\' neck!', context: 'Toughness boast', year: '2001', iconic: true },
    { quote: 'You suck! You suck!', context: 'Crowd chant (became beloved)', year: '2002', iconic: true },
  ],
  43: [ // Mankind / Mick Foley
    { quote: 'Have a nice day!', context: 'Mankind catchphrase with thumbs up', year: '1997', iconic: true },
    { quote: 'Bang bang!', context: 'Cactus Jack catchphrase', year: '1998', iconic: true },
    { quote: 'Right here, in [city name]!', context: 'Cheap pop master', year: '1999', iconic: true },
    { quote: 'I want to apologize to the people who are about to see this.', context: 'Pre-Hell in a Cell', year: '1998', iconic: false },
  ],
  44: [ // Kane
    { quote: 'That\'s gotta be Kane!', context: 'Jim Ross call (became identity)', year: '1997', iconic: true },
    { quote: 'I am the Devil\'s favorite demon!', context: 'Signature self-description', year: '2008', iconic: true },
    { quote: 'Through hellfire and brimstone, I have risen!', context: 'Big Red Machine supernatural persona', year: '1998', iconic: false },
    { quote: 'I\'m not locked in here with you. You\'re locked in here with me.', context: 'Unmasked monster Kane promo', year: '2003', iconic: false },
  ],
  45: [ // Bret Hart
    { quote: 'I\'m the best there is, the best there was, and the best there ever will be.', context: 'Signature catchphrase', year: '1993', iconic: true },
    { quote: 'The excellence of execution!', context: 'Nickname/catchphrase', year: '1991', iconic: true },
  ],
  46: [ // Chris Benoit
    { quote: 'Prove me wrong.', context: 'Intensity-driven persona', year: '2004', iconic: false },
    { quote: 'I have sacrificed everything to get to this point.', context: 'World Heavyweight Championship pursuit on Raw', year: '2004', iconic: false },
    { quote: 'I will make you tap.', context: 'Crippler Crossface submission specialist threat', year: '2003', iconic: false },
  ],
  47: [ // Edge
    { quote: 'You think you know me?', context: 'Entrance theme lyric/catchphrase', year: '1999', iconic: true },
    { quote: 'On this day, I see clearly.', context: 'Metalingus entrance', year: '2004', iconic: true },
  ],
  49: [ // Jeff Hardy
    { quote: 'Live for the moment!', context: 'Daredevil persona motto', year: '2008', iconic: false },
    { quote: 'I want to be remembered as the guy who gave everything he had every single night.', context: 'Emotional promo on his legacy', year: '2009', iconic: false },
    { quote: 'I\'m not afraid to die, I\'m afraid to never live.', context: 'Extreme daredevil philosophy', year: '2003', iconic: false },
    { quote: 'The creatures of the night are behind me!', context: 'Enigma persona fan connection', year: '2008', iconic: true },
  ],
  53: [ // Mark Henry
    { quote: 'That\'s what I do!', context: 'Hall of Pain era', year: '2011', iconic: true },
    { quote: 'Y\'all a bunch of puppets!', context: 'Fake retirement promo', year: '2013', iconic: true },
  ],
  55: [ // Ken Shamrock
    { quote: 'I\'m the World\'s Most Dangerous Man!', context: 'UFC crossover persona', year: '1997', iconic: false },
    { quote: 'You made me snap!', context: 'After going into the "Danger Zone" and losing control post-match', year: '1998', iconic: false },
    { quote: 'I didn\'t come from sports entertainment — I came from the real fight game.', context: 'Establishing legitimacy as UFC crossover star', year: '1997', iconic: false },
  ],
  56: [ // Big Show
    { quote: 'Well, it\'s the Big Show!', context: 'Entrance theme lyric', year: '1999', iconic: false },
    { quote: 'I\'m a giant! You can\'t beat a giant!', context: 'Heel boast about his size advantage', year: '2002', iconic: false },
    { quote: 'I am the world\'s largest athlete!', context: 'Signature self-description throughout career', year: '2000', iconic: true },
    { quote: 'Weeeell, it\'s a big bad show tonight!', context: 'Heel version of entrance theme', year: '2012', iconic: false },
  ],
  54: [ // Val Venis
    { quote: 'Hello, ladies!', context: 'Adult film star gimmick intro', year: '1998', iconic: true },
    { quote: 'The Big Valbowski is here to give you... the money shot!', context: 'Signature promo with towel and innuendo', year: '1998', iconic: false },
    { quote: 'I came, I saw, and I came again.', context: 'Attitude Era double entendre catchphrase', year: '1999', iconic: false },
  ],
  58: [ // Road Dogg
    { quote: 'Oh, you didn\'t know? Your ass better call somebody!', context: 'DX tag intro', year: '1998', iconic: true },
    { quote: 'Ladies and gentlemen, boys and girls, children of all ages...', context: 'New Age Outlaws intro', year: '1998', iconic: true },
  ],
  59: [ // Billy Gunn
    { quote: 'I\'m an ass man!', context: 'Mr. Ass persona', year: '1999', iconic: true },
    { quote: 'I am the One — the one Billy Gunn!', context: 'Solo push after the New Age Outlaws', year: '1999', iconic: false },
    { quote: 'Ladies and gentlemen, boys and girls, children of all ages — D-Generation X proudly brings to you its tag team champions of the woooorld!', context: 'New Age Outlaws entrance speech with Road Dogg', year: '1998', iconic: true },
  ],
  61: [ // Lita
    { quote: 'It\'s gonna be extreme!', context: 'ECW/attitude era', year: '2000', iconic: false },
    { quote: 'I didn\'t come here to be a diva. I came here to be a wrestler.', context: 'Attitude Era boundary-breaking promo', year: '2001', iconic: false },
    { quote: 'This Sunday I\'m going to make history, and none of you can stop me!', context: 'Before winning Women\'s Championship', year: '2000', iconic: false },
    { quote: 'This is for all the girls who were told they can\'t hang with the boys.', context: 'Trailblazer for women\'s wrestling', year: '2006', iconic: true },
  ],
  62: [ // Trish Stratus
    { quote: '100% Stratusfaction guaranteed!', context: 'Signature catchphrase', year: '2002', iconic: true },
    { quote: 'I\'m not just a pretty face. I am the Women\'s Champion!', context: 'Proving herself beyond the T&A days', year: '2002', iconic: false },
    { quote: 'I am the greatest Women\'s Champion of all time.', context: 'Seven-time Women\'s Champion legacy promo', year: '2006', iconic: true },
    { quote: 'Toronto, I\'m home!', context: 'Retirement match at Unforgiven in Toronto', year: '2006', iconic: true },
  ],
  63: [ // The Godfather
    { quote: 'Pimpin\' ain\'t easy!', context: 'Ho Train entrance', year: '1999', iconic: true },
    { quote: 'All aboard the Ho Train!', context: 'Entrance catchphrase', year: '1999', iconic: true },
  ],
  72: [ // Eddie Guerrero
    { quote: 'I lie, I cheat, I steal!', context: 'Latino Heat motto', year: '2003', iconic: true },
    { quote: 'Viva la raza!', context: 'Entrance catchphrase', year: '2002', iconic: true },
    { quote: 'Orale ese!', context: 'Signature greeting', year: '2003', iconic: false },
  ],
  74: [ // Vince McMahon
    { quote: 'You\'re fired!', context: 'Evil boss catchphrase', year: '2003', iconic: true },
    { quote: 'No chance in hell!', context: 'Entrance theme/persona', year: '1999', iconic: true },
    { quote: 'Life sucks, and then you die.', context: 'Mr. McMahon promo', year: '1998', iconic: false },
    { quote: 'It was me, Austin! It was me all along!', context: 'Higher Power reveal', year: '1999', iconic: true },
  ],
  75: [ // John Cena
    { quote: 'You can\'t see me!', context: 'Hand wave signature', year: '2003', iconic: true },
    { quote: 'Hustle, Loyalty, Respect.', context: 'Motto/catchphrase', year: '2005', iconic: true },
    { quote: 'The champ is here!', context: 'Entrance catchphrase', year: '2005', iconic: true },
    { quote: 'Never give up!', context: 'Motivational catchphrase', year: '2005', iconic: true },
  ],
  76: [ // Batista
    { quote: 'I walk alone.', context: 'Post-Evolution theme/persona', year: '2005', iconic: false },
    { quote: 'Deal with it!', context: 'Sunglasses meme moment', year: '2014', iconic: false },
  ],
  77: [ // Randy Orton
    { quote: 'I hear voices in my head, they counsel me, they understand, they talk to me.', context: 'Theme song/Viper persona', year: '2008', iconic: true },
    { quote: 'There is no bell to ring!', context: 'Assaulting the McMahons', year: '2009', iconic: false },
    { quote: 'Stupid! Stupid! Stupid!', context: 'Punting opponents in the skull', year: '2009', iconic: false },
  ],
  78: [ // Rey Mysterio
    { quote: 'Booyaka booyaka, 619!', context: 'Entrance catchphrase', year: '2003', iconic: true },
    { quote: 'This is for you, Eddie!', context: 'Emotional WrestleMania 22 World Heavyweight Championship win dedicated to Eddie Guerrero', year: '2006', iconic: true },
    { quote: 'I\'m the biggest little man in WWE history!', context: 'Underdog persona promo', year: '2005', iconic: false },
    { quote: 'I represent every kid who was told they were too small to make it.', context: 'Babyface motivational promo', year: '2009', iconic: false },
  ],
  79: [ // Brock Lesnar
    { quote: 'Eat. Sleep. Conquer. Repeat.', context: 'Beast Incarnate motto', year: '2014', iconic: true },
    { quote: 'Suplex City, bitch!', context: 'WrestleMania 31 vs Reigns', year: '2015', iconic: true },
  ],
  80: [ // JBL
    { quote: 'I am a wrestling god!', context: 'WWE Champion heel promo', year: '2004', iconic: true },
    { quote: 'I became a self-made millionaire, and now I\'m a self-made champion!', context: 'Corporate champion persona on SmackDown', year: '2004', iconic: false },
    { quote: 'This is my America! This is my championship!', context: 'Nationalist heel champion promos', year: '2005', iconic: false },
  ],
  81: [ // Booker T
    { quote: 'Can you dig it, sucka?!', context: 'Signature catchphrase', year: '2001', iconic: true },
    { quote: 'Now hold on a minute, playa!', context: 'SmackDown GM era', year: '2007', iconic: false },
    { quote: 'Tell me... he did NOT just say that!', context: 'Commentary catchphrase', year: '2011', iconic: false },
  ],
  85: [ // CM Punk
    { quote: 'It\'s clobberin\' time!', context: 'Entrance catchphrase', year: '2006', iconic: true },
    { quote: 'Best in the world!', context: 'Signature claim', year: '2011', iconic: true },
    { quote: 'I am the voice of the voiceless!', context: 'Pipebomb era', year: '2011', iconic: true },
    { quote: 'Do I have everybody\'s attention now?', context: 'Pipebomb promo opener, June 27, 2011', year: '2011', iconic: true },
  ],
  87: [ // The Miz
    { quote: 'I\'m The Miz, and I\'m awesome!', context: 'Signature catchphrase', year: '2009', iconic: true },
    { quote: 'Really? Really? Really?', context: 'Crowd interaction bit', year: '2011', iconic: false },
  ],
  89: [ // Dolph Ziggler
    { quote: 'I\'m here to show the world!', context: 'Entrance theme lyric', year: '2012', iconic: false },
    { quote: 'It should have been me!', context: 'Jealousy promo', year: '2016', iconic: false },
  ],
  91: [ // Daniel Bryan
    { quote: 'Yes! Yes! Yes!', context: 'Crowd chant phenomenon', year: '2012', iconic: true },
    { quote: 'No! No! No!', context: 'Original heel version', year: '2012', iconic: true },
    { quote: 'Fight for your dreams and your dreams will fight for you.', context: 'Retirement speech', year: '2016', iconic: false },
  ],
  92: [ // Seth Rollins
    { quote: 'Burn it down!', context: 'Entrance catchphrase', year: '2017', iconic: true },
    { quote: 'I am the architect of this industry. I built this place from the ground up.', context: 'The Architect persona after cashing in MITB', year: '2015', iconic: false },
    { quote: 'I am the visionary! I am the revolutionary! I am Seth Freakin\' Rollins!', context: 'Seth Freakin\' Rollins persona declaration', year: '2022', iconic: true },
    { quote: 'You sold out! You sold out!', context: 'Crowd chants after betraying The Shield', year: '2014', iconic: true },
  ],
  93: [ // Roman Reigns
    { quote: 'Believe that!', context: 'Shield/solo era catchphrase', year: '2014', iconic: true },
    { quote: 'Acknowledge me!', context: 'Tribal Chief heel persona', year: '2020', iconic: true },
    { quote: 'I\'m the Head of the Table.', context: 'Tribal Chief character', year: '2020', iconic: true },
  ],
  94: [ // Dean Ambrose / Jon Moxley
    { quote: 'Nah, I\'m good.', context: 'Ambrose nonchalant style', year: '2016', iconic: false },
    { quote: 'Nah, I ain\'t done talking.', context: 'Unhinged promo style', year: '2015', iconic: false },
    { quote: 'I\'m a sick guy.', context: 'Heel turn on Seth Rollins', year: '2018', iconic: false },
  ],
  95: [ // Bray Wyatt
    { quote: 'Follow the buzzards.', context: 'Wyatt Family leader', year: '2013', iconic: true },
    { quote: 'Run!', context: 'Firefly Fun House', year: '2019', iconic: false },
    { quote: 'Let me in!', context: 'The Fiend persona', year: '2019', iconic: true },
    { quote: 'We\'re here.', context: 'Wyatt Family arrival', year: '2013', iconic: false },
  ],
  96: [ // Kevin Owens
    { quote: 'Fight Owens Fight!', context: 'Signature motto', year: '2015', iconic: true },
    { quote: 'I do what\'s best for my family. That\'s why I do what I do.', context: 'Justification for heel tactics', year: '2015', iconic: false },
    { quote: 'I\'m the prizefighter. That title is everything to me.', context: 'Universal Championship pursuit on Raw', year: '2016', iconic: false },
    { quote: 'Welcome to the Kevin Owens Show!', context: 'Self-proclaimed show on SmackDown', year: '2017', iconic: false },
  ],
  97: [ // Sami Zayn
    { quote: 'Ole! Ole ole ole!', context: 'Crowd sing-along', year: '2016', iconic: true },
    { quote: 'I\'m the underdog from the underground!', context: 'NXT babyface persona promo', year: '2014', iconic: false },
    { quote: 'I am an honorary Uce!', context: 'Infiltrating The Bloodline storyline on SmackDown', year: '2023', iconic: true },
    { quote: 'I don\'t need your acknowledgment, Roman. I need your respect.', context: 'Confronting Roman Reigns during Bloodline saga', year: '2023', iconic: true },
  ],
  98: [ // AJ Styles
    { quote: 'The house that AJ Styles built!', context: 'SmackDown era', year: '2016', iconic: false },
    { quote: 'They don\'t want none!', context: 'Entrance theme lyric/catchphrase', year: '2016', iconic: true },
  ],
  100: [ // Drew McIntyre
    { quote: 'Claymore Country!', context: 'Finisher catchphrase', year: '2020', iconic: false },
    { quote: 'I was The Chosen One, and I failed. But I came back, and now I\'m the champion!', context: 'WWE Championship coronation at WrestleMania 36', year: '2020', iconic: true },
    { quote: 'The Scottish Warrior doesn\'t back down from anyone!', context: 'Babyface champion promos on Raw', year: '2020', iconic: false },
    { quote: 'I\'ve got a countdown of my own — and your time is up!', context: 'Feud with CM Punk over World Heavyweight Championship', year: '2024', iconic: false },
  ],
  101: [ // Becky Lynch
    { quote: 'I\'m The Man!', context: 'Main event push catchphrase', year: '2018', iconic: true },
    { quote: 'Straight fire!', context: 'NXT/early main roster', year: '2016', iconic: false },
  ],
  102: [ // Charlotte Flair
    { quote: 'Wooooo!', context: 'Flair family tradition', year: '2015', iconic: true },
    { quote: 'Bow down to the Queen!', context: 'Queen Charlotte persona', year: '2016', iconic: false },
  ],
  103: [ // Sasha Banks / Mercedes Moné
    { quote: 'It\'s Boss Time!', context: 'Michael Cole\'s call (became her catchphrase)', year: '2015', iconic: true },
    { quote: 'Legit Boss!', context: 'Self-proclaimed title', year: '2015', iconic: true },
  ],
  105: [ // New Day
    { quote: 'New Day rocks! New Day rocks!', context: 'Tag team chant', year: '2015', iconic: true },
    { quote: 'Because New Day rocks! New Day rocks!', context: 'Crowd sing-along that turned them from heels to beloved babyfaces', year: '2015', iconic: true },
    { quote: 'The Power of Positivity!', context: 'Faction motto — Big E, Kofi Kingston, Xavier Woods', year: '2015', iconic: true },
    { quote: 'We are the longest-reigning tag team champions in WWE history!', context: 'Record-breaking 483-day reign celebration', year: '2016', iconic: true },
  ],
  106: [ // Rusev / Miro
    { quote: 'Rusev Day!', context: 'Cult catchphrase/calendar gimmick', year: '2017', iconic: true },
    { quote: 'Rusev machka!', context: 'Bulgarian catchphrase (crush)', year: '2014', iconic: false },
  ],
  108: [ // Alberto Del Rio
    { quote: 'But you already know that!', context: 'Self-introduction closer', year: '2010', iconic: false },
    { quote: 'My name is Alberto Del Rio, and my destiny is to be your new WWE Champion!', context: 'Debut promo style', year: '2010', iconic: false },
  ],
  109: [ // Goldberg
    { quote: 'Who\'s next?!', context: 'Post-match challenge', year: '1998', iconic: true },
    { quote: 'You\'re last!', context: 'Response to Brock Lesnar at WrestleMania XX', year: '2004', iconic: false },
    { quote: 'I\'m back, and I\'m here to destroy Brock Lesnar!', context: 'Return promo on Raw before Survivor Series 2016', year: '2016', iconic: false },
    { quote: 'Goldberg! Goldberg! Goldberg!', context: 'Crowd chant that became synonymous with his undefeated streak', year: '1998', iconic: true },
  ],
  110: [ // Ric Flair
    { quote: 'Wooooo!', context: 'Signature exclamation', year: '1975', iconic: true },
    { quote: 'To be the man, you gotta beat the man!', context: 'Signature promo line', year: '1981', iconic: true },
    { quote: 'Diamonds are forever, and so is Ric Flair!', context: 'Self-description', year: '1985', iconic: true },
    { quote: 'I\'m Ric Flair! The stylin\', profilin\', limousine riding, jet flying, kiss-stealing, wheelin\' n\' dealin\' son of a gun!', context: 'Full signature promo', year: '1985', iconic: true },
    { quote: 'Whether you like it or not, learn to love it, because it\'s the best thing going today!', context: 'NWA World Champion promos', year: '1983', iconic: false },
  ],
  124: [ // Ivory
    { quote: 'Right to Censor is right for you!', context: 'RTC spokesperson', year: '2000', iconic: false },
    { quote: 'I am the moral compass of this company!', context: 'Right to Censor crusade against Attitude Era excess', year: '2001', iconic: false },
    { quote: 'I was Women\'s Champion before these so-called divas ever laced up their boots!', context: 'Three-time Women\'s Champion defending her legacy', year: '2000', iconic: false },
  ],
  128: [ // Cody Rhodes
    { quote: 'I need to finish the story.', context: 'Quest for the Undisputed title', year: '2023', iconic: true },
    { quote: 'The American Nightmare!', context: 'Persona/entrance', year: '2022', iconic: true },
    { quote: 'I want the title that my father never won. That\'s the story.', context: 'Emotional promo about Dusty Rhodes and the WWE Championship', year: '2023', iconic: true },
    { quote: 'Adrenaline, in my soul, something something Cody Rhodes!', context: 'Entrance theme that went viral on social media', year: '2022', iconic: true },
    { quote: 'Wrestling has more than one royal family.', context: 'AEW-era quote that followed him back to WWE', year: '2021', iconic: false },
  ],
  130: [ // Big E
    { quote: 'Oh, I need to feel the power! Clap!', context: 'New Day/solo entrance', year: '2019', iconic: false },
    { quote: 'Awwww, [city name]! Don\'t you dare be sour! Clap for your world-famous two-time champs and feel the power!', context: 'New Day entrance with Xavier Woods and Kofi Kingston', year: '2015', iconic: true },
    { quote: 'I did it! WWE Champion! Big E!', context: 'MITB cash-in celebration on Raw — first solo World Championship', year: '2021', iconic: true },
    { quote: 'It\'s a New Day, yes it is!', context: 'New Day tag team signature call', year: '2015', iconic: true },
  ],
  131: [ // Bobby Lashley
    { quote: 'The All Mighty will hurt you!', context: 'Hurt Business era', year: '2020', iconic: false },
    { quote: 'I am the All Mighty!', context: 'Dominant WWE Champion persona', year: '2021', iconic: true },
    { quote: 'I\'ve conquered MMA, I\'ve conquered wrestling. There\'s nobody left.', context: 'Heel champion boast after winning WWE Championship', year: '2021', iconic: false },
    { quote: 'The Hurt Business is open for business!', context: 'Faction leadership with MVP, Cedric, and Shelton', year: '2020', iconic: false },
  ],
  133: [ // Bianca Belair
    { quote: 'The EST of WWE!', context: 'Strongest, fastest, roughest, toughest', year: '2021', iconic: true },
    { quote: 'I don\'t just make history — I am history!', context: 'After WrestleMania 37 main event victory over Sasha Banks', year: '2021', iconic: true },
    { quote: 'You can\'t whip the girl with the whip!', context: 'Hair braid as weapon reference', year: '2022', iconic: false },
    { quote: 'I came from nothing, and now I\'m everything!', context: 'Babyface champion promo about her journey from NXT to WrestleMania main event', year: '2022', iconic: false },
  ],
  135: [ // Bayley
    { quote: 'I\'m a hugger!', context: 'Original babyface persona', year: '2015', iconic: true },
    { quote: 'Ding dong, hello!', context: 'Heel Bayley talk show', year: '2020', iconic: false },
  ],
  140: [ // Rhea Ripley
    { quote: 'Mami is home.', context: 'Judgment Day era', year: '2023', iconic: false },
    { quote: 'I\'m the Nightmare, and you\'re about to wake up screaming!', context: 'The Nightmare persona heel promos', year: '2022', iconic: false },
    { quote: 'This is Mami\'s world, and you\'re all just living in it!', context: 'Women\'s World Champion dominant reign', year: '2023', iconic: true },
    { quote: 'Brutality is beautiful.', context: 'Heel persona philosophy on Raw', year: '2023', iconic: false },
  ],
  141: [ // Hacksaw Jim Duggan
    { quote: 'Hoooo!', context: 'USA chant with 2x4', year: '1987', iconic: true },
    { quote: 'Tough guy!', context: 'Self-description', year: '1987', iconic: false },
  ],
  162: [ // Shane McMahon
    { quote: 'Here comes the money!', context: 'Entrance theme/catchphrase', year: '2001', iconic: true },
    { quote: 'I now own WCW!', context: 'Shocking announcement on Nitro during the Invasion', year: '2001', iconic: true },
    { quote: 'I don\'t just take risks — I am the risk!', context: 'Shane-O-Mac daredevil persona before leap off cage at WrestleMania 32', year: '2016', iconic: false },
  ],
  166: [ // Stephanie McMahon
    { quote: 'Welcome to SmackDown!', context: 'Commissioner era', year: '2000', iconic: false },
    { quote: 'I am a McMahon, and McMahons always get what they want!', context: 'Authority figure heel promo on Raw', year: '2014', iconic: false },
    { quote: 'What\'s best for business!', context: 'The Authority catchphrase with Triple H', year: '2013', iconic: true },
    { quote: 'I am the Billion Dollar Princess!', context: 'McMahon-Helmsley Faction era on Raw', year: '2000', iconic: true },
  ],
  191: [ // Santino Marella
    { quote: 'The Cobra!', context: 'Comedy finisher', year: '2008', iconic: false },
    { quote: 'I am the Milan Miracle!', context: 'Referencing his debut upset over Umaga in Milan, Italy', year: '2007', iconic: true },
    { quote: 'The Cobra is ready to strike!', context: 'Comedy sock puppet finisher persona', year: '2012', iconic: false },
  ],
  192: [ // R-Truth
    { quote: 'What\'s up?!', context: 'Entrance crowd interaction', year: '2008', iconic: true },
    { quote: 'My bad, that\'s on me.', context: 'Comedy catchphrase', year: '2019', iconic: false },
  ],
  220: [ // LA Knight
    { quote: 'Yeah!', context: 'Crowd interaction catchphrase', year: '2023', iconic: true },
    { quote: 'Let me talk to ya!', context: 'Promo opener', year: '2023', iconic: false },
    { quote: 'And that\'s not an insult, that\'s just a fact of life!', context: 'Promo closer', year: '2023', iconic: false },
    { quote: 'Every single week I come out here and I prove why I am the megastar!', context: 'Self-made megastar promos on SmackDown', year: '2023', iconic: true },
    { quote: 'The game has changed, and LA Knight is winning!', context: 'SmackDown promo during rapid rise to main event', year: '2024', iconic: false },
  ],
  237: [ // Scott Steiner
    { quote: 'Holla if ya hear me!', context: 'Big Poppa Pump entrance', year: '1998', iconic: true },
    { quote: 'The numbers don\'t lie, and they spell disaster for you at Sacrifice!', context: 'Steiner Math promo', year: '2008', iconic: true },
    { quote: 'I\'m the genetic freak and I\'m not normal!', context: 'Big Poppa Pump promo', year: '2003', iconic: false },
  ],
  262: [ // Asuka
    { quote: 'Nobody is ready for Asuka!', context: 'Undefeated streak era', year: '2016', iconic: true },
    { quote: 'Tomorrow!', context: 'Broken English taunt before delivering the Asuka Lock', year: '2018', iconic: false },
    { quote: 'I came to WWE to prove I am the best women\'s wrestler in the world.', context: 'NXT Championship era promo', year: '2017', iconic: false },
    { quote: 'Asuka wa dare ni mo makenai!', context: 'Japanese declaration meaning "Asuka is second to none" — used on NXT and Raw', year: '2016', iconic: true },
  ],
  308: [ // Alexa Bliss
    { quote: 'Goddess of WWE!', context: 'Self-proclaimed title', year: '2017', iconic: false },
    { quote: 'I\'m five feet of fury!', context: 'Signature self-description as underestimated force', year: '2017', iconic: true },
    { quote: 'I want a moment of bliss!', context: 'A Moment of Bliss talk show segment', year: '2019', iconic: false },
    { quote: 'I didn\'t change, I just stopped pretending.', context: 'Heel turn promo on SmackDown', year: '2016', iconic: false },
  ],
  315: [ // Muhammad Hassan
    { quote: 'I am an Arab-American, and I am proud of my heritage!', context: 'Controversial gimmick promos', year: '2005', iconic: false },
    { quote: 'You people judge me by the color of my skin and the sound of my name!', context: 'Heel promos that blurred the line between character and social commentary', year: '2005', iconic: true },
    { quote: 'I have been discriminated against my entire life — and I will not stand for it anymore!', context: 'SmackDown debut promos that generated massive controversy', year: '2005', iconic: false },
  ],
  318: [ // MVP
    { quote: 'I\'m ballin\'!', context: 'Entrance/celebration catchphrase', year: '2006', iconic: false },
    { quote: 'I\'m the highest-paid free agent in SmackDown history!', context: 'Cocky heel promos about his lucrative contract', year: '2007', iconic: false },
    { quote: 'The Hurt Business is open, and business is booming!', context: 'Leading Bobby Lashley, Cedric Alexander, and Shelton Benjamin', year: '2020', iconic: true },
  ],
  321: [ // Sting
    { quote: 'It\'s showtime, folks!', context: 'Signature entrance call', year: '1991', iconic: true },
    { quote: 'The only thing that\'s for sure about Sting is nothing\'s for sure.', context: 'Crow Sting mystery', year: '1997', iconic: false },
    { quote: 'I am the franchise of WCW!', context: 'WCW\'s top babyface declaration during Monday Night Wars', year: '1995', iconic: true },
    { quote: 'The Icon. The Vigilante. The man called Sting.', context: 'Crow Sting reveal at Starrcade facing Hollywood Hogan', year: '1997', iconic: true },
    { quote: 'I don\'t have to say a word. The bat does the talking.', context: 'Crow Sting silent persona during nWo wars', year: '1997', iconic: false },
  ],
  358: [ // Dusty Rhodes
    { quote: 'If you will, the son of a plumber.', context: 'Blue-collar hero persona', year: '1980', iconic: true },
    { quote: 'Hard times, daddy! Hard times!', context: 'Famous Starrcade promo', year: '1985', iconic: true },
    { quote: 'The American Dream, Dusty Rhodes!', context: 'Self-introduction', year: '1980', iconic: true },
  ],
  507: [ // Diamond Dallas Page
    { quote: 'Bang!', context: 'Diamond Cutter hand sign', year: '1997', iconic: true },
    { quote: 'That\'s not a bad thing... that\'s a good thing!', context: 'Positive spin catchphrase', year: '1998', iconic: false },
    { quote: 'I\'m the People\'s Champion! Self high five!', context: 'WCW World Heavyweight Champion era', year: '1999', iconic: true },
    { quote: 'Feel the bang!', context: 'Diamond Cutter pose catchphrase', year: '1998', iconic: false },
  ],
  551: [ // Vader
    { quote: 'It\'s time, it\'s time, it\'s Vader time!', context: 'Entrance catchphrase', year: '1993', iconic: true },
    { quote: 'I am the mastodon! I am the most dangerous man in wrestling!', context: 'WCW World Champion intimidation promos', year: '1993', iconic: false },
    { quote: 'There\'s nobody alive who can beat me!', context: 'Dominant heel champion in WCW and WWF', year: '1996', iconic: false },
  ],
  555: [ // Mike Rotundo / IRS
    { quote: 'Pay your taxes!', context: 'IRS gimmick catchphrase', year: '1991', iconic: true },
    { quote: 'You\'re all tax cheats and I have the receipts to prove it!', context: 'IRS auditing the WWF roster and fans alike', year: '1992', iconic: false },
    { quote: 'Uncle Sam is watching, and so is Irwin R. Schyster!', context: 'Briefcase-carrying IRS persona haranguing fans', year: '1993', iconic: false },
  ],
  618: [ // Ronda Rousey
    { quote: 'I\'m still here.', context: 'UFC/WWE crossover defiance', year: '2018', iconic: false },
    { quote: 'I didn\'t come here to play pretend. I came here to fight.', context: 'Raw after WrestleMania debut promo', year: '2018', iconic: true },
    { quote: 'You call this the baddest woman on the planet? I\'ll show you what that means.', context: 'Baddest Woman on the Planet persona promo on Raw', year: '2018', iconic: false },
    { quote: 'I\'m not a diva, I\'m a fighter!', context: 'Distinguishing herself from past WWE women\'s division', year: '2019', iconic: false },
  ],
  851: [ // Jey Uso
    { quote: 'Yeet!', context: 'Solo babyface catchphrase', year: '2023', iconic: true },
    { quote: 'Main event Jey!', context: 'Solo push era', year: '2023', iconic: false },
    { quote: 'I\'m done being in my brother\'s shadow. I\'m done being in Roman\'s shadow.', context: 'Breaking away from The Bloodline on SmackDown', year: '2023', iconic: true },
    { quote: 'Ucey! Ucey!', context: 'Tag team catchphrase with Jimmy Uso', year: '2021', iconic: false },
  ],
  1107: [ // Michael PS Hayes
    { quote: 'I\'m from Badstreet USA!', context: 'Freebirds signature', year: '1983', iconic: true },
  ],
  1209: [ // D-Von Dudley
    { quote: 'Oh my brother, testify!', context: 'Signature call', year: '1999', iconic: true },
  ],
  1210: [ // Bubba Ray Dudley
    { quote: 'D-Von! Get the tables!', context: 'Pre-table spot command', year: '1999', iconic: true },
  ],
  39: [ // Rikishi
    { quote: 'I did it for The Rock. I did it for the people.', context: 'Confession for running over Stone Cold Steve Austin', year: '2000', iconic: true },
    { quote: 'You want to see the Stink Face?!', context: 'Signature humiliation move', year: '2000', iconic: false },
  ],
  42: [ // William Regal
    { quote: 'Sunshine, I\'m going to give you the most thorough beating of your life.', context: 'Condescending address to opponents', year: '1998', iconic: true },
    { quote: 'I\'m a real man\'s man!', context: 'Entrance theme/gimmick', year: '1998', iconic: false },
    { quote: 'I\'ll do what\'s best for business.', context: 'NXT General Manager authority figure', year: '2014', iconic: false },
  ],
  48: [ // Christian
    { quote: 'One more match! One more match!', context: 'Retirement era crowd chant/plea', year: '2014', iconic: true },
    { quote: 'At last, you\'re on your own!', context: 'Entrance theme lyric', year: '2005', iconic: false },
    { quote: 'Because that\'s how I roll!', context: 'Captain Charisma catchphrase', year: '2011', iconic: false },
  ],
  50: [ // Matt Hardy
    { quote: 'I will not die!', context: 'Theme song lyric, defiant persona', year: '2005', iconic: true },
    { quote: 'Delete! Delete! Delete!', context: 'Broken Matt Hardy gimmick', year: '2017', iconic: true },
    { quote: 'Matt Hardy Version 1.0!', context: 'Mattitude era self-reinvention', year: '2003', iconic: false },
  ],
  57: [ // X-Pac
    { quote: 'Make some noise!', context: 'DX entrance crowd hype', year: '1998', iconic: false },
    { quote: 'Your ass is grass, and I\'m gonna smoke it!', context: 'Attitude Era promo', year: '1999', iconic: false },
  ],
  60: [ // Chyna
    { quote: 'I am the Ninth Wonder of the World!', context: 'Signature self-description', year: '1999', iconic: true },
    { quote: 'Don\'t treat me like a woman. Don\'t treat me like a man. Treat me like a superstar.', context: 'Breaking gender barriers promo', year: '2000', iconic: false },
  ],
  73: [ // Rob Van Dam
    { quote: 'Rob... Van... Dam! The whole f\'n show!', context: 'Signature self-introduction', year: '2001', iconic: true },
    { quote: 'R-V-D!', context: 'Crowd chant with double thumb point', year: '2001', iconic: true },
    { quote: 'One of a kind!', context: 'Entrance theme/catchphrase', year: '2006', iconic: false },
  ],
  82: [ // Carlito
    { quote: 'That\'s not cool. But you know what is cool?', context: 'Signature setup before spitting apple in opponent\'s face', year: '2004', iconic: true },
    { quote: 'I spit in the face of people who don\'t want to be cool!', context: 'Apple-spitting catchphrase', year: '2004', iconic: true },
  ],
  86: [ // Sheamus
    { quote: 'Are you not entertained?!', context: 'Celtic Warrior boast after victories', year: '2015', iconic: true },
    { quote: 'Fella!', context: 'Signature Irish catchphrase/greeting', year: '2010', iconic: true },
  ],
  90: [ // Kofi Kingston
    { quote: 'Boom boom boom!', context: 'Entrance crowd interaction', year: '2009', iconic: true },
    { quote: 'This is what 11 years of hard work looks like!', context: 'KofiMania WWE Championship celebration at WrestleMania 35', year: '2019', iconic: true },
  ],
  99: [ // Finn Bálor
    { quote: 'Too sweet!', context: 'Bullet Club/The Club hand gesture catchphrase', year: '2016', iconic: true },
    { quote: 'Welcome to the Judgment Day.', context: 'Judgment Day faction leader', year: '2022', iconic: false },
  ],
  211: [ // Braun Strowman
    { quote: 'Get these hands!', context: 'Signature threat/catchphrase', year: '2017', iconic: true },
    { quote: 'I\'m not finished with you!', context: 'Repeated attacks on Roman Reigns', year: '2017', iconic: true },
    { quote: 'Braaaaun!', context: 'Monster Among Men roar', year: '2016', iconic: false },
  ],
  217: [ // Damian Priest
    { quote: 'All rise!', context: 'Judgment Day entrance/catchphrase', year: '2023', iconic: true },
    { quote: 'Live forever.', context: 'Archer of Infamy motto', year: '2023', iconic: false },
  ],
  26: [ // British Bulldog
    { quote: 'I did it for you, Diana!', context: 'WrestleMania 8 victory celebration with wife Diana in the crowd', year: '1992', iconic: true },
    { quote: 'The British Bulldog is the toughest man in the WWF!', context: 'Babyface promos during his IC Title run', year: '1992', iconic: false },
    { quote: 'Bizarro!', context: 'Eccentric heel persona catchphrase during European Title run', year: '1997', iconic: false },
  ],
  83: [ // Shelton Benjamin
    { quote: 'Ain\'t no stopping me now!', context: 'Entrance theme catchphrase', year: '2005', iconic: true },
    { quote: 'I\'m the Gold Standard!', context: 'Self-proclaimed nickname highlighting his athletic excellence', year: '2008', iconic: true },
    { quote: 'Nobody in this locker room can do what I do in that ring.', context: 'Heel promo about his unmatched athletic ability', year: '2008', iconic: false },
  ],
  88: [ // Jack Swagger
    { quote: 'We the People!', context: 'Real Americans tag team with Zeb Colter', year: '2013', iconic: true },
    { quote: 'I\'m the All-American American!', context: 'Original gimmick as amateur wrestling standout', year: '2010', iconic: false },
    { quote: 'I am the World Heavyweight Champion — and I did it all by myself!', context: 'After cashing in MITB on Chris Jericho', year: '2010', iconic: false },
  ],
  104: [ // Cesaro
    { quote: 'I am the Swiss Superman!', context: 'Signature nickname/catchphrase', year: '2016', iconic: true },
    { quote: 'I don\'t need a microphone to prove I\'m the best — I prove it in the ring.', context: 'Promo acknowledging his reputation as a better wrestler than talker', year: '2015', iconic: false },
    { quote: 'Nobody swings harder than me!', context: 'Cesaro Swing signature move catchphrase', year: '2014', iconic: false },
  ],
  111: [ // Lance Storm
    { quote: 'If I can be serious for a minute...', context: 'Signature promo opener', year: '2001', iconic: true },
    { quote: 'I renamed every championship after Canada — because Canada deserves better.', context: 'WCW heel run holding US, Cruiserweight, and Hardcore titles renamed as Canadian titles', year: '2000', iconic: false },
    { quote: 'I\'m not boring — I\'m technically superior.', context: 'Response to the "boring" chants from crowds', year: '2002', iconic: false },
  ],
  125: [ // Hurricane
    { quote: 'Stand back! There\'s a Hurricane coming through!', context: 'Superhero gimmick entrance theme', year: '2001', iconic: true },
    { quote: 'Wassupwitdat?!', context: 'Signature catchphrase', year: '2001', iconic: false },
  ],
  126: [ // Rhyno
    { quote: 'Gore! Gore! Gore!', context: 'Finisher call that became his identity', year: '2001', iconic: true },
    { quote: 'I am the Man Beast, and I will destroy everything in my path!', context: 'ECW World Champion promos during the last days of ECW', year: '2001', iconic: false },
    { quote: 'ECW lives through me!', context: 'Last ECW World Champion carrying the banner', year: '2001', iconic: false },
  ],
  127: [ // John Morrison
    { quote: 'Welcome to the Palace of Wisdom!', context: 'Signature promo location/catchphrase', year: '2008', iconic: true },
    { quote: 'Be jealous!', context: 'Miz & Morrison tag team catchphrase', year: '2008', iconic: false },
  ],
  136: [ // Bobby Roode
    { quote: 'Glorious!', context: 'NXT entrance theme catchphrase', year: '2016', iconic: true },
    { quote: 'I didn\'t come to NXT to compete — I came to dominate.', context: 'NXT Championship reign promos', year: '2017', iconic: false },
    { quote: 'This is glorious, and so am I!', context: 'Self-congratulatory heel celebrations', year: '2017', iconic: false },
  ],
  139: [ // Gunther
    { quote: 'I am the Ring General!', context: 'Intercontinental Champion dominance era', year: '2022', iconic: true },
    { quote: 'I don\'t do sports entertainment. I do professional wrestling.', context: 'Old-school heel philosophy — longest IC Title reign in modern history', year: '2023', iconic: true },
    { quote: 'I will chop the life out of you!', context: 'Trademark brutal chops promo on SmackDown', year: '2022', iconic: false },
    { quote: 'This title means more to me than it ever meant to any of you.', context: 'Defending the prestige of the IC Championship', year: '2023', iconic: false },
  ],
  176: [ // Beth Phoenix
    { quote: 'The Glamazon!', context: 'Signature self-description', year: '2007', iconic: true },
    { quote: 'Pin-up strong!', context: 'Divas of Doom tag team with Natalya — combining beauty and power', year: '2011', iconic: false },
    { quote: 'I\'m not a diva. I\'m a destroyer.', context: 'Heel persona — strongest woman in WWE history at the time', year: '2008', iconic: false },
  ],
  177: [ // Mickie James
    { quote: 'Hardcore Country!', context: 'Later career persona and catchphrase', year: '2010', iconic: false },
    { quote: 'Trish, I\'m your biggest fan!', context: 'Obsessed fan stalker storyline with Trish Stratus', year: '2005', iconic: true },
    { quote: 'I proved that a girl from Virginia with nothing can become Women\'s Champion!', context: 'Babyface promo after defeating Trish Stratus at WrestleMania 22', year: '2006', iconic: false },
  ],
  190: [ // Zack Ryder
    { quote: 'Woo woo woo, you know it!', context: 'Internet Champion era catchphrase', year: '2011', iconic: true },
    { quote: 'Are you serious, bro?!', context: 'Signature catchphrase', year: '2011', iconic: false },
  ],
  52: [ // D'Lo Brown
    { quote: 'You\'re looking at the real deal now!', context: 'Entrance theme catchphrase', year: '1998', iconic: true },
    { quote: 'You better recognize!', context: 'Signature head bobble and chest protector era', year: '1999', iconic: false },
  ],
  66: [ // Test
    { quote: 'This is a Test!', context: 'Entrance theme lyric/catchphrase', year: '1999', iconic: true },
    { quote: 'I passed the test — did you?', context: 'Confident heel promo after winning matches', year: '2002', iconic: false },
    { quote: 'I\'m the biggest, baddest man on Raw!', context: 'Post-Invasion heel push on Raw', year: '2001', iconic: false },
  ],
  112: [ // Tajiri
    { quote: 'The green mist speaks louder than words.', context: 'Known for spraying green mist rather than cutting promos — a silent assassin', year: '2001', iconic: false },
    { quote: 'Buzzsaw!', context: 'Signature roundhouse kick call — Tajiri\'s deadly kicks were his language', year: '2002', iconic: false },
    { quote: 'No speak English!', context: 'Comedy segments with William Regal where Tajiri pretended not to understand', year: '2001', iconic: false },
  ],
  154: [ // Greg Valentine
    { quote: 'I\'m The Hammer!', context: 'Signature toughness persona — let opponents hit him to wear them out', year: '1984', iconic: false },
    { quote: 'The figure four will end your career!', context: 'Figure Four Leglock submission specialist threat', year: '1985', iconic: false },
    { quote: 'I beat every man they put in front of me — and I\'ll beat you too!', context: 'IC Champion heel promos during record reign', year: '1985', iconic: false },
  ],
  187: [ // Chavo Guerrero Jr.
    { quote: 'Viva la raza!', context: 'Borrowed from uncle Eddie Guerrero as tribute', year: '2005', iconic: false },
    { quote: 'If it isn\'t cheating, it isn\'t trying!', context: 'Guerrero family motto, Kerwin White golf gimmick era', year: '2005', iconic: false },
  ],
  212: [ // Baron Corbin
    { quote: 'I am the end of days.', context: 'Finisher-based persona and catchphrase', year: '2016', iconic: false },
    { quote: 'Happy days are here again!', context: 'Happy Corbin comedy gimmick with top hat and big smile', year: '2021', iconic: false },
  ],
  214: [ // Tommaso Ciampa
    { quote: 'No one will survive!', context: 'Entrance theme catchphrase/war cry', year: '2018', iconic: true },
    { quote: 'Goldie!', context: 'Pet name for the NXT Championship belt — obsessive love for the title', year: '2018', iconic: true },
  ],
  215: [ // Johnny Gargano
    { quote: 'Johnny Wrestling!', context: 'NXT fan-given nickname that became his identity', year: '2017', iconic: true },
    { quote: 'NXT is my home, and I will fight for it until my last breath!', context: 'Heart and soul of NXT promos during Ciampa feud', year: '2018', iconic: true },
    { quote: 'I don\'t need anyone\'s help — I am Johnny TakeOver!', context: 'Self-proclaimed nickname after multiple TakeOver classics', year: '2019', iconic: false },
  ],
  1076: [ // Montez Ford
    { quote: 'We want the smoke!', context: 'Street Profits tag team catchphrase', year: '2019', iconic: true },
    { quote: 'The profits are going up!', context: 'Street Profits celebration catchphrase on Raw', year: '2020', iconic: false },
    { quote: 'I\'m the most athletic man in WWE — and the party doesn\'t start until I say so!', context: 'Solo persona promos showcasing his athleticism and charisma', year: '2022', iconic: false },
  ],
  1077: [ // Angelo Dawkins
    { quote: 'We want the smoke!', context: 'Street Profits tag team catchphrase', year: '2019', iconic: true },
    { quote: 'The cup is always full when the Street Profits are in the building!', context: 'Solo Cup party persona on Raw', year: '2020', iconic: false },
    { quote: 'All day, every day — that\'s the Profits way!', context: 'Tag team motivational catchphrase', year: '2021', iconic: false },
  ],
  218: [ // Dominik Mysterio
    { quote: 'This is my moment!', context: 'Judgment Day heel persona', year: '2023', iconic: false },
    { quote: 'I\'m not my father\'s son!', context: 'Heel turn against Rey Mysterio', year: '2022', iconic: true },
  ],
  222: [ // Liv Morgan
    { quote: 'Watch me.', context: 'Babyface underdog rise', year: '2021', iconic: true },
    { quote: 'Liv Morgan wins!', context: 'Celebrating title victories', year: '2022', iconic: true },
  ],
  241: [ // Tommy Dreamer
    { quote: 'I will always love ECW!', context: 'ECW loyalist and Innovator of Violence', year: '1997', iconic: true },
    { quote: 'I don\'t care about titles — I care about ECW!', context: 'Putting the promotion above personal glory during ECW\'s peak', year: '1997', iconic: false },
    { quote: 'This is extreme!', context: 'ECW hardcore philosophy catchphrase', year: '1996', iconic: false },
  ],
  257: [ // Adam Cole
    { quote: 'Adam Cole, Bay Bay!', context: 'Signature catchphrase', year: '2017', iconic: true },
    { quote: 'Boom!', context: 'Entrance catchphrase', year: '2017', iconic: true },
  ],
  307: [ // Nia Jax
    { quote: 'I\'m not like most girls.', context: 'Entrance theme lyric/catchphrase', year: '2016', iconic: true },
    { quote: 'I\'m the Irresistible Force, and nobody can stop me!', context: 'Dominant heel persona promos on Raw', year: '2018', iconic: false },
    { quote: 'My best friend stabbed me in the back, and now I\'m going to break hers.', context: 'Feud with Alexa Bliss after bullying storyline', year: '2018', iconic: false },
  ],
  309: [ // Tiffany Stratton
    { quote: 'It\'s Tiffy Time!', context: 'Signature catchphrase', year: '2024', iconic: true },
    { quote: 'I\'m the center of the universe, and everyone else is just orbiting around me!', context: 'Spoiled rich girl heel persona in NXT', year: '2023', iconic: false },
    { quote: 'I\'m Tiffany Stratton — the prettiest, most athletic, most talented woman in WWE!', context: 'Self-promotional promo before cashing in MITB', year: '2024', iconic: false },
  ],
  331: [ // Bron Breakker
    { quote: 'Who let the dogs out?!', context: 'High-energy entrance persona', year: '2022', iconic: false },
    { quote: 'I am the future, and the future is now!', context: 'NXT Champion promo — son of Rick Steiner', year: '2022', iconic: false },
    { quote: 'I\'ve got Steiner blood running through my veins!', context: 'Embracing his wrestling family legacy', year: '2022', iconic: false },
  ],
  268: [ // Chad Gable
    { quote: 'Shoosh!', context: 'Heel Alpha Academy catchphrase', year: '2022', iconic: true },
    { quote: 'I\'m a legitimate Olympian, and none of you deserve to be in my class!', context: 'Alpha Academy instructor persona berating students', year: '2022', iconic: false },
    { quote: 'Ready, willing, and Gable!', context: 'Original babyface tag team catchphrase with Jason Jordan', year: '2016', iconic: false },
  ],
  260: [ // Shayna Baszler
    { quote: 'I am the Queen of Spades.', context: 'MMA crossover identity', year: '2019', iconic: true },
    { quote: 'I don\'t do this for fun. I do this to hurt people.', context: 'Dominant NXT Women\'s Champion heel promos', year: '2019', iconic: false },
    { quote: 'When I put you in the Kirifuda Clutch, you will tap or you will nap.', context: 'Submission specialist threat — two-time NXT Women\'s Champion', year: '2020', iconic: false },
  ],
  247: [ // Spike Dudley
    { quote: 'Little Spike Dudley!', context: 'Underdog persona crowd chant', year: '2000', iconic: false },
    { quote: 'I don\'t care how big you are — I\'ll fight you!', context: 'Acid Drop on giants like Mike Awesome, defying physics', year: '2000', iconic: false },
    { quote: 'The Dudleys don\'t scare me — they\'re my brothers!', context: 'Standing up to Bubba Ray and D-Von despite constant table bumps', year: '1999', iconic: false },
  ],
  330: [ // Carmelo Hayes
    { quote: 'Him!', context: 'Self-referential catchphrase', year: '2022', iconic: true },
    { quote: 'I don\'t miss. That\'s just facts.', context: 'Confident NXT Champion promos', year: '2023', iconic: false },
    { quote: 'Everything I touch turns to gold — that\'s why I\'m Him!', context: 'Cocky heel persona on NXT and SmackDown', year: '2023', iconic: false },
  ],
  339: [ // Shinsuke Nakamura
    { quote: 'The King of Strong Style!', context: 'Signature persona and nickname', year: '2016', iconic: true },
    { quote: 'YeaOh!', context: 'Crowd chant during entrance', year: '2018', iconic: true },
    { quote: 'I don\'t speak much English, but my knees speak a universal language.', context: 'Kinshasa finisher persona promo', year: '2017', iconic: false },
    { quote: 'No speak English!', context: 'Comedic heel promo before low-blowing AJ Styles', year: '2018', iconic: false },
  ],
  383: [ // Michelle McCool
    { quote: 'Flawless!', context: 'LayCool tag team catchphrase with Layla', year: '2010', iconic: true },
    { quote: 'I\'m the most dominant Divas Champion in history!', context: 'Heel champion boasts as longest-reigning Divas Champion', year: '2009', iconic: false },
    { quote: 'Eww!', context: 'LayCool\'s dismissive reaction to opponents they deemed unworthy', year: '2010', iconic: false },
  ],
  456: [ // Carmella
    { quote: 'Mella is Money!', context: 'Signature catchphrase', year: '2017', iconic: true },
    { quote: 'The most beautiful woman in all of WWE.', context: 'Self-proclaimed title during Untouchable gimmick', year: '2021', iconic: false },
  ],
  483: [ // Keith Lee
    { quote: 'Bask in my glory!', context: 'Signature entrance catchphrase', year: '2019', iconic: true },
    { quote: 'Limitless!', context: 'NXT persona and moniker', year: '2019', iconic: true },
  ],
  486: [ // Ricochet
    { quote: 'The One and Only!', context: 'Entrance theme and moniker', year: '2018', iconic: true },
    { quote: 'I can do things in this ring that nobody else on this planet can do.', context: 'High-flying promos showcasing gravity-defying athleticism', year: '2019', iconic: false },
    { quote: 'I defy gravity every single night!', context: 'Babyface promo on NXT before main roster call-up', year: '2018', iconic: false },
  ],
  527: [ // Pete Dunne / Butch
    { quote: 'The Bruiserweight!', context: 'NXT UK persona and nickname', year: '2017', iconic: true },
    { quote: 'I\'ll bend your fingers until they snap — and I\'ll enjoy every second of it.', context: 'Joint manipulation heel persona in NXT UK', year: '2018', iconic: false },
    { quote: 'I am the United Kingdom Champion, and I\'ll break anyone who tries to take it from me.', context: 'Record-setting 685-day NXT UK Championship reign', year: '2018', iconic: false },
  ],
  175: [ // Melina
    { quote: 'The Paparazzi Princess!', context: 'MNM era persona', year: '2005', iconic: true },
    { quote: 'I am the most dominant woman in WWE history!', context: 'Three-time Women\'s Champion promos', year: '2009', iconic: false },
    { quote: 'The red carpet is rolled out for me and me alone!', context: 'MNM entrance with Johnny Nitro and Joey Mercury', year: '2006', iconic: false },
  ],
  70: [ // Perry Saturn
    { quote: "You're welcome.", context: 'Oddball gimmick catchphrase', year: '2001', iconic: false },
    { quote: 'Moppy!', context: 'Comedy run carrying a mop as a companion', year: '2001', iconic: false },
  ],
  1071: [ // Scott Dawson (FTR)
    { quote: 'Say yeah!', context: 'The Revival catchphrase', year: '2016', iconic: true },
    { quote: 'Top Guys!', context: 'The Revival tag team motto', year: '2016', iconic: true },
  ],
  1072: [ // Dash Wilder (FTR)
    { quote: 'No flips, just fists.', context: 'The Revival motto emphasizing hard-hitting style', year: '2016', iconic: true },
    { quote: 'Top Guys!', context: 'The Revival tag team motto', year: '2016', iconic: true },
  ],
  193: [ // Ezekiel Jackson
    { quote: 'The Personification of Domination!', context: 'Signature introduction and moniker', year: '2010', iconic: true },
  ],
  261: [ // Kairi Sane
    { quote: 'Ahoy!', context: 'Pirate Princess persona catchphrase', year: '2017', iconic: true },
    { quote: 'The Pirate Princess sails to victory!', context: 'NXT Women\'s Champion celebration — InSane Elbow finisher', year: '2018', iconic: false },
    { quote: 'I came from Japan to prove I\'m the best in the world!', context: 'Mae Young Classic winner turned NXT star', year: '2017', iconic: false },
  ],
  1: [ // Bruno Sammartino
    { quote: 'I never needed gimmicks. I just needed to be the best.', context: 'On his legacy as longest-reigning WWF Champion', year: '1977', iconic: true },
    { quote: 'The people are the real champions.', context: 'Bruno\'s relationship with his loyal fanbase at MSG', year: '1980', iconic: false },
    { quote: 'Madison Square Garden is my home. These people are my family.', context: 'Sold out MSG over 180 times as champion', year: '1975', iconic: true },
    { quote: 'I came to this country with nothing but a dream, and wrestling gave me everything.', context: 'Italian immigrant success story promo', year: '1972', iconic: false },
  ],
  6: [ // Andre the Giant
    { quote: 'I am the true giant of professional wrestling!', context: 'Challenge to Hulk Hogan leading to WrestleMania III', year: '1987', iconic: true },
    { quote: 'Everybody wants to be a giant, but nobody wants to carry the weight.', context: 'On the burden of being unbeatable for 15 years', year: '1982', iconic: false },
    { quote: 'Nobody can slam Andre the Giant!', context: 'Undefeated streak boast before WrestleMania III', year: '1987', iconic: true },
    { quote: 'Hogan, I want you, and I want that belt!', context: 'Heel turn on Hogan on Piper\'s Pit — tore Hogan\'s shirt and cross', year: '1987', iconic: true },
  ],
  21: [ // Iron Sheik
    { quote: 'Iran number one! USA? Hack ptoo!', context: 'Anti-American heel promos during Cold War era', year: '1983', iconic: true },
    { quote: 'I will put you in the camel clutch, break your back, make you humble!', context: 'Signature threat that became a cultural meme', year: '1984', iconic: true },
  ],
  118: [ // Faarooq / Ron Simmons
    { quote: 'DAMN!', context: 'One-word catchphrase; walked in, said DAMN, walked out', year: '2004', iconic: true },
    { quote: 'The Nation of Domination will not be oppressed any longer!', context: 'Nation of Domination faction leader promo on Raw', year: '1997', iconic: false },
    { quote: 'I am the first Black WCW World Champion, and nobody can take that away from me.', context: 'Historic WCW Championship reign — defeated Vader in 1992', year: '1992', iconic: true },
  ],
  354: [ // Superstar Billy Graham
    { quote: 'I am the man of the hour, the man with the power, too sweet to be sour!', context: 'The promo template that inspired Hulk Hogan and Jesse Ventura', year: '1977', iconic: true },
    { quote: 'I\'m not the man of the day, I\'m the man of the decade!', context: 'Cocky heel promos as WWWF Champion', year: '1977', iconic: false },
  ],
  168: [ // Jerry Lawler
    { quote: 'Puppies!', context: 'Signature commentary catchphrase on Raw', year: '1997', iconic: true },
    { quote: 'If you want the King, come and get the King!', context: 'Memphis legend defending his crown', year: '1982', iconic: false },
  ],
  8: [ // Mr. Perfect
    { quote: 'I\'m not just good, I\'m not just great — I\'m perfect!', context: 'Mr. Perfect vignettes showcasing athletic perfection', year: '1989', iconic: true },
    { quote: 'That\'s absolutely perfect!', context: 'Post-match celebration catchphrase', year: '1990', iconic: true },
    { quote: 'Nobody\'s better than Mr. Perfect. Nobody.', context: 'Intercontinental Champion heel promos', year: '1990', iconic: false },
  ],
  20: [ // Sgt. Slaughter
    { quote: 'At ease, maggots!', context: 'Military drill sergeant character', year: '1984', iconic: true },
    { quote: 'I turned my back on every man, woman, and child in this country!', context: 'Controversial Iraqi sympathizer heel turn during Gulf War', year: '1991', iconic: true },
  ],
  3: [ // Bob Backlund
    { quote: 'You\'re all very, very deficient human beings!', context: 'Unhinged 1994 heel persona lecturing the audience', year: '1994', iconic: true },
    { quote: 'I never lost the title! I never submitted!', context: 'Return promo claiming he was still rightful champion', year: '1992', iconic: false },
  ],
  972: [ // Sycho Sid
    { quote: 'I have half the brain that you do!', context: 'Infamous botched promo that became wrestling legend', year: '1997', iconic: true },
    { quote: 'I am the master and the ruler of the world!', context: 'Intense power-based promos', year: '1996', iconic: true },
  ],
  552: [ // Arn Anderson
    { quote: 'My spot! That is my spot, and I will die for this spot!', context: 'Legendary retirement speech on Nitro', year: '1997', iconic: true },
    { quote: 'All you gotta know about the Four Horsemen is — you don\'t wanna find out.', context: 'Four Horsemen promo', year: '1988', iconic: false },
  ],
  13: [ // Honky Tonk Man
    { quote: 'I\'m cool, I\'m cocky, I\'m bad!', context: 'Honky Tonk Man\'s signature intro', year: '1987', iconic: true },
    { quote: 'I am the greatest Intercontinental Champion of all time!', context: 'Record-holding IC Champion bragging rights', year: '1988', iconic: true },
  ],
  19: [ // Big Boss Man
    { quote: 'If you do the crime, you\'re gonna do the time!', context: 'Law enforcement catchphrase', year: '1989', iconic: true },
    { quote: 'You serve hard time when you mess with the Boss Man!', context: 'Nightstick-wielding authority figure persona', year: '1989', iconic: false },
    { quote: 'I am the law and order of the WWF!', context: 'Attitude Era corporate enforcer for Vince McMahon', year: '1999', iconic: false },
  ],
  209: [ // AJ Lee
    { quote: 'Do you want to know what\'s really wrong with the Divas division? You.', context: 'Pipebomb promo directed at Total Divas cast', year: '2013', iconic: true },
    { quote: 'I have sucked... face with half the locker room!', context: 'Self-deprecating promo owning her storyline romances', year: '2013', iconic: false },
  ],
  120: [ // Raven
    { quote: 'What about me? What about Raven?', context: 'Signature catchphrase expressing nihilistic angst', year: '1996', iconic: true },
    { quote: 'Quote the Raven... nevermore.', context: 'Edgar Allan Poe-inspired sign-off', year: '1997', iconic: true },
  ],
  353: [ // Jesse Ventura
    { quote: 'Win if you can, lose if you must, but always cheat!', context: 'Signature commentary philosophy', year: '1986', iconic: true },
    { quote: 'The Body doesn\'t get pinned!', context: 'Heel wrestler bravado', year: '1984', iconic: false },
  ],
  974: [ // Eric Bischoff
    { quote: 'I\'m back! And better than ever!', context: 'Surprise Raw GM debut', year: '2002', iconic: true },
    { quote: 'Controversy creates cash.', context: 'His personal motto and book title', year: '2003', iconic: true },
  ],
  433: [ // Harley Race
    { quote: 'I\'ll put a bounty on your head, and somebody will collect!', context: 'Bounty angle against Hulk Hogan', year: '1986', iconic: true },
  ],
  153: [ // Tito Santana
    { quote: 'Arriba!', context: 'Mexican pride babyface catchphrase', year: '1984', iconic: true },
    { quote: 'El Matador is ready to fight!', context: 'Repackaged as El Matador with bullfighting gimmick', year: '1991', iconic: false },
    { quote: 'I held the Intercontinental Championship twice — I earned my place!', context: 'Two-time IC Champion legacy promos', year: '1985', iconic: false },
  ],
  1035: [ // Kerry Von Erich
    { quote: 'This one\'s for you, dad!', context: 'Emotional dedication to Fritz Von Erich', year: '1984', iconic: true },
    { quote: 'The Von Erichs will never die!', context: 'Family legacy promo honoring his late brothers', year: '1988', iconic: true },
    { quote: 'The Tornado is touching down, and there\'s nothing you can do about it!', context: 'Texas Tornado persona in WWF', year: '1990', iconic: false },
  ],
  454: [ // Nikki Bella
    { quote: 'Nicole!', context: 'Brie\'s signature scream; Nikki was the dominant twin', year: '2014', iconic: false },
    { quote: 'Don\'t you dare be sour!', context: 'Fearless Nikki era confidence', year: '2015', iconic: false },
  ],
  299: [ // Alundra Blayze
    { quote: 'This is where the big boys play? Well guess what, I\'m here too.', context: 'Dropping the Women\'s Championship in the trash on Nitro', year: '1995', iconic: true },
    { quote: 'I am the Women\'s Champion, and I fight just as hard as any man in this company!', context: 'Three-time Women\'s Champion defending the prestige of women\'s wrestling in the early 90s', year: '1994', iconic: false },
    { quote: 'They told me women couldn\'t draw money in wrestling. I proved them wrong every night.', context: 'Hall of Fame speech reflecting on breaking barriers', year: '2015', iconic: true },
  ],
  843: [ // Don Muraco
    { quote: 'The Magnificent One doesn\'t answer to anyone!', context: 'Arrogant heel persona', year: '1983', iconic: false },
  ],
  554: [ // Barry Windham
    { quote: 'The Four Horsemen ride again!', context: 'Shocking heel turn joining the Horsemen', year: '1988', iconic: true },
  ],
  1022: [ // Buddy Rogers
    { quote: 'To a nicer guy, it couldn\'t happen!', context: 'Nature Boy\'s arrogant catchphrase — inspired Ric Flair', year: '1961', iconic: true },
  ],
  2: [ // Pedro Morales
    { quote: 'For the people! For the fans!', context: 'Beloved babyface champion of the 1970s', year: '1971', iconic: false },
  ],
  889: [ // Jeff Jarrett
    { quote: 'Ain\'t I great?', context: 'Cocky heel catchphrase with guitar in hand', year: '1997', iconic: true },
    { quote: 'Don\'t piss me off!', context: 'Aggressive promo style', year: '1999', iconic: false },
  ],
  372: [ // Road Dogg Jesse James
    { quote: 'Oh, you didn\'t know? Your ass better call somebody!', context: 'DX tag team entrance catchphrase', year: '1998', iconic: true },
    { quote: 'Ladies and gentlemen, boys and girls, children of all ages...', context: 'New Age Outlaws ring introduction', year: '1998', iconic: true },
  ],
  1034: [ // Tully Blanchard
    { quote: 'The Four Horsemen will ride again and again!', context: 'Original Four Horsemen member promos', year: '1986', iconic: false },
  ],
  155: [ // Yokozuna
    { quote: 'Banzai!', context: 'Battle cry before the Banzai Drop', year: '1993', iconic: true },
  ],
  29: [ // Lex Luger
    { quote: 'I\'m going to slam Yokozuna on the deck of the USS Intrepid!', context: 'Lex Express American hero tour', year: '1993', iconic: true },
    { quote: 'I am the Total Package!', context: 'WCW signature persona', year: '1997', iconic: true },
  ],
  132: [ // Samoa Joe
    { quote: 'Joe is gonna kill you!', context: 'Fan chant that became his calling card', year: '2005', iconic: true },
    { quote: 'I am the one who carries this brand on my back!', context: 'Intense NXT Champion promos', year: '2016', iconic: false },
  ],
  283: [ // Brian Pillman
    { quote: 'I\'ve got a gun!', context: 'Infamous worked-shoot home invasion segment on Raw', year: '1996', iconic: true },
    { quote: 'Smart marks, I\'m smarter than you!', context: 'Breaking the fourth wall as the Loose Cannon', year: '1996', iconic: true },
  ],
  107: [ // Wade Barrett
    { quote: 'I\'m afraid I\'ve got some bad news!', context: 'Bad News Barrett catchphrase with the podium gavel', year: '2014', iconic: true },
    { quote: 'The Nexus is taking over!', context: 'Leader of the Nexus faction invasion of Raw', year: '2010', iconic: true },
    { quote: 'You\'re either Nexus, or you\'re against us.', context: 'Nexus recruitment/intimidation catchphrase', year: '2010', iconic: true },
  ],
  210: [ // Paige
    { quote: 'This is my house!', context: 'Signature catchphrase as the Anti-Diva', year: '2014', iconic: true },
    { quote: 'I\'m the Anti-Diva. I don\'t fit in, and I don\'t want to.', context: 'Establishing herself as different from the traditional diva mold', year: '2014', iconic: false },
    { quote: 'I was born into this business. Wrestling is in my blood.', context: 'Reference to her wrestling family (Knight family from Norwich, England)', year: '2014', iconic: false },
  ],
  134: [ // Natalya
    { quote: 'I am the best there is, the best there was, and the best there ever will be!', context: 'Channeling uncle Bret Hart', year: '2010', iconic: false },
    { quote: 'I am the Queen of Harts!', context: 'Signature self-description as Hart family legacy', year: '2010', iconic: true },
    { quote: 'I carry the legacy of the greatest wrestling family in history.', context: 'Representing the Hart family in the women\'s division', year: '2017', iconic: false },
  ],
  71: [ // Dean Malenko
    { quote: 'I let my wrestling do the talking.', context: 'The Man of 1,000 Holds — known for actions over words', year: '1996', iconic: false },
    { quote: 'I have a thousand ways to beat you — pick one.', context: 'Man of 1,000 Holds persona', year: '1996', iconic: false },
    { quote: 'Lita, I\'m your biggest fan.', context: 'Surprise reveal at WCW Slamboree as un-masked luchador to confront Chris Jericho', year: '2000', iconic: false },
  ],
  850: [ // Logan Paul
    { quote: 'I didn\'t come here to be liked — I came here to be the greatest!', context: 'Heel turn promo as US Champion', year: '2023', iconic: false },
    { quote: 'I have more athletic ability in my pinky than most of your roster has in their entire body!', context: 'Cocky social media star promos before WrestleMania', year: '2023', iconic: false },
    { quote: 'Prime time, baby!', context: 'Product placement catchphrase tied to his Prime energy drink brand', year: '2023', iconic: false },
  ],
  877: [ // Junkyard Dog
    { quote: 'Thump! Grab them cakes!', context: 'JYD\'s signature crowd-pleasing antics', year: '1984', iconic: true },
    { quote: 'Another one bites the dust!', context: 'Post-match celebration with Queen anthem — JYD would dance with fans', year: '1985', iconic: true },
    { quote: 'The Dog is loose and I\'m looking for a fight!', context: 'Babyface promos in Mid-South and WWF', year: '1984', iconic: false },
  ],
  304: [ // Victoria
    { quote: 'All the things she said, all the things she said, running through my head!', context: 'Entrance theme became her catchphrase', year: '2002', iconic: true },
    { quote: 'I\'m not crazy — I\'m just better than all of you!', context: 'Psychotic heel persona during Women\'s Championship feud with Trish', year: '2002', iconic: false },
    { quote: 'This is what a real women\'s champion looks like!', context: 'Two-time Women\'s Champion establishing dominance', year: '2004', iconic: false },
  ],
  438: [ // Rick Martel
    { quote: 'I am simply ravishing — I am The Model!', context: 'Arrogant heel spraying Arrogance cologne on opponents', year: '1990', iconic: true },
    { quote: 'One spray of Arrogance and they\'ll forget all about their favorite wrestler!', context: 'Cologne-spraying gimmick heel promos', year: '1991', iconic: false },
    { quote: 'Strike Force is dead — Tito Santana is dead to me!', context: 'After breaking up Strike Force by attacking Tito at WrestleMania V', year: '1989', iconic: false },
  ],
  435: [ // King Kong Bundy
    { quote: 'I want a five count!', context: 'Demanded referee count to five instead of three for pinfalls', year: '1986', iconic: true },
    { quote: 'I am the walking, talking, natural disaster!', context: 'Monster heel persona boasting about his 458-pound frame', year: '1986', iconic: false },
    { quote: 'Hogan, I\'m going to avalanche you right out of the World Wrestling Federation!', context: 'Main event feud with Hulk Hogan before WrestleMania 2', year: '1986', iconic: false },
  ],
  861: [ // Riddle
    { quote: 'Bro!', context: 'Signature laid-back surfer persona catchphrase', year: '2020', iconic: true },
    { quote: 'Randy! Bro! RK-Bro!', context: 'Tag team chemistry with Randy Orton', year: '2021', iconic: true },
  ],
  205: [ // Luke Harper / Brodie Lee
    { quote: 'Yeah yeah yeah yeah yeah!', context: 'Wyatt Family enforcer battle cry', year: '2013', iconic: true },
    { quote: 'I\'m a company man. I follow the buzzards.', context: 'Devoted Wyatt Family disciple before his singles push', year: '2014', iconic: false },
    { quote: 'You don\'t know what I\'m capable of.', context: 'Brief but intense singles push showcasing his incredible athleticism for his size', year: '2014', iconic: false },
  ],
  388: [ // Umaga
    { quote: 'SAMOAAAA!', context: 'Savage war cry before destroying opponents', year: '2006', iconic: true },
    { quote: 'The Samoan Bulldozer does not stop!', context: 'Armando Alejandro Estrada speaking on behalf of the uncontrollable monster', year: '2006', iconic: false },
    { quote: 'Nobody can survive the Samoan Spike!', context: 'Devastating thumb-to-the-throat finisher that was his signature destruction', year: '2007', iconic: false },
  ],
  841: [ // Paul Orndorff
    { quote: 'Mr. Wonderful doesn\'t need friends, Mr. Wonderful IS the friend!', context: 'Heel turn on Hulk Hogan', year: '1986', iconic: true },
    { quote: 'Hogan, you used me! Now I\'m going to destroy you!', context: 'Iconic heel turn piledriver on Hulk Hogan at The War to Settle the Score', year: '1986', iconic: true },
    { quote: 'I am the most underrated wrestler in the history of this business!', context: 'Frustrated promos about being overshadowed by Hogan', year: '1987', iconic: false },
  ],
  17: [ // Brutus Beefcake
    { quote: 'It\'s cuttin\' time, baby!', context: 'The Barber\'s signature pre-haircut taunt', year: '1987', iconic: true },
    { quote: 'Everybody gets a little off the top!', context: 'Post-match victory celebration with hedge clippers', year: '1988', iconic: false },
    { quote: 'The Barber Shop is open for business!', context: 'Talk show segment that featured Shawn Michaels superkicking Marty Jannetty through the window', year: '1992', iconic: true },
  ],
  18: [ // Earthquake
    { quote: 'I\'m gonna shake you up!', context: 'Natural Disaster threat to opponents', year: '1990', iconic: true },
    { quote: 'I crushed Hulk Hogan — and I\'ll crush anyone else who stands in my way!', context: 'After legitimately injuring Hogan with the sit-down splash on The Brother Love Show', year: '1990', iconic: false },
    { quote: 'When the Earthquake hits, nobody survives!', context: 'Monster heel promos during his main event push', year: '1990', iconic: false },
  ],
  142: [ // Nikolai Volkoff
    { quote: 'Rossiya — svyashchennaya nasha derzhava!', context: 'Singing the Soviet national anthem to massive heat', year: '1984', iconic: true },
    { quote: 'Silence! I will sing the national anthem of the greatest country in the world!', context: 'Pre-match demand that created enormous heel heat from crowds', year: '1985', iconic: true },
    { quote: 'In Soviet Union, I am a hero!', context: 'Cold War era heel promos antagonizing American audiences', year: '1985', iconic: false },
  ],
  144: [ // George Steele
    { quote: 'Mine! Mine! Mine!', context: 'The Animal obsessing over Miss Elizabeth', year: '1986', iconic: true },
    { quote: 'Gahhhh!', context: 'The Animal\'s incoherent but beloved primal outbursts — he was a real-life teacher with a master\'s degree', year: '1985', iconic: true },
    { quote: 'Elizabeth... pretty...', context: 'Simple words expressing obsession with Miss Elizabeth that drove his feud with Randy Savage', year: '1986', iconic: false },
  ],
  170: [ // Snitsky
    { quote: 'It wasn\'t my fault!', context: 'Denying responsibility after punting a baby prop into the crowd', year: '2004', iconic: true },
    { quote: 'I like... feet.', context: 'Bizarre foot fetish character reveal that became a running gag', year: '2005', iconic: false },
    { quote: 'It\'s not my fault that bad things happen to good people!', context: 'Deranged heel promos during Kane feud over the Lita pregnancy storyline', year: '2004', iconic: false },
  ],
  355: [ // Ivan Koloff
    { quote: 'I beat Bruno! The Russian Bear is champion!', context: 'Shocking WWWF title win over Sammartino', year: '1971', iconic: true },
  ],
  357: [ // Blackjack Mulligan
    { quote: 'I\'m the meanest man in Texas!', context: 'Brawling cowboy persona', year: '1975', iconic: false },
  ],
  352: [ // Stan Hansen
    { quote: 'I\'ll lariat the head right off your shoulders!', context: 'Feared stiff worker known for the Western Lariat', year: '1981', iconic: true },
  ],
  356: [ // Chief Jay Strongbow
    { quote: 'The war dance has begun!', context: 'Native American warrior comeback sequence', year: '1970', iconic: false },
  ],
  351: [ // Mil Mascaras
    { quote: 'A thousand masks, one legend.', context: 'The Man of a Thousand Masks mystique', year: '1972', iconic: false },
  ],
  703: [ // IRS
    { quote: 'You\'re all tax cheats!', context: 'Irwin R. Schyster accusing fans of tax evasion', year: '1991', iconic: true },
    { quote: 'Pay your taxes!', context: 'Signature demand to the crowd', year: '1992', iconic: true },
  ],
  837: [ // Mr. Fuji
    { quote: 'Aaah so!', context: 'Manager\'s devious trademark before ordering attacks', year: '1983', iconic: true },
  ],
  472: [ // Finlay
    { quote: 'My name is Finlay, and I love to fight!', context: 'Signature introduction before brawling', year: '2006', iconic: true },
  ],
  473: [ // Eugene
    { quote: 'I love wrestling! I love all the wrestlers!', context: 'Childlike savant persona showing pure enthusiasm', year: '2004', iconic: false },
  ],
  508: [ // Evan Bourne
    { quote: 'Airborne!', context: 'High-flying daredevil before Shooting Star Press', year: '2008', iconic: false },
  ],
  386: [ // Boogeyman
    { quote: 'I\'m the Boogeyman, and I\'m coming to get you!', context: 'Terrifying entrance catchphrase while eating worms', year: '2005', iconic: true },
  ],
  385: [ // Gail Kim
    { quote: 'I changed the game before they even knew it was being played.', context: 'Pioneer of women\'s wrestling reflecting on her legacy', year: '2008', iconic: false },
  ],
  379: [ // Ted DiBiase Jr.
    { quote: 'Priceless!', context: 'Legacy faction catchphrase', year: '2008', iconic: false },
  ],
  201: [ // Damien Sandow
    { quote: 'Silence! I am the Intellectual Savior of the Masses!', context: 'Condescending heel gimmick', year: '2012', iconic: true },
    { quote: 'You\'re welcome!', context: 'Post-match catchphrase after "enlightening" the audience', year: '2012', iconic: true },
  ],
  202: [ // Fandango
    { quote: 'It\'s Fan... DAHN... GO.', context: 'Correcting everyone\'s pronunciation of his name', year: '2013', iconic: true },
  ],
  206: [ // Erick Rowan
    { quote: 'Follow the buzzards.', context: 'Wyatt Family disciple spreading Bray\'s message', year: '2013', iconic: false },
  ],
  173: [ // Brian Kendrick
    { quote: 'I\'m THE Brian Kendrick!', context: 'Emphasizing the "The" in his name', year: '2008', iconic: true },
    { quote: 'I have a plan!', context: 'Cruiserweight Classic desperate negotiations', year: '2016', iconic: false },
  ],
  482: [ // Andrade
    { quote: 'Tranquilo.', context: 'Cool, calm heel demeanor borrowed from Los Ingobernables', year: '2018', iconic: true },
    { quote: 'El Idolo has arrived!', context: 'NXT Champion persona — the Idol of Mexican wrestling', year: '2018', iconic: false },
    { quote: 'Nobody can match my skill in that ring — not in Mexico, not in Japan, not in WWE!', context: 'Heel promos about his global wrestling pedigree', year: '2019', iconic: false },
  ],
  491: [ // Jade Cargill
    { quote: 'I am THAT girl.', context: 'Dominant debut on SmackDown', year: '2024', iconic: true },
    { quote: 'I didn\'t come to WWE to fit in — I came to take over!', context: 'SmackDown debut establishing her dominance', year: '2024', iconic: false },
    { quote: 'Look at me. I\'m a star. And stars don\'t lose.', context: 'Confident heel promos showcasing her incredible physique and athleticism', year: '2024', iconic: false },
  ],
  493: [ // Ilja Dragunov
    { quote: 'I am unbesiegbar!', context: 'The Mad Dragon declaring himself unbeatable in NXT', year: '2023', iconic: true },
  ],
  500: [ // Chelsea Green
    { quote: 'I am the most underutilized superstar in WWE history!', context: 'Constant complaints about not getting opportunities on SmackDown', year: '2023', iconic: false },
    { quote: 'Move over, everyone — Chelsea Green is the new Women\'s Tag Team Champion and the hottest mess in WWE!', context: 'Winning the Women\'s Tag Team Championship with Piper Niven', year: '2024', iconic: false },
  ],
  505: [ // Lyra Valkyria
    { quote: 'In Ireland, we don\'t back down from a fight. We run toward it!', context: 'Irish warrior heritage promos in NXT', year: '2023', iconic: false },
    { quote: 'The Valkyria is here to take every championship NXT has to offer!', context: 'NXT Women\'s Championship pursuit', year: '2024', iconic: false },
  ],
  537: [ // Tama Tonga
    { quote: 'Bloodline runs deep.', context: 'Joining the Bloodline faction on SmackDown', year: '2024', iconic: false },
  ],
  620: [ // Io Shirai
    { quote: 'I am the genius of the sky!', context: 'Self-proclaimed aerial master in NXT', year: '2019', iconic: true },
  ],
  622: [ // Swerve Strickland
    { quote: 'Whose house? Swerve\'s house!', context: 'Signature catchphrase', year: '2021', iconic: true },
  ],
  736: [ // Jacqueline Moore
    { quote: 'I\'ll whoop your ass, man or woman!', context: 'Tough-as-nails attitude breaking gender barriers', year: '1998', iconic: true },
  ],
  458: [ // Mandy Rose
    { quote: 'God\'s greatest creation.', context: 'Confident self-introduction', year: '2019', iconic: true },
  ],
  411: [ // Roxanne Perez
    { quote: 'They call me the Prodigy for a reason — I\'ve accomplished more at my age than most do in a lifetime!', context: 'Youngest NXT Women\'s Champion promos', year: '2023', iconic: false },
    { quote: 'Cora Jade, you stabbed me in the back — and I\'m going to make you pay!', context: 'Breakup feud with tag partner Cora Jade in NXT', year: '2022', iconic: false },
  ],
  403: [ // Santos Escobar
    { quote: 'Legado del Fantasma will leave a legacy that lasts forever!', context: 'Faction leader promos on NXT with Joaquin Wilde and Cruz Del Toro', year: '2021', iconic: false },
    { quote: 'I am a third-generation luchador. This is my birthright!', context: 'Referencing his wrestling family heritage as grandson of wrestling legend', year: '2023', iconic: false },
  ],
  416: [ // Bronson Reed
    { quote: 'When the Tsunami hits, there are no survivors!', context: 'Monster heel promos during his Raw push', year: '2024', iconic: false },
    { quote: 'I am the most dangerous man on Monday Night Raw — and Seth Rollins is about to find out why!', context: 'Main event feud with Seth Rollins establishing him as a top heel', year: '2024', iconic: false },
  ],
  413: [ // Ludwig Kaiser
    { quote: 'Long live the Ring General!', context: 'Imperium herald hyping GUNTHER', year: '2022', iconic: false },
  ],
  415: [ // JD McDonagh
    { quote: 'The Irish Ace always has a card to play.', context: 'Cunning heel persona', year: '2023', iconic: false },
  ],
  426: [ // Grayson Waller
    { quote: 'Welcome to the Grayson Waller Effect!', context: 'Talk show segment host', year: '2023', iconic: true },
  ],
  409: [ // Raquel Rodriguez
    { quote: 'I am six feet of power, and there\'s nobody who can move me!', context: 'NXT Women\'s Champion dominance promos', year: '2021', iconic: false },
    { quote: 'Big Mami Cool doesn\'t back down — she runs people over!', context: 'Powerhouse babyface promos on SmackDown', year: '2023', iconic: false },
  ],
  453: [ // Brie Bella
    { quote: 'Brie Mode!', context: 'Battle cry before diving through the ropes', year: '2014', iconic: true },
  ],
  401: [ // Angel Garza
    { quote: 'Take off the pants, and it\'s go time!', context: 'Ripping off tear-away pants mid-match', year: '2020', iconic: false },
  ],
  418: [ // Ridge Holland
    { quote: 'Northern Grit!', context: 'Tough Yorkshire brawler persona', year: '2021', iconic: false },
  ],
  425: [ // Dexter Lumis
    { quote: '...', context: 'Silent stalker — never speaks, communicates through drawings and stares', year: '2020', iconic: true },
  ],
  183: [ // Heidenreich
    { quote: 'I\'m here to read you a poem!', context: 'Bizarre poetry-reading segment that baffled audiences', year: '2005', iconic: false },
  ],
  496: [ // Dragon Lee
    { quote: '¡Viva la raza de los dragones!', context: 'Mexican lucha libre heritage pride', year: '2023', iconic: false },
  ],
  497: [ // Axiom
    { quote: 'Logic always prevails.', context: 'Mathematical precision wrestling approach', year: '2022', iconic: false },
  ],
  68: [ // Tazz
    { quote: 'Beat me if you can, survive if I let you!', context: 'Human Suplex Machine catchphrase', year: '2000', iconic: true },
    { quote: 'Here comes the pain!', context: 'Commentary catchphrase (later adopted by Brock Lesnar)', year: '2002', iconic: true },
  ],
  138: [ // Theory
    { quote: 'The youngest Mr. Money in the Bank in history!', context: 'Bragging about his MITB win at age 24', year: '2022', iconic: false },
    { quote: 'Selfie!', context: 'Taking selfies with defeated opponents as a signature taunt', year: '2022', iconic: true },
    { quote: 'Mr. McMahon sees something special in me — and he\'s right!', context: 'Vince McMahon protege storyline on Raw', year: '2022', iconic: false },
  ],
  197: [ // Heath Slater
    { quote: 'I got kids!', context: 'Desperate plea during the 2016 brand split draft', year: '2016', iconic: true },
    { quote: 'Baby!', context: 'One-man band signature exclamation', year: '2012', iconic: false },
  ],
  203: [ // Bo Dallas
    { quote: 'All you have to do is BO-LIEVE!', context: 'Delusional motivational speaker gimmick', year: '2014', iconic: true },
  ],
  213: [ // Elias
    { quote: 'WWE stands for Walk... With... Elias!', context: 'Guitar-playing troubadour\'s signature intro', year: '2017', iconic: true },
    { quote: 'Who wants to walk with Elias?', context: 'Concert segment crowd interaction', year: '2018', iconic: true },
  ],
  216: [ // Karrion Kross
    { quote: 'Tick tock. Your time is running out.', context: 'Doomsday clock persona', year: '2020', iconic: true },
    { quote: 'Fall and pray.', context: 'NXT Championship reign entrance tagline', year: '2021', iconic: false },
  ],
  219: [ // Solo Sikoa
    { quote: 'I am the Tribal Chief now.', context: 'Usurping Roman Reigns\' position in the Bloodline', year: '2024', iconic: true },
    { quote: 'The Street Champion doesn\'t need an Ula Fala.', context: 'Establishing his own identity apart from the Bloodline', year: '2024', iconic: false },
  ],
  233: [ // Sable
    { quote: 'This is for all the men who came to see me, and all the women who wish they were me.', context: 'Confident entrance tagline during the Attitude Era', year: '1998', iconic: true },
    { quote: 'I am the most downloaded woman on the internet!', context: 'Attitude Era boast about her popularity and Playboy appearance', year: '1999', iconic: false },
    { quote: 'Marc, you\'re holding me back!', context: 'Breaking free from Marc Mero\'s jealous husband character', year: '1998', iconic: false },
  ],
  242: [ // Sandman
    { quote: 'Enter Sandman!', context: 'Metallica entrance through the crowd with Singapore cane and beer', year: '1995', iconic: true },
    { quote: 'I\'m hardcore! I\'m ECW! And I\'ll cane anybody who disagrees!', context: 'ECW embodiment — Singapore cane as weapon and identity', year: '1996', iconic: false },
    { quote: 'I don\'t need wrestling ability — I got a cane and a cold beer!', context: 'Self-aware promos about his brawling style over technique', year: '1997', iconic: false },
  ],
  250: [ // Billy Kidman
    { quote: 'Who\'s the man? Kidman!', context: 'Cruiserweight champion catching his stride in WCW/WWE', year: '2001', iconic: false },
    { quote: 'I can fly higher than anyone in this division!', context: 'Shooting Star Press — cruiserweight division workhorse in WCW and WWE', year: '2003', iconic: false },
    { quote: 'The Shooting Star Press ends it every single time!', context: 'Signature finisher that made him a staple of the cruiserweight division', year: '2002', iconic: false },
  ],
  292: [ // Jinder Mahal
    { quote: 'The Maharaja has arrived!', context: 'Shocking WWE Championship reign', year: '2017', iconic: true },
    { quote: 'Shanti!', context: 'Hindi for peace, used mockingly as a heel', year: '2017', iconic: false },
  ],
  300: [ // Wendi Richter
    { quote: 'Cyndi and I proved that women belong in the main event!', context: 'Reference to Cyndi Lauper and the Rock \'n\' Wrestling Connection at the first WrestleMania', year: '1985', iconic: true },
    { quote: 'They stole my championship with the Original Screwjob — and I never forgot it!', context: 'The infamous match where Moolah disguised as Spider replaced her and Richter was counted down', year: '1985', iconic: true },
  ],
  301: [ // Fabulous Moolah
    { quote: 'No woman alive can beat the Fabulous Moolah!', context: 'Dominant heel champion across multiple decades', year: '1984', iconic: false },
    { quote: 'I trained every woman who ever stepped into a wrestling ring!', context: 'Self-proclaimed matriarch of women\'s wrestling', year: '1999', iconic: false },
  ],
  303: [ // Molly Holly
    { quote: 'I am pure, I am wholesome, and I am a role model for every young girl watching!', context: 'Heel persona mocking the risqué Divas era while being a superior in-ring worker', year: '2003', iconic: false },
    { quote: 'If I have to shave my head to prove how much this championship means to me, so be it!', context: 'WrestleMania XX stipulation where she lost her hair after losing to Victoria', year: '2004', iconic: true },
  ],
  305: [ // Jazz
    { quote: 'These little girls playing dress-up don\'t belong in my ring!', context: 'Heel promos dismissing the other women as inferior competitors', year: '2003', iconic: false },
    { quote: 'I came from ECW. I don\'t play nice — I fight!', context: 'Establishing her hardcore background as legitimacy in the Women\'s division', year: '2002', iconic: false },
  ],
  306: [ // Naomi
    { quote: 'Feel the Glow!', context: 'Neon-lit entrance catchphrase', year: '2016', iconic: true },
    { quote: 'I earned this — nobody handed me anything!', context: 'Two-time SmackDown Women\'s Champion defending her hard-fought rise', year: '2017', iconic: false },
    { quote: 'The Glow is back, and it\'s brighter than ever!', context: 'Return from injury to reclaim SmackDown Women\'s Championship at WrestleMania 33', year: '2017', iconic: false },
  ],
  320: [ // Ryback
    { quote: 'Feed me more! Feed me more!', context: 'Crowd chant that became his signature catchphrase', year: '2012', iconic: true },
    { quote: 'Stupid!', context: 'Bully Ryback insulting everyone backstage', year: '2015', iconic: false },
  ],
  347: [ // Pat Patterson
    { quote: 'I won the first ever Intercontinental Championship!', context: 'Historic tournament victory in Rio de Janeiro', year: '1979', iconic: true },
  ],
  440: [ // Haku
    { quote: '...', context: 'Haku let his fists do the talking — universally feared as the toughest man in wrestling', year: '1987', iconic: false },
  ],
  449: [ // The Great Khali
    { quote: 'Kaun hai jo takkar de?!', context: 'Hindi challenge: Who dares to challenge me?', year: '2007', iconic: true },
  ],
  465: [ // Zelina Vega
    { quote: 'I am the manager, the businesswoman, and the brains behind every champion I\'ve guided!', context: 'Managing Andrade and later Angel Garza on Raw', year: '2020', iconic: false },
    { quote: 'Welcome to the queendom of Zelina Vega!', context: 'Queen Zelina persona after winning the Queen\'s Crown tournament', year: '2022', iconic: false },
  ],
  468: [ // TAKA Michinoku
    { quote: 'Indeed!', context: 'Catchphrase that became a crowd favorite', year: '1998', iconic: true },
  ],
  478: [ // Curtis Axel
    { quote: 'Better than perfect.', context: 'Attempting to honor his father Mr. Perfect\'s legacy', year: '2013', iconic: false },
    { quote: 'Axelmania is running wild!', context: 'Royal Rumble 2015 — claimed he was never eliminated', year: '2015', iconic: false },
  ],
  492: [ // Trick Williams
    { quote: 'Whoop that trick!', context: 'NXT crowd chant turned signature catchphrase', year: '2023', iconic: true },
    { quote: 'I\'m him. I\'m that dude. And now I\'m NXT Champion!', context: 'NXT Championship celebration after defeating Carmelo Hayes', year: '2024', iconic: true },
    { quote: 'Trick Williams is the whole damn show!', context: 'Confident NXT main eventer promos', year: '2023', iconic: false },
  ],
  518: [ // Tony D\'Angelo
    { quote: 'Bada bing, bada boom!', context: 'Mobster persona enforcing respect in NXT', year: '2022', iconic: false },
    { quote: 'Fuggedaboutit!', context: 'Mafia-inspired catchphrase', year: '2022', iconic: false },
  ],
  524: [ // Tyler Bate
    { quote: 'Big Strong Boy!', context: 'Fan nickname embraced by the UK prodigy', year: '2017', iconic: true },
  ],
  553: [ // Tully Blanchard
    { quote: 'Nobody\'s better than me. Nobody.', context: 'Four Horsemen arrogance', year: '1986', iconic: false },
  ],
  556: [ // Jim Neidhart
    { quote: 'YEAHHH! Heh heh heh!', context: 'Anvil\'s signature maniacal laugh', year: '1987', iconic: true },
  ],
  564: [ // Marc Mero
    { quote: 'Sable, you wouldn\'t be anything without me!', context: 'Jealous husband heel turn as Sable\'s popularity eclipsed his', year: '1998', iconic: true },
    { quote: 'I am the Marvelous One! I was a Golden Gloves boxing champion before I ever stepped in this ring!', context: 'Highlighting his legitimate boxing background during his WWF run', year: '1996', iconic: false },
  ],
  575: [ // Mr. Kennedy
    { quote: 'I am Mr. Money in the Bank!', context: 'After winning the Money in the Bank ladder match at WrestleMania 23', year: '2007', iconic: false },
    { quote: 'I\'m the future of this business, and nobody can stop me!', context: 'Aggressive heel promos during his push toward the main event on SmackDown', year: '2006', iconic: false },
  ],
  589: [ // Apollo Crews
    { quote: 'I am Apollo Crews — the Nigerian prince, the Intercontinental Champion, and your commander!', context: 'Heel turn with Nigerian royalty persona on SmackDown', year: '2021', iconic: false },
    { quote: 'I was tired of smiling and shaking hands. Now I take what I deserve!', context: 'Heel turn promo after years as an underutilized babyface', year: '2021', iconic: false },
  ],
  590: [ // Toni Storm
    { quote: 'I conquered NXT UK, and now I\'m going to conquer SmackDown!', context: 'NXT UK Women\'s Champion transitioning to the main roster', year: '2022', iconic: false },
    { quote: 'The storm is here, and it\'s not passing anytime soon!', context: 'SmackDown Women\'s division promos during her push', year: '2022', iconic: false },
  ],
  869: [ // Cameron Grimes
    { quote: 'Cameron Grimes is going to the moon, baby! And I\'m taking the NXT Championship with me!', context: 'Lottery winner / stock market rich persona in NXT', year: '2021', iconic: false },
    { quote: 'Ted DiBiase taught me that money can buy happiness — and a whole lot more!', context: 'Mentorship storyline with Ted DiBiase on NXT', year: '2022', iconic: false },
  ],
  887: [ // Ahmed Johnson
    { quote: 'I am the first African American Intercontinental Champion — and I\'m just getting started!', context: 'Historic IC Title victory over Goldust at King of the Ring 1996', year: '1996', iconic: true },
    { quote: 'The Nation of Domination thinks they can jump me? Come get some!', context: 'Babyface feud with the Nation of Domination on Raw', year: '1997', iconic: false },
  ],
  897: [ // Maven
    { quote: 'I won Tough Enough — and now I\'m going to prove I belong here!', context: 'First Tough Enough winner establishing himself on the WWE roster', year: '2002', iconic: false },
    { quote: 'I may be the new kid, but I\'m not afraid of anyone on this roster!', context: 'Babyface underdog promos during his early Raw career', year: '2002', iconic: false },
  ],
  906: [ // Oba Femi
    { quote: 'I am the ruler of NXT. Every title will belong to me!', context: 'NXT North American Championship dominance promos', year: '2024', iconic: false },
    { quote: 'There is no one in NXT who can match my size, my power, or my destiny!', context: 'Record-setting NXT North American Championship reign', year: '2024', iconic: false },
  ],
  936: [ // Hardcore Holly
    { quote: 'I\'m the toughest SOB in this locker room, and that\'s not a gimmick!', context: 'Known as one of the stiffest workers in WWE — genuinely feared backstage', year: '2004', iconic: false },
    { quote: 'Brock Lesnar broke my neck — and I came back to break him!', context: 'Return feud with Lesnar after a legit broken neck on SmackDown', year: '2004', iconic: false },
  ],
  944: [ // Maryse
    { quote: 'I am the sexiest of the sexy! And I am your Divas Champion!', context: 'Two-time Divas Champion heel promos on SmackDown', year: '2010', iconic: true },
    { quote: 'The "It" couple of WWE — The Miz and Maryse!', context: 'Power couple persona managing The Miz and feuding with John Cena & Nikki Bella', year: '2017', iconic: false },
  ],
  963: [ // Nikki Cross
    { quote: 'I just want to play! Why won\'t anyone play with me?!', context: 'Chaotic babyface persona seeking friendship on SmackDown', year: '2019', iconic: false },
    { quote: 'Nikki A.S.H. is a superhero! Almost a superhero! I believe!', context: 'Nikki Almost a Super Hero gimmick with cape and mask on Raw', year: '2021', iconic: false },
  ],
  973: [ // Neville
    { quote: 'I don\'t belong on 205 Live — I belong on Raw, on SmackDown, in the main event!', context: 'Bitter heel promos about being demoted to the Cruiserweight division', year: '2017', iconic: false },
    { quote: 'The Man That Gravity Forgot is done being forgotten!', context: 'Dominant Cruiserweight Champion establishing himself as the division\'s top star', year: '2017', iconic: true },
  ],
  995: [ // Sensational Sherri
    { quote: 'I am the queen of wrestling! Every champion I\'ve managed has been great because of ME!', context: 'Managing Randy Savage during his Macho King era', year: '1989', iconic: false },
    { quote: 'Shawn Michaels, you used me! You broke my heart!', context: 'Turning on Michaels at the 1993 Royal Rumble after Marty Jannetty returned', year: '1993', iconic: true },
  ],
  1041: [ // Virgil
    { quote: 'Million Dollar Man, you don\'t own me anymore!', context: 'Babyface turn against Ted DiBiase at the Royal Rumble with Roddy Piper\'s encouragement', year: '1991', iconic: true },
    { quote: 'I beat the Million Dollar Man at SummerSlam — and I earned the Million Dollar Belt!', context: 'Winning the Million Dollar Championship at SummerSlam 1991', year: '1991', iconic: false },
  ],
  1065: [ // Luke Gallows
    { quote: 'Too sweet!', context: 'Bullet Club/Good Brothers hand gesture and catchphrase', year: '2016', iconic: true },
  ],
  1066: [ // Karl Anderson
    { quote: 'It\'s a good brother thing!', context: 'Tag team catchphrase with Luke Gallows', year: '2016', iconic: true },
  ],
  1070: [ // Kalisto
    { quote: 'Lucha! Lucha! Lucha!', context: 'High-flying luchador crowd chant', year: '2015', iconic: true },
  ],
  264: [ // Dakota Kai
    { quote: 'Raquel turned her back on me. Now I\'m going to show everyone what happens when you betray Dakota Kai!', context: 'Feud with Raquel Gonzalez after their tag team broke up in NXT', year: '2021', iconic: false },
    { quote: 'Damage CTRL runs the women\'s division — and don\'t you forget it!', context: 'Faction member with Bayley and Iyo Sky on Raw', year: '2022', iconic: false },
  ],
  263: [ // Ember Moon
    { quote: 'The Eclipse doesn\'t just end matches — it ends careers.', context: 'NXT Women\'s Championship pursuit promos', year: '2018', iconic: false },
    { quote: 'I have been waiting my whole life for this moment. The Shenom is taking over NXT!', context: 'NXT Women\'s Championship reign promos', year: '2018', iconic: false },
  ],
  495: [ // Wes Lee
    { quote: 'It\'s Wes Lee time!', context: 'NXT North American Champion breakout', year: '2022', iconic: false },
  ],
  258: [ // Velveteen Dream
    { quote: 'Say my name!', context: 'Prince-inspired flamboyant persona', year: '2018', iconic: true },
    { quote: 'The Dream has no memory of that.', context: 'Dismissing opponents\' accomplishments', year: '2018', iconic: true },
  ],

  // ── LATER ADDITIONS: WWWF / Golden Era Legends ──
  1023: [ // Bob Orton Jr.
    { quote: 'This cast never comes off — it\'s my greatest weapon!', context: 'Signature loaded cast gimmick', year: '1985', iconic: true },
  ],
  1024: [ // Rocky Johnson
    { quote: 'Soul Man is here to clean house!', context: 'Charismatic babyface promos', year: '1983', iconic: false },
  ],
  1025: [ // Tony Atlas
    { quote: 'I\'m the strongest man in wrestling!', context: 'Showcasing his incredible physique', year: '1983', iconic: false },
  ],
  1026: [ // Bobo Brazil
    { quote: 'I\'ll coco butt anyone who stands in my way!', context: 'Signature headbutt finishing move', year: '1970', iconic: true },
  ],
  1027: [ // Larry Zbyszko
    { quote: 'I am the Living Legend — the new Living Legend of professional wrestling!', context: 'After turning on Bruno Sammartino', year: '1980', iconic: true },
  ],
  1028: [ // Ernie Ladd
    { quote: 'I\'m too big, too strong, and too smart for anyone in that locker room!', context: 'Heel promo work', year: '1975', iconic: false },
  ],
  1029: [ // Ken Patera
    { quote: 'I put the strongest man in the world on notice!', context: 'Olympic strongman persona', year: '1981', iconic: false },
  ],
  1030: [ // Ivan Putski
    { quote: 'Polish Power!', context: 'Signature fan-favorite catchphrase', year: '1978', iconic: true },
  ],
  1031: [ // Tony Garea
    { quote: 'As long as the fans believe in me, I\'ll keep fighting!', context: 'Pure babyface tag specialist', year: '1980', iconic: false },
  ],
  1032: [ // Professor Toru Tanaka
    { quote: 'You face the master now!', context: 'Japanese heel mystique promos', year: '1972', iconic: false },
  ],
  1033: [ // Arnold Skaaland
    { quote: 'I\'ve managed champions — I know what it takes!', context: 'Manager of Bruno and Backlund', year: '1978', iconic: false },
  ],
  1036: [ // The Dynamite Kid
    { quote: 'I don\'t talk — I fight!', context: 'Known for action over words', year: '1984', iconic: false },
  ],
  1042: [ // Hercules Hernandez
    { quote: 'The power of Hercules cannot be stopped!', context: 'Greco-Roman strongman gimmick', year: '1986', iconic: false },
  ],
  1043: [ // One Man Gang
    { quote: 'I\'m a 450-pound wrecking machine and I\'ll destroy anyone!', context: 'Biker brawler persona', year: '1988', iconic: false },
  ],
  1044: [ // Jacques Rougeau
    { quote: 'We are the Fabulous Rougeau Brothers — and we love America!', context: 'Sarcastic heel Americana gimmick', year: '1988', iconic: true },
  ],
  1045: [ // Raymond Rougeau
    { quote: 'All-American Boys — that\'s us!', context: 'Rougeau Brothers theme reference', year: '1988', iconic: false },
  ],
  1046: [ // Lanny Poffo
    { quote: 'A poem for all my fans...', context: 'The Genius poetry promos', year: '1989', iconic: true },
  ],
  1047: [ // Ronnie Garvin
    { quote: 'Rugged is what I do — hands of stone!', context: 'Hands of Stone knockout puncher', year: '1987', iconic: false },
  ],
  1049: [ // Ron Bass
    { quote: 'Miss Betsy will teach you some manners!', context: 'Bullwhip-wielding outlaw gimmick', year: '1988', iconic: false },
  ],
  1050: [ // B. Brian Blair
    { quote: 'The Killer Bees sting and we sting hard!', context: 'Tag team with Jim Brunzell', year: '1985', iconic: false },
  ],
  1051: [ // Jim Brunzell
    { quote: 'Jumpin\' Jim is ready to fly!', context: 'High-flying Killer Bees member', year: '1985', iconic: false },
  ],
  1052: [ // Butch Reed
    { quote: 'I\'m the Natural — and there\'s nothing natural about beating me!', context: 'The Natural Butch Reed persona', year: '1987', iconic: false },
  ],
  1053: [ // Bart Gunn
    { quote: 'I\'ll knock anyone out — in the ring or the Brawl for All!', context: 'Brawl for All tournament winner', year: '1998', iconic: true },
  ],
  1054: [ // The Patriot
    { quote: 'For the red, white, and blue!', context: 'American patriot gimmick', year: '1997', iconic: false },
  ],
  1055: [ // Henry O. Godwinn
    { quote: 'Time to slop some hogs!', context: 'Pig farmer gimmick with slop bucket', year: '1995', iconic: true },
  ],
  1056: [ // Mideon
    { quote: 'The Ministry will consume you all!', context: 'Undertaker\'s Ministry of Darkness acolyte', year: '1999', iconic: false },
  ],
  1057: [ // Samu
    { quote: 'The Headshrinkers fear nothing!', context: 'Wild Samoan tag team persona', year: '1993', iconic: false },
  ],
  1058: [ // Rockin Robin
    { quote: 'The Women\'s Championship stays with me!', context: 'Women\'s Champion reign', year: '1988', iconic: false },
  ],
  1059: [ // Terry Funk
    { quote: 'I\'m middle-aged and crazy!', context: 'Hardcore legend\'s self-deprecating persona', year: '1997', iconic: true },
    { quote: 'Forever! Forever! Forever!', context: 'ECW hardcore matches', year: '1997', iconic: true },
  ],
  1060: [ // Mike Awesome
    { quote: 'I\'m awesome — deal with it!', context: 'ECW Champion power persona', year: '2000', iconic: false },
  ],
  1061: [ // Shane Douglas
    { quote: 'This is the night I become The Franchise!', context: 'Threw down NWA title to crown ECW Championship', year: '1994', iconic: true },
  ],
  1064: [ // Rick Steiner
    { quote: 'I\'m just a dog-faced gremlin trying to have a good time!', context: 'Fan-favorite persona with the Steiner Brothers', year: '1993', iconic: true },
  ],
  1067: [ // Paul Roma
    { quote: 'I\'m a Horseman now — get used to it!', context: 'Controversial Four Horsemen addition', year: '1993', iconic: false },
  ],
  1068: [ // Rosey
    { quote: 'S.H.I.T. — Super Hero In Training!', context: 'Hurricane\'s sidekick gimmick', year: '2003', iconic: true },
  ],
  1073: [ // Akam
    { quote: 'Authors of Pain don\'t need words — we need victims!', context: 'AOP dominant tag team', year: '2017', iconic: false },
  ],
  1074: [ // Rezar
    { quote: 'Pain is our language!', context: 'Authors of Pain enforcer', year: '2017', iconic: false },
  ],
  1075: [ // Erik
    { quote: 'The Viking Raiders pillage and plunder!', context: 'Viking Experience/Raiders persona', year: '2019', iconic: false },
  ],
  1079: [ // Darren Young
    { quote: 'No Days Off!', context: 'Signature motivational catchphrase', year: '2016', iconic: false },
    { quote: 'Make Darren Young great again!', context: 'Bob Backlund life coach era', year: '2016', iconic: true },
  ],
  1081: [ // Alicia Fox
    { quote: 'You don\'t know crazy until you\'ve met me!', context: 'Unpredictable personality era', year: '2014', iconic: false },
  ],
  1082: [ // Kelly Kelly
    { quote: 'K2 is here!', context: 'Divas Champion era', year: '2011', iconic: false },
  ],
  1083: [ // Billie Kay
    { quote: 'Hey! Kayla!', context: 'Persistent resume-giving gimmick', year: '2020', iconic: true },
    { quote: 'The IIconics are the greatest tag team of all time!', context: 'IIconics with Peyton Royce', year: '2019', iconic: true },
  ],
  1084: [ // Peyton Royce
    { quote: 'IIconic!', context: 'Signature taunt with Billie Kay', year: '2019', iconic: true },
  ],
  1085: [ // Tucker
    { quote: 'Heavy Machinery coming through!', context: 'Tag team with Otis', year: '2019', iconic: false },
  ],
  1086: [ // Cedric Alexander
    { quote: 'The Age of Alexander is now!', context: 'Cruiserweight Champion persona', year: '2018', iconic: false },
  ],
  1087: [ // Buddy Murphy
    { quote: 'I am the best kept secret in WWE!', context: 'Cruiserweight Champion breakout', year: '2019', iconic: true },
  ],
  1088: [ // Kenny Dykstra
    { quote: 'I\'m the future of this business!', context: 'Spirit Squad breakout attempt', year: '2007', iconic: false },
  ],
  1091: [ // Blair Davenport
    { quote: 'I don\'t play nice — I play to win!', context: 'Vicious heel persona', year: '2023', iconic: false },
  ],
  1092: [ // Ethan Page
    { quote: 'All Ego!', context: 'Signature narcissistic catchphrase', year: '2024', iconic: false },
  ],
  1095: [ // Kit Wilson
    { quote: 'Pretty Deadly are simply gorgeous, darling!', context: 'Tag team with Elton Prince', year: '2022', iconic: false },
  ],
  1096: [ // Elton Prince
    { quote: 'We\'re Pretty Deadly, and we\'re bloody fabulous!', context: 'NXT Tag Team Champions', year: '2022', iconic: false },
  ],
  1097: [ // Drake Maverick
    { quote: 'I will not be denied the Cruiserweight Championship!', context: 'Emotional title pursuit', year: '2020', iconic: true },
  ],
  1098: [ // Shad Gaspard
    { quote: 'Cryme Tyme is in the building — hide your valuables!', context: 'Cryme Tyme comedic segments', year: '2006', iconic: true },
  ],
  1099: [ // Nick Bockwinkel
    { quote: 'I am the consummate professional — you\'re looking at wrestling\'s Renaissance man!', context: 'Articulate AWA Champion heel promos', year: '1980', iconic: true },
  ],
  1100: [ // Verne Gagne
    { quote: 'The AWA is the real world of professional wrestling!', context: 'AWA promoter and champion', year: '1975', iconic: true },
  ],
  1101: [ // Antonio Inoki
    { quote: '1, 2, 3, Da!', context: 'Crowd call-and-response signature', year: '1990', iconic: true },
  ],
  1102: [ // Abdullah the Butcher
    { quote: 'I don\'t give interviews — I give pain!', context: 'Madman of Sudan persona', year: '1980', iconic: true },
  ],
  1103: [ // Carlos Colon
    { quote: 'Puerto Rico is my ring, and I\'ll defend it to the death!', context: 'WWC legend\'s territory promos', year: '1985', iconic: false },
  ],
  1104: [ // Dory Funk Jr.
    { quote: 'The Funk family is wrestling royalty!', context: 'NWA World Champion era', year: '1973', iconic: false },
  ],
  1105: [ // Jack Brisco
    { quote: 'I wrestled my way to the top — no shortcuts!', context: 'NWA World Champion amateur-style promos', year: '1973', iconic: false },
  ],
  1106: [ // Gerald Brisco
    { quote: 'Brisco Brothers are as tough as they come!', context: 'Tag team with Jack Brisco', year: '1984', iconic: false },
  ],
  1108: [ // Kharma
    { quote: 'I\'m not like the other divas — I\'m your worst nightmare!', context: 'Monster heel debut', year: '2011', iconic: true },
  ],
  1109: [ // JTG
    { quote: 'Brooklyn Brooklyn!', context: 'Cryme Tyme catchphrase', year: '2006', iconic: false },
  ],
  1110: [ // The Berzerker
    { quote: 'Huss! Huss! Huss!', context: 'Viking berzerker battle cry', year: '1991', iconic: true },
  ],
  1111: [ // Lio Rush
    { quote: 'I am the Man of the Hour!', context: 'Bobby Lashley\'s hype man persona', year: '2018', iconic: true },
  ],
  1112: [ // Drew Gulak
    { quote: 'Welcome to the Drew Gulak PowerPoint presentation!', context: 'PowerPoint promo gimmick', year: '2017', iconic: true },
  ],
  1113: [ // Tye Dillinger
    { quote: 'Ten! Ten! Ten!', context: 'The Perfect 10 crowd chant', year: '2017', iconic: true },
  ],
  1114: [ // Gran Metalik
    { quote: 'The King of the Ropes is here!', context: 'Cruiserweight Classic breakout', year: '2016', iconic: false },
  ],
  1115: [ // Lince Dorado
    { quote: 'The Lucha House Party never stops!', context: 'Lucha House Party member', year: '2018', iconic: false },
  ],
  1117: [ // Boris Zhukov
    { quote: 'Mother Russia will crush America!', context: 'Soviet heel gimmick with Nikolai Volkoff', year: '1987', iconic: false },
  ],
  1118: [ // Charlie Dempsey
    { quote: 'Technical wrestling is an art — and I am the artist!', context: 'No Quarter Catch Crew leader', year: '2023', iconic: false },
  ],
  1120: [ // Lexis King
    { quote: 'Lexis King plays by his own rules!', context: 'NXT character reinvention', year: '2024', iconic: false },
  ],
  1121: [ // Sylvain Grenier
    { quote: 'La Résistance will never surrender!', context: 'Anti-American French tag team', year: '2003', iconic: false },
  ],
  1122: [ // Stan Stasiak
    { quote: 'One heart punch is all it takes!', context: 'Heart Punch finishing move', year: '1973', iconic: true },
  ],
  1123: [ // Billy Jack Haynes
    { quote: 'The Oregon strongman fears no one!', context: 'Pacific Northwest babyface', year: '1986', iconic: false },
  ],
  1124: [ // Jim Powers
    { quote: 'The Young Stallions will run wild!', context: 'Tag team with Paul Roma', year: '1987', iconic: false },
  ],
  1125: [ // S.D. Jones
    { quote: 'Special Delivery is on the way!', context: 'Fan-favorite underdog', year: '1982', iconic: false },
  ],
  1126: [ // Tonga Kid
    { quote: 'The island warriors are here!', context: 'Samoan wrestling family heritage', year: '1984', iconic: false },
  ],
  1127: [ // Corporal Kirchner
    { quote: 'Reporting for duty!', context: 'Military gimmick babyface', year: '1985', iconic: false },
  ],
  1128: [ // Velvet McIntyre
    { quote: 'I\'ll outfly anyone in the women\'s division!', context: 'High-flying women\'s pioneer', year: '1986', iconic: false },
  ],
  1129: [ // Leilani Kai
    { quote: 'The crown belongs to me!', context: 'Women\'s Champion heel', year: '1985', iconic: false },
  ],
  1130: [ // Judy Martin
    { quote: 'The Glamour Girls run this division!', context: 'Tag team with Leilani Kai', year: '1987', iconic: false },
  ],
  1131: [ // Iron Mike Sharpe
    { quote: 'Canada\'s Greatest Athlete is in the building!', context: 'Self-proclaimed title with forearm brace', year: '1983', iconic: true },
  ],
  1133: [ // Blackjack Lanza
    { quote: 'The Blackjacks don\'t play fair — and we like it that way!', context: 'Blackjacks tag team heel promos', year: '1975', iconic: false },
  ],
  1134: [ // Peter Maivia
    { quote: 'The High Chief protects his people!', context: 'Samoan High Chief persona', year: '1978', iconic: false },
  ],
  1135: [ // Baron Mikel Scicluna
    { quote: 'The Baron from the Isle of Malta bows to no one!', context: 'Foreign heel gimmick', year: '1970', iconic: false },
  ],
  1136: [ // Haystacks Calhoun
    { quote: 'Six hundred pounds of country boy is coming your way!', context: 'Super heavyweight attraction', year: '1965', iconic: false },
  ],
  1137: [ // Swede Hanson
    { quote: 'The Blackjacks will lay you out!', context: 'Blackjacks tag team enforcer', year: '1975', iconic: false },
  ],
  1138: [ // Spiros Arion
    { quote: 'Greek strength will overcome all!', context: 'WWWF tag champion era', year: '1972', iconic: false },
  ],
  1139: [ // Waldo Von Erich
    { quote: 'You will learn to fear the Von Erich name!', context: 'German heel persona', year: '1968', iconic: false },
  ],
  1141: [ // Dean Ho
    { quote: 'Hawaiian power is real!', context: 'Tag team competitor', year: '1973', iconic: false },
  ],
  1142: [ // Victor Rivera
    { quote: 'Puerto Rican pride runs through my veins!', context: 'WWWF Tag Champion', year: '1972', iconic: false },
  ],
  1143: [ // King Curtis Iaukea
    { quote: 'The King rules this kingdom!', context: 'Hawaiian royalty gimmick', year: '1970', iconic: false },
  ],
  1144: [ // The Executioners
    { quote: 'You\'ll never see our faces — only our destruction!', context: 'Masked tag team mystique', year: '1976', iconic: false },
  ],
  1145: [ // Johnny Rodz
    { quote: 'The Unpredictable One always has a trick up his sleeve!', context: 'Veteran heel persona', year: '1980', iconic: false },
  ],
  1148: [ // Mr. Saito
    { quote: 'I bring the honor of Japan into this ring!', context: 'Japanese heel tag specialist', year: '1981', iconic: false },
  ],
  1149: [ // The Sheik
    { quote: 'Fire! Fire!', context: 'Infamous fireball-throwing wild man', year: '1972', iconic: true },
  ],
  1150: [ // Ox Baker
    { quote: 'The heart punch stops hearts — literally!', context: 'Terrifying heel persona', year: '1975', iconic: true },
  ],
  1151: [ // Sam Houston
    { quote: 'Texas never backs down from a fight!', context: 'Texan babyface persona', year: '1987', iconic: false },
  ],
  1154: [ // Dominic DeNucci
    { quote: 'I\'ve trained the best — and I\'ll still outwrestle anyone!', context: 'Trainer of Mick Foley and Shane Douglas', year: '1975', iconic: false },
  ],
  1155: [ // Frenchy Martin
    { quote: 'Mon ami, allow me to introduce...', context: 'Manager and tag competitor', year: '1988', iconic: false },
  ],
  1156: [ // Tama (Islanders)
    { quote: 'The Islanders strike swift and hard!', context: 'Tag team with Haku', year: '1987', iconic: false },
  ],
  1157: [ // Tiger Chung Lee
    { quote: 'Korean power is unbreakable!', context: 'Asian heel persona', year: '1983', iconic: false },
  ],
  1158: [ // Sivi Afi
    { quote: 'The Superfly legacy continues!', context: 'Jimmy Snuka protégé', year: '1986', iconic: false },
  ],
  1159: [ // Cousin Luke
    { quote: 'Yee-haw! The Hillbillies are here!', context: 'Hillbilly Jim\'s cousin gimmick', year: '1985', iconic: false },
  ],
  1160: [ // Uncle Elmer
    { quote: 'I may be big, but I can move!', context: 'Hillbilly family member', year: '1985', iconic: false },
  ],
  1162: [ // Moondog Rex
    { quote: 'The Moondogs don\'t follow rules — we follow instinct!', context: 'Wild man tag team persona', year: '1981', iconic: false },
  ],
  1163: [ // Moondog Spot
    { quote: 'Grrrr!', context: 'Primal Moondog persona', year: '1981', iconic: false },
  ],
  1164: [ // Pat Tanaka
    { quote: 'Orient Express is first class — you\'re coach!', context: 'Orient Express tag team', year: '1990', iconic: false },
  ],
  1165: [ // Johnny Valiant
    { quote: 'Luscious Johnny V always has a plan!', context: 'Manager and former tag champion', year: '1984', iconic: false },
  ],
  1166: [ // Jimmy Valiant
    { quote: 'Boogie Woogie Man is here to party!', context: 'Eccentric fan-favorite persona', year: '1979', iconic: true },
  ],
  1167: [ // John Studd
    { quote: 'I\'m the true giant of professional wrestling — nobody can slam me!', context: 'Body slam challenge gimmick', year: '1984', iconic: true },
  ],
  1168: [ // David Sammartino
    { quote: 'I carry the Sammartino name with pride!', context: 'Bruno\'s son following in his footsteps', year: '1985', iconic: false },
  ],
  1169: [ // Lord Alfred Hayes
    { quote: 'What a magnificent specimen of athletic ability!', context: 'Signature British commentary style', year: '1985', iconic: true },
  ],
  1171: [ // Pete Rose
    { quote: 'I got more hits than anyone in this city!', context: 'WrestleMania celebrity appearances', year: '1998', iconic: true },
  ],
  1172: [ // Terry Taylor
    { quote: 'The Red Rooster crows at dawn!', context: 'Infamous Red Rooster gimmick', year: '1989', iconic: true },
  ],
  1173: [ // Killer Khan
    { quote: 'The Mongolian Giant destroys all!', context: 'Foreign monster heel', year: '1981', iconic: false },
  ],
  1175: [ // Salvatore Bellomo
    { quote: 'The Italian stallion of the WWF!', context: 'Fan-favorite underdog', year: '1984', iconic: false },
  ],
  1176: [ // Jose Luis Rivera
    { quote: 'Puerto Rico represents!', context: 'Undercard babyface competitor', year: '1983', iconic: false },
  ],
  1177: [ // Rick McGraw
    { quote: 'Quick Rick never slows down!', context: 'High-energy undercard babyface', year: '1982', iconic: false },
  ],
  1178: [ // Antonino Rocca
    { quote: 'I bring the excitement of Argentina to Madison Square Garden!', context: 'Pioneer of high-flying wrestling', year: '1960', iconic: true },
  ],
  1179: [ // Giant Baba
    { quote: 'All Japan is the home of pure wrestling!', context: 'AJPW founder and legend', year: '1975', iconic: true },
  ],
  1180: [ // Tatsumi Fujinami
    { quote: 'Dragon! Dragon!', context: 'The Dragon of New Japan', year: '1984', iconic: true },
  ],
  1181: [ // Crusher Blackwell
    { quote: 'Four hundred pounds is landing on you — there\'s no escape!', context: 'Super heavyweight crusher', year: '1983', iconic: false },
  ],
  1182: [ // Larry Hennig
    { quote: 'The Hennig name means toughness!', context: 'AWA tag legend, father of Mr. Perfect', year: '1970', iconic: false },
  ],
  1183: [ // Buddy Rose
    { quote: 'Playboy Buddy Rose — the prettiest man in wrestling!', context: 'Vain heel persona', year: '1982', iconic: false },
  ],
  1184: [ // Tony Altimore
    { quote: 'The Italian kid from New York is tougher than you think!', context: 'WWWF-era competitor', year: '1972', iconic: false },
  ],
  1186: [ // Billy White Wolf
    { quote: 'The spirit of the warrior guides me!', context: 'Native American gimmick', year: '1977', iconic: false },
  ],
  1187: [ // Rene Goulet
    { quote: 'The claw will squeeze the life out of you!', context: 'Iron claw specialist', year: '1975', iconic: false },
  ],
  1188: [ // Karl Gotch
    { quote: 'Real wrestling — not this sports entertainment!', context: 'God of Wrestling technical purist', year: '1970', iconic: true },
  ],
  1189: [ // The Mongols
    { quote: 'We destroy! We conquer!', context: 'Wild Mongol warriors tag team', year: '1970', iconic: false },
  ],
  1190: [ // Moondog King
    { quote: 'The Moondogs answer to no one!', context: 'Original Moondog', year: '1981', iconic: false },
  ],
  1191: [ // Lou Thesz
    { quote: 'I\'ve held more world titles than most have had matches.', context: 'All-time NWA World Champion', year: '1955', iconic: true },
  ],
  1192: [ // The Goon
    { quote: 'I\'m serving two minutes for roughing!', context: 'Hockey player gimmick', year: '1996', iconic: true },
  ],
  1193: [ // TL Hopper
    { quote: 'Time to fix the plumbing!', context: 'Plumber gimmick', year: '1996', iconic: false },
  ],
  1194: [ // Salvatore Sincere
    { quote: 'Sincerely yours...', context: 'Sarcastic sincerity gimmick', year: '1996', iconic: false },
  ],
  1195: [ // Freddie Joe Floyd
    { quote: 'Tennessee\'s finest is ready to go!', context: 'Tracy Smothers repackaged', year: '1996', iconic: false },
  ],
  1196: [ // Ludvig Borga
    { quote: 'America is a sewer — Finland is paradise!', context: 'Anti-American Finnish strongman', year: '1993', iconic: true },
  ],
  1197: [ // Jonathan Coachman
    { quote: 'Coach has all the answers!', context: 'Arrogant announcer-turned-competitor', year: '2003', iconic: false },
  ],
  1198: [ // Tori
    { quote: 'I don\'t need anyone\'s protection!', context: 'DX-era persona', year: '1999', iconic: false },
  ],
  1200: [ // The Blue Meanie
    { quote: 'Da Blue Guy is in the house!', context: 'ECW comedy character', year: '1997', iconic: false },
  ],
  1201: [ // Kurrgan
    { quote: 'The Oddities just want to have fun!', context: 'Oddities faction member', year: '1998', iconic: false },
  ],
  1202: [ // Shawn Stasiak
    { quote: 'I\'m the next big thing in the WWF!', context: 'Meat gimmick era', year: '1999', iconic: false },
  ],
  1203: [ // Dr. Death Steve Williams
    { quote: 'I\'ll take on any man alive!', context: 'Oklahoma football toughness persona', year: '1998', iconic: true },
  ],
  1205: [ // Skip
    { quote: 'Get off the couch and get in shape!', context: 'Body Donnas fitness gimmick', year: '1995', iconic: false },
  ],
  1206: [ // Zip
    { quote: 'The Body Donnas are in peak condition!', context: 'Tag team with Skip', year: '1995', iconic: false },
  ],
  1211: [ // Headbanger Mosh
    { quote: 'Mosh pit rules — no rules at all!', context: 'Headbangers tag team persona', year: '1997', iconic: false },
  ],
  1212: [ // Headbanger Thrasher
    { quote: 'Let\'s thrash!', context: 'Headbangers tag team persona', year: '1997', iconic: false },
  ],
  1213: [ // Giant Silva
    { quote: 'You cannot escape the giant!', context: 'Oddities super-sized member', year: '1998', iconic: false },
  ],
  1214: [ // Pete Gas
    { quote: 'Mean Street Posse runs Greenwich!', context: 'Shane McMahon\'s entourage', year: '1999', iconic: false },
  ],
  1215: [ // Rodney
    { quote: 'Greenwich represent!', context: 'Mean Street Posse member', year: '1999', iconic: false },
  ],
  1216: [ // Joey Abs
    { quote: 'The Posse always has Shane\'s back!', context: 'Mean Street Posse member', year: '1999', iconic: false },
  ],
  1217: [ // Chainz
    { quote: 'The Disciples of Apocalypse ride for the Undertaker!', context: 'DOA biker faction', year: '1997', iconic: false },
  ],
  1218: [ // 8-Ball
    { quote: 'Don\'t mess with the DOA!', context: 'Disciples of Apocalypse member', year: '1997', iconic: false },
  ],
  1219: [ // Skull
    { quote: 'DOA rolls deep!', context: 'Disciples of Apocalypse member', year: '1997', iconic: false },
  ],
  1221: [ // Matt Morgan
    { quote: 'The Blueprint for success is standing right in front of you!', context: 'DNA of TNA persona', year: '2005', iconic: false },
  ],
  1222: [ // Rob Conway
    { quote: 'Just look at me — I\'m simply... Con-Way!', context: 'Narcissistic heel gimmick', year: '2005', iconic: false },
  ],
  1223: [ // Rico
    { quote: 'Fabulosity personified!', context: 'Flamboyant stylist gimmick', year: '2002', iconic: true },
  ],
  1224: [ // Marcus Cor Von
    { quote: 'The Alpha Male has arrived!', context: 'Pounce finisher era', year: '2007', iconic: false },
  ],
  1225: [ // Matt Striker
    { quote: 'Class is in session!', context: 'Teacher gimmick', year: '2005', iconic: true },
  ],
  1226: [ // Mike Knox
    { quote: 'Silence is violence.', context: 'Brooding powerhouse persona', year: '2008', iconic: false },
  ],
  1227: [ // Psicosis
    { quote: 'The mask of madness flies!', context: 'WCW cruiserweight luchador', year: '1996', iconic: false },
  ],
  1228: [ // Juventud Guerrera
    { quote: 'The Juice is loose!', context: 'Juvi Juice persona', year: '1997', iconic: true },
  ],
  1229: [ // Katie Lea Burchill
    { quote: 'My brother and I are closer than you\'d think.', context: 'Unsettling sibling duo gimmick', year: '2008', iconic: false },
  ],
  1230: [ // Danny Basham
    { quote: 'The Bashams always have each other\'s back!', context: 'Basham Brothers tag team', year: '2003', iconic: false },
  ],
  1231: [ // Doug Basham
    { quote: 'Twin power — double the punishment!', context: 'Basham Brothers switch tactics', year: '2003', iconic: false },
  ],
  1232: [ // Rodney Mack
    { quote: 'Five minutes — that\'s all I need for the White Boy Challenge!', context: 'Theodore Long\'s protégé', year: '2003', iconic: true },
  ],
  1234: [ // Jesse (wrestler)
    { quote: 'Jesse and Festus are ready for action!', context: 'Tag team with Festus', year: '2008', iconic: false },
  ],
  1235: [ // Jimmy Wang Yang
    { quote: 'Redneck kung fu coming at ya!', context: 'Asian redneck gimmick', year: '2006', iconic: true },
  ],
  1236: [ // Shannon Moore
    { quote: 'I\'m a Moore-on and proud of it!', context: 'MF\'er (Mattitude Follower) persona', year: '2003', iconic: false },
  ],
  1238: [ // Vito
    { quote: 'The dress is just comfortable — you got a problem with that?', context: 'Dress-wearing tough guy gimmick', year: '2006', iconic: true },
  ],
  1239: [ // David Otunga
    { quote: 'I object!', context: 'Lawyer-turned-wrestler gimmick', year: '2010', iconic: true },
  ],
  1240: [ // Michael Tarver
    { quote: 'The first man to knock out John Cena!', context: 'Nexus member claim to fame', year: '2010', iconic: false },
  ],
  1241: [ // Justin Gabriel
    { quote: 'The 450 splash — you can\'t teach that kind of hang time!', context: 'Nexus high-flyer', year: '2010', iconic: false },
  ],
  1242: [ // Alex Riley
    { quote: 'Say it to my face!', context: 'Breakup with The Miz', year: '2011', iconic: true },
  ],
  1243: [ // Kaval
    { quote: 'The warrior\'s way has no shortcuts!', context: 'NXT Season 2 winner', year: '2010', iconic: false },
  ],
  1245: [ // Nathan Jones
    { quote: 'The Colossus of Boggo Road is unleashed!', context: 'Australian prison background gimmick', year: '2003', iconic: false },
  ],
  1246: [ // Sean O'Haire
    { quote: 'I\'m not telling you anything you don\'t already know.', context: 'Devil\'s Advocate vignettes', year: '2003', iconic: true },
  ],
  1247: [ // Armando Estrada
    { quote: 'Say hello to Armando... Alejandro... Estrrrrrada!', context: 'Rolling-R introduction catchphrase', year: '2006', iconic: true },
  ],
  1248: [ // Sylvester Terkay
    { quote: 'The MMA machine has entered the building.', context: 'Shoot-fighter gimmick', year: '2006', iconic: false },
  ],
  1251: [ // Percy Watson
    { quote: 'Oh yeah! Showtime!', context: 'NXT Season 2 competitor', year: '2010', iconic: false },
  ],
  1252: [ // Lucky Cannon
    { quote: 'Luck has nothing to do with it — it\'s all skill!', context: 'NXT competitor', year: '2011', iconic: false },
  ],
  1253: [ // Byron Saxton
    { quote: 'Let me tell you about this match!', context: 'Commentator persona', year: '2015', iconic: false },
  ],
  1254: [ // Mason Ryan
    { quote: 'The Welsh Warrior speaks with his fists!', context: 'New Nexus powerhouse', year: '2011', iconic: false },
  ],
  1255: [ // Tyler Reks
    { quote: 'The dreadlocked wrecking ball is here!', context: 'Burning Hammer powerhouse', year: '2010', iconic: false },
  ],
  1257: [ // Hunico
    { quote: 'The barrio doesn\'t play nice!', context: 'Sin Cara Negro heel persona', year: '2012', iconic: false },
  ],
  1258: [ // Scotty Goldman
    { quote: 'The Goldman standard of wrestling!', context: 'Colt Cabana repackaged', year: '2008', iconic: false },
  ],
  1259: [ // Trent Barreta
    { quote: 'Dudebuster is ready to bust some dudes!', context: 'Dudebusters tag team', year: '2010', iconic: false },
  ],
  1260: [ // Caylen Croft
    { quote: 'The Dudebusters are the future of tag team wrestling!', context: 'Tag team with Trent Barreta', year: '2010', iconic: false },
  ],
  1261: [ // Manu
    { quote: 'The Samoan bloodline continues through me!', context: 'Legacy faction member, Afa\'s son', year: '2008', iconic: false },
  ],
  1262: [ // Sim Snuka
    { quote: 'The Snuka name means fearless!', context: 'Jimmy Snuka\'s son', year: '2008', iconic: false },
  ],
  1263: [ // Richie Steamboat
    { quote: 'The dragon legacy lives on!', context: 'Ricky Steamboat\'s son in FCW/NXT', year: '2012', iconic: false },
  ],
  1264: [ // Rosa Mendes
    { quote: 'Besos! Besos!', context: 'Kisses catchphrase', year: '2010', iconic: false },
  ],
  1265: [ // TJP
    { quote: 'I\'m TJP — I\'m a gamer, a fighter, and a champion!', context: 'First Cruiserweight Classic winner', year: '2016', iconic: true },
  ],
  1266: [ // Tony Nese
    { quote: 'The Premier Athlete has the best abs in the business!', context: 'Fitness-obsessed cruiserweight', year: '2017', iconic: false },
  ],
  1267: [ // Akira Tozawa
    { quote: 'Ah! Ah! Ah!', context: 'Signature vocal battle cries', year: '2017', iconic: true },
  ],
  1268: [ // Jack Gallagher
    { quote: 'A gentleman always carries his umbrella!', context: 'British gentleman gimmick', year: '2017', iconic: true },
  ],
  1269: [ // Ariya Daivari
    { quote: 'I put the Persian in Persian pride!', context: 'Heel cruiserweight persona', year: '2017', iconic: false },
  ],
  1270: [ // Rich Swann
    { quote: 'Can\'t hold me down — I\'m dancing to the top!', context: 'Dancing babyface cruiserweight', year: '2016', iconic: false },
  ],
  1271: [ // Bobby Fish
    { quote: 'The Undisputed ERA is the gold standard!', context: 'Undisputed ERA faction member', year: '2017', iconic: false },
  ],
  1272: [ // KUSHIDA
    { quote: 'Back to the Future!', context: 'Time-traveler gimmick and catchphrase', year: '2019', iconic: true },
  ],
  1273: [ // Pat McAfee
    { quote: 'For the brand!', context: 'Signature catchphrase from NFL and NXT', year: '2020', iconic: true },
  ],
  1274: [ // Robert Stone
    { quote: 'Welcome to the Robert Stone Brand!', context: 'Sleazy manager persona', year: '2020', iconic: true },
  ],
  1275: [ // Enzo Amore
    { quote: 'My name is Enzo Amore, and I am a certified G and a bonafide stud!', context: 'Opening promo catchphrase', year: '2016', iconic: true },
    { quote: 'And you can\'t teach that!', context: 'Tag team intro with Big Cass', year: '2016', iconic: true },
  ],
  1276: [ // Big Cass
    { quote: 'And this right here — this is Big Cass, and he\'s seven feet tall!', context: 'Tag team intro with Enzo', year: '2016', iconic: true },
    { quote: 'S-A-W-F-T... SAWFT!', context: 'Signature spelling taunt', year: '2016', iconic: true },
  ],
  1277: [ // Von Wagner
    { quote: 'I don\'t need friends — I need competition!', context: 'NXT powerhouse loner', year: '2021', iconic: false },
  ],
  1281: [ // Sanga
    { quote: 'The giant from India rises!', context: 'NXT gentle giant persona', year: '2022', iconic: false },
  ],
  1282: [ // Ikemen Jiro
    { quote: 'Ikemen style — jacket ON!', context: 'Jacket-wearing flamboyant fighter', year: '2021', iconic: false },
  ],
  1283: [ // Boa
    { quote: 'The snake strikes without warning!', context: 'Mysterious Chinese warrior persona', year: '2020', iconic: false },
  ],
  1284: [ // Xyon Quinn
    { quote: 'The Samoan Enigma is here!', context: 'NXT powerhouse debut', year: '2021', iconic: false },
  ],
  1285: [ // Edris Enofe
    { quote: 'Young and hungry — that\'s us!', context: 'Tag team with Malik Blade', year: '2022', iconic: false },
  ],
  1286: [ // Malik Blade
    { quote: 'Blade and Enofe — the future of tag team wrestling!', context: 'NXT tag competitor', year: '2022', iconic: false },
  ],
  1287: [ // Odyssey Jones
    { quote: 'The big man can move!', context: 'Athletic big man persona', year: '2022', iconic: false },
  ],
  1288: [ // Dante Chen
    { quote: 'Singapore\'s finest is in NXT!', context: 'Singaporean competitor', year: '2022', iconic: false },
  ],
  1289: [ // Channing Lorenzo
    { quote: 'The D\'Angelo Family protects its own!', context: 'Tony D\'Angelo\'s enforcer', year: '2023', iconic: false },
  ],
  1290: [ // Luca Crusifino
    { quote: 'La famiglia always comes first!', context: 'D\'Angelo Family member', year: '2022', iconic: false },
  ],
  1291: [ // Adrianna Reese
    { quote: 'NXT women\'s division isn\'t ready for me!', context: 'NXT developmental competitor', year: '2023', iconic: false },
  ],
  1292: [ // Brooks Jensen
    { quote: 'Good old-fashioned country toughness!', context: 'Tag team with Josh Briggs', year: '2022', iconic: false },
  ],
  1293: [ // Josh Briggs
    { quote: 'Country strong — that\'s what we are!', context: 'Tag team with Brooks Jensen', year: '2022', iconic: false },
  ],
  1295: [ // Jagger Reid
    { quote: 'The Dyad serves the Schism!', context: 'Schism faction member', year: '2022', iconic: false },
  ],
  1296: [ // Rip Fowler
    { quote: 'We are the Dyad — we are one!', context: 'Schism faction member', year: '2022', iconic: false },
  ],
  1297: [ // Joe Gacy
    { quote: 'The Schism will open your eyes!', context: 'Cult leader gimmick', year: '2022', iconic: false },
  ],
  1299: [ // Brinley Reece
    { quote: 'Positive vibes only!', context: 'NXT developmental competitor', year: '2023', iconic: false },
  ],
  1300: [ // Wren Sinclair
    { quote: 'The Chase U spirit lives in me!', context: 'Chase University member', year: '2023', iconic: false },
  ],
  1301: [ // Tavion Heights
    { quote: 'Olympic-level wrestling — in NXT!', context: 'Amateur wrestling background', year: '2023', iconic: false },
  ],
  1302: [ // Tyriek Igwe
    { quote: 'Igwe and Dupont — double trouble!', context: 'NXT tag team competitor', year: '2023', iconic: false },
  ],
  1303: [ // Tyson Dupont
    { quote: 'Power and speed — you can\'t stop both!', context: 'NXT tag team competitor', year: '2023', iconic: false },
  ],
  1304: [ // Shawn Spears
    { quote: 'The chair is mightier than the sword!', context: 'Steel chair gimmick in AEW/NXT return', year: '2019', iconic: false },
    { quote: 'I am the perfect ten — always have been!', context: 'Tye Dillinger era callback', year: '2024', iconic: false },
  ],
  1309: [ // Joaquin Wilde
    { quote: 'Legado del Fantasma runs this!', context: 'Santos Escobar\'s faction member', year: '2020', iconic: false },
  ],
  1310: [ // Cruz Del Toro
    { quote: 'Legado is unstoppable!', context: 'Legado del Fantasma member', year: '2022', iconic: false },
  ],
  1311: [ // Scrypts
    { quote: 'The code has been written!', context: 'Mysterious hacker gimmick', year: '2022', iconic: false },
  ],
  1312: [ // Guru Raaj
    { quote: 'Enlightenment through combat!', context: 'Spiritual warrior gimmick', year: '2022', iconic: false },
  ],
  1314: [ // Valentina Feroz
    { quote: 'Brazilian jiu-jitsu meets NXT!', context: 'MMA-influenced competitor', year: '2022', iconic: false },
  ],
  1315: [ // Yulisa Leon
    { quote: 'Latina fire burns bright!', context: 'NXT tag competitor', year: '2022', iconic: false },
  ],
  1317: [ // Donovan Dijak
    { quote: 'Feast your eyes!', context: 'Signature catchphrase and finisher name', year: '2019', iconic: true },
  ],
  1318: [ // Mace
    { quote: 'Chaos is a ladder — and I\'m climbing!', context: 'RETRIBUTION and post-faction persona', year: '2020', iconic: false },
  ],
  1319: [ // Slapjack
    { quote: 'RETRIBUTION will burn it all down!', context: 'RETRIBUTION faction member', year: '2020', iconic: false },
  ],
  1322: [ // Deuce
    { quote: 'Deuce \'n Domino — the 1950s are back, baby!', context: 'Greaser tag team gimmick', year: '2007', iconic: false },
  ],
  1323: [ // Domino
    { quote: 'Grease lightning in the ring!', context: 'Greaser tag team member', year: '2007', iconic: false },
  ],
  1324: [ // Reno
    { quote: 'Roll the dice — and lose!', context: 'WCW heel persona', year: '2000', iconic: false },
  ],
  1336: [ // B-Fab
    { quote: 'Hit Row is always on!', context: 'Hit Row faction member and rapper', year: '2021', iconic: false },
  ],
  1337: [ // Top Dolla
    { quote: 'Hit Row — we got the bars and the power!', context: 'Hit Row faction powerhouse', year: '2021', iconic: false },
  ],
  1338: [ // Ashante Adonis
    { quote: 'Hit Row represents the culture!', context: 'Hit Row faction member', year: '2021', iconic: false },
  ],
  1342: [ // Damian Demento
    { quote: 'The voices in my head told me to destroy you!', context: 'Demented heel gimmick', year: '1993', iconic: false },
  ],
  1343: [ // Mr. T
    { quote: 'I pity the fool who steps in the ring with Mr. T!', context: 'WrestleMania I celebrity main event', year: '1985', iconic: true },
  ],
  1345: [ // Bad Bunny
    { quote: 'Yo soy campeón!', context: 'WrestleMania 37 and Royal Rumble appearances', year: '2021', iconic: true },
  ],
  1346: [ // Lawrence Taylor
    { quote: 'I came to WrestleMania to prove I\'m the toughest in any arena!', context: 'WrestleMania XI main event vs. Bam Bam Bigelow', year: '1995', iconic: true },
  ],
  1347: [ // Floyd Mayweather
    { quote: 'I\'m undefeated — in boxing and in WWE!', context: 'WrestleMania XXIV vs. Big Show', year: '2008', iconic: false },
  ],
  1348: [ // Tyson Fury
    { quote: 'The Gypsy King has entered the WWE ring!', context: 'Crown Jewel match vs. Braun Strowman', year: '2019', iconic: false },
  ],
  1349: [ // Cain Velasquez
    { quote: 'I knocked out Brock Lesnar before — I\'ll do it again!', context: 'Crown Jewel feud with Brock', year: '2019', iconic: false },
  ],
  1350: [ // Drew Carey
    { quote: 'I didn\'t sign up for this!', context: 'Royal Rumble comedy appearance', year: '2001', iconic: true },
  ],
  1351: [ // No Way Jose
    { quote: 'The conga line is coming through!', context: 'Dancing conga line entrance', year: '2018', iconic: true },
  ],
  1352: [ // Kassius Ohno
    { quote: 'The knockout artist is back in NXT!', context: 'Rolling elbow knockout specialist', year: '2017', iconic: false },
  ],
  1353: [ // Mordecai
    { quote: 'I have come to cleanse the sinners!', context: 'Religious zealot gimmick', year: '2004', iconic: false },
  ],
  1356: [ // Jimmy Uso
    { quote: 'Ucey! Ucey!', context: 'We the Ones / Bloodline era', year: '2022', iconic: true },
    { quote: 'We the ones!', context: 'Bloodline catchphrase', year: '2022', iconic: true },
  ],
  1357: [ // Xavier Woods
    { quote: 'New Day rocks! New Day rocks!', context: 'New Day rally cry', year: '2015', iconic: true },
    { quote: 'UUUDD — Up Up Down Down!', context: 'Gaming channel persona', year: '2015', iconic: true },
  ],
  1358: [ // Alex Shelley
    { quote: 'The Motor City Machine Guns never miss their target!', context: 'MCMG tag team with Chris Sabin', year: '2006', iconic: false },
  ],
  1359: [ // Chris Sabin
    { quote: 'Hail Sabin!', context: 'TNA X-Division legend', year: '2005', iconic: false },
  ],
  1360: [ // Nick Aldis
    { quote: 'I am the National Treasure!', context: 'NWA Worlds Heavyweight Champion persona', year: '2018', iconic: true },
  ],
  1362: [ // El Torito
    { quote: 'The little bull charges with big heart!', context: 'Los Matadores mascot', year: '2013', iconic: false },
  ],
  1363: [ // Shanky
    { quote: 'The giant from India dances!', context: 'Comedy dancing big man', year: '2022', iconic: false },
  ],
  1364: [ // Reggie
    { quote: 'You can\'t catch what you can\'t see!', context: 'Acrobatic 24/7 Champion', year: '2021', iconic: false },
  ],
  1365: [ // Great Muta
    { quote: 'The green mist blinds the soul!', context: 'Legendary mist-spraying persona', year: '1989', iconic: true },
  ],
  1366: [ // Jushin Thunder Liger
    { quote: 'Liger!', context: 'Iconic masked junior heavyweight legend', year: '1989', iconic: true },
  ],
  1367: [ // Steve Corino
    { quote: 'The King of Old School!', context: 'ECW persona', year: '2000', iconic: false },
  ],
  1368: [ // CW Anderson
    { quote: 'Anderson spinebuster — it runs in the family!', context: 'ECW technician', year: '2000', iconic: false },
  ],
  1369: [ // Aiden English
    { quote: 'Allow me to sing the song of our arrival!', context: 'Operatic entrance with Rusev', year: '2018', iconic: true },
  ],
  1370: [ // Simon Gotch
    { quote: 'The Vaudevillains are a throwback to a better era!', context: 'Old-timey tag team', year: '2016', iconic: false },
  ],
  1371: [ // Jordan Devlin
    { quote: 'The Irish Ace tops everyone!', context: 'NXT Cruiserweight Champion', year: '2020', iconic: false },
  ],
  1372: [ // T-BAR
    { quote: 'RETRIBUTION rises!', context: 'RETRIBUTION faction persona', year: '2020', iconic: false },
  ],
  1373: [ // Snooki
    { quote: 'Jersey Shore meets WrestleMania!', context: 'WrestleMania 27 celebrity tag', year: '2011', iconic: false },
  ],
  1374: [ // Johnny Knoxville
    { quote: 'Welcome to Jackass... WrestleMania edition!', context: 'WrestleMania 38 vs. Sami Zayn', year: '2022', iconic: true },
  ],
  1375: [ // Rob Gronkowski
    { quote: 'Gronk spike in the WWE!', context: 'WrestleMania 36 24/7 Champion', year: '2020', iconic: false },
  ],
  1376: [ // Shane Thorne
    { quote: 'The TMDK legacy continues!', context: 'Tag team specialist from Australia', year: '2018', iconic: false },
  ],
  1377: [ // Nick Miller
    { quote: 'The Mighty are here!', context: 'TMDK/The Mighty tag team', year: '2018', iconic: false },
  ],
  1378: [ // Arturo Ruas
    { quote: 'Submission is inevitable!', context: 'MMA-style NXT competitor', year: '2019', iconic: false },
  ],
  1379: [ // Bushwhacker Luke
    { quote: 'Bushwhacking time — here we come!', context: 'Arm-swinging fan-favorite entrance', year: '1989', iconic: true },
  ],
  1380: [ // Bushwhacker Butch
    { quote: 'We\'re gonna lick \'em!', context: 'Comedic Bushwhackers antics', year: '1989', iconic: true },
  ],
  1381: [ // Hawk
    { quote: 'Ohhhh, what a rush!', context: 'Road Warriors/Legion of Doom signature', year: '1990', iconic: true },
  ],
  1382: [ // Animal
    { quote: 'Tell \'em, Hawk!', context: 'LOD tag team catchphrase lead-in', year: '1990', iconic: true },
  ],
  1383: [ // Joey Mercury
    { quote: 'MNM — Monday Night Nitro... wait, Monday Night!', context: 'MNM tag team with Nitro and Melina', year: '2005', iconic: false },
  ],
  1384: [ // Epico Colon
    { quote: 'Puerto Rico — where champions are born!', context: 'Primo & Epico tag team', year: '2012', iconic: false },
  ],
  1385: [ // Ax
    { quote: 'Demolition! Here comes the ax, here comes the smasher!', context: 'Demolition entrance theme lyric', year: '1988', iconic: true },
  ],
  1387: [ // Mo
    { quote: 'Men on a Mission — enough said!', context: 'MOM tag team with Mabel', year: '1993', iconic: false },
  ],
  1388: [ // Bull Buchanan
    { quote: 'The bull is loose!', context: 'Right to Censor enforcer', year: '2000', iconic: false },
  ],
  1391: [ // Oro Mensah
    { quote: 'Gold standard — that\'s what Oro means!', context: 'NXT competitor', year: '2023', iconic: false },
  ],
  1392: [ // Jakara Jackson
    { quote: 'We run NXT women\'s tag division!', context: 'NXT women\'s competitor', year: '2023', iconic: false },
  ],
  1393: [ // Kiana James
    { quote: 'It\'s not personal — it\'s strictly business!', context: 'Corporate businesswoman gimmick', year: '2022', iconic: false },
  ],
  1395: [ // Danny Davis
    { quote: 'The referee always wins in the end!', context: 'Crooked referee turned wrestler', year: '1987', iconic: true },
  ],
  1396: [ // Veer Mahaan
    { quote: 'Veer is coming!', context: 'Endless vignette promos before Raw debut', year: '2022', iconic: true },
  ],
  1397: [ // Joe Hendry
    { quote: 'I believe in Joe Hendry!', context: 'Musical entrance and crowd catchphrase', year: '2024', iconic: true },
    { quote: 'Say his name and he appears!', context: 'Viral TNA/NXT theme song', year: '2024', iconic: true },
  ],
  1398: [ // Je'Von Evans
    { quote: 'The youngest and the flyest!', context: 'NXT young high-flyer', year: '2024', iconic: false },
  ],
  1399: [ // Arianna Grace
    { quote: 'Grace, elegance, and perfection!', context: 'Beauty pageant winner gimmick', year: '2023', iconic: false },
  ],
  1400: [ // Izzi Dame
    { quote: 'Dame by name, dame by nature!', context: 'NXT developmental powerhouse', year: '2023', iconic: false },
  ],
  1401: [ // Outback Jack
    { quote: 'G\'day mate — the Outback is here!', context: 'Australian bushman gimmick', year: '1987', iconic: false },
  ],
  1402: [ // Jaida Parker
    { quote: 'The baddest woman in NXT!', context: 'NXT breakout competitor', year: '2024', iconic: false },
  ],
  1403: [ // Stephanie Vaquer
    { quote: 'La Reina of NXT!', context: 'Chilean wrestling star', year: '2024', iconic: false },
  ],
  1404: [ // Zaria
    { quote: 'No one is safe!', context: 'NXT powerhouse debut', year: '2024', iconic: false },
  ],
  1405: [ // Rick Boogs
    { quote: 'Let me shred for you!', context: 'Guitar-playing entrance with Nakamura', year: '2021', iconic: true },
  ],
  1406: [ // Dan Spivey
    { quote: 'Waylon Mercy says... have a nice day.', context: 'Waylon Mercy persona inspiration for Bray Wyatt', year: '1995', iconic: true },
  ],
  1407: [ // David Flair
    { quote: 'I\'m Ric Flair\'s son — that\'s all you need to know!', context: 'WCW legacy performer', year: '1999', iconic: false },
  ],
  1408: [ // Chris Nowinski
    { quote: 'I went to Harvard — I\'m smarter than all of you!', context: 'Harvard elitist gimmick', year: '2002', iconic: true },
  ],
  1409: [ // Daniel Puder
    { quote: 'I almost broke Kurt Angle\'s arm on live TV!', context: 'Tough Enough shoot incident', year: '2004', iconic: true },
  ],
  1410: [ // Matt Cappotelli
    { quote: 'Tough Enough made me — and I\'m just getting started!', context: 'Tough Enough winner', year: '2004', iconic: false },
  ],
  1412: [ // Mikey (Spirit Squad)
    { quote: 'Let\'s go Spirit Squad! Fired up!', context: 'Spirit Squad male cheerleader gimmick', year: '2006', iconic: false },
  ],
  1414: [ // Riley Osborne
    { quote: 'Chase U forever!', context: 'Chase University high-flyer', year: '2023', iconic: false },
  ],
  1415: [ // Jimmy Del Ray
    { quote: 'The Heavenly Bodies are divine!', context: 'Heavenly Bodies tag team', year: '1993', iconic: false },
  ],
  1416: [ // Ricky Ortiz
    { quote: 'Rally time!', context: 'Rally towel gimmick', year: '2008', iconic: false },
  ],
  1417: [ // DJ Gabriel
    { quote: 'Let\'s dance!', context: 'Dancing DJ gimmick', year: '2008', iconic: false },
  ],
  1418: [ // Karl Malone
    { quote: 'The Mailman delivers — even in the ring!', context: 'WCW Bash at the Beach celebrity match', year: '1998', iconic: true },
  ],
  1419: [ // Dennis Rodman
    { quote: 'The Worm is in WCW!', context: 'WCW celebrity tag matches with Hogan', year: '1997', iconic: false },
  ],
  1420: [ // Kevin Federline
    { quote: 'I pinned John Cena — that\'s all that matters!', context: 'Raw celebrity angle', year: '2007', iconic: false },
  ],
  1421: [ // Stephen Amell
    { quote: 'The Arrow has arrived in WWE!', context: 'SummerSlam celebrity match', year: '2015', iconic: false },
  ],
  1422: [ // Maria Menounos
    { quote: 'Celebrity or not — I can wrestle!', context: 'WrestleMania celebrity tag match', year: '2012', iconic: false },
  ],
  1423: [ // Pierre (Quebecers)
    { quote: 'The Quebecers are the best tag team in all of Canada!', context: 'WWF Tag Team Champions', year: '1993', iconic: false },
  ],
  1424: [ // Tiger Mask
    { quote: 'The mask is my spirit!', context: 'Revolutionary junior heavyweight legend', year: '1982', iconic: true },
  ],
  1425: [ // Ernest Miller
    { quote: 'Somebody call my mama!', context: 'The Cat\'s signature catchphrase', year: '1999', iconic: true },
  ],
  1426: [ // Glacier
    { quote: 'The Blood Runs Cold!', context: 'Mortal Kombat-inspired entrance and vignettes', year: '1996', iconic: true },
  ],
  1427: [ // Nash Carter
    { quote: 'MSK is NXT!', context: 'MSK tag team with Wes Lee', year: '2021', iconic: false },
  ],
  1428: [ // Deonna Purrazzo
    { quote: 'The Virtuosa bends and breaks!', context: 'Submission specialist persona', year: '2020', iconic: false },
  ],
  1429: [ // Zack Gibson
    { quote: 'Soon to be recognized — Liverpool\'s number one!', context: 'Grizzled Young Veterans tag team', year: '2019', iconic: true },
  ],
  1430: [ // James Drake
    { quote: 'GYV — the best tag team in NXT UK!', context: 'Grizzled Young Veterans', year: '2019', iconic: false },
  ],
  1431: [ // Nikita Koloff
    { quote: 'Russia — number one!', context: 'Russian Nightmare Cold War heel', year: '1985', iconic: true },
  ],
  1432: [ // Tank Ledger
    { quote: 'Tank is rolling through NXT!', context: 'NXT powerhouse competitor', year: '2024', iconic: false },
  ],
  1433: [ // Hank Walker
    { quote: 'Built different!', context: 'NXT tag competitor', year: '2023', iconic: false },
  ],
  1438: [ // Zilla Fatu
    { quote: 'The bloodline runs deep — and I\'m next!', context: 'Anoa\'i family legacy in NXT', year: '2025', iconic: false },
  ],
  1440: [ // Eddy Thorpe
    { quote: 'Feel the rhythm, feel the pain!', context: 'DJ-inspired NXT competitor', year: '2023', iconic: false },
  ],
  1441: [ // Dani Palmer
    { quote: 'NXT is my stage!', context: 'NXT developmental competitor', year: '2024', iconic: false },
  ],
  1442: [ // James Storm
    { quote: 'Sorry about your damn luck!', context: 'Beer Money signature catchphrase', year: '2008', iconic: true },
  ],
  1443: [ // Chris Harris
    { quote: 'America\'s Most Wanted is on the hunt!', context: 'AMW tag team with James Storm', year: '2004', iconic: false },
  ],
  1444: [ // Maxine
    { quote: 'I always get what I want!', context: 'NXT Season 3 competitor', year: '2010', iconic: false },
  ],
  1445: [ // Man Mountain Rock
    { quote: 'Guitar solo for the people!', context: 'Rock musician wrestler gimmick', year: '1995', iconic: false },
  ],
  1448: [ // Johnny Stamboli
    { quote: 'The FBI runs SmackDown!', context: 'Full Blooded Italians faction', year: '2003', iconic: false },
  ],
  1449: [ // Brian Adams
    { quote: 'KroniK doesn\'t ask — KroniK takes!', context: 'KroniK tag team', year: '2001', iconic: false },
  ],
  1450: [ // Bryan Clark
    { quote: 'Wrath is coming!', context: 'WCW Wrath persona / KroniK', year: '1999', iconic: false },
  ],
  1451: [ // Elix Skipper
    { quote: 'Prime Time! That\'s what I am!', context: 'WCW cruiserweight', year: '2001', iconic: false },
  ],
  1452: [ // Kwee Wee
    { quote: 'Don\'t make me angry — you wouldn\'t like me angry!', context: 'Flamboyant-to-rage dual personality', year: '2001', iconic: false },
  ],
  1453: [ // Dave Mastiff
    { quote: 'The Bomber is dropping!', context: 'NXT UK powerhouse', year: '2019', iconic: false },
  ],
  1454: [ // Eddie Dennis
    { quote: 'Everyone suffers!', context: 'NXT UK heel persona', year: '2019', iconic: false },
  ],
  1455: [ // Aoife Valkyrie
    { quote: 'The Valkyrie has risen!', context: 'NXT UK competitor', year: '2020', iconic: false },
  ],
  1456: [ // Kay Lee Ray
    { quote: 'I am the forever champion of NXT UK!', context: 'Longest-reigning NXT UK Women\'s Champion', year: '2019', iconic: true },
  ],
  1457: [ // Stevie Ray
    { quote: 'Harlem Heat is in the house, sucka!', context: 'Harlem Heat tag team catchphrase', year: '1995', iconic: true },
  ],
  1458: [ // Norman Smiley
    { quote: 'Do the Big Wiggle!', context: 'Signature screaming submission comedy', year: '1999', iconic: true },
  ],
  1459: [ // Konnan
    { quote: 'Orale! Arriba la raza!', context: 'Latino World Order / nWo Wolfpac', year: '1997', iconic: true },
    { quote: 'Bow wow wow, yippie yo, yippie yay!', context: 'Signature entrance catchphrase', year: '1998', iconic: true },
  ],
  1460: [ // Disco Inferno
    { quote: 'Everybody dance now!', context: 'Disco dancing gimmick', year: '1995', iconic: true },
  ],
  1461: [ // Alex Wright
    { quote: 'Das Wunderkind dances his way to victory!', context: 'German dancing prodigy', year: '1995', iconic: false },
  ],
  1462: [ // La Parka
    { quote: 'The Chairman of WCW — and I have the chair to prove it!', context: 'Steel chair-wielding skeleton luchador', year: '1997', iconic: true },
  ],
  1463: [ // Vampiro
    { quote: 'I come from the darkness!', context: 'Gothic vampire wrestler', year: '1998', iconic: false },
  ],
  1464: [ // Mikey Whipwreck
    { quote: 'I don\'t know how I keep winning — but I do!', context: 'Unlikely ECW Champion underdog', year: '1995', iconic: true },
  ],
  1465: [ // Adrian Adonis
    { quote: 'Adorable Adrian is beautiful — and deadly!', context: 'Flamboyant heel transformation', year: '1986', iconic: true },
  ],
  1466: [ // Francine
    { quote: 'The Queen of Extreme gets what she wants!', context: 'ECW valet and manager', year: '1997', iconic: false },
  ],
  1467: [ // Zeb Colter
    { quote: 'We the People!', context: 'Anti-immigration faction with Jack Swagger', year: '2013', iconic: true },
  ],
  1469: [ // Wahoo McDaniel
    { quote: 'The Chief chops down everyone in his path!', context: 'Legendary NWA brawler', year: '1980', iconic: false },
  ],
  1470: [ // Dick Murdoch
    { quote: 'Captain Redneck does things his own way!', context: 'Brawling Texan heel', year: '1984', iconic: false },
  ],
  1471: [ // Terry Gordy
    { quote: 'The Freebirds are for life!', context: 'Fabulous Freebirds legendary member', year: '1982', iconic: true },
  ],
  1472: [ // Magnum T.A.
    { quote: 'The belly-to-belly suplex — nobody does it better!', context: 'NWA\'s top babyface before career-ending injury', year: '1985', iconic: true },
  ],
  1473: [ // Ole Anderson
    { quote: 'The Andersons don\'t have friends — we have family!', context: 'Original Four Horsemen founding member', year: '1985', iconic: true },
  ],
  1474: [ // Fritz Von Erich
    { quote: 'The Iron Claw spares no one!', context: 'Von Erich patriarch and Iron Claw', year: '1970', iconic: true },
  ],
  1475: [ // Kevin Von Erich
    { quote: 'The Von Erichs fight for the family!', context: 'Last surviving Von Erich brother from wrestling era', year: '1984', iconic: true },
  ],
  1476: [ // David Von Erich
    { quote: 'Texas wrestling royalty — that\'s the Von Erichs!', context: 'WCCW star before tragic passing', year: '1983', iconic: false },
  ],
  1477: [ // Bruiser Brody
    { quote: 'Brody doesn\'t wrestle — Brody destroys!', context: 'Legendary wild man brawler', year: '1983', iconic: true },
  ],
  1478: [ // Bobby Eaton
    { quote: 'Beautiful Bobby brings the style and the substance!', context: 'Midnight Express tag legend', year: '1986', iconic: false },
  ],
  1479: [ // Stan Lane
    { quote: 'Sweet Stan is smooth as silk!', context: 'Midnight Express member', year: '1987', iconic: false },
  ],
  1480: [ // Ricky Morton
    { quote: 'The Rock \'n\' Roll Express never dies!', context: 'Iconic face-in-peril tag legend', year: '1984', iconic: true },
  ],
  1481: [ // Robert Gibson
    { quote: 'Rock \'n\' Roll forever!', context: 'Rock \'n\' Roll Express hot tag specialist', year: '1984', iconic: false },
  ],
  1482: [ // Ray Stevens
    { quote: 'The Crippler doesn\'t just wrestle — I maim!', context: 'NWA/AWA legendary heel', year: '1972', iconic: false },
  ],
  1483: [ // Dick the Bruiser
    { quote: 'I\'ll bruise you so bad your own mother won\'t recognize you!', context: 'AWA hardcore brawler legend', year: '1965', iconic: true },
  ],
  1484: [ // The Crusher
    { quote: 'I\'m gonna crush ya!', context: 'AWA fan-favorite brawler', year: '1965', iconic: true },
  ],
  1485: [ // Brad Armstrong
    { quote: 'The Armstrong family tradition continues!', context: 'Second-generation wrestler', year: '1988', iconic: false },
  ],
  1486: [ // Tracy Smothers
    { quote: 'Tennessee\'s toughest is ready to fight!', context: 'Smoky Mountain and ECW veteran', year: '1990', iconic: false },
  ],
  1487: [ // Tommy Rich
    { quote: 'Wildfire burns bright!', context: 'Wildfire Tommy Rich NWA Champion', year: '1981', iconic: true },
  ],
  1488: [ // Dennis Condrey
    { quote: 'The original Midnight Express — accept no substitutes!', context: 'Original Midnight Express member', year: '1984', iconic: false },
  ],
  1489: [ // Buddy Roberts
    { quote: 'The Freebirds stick together — always!', context: 'Fabulous Freebirds member', year: '1982', iconic: false },
  ],
  1490: [ // Silver King
    { quote: 'La plata reigns supreme!', context: 'WCW luchador', year: '1997', iconic: false },
  ],
  1491: [ // Crowbar
    { quote: 'Hardcore is a way of life!', context: 'WCW hardcore competitor', year: '2000', iconic: false },
  ],
  1492: [ // Daffney
    { quote: 'The Scream Queen of WCW!', context: 'Gothic screaming valet/wrestler', year: '2000', iconic: true },
  ],
  1493: [ // J.J. Dillon
    { quote: 'The Four Horsemen answer to me!', context: 'Horsemen manager', year: '1986', iconic: true },
  ],
  1494: [ // Sakoda
    { quote: 'Tajiri-san\'s word is law!', context: 'Tag team henchman', year: '2004', iconic: false },
  ],
  1496: [ // Kevin Sullivan
    { quote: 'The Taskmaster commands — and they obey!', context: 'WCW Dungeon of Doom leader', year: '1995', iconic: true },
  ],
  1497: [ // Danny Hodge
    { quote: 'My grip crushes apples — imagine what it does to an opponent!', context: 'Legendary amateur and pro wrestler', year: '1960', iconic: true },
  ],
  1498: [ // Baron Von Raschke
    { quote: 'The clawwww!', context: 'Brain claw finishing hold', year: '1977', iconic: true },
  ],
  1499: [ // Jimmy Garvin
    { quote: 'Gorgeous Jimmy Garvin is simply gorgeous!', context: 'Freebirds associate', year: '1985', iconic: false },
  ],
  1500: [ // Bob Armstrong
    { quote: 'The Bullet is locked and loaded!', context: 'Southeastern territory legend', year: '1978', iconic: false },
  ],
  1501: [ // Axl Rotten
    { quote: 'ECW hardcore — it\'s in my blood!', context: 'ECW hardcore competitor', year: '1995', iconic: false },
  ],
  1502: [ // Skandor Akbar
    { quote: 'Devastation Incorporated will destroy you!', context: 'Legendary manager persona', year: '1980', iconic: true },
  ],
  1505: [ // Rikidozan
    { quote: 'The father of puroresu fights for Japan\'s honor!', context: 'Pioneer of Japanese professional wrestling', year: '1953', iconic: true },
  ],
  1506: [ // Tessa Blanchard
    { quote: 'I\'m not a women\'s wrestler — I\'m THE wrestler!', context: 'First female IMPACT World Champion', year: '2020', iconic: true },
  ],
  1507: [ // Scotty Riggs
    { quote: 'The American Males! American Males!', context: 'WCW tag team theme that lives forever', year: '1995', iconic: true },
  ],
  1508: [ // Public Enemy
    { quote: 'We\'re putting you through a table!', context: 'Table-crashing ECW/WCW tag team', year: '1994', iconic: true },
  ],
  1509: [ // 911
    { quote: '...', context: 'Didn\'t talk — just chokeslammed everyone. Paul Heyman spoke for him.', year: '1994', iconic: true },
  ],
  1511: [ // Tony Mamaluke
    { quote: 'The FBI is full-blooded Italian — capisce?', context: 'FBI tag team in ECW', year: '2000', iconic: false },
  ],
  1512: [ // Rocco Rock
    { quote: 'We\'re gonna put you through it!', context: 'Public Enemy table specialist', year: '1994', iconic: false },
  ],
  1513: [ // Johnny Grunge
    { quote: 'Public Enemy is in the house!', context: 'ECW/WCW brawler', year: '1994', iconic: false },
  ],
  1514: [ // Mike Sanders
    { quote: 'Above average — and that\'s being modest!', context: 'WCW Natural Born Thrillers leader', year: '2000', iconic: false },
  ],
  1515: [ // Lenny Lane
    { quote: 'Gorgeous Lenny is too pretty for this!', context: 'WCW cruiserweight', year: '1999', iconic: false },
  ],
  1516: [ // Lodi
    { quote: 'Read the signs!', context: 'WCW sign-carrying gimmick', year: '1998', iconic: true },
  ],
  1517: [ // Bunkhouse Buck
    { quote: 'The Stud Stable runs this territory!', context: 'WCW Stud Stable brawler', year: '1994', iconic: false },
  ],
  1519: [ // Mitsuharu Misawa
    { quote: 'The emerald green of All Japan shines brightest!', context: 'All Japan / NOAH legend', year: '1990', iconic: true },
  ],
  1520: [ // Kenta Kobashi
    { quote: 'Burning! Burning!', context: 'Burning Lariat / NOAH legend crowd chant', year: '1993', iconic: true },
  ],
  1521: [ // Toshiaki Kawada
    { quote: 'Dangerous kicks end careers!', context: 'All Japan Four Pillars — most dangerous striker', year: '1993', iconic: false },
  ],
  1522: [ // Jumbo Tsuruta
    { quote: 'The ace of All Japan bows to no one!', context: 'AJPW original ace', year: '1980', iconic: true },
  ],
  1523: [ // Genichiro Tenryu
    { quote: 'I fight with the spirit of a thousand warriors!', context: 'AJPW/SWS/WAR legend', year: '1985', iconic: false },
  ],
  1524: [ // Hayabusa
    { quote: 'The phoenix rises from the ashes!', context: 'FMW daredevil legend', year: '1996', iconic: true },
  ],
  1525: [ // El Hijo del Santo
    { quote: 'The silver mask carries the legacy of my father!', context: 'Lucha libre royalty', year: '1985', iconic: true },
  ],
  1526: [ // Negro Casas
    { quote: 'El maestro of lucha libre!', context: 'CMLL legendary technician', year: '1985', iconic: false },
  ],
  1527: [ // Blue Panther
    { quote: 'The panther hunts with precision!', context: 'CMLL technical legend', year: '1983', iconic: false },
  ],
  1528: [ // Sgt. Craig Pittman
    { quote: 'Code Red! Code Red!', context: 'Military sergeant gimmick in WCW', year: '1995', iconic: false },
  ],
  1529: [ // Ice Train
    { quote: 'All aboard the Ice Train express!', context: 'WCW powerhouse', year: '1995', iconic: false },
  ],
  1530: [ // Scott Norton
    { quote: 'Flash Norton hits harder than anyone in this business!', context: 'nWo Japan powerhouse', year: '1997', iconic: false },
  ],
  1531: [ // Villano III
    { quote: 'The Villano dynasty protects its legacy!', context: 'Mexican wrestling legend', year: '1985', iconic: false },
  ],
  1532: [ // Hector Guerrero
    { quote: 'The Guerrero family bleeds wrestling!', context: 'Gobbledy Gooker / Guerrero family member', year: '1990', iconic: false },
  ],
  1533: [ // Mando Guerrero
    { quote: 'Guerrero power runs in the blood!', context: 'Guerrero wrestling family', year: '1980', iconic: false },
  ],
  1534: [ // Chavo Guerrero Sr.
    { quote: 'The original Chavo paved the way!', context: 'Guerrero family patriarch wrestler', year: '1975', iconic: false },
  ],
  1535: [ // Mark Lewin
    { quote: 'The Maniac has no mercy!', context: 'Territory era main eventer', year: '1970', iconic: false },
  ],
  1536: [ // Dutch Savage
    { quote: 'Portland\'s toughest — bar none!', context: 'Pacific Northwest territory legend', year: '1970', iconic: false },
  ],
  1537: [ // Buzz Sawyer
    { quote: 'Mad Dog Sawyer bites!', context: 'NWA/WCW wild man', year: '1983', iconic: false },
  ],
  1539: [ // Stu Hart
    { quote: 'The Dungeon stretches everyone!', context: 'Hart Dungeon patriarch and trainer', year: '1960', iconic: true },
  ],
  1540: [ // Gorgeous George
    { quote: 'Get your filthy hands off me!', context: 'Original heel character — invented heel wrestling', year: '1948', iconic: true },
  ],
  1541: [ // Mad Dog Vachon
    { quote: 'Grrr! The Mad Dog bites!', context: 'Canadian wrestling legend', year: '1965', iconic: true },
  ],
  1542: [ // Bill Watts
    { quote: 'Cowboy Bill runs this territory — and you\'ll play by my rules!', context: 'Mid-South promoter and wrestler', year: '1975', iconic: true },
  ],
  1550: [ // Andy Kaufman
    { quote: 'I am the intergender wrestling champion of the world!', context: 'Infamous Memphis feud with Jerry Lawler', year: '1982', iconic: true },
  ],
  1552: [ // Jackie Gayda
    { quote: 'Don\'t underestimate what I can do!', context: 'Tough Enough Season 2 winner', year: '2002', iconic: false },
  ],
  1553: [ // Linda Miles
    { quote: 'Shaniqua dominates!', context: 'Tough Enough winner turned heel', year: '2003', iconic: false },
  ],
  1555: [ // Brad Maddox
    { quote: 'The Brad Maddox experience is here!', context: 'GM/performer heel persona', year: '2013', iconic: false },
  ],
  1556: [ // Taryn Terrell
    { quote: 'The hot mess is taking over!', context: 'TNA Knockouts Champion', year: '2015', iconic: false },
  ],
  1557: [ // Sarah Logan
    { quote: 'The Riott Squad comes for everyone!', context: 'Riott Squad faction member', year: '2017', iconic: false },
  ],
  1558: [ // Myles Borne
    { quote: 'Born to compete!', context: 'NXT developmental competitor', year: '2023', iconic: false },
  ],
  1559: [ // The Midnight Express
    { quote: 'Beautiful Bobby and Sweet Stan — the Express rolls on!', context: 'Legendary NWA tag team', year: '1986', iconic: true },
  ],
  1560: [ // Akira Taue
    { quote: 'The fourth pillar stands tall!', context: 'All Japan Four Pillars member', year: '1993', iconic: false },
  ],
  1561: [ // Frankie Williams
    { quote: 'The veteran always has one more fight!', context: 'WWWF-era enhancement talent', year: '1978', iconic: false },
  ],
  1562: [ // Jay Youngblood
    { quote: 'The warrior spirit never dies!', context: 'NWA tag legend with Ricky Steamboat', year: '1983', iconic: false },
  ],
  1564: [ // Dave Taylor
    { quote: 'British precision in every hold!', context: 'WCW/WWE technical wrestler', year: '1996', iconic: false },
  ],
  1565: [ // Reby Hardy
    { quote: 'The Hardy compound is sacred ground!', context: 'Broken Universe character', year: '2016', iconic: false },
  ],
  1567: [ // The Acclaimed
    { quote: 'Everyone loves the Acclaimed!', context: 'AEW breakout tag team catchphrase', year: '2022', iconic: true },
    { quote: 'Scissor me, Daddy Ass!', context: 'Viral catchphrase with Billy Gunn', year: '2022', iconic: true },
  ],
  1568: [ // Jesús
    { quote: 'The streets don\'t play!', context: 'Carlito\'s enforcer in debut angle', year: '2004', iconic: false },
  ],
  1571: [ // Jack Victory
    { quote: 'Victory is in my name!', context: 'ECW tag competitor', year: '1997', iconic: false },
  ],
  1572: [ // Vic Grimes
    { quote: 'Extreme doesn\'t begin to describe what I\'ll do!', context: 'ECW tag competitor', year: '2000', iconic: false },
  ],
  1573: [ // Mustafa Saed
    { quote: 'The Gangstas run ECW!', context: 'Gangstas tag team with New Jack', year: '1995', iconic: false },
  ],
  1574: [ // Kid Kash
    { quote: 'Money talks — and Kid Kash always cashes in!', context: 'ECW/WWE cruiserweight', year: '2000', iconic: false },
  ],
  1575: [ // MJF
    { quote: 'I\'m better than you — and you know it!', context: 'AEW signature heel catchphrase', year: '2020', iconic: true },
    { quote: 'The salt of the earth!', context: 'Self-proclaimed moniker', year: '2021', iconic: true },
  ],
  1576: [ // Britt Baker
    { quote: 'I\'m a role model — and your dentist!', context: 'AEW Women\'s Champion heel persona', year: '2021', iconic: true },
  ],
  1578: [ // Darby Allin
    { quote: 'Nothing\'s gonna stop me — I\'ve survived worse!', context: 'Daredevil skateboarder persona', year: '2020', iconic: false },
  ],
  1579: [ // Dos Caras
    { quote: 'The two faces of lucha libre!', context: 'Mexican legend, father of Alberto Del Rio', year: '1985', iconic: false },
  ],
  1580: [ // Jules Strongbow
    { quote: 'The war dance begins!', context: 'Native American gimmick tag team', year: '1978', iconic: false },
  ],
  1581: [ // Mike Kanellis
    { quote: 'The power of love makes me unstoppable!', context: 'Maria & Mike Kanellis love storyline', year: '2017', iconic: false },
  ],
  1583: [ // Katie Lea
    { quote: 'The British invasion starts now!', context: 'NXT competitor', year: '2008', iconic: false },
  ],
  1585: [ // Adriana Rizzo
    { quote: 'The family always comes first!', context: 'Tony D\'Angelo\'s associate', year: '2024', iconic: false },
  ],
  1586: [ // Bullet Club
    { quote: 'Bullet Club is for life! Too sweet!', context: 'Iconic stable\'s catchphrase', year: '2013', iconic: true },
  ],
  1587: [ // New Bloodline
    { quote: 'We the ones — the NEW ones!', context: 'Solo Sikoa\'s reformed Bloodline', year: '2024', iconic: false },
  ],
  1588: [ // Sha Samuels
    { quote: 'The East End butcher cuts you down!', context: 'NXT UK cockney butcher', year: '2021', iconic: false },
  ],
  1589: [ // Joseph Conners
    { quote: 'The Righteous are coming!', context: 'NXT UK competitor', year: '2019', iconic: false },
  ],
  1590: [ // Hangman Adam Page
    { quote: 'Cowboy shit!', context: 'AEW signature catchphrase', year: '2021', iconic: true },
  ],
  1591: [ // Emilia McKenzie
    { quote: 'NXT UK is my proving ground!', context: 'NXT UK competitor', year: '2022', iconic: false },
  ],
  1592: [ // The Funkettes
    { quote: 'Somebody call our mama — it\'s time to dance!', context: 'Brodus Clay\'s dancing valets', year: '2012', iconic: false },
  ],
  1593: [ // Kim Chee
    { quote: 'Kamala, attack!', context: 'Handler/manager for Kamala', year: '1986', iconic: false },
  ],
  1594: [ // Rey Fenix
    { quote: 'Zero miedo!', context: 'Lucha Brothers fearless catchphrase', year: '2018', iconic: true },
  ],
  1596: [ // Rosemary
    { quote: 'The Demon Assassin feeds on your fear!', context: 'Supernatural IMPACT character', year: '2016', iconic: false },
  ],
  1597: [ // Austin Aries
    { quote: 'The greatest man that ever lived!', context: 'Self-proclaimed moniker', year: '2012', iconic: true },
  ],
  1598: [ // Pat O'Connor
    { quote: 'New Zealand produces the toughest men in the world!', context: 'NWA World Champion', year: '1959', iconic: false },
  ],
  1599: [ // Scott Putski
    { quote: 'Polish Power lives on through the Putski family!', context: 'Ivan Putski\'s son', year: '1996', iconic: false },
  ],
  1600: [ // The Yukon Lumberjacks
    { quote: 'Timber!', context: 'Canadian lumberjack tag team', year: '1976', iconic: false },
  ],
  1602: [ // The Moondogs
    { quote: 'Awoooo!', context: 'Wild man tag team howl', year: '1981', iconic: true },
  ],
  1603: [ // Pierre Carl Ouellet
    { quote: 'The Quebecers are champions of Canada!', context: 'Tag team with Jacques Rougeau', year: '1993', iconic: false },
  ],
  1604: [ // The Young Stallions
    { quote: 'Youth and speed — you can\'t beat it!', context: 'Roma & Powers tag team', year: '1987', iconic: false },
  ],
  1605: [ // Greg Gagne
    { quote: 'The AWA legacy runs through my veins!', context: 'Verne Gagne\'s son', year: '1980', iconic: false },
  ],
  1606: [ // Butterbean
    { quote: 'Four-round knockout artist in any ring!', context: 'Brawl for All vs. Bart Gunn at WrestleMania', year: '1999', iconic: true },
  ],
  1607: [ // Wesley Blake
    { quote: 'The Forgotten Sons will be remembered!', context: 'NXT tag team competitor', year: '2019', iconic: false },
  ],
  1608: [ // Scorpio Sky
    { quote: 'SCU! SCU!', context: 'SoCal Uncensored faction catchphrase', year: '2019', iconic: true },
  ],
  1609: [ // Gene Kiniski
    { quote: 'Canada\'s Greatest Athlete dominates!', context: 'NWA World Champion', year: '1966', iconic: false },
  ],
  1610: [ // Wally Karbo
    { quote: 'The AWA machine runs smooth!', context: 'AWA promotional mastermind', year: '1960', iconic: false },
  ],
  1611: [ // Dory Funk Sr.
    { quote: 'The Funk ranch breeds champions!', context: 'Funk family patriarch', year: '1965', iconic: false },
  ],
  1612: [ // Miguel Perez
    { quote: 'Puerto Rican fire in every match!', context: 'WWWF-era pioneer', year: '1960', iconic: false },
  ],
  1613: [ // The Destroyer
    { quote: 'The masked marvel destroys all challengers!', context: 'Legendary masked wrestler in Japan and US', year: '1963', iconic: true },
  ],
  1614: [ // Louis Cerdan
    { quote: 'French technique conquers American brawling!', context: 'WWWF-era competitor', year: '1970', iconic: false },
  ],
  1616: [ // Mercedes Martinez
    { quote: 'Twenty years of dropping bodies!', context: 'Veteran destroyer in NXT', year: '2020', iconic: false },
  ],
  1618: [ // Eddie Gilbert
    { quote: 'Hot Stuff is the smartest man in wrestling!', context: 'Memphis/USWA legendary heel', year: '1985', iconic: true },
  ],
  1619: [ // Ian Rotten
    { quote: 'Welcome to IWA Mid-South — where it gets real!', context: 'King of the Death Match', year: '1996', iconic: false },
  ],
  1620: [ // Devastation Inc.
    { quote: 'Devastation is coming to your territory!', context: 'Skandor Akbar\'s stable', year: '1980', iconic: false },
  ],
  1621: [ // The Sharpe Brothers
    { quote: 'Canada\'s finest tag team!', context: 'Early WWWF tag team', year: '1960', iconic: false },
  ],
  1622: [ // The Stud Stable
    { quote: 'The Stable runs WCW!', context: 'Col. Robert Parker\'s faction', year: '1994', iconic: false },
  ],
  1623: [ // Toots Mondt
    { quote: 'I built this business from the ground up!', context: 'Wrestling promotion pioneer', year: '1950', iconic: false },
  ],
  1624: [ // Paul Vachon
    { quote: 'The Vachon family fears nothing!', context: 'Wrestling family patriarch', year: '1965', iconic: false },
  ],
  1625: [ // Ruby Riott
    { quote: 'The Riott Squad is coming for everyone!', context: 'Riott Squad leader', year: '2017', iconic: false },
  ],
  1626: [ // Serena Deeb
    { quote: 'I am the professor of professional wrestling!', context: 'NWA Women\'s Champion technical master', year: '2020', iconic: true },
  ],
  1627: [ // Erick Redbeard
    { quote: 'The Viking roams free!', context: 'Post-Wyatt Family solo persona', year: '2019', iconic: false },
  ],
  1628: [ // The Wyatt Sicks
    { quote: 'We\'re here... again.', context: 'Continuation of Bray Wyatt\'s legacy', year: '2024', iconic: true },
  ],
  11: [ // Ricky Steamboat
    { quote: 'I never needed to cheat. I never needed to take shortcuts. I just wrestled.', context: 'Hall of Fame speech', year: '2009', iconic: true },
  ],
  145: [ // Bobby Heenan
    { quote: 'Will you stop!', context: 'Signature commentary catchphrase', year: '1987', iconic: true },
    { quote: 'A friend in need is a pest.', context: 'Bobby "The Brain" Heenan one-liner', year: '1989', iconic: false },
    { quote: 'But whose side is he on?!', context: 'Calling Hogan\'s heel turn at Bash at the Beach on commentary', year: '1996', iconic: true },
  ],
  146: [ // Jim Cornette
    { quote: 'Thank you, fuck you, bye!', context: 'Signature sign-off', year: '1995', iconic: true },
    { quote: 'I wouldn\'t trust that man if he had his tongue notarized!', context: 'Cornette insult', year: '1997', iconic: false },
  ],
  231: [ // Jim Ross
    { quote: 'Bah gawd! As God as my witness, he is broken in half!', context: 'Calling Mankind\'s fall off Hell in a Cell', year: '1998', iconic: true },
    { quote: 'Stone Cold! Stone Cold! Stone Cold!', context: 'Signature excited call during Austin matches', year: '1998', iconic: true },
    { quote: 'Business is about to pick up!', context: 'Signature commentary phrase', year: '1999', iconic: true },
  ],
  346: [ // Gorilla Monsoon
    { quote: 'Will you be serious?!', context: 'To Bobby Heenan on commentary', year: '1988', iconic: true },
    { quote: 'It\'s a happening!', context: 'Signature excited call', year: '1987', iconic: false },
    { quote: 'That\'s a highly educated pair of feet!', context: 'Calling high-flying moves', year: '1989', iconic: true },
  ],
  129: [ // The Usos
    { quote: 'Ucey! Ucey!', context: 'Jimmy Uso\'s Bloodline era rallying cry', year: '2023', iconic: false },
    { quote: 'Day one ish!', context: 'Tag team entrance catchphrase', year: '2016', iconic: true },
    { quote: 'We the ones!', context: 'Bloodline era catchphrase', year: '2022', iconic: true },
  ],
  196: [ // Nexus
    { quote: 'You\'re either Nexus... or you\'re against us.', context: 'Wade Barrett faction catchphrase', year: '2010', iconic: true },
  ],
  345: [ // Ali
    { quote: 'I\'m the light in the darkness.', context: 'Signature catchphrase before heel turn', year: '2019', iconic: false },
    { quote: 'RETRIBUTION will not be stopped!', context: 'Retribution faction leader Mustafa Ali', year: '2020', iconic: false },
  ],
  137: [ // Aleister Black
    { quote: 'No man is ever truly good. No man is ever truly evil.', context: 'Dark philosophical promo style', year: '2018', iconic: false },
    { quote: 'I absolve you of all of your sins.', context: 'NXT promo', year: '2018', iconic: false },
  ],
  223: [ // Iyo Sky
    { quote: 'I am the genius of the sky!', context: 'Self-proclaimed title', year: '2023', iconic: false },
  ],
  302: [ // Mae Young
    { quote: 'I may be 80 years old, but I can still whip your ass!', context: 'Attitude Era appearances', year: '2000', iconic: true },
  ],
  925: [ // Sonya Deville
    { quote: 'I am the first openly gay WWE Superstar, and I am proud of who I am!', context: 'Pride Month promo', year: '2019', iconic: true },
  ],
  334: [ // Madcap Moss
    { quote: 'I got a joke for ya!', context: 'Comedy gimmick with Happy Corbin', year: '2021', iconic: false },
  ],
  853: [ // Otis
    { quote: 'Oh yeah! Tucky!', context: 'Heavy Machinery catchphrase', year: '2019', iconic: false },
    { quote: 'Dozer!', context: 'Signature bellow', year: '2020', iconic: false },
  ],
  858: [ // Penta El Zero Miedo
    { quote: 'Zero! Miedo!', context: 'Signature catchphrase — Zero Fear', year: '2023', iconic: true },
    { quote: 'Cero Miedo!', context: 'Spanish version of catchphrase', year: '2025', iconic: true },
  ],
  916: [ // Andre Chase
    { quote: 'Chase U is open for enrollment!', context: 'Andre Chase University gimmick', year: '2022', iconic: false },
    { quote: 'Spell it out! C-H-A-S-E U!', context: 'Chase U rallying cry', year: '2023', iconic: true },
  ],
  915: [ // Thea Hail
    { quote: 'Chase U forever!', context: 'Chase U faction loyalty', year: '2023', iconic: false },
  ],
  856: [ // Jacob Fatu
    { quote: 'The Samoan Werewolf has arrived.', context: 'Bloodline debut', year: '2024', iconic: true },
  ],
  878: [ // Hillbilly Jim
    { quote: 'Don\'t go messin\' with a country boy!', context: 'Entrance catchphrase', year: '1985', iconic: true },
  ],
  879: [ // Bad News Brown
    { quote: 'I\'m from the streets of Harlem, and I don\'t take nothin\' from nobody!', context: 'Harlem tough guy promo', year: '1989', iconic: false },
  ],
  890: [ // Savio Vega
    { quote: 'Viva Puerto Rico!', context: 'Babyface rallying cry', year: '1995', iconic: false },
  ],
  844: [ // Kamala
    { quote: 'Kamala speaks through his actions.', context: 'Managed by Kim Chee — rarely spoke', year: '1987', iconic: false },
  ],
  896: [ // Albert
    { quote: 'Ahhhhh!', context: 'Tensai war cry entrance', year: '2012', iconic: false },
  ],
  143: [ // Koko B. Ware
    { quote: 'Frankie says relax!', context: 'Signature reference to his macaw Frankie', year: '1987', iconic: false },
  ],
  116: [ // Doink the Clown
    { quote: 'Ha ha ha ha!', context: 'Evil clown laugh', year: '1993', iconic: true },
  ],
  117: [ // Tatanka
    { quote: 'Buffalo!', context: 'Native American warrior war cry during entrance', year: '1992', iconic: false },
  ],
  156: [ // Marty Jannetty
    { quote: 'Shawn, you threw me through the Barber Shop window!', context: 'Rockers breakup aftermath', year: '1992', iconic: true },
  ],
  893: [ // Waylon Mercy
    { quote: 'You know what I mean?', context: 'Creepy Southern gentleman catchphrase — inspired Bray Wyatt', year: '1995', iconic: true },
  ],
  64: [ // Al Snow
    { quote: 'What does everybody want? Head! What does everybody need? Head!', context: 'Entrance catchphrase with mannequin head', year: '1999', iconic: true },
  ],
  67: [ // APA
    { quote: 'If you want protection, come see the APA. Cash only.', context: 'Acolytes Protection Agency office promos', year: '2001', iconic: true },
  ],
  243: [ // Sabu
    { quote: 'Sabu! Sabu! Sabu!', context: 'Silent character — fans chanted for him. Pointed up as signature', year: '1995', iconic: true },
  ],
  245: [ // New Jack
    { quote: 'I don\'t have matches. I have fights.', context: 'Hardcore legend promo', year: '1997', iconic: true },
  ],
  271: [ // Tyler Breeze
    { quote: 'Mmm... gorgeous!', context: 'Taking selfies, admiring himself', year: '2014', iconic: false },
    { quote: 'That\'s not ugly enough to be in this match.', context: 'Prince Pretty persona', year: '2015', iconic: false },
  ],
  340: [ // Hideo Itami
    { quote: 'I came to NXT to fight, not to talk!', context: 'NXT arrival promo', year: '2014', iconic: false },
  ],
  342: [ // Mojo Rawley
    { quote: 'I don\'t get hyped, I stay hyped!', context: 'Signature catchphrase', year: '2016', iconic: true },
  ],
  475: [ // Brodus Clay
    { quote: 'Somebody call my mama!', context: 'Funkasaurus entrance catchphrase', year: '2012', iconic: true },
  ],
  464: [ // Lana
    { quote: 'Rusev, crush!', context: 'Managing Rusev — commanding him to attack', year: '2014', iconic: true },
    { quote: 'Shut tup!', context: 'Heel authority figure catchphrase', year: '2014', iconic: false },
  ],
  255: [ // Hornswoggle
    { quote: 'Hornswoggle was the Anonymous Raw General Manager all along.', context: 'Infamous reveal of Anonymous GM', year: '2012', iconic: false },
  ],
  467: [ // Ricardo Rodriguez
    { quote: 'Albertooooo Del Rrrrriiiiiooooo!', context: 'Ring announcer introduction for Alberto Del Rio', year: '2011', iconic: true },
  ],
  384: [ // Layla El
    { quote: 'Flawless!', context: 'LayCool tag team catchphrase with Michelle McCool', year: '2009', iconic: false },
  ],
  382: [ // Maria Kanellis
    { quote: 'You\'re looking at the First Lady of professional wrestling!', context: 'First Lady of ROH/WWE promo', year: '2017', iconic: false },
  ],
  310: [ // Lash Legend
    { quote: 'I am the standard!', context: 'NXT promo — athletic dominance', year: '2023', iconic: false },
  ],
  332: [ // Dijak
    { quote: 'Feast your eyes!', context: 'Signature catchphrase', year: '2019', iconic: true },
  ],
  333: [ // Omos
    { quote: 'Nobody can stop Omos.', context: 'Giant intimidation promo', year: '2022', iconic: false },
  ],
  414: [ // Giovanni Vinci
    { quote: 'Imperium rules above all!', context: 'Imperium faction loyalty', year: '2023', iconic: false },
  ],
  421: [ // Imperium
    { quote: 'Imperium über alles!', context: 'Faction war cry led by GUNTHER', year: '2022', iconic: true },
  ],
  423: [ // Cora Jade
    { quote: 'I\'m the turning point of NXT!', context: 'NXT heel promo', year: '2022', iconic: false },
  ],
  436: [ // The Warlord
    { quote: 'The Warlord fears no man!', context: 'Powers of Pain promo', year: '1989', iconic: false },
  ],
  930: [ // Skinner
    { quote: 'I\'m just a good ol\' country boy from the swamps!', context: 'Alligator hunter gimmick promo', year: '1991', iconic: false },
  ],
  929: [ // Nailz
    { quote: 'I spent time... hard time... because of you, Boss Man!', context: 'Ex-convict vendetta against Big Boss Man', year: '1992', iconic: false },
  ],
  932: [ // Giant Gonzalez
    { quote: 'No one can match my size!', context: 'Managed by Harvey Wippleman — rarely spoke', year: '1993', iconic: false },
  ],
  37: [ // Steve Blackman
    { quote: 'The Lethal Weapon doesn\'t need to talk. He lets his fists do the talking.', context: 'No-nonsense martial artist', year: '2000', iconic: false },
  ],
  40: [ // Scotty 2 Hotty
    { quote: 'Turn it up!', context: 'The Worm celebration setup', year: '2000', iconic: false },
  ],
  69: [ // Gangrel
    { quote: 'Welcome to the dark side.', context: 'Brood vampire entrance', year: '1999', iconic: false },
  ],
  84: [ // Charlie Haas
    { quote: 'The World\'s Greatest Tag Team doesn\'t need your approval.', context: 'Team with Shelton Benjamin', year: '2003', iconic: false },
  ],
  114: [ // Viscera
    { quote: 'I\'m the world\'s largest love machine!', context: 'Viscera romantic gimmick', year: '2005', iconic: false },
  ],
  194: [ // Tyson Kidd
    { quote: 'Fact!', context: 'Catchphrase delivered after self-praising statements', year: '2014', iconic: false },
  ],
  234: [ // Torrie Wilson
    { quote: 'I\'m not just a pretty face, I can hold my own!', context: 'SmackDown promo', year: '2003', iconic: false },
  ],
  248: [ // Stevie Richards
    { quote: 'Stevie Kick!', context: 'Superkick signature call', year: '2000', iconic: false },
  ],
  380: [ // Curt Hawkins
    { quote: 'Face the facts!', context: 'Catchphrase during losing streak gimmick', year: '2018', iconic: false },
  ],
  510: [ // Sin Cara
    { quote: 'I represent the lucha libre tradition!', context: 'High-flying luchador', year: '2011', iconic: false },
  ],
  572: [ // Elijah Burke
    { quote: 'The Elijah Express is leaving the station!', context: 'New Breed faction on ECW brand', year: '2007', iconic: false },
  ],
  459: [ // Jacy Jayne
    { quote: 'Toxic Attraction runs NXT!', context: 'Toxic Attraction faction promo', year: '2022', iconic: false },
  ],
  265: [ // Candice LeRae
    { quote: 'The Poison Pixie is here!', context: 'NXT promo', year: '2018', iconic: false },
  ],
  874: [ // Piper Niven
    { quote: 'Here comes the big girl!', context: 'Arrival promo', year: '2023', iconic: false },
  ],
  907: [ // Sol Ruca
    { quote: 'Sol Snatcher!', context: 'NXT finisher signature call', year: '2023', iconic: false },
  ],
  868: [ // Tamina Snuka
    { quote: 'I\'m a Snuka! Superfly runs in my blood.', context: 'Family legacy promo', year: '2015', iconic: false },
  ],
  859: [ // Dan Severn
    { quote: 'The Beast is here.', context: 'MMA crossover — man of few words', year: '1998', iconic: false },
  ],
  150: [ // The Bushwhackers
    { quote: 'Wooo! Bushwhacker Luke and Butch are here, mate!', context: 'Licking faces and swinging arms to the ring', year: '1989', iconic: false },
  ],
  149: [ // Legion of Doom / Road Warriors
    { quote: 'Ohhhhh, what a rush!', context: 'Signature catchphrase entrance', year: '1990', iconic: true },
    { quote: 'Tell \'em, Hawk!', context: 'Animal to Hawk pre-match promo', year: '1992', iconic: false },
  ],
  360: [ // The Wild Samoans
    { quote: 'The Samoan dynasty begins here!', context: 'Afa and Sika — patriarch Samoan wrestling family', year: '1980', iconic: false },
  ],
  937: [ // Hakushi
    { quote: 'The sacred warrior of the Far East!', context: 'Japanese character with kanji body paint', year: '1995', iconic: false },
  ],
  940: [ // Aldo Montoya
    { quote: 'The Portuguese Man o\' War is ready for battle!', context: 'Jock Strap mask character', year: '1995', iconic: false },
  ],
  941: [ // Justin Credible
    { quote: 'That\'s not just the coolest, that\'s Justin Credible!', context: 'ECW World Champion boast', year: '2000', iconic: false },
  ],
  942: [ // Jerry Lynn
    { quote: 'Actions speak louder than words. Watch me in that ring.', context: 'Humble everyman wrestler promo style', year: '1999', iconic: false },
  ],
  943: [ // Nicole Bass
    { quote: 'Nobody is stronger than me!', context: 'Intimidation promo', year: '1999', iconic: false },
  ],
  945: [ // Christy Hemme
    { quote: 'I won the Diva Search, and I belong here!', context: 'Diva Search winner promo', year: '2005', iconic: false },
  ],
  946: [ // Candice Michelle
    { quote: 'Go Daddy!', context: 'Super Bowl commercial tie-in catchphrase', year: '2007', iconic: false },
  ],
  948: [ // Ashley Massaro
    { quote: 'I\'m a punk rock diva, and I can fight!', context: 'Punk rock persona', year: '2006', iconic: false },
  ],
  951: [ // Vladimir Kozlov
    { quote: 'I am the Moscow Mauler!', context: 'Russian powerhouse gimmick', year: '2008', iconic: false },
  ],
  952: [ // Prime Time Players
    { quote: 'Millions of dollars! Millions of dollars!', context: 'Tag team entrance celebration', year: '2012', iconic: true },
  ],
  953: [ // Cryme Tyme
    { quote: 'Money money, yeah yeah!', context: 'Tag team entrance catchphrase', year: '2006', iconic: false },
  ],
  954: [ // Spirit Squad
    { quote: 'Let\'s go, Spirit Squad!', context: 'Male cheerleader faction cheer', year: '2006', iconic: false },
  ],
  955: [ // Deuce and Domino
    { quote: 'The 1950s are back, baby!', context: 'Greaser tag team gimmick', year: '2007', iconic: false },
  ],
  956: [ // Adam Rose
    { quote: 'It\'s party time, all the time!', context: 'Exotic Express party gimmick', year: '2014', iconic: false },
    { quote: 'Don\'t be a lemon, be a rosebud!', context: 'Signature catchphrase', year: '2014', iconic: true },
  ],
  957: [ // Emma
    { quote: 'It\'s Emmalution!', context: 'Dancing gimmick entrance', year: '2014', iconic: false },
  ],
  958: [ // Summer Rae
    { quote: 'Summer is hotter than you!', context: 'Mean girl persona', year: '2013', iconic: false },
  ],
  962: [ // Los Matadores
    { quote: 'Olé! Olé! Olé!', context: 'Bullfighter gimmick entrance', year: '2013', iconic: false },
  ],
  964: [ // Shotzi
    { quote: 'Shotzi\'s coming and she\'s bringing the tank!', context: 'Tank entrance on NXT', year: '2020', iconic: false },
  ],
  975: [ // Teddy Long
    { quote: 'Hold on a minute, playa!', context: 'Signature SmackDown GM catchphrase', year: '2004', iconic: true },
    { quote: 'You\'re gonna go one-on-one with The Undertaker!', context: 'Signature GM booking announcement', year: '2005', iconic: true },
    { quote: 'Holla holla holla!', context: 'Teddy Long celebration catchphrase', year: '2004', iconic: true },
  ],
  979: [ // Buff Bagwell
    { quote: 'I\'m Buff, and I\'m the stuff!', context: 'WCW signature catchphrase', year: '1998', iconic: true },
  ],
  980: [ // Kanyon
    { quote: 'Who better than Kanyon?!', context: 'Signature catchphrase — crowd would reply "Nobody!"', year: '2000', iconic: true },
  ],
  997: [ // Debra
    { quote: 'Puppies!', context: 'Audience catchphrase associated with Debra\'s appearances', year: '1999', iconic: false },
  ],
  1001: [ // Killer Kowalski
    { quote: 'I was the most feared man in professional wrestling.', context: 'Legendary heel — trained Triple H', year: '1970', iconic: false },
  ],
  1002: [ // Freddie Blassie
    { quote: 'You pencil-neck geeks!', context: 'Legendary manager and heel insult catchphrase', year: '1975', iconic: true },
  ],
  1003: [ // Aksana
    { quote: 'I always get what I want, darling.', context: 'Lithuanian seductress gimmick', year: '2012', iconic: false },
  ],
  1006: [ // The Brooklyn Brawler
    { quote: 'I\'m from Brooklyn! I don\'t back down from nobody!', context: 'Lovable jobber persona', year: '1989', iconic: false },
  ],
  1008: [ // Gillberg
    { quote: 'Who\'s first?!', context: 'Goldberg parody — opposite of "Who\'s next?"', year: '1998', iconic: true },
  ],
  1013: [ // Slick
    { quote: 'The Doctor of Style is in the house!', context: 'Manager persona catchphrase', year: '1987', iconic: true },
  ],
  1018: [ // Aja Kong
    { quote: 'No mercy!', context: 'Joshi legend — dominant striking style', year: '1995', iconic: false },
  ],
  1020: [ // La Resistance
    { quote: 'Vive la France!', context: 'French heel tag team catchphrase', year: '2003', iconic: false },
  ],
  1021: [ // The Basham Brothers
    { quote: 'Nobody can tell us apart!', context: 'Twin gimmick tag team', year: '2004', iconic: false },
  ],
  565: [ // Adam Bomb
    { quote: 'Tick tick tick... BOOM!', context: 'Nuclear explosion gimmick entrance', year: '1993', iconic: false },
  ],
  528: [ // Trent Seven
    { quote: 'British Strong Style forever!', context: 'NXT UK faction with Pete Dunne and Tyler Bate', year: '2017', iconic: false },
  ],
  529: [ // Alba Fyre
    { quote: 'I\'m going to burn it all down!', context: 'Scottish warrior fiery promo', year: '2022', iconic: false },
  ],
  530: [ // Isla Dawn
    { quote: 'The darkness is calling.', context: 'Mystical character promo', year: '2022', iconic: false },
  ],
  531: [ // Sarray
    { quote: 'The Warrior of the Sun rises!', context: 'Japanese babyface promo', year: '2021', iconic: false },
  ],
  532: [ // Giulia
    { quote: 'I am the most beautiful champion in the world.', context: 'Italian-Japanese star promo', year: '2024', iconic: false },
  ],
  538: [ // Tonga Loa
    { quote: 'The Bloodline runs through all of us.', context: 'Samoan family faction loyalty', year: '2024', iconic: false },
  ],
  557: [ // Dino Bravo
    { quote: 'I am the strongest man in the world!', context: 'Canadian strongman boast', year: '1988', iconic: false },
  ],
  559: [ // Crush
    { quote: 'Crush is gonna crush you, brah!', context: 'Hawaiian surfer turned heel', year: '1993', iconic: false },
  ],
  604: [ // Duke Hudson
    { quote: 'Duke Hudson is money in the bank!', context: 'NXT poker player gimmick', year: '2021', iconic: false },
  ],
  602: [ // Tegan Nox
    { quote: 'The Girl with the Shiniest Wizard!', context: 'Signature move reference', year: '2019', iconic: false },
  ],
  578: [ // Chris Masters
    { quote: 'Nobody breaks the Masterlock!', context: 'Masterlock Challenge catchphrase', year: '2005', iconic: true },
  ],
  585: [ // EC3
    { quote: 'I don\'t need you. You need me.', context: 'Top one percent heel persona', year: '2018', iconic: false },
  ],
  583: [ // Eric Young
    { quote: 'Welcome to the World of Sanity!', context: 'Sanity faction leader on NXT', year: '2017', iconic: false },
  ],
  587: [ // Lars Sullivan
    { quote: 'The Freak is unleashed!', context: 'Monster heel persona', year: '2019', iconic: false },
  ],
  15: [ // Demolition
    { quote: 'Here comes the Ax, and here comes the Smasher!', context: 'Entrance theme lyric / catchphrase', year: '1988', iconic: true },
  ],
  148: [ // The Nasty Boys
    { quote: 'Oh, it\'s nasty time!', context: 'Tag team catchphrase', year: '1991', iconic: false },
  ],
  16: [ // British Bulldogs
    { quote: 'We\'re British and we\'re proud!', context: 'Davey Boy and Dynamite Kid promo', year: '1986', iconic: false },
  ],
  152: [ // Money Inc.
    { quote: 'Everybody\'s got a price!', context: 'DiBiase and IRS tag team catchphrase', year: '1992', iconic: true },
  ],
  163: [ // Right to Censor
    { quote: 'This behavior is completely unacceptable!', context: 'Steven Richards censorship character', year: '2000', iconic: false },
  ],
  224: [ // Zoey Stark
    { quote: 'I am the greatest women\'s athlete in WWE history!', context: 'NXT heel promo', year: '2023', iconic: false },
  ],
  443: [ // Terri Runnels
    { quote: 'I always get what I want.', context: 'Scheming valet promo', year: '1999', iconic: false },
  ],
  297: [ // The Judgment Day
    { quote: 'All rise for the Judgment Day!', context: 'Faction entrance call — Finn Bálor, Damian Priest, Rhea Ripley', year: '2022', iconic: true },
  ],
  235: [ // Stacy Keibler
    { quote: 'The legs that launched a thousand careers!', context: 'Self-description as Miss Hancock/Stacy', year: '2002', iconic: false },
  ],
  982: [ // Hugh Morrus
    { quote: 'No laughing matter!', context: 'No Laughing Matter moonsault finisher — WCW', year: '1999', iconic: false },
  ],
  983: [ // Masato Tanaka
    { quote: 'I will never stop fighting!', context: 'ECW hardcore warrior spirit', year: '1999', iconic: false },
  ],
  977: [ // Linda McMahon
    { quote: 'I want a divorce!', context: 'Storyline with Vince McMahon', year: '2002', iconic: false },
  ],
  1012: [ // John Laurinaitis
    { quote: 'People Power!', context: 'GM catchphrase as Raw and SmackDown General Manager', year: '2012', iconic: true },
    { quote: 'My name is Mr. Excitement, John Laurinaitis!', context: 'Self-proclaimed nickname', year: '2012', iconic: true },
  ],
  335: [ // Ivar
    { quote: 'War! Raiders!', context: 'Viking Raiders entrance call', year: '2019', iconic: false },
  ],
  272: [ // The Viking Raiders
    { quote: 'It\'s Viking time!', context: 'Faction war cry', year: '2019', iconic: false },
  ],
  275: [ // The Revival / FTR
    { quote: 'Say yeah!', context: 'Signature entrance catchphrase — Revival/FTR', year: '2018', iconic: false },
    { quote: 'No flips, just fists!', context: 'Tag team wrestling philosophy', year: '2017', iconic: true },
  ],
  424: [ // Indi Hartwell
    { quote: 'InDex forever!', context: 'Indi Hartwell and Dexter Lumis love story', year: '2021', iconic: false },
  ],
  402: [ // Humberto Carrillo
    { quote: 'Soy el orgullo de México!', context: 'I am the pride of Mexico — representing LWO', year: '2023', iconic: false },
  ],
  517: [ // Katana Chance & Kayden Carter
    { quote: 'KC squared is in the building!', context: 'Tag team catchphrase', year: '2022', iconic: false },
  ],
  519: [ // Stacks
    { quote: 'Welcome to The Family.', context: 'Tony D\'Angelo faction member', year: '2023', iconic: false },
  ],
  499: [ // Pretty Deadly
    { quote: 'Pretty Deadly are simply gorgeous!', context: 'Self-admiring tag team', year: '2022', iconic: false },
  ],
  38: [ // Crash Holly
    { quote: 'I am a super heavyweight! I weigh well over 400 pounds!', context: 'Delusional Hardcore Champion claims', year: '2000', iconic: false },
  ],
  41: [ // Grandmaster Sexay
    { quote: 'It\'s time to dance! Everybody get on your feet!', context: 'Too Cool entrance hype', year: '2000', iconic: false },
  ],
  51: [ // Dudley Boyz
    { quote: 'D-Von! Get the tables!', context: 'Signature pre-match demand', year: '1999', iconic: true },
    { quote: 'Wassup!', context: 'Headbutt spot call', year: '2000', iconic: true },
  ],
  113: [ // Funaki
    { quote: 'Funaki! SmackDown number one announcer!', context: 'Self-appointed interviewer role', year: '2004', iconic: false },
  ],
  151: [ // Natural Disasters
    { quote: 'We are a natural disaster waiting to happen!', context: 'Tag team power promo', year: '1991', iconic: false },
  ],
  158: [ // Smoking Gunns
    { quote: 'We\'re the fastest draw in the WWF!', context: 'Cowboy tag team intro', year: '1993', iconic: false },
  ],
  159: [ // The Headshrinkers
    { quote: 'Nobody messes with the Headshrinkers and lives to tell about it!', context: 'Wild Samoan tag team promo', year: '1994', iconic: false },
  ],
  164: [ // Mean Street Posse
    { quote: 'We\'re from Greenwich, Connecticut! We\'re better than you!', context: 'Shane McMahon\'s prep school entourage', year: '1999', iconic: false },
  ],
  172: [ // Paul London
    { quote: 'I\'m a high-flyer in every sense of the word.', context: 'Cruiserweight division promo', year: '2005', iconic: false },
  ],
  174: [ // MNM
    { quote: 'We are MNM. Monday Night Mojo. And we are the greatest tag team of the 21st century!', context: 'Hollywood-styled entrance promo', year: '2005', iconic: false },
  ],
  179: [ // Super Crazy
    { quote: 'Super Crazy is loco, baby!', context: 'ECW-to-WWE promo', year: '2005', iconic: false },
  ],
  180: [ // Nunzio
    { quote: 'I\'m from the streets of New York. You don\'t want none of this!', context: 'FBI faction promo', year: '2002', iconic: false },
  ],
  181: [ // Chuck Palumbo
    { quote: 'I ride alone. That\'s the way it\'s always been.', context: 'Biker gimmick promo', year: '2007', iconic: false },
  ],
  184: [ // Orlando Jordan
    { quote: 'I\'m the chief of staff! JBL\'s right-hand man!', context: 'JBL\'s Cabinet member', year: '2005', iconic: false },
  ],
  186: [ // Kenzo Suzuki
    { quote: 'I am the Japanese Buzzsaw! I will cut you down!', context: 'SmackDown debut promo', year: '2004', iconic: false },
  ],
  189: [ // René Duprée
    { quote: 'I am French, and I am better than you!', context: 'La Resistance heel promo', year: '2003', iconic: false },
  ],
  195: [ // David Hart Smith
    { quote: 'The Hart Dynasty is continuing my family\'s legacy.', context: 'Hart Dynasty formation', year: '2009', iconic: false },
  ],
  246: [ // Balls Mahoney
    { quote: 'Balls! Balls! Balls!', context: 'Crowd chant and battle cry', year: '1997', iconic: false },
  ],
  251: [ // Ultimo Dragon
    { quote: 'I hold ten titles simultaneously. No one in history can say that.', context: 'J-Crown champion promo', year: '1996', iconic: false },
  ],
  252: [ // Jamie Noble
    { quote: 'I\'m a redneck, and I\'m proud of it!', context: 'Trailer park gimmick', year: '2002', iconic: false },
  ],
  256: [ // Fit Finlay
    { quote: 'My name is Finlay, and I love to fight!', context: 'Signature introduction', year: '2006', iconic: true },
  ],
  266: [ // Xia Li
    { quote: 'I am the Protector. I do not need your protection.', context: 'NXT character transformation', year: '2021', iconic: false },
  ],
  267: [ // Mansoor
    { quote: 'I made history at the Greatest Royal Rumble — in my home country!', context: 'Saudi Arabia hometown hero', year: '2019', iconic: false },
  ],
  269: [ // Jason Jordan
    { quote: 'Kurt Angle is my father. I have Olympic blood in my veins!', context: 'Controversial storyline reveal', year: '2017', iconic: false },
  ],
  278: [ // Kyle O\'Reilly
    { quote: 'I\'m the best technical wrestler in NXT — and I can prove it.', context: 'Undisputed ERA member promo', year: '2019', iconic: false },
  ],
  279: [ // Roderick Strong
    { quote: 'The Messiah of the Backbreaker has arrived!', context: 'NXT promo', year: '2018', iconic: false },
  ],
  281: [ // Too Cool
    { quote: 'Turn it up! It\'s time to get funky!', context: 'Pre-dance segment catchphrase', year: '2000', iconic: false },
  ],
  312: [ // Tyson Tomko
    { quote: 'Problem solver. That\'s what I do.', context: 'Christian\'s enforcer promo', year: '2004', iconic: false },
  ],
  313: [ // Mark Jindrak
    { quote: 'I am the reflection of perfection!', context: 'WCW/WWE narcissistic gimmick', year: '2004', iconic: false },
  ],
  314: [ // Kevin Thorn
    { quote: 'The darkness has arrived on ECW.', context: 'Vampire gimmick debut', year: '2006', iconic: false },
  ],
  328: [ // Hiromu Takahashi
    { quote: 'Tick-tock! Time bomb is about to explode!', context: 'Time Bomb signature promo', year: '2017', iconic: false },
  ],
  337: [ // Tiger Ali Singh
    { quote: 'I will pay any of you to humiliate yourselves!', context: 'Million Dollar Man-style heel gimmick', year: '1998', iconic: false },
  ],
  338: [ // Yoshi Tatsu
    { quote: 'Yes! Yes! Yes! I am ready for competition!', context: 'Enthusiastic babyface promo', year: '2009', iconic: false },
  ],
  343: [ // The Ascension
    { quote: 'Welcome to the wasteland!', context: 'Apocalyptic tag team catchphrase', year: '2014', iconic: false },
  ],
  344: [ // Primo Colon
    { quote: 'Come to beautiful Puerto Rico! The Colons welcome you!', context: 'Tourism commercial gimmick', year: '2014', iconic: false },
  ],
  359: [ // The Valiant Brothers
    { quote: 'We are the Valiant Brothers, and we don\'t need anyone\'s approval!', context: 'Tag team heel promo', year: '1974', iconic: false },
  ],
  437: [ // The Barbarian
    { quote: 'I will destroy anything in my path. That is my purpose.', context: 'Powers of Pain promo', year: '1989', iconic: false },
  ],
  442: [ // The Kat
    { quote: 'Meow! The Kat always lands on her feet!', context: 'Ringside valet promo', year: '2000', iconic: false },
  ],
  446: [ // Dawn Marie
    { quote: 'I always get what I want. Always.', context: 'SmackDown femme fatale', year: '2002', iconic: false },
  ],
  447: [ // Nidia
    { quote: 'I\'m the original tough enough! I earned my spot!', context: 'Tough Enough winner promo', year: '2001', iconic: false },
  ],
  457: [ // Dana Brooke
    { quote: 'I am the total package — beauty and athleticism!', context: '24/7 Championship era', year: '2022', iconic: false },
  ],
  460: [ // Gigi Dolin
    { quote: 'Toxic Attraction doesn\'t follow the rules — we make them.', context: 'NXT faction promo', year: '2021', iconic: false },
  ],
  461: [ // Katana Chance
    { quote: 'We\'re not just tag team champions — we\'re making history!', context: 'NXT Women\'s Tag Championship', year: '2022', iconic: false },
  ],
  469: [ // Essa Rios
    { quote: 'The luchador spirit lives in me!', context: 'Light heavyweight division promo', year: '2000', iconic: false },
  ],
  471: [ // Paul Burchill
    { quote: 'I am a real-life pirate! I come from a long line of pirates!', context: 'Pirate gimmick promo', year: '2006', iconic: false },
  ],
  476: [ // Cameron
    { quote: 'Girl bye!', context: 'Total Divas era catchphrase', year: '2013', iconic: false },
  ],
  498: [ // Nathan Frazer
    { quote: 'Speed kills, and nobody is faster than Nathan Frazer!', context: 'NXT cruiserweight promo', year: '2022', iconic: false },
  ],
  520: [ // Julius Creed
    { quote: 'Creed Brothers don\'t back down from anyone!', context: 'Diamond Mine faction', year: '2022', iconic: false },
  ],
  521: [ // Brutus Creed
    { quote: 'We were born to fight. It\'s in our blood.', context: 'Amateur wrestling background promo', year: '2022', iconic: false },
  ],
  522: [ // Ivy Nile
    { quote: 'I am the Diamond Mine\'s secret weapon!', context: 'NXT faction promo', year: '2022', iconic: false },
  ],
  860: [ // Motor City Machine Guns
    { quote: 'Detroit style, baby! Motor City Machine Guns are here!', context: 'TNA-to-WWE debut promo', year: '2024', iconic: false },
  ],
  865: [ // Axiom & Nathan Frazer
    { quote: 'Logic meets speed. We are the perfect combination.', context: 'Tag team formation promo', year: '2023', iconic: false },
  ],
  892: [ // Mantaur
    { quote: 'Half man, half bull — all destruction!', context: 'Bizarre gimmick introduction', year: '1995', iconic: false },
  ],
  894: [ // Duke Droese
    { quote: 'I\'m taking out the trash — starting with you!', context: 'Garbage man gimmick', year: '1995', iconic: false },
  ],
  895: [ // Bertha Faye
    { quote: 'I\'m big, I\'m beautiful, and I\'m the WWF Women\'s Champion!', context: 'SummerSlam 1995 title win', year: '1995', iconic: false },
  ],
  898: [ // Droz
    { quote: 'I puke on people! That\'s just what I do!', context: 'Infamous vomiting gimmick', year: '1998', iconic: false },
  ],
  904: [ // Luther Reigns
    { quote: 'I am the muscle behind SmackDown\'s new order!', context: 'Kurt Angle associate promo', year: '2004', iconic: false },
  ],
  908: [ // Kelani Jordan
    { quote: 'I\'m not just here to compete — I\'m here to make history!', context: 'NXT Women\'s North American Championship', year: '2024', iconic: false },
  ],
  910: [ // Gallus
    { quote: 'Gallus Boys on top!', context: 'Scottish faction battle cry', year: '2019', iconic: false },
  ],
  912: [ // Javier Bernal
    { quote: 'I am Javier Bernal, and I am must-see NXT!', context: 'NXT debut promo', year: '2022', iconic: false },
  ],
  914: [ // Wendy Choo
    { quote: 'Don\'t wake me up... you won\'t like me when I\'m awake.', context: 'Sleepy character promo', year: '2022', iconic: false },
  ],
  928: [ // Sapphire
    { quote: 'Sapphire is a diamond in the rough, honey!', context: 'Dusty Rhodes\' companion promo', year: '1990', iconic: false },
  ],
  931: [ // Bastion Booger
    { quote: 'Feed me! I\'m still hungry!', context: 'Gluttonous character catchphrase', year: '1993', iconic: false },
  ],
  933: [ // Max Moon
    { quote: 'I come from the future to dominate the WWF!', context: 'Futuristic gimmick debut', year: '1992', iconic: false },
  ],
  934: [ // Gobbledy Gooker
    { quote: 'Gobble gobble gobble!', context: 'Hatching from the egg at Survivor Series', year: '1990', iconic: false },
  ],
  959: [ // Eva Marie
    { quote: 'All red everything!', context: 'Signature catchphrase', year: '2016', iconic: false },
    { quote: 'Eva-lution is coming.', context: 'Return promo vignette', year: '2021', iconic: false },
  ],
  981: [ // Nikkita Lyons
    { quote: 'The Lyons Den is open for business!', context: 'NXT debut promo', year: '2022', iconic: false },
  ],
  1007: [ // Barry Horowitz
    { quote: 'I finally won! I can\'t believe it!', context: 'Upset victory over Bodydonna Skip', year: '1995', iconic: false },
  ],
  1009: [ // James Ellsworth
    { quote: 'Any man with two hands has a fighting chance!', context: 'Famous AJ Styles confrontation', year: '2016', iconic: true },
  ],
  1010: [ // Eve Torres
    { quote: 'I am the hoeski? No, I am the smart one!', context: 'Heel turn revelation', year: '2012', iconic: false },
  ],
  1011: [ // Kaitlyn
    { quote: 'I didn\'t come this far to be second best!', context: 'Divas Championship pursuit', year: '2013', iconic: false },
  ],
  1116: [ // Ferrara
    { quote: 'I am the real deal! Oklahoma knows best!', context: 'WCW announcer-turned-wrestler promo', year: '1999', iconic: false },
  ],
  911: [ // Alba Fyre & Isla Dawn
    { quote: 'The unholy union will reign supreme!', context: 'NXT Women\'s Tag Team Championship promo', year: '2023', iconic: false },
  ],

  // -- Previously auto-generated entries, now with unique character-appropriate content --
  121: [ // Test & Albert
    { context: 'WWF SmackDown', year: 2000, quote: 'T&A is here to take what we want, when we want it. And if Trish says jump, these two big men will make sure you never land.', significance: 'Tag team promo with Trish Stratus as manager.' },
  ],
  122: [ // The Godwinns
    { context: 'WWF Superstars', year: 1996, quote: "We may be pig farmers from down south, but don't let the slop buckets fool ya — we'll whip any fancy city boys who step to us!", significance: 'Southern farmer gimmick promo establishing blue-collar identity.' },
  ],
  123: [ // The Headbangers
    { context: 'WWF Raw', year: 1997, quote: "Mosh! Thrash! We don't care about your rules or your dress code. We came to headbang and win tag team gold, and the music never stops!", significance: 'Attitude Era promo reflecting their rock/metal personas.' },
  ],
  185: [ // William Regal & Eugene
    { context: 'WWE Raw', year: 2004, quote: "Eugene is a very special young man, and I, William Regal, shall guide him to greatness. Anyone who mocks him will answer to me.", significance: 'Regal acting as mentor/protector of Eugene.' },
  ],
  462: [ // Kayden Carter
    { context: 'NXT', year: 2022, quote: "Katana and I bring the energy every single week. We don't just want to be in the tag division — we want to run it.", significance: 'NXT tag team promo with Katana Chance.' },
  ],
  606: [ // Killian Dain
    { context: 'NXT', year: 2019, quote: "I'm the Beast of Belfast. I don't do flashy promos — I just walk through people. That's all you need to know.", significance: 'Intimidation promo reflecting his brawler persona from Northern Ireland.' },
  ],
  607: [ // Alexander Wolfe
    { context: 'NXT UK', year: 2019, quote: "Imperium stands for honor, for tradition, for mat wrestling at its purest. We will purge this brand of anyone who disrespects the sport.", significance: 'Imperium faction promo emphasizing European wrestling tradition.' },
  ],
  608: [ // Marcel Barthel
    { context: 'NXT', year: 2020, quote: "Discipline. Precision. Superiority. These are not just words — they are the pillars of Imperium, and we will enforce them.", significance: 'Imperium faction promo showcasing German technical wrestling pride.' },
  ],
  609: [ // Fabian Aichner
    { context: 'NXT', year: 2020, quote: "I came from Italy to prove that European wrestling is the foundation of everything you see in this ring. Imperium will show you.", significance: 'Promo highlighting Italian heritage and Imperium allegiance.' },
  ],
  610: [ // Grizzled Young Veterans
    { context: 'NXT UK', year: 2020, quote: "We are the Grizzled Young Veterans, and we have earned every scar. These NXT UK tag titles belong around our waists — end of discussion.", significance: 'Heel tag team promo asserting dominance in NXT UK division.' },
  ],
  611: [ // Mark Andrews & Flash Morgan Webster
    { context: 'NXT UK', year: 2019, quote: "We fly, we dive, we take risks nobody else will. South Wales forever — and we're bringing those tag titles home.", significance: 'High-flying Welsh duo promo from NXT UK.' },
  ],
  612: [ // Noam Dar
    { context: 'NXT UK', year: 2021, quote: "Supernova Sessions is the hottest talk show in all of NXT UK, baby! I'm the Scottish Supernova — charisma, talent, and better hair than all of you.", significance: 'Cocky heel persona with his Supernova Sessions talk show segment.' },
  ],
  613: [ // Meiko Satomura
    { context: 'NXT UK', year: 2021, quote: "I have fought for over thirty years across Japan and the world. Now I bring that legacy to NXT UK. The Final Boss has arrived.", significance: 'Legendary joshi wrestler bringing decades of experience to NXT UK.' },
  ],
  614: [ // Amale
    { context: 'NXT UK', year: 2021, quote: "France has produced champions in every sport. I will add professional wrestling to that list. NXT UK, take notice.", significance: 'French competitor establishing herself in NXT UK.' },
  ],
  615: [ // Jinny
    { context: 'NXT UK', year: 2020, quote: "I am the Fashionista of NXT UK. You wish you had my style, my grace, my ruthlessness. Bow down to your queen.", significance: 'Heel diva promo emphasizing her high-fashion persona.' },
  ],
  624: [ // Damon Kemp
    { context: 'NXT', year: 2022, quote: "I was an amateur wrestling national champion before I ever set foot in a WWE ring. That pedigree doesn't just disappear — it makes me dangerous.", significance: 'Promo highlighting legitimate amateur wrestling credentials.' },
  ],
  643: [ // Lance Cade
    { context: 'WWE Raw', year: 2007, quote: "Trevor and I are the future of tag team wrestling. We learned from the best in JBL and Shawn Michaels — now we're coming for those titles.", significance: 'Young tag team promo referencing mentorship from established stars.' },
  ],
  644: [ // Trevor Murdoch
    { context: 'WWE Raw', year: 2006, quote: "I'm a good ol' boy who hits hard and drinks harder. Lance and I don't need fancy moves — just stiff clotheslines and bad attitudes.", significance: 'Southern tough-guy promo establishing the Cade & Murdoch persona.' },
  ],
  645: [ // Team Angle
    { context: 'WWE SmackDown', year: 2003, quote: "Kurt Angle hand-picked us because we are the best collegiate athletes in this company. Team Angle doesn't lose — it's just a fact.", significance: 'Shelton Benjamin and Charlie Haas promo under Kurt Angle leadership.' },
  ],
  647: [ // La Résistance
    { context: 'WWE Raw', year: 2003, quote: "Vive la France! You Americans think you own the world, but La Résistance will show you what true fighting spirit looks like!", significance: 'Anti-American heel faction promo during their Raw tag title run.' },
  ],
  648: [ // The Highlanders
    { context: 'WWE Raw', year: 2006, quote: "Robbie! Rory! We came all the way from Scotland to drink, fight, and win! And we're almost out of drink!", significance: 'Comedy-tinged Scottish brawler promo.' },
  ],
  654: [ // Primo & Epico
    { context: 'WWE SmackDown', year: 2012, quote: "The Colon dynasty continues! Our family has dominated Caribbean wrestling for generations, and now we dominate WWE tag teams.", significance: 'Promo referencing the legendary Colon wrestling family.' },
  ],
  655: [ // The Vaudevillains
    { context: 'WWE SmackDown', year: 2016, quote: "In a world of cheap thrills and instant gratification, we are the gentlemen of a bygone era. The Vaudevillains will restore class to this ring.", significance: 'Old-timey villain gimmick promo with theatrical flair.' },
  ],
  656: [ // Enzo Amore & Big Cass
    { context: 'WWE Raw', year: 2016, quote: "My name is Enzo Amore and I am a certified G and a bonafide stud — and you CAN'T. TEACH. THAT!", significance: 'Iconic catchphrase entrance promo that became a fan favorite.' },
  ],
  657: [ // American Alpha
    { context: 'WWE SmackDown', year: 2016, quote: "Ready. Willing. And Gable! Jordan and Gable — we are pure amateur wrestling translated into tag team perfection.", significance: 'Tag team promo highlighting their Olympic-caliber amateur wrestling.' },
  ],
  658: [ // The Bar
    { context: 'WWE Raw', year: 2017, quote: "Sheamus and I were enemies, but now The Bar has been set — and nobody in this locker room can clear it.", significance: 'Former rivals turned dominant tag team promo.' },
  ],
  659: [ // The Authors of Pain
    { context: 'NXT TakeOver', year: 2017, quote: "Pain is our language. Destruction is our art. With Paul Ellering guiding us, the Authors of Pain will write the final chapter of every team we face.", significance: 'Dominant monster tag team promo managed by Paul Ellering.' },
  ],
  660: [ // Heavy Machinery
    { context: 'WWE SmackDown', year: 2019, quote: "STEAKS AND WEIGHTS, BABY! Tucker and I are just two big dudes who love to eat, lift, and absolutely destroy people in that ring!", significance: 'Otis and Tucker fun-loving powerhouse tag team promo.' },
  ],
  663: [ // Titus O'Neil
    { context: 'WWE Raw', year: 2016, quote: "I'm a father, a businessman, a philanthropist, and a competitor. The Titus Brand represents excellence in everything we do. URAH URAH URAH!", significance: 'Titus Brand era promo combining community pride with competitive drive.' },
  ],
  671: [ // Tatum Paxley
    { context: 'NXT', year: 2023, quote: "Everyone thinks I'm weird. Maybe I am. But weird people notice things others miss, and I've noticed that NXT title looks perfect on me.", significance: 'Quirky babyface promo reflecting her eccentric character.' },
  ],
  672: [ // Lola Vice
    { context: 'NXT', year: 2023, quote: "I'm from Miami — I bring the heat, the salsa, and the MMA strikes. You want to dance? I'll knock you out on the dance floor and in the ring.", significance: 'MMA-trained competitor with Cuban-American flair.' },
  ],
  673: [ // Elektra Lopez
    { context: 'NXT', year: 2022, quote: "Legado del Fantasma runs NXT. I'm not just arm candy — I'm the enforcer. Cross us and you'll regret it.", significance: 'Faction enforcer promo with Legado del Fantasma.' },
  ],
  674: [ // Stevie Turner
    { context: 'NXT UK', year: 2022, quote: "I'm the tech genius of NXT UK. While you're busy flexing, I've already hacked apart your game plan. Stevie Turner is always three steps ahead.", significance: 'Tech-savvy heel gimmick promo.' },
  ],
  675: [ // Mia Yim
    { context: 'WWE Raw', year: 2022, quote: "They call me the HBIC — Head Baddie In Charge. I've fought in every promotion on Earth, and I'm just getting started in WWE.", significance: 'Veteran competitor promo referencing her indie wrestling journey.' },
  ],
  676: [ // Lacey Evans
    { context: 'WWE SmackDown', year: 2019, quote: "I am a classy lady and a United States Marine. You nasties could never understand the discipline it takes to be this fabulous.", significance: 'Southern belle heel promo combining military background with elitism.' },
  ],
  678: [ // Aliyah
    { context: 'WWE SmackDown', year: 2022, quote: "I spent years in NXT waiting for my chance. Now that I'm on SmackDown, nobody is going to tell me I don't belong here.", significance: 'Underdog babyface promo after main roster call-up.' },
  ],
  679: [ // Persia Pirotta
    { context: 'NXT', year: 2022, quote: "I'm six feet tall and I hit like a truck. You want to underestimate me? Go ahead. It'll be the last mistake you make in NXT.", significance: 'Powerhouse promo establishing physical dominance.' },
  ],
  681: [ // Indus Sher
    { context: 'NXT', year: 2020, quote: "We are Indus Sher — the lions of India. Our ancestors were warriors, and we carry that warrior blood into every match.", significance: 'Tag team promo referencing Indian warrior heritage.' },
  ],
  683: [ // Josh Briggs & Brooks Jensen
    { context: 'NXT', year: 2022, quote: "We're just two country boys who love to fight. Ain't nothing complicated about it — we show up, throw hands, and win.", significance: 'Blue-collar tag team promo with southern charm.' },
  ],
  684: [ // Fallon Henley
    { context: 'NXT', year: 2022, quote: "I grew up in a bar — literally. My family owns one. So trust me when I say I can handle any kind of trouble that walks through that door.", significance: 'Tough bartender background promo establishing no-nonsense attitude.' },
  ],
  685: [ // Hank Walker & Tank Ledger
    { context: 'NXT', year: 2023, quote: "Hank and Tank! We hit hard, we party harder, and we're coming for every tag team in NXT! Let's go!", significance: 'High-energy fun-loving powerhouse duo promo.' },
  ],
  686: [ // Joe Coffey
    { context: 'NXT UK', year: 2019, quote: "I am the Iron King of Scotland. From the streets of Glasgow to NXT UK, I've battered everyone in my path. Who's next?", significance: 'Scottish brawler promo referencing his Gallus faction leadership.' },
  ],
  687: [ // Mark Coffey
    { context: 'NXT UK', year: 2019, quote: "Gallus runs NXT UK. My brother Joe is the king, and I'm the enforcer. We own these streets, we own this ring.", significance: 'Gallus faction promo establishing hierarchy and dominance.' },
  ],
  688: [ // Wolfgang
    { context: 'NXT UK', year: 2019, quote: "They call me The Last King of Scotland for a reason. Gallus boys on top — and I'm the wildcard nobody sees coming.", significance: 'Gallus faction member promo with Scottish pride.' },
  ],
  689: [ // Danny Burch & Oney Lorcan
    { context: 'NXT', year: 2020, quote: "We're not pretty boys. We're not flashy. We just come to fight, and we hit harder than anyone in this division. NXT Tag Titles — we're coming.", significance: 'Hard-nosed brawler tag team promo.' },
  ],
  690: [ // MSK
    { context: 'NXT', year: 2021, quote: "MSK is all about positive vibes and high-flying tag team wrestling! We came to NXT and won the tag titles because nobody can match our chemistry!", significance: 'Energetic babyface tag champions promo.' },
  ],
  691: [ // The Rockers
    { context: 'WWF Superstars', year: 1989, quote: "Shawn and Marty are gonna rock this place! We fly off the top rope, we dive to the outside, and the girls go crazy! That's what The Rockers are all about!", significance: 'Classic tag team promo capturing their high-energy, fan-favorite persona.' },
  ],
  692: [ // The British Bulldogs
    { context: 'WWF Superstars', year: 1986, quote: "Davey Boy and the Dynamite Kid — we brought British wrestling to the WWF, and we brought Matilda too. We'll bulldog anyone who stands in our way.", significance: 'Tag team promo referencing their British heritage and mascot bulldog.' },
  ],
  693: [ // The Orient Express
    { context: 'WWF Superstars', year: 1990, quote: "With Mr. Fuji guiding us, The Orient Express will derail every team in the WWF. You cannot stop what you cannot understand.", significance: 'Heel tag team promo managed by Mr. Fuji.' },
  ],
  695: [ // The Beverly Brothers
    { context: 'WWF Superstars', year: 1992, quote: "We're Beau and Blake Beverly — the most gorgeous, the most talented tag team the WWF has ever seen. With the Genius in our corner, we're unbeatable.", significance: 'Vain heel tag team promo managed by The Genius.' },
  ],
  696: [ // The Quebecers
    { context: 'WWF Raw', year: 1993, quote: "Oui oui! Jacques and Pierre, The Quebecers, are the greatest tag team from the greatest province in all of Canada! We are your tag team champions!", significance: 'Quebec pride promo during their WWF Tag Team Championship reign.' },
  ],
  697: [ // Men on a Mission
    { context: 'WWF Superstars', year: 1993, quote: "Mo and Mabel are on a mission! We rap, we slam, we got Oscar on the mic! Men on a Mission is gonna change the game in the WWF tag division!", significance: 'Hip-hop flavored tag team promo with manager Oscar.' },
  ],
  698: [ // Well Dunn
    { context: 'WWF Superstars', year: 1994, quote: "Timothy Well and Steven Dunn — we are the most well-groomed, well-mannered, and well-conditioned tag team in the WWF. Beauty and brawn, darlings.", significance: 'Pretty boy heel tag team promo.' },
  ],
  699: [ // The Headshrinkers
    { context: 'WWF Superstars', year: 1993, quote: "Samu and Fatu from the Samoan islands! We headbutt, we splash, we don't feel pain! Afa raised us to be the wildest team in the WWF!", significance: 'Wild Samoan tag team promo referencing the Anoa\'i family legacy.' },
  ],
  700: [ // The Steiner Brothers
    { context: 'WWF Raw', year: 1993, quote: "Rick and Scott Steiner — the most decorated tag team in wrestling history! Steinerlines, Frankensteiners, suplexes — we do it all, and we do it better than anyone!", significance: 'Powerhouse tag team promo highlighting their amateur wrestling pedigree.' },
  ],
  706: [ // Jim Duggan
    { context: 'WWF Superstars', year: 1988, quote: "HOOOOOO! I'm Hacksaw Jim Duggan, and I'm a tough guy! I got my 2x4, I got Old Glory, and I'll fight anybody who disrespects the U-S-A! HOOOO!", significance: 'Patriotic everyman promo with signature catchphrase and 2x4.' },
  ],
  710: [ // Typhoon
    { context: 'WWF Superstars', year: 1991, quote: "I'm Typhoon — 400 pounds of natural disaster! When Earthquake and I form the Natural Disasters, there ain't a tag team alive that can withstand the storm!", significance: 'Monster tag team promo as half of the Natural Disasters.' },
  ],
  719: [ // The Godfather & D'Lo Brown
    { context: 'WWF Raw', year: 1999, quote: "The Godfather's got the hos, D'Lo's got the head bobble and the chest protector — together we're the most entertaining tag team in the Attitude Era!", significance: 'Attitude Era fun tag team promo.' },
  ],
  720: [ // Edge & Christian
    { context: 'WWF Raw', year: 2000, quote: "For the benefit of those with flash photography — Edge and Christian, the greatest tag team to ever set foot in a TLC match! Totally reeks of awesomeness!", significance: 'Comedic heel promo during their legendary TLC rivalry.' },
  ],
  732: [ // Sharmell
    { context: 'WWE SmackDown', year: 2005, quote: "My husband King Booker is royalty, and I am his queen! You will all bow down and show the proper respect, or face the consequences!", significance: 'Queen Sharmell promo as King Booker\'s regal manager.' },
  ],
  735: [ // Luna Vachon
    { context: 'WWF Raw', year: 1997, quote: "I am Luna Vachon — I come from a family of legends, and I am the most dangerous woman in the WWF. Fear is my weapon, and pain is my gift to you.", significance: 'Dark, intense promo from the second-generation wrestler.' },
  ],
  737: [ // Bull Nakano
    { context: 'WWF Raw', year: 1994, quote: "I have conquered every women's division in Japan. Now I come to the WWF to show Alundra Blayze what a real champion looks like.", significance: 'Japanese legend promo during her WWF Women\'s Championship rivalry with Blayze.' },
  ],
  744: [ // Kurt Angle & Chris Benoit
    { context: 'WWE SmackDown', year: 2002, quote: "Two Olympic-caliber athletes, two submission specialists, two of the most intense competitors alive. This tag team is a technical wrestling nightmare for everyone else.", significance: 'Technical wrestling duo promo during their SmackDown tag title run.' },
  ],
  745: [ // Rey Mysterio & Rob Van Dam
    { context: 'WWE SmackDown', year: 2005, quote: "619 meets the Five Star Frog Splash! Rey and RVD — the most exciting, high-flying tag team you'll ever see. Booyaka!", significance: 'High-flying duo promo combining two fan favorites.' },
  ],
  750: [ // Paul London & Brian Kendrick
    { context: 'WWE SmackDown', year: 2006, quote: "We held those tag titles for over a year because we're the most daring team in WWE. London and Kendrick fly higher and risk more than anyone.", significance: 'Record-setting tag champions promo highlighting their daredevil style.' },
  ],
  753: [ // Simon Dean
    { context: 'WWE SmackDown', year: 2005, quote: "Look at all you disgusting, out-of-shape fans! Simon Dean is here to whip you into shape with the Simon System. Results guaranteed — unlike your favorite wrestlers!", significance: 'Fitness guru heel gimmick promo insulting the audience.' },
  ],
  756: [ // Cesaro & Tyson Kidd
    { context: 'WWE Raw', year: 2015, quote: "Fact: Cesaro is the strongest pound-for-pound competitor in WWE. Fact: Tyson Kidd is a technical genius. Together, we are the tag team division's worst nightmare. FACT.", significance: 'Heel tag team promo with Tyson Kidd\'s signature catchphrase.' },
  ],
  759: [ // The Miz & John Morrison
    { context: 'WWE SmackDown', year: 2009, quote: "We are the most must-see tag team in WWE history! The Shaman of Sexy and the most must-see champion — be jealous!", significance: 'Hollywood heel duo promo during their tag championship reign.' },
  ],
  760: [ // Jillian Hall
    { context: 'WWE SmackDown', year: 2007, quote: "I'm going to sing for all of you whether you like it or not! When I win the Women's title, my first act as champion will be a concert! You're welcome!", significance: 'Bad singer gimmick promo that always got heat from the crowd.' },
  ],
  771: [ // Batista & Rey Mysterio
    { context: 'WWE SmackDown', year: 2005, quote: "The Animal and the Ultimate Underdog — we're an unlikely team, but Batista's power and Rey's speed make us unstoppable on SmackDown.", significance: 'Power-and-speed tag team promo before their eventual rivalry.' },
  ],
  777: [ // Sheamus & Cesaro
    { context: 'WWE Raw', year: 2017, quote: "We hated each other's guts. Then we had a best-of-seven series and earned each other's respect. Now The Bar is the standard for tag team wrestling.", significance: 'Rivals-turned-partners promo explaining their tag team origin.' },
  ],
  778: [ // The Street Profits
    { context: 'WWE Raw', year: 2020, quote: "We want the smoke! Montez Ford and Angelo Dawkins — The Street Profits are here to bring the party and take those tag team titles! We want ALL the smoke!", significance: 'High-energy catchphrase promo during their Raw Tag Team Championship run.' },
  ],
  780: [ // The Hurt Business
    { context: 'WWE Raw', year: 2020, quote: "Bobby Lashley, MVP, Cedric Alexander, Shelton Benjamin — The Hurt Business doesn't ask. We take. And business is always booming.", significance: 'Dominant faction promo establishing corporate-style dominance on Raw.' },
  ],
  781: [ // RKBro
    { context: 'WWE Raw', year: 2021, quote: "BRO! Randy, tell them! We're the most fun, most talented, most vibin' tag team in WWE history! RK-Bro! ...Randy? Randy, why are you looking at me like that?", significance: 'Comedy odd-couple promo capturing Riddle\'s enthusiasm and Orton\'s reluctance.' },
  ],
  783: [ // Otis & Chad Gable
    { context: 'WWE SmackDown', year: 2022, quote: "Alpha Academy is in session! Master Gable has taught me discipline, technique, and how to properly execute a rolling German suplex. THANK YOU, Master Gable!", significance: 'Student-teacher dynamic promo with Gable as the strict coach.' },
  ],
  784: [ // Maxxine Dupri
    { context: 'WWE SmackDown', year: 2023, quote: "Maximum Male Models — and now Maximum Female Models — are the pinnacle of style and athleticism. I am Maxxine Dupri, and I only represent the best.", significance: 'Fashion-forward manager promo for the Maximum Male Models stable.' },
  ],
  785: [ // Alpha Academy
    { context: 'WWE Raw', year: 2022, quote: "Shoosh! Master Gable demands silence! Alpha Academy has the highest wrestling IQ of any team. Otis, show them the suplex! Thank you, Otis. CLASS DISMISSED.", significance: 'Comedy heel promo with Chad Gable as an overbearing coach.' },
  ],
  786: [ // Karrion Kross & Scarlett
    { context: 'WWE SmackDown', year: 2022, quote: "Tick... tock. The Doomsday Clock is counting down, and when the hourglass runs empty, your time in WWE is over. Fall and pray.", significance: 'Dark, prophetic promo with Scarlett\'s hourglass entrance.' },
  ],
  787: [ // Hit Row
    { context: 'WWE SmackDown', year: 2022, quote: "Hit Row is in the building! Top Dolla, B-Fab, and Ashante — we spit bars and throw hands. If you ain't down with Hit Row, we got two words for ya!", significance: 'Hip-hop group entrance promo combining music and wrestling.' },
  ],
  790: [ // Lucha House Party
    { context: 'WWE Raw', year: 2019, quote: "Lucha! Lucha! Gran Metalik, Lince Dorado, and Kalisto — three masked luchadores bringing the fiesta to Raw every single week!", significance: 'High-flying lucha libre trio fan-favorite promo.' },
  ],
  798: [ // Power and Glory
    { context: 'WWF Superstars', year: 1990, quote: "Hercules has the power, Paul Roma has the glory! Together we are Power and Glory, and we just proved it by destroying the Rockers at SummerSlam!", significance: 'Heel tag team promo after their SummerSlam 1990 squash of The Rockers.' },
  ],
  800: [ // Strike Force
    { context: 'WWF Superstars', year: 1987, quote: "Tito Santana and Rick Martel — Strike Force! We won the tag titles because speed, teamwork, and heart always beats size and cheating!", significance: 'Babyface tag champions promo after winning WWF Tag Team Championship.' },
  ],
  801: [ // The Killer Bees
    { context: 'WWF Superstars', year: 1987, quote: "B. Brian Blair and Jumpin' Jim Brunzell — The Killer Bees! When we put on those masks, you can't tell us apart, and that's when the sting really hurts!", significance: 'Tag team promo referencing their masked confusion tactic.' },
  ],
  802: [ // The Fabulous Rougeau Brothers
    { context: 'WWF Superstars', year: 1988, quote: "We are Jacques and Raymond — The Fabulous Rougeau Brothers! We love the USA! ...Well, actually, we think it is quite inferior to Canada. Merci!", significance: 'Heel turn promo with their sarcastic All-American Boys gimmick.' },
  ],
  803: [ // The Colossal Connection
    { context: 'WWF Wrestling Challenge', year: 1990, quote: "Andre the Giant and Haku — managed by Bobby Heenan. The Colossal Connection is the most fearsome combination of size and savagery the WWF has ever assembled.", significance: 'Monster heel tag team promo managed by Bobby The Brain Heenan.' },
  ],
  804: [ // The Bolsheviks
    { context: 'WWF Superstars', year: 1988, quote: "Nikolai Volkoff and Boris Zhukov sing for the glory of Mother Russia! The Bolsheviks will crush the decadent American tag teams beneath our boots!", significance: 'Cold War-era Soviet heel gimmick promo.' },
  ],
  805: [ // Rhythm & Blues
    { context: 'WWF Superstars', year: 1990, quote: "The Honky Tonk Man and Greg Valentine — Rhythm & Blues! We've got the music, we've got the moves, and at WrestleMania we're gonna rock the house with Jimmy Hart!", significance: 'Musical gimmick tag team promo ahead of WrestleMania VI.' },
  ],
  806: [ // Repo Man
    { context: 'WWF Superstars', year: 1991, quote: "If you don't pay, I'll take it away! The Repo Man always collects what's owed. I'll repossess your pride, your dignity, and your championship!", significance: 'Sneaky villain gimmick promo about repossessing opponents\' dreams.' },
  ],
  807: [ // High Energy
    { context: 'WWF Superstars', year: 1992, quote: "Owen Hart and Koko B. Ware — High Energy! We bring the speed, we bring the neon, and we bring the excitement every time we hit that ring!", significance: 'Colorful high-flying babyface team promo.' },
  ],
  808: [ // Flash Funk
    { context: 'WWF Raw', year: 1997, quote: "Flash Funk is in the house! I've got the funkettes, I've got the moonsault, and I've got more style than this entire locker room! It's time to get funky!", significance: 'Flashy showman promo for 2 Cold Scorpio\'s WWF persona.' },
  ],
  810: [ // The Eliminators
    { context: 'ECW', year: 1997, quote: "Total Elimination — that's not just our finisher, that's what we do to every tag team. Perry Saturn and John Kronus will eliminate the competition.", significance: 'ECW tag team promo referencing their devastating Total Elimination finisher.' },
  ],
  813: [ // The Radicalz
    { context: 'WWF Raw', year: 2000, quote: "Benoit, Guerrero, Malenko, Saturn — four of WCW's best just jumped ship. We came to the WWF because we want real competition, and we're going to prove we belong.", significance: 'Historic WCW defection promo when four top stars arrived in the WWF.' },
  ],
  822: [ // Hurricane Helms & Rosey
    { context: 'WWE Raw', year: 2003, quote: "Stand back! There's a Hurricane coming through! And my S.H.I.T. — Super Hero In Training — Rosey is right behind me! Evil-doers beware!", significance: 'Superhero comedy duo promo with Hurricane\'s signature catchphrase.' },
  ],
  829: [ // Corey Graves
    { context: 'WWE Raw Commentary', year: 2022, quote: "I had to retire from the ring, but I will NEVER stop being the voice of WWE. From the announce table, I see everything — and I'm not afraid to call it like it is.", significance: 'Commentary desk promo about finding his voice after a career-ending injury.' },
  ],
  830: [ // Michael Cole
    { context: 'WWE Programming', year: 2020, quote: "I've been calling the action in WWE for over 25 years. From the Attitude Era to WrestleMania main events — it's been the privilege of a lifetime. Oh my!", significance: 'Veteran announcer promo reflecting on decades of play-by-play.' },
  ],
  1629: [ // Jordynne Grace
    { context: 'NXT', year: 2025, quote: "I'm the Juggernaut of women's wrestling. I've held titles everywhere, and now I'm bringing that powerhouse energy to NXT. Try to stop me.", significance: 'Powerhouse crossover debut from IMPACT/TNA to NXT.' },
  ],
  1630: [ // Danhausen
    { context: 'NXT', year: 2025, quote: "Very nice, very evil! Danhausen has arrived in NXT to curse everyone and collect all of the monies. Also, I'd like a blimp.", significance: 'Comedic villain character debut with signature catchphrases.' },
  ],
  1631: [ // Bronco Nima
    { context: 'NXT', year: 2025, quote: "Bronco Nima runs through the competition like a stallion. The tag division better watch out because my partner and I are built different.", significance: 'NXT tag team competitor debut promo.' },
  ],
  1632: [ // Dion Lennox
    { context: 'NXT', year: 2025, quote: "I got the size, I got the athleticism, and I got the hunger. Dion Lennox is here to show NXT what a real prospect looks like.", significance: 'Athletic big man debut promo in NXT.' },
  ],
  1633: [ // Elio LeFleur
    { context: 'NXT', year: 2025, quote: "Flashy, fearless, and fabulous — that's Elio LeFleur. NXT isn't ready for this much charisma in one package. The spotlight is mine.", significance: 'Flamboyant showman character debut in NXT.' },
  ],
  1634: [ // Saquon Shugars
    { context: 'NXT', year: 2025, quote: "I came from the gridiron to the squared circle. Saquon Shugars hits harder than a fourth-quarter sack. NXT, your new enforcer is here.", significance: 'Football-to-wrestling crossover athlete debut.' },
  ],
  1635: [ // Osiris Griffin
    { context: 'NXT', year: 2025, quote: "Named after a god, and I wrestle like one. Osiris Griffin brings power and mystique to NXT. Bow before greatness.", significance: 'Mythological-themed powerhouse debut promo.' },
  ],
  1636: [ // Shiloh Hill
    { context: 'NXT', year: 2025, quote: "I grew up scrapping in small towns where nobody gave me anything. Shiloh Hill earned every callous on these hands, and NXT is my proving ground.", significance: 'Blue-collar underdog debut promo.' },
  ],
  1637: [ // Kendal Grey
    { context: 'NXT', year: 2025, quote: "Fast, relentless, and ready to prove myself. Kendal Grey didn't come to NXT to wait in line — I came to cut to the front.", significance: 'Hungry young competitor debut promo.' },
  ],
  1638: [ // Niko Vance
    { context: 'NXT', year: 2025, quote: "Look at this physique. Niko Vance is the total package — size, speed, and an attitude that won't quit. NXT just got a major upgrade.", significance: 'Confident athletic specimen debut promo.' },
  ],
  1639: [ // Fahd Tuwaiq
    { context: 'NXT', year: 2025, quote: "I carry the pride of Saudi Arabia into every match. Fahd Tuwaiq is here to represent my people and show the world what Middle Eastern wrestlers can do.", significance: 'Saudi Arabian competitor debut representing his homeland.' },
  ],
  1640: [ // Skylar Raye
    { context: 'NXT', year: 2025, quote: "I'm a high-flyer with something to prove. Skylar Raye came to NXT because this is where the best women's wrestlers on the planet compete.", significance: 'Athletic women\'s division debut promo.' },
  ],
  1641: [ // Sirena Linton
    { context: 'NXT', year: 2025, quote: "Sirena means siren, and just like the legends, I'll lure you in with my presence and leave you wrecked. NXT's women's division has a new predator.", significance: 'Calculated heel character debut promo.' },
  ],
  1642: [ // Bayley Humphrey
    { context: 'NXT', year: 2025, quote: "Don't confuse me with the other Bayley — I'm carving my own path. Bayley Humphrey is here to build her own legacy from the ground up.", significance: 'Identity-establishing debut differentiating from the established star.' },
  ],
  1643: [ // JC Mateo
    { context: 'NXT', year: 2025, quote: "JC Mateo is smooth in the ring and even smoother on the mic. NXT, I'm about to become your new favorite must-see competitor.", significance: 'Charismatic all-rounder debut promo.' },
  ],
  1644: [ // Keanu Carver
    { context: 'NXT', year: 2025, quote: "I'm Keanu Carver — 6'5 and 270 pounds of raw power. They don't make them like me anymore. NXT's next big thing just walked through the door.", significance: 'Imposing big man debut promo.' },
  ],
  1645: [ // Kale Dixon
    { context: 'NXT', year: 2025, quote: "Technical wrestling is an art form, and Kale Dixon is the artist. I'll outwrestle anyone on this roster, hold for hold, move for move.", significance: 'Technical wrestling specialist debut promo.' },
  ],
  1647: [ // Jackson Drake
    { context: 'NXT', year: 2025, quote: "Jackson Drake doesn't do shortcuts. I grind, I train, and I outwork everybody. That's not a gimmick — that's just who I am.", significance: 'Hard-working babyface debut promo.' },
  ],
  1648: [ // Jasper Troy
    { context: 'NXT', year: 2025, quote: "Jasper Troy sees the world differently. While everyone else follows the rules, I'm rewriting them. NXT won't know what hit it.", significance: 'Unorthodox competitor debut with an unpredictable edge.' },
  ],
  1649: [ // Lainey Reid
    { context: 'NXT', year: 2025, quote: "I've been training for this my entire life. Lainey Reid is not just another name on the roster — I'm the future of the NXT women's division.", significance: 'Determined women\'s competitor debut promo.' },
  ],
  1650: [ // Royce Keys
    { context: 'NXT', year: 2025, quote: "Royce Keys unlocks potential that other wrestlers can only dream about. Speed, agility, ring IQ — I've got the total package, and NXT is my showcase.", significance: 'Versatile competitor debut promo.' },
  ],
  1651: [ // Blake Monroe
    { context: 'NXT', year: 2025, quote: "Blake Monroe brings the fight every single time. No excuses, no drama — just step in the ring and let's see who the better wrestler is.", significance: 'No-nonsense competitor debut promo.' },
  ],
  1653: [ // Ulka Sasaki
    { context: 'NXT', year: 2025, quote: "From the dojos of Japan to NXT — Ulka Sasaki brings the strong style and fighting spirit that runs in my blood. Respect the craft.", significance: 'Japanese strong style wrestler debut honoring his training roots.' },
  ],
  1654: [ // Adam Pearce
    { context: 'WWE Raw', year: 2023, quote: "I've been in this business for decades as a wrestler, a booker, and now a General Manager. Trust me — I've seen it all, and I won't tolerate chaos on my show.", significance: 'Authority figure promo establishing order as WWE GM.' },
  ],
  1658: [ // Dorian Van Dux
    { context: 'NXT', year: 2025, quote: "Dorian Van Dux is luxury personified. While you people shop at discount stores, I shop at boutiques. NXT needs someone with class, and here I am.", significance: 'Affluent heel character debut promo.' },
  ],
  1659: [ // Jax Presley
    { context: 'NXT', year: 2025, quote: "The name is Jax Presley, and I bring the rock and roll attitude to NXT. Turn it up to eleven because this show just got a whole lot louder.", significance: 'Rock star persona debut promo.' },
  ],
  1661: [ // PJ Vasa
    { context: 'NXT', year: 2025, quote: "PJ Vasa is all heart, all hustle. I might not be the biggest or the flashiest, but nobody in NXT will outwork me. That's a guarantee.", significance: 'Underdog workhorse debut promo.' },
  ],
  1662: [ // Rayne Leverkusen
    { context: 'NXT', year: 2025, quote: "European football taught me footwork and conditioning. NXT is teaching me how to channel that into destruction. Rayne Leverkusen is just getting started.", significance: 'European athlete crossover debut promo.' },
  ],
  1663: [ // Shady Elnahas
    { context: 'NXT', year: 2025, quote: "They call me Shady for a reason — you never know what I'm going to do next. Unpredictable, dangerous, and loving every second of it.", significance: 'Unpredictable wildcard character debut promo.' },
  ],
  1664: [ // Cyrus
    { context: 'NXT', year: 2025, quote: "One name. One mission. Cyrus is here to dominate NXT, and I don't need a last name for people to remember who destroyed them.", significance: 'Mysterious single-name competitor debut promo.' },
  ],
  1665: [ // Mike Cunningham
    { context: 'NXT', year: 2025, quote: "Mike Cunningham is a student of the game. I've studied every champion, every match, every hold. Now it's time to put that knowledge into practice.", significance: 'Studious technical competitor debut promo.' },
  ],
  1666: [ // Sam Holloway
    { context: 'NXT', year: 2025, quote: "Sam Holloway brings grit and determination to NXT. Where I come from, you either fight or you fade away — and I don't plan on fading.", significance: 'Gritty survivor mentality debut promo.' },
  ],

  // ── SESSION 38: Mid-Card & Women's Division Expansion ──

  1667: [ // The Mexicools
    { context: 'SmackDown Debut', year: 2005, quote: "We came here on our lawnmowers, but don't let that fool you — we're the best cruiserweights in the world!", significance: 'Mexicools faction debut promo on SmackDown.' },
    { context: 'SmackDown', year: 2005, quote: "You want entertainment? We'll give you entertainment. But we'll also give you the best lucha libre this side of Mexico City.", significance: 'Established their in-ring credibility beyond the gimmick.' },
    { context: 'SmackDown', year: 2006, quote: "We didn't come from WCW and ECW to be a joke. We came to show the world what real high-flying is all about.", significance: 'Referenced their pedigree from WCW and ECW cruiserweight divisions.' },
  ],

};

export default PROMOS;
