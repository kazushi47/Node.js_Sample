const app = require('express')();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.listen(8124, () => {
    console.log('Server running...');
});