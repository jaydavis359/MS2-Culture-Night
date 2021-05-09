// Google Maps Integration with info from Code Institute and Traversy Media Youtube Channel

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 51.89835739651741,
            lng: -8.413001888198336
        }
    });
}