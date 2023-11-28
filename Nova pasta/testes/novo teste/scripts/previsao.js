
const day1Element = document.querySelector('#day1');
const day2Element = document.querySelector('#day2');
const day3Element = document.querySelector('#day3');                                                                                                            
const temp1Element = document.querySelector('#temp1 span');             
const temp2Element = document.querySelector('#temp2 span');
const temp3Element = document.querySelector('#temp3 span');
// const descElement = document.querySelector('#description');
// const weatherIconElement = document.querySelector('#weather-icon');
//const cityElement = document.querySelector('#city');


const getForecastData = async() => {
    const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;

    const res = await fetch(apiForecastURL);
    const data = await res.json();
    // console.log(data);
    return data
}
const showForecastData = async() => {
    const data = await getForecastData();
    //cityElement.innerText = data.name;
    //temp1Element.innerText = parseInt(list[1].temp);
    temp1Element.innerText = parseInt(data.list[0].main.temp);
    // temp2Element.innerText = parseInt(data.main.temp);
    // temp2Element.innerText = parseInt(data.main.temp);
    //descElement.innerText = data.weather[0].description;
    //weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
}

    showForecastData(city);

    // cityElement.innerText = data.list[1].name;
    
    // descElement.innerText = data.weather[0].description;
    // // weather.forecast.map(dayforecast => {
    // //     //return (
    // //         //<li>
    // //             <h3>Amamnhã</h3>
    // //             <div>
    // //                 <p>{dayforecast.temperature}</p>
    // //             </div>
                
    // //         //</li>
    // //     //)
    // // })

    // let gotPosition = function(pos) {
    //     let lat = pos.coords.latitude;
    //     let lon = pos.coords.longitude;
    //     getForecast(lat, lon);
    
    // }
    // let getForecast = function(lat, lon) {
    //     let url2 = 'https://api.openweather.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&exclu';
    //     getWeatherText(url2);
    // }

    // async function getWeatherText (url2) {
    //     let weatherObject = await fetch(url2);
    //     let weatherText = await weatherObject.text();
    //     parseWeather(weatherText);
    // }

    // let parseWeather = function(weatherText) {
    //     let weatherJSON = JSON.parse(weatherText);
    //     let dailyForecast = weatherJSON.daily;

    //     for (x = 0; x< dailyForecast.length; x++) {
    //         let day = dailyForecast[x];
    //         let today = new Date().getDay() + x;
    //         if (today > 6) {
    //             today = today - 7;
    //         }
    //         let dayOfWeek = getDayOfWeek(today);
    //         let description = day.weather[0].description;
    //         let icon = day.weather[0].icon;
    //         let sunrise = timestampToTime(day.sunrise);
    //         let sunset = timestampToTime(day.sunset);
    //         let highTemp = kToF(day.temp.max);
    //         let lowTemp = kToF(day.temp.min);
    //         let humidity = day.humidity;
    //         let windSpeed = day.wind_speed;
    //         let windGust = day.wind_gust;
    //         displayWeatherDay(dayOfWeek, description, icon, sunrise, sunset, highTemp, lowTemp, humidity, windSpeed, windGust);
            

    //     }
    // }

    // // let displayWeatherDay = function (dayOfWeek, description, icon, sunrise, sunset) {
    // //     let out = "<div class='weatherDay"><img src='https://flagsapi.com/png' </head>{
    // //     out += "<h2>" + dayOfWeek + "<h2>";
    // //     out += "<h3>" + dayOfWeek + "<h3>";
    // //     out += "<p>" + dayOfWeek + "<p>";
    // //     out += "<h2>" + dayOfWeek + "<h2>";
    // //     }
    // // }


    // //     navigator.geolocation.getCurrentPosition(gotPosition);