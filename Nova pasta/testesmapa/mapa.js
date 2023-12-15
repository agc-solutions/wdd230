function initMap() {
    // Localização do dock do Playa del Carmen-Cozumel Ferry
    var location1 = {lat: 20.621801673374378, lng: -87.07535187881072};

    // Localização do Terminal Puerta Maya
    var location2 = {lat: 20.477523495408963, lng: -86.97327537638841};
    // Opções do mapa
    var mapOptions = {
        center: location1,
        zoom: 10
    };

    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcador para o dock do Playa del Carmen-Cozumel Ferry
    var marker1 = new google.maps.Marker({
        position: location1,
        map: map,
        title: 'Store One - Dock do Playa del Carmen-Cozumel Ferry'
    });

    // Marcador para o Terminal Puerta Maya
    var marker2 = new google.maps.Marker({
        position: location2,
        map: map,
        title: 'Store Two - Terminal Puerta Maya'
    });
}
