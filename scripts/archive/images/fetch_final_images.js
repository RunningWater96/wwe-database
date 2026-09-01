const https = require("https");
const fs = require("fs");

const FINAL_LOOKUPS = {
  172: "Paul London (wrestler)",
  183: "Heidenreich (wrestler)",
  315: "Muhammad Hassan (wrestler)",
  447: "Nidia Guenard",
  575: "Ken Anderson (wrestler)",
  887: "Ahmed Johnson",
  912: "Channing Lorenzo",
  929: "Kevin Wacholz",
  122: "The Godwinns",
  151: "Earthquake (wrestler)",
  804: "Nikolai Volkoff",
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

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getWikiImage(title) {
  const encoded = encodeURIComponent(title);
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
  const data = await fetchJSON(url);
  if (data && data.thumbnail && data.thumbnail.source) {
    return data.thumbnail.source.replace(/\/(\d+)px-/, "/400px-");
  }
  return null;
}

async function main() {
  const results = {};
  for (const [id, name] of Object.entries(FINAL_LOOKUPS)) {
    const img = await getWikiImage(name);
    if (img) {
      results[id] = img;
      console.log(`✓ ${id}: ${name}`);
    } else {
      console.log(`✗ ${id}: ${name}`);
    }
    await sleep(200);
  }
  fs.writeFileSync("wrestler_images_final.json", JSON.stringify(results, null, 2));
  console.log(`\nFound ${Object.keys(results).length} more.`);
}
main();
