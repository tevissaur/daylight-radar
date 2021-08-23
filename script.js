
// Updates time every second
let currentDayDisplay = $('#currentDay').text(moment().format('LLLL'))
let currentHour = moment().format('HH')
let time = moment().format()
setInterval(function () {
    $('#currentDay').text(moment().format('LLLL'))
    currentHour = moment().format('HH')
}, 1000)

// Checks every hour
setInterval(function () {
    // Code
}, 3600000)

$('.time-block').each(function (i) {

    console.log($(this))
    if ( moment(currentHour).isSame($(this).find('.hour-num').text()) ) {
        console.log($(this).find('textarea'), currentHour)
        $(this).find('textarea').toggleClass('past present')
    }

})