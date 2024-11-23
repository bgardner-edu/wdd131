const year = document.getElementById("current_year");
const lastModified = document.getElementById("last_modified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span>Last Modified: ${new Date(document.lastModified)}</span>`;

const wcElement = document.getElementById("wind_chill");
const temp = 10
const wind = 7
if(temp <= 10 && wind >= 4.8){
    let windChill = calculateWindChill(10, 7)
    wcElement.innerHTML = `<b>Wind Chill</b>: ${windChill.toFixed(0)} &deg;C`;
}
else{
    wcElement.innerHTML = `<b>Wind Chill</b>: N/A`;
} 

function calculateWindChill(t, w){
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);
}