var express = require('express');

var app = express();                        //app = our server application
app.listen(3000);
console.log('Listening on http://localhost:3000');

var items = ['Glocks', 'AK 47s', 'Mossbergs']; //The items in our store
app.get('/', function(req,res) {            // Listen to / route
    res.json(items);                        // Return a JSON array of our items
});

app.get('/add/:name', function (req,res) {  // Adding a route with param named 'name'
    items.push(req.params.name);
    res.end('Added Weapon ' + req.params.name);
});
