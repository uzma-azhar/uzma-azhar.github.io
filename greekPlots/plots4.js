/*
    goal is to make a clustered column chart
        grab all the greek names - store in an array
        grab all the roman names - store in an array
        grab all greek search results - store in an array
        grabl all roman search results - store in an array
*/

// declare the arrays to hold each set of data
/*let greekNames = [];
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
*/ 

// Plot 2: instead of doing the above as we did in plots.js 
// use .map() to create the arrays - instead of declaring them

/*let pairs = searchResults.map(function(result) {
    return searchResults.pair;
})*/

// Plot 2: instead of the longer version of map - same thing as above
// let pairs = searchResults.map(result => result.pair);

// to plot data, first we need ot have our trace info
/*let greekTrace = {
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
};*/

// Plot 3: make a function that will allow for us to filter entries with over 1000000
// search results
function popularGreek(entry) {
    return entry.greekSearchResults > 1000000;
    // when this function is used with the .filter() function it finds and returns entries that satisfy that criteria
}

// make an array of popular Greek entries
let poppinGreeks = searchResults.filter(popularGreek); // uses the function to filter based on criteria

function popularRomans(entry) {
    return entry.romanSearchResults > 1000000;
    // when this function is used with the .filter() function it finds and returns entries that satisfy that criteria
}

// make an array of popular Greek entries
let poppinRomans = searchResults.filter(popularRomans); // uses the function to filter based on criteria

// we can also sort and slice the data to filter for the top 10 results
poppinGreeks = poppinGreeks.sort((a,b) => b.greekSearchResults - a.greekSearchResults)
poppinGreeks = poppinRomans.sort((a,b) => b.romanSearchResults - a.romanSearchResults)

// slice the data to the first 10 results
poppinGreeks = poppinGreeks.slice(0,10);
poppinRomans = poppinRomans.slice(0,10);

// use .reverse() function to flip the data in reverse order - great for horizontal bar charts
poppinGreeks = poppinGreeks.reverse();
poppinRomans = poppinRomans.reverse();

// Plot 4 - changed from searchResults to poppinRomans/poppinGreeks - switched x's and y's
let greekTrace = {
    y: poppinGreeks.map(result => result.pair),
    x: poppinGreeks.map(result => result.greekSearchResults),
    text: poppinGreeks.map(result => result.greekName),
    name: "Greek", // label for our legend
    type: "bar",
    orientation: "h"
};

let romanTrace = {
    y: poppinRomans.map(result => result.pair),
    x: poppinRomans.map(result => result.romanSearchResults),
    text: poppinRomans.map(result => result.romanName),
    name: "Roman", // label for our legend
    type: "bar",
    orientation: "h"
};

// Plot 4: create the array for our traces to be plotted separately instead
/*let data = [greekTrace, romanTrace];*/
let greekData = [greekTrace]
let romanData = [romanTrace]

// add the layout properties
let greeklayout = {
    title: "Greek Search Results",
    margin: {
        l: 100,
        r: 100,
        b: 100,
        t: 100
    }
};

let romanlayout = {
    title: "Roman Search Results",
    margin: {
        l: 100,
        r: 100,
        b: 100,
        t: 100
    }
};

// render the plot to the tag with id = "plot1"/"plot2"
Plotly.newPlot("plot1", greekData, greeklayout);
Plotly.newPlot("plot2", romanData, romanlayout);