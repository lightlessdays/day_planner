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
hour = parseInt(moment().format('H'));
var minutes = parseInt(moment().format('mm'));

// add if statements for before / after

// timeblocks
if (hour < 9){
    $('.time-block').removeClass("present past").addClass("future");
}
if (hour > 16){
    $('.time-block').removeClass("present future").addClass("past");
}
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
    case 10:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("past future").addClass("present");
        $('#11').removeClass("past present").addClass("future");
        $('#12').removeClass("past present").addClass("future");
        $('#13').removeClass("past present").addClass("future");   
        $('#14').removeClass("past present").addClass("future");
        $('#15').removeClass("past present").addClass("future");
        $('#16').removeClass("past present").addClass("future");
        break;
    case 11:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("present future").addClass("past");
        $('#11').removeClass("past future").addClass("present");
        $('#12').removeClass("past present").addClass("future");
        $('#13').removeClass("past present").addClass("future");   
        $('#14').removeClass("past present").addClass("future");
        $('#15').removeClass("past present").addClass("future");
        $('#16').removeClass("past present").addClass("future");
        break;
        case 12:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("present future").addClass("past");
        $('#11').removeClass("present future").addClass("past");
        $('#12').removeClass("past future").addClass("present");
        $('#13').removeClass("past present").addClass("future");   
        $('#14').removeClass("past present").addClass("future");
        $('#15').removeClass("past present").addClass("future");
        $('#16').removeClass("past present").addClass("future");
        break;
        case 13:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("present future").addClass("past");
        $('#11').removeClass("present future").addClass("past");
        $('#12').removeClass("present future").addClass("past");
        $('#13').removeClass("past future").addClass("present");  
        $('#14').removeClass("past present").addClass("future");
        $('#15').removeClass("past present").addClass("future");
        $('#16').removeClass("past present").addClass("future");
        break;
        case 14:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("present future").addClass("past");
        $('#11').removeClass("present future").addClass("past");
        $('#12').removeClass("present future").addClass("past");
        $('#13').removeClass("present future").addClass("past"); 
        $('#14').removeClass("past future").addClass("present");
        $('#15').removeClass("past present").addClass("future");
        $('#16').removeClass("past present").addClass("future");
        break;
        case 15:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("present future").addClass("past");
        $('#11').removeClass("present future").addClass("past");
        $('#12').removeClass("present future").addClass("past");
        $('#13').removeClass("present future").addClass("past"); 
        $('#14').removeClass("present future").addClass("past");
        $('#15').removeClass("past future").addClass("present");
        $('#16').removeClass("past present").addClass("future");
        break;
        case 16:
        $('#9').removeClass("present future").addClass("past");
        $('#10').removeClass("present future").addClass("past");
        $('#11').removeClass("present future").addClass("past");
        $('#12').removeClass("present future").addClass("past");
        $('#13').removeClass("present future").addClass("past"); 
        $('#14').removeClass("present future").addClass("past");
        $('#15').removeClass("present future").addClass("past");
        $('#16').removeClass("past future").addClass("present");
        break;
        default:
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

function addText(){
    // display form
    $('#text-form').css('display', 'block');

    $('#form-time').text(this.name);
}

$('.time-block').on("click", function(){
    addText();
});