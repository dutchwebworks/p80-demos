// Examples: https://www.harrytheo.com/blog/2021/03/workbox-strategies-with-examples-and-use-cases/

importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

workbox.setConfig({ debug: true });

workbox.routing.registerRoute(
  /\.(?:woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60 * 24 * 30
      })
    ]
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css|webp|png|svg)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "assets",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 60 * 60 * 24
      })
    ]
  })
);

/*
workbox.routing.registerRoute(
  /(\/|\.html)$/,
  new workbox.strategies.NetworkFirst({
    cacheName: "html",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        // maxAgeSeconds: 60 * 60 * 24 * 30,
      })
    ]
  })
);
*/