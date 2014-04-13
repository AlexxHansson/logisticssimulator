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

            console.log('finding location...');
            navigator.geolocation.getCurrentPosition(function(response){
                console.log('location found.');
                User.set('coords', response.coords);

                var mapOptions = {
                    center: new google.maps.LatLng(User.get('coords').latitude, User.get('coords').longitude),
                    zoom: 16
                };
                var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

                google.maps.event.addDomListener(window, 'load', this);
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