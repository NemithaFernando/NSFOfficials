// JavaScript Documen
var nav_links = document.getElementById("nav_links");
function showMenu(){
	nav_links.style.right = "0px";
}

function hideMenu(){
	nav_links.style.right = "-300px";
}

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
