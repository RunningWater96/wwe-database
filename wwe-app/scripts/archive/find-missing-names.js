import W from '../src/data/wrestlers.js';
import R from '../src/data/relationships.js';
import { classifyEntry } from '../src/utils/wrestlerHelpers.js';

// Build lookup of all names (lowercase -> wrestler entry)
const nameMap = new Map();
W.forEach((w) => {
  if (classifyEntry(w) === 'duplicate') return;
  nameMap.set(w.name.toLowerCase(), w);
  if (w.realName) nameMap.set(w.realName.toLowerCase(), w);
  (w.alternateNames || []).forEach((n) => nameMap.set(n.toLowerCase(), w));
});
// Also add alternate names from relationships
Object.entries(R).forEach(([id, rel]) => {
  (rel.alternateNames || []).forEach((n) => {
    const w = W.find((x) => x.id === Number(id));
    if (w) nameMap.set(n.toLowerCase(), w);
  });
});

function canResolve(name) {
  const l = name.toLowerCase();
  if (nameMap.has(l)) return true;
  const base = l.replace(/\s*\(.*\)$/, '').trim();
  if (base !== l && nameMap.has(base)) return true;
  const m = l.match(/\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(',').map((s) => s.trim());
    if (parts.some((p) => nameMap.has(p))) return true;
  }
  return false;
}

// Check rivals/allies from relationships data
const missing = new Map();
Object.entries(R).forEach(([id, rel]) => {
  const w = W.find((x) => x.id === Number(id));
  if (!w || classifyEntry(w) === 'duplicate') return;
  const allNames = [...(rel.rivals || []), ...(rel.allies || [])];
  (rel.tagTeams || []).forEach((t) => (t.partners || []).forEach((p) => allNames.push(p)));
  (rel.factions || []).forEach((f) => (f.members || []).forEach((m) => allNames.push(m)));

  allNames.forEach((name) => {
    if (!canResolve(name)) {
      if (!missing.has(name)) missing.set(name, []);
      missing.get(name).push(w.name);
    }
  });
});

// Also check base wrestler data
W.forEach((w) => {
  if (classifyEntry(w) === 'duplicate') return;
  const allNames = [...(w.rivals || []), ...(w.allies || [])];
  (w.tagTeams || []).forEach((t) => (t.partners || []).forEach((p) => allNames.push(p)));
  (w.factions || []).forEach((f) => (f.members || []).forEach((m) => allNames.push(m)));

  allNames.forEach((name) => {
    if (!canResolve(name)) {
      if (!missing.has(name)) missing.set(name, []);
      missing.get(name).push(w.name);
    }
  });
});

const sorted = [...missing.entries()].sort((a, b) => b[1].length - a[1].length);
console.log('Total unresolvable names:', sorted.length);
console.log('');
sorted.forEach(([name, refs]) => {
  const refStr = refs.slice(0, 5).join(', ') + (refs.length > 5 ? '...' : '');
  console.log(`${name}  [${refs.length} refs: ${refStr}]`);
});
