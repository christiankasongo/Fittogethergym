// loader
let spinnerWrapper = document.querySelector('.spinner-wrapper');

   window.addEventListener('load', function () {
       // spinnerWrapper.style.display = 'none';
       spinnerWrapper.parentElement.removeChild(spinnerWrapper);
   });

//function expression to select elements
const selectElement = (s) => document.querySelector(s);

// open menu when clicked
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');

});

// close menu when clicked
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');

});

// change nav colour when scrolling down
const header = document.getElementsByTagName("header")[0];
document.addEventListener("scroll", function() {
    let y = window.innerHeight * 0.1;

    if (window.scrollY >= y) {
        header.classList.add("solid");
    } else {
        header.classList.remove("solid");
    }
});

// maps
if(document.URL.includes("contact.html")){
   initMap();
 }

 function initMap(){
 let lat = 51.138380;
 let long = 4.452470;
 let zoom= 22;

let map = L.map("map", {scrollwheelZoom: false}).setView([lat, long], zoom);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KwxRP4iIJgsunXHm8Prt', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.138380, 4.452470]).addTo(map)
    .bindPopup('Antwerpsesteenweg 84, Sint Niklaas.')
    .openPopup();
  }
