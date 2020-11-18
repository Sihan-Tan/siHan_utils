/*
 * @Author: Tan Xuan
 * @Date: 2020-11-18 11:00:02
 * @LastEditTime: 2020-11-18 12:20:03
 * @LastEditors: Tan Xuan
 * @Description: 判断类别
 */

/**
  * 是否是对象
  * @param {*} obj 
  * @returns {boolean}
  */
export function isObject(obj) {
  let type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

/**
 * 是不是null
 * @param {*} obj 
 * @returns {boolean}
 */
export function isNull(obj) {
  return obj === null;
}

/**
 * 是不是undefined
 * @param {*} obj 
 * @returns {boolean}
 */
export function isUndefined(obj) {
  return typeof obj === 'undefined';
}

/**
 * 是不是Boolean
 * @param {*} obj 
 * @returns {boolean}
 */
export function isBoolean(obj) {
  return (
    obj === true || obj === false || toString.call(obj) === '[object Boolean]'
  );
}
function tagTester(name) {
  return function (obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
}

/**
 * 是不是String
 * @param {*} obj 
 * @returns {boolean}
 */
export const isString = tagTester('String');

/**
 * 是不是Number
 * @param {*} obj 
 * @returns {boolean}
 */
export const isNumber = tagTester('Number');

/**
 * 是不是Date
 * @param {*} obj 
 * @returns {boolean}
 */
export const isDate = tagTester('Date');

/**
 * 是不是RegExp
 * @param {*} obj 
 * @returns {boolean}
 */
export const isRegExp = tagTester('RegExp');

/**
 * 是不是Array
 * @param {*} obj 
 * @returns {boolean}
 */
export const isArray = Array.isArray || tagTester('Array');

/**
 * 是不是Symbol
 * @param {*} obj 
 * @returns {boolean}
 */
export const isSymbol = tagTester('Symbol');

/**
 * 是不是Function
 * @param {*} obj 
 * @returns {boolean}
 */
export const isFunction = tagTester('Function');

/**
 * 判断当前对象上是否有该属性
 * @param {object} obj 
 * @param {string} key 
 * @returns {boolean}
 */
export function has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
