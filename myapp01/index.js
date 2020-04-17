const express = require('express');
const app = express();
const dateutils = require('date-utils');

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const now = new Date().toFormat('YYYY年MM月DD日 H時MI分SS秒');
    res.render('index', {now: now});
});

app.listen(8124);
console.log('Server running...');