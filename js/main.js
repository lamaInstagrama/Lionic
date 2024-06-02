document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  }
  )
});

// Закрыть меню при клике вне его
document.getElementById("header__nav").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("btn-burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
  });
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open")
});
