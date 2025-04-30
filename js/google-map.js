var google;
var map;

function initMap() {
    // Map coordinates (example: New York)
    const myLatlng = { lat: 40.7128, lng: -74.0060 };
    
    // Map options
    const mapOptions = {
        zoom: 15,
        center: myLatlng,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#7c93a3"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"weight": 2}]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#000000"}, {"lightness": 20}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#82ae46"}]
            }
        ]
    };

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create marker
    const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Our Location',
        animation: google.maps.Animation.DROP,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#82ae46',
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: '#ffffff'
        }
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div class="map-info-window"><h3>Our Location</h3><p>198 West 21th Street, Suite 721<br>New York NY 10016</p></div>'
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // Remove loading overlay when map is ready
    const mapOverlay = document.querySelector('.map-overlay');
    mapOverlay.style.display = 'none';
}

// Handle Google Maps API load error
function gm_authFailure() {
    var mapElement = document.getElementById('map');
    mapElement.classList.remove('loading');
    mapElement.classList.add('error');
}

google.maps.event.addDomListener(window, 'load', initMap);