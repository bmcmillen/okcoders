var express = require('express');

var app = express(); //app = our server application
app.listen(3000);
console.log('Listening on http://localhost:3000');

app.get('/date', function(req,res) {
  res.end(new Date().toString());
});
