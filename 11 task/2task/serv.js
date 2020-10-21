const http = require("http");
const perMod = require("./personalmodule");
const date = new Date();

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Date: " + date); 

    response.write("<p></p>");
    response.write(" " + perMod.f());
    response.end();
}).listen(5050);