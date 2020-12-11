function startApp() {
  hideAllSection();
  toggleSection("intro", "block");
}

function hideAllSection() {
  toggleSection("intro", "none");
  toggleSection("main-app", "none");
  toggleSection("heizing", "none");
  toggleSection("storm", "none");
  toggleSection("mobilitat", "none");
  toggleSection("flugen", "none");
  toggleSection("nutration", "none");
  toggleSection("houses", "none");
  toggleSection("storjjfjdf", "none");
}
function toggleSection(id, displayOpt) {
  document.getElementById(id).style.display = displayOpt;
}
function goToSection(sectionName) {
  hideAllSection();
  toggleSection("main-app", "block");
  toggleSection(sectionName, "block");

  switch (sectionName) {
    case "heizing":
      menuPointer.style.left = 0;
      break;
    case "storm":
      menuPointer.style.left = `${15}%`;
      break;
    case "mobilitat":
      menuPointer.style.left = `${15 * 2}%`;
  }
}
let intro = document.getElementById("intro");
let mainApp = document.getElementById("main-app");
let reihenhaus = document.getElementById("reihenhaus");
let parahousReihouse = document.getElementById("hous-reihouse");
let einfamilienhaus = document.getElementById("einfamilienhaus");
let wohnung = document.getElementById("wohnung");
let heizing = document.getElementById("heizing");
let storm = document.getElementById("storm");
let mobilitat = document.getElementById("mobilitat");
let flugen = document.getElementById("flugen");
let nutration = document.getElementById("nutration");
let houses = document.getElementById("houses");
let storjjfjdf = document.getElementById("storjjfjdf");
let menuPointer = document.getElementById("pointer");
let heizingNextBtn = document.querySelector("#heizing-next-btn");
let stormNextBtn = document.querySelector("#storm-next-btn");
let flugenNextBtn = document.querySelector("#flugen-next-btn");
let nutrationNextBtn = document.querySelector("#nutration-next-btn");
let housesNextBtn = document.querySelector("#houses-next-btn");
let storjjfjdfNextBtn = document.querySelector("#storjjfjdf-next-btn");
let stormPrevBtn = document.querySelector("#storm-prev-btn");
let mobilitatPrevBtn = document.querySelector("#mobilitat-prev-btn");
let HouseTypeInput = document.querySelector("#houseType");
let numPerson = document.getElementById("numOfPer");
let stormPerson = document.getElementById("stor-per");
reihenhaus.addEventListener("click", () => goToSection("heizing"));
// wohnung.addEventListener("click", () => goToSection("heizing"));
// einfamilienhaus.addEventListener("click", () => goToSection("heizing"));
heizingNextBtn.addEventListener("click", () => goToSection("storm"));
stormNextBtn.addEventListener("click", () => goToSection("mobilitat"));
stormPrevBtn.addEventListener("click", () => goToSection("heizing"));
mobilitatPrevBtn.addEventListener("click", () => goToSection("storm"));
einfamilienhaus.addEventListener("click", function () {
  HouseTypeInput.innerText.value === parahousReihouse.innerText.value;
});
numPerson.onchange = function (e) {
  stormPerson.value = e.target.value;
};
numPerson.addEventListener("change", function (e) {
  stormPerson.value = e.target.value;
  console.log(e);
});
startApp();
