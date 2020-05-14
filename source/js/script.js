// кнопка открытия меню
let button = document.querySelector(".menu");
// контейнер меню
let menu = document.querySelector(".main-nav");
// шапка
let header = document.querySelector(".page-header")
// иконка открытия
let open = document.querySelector(".menu__open");
// иконка закрытия
let close = document.querySelector(".menu__close");


// прячем меню
button.classList.remove("menu__hidden")
menu.classList.add("main-nav__visually-hidden");
header.classList.add("page-header--background-js");

// открытие меню по нажатию
button.addEventListener("click", function(evt) {
evt.preventDefault();
menu.classList.toggle("main-nav__visually-hidden");
header.classList.toggle("page-header--background-js");
open.classList.toggle("menu__open--js");
close.classList.toggle("menu__close--js");
});


// форма
let form = document.querySelector(".form");

// кнопка отправки формы
let submit = document.querySelector(".form__button");

// ищем обязательные поля
// фамилия
let surname = document.querySelector(".surname-js");
// имя
let name = document.querySelector(".name-js");
// почта
let mail = document.querySelector(".mail-js");

// находим окно ошибки
let popupError = document.querySelector(".form__popup-container");
// кнопка ошибки
let errorButton = document.querySelector(".button-error-js");

// находим окно сабмита
let popupSubmit = document.querySelector(".form__popup-container-submit");
// кнопка сабмита
let submitButton = document.querySelector(".form__submit-button");


// удаляем атрибуты required
if (surname != null || name != null || mail != null) {
  surname.removeAttribute("required");
  name.removeAttribute("required");
  mail.removeAttribute("required");
}

// открываем окно ошибки, если не все поля заполнены, в противном случае окно подтверждения
form.addEventListener("submit", function(evt) {
  if (!surname.value || !name.value || !mail.value) {
      evt.preventDefault();
      popupError.classList.remove("form__not-visible");
      errorButton.focus();
      name.setAttribute("style", "border-color: red; border-width: 3px");
      surname.setAttribute("style", "border-color: red; border-width: 3px");
      mail.setAttribute("style", "border-color: red; border-width: 3px");
  } else {
      evt.preventDefault();
      popupSubmit.classList.remove("form__not-visible");
      submitButton.focus();
  }
});

// закрытие окна ошибки

errorButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.add("form__not-visible");
  surname.removeAttribute("style");
  name.removeAttribute("style");
  mail.removeAttribute("style");
});

// закрытие окна сабмита
submitButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSubmit.classList.add("form__not-visible");
});
