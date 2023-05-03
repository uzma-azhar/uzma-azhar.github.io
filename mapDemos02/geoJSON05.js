// coordinates of Florida [27.96044, -82.30695]

// make our map
var myMap = L.map("map", {
    center: [27.96044, -82.30695],
    zoom: 8
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// use d3.json() to access the data and create the plot
d3.json("ACS-ED_2014-2018_Economic.geojson").then(
    function(data)
    {
        console.log(data);

        // define a choropleth layer - use L.choropleth()
        var choroLayer = L.choropleth(data, {
            // extract property: DP03_16E
            valueProperty: "DP03_16E",

            // establish color scale for values in the map
            scale: ["#fee8c8", "#e34a33"],

            // tell the number of breaks in the step range in the color scale
            steps: 10,

            // establish breaks in "q" - quartile
            // "e" - equidistant
            // "k" - k-means mode 
            mode: "q",

            // styling for the borders
            style: {
                color: "white",
                weight: 1.5, 
                fillOpacity: 0.75
            },

            // onEachFeature to bind the popups
            onEachFeature: function(feature, layer)
            {
                layer.bindPopup(
                    `District Name: ${feature.properties.NAME}
                    <hr>Est. employed population with children age 6-17: 
                    <b>${feature.properties.DP03_16E.toLocaleString("en-US")}</b><br>
                    Est. Income and Benefits for families;
                    <b>${feature.properties.DP03_75E.toLocaleString("en-US")}</b>`
                );
            }
        }).addTo(myMap);

        // Set up the legend - inside of a control by using L.control()
        let legend = L.control(
            {position: "bottomright"}
        ); // set the position using the position property

        // set up the properties of the legend using .onAdd property
        // uses an inline function call to 'draw' the HTML code for the legend
        legend.onAdd = function() {
            // set up HTML properties of the legend here
            // legend is designed to create a new 'div' that is not already in the HTML
            // use L.DomUtil.create() to create the HTML that will go in the page
            // make a div with class = "info legend"
            let div = L.DomUtil.create("div", "info legend");

            // use the choropleth layer to get the followng pieces of info 
                // get the limits for the segements in the choropleth
                    // use .options.limits
                let limits = choroLayer.options.limits;
                console.log(limits)
                // get the colors that correspond to the limits for the segments
                // in the choropleth
                    // use .options.colors
                let colors = choroLayer.options.colors;
                console.log(colors)

                // add an array for the labels to be added
                let labels = [];

                // add the div code for the minimum and maximum
                /*
                    generate HTML code that looks like:
                    <h1>title</h1>
                    <div class = "labels">
                        <div class = "min">first label</div>
                            <ul>
                                <li>colored block</li>
                                <li>colored block</li>
                                <li>colored block</li>
                                <li>colored block</li>
                            </ul>
                        <div class = "max">first label</div>
                                        -> last label = limits(limits.length - 1)
                    </div>
                        
                */


                let legendInfo = "<h1>Population with Children<br>(ages 6- 17)</h1>" +
                "<div class = \"labels\">" + 
                "<div class = \"min\">" + limits[0] + "</div>" +
                "<div class = \"max\">" + limits[limits.length-1].toLocaleString() + 
                "</div>"
                "</div>"; 

                // use .innerHTML property to add the legendInfo to the legend
                div.innerHTML = legendInfo;

                // generate the code that draws the blocks using the ul
                // use forEach to loop through the limits and add a li for each color
                // and push the values into the labels array
                limits.forEach(
                    function(limit, index)
                    {
                        // generate the li with each color and push to the labels array
                        labels.push("<li style=\"background-color: " + colors[index]
                        +"\"></li>");
                    }
                );

                // use <ul> and join the text in the labels array to form the list 
                // then add the list to the div
                div.innerHTML += "<ul>" + labels.join("") + "</ul>";


            // return finalized div
            return div; 
        };

        
        // then add the div to the map
        legend.addTo(myMap);


    }
)