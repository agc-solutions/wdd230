const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://flagsapi.com/';
const city = 'santos';
// const lat = -24.007525439495208;
// const lon = -46.42287161033189;
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';


const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const cityElement = document.querySelector('#city');
const countryElement = document.querySelector('#country');
const hoyElement = document.querySelector('#hoy');

const hoyMxElement = document.querySelector('#hoyMx span'); 
const hoyMnElement = document.querySelector('#hoyMn span');

const day1Element = document.querySelector('#day1');
const day2Element = document.querySelector('#day2');
const day3Element = document.querySelector('#day3');

const pday1Element = document.querySelector('#pday1');
const pday2Element = document.querySelector('#pday2');
const pday3Element = document.querySelector('#pday3');

const temp1Element = document.querySelector('#temp1 span'); 
const temp1MxElement = document.querySelector('#temp1Mx span'); 
const temp1MnElement = document.querySelector('#temp1Mn span'); 


const temp2Element = document.querySelector('#temp2 span');
const temp2MxElement = document.querySelector('#temp2Mx span'); 
const temp2MnElement = document.querySelector('#temp2Mn span'); 

const temp3Element = document.querySelector('#temp3 span');
const temp3MxElement = document.querySelector('#temp3Mx span'); 
const temp3MnElement = document.querySelector('#temp3Mn span'); 

const desc1Element = document.querySelector('#description1');
const weather1IconElement = document.querySelector('#weather-icon1');
const desc2Element = document.querySelector('#description2');
const weather2IconElement = document.querySelector('#weather-icon2');
const desc3Element = document.querySelector('#description3');
const weather3IconElement = document.querySelector('#weather-icon3');


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
    
    const hj = 1700805600;

    // today + 0 = index 0 -> 3
    // today + 1 = index 4 -> 11
    // today + 2 = index 12 -> 19
    // today + 3 = index 20 -> 28
    // today + 4 = index 29 -> 36
    // today + 5 = index 37 -> 39
    


    const d = new Date(data.list[0].dt);
    d.getDay();

    const d1 = new Date(data.list[4].dt);
    d1.getDay();

    const d2 = new Date(data.list[12].dt);
    d2.getDay();

    const d3 = new Date(data.list[20].dt);
    d3.getDay();

    const tday = 1700881200;
    var dt0 = new Date(tday * 1000);
    1700838000 // today     0
    1700848800 // today     1
    1700859600 // today     2
    1700870400 // today     3
    1700881200 // sat 25/11 4
    1700892000 // sat 25/11 5
    1700902800 // sat 25/11 6
    1700913600 // sat 25/11 7
    1700924400 // sat 25/11 8
    1700935200 // sat 25/11 9
    1700946000 // sat 25/11 10
    1700956800 // sat 25/11 11
    1700967600 // sun 25/11 12
    1700978400 // sun 25/11 13
    1700989200 // sun 25/11 14
    1701000000 // sun 25/11 15
    1701010800 // sun 25/11 16
    //    . 
    //    . 
    1701043200 // sun 25/11 19
    1701054000 // mon 25/11 20
    1701129600 // mon 25/11 28
    1701140400 // tue 28/11 29
    1701216000 // tue 28/11 36
    1701226800 // wed 29/11 37
    1701237600 // wed 29/11 38
    1701259200 // wed 29/11 40

    
    

    

    const dt = data.list[0].dt;    
    var day0 = new Date(dt*1000);
    hoyElement.innerText = day0.toDateString();

    const dt1 = data.list[4].dt;
    var day1 = new Date(dt1*1000);

    const dt2 = data.list[12].dt;
    //console.log(dt2);
    var day2 = new Date(dt2*1000);

    const dt3 = data.list[20].dt;
    var day3 = new Date(dt3*1000);


    //hoyElement.innerHTML = day0.toDateString();
    //hoyElement.innerHTML = d.getDay();
    pday1Element.innerText = day1.toDateString();
    //pday1Element.innerText = day1.getDay();
    pday2Element.innerText = day2.toDateString();
    //pday2Element.innerText = day2.getDay();
    pday3Element.innerText = day3.toDateString();
    //pday3Element.innerText = day3.getDay();

    //hoyElement.innerText = data.list[0].dt;
    //pday1Element.innerText = data.list[1].dt;
   // pday2Element.innerText = data.list[2].dt;
    //pday3Element.innerText = data.list[3].dt;

    //tempElement.innerText = parseInt(data.main.temp);
    tempElement.innerText = parseInt(data.list[0].main.temp);

    hoyMxElement.innerText = `Max: ${parseInt(data.list[0].main.temp_max)}`;
    hoyMnElement.innerText = `Min: ${parseInt(data.list[0].main.temp_min)}`;


    temp1Element.innerText = parseInt(data.list[4].main.temp);

    temp1MxElement.innerText = `Max: ${parseInt(data.list[4].main.temp_max)}`;
    temp1MnElement.innerText = `Min: ${parseInt(data.list[4].main.temp_min)}`;


    temp2Element.innerText = parseInt(data.list[12].main.temp);

    temp2MxElement.innerText = `Max: ${parseInt(data.list[12].main.temp_max)}`;
    temp2MnElement.innerText = `Min: ${parseInt(data.list[12].main.temp_min)}`;

    temp3Element.innerText = parseInt(data.list[20].main.temp);

    temp3MxElement.innerText = `Max: ${parseInt(data.list[20].main.temp_max)}`;
    temp3MnElement.innerText = `Min: ${parseInt(data.list[20].main.temp_min)}`;

    //descElement.innerText = data.weather[0].description;
    //weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    descElement.innerText = data.list[0].weather[0].description;    
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
    countryElement.setAttribute('src', `https://flagsapi.com/${data.city.country}/flat/32.png/`);

    desc1Element.innerText = data.list[4].weather[0].description;
    weather1IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);
    desc2Element.innerText = data.list[12].weather[0].description;
    weather2IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}.png`);
    desc3Element.innerText = data.list[20].weather[0].description;
    weather3IconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}.png`);
}

    showWeatherData(city);