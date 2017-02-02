var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello Tenxcloud-20170102! 12:2");
}
var www = http.createServer(handleRequest);
www.listen(8080);
