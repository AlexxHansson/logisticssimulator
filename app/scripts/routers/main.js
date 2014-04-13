define([
    'backbone',
    'app',
    'socket'
], function (Backbone, App, socket){
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'jobs': 'jobs'
        },

        initialize: function() {
            console.log('connecting to server...');

            socket.on('connected', function() {
                console.log('connected to server');
            });

            socket.on('news', function (data) {
                console.log(data);
                socket.emit('my other event', { my: 'data' });
            });
        },

        index: function() {
            console.log('index');
            App.init();
        },

        jobs: function() {
            console.log('jobs');
        }
    });

    return MainRouter;
});