const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const settings = require('./settings');
const template = fs.readFileSync(__dirname + '/hello.ejs', 'utf-8');
var n = 0;
const server = http.createServer((req, res) => {
    n++;
    var data = ejs.render(template, {
        title: "hello",
        content: "<strong>World!<strong>",
        n: n
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});
server.listen(settings.port);
console.log("Server running...");