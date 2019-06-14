//Business logic section of code.

//This function creates an array containing the number range from 0 to the input number.
function numberRange(num) {
	var range = []
	for(var i = 0; i <= num; i++) {
  	range.push(i)
  }
  return range
}
console.log(numberRange(11));








//User Interface section of code.

$(document)ready.(function() {
  $("form#number").submit(function(event) {
      event.preventDefault();
      var input = $('#number').val()
      var result = convertRobo(input);
      $("#result").text(result);
  });
});
