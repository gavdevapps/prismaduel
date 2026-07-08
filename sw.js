// Минимальный service worker: нужен для установки PWA.
// Сеть в приоритете (игра онлайн), офлайн-кэш только для оболочки.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
