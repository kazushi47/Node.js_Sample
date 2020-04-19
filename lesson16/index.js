const app = require('express')();

app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(8124);