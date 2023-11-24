//Variavel
var map;

//função do mapa
function initMap() {
    var mapOptions = {
        center: { lat: -3.716816, lng: -38.519115 },
        zoom: 12,
        mapTypeControlOptions: {
            mapTypeIds: ['osm']
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Classe imageMapType: classe que permite sobrepor imagens ao mapa
    var imageMapType = new google.maps.ImageMapType({
        tileSize: new google.maps.Size(256, 256),
        getTileUrl: function (coord, zoom) {
            return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
        },
        maxZoom: 18,
        name: 'Open Street Map'
    });

    map.mapTypes.set('osm', imageMapType);
    map.setMapTypeId('osm');
}