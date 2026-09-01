const https = require("https");
const fs = require("fs");

// Manual slug overrides for wrestlers with tricky names
const SLUG_OVERRIDES = {
  6: ["andre-the-giant", "andrethegiant"],
  8: ["mr-perfect", "mrperfect", "curt-hennig"],
  24: ["diesel", "kevin-nash"],
  25: ["owen-hart", "owenhart"],
  40: ["scotty-2-hotty", "scotty2hotty"],
  41: ["grandmaster-sexay", "brian-christopher"],
  43: ["mankind", "mick-foley", "dude-love", "cactus-jack"],
  46: ["chris-benoit", "chrisbenoit"],
  52: ["dlo-brown", "d-lo-brown"],
  64: ["al-snow", "alsnow"],
  66: ["test", "andrew-martin"],
  69: ["gangrel"],
  84: ["charlie-haas", "charliehaas"],
  99: ["finn-balor", "finnbalor"],
  113: ["funaki", "sho-funaki"],
  114: ["viscera", "mabel", "big-daddy-v"],
  116: ["doink-the-clown", "doink"],
  118: ["faarooq", "ron-simmons"],
  125: ["hurricane", "the-hurricane", "hurricane-helms", "shane-helms"],
  129: ["the-usos", "usos"],
  134: ["natalya"],
  136: ["bobby-roode", "robertroode"],
  138: ["theory", "austin-theory"],
  144: ["george-the-animal-steele", "george-steele"],
  155: ["jimmy-snuka", "superfly-jimmy-snuka"],
  170: ["snitsky", "gene-snitsky"],
  172: ["paul-london", "paullondon"],
  173: ["brian-kendrick", "the-brian-kendrick"],
  179: ["super-crazy", "supercrazy"],
  182: ["a-train", "albert", "tensai", "lord-tensai"],
  187: ["chavo-guerrero", "chavo-guerrero-jr"],
  190: ["zack-ryder", "matt-cardona"],
  203: ["bo-dallas", "bodallas"],
  205: ["luke-harper", "brodie-lee"],
  206: ["erick-rowan", "erickrowan"],
  207: ["stardust", "cody-rhodes"],
  214: ["tommaso-ciampa", "tommasociampa"],
  236: ["mean-gene-okerlund", "gene-okerlund"],
  254: ["gregory-helms", "hurricane-helms", "hurricane"],
  258: ["velveteen-dream", "velveteendream"],
  334: ["madcap-moss", "madcapmoss"],
  345: ["ali", "mustafa-ali"],
  357: ["blackjack-mulligan", "blackjackmulligan"],
  379: ["ted-dibiase-jr", "ted-dibiase"],
  381: ["melina", "melina-perez"],
  382: ["maria-kanellis", "maria"],
  384: ["layla", "layla-el"],
  385: ["gail-kim", "gailkim"],
  401: ["angel-garza", "angelgarza", "angel"],
  402: ["humberto-carrillo", "humberto"],
  441: ["debra", "debra-mcmichael"],
  442: ["the-kat", "thekat"],
  465: ["zelina-vega", "zelinavega"],
  468: ["taka-michinoku", "takamichinoku"],
  482: ["andrade", "andrade-el-idolo"],
  483: ["keith-lee", "keithlee"],
  507: ["diamond-dallas-page", "ddp", "dallas-page"],
  509: ["curtis-axel", "curtisaxel"],
  551: ["vader", "big-van-vader"],
  552: ["arn-anderson", "arnanderson"],
  553: ["tully-blanchard", "tullyblanchard"],
  555: ["mike-rotundo", "mikerotundo", "irwin-r-schyster"],
  557: ["dino-bravo", "dinobravo"],
  564: ["marc-mero", "marcmero"],
  575: ["mr-kennedy", "mrkennedy", "ken-kennedy"],
  588: ["commander-azeez", "omos"],
  620: ["io-shirai", "iyo-sky"],
  622: ["swerve-strickland", "swerve", "isaiah-swerve-scott"],
  675: ["mia-yim", "miayim"],
  703: ["irwin-r-schyster", "irs"],
  706: ["jim-duggan", "hacksaw-jim-duggan"],
  797: ["mr-perfect", "curt-hennig"],
  828: ["renee-young", "renee-paquette"],
  858: ["penta-el-zero-miedo", "penta"],
  859: ["dan-severn", "dansevern"],
  861: ["riddle", "matt-riddle"],
  868: ["tamina", "tamina-snuka"],
  896: ["albert", "a-train", "tensai"],
  897: ["maven"],
  898: ["droz", "darren-drozdov"],
  928: ["sapphire"],
  940: ["aldo-montoya"],
  941: ["justin-credible", "justincredible"],
  942: ["jerry-lynn", "jerrylynn"],
  946: ["candice-michelle", "candicemichelle"],
  972: ["sycho-sid", "sid-justice", "sid-vicious", "sid-eudy"],
  975: ["teddy-long", "teddylong"],
  977: ["linda-mcmahon", "lindamcmahon"],
  1010: ["eve-torres", "eve"],
};

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "text/html"
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        return resolve({ status: res.statusCode, body: "" });
      }
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve({ status: 200, body: data }));
    });
    req.on("error", () => resolve({ status: 0, body: "" }));
    req.on("timeout", () => { req.destroy(); resolve({ status: 0, body: "" }); });
  });
}

function extractImageUrl(html) {
  const patterns = [
    /src="(\/f\/styles\/talent_champion_lg\/public\/[^"]+)"/,
    /src="(\/f\/styles\/wwe_1_1_540[^"]*\/public\/[^"]+)"/,
    /src="(\/f\/styles\/[^"]*profile[^"]*\/public\/[^"]+)"/i,
    /og:image[^>]*content="([^"]+)"/,
  ];
  for (const pattern of patterns) {
    const m = html.match(pattern);
    if (m) return m[1];
  }
  return null;
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  const results = {};
  let found = 0;
  const ids = Object.keys(SLUG_OVERRIDES).map(Number);

  console.log(`Trying ${ids.length} wrestlers with alternate slugs...\n`);

  for (const id of ids) {
    const slugs = SLUG_OVERRIDES[id];
    let imageUrl = null;

    for (const slug of slugs) {
      const url = `https://www.wwe.com/superstars/${slug}`;
      const res = await fetchPage(url);

      if (res.status === 200 && res.body) {
        imageUrl = extractImageUrl(res.body);
        if (imageUrl) {
          if (imageUrl.startsWith("/")) imageUrl = "https://www.wwe.com" + imageUrl;
          break;
        }
      }
      await sleep(250);
    }

    if (imageUrl) {
      results[id] = imageUrl;
      found++;
      console.log(`✓ ID ${id} → found image`);
    } else {
      console.log(`✗ ID ${id} — no image found`);
    }

    await sleep(300);
  }

  // Save results
  fs.writeFileSync("wrestler_images_extra.json", JSON.stringify(results, null, 2));

  console.log(`\nFound ${found} additional images out of ${ids.length} attempts.`);
  console.log("Saved to wrestler_images_extra.json");
}

main().catch(console.error);
