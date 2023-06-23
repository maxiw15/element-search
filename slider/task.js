'use strict';
// Регистрация обработчиков клика
const arrowPrev = document.getElementsByClassName('slider__arrow slider__arrow_prev')[0];
const arrowNext = document.getElementsByClassName('slider__arrow_next')[0];
arrowPrev.addEventListener("click", clickPrev);
arrowNext.addEventListener("click", clickNext);

// Управление слайдером
let arr = Array.from(document.querySelectorAll(".slider__item"))
console.log(arr)
let active = 0

function clickNext () {
    arr[active].classList.remove('slider__item_active')
    active++
    if (active === arr.length) {active = 0}
    arr[active].classList.add('slider__item_active')
}
function clickPrev (){
    arr[active].classList.remove('slider__item_active')
    active--
    if (active === -1) {active=arr.length-1}
    arr[active].classList.add('slider__item_active')
}

