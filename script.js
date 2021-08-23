
// Updates time every second
let currentDayDisplay = $('#currentDay')
currentDayDisplay.text(moment().format('LLLL'))
let currentHour = moment().hour()
let timeBlocks = []

class hourBlock {
    constructor(time, taskEl, buttonEl) {
        this.time = time
        this.taskEl = taskEl
        this.buttonEl = buttonEl
    }
    loadEvents() {
        localStorage.setItem('test', 'value')
        this.taskEl.val(localStorage.getItem('test'))
    }
    saveButton() {
        this.buttonEl.on('click', function (e) {
            console.log(e.target)
            let target = e.target
            let hourBlock = $(e.target).closest('div.row').find('.hour-num').text()
            let task = $(e.target).closest('div.row').find('textarea').val()
        })
    }
}


setInterval(function () {
    currentDayDisplay.text(moment().format('LLLL'))
    currentHour = moment().hour()
}, 1000)


$('.time-block').each(function (i) {

    timeBlocks.push(new hourBlock((i + 9), $(this).find('textarea'), $(this).find('.saveBtn')))
    timeBlocks[i].loadEvents()
    timeBlocks[i].saveButton()
    if (moment(currentHour).isSame(timeBlocks[i].time)) {

        $(this).find('textarea').toggleClass('past present')

    } else if (moment(currentHour).isBefore(timeBlocks[i].time)) {

        $(this).find('textarea').toggleClass('past future')

    }

})
console.log(timeBlocks)