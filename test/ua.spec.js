import { isWeChat, isAndroid, isIOS, isMobile } from '../src/modules/userAgent';
const expect = require('chai').expect;
const arr = [
  'MicroMessenger',
  'Android',
  'iPhone',
  'iPad',
  'iPod',
  'Mobile',
  '',
];

describe('判断浏览器环境', function () {
  describe('isWeChat', function () {
    it('不是微信环境', function () {
      expect(isWeChat(arr[1])).to.be.false;
    });
    it('是微信环境', function () {
      expect(isWeChat(arr[0])).to.be.true;
    });
  });
  describe('isAndroid', function () {
    it('不是安卓环境', function () {
      expect(isAndroid(arr[2])).to.be.false;
    });
    it('是安卓环境', function () {
      expect(isAndroid(arr[1])).to.be.true;
    });
  });
  describe('isIOS', function () {
    it('不是苹果环境', function () {
      expect(isIOS(arr[1])).to.be.false;
    });
    it('是iphone环境', function () {
      expect(isIOS(arr[2])).to.be.true;
    });
    it('iPad', function () {
      expect(isIOS(arr[3])).to.be.true;
    });
    it('是iPod环境', function () {
      expect(isIOS(arr[4])).to.be.true;
    });
  });
  describe('isMobile', function () {
    it('不是移动端环境', function () {
      expect(isMobile(arr[0])).to.be.false;
    });
    it('是移动端环境', function () {
      expect(isMobile(arr[5])).to.be.true;
    });
  });
});
