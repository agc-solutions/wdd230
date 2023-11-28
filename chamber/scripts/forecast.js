// //const cards = document.querySelector('#forecast');
// const ourl = 'https://api.openweathermap.org/data/2.5/weather?lat=-24&lon=-46.42&appid=469b77d53d39523dbb94c8453b1bed1c';

// //const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
// //forecastElement.innerText = `Oi: ${data.main[1].temp}`;
// //document.getElementById('forecast').innerText = `Oi: ${data.main[1].temp}`;
// //const forecastElement = document.querySelector('#forecast');
// const cards = document.querySelector('#forecast');
// const tmp = document.querySelector('#temperature');
// const fc = document.querySelector('#tst');
// const city = 'Praia Grande';

// const getForecastData = async(city) => {
//     const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
//     const response = await fetch(apiForecastURL);
//     const data = await response.json();
//     //console.log(data);
//     return data
// }

// const showForecastData = async(city) => {
//     const data = await getForecastData (city);
//     // let card = document.createElement('section');
//     // let tmptrMx = document.createElement('p');
//     // //tmptrMx.textContent = `Max ${main.temp_max}`;
//     // let ico = document.createElement('img');
//     // ico.setAttribute('src', list.icon);
//     // let tmptrMn = document.createElement('p');
//     // tmptrMn.textContent = `Min ${list[1].temp_min}`;

//     const tmp = `Max: ${data.main.temp_max}`;

//     fc.innerText = data.weather[0].description;

//     // card.appendChild(tmptrMx);

//     // cards.appendChild(card);

// }
//   showForecastData(city);


        


// //const getforecastData = async(city) => {
//     //     //const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}`;
//     //     const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
//     //     const data = await apiForecastURL.json();
//     //     // console.log(data);
//     //     return data
//     // }
//     // https://api.openweathermap.org/data/2.5/forecast?q=praia grande&appid=469b77d53d39523dbb94c8453b1bed1c
//     // const showForecastData = async(city) => {
//     //     const data = await getforecastData(city);
//     //     forecastElement.innerText = data.main[1].temp;
//     //     //oneDay.innerText = data.main[1].temp;
//     //     twoDays.innerText = data.main[2].temp;
//     //     threeDays.innerText = data.main[3].temp;
    
//     // }
//     //     showForecastData(city);
    


//const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://flagsapi.com/png/';
//const city = 'praia grande';
// const lat = -24.007525439495208;
// const lon = -46.42287161033189;
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';


// const tempElement = document.querySelector('#temperature span');
// const descElement = document.querySelector('#description');
// const weatherIconElement = document.querySelector('#weather-icon');
// const cityElement = document.querySelector('#city');
// const countryElement = document.querySelector('#country');
const hoyElement = document.querySelector('#hoy');

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


const getForecastData  = async(city) => {
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;

    const res = await fetch(apiForecastURL);
    const data = await res.json();
    // console.log(data);
    return data
}
const showForecastData = async(city) => {
    const data = await getForecastData(city);
    //cityElement.innerText = data.name;
    //cityElement.innerText = data.city.name;
    
    const hj = 1700805600;

    const dt1 = data.list[4].dt;
    var day1 = new Date(dt1*1000);

    // const dt2 = data.list[12].dt;
    // //console.log(dt2);
    // var day2 = new Date(dt2*1000);

    const dt3 = data.list[20].dt;
    var day3 = new Date(dt3*1000);

    //const dt = data.list[0].dt;    
    //var day0 = new Date(dt*1000);

    //hoyElement.innerHTML = day0.toDateString();
    pday1Element.innerText = day1.toDateString();
    // pday2Element.innerText = day2.toDateString();
    //pday3Element.innerText = day3.toDateString();

    //hoyElement.innerText = data.list[0].dt;
    //pday1Element.innerText = data.list[1].dt;
    pday2Element.innerText = data.list[12].dt;
    pday3Element.innerText = data.list[20].dt;

    //tempElement.innerText = parseInt(data.main.temp);
    //tempElement.innerText = parseInt(data.list[0].main.temp);
    temp1Element.innerText = `hoje:${parseInt(data.list[4].main.temp)}°C`;
    temp2Element.innerText = parseInt(data.list[12].main.temp);
    temp3Element.innerText = parseInt(data.list[20].main.temp);

    //descElement.innerText = data.weather[0].description;
    //weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    //descElement.innerText = data.list[0].weather[0].description;    
    //weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
    //countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/flat/32.png/`);

    desc1Element.innerText = data.list[4].weather[0].description;
    weather1IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);
    desc2Element.innerText = data.list[12].weather[0].description;
    weather2IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);
    desc3Element.innerText = data.list[20].weather[0].description;
    weather3IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);
}

    showWeatherData(city);