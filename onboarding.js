var onboardingOverlay = document.querySelector(".onboardingOverlay");
var nextBtn = onboardingOverlay.querySelector(".nextBtn");
var skipBtn = onboardingOverlay.querySelector(".skipBtn");
var content = onboardingOverlay.querySelector(".content");

function step(tooltipText, xCoord, yCoord) {
	var container = document.createElement("div");
	container.className = "tooltip container";

	var svg = `
<svg viewbox="0 0 400 150">
  <circle
          cx="75"
          cy="75"
          r="70"
          stroke="lightblue"
          stroke-width="6"
          fill="transparent" />
  <line
        x1="145"
        y1="75"
        x2="400"
        y2="75"
        stroke="lightblue"
        stroke-width="6" />
</svg>`;

	var p = document.createElement("p");

	p.innerText = tooltipText;
	p.className = "tooltip text";

	container.innerHTML = svg;

	container.append(p);
	content.appendChild(container);

	var circle = container.querySelector("svg circle");
	var line = container.querySelector("svg line");

	circle.classList.add("myCircle");
	line.classList.add("myLine");

	container.style.top = yCoord;
	container.style.left = xCoord;

	window.localStorage.setItem("currentStep", 
		parseInt(window.localStorage.getItem("currentStep") || 0) + 1
	);
}

if (window.localStorage.getItem("onboardingCompleted") != "true") {
	step("Click here to view a single pokemon", "90px", "200px");
} else {
	onboardingOverlay.remove();
}

nextBtn.addEventListener("click", function() {
	var currentStep = window.localStorage.getItem("currentStep");
	removeContent();

	if (currentStep == "1") {
		step("Søg efter et pokemon-navn her", "100px", "110px");
	}

	if (currentStep == "2") {
		step("Brug next og previous til at bladre mellem siderne", "80px", "480px");
	}

	if (currentStep == "3") {
		window.localStorage.setItem("onboardingCompleted", "true");
		onboardingOverlay.remove();
	}
});

skipBtn.addEventListener("click", function() {
	window.localStorage.setItem("onboardingCompleted", "true");
	onboardingOverlay.remove();
});

function removeContent() {
	content.removeChild(content.children[0]);
}
