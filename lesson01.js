var http = require('http');
const PORT = 80;

http.createServer((reqest, response) => {
    response.write("Hello Node.js!!!");
    response.end();
}).listen(PORT);

console.log("Server running at http://kazushi-sugitani.ml:${PORT}");