/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:21:11
 * @LastEditTime: 2020-11-16 17:05:26
 * @LastEditors: Tan Xuan
 * @Description: 出口文件
 */
import { setCookie, getCookie, deleteCookie } from './modules/cookie';
import { formatSecondToTime, formatDate, calcAge } from './modules/date';
import {
  formatPrice,
  formatNumberToChina,
  formatBankNumber,
} from './modules/format';
import { randomNumber } from './modules/produce';
import {
  getScrollTop,
  setScrollTop,
  getRootScrollTop,
  setRootScrollTop,
  getElementTop,
  getVisibleHeight,
  getVisibleTop,
} from './modules/scroll';
import { isWeChat, isAndroid, isIOS, isMobile } from './modules/userAgent';
import { checkBank, checkEmail, checkId, checkPhone } from './modules/verify';
import { wechatSDK } from './modules/wechat';

module.exports = {
  setCookie,
  getCookie,
  deleteCookie,
  formatSecondToTime,
  formatDate,
  calcAge,
  formatPrice,
  formatNumberToChina,
  formatBankNumber,
  randomNumber,
  getScrollTop,
  setScrollTop,
  getRootScrollTop,
  setRootScrollTop,
  getElementTop,
  getVisibleHeight,
  getVisibleTop,
  isWeChat,
  isAndroid,
  isIOS,
  isMobile,
  checkBank,
  checkEmail,
  checkId,
  checkPhone,
  wechatSDK,
};
