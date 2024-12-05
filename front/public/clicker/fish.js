let fishs = ['P1.png', 'P2.png', 'P3.png', 'P4.png', 'P5.png'];

function spawnFish() {
	let fish = getFish();
	fish.style.top = `${Math.random() * 78 + 20}%`; // pas max 100% sinon on ne voit pas le poisson
	fish.style.left = `${Math.random() * 98}%`;
	fishContainer.appendChild(fish);

	fish.addEventListener('click', (e) => {
		fish.remove();
		console.log('click');
		//updateScore(1);
	});
	updateScore(1); // ajoute 1
}

function getFish() {
	let hitbox = document.createElement('div');
	hitbox.style.position = 'absolute';
	hitbox.style.width = `${Math.random() * 30 + 30}px`;
	hitbox.style.height = 'auto';
	hitbox.style.zIndex = 1000;
	hitbox.id = 'fish-' + score;

	let randomFish = Math.floor(Math.random() * fishs.length);
	let fish = document.createElement('img');
	fish.style.width = '100%';
	fish.src = 'img/' + fishs[randomFish];

	hitbox.appendChild(fish);

	return hitbox;
}
