importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");

workbox.routing.registerRoute(
  /\.(?:woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60 * 24 * 30
      }),
    ],
  })
);