 var upperCase = require('upper-case')
 var http = require('http');

 http.createServer(function (req, res){
 	res.writeHead(200, {'Content-Type' : 'text/plain'});
 	res.end(upperCase('Hello Node! hi again '));


 }).listen(8080);

 console.log('Server started on localhost:8080; press Ctrl-C to terminate...')


                    