// makes the days - sorry for mixing my js with my html
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// creates a week's worth of days starting from the current day
for(var i = 0; i < 7; i++) {
    var d = new Date();
    var dayPlan = "<div class=\"dayContainer\">";
    if(d.getDay() + i > 6) {
        dayPlan += "<h1 class=\"dayOfWeek\">" + weekday[d.getDay() + i - 6] + "</h1>";
    } else {
        dayPlan += "<h1 class=\"dayOfWeek\">" + weekday[d.getDay() + i] + "</h1>";
    }
    dayPlan += "<div class=\"dayMeals\"></div>";
    dayPlan += "</div>";
    $("#days").append(dayPlan);
}

// removes food item when trash is clicked
$(".dayMeals").on("click", "span", function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// created a meal under the day
$(".dayMeals").on("click", function() {
    var restaurant = $("#meal").val();
    var meal = $("#category").val();
    if(restaurant != null && meal != null) {
        $(this).append("<p class=\"nomargin\"><span class=\"delete\"><i class='fa fa-trash'></i></span>" + restaurant + " - " + meal + "</p>");
    }
});
