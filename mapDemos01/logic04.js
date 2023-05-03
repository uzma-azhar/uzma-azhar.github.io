/*
    Leaflet maps consist of layers:
        base layer - tile
        marker layer(s) - the markers that go on top of the tile
*/

// tell where the map is located - use l.map() in order to set the location of the map

// L - leaflet

// create our initial map object by setting the latitude, longitude, and zoom level
// store this information into a variable using let or var

// Atlanta coordinates: 33.7488° N, 84.3877° W

/* var myMap = L.map("map", 
    {
        center: [33.7488, -84.3877],
        zoom: 10
    }
); */

// can also use setview to chain the initialization together
var myMap = L.map("map").setView([33.7488, -84.3877], 10);

// add the initial tile layer to the map
// use L.tileLayer(tileattributes)
// .addTo(mapObject)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add a marker to the map
var marker = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello From Atlanta, GA, USA!"
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable!
marker.bindPopup("Hello From Atlanta, GA, USA!")

// draw a circle around GA Tech - 33.7756° N, 84.3963° W
// use L.circle
L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        fillColor: "yellow",
        radius: 500,
        fillOpacity: .80  // ranges from 0 to 1

    }
).bindPopup("Hello From GA Tech!")
.addTo(myMap);

// draw a rectangle starting at ponce city market using L.rectangle()
L.rectangle(
    [
        // specify the start and end of the rectangle
        [33.7738, -84.3666],
        [33.7718, -84.3646]
    ],
    {
        color: "black",
        fillColor: "red",
        stroke: true,
        weight: 2

    }
).bindPopup("Rectangle new Ponce City Market")
.addTo(myMap)

// use a polyline to draw a line from Mercedez Benz Stadium to State Farm Arena

L.polyline([
    [33.7573, -84.3963],
    [33.7553, -84.4006]
],
    {
        color: "red"
    }
).addTo(myMap);

// draw a polygon around Chateau Elan 
// use L.polygon() to draw a triangle
L.polygon(
    [
        [34.1018, -83.8177],
        [34.1008, -83.8167],
        [34.1058, -83.8157]
    ],
    {
        color: "yellow",
        fillColor: "yellow"
    }
).bindPopup("Triangle Near Chateau Elan").addTo(myMap)