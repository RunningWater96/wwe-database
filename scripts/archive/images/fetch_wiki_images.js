const https = require("https");
const fs = require("fs");

// Read existing image IDs from the JSX
const jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

const existingIds = new Set();
const imgSection = jsx.match(/const WRESTLER_IMAGES = \{[\s\S]*?\n\};/);
if (imgSection) {
  const re = /^\s*(\d+):\s*"/gm;
  let m;
  while ((m = re.exec(imgSection[0])) !== null) existingIds.add(parseInt(m[1]));
}

// Extract all wrestlers
const wrestlers = [];
const nameRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let match;
while ((match = nameRegex.exec(jsx)) !== null) {
  wrestlers.push({ id: parseInt(match[1]), name: match[2] });
}

// Filter to missing solo wrestlers only
const missing = wrestlers.filter(w => {
  if (existingIds.has(w.id)) return false;
  if (w.name.includes(" & ")) return false;
  return true;
});

console.log(`Found ${missing.length} wrestlers still missing images\n`);

// Wikipedia search name overrides
const WIKI_NAMES = {
  8: "Mr. Perfect",
  24: "Diesel (wrestler)",
  25: "Owen Hart",
  40: "Scotty 2 Hotty",
  41: "Grandmaster Sexay",
  46: "Chris Benoit",
  52: "D'Lo Brown",
  64: "Al Snow",
  66: "Test (wrestler)",
  69: "Gangrel (wrestler)",
  84: "Charlie Haas",
  113: "Funaki (wrestler)",
  114: "Viscera (wrestler)",
  122: "The Godwinns",
  123: "The Headbangers",
  125: "The Hurricane (wrestler)",
  129: "The Usos",
  134: "Natalya (wrestler)",
  136: "Bobby Roode",
  144: "George Steele",
  149: "The Road Warriors",
  151: "Natural Disasters (professional wrestling)",
  155: "Jimmy Snuka",
  158: "The Smoking Gunns",
  163: "Right to Censor",
  170: "Gene Snitsky",
  172: "Paul London (wrestler)",
  179: "Super Crazy",
  180: "Nunzio (wrestler)",
  181: "Chuck Palumbo",
  182: "A-Train (wrestler)",
  183: "Heidenreich (wrestler)",
  184: "Orlando Jordan",
  186: "Kenzo Suzuki",
  187: "Chavo Guerrero Jr.",
  189: "René Duprée",
  195: "David Hart Smith",
  203: "Bo Dallas",
  205: "Brodie Lee",
  206: "Erick Rowan",
  214: "Tommaso Ciampa",
  236: "Mean Gene Okerlund",
  245: "New Jack",
  246: "Balls Mahoney",
  247: "Spike Dudley",
  254: "Gregory Helms",
  256: "Fit Finlay",
  258: "Velveteen Dream",
  272: "The Viking Raiders",
  273: "Authors of Pain",
  275: "The Revival (professional wrestling)",
  281: "Too Cool (professional wrestling)",
  297: "The Judgment Day",
  312: "Tyson Tomko",
  313: "Mark Jindrak",
  314: "Kevin Thorn",
  315: "Muhammad Hassan (wrestler)",
  328: "Hiromu Takahashi",
  334: "Madcap Moss",
  337: "Tiger Ali Singh",
  343: "The Ascension (professional wrestling)",
  357: "Blackjack Mulligan",
  359: "The Valiant Brothers",
  372: "Road Dogg",
  379: "Ted DiBiase Jr.",
  384: "Layla El",
  385: "Gail Kim",
  402: "Humberto Carrillo",
  437: "The Barbarian (wrestler)",
  441: "Debra Marshall",
  442: "The Kat (wrestler)",
  447: "Nidia (wrestler)",
  465: "Zelina Vega",
  468: "Taka Michinoku",
  469: "Essa Rios",
  471: "Paul Burchill",
  473: "Eugene (wrestler)",
  483: "Keith Lee (wrestler)",
  509: "Curtis Axel",
  551: "Vader (wrestler)",
  552: "Arn Anderson",
  553: "Tully Blanchard",
  554: "Barry Windham",
  555: "Mike Rotunda",
  557: "Dino Bravo",
  564: "Marc Mero",
  572: "Elijah Burke",
  575: "Ken Kennedy (wrestler)",
  579: "Carlito (wrestler)",
  608: "Marcel Barthel",
  609: "Fabian Aichner",
  623: "Odyssey Jones",
  643: "Lance Cade",
  644: "Trevor Murdoch",
  675: "Mia Yim",
  706: "Hacksaw Jim Duggan",
  710: "Typhoon (wrestler)",
  712: "Doink the Clown",
  716: "D'Lo Brown",
  718: "Test (wrestler)",
  732: "Sharmell Sullivan-Huffman",
  736: "Jacqueline Moore",
  747: "Chavo Guerrero Jr.",
  748: "Spike Dudley",
  749: "Nunzio (wrestler)",
  751: "Gregory Helms",
  752: "Kenzo Suzuki",
  753: "Simon Dean",
  754: "Gene Snitsky",
  757: "David Hart Smith",
  760: "Jillian Hall",
  761: "Layla El",
  795: "Tully Blanchard",
  796: "Ted DiBiase Jr.",
  797: "Mr. Perfect",
  801: "The Killer Bees (professional wrestling)",
  802: "The Fabulous Rougeau Brothers",
  804: "The Bolsheviks (professional wrestling)",
  806: "Repo Man (wrestler)",
  808: "2 Cold Scorpio",
  813: "The Radicalz",
  825: "Funaki (wrestler)",
  834: "Harvey Wippleman",
  840: "Mean Gene Okerlund",
  859: "Dan Severn",
  860: "Motor City Machine Guns",
  886: "The Orient Express (professional wrestling)",
  887: "Ahmed Johnson",
  891: "Kane (wrestler)",
  892: "Mantaur",
  893: "Waylon Mercy",
  894: "Duke Droese",
  895: "Rhonda Sing",
  896: "Albert (wrestler)",
  897: "Maven (wrestler)",
  898: "Droz (wrestler)",
  904: "Luther Reigns",
  910: "Gallus (professional wrestling)",
  912: "Channing Lorenzo",
  927: "Miss Elizabeth",
  928: "Sapphire (wrestler)",
  929: "Nailz (wrestler)",
  931: "Bastion Booger",
  932: "Giant Gonzalez",
  933: "Max Moon",
  940: "Aldo Montoya",
  941: "Justin Credible",
  942: "Jerry Lynn",
  943: "Nicole Bass",
  946: "Candice Michelle",
  948: "Ashley Massaro",
  952: "Prime Time Players",
  953: "Cryme Tyme",
  954: "Spirit Squad",
  960: "The Vaudevillains",
  965: "Mia Yim",
  968: "Hit Row",
  972: "Sid Justice",
  975: "Teddy Long",
  977: "Linda McMahon",
  978: "Brian Christopher",
  979: "Buff Bagwell",
  980: "Kanyon",
  982: "Hugh Morrus",
  983: "Masato Tanaka",
  988: "Scarlett Bordeaux",
  990: "Swerve Strickland",
  997: "Debra Marshall",
  1007: "Barry Horowitz",
};

