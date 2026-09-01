const EXTRA = {
  3: { // Bob Backlund
    injuries: [{ year: "1997", injury: "Character transformation", cause: "Returned as a deranged, bowtie-wearing madman who applied the crossface chickenwing to anyone nearby. His transformation from wholesome champion to unhinged heel was brilliant character work." }],
    tagTeams: [], factions: []
  },
  4: { // Hulk Hogan
    injuries: [
      { year: "1981", injury: "Knee surgery (multiple)", cause: "Years of wear from performing as a big man — cartilage damage accumulated through the early 80s." },
      { year: "2002–2003", injury: "Hip issues", cause: "Chronic hip deterioration from decades of performing the leg drop on hard canvas." },
      { year: "2025", injury: "Died — heart attack", cause: "Hulk Hogan died on July 24, 2025 at age 71 at his home in Clearwater, Florida. His cause of death was ruled as acute myocardial infarction (heart attack). He had also been battling chronic lymphocytic leukemia and had a history of atrial fibrillation." }
    ],
    tagTeams: [
      { name: "The Mega Powers", partners: ["Randy Savage"], eras: ["golden"], notes: "Hogan & Savage as faces — managed by Miss Elizabeth. Broke up when Hogan caught Elizabeth during a ringside spot and Savage snapped with jealousy." }
    ],
    factions: [
      { name: "nWo (WCW)", members: ["Hollywood Hogan", "Scott Hall", "Kevin Nash"], eras: ["new-gen"], notes: "Founded the New World Order in WCW after the famous Bash at the Beach 1996 heel turn. Not a WWE faction but defines his legacy." }
    ]
  },
  6: { // Andre the Giant
    injuries: [
      { year: "1986–1987", injury: "Acromegaly complications / back surgery", cause: "The gigantism condition that made him famous also deteriorated his spine and joints. By WM3 he was in significant pain every night." },
      { year: "1993", injury: "Died — congestive heart failure", cause: "André the Giant died on January 27, 1993 at age 46 in his sleep at a hotel in Paris, France. His death was caused by congestive heart failure, a complication of the acromegaly he had lived with his entire life." }
    ],
    tagTeams: [
      { name: "Colossal Connection", partners: ["Haku"], eras: ["golden"], notes: "Tag team managed by Bobby Heenan. Won the tag titles from Demolition." }
    ],
    factions: [{ name: "Heenan Family", members: ["Bobby Heenan", "Mr. Perfect", "Rick Rude"], eras: ["golden"], notes: "The most prestigious manager's stable of the Golden Era." }]
  },
  8: { // Mr. Perfect
    injuries: [
      { year: "1991–1992", injury: "Lower back injury", cause: "Severe back problems forced him to miss most of 1991 and work as a manager/color commentator. The pain was reportedly debilitating." },
      { year: "1993", injury: "Back problems recurrence", cause: "Back issues re-emerged and contributed to his departure from WWF." },
      { year: "2003", injury: "Died — acute cocaine intoxication", cause: "Curt Hennig died on February 10, 2003 at age 44 from acute cocaine intoxication. He was found in a hotel room in Brandon, Florida. His death was a devastating loss — he was one of the most gifted all-around performers in wrestling history." }
    ],
    tagTeams: [
      { name: "The Quebecers' opponents / tag utility", partners: ["Ric Flair"], eras: ["new-gen"] }
    ], factions: [{ name: "Heenan Family", members: ["Bobby Heenan", "Andre the Giant", "Rick Rude", "Arn Anderson"], eras: ["golden"], notes: "The crown jewel of Bobby Heenan's stable." }]
  },
  9: { // Ted DiBiase
    injuries: [],
    tagTeams: [
      { name: "Money Inc.", partners: ["IRS (Irwin R. Schyster)"], eras: ["golden"], notes: "Tag team of the two richest, cheapest men in the WWF. Multiple tag title reigns." }
    ],
    factions: []
  },
  12: { // Ultimate Warrior
    injuries: [
      { year: "1992", injury: "Steroid suspension", cause: "WWF's first steroid policy led to a brief suspension. He was also released after WM8 over pay disputes." },
      { year: "2014", injury: "Died — heart attack", cause: "The Ultimate Warrior (James Hellwig) died on April 8, 2014 at age 54 from a massive heart attack. He collapsed outside a hotel in Arizona, just three days after being inducted into the WWE Hall of Fame and giving an emotional speech on Raw." }
    ],
    tagTeams: [], factions: []
  },
  17: { // Brutus Beefcake
    injuries: [
      { year: "1990", injury: "Severe facial fractures", cause: "A parasailing accident crushed his face — titanium plates were inserted. He missed over two years. His comeback was built around his real-life friendship with Hogan." }
    ],
    tagTeams: [
      { name: "The Dream Team", partners: ["Greg Valentine"], eras: ["golden"], notes: "Tag team that held the WWF Tag Titles. Managed by Luscious Johnny V." }
    ],
    factions: []
  },
  25: { // Owen Hart
    injuries: [
      { year: "1999", injury: "Fatal rigging accident (not a wrestling injury)", cause: "Died on May 23, 1999 when the harness used for a planned entrance drop at Over the Edge PPV malfunctioned. He fell 78 feet into the ring. One of the darkest days in wrestling history." }
    ],
    tagTeams: [
      { name: "The Hart Foundation (tag)", partners: ["Jim Neidhart"], eras: ["new-gen"], notes: "Won the tag titles together. Classic family team." },
      { name: "New Foundation", partners: ["Jim Neidhart"], eras: ["new-gen"], notes: "Brief reunion teaming." },
      { name: "High Energy", partners: ["Koko B. Ware"], eras: ["new-gen"], notes: "Colorful tag team in 1992 before Owen's singles push." }
    ],
    factions: [{ name: "Hart Foundation (1997 stable)", members: ["Bret Hart", "Davey Boy Smith", "Jim Neidhart", "Brian Pillman"], eras: ["new-gen"], notes: "Canada's heroes, America's villains. The most patriotically complex faction of the era." }]
  },
  26: { // British Bulldog
    injuries: [
      { year: "1987", injury: "Knee surgery", cause: "Knee injury during his tag team run with Dynamite Kid." },
      { year: "1999", injury: "Back injury / steroid-related complications", cause: "Serious back problems near the end of his career. His health deteriorated rapidly." },
      { year: "2002", injury: "Died — heart attack", cause: "Davey Boy Smith died on May 18, 2002 at age 39 from a heart attack while on vacation in Invermere, British Columbia. His death was attributed to years of steroid use and the physical toll of his wrestling career." }
    ],
    tagTeams: [
      { name: "British Bulldogs", partners: ["Dynamite Kid"], eras: ["golden"], notes: "One of the finest tag teams of the Golden Era. Won the titles at WM2." }
    ],
    factions: [{ name: "Hart Foundation (1997 stable)", members: ["Bret Hart", "Owen Hart", "Jim Neidhart", "Brian Pillman"], eras: ["new-gen"], notes: "His inclusion validated the faction's credibility." }]
  },
  30: { // Triple H
    injuries: [
      { year: "2001", injury: "Torn left quadriceps", cause: "Tore his quad during a tag team match on Raw in May 2001. Returned in January 2002 to a massive pop — one of the great return reactions." },
      { year: "2007", injury: "Torn right quadriceps", cause: "Tore his other quad during a match with Umaga on Raw. Required the same surgery he'd had in 2001 on the other leg." }
    ],
    tagTeams: [
      { name: "D-Generation X", partners: ["Shawn Michaels"], eras: ["attitude"], notes: "Co-founded DX with HBK. The most culturally impactful faction of the Attitude Era." },
      { name: "Evolution", partners: ["Ric Flair", "Batista", "Randy Orton"], eras: ["ruthless"], notes: "The most dominant heel stable of the Ruthless Aggression era. Past, Present, and Future." },
      { name: "Two-Man Power Trip", partners: ["Stone Cold Steve Austin"], eras: ["attitude"], notes: "Brief alliance in 2001 holding multiple titles. Ended by Triple H's quad tear." }
    ],
    factions: [
      { name: "D-Generation X", members: ["Shawn Michaels", "X-Pac", "Road Dogg", "Billy Gunn", "Chyna"], eras: ["attitude"], notes: "The anti-establishment force of the Attitude Era." },
      { name: "Evolution", members: ["Ric Flair", "Batista", "Randy Orton"], eras: ["ruthless"], notes: "Led as the dominant faction of 2003–2004." },
      { name: "The Authority", members: ["Stephanie McMahon", "Seth Rollins"], eras: ["reality"], notes: "Corporate overlords running WWE from 2013–2016." }
    ]
  },
  31: { // Stone Cold
    injuries: [
      { year: "1997", injury: "Broken neck (cervical spinal stenosis)", cause: "Owen Hart's piledriver at SummerSlam 1997 broke his neck. Austin was briefly paralyzed before getting his feeling back. He wrestled with the injury for years before it forced his retirement." },
      { year: "2002–2003", injury: "Knee surgeries / broken neck recurrence", cause: "The cumulative damage from his neck and knee led to his permanent retirement from full-time competition in 2003." }
    ],
    tagTeams: [
      { name: "The Two-Man Power Trip", partners: ["Triple H"], eras: ["attitude"], notes: "Short-lived heel alliance holding the Tag, IC and WWF titles simultaneously. Ended by HHH's quad injury." },
      { name: "Team Austin (various)", partners: ["The Rock"], eras: ["attitude"], notes: "Multiple unlikely tag pairings including with Shawn Michaels and even The Rock." }
    ],
    factions: []
  },
  32: { // The Rock
    injuries: [
      { year: "2013", injury: "Torn abdominal muscles / torn adductor", cause: "Tore his abductor longus, adductor brevis, and part of his quadriceps during his second WWE Championship match against CM Punk at Royal Rumble 2013. Finished the match." }
    ],
    tagTeams: [
      { name: "Rock 'n' Sock Connection", partners: ["Mankind"], eras: ["attitude"], notes: "The most entertaining tag team of the Attitude Era. Their mismatched chemistry was comedy gold. This Is Your Life segment." },
      { name: "Nation of Domination (leadership)", partners: ["D'Lo Brown", "Mark Henry", "Faarooq (initially)"], eras: ["attitude"], notes: "Overthrew Faarooq to lead the Nation, then dissolved it for solo run." }
    ],
    factions: [
      { name: "Nation of Domination", members: ["D'Lo Brown", "Mark Henry", "Faarooq", "Kama Mustafa"], eras: ["attitude"], notes: "The Black Power stable The Rock took over from Faarooq." },
      { name: "The Bloodline (family)", members: ["Roman Reigns", "The Usos", "Solo Sikoa"], eras: ["modern"], notes: "The Rock returned in 2024 as the Final Boss — head of the Anoa'i family table." }
    ]
  },
  33: { // Undertaker
    injuries: [
      { year: "1994", injury: "Orbital bone fracture", cause: "His eye socket was shattered during a match. He wore a protective mask upon return." },
      { year: "2010", injury: "Hip replacement / broken orbital bone / torn pectoral", cause: "Multiple injuries accumulated. His hip was worn out requiring surgery. He also suffered a concussion from a landing." },
      { year: "2013", injury: "Broken nose / torn bicep", cause: "Broken nose at WM29. Torn bicep during his feud with Brock Lesnar." }
    ],
    tagTeams: [
      { name: "Brothers of Destruction", partners: ["Kane"], eras: ["attitude", "ruthless"], notes: "When the brothers united it was always an event. Multiple tag title reigns. Their chemistry was undeniable despite the supernatural absurdity." }
    ],
    factions: [
      { name: "Ministry of Darkness", members: ["Paul Bearer", "Viscera", "Mideon", "Acolytes (Bradshaw/Farooq)"], eras: ["attitude"], notes: "A genuinely unsettling cult stable that kidnapped Stephanie McMahon." },
      { name: "Corporate Ministry", members: ["Vince McMahon", "Shane McMahon", "various Corporation members"], eras: ["attitude"], notes: "The merger of the Ministry and Corporation was a massive power play that dominated 1999." }
    ]
  },
  34: { // HBK
    injuries: [
      { year: "1995–1996", injury: "Knee surgery", cause: "Chronic knee problems. He had surgery in late 1995 and pushed through his IC and WWF title runs in significant pain." },
      { year: "1998", injury: "Severe back injury — two herniated discs and a compressed vertebra", cause: "A brutal bump into the casket during the Casket Match against The Undertaker at Royal Rumble 1998 destroyed his back. Required spinal fusion surgery. He would not wrestle again for 4 years." },
      { year: "2010", injury: "Torn right pectoral", cause: "Tore his pectoral during a ladder match at Bragging Rights. Required surgery and a brief absence." }
    ],
    tagTeams: [
      { name: "The Rockers", partners: ["Marty Jannetty"], eras: ["golden", "new-gen"], notes: "One of the most beloved tag teams of the late 80s. The breakup — Michaels throwing Jannetty through the Barbershop window — launched his solo career." },
      { name: "D-Generation X", partners: ["Triple H"], eras: ["attitude", "pg"], notes: "Co-founded DX. Multiple reunion runs with Triple H." }
    ],
    factions: [
      { name: "D-Generation X", members: ["Triple H", "X-Pac", "Road Dogg", "Billy Gunn", "Chyna"], eras: ["attitude"], notes: "Founded with Triple H — the original DX was more sexually provocative; Helmsley's version after HBK's injury was more of an outlaw gang." }
    ]
  },
  35: { // Chris Jericho
    injuries: [
      { year: "2010", injury: "Torn muscle / various cumulative", cause: "Multiple minor injuries accumulated over 20+ years of wrestling. Jericho has been remarkably durable given the physical toll." }
    ],
    tagTeams: [
      { name: "Y2J & Benoit", partners: ["Chris Benoit"], eras: ["attitude"], notes: "Brief but excellent tag partnership. Won the Tag Titles together." },
      { name: "The Best Friends", partners: ["Big Show", "Christian"], eras: ["pg", "reality"], notes: "Multiple unlikely tag pairings throughout his career — Big Show, Christian, etc." }
    ],
    factions: [
      { name: "The List of Jericho (conceptual)", members: ["Anyone on the list"], eras: ["reality"], notes: "Not a faction but a conceptual group — anyone who crossed Jericho ended up on The List." },
      { name: "Inner Circle (AEW)", members: ["MJF", "Sammy Guevara", "Jake Hager", "Santana & Ortiz"], eras: ["modern"], notes: "His AEW faction — not WWE but defines his modern legacy." }
    ]
  },
  36: { // Kurt Angle
    injuries: [
      { year: "2003", injury: "Neck surgery", cause: "Years of amateur and professional wrestling took a severe toll on his neck. He had major cervical spine surgery in 2003." },
      { year: "2006", injury: "Neck problems recurrence", cause: "Re-injured his neck, contributing to his departure from WWE for TNA where the schedule was lighter." }
    ],
    tagTeams: [
      { name: "Team Angle", partners: ["Charlie Haas", "Shelton Benjamin"], eras: ["ruthless"], notes: "Managed the World's Greatest Tag Team as their mentor figure." }
    ],
    factions: [
      { name: "Team Angle", members: ["Charlie Haas", "Shelton Benjamin"], eras: ["ruthless"], notes: "SmackDown stable that dominated the tag division in 2003." }
    ]
  },
  37: { // Steve Blackman
    injuries: [
      { year: "1988–1991", injury: "Malaria / near-death illness", cause: "Contracted malaria while training in Africa/Pakistan. Was hospitalized repeatedly and came close to death — missed what should have been his prime years. His arrival in WWF was delayed years by the illness." }
    ],
    tagTeams: [
      { name: "Al Snow & Steve Blackman (Head Cheese)", partners: ["Al Snow"], eras: ["attitude"], notes: "An unlikely comedy tag pairing. Al Snow named them 'Head Cheese' — Blackman was mortified, which made it funnier." }
    ],
    factions: []
  },
  38: { // Crash Holly
    injuries: [
      { year: "2003", injury: "Passed away", cause: "Crash Holly died on November 6, 2003 at age 32 from an accidental drug overdose. His death came less than a year after his WWE release." }
    ],
    tagTeams: [
      { name: "Holly cousins", partners: ["Hardcore Holly", "Molly Holly"], eras: ["attitude"], notes: "The Holly family stable — Hardcore and Crash as cousins, Molly as another 'cousin.'" }
    ],
    factions: []
  },
  39: { // Rikishi
    injuries: [
      { year: "2000", injury: "Back injury", cause: "Cumulative back stress from his size and the physicality of his bumps — particularly the seated sentons." }
    ],
    tagTeams: [
      { name: "Too Cool", partners: ["Scotty 2 Hotty", "Grandmaster Sexay"], eras: ["attitude"], notes: "The greatest dancing stable in wrestling history. Post-match dance celebrations with Rikishi were must-see TV." }
    ],
    factions: []
  },
  40: { // Scotty 2 Hotty
    injuries: [
      { year: "2001–2002", injury: "Broken leg", cause: "Broke his leg in a house show match. Missed about a year." }
    ],
    tagTeams: [
      { name: "Too Cool", partners: ["Grandmaster Sexay", "Rikishi"], eras: ["attitude"], notes: "The worm was ridiculous. The dancing was joyful. Everyone loved Too Cool." },
      { name: "Too Much (pre-Too Cool)", partners: ["Brian Christopher"], eras: ["attitude"], notes: "The earlier, more heel incarnation before adding Rikishi and the dancing element." }
    ],
    factions: []
  },
  41: { // Grandmaster Sexay
    injuries: [{ year: "2018", injury: "Died in police custody", cause: "Brian Christopher Lawler died on July 29, 2018 at age 46 while in custody at the Hardeman County jail in Tennessee." }],
    tagTeams: [
      { name: "Too Cool", partners: ["Scotty 2 Hotty", "Rikishi"], eras: ["attitude"], notes: "Son of Jerry Lawler — it was a secret on TV. His goggles and dancing made him beloved." },
      { name: "Too Much", partners: ["Scotty 2 Hotty"], eras: ["attitude"], notes: "The pre-Too Cool team with Brian Christopher." }
    ],
    factions: []
  },
  42: { // William Regal
    injuries: [
      { year: "1994–1996", injury: "Substance abuse / suspension", cause: "Regal has been open about his drug and alcohol addiction during his WCW years. He has credited WWE's drug policy and his eventual sobriety as saving his career and life." }
    ],
    tagTeams: [
      { name: "Un-Americans", partners: ["Lance Storm", "Test", "Christian"], eras: ["ruthless"], notes: "Anti-American heel stable during the post-9/11 period." },
      { name: "Regal & Tajiri", partners: ["Tajiri"], eras: ["ruthless"], notes: "Excellent comedy pairing — the pompous aristocrat and the Japanese buzzsaw had wonderful chemistry." },
      { name: "Regal & Eugene", partners: ["Eugene"], eras: ["ruthless"], notes: "His growing affection for Eugene led to a face turn — genuinely touching storytelling." }
    ],
    factions: [
      { name: "Un-Americans", members: ["Lance Storm", "Test", "Christian"], eras: ["ruthless"], notes: "Post-invasion anti-American heel stable." }
    ]
  },
  43: { // Mankind
    injuries: [
      { year: "1998", injury: "Hell in a Cell injuries", cause: "At King of the Ring 1998, Undertaker threw him off the top of the HIAC (16 feet to the announce table), then chokeslammed him through the roof. He suffered a dislocated shoulder, broken ribs, a tooth through his lip, and a concussion. He got up and kept going." },
      { year: "Throughout career", injury: "Ear torn off, multiple concussions, dislocated jaw", cause: "Mick Foley's career was defined by taking punishment. His ear was torn off in a match in Germany. He has spoken extensively about the cumulative neurological damage from his career." }
    ],
    tagTeams: [
      { name: "Rock 'n' Sock Connection", partners: ["The Rock"], eras: ["attitude"], notes: "The most entertaining tag team of the Attitude Era. Their This Is Your Life segment drew the highest-rated Raw segment ever." }
    ],
    factions: []
  },
  44: { // Kane
    injuries: [
      { year: "2001", injury: "Torn triceps", cause: "Injured his triceps during a match. Required surgery and a brief absence." }
    ],
    tagTeams: [
      { name: "Brothers of Destruction", partners: ["Undertaker"], eras: ["attitude", "ruthless"], notes: "The ultimate monster tag team. Multiple tag title reigns. Their reunion pops were always electric." },
      { name: "Team Hell No", partners: ["Daniel Bryan"], eras: ["pg"], notes: "The most bizarrely effective tag team in recent memory. Their anger management segments were some of the funniest content in years." }
    ],
    factions: [
      { name: "Corporate Kane (The Authority)", members: ["Triple H", "Stephanie McMahon", "Seth Rollins"], eras: ["reality"], notes: "Director of Operations for The Authority while simultaneously being a monster in the ring." }
    ]
  },
  45: { // Bret Hart
    injuries: [
      { year: "1999", injury: "Post-concussion syndrome", cause: "A kick from Goldberg in WCW gave him a severe concussion that went undiagnosed and untreated. He continued wrestling and suffered more concussions, resulting in debilitating post-concussion syndrome that ended his career." },
      { year: "2002", injury: "Stroke", cause: "Suffered a stroke in 2002 while cycling. He recovered but it was a serious health scare." }
    ],
    tagTeams: [
      { name: "Hart Foundation (tag)", partners: ["Jim Neidhart"], eras: ["golden"], notes: "The original Hart Foundation tag team — classic Golden Era heels who became beloved faces." }
    ],
    factions: [
      { name: "Hart Foundation (1997 stable)", members: ["Owen Hart", "British Bulldog", "Jim Neidhart", "Brian Pillman"], eras: ["new-gen"], notes: "The most patriotically complex angle in wrestling history — heels in the US, heroes in Canada." }
    ]
  },
  47: { // Edge
    injuries: [
      { year: "2003", injury: "Torn Achilles tendon", cause: "Tore his Achilles tendon during a match — missed 9 months." },
      { year: "2005", injury: "Torn pectoral muscle", cause: "Tore his pectoral muscle during a match with Batista. Required surgery." },
      { year: "2011", injury: "Cervical spinal stenosis — forced retirement", cause: "Doctors told him one more match could leave him permanently paralyzed. Retired with tears at WrestleMania 27. Remarkably returned in 2020 with medical clearance." }
    ],
    tagTeams: [
      { name: "Edge & Christian", partners: ["Christian"], eras: ["attitude"], notes: "One of the greatest tag teams ever. Brothers (later revealed to be kayfabe). 7 tag title reigns. The 5-second pose. 'Spinaroonie? No — E&C pose for the benefit of those with flash photography.'" },
      { name: "The Brood", partners: ["Christian", "Gangrel"], eras: ["attitude"], notes: "Vampire stable — blood baths, gothic entrance through fire ring. Brief but visually iconic." },
      { name: "La Familia", partners: ["Vickie Guerrero", "Curt Hawkins", "Zack Ryder"], eras: ["ruthless"], notes: "SmackDown stable during his dominant 2008 title reign." }
    ],
    factions: [
      { name: "The Brood", members: ["Gangrel", "Christian"], eras: ["attitude"], notes: "Gothic vampire stable." },
      { name: "Judgment Day (founded)", members: ["Finn Bálor", "Rhea Ripley", "Damian Priest"], eras: ["modern"], notes: "He reformed and named the Judgment Day stable in 2022 — they then kicked him out of his own creation." }
    ]
  },
  48: { // Christian
    injuries: [
      { year: "2011", injury: "Concussion", cause: "Suffered a concussion that led to him losing the WHC to Randy Orton just two days after winning it — genuinely infuriating booking made worse by the timing." },
      { year: "2014–2017", injury: "Concussion protocol / retirement", cause: "Multiple concussions led to extended absences and eventual retirement from full-time competition." }
    ],
    tagTeams: [
      { name: "Edge & Christian", partners: ["Edge"], eras: ["attitude"], notes: "One of the greatest tag teams in wrestling history." },
      { name: "The Brood", partners: ["Edge", "Gangrel"], eras: ["attitude"], notes: "The gothic vampire stable." },
      { name: "CLB (Creepy Little Bastard) solo runs", partners: [], eras: ["ruthless"], notes: "Solo heel runs after leaving WWE for TNA." }
    ],
    factions: [
      { name: "The Brood", members: ["Edge", "Gangrel"], eras: ["attitude"], notes: "Their blood bath entrance became an iconic image of the Attitude Era." }
    ]
  },
  72: { // Eddie Guerrero
    injuries: [
      { year: "2002", injury: "Drug/alcohol rehabilitation", cause: "Eddie entered rehabilitation for his well-documented substance abuse issues. His recovery and return were one of the great redemption stories in wrestling." },
      { year: "2005", injury: "Passed away", cause: "Eddie Guerrero died on November 13, 2005 at age 38. He was found unresponsive in his hotel room. The cause was acute heart failure from arteriosclerotic cardiovascular disease, accelerated by his years of substance abuse." }
    ],
    tagTeams: [
      { name: "Los Guerreros", partners: ["Chavo Guerrero Jr."], eras: ["ruthless"], notes: "Lie, cheat, and steal as a tag team. Their cheating antics were comedy gold." },
      { name: "Radicalz", partners: ["Chris Benoit", "Perry Saturn", "Dean Malenko"], eras: ["attitude"], notes: "The WCW defection. Four men who left WCW on the same night and debuted together attacking the Rock." }
    ],
    factions: [
      { name: "The Radicalz", members: ["Chris Benoit", "Perry Saturn", "Dean Malenko"], eras: ["attitude"], notes: "The biggest talent raid from WCW — all four debuted the same night." }
    ]
  },
  75: { // John Cena
    injuries: [
      { year: "2007", injury: "Torn pectoral muscle", cause: "Tore his right pectoral tendon off the bone during a match on Raw. Surgically repaired and returned in just 7 months — remarkably fast." },
      { year: "2008", injury: "Herniated disc / torn pectoral (second)", cause: "Herniated a disc in his neck requiring surgery. Returned from another serious injury to win the World title at Survivor Series 2008." }
    ],
    tagTeams: [
    ],
    factions: []
  },
  76: { // Batista
    injuries: [
      { year: "2006", injury: "Torn triceps", cause: "Tore his triceps during a house show match. Required surgery and 6 months off — robbed him of momentum at the peak of his run." },
      { year: "2009–2010", injury: "Hamstring tear / biceps tear", cause: "Tore his hamstring in 2009. Then tore his biceps in 2010. The cumulative damage contributed to his retirement." }
    ],
    tagTeams: [],
    factions: [
      { name: "Evolution", members: ["Triple H", "Ric Flair", "Randy Orton"], eras: ["ruthless"], notes: "The faction's enforcer who outgrew his role. His face turn against Triple H at WM21 was massive." }
    ]
  },
  77: { // Randy Orton
    injuries: [
      { year: "2005", injury: "Shoulder surgery", cause: "Recurring shoulder problems from the physical demands of his style." },
      { year: "2015", injury: "Shoulder surgery (again)", cause: "Re-injured the same shoulder. The shoulder was a chronic issue throughout his career." },
      { year: "2023", injury: "Spinal fusion surgery", cause: "Required spinal fusion surgery — missed over a year. His return in late 2023 was one of the most warmly received comebacks in recent memory." }
    ],
    tagTeams: [
      { name: "RK-BRO", partners: ["Matt Riddle"], eras: ["modern"], notes: "The most unexpectedly beloved odd-couple tag team in years. Their chemistry was genuine and their comedy segments were must-see." },
      { name: "Legacy", partners: ["Cody Rhodes", "Ted DiBiase Jr."], eras: ["pg"], notes: "Third-generation stable. Orton as the veteran leader with the sons of legends." }
    ],
    factions: [
      { name: "Evolution", members: ["Triple H", "Ric Flair", "Batista"], eras: ["ruthless"], notes: "The Legend Killer's home stable before his face turn." },
      { name: "Legacy", members: ["Cody Rhodes", "Ted DiBiase Jr."], eras: ["pg"], notes: "Second-generation stable he led." }
    ]
  },
  79: { // Brock Lesnar
    injuries: [
      { year: "2004", injury: "Diverticulitis (career pause)", cause: "Developed a serious gastrointestinal condition that contributed to his sudden WWE departure in 2004 to pursue an NFL career." }
    ],
    tagTeams: [], factions: []
  },
  49: { // Hardy Boyz Jeff
    injuries: [
      { year: "2009", injury: "Substance abuse issues / multiple absences", cause: "Jeff's well-documented substance abuse issues led to several WWE absences and releases. His personal struggles are intertwined with his career timeline." },
      { year: "Various", injury: "Multiple — shoulder, knee, neck", cause: "A career defined by daredevil risk-taking inevitably accumulates serious physical damage. His Swanton Bomb from heights caused long-term back and shoulder damage." }
    ],
    tagTeams: [
      { name: "The Hardy Boyz", partners: ["Matt Hardy"], eras: ["attitude", "ruthless"], notes: "One of the defining tag teams of their era. The Hardys vs Dudleys vs E&C TLC and ladder matches created the modern ladder match genre." }
    ],
    factions: []
  },
  50: { // Matt Hardy
    injuries: [
      { year: "2011", injury: "Substance abuse / health issues", cause: "Matt's personal struggles with substance abuse mirrored his brother's issues and led to his WWE departure." }
    ],
    tagTeams: [
      { name: "The Hardy Boyz", partners: ["Jeff Hardy"], eras: ["attitude", "ruthless"], notes: "One of wrestling's greatest tag teams. Multiple tag title reigns, defining TLC matches." }
    ],
    factions: []
  },
  128: { // Cody Rhodes
    injuries: [
      { year: "2022", injury: "Torn pectoral muscle", cause: "Tore his right pectoral tendon completely off the bone two days before his Hell in a Cell match against Seth Rollins. He competed anyway — covered in bruising and swelling. One of the most gutsy performances in recent wrestling history." }
    ],
    tagTeams: [
      { name: "Legacy", partners: ["Randy Orton", "Ted DiBiase Jr."], eras: ["pg"], notes: "Third-generation stable in their younger days." },
      { name: "Rhodes Scholars", partners: ["Damien Sandow"], eras: ["pg"], notes: "Intellectual heel tag pairing — surprisingly good chemistry." }
    ],
    factions: [
      { name: "Legacy", members: ["Randy Orton", "Ted DiBiase Jr."], eras: ["pg"], notes: "Third-generation faction before his singles push and eventual departure." }
    ]
  },
  140: { // Rhea Ripley
    injuries: [
      { year: "2024", injury: "Shoulder injury", cause: "Suffered a shoulder injury that forced her to relinquish the Women's World Championship in May 2024 — vacating an almost 400-day reign. One of the most genuinely unfortunate title losses in recent memory." }
    ],
    tagTeams: [],
    factions: [
      { name: "Judgment Day", members: ["Finn Bálor", "Damian Priest", "Dominik Mysterio", "later JD McDonagh"], eras: ["modern"], notes: "The faction's heart. 'Mami' to Dominik Mysterio — her dynamic with Dirty Dom was the most entertaining subplot on Raw." }
    ]
  },

  // ── GOLDEN & WWWF ERA ─────────────────────────────────────────
  2: { // Pedro Morales
    injuries: [
      { year: "2019", injury: "Died — Parkinson's disease", cause: "Pedro Morales died on February 12, 2019 at age 76 from complications of Parkinson's disease. He was the first Triple Crown Champion in WWE history, holding the WWWF Championship, IC Championship, and Tag Team Championship. A trailblazer for Latino wrestlers." }
    ],
    tagTeams: [{ name: "Pedro Morales & Rocky Johnson", partners: ["Rocky Johnson"], eras: ["wwwf"], notes: "Won the WWF Tag Titles together in 1983 — two cultural icons of the era." }],
    factions: []
  },
  10: { // Jake Roberts
    injuries: [{ year: "1990s", injury: "Substance abuse / career interruptions", cause: "Jake has been open about his battles with addiction throughout and after his career. Multiple WWE absences tied to these struggles." }],
    tagTeams: [],
    factions: []
  },
  11: { // Ricky Steamboat
    injuries: [{ year: "1987", injury: "Kayfabe throat injury from Savage", cause: "Savage dropped him throat-first on the barricade — sold so convincingly that the angle was used to build their WM3 Intercontinental title match, widely considered one of the greatest matches ever." }],
    tagTeams: [{ name: "Steamboat & Youngblood", partners: ["Jay Youngblood"], eras: ["wwwf"], notes: "NWA tag team before his WWF years — one of the finest babyface tag teams of the early 80s." }],
    factions: []
  },
  13: { // Honky Tonk Man
    injuries: [],
    tagTeams: [{ name: "Honky Tonk Man & Greg Valentine (Rhythm & Blues)", partners: ["Greg Valentine"], eras: ["golden"], notes: "Elvis-and-rock themed tag team. Performed a live concert at WM6. Managed by Jimmy Hart." }],
    factions: []
  },
  14: { // Rick Rude
    injuries: [
      { year: "1994", injury: "Back injury — career-ending", cause: "Suffered a severe spinal injury during a superplex spot. Was paralyzed briefly and never wrestled again. Returned as a manager in WCW and DX before his death in 1999." },
      { year: "1999", injury: "Died — heart failure", cause: "Rick Rood died on April 20, 1999 at age 40 from heart failure caused by an accidental overdose of mixed medications. He was found at his home in Alpharetta, Georgia." }
    ],
    tagTeams: [],
    factions: [{ name: "Heenan Family", members: ["Bobby Heenan", "Mr. Perfect", "Andre the Giant"], eras: ["golden"], notes: "Bobby Heenan's crown jewel client in the late 80s." }]
  },
  15: { // Demolition
    injuries: [],
    tagTeams: [{ name: "Demolition (Ax & Smash)", partners: ["Ax (Bill Eadie)", "Smash (Barry Darsow)"], eras: ["golden"], notes: "The most decorated tag team of the Golden Era with 3 WWF Tag Title reigns. Managed by Mr. Fuji. Their face paint and brutality set the tone for monster tag teams." }],
    factions: []
  },
  18: { // Earthquake
    injuries: [
      { year: "2006", injury: "Died — bladder cancer", cause: "John Tenta (Earthquake) died on June 7, 2006 at age 42 from bladder cancer. He had been battling the disease for over a year. Despite his monster heel gimmick, he was known as one of the kindest people in the business." }
    ],
    tagTeams: [{ name: "Natural Disasters", partners: ["Typhoon (Fred Ottman)"], eras: ["golden"], notes: "Giant monster tag team that won the WWF Tag Titles in 1992. Originally heels, turned face when Money Inc. walked out on a match." }],
    factions: []
  },
  19: { // Big Boss Man
    injuries: [
      { year: "2004", injury: "Died — heart attack", cause: "Ray Traylor (Big Boss Man) died on September 22, 2004 at age 41 from a heart attack. His death came just a few years after his last WWE run. He was one of the most reliable big men of the late 80s and Attitude Era." }
    ],
    tagTeams: [],
    factions: [{ name: "The Corporation", members: ["Vince McMahon", "Shane McMahon", "Test", "Ken Shamrock"], eras: ["attitude"], notes: "Vince McMahon's hired muscle during the Corporate era." }]
  },
  20: { // Sgt. Slaughter
    injuries: [{ year: "1991", injury: "Death threats during Iraqi angle", cause: "The heat from his Iraqi sympathizer gimmick during the Gulf War was so intense he required genuine security and stayed in hotels under aliases." }],
    tagTeams: [],
    factions: [{ name: "Iraqi sympathizer alliance", members: ["General Adnan", "Colonel Mustafa (Iron Sheik)"], eras: ["golden"], notes: "The most controversial heel faction of the early 90s — turning against America during the Gulf War." }]
  },
  21: { // Iron Sheik
    injuries: [
      { year: "2023", injury: "Died — natural causes", cause: "Khosrow Vaziri (The Iron Sheik) died on June 7, 2023 at age 81. He had experienced declining health in his later years. His second career as a beloved social media personality — ranting about jabronis and making people humble — made him more popular in retirement than he ever was as a heel." }
    ],
    tagTeams: [{ name: "Iron Sheik & Nikolai Volkoff", partners: ["Nikolai Volkoff"], eras: ["golden"], notes: "Won the WWF Tag Titles at WM1. The ultimate Cold War heel team — Iranian and Soviet. Managed by Freddie Blassie." }],
    factions: []
  },
  22: { // Yokozuna
    injuries: [
      { year: "1993–1996", injury: "Severe obesity-related health decline", cause: "Yokozuna's weight increased dramatically through his title reign. By 1996 his mobility was severely limited." },
      { year: "2000", injury: "Died — pulmonary edema", cause: "Rodney Anoa'i (Yokozuna) died on October 23, 2000 at age 34 from pulmonary edema in a hotel room in Liverpool, England. His weight had ballooned to over 700 lbs. A direct consequence of his extreme size — one of wrestling's most tragic early deaths." }
    ],
    tagTeams: [{ name: "Yokozuna & Owen Hart", partners: ["Owen Hart"], eras: ["new-gen"], notes: "Won the WWF Tag Titles together in 1995. An unlikely but effective pairing." }],
    factions: []
  },
  29: { // Lex Luger
    injuries: [],
    tagTeams: [{ name: "Lex Luger & The British Bulldog", partners: ["British Bulldog"], eras: ["new-gen"], notes: "Brief babyface tag pairing in 1996. Both men's careers were winding down in WWF." }],
    factions: []
  },
  46: { // Chris Benoit
    injuries: [{ year: "2007", injury: "Death / murder-suicide", cause: "Died June 24, 2007 in a double murder-suicide. He killed his wife Nancy and son Daniel before taking his own life. Post-mortem examination revealed severe CTE (chronic traumatic encephalopathy) from years of chair shots and concussions. WWE removed his content from all media. One of wrestling's darkest chapters." }],
    tagTeams: [
      { name: "The Radicalz", partners: ["Eddie Guerrero", "Perry Saturn", "Dean Malenko"], eras: ["attitude"], notes: "All four left WCW the same night and debuted on Raw together — one of the biggest talent raids in wrestling history." },
      { name: "Chris Benoit & Edge (brief)", partners: ["Edge"], eras: ["ruthless"], notes: "Won the Tag Titles together in 2002. Both men were beloved workers paired briefly." }
    ],
    factions: [{ name: "The Radicalz", members: ["Eddie Guerrero", "Perry Saturn", "Dean Malenko"], eras: ["attitude"], notes: "The WCW defectors who debuted together and immediately attacked The Rock." }]
  },
  52: { // D'Lo Brown
    injuries: [{ year: "1999", injury: "Caused Droz's paralysis (accident)", cause: "D'Lo Brown accidentally dropped Darren Drozdov (Droz) during a powerbomb, leaving Droz paralyzed. D'Lo was not at fault for Droz's pre-existing neck condition, but the incident haunted him." }],
    tagTeams: [],
    factions: [{ name: "Nation of Domination", members: ["The Rock", "Faarooq", "Mark Henry", "Kama Mustafa"], eras: ["attitude"], notes: "A prominent member of the Nation before The Rock took over." }]
  },
  53: { // Mark Henry
    injuries: [
      { year: "1998–1999", injury: "Groin tear", cause: "Tore his groin, requiring surgery and significant time off early in his career." },
      { year: "2006", injury: "Knee injury", cause: "Knee problems hampered his 'World's Strongest Man' monster push." }
    ],
    tagTeams: [],
    factions: [{ name: "Nation of Domination", members: ["The Rock", "Faarooq", "D'Lo Brown"], eras: ["attitude"], notes: "Member of the Nation before The Rock ousted Faarooq." }]
  },
  54: { // Val Venis
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Right to Censor", members: ["Steven Richards", "Ivory", "Bull Buchanan", "The Godfather"], eras: ["attitude"], notes: "Turned heel by joining the censorship stable — ironic given his pornstar character." }]
  },
  56: { // Big Show
    injuries: [
      { year: "1999", injury: "Acromegaly treatment / weight fluctuation", cause: "Like Andre, Big Show has acromegaly (gigantism). Managing the condition has required ongoing medical treatment and has caused significant weight fluctuation throughout his career." },
      { year: "2010", injury: "Knee surgery", cause: "Knee surgery required after years of supporting his extreme size in the ring." }
    ],
    tagTeams: [
      { name: "JeriShow", partners: ["Chris Jericho"], eras: ["pg"], notes: "Unified the Raw and SmackDown Tag Titles as the only tag team to hold both simultaneously." },
    ],
    factions: []
  },
  61: { // Lita
    injuries: [
      { year: "2002", injury: "Torn ACL", cause: "Tore her ACL during a match against Molly Holly on Raw. Missed 7 months. Her return was a major moment." }
    ],
    tagTeams: [
      { name: "Team Xtreme", partners: ["Jeff Hardy", "Matt Hardy"], eras: ["attitude"], notes: "Lita as the Hardyz' manager/ally — one of the most popular trios of the Attitude Era." }
    ],
    factions: []
  },
  63: { // The Godfather
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "Nation of Domination (as Kama)", members: ["The Rock", "Faarooq", "D'Lo Brown"], eras: ["attitude"], notes: "Served as Kama Mustafa in the Nation before becoming the Ho Train-running Godfather." }
    ]
  },
  66: { // Test
    injuries: [
      { year: "2004–2005", injury: "Neck injury", cause: "Serious neck problems that contributed to his release." },
      { year: "2009", injury: "Died — accidental overdose", cause: "Andrew Martin (Test) died on March 13, 2009 at age 33 from an accidental overdose of oxycodone. Post-mortem examination revealed severe CTE — his brain showed damage consistent with repeated head trauma throughout his career." }
    ],
    tagTeams: [
      { name: "T&A (Test & Albert)", partners: ["Albert"], eras: ["attitude"], notes: "Managed by Trish Stratus in her heel days — one of Trish's first roles was managing this team." },
      { name: "Un-Americans", partners: ["Lance Storm", "Christian", "William Regal"], eras: ["ruthless"], notes: "Anti-American stable post-invasion." }
    ],
    factions: []
  },
  67: { // APA
    injuries: [],
    tagTeams: [{ name: "APA (Acolytes Protection Agency)", partners: ["JBL", "Faarooq"], eras: ["attitude", "ruthless"], notes: "Tough bar-brawling tag team. Played cards, drank beer, and headbutted people. 'DAMN!' Two tag title reigns." }],
    factions: [
      { name: "Ministry of Darkness (as The Acolytes)", members: ["Undertaker", "Mideon", "Viscera"], eras: ["attitude"], notes: "Before becoming the APA, Bradshaw and Farooq were Undertaker's enforcers in the Ministry." }
    ]
  },
  68: { // Tazz
    injuries: [{ year: "2002", injury: "Neck problems — career-ending", cause: "Years of the T-bone Tazplex and other suplexes had destroyed his neck. Transitioned to full-time commentary after very limited in-ring work in WWE." }],
    tagTeams: [],
    factions: []
  },
  69: { // Gangrel
    injuries: [],
    tagTeams: [{ name: "The Brood", partners: ["Edge", "Christian"], eras: ["attitude"], notes: "Vampire trio who rose through a ring of fire. Debuted Edge and Christian on the main roster. Their blood bath entrances were visually iconic." }],
    factions: [{ name: "The Brood", members: ["Edge", "Christian"], eras: ["attitude"], notes: "Gothic vampire stable — Gangrel was the leader who introduced Edge and Christian to WWE." }]
  },
  70: { // Perry Saturn
    injuries: [],
    tagTeams: [{ name: "The Radicalz", partners: ["Chris Benoit", "Eddie Guerrero", "Dean Malenko"], eras: ["attitude"], notes: "Part of the famous WCW mass departure. The Moppy angle (falling in love with a mop) ended his serious career trajectory." }],
    factions: [{ name: "The Radicalz", members: ["Chris Benoit", "Eddie Guerrero", "Dean Malenko"], eras: ["attitude"], notes: "The WCW defectors — all four debuted together." }]
  },
  71: { // Dean Malenko
    injuries: [],
    tagTeams: [{ name: "The Radicalz", partners: ["Chris Benoit", "Eddie Guerrero", "Perry Saturn"], eras: ["attitude"], notes: "The Man of 1000 Holds. Technical wrestler who fit awkwardly into the Attitude Era's brawl-heavy style." }],
    factions: [{ name: "The Radicalz", members: ["Chris Benoit", "Eddie Guerrero", "Perry Saturn"], eras: ["attitude"], notes: "His technical excellence was the Radicalz' in-ring backbone." }]
  },
  74: { // Vince McMahon
    injuries: [
      { year: "2005", injury: "Quad tear (in character then real)", cause: "Tore both quads attempting to stride dramatically out of the ring in kayfabe at New Year's Revolution 2005. He kept walking and tore both. Legendary for finishing the segment." }
    ],
    tagTeams: [],
    factions: [
      { name: "The Corporation", members: ["Shane McMahon", "Test", "Big Boss Man", "Ken Shamrock"], eras: ["attitude"], notes: "His heel corporate empire versus Stone Cold Steve Austin was the defining Attitude Era storyline." },
      { name: "The Authority (behind the scenes)", members: ["Triple H", "Stephanie McMahon"], eras: ["reality"], notes: "His daughter and son-in-law's faction was an extension of McMahon power." }
    ]
  },
  82: { // Carlito
    injuries: [],
    tagTeams: [{ name: "Carlito & Primo Colon", partners: ["Primo Colon"], eras: ["pg"], notes: "Brothers who won the Unified Tag Titles together — brief but memorable." }],
    factions: []
  },
  83: { // Shelton Benjamin
    injuries: [],
    tagTeams: [
      { name: "World's Greatest Tag Team", partners: ["Charlie Haas"], eras: ["ruthless"], notes: "Under Kurt Angle's tutelage. Genuinely among the most technically gifted tag teams of their era." },
      { name: "Team Angle", partners: ["Charlie Haas", "Kurt Angle"], eras: ["ruthless"], notes: "Kurt Angle's SmackDown stable — he mentored both men." }
    ],
    factions: []
  },
  84: { // Charlie Haas
    injuries: [],
    tagTeams: [{ name: "World's Greatest Tag Team", partners: ["Shelton Benjamin"], eras: ["ruthless"], notes: "Managed by Kurt Angle. One of the better tag teams of the RA era who never quite got the push their talent merited." }],
    factions: []
  },
  88: { // Jack Swagger
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Real Americans", members: ["Cesaro", "Zeb Colter (manager)"], eras: ["reality"], notes: "Tea Party-inspired heel stable. Cesaro's time here gave him real momentum before WWE pulled the plug on the push." }]
  },
  106: { // Rusev
    injuries: [],
    tagTeams: [{ name: "Rusev Day (Rusev & Aiden English)", partners: ["Aiden English"], eras: ["modern"], notes: "Rusev Day! Rusev Day! An organic fan-driven phenomenon. Aiden sang Rusev's praises and Lana managed. Genuinely over despite never being booked properly." }],
    factions: []
  },
  107: { // Wade Barrett
    injuries: [{ year: "2014", injury: "Shoulder injury / concussion", cause: "Recurring shoulder injuries and a notable concussion derailed his King Barrett momentum. His chronic bad luck with injuries was a long-running joke in WWE." }],
    tagTeams: [],
    factions: [{ name: "The Nexus", members: ["CM Punk (later)", "Heath Slater", "Justin Gabriel", "Darren Young", "Daniel Bryan (briefly)"], eras: ["pg"], notes: "Led the NXT Season 1 rookies in the most violent debut in Raw history — destroying the ring, the set, and John Cena." }]
  },
  109: { // Goldberg
    injuries: [{ year: "1999", injury: "Arm laceration — self-inflicted", cause: "Punched through a limousine window after a segment with Kevin Nash in WCW. Required significant surgery. A bizarre self-inflicted injury that derailed his momentum." }],
    tagTeams: [],
    factions: []
  },
  110: { // Ric Flair
    injuries: [
      { year: "1975", injury: "Plane crash — back broken", cause: "The small plane carrying Flair and Tim Woods crashed in North Carolina. Flair broke his back. Doctors said he'd never wrestle again. He was back in 6 months. The back brace he wore was later incorporated as a kayfabe injury." },
      { year: "2017", injury: "Heart failure / medically induced coma", cause: "Suffered life-threatening heart failure requiring emergency surgery. Was placed in a medically induced coma. His recovery was a genuine miracle." }
    ],
    tagTeams: [
      { name: "The Four Horsemen", partners: ["Arn Anderson", "Tully Blanchard", "Barry Windham"], eras: ["golden"], notes: "THE defining wrestling stable. Four Horsemen created the template for every heel faction that followed." }
    ],
    factions: [
      { name: "Evolution", members: ["Triple H", "Batista", "Randy Orton"], eras: ["ruthless"], notes: "The most prestigious version of his WWE stable work — as the legend teaching the next generation." },
      { name: "Four Horsemen (NWA/WCW)", members: ["Arn Anderson", "Tully Blanchard", "Barry Windham", "Ole Anderson"], eras: ["golden"], notes: "The greatest stable in wrestling history — not a WWE group but defines his legacy." }
    ]
  },
  111: { // Lance Storm
    injuries: [],
    tagTeams: [
      { name: "Un-Americans", partners: ["Christian", "Test", "William Regal"], eras: ["ruthless"], notes: "Anti-American heel stable. Storm was actually Canadian, not American, which was his whole point." },
      { name: "Team Canada (WCW)", partners: ["Mike Awesome", "Elix Skipper"], eras: ["attitude"], notes: "WCW's Canadian heel faction — held multiple WCW titles simultaneously and had great comedic/heat-generating promo work." }
    ],
    factions: []
  },
  112: { // Tajiri
    injuries: [],
    tagTeams: [
      { name: "Tajiri & William Regal", partners: ["William Regal"], eras: ["ruthless"], notes: "The pompous British aristocrat and the Japanese buzzsaw — tremendous odd-couple chemistry." },
      { name: "The Mexicools (loosely)", partners: ["Super Crazy", "Psicosis"], eras: ["ruthless"], notes: "Despite not being Mexican, Tajiri occasionally worked with the Mexicools faction." }
    ],
    factions: []
  },
  113: { // Funaki
    injuries: [],
    tagTeams: [
      { name: "Kai en Tai (Funaki & TAKA Michinoku)", partners: ["TAKA Michinoku"], eras: ["attitude"], notes: "The comedic Japanese duo. 'Indeed!' Funaki became SmackDown's #1 announcer in his own mind." }
    ],
    factions: []
  },
  114: { // Viscera
    injuries: [
      { year: "2014", injury: "Died — cardiac arrest", cause: "Nelson Frazier Jr. (Viscera/Mabel/Big Daddy V) died on February 18, 2014 at age 43 from a massive heart attack. His size took an enormous toll on his body throughout his career." }
    ],
    tagTeams: [],
    factions: [
      { name: "Ministry of Darkness (as Mabel)", members: ["Undertaker", "Mideon", "Acolytes"], eras: ["attitude"], notes: "One of the Ministry's most physically imposing members." }
    ]
  },
  116: { // Doink the Clown
    injuries: [],
    tagTeams: [],
    factions: []
  },
  117: { // Tatanka
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Million Dollar Corporation", members: ["Ted DiBiase", "Nikolai Volkoff", "IRS"], eras: ["new-gen"], notes: "His heel turn joining DiBiase's Corporation was one of the most unexpected turns of 1994." }]
  },
  118: { // Faarooq
    injuries: [],
    tagTeams: [{ name: "APA", partners: ["JBL"], eras: ["attitude", "ruthless"], notes: "Ron Simmons and JBL as the beer-drinking, card-playing tough guys. 'DAMN!' Two tag title reigns." }],
    factions: [
      { name: "Nation of Domination (founder)", members: ["The Rock", "D'Lo Brown", "Mark Henry", "Kama"], eras: ["attitude"], notes: "Founded the Nation — and was then overthrown by The Rock in one of the era's best power shifts." }
    ]
  },
  120: { // Raven
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "Raven's Nest (ECW)", members: ["Stevie Richards", "Blue Meanie", "The Pitbulls"], eras: ["attitude"], notes: "ECW's most compelling character — a brooding nihilist who surrounded himself with broken people." }
    ]
  },
  124: { // Ivory
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "Right to Censor", members: ["Steven Richards", "Val Venis", "Bull Buchanan", "The Godfather"], eras: ["attitude"], notes: "The virtue-signaling censorship stable. Ivory as their spokesperson was genuinely compelling." }
    ]
  },
  125: { // Hurricane
    injuries: [],
    tagTeams: [
      { name: "Hurricane & Rosey (Super Hero in Training)", partners: ["Rosey"], eras: ["ruthless"], notes: "Hurricane trained Rosey as his sidekick S.H.I.T. (Super Hero in Training). Won the Tag Titles together." },
      { name: "Hurricane & Kane (brief)", partners: ["Kane"], eras: ["ruthless"], notes: "One of the great comedy pairings — tiny superhero and giant monster team. Won the titles." }
    ],
    factions: []
  },
  126: { // Rhyno
    injuries: [{ year: "2001", injury: "Neck surgery", cause: "Required cervical spine surgery — missed time during what should have been his peak WWE period." }],
    tagTeams: [
      { name: "Rhyno & Heath Slater (Slater Gator / SmackDown 2016)", partners: ["Heath Slater"], eras: ["modern"], notes: "Won the SmackDown Tag Titles in 2016 in an emotional feel-good moment — Slater needed the contract, Rhyno was his surprise partner." }
    ],
    factions: []
  },
  127: { // John Morrison
    injuries: [],
    tagTeams: [
      { name: "MNM (Mercury, Nitro, Melina)", partners: ["Joey Mercury", "Melina (manager)"], eras: ["ruthless"], notes: "Hollywood red-carpet entrance, Snapshot finisher, dominant tag team. Morrison was Nitro, Mercury was Mercury." },
      { name: "The Miz & Morrison", partners: ["The Miz"], eras: ["pg"], notes: "One of the most entertaining tag teams of the PG era — their chemistry and promos were consistently excellent." }
    ],
    factions: []
  },
  134: { // Natalya
    injuries: [],
    tagTeams: [
      { name: "Hart Dynasty", partners: ["Tyson Kidd", "David Hart Smith"], eras: ["pg"], notes: "Third-generation family stable — Natalya as manager/valet for Kidd and Smith." }
    ],
    factions: []
  },
  136: { // Bobby Roode
    injuries: [],
    tagTeams: [{ name: "The Revival (brief alignment)", partners: ["Chad Gable"], eras: ["modern"], notes: "Roode & Gable — a solid team that never got a meaningful run." }],
    factions: []
  },
  137: { // Malakai Black / Aleister Black
    injuries: [],
    tagTeams: [],
    factions: []
  },
  138: { // Austin Theory
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "The Way (NXT)", members: ["Johnny Gargano", "Candice LeRae", "Indi Hartwell"], eras: ["modern"], notes: "Brief inclusion in Gargano's NXT faction before his main roster promotion." }
    ]
  },
  141: { // Hacksaw Jim Duggan
    injuries: [{ year: "1987", injury: "Arrest with Iron Sheik", cause: "Duggan and Iron Sheik were arrested together — a scandal since they were kayfabe enemies. Both were fired from WWF." }, { year: "1998", injury: "Kidney cancer", cause: "Diagnosed with kidney cancer. Underwent surgery and beat it — has spoken publicly about his survival." }],
    tagTeams: [],
    factions: []
  },
  142: { // Nikolai Volkoff
    injuries: [
      { year: "2018", injury: "Died — natural causes", cause: "Josip Peruzovic (Nikolai Volkoff) died on July 29, 2018 at age 70. Born in Yugoslavia, he became one of wrestling's most hated Cold War-era heels by portraying a Russian sympathizer. He was beloved backstage and in retirement." }
    ],
    tagTeams: [{ name: "Iron Sheik & Nikolai Volkoff", partners: ["Iron Sheik"], eras: ["golden"], notes: "Won the WWF Tag Titles at WM1. Volkoff would sing the Soviet national anthem before matches to generate immense heat." }],
    factions: []
  },
  143: { // Koko B. Ware
    injuries: [],
    tagTeams: [{ name: "High Energy", partners: ["Owen Hart"], eras: ["new-gen"], notes: "Colorful tag team in 1992. Both men were far more talented than the gimmick allowed." }],
    factions: []
  },
  144: { // George Steele
    injuries: [
      { year: "2017", injury: "Died — kidney failure", cause: "William Myers (George 'The Animal' Steele) died on February 16, 2017 at age 79 from kidney failure. Despite his wild, turnbuckle-eating character, he was a highly educated man who held a master's degree and taught high school. He was inducted into the WWE Hall of Fame in 2007." }
    ],
    tagTeams: [],
    factions: []
  },
  145: { // Bobby Heenan
    injuries: [
      { year: "1994–2004", injury: "Throat cancer / surgery complications", cause: "Heenan was diagnosed with throat cancer. Surgery to remove his jaw damaged his ability to speak clearly — cruel for the greatest talker in wrestling history." },
      { year: "2017", injury: "Died — cancer", cause: "Bobby Heenan died on September 17, 2017 at age 73 after a long battle with throat cancer. The Brain — the greatest manager and color commentator in wrestling history." }
    ],
    tagTeams: [],
    factions: [{ name: "Heenan Family (manager)", members: ["Mr. Perfect", "Andre the Giant", "Rick Rude", "Arn Anderson", "Harley Race", "Barbarian", "Haku"], eras: ["golden"], notes: "The most star-studded manager's stable in wrestling history." }]
  },
  146: { // Jim Cornette
    injuries: [{ year: "1993", injury: "Knee injury from the Lex Luger frisbee attack", cause: "Luger hit him with a steel frisbee. Cornette had genuine knee problems from bumps he took protecting his clients over the years." }],
    tagTeams: [],
    factions: [
      { name: "The Midnight Express (managed)", members: ["Bobby Eaton", "Dennis Condrey", "Stan Lane"], eras: ["golden"], notes: "Managed the Midnight Express in the NWA — widely considered the greatest tag team manager relationship in history." }
    ]
  },
  148: { // Nasty Boys
    injuries: [],
    tagTeams: [{ name: "The Nasty Boys", partners: ["Brian Knobbs", "Jerry Sags"], eras: ["golden"], notes: "Won the WWF Tag Titles at WM7. Known for the repulsive Pit Stop finisher. Legitimately tough and genuinely disliked by many in the locker room — which made them great heels." }],
    factions: []
  },
  149: { // LOD / Road Warriors
    injuries: [{ year: "1991", injury: "Hawk's drug/alcohol issues", cause: "Hawk's well-documented struggles with addiction interrupted their runs multiple times. He died in 2003 at age 46." }],
    tagTeams: [{ name: "Legion of Doom / Road Warriors", partners: ["Hawk (Michael Hegstrand)", "Animal (Joe Laurinaitis)"], eras: ["golden", "new-gen", "attitude"], notes: "The most feared tag team in wrestling history. Face paint, spiked shoulder pads, Doomsday Device. Never lost cleanly." }],
    factions: []
  },
  150: { // Bushwhackers
    injuries: [],
    tagTeams: [{ name: "The Bushwhackers", partners: ["Luke Williams", "Butch Miller"], eras: ["golden"], notes: "New Zealand's finest exports. The licking, the marching, the battering ram headbutt. Family-friendly comedy act who were legitimately brutal in their pre-WWF days." }],
    factions: []
  },
  151: { // Natural Disasters
    injuries: [],
    tagTeams: [{ name: "Natural Disasters", partners: ["Earthquake", "Typhoon"], eras: ["golden"], notes: "Giant monster heel team turned faces. Won the Tag Titles in 1992 after Money Inc. walked out." }],
    factions: []
  },
  152: { // Money Inc.
    injuries: [],
    tagTeams: [{ name: "Money Inc.", partners: ["IRS (Mike Rotunda)", "Ted DiBiase"], eras: ["golden"], notes: "The most hated heels of their era — two rich men who evaded taxes and bribed officials. Multiple tag title reigns." }],
    factions: []
  },
  153: { // Tito Santana
    injuries: [],
    tagTeams: [{ name: "Strike Force", partners: ["Rick Martel"], eras: ["golden"], notes: "Won the WWF Tag Titles in 1987 — a popular babyface team. Rick Martel turned heel by walking out on Santana, leading to their feud." }],
    factions: []
  },
  154: { // Greg Valentine
    injuries: [],
    tagTeams: [
      { name: "Dream Team", partners: ["Brutus Beefcake"], eras: ["golden"], notes: "Won the WWF Tag Titles — Beefcake handled the charisma while Valentine provided the wrestling credentials." },
      { name: "Rhythm & Blues", partners: ["Honky Tonk Man"], eras: ["golden"], notes: "Elvis-themed tag team. Performed a live concert at WrestleMania VI." }
    ],
    factions: []
  },
  155: { // Jimmy Snuka
    injuries: [
      { year: "1983–2017", injury: "Nancy Argentino case", cause: "Nancy Argentino died under mysterious circumstances in 1983 while traveling with Snuka. He was charged with murder in 2015 but deemed incompetent to stand trial due to dementia." },
      { year: "2017", injury: "Died — stomach cancer", cause: "Jimmy Snuka died on January 15, 2017 at age 73 from stomach cancer. He had been battling the disease while simultaneously facing murder charges related to the 1983 death of Nancy Argentino. His legacy remains deeply complicated." }
    ],
    tagTeams: [],
    factions: []
  },
  156: { // Marty Jannetty
    injuries: [],
    tagTeams: [{ name: "The Rockers", partners: ["Shawn Michaels"], eras: ["golden", "new-gen"], notes: "One of the most beloved teams of their era — until HBK threw Jannetty through the Barbershop window, launching his solo career at Jannetty's expense." }],
    factions: []
  },

  // ── ATTITUDE ERA SPECIFIC ─────────────────────────────────────
  162: { // Shane McMahon
    injuries: [
      { year: "2001", injury: "Table bump injuries (self-inflicted daredevil spots)", cause: "Shane deliberately put himself through tables, off ladders, and from heights that no one expected. His HIAC leap at WM32 (70+ feet onto announce table) was planned but still resulted in bruised ribs and lacerations." }
    ],
    tagTeams: [],
    factions: [
      { name: "Shane's Corner (various)", members: ["D-Generation X (opposed)", "various bodyguards"], eras: ["attitude"], notes: "Shane bought WCW and led the Invasion. His various alliances were always unpredictable." }
    ]
  },
  163: { // Right to Censor
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Right to Censor", members: ["Steven Richards", "Ivory", "Val Venis", "Bull Buchanan", "The Godfather"], eras: ["attitude"], notes: "The anti-Attitude Era stable ironically appearing during the Attitude Era. Their white shirts and censorship mission generated legitimate heat." }]
  },
  166: { // Stephanie McMahon
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "The Authority", members: ["Triple H", "Seth Rollins"], eras: ["reality"], notes: "Co-ran The Authority with Triple H. Her 'best for business' promos were infuriating in the best possible way." },
      { name: "Corporate Ministry (victim/asset)", members: ["Undertaker", "Vince McMahon"], eras: ["attitude"], notes: "Was kidnapped by the Ministry of Darkness — later revealed the entire angle was orchestrated by her own father." }
    ]
  },
  168: { // Jerry Lawler
    injuries: [{ year: "2012", injury: "Heart attack at ringside — on live TV", cause: "Suffered a cardiac arrest during Raw in Montreal in September 2012. Was resuscitated at ringside and in hospital. His recovery and return was complete." }],
    tagTeams: [],
    factions: []
  },
  172: { // Paul London
    injuries: [],
    tagTeams: [{ name: "Paul London & Brian Kendrick", partners: ["Brian Kendrick"], eras: ["ruthless"], notes: "428-day WWE Tag Title reign — the longest in the titles' then-history. Spectacular aerial team." }],
    factions: []
  },
  173: { // Brian Kendrick
    injuries: [],
    tagTeams: [{ name: "Paul London & Brian Kendrick", partners: ["Paul London"], eras: ["ruthless"], notes: "Their combined speed and execution was breathtaking. Sliced Bread #2 and Shooting Star Press as individual finishers." }],
    factions: []
  },
  174: { // MNM
    injuries: [],
    tagTeams: [{ name: "MNM", partners: ["Joey Mercury", "Johnny Nitro (Morrison)", "Melina (manager)"], eras: ["ruthless"], notes: "Hollywood red carpet entrance, paparazzi photographers, The Snapshot finisher. One of the most visually striking acts of their era." }],
    factions: []
  },
  176: { // Beth Phoenix
    injuries: [{ year: "2012", injury: "Retirement due to torn labrum", cause: "Retired from full-time competition due to a torn labrum and other cumulative injuries. Married Edge and returned years later." }],
    tagTeams: [],
    factions: []
  },
  177: { // Mickie James
    injuries: [],
    tagTeams: [],
    factions: []
  },
  187: { // Chavo Guerrero Jr.
    injuries: [],
    tagTeams: [{ name: "Los Guerreros", partners: ["Eddie Guerrero"], eras: ["ruthless"], notes: "Lie. Cheat. Steal. Uncle Eddie and nephew Chavo as the most lovable cheaters in tag team history." }],
    factions: []
  },
  190: { // Zack Ryder
    injuries: [
      { year: "2013", injury: "Buried alive (career, not physical)", cause: "After generating organic support through his YouTube show, WWE inexplicably began burying him — having him lose immediately after wins, making him a joke. A cautionary tale about WWE killing its own organic momentum." },
      { year: "2016", injury: "ACL tear — same night he won the IC title at WM32", cause: "Tore his ACL the very night after winning the Intercontinental Title at WM32 during a segment. One of the most infuriating injury timing stories in recent memory." }
    ],
    tagTeams: [{ name: "Hawkins & Ryder", partners: ["Curt Hawkins"], eras: ["modern"], notes: "Won the Raw Tag Titles at WM35 — an emotional payoff for two long-suffering mid-carders." }],
    factions: []
  },
  191: { // Santino Marella
    injuries: [],
    tagTeams: [{ name: "Santino & Kozlov", partners: ["Vladimir Kozlov"], eras: ["pg"], notes: "The greatest comedy tag team of the PG era. The Cobra vs. Vladimir's bear hug. Won the Tag Titles together." }],
    factions: []
  },
  192: { // R-Truth
    injuries: [],
    tagTeams: [
      { name: "The Awesome Truth", partners: ["The Miz"], eras: ["pg"], notes: "Miz & Truth as a surprisingly effective heel tag team in 2011." },
      { name: "R-Truth & Carmella", partners: ["Carmella"], eras: ["modern"], notes: "Mixed tag partners — genuinely funny dynamic." }
    ],
    factions: []
  },
  194: { // Tyson Kidd
    injuries: [{ year: "2015", injury: "Nearly career-ending neck injury", cause: "Tore his spinal cord during a Muscle Buster attempt by Samoa Joe at a house show. Was essentially paralyzed temporarily. He recovered but never wrestled again on the main roster." }],
    tagTeams: [
      { name: "Hart Dynasty", partners: ["David Hart Smith", "Natalya (manager)"], eras: ["pg"], notes: "Third-generation family team — both men from the Hart Dungeon lineage." },
      { name: "Tyson Kidd & Cesaro", partners: ["Cesaro"], eras: ["reality"], notes: "Won the Tag Titles — excellent technically-based tag team. Kidd's near-death injury ended the team's run." }
    ],
    factions: []
  },
  195: { // David Hart Smith
    injuries: [],
    tagTeams: [{ name: "Hart Dynasty", partners: ["Tyson Kidd", "Natalya (manager)"], eras: ["pg"], notes: "British Bulldog's son alongside the Harts — third-generation family legacy tag team." }],
    factions: []
  },
  196: { // Nexus
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Nexus", members: ["Wade Barrett", "Heath Slater", "Justin Gabriel", "Skip Sheffield", "Darren Young", "Michael Tarver", "David Otunga"], eras: ["pg"], notes: "NXT Season 1 rookies who invaded Raw in the most violent debut in the show's history. Destroyed the ring and John Cena. Their momentum was killed by losing at SummerSlam 2010." }]
  },
  197: { // Heath Slater
    injuries: [],
    tagTeams: [
      { name: "3MB (Three Man Band)", partners: ["Drew McIntyre", "Jinder Mahal"], eras: ["pg", "reality"], notes: "Air guitar, terrible at wrestling (in kayfabe), extremely lovable. One Man Band!" },
      { name: "Slater & Rhyno", partners: ["Rhyno"], eras: ["modern"], notes: "Won the SmackDown Tag Titles in 2016 — Heath needed a job, Rhyno was his surprise partner. Legitimately emotional moment." }
    ],
    factions: [
      { name: "The Nexus", members: ["Wade Barrett", "Justin Gabriel", "David Otunga"], eras: ["pg"], notes: "The Raw invasion squad. Heath survived longer than most in the faction." }
    ]
  },
  201: { // Damien Sandow
    injuries: [],
    tagTeams: [{ name: "Rhodes Scholars", partners: ["Cody Rhodes"], eras: ["pg", "reality"], notes: "Intellectual heels. Their promos together were some of the sharpest in wrestling." }],
    factions: []
  },
  202: { // Fandango
    injuries: [],
    tagTeams: [{ name: "Breezango (Breeze & Fandango)", partners: ["Tyler Breeze"], eras: ["modern"], notes: "Fashion Police team. Genuinely one of the most creative comedy acts in years — their Fashion Files vignettes were beloved." }],
    factions: []
  },
  203: { // Bo Dallas / Uncle Howdy
    injuries: [],
    tagTeams: [{ name: "The Miztourage (The Miz's lackeys)", partners: ["Curtis Axel", "The Miz"], eras: ["modern"], notes: "Bo and Curtis Axel as Miz's B-team bodyguards — peak comedy mid-card." }],
    factions: [
      { name: "The Wyatt Family (The Fiend era family)", members: ["Bray Wyatt (brother)", "Curtis Axel"], eras: ["modern"], notes: "Bo Dallas is Bray Wyatt's real-life brother (both are sons of IRS/Mike Rotunda)." },
      { name: "The Wyatt Sicks", members: ["Nikki Cross", "Dexter Lumis", "Joe Gacy", "Erick Redbeard"], eras: ["modern"], notes: "Led the Wyatt Sicks in 2024 as Uncle Howdy, honoring his late brother Bray Wyatt with horror-themed attacks and Firefly Fun House-inspired character personas." }
    ]
  },
  205: { // Luke Harper / Brodie Lee
    injuries: [
      { year: "2020", injury: "Died — idiopathic pulmonary fibrosis", cause: "Jon Huber (Luke Harper / Brodie Lee) died on December 26, 2020 at age 41 from a rare and aggressive lung disease. His passing was devastating to the wrestling community. His wife Amanda has spoken movingly about his final months." }
    ],
    tagTeams: [],
    factions: [
      { name: "Wyatt Family", members: ["Bray Wyatt", "Erick Rowan", "Braun Strowman"], eras: ["reality"], notes: "The Wyatt Family's enforcer — his disheveled intensity and size made him genuinely threatening." }
    ]
  },
  206: { // Erick Rowan
    injuries: [],
    tagTeams: [{ name: "Bludgeon Brothers", partners: ["Luke Harper"], eras: ["modern"], notes: "Won the SmackDown Tag Titles with Harper in 2018 — dominant monster team with giant mallets." }],
    factions: [
      { name: "Wyatt Family", members: ["Bray Wyatt", "Luke Harper", "Braun Strowman"], eras: ["reality"], notes: "The sheep mask-wearing cult member — his backwards sheep mask is one of wrestling's most unsettling visual images." },
      { name: "Daniel Bryan's Eco-Warrior faction", members: ["Daniel Bryan"], eras: ["modern"], notes: "Repackaged as Daniel Bryan's enforcer in his Planet's Champion heel run — oddly effective." }
    ]
  },
  210: { // Paige
    injuries: [{ year: "2017", injury: "Neck injury — career-ending", cause: "Suffered a serious neck injury during a tag match on SmackDown in December 2017 involving a kick from Sasha Banks. The injury left her unable to safely compete. She officially retired in 2018 at age 25, becoming WWE's SmackDown General Manager." }],
    tagTeams: [
      { name: "PCB (Paige, Charlotte, Becky)", partners: ["Charlotte Flair", "Becky Lynch"], eras: ["reality"], notes: "One of the original Divas Revolution trios — the trio that helped launch the women's evolution storyline." }
    ],
    factions: []
  },
  214: { // Tommaso Ciampa
    injuries: [
      { year: "2018", injury: "Torn ACL — at peak of NXT run", cause: "Tore his ACL during a Takeover match in June 2018, immediately after becoming NXT Champion and being at the absolute peak of his run. Missed over 8 months." },
      { year: "2021", injury: "Neck surgery", cause: "Required cervical spine surgery — missed significant time from NXT." }
    ],
    tagTeams: [{ name: "DIY", partners: ["Johnny Gargano"], eras: ["modern"], notes: "One of the finest tag teams in NXT history. Their breakup — Ciampa turning on Gargano — launched the greatest NXT rivalry." }],
    factions: [{ name: "Moustache Mountain allies (briefly)", members: ["Pete Dunne", "Trent Seven", "Tyler Bate"], eras: ["modern"], notes: "Brief NXT UK crossover interactions." }]
  },
  215: { // Johnny Gargano
    injuries: [
      { year: "2017", injury: "Knee surgery", cause: "Required knee surgery after working through pain during the DIY tag run." }
    ],
    tagTeams: [
      { name: "DIY", partners: ["Tommaso Ciampa"], eras: ["modern"], notes: "NXT's finest tag team. Their WrestleMania weekend matches against the Revival are considered classics." },
      { name: "The Way (NXT)", partners: ["Candice LeRae", "Indi Hartwell", "Austin Theory"], eras: ["modern"], notes: "NXT stable he led — heel family unit with genuine comedy chemistry." }
    ],
    factions: [{ name: "The Way", members: ["Candice LeRae", "Indi Hartwell", "Austin Theory"], eras: ["modern"], notes: "NXT's dominant heel family faction of 2020-2021." }]
  },
  216: { // Karrion Kross
    injuries: [],
    tagTeams: [{ name: "Karrion Kross & Scarlett", partners: ["Scarlett (manager/valet)"], eras: ["modern"], notes: "Scarlett was essential to Kross's NXT aura — her entrance added immensely to his mystique." }],
    factions: []
  },
  218: { // Dominik Mysterio
    injuries: [],
    tagTeams: [{ name: "Dirty Dom & Rhea (Judgment Day)", partners: ["Rhea Ripley (Mami)"], eras: ["modern"], notes: "The Mami/Dirty Dom dynamic was the most entertaining subplot on Raw for over a year." }],
    factions: [{ name: "Judgment Day", members: ["Finn Bálor", "Rhea Ripley", "Damian Priest", "JD McDonagh"], eras: ["modern"], notes: "The most hated heel in wrestling — 'Mami's boy.' His dad Rey practically disowned him in kayfabe." }]
  },
  222: { // Liv Morgan
    injuries: [],
    tagTeams: [{ name: "Riott Squad", partners: ["Ruby Riott", "Sarah Logan"], eras: ["modern"], notes: "The Riott Squad was Liv's entry point — she grew exponentially as a performer and personality from there." }],
    factions: []
  },
  223: { // Iyo Sky
    injuries: [],
    tagTeams: [{ name: "Damage CTRL", partners: ["Bayley", "Dakota Kai"], eras: ["modern"], notes: "Bayley's heel faction — Iyo's aerial ability was the in-ring backbone of the group." }],
    factions: [{ name: "Damage CTRL", members: ["Bayley", "Dakota Kai"], eras: ["modern"], notes: "The most dominant women's faction of the modern era." }]
  },
  237: { // Scott Steiner
    injuries: [],
    tagTeams: [
      { name: "Steiner Brothers", partners: ["Rick Steiner"], eras: ["new-gen"], notes: "One of the greatest tag teams in wrestling history — legitimately the finest amateur-based tag team ever. Their Steinerizer finisher was devastating." }
    ],
    factions: []
  },
  241: { // Tommy Dreamer
    injuries: [],
    tagTeams: [],
    factions: [{ name: "ECW (the spirit of)", members: [], eras: ["attitude"], notes: "Dreamer was the emotional heart of ECW — the man who bled for the fans night after night." }]
  },
  242: { // Sandman
    injuries: [],
    tagTeams: [],
    factions: [{ name: "ECW Originals", members: ["Tommy Dreamer", "Sabu", "Rob Van Dam", "Balls Mahoney"], eras: ["ruthless"], notes: "Part of the ECW original contingent during the 2006 revival." }]
  },
  247: { // Spike Dudley
    injuries: [],
    tagTeams: [{ name: "Spike & Dudley Boyz", partners: ["Bubba Ray Dudley", "D-Von Dudley"], eras: ["attitude", "ruthless"], notes: "The tiny Dudley who climbed people like a jungle gym. Won multiple tag titles as part of the Dudley family unit." }],
    factions: []
  },

  // ── RUTHLESS AGGRESSION ERA ───────────────────────────────────
  73: { // RVD
    injuries: [
      { year: "2005", injury: "Knee injury", cause: "Knee problems that hampered his SmackDown run." }
    ],
    tagTeams: [
      { name: "RVD & Kane", partners: ["Kane"], eras: ["ruthless"], notes: "An unlikely but crowd-pleasing tag partnership. Won the Tag Titles on Raw in 2002." }
    ],
    factions: []
  },
  80: { // JBL
    injuries: [],
    tagTeams: [
      { name: "APA", partners: ["Faarooq"], eras: ["attitude"], notes: "Before the suit and limousine — JBL as brawling Bradshaw in the APA." }
    ],
    factions: [
      { name: "Cabinet (SmackDown)", members: ["Orlando Jordan", "Amy Weber", "OJ as Chief of Staff"], eras: ["ruthless"], notes: "The longest-reigning WWE Champion of the RA era surrounded himself with the Cabinet — a corporate political team." }
    ]
  },
  104: { // Cesaro
    injuries: [
      { year: "2021", injury: "Torn shoulder", cause: "Tore his shoulder after WWE finally gave him the singles push the crowd had demanded for years. The injury ended the momentum at the worst possible time." }
    ],
    tagTeams: [
      { name: "The Bar", partners: ["Sheamus"], eras: ["modern"], notes: "One of the finest tag teams of the modern era — five combined tag title reigns." },
      { name: "Real Americans", partners: ["Jack Swagger", "Zeb Colter (manager)"], eras: ["reality"], notes: "Tea Party-inspired stable that gave Cesaro his first real main roster momentum." },
      { name: "Tyson Kidd & Cesaro", partners: ["Tyson Kidd"], eras: ["reality"], notes: "Won the Tag Titles together — a great team ended too soon by Kidd's injury." }
    ],
    factions: [
      { name: "The Real Americans", members: ["Jack Swagger", "Zeb Colter (manager)"], eras: ["reality"], notes: "Anti-immigration heel stable — 'We the People!'" }
    ]
  },

  // ── MODERN ERA / NXT ──────────────────────────────────────────
  217: { // Damian Priest
    injuries: [],
    tagTeams: [
      { name: "Judgment Day", partners: ["Finn Bálor", "Rhea Ripley", "Dominik Mysterio"], eras: ["modern"], notes: "Titles: Raw Tag Team Championship" }
    ],
    factions: [{ name: "Judgment Day", members: ["Finn Bálor", "Rhea Ripley", "Dominik Mysterio"], eras: ["modern"], notes: "His World Heavyweight Championship win at WM40 was the faction's crowning achievement." }]
  },
  260: { // Shayna Baszler
    injuries: [],
    tagTeams: [{ name: "Shayna & Nia (co-champions)", partners: ["Nia Jax"], eras: ["modern"], notes: "Dominant Women's Tag Title reign — pure power pairing." }],
    factions: []
  },
  268: { // Asuka
    injuries: [],
    tagTeams: [{ name: "Kabuki Warriors", partners: ["Kairi Sane"], eras: ["modern"], notes: "Won the Women's Tag Titles and used the mist and their Japanese horror aesthetic to devastating heel effect." }],
    factions: []
  },
  267: { // Alexa Bliss
    injuries: [],
    tagTeams: [{ name: "Alexa & Nikki (briefly)", partners: ["Nikki Cross"], eras: ["modern"], notes: "Tag title run together — before Alexa's supernatural Fiend character began." }],
    factions: [{ name: "The Fiend/Alexa supernatural alliance", members: ["Bray Wyatt / The Fiend"], eras: ["modern"], notes: "Her supernatural doll character aligned with The Fiend — divisive but genuinely committed character work." }]
  },
  257: { // Adam Cole
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Undisputed Era", members: ["Kyle O'Reilly", "Bobby Fish", "Roderick Strong"], eras: ["modern"], notes: "The most dominant NXT heel faction. Led by Cole BAYBAY — their matching gear and group promos were peak NXT." }]
  },
  299: { // Alundra Blayze
    injuries: [],
    tagTeams: [],
    factions: []
  },
  303: { // Molly Holly
    injuries: [],
    tagTeams: [{ name: "Holly family", partners: ["Crash Holly", "Hardcore Holly"], eras: ["attitude"], notes: "The kayfabe Holly family — Molly as the clean-cut cousin." }],
    factions: []
  },
  306: { // Naomi
    injuries: [],
    tagTeams: [{ name: "The Usos & Naomi (Smack Tag)", partners: ["Sasha Banks (Women's tag)"], eras: ["modern"], notes: "Won the Women's Tag Titles with Sasha Banks — a fan-pleasing team." }],
    factions: [{ name: "The Usos (family association)", members: ["Jimmy Uso (husband)", "The Usos"], eras: ["modern"], notes: "Naomi is married to Jimmy Uso — making her part of the broader Anoa'i/Fatu family wrestling dynasty." }]
  },
  318: { // MVP
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Hurt Business", members: ["Bobby Lashley", "Shelton Benjamin", "Cedric Alexander"], eras: ["modern"], notes: "MVP designed and led the most effective Raw heel stable of 2020-2021." }]
  },
  330: { // Carmelo Hayes
    injuries: [],
    tagTeams: [{ name: "Carm & Trick", partners: ["Trick Williams"], eras: ["modern"], notes: "Best friends whose relationship evolved into one of NXT's most compelling storylines when Trick struck out on his own." }],
    factions: []
  },
  309: { // Tiffany Stratton
    injuries: [],
    tagTeams: [],
    factions: []
  },
  313: { // Muhammad Hassan
    injuries: [],
    tagTeams: [],
    factions: []
  },
  315: { // Ken Kennedy
    injuries: [{ year: "2007", injury: "Triceps tear", cause: "Tore his triceps which cost him a planned Mr. Money in the Bank cash-in push that went to Edge instead." }],
    tagTeams: [],
    factions: []
  },
  321: { // Sting
    injuries: [{ year: "2015", injury: "Neck injury — career-ending", cause: "Seth Rollins' buckle bomb injured Sting's neck in their match at Night of Champions 2015. Sting was medically cleared only for limited appearances — the injury effectively ended his in-ring career." }],
    tagTeams: [],
    factions: [{ name: "WCW Alliance (spiritual)", members: ["Various WCW alumni"], eras: ["modern"], notes: "Sting's arrival in WWE in 2014 was the culmination of 30 years of fan demand." }]
  },
  332: { // Chad Gable
    injuries: [],
    tagTeams: [
      { name: "Alpha Academy", partners: ["Otis"], eras: ["modern"], notes: "Thank you Chad! The most patient man in wrestling." },
      { name: "American Alpha", partners: ["Jason Jordan"], eras: ["modern"], notes: "Their NXT tag run was outstanding — Jordan's injury ended what could have been a long celebrated team." }
    ],
    factions: []
  },
  333: { // Omos
    injuries: [],
    tagTeams: [{ name: "AJ Styles & Omos", partners: ["AJ Styles"], eras: ["modern"], notes: "Won the Raw Tag Titles together — AJ doing the wrestling, Omos doing the intimidating." }],
    factions: []
  },

  // ── REMAINING ENTRIES ─────────────────────────────────────────
  121: { injuries: [], tagTeams: [{ name: "T&A (Test & Albert)", partners: ["Test", "Albert"], eras: ["attitude"], notes: "Managed by Trish Stratus in her early heel role. Physical monster team." }], factions: [] },
  122: { injuries: [], tagTeams: [{ name: "The Godwinns", partners: ["Henry O. Godwinn", "Phineas I. Godwinn"], eras: ["new-gen"], notes: "Pig farmer brothers. Henry slop-dropped opponents. Simple Attitude Era comedy tag." }], factions: [] },
  123: { injuries: [], tagTeams: [{ name: "The Headbangers", partners: ["Mosh", "Thrasher"], eras: ["new-gen", "attitude"], notes: "Cross-dressing mosh pit enthusiasts. Won the Tag Titles in 1997." }], factions: [] },
  158: { injuries: [], tagTeams: [{ name: "The Smoking Gunns", partners: ["Billy Gunn", "Bart Gunn"], eras: ["new-gen"], notes: "Cowboy brothers. 3× WWF Tag Champions. Billy later became Mr. Ass and found more success solo." }], factions: [] },
  159: { injuries: [], tagTeams: [{ name: "The Headshrinkers", partners: ["Samu", "Fatu (Rikishi)"], eras: ["new-gen"], notes: "Wild Samoan tag team managed by Capt. Lou Albano then Afa. Predecessors to the Usos and the wider Samoan family legacy." }], factions: [] },
  164: { injuries: [], tagTeams: [{ name: "Mean Street Posse", partners: ["Pete Gas", "Joey Abs", "Rodney"], eras: ["attitude"], notes: "Shane McMahon's Greenwich buddies. Collectively held 3 Hardcore titles via the 24/7 rule. Comedy enhancement talent." }], factions: [] },
  170: { // Snitsky
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Gene Snitsky (monster heel)", members: ["Solo"], eras: ["ruthless"], notes: "IT WASN'T MY FAULT! His accidental injury to Lita (kayfabe) and punting of a baby doll were peak Ruthless Aggression shock TV." }]
  },
  175: { injuries: [], tagTeams: [{ name: "MNM", partners: ["Joey Mercury", "Johnny Nitro (Morrison)", "Joey Mercury"], eras: ["ruthless"], notes: "Melina managed MNM with her split-leg rope entrance. One of SmackDown's most visually striking acts." }], factions: [] },
  179: { injuries: [], tagTeams: [{ name: "Mexicools", partners: ["Psicosis", "Juventud Guerrera"], eras: ["ruthless"], notes: "Arrived on riding lawnmowers as a trio of Mexican luchadors — brief but energetic SmackDown presence." }], factions: [] },
  180: { injuries: [], tagTeams: [{ name: "FBI (Full Blooded Italians)", partners: ["Johnny Stamboli", "Chuck Palumbo"], eras: ["ruthless"], notes: "Italian-American heel stable on SmackDown. Funaki as honorary member briefly." }], factions: [] },
  181: { injuries: [], tagTeams: [{ name: "FBI", partners: ["Nunzio", "Johnny Stamboli"], eras: ["ruthless"], notes: "Chuck Palumbo as part of the FBI before the Billy & Chuck commitment ceremony angle." }], factions: [] },
  183: { injuries: [], tagTeams: [{ name: "LOD 2.0 (with Animal)", partners: ["Animal (Road Warrior)"], eras: ["ruthless"], notes: "Took Hawk's place in the New LOD after Hawk's death. Not well received by fans protective of the Road Warriors legacy." }], factions: [] },
  184: { injuries: [], tagTeams: [], factions: [{ name: "JBL's Cabinet", members: ["JBL", "Amy Weber", "Orlando Jordan"], eras: ["ruthless"], notes: "JBL's Chief of Staff — famous for a 27-second US title reign, the shortest in title history." }] },
  185: { injuries: [], tagTeams: [{ name: "Regal & Eugene", partners: ["William Regal", "Eugene"], eras: ["ruthless"], notes: "Regal reluctantly managed and teamed with Eugene, growing to genuinely care for him — one of the more touching character arcs of the era." }], factions: [] },
  186: { // Kenzo Suzuki
    injuries: [],
    tagTeams: [{ name: "Kenzo & René Duprée", partners: ["René Duprée"], eras: ["ruthless"], notes: "Brief tag partnership — both men were part of SmackDown's international talent push in 2004-2005." }],
    factions: []
  },
  189: { injuries: [], tagTeams: [{ name: "La Résistance", partners: ["Rob Conway", "Sylvain Grenier"], eras: ["ruthless"], notes: "Anti-American French stable. René Duprée was the youngest WWE Tag Champion in history (19 years old) when he and Sylvain won the titles." }], factions: [] },
  193: { injuries: [], tagTeams: [], factions: [{ name: "ECW Brand (final champion)", members: [], eras: ["pg"], notes: "The final ECW Champion before the brand was dissolved — carrying the weight of the ECW name to its end." }] },
  224: { // Zoey Stark
    injuries: [{ year: "2022", injury: "Knee injury", cause: "Tore her ACL during an NXT match — missed significant time before returning." }],
    tagTeams: [],
    factions: [{ name: "Pure Fusion Collective", members: ["Shayna Baszler", "Sonya Deville"], eras: ["modern"], notes: "Heel faction on the main roster built around combat sports legitimacy." }]
  },
  233: { // Sable
    injuries: [],
    tagTeams: [],
    factions: []
  },
  234: { // Torrie Wilson
    injuries: [],
    tagTeams: [],
    factions: []
  },
  235: { // Stacy Keibler
    injuries: [],
    tagTeams: [{ name: "Dudley Boyz' manager", partners: ["Dudley Boyz"], eras: ["attitude"], notes: "Managed the Dudley Boyz in their WCW/WWE Invasion run before switching sides." }],
    factions: []
  },
  243: { // Sabu
    injuries: [{ year: "Throughout career", injury: "Multiple fractures, torn bicep, broken jaw, broken orbital bone", cause: "Sabu's reckless style led to countless injuries — broken jaws, broken orbital bones, torn biceps. He would literally superglue wounds shut and continue wrestling." }],
    tagTeams: [{ name: "Sabu & Rob Van Dam", partners: ["Rob Van Dam"], eras: ["attitude"], notes: "The most explosive tag team in ECW history — both men defied physics nightly." }],
    factions: []
  },
  245: { injuries: [], tagTeams: [{ name: "Gangstas (ECW)", partners: ["Mustafa Saed"], eras: ["attitude"], notes: "2× ECW Tag Champions. The most legitimately dangerous act in ECW's history." }], factions: [] },
  246: { injuries: [], tagTeams: [{ name: "Balls & Axl Rotten", partners: ["Axl Rotten"], eras: ["attitude"], notes: "ECW's most masochistic tag team — chair shots were their primary offense." }], factions: [] },
  248: { injuries: [], tagTeams: [{ name: "Right to Censor (founder/leader)", partners: ["Ivory", "Val Venis", "Bull Buchanan", "The Godfather"], eras: ["attitude"], notes: "Steven Richards founded and led the RTC — his character evolution from over-the-top face to censorship zealot was sharp." }], factions: [{ name: "Right to Censor", members: ["Ivory", "Val Venis", "Bull Buchanan", "The Godfather"], eras: ["attitude"], notes: "The stable he created and led." }] },
  250: { injuries: [], tagTeams: [{ name: "Paul London & Brian Kendrick", partners: ["Brian Kendrick"], eras: ["ruthless"], notes: "428-day tag title reign. Their Shooting Star Press and Sliced Bread combination was spectacular." }], factions: [] },
  251: { // Ultimo Dragon
    injuries: [{ year: "2004", injury: "Arm nerve damage", cause: "Suffered nerve damage in his arm that significantly hampered his in-ring ability during his brief WWE run." }],
    tagTeams: [],
    factions: []
  },
  252: { injuries: [], tagTeams: [{ name: "Noble & Nidia", partners: ["Nidia (manager/valet)"], eras: ["ruthless"], notes: "SmackDown cruiserweight with his girlfriend Nidia — a simple but effective pairing." }], factions: [] },
  264: { injuries: [], tagTeams: [], factions: [{ name: "Damage CTRL", members: ["Bayley", "Iyo Sky"], eras: ["modern"], notes: "Dakota Kai as a founding member of Damage CTRL before injury took her out of the faction." }] },
  265: { injuries: [], tagTeams: [{ name: "The Way", partners: ["Johnny Gargano", "Indi Hartwell", "Austin Theory"], eras: ["modern"], notes: "The villain wife in Gargano's NXT family faction — her chemistry with Indi Hartwell was legitimately funny." }], factions: [{ name: "The Way", members: ["Johnny Gargano", "Indi Hartwell", "Austin Theory"], eras: ["modern"], notes: "NXT's dominant heel family of 2020-2021." }] },
  266: { // Xia Li
    injuries: [],
    tagTeams: [],
    factions: []
  },
  269: { injuries: [{ year: "2017", injury: "Neck injury — career effectively ended", cause: "Jason Jordan suffered a neck injury in early 2018 that required surgery and from which he never returned to in-ring competition. Was being pushed as Kurt Angle's storyline son at the time." }], tagTeams: [{ name: "American Alpha", partners: ["Chad Gable"], eras: ["modern"], notes: "One of the best tag teams of the NXT era — their amateur wrestling combination was exceptional. Jordan's injury ended their run too soon." }], factions: [] },
  302: { injuries: [], tagTeams: [{ name: "Mae Young & Fabulous Moolah", partners: ["Fabulous Moolah"], eras: ["attitude"], notes: "Their late-career comedy appearances together — including giving birth to a hand — were surreal but beloved." }], factions: [] },
  304: { // Victoria
    injuries: [],
    tagTeams: [],
    factions: []
  },
  305: { // Jazz
    injuries: [{ year: "2003", injury: "Torn ACL", cause: "Tore her ACL which significantly derailed her Women's Championship run." }],
    tagTeams: [],
    factions: []
  },
  307: { injuries: [{ year: "2018", injury: "Legitimate strike from Nia Jax broke Becky Lynch's nose", cause: "Nia Jax punched Becky Lynch legitimately, breaking her nose. Jax has been controversial for stiff and unsafe working style — her matches have injured Becky Lynch, Kairi Sane, and others." }], tagTeams: [{ name: "Nia & Shayna", partners: ["Shayna Baszler"], eras: ["modern"], notes: "Won the Women's Tag Titles — pure dominance pairing." }], factions: [] },
  308: { // Alexa Bliss
    injuries: [{ year: "2018", injury: "Multiple concussions", cause: "Suffered repeated concussions that sidelined her from in-ring competition for extended periods. She shifted toward a more character-driven role." }],
    tagTeams: [{ name: "Bliss Cross Applesauce", partners: ["Nikki Cross"], eras: ["modern"], notes: "Tag team with Nikki Cross — won the Women's Tag Team Championships." }],
    factions: []
  },
  310: { // Lash Legend
    injuries: [],
    tagTeams: [{ name: "Meta-Four", partners: ["Jakara Jackson", "Noam Dar"], eras: ["modern"], notes: "NXT's flashiest faction — Lash as the imposing enforcer with basketball-player athleticism." }],
    factions: [{ name: "Meta-Four", members: ["Noam Dar", "Jakara Jackson", "Oro Mensah"], eras: ["modern"], notes: "NXT faction built around Noam Dar's Heritage Cup reign." }]
  },
  328: { // Hiromu / NXT Japan
    injuries: [], tagTeams: [], factions: []
  },
  331: { // Bron Breakker
    injuries: [],
    tagTeams: [],
    factions: []
  },
  334: { injuries: [], tagTeams: [{ name: "Happy Corbin's Court", partners: ["Happy Corbin", "Madcap Moss"], eras: ["modern"], notes: "Moss as Corbin's joke-telling sidekick — their partnership was funnier than anyone expected." }], factions: [] },
  335: { injuries: [{ year: "2021", injury: "Neck injury — Erik's absence", cause: "Erik's neck injury left Ivar to compete solo for several months — showcasing Ivar's underrated solo ability." }], tagTeams: [{ name: "Viking Raiders", partners: ["Erik"], eras: ["modern"], notes: "See main Viking Raiders entry — Ivar as the more aerial half of the team." }], factions: [] },
  337: { // Tiger Ali Singh
    injuries: [],
    tagTeams: [],
    factions: []
  },
  338: { // Yoshi Tatsu
    injuries: [{ year: "2012", injury: "Broken neck", cause: "Suffered a broken neck from an unsafe piledriver, requiring extensive recovery time." }],
    tagTeams: [],
    factions: []
  },
  339: { // Shinsuke Nakamura
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Artist Collective", members: ["Rick Boogs (guitarist)"], eras: ["modern"], notes: "Rick Boogs playing air guitar to Nakamura's entrance was genuinely one of the most entertaining things on SmackDown." }]
  },
  340: { injuries: [{ year: "2015–2016", injury: "Multiple injuries — elbow, hamstring, shoulder", cause: "Hideo Itami suffered an elbow injury (2015), then a torn hamstring (2016), then a shoulder injury — a run of devastating bad luck that prevented him from ever getting momentum in WWE." }], tagTeams: [], factions: [] },
  342: { // Mojo Rawley
    injuries: [],
    tagTeams: [{ name: "The Hype Bros", partners: ["Zack Ryder"], eras: ["modern"], notes: "High-energy bro tag team on SmackDown — Rawley's intensity was oddly charming." }],
    factions: []
  },
  343: { injuries: [], tagTeams: [{ name: "The Ascension", partners: ["Konnor", "Viktor"], eras: ["modern"], notes: "287-day NXT Tag Title reign — the longest NXT tag reign. Their main roster run was sabotaged immediately." }], factions: [] },
  344: { injuries: [], tagTeams: [{ name: "Colon Family", partners: ["Epico Colon"], eras: ["pg"], notes: "Primo as part of the Puerto Rican wrestling dynasty." }], factions: [] },
  345: { // Ali (Mustafa Ali)
    injuries: [],
    tagTeams: [],
    factions: [{ name: "RETRIBUTION", members: ["T-BAR (Dijak)", "MACE (Dio Maddin)", "Slapjack (Shane Thorne)", "Reckoning (Mia Yim)"], eras: ["modern"], notes: "Led the widely-panned RETRIBUTION stable in 2020 — the faction that killed promising careers with bad booking." }]
  },
  346: { // Gorilla Monsoon
    injuries: [
      { year: "1999", injury: "Died — heart failure", cause: "Robert Marella (Gorilla Monsoon) died on October 6, 1999 at age 62 from heart failure related to diabetes. His broadcasting partnership with Bobby Heenan remains the gold standard of wrestling commentary. 'Will you stop!' " }
    ],
    tagTeams: [],
    factions: []
  },
  347: { // Pat Patterson
    injuries: [
      { year: "2020", injury: "Died — liver failure", cause: "Pierre Clermont (Pat Patterson) died on December 2, 2020 at age 79 from liver failure. He was the first openly gay wrestling star and is credited with creating the Royal Rumble match concept. A beloved figure backstage for decades." }
    ],
    tagTeams: [],
    factions: [{ name: "Stooges (Patterson & Brisco)", members: ["Gerald Brisco"], eras: ["attitude"], notes: "Mr. McMahon's bumbling stooges — their comedy during the Attitude Era was genuinely hilarious." }]
  },

  // ── NEW EXTRA: MISSING KEY WRESTLERS ────────────────────────────
  // Modern Era additions
  85: { // CM Punk
    injuries: [
      { year: "2014", injury: "Staph infection / back injury / concussion", cause: "Left WWE in January 2014 citing burnout, a MRSA staph infection on his back, and a concussion he felt wasn't properly treated. His departure was one of the most controversial exits in modern WWE." },
      { year: "2023", injury: "Torn triceps", cause: "Tore his triceps at the Royal Rumble 2024 during his return to WWE after 10 years. Required surgery and missed months." }
    ],
    tagTeams: [{ name: "Straight Edge Society", partners: ["Luke Gallows", "Serena Deeb", "Joey Mercury"], eras: ["pg"], notes: "His cult-leader stable — members had to shave their heads as initiation into straight-edge lifestyle." }],
    factions: [
      { name: "Straight Edge Society", members: ["Luke Gallows", "Serena Deeb", "Joey Mercury"], eras: ["pg"], notes: "Cult faction with shaved heads and militant straight-edge philosophy." },
      { name: "The New Nexus", members: ["Husky Harris (Bray Wyatt)", "David Otunga", "Mason Ryan", "Michael McGillicutty"], eras: ["pg"], notes: "Took over The Nexus from Wade Barrett — his leadership was more calculating and sinister." }
    ]
  },
  86: { // Sheamus
    injuries: [
      { year: "2013", injury: "Labral tear / shoulder surgery", cause: "Required surgery on his shoulder that kept him out for several months." },
      { year: "2015", injury: "Spinal stenosis complications", cause: "Spinal issues that affected his mobility — managed through treatment." }
    ],
    tagTeams: [{ name: "The Bar", partners: ["Cesaro"], eras: ["modern"], notes: "One of the best tag teams of the modern era — their chemistry was undeniable despite initially feuding." }],
    factions: [
      { name: "League of Nations", members: ["Alberto Del Rio", "Rusev", "King Barrett"], eras: ["reality"], notes: "International heel stable on Raw — never reached its potential." }
    ]
  },
  87: { // The Miz
    injuries: [],
    tagTeams: [
      { name: "Miz & Morrison", partners: ["John Morrison"], eras: ["ruthless", "pg", "modern"], notes: "The Dirt Sheet duo. Multiple tag title reigns across different eras. Their 'Be Jealous' chemistry was perfect." },
      { name: "The Awesome Truth", partners: ["R-Truth"], eras: ["pg"], notes: "Miz & R-Truth as a heel tag team in 2011 — surprisingly effective." }
    ],
    factions: [
      { name: "The Awesome Truth", members: ["R-Truth"], eras: ["pg"], notes: "Miz & R-Truth — brief tag team and angle against the management" }
    ]
  },
  89: { // Dolph Ziggler
    injuries: [
      { year: "2013", injury: "Concussion — career-altering", cause: "Suffered a severe concussion from Jack Swagger's Swagger Bomb just weeks after winning the World Heavyweight Championship. Had to drop the title and was never pushed to the same level again." }
    ],
    tagTeams: [
      { name: "Ziggler & Swagger", partners: ["Jack Swagger", "Vickie Guerrero (manager)"], eras: ["pg"], notes: "Managed by Vickie Guerrero — EXCUSE ME! The trio was effective midcard heel act." },
      { name: "Dolph & Robert Roode", partners: ["Robert Roode"], eras: ["modern"], notes: "Dirty Dawgs — surprisingly good tag chemistry with multiple tag title reigns." }
    ],
    factions: [
      { name: "Spirit Squad (male cheerleaders)", members: ["Kenny", "Mikey", "Nicky", "Johnny"], eras: ["ruthless"], notes: "Started as one of five male cheerleaders before his character evolved" }
    ]
  },
  90: { // Kofi Kingston
    injuries: [
      { year: "2019", injury: "Minor post-WM35 injuries", cause: "Bumps and bruises from his incredible WrestleMania 35 match against Daniel Bryan — the culmination of Kofimania." }
    ],
    tagTeams: [
      { name: "The New Day", partners: ["Big E", "Xavier Woods"], eras: ["reality", "modern"], notes: "The most decorated tag team in WWE history. Power of Positivity. Kofi was the heart of the group." }
    ],
    factions: [{ name: "The New Day", members: ["Big E", "Xavier Woods"], eras: ["reality", "modern"], notes: "Started as preachy heels, became beloved babyfaces. Kofi's 11-year championship journey was wrestling's best long-term story." }]
  },
  91: { // Daniel Bryan
    injuries: [
      { year: "2014", injury: "Neck surgery — nerve damage", cause: "Required neck surgery that stripped him of the WWE Championship he'd just won at WM30. Missed nearly a year." },
      { year: "2015–2016", injury: "Post-concussion syndrome / forced retirement", cause: "Multiple concussions accumulated to the point where WWE doctors refused to clear him. Retired in February 2016 in an emotional Raw segment. The YES! chant echoed through the arena." },
      { year: "2018", injury: "Miraculous medical clearance", cause: "After being cleared by external doctors, WWE allowed his return in 2018 — one of wrestling's greatest comeback stories." }
    ],
    tagTeams: [{ name: "Team Hell No", partners: ["Kane"], eras: ["pg"], notes: "Anger management tag team with Kane — 'I am the tag team champions!' One of wrestling's funniest comedy tag teams." }],
    factions: [{ name: "The Wyatt Family (briefly)", members: ["Bray Wyatt", "Luke Harper", "Erick Rowan"], eras: ["reality"], notes: "Briefly brainwashed into the Wyatt Family — a strange but memorable storyline." }]
  },
  92: { // Seth Rollins
    injuries: [
      { year: "2015", injury: "Torn ACL, MCL, and meniscus", cause: "Tore his right knee during a live event against Kane in November 2015 while WWE Champion. Missed 7 months." },
      { year: "2019", injury: "Back injury / bone spur", cause: "Back issues that required him to modify his style and limit certain moves." }
    ],
    tagTeams: [{ name: "The Shield", partners: ["Dean Ambrose", "Roman Reigns"], eras: ["reality"], notes: "The Architect of the Shield — his betrayal with a steel chair to Roman's back was the most shocking moment of 2014." }],
    factions: [
      { name: "The Shield", members: ["Dean Ambrose", "Roman Reigns"], eras: ["reality"], notes: "Debuted through the crowd in SWAT gear. Triple powerbomb." },
      { name: "The Authority (protégé)", members: ["Triple H", "Stephanie McMahon", "J&J Security"], eras: ["reality"], notes: "After betraying the Shield, became Triple H's golden boy — the corporate champion." }
    ]
  },
  93: { // Roman Reigns
    injuries: [
      { year: "2014", injury: "Incarcerated hernia", cause: "Emergency hernia surgery forced him out for several months, derailing his initial singles push." },
      { year: "2018", injury: "Leukemia — real", cause: "Announced on Raw in October 2018 that his leukemia had returned (first diagnosed in 2007). Relinquished the Universal title. His return in February 2019 was one of the most emotional Raw moments ever." }
    ],
    tagTeams: [{ name: "The Shield", partners: ["Seth Rollins", "Dean Ambrose"], eras: ["reality"], notes: "The powerhouse of the Shield — his Superman Punch and Spear made him the faction's most physically explosive member." }],
    factions: [
      { name: "The Shield", members: ["Seth Rollins", "Dean Ambrose"], eras: ["reality"], notes: "Hounds of Justice." },
      { name: "The Bloodline", members: ["The Usos", "Solo Sikoa", "Paul Heyman", "Sami Zayn"], eras: ["modern"], notes: "The Tribal Chief. Head of the Table. The defining faction of 2020s wrestling." }
    ]
  },
  94: { // Dean Ambrose
    injuries: [
      { year: "2017", injury: "Triceps tear", cause: "Tore his triceps in late 2017, requiring surgery and missing months of action." }
    ],
    tagTeams: [{ name: "The Shield", partners: ["Seth Rollins", "Roman Reigns"], eras: ["reality"], notes: "The Lunatic Fringe of the Shield — unpredictable, chaotic, and the crowd's favorite." }],
    factions: [{ name: "The Shield", members: ["Seth Rollins", "Roman Reigns"], eras: ["reality"], notes: "His departure for AEW in 2019 ended any possibility of a final Shield reunion." }]
  },
  95: { // Bray Wyatt
    injuries: [
      { year: "2023", injury: "Died — cardiac arrest", cause: "Windham Rotunda (Bray Wyatt) died on August 24, 2023 at age 36 from a heart attack related to a previous COVID-19 infection. His death shocked the entire wrestling world. He had only recently returned to WWE after being released." }
    ],
    tagTeams: [
      { name: "The Fiend & Alexa Bliss", partners: ["Alexa Bliss"], eras: ["modern"] }
    ],
    factions: [
      { name: "The Wyatt Family", members: ["Luke Harper", "Erick Rowan", "Braun Strowman"], eras: ["reality"], notes: "His cult of personality — lanterns, rocking chairs, and 'Follow the Buzzards.' The most atmospherically unique faction in modern WWE." }
    ]
  },
  96: { // Kevin Owens
    injuries: [
      { year: "2019", injury: "Knee surgery (double)", cause: "Had both knees scoped simultaneously — required several months off." }
    ],
    tagTeams: [
      { name: "Owens & Zayn", partners: ["Sami Zayn"], eras: ["modern"], notes: "Their WM39 tag title win — defeating The Usos — made 70,000 people cry. The culmination of a 20-year real-life friendship." }
    ],
    factions: []
  },
  97: { // Sami Zayn
    injuries: [
      { year: "2016", injury: "Shoulder surgery", cause: "Rotator cuff surgery kept him out for several months during his initial main roster push." }
    ],
    tagTeams: [{ name: "Owens & Zayn", partners: ["Kevin Owens"], eras: ["modern"], notes: "Best friends since they were teenagers on the indie scene. Their WM39 tag title win was the emotional peak of recent WWE." }],
    factions: [{ name: "The Bloodline (Honorary Uce)", members: ["Roman Reigns", "The Usos", "Solo Sikoa"], eras: ["modern"], notes: "The Honorary Uce arc — Sami trying to earn Roman's trust while secretly remaining loyal to Kevin Owens — was the best long-form character story in years." }]
  },
  98: { // AJ Styles
    injuries: [
      { year: "2020", injury: "Shoulder separation", cause: "Suffered a separated shoulder during a match — continued wrestling through significant pain before taking time off." }
    ],
    tagTeams: [{ name: "The OC (Original Club)", partners: ["Luke Gallows", "Karl Anderson"], eras: ["modern"], notes: "Former Bullet Club members reunited in WWE. Too Sweet hand gesture." }],
    factions: [{ name: "The OC / The Club", members: ["Luke Gallows", "Karl Anderson", "Omos (later)"], eras: ["modern"], notes: "Bullet Club alumni transplanted to WWE. Their faction never reached NJPW Bullet Club heights but provided AJ valuable allies." }]
  },
  99: { // Finn Balor
    injuries: [
      { year: "2016", injury: "Torn labrum — forced to vacate Universal title", cause: "Tore his labrum during his Universal Championship match against Seth Rollins at SummerSlam 2016. Won the title but had to vacate it the next night. One of the cruelest injury timings in wrestling history." }
    ],
    tagTeams: [
      { name: "Judgment Day", partners: ["Rhea Ripley", "Damian Priest", "Dominik Mysterio"], eras: ["modern"], notes: "Titles: Raw Tag Team Championship" }
    ],
    factions: [{ name: "Judgment Day", members: ["Rhea Ripley", "Damian Priest", "Dominik Mysterio"], eras: ["modern"], notes: "Became Judgment Day's leader after they kicked Edge out of his own creation." }]
  },
  100: { // Drew McIntyre
    injuries: [
      { year: "2020", injury: "Cracked jaw", cause: "Wrestled with a cracked jaw during his WWE Championship reign — showed incredible toughness." }
    ],
    tagTeams: [{ name: "3MB", partners: ["Heath Slater", "Jinder Mahal"], eras: ["reality"], notes: "Air guitar comedy jobbers — the fact Drew became a world champion after this makes his story even more remarkable." }],
    factions: [{ name: "3MB", members: ["Heath Slater", "Jinder Mahal"], eras: ["reality"], notes: "Went from 3MB laughingstock to Royal Rumble winner and WWE Champion. One of wrestling's great redemption arcs." }]
  },
  101: { // Becky Lynch
    injuries: [
      { year: "2020", injury: "Pregnancy — vacated title", cause: "Vacated the Raw Women's Championship in May 2020 to have her first child with Seth Rollins. Her return at SummerSlam 2021 was electric." }
    ],
    tagTeams: [
      { name: "The Four Horsewomen (NXT alliance)", partners: ["Charlotte Flair", "Sasha Banks", "Bayley"], eras: ["reality", "modern"] }
    ],
    factions: []
  },
  102: { // Charlotte Flair
    injuries: [
      { year: "2023", injury: "Torn ACL, MCL, and meniscus", cause: "Suffered a devastating knee injury in December 2023 that required major surgery. Extended absence from WWE." }
    ],
    tagTeams: [
      { name: "Four Horsewomen", partners: ["Sasha Banks", "Becky Lynch", "Bayley"], eras: ["reality", "modern"] }
    ],
    factions: [{ name: "The Four Horsewomen", members: ["Sasha Banks", "Bayley", "Becky Lynch"], eras: ["reality", "modern"], notes: "NXT's revolutionary women's quartet who transformed WWE women's wrestling forever." }]
  },
  103: { // Sasha Banks
    injuries: [
      { year: "2022", injury: "Walkout — Naomi & Sasha Banks", cause: "In May 2022, Sasha Banks and Naomi walked out of Raw during a backstage segment, unhappy with their creative direction. Both were subsequently suspended and eventually released. Sasha went to Japan and wrestled as Mercedes Moné to massive acclaim before heading to AEW." }
    ],
    tagTeams: [{ name: "The Boss 'n' Hug Connection", partners: ["Bayley"], eras: ["modern"], notes: "Won the first-ever WWE Women's Tag Team Championships at Elimination Chamber 2019." }],
    factions: [{ name: "The Four Horsewomen", members: ["Charlotte Flair", "Bayley", "Becky Lynch"], eras: ["reality", "modern"], notes: "The four women who changed everything in NXT and then on the main roster." }]
  },
  129: { // The Usos
    injuries: [
      { year: "2016", injury: "Jimmy Uso — knee surgery", cause: "Jimmy tore his ACL requiring surgery and months of absence." }
    ],
    tagTeams: [{ name: "The Usos", partners: ["Jimmy Uso", "Jey Uso"], eras: ["pg", "modern"], notes: "The most dominant tag team of the modern era — their Bloodline heel run produced some of the best tag team matches in WWE history." }],
    factions: [{ name: "The Bloodline", members: ["Roman Reigns", "Solo Sikoa", "Paul Heyman"], eras: ["modern"], notes: "Their role as Roman's enforcers — and eventual dissolution — was the Bloodline saga's emotional core." }]
  },
  130: { // Big E
    injuries: [
      { year: "2022", injury: "Broken neck — career-threatening", cause: "Suffered a broken neck from a belly-to-belly suplex by Ridge Holland on SmackDown in March 2022. The injury was severe enough that his return to in-ring competition remains uncertain." }
    ],
    tagTeams: [{ name: "The New Day", partners: ["Kofi Kingston", "Xavier Woods"], eras: ["reality", "modern"], notes: "The big man of The New Day — his pelvic gyrations and booming personality were the group's secret weapon." }],
    factions: [{ name: "The New Day", members: ["Kofi Kingston", "Xavier Woods"], eras: ["reality", "modern"], notes: "Power of Positivity. The most decorated tag team act in WWE history." }]
  },
  133: { // Bianca Belair
    injuries: [],
    tagTeams: [{ name: "Belair & Jade Cargill", partners: ["Jade Cargill"], eras: ["modern"], notes: "The two most physically dominant women in WWE teamed at WM40 — won the Women's Tag Titles." }],
    factions: []
  },
  135: { // Bayley
    injuries: [
      { year: "2021", injury: "Torn ACL", cause: "Tore her ACL during training in July 2021. Missed over a year. Her return at SummerSlam 2022 was a major moment." }
    ],
    tagTeams: [{ name: "The Boss 'n' Hug Connection", partners: ["Sasha Banks"], eras: ["modern"], notes: "Won the inaugural Women's Tag Titles together." }],
    factions: [
      { name: "The Four Horsewomen", members: ["Charlotte Flair", "Sasha Banks", "Becky Lynch"], eras: ["reality", "modern"], notes: "NXT's revolutionary women's quartet." },
      { name: "Damage CTRL", members: ["IYO SKY", "Dakota Kai", "Asuka (briefly)"], eras: ["modern"], notes: "Bayley's heel faction — her manipulative Role Model character as faction leader." }
    ]
  },
  139: { // Gunther
    injuries: [],
    tagTeams: [{ name: "Imperium", partners: ["Ludwig Kaiser", "Giovanni Vinci"], eras: ["modern"], notes: "European-pride stable emphasizing discipline, tradition, and stiff wrestling. Gunther was the undisputed leader." }],
    factions: [{ name: "Imperium", members: ["Ludwig Kaiser", "Giovanni Vinci", "Alexander Wolfe (NXT)"], eras: ["modern"], notes: "The Ring General's entourage — European excellence enforced through stiff chops and mat wrestling." }]
  },

  // ── NEW EXTRA: NEW WRESTLERS (841-858) ─────────────────────────
  841: { injuries: [{ year: "2000s", injury: "Neck deterioration / neurological damage", cause: "Years of piledriver impacts took a devastating toll. Paul Orndorff suffered significant neurological damage later in life." }, { year: "2021", injury: "Died — CTE complications", cause: "Paul Orndorff died on July 12, 2021 at age 71. His death was attributed to CTE (chronic traumatic encephalopathy) from years of wrestling impacts. 'Mr. Wonderful' had one of the most impressive physiques of his era and main evented the first Saturday Night's Main Event against Hulk Hogan." }], tagTeams: [], factions: [] },
  843: { // Don Muraco
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Fuji's stable", members: ["Mr. Fuji (manager)"], eras: ["golden"], notes: "Managed by Mr. Fuji during his IC title reigns." }]
  },
  844: { // Kamala
    injuries: [
      { year: "2020", injury: "Died — COVID-19 complications", cause: "James Harris (Kamala) died on August 9, 2020 at age 70. He had been battling health issues for years, including having both legs amputated due to diabetes and high blood pressure. His death came during the COVID-19 pandemic. Despite being billed as the Ugandan Giant, he was from Mississippi." }
    ],
    tagTeams: [],
    factions: []
  },
  850: { // Logan Paul
    injuries: [{ year: "2024", injury: "Knee injury / torn meniscus", cause: "Suffered a meniscus tear during his US Championship run — required surgery." }],
    tagTeams: [],
    factions: []
  },
  851: { injuries: [], tagTeams: [{ name: "The Usos", partners: ["Jimmy Uso"], eras: ["pg", "modern"], notes: "See The Usos entry — Jey broke free from the tag team for a solo run as Main Event Jey." }], factions: [{ name: "The Bloodline", members: ["Roman Reigns", "Jimmy Uso", "Solo Sikoa"], eras: ["modern"], notes: "His journey within and out of the Bloodline was the saga's most emotional thread." }] },
  853: { injuries: [], tagTeams: [{ name: "Heavy Machinery", partners: ["Tucker Knight"], eras: ["modern"], notes: "Lovable powerhouse tag team. Tucker's heel turn ended the team." }, { name: "Alpha Academy", partners: ["Chad Gable", "Maxxine Dupri"], eras: ["modern"], notes: "The big man of the Alpha Academy — Gable's unwilling muscle." }], factions: [] },

  // ── NEW WAVE 2 EXTRA DATA ────────────────────────────────────
  859: { // Dan Severn
    injuries: [],
    tagTeams: [],
    factions: []
  },
  860: { // Motor City Machine Guns
    injuries: [],
    tagTeams: [{ name: "Motor City Machine Guns", partners: ["Alex Shelley", "Chris Sabin"], eras: ["modern"], notes: "20+ years of tag team chemistry from TNA/Impact. Their WWE Tag Title win validated decades of excellence." }],
    factions: []
  },
  861: { // Matt Riddle
    injuries: [],
    tagTeams: [{ name: "RKBro", partners: ["Randy Orton"], eras: ["modern"], notes: "One of the most popular tag teams in recent WWE history — the Bro and the Viper. Their odd-couple chemistry was magic. Multiple Raw Tag Title reigns." }],
    factions: []
  },
  865: { // Axiom & Nathan Frazer
    injuries: [],
    tagTeams: [{ name: "Axiom & Nathan Frazer", partners: ["Axiom (A-Kid)", "Nathan Frazer (Ben Carter)"], eras: ["modern"], notes: "The fastest tag team in NXT history — their simultaneous aerial attacks are breathtaking." }],
    factions: []
  },
  868: { // Tamina
    injuries: [],
    tagTeams: [{ name: "Tamina & Natalya", partners: ["Natalya"], eras: ["modern"], notes: "Won the Women's Tag Team Championships — Tamina's first title after over a decade in WWE." }],
    factions: []
  },
  869: { // Cameron Grimes
    injuries: [],
    tagTeams: [],
    factions: []
  },
  874: { // Piper Niven
    injuries: [],
    tagTeams: [{ name: "Green & Niven", partners: ["Chelsea Green"], eras: ["modern"], notes: "Won the Women's Tag Titles together — Piper as the muscle, Chelsea as the mouth." }],
    factions: []
  },

  // ── ADDITIONAL EXTRA FILLS FOR EXISTING WRESTLERS ──────────────
  // Baron Corbin
  212: {
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Constable / Happy Corbin era", members: ["Solo"], eras: ["modern"], notes: "Went from Lone Wolf to Constable Corbin to King Corbin to Happy Corbin to broke Corbin to JBL's protégé — possibly the most character changes in modern WWE." }]
  },
  // Elias
  213: {
    injuries: [],
    tagTeams: [],
    factions: []
  },
  // Ronda Rousey
  // Braun Strowman extended
  211: {
    injuries: [
      { year: "2018", injury: "Bone spurs in elbow", cause: "Required surgery to remove bone spurs from his elbow." },
      { year: "2021", injury: "Released during knee rehab", cause: "Released from WWE during budget cuts while recovering from knee surgery. His return in 2022 was a major moment." }
    ],
    tagTeams: [
    ],
    factions: [{ name: "Wyatt Family", members: ["Bray Wyatt", "Luke Harper", "Erick Rowan"], eras: ["reality"], notes: "Debuted as the Black Sheep of the Wyatt Family — the largest and most physically imposing member." }]
  },
  // LA Knight
  220: {
    injuries: [],
    tagTeams: [],
    factions: []
  },
  // Solo Sikoa extended
  219: {
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "The Bloodline (Roman's)", members: ["Roman Reigns", "The Usos", "Paul Heyman"], eras: ["modern"], notes: "The Tribal Enforcer under Roman — when Roman says handle it, Solo handles it." },
      { name: "The Bloodline (Solo's)", members: ["Jacob Fatu", "Tama Tonga", "Tonga Loa"], eras: ["modern"], notes: "Declared himself the new Tribal Chief when Roman was absent — formed his own Bloodline with the Tongans." }
    ]
  },
  // Bobby Lashley
  131: {
    injuries: [{ year: "2008", injury: "Torn pectoral", cause: "Tore his pectoral muscle, contributing to his departure from WWE before returning in 2018." }],
    tagTeams: [],
    factions: [{ name: "The Hurt Business", members: ["MVP", "Shelton Benjamin", "Cedric Alexander"], eras: ["modern"], notes: "The best faction of the COVID era — suits, championships, and legitimate intimidation." }]
  },
  // Samoa Joe
  132: {
    injuries: [
      { year: "2017", injury: "Multiple concussions / knee injury", cause: "Suffered repeated concussions and a knee injury that halted his momentum just as he was being pushed seriously on the main roster." }
    ],
    tagTeams: [],
    factions: []
  },
  // Jinder Mahal
  // Ryback
  320: {
    injuries: [{ year: "2016", injury: "Ankle surgery", cause: "Required ankle surgery which contributed to his departure from WWE amid disputes over pay and creative direction." }],
    tagTeams: [{ name: "Rybaxel", partners: ["Curtis Axel"], eras: ["reality"], notes: "Surprisingly functional mid-card comedy tag team." }],
    factions: []
  },
  // Dudley Boyz
  51: {
    injuries: [],
    tagTeams: [{ name: "Dudley Boyz", partners: ["Bubba Ray Dudley", "D-Von Dudley"], eras: ["attitude", "ruthless"], notes: "3D through tables. The most decorated tag team in wrestling history with 23 world tag team championship reigns across ECW, WWE, TNA, and NJPW. Get the tables!" }],
    factions: [{ name: "ECW Originals", members: ["Tommy Dreamer", "Sandman", "Sabu"], eras: ["ruthless"], notes: "Part of the ECW contingent during the 2005-2006 ECW revival and One Night Stand PPVs." }]
  },
  // Randy Savage injuries
  5: {
    injuries: [
      { year: "2011", injury: "Died — heart attack while driving", cause: "Randy Savage died on May 20, 2011 at age 58 from a sudden cardiac arrhythmia while driving with his wife. He lost control of the vehicle. His death was a massive shock to the wrestling world. Ohhh yeahhh." }
    ],
    tagTeams: [
      { name: "The Mega Powers", partners: ["Hulk Hogan"], eras: ["golden"], notes: "With Hogan as babyfaces — dissolved when Savage accused Hogan of making moves on Elizabeth." },
      { name: "The Mega Bucks", partners: ["Ted DiBiase"], eras: ["golden"], notes: "Heel pairing at SummerSlam 1988." }
    ],
    factions: []
  },
  // Booker T
  81: {
    injuries: [
      { year: "2006", injury: "Knee injury", cause: "Suffered a knee injury that required surgery and sidelined him for several months." }
    ],
    tagTeams: [
      { name: "Harlem Heat", partners: ["Stevie Ray"], eras: ["attitude"], notes: "10-time WCW Tag Champions as Harlem Heat. One of WCW's definitive tag teams." },
      { name: "Booker T & Goldust", partners: ["Goldust"], eras: ["ruthless"], notes: "One of the best comedic odd-couple tag teams ever." }
    ],
    factions: []
  },
  // New Day Big E/Xavier
  105: {
    injuries: [],
    tagTeams: [{ name: "The New Day", partners: ["Kofi Kingston", "Big E", "Xavier Woods"], eras: ["modern"], notes: "The most decorated tag team in WWE history by combined reigns. Power of Positivity. Unicorn horns, pancakes, trombones." }],
    factions: [{ name: "The New Day", members: ["Kofi Kingston", "Big E", "Xavier Woods"], eras: ["modern"], notes: "Started as preachy heels, became beloved babyfaces through sheer force of personality and genuine friendship." }]
  },
  // Alberto Del Rio
  108: {
    injuries: [{ year: "2014", injury: "Concussion", cause: "Suffered concussions during his WWE run that contributed to his absence." }],
    tagTeams: [],
    factions: [{ name: "League of Nations", members: ["Sheamus", "Rusev", "King Barrett"], eras: ["reality"], notes: "International heel stable — won nothing of note and was defeated by New Day at WM32." }]
  },
  856: { injuries: [], tagTeams: [], factions: [{ name: "The Bloodline (Solo's)", members: ["Solo Sikoa", "Tama Tonga", "Tonga Loa"], eras: ["modern"], notes: "Joined Solo Sikoa's version of the Bloodline — the new generation of Samoan dominance." }] },
  858: { injuries: [], tagTeams: [{ name: "Lucha Brothers (AEW)", partners: ["Rey Fenix"], eras: ["modern"], notes: "One of the greatest tag teams in modern wrestling — their work in AEW and on the indie scene was spectacular." }], factions: [] },

  // ── BATCH 2: GOLDEN ERA STARS ──────────────────────────────────
  7: { // Roddy Piper
    injuries: [{ year: "2002", injury: "Hip replacement", cause: "Years of brawling took a severe toll on his hips. He had hip replacement surgery." }, { year: "2015", injury: "Died — cardiac arrest", cause: "Roddy Piper died in his sleep on July 31, 2015 at age 61 from cardiac arrest related to pulmonary embolism." }],
    tagTeams: [],
    factions: [{ name: "Piper's Pit (conceptual)", members: ["Various guests/victims"], eras: ["golden"], notes: "Piper's Pit was THE talk show segment of the 80s — the coconut attack on Jimmy Snuka launched it into legend." }]
  },
  16: { // British Bulldogs (tag team entry)
    injuries: [
      { year: "1987", injury: "Dynamite Kid — severe back injury from years of high-risk moves", cause: "Significant; shortened career dramatically. The team was never the same after Dynamite's decline" },
      { year: "1999", injury: "Davey Boy Smith — serious back injury", cause: "Nearly 18 months. Multiple spinal surgeries; career effectively ended" }
    ],
    tagTeams: [{ name: "British Bulldogs", partners: ["Davey Boy Smith", "Dynamite Kid"], eras: ["golden"], notes: "One of the greatest tag teams ever. Won the titles at WM2 in a classic against The Dream Team. Dynamite Kid's health deteriorated severely later in life." }],
    factions: []
  },
  23: { // Razor Ramon
    injuries: [
      { year: "2022", injury: "Died — complications from hip surgery", cause: "Scott Hall died on March 14, 2022 at age 63. He suffered three heart attacks after hip replacement surgery and was placed on life support before his family made the decision to remove it. His decades-long battle with addiction was well-documented, but his final years saw sobriety through DDP Yoga. He was inducted into the WWE Hall of Fame a second time (as nWo) just days after his death." }
    ],
    tagTeams: [],
    factions: [{ name: "nWo (WCW — as Scott Hall)", members: ["Hulk Hogan", "Kevin Nash"], eras: ["attitude"], notes: "Co-founded the New World Order in WCW. Not a WWE faction but the most impactful stable in wrestling history." }]
  },
  24: { // Diesel
    injuries: [],
    tagTeams: [{ name: "Diesel & Shawn Michaels", partners: ["Shawn Michaels"], eras: ["new-gen"], notes: "His bodyguard-to-champion journey started as HBK's muscle. Their friendship and eventual rivalry defined the New Generation." }],
    factions: [{ name: "nWo (WCW — as Kevin Nash)", members: ["Hulk Hogan", "Scott Hall"], eras: ["attitude"], notes: "As Kevin Nash, co-founded the nWo. The Fingerpoke of Doom is his most infamous moment." }]
  },
  27: { // Goldust (original entry)
    injuries: [],
    tagTeams: [{ name: "Goldust & Booker T", partners: ["Booker T"], eras: ["ruthless"], notes: "One of the best comedic odd-couple tag teams ever." }, { name: "Goldust & Stardust", partners: ["Cody Rhodes"], eras: ["reality"], notes: "Brothers as bizarre golden/cosmic characters." }],
    factions: []
  },
  55: { // Ken Shamrock
    injuries: [{ year: "1999", injury: "Knee injury", cause: "Chronic knee problems contributed to his departure from WWE back to MMA." }],
    tagTeams: [
      { name: "Nation of Domination (brief)", partners: ["The Rock", "Faarooq"], eras: ["attitude"] }
    ],
    factions: [{ name: "The Corporation", members: ["Vince McMahon", "Big Boss Man", "Test"], eras: ["attitude"], notes: "Served as the Corporation's enforcer — the World's Most Dangerous Man doing McMahon's dirty work." }]
  },
  57: { // X-Pac
    injuries: [{ year: "2000", injury: "Neck surgery", cause: "Required neck surgery that kept him out for months during the Attitude Era." }],
    tagTeams: [{ name: "1-2-3 Kid & Razor Ramon", partners: ["Razor Ramon"], eras: ["new-gen"], notes: "Before becoming X-Pac, he was the 1-2-3 Kid who scored the biggest upset in Raw history over Razor Ramon." }],
    factions: [{ name: "D-Generation X", members: ["Triple H", "Road Dogg", "Billy Gunn", "Tori"], eras: ["attitude"], notes: "The heart of DX's second incarnation — his Bronco Buster was the most controversial move in the group." }, { name: "nWo (WWE)", members: ["Hulk Hogan", "Kevin Nash", "Scott Hall"], eras: ["ruthless"], notes: "Joined the nWo when they came to WWE — briefly." }]
  },
  58: { // Road Dogg
    injuries: [],
    tagTeams: [{ name: "New Age Outlaws", partners: ["Billy Gunn"], eras: ["attitude"], notes: "'Oh you didn't know? Your ass better CALL SOMEBODYYY!' The most popular tag team entrance of the Attitude Era. Multiple tag title reigns." }],
    factions: [{ name: "D-Generation X", members: ["Triple H", "X-Pac", "Billy Gunn", "Chyna"], eras: ["attitude"], notes: "DX's loudmouth — his pre-match intros were legendary crowd participation moments." }]
  },
  59: { // Billy Gunn
    injuries: [{ year: "2004", injury: "Shoulder surgery", cause: "Required rotator cuff surgery that limited his later career." }],
    tagTeams: [{ name: "New Age Outlaws", partners: ["Road Dogg"], eras: ["attitude"], notes: "Mr. Ass. Multiple tag title reigns with Road Dogg as the New Age Outlaws." }, { name: "Billy & Chuck", partners: ["Chuck Palumbo"], eras: ["ruthless"], notes: "A controversial tag team that teased a same-sex marriage angle — one of the most talked-about storylines of 2002." }],
    factions: [{ name: "D-Generation X", members: ["Triple H", "X-Pac", "Road Dogg"], eras: ["attitude"], notes: "The muscle of DX's second run." }]
  },
  60: { // Chyna
    injuries: [{ year: "2016", injury: "Died — accidental overdose", cause: "Joanie Laurer (Chyna) died on April 20, 2016 at age 46 from an accidental overdose. Her Hall of Fame induction in 2019 (as part of DX) was long overdue." }],
    tagTeams: [],
    factions: [{ name: "D-Generation X", members: ["Triple H", "Shawn Michaels", "X-Pac", "Road Dogg", "Billy Gunn"], eras: ["attitude"], notes: "The Ninth Wonder of the World — the first woman to enter the Royal Rumble, first to compete for the IC title, and DX's enforcer." }]
  },
  62: { // Trish Stratus
    injuries: [{ year: "2006", injury: "Retirement due to cumulative damage", cause: "Retired at Unforgiven 2006 as Women's Champion in her hometown of Toronto — one of the most perfectly executed retirement moments." }],
    tagTeams: [],
    factions: [
      { name: "T&A (managed)", members: ["Test", "Albert"], eras: ["attitude"], notes: "Managed the team before becoming a solo performer" }
    ]
  },
  64: { // Al Snow
    injuries: [],
    tagTeams: [{ name: "Head Cheese", partners: ["Steve Blackman"], eras: ["attitude"], notes: "Al Snow and his mannequin Head. The Head Cheese team with the stoic Blackman was peak comedy." }],
    factions: []
  },
  78: { // Rey Mysterio
    injuries: [{ year: "2006–2012", injury: "Multiple knee surgeries", cause: "Rey's high-flying style destroyed his knees — he had numerous surgeries throughout the 2000s and 2010s." }, { year: "2015", injury: "Knee surgery (again)", cause: "Another knee procedure — his longevity despite these injuries is remarkable." }],
    tagTeams: [{ name: "Rey & Batista", partners: ["Batista"], eras: ["ruthless"], notes: "Their partnership led to one of the great betrayals — Batista turning on Rey." }, { name: "LWO (Latino World Order)", partners: ["Santos Escobar", "Zelina Vega"], eras: ["modern"], notes: "Revived the LWO on SmackDown as its veteran leader." }],
    factions: [{ name: "LWO (Latino World Order)", members: ["Santos Escobar", "Zelina Vega", "Angel Garza", "Humberto Carrillo"], eras: ["modern"], notes: "Rey's modern faction celebrating Latino heritage in WWE." }]
  },

  // ── BATCH 2: CLASSIC ERA LEGENDS ───────────────────────────────
  351: { injuries: [], tagTeams: [
      { name: "Mil Mascaras & Dos Caras", partners: ["Dos Caras"], eras: ["wwwf"], notes: "Tag pairing of legendary Mexican wrestling brothers." }
    ], factions: [] },
  352: { // Stan Hansen
    injuries: [{ year: "1976", injury: "Broke Bruno Sammartino's neck", cause: "His bodyslam on Bruno broke the champion's neck — one of the most famous injuries in wrestling history. Hansen was not disciplined as it was an accident." }],
    tagTeams: [
      { name: "Hansen & Brody (All Japan)", partners: ["Bruiser Brody"], eras: ["golden"], notes: "One of the most feared tag teams in All Japan history — two legitimately dangerous brawlers who intimidated opponents and promoters alike." }
    ], factions: []
  },
  353: { // Jesse Ventura
    injuries: [
      { year: "1984", injury: "Blood clots in lungs — career-ending", cause: "Blood clots in his lungs, attributed partly to steroid use, ended his in-ring career. He transitioned to commentary and never wrestled full-time again." }
    ], tagTeams: [
      { name: "East-West Connection", partners: ["Adrian Adonis"], eras: ["golden"], notes: "Tag team with Adrian Adonis — AWA and WWF appearances." }
    ], factions: []
  },
  354: { // Superstar Billy Graham
    injuries: [
      { year: "2000s", injury: "Hip replacements, liver damage", cause: "Decades of steroid use led to hip replacements and severe liver damage. Graham has been open about the physical toll." },
      { year: "2023", injury: "Died — natural causes", cause: "Wayne Coleman (Superstar Billy Graham) died on May 17, 2023 at age 79. He had been battling numerous health issues for years, including liver damage and hip problems from decades of steroid use. He was the prototype for every wrestling superstar who followed." }
    ],
    tagTeams: [], factions: []
  },
  355: { injuries: [{ year: "2016", injury: "Died — liver cancer", cause: "Oreal Perras (Ivan Koloff) died on February 18, 2016 at age 74 from liver cancer. He ended Bruno Sammartino's legendary 7-year WWWF title reign in 1971 — one of the most significant title changes in wrestling history." }], tagTeams: [
      { name: "Koloff Family (Ivan, Nikita, Krusher)", partners: ["Nikita Koloff", "Krusher Khruschev"], eras: ["golden"], notes: "The Russian wrestling family stable in the NWA — not a WWF group but defined the Koloff legacy." }
    ], factions: [] },
  356: { injuries: [{ year: "2012", injury: "Died — natural causes", cause: "Joe Scarpa (Chief Jay Strongbow) died on April 3, 2012 at age 83. He was one of the WWWF's most popular babyfaces throughout the 1970s and early 1980s, known for his war dance and chops." }], tagTeams: [
      { name: "Chief Jay Strongbow & Billy White Wolf", partners: ["Billy White Wolf"], eras: ["wwwf"], notes: "Tag title reign together in 1977." },
      { name: "Chief Jay & Jules Strongbow", partners: ["Jules Strongbow"], eras: ["golden"], notes: "Brothers teaming together in the early 80s." }
    ], factions: [] },
  357: { injuries: [{ year: "2016", injury: "Died — natural causes", cause: "Blackjack Mulligan (Robert Windham) died on April 7, 2016 at age 73. Grandfather of Bray Wyatt and Bo Dallas." }], tagTeams: [
      { name: "Blackjacks (Mulligan & Lanza)", partners: ["Blackjack Lanza"], eras: ["wwwf"], notes: "Won the WWWF Tag Titles together. Managed by Bobby Heenan. Cowboys in an era of tag team dominance." }
    ], factions: [] },
  358: { // Dusty Rhodes
    injuries: [
      { year: "2015", injury: "Died — abdominal complications", cause: "Virgil Runnels Jr. (Dusty Rhodes) died on June 11, 2015 at age 69 from complications related to a fall. The American Dream — one of the most charismatic performers in wrestling history. His work as an NXT promo coach in his final years was transformative for the next generation of WWE talent." }
    ],
    tagTeams: [
      { name: "Dusty & Magnum T.A.", partners: ["Magnum T.A."], eras: ["golden"], notes: "NWA tag partnership — two of the most over babyfaces of the mid-80s." }
    ],
    factions: [{ name: "Rhodes Family", members: ["Cody Rhodes", "Goldust (Dustin)"], eras: ["reality"], notes: "The American Dream's sons both became WWE stars. Dusty's NXT promo work was legendary before his passing in 2015." }]
  },
  359: { injuries: [], tagTeams: [{ name: "The Valiant Brothers", partners: ["Jimmy Valiant", "Johnny Valiant"], eras: ["golden"], notes: "Classic 1970s-80s tag team — multiple WWF Tag Team Championship reigns." }], factions: [] },
  360: { // Wild Samoans
    injuries: [],
    tagTeams: [{ name: "Wild Samoans", partners: ["Afa", "Sika"], eras: ["golden"], notes: "Three-time WWF Tag Team Champions. The foundation of the Anoa'i wrestling dynasty — Roman Reigns' grandfather and great-uncle." }],
    factions: [{ name: "Anoa'i Family Dynasty", members: ["The Rock", "Roman Reigns", "Usos", "Yokozuna", "Rikishi", "Umaga"], eras: ["golden", "modern"], notes: "The most influential wrestling family in history." }]
  },
  379: { injuries: [], tagTeams: [{ name: "Legacy", partners: ["Cody Rhodes", "Randy Orton"], eras: ["pg"], notes: "Second-generation stars serving as Randy Orton's proteges — Legacy was the next Evolution." }], factions: [{ name: "Legacy", members: ["Randy Orton", "Cody Rhodes"], eras: ["pg"], notes: "All three were sons of famous wrestlers — a natural faction." }] },
  380: { injuries: [], tagTeams: [{ name: "Hawkins & Ryder", partners: ["Zack Ryder"], eras: ["modern"], notes: "Won the Raw Tag Titles at WM35 — an emotional payoff for two journeymen." }, { name: "La Familia", partners: ["Edge", "Zack Ryder", "Vickie Guerrero"], eras: ["ruthless"], notes: "Edge's SmackDown stable." }], factions: [] },
  382: { // Maria Kanellis
    injuries: [],
    tagTeams: [
      { name: "Maria & Mike Kanellis", partners: ["Mike Bennett (husband)"], eras: ["modern"], notes: "Returned to WWE with husband Mike Bennett — their real-life relationship was worked into their storyline." }
    ],
    factions: []
  },
  383: { // Michelle McCool
    injuries: [],
    tagTeams: [{ name: "LayCool", partners: ["Layla El"], eras: ["pg"], notes: "The best women's heel act of the PG era — mean-girl bullying and 'Flawless' catchphrase." }],
    factions: []
  },
  384: { // Layla
    injuries: [],
    tagTeams: [{ name: "LayCool", partners: ["Michelle McCool"], eras: ["pg"], notes: "Her partnership with McCool as LayCool was genuinely entertaining heel work." }],
    factions: []
  },
  385: { // Gail Kim
    injuries: [],
    tagTeams: [],
    factions: []
  },
  386: { // Boogeyman
    injuries: [],
    tagTeams: [],
    factions: []
  },
  388: { // Umaga
    injuries: [{ year: "2009", injury: "Died — heart attack", cause: "Eddie Fatu died on December 4, 2009 at age 36 from a heart attack related to acute toxicity. Another tragic loss from the Anoa'i family." }],
    tagTeams: [],
    factions: [{ name: "Anoa'i Family", members: ["Rikishi (brother)", "The Usos (nephews)", "Roman Reigns (cousin)"], eras: ["pg"], notes: "Part of the Anoa'i dynasty — his undefeated streak and Samoan Spike were unforgettable." }]
  },
  401: { injuries: [], tagTeams: [{ name: "Los Lotharios", partners: ["Humberto Carrillo"], eras: ["modern"], notes: "Rose-giving seductive tag team." }], factions: [{ name: "LWO", members: ["Rey Mysterio", "Santos Escobar"], eras: ["modern"], notes: "Latino World Order." }] },
  402: { injuries: [], tagTeams: [{ name: "Los Lotharios", partners: ["Angel Garza"], eras: ["modern"], notes: "Cousin tag team." }], factions: [] },
  403: { // Santos Escobar
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Legado del Fantasma", members: ["Zelina Vega", "Elektra Lopez"], eras: ["modern"], notes: "His NXT faction was one of the best-presented stables." }, { name: "LWO", members: ["Rey Mysterio", "Zelina Vega", "Angel Garza", "Humberto Carrillo"], eras: ["modern"], notes: "A prominent member of the revived Latino World Order." }]
  },
  409: { // Raquel Rodriguez
    injuries: [{ year: "2023", injury: "Health issues", cause: "Took extended time off for undisclosed health reasons." }],
    tagTeams: [
      { name: "Raquel & Dakota (NXT Women's Tag champs)", partners: ["Dakota Kai"], eras: ["modern"], notes: "Before Dakota turned on her — their friendship and subsequent betrayal was NXT's best women's storyline of 2022." },
      { name: "Raquel & Aliyah", partners: ["Aliyah"], eras: ["modern"], notes: "Won the Women's Tag Titles on the main roster." }
    ],
    factions: []
  },
  411: { // Roxanne Perez
    injuries: [{ year: "2023", injury: "Heart condition discovered", cause: "A heart condition was discovered during a medical check — she was cleared and returned." }],
    tagTeams: [
      { name: "Cora Jade & Roxanne Perez", partners: ["Cora Jade"], eras: ["modern"], notes: "NXT Women's Tag champions together before Cora's heel turn betrayal." }
    ],
    factions: []
  },
  413: { // Ludwig Kaiser
    injuries: [],
    tagTeams: [
      { name: "Imperium", partners: ["Gunther", "Giovanni Vinci"], eras: ["modern"], notes: "The voice of Imperium — his intro of Gunther elevates every match." }
    ],
    factions: [{ name: "Imperium", members: ["Gunther", "Giovanni Vinci"], eras: ["modern"], notes: "Gunther's most loyal lieutenant — his transformation from Marcel Barthel was impressive." }]
  },
  414: { injuries: [], tagTeams: [
      { name: "Imperium", partners: ["Gunther", "Ludwig Kaiser"], eras: ["modern"], notes: "The athletic member of the most cohesive modern WWE stable." }
    ], factions: [{ name: "Imperium", members: ["Gunther", "Ludwig Kaiser"], eras: ["modern"], notes: "Third Imperium member." }] },
  415: { // JD McDonagh
    injuries: [{ year: "2024", injury: "Liver laceration", cause: "Suffered a lacerated liver during a dive spot at a PLE — a legitimately dangerous and scary injury." }],
    tagTeams: [{ name: "JD & Finn Bálor", partners: ["Finn Bálor"], eras: ["modern"], notes: "Won the Tag Titles as part of the Judgment Day." }],
    factions: [{ name: "Judgment Day", members: ["Finn Bálor", "Rhea Ripley", "Damian Priest", "Dominik Mysterio"], eras: ["modern"], notes: "Added to Judgment Day as a tag specialist." }]
  },
  416: { // Bronson Reed
    injuries: [{ year: "2024", injury: "Broken foot/ankle", cause: "Suffered a broken foot during a match — required surgery." }],
    tagTeams: [],
    factions: []
  },
  418: { // Ridge Holland
    injuries: [{ year: "2021", injury: "Broken patella", cause: "Broke his kneecap during an NXT match — missed months." }],
    tagTeams: [{ name: "Brawling Brutes", partners: ["Sheamus", "Butch"], eras: ["modern"], notes: "Part of the Brawling Brutes." }],
    factions: [{ name: "Chase University", members: ["Andre Chase", "Duke Hudson", "Thea Hail"], eras: ["modern"], notes: "Joined Chase University in NXT after his main roster run." }]
  },
  421: { injuries: [], tagTeams: [], factions: [{ name: "Imperium", members: ["Gunther", "Ludwig Kaiser", "Giovanni Vinci"], eras: ["modern"], notes: "European pride stable emphasizing discipline and mat wrestling." }] },
  423: { injuries: [], tagTeams: [
      { name: "Cora Jade & Roxanne Perez", partners: ["Roxanne Perez"], eras: ["modern"], notes: "NXT Women's Tag champs before Cora's explosive heel turn on Roxanne." }
    ], factions: [] },
  424: { // Indi Hartwell
    injuries: [],
    tagTeams: [{ name: "InDex", partners: ["Dexter Lumis"], eras: ["modern"], notes: "The InDex wedding was NXT's most-watched segment in years — pure comedy gold." }],
    factions: [{ name: "The Way", members: ["Johnny Gargano", "Candice LeRae", "Austin Theory"], eras: ["modern"], notes: "NXT's funniest family faction." }]
  },
  425: { // Dexter Lumis
    injuries: [],
    tagTeams: [{ name: "InDex", partners: ["Indi Hartwell"], eras: ["modern"], notes: "The silent stalker who fell in love — NXT's strangest romance." }],
    factions: []
  },
  426: { injuries: [], tagTeams: [{ name: "A-Town Down Under", partners: ["Austin Theory"], eras: ["modern"], notes: "Tag team with Theory — the Grayson Waller Effect." }], factions: [] },
  433: { // Harley Race
    injuries: [{ year: "2019", injury: "Died — lung cancer", cause: "Harley Race died on August 1, 2019 at age 76 from lung cancer." }],
    tagTeams: [],
    factions: [
      { name: "Heenan Family", members: ["Bobby Heenan", "Mr. Perfect", "Andre the Giant"], eras: ["golden"], notes: "Bobby Heenan managed him in WWF's 'King' Harley Race phase — though Race was past his NWA peak by then." }
    ]
  },
  435: { injuries: [{ year: "2019", injury: "Died — suspected heart failure", cause: "King Kong Bundy (Christopher Pallies) died on March 4, 2019 at age 61." }], tagTeams: [], factions: [
      { name: "Heenan Family", members: ["Bobby Heenan", "Andre the Giant", "Rick Rude"], eras: ["golden"], notes: "One of Heenan's earliest big-money clients — faced Hogan in the steel cage at WM2." }
    ] },
  436: { // The Warlord
    injuries: [],
    tagTeams: [{ name: "Powers of Pain", partners: ["The Barbarian"], eras: ["golden"], notes: "Face-painted monster tag team that feuded with Demolition." }],
    factions: [{ name: "Heenan Family", members: ["Bobby Heenan"], eras: ["golden"], notes: "Managed by Heenan after Powers of Pain split." }]
  },
  437: { // The Barbarian
    injuries: [],
    tagTeams: [{ name: "Powers of Pain", partners: ["The Warlord"], eras: ["golden"], notes: "Monster tag team with face paint and raw power." }],
    factions: [{ name: "Heenan Family", members: ["Bobby Heenan"], eras: ["golden"], notes: "Part of the Heenan Family." }]
  },

  // ── BATCH 2: MID-TO-LATE ENTRIES (438+) ─────────────────────────
  438: { injuries: [], tagTeams: [
      { name: "Strike Force", partners: ["Tito Santana"], eras: ["golden"], notes: "Won the WWF Tag Titles in 1987. Martel's heel turn — spraying cologne to blind Santana — launched his 'Model' character." },
      { name: "AWA World Tag Team", partners: ["Tom Zenk (Z-Man)"], eras: ["golden"], notes: "Held the AWA tag titles before his WWF run." }
    ], factions: [] },
  440: { injuries: [], tagTeams: [
      { name: "Islanders", partners: ["Tama (Siva Afi's son)"], eras: ["golden"], notes: "Haku and Tama as the Islanders — a heel team who stole British Bulldog's dog Matilda at WM3." },
      { name: "Faces of Fear", partners: ["The Barbarian"], eras: ["attitude"], notes: "WCW's most feared team. Both men had documented real-world incidents that confirmed they were among the toughest in wrestling." }
    ], factions: [
      { name: "Heenan Family (briefly)", members: ["Bobby Heenan", "Barbarian"], eras: ["golden"], notes: "Managed by Bobby Heenan during his Haku singles run." }
    ] },
  442: { injuries: [], tagTeams: [], factions: [
      { name: "D-Generation X support (as Kat)", members: ["Jerry Lawler (husband)", "DX associates"], eras: ["attitude"], notes: "Jerry Lawler's real-life wife during the Attitude Era's most provocative period." }
    ] },
  443: { injuries: [], tagTeams: [], factions: [
      { name: "Goldust's manager / PMS (Pretty Mean Sisters)", members: ["Jacqueline", "Ryan Shamrock"], eras: ["attitude"], notes: "Terri's PMS faction was one of the Attitude Era's more memorable heel woman stable concepts." }
    ] },
  446: { injuries: [], tagTeams: [], factions: [] },
  447: { injuries: [], tagTeams: [
      { name: "Nidia & Jamie Noble", partners: ["Jamie Noble"], eras: ["ruthless"], notes: "Real-life couple on SmackDown — won the Cruiserweight title together in storyline. Her Tough Enough victory was what brought her to WWE." }
    ], factions: [] },
  771: { injuries: [], tagTeams: [{ name: "Batista & Rey", partners: ["Batista", "Rey Mysterio"], eras: ["ruthless"], notes: "Their partnership before Batista's heel turn." }], factions: [] },
  837: { injuries: [{ year: "2016", injury: "Died — natural causes", cause: "Harry Fujiwara (Mr. Fuji) died on August 28, 2016 at age 82. His career spanned both in-ring championship work and his legendary managing career." }], tagTeams: [
      { name: "Mr. Fuji tag championships (as wrestler)", partners: ["Mr. Saito", "Tor Kamata"], eras: ["wwwf"], notes: "Won the WWF Tag Titles as a wrestler before his managing career defined his legacy." }
    ], factions: [] },
  478: { // Curtis Axel
    injuries: [],
    tagTeams: [{ name: "The B-Team", partners: ["Bo Dallas"], eras: ["modern"], notes: "Won the Raw Tag Titles." }, { name: "Rybaxel", partners: ["Ryback"], eras: ["reality"], notes: "Comedy tag team." }],
    factions: [{ name: "Axelmania", members: ["Solo"], eras: ["reality"], notes: "Brief Hulkamania parody gimmick — actually got over." }]
  },
  482: { // Andrade
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Los Ingobernables (NJPW heritage)", members: ["Various"], eras: ["modern"], notes: "His NXT run with Zelina Vega was excellent — main roster booking failed him." }]
  },
  483: { // Keith Lee
    injuries: [{ year: "2021", injury: "Heart inflammation / COVID complications", cause: "Suffered heart inflammation related to COVID-19 — was sidelined for months and his push was derailed." }],
    tagTeams: [],
    factions: []
  },
  486: { // Ricochet
    injuries: [
      { year: "2019", injury: "Shoulder injury", cause: "Shoulder injury requiring surgery during a promising early main roster run." }
    ],
    tagTeams: [
      { name: "Ricochet & Aleister Black", partners: ["Aleister Black"], eras: ["modern"], notes: "One of the most athletically breathtaking tag team pairings in recent WWE — their dual moonsault/Black Mass combo was stunning." }
    ],
    factions: []
  },
  491: { injuries: [], tagTeams: [{ name: "Cargill & Belair", partners: ["Bianca Belair"], eras: ["modern"], notes: "WM40 tag champs." }], factions: [] },
  492: { injuries: [], tagTeams: [
      { name: "Carm & Trick", partners: ["Carmelo Hayes"], eras: ["modern"], notes: "Started as Carmelo's hype man — their eventual rivalry after years of friendship was NXT's most emotionally layered story." }
    ], factions: [] },
  493: { injuries: [
      { year: "2022", injury: "Torn bicep", cause: "Suffered a torn bicep during his NXT UK run — required surgery and rehabilitation before his NXT championship run." }
    ], tagTeams: [], factions: [] },
  495: { // Wes Lee
    injuries: [{ year: "2023", injury: "Knee injury", cause: "Knee injury that sidelined him during his NXT North American Championship run." }],
    tagTeams: [{ name: "MSK", partners: ["Nash Carter"], eras: ["modern"], notes: "NXT Tag Champions — their high-flying style was electrifying." }],
    factions: []
  },
  496: { injuries: [], tagTeams: [], factions: [{ name: "LWO", members: ["Rey Mysterio", "Santos Escobar", "Zelina Vega"], eras: ["modern"], notes: "Part of the Latino World Order." }] },
  497: { // Axiom
    injuries: [],
    tagTeams: [{ name: "Axiom & Nathan Frazer", partners: ["Nathan Frazer"], eras: ["modern"], notes: "Won the NXT Tag Titles — incredible high-flying tag team chemistry." }],
    factions: []
  },
  498: { // Nathan Frazer
    injuries: [],
    tagTeams: [{ name: "Axiom & Nathan Frazer", partners: ["Axiom"], eras: ["modern"], notes: "NXT Tag Champions — their aerial double-team moves were spectacular." }],
    factions: []
  },
  499: { // Pretty Deadly
    injuries: [],
    tagTeams: [{ name: "Pretty Deadly", partners: ["Kit Wilson", "Elton Prince"], eras: ["modern"], notes: "NXT Tag Champions with a flamboyant 70s rock star gimmick — surprisingly effective heels." }],
    factions: []
  },
  500: { // Chelsea Green
    injuries: [{ year: "2020", injury: "Broken wrist", cause: "Broke her wrist on her SmackDown debut — devastating timing." }],
    tagTeams: [{ name: "Chelsea & Piper", partners: ["Piper Niven"], eras: ["modern"], notes: "Won the WWE Women's Tag Titles — their chemistry was excellent." }],
    factions: []
  },
  505: { // Lyra Valkyria
    injuries: [],
    tagTeams: [],
    factions: []
  },
  507: { // DDP
    injuries: [
      { year: "1998", injury: "Ribs — worked through multiple injuries", cause: "DDP was famous for working through injuries that would sideline others — his late start in wrestling meant he had less wear but more motivation to push through." }
    ],
    tagTeams: [
      { name: "DDP & Karl Malone (WCW Celebrity)", partners: ["Karl Malone"], eras: ["attitude"], notes: "WCW's most memorable celebrity tag team — basketball legend Karl Malone teamed with DDP vs Hogan & Rodman at Bash at the Beach 1998." }
    ],
    factions: []
  },
  508: { // Evan Bourne
    injuries: [{ year: "2012", injury: "Broken foot / suspension", cause: "Broke his foot and then received Wellness Policy violations that ended his WWE run." }],
    tagTeams: [{ name: "Air Boom", partners: ["Kofi Kingston"], eras: ["pg"], notes: "Tag Champions — their aerial offense was spectacular." }],
    factions: []
  },
  517: { injuries: [], tagTeams: [{ name: "Katana Chance & Kayden Carter", partners: ["Katana Chance", "Kayden Carter"], eras: ["modern"], notes: "NXT Women's Tag Champions — high-energy babyface team." }], factions: [] },
  518: { // Tony D'Angelo
    injuries: [],
    tagTeams: [
      { name: "The Family (D'Angelo)", partners: ["Stacks", "Two Dimes", "Adriana Rizzo"], eras: ["modern"], notes: "Tony D's Cosa Nostra — one of NXT's most cohesive faction concepts." }
    ],
    factions: [{ name: "The D'Angelo Family", members: ["Stacks", "Adriana Rizzo", "Luca Crusifino"], eras: ["modern"], notes: "NXT's mafia faction — Tony D as the Don of NXT." }]
  },
  519: { injuries: [], tagTeams: [
      { name: "The D'Angelo Family", partners: ["Tony D'Angelo"], eras: ["modern"], notes: "Stacks as Tony D's right hand man — their chemistry anchors the entire faction." }
    ], factions: [{ name: "D'Angelo Family", members: ["Tony D'Angelo", "Adriana Rizzo"], eras: ["modern"], notes: "Tony D's right-hand man." }] },
  520: { // Julius Creed
    injuries: [],
    tagTeams: [{ name: "Creed Brothers", partners: ["Brutus Creed"], eras: ["modern"], notes: "Legitimate amateur wrestlers — their NXT tag matches were incredibly physical." }],
    factions: [{ name: "Diamond Mine", members: ["Roderick Strong", "Brutus Creed", "Ivy Nile"], eras: ["modern"], notes: "NXT's wrestling-focused faction." }]
  },
  524: { // Tyler Bate
    injuries: [],
    tagTeams: [{ name: "Moustache Mountain", partners: ["Trent Seven"], eras: ["modern"], notes: "NXT UK tag team." }],
    factions: [{ name: "British Strong Style", members: ["Pete Dunne", "Trent Seven"], eras: ["modern"], notes: "UK indie legends." }]
  },
  527: { // Pete Dunne
    injuries: [],
    tagTeams: [{ name: "Brawling Brutes", partners: ["Sheamus", "Ridge Holland"], eras: ["modern"], notes: "As Butch on the main roster." }],
    factions: [{ name: "British Strong Style", members: ["Tyler Bate", "Trent Seven"], eras: ["modern"], notes: "Original BSS." }]
  },
  529: { // Kay Lee Ray / Alba Fyre
    injuries: [],
    tagTeams: [{ name: "Alba Fyre & Isla Dawn", partners: ["Isla Dawn"], eras: ["modern"], notes: "Won the NXT and WWE Women's Tag Titles — witchy gimmick." }],
    factions: []
  },
  530: { // Isla Dawn
    injuries: [],
    tagTeams: [{ name: "Alba Fyre & Isla Dawn", partners: ["Alba Fyre"], eras: ["modern"], notes: "Tag partner in the witchy duo." }],
    factions: []
  },
  537: { injuries: [], tagTeams: [{ name: "Bloodline tag", partners: ["Tonga Loa"], eras: ["modern"], notes: "Tag team within Solo's Bloodline." }], factions: [{ name: "Solo's Bloodline", members: ["Solo Sikoa", "Jacob Fatu", "Tonga Loa"], eras: ["modern"], notes: "New Bloodline." }] },
  538: { injuries: [], tagTeams: [{ name: "Guerrillas of Destiny (NJPW)", partners: ["Tama Tonga"], eras: ["modern"], notes: "NJPW tag team before WWE." }], factions: [{ name: "Solo's Bloodline", members: ["Solo Sikoa", "Jacob Fatu", "Tama Tonga"], eras: ["modern"], notes: "Part of the new Bloodline." }] },
  551: { // Vader
    injuries: [{ year: "2018", injury: "Died — heart failure / pneumonia", cause: "Leon White (Vader) died on June 18, 2018 at age 63 from pneumonia and heart failure." }],
    tagTeams: [],
    factions: [{ name: "Camp Cornette", members: ["Jim Cornette (manager)", "Owen Hart", "British Bulldog"], eras: ["new-gen"], notes: "Managed by Jim Cornette in mid-90s WWF." }]
  },
  552: { // Arn Anderson
    injuries: [
      { year: "1997", injury: "Career-ending tricep tear", cause: "A torn tricep ended his in-ring career. His retirement speech on Nitro — in which he passed the torch to Curt Hennig — is one of the most emotionally genuine promos in wrestling history." }
    ],
    tagTeams: [{ name: "Brain Busters", partners: ["Tully Blanchard"], eras: ["golden"], notes: "With Tully in WWF managed by Bobby Heenan." }],
    factions: [{ name: "Four Horsemen", members: ["Ric Flair", "Tully Blanchard", "Barry Windham"], eras: ["golden"], notes: "The Enforcer of the Horsemen." }]
  },
  553: { injuries: [], tagTeams: [{ name: "Brain Busters", partners: ["Arn Anderson"], eras: ["golden"], notes: "Tully & Arn in WWF." }], factions: [{ name: "Four Horsemen", members: ["Ric Flair", "Arn Anderson"], eras: ["golden"], notes: "Original Horseman." }] },
  554: { injuries: [], tagTeams: [
      { name: "US Express", partners: ["Mike Rotundo"], eras: ["golden"], notes: "All-American babyface team managed by Capt. Lou Albano. Won the Tag Titles at WM1." },
      { name: "Four Horsemen (tag component)", partners: ["Arn Anderson", "Tully Blanchard"], eras: ["golden"], notes: "His turn to join the Horsemen — betraying Mike Rotundo and the US Express — was a masterfully built heel turn." }
    ], factions: [{ name: "Four Horsemen", members: ["Ric Flair", "Arn Anderson", "Tully Blanchard"], eras: ["golden"], notes: "Horseman." }] },
  555: { injuries: [], tagTeams: [
      { name: "US Express", partners: ["Barry Windham"], eras: ["golden"], notes: "WM1 tag title defense. Their patriotic babyface act was beloved before Windham's betrayal." },
      { name: "Money Inc.", partners: ["Ted DiBiase"], eras: ["new-gen"], notes: "IRS and DiBiase as the corporate villain tag team. Their feuds with the Legion of Doom, Natural Disasters, and Mega-Maniacs were defining New Gen tag stories." }
    ], factions: [] },
  556: { injuries: [{ year: "2018", injury: "Died — traumatic brain injury", cause: "Jim Neidhart died on August 13, 2018 at age 63 after suffering a fall at his home that resulted in a traumatic brain injury. 'The Anvil' was the power half of the Hart Foundation and father of Natalya." }], tagTeams: [
      { name: "Hart Foundation", partners: ["Bret Hart"], eras: ["golden", "new-gen"], notes: "The Anvil's power and Bret's technical mastery was the perfect balance. Two tag title reigns and one of wrestling's most iconic team aesthetics — pink and black." }
    ], factions: [
      { name: "Hart Foundation 1997", members: ["Bret Hart", "Owen Hart", "British Bulldog", "Brian Pillman"], eras: ["new-gen"], notes: "The extended Hart family faction — Canada's pride and America's villains." }
    ] },
  559: { injuries: [{ year: "2007", injury: "Died — drug overdose", cause: "Brian Adams (Crush) died on August 13, 2007 at age 43 from an accidental drug overdose. He had three distinct WWE runs: lovable Hawaiian babyface, heel Crush allied with Randy Savage, and biker Crush in the Disciples of Apocalypse." }], tagTeams: [
      { name: "Demolition (third member)", partners: ["Ax", "Smash"], eras: ["golden"], notes: "Added as the third Demolition member to feud with the Legion of Doom." },
      { name: "Disciples of Apocalypse", partners: ["8-Ball", "Skull", "Chainz"], eras: ["attitude"], notes: "Biker stable during the Attitude Era — Crush as the leader of the DOA." }
    ], factions: [] },

  1022: { // Buddy Rogers
    injuries: [{ year: '1992', injury: 'Died — multiple strokes', cause: 'Buddy Rogers died on June 26 1992 at age 71 from multiple strokes. He was the first-ever WWWF World Heavyweight Champion and the original Nature Boy whose persona directly inspired Ric Flair.' }],
    tagTeams: [],
    factions: [],
  },
  1023: { // Bob Orton Jr.
    injuries: [{ year: '1985', injury: 'Broken arm (kayfabe)', cause: 'Wore a cast on his forearm as a weapon for months that became his trademark' }],
    tagTeams: [],
    factions: [{ name: 'Pipers Corner', members: ['Roddy Piper', 'Bob Orton Jr.'], eras: ['golden'], notes: 'Enforcer and bodyguard for Rowdy Roddy Piper' }],
  },
  1024: { // Rocky Johnson
    injuries: [{ year: '2020', injury: 'Died — undisclosed', cause: 'Rocky Johnson died on January 15 2020 at age 75. Father of Dwayne The Rock Johnson and one half of the first Black tag team champions in WWF history.' }],
    tagTeams: [{ name: 'Soul Patrol', partners: ['Tony Atlas'], eras: ['wwwf'], notes: 'First Black tag team champions in WWF history' }],
    factions: [],
  },
  1025: { // Tony Atlas
    injuries: [],
    tagTeams: [{ name: 'Soul Patrol', partners: ['Rocky Johnson'], eras: ['wwwf'], notes: 'First Black tag team champions in WWF history' }],
    factions: [],
  },
  1026: { // Bobo Brazil
    injuries: [{ year: '1998', injury: 'Died — stroke', cause: 'Bobo Brazil died on January 20 1998 at age 73 from a stroke. One of the most important pioneers for Black wrestlers in professional wrestling history.' }],
    tagTeams: [],
    factions: [],
  },
  1027: { // Larry Zbyszko
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1028: { // Ernie Ladd
    injuries: [{ year: '2007', injury: 'Died — colon cancer', cause: 'Ernie Ladd died on March 10 2007 at age 68 from colon cancer. Former NFL star who became one of wrestlings biggest box office attractions.' }],
    tagTeams: [],
    factions: [],
  },
  1029: { // Ken Patera
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1030: { // Ivan Putski
    injuries: [],
    tagTeams: [{ name: 'Putski and Santana', partners: ['Tito Santana'], eras: ['wwwf'], notes: 'WWF Tag Team Champions' }],
    factions: [],
  },
  1031: { // Tony Garea
    injuries: [],
    tagTeams: [{ name: 'Garea Tag Teams', partners: ['Haystacks Calhoun', 'Dean Ho', 'Larry Zbyszko', 'Rick Martel'], eras: ['wwwf'], notes: 'Five-time tag team champion with four different partners' }],
    factions: [],
  },
  1032: { // Professor Toru Tanaka
    injuries: [{ year: '2000', injury: 'Died — heart attack', cause: 'Professor Toru Tanaka died on August 22 2000 at age 70 from a heart attack. Three-time WWWF Tag Team Champion alongside Mr. Fuji.' }],
    tagTeams: [{ name: 'Fuji and Tanaka', partners: ['Mr. Fuji'], eras: ['wwwf'], notes: 'Three-time WWWF Tag Team Champions known for salt-throwing tactics' }],
    factions: [],
  },
  1033: { // Arnold Skaaland
    injuries: [{ year: '2007', injury: 'Died — natural causes', cause: 'Arnold Skaaland died on September 14 2007 at age 83. Managed both Bruno Sammartino and Bob Backlund during their legendary championship reigns.' }],
    tagTeams: [],
    factions: [],
  },
  1034: { // Bam Bam Bigelow
    injuries: [{ year: '1987', injury: 'Knee injury', cause: 'Led to his departure from WWF during first run' }, { year: '2007', injury: 'Died — drug overdose', cause: 'Bam Bam Bigelow died on January 19 2007 at age 45 from a drug overdose involving cocaine and the anti-anxiety drug alprazolam. Despite weighing nearly 400 pounds he could perform moonsaults and cartwheels.' }],
    tagTeams: [],
    factions: [{ name: 'Million Dollar Corporation', members: ['Ted DiBiase', 'Bam Bam Bigelow', 'Nikolai Volkoff', 'Tatanka', 'IRS'], eras: ['new-gen'], notes: 'Managed by Ted DiBiase' }],
  },
  1035: { // Kerry Von Erich
    injuries: [{ year: '1986', injury: 'Amputation of right foot', cause: 'Motorcycle accident - wrestled with a prosthetic foot that fans and opponents rarely knew about' }, { year: '1993', injury: 'Died — suicide', cause: 'Kerry Von Erich died on February 18 1993 at age 33 from a self-inflicted gunshot wound. He was facing drug possession charges at the time. The most charismatic of the Von Erich brothers and part of wrestlings most tragic family.' }],
    tagTeams: [],
    factions: [{ name: 'Von Erich Family', members: ['Kerry Von Erich', 'Kevin Von Erich', 'David Von Erich', 'Mike Von Erich'], eras: ['golden'], notes: 'Legendary Texas wrestling dynasty' }],
  },
  1036: { // The Dynamite Kid
    injuries: [{ year: '1986', injury: 'Severe back injuries', cause: 'Accumulated damage from pioneering high-impact style' }, { year: '1997', injury: 'Spinal damage causing paralysis', cause: 'Years of abuse left him wheelchair-bound for the rest of his life' }, { year: '2018', injury: 'Died — natural causes', cause: 'The Dynamite Kid died on December 5 2018 — his 60th birthday — from natural causes. Years of steroid abuse and a punishing wrestling style had left him wheelchair-bound. He revolutionized the junior heavyweight style.' }],
    tagTeams: [{ name: 'The British Bulldogs', partners: ['Davey Boy Smith'], eras: ['golden'], notes: 'Won WWF Tag Team Championship at WrestleMania 2' }],
    factions: [],
  },
  1041: { // Virgil
    injuries: [{ year: '2023', injury: 'Died — health complications', cause: 'Virgil died on February 18 2023 at age 61 after battling multiple health issues. Best known as Ted DiBiases personal bodyguard and servant who won the Million Dollar Championship at SummerSlam 1991.' }],
    tagTeams: [],
    factions: [{ name: 'Million Dollar Corporation', members: ['Ted DiBiase', 'Virgil'], eras: ['golden'], notes: 'DiBiases personal bodyguard and servant before his babyface turn' }],
  },
  1042: { // Hercules Hernandez
    injuries: [{ year: '2004', injury: 'Died — heart disease', cause: 'Hercules Hernandez died on March 6 2004 at age 47 from heart disease. A massively muscular member of Bobby Heenans Family who later teamed with Paul Roma as Power and Glory.' }],
    tagTeams: [{ name: 'Power and Glory', partners: ['Paul Roma'], eras: ['golden'], notes: 'Tag team managed by Slick' }],
    factions: [{ name: 'The Heenan Family', members: ['Bobby Heenan', 'Hercules', 'Andre the Giant', 'King Kong Bundy', 'Big John Studd', 'The Islanders'], eras: ['golden'], notes: 'Managed by Bobby The Brain Heenan' }],
  },
  1043: { // One Man Gang
    injuries: [],
    tagTeams: [{ name: 'The Twin Towers', partners: ['Big Boss Man'], eras: ['golden'], notes: 'Akeem the African Dream and Big Boss Man managed by Slick' }],
    factions: [],
  },
  1044: { // Jacques Rougeau
    injuries: [],
    tagTeams: [{ name: 'The Fabulous Rougeaus', partners: ['Raymond Rougeau'], eras: ['golden'], notes: 'Brother tag team known for the ironic All American Boys heel theme' }, { name: 'The Quebecers', partners: ['Pierre Carl Ouellet'], eras: ['new-gen'], notes: 'Three-time WWF Tag Team Champions' }],
    factions: [],
  },
  1045: { // Raymond Rougeau
    injuries: [],
    tagTeams: [{ name: 'The Fabulous Rougeaus', partners: ['Jacques Rougeau'], eras: ['golden'], notes: 'Brother tag team from the legendary Rougeau wrestling family' }],
    factions: [],
  },
  1046: { // Lanny Poffo
    injuries: [{ year: '2023', injury: 'Died — natural causes', cause: 'Lanny Poffo died on February 2 2023 at age 68. Brother of Randy Macho Man Savage who was known as both Leaping Lanny Poffo and The Genius.' }],
    tagTeams: [],
    factions: [],
  },

  1047: { // Ronnie Garvin
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1049: { // Ron Bass
    injuries: [{ year: '2017', injury: 'Died — undisclosed', cause: 'Ron Bass died on January 7 2017 at age 68. A vicious cowboy heel known for his bullwhip Miss Betsy and for attacking Brutus Beefcake with his spurs.' }],
    tagTeams: [],
    factions: [],
  },
  1050: { // B. Brian Blair
    injuries: [],
    tagTeams: [{ name: 'The Killer Bees', partners: ['Jim Brunzell'], eras: ['golden'], notes: 'Used identical masks to confuse opponents with illegal twin switches' }],
    factions: [],
  },
  1051: { // Jim Brunzell
    injuries: [],
    tagTeams: [{ name: 'The Killer Bees', partners: ['B. Brian Blair'], eras: ['golden'], notes: 'Known for their masked twin magic strategy' }],
    factions: [],
  },
  1052: { // Butch Reed
    injuries: [{ year: '2021', injury: 'Died — undisclosed', cause: 'Butch Reed died on February 5 2021 at age 66. Known as The Natural in the WWF and later formed the dominant tag team Doom with Ron Simmons in WCW.' }],
    tagTeams: [],
    factions: [],
  },
  1053: { // Bart Gunn
    injuries: [],
    tagTeams: [{ name: 'The Smoking Gunns', partners: ['Billy Gunn'], eras: ['new-gen'], notes: 'Three-time WWF Tag Team Champions with a cowboy gimmick' }],
    factions: [],
  },
  1054: { // The Patriot
    injuries: [{ year: '1997', injury: 'Severe back injury', cause: 'Spinal problems forced retirement shortly after his WWF Championship feud with Bret Hart' }, { year: '2017', injury: 'Died — health complications', cause: 'The Patriot died on June 1 2017 at age 59. His patriotic masked character challenged Bret Hart for the WWF Championship before severe spinal injuries forced his retirement.' }],
    tagTeams: [],
    factions: [],
  },
  1055: { // Henry O. Godwinn
    injuries: [],
    tagTeams: [{ name: 'The Godwinns', partners: ['Phineas I. Godwinn'], eras: ['new-gen'], notes: 'Two-time WWF Tag Team Champions with a pig farmer gimmick' }],
    factions: [],
  },
  1056: { // Mideon
    injuries: [],
    tagTeams: [{ name: 'The Godwinns', partners: ['Henry O. Godwinn'], eras: ['new-gen'], notes: 'Two-time WWF Tag Team Champions before being repackaged' }],
    factions: [{ name: 'The Ministry of Darkness', members: ['The Undertaker', 'Mideon', 'Viscera', 'The Acolytes'], eras: ['attitude'], notes: 'Brainwashed into the Ministry by The Undertaker' }],
  },
  1057: { // Samu
    injuries: [],
    tagTeams: [{ name: 'The Headshrinkers', partners: ['Fatu'], eras: ['new-gen'], notes: 'WWF Tag Team Champions managed by Afa and Captain Lou Albano' }],
    factions: [{ name: 'The Samoan Dynasty', members: ['Afa', 'Sika', 'Samu', 'Fatu', 'Yokozuna'], eras: ['golden', 'new-gen'], notes: 'Part of the legendary Anoa i Samoan wrestling family' }],
  },
  1058: { // Rockin Robin
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1059: { // Terry Funk
    injuries: [{ year: '1998', injury: 'Multiple knee surgeries', cause: 'Decades of hardcore wrestling took a severe toll on his body' }, { year: '2023', injury: 'Died — natural causes', cause: 'Terry Funk died on August 23 2023 at age 79 after battling dementia. A hardcore legend who competed for over 50 years and is considered one of the greatest wrestlers of all time.' }],
    tagTeams: [{ name: 'Funk and Foley', partners: ['Cactus Jack'], eras: ['attitude'], notes: 'Teamed as Chainsaw Charlie and Cactus Jack winning the WWF Tag Team Championship' }],
    factions: [],
  },
  1060: { // Mike Awesome
    injuries: [{ year: '2007', injury: 'Died — suicide', cause: 'Mike Awesome died on February 17 2007 at age 42 from suicide. A tremendously talented big man whose career was plagued by poor creative booking in WCW and WWE despite his incredible in-ring abilities.' }],
    tagTeams: [],
    factions: [{ name: 'The Alliance', members: ['WCW and ECW roster'], eras: ['ruthless'], notes: 'Part of the WCW/ECW Alliance during the Invasion angle' }],
  },
  1061: { // Shane Douglas
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1064: { // Rick Steiner
    injuries: [],
    tagTeams: [{ name: 'The Steiner Brothers', partners: ['Scott Steiner'], eras: ['golden', 'attitude'], notes: 'One of the most dominant legitimate tag teams in wrestling history' }],
    factions: [],
  },
  1065: { // Luke Gallows
    injuries: [],
    tagTeams: [{ name: 'The Good Brothers', partners: ['Karl Anderson'], eras: ['modern'], notes: 'Raw Tag Team Champions and founding members of The Club in WWE' }],
    factions: [{ name: 'The Club', members: ['AJ Styles', 'Luke Gallows', 'Karl Anderson'], eras: ['modern'], notes: 'WWE version of the Bullet Club connection' }, { name: 'Straight Edge Society', members: ['CM Punk', 'Luke Gallows', 'Serena Deeb', 'Joey Mercury'], eras: ['pg'], notes: 'Devoted followers of CM Punks straight edge lifestyle' }],
  },
  1066: { // Karl Anderson
    injuries: [],
    tagTeams: [{ name: 'The Good Brothers', partners: ['Luke Gallows'], eras: ['modern'], notes: 'Raw Tag Team Champions together' }],
    factions: [{ name: 'The Club', members: ['AJ Styles', 'Luke Gallows', 'Karl Anderson'], eras: ['modern'], notes: 'WWE extension of the Bullet Club lineage' }],
  },
  1067: { // Paul Roma
    injuries: [],
    tagTeams: [{ name: 'The Young Stallions', partners: ['Jim Powers'], eras: ['golden'], notes: 'Babyface tag team in the late 1980s' }, { name: 'Power and Glory', partners: ['Hercules Hernandez'], eras: ['golden'], notes: 'Heel tag team managed by Slick' }],
    factions: [],
  },
  1068: { // Rosey
    injuries: [{ year: '2017', injury: 'Died — congestive heart failure', cause: 'Rosey died on April 17 2017 at age 47 from congestive heart failure. Brother of Umaga and member of the legendary Anoa i Samoan wrestling dynasty. Won the World Tag Team Championship with The Hurricane.' }],
    tagTeams: [{ name: 'Three Minute Warning', partners: ['Jamal'], eras: ['ruthless'], notes: 'Eric Bischoffs enforcers who attacked anyone in three minutes' }, { name: 'Super Heroes', partners: ['The Hurricane'], eras: ['ruthless'], notes: 'Comedic superhero tag team that won the World Tag Team Championship' }],
    factions: [{ name: 'Anoa i Family', members: ['Rosey', 'Umaga', 'The Usos', 'Roman Reigns', 'Yokozuna'], eras: ['ruthless'], notes: 'Member of the legendary Anoa i Samoan wrestling dynasty' }],
  },
  1070: { // Kalisto
    injuries: [],
    tagTeams: [{ name: 'Lucha Dragons', partners: ['Sin Cara'], eras: ['reality'], notes: 'NXT Tag Team Champions and fan favorites on the main roster' }],
    factions: [{ name: 'Lucha House Party', members: ['Kalisto', 'Gran Metalik', 'Lince Dorado'], eras: ['modern'], notes: 'Lucha libre faction on the main roster' }],
  },
  1071: { // Scott Dawson
    injuries: [],
    tagTeams: [{ name: 'The Revival', partners: ['Dash Wilder'], eras: ['modern'], notes: 'Two-time NXT Tag Team Champions and winners of Raw and SmackDown tag titles' }],
    factions: [],
  },

  1072: { // Dash Wilder
    injuries: [{ year: '2016', injury: 'Broken jaw', cause: 'Suffered a broken jaw during a match that required surgery' }],
    tagTeams: [{ name: 'The Revival', partners: ['Scott Dawson'], eras: ['modern'], notes: 'Two-time NXT Tag Team Champions plus Raw and SmackDown tag titles' }],
    factions: [],
  },
  1073: { // Akam
    injuries: [{ year: '2019', injury: 'Knee injury', cause: 'Torn ACL that kept him out for several months' }],
    tagTeams: [{ name: 'Authors of Pain', partners: ['Rezar'], eras: ['modern'], notes: 'NXT and Raw Tag Team Champions managed by Paul Ellering then Drake Maverick' }],
    factions: [],
  },
  1074: { // Rezar
    injuries: [{ year: '2020', injury: 'Torn pectoral muscle', cause: 'Severe injury that effectively ended his full-time WWE career' }],
    tagTeams: [{ name: 'Authors of Pain', partners: ['Akam'], eras: ['modern'], notes: 'NXT and Raw Tag Team Champions' }],
    factions: [],
  },
  1075: { // Erik
    injuries: [],
    tagTeams: [{ name: 'Viking Raiders', partners: ['Ivar'], eras: ['modern'], notes: 'Won tag team championships across NXT Raw and SmackDown' }],
    factions: [],
  },
  1076: { // Montez Ford
    injuries: [],
    tagTeams: [{ name: 'Street Profits', partners: ['Angelo Dawkins'], eras: ['modern'], notes: 'NXT Raw and SmackDown Tag Team Champions' }],
    factions: [],
  },
  1077: { // Angelo Dawkins
    injuries: [],
    tagTeams: [{ name: 'Street Profits', partners: ['Montez Ford'], eras: ['modern'], notes: 'NXT Raw and SmackDown Tag Team Champions' }],
    factions: [],
  },
  1079: { // Darren Young
    injuries: [],
    tagTeams: [{ name: 'Prime Time Players', partners: ["Titus O'Neil"], eras: ['pg'], notes: 'WWE Tag Team Champions' }],
    factions: [{ name: 'The Nexus', members: ['Wade Barrett', 'Daniel Bryan', 'Darren Young', 'Skip Sheffield', 'David Otunga', 'Heath Slater', 'Justin Gabriel', 'Michael Tarver'], eras: ['pg'], notes: 'Original Nexus member from Season 1 of NXT' }],
  },
  1081: { // Alicia Fox
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1082: { // Kelly Kelly
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1083: { // Billie Kay
    injuries: [],
    tagTeams: [{ name: 'The IIconics', partners: ['Peyton Royce'], eras: ['modern'], notes: 'WWE Womens Tag Team Champions - won at WrestleMania 35' }],
    factions: [],
  },
  1084: { // Peyton Royce
    injuries: [],
    tagTeams: [{ name: 'The IIconics', partners: ['Billie Kay'], eras: ['modern'], notes: 'WWE Womens Tag Team Champions - won at WrestleMania 35' }],
    factions: [],
  },
  1085: { // Tucker
    injuries: [],
    tagTeams: [{ name: 'Heavy Machinery', partners: ['Otis'], eras: ['modern'], notes: 'Fun-loving powerhouse duo known for the Caterpillar and Compactor' }],
    factions: [],
  },
  1086: { // Cedric Alexander
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Hurt Business', members: ['Bobby Lashley', 'MVP', 'Shelton Benjamin', 'Cedric Alexander'], eras: ['modern'], notes: 'Dominant faction on Raw led by MVP' }],
  },
  1087: { // Buddy Murphy
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Seth Rollins Disciples', members: ['Seth Rollins', 'Buddy Murphy', 'Austin Theory'], eras: ['modern'], notes: 'Followers of Seth Rollins Monday Night Messiah persona' }],
  },
  1088: { // Kenny Dykstra
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Spirit Squad', members: ['Kenny', 'Mikey', 'Nicky', 'Johnny', 'Mitch'], eras: ['ruthless'], notes: 'Five-man cheerleader stable that won the World Tag Team Championship' }],
  },
  1091: { // Blair Davenport
    injuries: [{ year: '2022', injury: 'Broken leg', cause: 'Suffered a broken leg during an NXT UK match that sidelined her for months' }],
    tagTeams: [],
    factions: [],
  },
  1092: { // Ethan Page
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1095: { // Kit Wilson
    injuries: [],
    tagTeams: [{ name: 'Pretty Deadly', partners: ['Elton Prince'], eras: ['modern'], notes: 'Two-time NXT Tag Team Champions and NXT UK Tag Team Champions' }],
    factions: [],
  },
  1096: { // Elton Prince
    injuries: [],
    tagTeams: [{ name: 'Pretty Deadly', partners: ['Kit Wilson'], eras: ['modern'], notes: 'Two-time NXT Tag Team Champions and NXT UK Tag Team Champions' }],
    factions: [],
  },

  1097: { // Drake Maverick
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1098: { // Shad Gaspard
    injuries: [{ year: '2020', injury: 'Died — drowning (heroic sacrifice)', cause: 'Shad Gaspard died on May 17 2020 at age 39 when he instructed lifeguards to save his 10-year-old son first as they were caught in a riptide off Venice Beach California. His act of selfless heroism earned him the posthumous Warrior Award.' }],
    tagTeams: [{ name: 'Cryme Tyme', partners: ['JTG'], eras: ['pg'], notes: 'Fan-favorite tag team with Brooklyn street-smart characters' }],
    factions: [],
  },
  1099: { // Nick Bockwinkel
    injuries: [{ year: '2015', injury: 'Died — natural causes', cause: 'Nick Bockwinkel died on November 14 2015 at age 80. Four-time AWA World Heavyweight Champion whose sophisticated vocabulary and articulate interview style were decades ahead of their time.' }],
    tagTeams: [],
    factions: [],
  },
  1100: { // Verne Gagne
    injuries: [{ year: '2015', injury: 'Died — Alzheimers disease', cause: 'Verne Gagne died on April 27 2015 at age 89 after battling Alzheimers disease. The founder of the AWA and ten-time AWA World Heavyweight Champion who trained countless future legends.' }],
    tagTeams: [],
    factions: [],
  },
  1101: { // Antonio Inoki
    injuries: [{ year: '2022', injury: 'Died — systemic amyloidosis', cause: 'Antonio Inoki died on October 1 2022 at age 79 from systemic transthyretin amyloidosis. The most famous professional wrestler in Japanese history who founded New Japan Pro-Wrestling and fought Muhammad Ali in 1976.' }],
    tagTeams: [],
    factions: [],
  },
  1102: { // Abdullah the Butcher
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1103: { // Carlos Colon
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1104: { // Dory Funk Jr.
    injuries: [],
    tagTeams: [{ name: 'The Funks', partners: ['Terry Funk'], eras: ['wwwf', 'golden'], notes: 'Legendary brother tag team from Amarillo Texas' }],
    factions: [],
  },
  1105: { // Jack Brisco
    injuries: [{ year: '2010', injury: 'Died — natural causes', cause: 'Jack Brisco died on February 1 2010 at age 68. An NCAA wrestling champion who became NWA World Heavyweight Champion and later helped Vince McMahon gain control of the WWF.' }],
    tagTeams: [{ name: 'The Brisco Brothers', partners: ['Gerald Brisco'], eras: ['wwwf'], notes: 'Legendary brother tag team and NWA stars' }],
    factions: [],
  },
  1106: { // Gerald Brisco
    injuries: [],
    tagTeams: [{ name: 'The Brisco Brothers', partners: ['Jack Brisco'], eras: ['wwwf'], notes: 'Legendary brother tag team' }],
    factions: [{ name: 'The Stooges', members: ['Pat Patterson', 'Gerald Brisco'], eras: ['attitude'], notes: 'Vince McMahons bumbling assistants during the Attitude Era' }],
  },
  1107: { // Michael PS Hayes
    injuries: [],
    tagTeams: [{ name: 'The Fabulous Freebirds', partners: ['Terry Gordy', 'Buddy Roberts'], eras: ['golden'], notes: 'One of the most influential tag teams in wrestling history - originated the Freebird Rule' }],
    factions: [],
  },
  1108: { // Kharma
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1109: { // JTG
    injuries: [],
    tagTeams: [{ name: 'Cryme Tyme', partners: ['Shad Gaspard'], eras: ['pg'], notes: 'Beloved tag team with comedic Brooklyn street-smart characters' }],
    factions: [],
  },
  1110: { // The Berzerker
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1111: { // Lio Rush
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1112: { // Drew Gulak
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1113: { // Tye Dillinger
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1114: { // Gran Metalik
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Lucha House Party', members: ['Kalisto', 'Gran Metalik', 'Lince Dorado'], eras: ['modern'], notes: 'Lucha libre faction on the main roster' }],
  },
  1115: { // Lince Dorado
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Lucha House Party', members: ['Kalisto', 'Gran Metalik', 'Lince Dorado'], eras: ['modern'], notes: 'Lucha libre faction on the main roster' }],
  },
  1117: { // Boris Zhukov
    injuries: [],
    tagTeams: [{ name: 'The Bolsheviks', partners: ['Nikolai Volkoff'], eras: ['golden'], notes: 'Soviet-themed heel tag team that sang the Russian national anthem' }],
    factions: [],
  },
  1118: { // Charlie Dempsey
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'No Quarter Catch Crew', members: ['Charlie Dempsey', 'Myles Borne', 'Tavion Heights'], eras: ['modern'], notes: 'Traditional catch wrestling faction in NXT' }],
  },
  1120: { // Lexis King
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1121: { // Sylvain Grenier
    injuries: [],
    tagTeams: [{ name: 'La Resistance', partners: ['René Duprée', 'Rob Conway'], eras: ['ruthless'], notes: 'Three-time World Tag Team Champions with anti-American French gimmick' }],
    factions: [],
  },
  1122: { // Stan Stasiak
    injuries: [
      { year: "1997", injury: "Died — heart attack", cause: "Stan Stasiak died on July 2, 1997 at age 60 from a heart attack. He was a former WWWF Champion who defeated Pedro Morales in 1973 and held the title for nine days before losing to Bruno Sammartino." }
    ],
    tagTeams: [], factions: []
  },
  1123: { // Billy Jack Haynes
    injuries: [
      { year: "1988", injury: "Knee injury", cause: "Chronic knee problems contributed to his departure from the WWF after a run that included a notable WrestleMania III match against Hercules." },
      { year: "2024", injury: "Died — gunshot wound (murder-suicide)", cause: "Billy Jack Haynes was found dead on June 14, 2024 at age 70 in an apparent murder-suicide in Oregon alongside his wife. He had struggled with health issues related to his wrestling career for years." }
    ],
    tagTeams: [], factions: []
  },
  1124: { // Jim Powers
    injuries: [],
    tagTeams: [
      { name: 'The Young Stallions', partners: ['Paul Roma'], eras: ['golden'], notes: 'Tag team that challenged for the WWF Tag Team Championships in the late 1980s.' }
    ],
    factions: []
  },
  1125: { // S.D. Jones
    injuries: [
      { year: "2008", injury: "Died — natural causes", cause: "S.D. Jones (Conrad Efraim) died on October 26, 2008 at age 63 from natural causes in his home in Antigua. Best remembered for his quick loss to King Kong Bundy at WrestleMania I." }
    ],
    tagTeams: [], factions: []
  },
  1126: { // Tonga Kid
    injuries: [],
    tagTeams: [
      { name: 'The Islanders', partners: ['Haku'], eras: ['golden'], notes: 'Samoan tag team in the mid-1980s WWF. Tonga Kid was a cousin of Jimmy Snuka.' }
    ],
    factions: []
  },
  1127: { // Corporal Kirchner
    injuries: [],
    tagTeams: [], factions: []
  },
  1128: { // Velvet McIntyre
    injuries: [],
    tagTeams: [], factions: []
  },
  1129: { // Leilani Kai
    injuries: [],
    tagTeams: [
      { name: 'The Glamour Girls', partners: ['Judy Martin'], eras: ['golden'], notes: 'Managed by Jimmy Hart. Held the WWF Women\'s Tag Team Championship and feuded with the Jumping Bomb Angels.' }
    ],
    factions: []
  },
  1130: { // Judy Martin
    injuries: [],
    tagTeams: [
      { name: 'The Glamour Girls', partners: ['Leilani Kai'], eras: ['golden'], notes: 'Dominant women\'s tag team of the 1980s WWF, managed by Jimmy Hart.' }
    ],
    factions: []
  },
  1131: { // Iron Mike Sharpe
    injuries: [
      { year: "2016", injury: "Died — undisclosed illness", cause: "Iron Mike Sharpe died on January 17, 2016 at age 64 from an undisclosed illness. He was one of the most well-known enhancement talents in WWF history during the 1980s, always wearing his signature loaded forearm brace." }
    ],
    tagTeams: [], factions: []
  },
  1133: { // Blackjack Lanza
    injuries: [
      { year: "2023", injury: "Died — natural causes", cause: "Blackjack Lanza died on December 10, 2023 at age 86. He was one half of the legendary Blackjacks tag team with Blackjack Mulligan, and later worked as a road agent for the WWF/WWE for decades." }
    ],
    tagTeams: [
      { name: 'The Blackjacks', partners: ['Blackjack Mulligan'], eras: ['wwwf'], notes: 'Iconic tag team that held the WWWF Tag Team Championship. Managed by Bobby Heenan and Captain Lou Albano at various times.' }
    ],
    factions: []
  },
  1134: { // Peter Maivia
    injuries: [
      { year: "1982", injury: "Died — cancer", cause: "Peter Maivia died on June 13, 1982 at age 45 from cancer. He was The Rock's maternal grandfather and a beloved WWWF babyface known for his Samoan heritage and high-flying style. Inducted posthumously into the WWE Hall of Fame in 2008." }
    ],
    tagTeams: [], factions: []
  },
  1135: { // Baron Mikel Scicluna
    injuries: [
      { year: "2010", injury: "Died — natural causes", cause: "Baron Mikel Scicluna died on March 20, 2010 at age 80 in his native Malta. He was a long-tenured WWWF/WWF performer who held the WWWF Tag Team Championship with King Curtis Iaukea." }
    ],
    tagTeams: [], factions: []
  },
  1136: { // Haystacks Calhoun
    injuries: [
      { year: "1989", injury: "Died — diabetes complications", cause: "Haystacks Calhoun died on December 7, 1989 at age 55 from diabetes-related complications. The 600+ pound wrestler was one of the largest performers in WWWF history." }
    ],
    tagTeams: [], factions: []
  },
  1137: { // Swede Hanson
    injuries: [
      { year: "2002", injury: "Died — natural causes", cause: "Swede Hanson died on April 25, 2002 at age 68. He was a rugged tag team specialist who competed in the WWWF during the 1970s." }
    ],
    tagTeams: [], factions: []
  },
  1138: { // Spiros Arion
    injuries: [],
    tagTeams: [], factions: []
  },
  1139: { // Waldo Von Erich
    injuries: [
      { year: "2009", injury: "Died — natural causes", cause: "Waldo Von Erich died on June 6, 2009 at age 75. Despite the Von Erich name, he was not related to the famous Texas wrestling family — he was Canadian and adopted the German heel gimmick." }
    ],
    tagTeams: [], factions: []
  },
  1142: { // Victor Rivera
    injuries: [],
    tagTeams: [], factions: []
  },
  1143: { // King Curtis Iaukea
    injuries: [
      { year: "2010", injury: "Died — natural causes", cause: "King Curtis Iaukea died on December 4, 2010 at age 73 in Honolulu, Hawaii. He was a Samoan wrestler who held tag team gold in the WWWF." }
    ],
    tagTeams: [], factions: []
  },
  1144: { // The Executioners
    injuries: [],
    tagTeams: [], factions: []
  },
  1145: { // Johnny Rodz
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1149: { // The Sheik
    injuries: [
      { year: "2003", injury: "Died — heart failure", cause: "The Sheik (Ed Farhat) died on January 18, 2003 at age 76 from heart failure. He was one of the most feared and violent performers in wrestling history, a legendary hardcore brawler who used fire in his matches decades before ECW." }
    ],
    tagTeams: [], factions: []
  },
  1150: { // Ox Baker
    injuries: [
      { year: "2014", injury: "Died — natural causes", cause: "Ox Baker died on October 20, 2014 at age 80. The terrifying-looking villain was known for his heart punch finisher and roles in movies. He was one of wrestling's most recognizable villains." }
    ],
    tagTeams: [], factions: []
  },
  1151: { // Sam Houston
    injuries: [
      { year: "2024", injury: "Died — cardiac event", cause: "Sam Houston (Michael Wayne Smith) died on February 1, 2024 at age 61. He was a mid-card babyface in the WWF and the half-brother of Jake Roberts. He struggled with personal demons throughout his life." }
    ],
    tagTeams: [], factions: []
  },
  1154: { // Dominic DeNucci
    injuries: [
      { year: "2022", injury: "Died — natural causes", cause: "Dominic DeNucci died on April 3, 2022 at age 89. Beyond his in-ring career, he was famous as the trainer who taught Mick Foley how to wrestle." }
    ],
    tagTeams: [], factions: []
  },
  1155: { // Frenchy Martin
    injuries: [
      { year: "2018", injury: "Died — cancer", cause: "Frenchy Martin died on June 28, 2018 at age 70 from cancer. He was best known as the manager of Dino Bravo in the WWF during the late 1980s." }
    ],
    tagTeams: [], factions: []
  },
  1156: { // Tama (Islanders)
    injuries: [],
    tagTeams: [
      { name: 'The Islanders', partners: ['Haku'], eras: ['golden'], notes: 'Pacific Islander tag team that turned heel under Bobby Heenan\'s management. Infamously stole Matilda, the British Bulldogs\' bulldog mascot.' }
    ],
    factions: [{ name: 'Heenan Family', members: ['Bobby Heenan', 'Haku'], eras: ['golden'], notes: 'The Islanders joined the Heenan Family upon their heel turn.' }]
  },
  1157: { // Tiger Chung Lee
    injuries: [],
    tagTeams: [], factions: []
  },
  1158: { // Sivi Afi
    injuries: [],
    tagTeams: [], factions: []
  },
  1159: { // Cousin Luke
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Hillbillies', members: ['Hillbilly Jim', 'Uncle Elmer', 'Cousin Luke'], eras: ['golden'], notes: 'Country bumpkin babyface group managed loosely by Hillbilly Jim.' }]
  },
  1160: { // Uncle Elmer
    injuries: [
      { year: "1992", injury: "Died — kidney failure", cause: "Uncle Elmer (Stanley Frazier) died on November 12, 1992 at age 47 from kidney failure. He was part of the Hillbillies faction in the mid-1980s WWF." }
    ],
    tagTeams: [],
    factions: [{ name: 'The Hillbillies', members: ['Hillbilly Jim', 'Cousin Luke', 'Uncle Elmer'], eras: ['golden'], notes: 'Country bumpkin babyface group in the WWF.' }]
  },
  1162: { // Moondog Rex
    injuries: [
      { year: "2017", injury: "Died — natural causes", cause: "Moondog Rex (Randy Colley) died on July 16, 2017 at age 67. He was one half of The Moondogs who won the WWF Tag Team Championship in 1981." }
    ],
    tagTeams: [
      { name: 'The Moondogs', partners: ['Moondog King', 'Moondog Spot'], eras: ['wwwf', 'golden'], notes: 'Wild, unkempt tag team that held the WWF Tag Team Championship. Various combinations of Moondogs competed over the years.' }
    ],
    factions: []
  },
  1163: { // Moondog Spot
    injuries: [
      { year: "2003", injury: "Died — heart attack", cause: "Moondog Spot (Larry Booker) died on November 29, 2003 at age 51 from a heart attack. He was one of the most tenured members of The Moondogs tag team." }
    ],
    tagTeams: [
      { name: 'The Moondogs', partners: ['Moondog Rex', 'Moondog King'], eras: ['wwwf', 'golden'], notes: 'Wild brawling tag team known for carrying bones to the ring.' }
    ],
    factions: []
  },
  1164: { // Pat Tanaka
    injuries: [],
    tagTeams: [
      { name: 'Orient Express', partners: ['Akio Sato', 'Kato'], eras: ['golden'], notes: 'Japanese-themed heel tag team managed by Mr. Fuji. Feuded with the Rockers.' }
    ],
    factions: []
  },
  1165: { // Johnny Valiant
    injuries: [
      { year: "2018", injury: "Died — hit by vehicle", cause: "Johnny Valiant (Thomas Sullivan) died on April 4, 2018 at age 71 after being struck by a pickup truck in Pittsburgh. He was a former WWF Tag Team Champion and manager known for his loud, brash personality." }
    ],
    tagTeams: [
      { name: 'The Valiant Brothers', partners: ['Jimmy Valiant'], eras: ['wwwf'], notes: 'Won the WWWF Tag Team Championship. One of the top heel tag teams of the 1970s.' }
    ],
    factions: []
  },
  1166: { // Jimmy Valiant
    injuries: [],
    tagTeams: [
      { name: 'The Valiant Brothers', partners: ['Johnny Valiant'], eras: ['wwwf'], notes: 'WWWF Tag Team Champions. Jimmy later became a major babyface star in the territories as The Boogie Woogie Man.' }
    ],
    factions: []
  },
  1167: { // John Studd
    injuries: [
      { year: "1995", injury: "Died — liver cancer / Hodgkin's disease", cause: "Big John Studd died on March 20, 1995 at age 47 from liver cancer and Hodgkin's disease. He had won the first Royal Rumble in 1989 and was one of the WWF's top heels in the mid-1980s. Inducted into the WWE Hall of Fame in 2004." }
    ],
    tagTeams: [],
    factions: [{ name: 'Heenan Family', members: ['Bobby Heenan', 'King Kong Bundy'], eras: ['golden'], notes: 'Major member of Bobby Heenan\'s stable during the 1980s.' }]
  },
  1168: { // David Sammartino
    injuries: [],
    tagTeams: [], factions: []
  },
  1169: { // Lord Alfred Hayes
    injuries: [
      { year: "2005", injury: "Died — stroke", cause: "Lord Alfred Hayes died on July 21, 2005 at age 76 following a stroke. He was a beloved WWF commentator and interviewer throughout the 1980s and early 1990s, known for his British aristocratic persona." }
    ],
    tagTeams: [], factions: []
  },
  1171: { // Pete Rose
    injuries: [],
    tagTeams: [], factions: []
  },
  1172: { // Terry Taylor
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'York Foundation', members: ['Terry Taylor', 'Thomas Rich'], eras: ['golden'], notes: 'WCW heel stable. Taylor is best known in WWF for the ill-fated Red Rooster gimmick.' }]
  },
  1173: { // Killer Khan
    injuries: [
      { year: "1981", injury: "Broken ankle (storyline / shoot)", cause: "His angle with Andre the Giant involved a broken ankle — the real and worked versions of the story became intertwined in wrestling lore. It was one of the top feuds in the early 1980s WWF." }
    ],
    tagTeams: [], factions: []
  },
  1175: { // Salvatore Bellomo
    injuries: [],
    tagTeams: [], factions: []
  },
  1176: { // Jose Luis Rivera
    injuries: [],
    tagTeams: [], factions: []
  },
  1177: { // Rick McGraw
    injuries: [
      { year: "1985", injury: "Died — heart failure (drug related)", cause: "Rick McGraw died on November 1, 1985 at age 30 from heart failure, believed to be related to recreational drug use. He was a promising young WWF performer whose life was cut tragically short." }
    ],
    tagTeams: [], factions: []
  },
  1178: { // Antonino Rocca
    injuries: [
      { year: "1977", injury: "Died — urinary tract infection complications", cause: "Antonino Rocca died on March 15, 1977 at age 49. He was a massive drawing card for the WWWF in the 1950s and 1960s, known for his acrobatic style that was decades ahead of its time." }
    ],
    tagTeams: [], factions: []
  },
  1179: { // Giant Baba
    injuries: [
      { year: "1999", injury: "Died — colon cancer", cause: "Giant Baba died on January 31, 1999 at age 61 from colon cancer. He was the founder and president of All Japan Pro Wrestling, one of the most respected figures in Japanese wrestling history, and competed in the WWWF in the 1960s and 1970s." }
    ],
    tagTeams: [], factions: []
  },
  1180: { // Tatsumi Fujinami
    injuries: [],
    tagTeams: [], factions: []
  },
  1181: { // Crusher Blackwell
    injuries: [
      { year: "1997", injury: "Died — heart failure", cause: "Crusher Blackwell died on January 11, 1997 at age 51 from heart failure brought on by his enormous size. He weighed over 450 pounds throughout his career." }
    ],
    tagTeams: [], factions: []
  },
  1182: { // Larry Hennig
    injuries: [
      { year: "2018", injury: "Died — natural causes", cause: "Larry 'The Axe' Hennig died on December 6, 2018 at age 82 from natural causes. He was the father of Mr. Perfect Curt Hennig and grandfather of Curtis Axel, patriarch of the Hennig wrestling dynasty." }
    ],
    tagTeams: [], factions: []
  },
  1183: { // Buddy Rose
    injuries: [
      { year: "2009", injury: "Died — heart attack", cause: "Buddy Rose died on April 28, 2009 at age 56 from a heart attack. He was a top heel in the Pacific Northwest territory and had a brief WWF run. Known for his Blow Away Diet gimmick and legitimate in-ring ability." }
    ],
    tagTeams: [], factions: []
  },
  1184: { // Tony Altimore
    injuries: [],
    tagTeams: [], factions: []
  },
  1186: { // Billy White Wolf
    injuries: [],
    tagTeams: [], factions: []
  },
  1187: { // Rene Goulet
    injuries: [
      { year: "2019", injury: "Died — natural causes", cause: "Rene Goulet died on October 25, 2019 at age 87. He was a French-Canadian wrestler and long-time WWF road agent who won the WWF Tag Team Championship with Karl Gotch." }
    ],
    tagTeams: [
      { name: 'Goulet & Gotch', partners: ['Karl Gotch'], eras: ['wwwf'], notes: 'Won the WWWF Tag Team Championship together.' }
    ],
    factions: []
  },
  1188: { // Karl Gotch
    injuries: [
      { year: "2007", injury: "Died — natural causes", cause: "Karl Gotch died on July 28, 2007 at age 82 in Tampa, Florida. Known as the God of Wrestling in Japan, he was a legitimate catch wrestling master who influenced generations of Japanese wrestlers." }
    ],
    tagTeams: [
      { name: 'Gotch & Goulet', partners: ['Rene Goulet'], eras: ['wwwf'], notes: 'Won the WWWF Tag Team Championship together.' }
    ],
    factions: []
  },
  1189: { // The Mongols
    injuries: [],
    tagTeams: [], factions: []
  },
  1190: { // Moondog King
    injuries: [
      { year: "2003", injury: "Died — complications from surgery", cause: "Moondog King (Ed White) died in 2003. He was the original partner of Moondog Rex in the WWF, winning the WWF Tag Team Championship before being replaced by Moondog Spot." }
    ],
    tagTeams: [
      { name: 'The Moondogs', partners: ['Moondog Rex'], eras: ['wwwf'], notes: 'Won the WWF Tag Team Championship before King was replaced by Moondog Spot.' }
    ],
    factions: []
  },
  1191: { // Lou Thesz
    injuries: [
      { year: "2002", injury: "Died — natural causes", cause: "Lou Thesz died on April 28, 2002 at age 86. He was arguably the greatest legitimate professional wrestler ever, holding the NWA World Heavyweight Championship for over a decade combined. His Thesz Press finisher was later made famous by Stone Cold Steve Austin." }
    ],
    tagTeams: [], factions: []
  },
  1192: { // The Goon
    injuries: [],
    tagTeams: [], factions: []
  },
  1193: { // TL Hopper
    injuries: [],
    tagTeams: [], factions: []
  },
  1194: { // Salvatore Sincere
    injuries: [],
    tagTeams: [], factions: []
  },
  1195: { // Freddie Joe Floyd
    injuries: [],
    tagTeams: [], factions: []
  },
  1196: { // Ludvig Borga
    injuries: [
      { year: "1993", injury: "Broken ankle", cause: "Suffered a broken ankle that ended his WWF run prematurely. He had been pushed as a top heel with an anti-American Finnish patriot gimmick." }
    ],
    tagTeams: [], factions: []
  },
  1197: { // Jonathan Coachman
    injuries: [],
    tagTeams: [], factions: []
  },
  1198: { // Tori
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'D-Generation X', members: ['Triple H', 'X-Pac', 'Road Dogg', 'Billy Gunn'], eras: ['attitude'], notes: 'Briefly associated with DX during the Attitude Era as a valet.' }]
  },
  1200: { // The Blue Meanie
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Blue World Order (bWo)', members: ['The Blue Meanie', 'Stevie Richards', 'Nova'], eras: ['attitude'], notes: 'ECW parody of the nWo. One of the funniest comedy acts in ECW history.' }]
  },
  1201: { // Kurrgan
    injuries: [],
    tagTeams: [],
    factions: [
      { name: 'The Oddities', members: ['Kurrgan', 'Golga', 'Giant Silva', 'Luna Vachon'], eras: ['attitude'], notes: 'Misfit babyface group managed by the Insane Clown Posse for a time. Started as part of The Jackyl\'s Truth Commission.' },
      { name: 'Truth Commission', members: ['Kurrgan', 'Recon', 'Sniper', 'The Jackyl'], eras: ['attitude'], notes: 'Militant heel stable managed by The Jackyl (Don Callis).' }
    ]
  },
  1202: { // Shawn Stasiak
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Alliance', members: ['various WCW/ECW wrestlers'], eras: ['attitude'], notes: 'Part of the WCW/ECW Alliance during the Invasion angle in 2001.' }]
  },
  1203: { // Dr. Death Steve Williams
    injuries: [
      { year: "2009", injury: "Died — throat cancer", cause: "Dr. Death Steve Williams died on December 29, 2009 at age 49 from throat cancer. He was one of the toughest legitimate wrestlers in history, a former All Japan star whose WWF push was derailed after losing to Bart Gunn in the Brawl for All." }
    ],
    tagTeams: [
      { name: 'The Miracle Violence Connection', partners: ['Terry Gordy'], eras: ['golden'], notes: 'Legendary tag team in All Japan Pro Wrestling. Won the AJPW World Tag Team Championship multiple times.' }
    ],
    factions: []
  },
  1205: { // Skip
    injuries: [],
    tagTeams: [
      { name: 'The Bodydonnas', partners: ['Zip'], eras: ['new-gen'], notes: 'Fitness-obsessed tag team managed by Sunny. Won the WWF Tag Team Championship. Skip later became Chris Candido.' }
    ],
    factions: []
  },
  1206: { // Zip
    injuries: [],
    tagTeams: [
      { name: 'The Bodydonnas', partners: ['Skip'], eras: ['new-gen'], notes: 'Tag team partner in the fitness-themed Bodydonnas. Tom Prichard later became a respected trainer at the WWE Performance Center.' }
    ],
    factions: []
  },
  1209: { // D-Von Dudley
    injuries: [],
    tagTeams: [
      { name: 'The Dudley Boyz', partners: ['Bubba Ray Dudley'], eras: ['attitude', 'ruthless'], notes: 'One of the greatest tag teams in wrestling history. 9-time WWE Tag Team Champions. Known for putting opponents through tables. Iconic ECW and WWE careers.' }
    ],
    factions: []
  },
  1210: { // Bubba Ray Dudley
    injuries: [],
    tagTeams: [
      { name: 'The Dudley Boyz', partners: ['D-Von Dudley'], eras: ['attitude', 'ruthless'], notes: 'Legendary tag team that excelled in ECW, WWE, and TNA. TLC matches with Hardy Boyz and Edge & Christian are all-time classics. 9-time WWE Tag Team Champions.' }
    ],
    factions: []
  },
  1211: { // Headbanger Mosh
    injuries: [],
    tagTeams: [
      { name: 'The Headbangers', partners: ['Headbanger Thrasher'], eras: ['attitude'], notes: 'Rock/metal-themed tag team known for moshing and crowd surfing. Won the WWF Tag Team Championship in 1997.' }
    ],
    factions: []
  },
  1212: { // Headbanger Thrasher
    injuries: [],
    tagTeams: [
      { name: 'The Headbangers', partners: ['Headbanger Mosh'], eras: ['attitude'], notes: 'Tag team that embraced heavy metal culture. Won the WWF Tag Team Championship during the Attitude Era.' }
    ],
    factions: []
  },
  1213: { // Giant Silva
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Oddities', members: ['Kurrgan', 'Golga', 'Giant Silva', 'Luna Vachon'], eras: ['attitude'], notes: 'Misfit babyface group. Silva stood over 7 feet tall and came from a basketball background in Brazil.' }]
  },
  1214: { // Pete Gas
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Mean Street Posse', members: ['Pete Gas', 'Rodney', 'Joey Abs'], eras: ['attitude'], notes: 'Shane McMahon\'s Greenwich, Connecticut friends who served as his lackeys. Comedic heel faction.' }]
  },
  1215: { // Rodney
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Mean Street Posse', members: ['Pete Gas', 'Rodney', 'Joey Abs'], eras: ['attitude'], notes: 'Shane McMahon\'s spoiled rich kid friends from Greenwich. Bumbled their way through the Attitude Era.' }]
  },
  1216: { // Joey Abs
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Mean Street Posse', members: ['Pete Gas', 'Rodney', 'Joey Abs'], eras: ['attitude'], notes: 'The most physically capable member of Shane McMahon\'s Mean Street Posse.' }]
  },
  1217: { // Chainz
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Disciples of Apocalypse', members: ['Chainz', '8-Ball', 'Skull', 'Crush'], eras: ['attitude'], notes: 'Biker faction that feuded with the Nation of Domination and Los Boricuas during the Attitude Era gang wars.' }]
  },
  1218: { // 8-Ball
    injuries: [],
    tagTeams: [
      { name: 'The Harris Brothers', partners: ['Skull'], eras: ['attitude'], notes: 'Identical twin tag team (Ron and Don Harris). Also known as the Blu Brothers and Creative Control in WCW.' }
    ],
    factions: [{ name: 'Disciples of Apocalypse', members: ['Chainz', '8-Ball', 'Skull', 'Crush'], eras: ['attitude'], notes: 'Biker gang faction in the WWF.' }]
  },
  1219: { // Skull
    injuries: [],
    tagTeams: [
      { name: 'The Harris Brothers', partners: ['8-Ball'], eras: ['attitude'], notes: 'Identical twin tag team. Their gimmick of being indistinguishable was used for various switched twin angles.' }
    ],
    factions: [{ name: 'Disciples of Apocalypse', members: ['Chainz', '8-Ball', 'Skull', 'Crush'], eras: ['attitude'], notes: 'Biker gang faction in the WWF.' }]
  },
  1221: { // Matt Morgan
    injuries: [],
    tagTeams: [], factions: []
  },
  1222: { // Rob Conway
    injuries: [],
    tagTeams: [
      { name: 'La Resistance', partners: ['Sylvain Grenier', 'René Duprée'], eras: ['ruthless'], notes: 'Anti-American French-themed tag team. Won the World Tag Team Championship multiple times.' }
    ],
    factions: []
  },
  1223: { // Rico
    injuries: [
      { year: "2023", injury: "Died — natural causes", cause: "Rico Constantino died on April 9, 2023 at age 61. He was a former Las Vegas police officer turned wrestler known for his flamboyant character in WWE during the Ruthless Aggression era." }
    ],
    tagTeams: [], factions: []
  },
  1224: { // Marcus Cor Von
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The New Breed', members: ['Marcus Cor Von', 'Elijah Burke', 'Matt Striker', 'Kevin Thorn'], eras: ['ruthless'], notes: 'ECW heel faction on the revived ECW brand that feuded with the ECW Originals.' }]
  },
  1225: { // Matt Striker
    injuries: [],
    tagTeams: [], factions: []
  },
  1226: { // Mike Knox
    injuries: [],
    tagTeams: [], factions: []
  },
  1227: { // Psicosis
    injuries: [],
    tagTeams: [
      { name: 'The Mexicools', partners: ['Super Crazy', 'Juventud Guerrera'], eras: ['ruthless'], notes: 'Mexican tag team that rode lawnmowers to the ring on SmackDown. Controversial gimmick but the wrestlers were incredibly talented.' }
    ],
    factions: []
  },
  1228: { // Juventud Guerrera
    injuries: [],
    tagTeams: [
      { name: 'The Mexicools', partners: ['Psicosis', 'Super Crazy'], eras: ['ruthless'], notes: 'Lucha libre trio on SmackDown. Juventud was a WCW Cruiserweight Champion known for high-flying innovation.' }
    ],
    factions: []
  },
  1229: { // Katie Lea Burchill
    injuries: [],
    tagTeams: [], factions: []
  },
  1230: { // Danny Basham
    injuries: [],
    tagTeams: [
      { name: 'The Basham Brothers', partners: ['Doug Basham'], eras: ['ruthless'], notes: 'Tag team on SmackDown managed by Shaniqua. Won the WWE Tag Team Championship.' }
    ],
    factions: []
  },
  1231: { // Doug Basham
    injuries: [],
    tagTeams: [
      { name: 'The Basham Brothers', partners: ['Danny Basham'], eras: ['ruthless'], notes: 'Tag team on SmackDown. Won the WWE Tag Team Championship in 2004.' }
    ],
    factions: []
  },
  1232: { // Rodney Mack
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1234: { // Jesse
    injuries: [],
    tagTeams: [
      { name: 'Jesse & Festus', partners: ['Festus'], eras: ['ruthless'], notes: 'Tag team on SmackDown. Jesse was the smaller, more agile partner.' }
    ],
    factions: []
  },
  1235: { // Jimmy Wang Yang
    injuries: [],
    tagTeams: [], factions: []
  },
  1236: { // Shannon Moore
    injuries: [],
    tagTeams: [],
    factions: [{ name: '3 Count', members: ['Shannon Moore', 'Shane Helms', 'Evan Karagias'], eras: ['attitude'], notes: 'Boy band parody faction in WCW. Moore later joined the WWE roster on SmackDown.' }]
  },
  1238: { // Vito
    injuries: [],
    tagTeams: [], factions: []
  },
  1239: { // David Otunga
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Nexus', members: ['Wade Barrett', 'David Otunga', 'Justin Gabriel', 'Heath Slater'], eras: ['modern'], notes: 'NXT Season 1 rookies who invaded Raw. Otunga was one of the most prominent members and later became a recurring TV personality and commentator.' }]
  },
  1240: { // Michael Tarver
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Nexus', members: ['Wade Barrett', 'David Otunga', 'Justin Gabriel', 'Heath Slater', 'Michael Tarver'], eras: ['modern'], notes: 'Part of the original Nexus invasion of Raw. Known for his fast hands and intimidating presence.' }]
  },
  1241: { // Justin Gabriel
    injuries: [],
    tagTeams: [],
    factions: [
      { name: 'The Nexus', members: ['Wade Barrett', 'David Otunga', 'Justin Gabriel', 'Heath Slater'], eras: ['modern'], notes: 'Known for his spectacular 450 Splash. Part of the original Nexus group.' },
      { name: 'The Corre', members: ['Wade Barrett', 'Justin Gabriel', 'Heath Slater', 'Ezekiel Jackson'], eras: ['modern'], notes: 'Formed after the Nexus disbanded on SmackDown. Short-lived faction.' }
    ]
  },
  1242: { // Alex Riley
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1243: { // Kaval
    injuries: [],
    tagTeams: [], factions: []
  },
  1245: { // Nathan Jones
    injuries: [],
    tagTeams: [], factions: []
  },
  1246: { // Sean O'Haire
    injuries: [
      { year: "2014", injury: "Died — suicide", cause: "Sean O'Haire died on September 8, 2014 at age 43 by suicide in his Spartanburg, South Carolina home. He was a promising WCW/WWE talent who never reached his full potential. His vignettes as 'The Devil's Advocate' were compelling but the character was abandoned." }
    ],
    tagTeams: [
      { name: 'O\'Haire & Palumbo', partners: ['Chuck Palumbo'], eras: ['attitude'], notes: 'WCW tag team that won the WCW Tag Team Championship as part of the Natural Born Thrillers.' }
    ],
    factions: [{ name: 'Natural Born Thrillers', members: ['Sean O\'Haire', 'Chuck Palumbo', 'Mike Sanders', 'Mark Jindrak', 'Shawn Stasiak'], eras: ['attitude'], notes: 'WCW young heel stable that showed enormous potential before WCW closed.' }]
  },
  1247: { // Armando Estrada
    injuries: [],
    tagTeams: [], factions: []
  },
  1248: { // Sylvester Terkay
    injuries: [],
    tagTeams: [], factions: []
  },
  1251: { // Percy Watson
    injuries: [],
    tagTeams: [], factions: []
  },
  1252: { // Lucky Cannon
    injuries: [],
    tagTeams: [], factions: []
  },
  1253: { // Byron Saxton
    injuries: [],
    tagTeams: [], factions: []
  },
  1254: { // Mason Ryan
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The New Nexus', members: ['CM Punk', 'Mason Ryan', 'David Otunga', 'Michael McGillicutty'], eras: ['modern'], notes: 'The Welsh muscle of CM Punk\'s New Nexus. His physique drew immediate Batista comparisons.' }]
  },
  1255: { // Tyler Reks
    injuries: [],
    tagTeams: [
      { name: 'Reks & Hawkins', partners: ['Curt Hawkins'], eras: ['modern'], notes: 'Tag team on SmackDown. Tyler Reks later transitioned and became Gabbi Tuft.' }
    ],
    factions: []
  },
  1257: { // Hunico
    injuries: [],
    tagTeams: [
      { name: 'Hunico & Camacho', partners: ['Camacho'], eras: ['modern'], notes: 'Tag team on SmackDown. Hunico later became Sin Cara after the original left WWE.' }
    ],
    factions: []
  },
  1258: { // Scotty Goldman
    injuries: [],
    tagTeams: [], factions: []
  },
  1259: { // Trent Barreta
    injuries: [],
    tagTeams: [
      { name: 'The Dudebusters', partners: ['Caylen Croft'], eras: ['modern'], notes: 'Tag team on SmackDown. Trent later became Trent Beretta and found significant success in AEW and NJPW.' }
    ],
    factions: []
  },
  1260: { // Caylen Croft
    injuries: [],
    tagTeams: [
      { name: 'The Dudebusters', partners: ['Trent Barreta'], eras: ['modern'], notes: 'Tag team on SmackDown in 2010.' }
    ],
    factions: []
  },
  1261: { // Manu
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Legacy (briefly)', members: ['Randy Orton', 'Cody Rhodes', 'Ted DiBiase Jr.'], eras: ['ruthless'], notes: 'Briefly associated with Randy Orton\'s Legacy faction as a second-generation talent (son of Afa). Was removed from the group early.' }]
  },
  1262: { // Sim Snuka
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Legacy (briefly)', members: ['Randy Orton', 'Cody Rhodes', 'Ted DiBiase Jr.'], eras: ['ruthless'], notes: 'Son of Jimmy Snuka. Briefly associated with the Legacy stable but was quickly phased out.' }]
  },
  1263: { // Richie Steamboat
    injuries: [
      { year: "2013", injury: "Back injury", cause: "Suffered a serious back injury in NXT that effectively ended his in-ring career. He was the son of Ricky Steamboat and showed enormous promise before the injury struck." }
    ],
    tagTeams: [], factions: []
  },
  1264: { // Rosa Mendes
    injuries: [],
    tagTeams: [], factions: []
  },
  1265: { // TJP
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1266: { // Tony Nese
    injuries: [],
    tagTeams: [], factions: []
  },
  1267: { // Akira Tozawa
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1268: { // Jack Gallagher
    injuries: [],
    tagTeams: [], factions: []
  },
  1269: { // Ariya Daivari
    injuries: [],
    tagTeams: [], factions: []
  },
  1270: { // Rich Swann
    injuries: [
      { year: "2018", injury: "Suspended / domestic violence arrest", cause: "Arrested on domestic violence charges in 2018 which led to his WWE release. He later rehabilitated his career in Impact Wrestling." }
    ],
    tagTeams: [], factions: []
  },
  1271: { // Bobby Fish
    injuries: [
      { year: "2017", injury: "Torn ACL", cause: "Suffered a torn ACL during his NXT run, sidelining him for months during the peak of the Undisputed Era." },
      { year: "2019", injury: "Knee injury (recurrence)", cause: "Re-injured his knee, requiring additional surgery that kept him out of action." }
    ],
    tagTeams: [
      { name: 'reDRagon', partners: ['Kyle O\'Reilly'], eras: ['modern'], notes: 'Dominant tag team in ROH and NXT. Multiple-time NXT Tag Team Champions as part of the Undisputed Era.' }
    ],
    factions: [{ name: 'Undisputed Era', members: ['Adam Cole', 'Kyle O\'Reilly', 'Bobby Fish', 'Roderick Strong'], eras: ['modern'], notes: 'The most dominant faction in NXT history. Held multiple championships simultaneously.' }]
  },
  1272: { // KUSHIDA
    injuries: [],
    tagTeams: [], factions: []
  },
  1273: { // Pat McAfee
    injuries: [],
    tagTeams: [], factions: []
  },
  1274: { // Robert Stone
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Robert Stone Brand', members: ['Robert Stone', 'various clients'], eras: ['modern'], notes: 'Comedic managerial stable in NXT where Stone represented various female wrestlers with disastrous results.' }]
  },
  1275: { // Enzo Amore
    injuries: [
      { year: "2017", injury: "Concussion", cause: "Suffered a concussion during a match at Payback 2017 when he was launched out of the ring and landed awkwardly. He was stretchered out of the arena." }
    ],
    tagTeams: [
      { name: 'Enzo & Cass', partners: ['Big Cass'], eras: ['modern'], notes: 'One of the most popular tag teams of the 2010s. Enzo\'s motor mouth and Cass\'s size made them a natural pairing. "How you doin\'!" became a beloved catchphrase.' }
    ],
    factions: []
  },
  1276: { // Big Cass
    injuries: [
      { year: "2018", injury: "Torn ACL", cause: "Suffered a torn ACL that contributed to his WWE release. He also dealt with personal issues that affected his career." }
    ],
    tagTeams: [
      { name: 'Enzo & Cass', partners: ['Enzo Amore'], eras: ['modern'], notes: 'Massively over tag team in NXT and on the main roster. Their breakup led to a forgettable Cass singles run.' }
    ],
    factions: []
  },
  1277: { // Von Wagner
    injuries: [],
    tagTeams: [], factions: []
  },
  1281: { // Sanga
    injuries: [],
    tagTeams: [], factions: []
  },
  1282: { // Ikemen Jiro
    injuries: [],
    tagTeams: [], factions: []
  },
  1283: { // Boa
    injuries: [],
    tagTeams: [], factions: []
  },
  1284: { // Xyon Quinn
    injuries: [],
    tagTeams: [], factions: []
  },
  1285: { // Edris Enofe
    injuries: [],
    tagTeams: [
      { name: 'Enofe & Blade', partners: ['Malik Blade'], eras: ['modern'], notes: 'NXT tag team known for their athleticism and high-energy style.' }
    ],
    factions: []
  },
  1286: { // Malik Blade
    injuries: [],
    tagTeams: [
      { name: 'Enofe & Blade', partners: ['Edris Enofe'], eras: ['modern'], notes: 'NXT tag team that competed for the NXT Tag Team Championships.' }
    ],
    factions: []
  },
  1287: { // Odyssey Jones
    injuries: [],
    tagTeams: [], factions: []
  },
  1288: { // Dante Chen
    injuries: [],
    tagTeams: [], factions: []
  },
  1289: { // Channing Lorenzo
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'D\'Angelo Family (associate)', members: ['Tony D\'Angelo', 'Channing Lorenzo', 'Luca Crusifino'], eras: ['modern'], notes: 'Part of Tony D\'Angelo\'s mafia-themed faction in NXT.' }]
  },
  1290: { // Luca Crusifino
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'D\'Angelo Family', members: ['Tony D\'Angelo', 'Channing Lorenzo', 'Luca Crusifino'], eras: ['modern'], notes: 'Member of the D\'Angelo Family in NXT.' }]
  },
  1291: { // Adrianna Reese
    injuries: [],
    tagTeams: [], factions: []
  },
  1292: { // Brooks Jensen
    injuries: [],
    tagTeams: [
      { name: 'Jensen & Briggs', partners: ['Josh Briggs'], eras: ['modern'], notes: 'NXT tag team that competed for the NXT Tag Team Championships. Had a coming-of-age storyline arc.' }
    ],
    factions: []
  },
  1293: { // Josh Briggs
    injuries: [],
    tagTeams: [
      { name: 'Jensen & Briggs', partners: ['Brooks Jensen'], eras: ['modern'], notes: 'Big man tag team in NXT. Also won the NXT Tag Team Championship.' }
    ],
    factions: []
  },
  1295: { // Jagger Reid
    injuries: [],
    tagTeams: [
      { name: 'The Dyad', partners: ['Rip Fowler'], eras: ['modern'], notes: 'Tag team that served as followers of Joe Gacy\'s Schism faction in NXT.' }
    ],
    factions: [{ name: 'Schism', members: ['Joe Gacy', 'Jagger Reid', 'Rip Fowler', 'Ava'], eras: ['modern'], notes: 'Cult-like faction in NXT led by Joe Gacy.' }]
  },
  1296: { // Rip Fowler
    injuries: [],
    tagTeams: [
      { name: 'The Dyad', partners: ['Jagger Reid'], eras: ['modern'], notes: 'Tag team in the Schism faction in NXT.' }
    ],
    factions: [{ name: 'Schism', members: ['Joe Gacy', 'Jagger Reid', 'Rip Fowler', 'Ava'], eras: ['modern'], notes: 'Cult-like faction in NXT.' }]
  },
  1297: { // Joe Gacy
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Schism', members: ['Joe Gacy', 'Jagger Reid', 'Rip Fowler', 'Ava'], eras: ['modern'], notes: 'Leader of the Schism cult faction in NXT. Gacy portrayed a manipulative cult leader character.' }]
  },
  1299: { // Brinley Reece
    injuries: [],
    tagTeams: [], factions: []
  },
  1300: { // Wren Sinclair
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'No Quarter Catch Crew', members: ['Charlie Dempsey', 'Myles Borne', 'Tavion Heights', 'Wren Sinclair'], eras: ['modern'], notes: 'Traditional catch wrestling faction in NXT. Wren serves as the group\'s manager.' }]
  },
  1301: { // Tavion Heights
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'No Quarter Catch Crew', members: ['Charlie Dempsey', 'Myles Borne', 'Tavion Heights'], eras: ['modern'], notes: 'Amateur wrestling standout who joined the catch wrestling faction in NXT.' }]
  },
  1302: { // Tyriek Igwe
    injuries: [],
    tagTeams: [
      { name: 'Igwe & Dupont', partners: ['Tyson Dupont'], eras: ['modern'], notes: 'NXT tag team of two large, athletic performers.' }
    ],
    factions: []
  },
  1303: { // Tyson Dupont
    injuries: [],
    tagTeams: [
      { name: 'Igwe & Dupont', partners: ['Tyriek Igwe'], eras: ['modern'], notes: 'NXT tag team pairing.' }
    ],
    factions: []
  },
  1304: { // Shawn Spears
    injuries: [],
    tagTeams: [], factions: []
  },
  1309: { // Joaquin Wilde
    injuries: [],
    tagTeams: [
      { name: 'Legado del Fantasma (tag)', partners: ['Cruz Del Toro'], eras: ['modern'], notes: 'Tag team within the Legado del Fantasma faction. Won the NXT Tag Team Championship.' }
    ],
    factions: [{ name: 'Legado del Fantasma', members: ['Santos Escobar', 'Joaquin Wilde', 'Cruz Del Toro', 'Zelina Vega', 'Elektra Lopez'], eras: ['modern'], notes: 'Latino heel faction led by Santos Escobar in NXT and on the main roster.' }]
  },
  1310: { // Cruz Del Toro
    injuries: [],
    tagTeams: [
      { name: 'Legado del Fantasma (tag)', partners: ['Joaquin Wilde'], eras: ['modern'], notes: 'Tag team within Santos Escobar\'s faction.' }
    ],
    factions: [{ name: 'Legado del Fantasma', members: ['Santos Escobar', 'Joaquin Wilde', 'Cruz Del Toro', 'Zelina Vega'], eras: ['modern'], notes: 'Latino faction on the main roster.' }]
  },
  1311: { // Scrypts
    injuries: [],
    tagTeams: [], factions: []
  },
  1312: { // Guru Raaj
    injuries: [],
    tagTeams: [], factions: []
  },
  1314: { // Valentina Feroz
    injuries: [],
    tagTeams: [
      { name: 'Feroz & Leon', partners: ['Yulisa Leon'], eras: ['modern'], notes: 'NXT tag team pairing.' }
    ],
    factions: []
  },
  1315: { // Yulisa Leon
    injuries: [],
    tagTeams: [
      { name: 'Feroz & Leon', partners: ['Valentina Feroz'], eras: ['modern'], notes: 'NXT tag team pairing.' }
    ],
    factions: []
  },
  1317: { // Donovan Dijak
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Retribution', members: ['Mustafa Ali', 'T-BAR', 'Mace', 'Slapjack', 'Reckoning'], eras: ['modern'], notes: 'As T-BAR, he was part of the anarchist faction Retribution. The faction is widely considered one of WWE\'s biggest missed opportunities.' }]
  },
  1318: { // Mace
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Retribution', members: ['Mustafa Ali', 'T-BAR', 'Mace', 'Slapjack', 'Reckoning'], eras: ['modern'], notes: 'Member of Retribution under the Mace codename.' }]
  },
  1319: { // Slapjack
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Retribution', members: ['Mustafa Ali', 'T-BAR', 'Mace', 'Slapjack', 'Reckoning'], eras: ['modern'], notes: 'Member of Retribution. Later reverted to Shane Thorne on the main roster.' }]
  },
  1322: { // Deuce
    injuries: [],
    tagTeams: [
      { name: 'Deuce \'n Domino', partners: ['Domino'], eras: ['ruthless'], notes: '1950s greaser-themed tag team on SmackDown managed by Cherry. Won the WWE Tag Team Championship in 2007. Deuce is the son of Jimmy Snuka.' }
    ],
    factions: []
  },
  1323: { // Domino
    injuries: [],
    tagTeams: [
      { name: 'Deuce \'n Domino', partners: ['Deuce'], eras: ['ruthless'], notes: '1950s greaser-themed tag team on SmackDown. Won the WWE Tag Team Championship.' }
    ],
    factions: []
  },
  1324: { // Reno
    injuries: [],
    tagTeams: [], factions: []
  },
  1336: { // B-Fab
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Hit Row', members: ['Top Dolla', 'B-Fab', 'Ashante Adonis', 'Swerve Strickland'], eras: ['modern'], notes: 'Hip-hop themed faction in NXT and on the main roster.' }]
  },
  1337: { // Top Dolla
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Hit Row', members: ['Top Dolla', 'B-Fab', 'Ashante Adonis', 'Swerve Strickland'], eras: ['modern'], notes: 'Hip-hop themed faction. Top Dolla (AJ Francis) was the big man of the group.' }]
  },
  1338: { // Ashante Adonis
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Hit Row', members: ['Top Dolla', 'B-Fab', 'Ashante Adonis', 'Swerve Strickland'], eras: ['modern'], notes: 'Member of the Hit Row faction in NXT.' }]
  },
  1343: { // Mr. T
    injuries: [],
    tagTeams: [], factions: []
  },
  1345: { // Bad Bunny
    injuries: [],
    tagTeams: [
      { name: 'Bad Bunny & Damian Priest', partners: ['Damian Priest'], eras: ['modern'], notes: 'Teamed with Priest at WrestleMania 37 against The Miz and John Morrison. Bad Bunny\'s dedication to the craft earned widespread respect from wrestlers and fans.' }
    ],
    factions: []
  },
  1346: { // Lawrence Taylor
    injuries: [],
    tagTeams: [], factions: []
  },
  1347: { // Floyd Mayweather
    injuries: [],
    tagTeams: [], factions: []
  },
  1348: { // Tyson Fury
    injuries: [],
    tagTeams: [], factions: []
  },
  1349: { // Cain Velasquez
    injuries: [
      { year: "2022", injury: "Legal issues / arrested", cause: "Arrested in 2022 on attempted murder charges after allegedly shooting at the man accused of molesting a relative. His brief WWE career was derailed by the incident." }
    ],
    tagTeams: [], factions: []
  },
  1350: { // Drew Carey
    injuries: [],
    tagTeams: [], factions: []
  },
  1351: { // No Way Jose
    injuries: [],
    tagTeams: [], factions: []
  },
  1352: { // Kassius Ohno
    injuries: [],
    tagTeams: [], factions: []
  },
  1353: { // Mordecai
    injuries: [],
    tagTeams: [], factions: []
  },
  1356: { // Jimmy Uso
    injuries: [
      { year: "2014", injury: "Shoulder surgery", cause: "Required surgery on his shoulder that kept him out for several months." },
      { year: "2016", injury: "MCL injury", cause: "Suffered an MCL injury that sidelined him during a key period." }
    ],
    tagTeams: [
      { name: 'The Usos', partners: ['Jey Uso'], eras: ['modern'], notes: 'One of the greatest tag teams in WWE history. Multiple-time Tag Team Champions on both Raw and SmackDown. Their heel run during the Bloodline era elevated them to main event status.' }
    ],
    factions: [{ name: 'The Bloodline', members: ['Roman Reigns', 'Jimmy Uso', 'Jey Uso', 'Solo Sikoa', 'Paul Heyman'], eras: ['modern'], notes: 'The dominant faction of the modern era led by the Tribal Chief Roman Reigns. Jimmy\'s eventual betrayal of Roman was a massive storyline moment.' }]
  },
  1357: { // Xavier Woods
    injuries: [
      { year: "2017", injury: "Torn Achilles tendon", cause: "Suffered a torn Achilles tendon that kept him out for nearly a year. His return was emotional and well-received." }
    ],
    tagTeams: [],
    factions: [{ name: 'The New Day', members: ['Xavier Woods', 'Kofi Kingston', 'Big E'], eras: ['modern'], notes: 'The longest-reigning tag team champions in WWE history. What started as a heel gospel gimmick transformed into one of the most beloved acts ever. Xavier\'s trombone playing and infectious positivity were key to the group\'s success.' }]
  },
  1358: { // Alex Shelley
    injuries: [
      { year: "2012", injury: "Multiple injuries", cause: "Suffered various shoulder and knee injuries throughout his career that led to lengthy absences." }
    ],
    tagTeams: [
      { name: 'The Motor City Machine Guns', partners: ['Chris Sabin'], eras: ['modern'], notes: 'One of the best tag teams of the 2000s-2010s. Primarily in TNA/Impact. Had a brief but memorable run in NXT.' }
    ],
    factions: []
  },
  1359: { // Chris Sabin
    injuries: [
      { year: "2012", injury: "Torn ACL (multiple)", cause: "Suffered two torn ACLs during his career that required extensive rehabilitation. His comeback to win the TNA World Championship was inspirational." }
    ],
    tagTeams: [
      { name: 'The Motor City Machine Guns', partners: ['Alex Shelley'], eras: ['modern'], notes: 'Innovative tag team known for their rapid-fire double-team maneuvers. Multiple-time TNA/Impact Tag Team Champions.' }
    ],
    factions: []
  },
  1360: { // Nick Aldis
    injuries: [],
    tagTeams: [], factions: []
  },
  1362: { // El Torito
    injuries: [],
    tagTeams: [], factions: []
  },
  1363: { // Shanky
    injuries: [],
    tagTeams: [], factions: []
  },
  1364: { // Reggie
    injuries: [],
    tagTeams: [], factions: []
  },
  1365: { // Great Muta
    injuries: [],
    tagTeams: [], factions: []
  },
  1366: { // Jushin Thunder Liger
    injuries: [
      { year: "1996", injury: "Brain tumor surgery", cause: "Underwent surgery to remove a brain tumor in 1996. Remarkably returned to wrestling and continued for over two more decades." }
    ],
    tagTeams: [], factions: []
  },
  1367: { // Steve Corino
    injuries: [],
    tagTeams: [], factions: []
  },
  1368: { // CW Anderson
    injuries: [],
    tagTeams: [], factions: []
  },
  1369: { // Aiden English
    injuries: [],
    tagTeams: [
      { name: 'The Vaudevillains', partners: ['Simon Gotch'], eras: ['modern'], notes: 'Old-timey vaudeville-themed tag team in NXT and on the main roster. Won the NXT Tag Team Championship.' }
    ],
    factions: [{ name: 'Rusev Day', members: ['Rusev', 'Aiden English', 'Lana'], eras: ['modern'], notes: 'Aiden English served as Rusev\'s hype man, singing his entrance. Rusev Day became a massively popular fan movement.' }]
  },
  1370: { // Simon Gotch
    injuries: [],
    tagTeams: [
      { name: 'The Vaudevillains', partners: ['Aiden English'], eras: ['modern'], notes: 'Vaudeville-era strongman character. Won the NXT Tag Team Championship with Aiden English.' }
    ],
    factions: []
  },
  1371: { // Jordan Devlin
    injuries: [],
    tagTeams: [], factions: []
  },
  1372: { // T-BAR
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Retribution', members: ['Mustafa Ali', 'T-BAR', 'Mace', 'Slapjack', 'Reckoning'], eras: ['modern'], notes: 'Leader of the muscle in the anarchist Retribution faction. Later became Donovan Dijak.' }]
  },
  1373: { // Snooki
    injuries: [],
    tagTeams: [], factions: []
  },
  1374: { // Johnny Knoxville
    injuries: [],
    tagTeams: [], factions: []
  },
  1375: { // Rob Gronkowski
    injuries: [],
    tagTeams: [], factions: []
  },
  1376: { // Shane Thorne
    injuries: [],
    tagTeams: [
      { name: 'TM61 / The Mighty', partners: ['Nick Miller'], eras: ['modern'], notes: 'Australian tag team in NXT. Won the Dusty Rhodes Classic. Shane Thorne later became Slapjack in Retribution.' }
    ],
    factions: [{ name: 'Retribution', members: ['Mustafa Ali', 'T-BAR', 'Mace', 'Slapjack', 'Reckoning'], eras: ['modern'], notes: 'As Slapjack, member of the anarchist faction.' }]
  },
  1377: { // Nick Miller
    injuries: [],
    tagTeams: [
      { name: 'TM61 / The Mighty', partners: ['Shane Thorne'], eras: ['modern'], notes: 'Australian tag team in NXT. Miller retired from wrestling due to injury.' }
    ],
    factions: []
  },
  1378: { // Arturo Ruas
    injuries: [],
    tagTeams: [], factions: []
  },
  1379: { // Bushwhacker Luke
    injuries: [],
    tagTeams: [
      { name: 'The Bushwhackers', partners: ['Bushwhacker Butch'], eras: ['golden', 'new-gen'], notes: 'Beloved comedy tag team from New Zealand known for their arm-swinging walk and licking fans. Before WWF, they were the violent Sheepherders in the territories and New Zealand.' }
    ],
    factions: []
  },
  1380: { // Bushwhacker Butch
    injuries: [],
    tagTeams: [
      { name: 'The Bushwhackers', partners: ['Bushwhacker Luke'], eras: ['golden', 'new-gen'], notes: 'Fan-favorite comedy tag team. Inducted into the WWE Hall of Fame in 2015.' }
    ],
    factions: []
  },
  1381: { // Hawk
    injuries: [
      { year: "1998", injury: "Substance abuse storyline / real issues", cause: "WWF ran a controversial angle about Hawk's real-life substance abuse issues, culminating in him falling off the TitanTron. Many felt it exploited his real struggles." },
      { year: "2003", injury: "Died — heart attack", cause: "Road Warrior Hawk (Michael Hegstrand) died on October 19, 2003 at age 46 from a heart attack in his Indian Rocks Beach, Florida home. He was one half of the greatest tag team of all time, the Road Warriors/Legion of Doom." }
    ],
    tagTeams: [
      { name: 'The Legion of Doom / Road Warriors', partners: ['Animal'], eras: ['golden', 'new-gen', 'attitude'], notes: 'The most dominant and influential tag team in wrestling history. Face paint, spiked shoulder pads, and the Doomsday Device. Won tag titles in every major promotion they competed in.' }
    ],
    factions: []
  },
  1382: { // Animal
    injuries: [
      { year: "2020", injury: "Died — natural causes", cause: "Road Warrior Animal (Joseph Laurinaitis) died on September 22, 2020 at age 60 from natural causes. Along with Hawk, he formed the Legion of Doom — arguably the most iconic tag team in wrestling history." }
    ],
    tagTeams: [
      { name: 'The Legion of Doom / Road Warriors', partners: ['Hawk'], eras: ['golden', 'new-gen', 'attitude'], notes: 'Two-time WWF Tag Team Champions. Their impact on tag team wrestling is immeasurable. Inducted into the WWE Hall of Fame in 2011.' }
    ],
    factions: []
  },
  1383: { // Joey Mercury
    injuries: [
      { year: "2006", injury: "Broken nose / facial damage", cause: "Suffered severe facial damage when a ladder struck his face during an Armageddon tag team match. Required extensive reconstructive surgery." }
    ],
    tagTeams: [
      { name: 'MNM', partners: ['Johnny Nitro', 'Melina'], eras: ['ruthless'], notes: 'Hollywood-themed tag team managed by Melina. Three-time WWE Tag Team Champions. Their red carpet entrance was signature.' }
    ],
    factions: []
  },
  1384: { // Epico Colon
    injuries: [],
    tagTeams: [
      { name: 'Primo & Epico', partners: ['Primo'], eras: ['modern'], notes: 'Puerto Rican tag team managed by Rosa Mendes. Won the WWE Tag Team Championship. Members of the Colon wrestling family.' }
    ],
    factions: []
  },
  1385: { // Ax
    injuries: [
      { year: "late 1980s", injury: "Heart issues", cause: "Developed heart problems that led to him being gradually phased out of the active Demolition tag team and replaced by Crush." }
    ],
    tagTeams: [
      { name: 'Demolition', partners: ['Smash', 'Crush'], eras: ['golden'], notes: 'Face-painted tag team that held the WWF Tag Team Championship for a then-record 478 days. Three-time champions. Often compared to the Road Warriors, but carved their own legacy.' }
    ],
    factions: []
  },
  1387: { // Mo
    injuries: [],
    tagTeams: [
      { name: 'Men on a Mission', partners: ['Mabel'], eras: ['new-gen'], notes: 'Tag team managed by Oscar that started as fun-loving rappers. Won the WWF Tag Team Championship. Mabel later became Viscera and Big Daddy V.' }
    ],
    factions: []
  },
  1388: { // Bull Buchanan
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Right to Censor', members: ['Steven Richards', 'The Godfather', 'Bull Buchanan', 'Ivory', 'Val Venis'], eras: ['attitude'], notes: 'Member of the censorship-themed heel faction that protested the Attitude Era\'s content.' }]
  },
  1392: { // Jakara Jackson
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Meta-Four', members: ['Noam Dar', 'Lash Legend', 'Jakara Jackson', 'Oro Mensah'], eras: ['modern'], notes: 'Member of the Meta-Four faction in NXT.' }]
  },
  1393: { // Kiana James
    injuries: [],
    tagTeams: [], factions: []
  },
  1395: { // Danny Davis
    injuries: [],
    tagTeams: [], factions: []
  },
  1396: { // Veer Mahaan
    injuries: [],
    tagTeams: [], factions: []
  },
  1397: { // Joe Hendry
    injuries: [],
    tagTeams: [], factions: []
  },
  1398: { // Je'Von Evans
    injuries: [],
    tagTeams: [], factions: []
  },
  1399: { // Arianna Grace
    injuries: [],
    tagTeams: [], factions: []
  },
  1400: { // Izzi Dame
    injuries: [],
    tagTeams: [], factions: []
  },
  1401: { // Outback Jack
    injuries: [],
    tagTeams: [], factions: []
  },
  1402: { // Jaida Parker
    injuries: [],
    tagTeams: [], factions: []
  },
  1403: { // Stephanie Vaquer
    injuries: [],
    tagTeams: [], factions: []
  },
  1404: { // Zaria
    injuries: [],
    tagTeams: [], factions: []
  },
  1405: { // Rick Boogs
    injuries: [
      { year: "2022", injury: "Torn patellar tendon", cause: "Suffered a torn patellar tendon during a WrestleMania 38 tag match. Required extensive surgery and kept him out for over a year." }
    ],
    tagTeams: [], factions: []
  },
  1406: { // Dan Spivey
    injuries: [],
    tagTeams: [
      { name: 'The Skyscrapers', partners: ['Sid Vicious'], eras: ['golden'], notes: 'Massive tag team in WCW/NWA. Spivey also teamed with Mike Rotunda as the U.S. Express in the WWF.' }
    ],
    factions: []
  },
  1407: { // David Flair
    injuries: [],
    tagTeams: [], factions: []
  },
  1408: { // Chris Nowinski
    injuries: [
      { year: "2003", injury: "Career-ending concussion", cause: "Suffered a devastating concussion that forced his retirement from wrestling. This experience led him to co-found the Concussion Legacy Foundation with Dr. Robert Cantu and become one of the most important advocates for brain injury research in sports." }
    ],
    tagTeams: [], factions: []
  },
  1409: { // Daniel Puder
    injuries: [],
    tagTeams: [], factions: []
  },
  1410: { // Matt Cappotelli
    injuries: [
      { year: "2007", injury: "Brain tumor", cause: "Diagnosed with a brain tumor that ended his wrestling career. He underwent treatment and returned to training others." },
      { year: "2018", injury: "Died — brain cancer", cause: "Matt Cappotelli died on June 29, 2018 at age 38 from brain cancer. He was a Tough Enough winner who showed enormous potential before his illness cut his career short." }
    ],
    tagTeams: [], factions: []
  },
  1412: { // Mikey
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Spirit Squad', members: ['Nicky', 'Mikey', 'Kenny', 'Johnny', 'Mitch'], eras: ['ruthless'], notes: 'Male cheerleader faction. Mikey and Kenny briefly returned in 2016 as a tag team on SmackDown.' }]
  },
  1414: { // Riley Osborne
    injuries: [],
    tagTeams: [], factions: []
  },
  1415: { // Jimmy Del Ray
    injuries: [
      { year: "2024", injury: "Died — natural causes", cause: "Jimmy Del Ray died on January 26, 2024 at age 57. He was one half of the Heavenly Bodies tag team with Tom Prichard." }
    ],
    tagTeams: [
      { name: 'The Heavenly Bodies', partners: ['Tom Prichard'], eras: ['new-gen'], notes: 'Tag team managed by Jim Cornette. Competed in the WWF in 1993-1994 and had notable matches against the Steiner Brothers.' }
    ],
    factions: []
  },
  1416: { // Ricky Ortiz
    injuries: [],
    tagTeams: [], factions: []
  },
  1417: { // DJ Gabriel
    injuries: [],
    tagTeams: [], factions: []
  },
  1418: { // Karl Malone
    injuries: [],
    tagTeams: [], factions: []
  },
  1419: { // Dennis Rodman
    injuries: [],
    tagTeams: [], factions: []
  },
  1420: { // Kevin Federline
    injuries: [],
    tagTeams: [], factions: []
  },
  1421: { // Stephen Amell
    injuries: [],
    tagTeams: [], factions: []
  },
  1422: { // Maria Menounos
    injuries: [],
    tagTeams: [], factions: []
  },
  1423: { // Pierre
    injuries: [],
    tagTeams: [
      { name: 'The Quebecers', partners: ['Jacques Rougeau'], eras: ['new-gen'], notes: 'Tag team managed by Johnny Polo (Raven). Three-time WWF Tag Team Champions known for their Quebec independence gimmick.' }
    ],
    factions: []
  },
  1424: { // Tiger Mask
    injuries: [],
    tagTeams: [], factions: []
  },
  1425: { // Ernest Miller
    injuries: [],
    tagTeams: [], factions: []
  },
  1426: { // Glacier
    injuries: [],
    tagTeams: [], factions: []
  },
  1427: { // Nash Carter
    injuries: [],
    tagTeams: [
      { name: 'MSK', partners: ['Wes Lee'], eras: ['modern'], notes: 'High-flying NXT tag team that won the NXT Tag Team Championship twice. Carter was released from WWE in 2022.' }
    ],
    factions: []
  },
  1428: { // Deonna Purrazzo
    injuries: [],
    tagTeams: [], factions: []
  },
  1429: { // Zack Gibson
    injuries: [],
    tagTeams: [
      { name: 'Grizzled Young Veterans / Gallus', partners: ['James Drake'], eras: ['modern'], notes: 'Dominant tag team in NXT UK and NXT. Won the NXT UK Tag Team Championship and the Dusty Rhodes Classic.' }
    ],
    factions: []
  },
  1430: { // James Drake
    injuries: [],
    tagTeams: [
      { name: 'Grizzled Young Veterans / Gallus', partners: ['Zack Gibson'], eras: ['modern'], notes: 'Tag team known for their technical prowess and heel tactics.' }
    ],
    factions: []
  },
  1431: { // Nikita Koloff
    injuries: [],
    tagTeams: [
      { name: 'The Super Powers', partners: ['Dusty Rhodes'], eras: ['golden'], notes: 'Stunning babyface turn when the Russian heel Koloff teamed with the American Dream. One of wrestling\'s most memorable turns.' }
    ],
    factions: []
  },
  1432: { // Tank Ledger
    injuries: [],
    tagTeams: [
      { name: 'Ledger & Walker', partners: ['Hank Walker'], eras: ['modern'], notes: 'NXT tag team of two hard-hitting competitors.' }
    ],
    factions: []
  },
  1433: { // Hank Walker
    injuries: [],
    tagTeams: [
      { name: 'Ledger & Walker', partners: ['Tank Ledger'], eras: ['modern'], notes: 'NXT tag team pairing.' }
    ],
    factions: []
  },
  1440: { // Eddy Thorpe
    injuries: [],
    tagTeams: [], factions: []
  },
  1441: { // Dani Palmer
    injuries: [],
    tagTeams: [], factions: []
  },
  1442: { // James Storm
    injuries: [],
    tagTeams: [
      { name: 'America\'s Most Wanted', partners: ['Chris Harris'], eras: ['ruthless'], notes: 'One of the greatest tag teams in TNA history. Multiple-time NWA/TNA World Tag Team Champions. Also competed in NXT briefly.' }
    ],
    factions: []
  },
  1443: { // Chris Harris
    injuries: [],
    tagTeams: [
      { name: 'America\'s Most Wanted', partners: ['James Storm'], eras: ['ruthless'], notes: 'Dominant TNA tag team. Harris had a brief WWE stint as Braden Walker.' }
    ],
    factions: []
  },
  1444: { // Maxine
    injuries: [],
    tagTeams: [], factions: []
  },
  1445: { // Man Mountain Rock
    injuries: [
      { year: "2014", injury: "Died — complications from hip surgery", cause: "Man Mountain Rock (Maxx Payne) died on September 3, 2014 at age 52 from complications of hip replacement surgery. He was known for his guitar-playing gimmick and previously competed as Maxx Payne in WCW." }
    ],
    tagTeams: [], factions: []
  },
  1448: { // Johnny Stamboli
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Full Blooded Italians (FBI)', members: ['Johnny Stamboli', 'Nunzio', 'Chuck Palumbo'], eras: ['ruthless'], notes: 'Italian-American stable on SmackDown. The FBI originated in ECW.' }]
  },
  1449: { // Brian Adams
    injuries: [
      { year: "2007", injury: "Died — drug overdose", cause: "Brian Adams (Crush) died on August 13, 2007 at age 43 from an accidental drug overdose in Tampa, Florida. He competed in the WWF as Crush with Hawaiian and biker gimmicks, and later as one half of KroniK in WCW." }
    ],
    tagTeams: [
      { name: 'KroniK', partners: ['Bryan Clark'], eras: ['attitude'], notes: 'WCW tag team that had a brief, disastrous WWE run. Won the WCW Tag Team Championship.' }
    ],
    factions: [{ name: 'Disciples of Apocalypse', members: ['Crush', 'Chainz', '8-Ball', 'Skull'], eras: ['attitude'], notes: 'Biker faction in the WWF. Crush was the leader.' }]
  },
  1450: { // Bryan Clark
    injuries: [],
    tagTeams: [
      { name: 'KroniK', partners: ['Brian Adams'], eras: ['attitude'], notes: 'WCW Tag Team Champions. Also wrestled as Adam Bomb and Wrath.' }
    ],
    factions: []
  },
  1451: { // Elix Skipper
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1452: { // Kwee Wee
    injuries: [],
    tagTeams: [], factions: []
  },
  1453: { // Dave Mastiff
    injuries: [],
    tagTeams: [], factions: []
  },
  1454: { // Eddie Dennis
    injuries: [],
    tagTeams: [], factions: []
  },
  1455: { // Aoife Valkyrie
    injuries: [],
    tagTeams: [], factions: []
  },
  1456: { // Kay Lee Ray
    injuries: [],
    tagTeams: [], factions: []
  },
  1457: { // Stevie Ray
    injuries: [],
    tagTeams: [
      { name: 'Harlem Heat', partners: ['Booker T'], eras: ['new-gen', 'attitude'], notes: 'One of the greatest tag teams in WCW history. Ten-time WCW Tag Team Champions. Managed by Sister Sherri.' }
    ],
    factions: [{ name: 'nWo (Black and White)', members: ['Hollywood Hogan'], eras: ['attitude'], notes: 'Joined the nWo Black and White faction during the nWo split in WCW.' }]
  },
  1458: { // Norman Smiley
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1459: { // Konnan
    injuries: [],
    tagTeams: [],
    factions: [
      { name: 'Filthy Animals', members: ['Konnan', 'Rey Mysterio', 'Eddie Guerrero', 'Billy Kidman'], eras: ['attitude'], notes: 'Popular WCW faction that feuded with the nWo. Latino-themed group with hip-hop influences.' },
      { name: 'nWo Wolfpac', members: ['Kevin Nash', 'Konnan', 'Lex Luger', 'Sting'], eras: ['attitude'], notes: 'Red and black nWo splinter group in WCW.' }
    ]
  },
  1460: { // Disco Inferno
    injuries: [],
    tagTeams: [], factions: []
  },
  1461: { // Alex Wright
    injuries: [],
    tagTeams: [], factions: []
  },
  1462: { // La Parka
    injuries: [
      { year: "2020", injury: "Died — spinal injury complications", cause: "La Parka (Adolfo Tapia) died on January 11, 2020 at age 56 from complications of a spinal injury sustained during a match in October 2019 when he was thrown from the ring and hit the guardrail. The original La Parka who appeared in WCW (L.A. Park) is a different person." }
    ],
    tagTeams: [], factions: []
  },
  1463: { // Vampiro
    injuries: [],
    tagTeams: [], factions: []
  },
  1464: { // Mikey Whipwreck
    injuries: [],
    tagTeams: [], factions: []
  },
  1465: { // Adrian Adonis
    injuries: [
      { year: "1988", injury: "Died — vehicle accident", cause: "Adrian Adonis died on July 4, 1988 at age 33 in a vehicle accident in Newfoundland, Canada when the van he was traveling in went off the road. Also killed in the accident were fellow wrestlers Pat Kelly and Dave McKigney. Adonis was a talented and versatile performer whose Adorable Adrian character was ahead of its time." }
    ],
    tagTeams: [
      { name: 'The East-West Connection', partners: ['Jesse Ventura'], eras: ['wwwf'], notes: 'Tag team with Jesse "The Body" Ventura in the early 1980s WWF.' }
    ],
    factions: []
  },
  1466: { // Francine
    injuries: [],
    tagTeams: [], factions: []
  },
  1467: { // Zeb Colter
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Real Americans', members: ['Jack Swagger', 'Antonio Cesaro', 'Zeb Colter'], eras: ['modern'], notes: 'Anti-immigration themed stable managed by Zeb Colter (Dutch Mantell). "We the People" became a popular catchphrase.' }]
  },
  1469: { // Wahoo McDaniel
    injuries: [
      { year: "2002", injury: "Died — kidney failure / diabetes complications", cause: "Wahoo McDaniel died on April 18, 2002 at age 63 from kidney failure and diabetes complications. He was a Native American wrestling legend and former NFL player who held multiple NWA titles." }
    ],
    tagTeams: [], factions: []
  },
  1470: { // Dick Murdoch
    injuries: [
      { year: "1996", injury: "Died — heart attack", cause: "Dick Murdoch died on June 15, 1996 at age 49 from a heart attack. He was a tough Texas brawler who won the WWF Tag Team Championship with Adrian Adonis." }
    ],
    tagTeams: [
      { name: 'Murdoch & Adonis', partners: ['Adrian Adonis'], eras: ['golden'], notes: 'Won the WWF Tag Team Championship as an unlikely but effective pair.' }
    ],
    factions: []
  },
  1471: { // Terry Gordy
    injuries: [
      { year: "2001", injury: "Died — heart attack", cause: "Terry 'Bam Bam' Gordy died on July 16, 2001 at age 40 from a heart attack caused by a blood clot. He had previously suffered brain damage from a drug overdose in 1993. One of the Fabulous Freebirds and one of the most gifted big men in wrestling history." }
    ],
    tagTeams: [
      { name: 'The Miracle Violence Connection', partners: ['Steve Williams'], eras: ['golden'], notes: 'Legendary tag team in All Japan Pro Wrestling.' }
    ],
    factions: [{ name: 'The Fabulous Freebirds', members: ['Michael PS Hayes', 'Terry Gordy', 'Buddy Roberts'], eras: ['golden'], notes: 'One of the most legendary factions in wrestling history. Their feud with the Von Erichs in World Class defined an era.' }]
  },
  1472: { // Magnum T.A.
    injuries: [
      { year: "1986", injury: "Career-ending car accident", cause: "Suffered a devastating car accident on October 14, 1986 that broke his neck and ended his career at age 27. He was being groomed as the next NWA World Champion and many believe he would have been one of the all-time greats." }
    ],
    tagTeams: [], factions: []
  },
  1473: { // Ole Anderson
    injuries: [],
    tagTeams: [
      { name: 'The Minnesota Wrecking Crew', partners: ['Arn Anderson', 'Gene Anderson'], eras: ['wwwf', 'golden'], notes: 'Legendary tag team in NWA/WCW. Ole teamed with his kayfabe brother Gene first, then later with Arn.' }
    ],
    factions: [{ name: 'The Four Horsemen', members: ['Ric Flair', 'Arn Anderson', 'Tully Blanchard', 'Ole Anderson'], eras: ['golden'], notes: 'Original member of the most prestigious faction in wrestling history.' }]
  },
  1474: { // Fritz Von Erich
    injuries: [
      { year: "1997", injury: "Died — cancer", cause: "Fritz Von Erich (Jack Adkisson) died on September 10, 1997 at age 68 from cancer. The patriarch of the tragic Von Erich wrestling family, he promoted World Class Championship Wrestling in Dallas. He outlived four of his five sons." }
    ],
    tagTeams: [], factions: []
  },
  1475: { // Kevin Von Erich
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Von Erich Family', members: ['Kevin', 'Kerry', 'David', 'Mike', 'Chris Von Erich'], eras: ['golden'], notes: 'The most beloved wrestling family in Texas history. Kevin is the sole surviving Von Erich brother. Their story is one of incredible triumph and devastating tragedy.' }]
  },
  1476: { // David Von Erich
    injuries: [
      { year: "1984", injury: "Died — acute enteritis (officially)", cause: "David Von Erich died on February 10, 1984 at age 25 in Tokyo, Japan. The official cause was acute enteritis, though the circumstances have been debated for decades. He was considered the most talented of the Von Erich brothers and was being groomed for the NWA World Championship." }
    ],
    tagTeams: [],
    factions: [{ name: 'Von Erich Family', members: ['Kevin', 'Kerry', 'David', 'Mike', 'Chris Von Erich'], eras: ['golden'], notes: 'The first of the Von Erich brothers to die, beginning the family\'s tragic chain of losses.' }]
  },
  1477: { // Bruiser Brody
    injuries: [
      { year: "1988", injury: "Died — stabbed", cause: "Bruiser Brody (Frank Goodish) was stabbed to death on July 17, 1988 at age 42 in Bayamon, Puerto Rico, allegedly by wrestler Jose Huertas Gonzalez (Invader I) in the locker room shower. Gonzalez was acquitted in a controversial trial where key witnesses were reportedly intimidated. One of the most shocking deaths in wrestling history." }
    ],
    tagTeams: [], factions: []
  },
  1478: { // Bobby Eaton
    injuries: [
      { year: "2021", injury: "Died — natural causes", cause: "Bobby Eaton died on August 4, 2021 at age 62. He was widely regarded as one of the best tag team wrestlers ever. One half of the Midnight Express, his in-ring ability was universally praised by peers." }
    ],
    tagTeams: [
      { name: 'The Midnight Express', partners: ['Dennis Condrey', 'Stan Lane'], eras: ['golden'], notes: 'One of the greatest tag teams in wrestling history, managed by Jim Cornette. The Midnight Express feuded with the Rock \'n Roll Express in matches that defined tag team wrestling.' }
    ],
    factions: [{ name: 'The Dangerous Alliance', members: ['Rick Rude', 'Steve Austin', 'Arn Anderson', 'Bobby Eaton', 'Larry Zbyszko', 'Paul E. Dangerously'], eras: ['golden'], notes: 'WCW super-faction managed by Paul Heyman (Paul E. Dangerously). One of the greatest heel factions ever assembled.' }]
  },
  1479: { // Stan Lane
    injuries: [],
    tagTeams: [
      { name: 'The Midnight Express', partners: ['Bobby Eaton'], eras: ['golden'], notes: 'Replaced Dennis Condrey as the second member of the Midnight Express. Won multiple NWA Tag Team Championships with Eaton.' }
    ],
    factions: []
  },
  1480: { // Ricky Morton
    injuries: [],
    tagTeams: [
      { name: 'The Rock \'n Roll Express', partners: ['Robert Gibson'], eras: ['golden'], notes: 'One of the most beloved tag teams in wrestling history. Their feuds with the Midnight Express are legendary. Ricky Morton\'s "face in peril" is the template for all babyface tag team wrestling.' }
    ],
    factions: []
  },
  1481: { // Robert Gibson
    injuries: [
      { year: "late 1980s", injury: "Knee injuries (multiple)", cause: "Suffered multiple knee injuries throughout his career that limited his mobility but never killed his popularity." }
    ],
    tagTeams: [
      { name: 'The Rock \'n Roll Express', partners: ['Ricky Morton'], eras: ['golden'], notes: 'Multiple-time NWA Tag Team Champions. Inducted into the WWE Hall of Fame in 2017.' }
    ],
    factions: []
  },
  1482: { // Ray Stevens
    injuries: [
      { year: "1996", injury: "Died — heart attack", cause: "Ray Stevens died on May 3, 1996 at age 60 from a heart attack. He was one of the most talented performers of the 1960s-70s, known for his innovative bumping ability. Inducted into the WWE Hall of Fame in 2023." }
    ],
    tagTeams: [], factions: []
  },
  1483: { // Dick the Bruiser
    injuries: [
      { year: "1991", injury: "Died — internal bleeding", cause: "Dick the Bruiser died on November 10, 1991 at age 62 from internal bleeding. He was one of the toughest men in wrestling history, a multi-time AWA World Champion and one of the biggest draws of the 1960s-70s." }
    ],
    tagTeams: [
      { name: 'Bruiser & Crusher', partners: ['The Crusher'], eras: ['wwwf'], notes: 'Legendary tag team in the AWA. Two of the toughest men in wrestling who were massive draws in the Midwest.' }
    ],
    factions: []
  },
  1484: { // The Crusher
    injuries: [
      { year: "2005", injury: "Died — natural causes", cause: "The Crusher (Reggie Lisowski) died on October 22, 2005 at age 79. He was a beloved AWA star known for his beer-swilling, brawling persona. One of the most popular wrestlers in Midwest history." }
    ],
    tagTeams: [
      { name: 'Bruiser & Crusher', partners: ['Dick the Bruiser'], eras: ['wwwf'], notes: 'One of the great tag teams of the territorial era. Multiple-time AWA Tag Team Champions.' }
    ],
    factions: []
  },
  1485: { // Brad Armstrong
    injuries: [
      { year: "2012", injury: "Died — drug-related causes", cause: "Brad Armstrong died on November 1, 2012 at age 51 from an apparent drug overdose. He was the most talented of Bob Armstrong's sons, known as one of the best pure workers in the business who never got the push his talent deserved." }
    ],
    tagTeams: [], factions: []
  },
  1486: { // Tracy Smothers
    injuries: [
      { year: "2020", injury: "Died — cancer", cause: "Tracy Smothers died on October 28, 2020 at age 58 from cancer. He was a versatile performer who competed in NWA territories, SMW, WWF, and ECW." }
    ],
    tagTeams: [], factions: []
  },
  1487: { // Tommy Rich
    injuries: [],
    tagTeams: [], factions: []
  },
  1488: { // Dennis Condrey
    injuries: [
      { year: "2024", injury: "Died — natural causes", cause: "Dennis Condrey died on February 24, 2024 at age 68. He was the original second member of the Midnight Express alongside Bobby Eaton, managed by Jim Cornette." }
    ],
    tagTeams: [
      { name: 'The Midnight Express', partners: ['Bobby Eaton'], eras: ['golden'], notes: 'Original lineup of the Midnight Express. One of the greatest heel tag teams in NWA history.' }
    ],
    factions: []
  },
  1489: { // Buddy Roberts
    injuries: [
      { year: "2012", injury: "Died — natural causes", cause: "Buddy Roberts died on November 29, 2012 at age 67. He was the third member of the Fabulous Freebirds, an integral part of one of wrestling's most storied factions." }
    ],
    tagTeams: [],
    factions: [{ name: 'The Fabulous Freebirds', members: ['Michael PS Hayes', 'Terry Gordy', 'Buddy Roberts'], eras: ['golden'], notes: 'One of the most legendary factions in wrestling history. Their feud with the Von Erichs filled stadiums across Texas.' }]
  },
  1490: { // Silver King
    injuries: [
      { year: "2019", injury: "Died — heart attack in the ring", cause: "Silver King died on May 11, 2019 at age 51 from a heart attack during a match at the Roundhouse in Camden, London. He collapsed in the ring and could not be revived. He had a long career in CMLL, WCW, and lucha libre." }
    ],
    tagTeams: [], factions: []
  },
  1491: { // Crowbar
    injuries: [],
    tagTeams: [], factions: []
  },
  1492: { // Daffney
    injuries: [
      { year: "2021", injury: "Died — suicide", cause: "Daffney (Shannon Spruill) died on September 2, 2021 at age 46 by suicide. She had posted a distressed video on Instagram Live before her death. She was one of the most popular women in WCW, known for her goth persona and screaming entrance." }
    ],
    tagTeams: [], factions: []
  },
  1493: { // J.J. Dillon
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Four Horsemen', members: ['Ric Flair', 'Arn Anderson', 'Tully Blanchard', 'Lex Luger'], eras: ['golden'], notes: 'Manager of the Four Horsemen in the NWA. J.J. Dillon was the conniving mouthpiece who helped the Horsemen cheat to victory.' }]
  },
  1494: { // Sakoda
    injuries: [],
    tagTeams: [], factions: []
  },
  1496: { // Kevin Sullivan
    injuries: [
      { year: "2024", injury: "Died — natural causes", cause: "Kevin Sullivan died on August 8, 2024 at age 74. He was a booker, wrestler, and sinister character in Florida and WCW. His Dungeon of Doom stable in WCW was infamous, and behind the scenes he was an influential figure in booking." }
    ],
    tagTeams: [],
    factions: [{ name: 'Dungeon of Doom', members: ['Kevin Sullivan', 'The Giant', 'Kamala'], eras: ['new-gen'], notes: 'WCW heel stable led by Sullivan\'s "Taskmaster" character to take down Hulk Hogan. Featured the Master and various monster characters.' }]
  },
  1497: { // Danny Hodge
    injuries: [
      { year: "2020", injury: "Died — natural causes", cause: "Danny Hodge died on December 24, 2020 at age 88. He was one of the toughest legitimate athletes in wrestling history, an Olympic silver medalist in wrestling and one of the top NWA stars of the 1960s. Known for crushing apples with his bare hands." }
    ],
    tagTeams: [], factions: []
  },
  1498: { // Baron Von Raschke
    injuries: [],
    tagTeams: [], factions: []
  },
  1499: { // Jimmy Garvin
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'The Fabulous Freebirds (later version)', members: ['Michael PS Hayes', 'Jimmy Garvin'], eras: ['golden'], notes: 'Joined the Freebirds as the fourth Bird. Won the WCW World Tag Team Championship with Hayes.' }]
  },
  1500: { // Bob Armstrong
    injuries: [
      { year: "2020", injury: "Died — bone cancer", cause: "Bob Armstrong (Joseph James) died on November 25, 2020 at age 80 from bone cancer. He was a legendary promoter and wrestler in the southeastern territories, patriarch of the Armstrong wrestling family." }
    ],
    tagTeams: [], factions: []
  },
  1501: { // Axl Rotten
    injuries: [
      { year: "2016", injury: "Died — heroin overdose", cause: "Axl Rotten (Brian Knighton) died on February 4, 2016 at age 44 from a heroin overdose. He was one of ECW's most dedicated hardcore wrestlers, known for his brutal chair shots and death matches." }
    ],
    tagTeams: [], factions: []
  },
  1502: { // Skandor Akbar
    injuries: [
      { year: "2010", injury: "Died — natural causes", cause: "Skandor Akbar died on September 9, 2010 at age 75. He was a legendary heel manager in World Class and other Texas territories, managing some of the most hated villains in Dallas wrestling history." }
    ],
    tagTeams: [], factions: []
  },
  1505: { // Rikidozan
    injuries: [
      { year: "1963", injury: "Died — stabbed", cause: "Rikidozan was stabbed on December 8, 1963 by a yakuza member in a Tokyo nightclub and died on December 15, 1963 at age 39 from peritonitis. He is considered the father of Japanese professional wrestling and was one of the biggest cultural figures in postwar Japan." }
    ],
    tagTeams: [], factions: []
  },
  1506: { // Tessa Blanchard
    injuries: [],
    tagTeams: [], factions: []
  },
  1507: { // Scotty Riggs
    injuries: [
      { year: "1997", injury: "Eye injury", cause: "Suffered a legitimate eye injury that was worked into a storyline where he wore an eyepatch." }
    ],
    tagTeams: [
      { name: 'The American Males', partners: ['Buff Bagwell'], eras: ['new-gen'], notes: 'WCW tag team with an infamously catchy entrance theme. Broke up when Bagwell joined the nWo.' }
    ],
    factions: []
  },
  1508: { // Public Enemy
    injuries: [],
    tagTeams: [], factions: []
  },
  1509: { // 911
    injuries: [],
    tagTeams: [], factions: []
  },
  1511: { // Tony Mamaluke
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Full Blooded Italians (FBI)', members: ['Little Guido', 'Tony Mamaluke'], eras: ['attitude'], notes: 'Member of the ECW FBI stable.' }]
  },
  1512: { // Rocco Rock
    injuries: [
      { year: "2002", injury: "Died — heart attack", cause: "Rocco Rock (Ted Petty) died on September 21, 2002 at age 49 from a heart attack. He was one half of Public Enemy, the wild brawling tag team famous in ECW for their table-based offense." }
    ],
    tagTeams: [
      { name: 'Public Enemy', partners: ['Johnny Grunge'], eras: ['attitude'], notes: 'ECW Tag Team Champions known for putting opponents through tables before the Dudley Boyz made it mainstream. Also had runs in WCW and WWE.' }
    ],
    factions: []
  },
  1513: { // Johnny Grunge
    injuries: [
      { year: "2006", injury: "Died — sleep apnea / heart failure", cause: "Johnny Grunge (Michael Durham) died on February 16, 2006 at age 39 from complications of sleep apnea. He was the other half of Public Enemy, ECW's wildest tag team." }
    ],
    tagTeams: [
      { name: 'Public Enemy', partners: ['Rocco Rock'], eras: ['attitude'], notes: 'ECW originals known for their extreme style and hip-hop influenced entrance.' }
    ],
    factions: []
  },
  1514: { // Mike Sanders
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Natural Born Thrillers', members: ['Sean O\'Haire', 'Chuck Palumbo', 'Mike Sanders', 'Mark Jindrak', 'Shawn Stasiak'], eras: ['attitude'], notes: 'WCW young heel faction. Sanders served as the mouthpiece of the group.' }]
  },
  1515: { // Lenny Lane
    injuries: [],
    tagTeams: [], factions: []
  },
  1516: { // Lodi
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Raven\'s Flock', members: ['Raven', 'Saturn', 'Kanyon', 'Lodi'], eras: ['attitude'], notes: 'Carried signs for Raven\'s Flock in WCW. The sign-carrying gimmick was beloved by fans.' }]
  },
  1517: { // Bunkhouse Buck
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Stud Stable', members: ['Colonel Robert Parker', 'Bunkhouse Buck', 'Arn Anderson', 'Terry Funk', 'Meng'], eras: ['new-gen'], notes: 'WCW heel stable managed by Colonel Robert Parker.' }]
  },
  1519: { // Mitsuharu Misawa
    injuries: [
      { year: "2009", injury: "Died — spinal cord injury in the ring", cause: "Mitsuharu Misawa died on June 13, 2009 at age 46 after taking a back suplex during a Pro Wrestling NOAH match. The accumulated damage from decades of taking devastating head and neck bumps caused fatal spinal cord damage. He is widely regarded as one of the greatest professional wrestlers of all time." }
    ],
    tagTeams: [
      { name: 'Misawa & Kobashi', partners: ['Kenta Kobashi'], eras: ['new-gen'], notes: 'One of the greatest tag teams in Japanese wrestling history. Their matches in All Japan Pro Wrestling are legendary.' }
    ],
    factions: []
  },
  1520: { // Kenta Kobashi
    injuries: [
      { year: "2006", injury: "Knee surgery (career-threatening)", cause: "Required extensive knee surgery that kept him out for over a year. Years of punishment had destroyed his knees." },
      { year: "2013", injury: "Cancer (kidney)", cause: "Diagnosed with kidney cancer. He successfully battled the disease and made an emotional return to the ring." }
    ],
    tagTeams: [
      { name: 'Misawa & Kobashi', partners: ['Mitsuharu Misawa'], eras: ['new-gen'], notes: 'Legendary All Japan tag team.' }
    ],
    factions: []
  },
  1521: { // Toshiaki Kawada
    injuries: [],
    tagTeams: [
      { name: 'Holy Demon Army', partners: ['Akira Taue'], eras: ['new-gen'], notes: 'Legendary tag team in All Japan Pro Wrestling. Feuded extensively with Misawa and Kobashi in some of the greatest tag matches ever.' }
    ],
    factions: []
  },
  1522: { // Jumbo Tsuruta
    injuries: [
      { year: "2000", injury: "Died — kidney transplant complications", cause: "Jumbo Tsuruta died on May 13, 2000 at age 49 from complications following a kidney transplant due to hepatitis B. He was one of the greatest Japanese wrestlers ever and All Japan's top star before Misawa." }
    ],
    tagTeams: [], factions: []
  },
  1523: { // Genichiro Tenryu
    injuries: [],
    tagTeams: [], factions: []
  },
  1524: { // Hayabusa
    injuries: [
      { year: "2001", injury: "Paralyzed — botched moonsault", cause: "Suffered a career-ending injury on October 22, 2001 when a moonsault went wrong and he landed on his head, leaving him paralyzed. He was the top star of FMW (Frontier Martial-Arts Wrestling)." },
      { year: "2016", injury: "Died — subarachnoid hemorrhage", cause: "Hayabusa (Eiji Ezaki) died on March 3, 2016 at age 47 from a subarachnoid hemorrhage. He had been wheelchair-bound since his 2001 injury but remained active in the wrestling community and had regained some mobility." }
    ],
    tagTeams: [], factions: []
  },
  1525: { // El Hijo del Santo
    injuries: [],
    tagTeams: [], factions: []
  },
  1526: { // Negro Casas
    injuries: [],
    tagTeams: [], factions: []
  },
  1527: { // Blue Panther
    injuries: [],
    tagTeams: [], factions: []
  },
  1528: { // Sgt. Craig Pittman
    injuries: [],
    tagTeams: [], factions: []
  },
  1529: { // Ice Train
    injuries: [],
    tagTeams: [], factions: []
  },
  1530: { // Scott Norton
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'nWo', members: ['Hollywood Hogan', 'Kevin Nash', 'Scott Hall'], eras: ['attitude'], notes: 'Member of the nWo in WCW. Norton was also a successful tag team wrestler in New Japan Pro Wrestling.' }]
  },
  1531: { // Villano III
    injuries: [
      { year: "2018", injury: "Died — complications from knee surgery", cause: "Villano III died on October 6, 2018 at age 65 from complications following knee surgery. He was one of the most respected luchadors in Mexican wrestling history and part of the legendary Villano family." }
    ],
    tagTeams: [], factions: []
  },
  1532: { // Hector Guerrero
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Guerrero Family', members: ['Eddie Guerrero', 'Chavo Guerrero', 'Hector Guerrero', 'Mando Guerrero', 'Chavo Sr.'], eras: ['golden'], notes: 'Part of the legendary Guerrero wrestling family. Hector also played the Gobbledy Gooker character at Survivor Series 1990.' }]
  },
  1533: { // Mando Guerrero
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Guerrero Family', members: ['Eddie Guerrero', 'Chavo Guerrero', 'Hector Guerrero', 'Mando Guerrero', 'Chavo Sr.'], eras: ['golden'], notes: 'Member of the Guerrero wrestling family.' }]
  },
  1534: { // Chavo Guerrero Sr.
    injuries: [
      { year: "2017", injury: "Died — liver cancer", cause: "Chavo Guerrero Sr. died on February 11, 2017 at age 68 from liver cancer. He was the patriarch of the next generation of Guerreros and a respected wrestler in his own right." }
    ],
    tagTeams: [],
    factions: [{ name: 'Guerrero Family', members: ['Eddie Guerrero', 'Chavo Guerrero', 'Hector Guerrero', 'Mando Guerrero', 'Chavo Sr.'], eras: ['golden'], notes: 'The eldest of Gory Guerrero\'s wrestling sons.' }]
  },
  1535: { // Mark Lewin
    injuries: [],
    tagTeams: [], factions: []
  },
  1536: { // Dutch Savage
    injuries: [
      { year: "2013", injury: "Died — natural causes", cause: "Dutch Savage died on July 30, 2013 at age 78. He was a legendary figure in Pacific Northwest wrestling." }
    ],
    tagTeams: [], factions: []
  },
  1537: { // Buzz Sawyer
    injuries: [
      { year: "1992", injury: "Died — drug overdose", cause: "Buzz Sawyer died on February 7, 1992 at age 32 from a drug overdose in Sacramento, California. He was one of the most intense and talented performers of the 1980s NWA scene, known for his feud with Tommy Rich and his incredible athleticism for his size." }
    ],
    tagTeams: [], factions: []
  },
  1539: { // Stu Hart
    injuries: [
      { year: "2003", injury: "Died — natural causes", cause: "Stu Hart died on October 16, 2003 at age 88 in Calgary, Alberta, Canada. The patriarch of the Hart wrestling family founded Stampede Wrestling in 1948 and trained generations of wrestlers in his legendary Hart Dungeon, including his sons Bret and Owen Hart, as well as Chris Jericho, Chris Benoit, and countless others." }
    ],
    tagTeams: [],
    factions: [{ name: "Hart Family", members: ["Bret Hart", "Owen Hart", "Jim Neidhart", "British Bulldog", "Keith Hart", "Bruce Hart", "Smith Hart"], eras: ["wwwf", "golden"], notes: "Patriarch of the Hart wrestling dynasty. Stu trained all of his sons and many of the top stars who came through Stampede Wrestling in Calgary." }]
  },
  1540: { // Gorgeous George
    injuries: [
      { year: "1963", injury: "Died — heart attack", cause: "Gorgeous George died on December 26, 1963 at age 48 from a heart attack following years of heavy drinking. He was the original flamboyant wrestling character, pioneering the use of entrance robes, valets, and outrageous personas. His influence extended beyond wrestling — Muhammad Ali, James Brown, and countless performers cited him as an inspiration." }
    ],
    tagTeams: [], factions: []
  },
  1541: { // Mad Dog Vachon
    injuries: [
      { year: "2013", injury: "Died — natural causes", cause: "Mad Dog Vachon died on November 21, 2013 at age 84 in Omaha, Nebraska. Born Maurice Vachon in Montreal, he was one of the most feared brawlers in wrestling history, competing in the AWA and territories across North America. He lost his lower right leg in a 1987 car accident but remained a beloved figure in wrestling until his death." }
    ],
    tagTeams: [],
    factions: [{ name: "The Vachons", members: ["Mad Dog Vachon", "Butcher Vachon", "Vivian Vachon", "Luna Vachon"], eras: ["wwwf"], notes: "The Vachon wrestling family. Mad Dog's niece Luna Vachon later became a prominent figure in WWF/WWE." }]
  },
  1542: { // Bill Watts
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Mid-South Wrestling", members: ["Bill Watts", "Jim Ross"], eras: ["wwwf", "golden"], notes: "Founded and ran Mid-South Wrestling / UWF, one of the most critically acclaimed territories of the 1980s. Later served briefly as WCW Executive Vice President in 1992-1993." }]
  },
  1550: { // Andy Kaufman
    injuries: [
      { year: "1984", injury: "Died — lung cancer", cause: "Andy Kaufman died on May 16, 1984 at age 35 from a rare form of large cell lung cancer, despite being a non-smoker. He was famous in wrestling for his feud with Jerry 'The King' Lawler, which blurred the lines between reality and performance. Their confrontation on Late Night with David Letterman in 1982 remains one of the most iconic moments in television history." }
    ],
    tagTeams: [], factions: []
  },
  1552: { // Jackie Gayda
    injuries: [],
    tagTeams: [{ name: "Jackie & Charlie", partners: ["Charlie Haas"], eras: ["ruthless"], notes: "Jackie Gayda won WWE Tough Enough 2 in 2002 and was paired with Charlie Haas as his valet and occasional tag partner. She is perhaps best remembered for a rough in-ring segment on Raw in 2002 that was widely criticized but she continued to improve during her WWE tenure." }],
    factions: []
  },
  1553: { // Linda Miles
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Tough Enough Winners", members: ["Linda Miles", "Jackie Gayda"], eras: ["ruthless"], notes: "Linda Miles won WWE Tough Enough 2 alongside Jackie Gayda in 2002. She later competed in OVW developmental and had a brief stint on the main roster as Shaniqua, the dominatrix-styled manager of the Basham Brothers." }]
  },
  1555: { // Brad Maddox
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Authority Associates", members: ["Brad Maddox", "Vickie Guerrero", "Triple H", "Stephanie McMahon"], eras: ["reality"], notes: "Brad Maddox served as Raw General Manager in 2013 under the authority of Triple H and Stephanie McMahon. He started as a referee involved in a controversial finish at Hell in a Cell 2012, which launched his on-screen personality role." }]
  },
  1556: { // Taryn Terrell
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Beautiful People (TNA)", members: ["Taryn Terrell", "Angelina Love", "Velvet Sky"], eras: ["pg"], notes: "After a brief WWE run as Tiffany (2007-2010) where she served as ECW General Manager, Taryn Terrell moved to TNA where she became Knockouts Champion. She had a memorable Ladder match with Gail Kim at Slammiversary 2013." }]
  },
  1557: { // Sarah Logan
    injuries: [
      { year: "2020", injury: "Released", cause: "Released during COVID-19 cuts in April 2020." }
    ],
    tagTeams: [],
    factions: [{ name: "Riott Squad", members: ["Ruby Riott", "Liv Morgan", "Sarah Logan"], eras: ["reality"], notes: "Heel stable that debuted in late 2017, terrorizing the women's division on Raw and SmackDown. Logan served as the group's powerhouse with a backwoods survivalist edge." }]
  },
  1558: { // Myles Borne
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1559: { // The Midnight Express
    injuries: [],
    tagTeams: [{ name: "The Midnight Express", partners: ["Bobby Eaton", "Stan Lane", "Dennis Condrey"], eras: ["territory"], notes: "One of the most decorated tag teams in NWA/WCW history, managed by Jim Cornette. Originally Bobby Eaton and Dennis Condrey, later reconstituted with Eaton and Stan Lane. Won multiple NWA World Tag Team Championships and had legendary feuds with the Rock 'n' Roll Express and the Road Warriors." }],
    factions: []
  },
  1560: { // Akira Taue
    injuries: [],
    tagTeams: [{ name: "Holy Demon Army", partners: ["Toshiaki Kawada"], eras: ["golden"], notes: "All Japan Pro Wrestling tag team with Toshiaki Kawada. Part of the Four Pillars of Heaven era, they feuded extensively with Misawa and Kobashi's Super Generation Army." }],
    factions: [{ name: "Four Pillars of Heaven", members: ["Mitsuharu Misawa", "Kenta Kobashi", "Toshiaki Kawada", "Akira Taue"], eras: ["golden"], notes: "The four cornerstone wrestlers of All Japan Pro Wrestling in the 1990s who defined an era of legendary main event matches." }]
  },
  1561: { // Frankie Williams
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1562: { // Jay Youngblood
    injuries: [
      { year: "1985", injury: "Died — heart attack", cause: "Jay Youngblood died on September 2, 1985 at age 30 from a suspected heart attack while on a wrestling tour in Australia." }
    ],
    tagTeams: [{ name: "Youngblood & Steamboat", partners: ["Ricky Steamboat"], eras: ["territory"], notes: "NWA World Tag Team Champions. Jay Youngblood and Ricky Steamboat formed one of the top babyface tag teams in the NWA during the early 1980s." }],
    factions: []
  },
  1564: { // Dave Taylor
    injuries: [],
    tagTeams: [{ name: "The Blue Bloods", partners: ["William Regal"], eras: ["attitude", "ruthless"], notes: "British tag team with William Regal in WCW's Blue Bloods stable and later reunited in WWE in 2006 on SmackDown." }],
    factions: [{ name: "The Blue Bloods", members: ["William Regal", "Dave Taylor", "Earl Robert Eaton"], eras: ["attitude"], notes: "WCW stable of aristocratic British-themed wrestlers led by Steven Regal (William Regal). Dave Taylor was a core member throughout the group's existence in the mid-to-late 1990s." }]
  },
  1565: { // Reby Hardy
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Hardy Family", members: ["Matt Hardy", "Reby Hardy", "Jeff Hardy"], eras: ["reality"], notes: "Reby Hardy appeared as Queen Rebecca in Impact Wrestling's Broken Universe alongside husband Matt Hardy, playing a key role in the cult-favorite Broken Matt Hardy storyline segments filmed at the Hardy compound." }]
  },
  1567: { // The Acclaimed
    injuries: [],
    tagTeams: [{ name: "The Acclaimed", partners: ["Max Caster", "Anthony Bowens"], eras: ["modern"], notes: "Fan-favorite AEW tag team known for Caster's pre-match rap disses and the 'Scissor Me' catchphrase. Multiple-time AEW World Tag Team Champions, managed by Billy Gunn." }],
    factions: []
  },
  1568: { // Jesus (Aguilera)
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Carlito's Crew", members: ["Carlito", "Jesús"], eras: ["ruthless"], notes: "Jesús served as Carlito Caribbean Cool's bodyguard on SmackDown in 2004-2005. Most notably attacked John Cena in a stabbing angle that led to a feud culminating at Armageddon 2004." }]
  },
  1571: { // Jack Victory
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Steve Corino's Group", members: ["Steve Corino", "Jack Victory", "Dawn Marie"], eras: ["attitude"], notes: "Jack Victory served as Steve Corino's manager and associate in ECW, often accompanying him to ringside. After breaking his leg, he managed Corino from a wheelchair during ECW's final years." }]
  },
  1572: { // Vic Grimes
    injuries: [
      { year: "2000", injury: "Severe injuries from scaffold fall", cause: "Suffered serious injuries during a scaffold match with New Jack at ECW Living Dangerously 2000. The spot went dangerously wrong, with both men crashing through tables from a significant height." }
    ],
    tagTeams: [],
    factions: [{ name: "Da Baldies", members: ["Vic Grimes", "Tony DeVito", "Angel", "Spanish Angel"], eras: ["attitude"], notes: "ECW heel faction known for brawling and hardcore matches. The group feuded with New Jack and other ECW regulars throughout 1999-2000." }]
  },
  1573: { // Mustafa Saed
    injuries: [],
    tagTeams: [{ name: "The Gangstas", partners: ["New Jack"], eras: ["attitude"], notes: "ECW tag team with New Jack known for brutal garbage-style matches. Originally formed in Smoky Mountain Wrestling before becoming a major ECW act in the mid-1990s." }],
    factions: []
  },
  1574: { // Kid Kash
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1575: { // MJF
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Pinnacle", members: ["MJF", "FTR", "Wardlow", "Shawn Spears"], eras: ["modern"], notes: "AEW heel stable led by MJF in 2021 that feuded with The Inner Circle. The group included FTR (Cash Wheeler and Dax Harwood), Wardlow, and Shawn Spears before imploding when Wardlow turned on MJF." }]
  },
  1576: { // Britt Baker
    injuries: [
      { year: "2020", injury: "Knee injury", cause: "Suffered a knee injury during a match with Hikaru Shida on AEW Dynamite in May 2020, requiring surgery and several months of recovery." }
    ],
    tagTeams: [],
    factions: []
  },
  1578: { // Darby Allin
    injuries: [
      { year: "2023", injury: "Broken foot", cause: "Suffered a broken foot during a match that required time off from AEW programming." }
    ],
    tagTeams: [{ name: "Darby Allin & Sting", partners: ["Sting"], eras: ["modern"], notes: "Fan-favorite AEW tag team pairing. Darby and Sting teamed together from 2021 through Sting's retirement match at AEW Revolution 2024, where they won the AEW World Tag Team Championships in Sting's final match." }],
    factions: []
  },
  1579: { // Dos Caras
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Mascaras Wrestling Family", members: ["Mil Mascaras", "Dos Caras", "Sicodelico"], eras: ["territory"], notes: "Legendary Mexican wrestling family. Dos Caras was the brother of Mil Mascaras and father of Alberto Del Rio (Alberto El Patron), making them one of the most prominent lucha libre dynasties." }]
  },
  1580: { // Jules Strongbow
    injuries: [],
    tagTeams: [{ name: "The Strongbows", partners: ["Chief Jay Strongbow"], eras: ["golden"], notes: "Two-time WWF Tag Team Champions in 1982-1983. Jules was presented as Chief Jay Strongbow's brother and was an enrolled member of the Oneida Nation of Wisconsin." }],
    factions: []
  },
  1581: { // Mike Kanellis
    injuries: [],
    tagTeams: [{ name: "Mike & Maria", partners: ["Maria Kanellis"], eras: ["reality"], notes: "Real-life married couple who signed with WWE in 2017 as 'The First Couple of WWE.' Competed on 205 Live and Raw together before both were released in 2020." }],
    factions: [{ name: "The Kingdom", members: ["Mike Bennett", "Matt Taven", "Maria Kanellis"], eras: ["reality"], notes: "ROH faction led by Mike Bennett (Kanellis) and Matt Taven, with Maria Kanellis as their manager. A prominent heel group in Ring of Honor in the mid-2010s." }]
  },
  1583: { // Katie Lea
    injuries: [],
    tagTeams: [{ name: "The Burchills", partners: ["Paul Burchill"], eras: ["pg"], notes: "Katie Lea Burchill was presented as Paul Burchill's kayfabe sister in WWE in 2008, accompanying him to the ring and occasionally interfering in his matches on ECW and Raw." }],
    factions: []
  },
  1585: { // Adriana Rizzo
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The D'Angelo Family", members: ["Tony D'Angelo", "Channing Lorenzo", "Adriana Rizzo", "Luca Crusifino"], eras: ["modern"], notes: "Mob-themed NXT faction led by Tony D'Angelo. Adriana Rizzo serves as a member and occasional in-ring competitor, with the group dominating NXT's tag and midcard scene." }]
  },
  1586: { // Bullet Club
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Bullet Club", members: ["Finn Balor", "AJ Styles", "Kenny Omega", "The Young Bucks", "Karl Anderson", "Luke Gallows", "Cody Rhodes", "Hangman Adam Page"], eras: ["modern"], notes: "NJPW's flagship villainous gaijin faction formed in 2013 by Prince Devitt (Finn Balor). Became one of wrestling's most merchandised and influential stables, with multiple iterations led by AJ Styles, Kenny Omega, and Jay White. Alumni went on to major roles in WWE and AEW." }]
  },
  1587: { // New Bloodline
    injuries: [],
    tagTeams: [],
    factions: [{ name: "New Bloodline", members: ["Solo Sikoa", "Jacob Fatu", "Tama Tonga", "Tonga Loa"], eras: ["modern"], notes: "Solo Sikoa's splinter faction formed in 2024 during Roman Reigns' hiatus after WrestleMania 40. The group engaged in a civil war storyline with Roman Reigns' returning original Bloodline throughout late 2024." }]
  },
  1588: { // Sha Samuels
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1589: { // Joseph Conners
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1590: { // Hangman Adam Page
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Elite", members: ["Kenny Omega", "The Young Bucks", "Hangman Adam Page", "Cody Rhodes"], eras: ["modern"], notes: "Founding faction of AEW consisting of Kenny Omega, The Young Bucks (Matt and Nick Jackson), Hangman Adam Page, and Cody Rhodes. Originally formed in NJPW/ROH as part of the Bullet Club before breaking away to start All Elite Wrestling in 2019." }, { name: "The Dark Order", members: ["Hangman Adam Page", "Evil Uno", "John Silver", "Alex Reynolds", "Brodie Lee"], eras: ["modern"], notes: "Hangman Adam Page aligned with The Dark Order in a fan-favorite storyline in 2021, with the group supporting his quest for the AEW World Championship. Their bond was strengthened by the tragic passing of Brodie Lee." }]
  },
  1591: { // Emilia McKenzie
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1592: { // The Funkettes
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1593: { // Kim Chee
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1594: { // Rey Fenix
    injuries: [
      { year: "2025", injury: "Arm/elbow injury", cause: "Suffered an arm injury in an AEW match in early 2025 during the final stretch of his AEW tenure before signing with WWE." }
    ],
    tagTeams: [{ name: "Lucha Brothers", partners: ["Penta"], eras: ["modern"], notes: "Tag team with brother Penta (Pentagon Jr.). Former AEW World Tag Team Champions and one of the most acclaimed tag teams in modern wrestling, combining high-flying lucha libre with hardcore elements." }],
    factions: [{ name: "Death Triangle", members: ["PAC", "Penta", "Rey Fenix"], eras: ["modern"], notes: "AEW trio consisting of PAC, Penta, and Rey Fenix. Won the AEW World Trios Championship and were managed by Alex Abrahantes." }]
  },
  1596: { // Rosemary
    injuries: [
      { year: "2017", injury: "Torn ACL", cause: "Suffered a torn ACL during an Impact Wrestling match in 2017 that required surgery and extensive rehabilitation." }
    ],
    tagTeams: [{ name: "Decay", partners: ["Abyss", "Crazzy Steve"], eras: ["reality"], notes: "Impact Wrestling faction and tag team with Abyss and Crazzy Steve. Rosemary served as the group's supernatural leader, winning the Impact Knockouts World Tag Team Championship in later iterations." }],
    factions: []
  },
  1597: { // Austin Aries
    injuries: [
      { year: "2014", injury: "Orbital bone fracture", cause: "Suffered a fractured orbital bone from a Briscoe Brothers superkick during a Ring of Honor match." }
    ],
    tagTeams: [],
    factions: []
  },
  1598: { // Pat O'Connor
    injuries: [
      { year: "1990", injury: "Died — cancer", cause: "Pat O'Connor died on August 16, 1990 at age 65 from cancer. He was a New Zealand-born NWA World Heavyweight Champion who held the title from 1959 to 1961, losing it to Buddy Rogers in the 'Match of the Century' at Comiskey Park before nearly 39,000 fans." }
    ],
    tagTeams: [],
    factions: []
  },
  1599: { // Scott Putski
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1600: { // The Yukon Lumberjacks
    injuries: [],
    tagTeams: [{ name: "The Yukon Lumberjacks", partners: ["Eric the Lumberjack", "Pierre the Lumberjack"], eras: ["territory"], notes: "WWWF Tag Team Champions in 1978, managed by Captain Lou Albano. Won the titles in June and held them for 148 days before losing to Tony Garea and Larry Zbyszko." }],
    factions: []
  },
  1602: { // The Moondogs
    injuries: [],
    tagTeams: [{ name: "The Moondogs", partners: ["Moondog Rex", "Moondog King", "Moondog Spot"], eras: ["territory", "golden"], notes: "Wild, bone-carrying WWF tag team who won the WWF Tag Team Championship in 1981 with Moondog Rex and Moondog King. The act continued with various iterations including Moondog Spot, becoming a fixture in the WWF and Memphis territory." }],
    factions: []
  },
  1603: { // Pierre Carl Ouellet
    injuries: [],
    tagTeams: [{ name: "The Quebecers", partners: ["Jacques Rougeau"], eras: ["new-gen"], notes: "Three-time WWF Tag Team Champions in 1993-1994. Pierre and Jacques Rougeau portrayed arrogant French-Canadian characters managed by Johnny Polo (Raven). Known for their finisher, the Quebec Crash (cannonball senton)." }],
    factions: []
  },
  1604: { // The Young Stallions
    injuries: [],
    tagTeams: [{ name: "The Young Stallions", partners: ["Jim Powers", "Paul Roma"], eras: ["golden"], notes: "Mid-card WWF tag team from 1987-1989 consisting of two young athletic wrestlers. They competed in the Survivor Series and various tag team feuds but never captured the WWF Tag Team Championship before their split." }],
    factions: []
  },
  1605: { // Greg Gagne
    injuries: [],
    tagTeams: [{ name: "The High Flyers", partners: ["Jim Brunzell"], eras: ["territory"], notes: "Two-time AWA Tag Team Champions with Jim Brunzell in the late 1970s and early 1980s. A popular babyface tag team in the AWA known for their aerial and athletic style." }],
    factions: []
  },
  1606: { // Butterbean
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1607: { // Wesley Blake
    injuries: [],
    tagTeams: [{ name: "Blake & Murphy", partners: ["Buddy Murphy"], eras: ["reality"], notes: "NXT Tag Team Champions in 2015, managed by Alexa Bliss. Wesley Blake and Buddy Murphy won the titles on NXT television before splitting when Bliss chose Murphy over Blake." }],
    factions: [{ name: "The Forgotten Sons", members: ["Wesley Blake", "Steve Cutler", "Jaxson Ryker"], eras: ["reality"], notes: "NXT stable that later debuted on SmackDown in 2020. The group was broken up after Jaxson Ryker's controversial social media posts led to the faction being taken off television." }]
  },
  1608: { // Scorpio Sky
    injuries: [],
    tagTeams: [],
    factions: [{ name: "SoCal Uncensored", members: ["Christopher Daniels", "Frankie Kazarian", "Scorpio Sky"], eras: ["modern"], notes: "AEW faction formed from the ROH stable. Won the inaugural AEW World Tag Team Championship at the first Full Gear pay-per-view in 2019 (Scorpio Sky and Frankie Kazarian). Christopher Daniels served as the group's elder statesman." }, { name: "American Top Team", members: ["Scorpio Sky", "Ethan Page", "Dan Lambert"], eras: ["modern"], notes: "AEW faction aligned with MMA gym American Top Team and manager Dan Lambert. Scorpio Sky won the TNT Championship as part of this alliance in 2022." }]
  },
  1609: { // Gene Kiniski
    injuries: [
      { year: "2010", injury: "Died — natural causes", cause: "Gene Kiniski died on April 14, 2010 at age 81. He was the NWA World Heavyweight Champion for 1,131 days from 1966 to 1969, one of the longest reigns in the title's history. Known as 'Canada's Greatest Athlete,' he was a former CFL football player turned wrestling champion." }
    ],
    tagTeams: [],
    factions: []
  },
  1610: { // Wally Karbo
    injuries: [
      { year: "1997", injury: "Died — natural causes", cause: "Wally Karbo died on February 15, 1997 at age 85. He was co-founder of the American Wrestling Association alongside Verne Gagne in 1960 and served as the AWA's matchmaker and on-air commissioner for decades." }
    ],
    tagTeams: [],
    factions: []
  },
  1611: { // Dory Funk Sr.
    injuries: [
      { year: "1973", injury: "Died — heart attack", cause: "Dory Funk Sr. died on June 3, 1973 at age 53 from a heart attack. He was a legendary Amarillo-based wrestler and promoter, 17-time NWA North American Heavyweight Champion, and father of Dory Funk Jr. and Terry Funk." }
    ],
    tagTeams: [],
    factions: []
  },
  1612: { // Miguel Perez
    injuries: [
      { year: "2009", injury: "Died — natural causes", cause: "Miguel Perez died on January 6, 2009 at age 71. He was a Puerto Rican wrestling legend best known for his iconic tag team with Antonino Rocca in the 1950s and 1960s, competing in major MSG main events." }
    ],
    tagTeams: [{ name: "Perez & Rocca", partners: ["Antonino Rocca"], eras: ["territory"], notes: "Legendary tag team of Miguel Perez and Antonino Rocca in the 1950s and 1960s. One of the top babyface tag teams in the WWWF predecessor era, drawing huge crowds to Madison Square Garden." }],
    factions: []
  },
  1613: { // The Destroyer
    injuries: [],
    tagTeams: [],
    factions: []
  },
  1614: { // Louis Cerdan
    injuries: [],
    tagTeams: [{ name: "Cerdan & Parisi", partners: ["Tony Parisi"], eras: ["territory"], notes: "Won the WWWF World Tag Team Championship in 1975. Louis Cerdan (Gino Brito) and Tony Parisi held the titles before Cerdan transitioned to promoting wrestling in Montreal." }],
    factions: []
  },
  1616: { // Mercedes Martinez
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Retribution", members: ["Mustafa Ali", "T-BAR", "Mace", "Slapjack", "Reckoning", "Mercedes Martinez"], eras: ["reality"], notes: "Mercedes Martinez briefly appeared alongside the Retribution faction on NXT in 2020. She also aligned with Robert Stone's Robert Stone Brand during her NXT tenure." }]
  },
  1618: { // Eddie Gilbert
    injuries: [
      { year: "1995", injury: "Died — heart attack", cause: "Eddie Gilbert died on February 18, 1995 at age 33 from a heart attack. 'Hot Stuff' Eddie Gilbert was a creative wrestler, booker, and promoter who served as ECW's first head booker before Paul Heyman. His work across Mid-South, Memphis, and NWA territories established him as one of wrestling's most innovative minds." }
    ],
    tagTeams: [],
    factions: []
  },
  1619: { // Ian Rotten
    injuries: [],
    tagTeams: [{ name: "Bad Breed", partners: ["Axl Rotten"], eras: ["attitude"], notes: "ECW tag team with Axl Rotten (no real-life relation). The team feuded and had a violent breakup feud including barbed wire matches. Ian later founded IWA Mid-South in Kentucky." }],
    factions: []
  },
  1620: { // Devastation Inc.
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Devastation Inc.", members: ["Skandor Akbar", "Kamala", "King Kong Bundy", "The Missing Link", "One Man Gang"], eras: ["territory"], notes: "Skandor Akbar-managed heel stable in World Class Championship Wrestling (WCCW) throughout the 1980s. A revolving-door faction that terrorized WCCW babyfaces and included future WWF stars like Kamala, King Kong Bundy, and a young Undertaker (as part of related Akbar-managed acts)." }]
  },
  1621: { // The Sharpe Brothers
    injuries: [],
    tagTeams: [{ name: "The Sharpe Brothers", partners: ["Ben Sharpe", "Mike Sharpe"], eras: ["territory"], notes: "Pioneering Canadian tag team who won the inaugural NWA World Tag Team Championship in 1951. Among the first major western wrestlers to work in Japan, helping establish professional wrestling's international presence." }],
    factions: []
  },
  1622: { // The Stud Stable
    injuries: [],
    tagTeams: [],
    factions: [{ name: "The Stud Stable", members: ["Arn Anderson", "Terry Funk", "Bunkhouse Buck", "Meng", "Colonel Robert Parker"], eras: ["ruthless"], notes: "WCW heel stable managed by Colonel Robert Parker from 1994-1997. Feuded heavily with Dusty and Dustin Rhodes. Members included Arn Anderson, Terry Funk, Bunkhouse Buck, and Meng at various points." }]
  },
  1623: { // Toots Mondt
    injuries: [
      { year: "1976", injury: "Died — natural causes", cause: "Toots Mondt died on June 11, 1976 at age 82. He was a revolutionary wrestling promoter who co-founded the Capitol Wrestling Corporation in 1952 and was instrumental in the 1963 creation of the WWWF alongside Vincent J. McMahon, laying the foundation for what became WWE." }
    ],
    tagTeams: [],
    factions: []
  },
  1624: { // Paul Vachon
    injuries: [
      { year: "2013", injury: "Died — natural causes", cause: "Paul 'The Butcher' Vachon died on November 27, 2013 at age 76. He was a Canadian wrestler and brother of Mad Dog Vachon. AWA World Tag Team Champion alongside his brother, he competed across Canadian and American territories throughout the 1960s-1980s." }
    ],
    tagTeams: [{ name: "The Vachon Brothers", partners: ["Mad Dog Vachon"], eras: ["territory"], notes: "AWA World Tag Team Champions. Paul 'The Butcher' Vachon and his brother Maurice 'Mad Dog' Vachon were a legendary Canadian tag team who competed across North American territories." }],
    factions: []
  },
  1625: {
    injuries: [],
    tagTeams: [{ name: "Riott Squad", partners: ["Liv Morgan", "Sarah Logan"], eras: ["modern"], notes: "Punk-rock heel trio that debuted in late 2017, terrorizing the women's division on Raw. Ruby was the leader and driving force of the group." }],
    factions: [{ name: "The Riott Squad", members: ["Liv Morgan", "Sarah Logan"], eras: ["modern"], notes: "Raw's punk-rock faction. Their dissolution led to each member pursuing solo careers — Liv became the breakout star." }],
  },
  1626: {
    injuries: [],
    tagTeams: [],
    factions: [{ name: "Straight Edge Society", members: ["CM Punk", "Luke Gallows", "Joey Mercury"], eras: ["pg"], notes: "Shaved her head as initiation into CM Punk's straight-edge cult stable. A powerful visual moment that defined the faction." }],
  },
  1627: { // Erick Redbeard
    injuries: [
      { year: "2015", injury: "Torn rotator cuff", cause: "Suffered while wrestling on Raw, required surgery and missed several months." },
      { year: "2019", injury: "Knee injury", cause: "Torn meniscus during a match, required arthroscopic surgery." },
    ],
    tagTeams: [{ name: "The Bludgeon Brothers", members: ["Luke Harper"], eras: ["modern"], notes: "Reunited with Harper as a dominant SmackDown tag team with a medieval wrecking-ball gimmick. Won the SmackDown Tag Team Championship at WrestleMania 34." }],
    factions: [{ name: "Wyatt Family", members: ["Bray Wyatt", "Luke Harper", "Braun Strowman"], eras: ["reality"], notes: "Original enforcer of the Wyatt Family. Wore a sheep mask and coveralls as part of Bray Wyatt's backwoods cult." }, { name: "The Wyatt Sicks", members: ["Bo Dallas", "Nikki Cross", "Dexter Lumis", "Joe Gacy"], eras: ["modern"], notes: "Returned in 2024 as Ramblin Rabbit in the Wyatt Sicks, a faction honoring the late Bray Wyatt." }],
  },
  1628: { // The Wyatt Sicks
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1: {
    injuries: ['Died August 18, 2018 at age 82 — natural causes'],
    tagTeams: [],
    factions: [],
  },
  209: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  231: {
    injuries: ["Bell's palsy — recurring condition that periodically paralyzed half his face"],
    tagTeams: [],
    factions: [],
  },
  255: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  271: {
    injuries: [],
    tagTeams: ['Breezango (with Fandango)'],
    factions: [],
  },
  275: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  278: {
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Undisputed Era' }],
  },
  292: {
    injuries: ['Knee injury — required surgery, missed significant time'],
    tagTeams: ['3MB (with Heath Slater & Drew McIntyre)'],
    factions: [],
  },
  372: {
    injuries: [],
    tagTeams: ['New Age Outlaws (with Billy Gunn)'],
    factions: [{ name: 'D-Generation X' }],
  },
  624: {
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Diamond Mine' }],
  },
  647: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  654: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  671: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  695: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  780: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  800: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  887: {
    injuries: ['Chronic kidney issues — hospitalized multiple times', 'Shoulder injury — required surgery, shortened career'],
    tagTeams: [],
    factions: [{ name: 'Nation of Domination' }],
  },
  962: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1018: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1141: {
    injuries: [],
    tagTeams: ['Dean Ho & Tony Garea'],
    factions: [],
  },
  1148: {
    injuries: [],
    tagTeams: ['Mr. Fuji & Mr. Saito'],
    factions: [],
  },
  1342: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1391: {
    injuries: [],
    tagTeams: [],
    factions: [{ name: 'Meta-Four' }],
  },
  1438: {
    injuries: [],
    tagTeams: [],
    factions: [],
  },

  // === Added March 2026: Missing current roster wrestlers ===
  1629: { // Jordynne Grace
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1630: { // Danhausen
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1631: { // Bronco Nima
    injuries: [],
    tagTeams: [
      { name: "Out The Mud", partners: ["Lucien Price"], eras: ["modern"], notes: "Childhood friends turned tag team in NXT." }
    ],
    factions: [],
  },
  1632: { // Dion Lennox
    injuries: [],
    tagTeams: [],
    factions: [
      { name: "DarkState", members: ["Robert Stone", "Cutler James", "Saquon Shugars", "Osiris Griffin", "Dion Lennox"], eras: ["modern"], notes: "NXT heel faction." }
    ],
  },
  1633: { // Elio LeFleur
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1634: { // Saquon Shugars
    injuries: [
      { date: "Apr 2024", description: "Knee injury — sidelined for almost a year", severity: "major" }
    ],
    tagTeams: [
      { name: "DarkState Tag Team", partners: ["Osiris Griffin"], eras: ["modern"], notes: "NXT Tag Team Champions as part of DarkState." }
    ],
    factions: [
      { name: "DarkState", members: ["Robert Stone", "Cutler James", "Saquon Shugars", "Osiris Griffin", "Dion Lennox"], eras: ["modern"], notes: "NXT heel faction." }
    ],
  },
  1635: { // Osiris Griffin
    injuries: [],
    tagTeams: [
      { name: "DarkState Tag Team", partners: ["Saquon Shugars"], eras: ["modern"], notes: "NXT Tag Team Champions as part of DarkState." }
    ],
    factions: [
      { name: "DarkState", members: ["Robert Stone", "Cutler James", "Saquon Shugars", "Osiris Griffin", "Dion Lennox"], eras: ["modern"], notes: "NXT heel faction." }
    ],
  },
  1636: { // Shiloh Hill
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1637: { // Kendal Grey
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1638: { // Niko Vance
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1639: { // Fahd Tuwaiq
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1640: { // Skylar Raye
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1641: { // Sirena Linton
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1642: { // Bayley Humphrey
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1643: { // JC Mateo
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1644: { // Keanu Carver
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1645: { // Kale Dixon
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1647: { // Jackson Drake
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1648: { // Jasper Troy
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1649: { // Lainey Reid
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1650: { // Royce Keys
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1651: { // Blake Monroe
    injuries: [],
    tagTeams: [],
    factions: [],
  },
  1653: { // Ulka Sasaki
    injuries: [],
    tagTeams: [],
    factions: [],
  },

  1654: { injuries: [], tagTeams: [], factions: [] },
  1658: { injuries: [], tagTeams: [], factions: [] },
  1659: { injuries: [], tagTeams: [], factions: [] },
  1661: { injuries: [], tagTeams: [], factions: [] },
  1662: { injuries: [], tagTeams: [], factions: [] },
  1663: { injuries: [], tagTeams: [], factions: [] },

  1664: { injuries: [], tagTeams: [], factions: [] },
  1665: { injuries: [], tagTeams: [], factions: [] },
  1666: { injuries: [], tagTeams: [], factions: [] },
  1667: { injuries: [], tagTeams: [], factions: [{ name: "The Mexicools", partners: ["Super Crazy", "Psicosis", "Juventud Guerrera"], eras: ["ruthless"], notes: "Lucha libre trio who rode lawnmowers to the ring on SmackDown. Brief but memorable 2005-2006 run." }] },

};

export default EXTRA;
