const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello from' + req.url);
    res.end();
});

server.listen(require('./settings').port);

console.log("Server listening...");