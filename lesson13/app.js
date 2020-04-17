const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hello EJS & Express!!!'});
});

app.listen(8124);
console.log('Server running...');