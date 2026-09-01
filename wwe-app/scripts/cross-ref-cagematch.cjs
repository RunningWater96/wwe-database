const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'wrestlers.js'), 'utf8');
const relSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'relationships.js'), 'utf8');
const allText = (src + '\n' + relSrc).toLowerCase();

function check(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').toLowerCase();
  return new RegExp(escaped).test(allText);
}

// Full Cagematch WWE roster (wrestlers/performers only, excluding refs, commentators, producers, ring announcers)
const cagematchRoster = [
  'Aaron Fara', 'Adam Pearce', 'Adrian Butler', 'Adriana Rizzo', 'AJ Lee', 'AJ Styles',
  'AJ Winkler', 'Akira Tozawa', 'Alba Fyre', 'Aleister Black', 'Alex Shelley', 'Alexa Bliss',
  'Andre Chase', 'Angel', 'Angelo Dawkins', 'Apollo Crews',
  'Aria Bennett', 'Arianna Grace', 'Asuka', 'Austin Theory',
  'Ax', 'Axiom', 'B-Fab', 'Bayley', 'Bayley Humphrey', 'Becky Lynch',
  'Berto', 'Bianca Belair', 'Big E', 'Billy Kidman',
  'Blake Monroe', 'Bob Backlund', 'Boogeyman', 'Booker T',
  'Brad Baylor', 'Bravo Americano', 'Braxton Cole', 'Brie Bella', 'Brock Lesnar',
  'Bron Breakker', 'Bronco Nima', 'Bronson Reed', 'Brooks Jensen',
  'Brutus Creed', 'Bully Ray', 'Candice LeRae', 'Carlee Bright',
  'Carmelo Hayes', 'Channing Lorenzo', 'Chantel Monroe',
  'Charlie Dempsey', 'Charlotte Flair', 'Chavo Guerrero Jr.', 'Chelsea Green',
  'Chip Danning', 'Chris Island', 'Chris Sabin', 'CM Punk', 'Cody Rhodes',
  'Corey Graves', 'Cory Weston', 'Cruz Del Toro', 'Cutler James',
  'Dallas Irvin', 'Damian Priest', 'Dan Engler', 'Danhausen', 'Danilo Anfibio',
  'Dante Chen', 'Daphanie LaShaunn', 'Devon', 'Dexter Lumis',
  'Diamond Dallas Page', 'Dion Lennox', 'Dominik Mysterio', 'Dorian Van Dux',
  'Dragon Lee', 'Drake Maverick', 'Drake Morreaux', 'Drew McIntyre',
  'El Grande Americano', 'Eli Knight', 'Elijah Holyfield', 'Elio LeFleur',
  'Elton Prince', 'Eric Watts', 'Erick Rowan', 'Erik', 'Ethan Page',
  'Fallon Henley', 'Felix Fernandez', 'Finn Balor', 'Fit Finlay', 'Funaki',
  'Giulia', 'Godfather', 'Grayson Waller', 'Gunther',
  'Hank Walker', 'Harlem Lewis', 'Harley Riggins',
  'Honky Tonk Man', 'Hornswoggle', 'Ilja Dragunov', 'Ivar', 'Ivy Nile',
  'IYO SKY', 'Izzi Dame', 'Jackson Drake', 'Jacob Fatu',
  'Jacqueline', 'Jacy Jayne', 'Jade Cargill', 'Jaida Parker',
  'Jamie Noble', 'Jason Jordan', 'Jasper Troy', 'Jax Presley',
  'Jazz', 'JC Mateo', 'JD McDonagh', "Je'Von Evans",
  'Jey Uso', 'Jim Duggan', 'Jimmy Uso', 'Joaquin Wilde',
  'Joe Gacy', 'Joe Hendry', 'John Bradshaw Layfield',
  'John Cena', 'Johnny Gargano', 'Johnny Moss',
  'Jordynne Grace', 'Josh Briggs', 'Julius Creed',
  'Kairi Sane', 'Kale Dixon', 'Kali Armstrong', 'Kam Hendrix', 'Kane',
  'Karmen Petrovic', 'Keanu Carver', 'Kelani Jordan', 'Kelly Kelly',
  'Ken Shamrock', 'Kendal Grey', 'Kenn Doane', 'Kevin Nash', 'Kevin Owens',
  'Kiana James', 'Kit Wilson', 'Kofi Kingston', 'Koko B. Ware',
  'LA Knight', 'Lainey Reid', 'Lana', 'Lash Legend', 'Layla Diggs',
  'Lexis King', 'Lince Dorado', 'Liv Morgan', 'Logan Paul',
  'Lola Vice', 'Luca Crusifino', 'Lucien Price', 'Lyra Valkyria',
  'Malik Blade', 'Mark Henry', 'Masyn Holiday',
  'Matt Bloom', 'Matt Cardona', 'Maxxine Dupri',
  'Michin', 'Mick Foley', 'Molly Holly', 'Montez Ford', 'Mosh',
  'Myles Borne', 'Naomi', 'Nathan Frazer', 'Nattie', 'Nia Jax',
  'Nick Aldis', 'Nikki Bella', 'Nikki Cross', 'Nikkita Lyons',
  'Niko Vance', 'Noam Dar', 'Norman Smiley', 'Oba Femi', 'Omos',
  'Oney Lorcan', 'Osiris Griffin', 'Otis', 'Paredyse',
  'Pat McAfee', 'Paul Heyman', 'Penta', 'Petey Williams',
  'Piper Niven', 'PJ Vasa', 'R-Truth', 'Randy Orton',
  'Raquel Rodriguez', 'Rayne Leverkusen', 'Rayo Americano',
  'Rey Fenix', 'Rey Mysterio', 'Rhea Ripley', 'Ricky Saints', 'Ricky Smokes',
  'Rob Van Dam', 'Robbie Brookside', 'Robert Roode', 'Robert Stone',
  'Roman Reigns', 'Romeo Moreno', 'Roxanne Perez', 'Royce Keys',
  'Rusev', 'Sami Zayn', 'Santos Escobar', 'Saquon Shugars',
  'Sean Legacy', 'Seth Rollins', 'Shady Elnahas',
  'Shane Helms', 'Shawn Daivari', 'Shawn Michaels', 'Shawn Spears',
  'Sheamus', 'Shiloh Hill', 'Shinsuke Nakamura', 'Sirena Linton',
  'Skylar Raye', 'Smash', 'Sol Ruca', 'Solo Sikoa',
  'Stephanie Vaquer', 'Steve Corino', 'Talla Tonga', 'Tama Tonga',
  'Tank Ledger', 'Tatanka', 'Tate Wilder', 'Tatum Paxley',
  'Tatyanna Dumas', 'Tavion Heights', 'Ted DiBiase', 'Terry Taylor',
  'The Miz', 'The Rock', 'Thea Hail', 'Thrasher',
  'Tiffany Stratton', 'Timothy Thatcher', 'Tito Santana', 'Titus O\'Neil',
  'Tonga Loa', 'Tony D\'Angelo', 'Trick Williams', 'Trill London',
  'Triple H', 'Trish Stratus', 'Tristan Angels', 'Tyler Breeze',
  'Typhoon', 'Tyra Mae Steele', 'Tyriek Igwe', 'Tyson Dupont',
  'Uncle Howdy', 'Undertaker', 'Uriah Connors',
  'Victoria', 'Wade Barrett', 'Wendy Choo', 'William Regal',
  'Wren Sinclair', 'Xavier Woods', 'Zaria', 'Zelina',
  'Zena Sterling', 'Zoey Stark',
];

// Filter out non-wrestlers already handled: Rayo Americano = Pete Dunne, Matt Cardona = Zack Ryder
const skip = ['Rayo Americano', 'Matt Cardona', 'El Grande Americano', 'Bravo Americano'];

console.log('=== Cagematch Full WWE Roster Cross-Reference ===');
const missing = [];
for (const name of cagematchRoster) {
  if (skip.includes(name)) continue;
  if (check(name)) continue;
  // Try partial matches
  const parts = name.split(' ');
  const lastName = parts[parts.length - 1];
  const firstName = parts[0];
  if (lastName.length >= 4 && check(lastName)) continue;
  if (firstName.length >= 5 && check(firstName)) continue;
  // Try without special chars
  const simplified = name.replace(/['-]/g, '');
  if (simplified !== name && check(simplified)) continue;
  missing.push(name);
}

console.log('Missing from database:');
missing.forEach(n => console.log('  ' + n));
console.log('\nTotal missing: ' + missing.length + ' of ' + cagematchRoster.length);
