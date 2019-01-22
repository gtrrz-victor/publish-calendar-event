const scrumSchedule = require('.')
const {BASE_WORKERS_DETAILS} = require('./workers/WORKER_INFO')

describe('Given one day it must give the two ttbajo workers', ()=>{
    it('2019-01-02 should be as ceremony week',()=>{
        const date = '2019-01-02'
        expect(scrumSchedule(date)).toEqual(undefined);
    })
    it('2019-01-03 should be as not ceremony week',()=>{
        const date = '2019-01-03'
        const expectedWorkers = [3,4]
        expect(scrumSchedule(date)).toEqual(expectedWorkers.map(workerIndex => BASE_WORKERS_DETAILS[workerIndex-1]));
    })
    it('2019-01-04 should be as not ceremony week',()=>{
        const date = '2019-01-04'
        const expectedWorkers = [5,6,7]
        expect(scrumSchedule(date)).toEqual(expectedWorkers.map(workerIndex => BASE_WORKERS_DETAILS[workerIndex-1]));
    })
    it('2019-01-05 should be as not ceremony week',()=>{
        const date = '2019-01-05'
        expect(scrumSchedule(date)).toEqual(undefined);
    })
    it('2019-01-06 should be as not ceremony week',()=>{
        const date = '2019-01-06'
        expect(scrumSchedule(date)).toEqual(undefined);
    })
    it('2019-01-07 should be as not ceremony week',()=>{
        const date = '2019-01-07'
        expect(scrumSchedule(date)).toEqual(undefined);
    })
    it('2019-01-08 should be as not ceremony week',()=>{
        const date = '2019-01-08'
        const expectedWorkers = [1,2]
        expect(scrumSchedule(date)).toEqual(expectedWorkers.map(workerIndex => BASE_WORKERS_DETAILS[workerIndex-1]));
    })
})
