let loading = document.querySelector(".loading");
let clock = document.querySelector(".clock");
let pClock = document.querySelector(".pClock");
let pLoading = document.querySelector(".pLoading");
loading.style.display = "flex";
clock.style.display = "none";
pLoading.innerHTML = "Loading."; // this will run immediately

// Functions
function initialLoading() {
	pLoading.innerHTML = "Loading.."; // this will run after 0.5 seconds
	setTimeout(() => {
		pLoading.innerHTML = "Loading..."; // this will run after 1 second
	}, 500);
}

if (loading.style.display == "flex") {
	function updatingLoading() {
		pLoading.innerHTML = "Loading."; // this will run after 1.5 seconds
		setTimeout(() => {
			pLoading.innerHTML = "Loading.."; // this will run after 2 seconds
			setTimeout(() => {
				pLoading.innerHTML = "Loading..."; //this will run after 2.5 seconds
			}, 500);
		}, 500);
	}
}

function loadingEnds() {
	loading.style.display = "none";
	clock.style.display = "flex";
}

function updatingClock() {
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	pClock.innerHTML = `${String(hours).padStart(2, "0")}:${String(
		minutes
	).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Timeout and Interval
setTimeout(initialLoading, 500);
setInterval(updatingLoading, 1500);
setInterval(updatingClock, 1000);
setTimeout(loadingEnds, 100000);
