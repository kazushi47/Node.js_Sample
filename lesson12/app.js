const express = require('express');
const app = express();

app.use(app.router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8124);
console.log("Server running...");