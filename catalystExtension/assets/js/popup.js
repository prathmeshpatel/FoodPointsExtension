
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

document.getElementById("loadPoints").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        var elements = document.getElementsByTagName("TD");
        return elements[1].innerHTML;;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
        editContent(results[0]);
        //convert points to float
        var pointStr = results[0].replace('$','');
        var points = parseFloat(pointStr);
        calculateTargetPointsDay(points);
        pointsPerDay(points);
    });
});

function editContent(str){
        $('#numPoints span').text(str);
}

function calculateTargetPointsDay(points){
        var plans = {"A": 2340.28, "B": 2806.83, "C": 3107.83, "D": 3334.65, "E": 3636.73, "F": 766.48, "H": 490.20, "I": 566.53,
            "J": 1655.50};
        console.log(getDateDifference());
        var e = document.getElementById("choosePlanBox");
        var currentPlan = e.options[e.selectedIndex].value;
        console.log(currentPlan);
        var totalPoints = plans[currentPlan];
        console.log(totalPoints);
        var pointsPerDay = totalPoints / 109;
        var targetPoints = totalPoints - getDateDifference() * pointsPerDay;
        console.log(targetPoints);
        if(targetPoints<points){
            $('#onTargetText span').text("You're above the target amount");
            $('#onTargetText span').css('color', 'green');
        }
        else if(targetPoints>points){
            $('#onTargetText span').text("You're below the target amount");
            $('#onTargetText span').css('color', 'red');
        }
}

function pointsPerDay(points){
        var daysRemaining = 109 - getDateDifference();
        console.log(daysRemaining);
        var pointsRem = points / daysRemaining;
        console.log(pointsRem);
        $('#pointsPerDayText span').text("$" + pointsRem.toFixed(2));
}

//Functions used to generate difference in days between now and start of the year
function getDateDifference(){
    var dateDifference;
    var today = new Date();
    if (today.getFullYear() == 2017){
        var startDate = new Date(2017,7,21);
        dateDifference = dayDiff(today,startDate) - 2;
        if (sameDay(today,new Date(2017, 9, 7)) || sameDay(today,new Date(2017, 9, 8))){
            dateDifference = dayDiff(new Date(2017,9,6),startDate) - 2;
        }
        if (greaterThanDay(today,new Date(2017,9,8))){
            dateDifference = dayDiff(today,startDate) - 4;
        }
        if(greaterThanDay(today,new Date(2017,10,22)) && greaterThanDay(new Date(2017,10,27),today)){
            dateDifference = dayDiff(new Date(2017,10,21),startDate) - 4;
        }
        if(greaterThanDay(today,new Date(2017,10,26))){
            dateDifference = dayDiff(today,startDate) - 8;
        }
    }
    if(today.getFullYear() == 2018){
        var startDate = new Date(2018,0,8);
        dateDifference = dayDiff(today,startDate) -1;
        if(greaterThanDay(today,new Date(2018,2,9)) && greaterThanDay(new Date(2018,2,19),today)){
            dateDifference = dayDiff(new Date(2018,2,9),startDate) - 1;
        }
        if(greaterThanDay(today,new Date(2018,2,18))){
            dateDifference = dayDiff(new Date(today,startDate)) - 10;
        }
    }
    return dateDifference;
}

function dayDiff(second, first) {
    return Math.round((second-first)/(1000*60*60*24));
}

function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

function greaterThanDay(d1, d2) {
    return (d1.getFullYear() == d2.getFullYear() &&
        d1.getMonth() > d2.getMonth()) || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() &&
        d1.getDate() > d2.getDate());
}

