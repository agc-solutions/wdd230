const apikey = '469b77d53d39523dbb94c8453b1bed1c';
const apiCountryURL = 'https://flagsapi.com/';
const city = 'cozumel';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';


const tempElement = document.querySelector('#temperature span');
const tempMxElement = document.querySelector('#tempMx span');
const tempMnElement = document.querySelector('#tempMn span');

const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const cityElement = document.querySelector('#city');
const countryElement = document.querySelector('#country');
const hoyElement = document.querySelector('#hoy');

const day1Element = document.querySelector('#day1');
const pday1Element = document.querySelector('#pday1');
const temp1Element = document.querySelector('#temp1 span');
const desc1Element = document.querySelector('#description1');
const weather1IconElement = document.querySelector('#weather-icon1');

const day2Element = document.querySelector('#day2');
const pday2Element = document.querySelector('#pday2');
const temp2Element = document.querySelector('#temp2 span');
const desc2Element = document.querySelector('#description2');
const weather2IconElement = document.querySelector('#weather-icon2');

const day3Element = document.querySelector('#day3');
const pday3Element = document.querySelector('#pday3');
const temp3Element = document.querySelector('#temp3 span');
const desc3Element = document.querySelector('#description3');
const weather3IconElement = document.querySelector('#weather-icon3');

const day4Element = document.querySelector('#day4');
const pday4Element = document.querySelector('#pday4');
const temp4Element = document.querySelector('#temp4 span');
const desc4Element = document.querySelector('#description4');
const weather4IconElement = document.querySelector('#weather-icon4');

const day5Element = document.querySelector('#day5');
const pday5Element = document.querySelector('#pday5');
const temp5Element = document.querySelector('#temp5 span');
const desc5Element = document.querySelector('#description5');
const weather5IconElement = document.querySelector('#weather-icon5');



const getWeatherData = async(city) => {
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    //cityElement.innerText = data.name;
    cityElement.innerText = data.city.name;
    
    
    const dt = data.list[0].dt;    
    var day0 = new Date(dt*1000);
    hoyElement.innerText = day0.toDateString();

    const dt1 = data.list[4].dt;
    var day1 = new Date(dt1*1000);

    const dt2 = data.list[12].dt;
    var day2 = new Date(dt2*1000);
    
    const dt3 = data.list[20].dt;
    var day3 = new Date(dt3*1000);

    const dt4 = data.list[29].dt;
    var day4 = new Date(dt4*1000);

    const dt5 = data.list[37].dt;
    var day5 = new Date(dt5*1000);

    const options = {
        weekday: "short"
        //year: "numeric",
        //month: "long",
        //day: "numeric"
    };

    const week = new Intl.DateTimeFormat("en-US", options);
   
    
    
    tempElement.innerText = parseInt(data.list[0].main.temp);
    tempMxElement.innerText = `Max: ${parseInt(data.list[0].main.temp_max)}`;
    tempMnElement.innerText = `Min: ${parseInt(data.list[0].main.temp_min)}`;
    
    humidityElement.innerText = ` Humidity: ${data.list[0].main.humidity}%`;
    let windSpeed = `${(data.list[0].wind.speed).toFixed(0)}`;
    windElement.innerText = ` Wind Speed: ${windSpeed}km/h`;    

    
    descElement.innerText = data.list[0].weather[0].description;    
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
    countryElement.setAttribute('src', `https://flagsapi.com/${data.city.country}/flat/32.png/`);

    //pday1Element.innerText = day1.toDateString();
    pday1Element.innerText = week.format(day1);
    temp1Element.innerText = parseInt(data.list[4].main.temp);    
    desc1Element.innerText = data.list[4].weather[0].description;
    weather1IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);
    
    //pday2Element.innerText = day2.toDateString();
    pday2Element.innerText = week.format(day2);
    temp2Element.innerText = parseInt(data.list[12].main.temp);
    desc2Element.innerText = data.list[12].weather[0].description;
    weather2IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}.png`);
    
    //pday3Element.innerText = day3.toDateString();
    pday3Element.innerText = week.format(day3);
    temp3Element.innerText = parseInt(data.list[20].main.temp);
    desc3Element.innerText = data.list[20].weather[0].description;
    weather3IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}.png`);
    
    //pday4Element.innerText = day4.toDateString();
    pday4Element.innerText = week.format(day4);
    temp4Element.innerText = parseInt(data.list[12].main.temp);
    desc4Element.innerText = data.list[29].weather[0].description;
    weather4IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}.png`);
    
    //pday5Element.innerText = day5.toDateString();
    pday5Element.innerText = week.format(day5);
    temp5Element.innerText = parseInt(data.list[37].main.temp);
    desc5Element.innerText = data.list[37].weather[0].description;
    weather5IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}.png`);

}

    showWeatherData(city);