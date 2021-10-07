const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const url =(city) =>
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78753ac2829720b600f59b287f686674`;

 async function getWeather(city) {
   const response = await fetch(url(city), {
     origin: "cors" });
     const respData = await response.json();
    //  console.log(respData, KToC(respData.main.temp));

      addWeatherToPage(respData);
  }


function addWeatherToPage(data) {
  const temp = KToC(data.main.temp);

  const weather = document.createElement('div');
  weather.classList.add('weather');

  weather.innerHTML = `
  <h2>${temp}°C</h2>
  <p>in ${search.value}</p>
  <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />`;


    main.innerHTML = '';
    main.appendChild(weather);
}


function KToC(K) {
  return Math.round(K - 273.15);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const city = search.value;
  if(city) {
    getWeather(city);
  }
});
