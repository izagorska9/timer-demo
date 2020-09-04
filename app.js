//clock
const clockHandler = document.querySelector(".clockbtn");
const clockDiv = document.querySelector("div.clock");

clockActive = () => {

  if (stopwatchDiv.classList.contains('visible')) {
    stopwatchDiv.classList.remove('visible')
  } else if (countdownDiv.classList.contains('visible')) {
    countdownDiv.classList.remove('visible')
  }
  clockDiv.classList.toggle("visible");
  clearInterval(count)
};
clockHandler.addEventListener("click", clockActive);

const clock = () => {
  const time = new Date();
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

  document.querySelector(
    ".clock span"
  ).textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);

//stopwatch
const stopwatchHandler = document.querySelector(".stopwatchbtn");
const stopwatchDiv = document.querySelector("div.stopwatch");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const stopwatchSpan = document.querySelector("div.counter");
let time = 0;
let active = false;
let idI;

stopwatchActive = () => {
  if (clockDiv.classList.contains('visible')) {
    clockDiv.classList.remove('visible')
  } else if (countdownDiv.classList.contains('visible')) {
    countdownDiv.classList.remove('visible')
  }
  stopwatchDiv.classList.toggle("visible");
  clearInterval(count)

};

const timeCounter = () => {
  if (!active) {
    active = !active;
    startBtn.classList.toggle("ainvisible");
    stopBtn.classList.toggle("ainvisible");
    idI = setInterval(start, 10);
  }
};

const stopCounter = (e) => {
  e.preventDefault();

  active = !active;
  startBtn.classList.toggle("ainvisible");
  stopBtn.classList.toggle("ainvisible");
  clearInterval(idI);
};

const start = () => {
  time++;
  stopwatchSpan.textContent = (time / 100).toFixed(1);
};

const resetCounter = () => {
  time = 0;
  stopwatchSpan.textContent = `---`;
  active = false;
  if (startBtn.classList.contains("ainvisible")) {
    startBtn.classList.remove("ainvisible");
    stopBtn.classList.add("ainvisible");
  }
  //
  // stopBtn.classList.toggle("ainvisible");
  clearInterval(idI);
};

startBtn.addEventListener("click", timeCounter);
stopBtn.addEventListener("click", stopCounter);
resetBtn.addEventListener("click", resetCounter);
stopwatchHandler.addEventListener("click", stopwatchActive);

//countdown timer
const counterHandler = document.querySelector(".countdownbtn");
const countdownDiv = document.querySelector('.countdown')
const countdownNumberEl = document.getElementById('countdown-number');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('miliseconds');


countdownActive = () => {
  let countdown = 10;
  if (stopwatchDiv.classList.contains('visible')) {
    stopwatchDiv.classList.remove('visible')
  } else if (clockDiv.classList.contains('visible')) {
    clockDiv.classList.remove('visible')
  }
  countdownDiv.classList.toggle("visible");

  countdownNumberEl.textContent = countdown;

  count = setInterval(function () {
    countdown = --countdown <= 0 ? 10 : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);
};

counterHandler.addEventListener('click', countdownActive)