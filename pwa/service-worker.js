/* eslint-disable no-restricted-globals */

const CACHE_VERSION = "App-Cached-v1.0";

const somethingWentWrongURL = "/something-went-wrong";

const toCache = [
  // REQUEST URL
  somethingWentWrongURL,
  "/pwa/something-went-wrong.png",

  // JAVASCRIPT
  "/javascripts/lib/moment.js",
  "/javascripts/lib/bootstrap.min.js",

  // STYLES
  "/dist/css/style.min.css",

  // FONTS
  "/dist/fonts/titillium-bold-webfont.woff2",
  "/dist/fonts/titillium-light-webfont.woff2",
  "/dist/fonts/titillium-regular-webfont.woff2",
  "/dist/fonts/titillium-semibold-webfont.woff2",

  // IMAGES
  "/images/spinner.svg",
  "/images/no-image.png",
  "/images/accolade-top-bar.png",
];

self.addEventListener(`install`, (event) => {
  console.log(`install called`, event);
  const initCaching = async () => {
    const cache = await caches.open(CACHE_VERSION);
    console.log("install CACHE", cache);
    await cache.addAll(toCache);
    self.skipWaiting();
  };

  event.waitUntil(initCaching());
});

self.addEventListener(`fetch`, (event) => {
  const response = async () => {
    const cache = await caches.open(CACHE_VERSION);
    try {
      const res = await cache.match(event.request);
      return res || (await fetch(event.request));
    } catch (e) {
      return cache.match(somethingWentWrongURL);
    }
  };

  event.respondWith(response());
});

self.addEventListener(`activate`, (event) => {
  const removeOldCache = async () => {
    console.log(`removeOldCache called`);
    const keyList = await caches.keys();
    await Promise.all(
      keyList.map((key) => {
        if (key !== CACHE_VERSION) {
          return caches.delete(key);
        }
      })
    );
  };

  event.waitUntil(
    (async () => {
      if ("navigationPreload" in self.registration) {
        console.log(`navigationPreload called`);
        await self.registration.navigationPreload.enable();
      }
      removeOldCache();
    })()
  );

  self.clients.claim();
});
