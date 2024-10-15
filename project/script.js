// script.js
let clockInterval;
let isRunning = false;

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-GB', { hour12: false });
    const date = now.toLocaleDateString('en-GB');
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

function startClock() {
    if (!isRunning) {
        clockInterval = setInterval(updateClock, 1000);
        isRunning = true;
        updateClock(); // Update immediately when starting
    }
}

function stopClock() {
    if (isRunning) {
        clearInterval(clockInterval);
        isRunning = false;
    }
}

document.getElementById('start').addEventListener('click', startClock);
document.getElementById('stop').addEventListener('click', stopClock);

// Initial update to avoid empty
