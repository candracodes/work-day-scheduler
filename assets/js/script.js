// DEFINE HTML IDS AS VARIABLES
var currentDayEl = $('#currentDay');

// Display Current Day and Time
function displayCurrentTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDayEl.text(rightNow);
}

// call displayCurrentTime function to display seconds in real time
setInterval(displayCurrentTime, 1000);

// TODO: Write a function that 1) does a loop to go through every time-slot div and figures out if the time of that div is greater than the current time, and if so, add attr of past/present/future/etc

// Function should have maybe some sort of loop
// for (var i = 0; i < someParameter.length; i++) {
//   // Do something
  
// }

function someFunction(){

// for every ID that has .time-block ... check to see what the number ID, and if that id is > the current time, add a class
// of past

// if THIS is clicked, then store locally, and setItem locally

}


// Event Listener for Save Button
$(".saveBtn").on("click", function () {
  // TODO: figure out the syntax to say when "THIS" button is clicked, only grab the value of THIS input field
  // console.log(this);
  // Get nearby values of the description in JQuery

  var $text = $(".description").val();

  console.log($(this).siblings("input").val());

  // Save text in local storage
  localStorage.setItem("text", $text);
  // console.log("There's got to be an easier way to save every single description like: " + $text);
});

// TODO: my plan is to store every entered value so that it stays on the screen, even after refresh. Possible getItem and then setItem? Explore more...
// Get values from each time slot
// var now = new Date().getHours();
// if (now > 9) {
//   $("#comment9am").addClass("past");
// }
// $("#hour5 .description").val(localStorage.getItem("hour5"));

// TODO: Come up with a better idea other than giving EACH save button it's own id to parse/get/set/store the accompanying value; there's got to be an easy, shorter code