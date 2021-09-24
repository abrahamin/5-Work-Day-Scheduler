var currentDay = moment().format("dddd, MMM Do, YYYY");
$('#currentDay').text(currentDay);

var nine = moment(9, "H").isBefore();
var ten = moment(10, "H").isBefore();
var eleven = moment(11, "H").isBefore();
var twelve = moment(12, "H").isBefore();
var one = moment(13, "H").isBefore();
var two = moment(14, "H").isBefore();
var three = moment(15, "H").isBefore();
var four = moment(16, "H").isBefore();
var five = moment(17, "H").isBefore();

var times = [nine, ten, eleven, twelve, one, two, three, four, five];

var hourNow = moment().format("h");

var hoursInDay = $('span');

var textArea = $('textarea');
textArea.each( function(i){
    var newValue = $(this).parent().attr("id");
    past = times[i];
    current = hoursInDay[i].innerHTML;
    if (current == hourNow) {
        $(this).toggleClass("present");
    } else if (past) {
        $(this).toggleClass("past");
    } else {
        $(this).toggleClass("future");
    }
    $(this).val(localStorage.getItem(newValue));
});

$("button").on("click", function() {
    var newVariable = $(this).parent().siblings("textarea").val().trim();
    var newId = $(this).parent().parent().attr("id");
    localStorage.setItem(newId, newVariable);
});