let darkmode = localStorage.getItem('darkmode'); // recupère le mode sombre s'il est activé
const Switch = document.getElementById('switch'); // bouton pour activer ou désactiver le mode sombre
const but =document.getElementById('but'); // bouton pour le menu

const enableDarkmode = () => { // fonction pour activer le mode sombre
	document.body.classList.add('darkmode'); // ajoute la classe darkmode au body
	localStorage.setItem('darkmode', 'active'); // stocke le mode sombre dans le localStorage
}

const disableDarkmode = () => { // fonction pour désactiver le mode sombre
    document.body.classList.remove('darkmode'); // retire la classe darkmode du body
    localStorage.setItem('darkmode', null); // supprime le mode sombre du localStorage
}

if(darkmode === "active") enableDarkmode(); // si le mode sombre est activé, on l'active


Switch.addEventListener("click",()=>{ //  événement pour le bouton switch
	localStorage.getItem('darkmode') !=='active' ? enableDarkmode() : disableDarkmode(); // active ou désactive le mode sombre en fonction de son état actuel
})

but.addEventListener("click", toggleNavMenu); // événement pour le bouton du menu
//menu 

function toggleNavMenu() { // fonction pour afficher ou masquer le menu
	 const navMenu = document.querySelector('.menu'); // sélectionne le menu
	 navMenu.classList.toggle('active'); // ajoute ou retire la classe active au menu
}
