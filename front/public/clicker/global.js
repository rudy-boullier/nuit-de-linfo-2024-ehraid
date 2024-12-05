let score = 0;
let nautilusVisible = false;
const nautilusHead = document.getElementById("nautilus-head");
const nautilus = document.getElementById("nautilus");
const fishContainer = document.getElementById("fish-container");
const upgradedContainer = document.getElementById("upgraded-container");
const upgradeButtons = document.querySelectorAll(".buy");





function updateScore(points) {
	score += points;
	// console.log(score);
}




setInterval(() => {
	if (score <= 1000000) {
		spawnFish();
	}
}, 1);


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
