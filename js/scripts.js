//Business logic section of code.

//This function creates an array containing the number range from 0 to the input number.
function convertNumber(num) {
  var range = [];
  var dave = " I'm sorry, Dave. I'm afraid I can't do that.";
  var boop = " boop!"
  var beep = " beep!"
  for (var i = 0; i <= num; i++) {
    if (i.toString().match(/3/) != null) { //found this simple solution to finding a specific number in the string, on stack overflow.
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







//User Interface section of code.

$(document).ready(function() {
  $("form#number").submit(function(event) {
      event.preventDefault();
      var input = $('#numberInput').val()
      var result = convertNumber(input);
      $("#result").text(result);
  });
});

//var result = convertRobo(input);
