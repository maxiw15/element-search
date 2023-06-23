'use strict';
let arr = []
function click (){
        const thisClosest = this.closest('.menu__item')
        if (thisClosest.querySelector(".menu__item")){
        event.preventDefault();
        thisClosest.querySelector(".menu .menu_sub").classList.add("menu_active");
        if (arr.length > 0) {
            arr.pop().classList.remove("menu_active");
        }
        arr.push(thisClosest.querySelector(".menu .menu_sub"));
}
}
//Используя цикл зарегистрируйте обработчики события
// click на элементах с классом menu__link

let menuLink = Array.from(document.querySelectorAll(`.menu__link`))
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", click)
}

//Найдите меню рядом со ссылкой.
//Если оно есть, переключите у него класс menu_active