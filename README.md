Leaflet Class LastView
=============================

# What is it ?
A simple extention to use the last view on map start up

# How to use it ?
```javascript
    var cloudmadeAttribution = 'Map data &copy; 2013 OpenStreetMap contributors, Imagery &copy; 2013 CloudMade',
        cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {attribution: cloudmadeAttribution});

    var map = new L.Map('map').addLayer(cloudmade)
    .setView(new L.LatLng(48.5, 2.5), 15);

    var lastVie = new L.LastView();
    lastVie.addTo(map);
```

# What are the options ?
You can specify an options object as an argument of L.LastView.
```javascript
var options = {
    lat:52.2,
    lon:10.5,
    zoom:10
};
```
