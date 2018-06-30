
const http = require("http");
let state = 10;

http
  .createServer(function(req, res) {
    // console.log(req);
    // console.log(req.url);
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Index Route");
      res.end();
    } else if (req.url == "/state") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${state}`);
      res.end();
    } else if (req.url == "/add") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${(state = state + 1)}`);
      res.end();
    } else if (req.url == "/remove") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${(state = state - 1)}`);
      res.end();
    } else if (req.url == "/reset") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`${(state = 10)}`);
      res.end();
    } else if (req.url == "/substract") {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Error 404 : Not Found");
      res.end();
    }
  })
  .listen(3000);
