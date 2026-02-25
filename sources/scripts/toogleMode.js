// Toogle between Light & dark modes

const DEBUG = true;

const btn = document.getElementById("btn-toogle");

function toogle() {
  document.body.classList.toggle("dark");
  if (DEBUG) {
    if (document.body.className) {
      console.log(`Body Classes: ${document.body.className}`);
    }
    else {
      console.log("Body Classes: [Light Mode]")
    }
  }
}

btn.addEventListener("click", toogle);

// Writed by > (b) RunCode < Made By: Bruno
