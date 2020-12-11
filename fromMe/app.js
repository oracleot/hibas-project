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

  if (sectionName === "heizing") {
    menuPointer.style.left = 0;
  } else if (sectionName === "storm") {
    menuPointer.style.left = `${15 * 1}%`;
  } else if (sectionName === "mobilitat") {
    menuPointer.style.left = `${15 * 2}%`;
  }
  //   switch (sectionName) {
  //     case heizing:
  //       menuPointer.style.left = 0;
  //       break;
  //     case storm:
  //       menuPointer.style.left = `${15}%`;
  //       break;
  //     case "mobilitat":
  //       menuPointer.style.left = `${15 * 2}%`;
  //   }
}
let intro = document.getElementById("intro");
let mainApp = document.getElementById("main-app");
let reihenhaus = document.getElementById("reihenhaus");
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

reihenhaus.addEventListener("click", () => goToSection("heizing"));
heizingNextBtn.addEventListener("click", () => goToSection("storm"));
stormNextBtn.addEventListener("click", () => goToSection("mobilitat"));
stormPrevBtn.addEventListener("click", () => goToSection("heizing"));
mobilitatPrevBtn.addEventListener("click", () => goToSection("storm"));

startApp();
