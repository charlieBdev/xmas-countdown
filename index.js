// Task:
// - Get today's date (you only need the day). ✅
// - Calculate remaining days. ✅
// - Display remaining days in countdownDisplay. ✅

// Stretch goals:
// - Display hours, minutes, seconds. ✅
// - Add a countdown for another festival, your birthday, or Christmas 2022.

const countdownDisplay = document.getElementById('countdown-display');
const countdownDisplayExtra = document.getElementById(
	'countdown-display-extra'
);

const targetDate = new Date('December 25, 2023 00:00:00').getTime();

function pad(input) {
	return input.toString().padStart(2, '0');
}

function renderCountdown() {
	const currentDate = new Date();

	const timeDifference = targetDate - currentDate.getTime();

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	if (timeDifference < 0) {
		clearInterval(countdownInterval);
		countdownDisplay.innerText = 'Merry Christmas';
		countdownDisplayExtra.innerText = 'Whoop!';
	} else {
		countdownDisplay.innerText = `${pad(days)}`;
		countdownDisplayExtra.innerText = `${pad(hours)} hours, ${pad(
			minutes
		)} minutes, and ${pad(seconds)} seconds`;
	}
}

const countdownInterval = setInterval(renderCountdown, 1000);
