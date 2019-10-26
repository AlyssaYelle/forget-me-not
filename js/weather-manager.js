console.log('connected');

/*
	use dark skies API to add weather info to site
*/

/* TODO
	change background based on time of day

	populate document with data
		- API call (GET)
			- save
				current temp
				min/max
				%chance of precipitation
				hourly temp
				hourly precipitation(?)
				humidity
				wind speed
			- create plots based on data (using d3.js)
			- update document with data/plots
			- suggest outfit based on weather report
*/

let currentTime = new Date();
let hours = currentTime.getHours();
let mins = currentTime.getMinutes();

document.getElementById('time').innerText = `${hours}:${mins}`;

var getCurrentPosition = function () {
    if (navigator.geolocation) {
      	return new Promise(
        	(resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
      	)
    } else {
      	return new Promise(
        	resolve => resolve({})
      	)
    }
}

getCurrentPosition()
  .then((position) => {
    callDarkSky(position);
  })
  .catch((err) => {
    console.error(err.message);
  });


function callDarkSky(position) {
	let lat = position.coords.latitude;
	let long = position.coords.longitude;
	let url = `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/13719750fdda6865369adcfb2dbaef70/${lat},${long}?exclude=minutely,flags`;
	console.log(url);
	fetch(url, {

	})
	.then((res) => {
		return res.json();
	})
	.then((res) => {
		console.log(res);
		updateDom(res);
	})
	.catch((err) => {
		console.log(err)
	})
}

const currentTempElement = document.getElementById('currenttemp');
const minTempElement = document.getElementById('mintemp');
const maxTempElement = document.getElementById('maxtemp');
const humidityElement = document.getElementById('humidity');
const precipitationElement = document.getElementById('precipitation');
const windSpeedElement = document.getElementById('windspeed');

function updateDom(response) {
	currentTempElement.innerText = `It is currently ${response.currently.temperature}`;
	minTempElement.innerText = `The low today is ${response.daily.data[0].temperatureLow}`;
	maxTempElement.innerText = `The high today is ${response.daily.data[0].temperatureHigh}`;
	humidityElement.innerText = `The humidity right now is ${response.currently.humidity}`;
	precipitationElement.innerText = `The chance of rain today is ${response.daily.data[0].precipProbability}`;
	windSpeedElement.innerText = `The wind speed is ${response.currently.windSpeed}`;
}













