const menu = document.getElementById("menu");
const buttonOpen = document.getElementById("buttonOpen");
const buttonClose = document.getElementById("buttonClose");

buttonOpen.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

buttonClose.addEventListener("click", function () {
  menu.classList.add("hidden");
});