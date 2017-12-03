$("td").addClass("nopadding");

// makes the calendar
var calendarRow = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
for(var i = 0; i < 6; i++) {
    $("table").append(calendarRow);
}

$("td").on("click", function() {
    var restaurant = $("#meal").val();
    var meal = $("#category").val();
    $(this).append("<p>" + restaurant + " - " + meal + "</p>");
});
