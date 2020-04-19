const app = require('express')();

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(8124);