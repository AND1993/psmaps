//Maptype - Permite que crie mapas próprios
//Para a utilização, é necessário implementar alguns atributos:
//maxZoom - Quantidade maxima de zoom que vai usar no mapa... Esse atributo é obrigatório
//tileSize - É o tamanho do Bloco do mapa... Também obrigatório
//name -  Nome do mapa
// minZoom - O minimo de zoom do mapa
//alt - texto alternativo do mapa
//-----Métodos que devem ser implementados 
//getTile(coord, zoom, doc)
// releaseTile(tile) - Quando o mapa informa que não serão necessários novos blocos

//--------criando o mapa
    class OverlayMaps {
        constructor(tileSize) {
        this.tileSize = tileSize;
    }

    //metodo getTile
    getTile(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div');
        div.style.width = this.tileSize.width+'px';
        div.style.height = this.tileSize.height+'px';
        div.style.fontSize = '10px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px';
        div.style.borderColor = '#333';
        return div;
    }
}

//Variavel
var map;

//Variavel do botão para alterar o tipo do mapa
var button = document.querySelector('#satellite') //Entre parenteses deve estar o simbolo de # seguido pelo nome da id que vc colocou no html
button.addEventListener('click', function () {
    map.setMapTypeId('satellite');
})

//função do mapa
function initMap() {
    //Opções do mapa
    var mapOptions = {
        //Centralização do mapa
        center: { lat: -23.536773111763697, lng:-46.78904023200288},
        zoom: 12
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.overlayMapTypes.insertAt(0, new  OverlayMaps(new google.maps.Size(256, 256)));
}
