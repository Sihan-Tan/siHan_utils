/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:34:10
 * @LastEditTime: 2020-09-24 14:23:10
 * @LastEditors: Tan Xuan
 * @Description: 数字相关函数
 */

/**
 * randomNumber  返回一个区间内的随机数
 * @param {number} min 起始值
 * @param {number} max 结束值
 * @returns {number} 随机数
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
