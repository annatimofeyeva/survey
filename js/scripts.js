$(document).ready(function() {
  $("#submit_button").click(function(event) {
    event.preventDefault();
    var first = $("#your_name").val();
    var food =$("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $("div#output").text(first + " " + dob + " " + food + " " + favoriteColor);
  });
});
