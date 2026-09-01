#!/usr/bin/env node
/**
 * fix-brands-format.cjs
 *
 * Converts all brandHistory entries from the `years` format:
 *   { brand: 'Raw', years: '2019-2020' }
 * to the structured `from`/`to` format:
 *   { brand: 'Raw', from: '2019', to: '2020' }
 *
 * Also handles:
 *   years: '2019-present'  =>  from: '2019', to: null
 *   years: '2019'          =>  from: '2019', to: '2019'
 */

const fs = require('fs');
const path = require('path');

const BRANDS_PATH = path.join(__dirname, '..', 'src', 'data', 'brands.js');

const content = fs.readFileSync(BRANDS_PATH, 'utf8');

let converted = 0;

// Match: { brand: 'SomeBrand', years: 'value' }
// Replace with: { brand: 'SomeBrand', from: 'start', to: 'end' }
const result = content.replace(
  /\{\s*brand:\s*'([^']+)',\s*years:\s*'([^']+)'\s*\}/g,
  (match, brand, years) => {
    converted++;
    const trimmed = years.trim();

    if (trimmed.includes('-present')) {
      const from = trimmed.replace('-present', '');
      return `{ brand: '${brand}', from: '${from}', to: null }`;
    }

    if (trimmed.includes('-')) {
      const parts = trimmed.split('-');
      // Handle YYYY-YYYY
      const from = parts[0];
      const to = parts.slice(1).join('-'); // in case of weird formats
      return `{ brand: '${brand}', from: '${from}', to: '${to}' }`;
    }

    // Single year like '2019'
    return `{ brand: '${brand}', from: '${trimmed}', to: '${trimmed}' }`;
  }
);

fs.writeFileSync(BRANDS_PATH, result, 'utf8');

console.log(`Done! Converted ${converted} entries from years -> from/to format.`);

// Quick verification: count remaining years: entries
const remaining = (result.match(/years:\s*'/g) || []).length;
if (remaining > 0) {
  console.log(`WARNING: ${remaining} entries still use the years format.`);
} else {
  console.log('All entries now use from/to format.');
}

// Count total from: entries
const fromCount = (result.match(/from:\s*'/g) || []).length;
console.log(`Total from/to entries: ${fromCount}`);
