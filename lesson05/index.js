const http = require('http');

var msg;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    switch (req.url) {
        case '/':
            msg = "home page";
            break;
        case '/about':
            msg = "about this page";
            break;
        case '/profile':
            msg = "about me";
            break;
        default:
            msg = "wrong page";
            break;
    }
    res.write(msg);
    res.end();
});

server.listen(require('./settings').port);

console.log("Server listening...");