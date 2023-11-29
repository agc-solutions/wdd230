
function calculateWindChill (temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChill = Math.round(windChill * 100) / 100;
        windChill = windChill.toFixed(1);
        //console.log("Wind Chill factor: " + windChill + "°F");
        return windChill
    } else {
        //console.log("N/A");
    }
}
