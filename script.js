mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWh4eWNoZW4iLCJhIjoiY2xyZnB4c2h0MDhnMzJqcGpvZ2sxOHk4byJ9.yIz3cOJ6CJBeoUb3hvbBFA'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/sarahxychen/clsil73k103lp01pbfsu0fl5a', // style URL
    center: [-79.39869609898406, 43.66291907643984], // starting position [lng, lat] 
    zoom: 16 // starting zoom
});

map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', { 
        type: 'geojson',
        data: {
             "type": "FeatureCollection", 
             "features": [
                  {
                    "type": "Feature", 
                    "properties": {
                        "name": "Sidney Smith Hall" 
                    },
                     "geometry": { 
                        "coordinates": [
                          -79.39865237301687,
                          43.662343395037766
                        ],
                         "type": "Point" 
                    }
                } 
            ]
        } 
    });
    
    map.addLayer({
    'id': 'uoft-pnt', 'type': 'circle', 'source': 'uoft-data', 'paint': {
    'circle-radius': 6,
    'circle-color': '#B42222' }
    }); });