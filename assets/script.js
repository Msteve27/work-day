$("#modalDueDate").datepicker({
    minDate: 1
  });

$(".list-group").on("click", "span", function() {
    // get current text
    var date = $(this).text().trim();
  
    // create new input element
    var dateInput = $("<input>").attr("type", "text").addClass("form-control").val(date);
  
    $(this).replaceWith(dateInput);
  
    // enable jquery ui datepicker
    dateInput.datepicker({
      minDate: 1
    });
  
    // automatically bring up the calendar
    dateInput.trigger("focus");
  });


  // To get the current date and time, just call moment() with no parameters.
  var now = moment();
// logs the date, year, and current time
  var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);



