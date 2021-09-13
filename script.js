var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

$(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id");
    var value = $(this).siblings(".planText");

    localStorage.setItem(hour, value);

});

$(".row").each(function(){
    var currentTime = moment().format("HH");
    var planTime = $(this).attr("id").split("-")[1];

    if (currentTime > planTime) {
        $(this).addClass("past");}
    else if (currentTime === planTime) {
        $(this).removeClass("past").addClass("present");}
    else if (currentTime < planTime) {
        $(this).removeClass("present").addClass("future");}
    });