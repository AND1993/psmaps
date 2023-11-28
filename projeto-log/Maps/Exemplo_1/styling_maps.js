//Variavel
var map;
//função do mapa
function initMap() {
//Opções do mapa
var mapOptions = {
    //Centralização do mapa
    center: { lat: -23.53365490187924, lng: -46.7910716662408 },
    zoom: 15,
    //Estilização do mapa
    styles: [
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text',
            stylers:[
                {color: '#ff0000'}
            ]
        }
    ]
};

map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
