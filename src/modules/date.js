/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:56:29
 * @LastEditTime: 2020-09-24 14:25:53
 * @LastEditors: Tan Xuan
 * @Description: 时间相关函数
 */
const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
/**
 *
 * @param {时间} time 传入剩余秒数时间
 * @returns {解析好的时间对象} {天，小时，分，秒}
 */
export function parseTimeData(time) {
  let days = (time / DAY) >> 0;
  let hours = ((time % DAY) / HOUR) >> 0;
  let mins = ((time % HOUR) / MINUTE) >> 0;
  let seconds = time % MINUTE;
  return {
    days,
    hours,
    mins,
    seconds,
  };
}

/**
 * formatDate 格式化时间
 * @param {string} fmt 格式化字符串
 * @param {date} date 日期时间对象
 * @returns {string} 格式化时间字符串
 */
export function formatDate(fmt, date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  var o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  // 年份格式
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      // fmt = fmt.replace(RegExp.$1, o[k])
      // 根据要求补0
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
}

/**
 * 
 * @param {date} birthday 出生日期
 * @returns 当前年龄
 */
export function calcAge(birthday) {
  if (birthday) {
    const now = new Date().getTime();
    const birth = new Date(birthday).getTime();
    const age = (now - birth) / (365 * 8.64e5);
    return Math.floor(age);
  }
  return '';
}
