/**
 * @returns {boolean} 是不是微信
 */
export function isWeChat() {
  let ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == 'micromessenger';
}

/**
 * @returns {boolean} 是不是安卓
 */
export function isAndroid() {
  return navigator.userAgent.match(/Android/i) ? true : false;
}

/**
 * @returns {boolean} 是不是苹果
 */
export function isIOS() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
}

/**
 * @returns {boolean} 是不是移动端
 */
export function isMobile() {
  return navigator.userAgent.match(/Mobile/i) ? true : false;
}
