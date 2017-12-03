$("h1").click(function() {
    $(this).toggleClass("devil");
});

$(".fa-arrow-circle-down").click(function() {
    $("#mealList").slideToggle("fast");
});
