const mymapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlaTXcUsehwmbep02rICdFRLX6d6SJq_8&callback=initMap";

async function getMymap (mymapURL) {
    const response = await fetch(mymapURL);
    // const data = await response.json(); 
    // displayMymap(data.map);
}
getMymap(mymapURL);

function initMap() {
    // Localization of dock Playa del Carmen-Cozumel Ferry
    var location1 = {lat: 20.621801673374378, lng: -87.07535187881072};

    // Localization Terminal Puerta Maya
    var location2 = {lat: 20.477523495408963, lng: -86.97327537638841};
    // Opções do mapa
    var mapOptions = {
        center: location1,
        zoom: 10
    };

    // map create
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // marker dock do Playa del Carmen-Cozumel Ferry
    var marker1 = new google.maps.Marker({
        position: location1,
        map: map,
        title: 'Store One - Dock do Playa del Carmen-Cozumel Ferry'
    });

    // marker Terminal Puerta Maya
    var marker2 = new google.maps.Marker({
        position: location2,
        map: map,
        title: 'Store Two - Terminal Puerta Maya'
    });
}
