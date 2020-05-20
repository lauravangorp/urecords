let hamburgerIcon = document.querySelector("header div.hamburger");
let header = document.querySelector("header");

hamburgerIcon.addEventListener("click", function () {
	this.classList.toggle("actief");
	header.classList.toggle("uitgeklapt");
})

let popLink = document.querySelectorAll("nav a")[0];
let altLink = document.querySelectorAll("nav a")[1];
let mijnCSS = document.querySelector("#switchcss");

popLink.addEventListener("click", function () {
	mijnCSS.setAttribute("href","stijl-pop.css");
});

altLink.addEventListener("click", function () {
	mijnCSS.setAttribute("href","stijl-alt.css");
});
