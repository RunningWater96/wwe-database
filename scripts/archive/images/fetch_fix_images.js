const https = require("https");
const fs = require("fs");

const LOOKUPS = {
  74: "Vince McMahon",
  1007: "Barry Horowitz",
  887: "Ahmed Johnson",
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
  for (const [id, name] of Object.entries(LOOKUPS)) {
    const img = await getWikiImage(name);
    if (img) {
      console.log(`${id}: "${img}",`);
    } else {
      // Try with (wrestler) suffix
      const img2 = await getWikiImage(name + " (wrestler)");
      if (img2) {
        console.log(`${id}: "${img2}",`);
      } else {
        console.log(`// ${id}: ${name} — NO IMAGE FOUND`);
      }
    }
  }
}
main();
