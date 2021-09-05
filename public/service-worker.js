/* const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [ //hero images still need to be added
  "/",
  "/index.html",
  "/favicon_io/favicon.ico",
  "/favicon_io/favicon-32x32.png",
  "favicon_io/favicon-16x16.png",
  "favicon_io/apple-touch-icon.png",
  "/manifest.webmanifest",
  "/assets/css/style.css",
  "/assets/js/loadImages.js",
  "/assets/img/gallery/1870Veteran/20-546016_0.jpeg",
  "/assets/img/gallery/1870Veteran/20-546016_2_0.jpeg",
  "/assets/img/gallery/2291Chelan/genBcs.19-485988_6_0.jpg",
  "/assets/img/gallery/2291Chelan/genBcs.19-485988_7_0.jpg",
  "/assets/images/icons/icon-152x152.png",
  "/assets/images/icons/icon-192x192.png",
  "/assets/images/icons/icon-384x384.png",
  "/assets/images/icons/icon-512x512.png",
  "/assets/img/gallery/2291Chelan/genBcs.19-485988_10_0.jpg",
  "/assets/img/gallery/2291Chelan/genMid.19-485988_5_0.jpg",
  "/assets/img/gallery/2291Chelan/genMid.19-485988_8_0.jpg",
  "/assets/img/gallery/3374Troy/21-726578_5_2.jpeg",
  "/assets/img/gallery/3374Troy/21-726578_6_2.jpeg",
  "/assets/img/gallery/3374Troy/21-726578_10_2.jpeg",
  "/assets/img/gallery/3374Troy/21-726578_16_2.jpeg",
  "/assets/img/gallery/3374Troy/21-726578_29_2.jpeg",
  "/assets/img/gallery/4521Colbath/21-713678_0.jpeg",
  "/assets/img/gallery/4521Colbath/21-713678_1_0.jpeg",
  "/assets/img/gallery/4521Colbath/21-713678_2_0.jpeg",
  "/assets/img/gallery/4521Colbath/21-713678_5_0.jpeg",
  "/assets/img/gallery/4848Eldred/20-667290_6_0.jpeg",
  "/assets/img/gallery/4848Eldred/20-667290_8_0.jpeg",
  "/assets/img/gallery/4848Eldred/20-667290_9_0.jpeg",
  "/assets/img/gallery/4848Eldred/20-667290_11_0.jpeg",
  "/assets/img/gallery/4848Eldred/20-667290_13_0.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2001593535xd-w1020_h770_q80.jpe",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2180210667xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2508457245xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2606054460xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m2955387456xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m3173426418xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m4101572091xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/5637SpreadingOak/d75523f2eec32757814621837cb42694l-m4139278364xd-w1020_h770_q80.jpeg",
  "/assets/img/gallery/6930Oporto/balichestlivingroom.jpeg",
  "assets/img/gallery/6930Oporto/dca1829bca01f17b56ec12671ce6ee28l-m1771093754xd-w1020_h770_q80.jpeg"
];

// install
self.addEventListener("install", function (evt) {
  // pre cache image data
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/images"))
  );
    
  // pre cache all static assets
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );

  // tell the browser to activate this service worker immediately once it
  // has finished installing
  self.skipWaiting();
});

// activate
self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// fetch
self.addEventListener("fetch", function(evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      }).catch(err => console.log(err))
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
}); */
