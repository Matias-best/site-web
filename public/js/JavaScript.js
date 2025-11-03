let darkmode = localStorage.getItem('darkmode')
const Switch = document.getElementById('switch')

const enableDarkmode = () => {
	document.body.classList.add('darkmode')
	localStorage.setItem('darkmode', 'active')
	console.log("darkMode");
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
	console.log("light mode");
}

if(darkmode === "active") enableDarkmode();


Switch.addEventListener("click",()=>{
	console.log("frkf,ekr fekf ")
	localStorage.getItem('darkmode') !=='active' ? enableDarkmode() : disableDarkmode()
})
