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
$( "div.time-block" ).each(function() {
    var timeblockNum = parseInt($( this ).data("value"));
    if (hour < timeblockNum){
        $( this ).removeClass("past present").addClass("future");
    }
    if (hour == timeblockNum){
        $( this ).removeClass("past future").addClass("present");
    }
    if (hour > timeblockNum){
        $( this ).removeClass("present future").addClass("past");
    }
    
  });

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

    $('#form-time').text(this.data("time"));
}

$('.time-block').on("click", function(){
    addText();



});