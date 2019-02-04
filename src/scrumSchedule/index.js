const workersWeek = require('./workers')
const scheduleWeek = require('./week')
const moment = require('moment')

module.exports = (date)=>{
    const weekDay = moment(date).weekday()
    const workers  = workersWeek(date)
    const schedule =  scheduleWeek(date)
    const daySchedule = schedule[weekDay]
    if (isScheduleNotDefined(daySchedule)) return
    return daySchedule.map(indexWorker=>workers[indexWorker-1]);
}

function isScheduleNotDefined(schedule){
    return !schedule || schedule === null
}