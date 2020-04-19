const app = require('express')();
const bodyParser = require('body-parser');
const users = [];

app.set('views', __dirname + '/views');
app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {

});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) => {

});

app.listen(8124);