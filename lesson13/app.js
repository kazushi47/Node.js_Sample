const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('index', {title: 'Hello EJS & Express!!!'});
});

app.post('/create', (req, res) => {
    res.send(req.body.name);
});

app.listen(8124);
console.log('Server running...');