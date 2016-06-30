var express = require('express');				//Include express module
var zipcodes = require('zipcodes');				//Include zipcodes module

var app = express();							//Define app

app.get('/:zipcode/', function(req,res) {		//Request the zipcode route then execute a function, which:
	var zipcode=(req.params.zipcode);			//Defines zipcode as a param of zipcodes module and
	var location = zipcodes.lookup(zipcode);	//Defines location as the zipcode being passed as the route param

	res.json(location);							//Writes the json response to the page body
});
app.listen(8080);								//Port our node server is listening on
