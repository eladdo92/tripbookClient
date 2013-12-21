'use strict';

var serverProxy = (function($) {
    var baseUrl = 'http://localhost:801/';

    function getFeed(userId) {
        var url = baseUrl + 'feed/' + userId;
        return $.getJSON(url);
    }

    function getProfile(userId) {
        var url = baseUrl + 'tracks/user/' + userId;
        return $.getJSON(url);
    }

    function getPlacePage(placeId) {
        var url = baseUrl + 'tracks/place/' + placeId;
        return $.getJSON(url);
    }

    function login() {
        //todo: implement!
    }

    return {
        getFeed: getFeed,
        getProfile: getProfile,
        getPlacePage: getPlacePage,
        login: login
    };

})(jQuery);