//https://developers.google.com/maps/documentation/javascript/controls?hl=pt-br#ControlsOverview
//Variavel
var map;
//função do mapa
function initMap() {
    //Opções do mapa
    var mapOptions = {
        //Centralização do mapa
        center: { lat: -3.716816, lng: -38.519115 },
        zoom: 8,
        //disableDefaultUI: true // Desabilita todos os icones do google maps
       // zoomControl: false, // desabilita o controle de zoom
        //streetViewControl: false, // desabilita o street View (bonequinho)
        //mapTypeControl: false, // desabilita o Tipo de mapa
        //scaleControl: true, // abilita o controle de escala (desabilitado por padrão)
       // rotateControl: false, // desabilita o controle de rotação de tela
       //fullscreenControl: false // desabilita o botão de tela cheia
       
       //-------------Personalizar tipos de mapa
       mapTypeControlOptions:{
        //o tipo de menu
        //style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, //Menu horizontal
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, // Menu suspenso (você clica e seleciona o tipo do mapa)
        position: google.maps.ControlPosition.TOP_CENTER // posiciona o menu de mapas no centro da tela
        //Para mais opções de posicionamento, altere 'TOP_CENTER' para uma das opções "contantes ControlPosition" no site https://developers.google.com/maps/documentation/javascript/reference/control?hl=pt-br#ControlPosition
       },
       //--------Personalizar Full Screen (tela cheia)
       //Só permite selecionar o posicionamento do icone
       fullscreenControlOptions:{
        position: google.maps.ControlPosition.LEFT_TOP
       }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
