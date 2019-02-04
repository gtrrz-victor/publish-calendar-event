const moment = require('moment')
moment.locale('es');
const FIRST_DAY_OF_YEAR = moment('2018-12-31')
const SIZE_WEEKS_PI = 14
const WENDESDAY_INDEX = 2
const WEEK_STRETCH_START = 11

module.exports = {
    sprint(date) {
        const stretchSprint = 6
        const weekDay = moment(date).weekday()
        const weekFromPI = weeksFromPI(weeksDiff(date), weekDay)
        
        if (!isOdd(weekFromPI) || (isOdd(weekFromPI) && isAfterWendesday(weekDay))) return Math.min(Math.ceil(weekFromPI/2),stretchSprint)
        return Math.trunc(weekFromPI/2)
    },
    isCeremonyWeek(date){
        const weekFromPI = weeksFromPI(weeksDiff(date), moment(date).weekday())

        return isOdd(weekFromPI) && isNotStretch(weekFromPI) || isEndPI(weekFromPI)
    },
    weeksFromPI(date){
        return weeksFromPI(weeksDiff(date), moment(date).weekday())
    }
}

function isEndPI(weekFromPI){
    return weekFromPI === SIZE_WEEKS_PI
}

function isStretch(weekFromPI){
    return weekFromPI>WEEK_STRETCH_START
}
function isNotStretch(weekFromPI){
    return !isStretch(weekFromPI)
}

function weeksDiff(date) {
    return moment(date).diff(FIRST_DAY_OF_YEAR, 'weeks') + 1
}

function weeksFromPI(weeks, weekday){
    if (weeks === 1) return weeks;
    const weeksFromPI = weeks%13
    if ( weeksFromPI === 0 ) return 13;
    if (weeksFromPI === 1 && isBeforeWendesday(weekday)) return 13+1
    return weeksFromPI;
}

function isOdd(weeksFromPI){
    return (weeksFromPI+1)%2===0
}

function isBeforeWendesday(weekDay){
    return weekDay < WENDESDAY_INDEX
}

function isAfterWendesday(weekDay){
    return weekDay >= WENDESDAY_INDEX
}