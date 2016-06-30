var args = process.argv;

// console.dir(arguments, {colors:true});

var caliber,brand;

caliber = args[2];
brand = args[3];
nick = args[2] + ' ' + args[3];

console.log('My favorite weapon is a %j', nick );
// console.log('caliber: %j, \t brand: %j', caliber,brand);
