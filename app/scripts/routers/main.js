define([
    'backbone',
    'app',
    'socket',
    'facebook',
    'models/user'
], function (Backbone, App, socket, FB, User){
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'jobs': 'jobs',
            'login': 'login'
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
            User.on('change:first_name', function() {
                $('#user').append('<img src="'+User.get('profile_pic')+'" />');
                $('#user').append(User.get('first_name')+' '+User.get('last_name'));
            });
            
        },

        jobs: function() {
            console.log('jobs');
        },

        login: function() {
            console.log('login');
        }
    });

    return MainRouter;
});