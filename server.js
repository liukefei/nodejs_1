var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello Tenxcloud-20170103! 333333");
}
var www = http.createServer(handleRequest);
www.listen(8080);
