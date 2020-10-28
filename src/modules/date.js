/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:56:29
 * @LastEditTime: 2020-10-28 17:30:05
 * @LastEditors: Tan Xuan
 * @Description: 时间相关函数
 */
const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
/**
 * 将秒转换成时间
 * @param {number} time 传入剩余秒数时间
 * @returns {object} {天，小时，分，秒}
 */
export function formatSecondToTime(time) {
  let days = (time / DAY) | 0;
  let hours = ((time % DAY) / HOUR) | 0;
  let mins = ((time % HOUR) / MINUTE) | 0;
  let seconds = time % MINUTE;
  return {
    days,
    hours,
    mins,
    seconds,
  };
}

/**
 * 格式化时间
 * @param {string} fmt 格式化字符串 'yyyy-MM-dd hh:mm:ss q(季度) S(毫秒)'
 * @param {date} date 日期时间对象
 * @returns {string} 格式化时间字符串
 */
export function formatDate(fmt, date) {
  let tmpDate = date; 
  let formatter = fmt;
  if (!tmpDate) {
    tmpDate = new Date();
  }
  if (typeof tmpDate === 'number') {
    tmpDate = new Date(tmpDate);
  }
  let o = {
    'y+': tmpDate.getFullYear(),
    'M+': tmpDate.getMonth() + 1, // 月份
    'd+': tmpDate.getDate(), // 日
    'h+': tmpDate.getHours(), // 小时
    'm+': tmpDate.getMinutes(), // 分
    's+': tmpDate.getSeconds(), // 秒
    'q+': Math.floor((tmpDate.getMonth() + 3) / 3), // 季度
    S: tmpDate.getMilliseconds(), // 毫秒
  };
  // 年份格式
  if (/(y+)/.test(formatter)) {
    formatter = formatter.replace(
      RegExp.$1,
      (String(tmpDate.getFullYear())).substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(formatter)) {
      // 根据要求补0
      formatter = formatter.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr((String(o[k])).length)
      );
    }
  }
  return formatter;
}

/**
 * 计算年龄, 以365天为一年
 * @param {string|date} birthday 出生日期
 * @returns 当前年龄, 年龄单位
 */
export function calcAge(birthday) {
  const time = typeof birthday === 'string' ? new Date(birthday.replace(/-/g, '/')).getTime() : birthday;
  const now = new Date().getTime();
  const diff = Math.floor((now - time) / 1000)
  let age = '', unit = ''

  if (diff < 30 * DAY) {
    unit = '未满月';
  } else if (diff < 365 * DAY) {
    // 小于一年
    age = (diff / (DAY * 30)) | 0;
    unit = '个月'

    if (age >= 12) {
      age = 1
      unit = '岁'
    }
  } else {
    age = (diff / (DAY * 365)) | 0;
    unit = '岁';
  }

  return {
    age,
    unit
  }
}
