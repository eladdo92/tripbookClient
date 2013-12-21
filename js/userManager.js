'use strict';

var userManager = (function(serverProxy) {
    var currentUserId = '';

    function login() {
        //todo: go to server...
        serverProxy.login();

        currentUserId = '52a2099a1a1051660c7d8c77';
    }

    function getCurrentUserId() {
        return currentUserId;
    }

    return {
        getCurrentUserId: getCurrentUserId,
        login: login
    };
})(serverProxy);