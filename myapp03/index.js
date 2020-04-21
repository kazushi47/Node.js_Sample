const app = require('express')();

app.get('/', (req, res) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send('{"name": "Sample Name", "score": 77}');
});

app.listen(8124);