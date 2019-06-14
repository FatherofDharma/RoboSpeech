//Business logic section of code.









//User Interface section of code.

$(document)ready.(function() {
  $("form#number").submit(function(event) {
      event.preventDefault();
      var input = $('#number').val()
      var result = convertRobo(input);
      $("#result").text(result);
  });
});
