var express = require('express');                   //Include express module
var zipcodes = require('zipcodes');                 //Include zipcodes module
var Forecast = require('forecast');                 //Require the forecast module
var app = express();                                //Define app

app.get('/weather/:zipcode/', function(req,res) {
	var zipcode=(req.params.zipcode);				//Defines zipcode as a param of zipcodes module and
	var location = zipcodes.lookup(zipcode);
	console.log('Location Coords = ' + location.longitude, location.latitude);
	var Forecast = require('forecast');                         // Require the forecast module

	var forecast = new Forecast({                               // Initialize an instance of Forecast
	    service: 'forecast.io',
	    key: '5b2a502a3e9cce8715fcebc3343372e0',                // forecast.io API key
	    units: 'F'                                              // F or C (only the first letter is parsed)
	});

	forecast.get([location.latitude, location.longitude], function(err,weather) {
	    if(err) return console.dir(err);
	    console.dir(weather);
		res.send("<h3> Current Weather Conditions: </h3>"
			+ "<h4>Temperature: "  + weather.currently.temperature + "&deg; F" + "</h4>"
			+ "<h4>Next Hour: "  + weather.minutely.summary + "</h4>"
			+ "<h4>Summary: "  + weather.daily.summary + "</h4>");
	});

});


app.listen(8081);								    //Port our node server is listening on
