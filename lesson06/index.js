const http = require('http');
const fs = require('fs');
const settings = require('./settings');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/hello.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('not found!');
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

server.listen(settings.port);
console.log("Server running...");