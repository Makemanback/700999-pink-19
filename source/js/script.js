// кнопка открытия меню
let button = document.querySelector(".menu");
// контейнер меню
let menu = document.querySelector(".main-nav");
// шапка
let header = document.querySelector(".page-header")
// иконка открытия
let open = document.querySelector(".menu--open");
// иконка закрытия
let close = document.querySelector(".menu--close");

// прячем меню
menu.classList.add("main-nav__visually-hidden");
header.classList.add("page-header--background-js");

// открытие меню по нажатию
button.addEventListener("click", function(evt) {
evt.preventDefault();
menu.classList.toggle("main-nav__visually-hidden");
header.classList.toggle("page-header--background-js");
open.classList.toggle("menu--open-js");
close.classList.toggle("menu--close-js");
});
