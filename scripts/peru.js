// Get the current date
const currentYear = new Date().getFullYear();
// Get the documents last modified date
const lastModDate = document.lastModified;

// Get the currentYear element from html
const currentYearElement = document.getElementById("currentyear");
// Get the lastModified element from html
const lastModElement = document.getElementById("lastModified");

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}
const temperatureElement = document.getElementById("unordered-list-item-value-i");
const windSpeedElement = document.getElementById("unordered-list-item-value-k");
const windChillElement = document.getElementById("unordered-list-item-value-l");
function calcWindChill(temperatureCelsius, windSpeedKmH) {
  // Wind chill is only calculated for temperatures <= 10°C and wind speeds > 4.8 km/h.
  // Below these thresholds, the wind chill effect is negligible or not applicable.
  if (temperatureCelsius > 10 || windSpeedKmH <= 4.8) {
    return temperatureCelsius; // Return original temperature if wind chill is not applicable
  }
  // The formula for wind chill in Celsius (temperature in °C, wind speed in km/h)
  const windChill = 13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedKmH, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedKmH, 0.16));
  return Math.round(windChill); // Round to the nearest whole number for practical use
}
if(windSpeedElement) {
    if(temperatureElement) {
        const temperature = temperatureElement.innerText.split(" ")[0];
        const windSpeed = windSpeedElement.innerText.split(" ")[0];
        const windChill = calcWindChill(temperature, windSpeed);
        if(windChill == temperature) {
            windChillElement.innerHTML = `N/A`;
        } else {
            windChillElement.innerHTML = `${windChill} °C`;
        }
    }
}