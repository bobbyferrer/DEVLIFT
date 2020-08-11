import 'https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js';

// const coordinates = [
// 	[ 121.089592, 14.61992 ]
// ];

// mapboxgl.accessToken = 'pk.eyJ1IjoiYm9iYnlmZXJyZXIiLCJhIjoiY2p5and1aXo4MDhjdjNibjRsZ2VnbnI5diJ9.EvMqr1VHIa3eFhcEmeKPzQ';
// var map = new mapboxgl.Map({
// 	style: 'mapbox://styles/mapbox/light-v10',
// 	center: [ 121.08904, 14.58374 ],
// 	zoom: 15.5,
// 	pitch: 45,
// 	bearing: -17.6,
// 	container: 'map',
// 	antialias: true
// });

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
// map.on('load', function() {
// 	// Insert the layer beneath any symbol layer.
// 	var layers = map.getStyle().layers;

// 	var labelLayerId;
// 	for (var i = 0; i < layers.length; i++) {
// 		if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
// 			labelLayerId = layers[i].id;
// 			break;
// 		}
// 	}

// 	map.addLayer(
// 		{
// 			id: '3d-buildings',
// 			source: 'composite',
// 			'source-layer': 'building',
// 			filter: [ '==', 'extrude', 'true' ],
// 			type: 'fill-extrusion',
// 			minzoom: 15,
// 			paint: {
// 				'fill-extrusion-color': '#aaa',

// 				// use an 'interpolate' expression to add a smooth transition effect to the
// 				// buildings as the user zooms in
// 				'fill-extrusion-height': [ 'interpolate', [ 'linear' ], [ 'zoom' ], 15, 0, 15.05, [ 'get', 'height' ] ],
// 				'fill-extrusion-base': [
// 					'interpolate',
// 					[ 'linear' ],
// 					[ 'zoom' ],
// 					15,
// 					0,
// 					15.05,
// 					[ 'get', 'min_height' ]
// 				],
// 				'fill-extrusion-opacity': 0.6
// 			}
// 		},
// 		labelLayerId
// 	);
// });

// mapboxgl.accessToken = 'pk.eyJ1IjoiYm9iYnlmZXJyZXIiLCJhIjoiY2p5and1aXo4MDhjdjNibjRsZ2VnbnI5diJ9.EvMqr1VHIa3eFhcEmeKPzQ';
// var map = new mapboxgl.Map({
// 	container: 'map',
// 	style: 'mapbox://styles/mapbox/light-v10',
// 	center: [ 121.08904, 14.58374 ],
// 	zoom: 15.5,
// 	pitch: 45
// });

// function rotateCamera(timestamp) {
// 	// clamp the rotation between 0 -360 degrees
// 	// Divide timestamp by 100 to slow rotation to ~10 degrees / sec
// 	map.rotateTo((timestamp / 100) % 360, { duration: 0 });
// 	// Request the next frame of the animation.
// 	requestAnimationFrame(rotateCamera);
// }

// map.on('load', function() {
// 	// Start the animation.
// 	rotateCamera(0);

// 	// Add 3d buildings and remove label layers to enhance the map
// 	var layers = map.getStyle().layers;
// 	for (var i = 0; i < layers.length; i++) {
// 		if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
// 			// remove text labels
// 			map.removeLayer(layers[i].id);
// 		}
// 	}

// 	map.addLayer({
// 		id: '3d-buildings',
// 		source: 'composite',
// 		'source-layer': 'building',
// 		filter: [ '==', 'extrude', 'true' ],
// 		type: 'fill-extrusion',
// 		minzoom: 15,
// 		paint: {
// 			'fill-extrusion-color': '#aaa',

// 			// use an 'interpolate' expression to add a smooth transition effect to the
// 			// buildings as the user zooms in
// 			'fill-extrusion-height': [ 'interpolate', [ 'linear' ], [ 'zoom' ], 15, 0, 15.05, [ 'get', 'height' ] ],
// 			'fill-extrusion-base': [ 'interpolate', [ 'linear' ], [ 'zoom' ], 15, 0, 15.05, [ 'get', 'min_height' ] ],
// 			'fill-extrusion-opacity': 0.6
// 		}
// 	});
// });
