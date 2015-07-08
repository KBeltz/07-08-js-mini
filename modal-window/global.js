var overlay = document.getElementById("overlay");
var main = document.getElementById("main");

// Function to show overlay window
function show() {
  overlay.getElementById("overlay").style.visibility = "visible";
	main.getElementById("main").style.visibility = "hidden";
}

// Function to add event listener
overlay.addEventListener("click", function(){show()}, false);
