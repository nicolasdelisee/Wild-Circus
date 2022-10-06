console.log("Hello circus");

const hamburger = document.querySelector(".hamburger");
const offscreenMenu = document.querySelector(".offscreen-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   offscreenMenu.classList.toggle("active");
});

function offscreenMenuOff() {
   document.querySelector(".offscreen-menu").style.display = "none";
}