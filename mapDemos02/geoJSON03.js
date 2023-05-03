/*
    data URL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000"
    SF, CA Coords: 37.7749, -122.4194
*/

// map variable that points to SF
var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 12
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// make a call to d3.json and get the data from the url
var dataURL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";

// use d3.json() to make a heatmap from the promise data
d3.json(dataURL).then(
    function(data)
    {
        // make an empty array to hold all of hte points
        var heatArray = [];

        // loop through the array of data points
        for (var i = 0; i < data.length; i++)
        {
            // extract the location - saving the location property
            var location = data[i].location;

            // push the coordinates as an array to the heatArray - in reverse so long is first
            heatArray.push(
                [
                    location.coordinates[1],
                    location.coordinates[0]
                ]
            );

        }

        // use L.heatLayer() to create a heatmap from the array of points and add them to the map
        var heat = L.heatLayer(heatArray, {
            radius: 25,
            blur: 40
        }).addTo(myMap);
    }
)