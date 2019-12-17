const express = require('express');
const http = require('http');
const socketIos = require('socket.io');
const puerto = 3000;
const hostname = '127.0.0.1';

const app = express();

const server = http.createServer(app);

app.use(express.static('public'));

server.listen(puerto, hostname, (err) => {

    if (err) {
        throw new (err);
    }
    console.log(`El servidor ok http://${hostname}:${puerto}`);
});


const io = socketIos.listen(server);

io.on('connect', (socket) => {
    console.log('nueva conexion : ' + socket.id);
});