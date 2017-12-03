$("h1").click(function() {
    $(this).toggleClass("devil");
});
window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var link = document.getElementById('btnOpenNewTab');
    // onClick's logic below:
    link.addEventListener('click', function() {
        var newURL = "https://my.duke.edu/students/dashboard#continuing";
        chrome.tabs.create({ url: newURL });
    });
});
$(".fa-arrow-circle-down").click(function() {
    $("#mealList").slideToggle("fast");
});
