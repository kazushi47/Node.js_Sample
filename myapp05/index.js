const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const db = 'myapp05';
const url = 'mongodb://localhost/' + db;

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
    if (name !== '' && email !== '') {
        var flg = false;
        MongoClient.connect(url, (err, client) => {
            if (err) return console.dir(err);
            client.db(db).collection('users', (err, collection) => {
                const doc = {name: name, email: email};
                collection.insertOne(doc, (err, result) => {
                    console.dir(result);
                    flg = true;
                });
            });
        });
        if (flg) {
            res.send('success!!!');
        } else {
            res.send('エラーが発生しました。やり直してください。');
        }
    } else {
        res.send('未入力項目があります。やり直してください。');
    }
});

app.post('/signin', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log('name: ' + name + ', email: ' + email);
});

http.listen(8124);