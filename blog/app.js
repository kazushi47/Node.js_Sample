const express = require('express');
const app = express();
const post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.get('/', post.index);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id', post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id/', post.update);
app.put('/posts/:id/', post.update);
app.delete('/posts/:id/', post.destroy);