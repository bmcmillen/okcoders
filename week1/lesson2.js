var fs = require('fs');

console.log('Before readFile()');

var contents = fs.readFile('shopping.txt', function(err,contents){
    console.log(contents.toString());
  });

console.log('After readFile()');
