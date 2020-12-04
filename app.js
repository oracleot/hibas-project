const houseTypes = document.getElementById("house-types");
const whatHouse = document.getElementById("what-house");
const apartmentCTA = document.getElementById("apartment");
const houseCTA = document.getElementById("house");
const flatCTA = document.getElementById("flat");
const heizing = document.getElementById("heizing");
const heizingBtn = document.getElementById("heizing_btn");
const flugBtn = document.getElementById("flug_btn");
const ernährungBtn = document.getElementById("ernährung-btn");
const konsumBtn = document.getElementById("konsum-btn");
const stormBtn = document.getElementById("storm_btn");
const storm = document.getElementById("storm");
const mobiltat = document.getElementById("mobiltat");
const flug = document.getElementById("flug");
const ernährung = document.getElementById("ernährung");
const konsum = document.getElementById("konsum");
const heatingTab = document.querySelector(".menu-tab-0");
const stormgTab = document.querySelector(".menu-tab-1");
const mobilitatTab = document.querySelector(".menu-tab-2");
const flugenTab = document.querySelector(".menu-tab-3");

// const stormTab = document.querySelector(".menu-tab-1");
houseTypes.style.display = "none";
heizing.style.display = "none";
storm.style.display = "none";
mobiltat.style.display = "none";
flug.style.display = "none";
ernährung.style.display = "none";
konsum.style.display = "none";

apartmentCTA.addEventListener("click", function () {
  houseTypes.style.display = "block";
  whatHouse.style.display = "none";
  heizing.style.display = "block";
  heatingTab.style.color = "yellow";
});

heizingBtn.addEventListener("click", function () {
  storm.style.display = "block";
  heizing.style.display = "none";
  whatHouse.style.display = "none";
  heatingTab.style.color = "grey";
  stormgTab.style.color = "yellow";
});
stormBtn.addEventListener("click", function () {
  storm.style.display = "none";
  mobiltat.style.display = "block";
  whatHouse.style.display = "none";
  stormgTab.style.color = "grey";
  mobilitatTab.style.color = "yellow";
});
flugBtn.addEventListener("click", function () {
  storm.style.display = "none";
  mobiltat.style.display = "none";

  flug.style.display = "block";
});
ernährungBtn.addEventListener("click", function () {
  flug.style.display = "none";
  ernährung.style.display = "block";
});
konsumBtn.addEventListener("click", function () {
  ernährung.style.display = "none";
  konsum.style.display = "block";
});

function changePerHouse(value) {
  let person = 0;
  return person.push(value);
}
changePerHouse();
