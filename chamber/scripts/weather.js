const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://countryflagsapi.com/png/';
const city = 'Praia Grande';
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24&lon=-46.42&appid=469b77d53d39523dbb94c8453b1bed1c';



const tempElement = document.querySelector('#tempt');
const humidityElement = document.querySelector('.humidity');
const weatherIconElement = document.querySelector('.prev-img');
const cityElement = document.querySelector('.location');
const descElement = document.querySelector('.prev-text');
const countryElement = document.querySelector('#country');
const windElement = document.querySelector('#wsp');
const windChillElement = document.querySelector('#wind-chill');
const temp2Element = document.querySelector('#tempt2');

const getWeatherData = async(city) => {
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`;
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    // console.log(data);
    return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    let tempCels = `${parseInt(data.main.temp)}°C`;
    var tempFar = `${parseInt((((data.main.temp) / 5) * 9)+32)}°F`;
    tempElement.innerText = `Temperature: ${tempCels} || ${tempFar}`;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute('src', apiCountryURL + data.sys.country);
    humidityElement.innerText = `Humidity: ${data.main.humidity}%`;

    let windSpeed = `${(data.wind.speed).toFixed(0)}`;
    // var kmh = (windSpeed * 1.609);
    // kmh = kmh.toFixed(0);
    var mph = (windSpeed / 1.609);
    mph = mph.toFixed(0);
    
    windElement.innerText = `Wind Speed: ${windSpeed}km/h | ${mph}mph`;
    
    //windChillElement.innerText = `Wind Chill Factor: ${parseInt(data.main.feels_like)}°F`;

    //windChillElement.innerText = `Wind Chill Factor2: ${windChill}°F`;
    
    //let temperature = `${data.main.temp}`;
    let temperature = `${(((data.main.temp / 5) * 9)+32)}`;
    
    function calculateWindChill (temperature, windSpeed) {
            var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
            windChill = Math.round(windChill * 100) / 100;
            windChill = windChill.toFixed(0);
            //console.log("Wind Chill factor: " + windChill + "°F");
            return windChill
        }
   
    const windChill = calculateWindChill(temperature, windSpeed);


    var windChillCelsius = (windChill - 32) * (5 / 9);
    windChillCelsius = Math.round(windChillCelsius * 100) / 100;
    windChillCelsius = windChillCelsius.toFixed(0);


    //console.log("Wind Chill factor: " + windChillCelsius + "°C");

    
    document.getElementById("wind-chill").innerHTML = `Wind Chill: ${windChillCelsius}ºC | ${windChill}ºF`;
    
}

    showWeatherData(city);

    