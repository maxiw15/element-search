let arr = []
function click() {
    const thisClosest = this.closest(".menu__item")
    if (thisClosest.querySelector(".menu__item")) {
        event.preventDefault();
        const menuSub = thisClosest.querySelector(".menu .menu_sub");
        menuSub.classList.toggle("menu_active");
        if (arr.length > 0 && arr[arr.length - 1] !== menuSub) {
            arr.pop().classList.remove("menu_active");
        }
        if (menuSub.classList.contains("menu_active")) {
            arr.push(menuSub);
        } else {
            arr.pop();
        }
    }
}

let menuLink = Array.from(document.querySelectorAll(".menu__link"))
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", click)
}
