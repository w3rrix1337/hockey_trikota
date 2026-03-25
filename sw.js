const CACHE_NAME = 'hockey-v1';
const ASSETS_TO_CACHE = [
    './',
'./index.html',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/gol_azul.mp3',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/hit1.mp3',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/fin_1_everyone.mp3',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/puck.png',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/paddle1.png',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/paddle2.png',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/paddle5.png',
'https://raw.githubusercontent.com/w3rrix1337/hockey_trikota/main/paddle6.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
