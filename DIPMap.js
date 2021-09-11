$.fn.trackMap = function(options) {
    var defaults = {
        /* defaults */
    };
    options = $.extend({}, defaults, options);

    var mapOptions = {
            center: new google.maps.LatLng(options.latitude,options.longitude),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(this[0], mapOptions),
        pos = new google.maps.LatLng(options.latitude,options.longitude);

    var marker = new google.maps.Marker({
        position: pos,
        title: options.title,
        icon: options.icon
    });

    marker.setMap(map);

    options.feed.update(function(latitude, longitude) {
        marker.setMap(null);
        var newLatLng = new google.maps.LatLng(latitude, longitude);
        marker.position = newLatLng;
        marker.setMap(map);
        map.setCenter(newLatLng);
    });

    return this;
};

var updater = (function() {
    // private properties

    return {
        update: function(callback) {
            updateMap = callback;
        }
    };
})();

$("#map_canvas").trackMap({
    latitude: 35.044640193770725,
    longitude: -89.98193264007568,
    icon: 'http://bit.ly/zjnGDe',
    title: 'Tracking Number: 12345',
    feed: updater
});