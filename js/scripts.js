//Business logic section of code.

//This function creates an array containing the number range from 0 to the input number.
// function numberRange(num) {
// 	var range = []
//   var dave = "I'm sorry, Dave. I'm afraid I can't do that."
// 	for(var i = 0; i <= num; i++) {
// 	   range.push(i)
//   }
//   return range
// }
// console.log(numberRange(23));

function numberRange(num) {
  var range = [];
  var dave = " I'm sorry, Dave. I'm afraid I can't do that.";
  var boop = " boop!"
  var beep = " beep!"
  for (var i = 0; i <= num; i++) {
    if (i.toString().match(/3/) != null) {
      range.push(dave);
    } else if (i.toString().match(/2/) != null) {
        range.push(boop);
    } else if (i.toString().match(/1/) != null) {
        range.push(beep);
    } else
  	  range.push(" " + i);
    }
  return range;
}
console.log(numberRange(23));






//User Interface section of code.

$(document).ready(function() {
  console.log("hello from jquery");
  $("form#number").submit(function(event) {
      event.preventDefault();
      var input = $('#numberInput').val()
      console.log(input);
      var result = numberRange(input);
      $("#result").text(result);
  });
});

//var result = convertRobo(input);
