//Business logic section of code.

//This function creates an array containing the number range from 0 to the input number.
function convertNumber(num) {
  var range = [];
  var username = $('#username').val();
  var dave = " I'm sorry, " + username + ", I'm afraid I can't do that.";
  var boop = " Boop!";
  var beep = " Beep!";
  var zero = " Enter the void!";
  //This loop cycles from 0 to the users input number.
  for (var i = 0; i <= num; i++) {
    //This identifies any numbers containing 3 and replaces it with "dave", 2's with "boop", and 1's with "beep."
    if (i.toString().match(/3/) != null) { //found this simple solution to finding a specific number in the string, on stack overflow.
      range.push(dave);
    } else if (i.toString().match(/2/) != null) {
        range.push(boop);
    } else if (i.toString().match(/1/) != null) {
        range.push(beep);
    } else if (i.toString().match(/0/) != null) {
        range.push(zero);
    } else
  	  range.push(" " + i);
    }
  return range;
}
//User Interface section of code.
$(document).ready(function() {
  $("form#number").submit(function(event) {
      event.preventDefault();
      var input = $('#numberInput').val();
      var result = convertNumber(input);
      $("#result").text(result);
      $("#halpic").show();
  });
});
