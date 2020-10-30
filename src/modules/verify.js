/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:34:10
 * @LastEditTime: 2020-10-30 16:27:32
 * @LastEditors: Tan Xuan
 * @Description: 验证相关函数
 */
import cardArea from '../config/areaCode';

/**
 * 验证银行卡号是否正确
 * @param {string} number 银行卡号
 * @returns {boolean}
 */
export function checkBank(num) {
  const arr = String(num)
    .split('')
    .reverse()
    .map((x) => parseInt(x, 10));
  const lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
}

/**
 * 验证邮箱是否正确
 * @param {email} email 邮箱
 * @returns {boolean}
 */
export function checkEmail(email) {
  const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return ePattern.test(email);
}

/**
 * 检验身份证是否正确
 * @param {string} id 身份证号码
 * @returns {string|object} 错误提示| [地区，生日，年龄，性别（1男，2女）]
 */
export function checkId(id) {
  let sId = `${id}`;
  if (!sId) {
    return '请输入证件号码';
  }
  if (!sId.match(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/gi)) {
    return '身份证号格式不正确';
  }

  let iSum = 0;
  sId = sId.replace(/x$/i, 'a');

  if (cardArea[parseInt(sId.substr(0, 2), 10)] == null) {
    return '地区填写有误';
  }
  let sBirthday =
    sId.substr(6, 4) +
    '-' +
    Number(sId.substr(10, 2)) +
    '-' +
    Number(sId.substr(12, 2));
  let d = new Date(sBirthday.replace(/-/g, '/'));
  if (
    sBirthday !==
    d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  ) {
    return '生日有误';
  }

  for (let i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
  }

  if (iSum % 11 !== 1) {
    return '非法证号';
  }

  let age = new Date().getFullYear() - d.getFullYear();

  return {
    area: {
      code: sId.substr(0, 2),
      value: cardArea[parseInt(sId.substr(0, 2), 10)],
    },
    birthday: sBirthday,
    age,
    gender: sId.substr(16, 1) % 2 ? 1 : 2,
  };
}

/**
 * 检验手机号是否正确
 * @param {string} phone 手机号
 * @returns {boolean}
 */
export function checkPhone(phone) {
  return /^1\d{10}$/gi.test(phone);
}
