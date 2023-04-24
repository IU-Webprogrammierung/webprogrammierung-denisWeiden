const menu = document.getElementById("menu");
const buttonOpen = document.getElementById("buttonOpen");
const buttonClose = document.getElementById("buttonClose");

// Open mobile menu on click //
buttonOpen.addEventListener("click", function () {
  // remove "hidden"-class
  menu.classList.remove("hidden");
});

// Close mobile menu on click //
buttonClose.addEventListener("click", function () {
  // add "hidden"-class
  menu.classList.add("hidden");
});