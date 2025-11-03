// Define a cache name
const CACHE_NAME = 'beu-syllabus-v1';

// List all the files to cache
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'icon-192.png',
  'icon-512.png'
  // Add any other assets like your hero background image here
];

// 1. Install the service worker
self.addEventListener('install', event => {
  // Wait until the files are all cached
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Fetch event (serve from cache or network)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If we found a match in the cache, return it
        if (response) {
          return response;
        }
        // Otherwise, fetch it from the network
        return fetch(event.request);
      }
    )
  );
});

// 3. Activate event (clean up old caches)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});