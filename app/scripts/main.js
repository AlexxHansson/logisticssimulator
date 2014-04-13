/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'facebook' : {
            exports: 'FB'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        'facebook': '//connect.facebook.net/en_US/all'
    }
});

require([
    'backbone',
    'routers/main',
    'fb'
], function (Backbone, MainRouter) {

    var router = new MainRouter();

    Backbone.history.start();
});
