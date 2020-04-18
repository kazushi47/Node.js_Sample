const express = require('express');
const app = express();
const dateutils = require('date-utils');
const bodyParser = require('body-parser');

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    const now = new Date().toFormat('YYYY年MM月DD日 H時MI分SS秒');
    res.render('index', {now: now});
});

app.post('/mypage', (req, res) => {
    res.send('ようこそ、' + req.body.name + 'さん！');
});

app.listen(8124);
console.log('Server running...');