var http = require('http');
const PORT = 80;

http.createServer((request, response) => {
    response.write("Hello Node.js!!!\n");
    response.end();
}).listen(PORT);

console.log('Server running at http://kazushi-sugitani.ml:${PORT}');