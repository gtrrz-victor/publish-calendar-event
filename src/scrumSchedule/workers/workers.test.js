const workersWeek = require('.')

describe('Calculate workers per day', ()=>{
    it('2019-01-02 there must be zero shifting',()=>{
        const date = '2019-01-02'
        const expected = [1,2,3,4,5,6,7]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-15 there must be one shifting',()=>{
        const date = '2019-01-15'
        const expected = [7,1,2,3,4,5,6]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-16 there must be one shifting',()=>{
        const date = '2019-01-16'
        const expected = [7,1,2,3,4,5,6]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-09 there must be two shifting',()=>{
        const date = '2019-01-30'
        const expected = [6,7,1,2,3,4,5]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-09 there must be three shifting',()=>{
        const date = '2019-02-13'
        const expected = [5,6,7,1,2,3,4]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-09 there must be four shifting',()=>{
        const date = '2019-02-27'
        const expected = [4,5,6,7,1,2,3]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-09 there must be five shifting',()=>{
        const date = '2019-03-13'
        const expected = [3,4,5,6,7,1,2]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-09 there must be six shifting',()=>{
        const date = '2019-03-30'
        const expected = [2,3,4,5,6,7,1]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
    it('2019-01-09 there must be zero/seven shifting',()=>{
        const date = '2019-04-03'
        const expected = [1,2,3,4,5,6,7]
        expect(justKeys(workersWeek(date))).toEqual(expected);
    })
})

function justKeys(workers){
    return workers.map(worker=>worker.key)
}