var express = require('express');

var app = express();
app.get('/', function(req,res) {
	res.send('Welcome to my <b><font face="tahoma" size="+5">useless</font></b> white page with black text...');
});

app.get('/calc/:name', function(req,res) {
	res.send(req.params.name);
});

app.get('/add/:num1:num2', function(req,res) {
	var num1 = Number(req.params.num1);
	var num2 = Number(req.params.num2);
	res.json(num1 + num2);
});
app.get('/sub/:num1:num2', function(req,res) {
	var num1 = Number(req.params.num1);
	var num2 = Number(req.params.num2);
	res.json(num1 - num2);
});


app.get('/:op/:num1/:num2', function(req,res) {
	var num1 = Number(req.params.num1);
	var num2 = Number(req.params.num2);
	var op=(req.params.op);
	var result='0';
		if(op==='add') {
		    result = (num1 + num2);
		}
		if(op==="x"){
		    result = (num1 * num2);
		}
		if(op==='/') {
		    result = (num1 / num2);
		}
		if(op==='sub') {
		    result = (num1 - num2);
		}
		if(op==='^') {
		    result = (Math.pow(num1, num2));
		}
	res.json(result);
});




// var arg = process.argv;
//
// var num1 = Number(arg[2]);
// var oper = arg[3];
// var num2 = Number(arg[4]);
//
// console.log(num1, oper, num2);
//
// if(oper==='+') {
//     console.log(num1 + num2);
// }
// else if(oper==="x"){
//     console.log(num1 * num2);
// }
// else if(oper==='/') {
//     console.log(num1 / num2);
// }
// else if(oper==='-') {
//     console.log(num1 - num2);
// }
// else if(oper==='^') {
//     console.log(Math.pow(num1, num2));
// }

app.listen(8080);
console.log('Magic happens at http://localhost:8080');
