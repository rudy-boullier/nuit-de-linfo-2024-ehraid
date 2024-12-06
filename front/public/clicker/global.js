let score = 0;
let pipeVisible = false;
const brokenPipe = document.getElementById("broken-pipe");
const pipe = document.getElementById("pipe");
const fishContainer = document.getElementById("fish-container");
const upgradedContainer = document.getElementById("upgraded-container");
const upgradeButtons = document.querySelectorAll(".buy");
let incPoints = 1;


// Aniamtion de l'upgrade
document.querySelectorAll('#upgraded-container .floating img').forEach(img => {
	const randomDelay = Math.random() * 4; // Génère un délai aléatoire entre 0 et 2 secondes
	img.style.animationDelay = `${randomDelay}s`;
});



function addPoints() {
	score += incPoints;
	addFishs(incPoints);
}

function removePoints() {
	if (score >= incPoints) {
		score -= incPoints;
		removeFishs(incPoints);
	}
}

function updateScore(points) {
	score += points;
	spawnFish(incPoints);
}

function back() {
	window.location.href = "/";
}


addEventListener("scroll", (event) => {
	event.preventDefault();
});
document.addEventListener('keydown', function (e) {
	if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
		e.preventDefault();
	}
});



document.addEventListener('gesturestart', function (e) {
	e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
	e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
	e.preventDefault();
});
