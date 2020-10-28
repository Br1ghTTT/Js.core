let http = require('http');
let url = require('url');
var static = require('node-static');
const file = new static.Server('.' , {
    cache: 0
});
http.createServer (function(req,res){
    res.writeHead(200, {'Content-Type': 'text/js'}); 
        if(req.url === '/vote'){
            setTimeout(function(){
                res.end("Your vote is accepted: " + Date());
            }, 3000);
        }else {   
            file.serve(req, res); 
          }
}).listen(5000);




