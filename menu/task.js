'use strict';

// Вывод активного окна
// let modalMain = document.getElementById('modal_main')
// let modalSuccess = document.getElementById('modal_success')
// modalMain.classList.add('modal_active');
//
// // Закрытие активных окон
// document.querySelector('div.modal a.btn_danger').onclick = function () {
//   modalMain.classList.remove('modal_active');
//   modalSuccess.classList.add('modal_active');
// };
//
// let arr = Array.from(document.querySelectorAll('div.modal__close_times'))
// function closePopup() {
//   arr.forEach((modal) => {
//     modal.onclick = function () {
//       modal.closest('div.modal').classList.remove('modal_active');
//     };
//   });
// };
//
// closePopup();

function click (){

}


//Регистрируем обработчики событий

let menuLink = Array.from(document.querySelectorAll(`.menu__link`))
for (let i = 0; i < menuLink.length; i++) {
    console.log(menuLink[i])
    menuLink[i].addEventListener("click", click)
}