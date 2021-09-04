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

// TODO: Find a simpler way to write the below logic. My gut it telling me this should be a loop, and probably live inside the saveBtn event listener

/*
=============================
NOTE TO ASSIGNMENT REVIEWER:
=============================
Okay... I'll be the first to admit... I hate the way I came to this conclusion. 
It's dirty, it's redundant.... but it works.
I hate myself for how this is written, but everything else I tried wasn't getting the job done.
So... to the person grading this assignment... whomever you are... 
please put me out of my misery and tell me how you'd go about storing the local values to remain on the page, even after refresh.
*/

// STEP 1: CALL ALL STORED VALUES AS SOON AS THE PAGE LOADS
window.onload = function () {
  fiveAm();
  sixAm();
  sevenAm();
  eightAm();
  nineAm();
  tenAm();
  elevenAm();
  twelvePm();
  onePm();
  twoPm();
  threePm();
  fourPm();
  fivePm();
  sizePm();
}

// STEPS 2 - 15: Define every component needed, capture the value's input, store it as output when THIS button is clicked

// 5AM
function fiveAm() {
  //DEFINE
  var timeBlockInput5El = document.querySelector("#hour5");
  var timeBlockOutput5El = document.querySelector("#hour5");
  var saveBtn5El = document.getElementById("5");
  // EVENT LISTENER
  saveBtn5El.addEventListener("click", updateOutput5);
  // "GETTING" AND "PUTTING"
  timeBlockOutput5El.textContent = localStorage.getItem("timeblock5am");
  timeBlockInput5El.value = localStorage.getItem("timeblock5am");
  // STORING AND SAVING
  function updateOutput5() {
    localStorage.setItem("timeblock5am", timeBlockInput5El.value);
    timeBlockOutput5El.textContent = timeBlockInput5El.value;
  }
}

// 6AM
function sixAm() {
  //DEFINE
  var timeBlockInput6El = document.querySelector("#hour6");
  var timeBlockOutput6El = document.querySelector("#hour6");
  var saveBtn6El = document.getElementById("6");
  // EVENT LISTENER
  saveBtn6El.addEventListener("click", updateOutput6);
  // "GETTING" AND "PUTTING"
  timeBlockOutput6El.textContent = localStorage.getItem("timeblock6am");
  timeBlockInput6El.value = localStorage.getItem("timeblock6am");
  // STORING AND SAVING
  function updateOutput6() {
    localStorage.setItem("timeblock6am", timeBlockInput6El.value);
    timeBlockOutput6El.textContent = timeBlockInput6El.value;
  }
}

// 7AM
function sevenAm() {
  //DEFINE
  var timeBlockInput7El = document.querySelector("#hour7");
  var timeBlockOutput7El = document.querySelector("#hour7");
  var saveBtn7El = document.getElementById("7");
  // EVENT LISTENER
  saveBtn7El.addEventListener("click", updateOutput7);
  // "GETTING" AND "PUTTING"
  timeBlockOutput7El.textContent = localStorage.getItem("timeblock7am");
  timeBlockInput7El.value = localStorage.getItem("timeblock7am");
  // STORING AND SAVING
  function updateOutput7() {
    localStorage.setItem("timeblock7am", timeBlockInput7El.value);
    timeBlockOutput7El.textContent = timeBlockInput7El.value;
  }
}

// 8AM
function eightAm() {
  //DEFINE
  var timeBlockInput8El = document.querySelector("#hour8");
  var timeBlockOutput8El = document.querySelector("#hour8");
  var saveBtn8El = document.getElementById("8");
  // EVENT LISTENER
  saveBtn8El.addEventListener("click", updateOutput8);
  // "GETTING" AND "PUTTING"
  timeBlockOutput8El.textContent = localStorage.getItem("timeblock8am");
  timeBlockInput8El.value = localStorage.getItem("timeblock8am");
  // STORING AND SAVING
  function updateOutput8() {
    localStorage.setItem("timeblock8am", timeBlockInput8El.value);
    timeBlockOutput8El.textContent = timeBlockInput8El.value;
  }
}

