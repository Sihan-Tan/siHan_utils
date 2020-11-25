/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:21:11
 * @LastEditTime: 2020-11-18 14:14:31
 * @LastEditors: Tan Xuan
 * @Description: 出口文件
 */
import { formatSecondToTime, formatDate, calcAge } from './modules/date';
import {
  formatPrice,
  formatNumberToChina,
  formatBankNumber,
} from './modules/format';
import { randomNumber } from './modules/produce';
import { isWeChat, isAndroid, isIOS, isMobile } from './modules/userAgent';
import { checkBank, checkEmail, checkId, checkPhone } from './modules/verify';
import { weChatShare } from './modules/wechat';
import { now, delay, debounce, throttle } from './modules/tool';
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
  isArray,
  isFunction,
  isSymbol,
} from './modules/tag';
import { clone } from './modules/clone';

module.exports = {
  formatSecondToTime,
  formatDate,
  calcAge,
  formatPrice,
  formatNumberToChina,
  formatBankNumber,
  randomNumber,
  isWeChat,
  isAndroid,
  isIOS,
  isMobile,
  checkBank,
  checkEmail,
  checkId,
  checkPhone,
  weChatShare,
  now,
  delay,
  debounce,
  throttle,
  isObject,
  isNull,
  isUndefined,
  isBoolean,
  has,
  isString,
  isNumber,
  isDate,
  isRegExp,
  isArray,
  isFunction,
  isSymbol,
  clone,
};
