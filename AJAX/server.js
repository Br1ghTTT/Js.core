let http = require('http');
let url = require('url');
var static = require('node-static');
const file = new static.Server('.' , {
    cache: 0
});

function accept(req, res){
    if(req.url == 'info.js'){
        setTimeout(function(){
            file.serve(req, res);
        }, 3000);
    }else{
        file.serve(req, res);
    }
}

if(!module.parent){
    http.createServer(accept).listen(8080);
    console.log("Server is running at http://localhost:8080/")
}else{
    exports.accept = accept;
}