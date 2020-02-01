let navBtn = document.getElementById("navBtn");
let clsBtn = document.getElementById("clsBtn");
let menu = document.querySelector(".nav-menu");
const mediaQ = window.matchMedia( "(min-width: 53em)");
const mediaQLarger = window.matchMedia("(min-width: 45em)");

navBtn.addEventListener("click", function () {
  if (mediaQ.matches) {
    menu.style.width = "25%";
    navBtn.style.display = "none";
  } else if (mediaQLarger.matches) {
    menu.style.width = "35%";
    navBtn.style.display = "none";
  } else {
    menu.style.width = "55%";
    navBtn.style.display = "none";
  }
});

clsBtn.addEventListener("click", function() {
  menu.style.width = "0";
  setTimeout(() => {
    navBtn.style.display = "block";
  }, 203);
});