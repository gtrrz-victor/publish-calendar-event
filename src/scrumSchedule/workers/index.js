const {weeksFromPI} = require('../utils');
const {BASE_WORKERS_DETAILS} = require('./WORKER_INFO')

module.exports = (now)=>{
    const numWeekHasShift = 2
    const shiftLong = Math.ceil(weeksFromPI(now)/numWeekHasShift) - 1
    const workersCopy = [...BASE_WORKERS_DETAILS]
    const shiftingWorkers = workersCopy.splice(-shiftLong)
    return [...shiftingWorkers,...workersCopy]
}
