const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

// console.log(items);


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// let futureDate = new Date(2022, 4, 20, 11, 30, 0);
// console.log(futureDate);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 00);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
// console.log(month);
let date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${date} ${month}, ${weekday} ${year} at ${hours}:${minutes}am`;


const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const time = futureTime - today;

  // 1sec = 1000ms
  // 1m = 60sec
  // 1h = 60min
  // 1day = 24h

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = time / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((time % oneDay) / oneHour);
  // console.log(hours);

  let minutes = Math.floor((time % oneHour) / oneMinute);

  let seconds = Math.floor((time % oneMinute) / 1000);
  // console.log(seconds);

  const values =[days, hours, minutes, seconds];

  function format(item){
    if (item < 10) {
      return `0${item}`
    }
    return item
  }

  items.forEach(function(item, index) {
  item.innerHTML = format(values[index]);
});
  if (time < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, the giveaway has expired</h4>`;
  }
}
  let countdown = setInterval(getRemainingTime, 1000);

  getRemainingTime();
