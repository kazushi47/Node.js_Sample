const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost';
const dbName = 'myapp06';
const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

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

app.get('/users', (req, res) => {
    MongoClient.connect(url, connectOption, (err, client) => {
        if (err) return console.dir(err);
        const db = client.db(dbName);
        db.collection('users').find().toArray((err, result) => {
            if (err) return console.dir(err);
            res.render('users', result);
        });
    });
});

io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join('default-room');
        io.to('default-room').emit('join', data);
        MongoClient.connect(url, connectOption, (err, client) => {
            if (err) return console.dir(err);
            const db = client.db(dbName);
            const document = {name: data};
            db.collection('users').insertOne(document, (err, res) => {
                if (err) return console.dir(err);
            });
        });
    });
    socket.on('typing', (data) => {
        io.to('default-room').emit('typing', data);
    });
    socket.on('send', (data) => {
        io.to('default-room').emit('send', data);
        MongoClient.connect(url, connectOption, (err, client) => {
            if (err) return console.dir(err);
            const db = client.db(dbName);
            db.collection('messages').insertOne(data, (err, res) => {
                if (err) return console.dir(err);
            });
        });
    });
});

http.listen(8124);