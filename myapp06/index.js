const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('welcome');
});

app.post('/chat', (req, res) => {
    const name = req.body.name;
    res.render('chat', {name: name});
});

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join('default-room');
        io.to('default-room').emit('join', data);
    });
    socket.on('typing', (data) => {
        io.to('default-room').emit('typing', data);
    });
    socket.on('send', (data) => {
        io.to('default-room').emit('send', data);
    });
});

http.listen(8124);