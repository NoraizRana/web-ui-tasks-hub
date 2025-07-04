const apiKey = "50a7b1dff0b4e202e3782a8cae357823";

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeather");
const locationBtn = document.getElementById("getLocationWeather");
const darkToggle = document.getElementById("darkModeToggle");
const weatherInfo = document.getElementById("weatherInfo");
const searchHistoryList = document.getElementById("searchHistory");

let history = [];

const fetchWeatherByCity = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(data => {
      document.body.style.backgroundImage = getWeatherBackground(data.weather[0].main);
      displayWeather(data);
      addToHistory(data.name);
    })
    .catch(err => {
      weatherInfo.innerHTML = `<p>${err.message}</p>`;
    });
};

const fetchWeatherByCoords = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Location error");
      return res.json();
    })
    .then(data => {
      document.body.style.backgroundImage = getWeatherBackground(data.weather[0].main);
      displayWeather(data);
      addToHistory(data.name);
    })
    .catch(err => {
      weatherInfo.innerHTML = `<p>${err.message}</p>`;
    });
};

const displayWeather = (data) => {
  const { name, main, weather } = data;
  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°C</p>
    <p>Condition: ${weather[0].main}</p>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon"/>
  `;
};

const addToHistory = (city) => {
  if (!history.includes(city)) {
    history.push(city);
    const item = document.createElement("li");
    item.textContent = city;
    item.onclick = () => fetchWeatherByCity(city);
    searchHistoryList.appendChild(item);
  }
};

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) fetchWeatherByCity(city);
});

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoords(latitude, longitude);
    }, () => alert("Unable to get your location."));
  } else {
    alert("Geolocation not supported.");
  }
});

darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", darkToggle.checked);
});

function getWeatherBackground(condition) {
  const conditions = {
    Clear: "url('https://source.unsplash.com/1600x900/?sunny,clear-sky')",
    Clouds: "url('https://source.unsplash.com/1600x900/?cloudy,sky')",
    Rain: "url('https://source.unsplash.com/1600x900/?rain')",
    Snow: "url('https://source.unsplash.com/1600x900/?snow')",
    Thunderstorm: "url('https://source.unsplash.com/1600x900/?thunderstorm')",
    Drizzle: "url('https://source.unsplash.com/1600x900/?drizzle')",
    Mist: "url('https://source.unsplash.com/1600x900/?mist,fog')"
  };
  return conditions[condition] || "url('https://source.unsplash.com/1600x900/?weather')";
}