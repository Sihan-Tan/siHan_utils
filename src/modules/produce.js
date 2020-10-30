/*
 * @Author: Tan Xuan
 * @Date: 2020-10-28 17:47:58
 * @LastEditTime: 2020-10-28 17:48:29
 * @LastEditors: Tan Xuan
 * @Description: 创造相关
 */

/**
 * 返回一个区间内的随机数
 * @param {number} min 起始值
 * @param {number} max 结束值
 * @returns {number} 随机整数
 */
export function randomNumber(min, max) {
  return (Math.random() * (max - min + 1) + min) | 0;
}
