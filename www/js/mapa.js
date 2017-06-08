/*jslint sloppy:true, browser:true, devel:true, white:true, vars:true, eqeq:true, nomen:true, unparam:true */
/*global intel, google, Marker, device 

var _map = null;
var _seconds = 30;
var _llbounds = null;
var myLatLng;
var oldLatLng = "";
var boolTripTrack = true; */
//Create the google Maps and LatLng object 

/*function drawMap() {
    //Creates a new google maps object
    var latlng = new google.maps.LatLng(currentLatitude, currentLongitude);
    myLatLng = latlng;
    var mapOptions = {
        center: latlng,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
        }
    };
    if (boolTripTrack === true) {
        if(google.maps){
            _map = new google.maps.Map(document.getElementById("map"), mapOptions);
        }
        
        else {
            alert("Unable to display map.");
        }
    }
} 
//40.7655,-73.97204 = NYC
var currentLatitude = "-8.1048084";
var currentLongitude = "-35.0221423";
var options = {
    timeout: 10000,
    maximumAge: 11000,
    enableHighAccuracy: true
};
//Success callback
var suc = function(p) {
        console.log("geolocation success", 4);
        //Draws the map initially
        if (_map === null) {
            currentLatitude = p.coords.latitude;
            currentLongitude = p.coords.longitude;
            drawMap();
        } else {
            myLatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        }
        //Creates a new google maps marker object for using with the pins
        if ((myLatLng.toString().localeCompare(oldLatLng.toString())) !== 0) {
            //Create a new map marker
            var Marker = new google.maps.Marker({
                position: myLatLng,
                map: _map
            });
            if (_llbounds === null) {
                //Create the rectangle in geographical coordinates
                _llbounds = new google.maps.LatLngBounds(new google.maps.LatLng(p.coords.latitude, p.coords.longitude)); //original
            } else {
                //Extends geographical coordinates rectangle to cover current position
                _llbounds.extend(myLatLng);
            }
            //Sets the viewport to contain the given bounds & triggers the "zoom_changed" event
            _map.fitBounds(_llbounds);
        }
        oldLatLng = myLatLng;
    };
var fail = function() {
        console.log("Geolocation failed. \nPlease enable GPS in Settings.", 1);
    };
var getLocation = function() {
        console.log("in getLocation", 4);
    };
    //Execute when the DOM loads  
    */
function onDeviceReady() {
    try {
        if (navigator.geolocation !== null) {
            document.getElementById("map").style.height = screen.height + "px";
            watchMapPosition();
        }
        else {
            alert("navigator.geolocation == null")
        }
    } catch (e) {
        alert(e.message);
    }

    try {
        //hide splash screen
        navigator.splashscreen.hide(); 
    } catch (e) {}
}

document.addEventListener("deviceready", onDeviceReady, false);

function ativarGps(){
    view.popup({
            titulo:'Limpo', 
            texto:'<div class="container-fluid"><h3>Ative os Serviços de localização</h3><blockquote><p>Ativar GPS</p><footer>Ao continuar, você permite que este app e o google utilizem suas informações de acordo com os respectivos termos de serviço e políticas de  privacidade</footer></blockquote></div>'
            },'confirm', ()=>{getMapLocation()})
}
  
var Latitude = undefined;
var Longitude = undefined;
//  Obter coordenadas geográficas 
function getMapLocation() {
   navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, {enableHighAccuracy: true});
}
//  retorno de Success callback para obter coordenadas geográficas 
var onMapSuccess = function (position) {
 
    console.log("Chamando onMapSucess");

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    // Latitude = -8.162509585392284;
    // Longitude = -34.9159402525394;  
    getMap(Latitude, Longitude);
}
 
//  Obter mapa usando coordenadas 
var directionsService ;
var directionsDisplay;
var latLong;
var marker;
var map;

