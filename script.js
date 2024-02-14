// Add basemap
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWh4eWNoZW4iLCJhIjoiY2xyZnB4c2h0MDhnMzJqcGpvZ2sxOHk4byJ9.yIz3cOJ6CJBeoUb3hvbBFA'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/sarahxychen/clskmpfs603tf01p25v25bs4j', // style URL
    center: [-79.373958, 43.664337], // starting position [lng, lat] 
    zoom: 11.72 // starting zoom
});

// Add biking parking point GeoJSON

map.on('load', () => {
    map.addSource('Bike-parking', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/sarahxychen/GGR472_Lab2Git/main/bike_parking.geojson' 
        });

    map.addLayer({ // Styling source data
        'id': 'parking-point', 
        'type': 'circle', 
        'source': 'Bike-parking', 
        'paint': {
            'circle-radius': 5,
            'circle-color': '#fb32b5' 
        }
    });
});

// Add cycling network GeoJSON

map.on('load', () => {
    map.addSource('Cycle-network', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/sarahxychen/GGR472_Lab2Git/main/cycling-network.geojson'
        });

    map.addLayer({ // Styling source data
        'id': 'cycle-path', 
        'type': 'line', 
        'source': 'Cycle-network', 
        'paint': {
            'line-width': 2,
            'line-color': '#9404fb' 
        }
    });
});


    // map.addLayer({
        // 'id': 'Bicycle Parking Points', // Create your own layer ID
        // 'type': 'fill', // Note this is different to point data 
        // 'source': 'Bicycle Parking', // Must match source ID from addSource Method 
        // 'paint': {
            // 'fill-color': '#888888', // Test alternative colours and style properties 
            // 'fill-opacity': 0.4,
            // 'fill-outline-color': 'black'
        // },
        // 'source-layer': 'Bicycle_Parking_Map_Data-4mbsiy' // Tileset NAME (diff to ID), get this from mapbox tileset page
        // },
        // Here the addlayer method takes 2 arguments (the layer as an object and a string for another layer's name). If the other layer already exists, the new layer will be drawn before that one
        // );

        // map.addLayer({ 
            // 'id': 'parking-point', 
            // 'type': 'circle', 
            // 'source': 'Bike-parking', 
            // 'paint': {
                // 'circle-radius': 5,
                // 'circle-color': '#007cbf' 
            // }
        // });