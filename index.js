const express = require('express');

let app = express();
const http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {

    // socket.on('disconnect', () => {
    //     console.log('X desconectou ', + socket.id)
    // })

    socket.on('msg', (data) => {
        io.emit('showMsg', data);
    })
})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(3001, () => {
    console.log('Servidor Node Rodando!!!');
});