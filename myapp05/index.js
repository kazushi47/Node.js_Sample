const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('up');
});

app.get('/signin', (req, res) => {
    res.render('up');
});

http.listen(8124);