const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://countryflagsapi.com/png/';
const city = 'Praia Grande';
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24&lon=-46.42&appid=469b77d53d39523dbb94c8453b1bed1c';



const tempElement = document.querySelector('#tempt span');
const humidityElement = document.querySelector('.humidity span');
const todayElement = document.querySelector('#hoje')
const weatherIconElement = document.querySelector('.prev-img');
const cityElement = document.querySelector('.location');
const descElement = document.querySelector('.prev-text');
const countryElement = document.querySelector('#country');
const windElement = document.querySelector('#wsp span');
const windChillElement = document.querySelector('#wind-chill');
//const temp2Element = document.querySelector('#tempt2');

//******************FORECAST*******************

const day1Element = document.querySelector('#day1');
const day2Element = document.querySelector('#day2');
const day3Element = document.querySelector('#day3');

const pday1Element = document.querySelector('#pday1');
const pday2Element = document.querySelector('#pday2');
const pday3Element = document.querySelector('#pday3');

const temp1Element = document.querySelector('#temp1 span');             
const temp2Element = document.querySelector('#temp2 span');
const temp3Element = document.querySelector('#temp3 span');

const desc1Element = document.querySelector('#description1');
const weather1IconElement = document.querySelector('#weather-icon1');
const desc2Element = document.querySelector('#description2');
const weather2IconElement = document.querySelector('#weather-icon2');
const desc3Element = document.querySelector('#description3');
const weather3IconElement = document.querySelector('#weather-icon3');

//^^^^^^^^^^^^^^^^^^FORECAST^^^^^^^^^^^^^^^^^^


const getWeatherData = async(city) => {
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;
    
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    // console.log(data);
    return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    //cityElement.innerText = data.name;
    cityElement.innerText = data.city.name;

    todayElement.innerText =  (new Date((data.list[0].dt)*1000)).toDateString();
    //let tempCels = `${parseInt(data.main.temp)}°C`;
    let tempCels = `${parseInt(data.list[0].main.temp)}°C`;
    //var tempFar = `${parseInt((((data.main.temp) / 5) * 9)+32)}°F`;
    var tempFar = `${parseInt((((data.list[0].main.temp) / 5) * 9)+32)}°F`;
    tempElement.innerText = ` Temperature: ${tempCels} || ${tempFar}`;
    //descElement.innerText = data.weather[0].description;
    descElement.innerText = data.list[0].weather[0].description;
    //weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
    //countryElement.setAttribute('src', apiCountryURL + data.sys.country);
    countryElement.setAttribute('src', apiCountryURL + data.city.country);
    //humidityElement.innerText = `Humidity: ${data.main.humidity}%`;
    humidityElement.innerText = ` Humidity: ${data.list[0].main.humidity}%`;

    //let windSpeed = `${(data.wind.speed).toFixed(0)}`;
    let windSpeed = `${(data.list[0].wind.speed).toFixed(0)}`;
    // var kmh = (windSpeed * 1.609);
    // kmh = kmh.toFixed(0);
    var mph = (windSpeed / 1.609);
    mph = mph.toFixed(0);
    
    windElement.innerText = ` Wind Speed: ${windSpeed}km/h | ${mph}mph`;
    
    //windChillElement.innerText = `Wind Chill Factor: ${parseInt(data.main.feels_like)}°F`;

    //windChillElement.innerText = `Wind Chill Factor2: ${windChill}°F`;
    
    //let temperature = `${data.main.temp}`;
    //let temperature = `${(((data.main.temp / 5) * 9)+32)}`;
    let temperature = `${(((data.list[0].main.temp / 5) * 9)+32)}`;
    
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
    

//******************FORECAST*******************

    const dt1 = data.list[4].dt;
    var day1 = new Date(dt1*1000);

    const dt2 = data.list[12].dt;
    var day2 = new Date(dt2 * 1000);

    const dt3 = data.list[20].dt;
    var day3 = new Date(dt3 * 1000);

    const options = {
        weekday: "short",
        //year: "numeric",
        //month: "long",
        //day: "numeric"
    };

    //const semana = new Intl.DateTimeFormat("en-US", options).format(day1);
    const semana = new Intl.DateTimeFormat("en-US", options);

    //pday1Element.innerText = day1.toDateString();
    //pday1Element.innerText = day1.toLocaleString("pt-BR", optinos);
    pday1Element.innerText = semana.format(day1);
    pday2Element.innerText = semana.format(day2);
    pday3Element.innerText = semana.format(day3);

    
    //pday1Element.innerText = data.list[1].dt;
    //pday2Element.innerText = data.list[2].dt;
    //pday3Element.innerText = data.list[20].dt;

    temp1Element.innerText = parseInt(data.list[4].main.temp);
    temp2Element.innerText = parseInt(data.list[12].main.temp);
    temp3Element.innerText = parseInt(data.list[20].main.temp);

    desc1Element.innerText = data.list[4].weather[0].description;
    weather1IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);

    desc2Element.innerText = data.list[12].weather[0].description;
    weather2IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);

    desc3Element.innerText = data.list[20].weather[0].description;
    weather3IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);





}

    showWeatherData(city);

    