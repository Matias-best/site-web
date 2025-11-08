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
