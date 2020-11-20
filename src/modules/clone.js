/*
 * @Author: Tan Xuan
 * @Date: 2020-11-20 17:02:52
 * @LastEditTime: 2020-11-20 17:27:54
 * @LastEditors: Tan Xuan
 * @Description:
 */

import { isRegExp } from './tag';

/**
 * 克隆传入的参数
 * @param {*} target
 * @returns 克隆的值
 */
export function clone(target) {
  let map = new Map();
  const result = pClone(target, map);
  map = null;
  return result;
}

function pClone(target, map) {
  if (target !== null && typeof target === 'object') {
    let result = Array.isArray(target) ? [] : {};
    if (map[target]) {
      return map[target];
    }
    if (isRegExp(target)) {
      const reFlags = /(\w*)$/;
      console.log(reFlags, RegExp.$1);
      return new RegExp(RegExp.$1);
    }
    map[target] = result;
    Object.entries(target).forEach((item) => {
      let [key, value] = item;
      result[key] = clone(value);
    });
    return result;
  } else {
    return target;
  }
}
