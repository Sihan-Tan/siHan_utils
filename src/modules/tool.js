/*
 * @Author: Tan Xuan
 * @Date: 2020-11-18 10:15:39
 * @LastEditTime: 2020-11-18 16:15:50
 * @LastEditors: Tan Xuan
 * @Description: 工具方法
 */

export function restArguments(func, startIdx) {
  let startIndex = startIdx == null ? func.length - 1 : Number(startIdx);
  return function () {
    let length = Math.max(arguments.length - startIndex, 0);
    let rest = Array(length);
    let index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest);
      case 1:
        return func.call(this, arguments[0], rest);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest);
    }
    let args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}

/**
 * 获取当前时间戳
 * @returns {number}
 */
export const now =
  Date.now ||
  function () {
    return new Date().getTime();
  };

/**
 * 延迟函数
 * @param {function} func 需要延迟执行的函数
 * @param {number} wait 等待时间 ms
 * @param {boolean} args 延时函数的参数，可选
 */
export const delay = restArguments(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
});

/**
 * 防抖函数
 * @param {function} func 执行函数
 * @param {number} wait 等待时间 ms
 * @param {boolean} immediate 是否立即触发，可选，默认false
 * @returns {object} 返回一个debounce的执行句柄，拥有cancel方法，执行可取消防抖
 */
export function debounce(func, wait, immediate = false) {
  let timeout;
  let result;

  let later = function (context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  let debounced = restArguments(function (args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

/**
 * 节流函数
 * @param {function} func 执行函数
 * @param {number} wait 触发间隔 ms
 * @param {object} opts {first: boolean, last: boolean} 可选参数, first控制第一次是否触发，默认true；last控制最后一次是否执行，默认为true
 * @returns {object} 返回一个throttle的执行句柄，拥有cancel方法，执行可取消节流
 */
export function throttle(func, wait, opts) {
  let timeout, context, args, result;
  let previous = 0,
    options = opts;
  if (!options) options = {};

  let later = function () {
    previous = options.first === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  let throttled = function () {
    let _now = now();
    if (!previous && options.first === false) previous = _now;
    let remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.last !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}
