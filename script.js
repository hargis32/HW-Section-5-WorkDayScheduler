var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

$(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id");
    var value = $(this).siblings(".planText");

    localStorage.setItem(hour, JSON.stringify(value));

});