/* eslint-disable max-nested-callbacks */
/*
 * @Author: Tan Xuan
 * @Date: 2020-11-18 10:53:58
 * @LastEditTime: 2020-11-18 16:21:01
 * @LastEditors: Tan Xuan
 * @Description:
 */
import { restArguments, now, delay, debounce, throttle } from '../src/modules/tool';
const expect = require('chai').expect;

describe('工具方法方法', function () {
  describe('restArguments', function () {
    it('restArguments 0', function () {
      let fn = restArguments(function (a, b = 0, c = 0) {
        return a + b + c;
      }, 0);
      expect(fn(1, 2)).to.equal('1,200');
    });
    it('restArguments 1', function () {
      let fn = restArguments(function (a, b = 0, c = 0) {
        return a + b + c;
      }, 1);
      expect(fn(1, 2)).to.equal('120');
    });
  });
  describe('当前时间', function () {
    it('当前时间', function () {
      expect(now() - new Date().getTime()).to.within(-10, 10);
    });
  });
  describe('delay函数', function () {
    it('delay', function () {
      let cur;
      delay(function () {
        cur = now();
      }, 500);
      setTimeout(() => {
        expect(now() - cur).to.within(-10, 10);
      }, 500);
    });
  });
  describe('debounce函数', function () {
    it('debounce', function () {
      let cur = 0;
      let addOne = debounce(function () {
        cur += 1;
      }, 500);
      addOne();
      setTimeout(() => {
        addOne();
      });
      
      setTimeout(() => {
        expect(cur).to.equal(0);
      }, 500);
    });
    it('debounce', function () {
      let cur = 0;
      let addOne = debounce(function () {
        cur += 1;
      }, 500, true);
      addOne();
      addOne();
      
      setTimeout(() => {
        expect(cur).to.equal(1);
      }, 1000);

      addOne.cancel();
    });
  });
  describe('throttle函数', function () {
    it('throttle', function () {
      let cur = 0;
      let addOne = throttle(function () {
        cur += 1;
      }, 500);
      addOne();
      addOne();
      
      setTimeout(() => {
        expect(cur).to.equal(2);
      }, 500);
    });
    it('throttle', function () {
      let cur = 0;
      let addOne = throttle(function () {
        cur += 1;
      }, 500, {
        first: false
      });
      addOne();
      addOne();
      
      setTimeout(() => {
        expect(cur).to.equal(0);
      }, 1000);

      addOne.cancel();
    });
    it('throttle', function () {
      let cur = 0;
      let addOne = throttle(function () {
        cur += 1;
      }, 500, {
        first: true,
        last: false
      });
      addOne();
      addOne();
      
      setTimeout(() => {
        expect(cur).to.equal(1);
      }, 600);

      addOne.cancel();
    });
  });
});
