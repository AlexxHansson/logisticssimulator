define([
    'backbone',
    'app'
], function (Backbone, App){
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'jobs': 'jobs'
        },

        initialize: function() {
            var socket = io.connect('http://localhost:8000');
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