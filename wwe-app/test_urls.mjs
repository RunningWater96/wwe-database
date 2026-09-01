import I from './src/data/images.js';

// Test a sample of new URLs (IDs > 1121) and old URLs
const entries = Object.entries(I);
const newEntries = entries.filter(([id]) => Number(id) > 1121);
const oldEntries = entries.filter(([id]) => Number(id) <= 1121);

async function testUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.ok;
  } catch {
    return false;
  }
}

// Test 10 old URLs and 10 new URLs
console.log('=== Testing OLD URLs (should work) ===');
for (const [id, url] of oldEntries.slice(0, 5)) {
  const ok = await testUrl(url);
  console.log(ok ? 'OK' : 'FAIL', id, url.substring(0, 80));
}

console.log('\n=== Testing NEW URLs (likely failing) ===');
for (const [id, url] of newEntries.slice(0, 10)) {
  const ok = await testUrl(url);
  console.log(ok ? 'OK' : 'FAIL', id, url.substring(0, 80));
}
