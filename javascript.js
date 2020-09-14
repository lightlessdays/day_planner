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


// add if statements for before / after
if ($( '.timeblock' ).val() > hour){
    
}
// timeblocks

}, 100);






});