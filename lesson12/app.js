const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('about this page!');
});
app.get('/users/:name?', (req, res) => {
    if (req.params.name) {
        res.send('hello, ' + req.params.name);
    } else {
        res.send('nobody!');
    }
});
app.get('/hello.txt', (req, res) => {
    res.sendfile(__dirname + 'hello.txt');
});

app.listen(8124);
console.log("Server running...");