import { formatPrice, formatNumberToChina, formatBankNumber } from '../src/modules/format';
const expect = require('chai').expect;

describe('format.js', function () {
  const price = 1234.567;
  describe('formatPrice', function () {
    it('不要小数位', function () {
      expect(formatPrice(price)).to.equal('1,234');
    });
    it('保留1位小数位', function () {
      expect(formatPrice(price, 1)).to.equal('1,234.5');
    });
    it('保留2位小数位', function () {
      expect(formatPrice(price, 2)).to.equal('1,234.56');
    });
    it('保留3位小数位', function () {
      expect(formatPrice(price, 3)).to.equal('1,234.567');
    });
    it('保留4位小数位', function () {
      expect(formatPrice(price, 4)).to.equal('1,234.5670');
    });
    it('保留5位小数位', function () {
      expect(formatPrice(price, 5)).to.equal('1,234.5670');
    });
  });
  describe('formatNumberToChina', function () {
    const money = 123456789.1234;
    const intMoney = 123456789;
    it('money为空', function () {
      expect(formatNumberToChina('')).to.equal('');
    });
    it('money越界', function () {
      expect(formatNumberToChina(999999999999999.9999)).to.equal('');
    });
    it('money为0', function () {
      expect(formatNumberToChina(0)).to.equal('零圆整');
    });
    it('money为123456789', function () {
      expect(formatNumberToChina(intMoney)).to.equal('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖圆整');
    });
    it('默认情况 123456789.1234', function () {
      expect(formatNumberToChina(money)).to.equal('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖圆壹角贰分叁毫肆厘');
    });
    it('只有小数位 0.1234', function () {
      expect(formatNumberToChina(0.1234)).to.equal('壹角贰分叁毫肆厘');
    });
    it('普通数值 10.1234', function () {
      expect(formatNumberToChina(10.1234)).to.equal('壹拾圆壹角贰分叁毫肆厘');
    });
    it('普通数值 100.1234', function () {
      expect(formatNumberToChina(100.1234)).to.equal('壹佰圆壹角贰分叁毫肆厘');
    });
    it('普通数值 1010.1234', function () {
      expect(formatNumberToChina(1010.1234)).to.equal('壹仟零壹拾圆壹角贰分叁毫肆厘');
    });
    it('普通数值 0', function () {
      expect(formatNumberToChina(0, false, false)).to.equal('零');
    });
  });
  describe('formatBankNumber', function () {
    it('格式化银行卡号码', function () {
      expect(formatBankNumber('6216002020203245865')).to.equal('6216 0020 2020 3245 865');
    });
  });
});