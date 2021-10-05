const newYear = '1 Jan 2022';

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');



function countDown () {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}


function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}
countDown();
setInterval(countDown, 1000)
