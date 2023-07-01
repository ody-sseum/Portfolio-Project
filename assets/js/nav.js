// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.nav-link').
// forEach(Link => {
//     if(Link.href.includes(`${activePage}`)){
//         Link.classList.add('active');
//     }
// });


const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/') || (navLinkPathname === '')) {
        navLinkEl.classList.add('active');
    }
});