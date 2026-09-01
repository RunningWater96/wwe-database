const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'wrestlers.js'), 'utf8');
const relSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'relationships.js'), 'utf8');
const allText = (src + '\n' + relSrc).toLowerCase();

function check(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').toLowerCase();
  return new RegExp(escaped).test(allText);
}

function checkAny(...names) {
  return names.some(n => check(n));
}

// ============================================================
// 1. WWE HALL OF FAME INDUCTEES
// ============================================================
const hofInductees = [
  'Abdullah the Butcher', 'AJ Styles', 'Alundra Blayze', 'Andre the Giant',
  'Antonino Rocca', 'Antonio Inoki', 'Arnold Skaaland', 'Beth Phoenix',
  'Big Boss Man', 'Ernie Ladd', 'Big John Studd', 'Bob Backlund',
  'Bobby Heenan', 'Bobo Brazil', 'Booker T', 'Bret Hart',
  'British Bulldog', 'Bruno Sammartino', 'Brutus Beefcake', 'Bull Nakano',
  'Bob Armstrong', 'Captain Lou Albano', 'Carlos Colon', 'Chief Jay Strongbow',
  'Bill Watts', 'Bob Orton', 'Diamond Dallas Page', 'Dusty Rhodes',
  'Eddie Graham', 'Eddie Guerrero', 'Edge', 'Eric Bischoff',
  'Faarooq', 'Fabulous Moolah', 'Freddie Blassie', 'George Steele',
  'Godfather', 'Goldberg', 'Gorgeous George', 'Gorilla Monsoon',
  'Grand Wizard', 'Great Khali', 'Great Muta', 'Greg Valentine',
  'Jim Duggan', 'Harley Race', 'Peter Maivia', 'Hillbilly Jim',
  'Honky Tonk Man', 'Howard Finkel', 'Hulk Hogan', 'Iron Sheik',
  'Ivan Putski', 'Ivory', 'Jacqueline', 'Jake Roberts',
  'James Dudley', 'Jeff Jarrett', 'Jerry Lawler', 'Jesse Ventura',
  'Jim Ross', 'Jimmy Hart', 'Jimmy Snuka', 'John Layfield',
  'Johnny Rodz', 'Junkyard Dog', 'Jushin Liger', 'Kane',
  'Kevin Nash', 'Killer Kowalski', 'Koko B. Ware', 'Kurt Angle',
  'Larry Zbyszko', 'Lex Luger', 'Lia Maivia', 'Lita',
  'Randy Savage', 'Mad Dog Vachon', 'Mae Young', 'Don Muraco',
  'Mark Henry', 'Michelle McCool', 'Mick Foley', 'Mil Mascaras',
  'Ted DiBiase', 'Molly Holly', 'Mr. Fuji', 'Mr. Perfect',
  'Paul Orndorff', 'Buddy Rogers', 'Nick Bockwinkel', 'Nikolai Volkoff',
  'Pat Patterson', 'Paul Bearer', 'Paul Heyman', 'Pedro Morales',
  'Rick Rude', 'Rey Mysterio', 'Ric Flair', 'Ricky Steamboat',
  'Rikishi', 'Rob Van Dam', 'Rocky Johnson', 'Roddy Piper',
  'Scott Hall', 'Sensational Sherri', 'Sgt. Slaughter', 'Shawn Michaels',
  'The Sheik', 'Stan Hansen', 'Sting', 'Steve Austin',
  'Stu Hart', 'Sunny', 'Superstar Billy Graham', 'Tatsumi Fujinami',
  'Tito Santana', 'Tony Atlas', 'Torrie Wilson',
  'Triple H', 'Trish Stratus', 'Ultimate Warrior', 'Undertaker',
  'Vader', 'Verne Gagne', 'Wendi Richter', 'Yokozuna',
];

console.log('=== WWE HALL OF FAME — Missing from database ===');
const hofMissing = [];
for (const name of hofInductees) {
  if (!checkAny(name)) {
    // Try partial matches
    const parts = name.split(' ');
    const lastName = parts[parts.length - 1];
    if (lastName.length >= 4 && check(lastName)) continue;
    if (parts[0].length >= 4 && check(parts[0])) continue;
    hofMissing.push(name);
  }
}
hofMissing.forEach(n => console.log('  ' + n));
console.log('Missing: ' + hofMissing.length + ' of ' + hofInductees.length);

// ============================================================
// 2. WWE EVOLVE ROSTER
// ============================================================
const evolveRoster = [
  // Men
  'Aaron Rourke', 'Brad Baylor', 'Braxton Cole', 'Brooks Jensen',
  'Cappuccino Jones', 'Cyrus', 'Dante Chen', 'Drake Morreaux',
  'Eli Knight', 'Harlem Lewis', 'Harley Riggins', 'GAL',
  'Jackson Drake', 'Jax Presley', 'Kam Hendrix', 'Malik Blade',
  'Marcus Mathers', 'Mike Cunningham', 'Ricky Smokes', 'Sam Holloway',
  'Tate Wilder', 'Timothy Thatcher', 'Trill London',
  // Women
  'Aria Bennett', 'Arianna Grace', 'Carlee Bright', 'Chantel Monroe',
  'Kali Armstrong', 'Karmen Petrovic', 'Kendal Grey', 'Layla Diggs',
  'Laynie Luck', 'Masyn Holiday', 'Nikkita Lyons', 'PJ Vasa',
  'Tyra Mae Steele', 'Wendy Choo', 'Zena Sterling',
];

