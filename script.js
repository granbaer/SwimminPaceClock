function updateClock() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondDegrees = ((seconds / 60) * 360) + 90; // Offset by 90 degrees to start from 12 o'clock
	const blueDegrees = secondDegrees + 90; // 15 seconds ahead
	const yellowDegrees = secondDegrees + 180; // 30 seconds ahead
	const greenDegrees = secondDegrees + 270; // 45 seconds ahead

	document.getElementById('second-hand').style.transform = `rotate(${secondDegrees}deg)`;
	document.getElementById('blue-hand').style.transform = `rotate(${blueDegrees}deg)`;
	document.getElementById('yellow-hand').style.transform = `rotate(${yellowDegrees}deg)`;
	document.getElementById('green-hand').style.transform = `rotate(${greenDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock display
updateClock();