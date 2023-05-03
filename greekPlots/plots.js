/*
    goal is to make a clustered column chart
        grab all the greek names - store in an array
        grab all the roman names - store in an array
        grab all greek search results - store in an array
        grabl all roman search results - store in an array
*/

// declare the arrays to hold each set of data
let greekNames = [];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = []

// for loop to populate the arrays
// data.js and all of its information (searResults array is available!)
for (var i = 0; i < searchResults.length; i++)
{
    // access each entry of data
    result = searchResults[i];

    // with each entry, push the information into the necessary array
    pairs.push(result.pair); // just pulling the value of the pair property from data.js
    romanNames.push(result.romanName); // doing the same thing here and below
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);
}

// to plot data, first we need ot have our trace info
let greekTrace = {
    x: pairs,
    y: greekSearchResults,
    text: greekNames,
    name: "Greek", // label for our legend
    type: "bar"
};

let romanTrace = {
    x: pairs,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman", // label for our legend
    type: "bar"
};

// create the array for our traces to be plotted together
let data = [greekTrace, romanTrace];

// add the layout properties
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

// render the plot to the tag with id = "plot"
Plotly.newPlot("plot", data, layout);