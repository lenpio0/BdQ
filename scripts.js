
//Burger menu

let menuBtn = document.querySelector('#menu-btn');
let brgMenu = document.querySelector('#brg-menu');
let insMenu = document.querySelector('#inside-menu');
let sideBar = document.querySelector('#sidebar');

function openMenu() {
    brgMenu.classList.toggle('w-64');
    insMenu.classList.toggle('sticky');
    if (menuBtn.getAttribute('src') == 'burger-menu.svg') {
        menuBtn.setAttribute('src', 'close.svg')
    }
    else {
        menuBtn.setAttribute('src', 'burger-menu.svg')
    }
}

menuBtn.onclick = openMenu;

for (let i = 0; i < sideBar.children.length; i++) {

    sideBar.children[i].onclick = openMenu;

}



//Leaflet maps

let baumois = document.querySelector('#baumois');
let bisontins = document.querySelector('#bisontins');
let tireuse = document.querySelector('#tireuse');

function openBaumois() {
    baumois.children[1].classList.toggle('hidden');
    baumois.classList.toggle('max-h-16');
    baumois.classList.toggle('max-h-[1000px]');
    baumois.children[0].children[1].classList.toggle('bg-[url(plus.svg)]');
    baumois.children[0].children[1].classList.toggle('bg-[url(minus.svg)]');
    bisontins.children[1].classList.add('hidden');
    bisontins.classList.add('max-h-16');
    bisontins.classList.remove('max-h-[1000px]');
    bisontins.children[0].children[1].classList.add('bg-[url(plus.svg)]');
    bisontins.children[0].children[1].classList.remove('bg-[url(minus.svg)]');
    tireuse.children[1].classList.add('hidden');
    tireuse.classList.add('max-h-16');
    tireuse.classList.remove('max-h-[1000px]');
    tireuse.children[0].children[1].classList.add('bg-[url(plus.svg)]');
    tireuse.children[0].children[1].classList.remove('bg-[url(minus.svg)]');
}

function openBisontins() {
    bisontins.children[1].classList.toggle('hidden');
    bisontins.classList.toggle('max-h-16');
    bisontins.classList.toggle('max-h-[1000px]');
    bisontins.children[0].children[1].classList.toggle('bg-[url(plus.svg)]');
    bisontins.children[0].children[1].classList.toggle('bg-[url(minus.svg)]');
    baumois.children[1].classList.add('hidden');
    baumois.classList.add('max-h-16');
    baumois.classList.remove('max-h-[1000px]');
    baumois.children[0].children[1].classList.add('bg-[url(plus.svg)]');
    baumois.children[0].children[1].classList.remove('bg-[url(minus.svg)]');
    tireuse.children[1].classList.add('hidden');
    tireuse.classList.add('max-h-16');
    tireuse.classList.remove('max-h-[1000px]');
    tireuse.children[0].children[1].classList.add('bg-[url(plus.svg)]');
    tireuse.children[0].children[1].classList.remove('bg-[url(minus.svg)]');
}

function openTireuse() {
    tireuse.children[1].classList.toggle('hidden');
    tireuse.classList.toggle('max-h-16');
    tireuse.classList.toggle('max-h-[1000px]');
    tireuse.children[0].children[1].classList.toggle('bg-[url(plus.svg)]');
    tireuse.children[0].children[1].classList.toggle('bg-[url(minus.svg)]');
    baumois.children[1].classList.add('hidden');
    baumois.classList.add('max-h-16');
    baumois.classList.remove('max-h-[1000px]');
    baumois.children[0].children[1].classList.add('bg-[url(plus.svg)]');
    baumois.children[0].children[1].classList.remove('bg-[url(minus.svg)]');
    bisontins.children[1].classList.add('hidden');
    bisontins.classList.add('max-h-16');
    bisontins.classList.remove('max-h-[1000px]');
    bisontins.children[0].children[1].classList.add('bg-[url(plus.svg)]');
    bisontins.children[0].children[1].classList.remove('bg-[url(minus.svg)]');
}

baumois.children[0].onclick = openBaumois;
bisontins.children[0].onclick = openBisontins;
tireuse.children[0].onclick = openTireuse;


var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });


var mapContact = L.map('map-contact').setView([47.3466, 6.3477], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapContact);

var markerContact = L.marker([47.3465300 ,6.3442570]).addTo(mapContact);
markerContact.bindPopup("13 Ter Rue des Vignottes");



  var mapVente = L.map('map-vente').setView([47.45 ,6.15], 9);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapVente);


var markerMactom = L.marker([47.3524039 ,6.3554165], {icon: greenIcon}, {zIndexOffset: 1000}).addTo(mapVente);
markerMactom.bindPopup("MacTom");
var markerChateau = L.marker([47.2910353 ,6.2392109], {icon: greenIcon}).addTo(mapVente);
markerChateau.bindPopup("Auberge du château de Vaîte");
var markerAuberge = L.marker([47.3909641 ,6.4903244], {icon: greenIcon}).addTo(mapVente);
markerAuberge.bindPopup("À la bonne Auberge");


