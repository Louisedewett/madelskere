/*************** mere overskuelig tekst ***************/
const oenskebrevet = document.querySelector("#hotspotOenskebrevet");
const kategori = document.querySelector("#hotspotKategori");
const googlemaps = document.querySelector("#hotspotGooglemaps");
const overskrift = document.querySelector(".info-text > h2");
const placeholder = document.querySelector(".placeholder");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

/*************** hotspotOenskebrevet ***************/
document.querySelector("#hotspotOenskebrevet").addEventListener("mouseover", mouseOverhead);
document.querySelector("#hotspotOenskebrevet").addEventListener("mouseout", mouseOut);
document.querySelector("#hotspotOenskebrevet").addEventListener("click", clickHead);

function mouseOverhead() {
  console.log("mouseOverhead");
  document.querySelector("#hotspotOenskebrevet").style.fill = "red";
}

function mouseOut() {
  console.log("mouseOut");
  document.querySelector("#hotspotOenskebrevet").style.fill = "white";
}

function clickHead() {
  console.log("clickHead");
  overskrift.textContent = "ØNSKEBREVET";
  document.querySelector(".placeholder").textContent = "Tjek dit ønskebrev.dk ud! Her guides du igennem en nem og overskuelig måde at finde frem til hvor dine nære venner og familie mener er det bedste sted at tage hen og spise.  ";
  document.querySelector("#efficiency").innerHTML = `<p>Aktiver din Hangry Alarm og find ud af, hvor du skal spise - NU!</p>`;
  document.querySelector("#requirement").innerHTML = `<p>Alle forslag på siden kræver ingen stress - bare beslutningshjælp og redning på få sekunder</p>`;
}

/*************** hotspotKategori ***************/

document.querySelector("#hotspotKategori").addEventListener("mouseover", mouseOverkategori);
document.querySelector("#hotspotKategori").addEventListener("mouseout", mouseOutkategori);
document.querySelector("#hotspotKategori").addEventListener("click", clickHeadkategori);

function mouseOverkategori() {
  console.log("mouseOverkategori");
  document.querySelector("#hotspotKategori").style.fill = "red";
}

function mouseOutkategori() {
  console.log("mouseOutkategori");
  document.querySelector("#hotspotKategori").style.fill = "white";
}

function clickHeadkategori() {
  console.log("clickHeadkategori");
  overskrift.textContent = "AI-MADBOT";
  document.querySelector(".placeholder").textContent = "Tjek din AI-madbot ud! Så bliver det ikke nemmere. Du skriver ganske kort til AI: Find et sted hvor jeg kan spise en sund frokost til under 150 kr. i Rødovre. Flere forslag vil blive vist og dit personlige præg vil blive sat. ";
  document.querySelector("#efficiency").innerHTML = `<p>Aktiver din Hangry Alarm og find ud af, hvor du skal spise - NU!</p>`;
  document.querySelector("#requirement").innerHTML = `<p>Alle forslag på siden kræver ingen stress - bare beslutningshjælp og redning på få sekunder</p>`;
}

/*************** hotspotGooglemaps ***************/
document.querySelector("#hotspotGooglemaps").addEventListener("mouseover", mouseOvergooglemaps);
document.querySelector("#hotspotGooglemaps").addEventListener("mouseout", mouseOutgooglemaps);
document.querySelector("#hotspotGooglemaps").addEventListener("click", clickHeadgooglemaps);

function mouseOvergooglemaps() {
  console.log("mouseOvergooglemaps");
  document.querySelector("#hotspotGooglemaps").style.fill = "red";
}

function mouseOutgooglemaps() {
  console.log("mouseOutgooglemaps");
  document.querySelector("#hotspotGooglemaps").style.fill = "white";
}

function clickHeadgooglemaps() {
  console.log("clickHeadgooglemaps");
  overskrift.textContent = "GOOGLEMAPS RESTAURANTER";
  document.querySelector(".placeholder").textContent = "Tjek din googlemapsresturanter.dk ud! Her vises alle resturanter nær dig. Du kan derfor hurtigt finde et sted at spise uanset hvor du befinder dig. Her vises der billeder, anmeldelser og diverse åbningstider - alt samlet et sted til dig.  ";
  document.querySelector("#efficiency").innerHTML = `<p>Aktiver din Hangry Alarm og find ud af, hvor du skal spise - NU!</p>`;
  document.querySelector("#requirement").innerHTML = `<p>Alle forslag på siden kræver ingen stress - bare beslutningshjælp og redning på få sekunder</p>`;
}

/*************** funktion ***************/

document.querySelector("#efficiency").classList.add("fadeIn");

document.querySelector("#requirement").classList.add("rotate");
