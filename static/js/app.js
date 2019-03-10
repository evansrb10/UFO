var inputField1 = d3.select("#datetime");
//var inputField2 = d3.select("#city");
//var inputField3 = d3.select("#state");
//var inputField4 = d3.select("#country");
//var inputField5 = d3.select("#shape");

var submit = d3.select("#submit");

var tableData = data;

var attributes = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var fill = (dataInput) => {
  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    attributes.forEach(attribute => row.append("td").text(ufo_sightings[attribute])
    )
  });
}
fill(data);


// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data);
data.forEach(function(ufo_sightings) {
  console.log(ufo_sightings);
  var row = tbody.append("tr");
  Object.entries(ufo_sightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});




// Select the submit button

submit.on("click", () => {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Get the value property of the input element
  var inputDate = inputField1.property("value");
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate);

})
  