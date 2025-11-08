let darkmode = localStorage.getItem('darkmode');
const Switch = document.getElementById('switch');
const but =document.getElementById('but');

const enableDarkmode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === "active") enableDarkmode();


Switch.addEventListener("click",()=>{
	localStorage.getItem('darkmode') !=='active' ? enableDarkmode() : disableDarkmode();
})

but.addEventListener("click", toggleNavMenu);
//menu 

function toggleNavMenu() {
	 const navMenu = document.querySelector('.menu');
	 navMenu.classList.toggle('active');
}
// Script pour ajouter le référencement local 
// Définition des données locales
const localSEO = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Département Informatique - IUT d'Aix-en-Provence",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenue Gaston Berger",
    "addressLocality": "Aix-en-Provence",
    "postalCode": "13625",
    "addressCountry": "FR"
  },
  "url": "https://iut.univ-amu.fr/",
  "telephone": "+33 4 42 93 90 00"
};
// Création du script JSON-LD
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(localSEO);

// Ajout dans le <head> du document
document.head.appendChild(script);