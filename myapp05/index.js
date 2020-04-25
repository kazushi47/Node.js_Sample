const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const db = 'myapp05';
const url = 'mariadb://localhost/' + db;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('up');
});

app.get('/signin', (req, res) => {
    res.render('in');
});

app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log('name: ' + name + ', email: ' + email);
});

app.post('/signin', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log('name: ' + name + ', email: ' + email);
});

http.listen(8124);