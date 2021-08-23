
// Updates time every second
let currentDayDisplay = $('#currentDay').text(moment().format('LLLL'))
let currentHour = moment().hour()
let time9am = moment().hour(9)
let time10am = moment().hour(10)
let time11am = moment().hour(11)
let time12pm = moment().hour(12)
let time1pm = moment().hour(13)
let time2pm = moment().hour(14)
let time3pm = moment().hour(15)
let time4pm = moment().hour(16)
let time5pm = moment().hour(17)
let timeBlocks = []

class hourBlock {
    constructor(time, task) {
        this.time = time
        this.task = task
    }
}






// $('.saveBtn').click(function (e) {
//     // e.stopPropagation()
//     // let target = e.target
//     // let hourBlock = $(e.target).closest('div.row').find('.hour-num').text()
//     // let task = $(e.target).closest('div.row').find('textarea').val()
//     // localStorage.setItem(hourBlock + ' hour block', task)
// })

setInterval(function () {
    $('#currentDay').text(moment().format('LLLL'))
    currentHour = moment().hour()
}, 1000)



$('.time-block').each(function (i) {
    console.log(i + 9)
    timeBlocks.push(new hourBlock((i+9), $(this).find('textarea').val()))
    console.log(timeBlocks)
    if (moment(currentHour).isSame(timeBlocks[i])) {
        console.log($(this).find('textarea'), currentHour)
        $(this).find('textarea').toggleClass('past present future')
    } 

})