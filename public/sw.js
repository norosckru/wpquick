const CACHE_NAME = "version-5";
const urlsToCache = [
  "index.html",
  "offline.html",
  "/favicon.ico",
  "/img/icons/icon-72x72.png",
  "/img/icons/icon-96x96.png",
  "/img/icons/icon-128x128.png",
  "/img/icons/icon-144x144.png",
  "/img/icons/icon-152x152.png",
  "/img/icons/icon-167x167.png",
  "/img/icons/icon-180x180.png",
  "/img/icons/icon-192x192.png",
  "/img/icons/icon-384x384.png",
  "/img/icons/icon-512x512.png",
  "img/splashscreens/iphone5_splash.png",
  "img/splashscreens/iphone6_splash.png",
  "img/splashscreens/iphoneplus_splash.png",
  "img/splashscreens/iphonex_splash.png",
  "img/splashscreens/ipad_splash.png",
  "img/splashscreens/ipadpro1_splash.png",
  "img/splashscreens/ipadpro2_splash.png"
];

const self = this;

//install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');

        return cache.addAll(urlsToCache);
      })
    //.catch((err) => console.log(err))
  )
});

//Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
});

//Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))

  )
});