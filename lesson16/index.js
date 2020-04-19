const app = require('express')();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = bcypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
    } catch {
        res.redirect('/register');
    }
    console.log(users);
});

app.listen(8124);