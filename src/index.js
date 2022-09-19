let now = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
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

let hours = now.getHours();

if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();

let showDay = document.querySelector("#current-day-date-time");
showDay.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#star-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#feels-like-temp").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#sun-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#sun-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#mon-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#mon-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#tue-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#tue-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#wed-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#wed-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#thu-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#thu-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#fri-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#fri-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#sat-high-weekday").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#sat-low-weekday").innerHTML = Math.round(
    response.data.main.temp_min
  );
}

function searchCity(city) {
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentButton = document.querySelector("#press-two");
currentButton.addEventListener("click", getCurrentLocation);

let form = document.querySelector("#search-form-input");
form.addEventListener("submit", handleSubmit);

function fahrenheit(event) {
  event.preventDefault();
  let showFahrenheit = document.querySelector("#current-temp");
  showFahrenheit.innerHTML = 95;
}

function celsius(event) {
  event.preventDefault();
  let showCelsius = document.querySelector("#current-temp");
  showCelsius.innerHTML = 35;
}

let clickFahrenheit = document.querySelector("#fahrenheit-link");
clickFahrenheit.addEventListener("click", fahrenheit);

let clickCelsius = document.querySelector("#celsius-link");
clickCelsius.addEventListener("click", celsius);

function displayAustin(event) {
  event.preventDefault();
  let showAustin = document.querySelector("#star-city");
  showAustin.innerHTML = "Austin";
}
let clickAustin = document.querySelector("#city-austin");
clickAustin.addEventListener("click", displayAustin);

function lookUpAustin(event) {
  let city = "Austin";
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
clickAustin.addEventListener("click", lookUpAustin);

function displayDallas(event) {
  event.preventDefault();
  let showDallas = document.querySelector("#star-city");
  showDallas.innerHTML = "Dallas";
}
let clickDallas = document.querySelector("#city-dallas");
clickDallas.addEventListener("click", displayDallas);

function lookUpDallas(event) {
  let city = "Dallas";
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
clickDallas.addEventListener("click", lookUpDallas);

function displayElPaso(event) {
  event.preventDefault();
  let showElPaso = document.querySelector("#star-city");
  showElPaso.innerHTML = "El Paso";
}
let clickElPaso = document.querySelector("#city-elPaso");
clickElPaso.addEventListener("click", displayElPaso);

function lookUpElPaso(event) {
  let city = "El Paso";
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
clickElPaso.addEventListener("click", lookUpElPaso);

function displayHouston(event) {
  event.preventDefault();
  let showHouston = document.querySelector("#star-city");
  showHouston.innerHTML = "Houston";
}
let clickHouston = document.querySelector("#city-houston");
clickHouston.addEventListener("click", displayHouston);

function lookUpHouston(event) {
  let city = "Houston";
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
clickHouston.addEventListener("click", lookUpHouston);

function displaySanAntonio(event) {
  event.preventDefault();
  let showSanAntonio = document.querySelector("#star-city");
  showSanAntonio.innerHTML = "San Antonio";
}
let clickSanAntonio = document.querySelector("#city-sanAntonio");
clickSanAntonio.addEventListener("click", displaySanAntonio);

function lookUpSanAntonio(event) {
  let city = "San Antonio";
  let apiKey = "5a331e3747f0048a43103d5739a0a462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
clickSanAntonio.addEventListener("click", lookUpSanAntonio);

searchCity("Austin");
