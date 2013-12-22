'use strict';

var userManager = (function(serverProxy) {
    var currentUserId = '';
    var currentUserName = '';
    var isLoggedIn = false;

    function login() {
        //todo: go to server...
        serverProxy.login();
        isLoggedIn = true;

        currentUserId = '52a2099a1a1051660c7d8c77';
        currentUserName = 'Elad Douenias';
    }

    return {
        getCurrentUser: function() {
            return {
                _id: currentUserId,
                name: currentUserName
            };
        },
        isLoggedIn: isLoggedIn,
        login: login
    };
})(serverProxy);