// DEFINE HTML IDS AS VARIABLES
var currentDayEl = $('#currentDay');

// Display Current Day and Time
function displayCurrentTime() {
  // var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  var rightNow = moment().format('MMM DD, YYYY [at] HH');
  currentDayEl.text(rightNow);
}
//TODO: You really just need a variable for HH to do tense comparison

// call displayCurrentTime function to display seconds in real time
setInterval(displayCurrentTime, 1000);

// TODO: Write a function that 1) does a loop to go through every time-slot div and figures out if the time of that div is greater than the current time, and if so, add attr of past/present/future/etc

// Function should have maybe some sort of loop
// for (var i = 0; i < someParameter.length; i++) {
//   // Do something
  
// }

function someFunction(){


}

var $timeKeeper = [];

// Event Listener for Save Button
$(".saveBtn").on("click", function () {
  // TODO: figure out the syntax to say when "THIS" button is clicked, only grab the value of THIS input field

  // duh Candra, you need an empty array  to collect all this junk, instead of obliterating everything

  // var $text = $(".description").val();
  var $thisText = $(this).siblings("input").val();

  $timeKeeper.push($thisText)
  console.log($timeKeeper);

  // Save text in local storage
  localStorage.setItem("text", $thisText);
  // console.log("There's got to be an easier way to save every single description like: " + $text);

  //TODO LIST:
  // add a mechanism to find the ID relative to the button click
  // store in an object so you can pair where it came from AS WELL as the value of the content
  // assign a class based on the value being greater or less than the current time
});

// TODO: my plan is to store every entered value so that it stays on the screen, even after refresh. Possible getItem and then setItem? Explore more...
// Get values from each time slot
// var now = new Date().getHours();
// if (now > 9) {
//   $("#comment9am").addClass("past");
// }
// $("#hour5 .description").val(localStorage.getItem("hour5"));

// TODO: Come up with a better idea other than giving EACH save button it's own id to parse/get/set/store the accompanying value; there's got to be an easy, shorter code