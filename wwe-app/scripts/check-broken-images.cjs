const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const imagesSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'images.js'), 'utf8');
const wrestlersSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'wrestlers.js'), 'utf8');

// Build name map
const nameMap = {};
const re1 = /id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let m;
while ((m = re1.exec(wrestlersSrc)) !== null) nameMap[parseInt(m[1])] = m[2];
// Also check single-quote names
const re1b = /id:\s*(\d+),\s*name:\s*'([^']+)'/g;
while ((m = re1b.exec(wrestlersSrc)) !== null) nameMap[parseInt(m[1])] = m[2];

// Extract all image URLs
const entries = [];
const re2 = /^\s*(\d+):\s*['"](https?:\/\/[^'"]+)['"]/gm;
while ((m = re2.exec(imagesSrc)) !== null) {
  entries.push({ id: parseInt(m[1]), url: m[2] });
}

console.log(`Testing ${entries.length} image URLs...\n`);

function checkUrl(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, { method: 'HEAD', timeout: 8000, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve('ERR'));
    req.on('timeout', () => { req.destroy(); resolve('TIMEOUT'); });
    req.end();
  });
}

async function main() {
  const broken = [];
  const batchSize = 20;

  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(async (entry) => {
      const status = await checkUrl(entry.url);
      return { ...entry, status };
    }));

    for (const r of results) {
      if (r.status !== 200 && r.status !== 301 && r.status !== 302) {
        broken.push(r);
        process.stdout.write(`  BROKEN [${r.status}] ${r.id}: ${nameMap[r.id] || 'Unknown'} → ${r.url.substring(0, 80)}...\n`);
      }
    }
    process.stdout.write(`  Checked ${Math.min(i + batchSize, entries.length)}/${entries.length}\r`);
  }

  console.log(`\n\n=== SUMMARY ===`);
  console.log(`Total images: ${entries.length}`);
  console.log(`Broken: ${broken.length}`);
  if (broken.length > 0) {
    console.log('\nBroken URLs:');
    for (const b of broken) {
      console.log(`  ${b.id} [${b.status}]: ${nameMap[b.id] || 'Unknown'}`);
      console.log(`    ${b.url}`);
    }
  }
}

main();
