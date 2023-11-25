const getForecastData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
    return data
}

const showForecastData = async(city) => {
    const data = await getForecastData(city);

    let newcard = document.createElement('div');
    let foretemp = document.createElement('p');

    cityElement.innerText = data[1].name;

    foretemp.textContent = data[0].main.temp;
    newcard.appendChild(foretemp);
    tempElement.innerText = parseInt(data.main.temp);
    cards.appendChild(newcard);

}
showForecastData(city);