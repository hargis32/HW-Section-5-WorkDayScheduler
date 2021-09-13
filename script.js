$(document).ready(function() {

var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

$(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id").split("-")[1];
    var value = $(this).siblings(".planText").val();

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

$("#hr-09 .planText").val(localStorage.getItem("09"));
$("#hr-10 .planText").val(localStorage.getItem("10"));
$("#hr-11 .planText").val(localStorage.getItem("11"));
$("#hr-12 .planText").val(localStorage.getItem("12"));
$("#hr-13 .planText").val(localStorage.getItem("13"));
$("#hr-14 .planText").val(localStorage.getItem("14"));
$("#hr-15 .planText").val(localStorage.getItem("15"));
$("#hr-16 .planText").val(localStorage.getItem("16"));
$("#hr-17 .planText").val(localStorage.getItem("17"));
});