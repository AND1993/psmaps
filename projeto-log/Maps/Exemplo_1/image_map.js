

//Variavel
var map;

//função do mapa
function initMap() {
//Opções do mapa
var mapOptions = {
    //Centralização do mapa
    center: { lat: -23.536773111763697, lng:-46.78904023200288},
    zoom: 12
};

map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
