var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var CronJob = require('cron').CronJob;
var time = require('time');

server.listen(8000);




app.get('/', function (req, res) {
    'use strict';
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    'use strict';
    socket.emit('connected');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });

    new CronJob('* * * * * *', function(){
        socket.emit('time', new time.Date() );
    }, null, true, 'Sweden');
});