//A2HS

self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/app/main/index.html',
        '/app/main/about.html',
        '/app/main/reile.html',
        '/app/main/story.html',
        '/app/main/story-2.html',
        '/app/main/style.css',
        '/app/main/favicon.png',
        '/app/main/ecje+2.mp4',
        '/app/main/index.js',
        '/app/main/story.mp4',
        //assets
          //css
        '/app/main/assets/css/common.css ',
        '/app/main/assets/css/jquery.fullPage.css',
        '/app/main/assets/font/*',
        '/app/main/assets/img/*',
        '/app/main/assets/js/*',














        
        
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });