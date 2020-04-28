const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/welcome_page/index.html');
});

app.post('/', (req, res) => {
    const name = req.body.name;
    console.log('Name: ' + name);
});

http.listen(8124);