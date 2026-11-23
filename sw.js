/* Shaadify service worker: lets the web app open offline once it has been loaded. Only same-origin files are cached; sync traffic
   to your sync server and everything else is left alone. Bump VERSION to force an update. */
const VERSION = 'shaadify-v1.3.1';
const CORE = ['./', './index.html', './manifest.webmanifest', './header.png', './icon-192.png', './icon-512.png'];

// On install, also save the app's own script and stylesheet (their file names change with every build, so read them from index.html).
async function precache() {
  const c = await caches.open(VERSION); await c.addAll(CORE);
  const html = await (await fetch('./index.html', { cache: 'no-store' })).text();
  const assets = [...html.matchAll(/(?:src|href)="(\.\/[^"]+\.(?:js|css))"/g)].map(m => m[1].replace(/^\//, './'));
  await c.addAll(assets);
}
self.addEventListener('install', e => { e.waitUntil(precache().then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

self.addEventListener('fetch', e => {
  const req = e.request; const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') { // open the newest page when online, the saved one when offline
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; })));
});