function getMap(latitude, longitude) {
    console.log("getMap")
    
        directionsService = new google.maps.DirectionsService;
        directionsDisplay = new google.maps.DirectionsRenderer;
        
        if(!map){
            map = new google.maps.Map (document.getElementById("map"), 
            {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: 10,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.ROADMAP
                },
                zoomControl: true,
                zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            scaleControl: true,
            streetViewControl: false,
            fullscreenControl: true,
            });
        }

        latLong = new google.maps.LatLng(latitude, longitude);
        if(!marker){
          marker = new google.maps.Marker({
            position: latLong,
            icon: 'images/marcador15.png'
          });
          marker.setMap(map);
          map.setZoom(16);
          map.setCenter(marker.getPosition());
        }else{
          marker.setPosition(latLong);
          map.setCenter(marker.getPosition());
        }
        directionsDisplay.setOptions({ suppressMarkers:true });
        directionsDisplay.setMap(map);
}

    var latLong2;
    var marker2;
    function criarRota(directionsService, directionsDisplay) {
        console.log(latLong);
        
        returnPosition("Centro, Jaboatão dos Guararapes - PE", function(position){
            latLong2 = new google.maps.LatLng(position.lat, position.lng);

            directionsService.route(
            {
                origin: latLong,
                destination: latLong2,
                travelMode: 'DRIVING'
            },function(response, status) {
                if (status === 'OK') {
                    
                    directionsDisplay.setDirections(response);
                        marker2 = new google.maps.Marker({
                        position: latLong2,
                        map: map
                    });
                } else {
                    console.log(response.request);
                    window.alert('Directions request failed due to ' + status);
                }
                    console.log(latLong);
            });
        })         
    }
    function removerRota(){
        directionsDisplay.setMap(null);
        directionsDisplay = null;
        marker2.setMap(null);
        marker2 = null;
    }
 
//  retorno de retorno de sucesso para assistir sua mudança de posição 
 
var onMapWatchSuccess = function (position) {
    console.log('onMapWatchSuccess')
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;
 
    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
 
        Latitude = updatedLatitude;
        Longitude = updatedLongitude;
        //view.pagina('mapa')
        if(carregado){
            getMap(updatedLatitude, updatedLongitude);
        }
    }
}
 
//  retorno de chamada de erro 
 
function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    view.popup({
        titulo:'Falha ao obter localização do GPS', 
        cor: 'vermelhor',
        texto:'Reinicie o aplicativo com o GPS ligado e tente novamente',
    },'alert');
}
 
// Watch your changing position 
 
function watchMapPosition() {
     return navigator.geolocation.watchPosition(onMapWatchSuccess, onMapError, {enableHighAccuracy:true});
}

/*function getWeatherLocation() { 
 
    Navegador.Geolocalização.GetCurrentPosition ( OnWeatherSuccess,  onWeatherError, { enableHighAccuracy:true});
} */

 function returnPosition(local, callback){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': local}, function(results, status) {
        if(status == "OK"){
            var position = {};
            position.lat = results[0].geometry.location.lat();
            position.lng = results[0].geometry.location.lng();
            callback.call(null,position);
        }else{
            callback.call(null,false);
        }
    });
 }

 function returnDistancia(origem, destino, callback){
    origem = new google.maps.LatLng(origem.lat, origem.lng);
    destino = new google.maps.LatLng(destino.lat, destino.lng);
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origem],
        destinations: [destino],
        travelMode: 'DRIVING',
        //transitOptions: TransitOptions,
        //drivingOptions: DrivingOptions,
        //unitSystem: UnitSystem,
        //avoidHighways: Boolean,
        //avoidTolls: Boolean,
      }, (response, status)=>{
        var tempo = response.rows[0].elements[0].duration.text;
        var distancia = response.rows[0].elements[0].distance.text;
        callback.call(null,tempo, distancia);
        //Math.round(distancia/1000)

        /*FORMA 1 
        restoDoSegundos = segundos%60
        segundos = segundos - restoDoSegundos
        minutos = segundos/60
        minuto = minutos%60
        hora = (minutos - minuto)/60*/
        /*------*/
        //segundos = segundos - (segundos%60)
        //var minuto = (segundos%3600)/60
        //var hora = (segundos-(segundos%3600))/3600
        
      });
 }