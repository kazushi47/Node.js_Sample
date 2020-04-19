const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.set('views', __dirname)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
    socket.on('from_client', (data) => {
        socket.join('default-room')
        io.to('default-room').emit('from_server', data.name + ': ' + data.message)
    })
})

http.listen(8124, () => {
    console.log('Listening on *:8124')
})