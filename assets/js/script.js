let loading = document.querySelector(".loading");
let clock = document.querySelector(".clock");
let pClock = document.querySelector(".pClock");
let pLoading = document.querySelector(".pLoading");

// Functions
function loadingEnds() {
	loading.style.display = "none";
	clock.style.display = "flex";
}

function updatingLoading() {
	let seconds = new Date().getSeconds();

	if (seconds % 2 === 0) {
		pLoading.innerHTML = "Loading..";
	} else if (seconds % 3 === 0) {
		pLoading.innerHTML = "Loading...";
	} else {
		pLoading.innerHTML = "Loading.";
	}
}

function updatingClock() {
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	pClock.innerHTML = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Timeout and Interval
setInterval(updatingLoading, 1000);
setInterval(updatingClock, 1000);
setTimeout(loadingEnds, 4000);
