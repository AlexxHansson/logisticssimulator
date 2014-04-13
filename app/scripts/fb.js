define(['facebook', 'models/user'], function (FB, User){
    'use strict';
    FB.init({
        appId      : '1456471747921857',
    });

    FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.status === 'connected') {
            FB.api('/me', function(response) {
                User.set(response);
                console.log(response);
                console.log('Good to see you, ' + response.name + '.');
            });

            FB.api('/me/picture', function(response){
                User.set('profile_pic', response.data.url);
            });
            
        } else if (response.status === 'not_authorized') {
            FB.login();
        } else {
            FB.login();
        }
    });
});