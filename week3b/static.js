var express = require('express');         // Don't forget to install the express module
var zipcodes = require('zipcodes');
var app = express();                      // Create our express app

app.use('/', express.static('./public'));       // Tell express to mount whatever files are in the current directory at /

app.get('/time', function(req,res) {
		res.json(new Date().getTime());
});

app.get('/zipcode/:zip', function(req,res) {
		var zip = req.params.zip;
		res.json(zipcodes.lookup(zip));
});

app.listen(8080);                         // Start our server
console.log('Listening at http://localhost:8080');
