define([
    'backbone'
], function (Backbone){
    'use strict';

    var User = new Backbone.Model({
        defaults: {
            
        },
        initialize: function() {
            
        },

        getFullName: function() {
            var fullname = this.get('first_name')+' '+this.get('last_name');
            console.log(fullname);
            return fullname;
        }
    });

    return User;
});