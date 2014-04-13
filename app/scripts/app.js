define([
    'models/jobs'
], function(JobModel){
    'use strict';

    var App = {};

    App.init = function() {

        
        var Jobs = new JobModel();

        console.log( Jobs.get('title') );
    };

    return App;
});