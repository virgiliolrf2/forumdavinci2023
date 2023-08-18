const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let timerInterval;
let startTime;
let running = false;

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = new Date(currentTime - startTime);
  timerElement.innerHTML = elapsedTime.toISOString().substr(11, 8);
}

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (running ? startTime : 0);
    timerInterval = setInterval(updateTimer, 1000);
    running = true;
  } else {
    clearInterval(timerInterval);
    running = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerElement.innerHTML = '00:00:00';
  running = false;
  startButton.textContent = 'Iniciar';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
