const hambBtn = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");

function openAndClose() {
  menu.classList.toggle("open")
}

hambBtn.addEventListener("click", openAndClose)
