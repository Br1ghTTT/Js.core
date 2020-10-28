let http = require('http');
let url = require('url');
var static = require('node-static');
const file = new static.Server('.' , {
    cache: 0
});
http.createServer (function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'}); 
        if(req === 'GET'){
            setTimeout(function(){
                file.serve(req, res);
            }, 3000);
            res.end("Your vote is accepted: " + Date());
        }else{
            file.serve(req, res);
        }
}).listen(5000);


