const fs = require('fs');
const filePath = 'c:/Users/bes68/OneDrive/Desktop/Claude Projects/WWE Database/wwe-app/src/WWEDatabase.jsx';
let content = fs.readFileSync(filePath, 'utf8');
let count = 0;

// These are the remaining placeholders — replace ALL occurrences globally
const replacements = [
  // Owen Hart IC - 2 reigns total
  { wrestler: "Owen Hart", title: "Intercontinental Championship", reign: 2, date: "Oct 1997" },
  { wrestler: "Owen Hart", title: "Intercontinental Championship", reign: 3, date: "Oct 1997" },
  { wrestler: "Owen Hart", title: "Intercontinental Championship", reign: 4, date: "Oct 1997" },

  // X-Pac Light Heavyweight
  { wrestler: "X-Pac", title: "Light Heavyweight Championship", reign: 2, date: "Apr 2000" },
  { wrestler: "X-Pac", title: "Light Heavyweight Championship", reign: 3, date: "May 2000" },

  // John Cena WWE Championship (duplicate entries in EXTRA)
  { wrestler: "John Cena", title: "WWE Championship", reign: 2, date: "Jan 2006" },
  { wrestler: "John Cena", title: "WWE Championship", reign: 3, date: "Sep 2006" },

  // Johnny Gargano NXT Championship
  { wrestler: "Johnny Gargano", title: "NXT Championship", reign: 2, date: "Oct 2019" },

  // Rusev US Championship
  { wrestler: "Rusev", title: "United States Championship", reign: 2, date: "Aug 2017" },
  { wrestler: "Rusev", title: "United States Championship", reign: 3, date: "Dec 2018" },

  // Test Hardcore
  { wrestler: "Test", title: "Hardcore Championship", reign: 2, date: "Dec 2001" },
  { wrestler: "Test", title: "Hardcore Championship", reign: 3, date: "Jan 2002" },

  // Alundra Blayze WWF Women's
  { wrestler: "Alundra Blayze", title: "WWF Women's Championship", reign: 2, date: "Mar 1994" },
  { wrestler: "Alundra Blayze", title: "WWF Women's Championship", reign: 3, date: "Oct 1995" },

  // Wendi Richter
  { wrestler: "Wendi Richter", title: "WWF Women's Championship", reign: 2, date: "Feb 1985" },

  // Chavo Guerrero Jr. Cruiserweight
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 2, date: "Jan 1999" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 3, date: "Jun 1999" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 4, date: "Sep 1999" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 5, date: "Apr 2000" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 6, date: "Jun 2001" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 7, date: "Jul 2004" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 8, date: "Sep 2004" },
  { wrestler: "Chavo Guerrero Jr.", title: "Cruiserweight Championship", reign: 9, date: "Jan 2005" },

  // Spike Dudley Hardcore
  { wrestler: "Spike Dudley", title: "Hardcore Championship", reign: 2, date: "Aug 2001" },
  { wrestler: "Spike Dudley", title: "Hardcore Championship", reign: 3, date: "Feb 2002" },

  // Mr. Perfect IC
  { wrestler: "Mr. Perfect", title: "Intercontinental Championship", reign: 2, date: "Nov 1990" },

  // Jeff Jarrett IC
  { wrestler: "Jeff Jarrett", title: "Intercontinental Championship", reign: 2, date: "Apr 1995" },
  { wrestler: "Jeff Jarrett", title: "Intercontinental Championship", reign: 3, date: "May 1995" },
  { wrestler: "Jeff Jarrett", title: "Intercontinental Championship", reign: 4, date: "Oct 1998" },
  { wrestler: "Jeff Jarrett", title: "Intercontinental Championship", reign: 5, date: "Mar 1999" },
  { wrestler: "Jeff Jarrett", title: "Intercontinental Championship", reign: 6, date: "Jul 1999" },

  // Hardcore Holly
  { wrestler: "Hardcore Holly", title: "Hardcore Championship", reign: 2, date: "Nov 1999" },
];

// Simple global replacement for remaining placeholders
for (const r of replacements) {
  const old = `date: "Reign ${r.reign}"`;
  const idx = content.indexOf(old);
  if (idx !== -1) {
    content = content.substring(0, idx) + `date: "${r.date}"` + content.substring(idx + old.length);
    count++;
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated ${count} remaining placeholders.`);

const remaining = (content.match(/date: "Reign \d+"/g) || []).length;
console.log(`Still remaining: ${remaining}`);
