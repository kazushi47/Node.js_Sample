const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

io.on('disconnect', () => {
    console.log('user disconnected');
});

http.listen(8124);
console.log('Server running...');