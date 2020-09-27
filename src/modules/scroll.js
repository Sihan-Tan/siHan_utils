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
