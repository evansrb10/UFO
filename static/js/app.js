
//future inputs
//var inputField2 = d3.select("#city");
//var inputField3 = d3.select("#state");
//var inputField4 = d3.select("#country");
//var inputField5 = d3.select("#shape");



// Assign the data from `data.js` to a descriptive variable
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the ufo data from data.js
console.log(data);
//Loop Through `data` and console.log each report object
data.forEach(function(ufo_sightings) {
  console.log(ufo_sightings);
  //Use d3 to append one table row `tr` for each report object
  var row = tbody.append("tr");
  //Use `Object.entries` to console.log each report value
  Object.entries(ufo_sightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = tbody.append("td");
    cell.text(value);
  });
});
  

// Select the submit button
var submit = d3.select("#submit");

 // function to take entry and then make a new table
 submit.on("click", function() {
   // prevent page from refreshing
   d3.event.preventDefault();
   d3.select(".summary").html("");
   // user input as variable
   var inputField1 = d3.select("#datetime");
   var inputValue = inputField1.property("value");
   // Filter Data
   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
   // loop through
   filteredData.forEach((dateEntry) => {
     var row = tbody.append("tr");
     Object.entries(dateEntry).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });
