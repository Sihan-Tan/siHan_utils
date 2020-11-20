import { clone } from '../src/modules/clone';
const expect = require('chai').expect;

describe('clone方法', function () {
  describe('clone', function () {
    it('clone数字', function () {
      expect(clone(0)).to.be.equal(0);
    });
    it('clone字符串', function () {
      expect(clone('123')).to.be.equal('123');
    });
    it('clone Null', function () {
      expect(clone(null)).to.be.equal(null);
    });
    it('clone undefined', function () {
      let a;
      // eslint-disable-next-line no-undefined
      expect(clone(a)).to.be.equal(undefined);
    });
    it('clone boolean', function () {
      let a = false;
      expect(clone(a)).to.be.equal(false);
    });
    it('clone 数组', function () {
      expect(clone([1, 2, 3]).toString()).to.be.equal('1,2,3');
    });
    it('clone 对象', function () {
      let a = { b: 1 };
      expect(clone(a).toString()).to.be.not.equal(a);
    });
    it('clone 正则不相等', function () {
      let a = /^\d$/;
      expect(clone(a)).to.be.not.equal(a);
    });
    it('clone 能正常匹配', function () {
      let a = /^\d$/;
      expect(clone(a).test(1)).to.be.true;
    });
  });
});