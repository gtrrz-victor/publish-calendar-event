const scheduleWeek = require('.')
const {ceremony, notCeremony} = require('./WEEKS_SCHEDULE')

describe('Calculate schedule when week has or not has ceremony', ()=>{
    it('2019-01-02 should be as ceremony week',()=>{
        const date = '2019-01-02'
        expect(scheduleWeek(date)).toEqual(ceremony);
    })
    it('2019-01-09 should be as not ceremony week',()=>{
        const date = '2019-01-09'
        expect(scheduleWeek(date)).toEqual(notCeremony);
    })
})
