/*
=============================
ALAS! SUCCESS!!!!
=============================
Prior to the code you're viewing now, I wrote a function for literally EVERY hour pictured in this application.
I knew in my heart there was an easier way. I finally bit the bullet and wrote out a loop that actually
1. Checks to see if anything exists in local storage
2. If something exists, it prints the value into the input field

I'm sure that's not info you care about... I'm just celebrating my mini successes here... in my comments, LOL!
Enjoy!
*/

// RUN A LOOP: Check every description input (note: the first hour pictured is 5am, so the index will be 5 rather than the tyipcal 0). If a value exists... reprint it.
for (var i = 5; i <= 18; i++) {
  // NOTE: i = 5.... in the HTML, this refers to the very first save button of the very first hour, 5am, who's ID=5
  
  // Check to see the output in storage currently
  console.log(localStorage.getItem(i));
  
  /* This line is concatenating the # symbol to the variable, so the DOM knows to search for this SPECIFIC ID
     then it travels upwards to find the sibling element, which is the input field we're looking for,
     then it grabs the VALUE (if any) of that input field, and grabs it.
  */
  $("#" + i).siblings("input").val(localStorage.getItem(i));

  // NOTE TO CANDRA: it's important to run this loop first. I tried placing it towards the bottom, but this application reads from the Top/Down.

}

// DEFINE HTML DATE DIV ID AS A VARIABLE
var currentDayEl = $('#currentDay');

// Create a function that handles the displaying of present day + time in the jumbotron
function displayCurrentTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDayEl.text(rightNow);
}

// Call displayCurrentTime function to display seconds in real time
setInterval(displayCurrentTime, 1000);

// Defining a variable GLOBALLY for future use for time comparison in timeTracker's local scope
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

// Creating a global, empty array as a means of storing the entered values from the saveBtn event listener
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

// FINAL STEP: CLEAR THE FORM, IF PROMPTED BY THE "CLEAR SCHEDULE" BUTTON CLICK
function clearForm() {
  document.getElementById("myTimeSheet").reset();
  localStorage.clear();
}
