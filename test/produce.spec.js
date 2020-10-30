import { randomNumber } from '../src/modules/produce';
const expect = require('chai').expect;

describe('生产方法', function() {
    describe('生产区间的随机整数', function() {
        it('0~100', function() {
            expect(randomNumber(0, 100)).to.be.within(0, 100)
        })
        it('-100~100', function() {
            expect(randomNumber(-100, 100)).to.be.within(-100, 100)
        })
    })
})