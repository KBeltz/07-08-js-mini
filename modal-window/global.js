
function overlay() {
	cb = document.getElementById("overlay");
	cb.style.visibility = (cb.style.visibility == "visible") ? "hidden" : "visible";

	main = document.getElementById("main");
	main.style.visibility = (main.style.visibility = "hidden");
}

function close() {
	main = document.getElementById("main");
	main.style.visibility = (main.style.visibility == "visible") ? "hidden" : "visible";

	cb = document.getElementById("overlay");
	cb.style.visibility = (cb.style.visibility = "hidden");
}
