let menuBtn = document.querySelector('#menu-btn');
let brgMenu = document.querySelector('#brg-menu');
let insMenu = document.querySelector('#inside-menu');
let sideBar = document.querySelector('#sidebar');

function openMenu() {
    brgMenu.classList.toggle('w-64');
    insMenu.classList.toggle('sticky');
}

menuBtn.onclick = openMenu;

for (let i = 0; i < sideBar.children.length; i++) {

    sideBar.children[i].onclick = openMenu;

}



let baumois = document.querySelector('#baumois');
let bisontins = document.querySelector('#bisontins');

function openBaumois() {
    baumois.children[1].classList.toggle('hidden');
    baumois.classList.toggle('max-h-16');
    baumois.classList.toggle('max-h-[1000px]');
    bisontins.children[1].classList.add('hidden');
    bisontins.classList.add('max-h-16');
    bisontins.classList.remove('max-h-[1000px]');
    if (baumois.children[0].children[1].textContent == '＋') {
        baumois.children[0].children[1].textContent = '−';
    } else {
        baumois.children[0].children[1].textContent = '＋'
    };
    if (bisontins.children[0].children[1].textContent == '−') {
        bisontins.children[0].children[1].textContent = '＋';
    }
}
function openBisontins() {
    bisontins.children[1].classList.toggle('hidden');
    bisontins.classList.toggle('max-h-16');
    bisontins.classList.toggle('max-h-[1000px]');
    baumois.children[1].classList.add('hidden');
    baumois.classList.add('max-h-16');
    baumois.classList.remove('max-h-[1000px]');
    if (bisontins.children[0].children[1].textContent == '＋') {
        bisontins.children[0].children[1].textContent = '−';
    } else {
        bisontins.children[0].children[1].textContent = '＋'
    };
    if (baumois.children[0].children[1].textContent == '−') {
        baumois.children[0].children[1].textContent = '＋';
    }
}

baumois.children[0].onclick = openBaumois;
bisontins.children[0].onclick = openBisontins;



var mapContact = L.map('map-contact').setView([47.3466, 6.3477], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapContact);

var markerContact = L.marker([47.3465300 ,6.3442570]).addTo(mapContact);
markerContact.bindPopup("13 Ter Rue des Vignottes");



var mapTireuse = L.map('map-tireuse').setView([47.45 ,6.35], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapTireuse);

var markerMactom = L.marker([47.3524039 ,6.3554165]).addTo(mapTireuse);
markerMactom.bindPopup("MacTom");
var markerChateau = L.marker([47.2910353 ,6.2392109]).addTo(mapTireuse);
markerChateau.bindPopup("Auberge du château de Vaîte");
var markerAuberge = L.marker([47.3909641 ,6.4903244]).addTo(mapTireuse);
markerAuberge.bindPopup("À la bonne Auberge");

var mapVente = L.map('map-vente').setView([47.45 ,6.15], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapVente);

var markerSaveur = L.marker([47.3525499 ,6.3539161]).addTo(mapVente);
markerSaveur.bindPopup("Marché aux Saveurs");
var markerInter = L.marker([47.3475547 ,6.3363675]).addTo(mapVente);
markerInter.bindPopup("Intermarché");
var markerU = L.marker([47.3462073,6.3603871]).addTo(mapVente);
markerU.bindPopup("Super U");
var markerGamm = L.marker([47.347201,6.3490055]).addTo(mapVente);
markerGamm.bindPopup("Gamm Vert");
var markerCaps= L.marker([47.3512158,6.3583144]).addTo(mapVente);
markerCaps.bindPopup("Capsule et Bouchon");
var markerBio = L.marker([47.2398905,6.0255278]).addTo(mapVente);
markerBio.bindPopup("Biocoop");
var markerEtc = L.marker([47.2391211,6.023497]).addTo(mapVente);
markerEtc.bindPopup("Bières & Caetera");
var markerEau = L.marker([47.2168773,5.9440196]).addTo(mapVente);
markerEau.bindPopup("L'Eau Vive");
var markerLacs = L.marker([47.5093228,6.3546781]).addTo(mapVente);
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
    mapTireuse.flyTo([47.3524039 ,6.3554165], 13);
    markerMactom.openPopup();
}
mactom.onclick = flyToMactom;

let chateau = document.querySelector('#chateau');
function flyToChateau() {
    mapTireuse.flyTo([47.2910353 ,6.2392109], 13);
    markerChateau.openPopup();
}
chateau.onclick = flyToChateau;

let auberge = document.querySelector('#auberge');
function flyToAuberge() {
    mapTireuse.flyTo([47.3909641 ,6.4903244], 13);
    markerAuberge.openPopup();
}
auberge.onclick = flyToAuberge;