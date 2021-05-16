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
            lat: 51.90040834773723,
            lng:
                -8.402437366503204
        }, "Event Launch"],

        [{
            lat: 51.89998338008335,
            lng: -8.402590141269446
        }, "Juggling Workshop"],

        [{
            lat: 51.89810202460546,
            lng: -8.42096372432869
        }, "Main Stage "],

        [{
            lat: 51.898235891133474,
            lng: -8.412976695458156
        }, "Outdoor Jazz Performance"],

        [{
            lat: 51.89884668490031,
            lng: -8.421636912591142
        }, "Coffee Dock"],

        [{
            lat: 51.89848276735153,
            lng: -8.41922274884678
        }, "Street Food"],

        [{
            lat: 51.897765678640184,
            lng: -8.41306095688119
        }, "Outdoor Film Screening"],

        [{
            lat: 51.89747107620612,
            lng: -8.412610321668772
        }, "Outdoor Bar Area"],

        [{
            lat: 51.8982357307204, lng: -8.414933096820635
        },"Craft Stalls"],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    // Create the markers.
    events.forEach(([position, title]) => {
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

}