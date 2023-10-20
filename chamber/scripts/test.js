
const temperature = 50; // Example temperature in Celsius
const windSpeed = 20; // Example wind speed in km/h
const windChill = calculateWindChill(temperature, windSpeed);


var windChillCelsius = (windChill - 32) * (5 / 9);
windChillCelsius = Math.round(windChillCelsius * 100) / 100;
windChillCelsius = windChillCelsius.toFixed(1);


console.log("Wind Chill factor: " + windChillCelsius + "°C");

// Update the HTML content with the wind chill factor
document.getElementById("wind-chill").innerHTML = `Wind Chill: ${windChill}ºF | ${windChillCelsius}ºC`;

var tempCels = (temperature - 32) * (5 / 9);
document.getElementById("tempt").innerHTML = `Temperature: ${temperature}ºF | ${tempCels}ºC`;

var kmh = (windSpeed * 1.609);
kmh = kmh.toFixed(0);

document.getElementById("wsp").innerHTML = `Wind Speed: ${windSpeed}mph | ${kmh}Km/h`;



