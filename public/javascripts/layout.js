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
window.ga = window.ga || function(){(ga.q=ga.q||[]).push(arguments)}; ga.l =+ new Date;
ga('create', 'UA-118639850-1', 'auto');
ga('send', 'pageview');
<!-- End Google Analytics -->

<!-- Outdated GA method -->
// const _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-118639850-1']);
// _gaq.push(['_trackPageview']);
//
// (function () {
//     const ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//     ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//     const s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();
<!-- End Outdated GA method -->

function getCookie(name) {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    }
    else
    {
        begin += 2;
        let end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }
}

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}