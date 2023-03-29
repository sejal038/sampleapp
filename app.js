if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service worker is registered', reg))
    .catch((err) => concole.log('service worker not registered', err));
}