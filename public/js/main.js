function onDocumentReady() {
    var map = L.map('mimapa', {
	    center: [0, -23],
	    zoom: 3
	});

	var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

	map.addLayer(tiles);

	map.locate({
		enableHighAccuracy: true
	});

	map.on('locationfound', onLocationFound);

	function onLocationFound(position) {
		console.log(position);
	}
}

$(document).on('ready', onDocumentReady);