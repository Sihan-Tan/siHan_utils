/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 14:29:21
 * @LastEditTime: 2020-10-30 12:32:21
 * @LastEditors: Tan Xuan
 * @Description: 浏览器相关
 */
/**
 * 是不是微信
 * @returns {boolean}
 */
export function isWeChat(ua) {
  const userAgent = ua || navigator.userAgent;
  return userAgent.match(/MicroMessenger/i) ? true : false;
}

/**
 * 是不是安卓
 * @returns {boolean}
 */
export function isAndroid(ua) {
  const userAgent = ua || navigator.userAgent;
  return userAgent.match(/Android/i) ? true : false;
}

/**
 * 是不是苹果
 * @returns {boolean}
 */
export function isIOS(ua) {
  const userAgent = ua || navigator.userAgent;
  return userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
}

/**
 * 是不是移动端
 * @returns {boolean}
 */
export function isMobile(ua) {
  const userAgent = ua || navigator.userAgent;
  return userAgent.match(/Mobile/i) ? true : false;
}
