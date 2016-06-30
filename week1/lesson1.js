var fs = require('fs');

console.log('Before readFileSync()');


var contents = fs.readFileSync('shopping.txt').toString();

console.log('After readFileSync()');

var items = contents.split('\n');

for (var i=0; i<items.length; i++) {
  console.log((i+1) + ' ' + items[i]);

}
