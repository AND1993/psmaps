
//Variavel
var map;


//Padrões do google para criação de controles personalizados:
//Ter o CSS definido de forma apropriada;
// A interação com o usuário
// Deve estar tudo dentro de uma unica div e ela deve ter dois descendentes
//div - Controle
    //div - ui
        //div - texto do controle


class CenterControl {
    constructor(map){
       //Div de controle
       this.controlDiv = document.createElement('div');
       this.controlUI = document.createElement('div');
       this.controlText = document.createElement('div'); 

       // estilizando essas divs
       this.controlUI.style.backgroundColor = '#fff';
       this.controlUI.style.border = '2px solid #ebebeb';
       this.controlUI.style.borderRadius = '3px';
       this.controlUI.style.padding = '6px';
       this.controlUI.style.cursor = 'pointer';
       this.controlUI.title = 'centralizar mapa';

        this.controlDiv.appendChild(this.controlUI);

        this.controlText.style.fontSize = '16px';
        this.controlText.style.textAlign = 'center';
        this.controlText.style.lineHeight = '20px';
        this.controlText.style.color = '#333'
        this.controlText.innerHTML = 'Centralizar';

        this.controlUI.appendChild(this.controlText);

        this.controlUI.addEventListener('click', () =>{
            //map.setCenter(centerMap) //Centraliza o mapa
            map.panTo(centerMap)
        })
    }
}
//constante do mapa
const centerMap = {lat: -3.716816, lng: -38.519115};
//função do mapa
function initMap() {
    //Opções do mapa
    var mapOptions = {
        //Centralização do mapa
        center: centerMap,
        zoom: 8,
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //constante para exibição da DIV
    const centerControl = new CenterControl(map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControl.controlDiv);
}
