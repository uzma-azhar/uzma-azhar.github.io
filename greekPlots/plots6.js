// set a function that initializes the plot
function init()
{
    // load the data and load the charts
    d3.json("data.json").then(function(data){
        trace = {
            x: data.map(data => data.pair),
            y: data.map(data => data.greekSearchResults),
            type: "bar"
        }

        traceData = [trace];

        layout = {
            title: "Greek Search Results"
        }

        Plotly.newPlot("plot", traceData, layout);
    });
}

// make a function that updates the plot
function updatePlot()
{
    d3.json("data.json").then(function(data) {  
        // d3 selector on the dropdown menu
        let dropdown = d3.select("#selDataset");

        // access nested value properties from the options in the dropdown
        let dataset = dropdown.property("value");

        let x = [];
        let y = []; 
        let label = "";

        // based on the value attribute from either option in the dropdown
        // establish the values of the arrays for the data for the traces
        // JS won't let you declare variables in an if statement so do those beforehand
        
        if(dataset == "greek")
        {
            x = data.map(data => data.pair);
            y = data.map(data => data.greekSearchResults);
            label = "Greek Search Results"
        }
        else if(dataset == "roman")
        {
            x = data.map(data => data.pair);
            y = data.map(data => data.romanSearchResults);
            label = "Roman Search Results"
        }

        // .restyle to reset the plot to the right dataset
        let update = {
            title: label
        }

        // call on Plotly.restyle() to restyle the plot
        Plotly.restyle("plot", "x", [x]);
        Plotly.restyle("plot", "y", [y]);
        Plotly.relayout("plot", update);

    })
}

// call on d3 selector associate the dropdown with an object
d3.selectAll("#selDataset").on("change", updatePlot);

// call init()
init();