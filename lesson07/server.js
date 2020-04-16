const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const settings = require('./settings');
const template = fs.readFileSync(__dirname + '/hello.ejs', 'utf-8');
const server = http.createServer();
var n = 0;

server.on('request', (req, res) => {
    if (req.url == '/') {
        n++;
        var data = ejs.render(template, {
            title: "hello",
            content: "<strong>World!<strong>",
            n: n
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Not Found!');
        res.end();
    }
});
server.listen(settings.port);
console.log("Server running...");