const { sprint, isCeremonyWeek, weeksFromPI } = require('.')

describe('Calculate sprint', function () {
    it('2019-01-03 must be Sprint 1 week ceremony', () => {
        expect(sprint('2019-01-02')).toBe(1);
    });
    it('2019-01-15 must be Sprint 1 week ceremony', () => {
        expect(sprint('2019-01-15')).toBe(1);
    });
    it('2019-01-16 must be Sprint 2 week ceremony', () => {
        expect(sprint('2019-01-16')).toBe(2);
    });
    it('2019-01-22 must be Sprint 2 week no ceremony', () => {
        expect(sprint('2019-01-22')).toBe(2);
    });
    it('2019-01-29 must be Sprint 2 week ceremony', () => {
        expect(sprint('2019-01-29')).toBe(2);
    });
    it('2019-01-30 must be Sprint 3 week ceremony', () => {
        expect(sprint('2019-01-30')).toBe(3);
    });
    it('2019-02-05 must be Sprint 3 week no ceremony', () => {
        expect(sprint('2019-02-05')).toBe(3);
    });
    it('2019-02-12 must be Sprint 3 week ceremony', () => {
        expect(sprint('2019-02-12')).toBe(3);
    });
    it('2019-02-13 must be Sprint 4 week ceremony', () => {
        expect(sprint('2019-02-13')).toBe(4);
    });
    it('2019-02-19 must be Sprint 4 week no ceremony', () => {
        expect(sprint('2019-02-19')).toBe(4);
    });
    it('2019-02-26 must be Sprint 4 week ceremony', () => {
        expect(sprint('2019-02-26')).toBe(4);
    });
    it('2019-02-27 must be Sprint 5 week ceremony', () => {
        expect(sprint('2019-02-27')).toBe(5);
    });
    it('2019-03-05 must be Sprint 5 week no ceremony', () => {
        expect(sprint('2019-03-05')).toBe(5);
    });
    it('2019-03-12 must be Sprint 5 week ceremony', () => {
        expect(sprint('2019-03-12')).toBe(5);
    });
    it('2019-03-13 must be Sprint 6 week ceremony', () => {
        expect(sprint('2019-03-13')).toBe(6);
    });
    it('2019-03-20 must be Sprint 6 week no ceremony', () => {
        expect(sprint('2019-03-20')).toBe(6);
    });    
    it('2019-03-26 must be Sprint 6 week no ceremony', () => {
        expect(sprint('2019-03-26')).toBe(6);
    });
    it('2019-04-02 must be Sprint 6 week ceremony', () => {
        expect(sprint('2019-03-30')).toBe(6);
    });
    it('2019-04-03 must be Sprint 1 week ceremony', () => {
        expect(sprint('2019-04-03')).toBe(1);
    });
    it('2019-04-10 must be Sprint 1 week no ceremony', () => {
        expect(sprint('2019-04-10')).toBe(1);
    });
    it('2019-04-16 must be Sprint 1 week ceremony', () => {
        expect(sprint('2019-04-16')).toBe(1);
    });
    it('2019-04-17 must be Sprint 2 week ceremony', () => {
        expect(sprint('2019-04-17')).toBe(2);
    });
})

describe('Calculate number of weeks from PI', function () {
    it('2019-01-03 must be week 1', () => {
        expect(weeksFromPI('2019-01-02')).toBe(1);
    });
    it('2019-01-15 must be week 3', () => {
        expect(weeksFromPI('2019-01-15')).toBe(3);
    });
    it('2019-01-16 must be week 3', () => {
        expect(weeksFromPI('2019-01-16')).toBe(3);
    });
    it('2019-01-22 must be week 4', () => {
        expect(weeksFromPI('2019-01-22')).toBe(4);
    });
    it('2019-01-29 must be week 5', () => {
        expect(weeksFromPI('2019-01-29')).toBe(5);
    });
    it('2019-02-05 must be week 6', () => {
        expect(weeksFromPI('2019-02-05')).toBe(6);
    });
    it('2019-02-12 must be week 7', () => {
        expect(weeksFromPI('2019-02-12')).toBe(7);
    });
    it('2019-02-19 must be week 8', () => {
        expect(weeksFromPI('2019-02-19')).toBe(8);
    });
    it('2019-02-27 must be week 9', () => {
        expect(weeksFromPI('2019-02-27')).toBe(9);
    });
    it('2019-03-05 must be week 10', () => {
        expect(weeksFromPI('2019-03-05')).toBe(10);
    });
    it('2019-03-12 must be week 11', () => {
        expect(weeksFromPI('2019-03-12')).toBe(11);
    });
    it('2019-03-20 must be week 12', () => {
        expect(weeksFromPI('2019-03-20')).toBe(12);
    });    
    it('2019-03-26 must be week 13', () => {
        expect(weeksFromPI('2019-03-26')).toBe(13);
    });
    it('2019-04-01 must be week 13', () => {
        expect(weeksFromPI('2019-04-01')).toBe(14);
    });
    it('2019-04-03 must be week 1', () => {
        expect(weeksFromPI('2019-04-03')).toBe(1);
    });
    it('2019-04-10 must be week 2', () => {
        expect(weeksFromPI('2019-04-10')).toBe(2);
    });
    it('2019-04-16 must be week 3', () => {
        expect(weeksFromPI('2019-04-16')).toBe(3);
    });
})


describe('Calculate not ceremony weeks', function () {
    it('2019-01-08 must week no ceremony', () => {
        expect(isCeremonyWeek('2019-01-08')).toBe(false);
    });
    it('2019-01-22 must week no ceremony', () => {
        expect(isCeremonyWeek('2019-01-22')).toBe(false);
    });
    it('2019-03-20 must week no ceremony', () => {
        expect(isCeremonyWeek('2019-03-20')).toBe(false);
    });
    it('2019-03-27 must week no ceremony', () => {
        expect(isCeremonyWeek('2019-03-27')).toBe(false);
    });
})

describe('Calculate ceremony weeks', function () {
    it('2019-01-03 must week ceremony', () => {
        expect(isCeremonyWeek('2019-01-02')).toBe(true);
    });    
    it('2019-01-15 must week ceremony', () => {
        expect(isCeremonyWeek('2019-01-15')).toBe(true);
    });
    it('2019-01-16 must week ceremony', () => {
        expect(isCeremonyWeek('2019-01-16')).toBe(true);
    });
    it('2019-03-13 must week ceremony', () => {
        expect(isCeremonyWeek('2019-03-13')).toBe(true);
    });
    it('2019-04-02 must week ceremony', () => {
        expect(isCeremonyWeek('2019-04-02')).toBe(true);
    });
    it('2019-04-03 must week ceremony', () => {
        expect(isCeremonyWeek('2019-04-03')).toBe(true);
    });
})