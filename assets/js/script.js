// DEFINE HTML DATE DIV ID AS A VARIABLE
var currentDayEl = $('#currentDay');

// Create a function that handles the displaying of present day + time
function displayCurrentTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDayEl.text(rightNow);
}

// Call displayCurrentTime function to display seconds in real time
setInterval(displayCurrentTime, 1000);

// Defining a variable for future use for time comparison
var currentHourEl = moment().hour();
console.log("The hour is currently: " + currentHourEl + " in military time.");

// Define a function that handles the color association for past, present and future tense
function timeTracker() {

  // Run a loop that examines present time, and assigns a color
  $(".description").each(function () {

    // remove the "hour" from the string, and leave the associated number
    var $timeBlockTime = parseInt($(this).attr("id").split("hour")[1]);

    // if time is in the past
    if ($timeBlockTime < currentHourEl) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    // if time is in the present
    else if ($timeBlockTime === currentHourEl) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    // if time is in the future
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

  })

}

// Call timeTraacker function to display tense color attributes
timeTracker();

// Creating a global, empty array as a means of storing the entered values from the saveBtn even listener
var $timeKeeper = [];

// Event Listener for Save Button
$(".saveBtn").on("click", function () {

  // Capture THIS value entered in this specific input field by traversing the DOM
  var $thisText = $(this).siblings("input").val();

  // Capture the ID of THIS particular saveBtn
  var $thisButtonTime = $(this).attr("id");

  // Add the previously entered value to the end of the timeKeeper array
  $timeKeeper.push($thisText)

  // Store variables locally
  localStorage.setItem($thisButtonTime, $thisText);

  // Log messages to ensure variables are working
  console.log($timeKeeper);
  console.log("You've just clicked on the " + $thisButtonTime + " o'clock button");

});

// TODO: I want to capture the values of each time slot input without the prompt of a click
// $("#hour5 .description").val(localStorage.getItem("hour5"));
// $("#hour6 .description").val(localStorage.getItem("hour6"));

// TODO: Grasping at straws... can't get this info to stay on the page to save my life
function getLocalInfo() {
  var fiveAm = document.getElementById("hour5").value;
  var fiveAmLocalStorage = localStorage.getItem("5am", fiveAm);
}

getLocalInfo();
// document.getElementById("hour6").value = getSavedValue("hour6"); 
// document.getElementById("hour7").value = getSavedValue("hour7"); 


