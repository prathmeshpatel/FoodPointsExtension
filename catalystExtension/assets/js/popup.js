var plans = {"A": 2340.28, "B": 2806.83, "C": 3107.83, "D": 3334.65, "E": 3636.73, "F": 766.48, "H": 490.20, "I": 566.53,
        "J": 1655.50};

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

function setDOMInfo(info) {
  document.getElementById('loadPoints').textContent  = info;
}

window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script)
        setDOMInfo);
  });
});

//Functions used to generate difference in days between now and start of the year
function getDateDifference(){
    var dateDifference;
    var today = new Date();
    if (today.getFullYear == 2017){
        var startDate = new Date(2017,8,21);
        dateDifference = dayDiff(today,startDate) - 2;
        if (sameDay(today,new Date(2017, 10, 7)) || sameDay(today,new Date(2017, 10, 8))){
            dateDifference = dayDiff(new Date(2017,10,6),startDate) - 2;
        }
        if (greaterThanDay(today,new Date(2017,10,8))){
            dateDifference = dayDiff(today,startDate) - 4;
        }
        if(greaterThanDay(today,new Date(2017,11,22)) && greaterThanDay(new Date(2017,11,27),today)){
            dateDifference = dayDiff(new Date(2017,11,21),startDate) - 4;
        }
        if(greaterThanDay(today,new Date(2017,11,26))){
            dateDifference = dayDiff(today,startDate) - 8;
        }
    }
    if(today.getFullYear() == 2018){
        var startDate = new Date(2018,1,8);
        dateDifference = dayDiff(today,startDate) -1;
        if(greaterThanDay(today,new Date(2018,3,9)) && greaterThanDay(new Date(2018,3,19),today)){
            dateDifference = dayDiff(new Date(2018,3,9),startDate) - 1;
        }
        if(greaterThanDay(today,new Date(2018,3,18))){
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
    return (d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() > d2.getMonth()) || (d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() &&
        d1.getDate() > d2.getDate());
}
