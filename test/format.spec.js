import { formatPrice, formatNumberToChina, formatBankNumber } from '../src/modules/format';
const expect = require('chai').expect;

describe('format.js', function() {
    const price = 1234.567;
    describe('formatPrice', function() {
        it('不要小数位', function() {
            expect(formatPrice(price)).to.equal('1,234');
        })
        it('保留1位小数位', function() {
            expect(formatPrice(price, 1)).to.equal('1,234.5');
        })
        it('保留2位小数位', function() {
            expect(formatPrice(price, 2)).to.equal('1,234.56');
        })
        it('保留3位小数位', function() {
            expect(formatPrice(price, 3)).to.equal('1,234.567');
        })
        it('保留4位小数位', function() {
            expect(formatPrice(price, 4)).to.equal('1,234.5670');
        })
        it('保留5位小数位', function() {
            expect(formatPrice(price, 5)).to.equal('1,234.5670');
        })
    })
    describe('formatNumberToChina', function() {
        const money = 123456789.1234;
        const intMoney = 123456789;
        it('money为空', function() {
            expect(formatNumberToChina('')).to.equal('')
        })
        it('money越界', function() {
            expect(formatNumberToChina(999999999999999.9999)).to.equal('')
        })
        it('money为0', function() {
            expect(formatNumberToChina(0)).to.equal('零圆整')
        })
        it('money为123456789', function() {
            expect(formatNumberToChina(intMoney)).to.equal('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖圆整')
        })
        it('默认情况', function() {
            expect(formatNumberToChina(money)).to.equal('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖圆壹角贰分叁毫肆厘')
        })
    })
    describe('formatBankNumber', function() {

    })
})