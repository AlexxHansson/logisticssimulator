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