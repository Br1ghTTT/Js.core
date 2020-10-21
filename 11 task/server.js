const http = require("http");
const os = require('os');
const path = require('path');

http.createServer (function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1> System information</h1>");
    response.write("<p> Current user name: " + os.userInfo().username + "</p> ");
    response.write("<p> Os type: " + os.type() + "</p>");
    response.write("<p> System work time: " + os.uptime()+ "</p>");
    response.write("<p> Current work directory: " + path.dirname(__filename) + "</p>");
    response.write("<p> Current work directory: " + path.basename(__filename) + "</p>");
    response.end();
}).listen(5000);
