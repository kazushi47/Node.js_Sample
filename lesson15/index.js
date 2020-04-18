const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('emit_from_client', (data) => {
        socket.emit('emit_from_server', data);
    });
});

http.listen(8124);