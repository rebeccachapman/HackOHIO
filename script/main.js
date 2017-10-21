var baseLayer = L.esri.basemapLayer('Topographic')
var theaterSearch = []
map = L.map("map", {
  zoom: 13,
  center: [39.98, -83],
  layers: [baseLayer],
  zoomControl: false,
  attributionControl: false,
  maxZoom: 18
});