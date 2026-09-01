export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function buildSlugMap(wrestlers) {
  const map = new Map();
  wrestlers.forEach((w) => {
    const slug = slugify(w.name);
    if (!map.has(slug)) {
      map.set(slug, w.id);
    } else {
      // Collision: append ID to make unique
      map.set(`${slug}-${w.id}`, w.id);
    }
  });
  return map;
}

export function parseHash(hash, slugMap) {
  if (!hash || hash === '#') return { view: null, wrestlerId: null };
  const params = new URLSearchParams(hash.slice(1));
  const view = params.get('view');
  const wrestlerSlug = params.get('wrestler');
  const wrestlerId = wrestlerSlug ? (slugMap.get(wrestlerSlug) ?? null) : null;
  return { view, wrestlerId };
}

export function buildHash({ view, wrestlerSlug }) {
  const params = new URLSearchParams();
  if (view) params.set('view', view);
  if (wrestlerSlug) params.set('wrestler', wrestlerSlug);
  const str = params.toString();
  return str ? `#${str}` : '';
}
