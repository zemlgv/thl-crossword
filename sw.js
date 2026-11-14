// Оффлайн-работа: сайт сначала берётся из сети, при отсутствии сети — из кэша.
// Меняется список файлов — поднимите версию CACHE.
const CACHE = 'thl-v2';
const ASSETS = [
  './', 'index.html', 'style.css', 'app.js', 'config.js', 'manifest.json',
  'img/logo-ru.png', 'img/logo-en.png', 'img/icon-192.png', 'img/icon-512.png',
  'data/books.json', 'data/words.json', 'data/covers/spotlight9.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Чужие адреса (таблица лидеров, аудио Wikimedia) не кэшируем
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request))
  );
});
