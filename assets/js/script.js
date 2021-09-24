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
console.log(times);

var hourNow = moment().format("h");
console.log(hourNow);

var hoursInDay = $('span');
console.log(hoursInDay[0].innerHTML);

var textArea = $('textarea');
textArea.each( function(i){
    past = times[i];
    current = hoursInDay[i].innerHTML;
    if (current == hourNow) {
        $(this).toggleClass("present");
    } else if (past) {
        $(this).toggleClass("past");
    } else {
        $(this).toggleClass("future");
    };
});

var block1 = $('#block1');
var block2 = $('#block2');
var block3 = $('#block3');
var block4 = $('#block4');
var block5 = $('#block5');
var block6 = $('#block6');
var block7 = $('#block7');
var block8 = $('#block8');
var block9 = $('#block9');

var blockArray = [block1[0], block2[0], block3[0], block4[0], block5[0], block6[0], block7[0], block8[0], block9[0]];

var button1 = $('#button1');
var button2 = $('#button2');
var button3 = $('#button3');
var button4 = $('#button4');
var button5 = $('#button5');
var button6 = $('#button6');
var button7 = $('#button7');
var button8 = $('#button8');
var button9 = $('#button9');

var buttonArray = [button1[0], button2[0], button3[0], button4[0], button5[0], button6[0], button7[0], button8[0], button9[0]];

console.log(buttonArray);

console.log(blockArray);

button1[0].addEventListener("click", function() {
    console.log("button-clicked")
})

for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function() {
        var user = blockArray.value;
        localStorage.setItem("user", JSON.stringify(user));
    });
};