mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWh4eWNoZW4iLCJhIjoiY2xyZnB4c2h0MDhnMzJqcGpvZ2sxOHk4byJ9.yIz3cOJ6CJBeoUb3hvbBFA'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/sarahxychen/clsil73k103lp01pbfsu0fl5a', // style URL
    center: [-79.39869609898406, 43.66291907643984], // starting position [lng, lat] 
    zoom: 16 // starting zoom
});

map.on('load', () => {

    map.addSource('bike-parking', {
        type: 'geojson',
        data: 'https://github.com/sarahxychen/GGR472_Lab2Git/blob/cfd6268fe727bebe632badfcac4479933b3616f5/Bicycle%20Parking%20Map%20Data.geojson' // Your URL to your buildings.geojson file
        });
        map.addLayer({
             'id': 'parking-point', 'type': 'circle', 'source': 'bike-parking', 'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf' }
        });

    // Add a data source from a Mapbox tileset 
    map.addSource('Bicycle Parking', { // Create your own source ID
        'type': 'vector',
        'url': 'mapbox://sarahxychen.9jybl5lw' // Update to your mapbox tileset ID 
    }),

    map.addLayer({
        'id': 'Bicycle Parking Points', // Create your own layer ID
        'type': 'fill', // Note this is different to point data 
        'source': 'Bicycle Parking', // Must match source ID from addSource Method 
        'paint': {
            'fill-color': '#888888', // Test alternative colours and style properties 
            'fill-opacity': 0.4,
            'fill-outline-color': 'black'
        },
        'source-layer': 'Bicycle_Parking_Map_Data-4mbsiy' // Tileset NAME (diff to ID), get this from mapbox tileset page
        },
        // Here the addlayer method takes 2 arguments (the layer as an object and a string for another layer's name). If the other layer already exists, the new layer will be drawn before that one
        );
});
