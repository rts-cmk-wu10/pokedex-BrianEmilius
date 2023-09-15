var overlay = document.querySelector(".overlay");
var closeBtn = overlay.querySelector(".closeBtn");

if (window.localStorage.getItem("isAccepted") == "true") {
	hideModal();
}

function hideModal() {
	overlay.style.display = "none";
	overlay.setAttribute("hidden", "true");
	overlay.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", function() {
	hideModal();
});

document.querySelector(".overlay").addEventListener("click", function(event) {
	if (event.target != overlay) return;
	hideModal();
});

window.addEventListener("keyup", function(event) {
	if (event.key != "Escape") return;
	hideModal();
});

overlay.querySelector(".acceptBtn").addEventListener("click", function() {
	window.localStorage.setItem("isAccepted", "true");
	hideModal();
});

overlay.querySelector(".declineBtn").addEventListener("click", function() {
	hideModal();
});
