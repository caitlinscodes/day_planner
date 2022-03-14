//Global Variables and Functions
var timeBlocks = document.querySelector(".container");

//Create Daily Planner using HTML and CSS

//The current date should display at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("MM-DD-YYYY"));
//There should be a list of hourly time blocks in the body of the calendar from 8am to 5pm.

//Each timeblock should be coded to indicate present, past, future, (utilize moment is before, is current, is after)

//User can add new events to time blocks and save event (textarea, localStorage)

//User should be able to see the saved events after the page is refreshed



