// const html = document.querySelector("html");
// const btn = document.querySelector("#toggle");

// if (localStorage.getItem("darkmode")) {
//   html.classList.add("dark");
//   btn.textContent = "Light";
// }

// function toggleTheme() {
//   html.classList.toggle("dark");

//   if (html.classList.contains("dark")) {
//     btn.textContent = "Light";
//     localStorage.setItem("darkmode", "true");
//   } else {
//     btn.textContent = "Dark";
//     localStorage.setItem("darkmode", "false");
//   }
// }

// btn.addEventListener("click", toggleTheme);

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

if (localStorage.getItem("lightmode") == "true") {
  html.classList.add("light");
  btn.textContent = "Light";
}

function toggleTheme() {
  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    btn.textContent = "Light";
    localStorage.setItem("lightmode", "true");
  } else {
    btn.textContent = "Dark";
    localStorage.setItem("lightmode", "false");
  }
}

btn.addEventListener("click", toggleTheme);
