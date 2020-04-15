var http = require('http');
const PORT = 8124;

var userCount = 0;
var userbytwo = 0;

http.createServer((request, response) => {
    userCount++;
    userbytwo = userbytwo + 2;
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.write('We can also count by two. We have had '+userbytwo+' visits!\n');
    response.end('Good Bye');
}).listen(PORT);

console.log('Server running at http://kazushi-sugitani.ml:${PORT}');