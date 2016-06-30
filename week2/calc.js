//calc.js: Take 2 numbers and apply an operator
	// calc.js 1 + 2 = 3
	// calc.js 4 * 4 = 16

var args = process.argv.slice(0);
console.dir(args);

var num1 = Number(args[2]);
var op = args[3];
var num2 = Number(args[4]);

console.log(num1, op, num2);

if(op==='+') console.log(num1+num2);
	else if ((op==='x')) {
		console.log(num1*num2);
	}
