var overlay = document.getElementById("overlay");
var main = document.getElementById("main");
var bomb = document.getElementById("bomb");
var exit = document.getElementById("exit");

bomb.onclick = show;
exit.onclick = close;

// Function to show overlay window
function show() {
  overlay.style.visibility = "visible";
	main.style.visibility = "hidden";
}

function close() {
	overlay.style.visibility = "hidden";
	main.style.visibility = "visible";
}
