/*
    City
Latitude
Longitude

New York
40.7128
-74.0059

Los Angeles
34.0522
-118.2437

Houston
29.7604
-95.3698

Omaha
41.2524
-95.9980

Chicago
41.8781
-87.6298
*/

/* zoom level be somewhat low - center it on the USA */

// can also use setview to chain the initialization together
var myMap = L.map("map",
    {center: [37.0902, -95.7129], // coordinates of US center
    zoom : 4}
);

// add the initial tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add a marker for NYC
var nyc = L.marker(
    [40.7128, -74.0059],
    {
        title: "New York"
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable!
nyc.bindPopup("Hello from New York City!")

// add a marker for NYC
var la = L.marker(
    [34.0522, -118.2437],
    {
        title: "Los Angeles"
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable!
la.bindPopup("Hello from Los Angeles!")

// add a marker for NYC
var houston = L.marker(
    [29.7604, -95.3698],
    {
        title: "Houston"
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable!
houston.bindPopup("Hello from Houston!")

// add a marker for NYC
var omaha = L.marker(
    [41.2524, -95.9980],
    {
        title: "Omaha"
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable!
omaha.bindPopup("Hello from Omaha!")

// add a marker for NYC
var chicago = L.marker(
    [41.8781, -87.6298],
    {
        title: "Chicago"
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable!
chicago.bindPopup("Hello from Chicago!")