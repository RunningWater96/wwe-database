const https = require("https");
const fs = require("fs");

// Read wrestler names from the JSX file
const jsx = fs.readFileSync("wwe-app/src/WWEDatabase.jsx", "utf8");

// Extract wrestler IDs and names
const wrestlers = [];
const nameRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let match;
while ((match = nameRegex.exec(jsx)) !== null) {
  wrestlers.push({ id: parseInt(match[1]), name: match[2] });
}

console.log(`Found ${wrestlers.length} wrestlers in database`);

// Generate slug variations from a wrestler name
function generateSlugs(name) {
  const slugs = [];
  const clean = name.toLowerCase().trim();

  // Basic: lowercase, spaces to hyphens
  slugs.push(clean.replace(/['']/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));

  // Without "The "
  if (clean.startsWith("the ")) {
    const noThe = clean.slice(4);
    slugs.push(noThe.replace(/['']/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
  }

  // No hyphens (concatenated)
  slugs.push(clean.replace(/['']/g, "").replace(/\s+/g, "").replace(/[^a-z0-9]/g, ""));

  // Handle Jr./Sr.
  if (clean.includes(" jr")) {
    slugs.push(clean.replace(/ jr\.?/, "-jr").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
  }

  // Handle "Big" prefix
  if (clean.startsWith("big ")) {
    slugs.push(clean.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""));
  }

  // Remove duplicate slugs
  return [...new Set(slugs)];
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "text/html"
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return resolve({ status: res.statusCode, redirect: res.headers.location, body: "" });
      }
      if (res.statusCode !== 200) {
        res.resume();
        return resolve({ status: res.statusCode, body: "" });
      }
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve({ status: 200, body: data }));
    });
    req.on("error", (e) => resolve({ status: 0, body: "", error: e.message }));
    req.on("timeout", () => { req.destroy(); resolve({ status: 0, body: "", error: "timeout" }); });
  });
}

function extractImageUrl(html) {
  // Look for talent profile images
  const patterns = [
    /src="(\/f\/styles\/talent_champion_lg\/public\/[^"]+)"/,
    /src="(\/f\/styles\/wwe_1_1_540[^"]*\/public\/[^"]+)"/,
    /src="(\/f\/styles\/wwe_16_9_l[^"]*\/public\/[^"]+)"/,
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
  let notFound = 0;

  // Filter out tag teams (names with & or containing common tag team words)
  const soloWrestlers = wrestlers.filter(w => !w.name.includes(" & ") && !w.name.includes(" and "));

  console.log(`Processing ${soloWrestlers.length} solo wrestlers...`);
  console.log("This will take a while due to rate limiting...\n");

  for (let i = 0; i < soloWrestlers.length; i++) {
    const w = soloWrestlers[i];
    const slugs = generateSlugs(w.name);
    let imageUrl = null;

    for (const slug of slugs) {
      const url = `https://www.wwe.com/superstars/${slug}`;
      const res = await fetchPage(url);

      if (res.status === 200 && res.body) {
        imageUrl = extractImageUrl(res.body);
        if (imageUrl) {
          // Make sure it's a full URL
          if (imageUrl.startsWith("/")) {
            imageUrl = "https://www.wwe.com" + imageUrl;
          }
          break;
        }
      }

      // Rate limit between slug attempts
      await sleep(200);
    }

    if (imageUrl) {
      results[w.id] = imageUrl;
      found++;
      console.log(`[${i+1}/${soloWrestlers.length}] ✓ ${w.name} → found image`);
    } else {
      notFound++;
      if ((i + 1) % 20 === 0) {
        console.log(`[${i+1}/${soloWrestlers.length}] ✗ ${w.name} — no image found`);
      }
    }

    // Rate limit between wrestlers
    await sleep(300);

    // Save progress every 50 wrestlers
    if ((i + 1) % 50 === 0) {
      fs.writeFileSync("wrestler_images_progress.json", JSON.stringify(results, null, 2));
      console.log(`\n--- Progress saved: ${found} found, ${notFound} not found ---\n`);
    }
  }

  // Save final results
  fs.writeFileSync("wrestler_images.json", JSON.stringify(results, null, 2));

  // Generate JS constant
  const jsLines = Object.entries(results).map(([id, url]) => `  ${id}: "${url}",`);
  const jsConst = `const WRESTLER_IMAGES = {\n${jsLines.join("\n")}\n};`;
  fs.writeFileSync("wrestler_images.js", jsConst);

  console.log(`\nDone! Found ${found} images, ${notFound} not found.`);
  console.log("Results saved to wrestler_images.json and wrestler_images.js");
}

main().catch(console.error);
