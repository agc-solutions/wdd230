const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apikey = '469b77d53d39523dbb94c8453b1bed1c';
const lat = '49.77082559908408';
const lon = '6.668742863709907';


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.777&lon=6.66&appid=469b77d53d39523dbb94c8453b1bed1c';


const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    // console.log(data);
    return data
}



// async function apiFetch(url) {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data.url);
//             // displayResults(data);
//         } else {
//             throw Error(await response.text());
//         }
//     }catch (error) {
//         console.log(error);
//     }
// }
// // const weatherElement = document.getElementById('weather');



// function displayResults(data) {
//     currentTemp.innerHTML = `${data.___}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${____}.___`;
//     let desc = data.weather[0]._____;
//     weatherIcon.setAttribute('____', _______);
//     weatherIcon.setAttribute('__', "______");
//     captionDesc.textContent = `${desc}`;
// } 