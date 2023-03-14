// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let today = dayjs();

// waits for the document to load or unitl 'ready' to execute 
$(document).ready(function()  {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


    // Loop through each div
    $('div').each(function() {
      // Get the ID of the div
      let timeDiv = $(this).attr('id');
  
      // Retrieve the value from local storage
      let textAreaVal = localStorage.getItem(timeDiv);
      if (textAreaVal !== null) {
        $(this).find('textarea').val(textAreaVal);
      } else {
        $(this).find('textarea').val(''); // set textarea value to empty string
      }

      $(this).find('.saveBtn').on('click', function() {
        console.log('Save button clicked in div with ID: ' + timeDiv);
        let textAreaVal = $(this).closest('div').find('textarea').val();
        localStorage.setItem(timeDiv, textAreaVal);
        setClass();

      });


    });
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  let time24Hour = "hour-"+ (today.format("H"));
  console.log(today.format("H"))
    console.log(time24Hour);
    function setClass() {
      $('div').each(function() {
        var timeDiv = $(this).attr('id');
        if (timeDiv === time24Hour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("present future").addClass("past");

        }
      });
      const divContainer = 
      $('.present').prevAll('div').addClass('past');
      $('.present').nextAll('div').addClass('future');
      $(".container-fluid").removeClass("past future present");
      $(".hour").removeClass("past future present");
    }

    setClass();




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.

$('#currentDay').text(today.format('MMM D, YYYY'));
});


// function allStorage() {

//   var archive = {},
//       keys = Object.keys(localStorage),
//       i = keys.length;

//   while ( i-- ) {
//       var value = localStorage.getItem(keys[i]);
//       if (value !== undefined) {
//           archive[keys[i]] = value;
//       }
//   }

//   return archive;
// }