var zipcodes = require('zipcodes');                       // Require the zipcodes module

var location = zipcodes.lookup('74133');                  // Look up a zip code and assign the returned object to the location variable
console.log(location.longitude, location.latitude);       // Print out our coordinates
