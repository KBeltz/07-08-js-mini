// Get the DOM reference
var dropMenu = document.getElementById("drop_menu");
var navMenu = document.getElementById("nav_menu");

// Toggle
function toggleContent() {
  navMenu.addEventListener("animationstart", 'click', false);
  navMenu.addEventListener("animationend", 'click', false);
  navMenu.style.display == "block" ? navMenu.style.display = "none" : navMenu.style.display = "block";
}

drop_menu.onclick = toggleContent;

navMenu.className = "slidein";

//still need to implement a "slideout" keyframe