// 9AM
function nineAm() {
  //DEFINE
  var timeBlockInput9El = document.querySelector("#hour9");
  var timeBlockOutput9El = document.querySelector("#hour9");
  var saveBtn9El = document.getElementById("9");
  // EVENT LISTENER
  saveBtn9El.addEventListener("click", updateOutput9);
  // "GETTING" AND "PUTTING"
  timeBlockOutput9El.textContent = localStorage.getItem("timeblock9am");
  timeBlockInput9El.value = localStorage.getItem("timeblock9am");
  // STORING AND SAVING
  function updateOutput9() {
    localStorage.setItem("timeblock9am", timeBlockInput9El.value);
    timeBlockOutput9El.textContent = timeBlockInput9El.value;
  }
}

// 10AM
function tenAm() {
  //DEFINE
  var timeBlockInput10El = document.querySelector("#hour10");
  var timeBlockOutput10El = document.querySelector("#hour10");
  var saveBtn10El = document.getElementById("10");
  // EVENT LISTENER
  saveBtn10El.addEventListener("click", updateOutput10);
  // "GETTING" AND "PUTTING"
  timeBlockOutput10El.textContent = localStorage.getItem("timeblock10am");
  timeBlockInput10El.value = localStorage.getItem("timeblock10am");
  // STORING AND SAVING
  function updateOutput10() {
    localStorage.setItem("timeblock10am", timeBlockInput10El.value);
    timeBlockOutput10El.textContent = timeBlockInput10El.value;
  }
}

// 11AM
function elevenAm() {
  //DEFINE
  var timeBlockInput11El = document.querySelector("#hour11");
  var timeBlockOutput11El = document.querySelector("#hour11");
  var saveBtn11El = document.getElementById("11");
  // EVENT LISTENER
  saveBtn11El.addEventListener("click", updateOutput11);
  // "GETTING" AND "PUTTING"
  timeBlockOutput11El.textContent = localStorage.getItem("timeblock11am");
  timeBlockInput11El.value = localStorage.getItem("timeblock11am");
  // STORING AND SAVING
  function updateOutput11() {
    localStorage.setItem("timeblock11am", timeBlockInput11El.value);
    timeBlockOutput11El.textContent = timeBlockInput11El.value;
  }
}

// 12PM
function twelvePm() {
  //DEFINE
  var timeBlockInput12El = document.querySelector("#hour12");
  var timeBlockOutput12El = document.querySelector("#hour12");
  var saveBtn12El = document.getElementById("12");
  // EVENT LISTENER
  saveBtn12El.addEventListener("click", updateOutput12);
  // "GETTING" AND "PUTTING"
  timeBlockOutput12El.textContent = localStorage.getItem("timeblock12pm");
  timeBlockInput12El.value = localStorage.getItem("timeblock12pm");
  // STORING AND SAVING
  function updateOutput12() {
    localStorage.setItem("timeblock12pm", timeBlockInput12El.value);
    timeBlockOutput12El.textContent = timeBlockInput12El.value;
  }
}

// 1PM OR 1300
function onePm() {
  //DEFINE
  var timeBlockInput13El = document.querySelector("#hour13");
  var timeBlockOutput13El = document.querySelector("#hour13");
  var saveBtn13El = document.getElementById("13");
  // EVENT LISTENER
  saveBtn13El.addEventListener("click", updateOutput13);
  // "GETTING" AND "PUTTING"
  timeBlockOutput13El.textContent = localStorage.getItem("timeblock1pm");
  timeBlockInput13El.value = localStorage.getItem("timeblock1pm");
  // STORING AND SAVING
  function updateOutput13() {
    localStorage.setItem("timeblock1pm", timeBlockInput13El.value);
    timeBlockOutput13El.textContent = timeBlockInput13El.value;
  }
}

