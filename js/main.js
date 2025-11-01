/*************** hotspotOenskebrevet ***************/

document
  .querySelector("#hotspotOenskebrevet")
  .addEventListener("mouseover", mouseOverhead);
document
  .querySelector("#hotspotOenskebrevet")
  .addEventListener("mouseout", mouseOut);
document
  .querySelector("#hotspotOenskebrevet")
  .addEventListener("click", clickHead);

function mouseOverhead() {
  console.log("mouseOverhead");
  document.querySelector("#hotspotOenskebrevet").style.fill = "red";
}

function mouseOut() {
  console.log("mouseOut");
  document.querySelector("#hotspotOenskebrevet").style.fill = "yellow";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "Madbrevet";
  document.querySelector(".placeholder").textContent = "Hallo";
  document.querySelector("#efficiency").innerHTML = `<h3>Louise</h3>
  <p>Bla Bla Bla</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Louise</h3>
  <p>Bla Bla Bla</p>`;
}

/*************** hotspotKategori ***************/

document
  .querySelector("#hotspotKategori")
  .addEventListener("mouseover", mouseOverhead);
document
  .querySelector("#hotspotKategori")
  .addEventListener("mouseout", mouseOut);
document.querySelector("#hotspotKategori").addEventListener("click", clickHead);

function mouseOverhead() {
  console.log("mouseOverhead");
  document.querySelector("#hotspotKategori").style.fill = "red";
}

function mouseOut() {
  console.log("mouseOut");
  document.querySelector("#hotspotKategori").style.fill = "yellow";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "Madbrevet";
  document.querySelector(".placeholder").textContent = "Hallo";
  document.querySelector("#efficiency").innerHTML = `<h3>Louise</h3>
  <p>Bla Bla Bla</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Louise</h3>
  <p>Bla Bla Bla</p>`;
}

/*************** hotspotGooglemaps ***************/
document
  .querySelector("#hotspotGooglemaps")
  .addEventListener("mouseover", mouseOverhead);
document
  .querySelector("#hotspotGooglemaps")
  .addEventListener("mouseout", mouseOut);
document
  .querySelector("#hotspotGooglemaps")
  .addEventListener("click", clickHead);

function mouseOverhead() {
  console.log("mouseOverhead");
  document.querySelector("#hotspotGooglemaps").style.fill = "red";
}

function mouseOut() {
  console.log("mouseOut");
  document.querySelector("#hotspotGooglemaps").style.fill = "yellow";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "Madbrevet";
  document.querySelector(".placeholder").textContent = "Hallo";
  document.querySelector("#efficiency").innerHTML = `<h3>Louise</h3>
  <p>Bla Bla Bla</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Louise</h3>
  <p>Bla Bla Bla</p>`;
}
