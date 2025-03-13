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
const iconsActive = (() => {
    const boxServicesActive = [...document.querySelectorAll(".main__boxServices_services_elem")];
    boxServicesActive.forEach(elem => {
        elem.addEventListener('mouseover', (event) => {
            const { target } = event;
            // console.log('target: ', target);
            const iconsBoxServices = target.querySelector(".main__boxServices_services_elem_img");
            if (iconsBoxServices !== null) {
                console.log('iconsBoxSwrvices: ', iconsBoxServices);
                iconsBoxServices.remove();
                const img = new Image;
                img.src = "images/svg/agreement__active.svg";
                img.classList.add('main__boxServices_services_elem_img');
                img.classList.add('imgActive');
                target.insertAdjacentHTML('afterbegin', img.outerHTML);
                let imgActive = document.querySelector('.imgActive');
            }
        });
        elem.addEventListener('mouseout', (event) => {
            const { target } = event;
            const iconsBoxServicesActive = target.querySelector(".main__boxServices_services_elem_img.imgActive");
            if (iconsBoxServicesActive !== null) {
                iconsBoxServicesActive.remove();
                const img = new Image;
                img.src = "images/svg/agreement.svg";
                img.classList.add('main__boxServices_services_elem_img');
                img.classList.add('imgActive');
                target.insertAdjacentHTML('afterbegin', img.outerHTML);
            }
        });
    });
})();
function SlidersSwipe() {
    new SwipeSlider('.main__boxServices_services', {
        wheelScrolling: true,
    });
}
SlidersSwipe();
