const houseTypes = document.getElementById('house-types');
const whatHouse = document.getElementById('what-house');
const apartmentCTA = document.getElementById('apartment');
const houseCTA = document.getElementById('house');
const flatCTA = document.getElementById('flat');
const heizing = document.getElementById('heizing');
const heizingBtn = document.getElementById('heizing_btn');
const storm = document.getElementById('storm');

houseTypes.style.display = 'none';
storm.style.display = 'none';

apartmentCTA.addEventListener('click', function () {
  houseTypes.style.display = 'block';
  whatHouse.style.display = 'none';
});

heizingBtn.addEventListener('click', function () {
  storm.style.display = 'block';
  heizing.style.display = 'none';
  whatHouse.style.display = 'none';
});
