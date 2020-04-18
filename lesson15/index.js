const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('emit_from_client', (data) => {
        socket.join(data.room);
        socket.emit('emit_from_server', 'you are in ' + data.room);
        socket.broadcast.to(data.room).emit('emit_from_server', data.msg);
    });
});

http.listen(8124);