#!/usr/bin/env node
const path = require('path');
const wrestlersPath = path.join(__dirname, '..', 'src', 'data', 'wrestlers.js');
delete require.cache[require.resolve(wrestlersPath)];
const W = require(wrestlersPath).default;
console.log('wrestlers:', W.length);
const ids = new Set(W.map(w => w.id));
const files = ['promos','matches','themes','brands','bio','personal','stats','images'];
for (const f of files) {
  const fp = path.join(__dirname, '..', 'src', 'data', f + '.js');
  delete require.cache[require.resolve(fp)];
  const d = require(fp);
  const obj = d.default || d.WRESTLER_IMAGES || d;
  const keys = Object.keys(obj).filter(k => /^\d+$/.test(k)).map(Number);
  const missing = W.filter(w => keys.indexOf(w.id) === -1);
  const orphans = keys.filter(k => ids.has(k) === false);
  console.log(f + ': entries=' + keys.length + ' missing=' + missing.length + ' orphans=' + orphans.length);
}