// 2PM OR 1400
function twoPm() {
  //DEFINE
  var timeBlockInput14El = document.querySelector("#hour14");
  var timeBlockOutput14El = document.querySelector("#hour14");
  var saveBtn14El = document.getElementById("14");
  // EVENT LISTENER
  saveBtn14El.addEventListener("click", updateOutput14);
  // "GETTING" AND "PUTTING"
  timeBlockOutput14El.textContent = localStorage.getItem("timeblock2pm");
  timeBlockInput14El.value = localStorage.getItem("timeblock2pm");
  // STORING AND SAVING
  function updateOutput14() {
    localStorage.setItem("timeblock2pm", timeBlockInput14El.value);
    timeBlockOutput14El.textContent = timeBlockInput14El.value;
  }
}

// 3PM OR 1500
function threePm() {
  //DEFINE
  var timeBlockInput15El = document.querySelector("#hour15");
  var timeBlockOutput15El = document.querySelector("#hour15");
  var saveBtn15El = document.getElementById("15");
  // EVENT LISTENER
  saveBtn15El.addEventListener("click", updateOutput15);
  // "GETTING" AND "PUTTING"
  timeBlockOutput15El.textContent = localStorage.getItem("timeblock3pm");
  timeBlockInput15El.value = localStorage.getItem("timeblock3pm");
  // STORING AND SAVING
  function updateOutput15() {
    localStorage.setItem("timeblock3pm", timeBlockInput15El.value);
    timeBlockOutput15El.textContent = timeBlockInput15El.value;
  }
}

// 4PM OR 1600
function fourPm() {
  //DEFINE
  var timeBlockInput16El = document.querySelector("#hour16");
  var timeBlockOutput16El = document.querySelector("#hour16");
  var saveBtn16El = document.getElementById("16");
  // EVENT LISTENER
  saveBtn16El.addEventListener("click", updateOutput16);
  // "GETTING" AND "PUTTING"
  timeBlockOutput16El.textContent = localStorage.getItem("timeblock4pm");
  timeBlockInput16El.value = localStorage.getItem("timeblock4pm");
  // STORING AND SAVING
  function updateOutput16() {
    localStorage.setItem("timeblock4pm", timeBlockInput16El.value);
    timeBlockOutput16El.textContent = timeBlockInput16El.value;
  }
}

// 5PM OR 1700
function fivePm() {
  //DEFINE
  var timeBlockInput17El = document.querySelector("#hour17");
  var timeBlockOutput17El = document.querySelector("#hour17");
  var saveBtn17El = document.getElementById("17");
  // EVENT LISTENER
  saveBtn17El.addEventListener("click", updateOutput17);
  // "GETTING" AND "PUTTING"
  timeBlockOutput17El.textContent = localStorage.getItem("timeblock5pm");
  timeBlockInput17El.value = localStorage.getItem("timeblock5pm");
  // STORING AND SAVING
  function updateOutput17() {
    localStorage.setItem("timeblock5pm", timeBlockInput17El.value);
    timeBlockOutput17El.textContent = timeBlockInput17El.value;
  }
}

// 6PM OR 1800
function sizePm() {
  //DEFINE
  var timeBlockInput18El = document.querySelector("#hour18");
  var timeBlockOutput18El = document.querySelector("#hour18");
  var saveBtn18El = document.getElementById("18");
  // EVENT LISTENER
  saveBtn18El.addEventListener("click", updateOutput18);
  // "GETTING" AND "PUTTING"
  timeBlockOutput18El.textContent = localStorage.getItem("timeblock6pm");
  timeBlockInput18El.value = localStorage.getItem("timeblock6pm");
  // STORING AND SAVING
  function updateOutput18() {
    localStorage.setItem("timeblock6pm", timeBlockInput18El.value);
    timeBlockOutput18El.textContent = timeBlockInput18El.value;
  }
}


// FINAL STEP: CLEAR THE FORM, IF PROMPTED BY THE BUTTON CLICK
function clearForm() {
  document.getElementById("myTimeSheet").reset();
  localStorage.clear();
}