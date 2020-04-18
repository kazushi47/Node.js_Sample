const app = require('express')();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8124);
console.log('Server running...');