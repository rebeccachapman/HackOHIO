var baseLayer = L.esri.basemapLayer('Topographic')
map = L.map("map", {
  zoom: 13,
  center: [39.98, -83],
  layers: [baseLayer],
  zoomControl: false,
  attributionControl: false,
  maxZoom: 18
});

var busIcon = L.icon({
  iconUrl: 'img/bus.png',
  iconSize: [25, 39],
  iconAnchor: [12, 39],
  shadowUrl: null
});

routeLines = [];//bus route Lines. Update every minutes.

$.each(routeLines, function (i, routeLine) {
  var eachBus = L.animatedMarker(routeLine.getLatLngs(), {
    icon: busIcon,
    autoStart: true,//AUTOSTART!!!!!!!!!
    onEnd: function () {
      $(this._shadow).fadeOut();
      $(this._icon).fadeOut(3000, function () {
        map.removeLayer(this);
      });
    }
  });
  map.addLayer(eachBus);
  markers.push(eachBus);
}
