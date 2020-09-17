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

var blocks = {
    block9: {
        time: "9AM - 10AM",
        title: "",
        description: ""
    },
    block10: {
        time: "10AM - 11AM",
        title: "",
        description: ""
    },
    block11: {
        time: "11AM - 12PM",
        title: "",
        description: ""
    },
    block12: {
        time: "12PM - 1PM",
        title: "",
        description: ""
    },
    block13: {
        time: "1PM - 2PM",
        title: "",
        description: ""
    },
    block14: {
        time: "2PM - 3PM",
        title: "",
        description: ""
    },
    block15: {
        time: "3PM - 4PM",
        title: "",
        description: ""
    },
    block16: {
        time: "4PM - 5PM",
        title: "",
        description: ""
    }
};

console.log(blocks);



function addText(timeblockdiv){
    // display form
    $('#text-form').css('display', 'block');
    console.log(timeblockdiv);
    console.log($( timeblockdiv ).attr("data-value"));
    console.log(blocks.block9);
    // console.log(blocks.block9.time);
        switch ( $( timeblockdiv ).attr("data-value")){
                case "9":
                    $('#form-time').text(blocks.block9.time);
                    break;
                case "10":
                    $('#form-time').text(blocks.block10.time);
                    break;
                case "11":
                    $('#form-time').text(blocks.block11.time);
                    break;
                case "12":
                    $('#form-time').text(blocks.block12.time);
                    break;
                case "13":
                    $('#form-time').text(blocks.block13.time);
                    break;
                case "14":
                    $('#form-time').text(blocks.block14.time);
                    break;
                case "15":
                    $('#form-time').text(blocks.block15.time);
                    break;
                case "16":
                    $('#form-time').text(blocks.block16.time);
                    break;
            default:
                break;
        }
};

$('.time-block').on("click", function(){
    addText(this);

});


}); // document ready