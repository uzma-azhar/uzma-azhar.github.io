// access the URL endpoint
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    //console.log(data)
    // call the creatureFeatures function
    creatureFeatures(data.features) // send the features property over
});

// make a function to process the data
function creatureFeatures(earthquakeData)
{
    console.log(earthquakeData) // extract the data for our popups for each point

    // define a function that is called onEachFeature - to extract the location (name)
    // and the date and bind the popups
    function onEachFeature(feature, layer)
    {
        layer.bindPopup(
            `<center>${feature.properties.place}<hr>${new Date(feature.properties.time)}</center>` // new Dat lets us convert UTC to mm/dd/yy
        )
    };

    // use L.geoJSON to make the geoJSON marker layer
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature // onEachFeature (left) is the property for th emarker layer, onEachFeature (right) is the function applied to the marker layer
    });

    // call another function to make the map
    createMap(earthquakes);
}

function createMap(earthquakes)
{
    // tile layer options
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // make a tileLayer object
    var tiles = {
        "Street Map": street,
        "Topography Map": topo
    };

    // make overlay that uses the earthquake geoJSON marker layer
    var overlays = {
        "Earthquake Data": earthquakes
    };

    // make the map
    var myMap = L.map("map",
    {
        center: [37.0902, -95.7129], // coordinates of US center
        zoom : 4,
        layers: [street, earthquakes]
    });

    // layer control
    L.control.layers(tiles, overlays, {
        collapsed: false // allows it to expand
    }).addTo(myMap)
}