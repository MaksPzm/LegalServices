const mobMenuBtn = (() => {
    const burgerMenu = document.querySelector(".header__mainMenu_menu_burger-menu_img");
    const mobMenu = document.querySelector(".header__mainMenu_mob_list");
    const mobMenuExit = document.querySelector(".header__mainMenu_mob_exitImg");
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.add("hidden");
        mobMenu.classList.remove("hidden");
    });
    mobMenuExit.addEventListener('click', () => {
        mobMenu.classList.add('hidden');
        burgerMenu.classList.remove('hidden');
    });
})();
