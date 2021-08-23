$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
// Updates time every second
let currentDayDisplay = setInterval(function(){
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000)

// Checks every hour
setInterval(function() {
// Code
}, 3600000)


console.log($('textarea'))
