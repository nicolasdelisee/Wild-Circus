const hamburger = document.querySelector(".hamburger");
const offscreenMenu = document.querySelector(".offscreen-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   offscreenMenu.classList.toggle("active");
});