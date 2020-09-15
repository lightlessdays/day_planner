$(document).ready(function(){

    var hour;
    var timeInterval;
// header section
// display time and update every second
timeInterval = setInterval(function(){
    // display day of week
$('#day-display').text(moment().format('dddd'));
// display time of day
$('#time-digits').text(moment().format('h:mm'));
// display am / pm for style purposes
$('#time-period').text(moment().format('a'));
// save time to variable
hour = moment().format('H');
var minutes = moment().format('mm');

// add if statements for before / after

// timeblocks
switch (hour){
    case 9:
        $('#9').removeClass("past future").addClass("present");
        $('#10').removeClass("past present").addClass("future");
        $('#11').removeClass("past present").addClass("future");
        $('#12').removeClass("past present").addClass("future");
        $('#13').removeClass("past present").addClass("future");
        $('#14').removeClass("past present").addClass("future");
        $('#15').removeClass("past present").addClass("future");
        $('#16').removeClass("past present").addClass("future");
        break;
}
// current time display
if (hour > 17 || hour < 9){
    $('#current-time').css("display", "none");
} else {
    $('#current-time').css("display", "grid");
}
// current time line position
var position = ((hour * 100) - 802) + (minutes * 1.65);
 $('#current-time').css('top', position+'px');
}, 100);






});