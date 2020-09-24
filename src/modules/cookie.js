/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:21:26
 * @LastEditTime: 2020-09-24 14:18:32
 * @LastEditors: Tan Xuan
 * @Description: cookie 相关函数
 */

/**
 * setCookie 设置cookie
 * @param {string} name 名称
 * @param {string} value 值
 * @param {number} day 天数
 */
function setCookie(name, value, day = 30) {
    let exp = new Date();
    exp.setTime(exp.getTime() + day * 8.64e5);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * getCookie 获取 cookie 键对应的值
 * @param {string} name 键
 * @returns {string} cookie 键对应的值
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return (arr[2]);
    } else {
        return "";
    }
}

/**
 * deleteCookie 删除cookie中的name
 * @param {string} name 键
 */
function deleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var currVal = getCookie(name);
    if (currVal != null) {
      document.cookie = name + "=" + currVal + ";expires=" + exp.toGMTString();
    }
}