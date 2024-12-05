
const upgradesDiv = {
	"boat": [],
	"pipe": [],
};

const typeUpgrade = {
	"boat": "img/boat.png",
	"pipe": "img/pipe.png",
};
const effectUpgrade = {
	"boat": 10,
	"pipe": 50,
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
	const upgradeCost = parseInt(elem.getAttribute("data-cost"), 10);
	const upgradeEffectType = parseInt(elem.getAttribute("data-effect-type"), 10);
	const upgradeEffectDelay = parseInt(elem.getAttribute("data-effect-delay"), 1000);

	if (score >= upgradeCost) {
		if (doubleConfirmationBuyUpgrade()) {
			//TODO : self delete
			button.disabled = true;
			alert("Amélioration achetée !");
			updateScore(-upgradeCost);


			const upgradeDiv = document.createElement("img");
			//TODO : place en fonciton du type d'upgrade
			upgradeDiv.className = "upgraded";
			upgradeDiv.src = typeUpgrade[upgradeEffectType];
			setInterval(() => { // effet de l'upgrade
				for (let i = 0; i < effectUpgrade[upgradeEffectType]; i++) {
					spawnFish();
				}
			}, upgradeEffectDelay);
			upgradesDiv[upgradeEffectType].push(upgradeDiv);
			upgradedContainer.appendChild(upgradeDiv);
		}
	} else {
		//TODO : afficher le prix de l'upgrade
		alert("Vous n'avez pas assez d'argent pour acheter cette amélioration !" + score + " " + upgradeCost);
	}
}


upgradeButtons.forEach((button) => {
	button.addEventListener("click", () => {
		buyUpgradeIfPossible(button.parentElement);
	});
});