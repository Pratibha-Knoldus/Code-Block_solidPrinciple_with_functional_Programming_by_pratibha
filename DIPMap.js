$.fn.track_map = function(options) {
    var defaultValue = {
        /* defaultValue */
    };
    options = $.extend({}, defaultValue, options);

    var Options_map = {
            center: new google.maps.LatitudeLongitude(options.latitude,options.longitude),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(this[0], Options_map),
        pos = new google.maps.LatitudeLongitude(options.latitude,options.longitude);

    var locator = new google.maps.Marker({
        location: pos,
        title: options.title,
        icon: options.icon
    });

    locator.set_track_map(map);

    options.feed.update(function(latitude, longitude) {
        locator.set_track_map(null);
        var newLatitudeLongitude = new google.maps.LatitudeLongitude(latitude, longitude);
        locator.location = newLatitudeLongitude;
        locator.set_track_map(map);
        map.setCenter(newLatitudeLongitude);
    });

    return this;
};

var pushToUpdate = (function() {
    // private properties

    return {
        update: function(callback) {
            updateMap = callback;
        }
    };
})();

$("#map_canvas").track_map({
    latitude: 35.0254640193770715,
    longitude: -89.91593264007468,
    icon: 'http://bit.ly/zjnGge',
    title: 'Trackable Id: 57812',
    feed: pushToUpdate
});