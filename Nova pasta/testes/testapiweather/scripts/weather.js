const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apikey = '469b77d53d39523dbb94c8453b1bed1c';
const lat = '49.77082559908408';
const lon = '6.668742863709907';

const apiCountryURL2 = 'https://flagsapi.com/png/';
//const apiCountryURL2 = `https://flagsapi.com/:${data.sys.country}.png/`;

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    //console.log(data);
    return data
};
const showWeatherData = async(city) => {
    //getWeatherData(city);
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    //countryElement.setAttribute('src', apiCountryURL2 + data.sys.country);
    countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/flat/32.png/`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
};

//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityInput.value;

    showWeatherData(city);
})

cityInput.addEventListener('keyup', (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);
    }
})