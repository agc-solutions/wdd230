// const apikey = '469b77d53d39523dbb94c8453b1bed1c';
// const apiCountryURL = 'https://flagsapi.com/png/';

// //const city = 'itanhaém';
// const lat = -24.007525439495208;
// const lon = -46.42287161033189;


// const weatherElement = document.querySelector('#weather-data');
// const tempElement = document.querySelector('#temperature span');
// //const cityElement = document.querySelector('#city');
// const cards = document.querySelector('#forecast');





// const getWeatherData = async(city) => {
//     const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    
//     const res = await fetch(apiWeatherURL);
//     const data = await res.json();
//     console.log(data);
//     //return data
// }

// const newCity = document.querySelector('#city');
// //newCity.innerText = data[1].name;
// newCity.innerText = "santos";

// const showWeatherData = async(city) => {
//     //getWeatherData(city);
//     const data = await getWeatherData(city);

//     let card = document.createElement('div');
    
//     cityElement.innerText = data[1].name;
    
// }
    

//     showWeatherData(data);



const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://countryflagsapi.com/png/';
const city = 'praia grande';
// const lat = -24.007525439495208;
// const lon = -46.42287161033189;
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';

const weatherElement = document.querySelector('#weather-data');
const tempElement = document.querySelector('#temperature span');
const cityElement = document.querySelector('#city');
const cards = document.querySelector('#forecast');

const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const ntemptElement = document.querySelector('#ntemperature');


const getWeatherData = async(city) => {
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=santos&units=metric&appid=469b77d53d39523dbb94c8453b1bed1c&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    // console.log(data);
    return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    //cityElement.innerText = data.name;
    //temp1Element.innerText = parseInt(data.list[0].main.temp);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.list[0].main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/flat/32.png/`);
    ntemptElement.innerText = data.list[1].main.temp;
}

    showWeatherData(city);