console.log('\n=== WWE EVOLVE ROSTER — Missing from database ===');
const evolveMissing = [];
for (const name of evolveRoster) {
  if (!checkAny(name)) {
    const parts = name.split(' ');
    const lastName = parts[parts.length - 1];
    if (lastName.length >= 4 && check(lastName)) continue;
    if (parts[0].length >= 5 && check(parts[0])) continue;
    evolveMissing.push(name);
  }
}
evolveMissing.forEach(n => console.log('  ' + n));
console.log('Missing: ' + evolveMissing.length + ' of ' + evolveRoster.length);

// ============================================================
// 3. NOTABLE RELEASED WRESTLERS (2024-2025)
// ============================================================
const released = [
  // 2025 releases
  'Duke Hudson', 'Cedric Alexander', 'Paul Ellering', 'Akam', 'Rezar',
  'Blair Davenport', 'Sonya Deville', 'Isla Dawn', 'Luke Gallows',
  'Karl Anderson', 'Giovanni Vinci', 'Braun Strowman', 'Dakota Kai',
  'Kayden Carter', 'Katana Chance', 'Shayna Baszler', 'Cora Jade',
  'Riley Osborne', 'Eddy Thorpe', 'Gigi Dolin', 'Jakara Jackson',
  'Joe Coffey', 'Mark Coffey', 'Wolfgang', 'Oro Mensah',
  'Shotzi', 'Andrade', 'Wes Lee',
  // 2024 releases
  'Dolph Ziggler', 'Lacey Evans', 'Matt Riddle', 'Mustafa Ali',
  'Elias', 'Bobby Lashley', 'MVP', 'Baron Corbin',
  'Indi Hartwell', 'Tegan Nox', 'Xia Li',
  // Notable pre-2024
  'Bray Wyatt', 'Karrion Kross', 'Scarlett', 'Keith Lee',
  'Malakai Black', 'Aleister Black', 'Ember Moon',
  'Samoa Joe', 'Daniel Bryan', 'Dean Ambrose',
  'Luke Harper', 'Erick Rowan', 'Bo Dallas',
  'Neville', 'PAC',
  // Legends who should be in any complete DB
  'Chris Benoit', 'Owen Hart', 'Brian Pillman',
  'Crash Holly', 'Test', 'Umaga', 'Viscera',
  'Lance Storm', 'Raven', 'Tazz', 'Tommy Dreamer',
  'Spike Dudley', 'Scotty 2 Hotty', 'Grandmaster Sexay',
  'Steve Blackman', 'Al Snow', 'Val Venis',
  'D-Lo Brown', 'Mark Henry', 'Farooq',
  'Ken Shamrock', 'Sable', 'Sunny',
  'Diesel', 'Razor Ramon', '1-2-3 Kid', 'X-Pac',
  'Psycho Sid', 'Sycho Sid',
  'Papa Shango', 'Kama Mustafa', 'The Godwinns',
  'Tatanka', 'Doink', 'Berzerker',
  'Skinner', 'Repo Man', 'Nailz',
  'Earthquake', 'Typhoon', 'Tugboat',
  'Hercules', 'Warlord', 'Barbarian',
  'Jim Neidhart', 'British Bulldog',
  'Yokozuna', 'Lex Luger', 'Crush',
];

console.log('\n=== RELEASED / HISTORICAL — Missing from database ===');
const releasedMissing = [];
for (const name of released) {
  if (!checkAny(name)) {
    const parts = name.split(' ');
    const lastName = parts[parts.length - 1];
    if (lastName.length >= 4 && check(lastName)) continue;
    if (parts[0].length >= 5 && check(parts[0])) continue;
    releasedMissing.push(name);
  }
}
releasedMissing.forEach(n => console.log('  ' + n));
console.log('Missing: ' + releasedMissing.length + ' of ' + released.length);

// ============================================================
// 4. HOF GROUP INDUCTEES
// ============================================================
const hofGroups = [
  'Von Erichs', 'Four Horsemen', 'Fabulous Freebirds',
  'Road Warriors', 'Demolition', 'Hart Foundation',
  'Dudley Boyz', 'nWo', 'DX', 'D-Generation X',
  'New World Order', 'Legion of Doom',
  'Bushwhackers', 'Nasty Boys', 'British Bulldogs',
  'Midnight Express', 'Rock n Roll Express', 'Steiner Brothers',
];

console.log('\n=== HOF GROUP INDUCTEES — Missing from database ===');
const groupMissing = [];
for (const name of hofGroups) {
  if (!checkAny(name)) {
    groupMissing.push(name);
  }
}
groupMissing.forEach(n => console.log('  ' + n));
console.log('Missing: ' + groupMissing.length + ' of ' + hofGroups.length);
