//Global Variables and Functions
// var eventOutput = document.querySelector("#event-output");
var eventInput = document.querySelector("#event-input");
var saveBtn = document.querySelector(".saveBtn");
var styleGray = document.querySelector(".past");
var styleRed = document.querySelector(".present");
var styleGreen = document.querySelector(".future");
var hour = document.querySelector(".hour");

//Create Daily Planner using HTML and CSS

//Display Current Date
var today = moment();
$("#currentDay").text(today.format("ddd, MMMM Do YYYY"));

var currentTime = moment();
$("#currentTime").text(currentTime.format("h:mm A"));


//Each timeblock should be coded to indicate present, past, future.
function timeIndicator(currentTime){
  if (hour === currentTime){
    styleRed;
    console.log("styleRed");
   } else if (hour < currentTime) {
     styleGray;
     console.log("styleGray");
    } else if (hour > currentTime){
     styleGreen;
     console.log("styleGreen");
   }
 
}

 
//User can add new events to time blocks and save event.

function renderEvents() {
  var events = localStorage.getItem("newEvent");
  eventInput.textContent = events;
}

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var newEvent = document.querySelector("#event-input").value;

    localStorage.setItem("newEvent", newEvent);
    renderEvents();
  }
);




renderEvents();
timeIndicator();