importScripts('/explore-github/workbox-sw.prod.v2.1.2.js');

// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});


workbox.router.registerRoute(
  new RegExp('^https://api.github.com'),
  workbox.strategies.staleWhileRevalidate()
);


self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});


workbox.precache([
  {
    "url": "/explore-github/about.bundle.js",
    "revision": "faef77681fd5b4005d242e6298a43299"
  },
  {
    "url": "assets/icons/android-icon-144x144.png",
    "revision": "3b06863dc285bf176e4a819f491598f9"
  },
  {
    "url": "assets/icons/android-icon-192x192.png",
    "revision": "50e3fb1efcf976033bc7d576ed8cc7cc"
  },
  {
    "url": "assets/icons/android-icon-36x36.png",
    "revision": "9fde8a28f613797a74889aecdccc6604"
  },
  {
    "url": "assets/icons/android-icon-48x48.png",
    "revision": "f677cbc4bc3d97f6bba88c8cdd1cfdc9"
  },
  {
    "url": "assets/icons/android-icon-72x72.png",
    "revision": "29c72ebcd644666f19ada1db1e9e35b1"
  },
  {
    "url": "assets/icons/android-icon-96x96.png",
    "revision": "ff18b0022084236dfe558982c3b745b4"
  },
  {
    "url": "assets/icons/apple-icon-114x114.png",
    "revision": "e0d90125793553600c83a5da37248d42"
  },
  {
    "url": "assets/icons/apple-icon-120x120.png",
    "revision": "4f5efdc53612a0313842144cadf0b653"
  },
  {
    "url": "assets/icons/apple-icon-144x144.png",
    "revision": "3b06863dc285bf176e4a819f491598f9"
  },
  {
    "url": "assets/icons/apple-icon-152x152.png",
    "revision": "3e43c3cbc7cf0075e8daec045d513c5b"
  },
  {
    "url": "assets/icons/apple-icon-180x180.png",
    "revision": "ac7cb02b29159d2b6c9adf0845e2e537"
  },
  {
    "url": "assets/icons/apple-icon-57x57.png",
    "revision": "8151c49ac01ab011c40d7a15ad26841f"
  },
  {
    "url": "assets/icons/apple-icon-60x60.png",
    "revision": "94219cf6a4c281daafa430f768a5fb8c"
  },
  {
    "url": "assets/icons/apple-icon-72x72.png",
    "revision": "29c72ebcd644666f19ada1db1e9e35b1"
  },
  {
    "url": "assets/icons/apple-icon-76x76.png",
    "revision": "0c78aeb08bb3cb61f5833ecd3e77d4f6"
  },
  {
    "url": "assets/icons/apple-icon-precomposed.png",
    "revision": "7bd84e5c3afc31203672762252627de4"
  },
  {
    "url": "assets/icons/apple-icon.png",
    "revision": "7bd84e5c3afc31203672762252627de4"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "dbe2a7790c81431b7816c6b08f69efa7"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "03ded1dbb42583336c722d23624add10"
  },
  {
    "url": "assets/icons/favicon-96x96.png",
    "revision": "ff18b0022084236dfe558982c3b745b4"
  },
  {
    "url": "assets/icons/ms-icon-144x144.png",
    "revision": "3b06863dc285bf176e4a819f491598f9"
  },
  {
    "url": "assets/icons/ms-icon-150x150.png",
    "revision": "37159c65cd0cae164f452d7564826d0d"
  },
  {
    "url": "assets/icons/ms-icon-310x310.png",
    "revision": "41b4120e0eaa10774e7266f564e4a944"
  },
  {
    "url": "assets/icons/ms-icon-70x70.png",
    "revision": "abf098b0ef53102e176d2dce3c2d4efd"
  },
  {
    "url": "assets/images/github-explorer-black.png",
    "revision": "4c2cfe53e7c8f7c7d648d3408aff0a2d"
  },
  {
    "url": "assets/images/github-explorer-blue.png",
    "revision": "b5921e3970419671f0d5354420cc400c"
  },
  {
    "url": "assets/images/github-explorer-white.png",
    "revision": "e53cc73ba8438fc88c804cf25c4e9e75"
  },
  {
    "url": "assets/images/loading.gif",
    "revision": "6a046370b375e60120ebf04ca2c52816"
  },
  {
    "url": "/explore-github/followers.bundle.js",
    "revision": "254176e36de42d4ddcc73076c54d9982"
  },
  {
    "url": "/explore-github/following.bundle.js",
    "revision": "d469bfecf16aed863bd1096d435184b7"
  },
  {
    "url": "/explore-github/home.bundle.js",
    "revision": "9d679875318a9caa22ec80062262de50"
  },
  {
    "url": "/explore-github/index.html",
    "revision": "f0aff8185c0f14921eb32281cb74aa15"
  },
  {
    "url": "/explore-github/main.bundle.js",
    "revision": "4b0e47c22f1a8e9962b7c48bd10b2be5"
  },
  {
    "url": "/explore-github/manifest.json",
    "revision": "2361786d812541d880e239b5c4a91dbb"
  },
  {
    "url": "/explore-github/profile.bundle.js",
    "revision": "19b461b8e0bbd1731940ba1e9850037e"
  },
  {
    "url": "/explore-github/repo.bundle.js",
    "revision": "408345c6c17294ac3fcdebb1d4391355"
  },
  {
    "url": "/explore-github/repositories.bundle.js",
    "revision": "1a146fe00ff958a5b2b873e822f7ea73"
  },
  {
    "url": "/explore-github/search.bundle.js",
    "revision": "0dfd91b865b93eee2794017ffd441607"
  },
  {
    "url": "/explore-github/sidebar.bundle.js",
    "revision": "15c28aae1e229ccc6b040929c62414ce"
  },
  {
    "url": "/explore-github/style.css",
    "revision": "6f22ed9e0ad898496d246b6834edbc3e"
  },
  {
    "url": "sw.js",
    "revision": "92df53bb1266dc28c16db2ba7c33962f"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
