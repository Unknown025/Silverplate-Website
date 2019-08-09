const drawerEl = document.querySelector('.mdc-drawer');
const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

const topAppBarEl = document.getElementById('app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

topAppBar.setScrollTarget(document.querySelector('.main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const homeLink = document.getElementById('home-link');
const storeLink = document.getElementById('store-link');
const instructionLink = document.getElementById('instructions-link');

const cLocation = window.location.pathname.toLowerCase();
if(location.hostname.includes('greatdeals.')) {
    storeLink.classList.add('mdc-list-item--activated');
} else if(cLocation === '/') {
    homeLink.classList.add('mdc-list-item--activated');
} else if(cLocation === '/instructions') {
    instructionLink.classList.add('mdc-list-item--activated');
}

/* Register service worker if applicable. */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/javascripts/serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

<!-- Google Analytics -->
window.ga = window.ga || function(){(ga.q=ga.q||[]).push(arguments)}; ga.l += new Date;
ga('create', 'UA-137367337-1', 'auto');
ga('send', 'pageview');
<!-- End Google Analytics -->