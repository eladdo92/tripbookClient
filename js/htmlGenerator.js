'use strict';

var htmlGenerator = (function($) {

    function generateTrip(tripObj) {
        var userLink = 'profile/' + tripObj.user._id;
        var useName = tripObj.user.name;
        var $userLink = $('<a href="'+userLink+'">'+useName+'</a>');

        var tripContent = tripObj.content;
        var $tripContent = $('<div>').text(tripContent);

        return $('<div></div>').append($userLink).append($tripContent);
    }

    function generateTripArray(trips) {
        var $trips = $('<div>');

        for(var i = 0; i < trips.length; i++) {
            var $currentTrip = generateTrip(trips[i]);
            $trips.append($currentTrip);
        }

        return $trips;
    }

    function generateTripsPromise(promise) {
        var dfd = $.Deferred();

        promise
            .success(function(trips) {
                dfd.resolve(generateTripArray(trips));
            })
            .fail(function() {
                dfd.reject(generateError());
            });

        return dfd.promise();
    }

    function generateError() {
        return $('<div>').text('error!');
    }

    function loginLink() {
        return $('<a href="#login">התחבר</a>');
    }

    return {
        generateTrips: generateTripsPromise,
        loginLink: loginLink
    };

})(jQuery);