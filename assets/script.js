// const moment = require('moment');
// let now = moment();

// console.log(now.format("HH:mm:ss"));

// let saveBtnEl = document.querySelector(".saveBtn float-right")
// let addto9amScheduleEl = document.getElementById("input9am")
let nineamEl = document.getElementById("9am")
let nineamTime = moment().hour()








// function handle9amSaveEvent(ev) {
// 	ev.preventDefault()
// 	let inputValue = addto9amScheduleEl.value
// 	console.log(addto9amScheduleEl.value)

// 	localStorage.setItem('task', JSON.stringify(inputValue))
						
// 	let newtask9amEl = document.createElement('li');
//   console.log("created li")
// 	newtask9amEl.textContent = inputValue
// 	addto9amScheduleEl.appendChild(newtask9amEl)
// }
// saveBtnEl.addEventListener('click', handle9amSaveEvent) 

let now = moment().format("LT");
    morning = moment("09:00 AM")
    evening = moment("05:00 PM")
console.log(now)


if (now.isBetween(morning, evening)) {

  console.log('is between')

} else {

  console.log('is not between')

}





// ("saveBtn").on("click", function() {
//   // get current text of p element
//   console.log(this)
//   var text = $(this)
//     .text()
//     .trim();
//   // replace p element with a new textarea
//   var textInput = $("<saveBtn>")
//     .val(text);
  
//   $(this).replaceWith(textInput);
//   textInput.trigger("focus");
// });



// .addClass("form-control")










// $("#modalDueDate").datepicker({
//     minDate: 1
//   });

// $(".list-group").on("click", "span", function() {
//     // get current text
//     var date = $(this).text().trim();
  
//     // create new input element
//     var dateInput = $("<input>").attr("type", "text").addClass("form-control").val(date);
  
//     $(this).replaceWith(dateInput);
  
//     // enable jquery ui datepicker
//     dateInput.datepicker({
//       minDate: 1
//     });
  
//     // automatically bring up the calendar
//     dateInput.trigger("focus");
//   });


//   // To get the current date and time, just call moment() with no parameters.
//   var now = moment();
// // logs the date, year, and current time
//   var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
// console.log(rightNow);



