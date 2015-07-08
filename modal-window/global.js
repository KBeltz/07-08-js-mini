
function overlay() {
	cb = document.getElementById("overlay");
	cb.style.visibility = (cb.style.visibility == "visible") ? "hidden" : "visible";

	main = document.getElementById("main");
	main.style.visibility = (main.style.visibility = "hidden");
}
