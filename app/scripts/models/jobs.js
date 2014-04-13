define([
    'backbone'
], function (Backbone){
    'use strict';

    var Jobs = Backbone.Model.extend({
        defaults: {
            id: 0,
            title: 'N/A'
        },
        initialize: function() {
            
        },
        getId: function() {
            return this.get('id');
        },
        getInfo: function() {
            var data = {};
            data.id = this.get('id');
            data.title = this.get('title');

            return data;
        }
    });

    

    return Jobs;
});