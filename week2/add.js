var args = process.argv;

var sum = 0;

for (var i = 2; i < args.length; i++) {
	var currentNumber = Number(args[i]);
	sum = sum + currentNumber;
	console.log(currentNumber, sum);
}
