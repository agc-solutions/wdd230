const apikey = '469b77d53d39523dbb94c8453b1bed1c';
//const apiCountryURL = 'https://flagsapi.com/BR/flat/32.png';
const apiCountryURL = 'https://countryflagsapi.com/png/';
//const city = 'itanhaém';
const lat = -24.007525439495208;
const lon = -46.42287161033189;
//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=469b77d53d39523dbb94c8453b1bed1c`;

const tempElement = document.querySelector('#temperature span');
//const descElement = document.querySelector('#description');
//const weatherIconElement = document.querySelector('#weather-icon');
const cityElement = document.querySelector('#city');

const cards = document.querySelector('#forecast');
const minElement = document.querySelector('#tst');
const maxElement = document.querySelector('#tmx');


const getWeatherData = async(city) => {
    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    //const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=santos&units=metric&appid=469b77d53d39523dbb94c8453b1bed1c&lang=pt_br`;
    console.log(apiWeatherURL)

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);

    let card = document.createElement('div');
    let temptMin = document.createElement('p');
    let temptMax = document.createElement('p');
    let descr = document.createElement('p');

    //cityElement.innerText = data[1].name;
    cityElement.innerText = data[1].name;
    //tempElement.innerText = parseInt(data.main.temp);
    //descElement.innerText = data.weather[0].description;
    //weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

    // minElement.innerText = parseInt(data.main.temp_min);
    // maxElement.innerText = parseInt(data.main.temp_max);
    
    temptMin.textContent = `Min: ${parseInt(data.main.temp_min)}°C`;    
    card.appendChild(temptMin);

    temptMax.textContent = `Max: ${parseInt(data.main.temp_max)}°C`;
    card.appendChild(temptMax);

    descr.textContent = `${parseInt(data.main.humidity)}%`;
    card.appendChild(descr);

    cards.appendChild(card);

}

    showWeatherData(city);