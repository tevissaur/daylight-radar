
// Updates time every second
let currentDayDisplay = $('#currentDay').text(moment().format('LLLL'))
let currentHour = moment().hour()
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
    timeBlocks.push(new hourBlock((i+9), $(this).find('textarea').val()))
    if (moment(currentHour).isSame(timeBlocks[i].time)) {
        
        console.log($(this).find('textarea'), currentHour)
        $(this).find('textarea').toggleClass('past present')
        
    } else if (moment(currentHour).isBefore(timeBlocks[i].time)) {
        
        $(this).find('textarea').toggleClass('past future')
        
    }
    
})
console.log(timeBlocks)