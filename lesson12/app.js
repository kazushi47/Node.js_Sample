const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about', (req, res) => {
    res.send('about this page!');
});
app.get('/users/:name', (req, res) => {
    res.send('hello, ' + req.params.name);
});

app.listen(8124);
console.log("Server running...");