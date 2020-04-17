const express = require('express');
const app = express();
const post = require('./routes/post');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.get('/', post.index);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id', post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id/', post.update);
app.put('/posts/:id/', post.update);
app.delete('/posts/:id/', post.destroy);