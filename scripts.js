console.log("stylesheet connected");

/* Mobile menu open and animation function */
document.addEventListener('DOMContentLoaded', function() {
    /* Select full hamburger menu */
    const hamMenu = document.querySelector('.menu-icon');
    /* Select the span elemets from HamMenu */
    const spanLines = hamMenu.querySelectorAll('span');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileHeader = document.querySelector('.mobile-nav');

    /* Add click lister to toggle change-ham-color class for span 0 and 2 */
    hamMenu.addEventListener('click', function() {
        /* Hamburger span toggles */
        spanLines[0].classList.toggle('change-ham-color');
        spanLines[2].classList.toggle('change-ham-color');
        /* Mobile header background colour change */
        mobileHeader.classList.toggle('mobile-nav-background');

        /* Menu pop in toogle class */
        mobileMenu.classList.toggle('show-mobile-menu');
    });
});

