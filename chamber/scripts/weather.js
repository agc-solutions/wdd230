const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://countryflagsapi.com/png/';
const city = 'Praia Grande';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';


const tempElement = document.querySelector('#tempt');
const humidityElement = document.querySelector('.humidity');
const weatherIconElement = document.querySelector('.prev-img');
const cityElement = document.querySelector('.location');
const descElement = document.querySelector('.prev-text');
const countryElement = document.querySelector('#country');
const windElement = document.querySelector('#wsp');
const windChillElement = document.querySelector('#wind_chill');



const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    // console.log(data);
    return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = `Temperature: ${parseInt(data.main.temp)}°C`;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute('src', apiCountryURL + data.sys.country);
    humidityElement.innerText = `Humidity: ${data.main.humidity}%`;
    windElement.innerText = `Wind Speed: ${data.wind.speed}km/h`;
    windChillElement.innerText = `Wind Speed2: ${windSpeed}mph | ${kmh}Km/h`;
}

    showWeatherData(city);


    const temperature = 'temp'; // Example temperature in Fahrenheit
    const windSpeed = 'wind'; // Example wind speed in mph
    const windChill = calculateWindChill(temperature, windSpeed);


    var windChillCelsius = (windChill - 32) * (5 / 9);
    windChillCelsius = Math.round(windChillCelsius * 100) / 100;
    windChillCelsius = windChillCelsius.toFixed(1);


    console.log("Wind Chill factor: " + windChillCelsius + "°C");

    // Update the HTML content with the wind chill factor
    document.getElementById("wind-chill").innerHTML = `Wind Chill: ${windChill}ºF | ${windChillCelsius}ºC`;

    var tempCels = (temperature - 32) * (5 / 9);
    document.getElementById("tempt2").innerHTML = `Temperature: ${temperature}ºF | ${tempCels}ºC`;

    var kmh = (windSpeed * 1.609);
    kmh = kmh.toFixed(0);

    document.getElementById("wsp").innerHTML = `Wind Speed: ${windSpeed}mph | ${kmh}Km/h`;



