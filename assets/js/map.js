// Google Maps Integration with info from Code Institute and Google maps api docs
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 51.89835739651741,
            lng: -8.413001888198336
        }
    });


    var events = [
        [{
            lat: 51.89816610237542,
            lng: -8.411231640834625
        }, "Poetry Reading"],

        [{
            lat: 51.90040834773723, lng:
            -8.402437366503204
        }, "Event Launch"],

        [{
            lat: 51.89998338008335, lng: -8.402590141269446
        }, "other event"],

        [{
            lat: 51.89810202460546, lng: -8.42096372432869
        }, "Main Stage "]

        [{
            lat: 51.898235891133474, lng: -8.412976695458156
        }, "other event"]

    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    // Create the markers.
    events.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            optimized: false,
        });
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });
    var markerCluster = new MarkerClusterer(attractionsMap, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}