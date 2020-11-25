# Functions Removed



## About DOM

```javascript
/**
 * 获取当前dom的scrollTop值
 * @param {dom} element Dom元素
 * @returns {number}
 */
export function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}

/**
 * 设置当前dom的scrollTop值
 * @param {dom} element Dom元素
 * @param {number} value scrollTop值
 */
export function setScrollTop(element, value) {
  'scrollTop' in element
    ? (element.scrollTop = value)
    : element.scrollTo(element.scrollX, value);
}

/**
 * 获取根节点的scrollTop
 * @returns 根节点的scrollTop值
 */
export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

/**
 * 获取根节点的scrollTop
 * @param {number} value
 */
export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

/**
 * 获取当前节点到上边界的距离
 * @param {dom} element Dom元素
 * @returns {number}
 */
export function getElementTop(element) {
  return (
    (element === window ? 0 : element.getBoundingClientRect().top) +
    getRootScrollTop()
  );
}

/**
 * 获取当前可视窗口的高度
 * @param {dom} element Dom元素
 * @returns {number}
 */
export function getVisibleHeight(element) {
  return element === window
    ? element.innerHeight
    : element.getBoundingClientRect().height;
}

/**
 * 获取当前元素到上边界的距离
 * @param {dom} element dom元素
 * @returns {number}
 */
export function getVisibleTop(element) {
  return element === window ? 0 : element.getBoundingClientRect().top;
}

```



## About Cookie

```javascript
/**
 * 设置cookie
 * @param {string} name 名称
 * @param {string} value 值
 * @param {number} day 天数
 */
export function setCookie(name, value, day = 30) {
  let exp = new Date();
  exp.setTime(exp.getTime() + day * 8.64e5);
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}

/**
 * 获取 cookie 键对应的值
 * @param {string} name 键
 * @returns {string} cookie 键对应的值
 */
export function getCookie(name) {
  let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) {
    return arr[2];
  } else {
    return '';
  }
}

/**
 * 删除cookie中的name
 * @param {string} name 键
 */
export function deleteCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let currVal = getCookie(name);
  if (currVal != null) {
    document.cookie = name + '=' + currVal + ';expires=' + exp.toGMTString();
  }
}

```

