const http = require('http').createServer();
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('from client', (data) => {
        socket.join('default-room');
        io.to('default-room').emit('from server', data);
        console.log(data);
    });
});

http.listen(8124);