var markerSaveur = L.marker([47.3525499 ,6.3539161], {icon: yellowIcon}).addTo(mapVente);
markerSaveur.bindPopup("Marché aux Saveurs");
var markerInter = L.marker([47.3475547 ,6.3363675], {icon: yellowIcon}).addTo(mapVente);
markerInter.bindPopup("Intermarché");
var markerU = L.marker([47.3462073,6.3603871], {icon: yellowIcon}).addTo(mapVente);
markerU.bindPopup("Super U");
var markerGamm = L.marker([47.347201,6.3490055], {icon: yellowIcon}).addTo(mapVente);
markerGamm.bindPopup("Gamm Vert");
var markerCaps= L.marker([47.3512158,6.3583144], {icon: yellowIcon}).addTo(mapVente);
markerCaps.bindPopup("Capsule et Bouchon");
var markerBio = L.marker([47.2398905,6.0255278], {icon: yellowIcon}).addTo(mapVente);
markerBio.bindPopup("Biocoop");
var markerEtc = L.marker([47.2391211,6.023497], {icon: yellowIcon}).addTo(mapVente);
markerEtc.bindPopup("Bières & Caetera");
var markerEau = L.marker([47.2168773,5.9440196], {icon: yellowIcon}).addTo(mapVente);
markerEau.bindPopup("L'Eau Vive");
var markerLacs = L.marker([47.5093228,6.3546781], {icon: yellowIcon}).addTo(mapVente);
markerLacs.bindPopup("Cabanes des Grands Lacs");
var markers = [];


let saveur = document.querySelector('#saveur');
function flyToSaveur() {
    mapVente.flyTo([47.3525499 ,6.3539161], 13);
    markerSaveur.openPopup();
}
saveur.onclick = flyToSaveur;

let inter = document.querySelector('#inter');
function flyToInter() {
    mapVente.flyTo([47.3475547 ,6.3363675], 13);
    markerInter.openPopup();
}
inter.onclick = flyToInter;

let superu = document.querySelector('#superu');
function flyToU() {
    mapVente.flyTo([47.3462073,6.3603871], 13);
    markerU.openPopup();
}
superu.onclick = flyToU;

let gamm = document.querySelector('#gamm');
function flyToGamm() {
    mapVente.flyTo([47.347201,6.3490055], 13);
    markerGamm.openPopup();
}
gamm.onclick = flyToGamm;

let caps = document.querySelector('#caps');
function flyToCaps() {
    mapVente.flyTo([47.3512158,6.3583144], 13);
    markerCaps.openPopup();
}
caps.onclick = flyToCaps;

let bio = document.querySelector('#biocoop');
function flyToBio() {
    mapVente.flyTo([47.2398905,6.0255278], 13);
    markerBio.openPopup();
}
bio.onclick = flyToBio;

let etc = document.querySelector('#etc');
function flyToEtc() {
    mapVente.flyTo([47.2391211,6.023497], 13);
    markerEtc.openPopup();
}
etc.onclick = flyToEtc;

let eau = document.querySelector('#eau');
function flyToEau() {
    mapVente.flyTo([47.2168773,5.9440196], 13);
    markerEau.openPopup();
}
eau.onclick = flyToEau;

let cabane = document.querySelector('#cabane');
function flyToCabane() {
    mapVente.flyTo([47.5093228,6.3546781], 13);
    markerLacs.openPopup();
}
cabane.onclick = flyToCabane;

let mactom = document.querySelector('#mactom');
function flyToMactom() {
    mapVente.flyTo([47.3524039 ,6.3554165], 13);
    markerMactom.openPopup();
}
mactom.onclick = flyToMactom;

let chateau = document.querySelector('#chateau');
function flyToChateau() {
    mapVente.flyTo([47.2910353 ,6.2392109], 13);
    markerChateau.openPopup();
}
chateau.onclick = flyToChateau;

let auberge = document.querySelector('#auberge');
function flyToAuberge() {
    mapVente.flyTo([47.3909641 ,6.4903244], 13);
    markerAuberge.openPopup();
}
auberge.onclick = flyToAuberge;



//Back to top button

let backTop = document.querySelector('#back-top');

function backAppear() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backTop.classList.remove('hidden');
      } else {
        backTop.classList.add('hidden');
      }
}
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

backTop.onclick = backToTop;
window.onscroll = backAppear;



//Active section in menu

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 300;
      if (scrollY >= sectionTop ) {
        current = '#' + section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("text-[#f69033]");
      truc = li.firstChild.getAttribute('href');
      if (li.firstChild.getAttribute('href') == current) {
        li.classList.add("text-[#f69033]");
      }
    });
  };


  
//AOS cancel once done

document.addEventListener('aos:in:aos-done', function() {
    setTimeout( function() {
        tireuse.removeAttribute('data-aos');
        baumois.removeAttribute('data-aos');
        bisontins.removeAttribute('data-aos');
    }, 2200);
  });

