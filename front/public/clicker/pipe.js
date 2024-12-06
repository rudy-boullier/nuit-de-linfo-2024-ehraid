
function toggleBrokenPipe() {
	pipeVisible = !pipeVisible;
	if (pipeVisible) {
		brokenPipe.style.display = "block";
		pipe.style.display = "none";
	} else {
		brokenPipe.style.display = "none";
		pipe.style.display = "block";
	}
}


setInterval(() => {
	toggleBrokenPipe(); // TODO : change spawn rate
}, 2000);