function initialize() {
  var marcadores = [
    ['Unnamed Road, Los Olivos', -11.9732672, -77.062364],
    ['Los Suyos, Carabayllo, Perú', -11.863738, -77.034803]
  ];
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 10,
    center: new google.maps.LatLng(-11.9732672,-77.062364),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  for (i = 0; i < marcadores.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(marcadores[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}
google.maps.event.addDomListener(window, 'load', initialize);