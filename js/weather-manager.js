console.log('connected');

/*
	use dark skies API to add weather info to site
*/

/* TODO
	pull relevant elements from document
		- where data will be added

	populate document with data
		- API call (GET)
			- save
				current temp
				min/max
				%chance of precipitation
				hourly temp
				hourly precipitation(?)
				humidity (hourly?)
				wind speed (hourly?)
			- create plots based on data (using d3.js)
			- update document with data/plots
			- suggest outfit based on weather report
*/

const currentTempElement = document.getElementById('currenttemp');
const minTempElement = document.getElementById('mintemp');
const maxTempElement = document.getElementById('maxtemp');
const humidityElement = document.getElementById('humidity');
const precipitationElement = document.getElementById('precipitation');
const windSpeedElement = document.getElementById('windspeed');


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
	})
	.catch((err) => {
		console.log(err)
	})
}














