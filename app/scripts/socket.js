define(['socket'], function(){
    'use strict';
    var socket = io.connect('http://localhost:8000');

    return socket;
});
