
// Updates time every second
let currentDayDisplay = $('#currentDay').text(moment().format('LLLL')) 

setInterval(function () {
    $('#currentDay').text(moment().format('LLLL'))
    
}, 1000)

// Checks every hour
setInterval(function () {
    // Code
    $('hour-num').each( function(i) {

    })
}, 3600000)

console.log(moment().format('HH'))
$('textarea').each(function (i) {
    console.log($('textarea')[i])
})
