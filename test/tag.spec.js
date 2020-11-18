/*
 * @Author: Tan Xuan
 * @Date: 2020-11-18 11:24:29
 * @LastEditTime: 2020-11-18 12:19:07
 * @LastEditors: Tan Xuan
 * @Description: tag 测试文件
 */

import {
  isObject,
  isNull,
  isUndefined,
  isBoolean,
  has,
  isString,
  isNumber,
  isDate,
  isRegExp,
  isSymbol,
  isArray,
  isFunction,
} from '../src/modules/tag';
const expect = require('chai').expect;

describe('类型判断方法', function () {
  describe('是不是object', function () {
    it('isObject-false', function () {
      expect(isObject(123)).to.be.false;
    });
    it('isObject-true', function () {
      expect(isObject({})).to.be.true;
    });
  });
  describe('是不是null', function () {
    it('isNull-false', function () {
      expect(isNull(123)).to.be.false;
    });
    it('isNull-true', function () {
      expect(isNull(null)).to.be.true;
    });
  });
  describe('是不是undefined', function () {
    it('isUndefined-false', function () {
      expect(isUndefined(123)).to.be.false;
    });
    it('isUndefined-true', function () {
      let a;
      expect(isUndefined(a)).to.be.true;
    });
  });
  describe('是不是boolean', function () {
    it('isBoolean-false', function () {
      expect(isBoolean(123)).to.be.false;
    });
    it('isBoolean-true', function () {
      expect(isBoolean(false)).to.be.true;
    });
  });
  describe('是不是string', function () {
    it('isString-false', function () {
      expect(isString(123)).to.be.false;
    });
    it('isString-true', function () {
      expect(isString('false')).to.be.true;
    });
  });
  describe('是不是number', function () {
    it('isNumber-false', function () {
      expect(isNumber('123')).to.be.false;
    });
    it('isNumber-true', function () {
      expect(isNumber(123)).to.be.true;
    });
  });
  describe('是不是date', function () {
    it('isDate-false', function () {
      expect(isDate('2020-10-20')).to.be.false;
    });
    it('isDate-true', function () {
      expect(isDate(new Date('2020-10-20'))).to.be.true;
    });
  });
  describe('是不是regExp', function () {
    it('isRegExp-false', function () {
      expect(isRegExp('2020-10-20')).to.be.false;
    });
    it('isRegExp-true', function () {
      expect(isRegExp(/123/g)).to.be.true;
    });
  });
  describe('是不是symbol', function () {
    let a = Symbol(1), b = 1;
    it('isSymbol-false', function () {
      expect(isSymbol(b)).to.be.false;
    });
    it('isSymbol-true', function () {
      expect(isSymbol(a)).to.be.true;
    });
  });
  describe('是不是array', function () {
    it('isArray-false', function () {
      expect(isArray('2020-10-20')).to.be.false;
    });
    it('isArray-true', function () {
      expect(isArray([1, 2, 3])).to.be.true;
      expect(isArray([])).to.be.true;
    });
  });
  describe('是不是function', function () {
    it('isFunction-false', function () {
      const fn = {};
      expect(isFunction(fn)).to.be.false;
    });
    it('isFunction-true', function () {
      function fn() {}
      expect(isFunction(fn)).to.be.true;
    });
  });
  describe('对象上是否有该属性', function () {
    const a = { b: 1 };
    it('has-false', function () {
      expect(has(a, 'c')).to.be.false;
    });
    it('has-true', function () {
      expect(has(a, 'b')).to.be.true;
    });
  });
});
