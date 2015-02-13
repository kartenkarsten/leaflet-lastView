Leaflet Class LastView
=============================

# What is it ?
A simple extention to use the last view on map start up

# How to use it ?
```javascript
    var attr_osm = 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {opacity: 0.7, attribution: [attr_osm].join(', ')});
    var map = new L.Map('map').addLayer(osm).setView(new L.LatLng(52.265, 10.524), 14);

    var lastview = new L.LastView();
    lastview.addTo(map);
```

# What are the options ?
You can specify the default start position and pass it to L.LastView constructor.
```javascript
var options = {
    lat:52.2,
    lon:10.5,
    zoom:10
};
var lastview = new L.LastView(options);
```

# Who uses it
* <your map>
