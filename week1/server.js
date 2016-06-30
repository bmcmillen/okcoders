var http = require('http');

var server = http.createServer(handler);

function handler(req,res){
    console.log('handle()');
    res.end('Welcome To The FBI Investigations Database!');
}

server.listen(3000);
console.log('Listening');
