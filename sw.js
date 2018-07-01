var cacheName = 'v2';
var cacheFiles = [
    './',
    './index.html',
    '/css/style.css',
    './fonts/Inder-Regular.ttf',
    './fonts/SanFranciscoText-Regular.otf',
    './fonts/Raleway-Regular.ttf',
    './images/home_background6.jpg',
    './js/main.js',
    '`https://free.currencyconverterapi.com/api/v3/convert?q=${currId}&compact=ultra`',
    'https://free.currencyconverterapi.com',
    'https://xeroxism.github.io'
];


self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed")


})

self.addEventListener('activate', function(e) {
    console.log("[ServiceWorker] Activated")



})

self.addEventListener('fectch', function(e) {
    console.log("[ServiceWorker] Fetching", e.request.url);
})