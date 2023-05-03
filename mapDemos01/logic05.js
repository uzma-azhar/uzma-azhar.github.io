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

/*
    create an array of objects for each location
*/

var cities = [
    {
        name: "New York",
        location: [40.7128, -74.0059],
        population: 8804190
    },
    {
        name: "Los Angeles",
        location: [34.0522, -118.2437],
        population: 3898747
    },
    {
        name: "Houston",
        location: [29.7604, -95.3698],
        population: 2304580
    },
    {
        name: "Omaha",
        location: [41.2524, -95.9980],
        population: 486051
    },
    {
        name: "Chicago",
        location: [41.8781, -87.6298],
        population: 2746388
    }
];

// function that will calculate the size of each circle radius by taking the square root
// of the population and mulitplying times 40
function markerSize(pop)
{
    return Math.sqrt(pop) * 40;
}

// loop through each city in the array of cities and extract the necessary attribues to build
// a circler marker and then add a popup to the map
for (var i = 0; i < cities.length; i++)
{
    L.circle(
        cities[i].location, // extracts the location property (coordinates) from the object
        {
            color: "black",
            fillColor: "blue",
            fillOpacity: 0.75,
            // set the radius property - call the markersize function to calculate the radius
            // by using the population property
            radius: markerSize(cities[i].population)
        }
    )
    .bindPopup(
        `<center><h1>${cities[i].name}<h1><hr><h3>Population: ${cities[i].population}</h3></center>`
    )
    .addTo(myMap);
}
