const express = require('express');
const app = express();
const dateutils = require('date-utils');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const db = 'app01';
const url = 'mongodb://localhost/' + db;

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    const now = new Date().toFormat('YYYY年MM月DD日 H時MI分SS秒');
    res.render('index', {now: now});
});

app.post('/mypage', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.dir(err);
        console.log('Connected to db');

        client.db(db).collection('users', (err, collection) => {
            const doc = {name: req.body.name};
            collection.insertOne(doc, (err, result) => {
                console.dir(result);
            });
        });
    });
    res.send('ようこそ、' + req.body.name + 'さん！');
});

app.listen(8124);
console.log('Server running...');