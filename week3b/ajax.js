var express = require('express');                   // Don't forget to install the express module

var app = express();                                // Create our express app

app.use('/', express.static('./public'));           // Tell express to mount whatever files are in the current directory at /

app.get('/time', function(req,res) {                // Add a '/time' route that returns the current date/time
    var now = new Date();                           // Create a new Date object (defaults to the current time)
    res.json(now.toString());                       // Respond with our date converted to a string
});

app.listen(8080);                                   // Start our server
console.log('Listening at http://localhost:8080');
