window.addEventListener('load', () => {

    // burger
    const burgerButton = document.getElementById('headerBurger');

    if (burgerButton) {
        const menu = document.getElementById('headerMenu');
        burgerButton.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('header__menu_open');
            document.body.classList.toggle('lock');
        })

        const menuClose = document.getElementById('menuClose');
        menuClose.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('header__menu_open');
            document.body.classList.toggle('lock');
        })
    }
})