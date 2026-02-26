// Toogle between Light & dark modes

const DEBUG = true;

const btn = document.getElementById("btn-toogle");
const btnText = document.getElementById("btn-span");
const bandImg = document.getElementById("tua-logo");

const moon = "dark_mode";
const sun = "light_mode";

function toogle() {
  document.body.classList.toggle("dark");
  if (DEBUG) {
    if (document.body.className) {
      console.log(`Body Classes: ${document.body.className}`);
      btnText.textContent = sun;
    }
    else {
      console.log("Body Classes: [Light Mode]")
      btnText.textContent = moon;
    }
  }
}

btn.addEventListener("click", toogle);

// when init, put moon icon
btnText.textContent = ""; // reset

setTimeout(() => {
  btnText.textContent = moon;
}, 0o100);

// Writed by > (b) RunCode < Made By: Bruno
