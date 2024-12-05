
function toggleNautilusHead() {
	nautilusVisible = !nautilusVisible;
	if (nautilusVisible) {
		nautilusHead.style.display = "block";
		nautilus.style.display = "none";
	} else {
		nautilusHead.style.display = "none";
		nautilus.style.display = "block";
	}
}


nautilusHead.addEventListener("click", () => {
	if (nautilusVisible) updateScore(5);
});


setInterval(() => {
	toggleNautilusHead(); // TODO : change spawn rate
}, 2000);