function fetchJSON(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: { "User-Agent": "WWEDatabaseApp/1.0" },
      timeout: 10000,
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); } catch { resolve(null); }
      });
    }).on("error", () => resolve(null)).on("timeout", function() { this.destroy(); resolve(null); });
  });
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function getWikiImage(title) {
  // Use Wikipedia API to get the main image (pageimage)
  const encoded = encodeURIComponent(title);
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
  const data = await fetchJSON(url);
  if (data && data.thumbnail && data.thumbnail.source) {
    // Get higher resolution version
    let imgUrl = data.thumbnail.source;
    // Increase size from default thumb to larger
    imgUrl = imgUrl.replace(/\/(\d+)px-/, "/400px-");
    return imgUrl;
  }
  return null;
}

async function main() {
  const results = {};
  let found = 0;
  let notFound = 0;

  for (let i = 0; i < missing.length; i++) {
    const w = missing[i];
    const wikiName = WIKI_NAMES[w.id] || w.name;
    const imageUrl = await getWikiImage(wikiName);

    if (imageUrl) {
      results[w.id] = imageUrl;
      found++;
      console.log(`[${i+1}/${missing.length}] ✓ ${w.name} → found`);
    } else {
      // Try with "(wrestler)" suffix
      const altUrl = await getWikiImage(w.name + " (wrestler)");
      if (altUrl) {
        results[w.id] = altUrl;
        found++;
        console.log(`[${i+1}/${missing.length}] ✓ ${w.name} → found (alt)`);
      } else {
        // Try with "(professional wrestling)" suffix
        const altUrl2 = await getWikiImage(w.name + " (professional wrestling)");
        if (altUrl2) {
          results[w.id] = altUrl2;
          found++;
          console.log(`[${i+1}/${missing.length}] ✓ ${w.name} → found (alt2)`);
        } else {
          notFound++;
          console.log(`[${i+1}/${missing.length}] ✗ ${w.name}`);
        }
      }
      await sleep(100);
    }

    await sleep(150);

    if ((i + 1) % 50 === 0) {
      fs.writeFileSync("wrestler_images_wiki_progress.json", JSON.stringify(results, null, 2));
      console.log(`\n--- Progress: ${found} found, ${notFound} not found ---\n`);
    }
  }

  fs.writeFileSync("wrestler_images_wiki.json", JSON.stringify(results, null, 2));
  console.log(`\nDone! Found ${found} images from Wikipedia, ${notFound} not found.`);
}

main().catch(console.error);
