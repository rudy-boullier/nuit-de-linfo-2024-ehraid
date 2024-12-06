
const upgradesDiv = {
	"boat": [],
	"pipe": [],
};

const typeUpgrade = {
	"boat_small": "img/boat_little.png",
	"boat_mid": "img/boat_midle.png",
	"boat_big": "img/boat_big.png",
	"factory_small": "img/factory_small.png",
	"factory_mid": "img/factory_midle.png",
	"factory_big": "img/factory_big.png",
	"waste": "img/waste.png",
	"waste_nuk": "img/waste_nuk.png",
};
const coastUpgrade = {
	"boat_small": 300,
	"boat_mid": 1000,
	"boat_big": 3000,
	"factory_small": 400,
	"factory_mid": 60,
	"factory_big": 500,
	"waste": 75,
	"waste_nuk": 1000,
};
const nbrFishToAddForUpgrade = {
	"boat_small": 10,
	"boat_mid": 25,
	"boat_big": 60,
	"factory_small": 30,
	"factory_mid": 60,
	"factory_big": 500,
	"waste": 75,
	"waste_nuk": 1000,
};

const delayEffectUpgrade = {
	"boat_small": 1000,
	"boat_mid": 1000,
	"boat_big": 1000,
	"factory_small": 1000,
	"factory_mid": 1000,
	"factory_big": 2000,
	"waste": 1000,
	"waste_nuk": 3000,
};


function doubleConfirmationBuyUpgrade() {
	const confirmUpgrade = confirm("Êtes-vous sûr d'acheter cette amélioration ?");
	if (confirmUpgrade && confirm("Confirmez encore une fois !")) {
		return true;
	}
	return false;
}



/**
 * 
 * @param {*} elem l'élément sur lequel on a cliqué de l'upgrade
 */
function buyUpgradeIfPossible(elem) {
	const upgradeEffectType = elem.getAttribute("data-effect-type");
	const upgradeCost = coastUpgrade[upgradeEffectType];
	const upgradeEffectDelay = delayEffectUpgrade[upgradeEffectType];
	const srcImg = typeUpgrade[upgradeEffectType];
	const nbrFishToAdd = nbrFishToAddForUpgrade[upgradeEffectType];

	if (score >= upgradeCost || true) { // TODO : enlever le true
		if (doubleConfirmationBuyUpgrade()) {
			for (let child of elem.children) {
				child.disabled = true;
			}

			alert("Amélioration achetée !");
			updateScore(-upgradeCost);


			const upgradeDiv = document.createElement("img");
			//TODO : place en fonciton du type d'upgrade
			upgradeDiv.className = "upgraded";
			upgradeDiv.src = srcImg;
			setInterval(() => { // effet de l'upgrade
				for (let i = 0; i < nbrFishToAdd; i++) {
					spawnFish();
				}
			}, upgradeEffectDelay);
			upgradesDiv[upgradeEffectType].push(upgradeDiv);
			upgradedContainer.appendChild(upgradeDiv);
		}
	} else {
	}
}


upgradeButtons.forEach((button) => {
	elementP = button.parentElement;
	const upgradeEffectType = elementP.getAttribute("data-effect-type");
	const upgradeCost = coastUpgrade[upgradeEffectType];
	const upgradeEffectDelay = delayEffectUpgrade[upgradeEffectType];
	const nbrFishToAdd = nbrFishToAddForUpgrade[upgradeEffectType];

	elementP.querySelector("span").textContent = `${upgradeEffectType} ${upgradeCost}🐠 pour +${nbrFishToAdd} 🐠 en ${upgradeEffectDelay / 1000}s`;
	button.addEventListener("click", () => {
		buyUpgradeIfPossible(button.parentElement);
	});
});