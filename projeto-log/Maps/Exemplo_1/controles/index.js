
//Variavel
var map;
//função do mapa
function initMap() {
    //Opções do mapa
    var mapOptions = {
        //Centralização do mapa
        center: { lat: -3.716816, lng: -38.519115 },
        zoom: 8,
        disableDefaultUI: false
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
