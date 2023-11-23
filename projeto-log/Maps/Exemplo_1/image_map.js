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

//CLasse imageMapType: classe que permite sobrepor imagens ao mapa
var imageMapType = new google.maps.imageMapType({
    tileSize: new google.maps.Size(256,256),
    getTileUrl: function(coord, zoom){
    return 'https://tile.openstreetmap.org/'+ zoom +'/'+ coord.x +'/'+ coord.y+'png';
    },
    maxZoom: 18
});

map.mapTypes.set('osm', imageMapType);
map.setMapTypeId('osm');
}