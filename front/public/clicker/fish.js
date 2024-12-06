let fishs = ['P1.png', 'P2.png', 'P3.png', 'P4.png', 'P5.png'];

function addFishs(amount) {
	for (let i = 0; i < amount; i++) {
		spawnFish();
	}
}

function removeFishs(amount) {
	let fishs = document.querySelectorAll('.fish');
	for (let i = 0; i < amount; i++) {
		if (fishs[i]) {
			fishs[i].remove();
		}
	}
}

////////////////////////////////////////

function createFish() {
	let fish = document.createElement('img');
	fish.src = 'img/' + fishs[Math.floor(Math.random() * fishs.length)];
	return fish;
}

function spawnFish() {
	let fish = createFish();

	fish.style.width = `${Math.random() * 30 + 30}px`;
	fish.style.height = 'auto';
	fish.style.position = 'absolute';
	fish.style.zIndex = 1000;
	fish.id = 'fish-' + score;

	fish.style.top = `${Math.random() * 78 + 20}%`; // pas max 100% sinon on ne voit pas le poisson
	fish.style.left = `${Math.random() * 98}%`;


	fish.addEventListener('click', (e) => {
		fish.remove();
		score -= 1;
	});

	fishContainer.appendChild(fish);
}


//TODO : activé spawnFish
// setInterval(() => {
// 	if (score <= 1000000) {
// 		spawnFish();
// 	}
// }, 1);
