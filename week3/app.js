console.log("Hello");

const http = require('http');
let state = 10;
http.createServer(function(req, res){
    // console.log(req);
    // console.log(req.url);
    if(req.url=="/"){
        res.write("Helooo");
        res.end();    
    }else if(req.url == "/state"){
        res.write(`${state}`);
        res.end();    
    }else if(req.url == "/add"){
        res.write(`${state=state+1}`);
        res.end();    
    }else if(req.url == "/remove"){
        res.write(`${state=state-1}`);
        res.end();    
    }else if(req.url == "/reset"){
        res.write(`${state=10}`);
        res.end();    
    }else if(req.url == "/substract"){
        res.write("Error 404 : Not Found");
        res.end();    
    }
}).listen(3000);