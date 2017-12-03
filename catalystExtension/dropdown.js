// makes the days - sorry for mixing my js with my html
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

for(var i = 0; i < 7; i++) {
    var d = new Date();
    var dayPlan = "<div class=\"dayOfWeek\">";
    if(d.getDay() + i > 6) {
        dayPlan += "<h1>" + weekday[d.getDay() + i - 6] + "</h1>";
    } else {
        dayPlan += "<h1>" + weekday[d.getDay() + i] + "</h1>";
    }
    dayPlan += "<div class=\"dayMeals\"></div>";
    dayPlan += "</div>";
    $("#days").append(dayPlan);
}

$(".dayMeals").on("click", function() {
    var restaurant = $("#meal").val();
    var meal = $("#category").val();
    if(restaurant != null && meal != null) {
        $(this).append("<p>" + restaurant + " - " + meal + "</p>");
    }
});

$("td").addClass("nopadding");
