const mobMenuBtn = (() => {
    const burgerMenu: any = document.querySelector(".header__mainMenu_menu_burger-menu_img");
    const mobMenu: any = document.querySelector(".header__mainMenu_mob_list");
    const mobMenuExit: any = document.querySelector(".header__mainMenu_mob_exitImg");

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.add("hidden");
        mobMenu.classList.remove("hidden");
    })

    mobMenuExit.addEventListener('click', () => {
        mobMenu.classList.add('hidden');
        burgerMenu.classList.remove('hidden');
    })
})()

const iconsActive = (() => {
    const boxServicesActive: Element[] = [...document.querySelectorAll(".main__boxServices_services_elem")];
    boxServicesActive.forEach(elem => {
        elem.addEventListener('mouseover', (event) => {
            const { target } = event;
            // console.log('target: ', target);
            const iconsBoxServices = target.querySelector(".main__boxServices_services_elem_img");
            if (iconsBoxServices !== null) {
                iconsBoxServices.remove();
                const img = new Image;
                img.src = "images/svg/agreement__active.svg";
                img.classList.add('main__boxServices_services_elem_img');
                img.classList.add('imgActive');
                target.insertAdjacentHTML('afterbegin', img.outerHTML);
                let imgActive = document.querySelector('.imgActive');
            }
        })
        elem.addEventListener('mouseout', (event) => {
            const { target } = event;
            const iconsBoxServicesActive: any = target.querySelector(".main__boxServices_services_elem_img.imgActive");
            
            if (iconsBoxServicesActive !== null) {
                iconsBoxServicesActive.remove();
                const img = new Image;
                img.src = "images/svg/agreement.svg";
                img.classList.add('main__boxServices_services_elem_img');
                img.classList.add('imgActive');
                target.insertAdjacentHTML('afterbegin', img.outerHTML); 
            }
        })
    })
})()

// запуск плагина для слайдера услуг
function SlidersSwipe(): void {
    new SwipeSlider('.main__boxServices_services', {
       wheelScrolling: true, 
    })
}

SlidersSwipe()

// описание сотрудника
function employeeDescriptions() {
    const specialists: Element[] = Array.from(document.querySelectorAll(".main__specialists_spec_box"));
    const subName: string[] = ['Горюнова Полина Алексеевна', 'Миронов Александр Германович', 'Шестакова Елизавета Егоровна', 'Архипов Максим Константинович'];
    const posts: string[] = ['Юрист международного права', 'Кредитный адвокат, банковский юрист', 'Юридический консультант', 'Корпоративный юрист'];
    const namePhoto: string[] = ['Горюнова', 'Миронов', 'Шестакова', 'Архипов']
    specialists.forEach((name, index) => {
        name.addEventListener('mouseover', (event) => {
            const { target } = event;
            const img = target.querySelector(".main__specialists_spec_box_img");
            const name = target.querySelector(".main__specialists_spec_box_name");
            const post = target.querySelector(".main__specialists_spec_box_post");
            console.log("name", name);
            img.style.display = "none";
            name.style.display = "none";
            post.style.display = "none";
            let divNewElemets = `
            <div class="main__boxServices_services_elem_line elem1 main__specialists_spec_box_elem1 hover"></div>
            <div class="main__boxServices_services_elem_line elem2 main__specialists_spec_box_elem2 hover"></div>
            <div class="main__boxServices_services_elem_line elem3 main__specialists_spec_box_elem3 hover"></div>
            <div class="main__boxServices_services_elem_line elem4 main__specialists_spec_box_elem4 hover"></div>
            <h4 class="main__specialists_spec_box_name hover">${subName[index]}</h4>
            <span class="main__specialists_spec_box_post hover">${posts[index]}</span>
            <p class="main__specialists_spec_box_text hover">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.</p>
            <span class="main__specialists_spec_box_text-span hover">12 лет юридической практики</span>
            `;
            target.innerHTML = divNewElemets;
           
        })
         name.addEventListener('mouseout', (e) => {
            const { target } = e;
            let divElement = `
            <img class="main__specialists_spec_box_img" src="images/png/staff/${namePhoto[index]}/content/Rectangle 19.png" alt="фотография">
            <h4 class="main__specialists_spec_box_name">${subName[index]}</h4>
            <span class="main__specialists_spec_box_post">${posts[index]}</span>
            `
            target.innerHTML = divElement;
        })    
        
    })
    
}

employeeDescriptions()

// запуск плагина для слайдера список юристов
function SlidersSwipeSpecialists(): void {
    new SwipeSlider('.main__specialists_spec', {
       wheelScrolling: true, 
    })
}

SlidersSwipeSpecialists()


// запускаем слайде отзывов
const SlidersReviews = ((): void => {
    new SwipeSlider('.main__blockReviews_reviews', {
        wheelScrolling: true, 
     })
})()

// hover для блока main__info 
const mainInfo = (():void => {
    const blockElem: Element[] = Array.from(document.querySelectorAll(".main__info_block_elem"));
    blockElem.forEach (elem => {
        elem.addEventListener('mouseover', (event) => {
            const { target } = event;
            const border: Element[] = [...target.querySelectorAll(".main__info_block_elem_border")];
            const imgHover: Element = target.querySelector('.main__info_block_elem_img-border');
            const headingColor: Element = target.querySelector(".main__info_block_elem_he");
            border.forEach((value) => {
                value.style.display = "block";
            })
            if (!imgHover.classList.contains("dispalay-border")) imgHover.classList.add("dispalay-border");
            headingColor.style.color = "rgba(79, 143, 240, 1)";
            target.addEventListener('mouseout', () => {
                border.forEach((value) => {
                    value.style.display = "none";
                })
                if (imgHover.classList.contains("dispalay-border")) imgHover.classList.remove("dispalay-border");
                headingColor.style.color = "rgba(34, 34, 34, 1)";
            })
        })
    })
})()


// запускаем слайде пллезных материалов
const SlidersInfo = ((): void => {
    new SwipeSlider('.main__info_block', {
        wheelScrolling: true, 
     })
})()