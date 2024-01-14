function showTime() {
//Brisbane
let brisbaneDateElement = document.querySelector("#brisbane .date");
let BrisbaneTimeElement = document.querySelector("#brisbane .time");
let brisbaneDate = moment().format("MMMM Do YYYY");
let brisbaneTime = moment().tz("Australia/Brisbane").format("H:mm:ss [<small>]A[</small>]");
brisbaneDateElement.innerHTML = brisbaneDate;
BrisbaneTimeElement.innerHTML = brisbaneTime;

//Perth
let perthDateElement = document.querySelector("#perth .date");
let pertheTimeElement = document.querySelector("#perth .time");
let perthDate = moment().format("MMMM Do YYYY");
let perthTime = moment().tz("Australia/Perth").format("H:mm:ss [<small>]A[</small>]");
perthDateElement.innerHTML = perthDate;
pertheTimeElement.innerHTML = perthTime;

//Melbourne
let melbourneDateElement = document.querySelector("#melbourne .date");
let melbourneDate = moment().format("MMMM Do YYYY");
melbourneDateElement.innerHTML = melbourneDate;
let melbourneTimeElement = document.querySelector("#melbourne .time");
let melbourneTime = moment().tz("Australia/Melbourne").format("H:mm:ss [<small>]A[</small>]");
melbourneTimeElement.innerHTML = melbourneTime

//Adelaide
let adelaideDateElement = document.querySelector("#adelaide .date");
let adelaideDate = moment().format("MMMM Do YYYY");
adelaideDateElement.innerHTML = adelaideDate;
let adelaideTimeElement = document.querySelector("#adelaide .time");
let adelaideTime = moment().tz("Australia/Adelaide").format("H:mm:ss [<small>]A[</small>]");
adelaideTimeElement.innerHTML = adelaideTime

}

//Function to change the city in the container
function updateCity(event) {
let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
  cityTimeZone = moment.tz.guess();
  let h1 = document.querySelector("#h1");
  h1.innerHTML = "Your current location";
document.body.style.backgroundImage = "none";

const selectElement = document.getElementById("city");
selectElement.remove();

}

let citiesElement = document.querySelector("#cities");
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);

citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
           <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div> <div class="time">${cityTime.format("H:mm ")}<small>${cityTime.format("A")}</small></div>
        </div><div><div><a href="/">Go back</a><div>`;

}

showTime();
setInterval (showTime, 1000);



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);