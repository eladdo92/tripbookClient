'use strict';

var tripbookController = (function($, serverProxy, htmlGenerator, userManager) {

    function getFeed(userId) {
        var feedPromise = serverProxy.getFeed(userId);
        var html = htmlGenerator.generateTrips(feedPromise);
        return html;
    }

    function getProfile(userId) {
        var profilePromise = serverProxy.getProfile(userId);
        var html = htmlGenerator.generateTrips(profilePromise);
        return html;
    }

    function getPlacePage(placeId) {
        var placePagePromise = serverProxy.getPlacePage(placeId);
        var html = htmlGenerator.generateTrips(placePagePromise);
        return html;
    }

    function init() {
        userManager.login(); //just for now...
        var userId = userManager.getCurrentUserId();
        if(userId) {
            getFeed(userId).then(function(feed) {
                $('#feedContent').html(feed);
            });
        }
        else {
            $('#feedContent').html(htmlGenerator.loginLink());
        }

    }

    return {
        init: init
    };

})(jQuery, serverProxy, htmlGenerator, userManager);

tripbookController.init();