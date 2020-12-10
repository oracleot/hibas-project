function startApp() {
  hideAllSections();
  toggleElDisplay('intro', 'block');
}

function hideAllSections() {
  toggleElDisplay('intro', 'none');
  toggleElDisplay('main-app', 'none');
  toggleElDisplay('heizing', 'none');
  toggleElDisplay('strom', 'none');
  toggleElDisplay('mobilitat', 'none');
}

function toggleElDisplay(id, displayOpt) {
  document.getElementById(id).style.display = displayOpt;
}

// function showHeizingSection() {
//   hideAllSections();
//   toggleElDisplay('main-app', 'block');
//   toggleElDisplay('heizing', 'block');
// }
//
// function showStromSection(i) {
//   hideAllSections();
//   toggleElDisplay('main-app', 'block');
//   toggleElDisplay('strom', 'block');
//
//   menuPointer.style.left = `${13.8 * 1}%`;
// }
//
// function showMobilitatSection() {
//   hideAllSections();
//   toggleElDisplay('main-app', 'block');
//   toggleElDisplay('mobilitat', 'block');
//
//   menuPointer.style.left = `${13.8 * 2}%`;
// }

// DRY - Don't Repeat Yourself!

function gotoSection(sectionName) {
  hideAllSections();
  toggleElDisplay('main-app', 'block');
  toggleElDisplay(sectionName, 'block');

  if (sectionName === 'heizing') {
    menuPointer.style.left = 0;
  } else if (sectionName === 'strom') {
    menuPointer.style.left = `${13.8 * 1}%`;
  } else if (sectionName === 'mobilitat') {
    menuPointer.style.left = `${13.8 * 2}%`;
  }

  // TODO: Use Switch
}

startApp();

let reihenhaus = document.querySelector('#reihenhaus');
let einfamilienhaus = document.querySelector('#einfamilienhaus');
let wohnung = document.querySelector('#wohnung');
let heizingNextBtn = document.querySelector('#heizing-next-btn');
let stromNextBtn = document.querySelector('#strom-next-btn');
let mobilitatPrevBtn = document.querySelector('#mobilitat-prev-btn');
let menuPointer = document.querySelector('#pointer');

reihenhaus.addEventListener('click', () => gotoSection('heizing'));
wohnung.addEventListener('click', () => gotoSection('heizing'));
einfamilienhaus.addEventListener('click', () => gotoSection('heizing'));
heizingNextBtn.addEventListener('click', () => gotoSection('strom'));
stromNextBtn.addEventListener('click', () => gotoSection('mobilitat'));
mobilitatPrevBtn.addEventListener('click', () => gotoSection('strom'));
