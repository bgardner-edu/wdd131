const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;

const wcElement = document.getElementById("wind_chill");

let windChill = calculateWindChill(10, 7)
 
wcElement.innerHTML = `<b>Wind Chill</b>: ${windChill}`;

function calculateWindChill(temp, wind){
    if(temp <= 10 && wind >= 4.8){
        let chill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        return `${chill.toFixed(0)} &deg;C`;
    }
    return "N/A"
}