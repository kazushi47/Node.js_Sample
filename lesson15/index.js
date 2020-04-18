const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('emit_from_client', (data) => {
        socket.set('client_name', data.name);
        socket.get('client_name', (err, name) => {
            io.emit('emit_from_server', name + ': ' + data.msg);
        });
    });
});

http.listen(8124);