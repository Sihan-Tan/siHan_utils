/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 14:29:21
 * @LastEditTime: 2020-09-27 15:04:37
 * @LastEditors: Tan Xuan
 * @Description: 浏览器相关
 */
/**
 * 是不是微信
 * @returns {boolean} 
 */
export function isWeChat() {
  let ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) === 'micromessenger';
}

/**
 * 是不是安卓
 * @returns {boolean} 
 */
export function isAndroid() {
  return navigator.userAgent.match(/Android/i) ? true : false;
}

/**
 * 是不是苹果
 * @returns {boolean} 
 */
export function isIOS() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
}

/**
 * 是不是移动端
 * @returns {boolean} 
 */
export function isMobile() {
  return navigator.userAgent.match(/Mobile/i) ? true : false;
}
