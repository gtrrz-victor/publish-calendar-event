const {isCeremonyWeek} = require('../utils');
const {ceremony, notCeremony} = require('./WEEKS_SCHEDULE')

module.exports = (now)=>{
    return (isCeremonyWeek(now))?[...ceremony]:[...notCeremony]
}