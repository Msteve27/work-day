// const moment = require('moment');
// let now = moment();
// console.log(now.format("HH:mm:ss"));
// let addto9amScheduleEl = document.getElementById("input9am")


let saveBtn9amEl = document.getElementById("saveBtn9am")
let saveBtn10amEl = document.getElementById("saveBtn10am")
let saveBtn11amEl = document.getElementById("saveBtn11am")
let saveBtn12pmEl = document.getElementById("saveBtn12pm")
let saveBtn1pmEl = document.getElementById("saveBtn1pm")
let saveBtn2pmEl = document.getElementById("saveBtn2pm")
let saveBtn3pmEl = document.getElementById("saveBtn3pm")
let saveBtn4pmEl = document.getElementById("saveBtn4pm")
let saveBtn5pmEl = document.getElementById("saveBtn5pm")

let nineamTime = moment().hour()
let input9amEl = document.getElementById("input9am")
let container9amEl = document.getElementById("container9am")
let input10amEl = document.getElementById("input10am")
let container10amEl = document.getElementById("container10am")
let input11amEl = document.getElementById("input11am")
let container11amEl = document.getElementById("container11am")
let input12pmEl = document.getElementById("input12pm")
let container12pmEl = document.getElementById("container12pm")
let input1pmEl = document.getElementById("input1pm")
let container1pmEl = document.getElementById("container1pm")
let input2pmEl = document.getElementById("input2pm")
let container2pmEl = document.getElementById("container2pm")
let input3pmEl = document.getElementById("input3pm")
let container3pmEl = document.getElementById("container3pm")
let input4pmEl = document.getElementById("input4pm")
let container4pmEl = document.getElementById("container4pm")
let input5pmEl = document.getElementById("input5pm")
let container5pmEl = document.getElementById("container5pm")


let saveTask9am = function () {
  let input9amTask = document.createElement("li");
  input9amTask.textContent = input9amEl.value;
  input9amTask.style.fontSize = "small"
  container9amEl.appendChild(input9amTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn9amEl.onclick = function (){
  saveTask9am();
}

let saveTask10am = function () {
  let input10amTask = document.createElement("li");
  input10amTask.textContent = input10amEl.value;
  input10amTask.style.fontSize = "small"
  container10amEl.appendChild(input10amTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn10amEl.onclick = function (){
  saveTask10am();
}

let saveTask11am = function () {
  let input11amTask = document.createElement("li");
  input11amTask.textContent = input11amEl.value;
  input11amTask.style.fontSize = "small"
  container11amEl.appendChild(input11amTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn11amEl.onclick = function (){
  saveTask11am();
}

let saveTask12pm = function () {
  let input12pmTask = document.createElement("li");
  input12pmTask.textContent = input12pmEl.value;
  input12pmTask.style.fontSize = "small"
  container12pmEl.appendChild(input12pmTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn12pmEl.onclick = function (){
  saveTask12pm();
}

let saveTask1pm = function () {
  let input1pmTask = document.createElement("li");
  input1pmTask.textContent = input1pmEl.value;
  input1pmTask.style.fontSize = "small"
  container1pmEl.appendChild(input1pmTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn1pmEl.onclick = function (){
  saveTask1pm();
}

let saveTask2pm = function () {
  let input2pmTask = document.createElement("li");
  input2pmTask.textContent = input2pmEl.value;
  input2pmTask.style.fontSize = "small"
  container2pmEl.appendChild(input2pmTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn2pmEl.onclick = function (){
  saveTask2pm();
}

let saveTask3pm = function () {
  let input3pmTask = document.createElement("li");
  input3pmTask.textContent = input3pmEl.value;
  input3pmTask.style.fontSize = "small"
  container3pmEl.appendChild(input3pmTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn3pmEl.onclick = function (){
  saveTask3pm();
}

let saveTask4pm = function () {
  let input4pmTask = document.createElement("li");
  input4pmTask.textContent = input4pmEl.value;
  input4pmTask.style.fontSize = "small"
  container4pmEl.appendChild(input4pmTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn4pmEl.onclick = function (){
  saveTask4pm();
}

let saveTask5pm = function () {
  let input5pmTask = document.createElement("li");
  input5pmTask.textContent = input5pmEl.value;
  input5pmTask.style.fontSize = "small"
  container5pmEl.appendChild(input5pmTask);
}
// add event listener to search button 
// saveBtnEl.addEventListener("submit", saveTask);
saveBtn5pmEl.onclick = function (){
  saveTask5pm();
}

let nineAM = moment("9:00 am");
let now = moment();
console.log(now)
console.log(now.isBefore(nineAM)) 
moment((now.isBefore(nineAM))); 
    console.log("True")
  




// if (now.isBetween(morning, evening)) {

//   console.log('is between')

// } else {

//   console.log('is not between')

// }





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



