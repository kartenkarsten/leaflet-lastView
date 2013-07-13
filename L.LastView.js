L.LastView = L.Class.extend({

	options: {
        lat:52.2,
        lon:10.5,
        zoom:10
	},

	_haslocalStorage: false,

	initialize: function (options) {
		L.Util.setOptions(this, options);
	},

    addTo: function (map) {
        this.onAdd(map);
    },

	onAdd: function (map) {
		this._map = map;
        map.on('moveend', this._updateLastPosition, this);

        if(typeof(Storage)!=="undefined")
        { //supported it
            this._haslocalstorage = true;
        }else{
            this._haslocalstorage = false;
            //use only online storage or cookies
            console.warn("Localstorage is not supported that means storing data localy is not possible");
        }

        if ((this._haslocalstorage) && (localStorage.LastPositionLat != undefined)) {
            console.log("restore old position");
            this._map.setView(new L.LatLng(
                localStorage.getItem("LastPositionLat"), 
                localStorage.getItem("LastPositionLon")),
                localStorage.getItem("LastPositionZoom"));
        }else if (this._haslocalstorage == false) {
            // TODO: save position in cookies 
        }else{
            console.log("use default position");
            console.log(this.options);
            this._map.setView(new L.LatLng(this.options.lat, this.options.lon), this.options.zoom);
            //this._map.setView(new L.LatLng(52.2, 10.2), 10);
        }

		//return container;
	},

    onRemove: function (map) {
      console.log("remove layer");
      map.off({
          'moveend': this._updateLastPosition
      }, this);

      this._map = null;
    },

    _updateLastPosition: function (event) {
        if (this._haslocalstorage) {
            var zoom = this._map.getZoom();
            //console.log(this._map.getCenter());
            var lat = this._map.getCenter().lat;
            var lon = this._map.getCenter().lng;
            localStorage.setItem("LastPositionLat", lat);
            localStorage.setItem("LastPositionLon", lon);
            localStorage.setItem("LastPositionZoom", zoom);
        }else{
            //TODO restore from cookie
        }
    }
});

L.lastView = function(options) {
    return new L.LastView(options);
}
