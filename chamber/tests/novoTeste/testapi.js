const apikey = '469b77d53d39523dbb94c8453b1bed1c';

const weatherData = document.querySelector('#weather-data');
const cityElement = 'Santos';
const country = document.querySelector('#country');
const forecast = document.querySelector('#forecast');
const temperature = document.querySelector('#temperature span');




async function main() {
    
    const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}&lang=pt_br`)
    
    //console.log(result)
    const data = await result.json();
    //console.log(data)
    return data;
}

main()

const showWeatherData = async(city) => {
    const data = await main();
    cityElement.innerText = data[1].name;
    temperature.innerText = data.temp;
    

}