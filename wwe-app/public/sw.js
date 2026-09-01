// Development service worker — production build auto-generates a version with hashed assets
const CACHE_VERSION = 'v5';
const SHELL_CACHE = 'wwe-shell-' + CACHE_VERSION;

// Pre-cache shell on install (no data chunks in dev — they aren't hashed)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(['/']))
  );
  self.skipWaiting();
});

// Clean old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== SHELL_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Network-first for dev (always want fresh code), cache fallback for offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // Offline navigation fallback: serve cached index.html
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          return undefined;
        });
      })
  );
});
