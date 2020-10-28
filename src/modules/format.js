/*
 * @Author: Tan Xuan
 * @Date: 2020-10-28 16:58:10
 * @LastEditTime: 2020-10-28 17:27:42
 * @LastEditors: Tan Xuan
 * @Description: 格式化相关
 */

/**
 * 金额格式化
 * @param {*} number 金额
 * @param {*} n 保留小数位
 * @returns {string} 格式化好的字符串
 * eg.  parseFormatNum("123456",1); 结果为：123,456.0
 */
export function formatPrice(number, n) {
  if (n != 0) {
    n = n > 0 && n <= 20 ? n : 2;
  }
  number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var sub_val = number.split(".")[0].split("").reverse();
  var sub_xs = number.split(".")[1];

  var show_html = "";
  for (let i = 0; i < sub_val.length; i++) {
    show_html +=
      sub_val[i] + ((i + 1) % 3 == 0 && i + 1 != sub_val.length ? "," : "");
  }

  if (n == 0) {
    return show_html.split("").reverse().join("");
  } else {
    return show_html.split("").reverse().join("") + "." + sub_xs;
  }
}

/**
 * 将正整数转换成大写
 * @param {number} num 正整数
 * @returns 大写的整数
 */
export function formatBigNum(num) {
  let changeNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]; //changeNum[0] = "零"
  let unit = ["", "十", "百", "千", "万"];
  num = parseInt(num);
  let getWan = (temp) => {
    let strArr = temp.toString().split("").reverse();
    let newNum = "";
    for (var i = 0; i < strArr.length; i++) {
      newNum =
        (i == 0 && strArr[i] == 0
          ? ""
          : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0
          ? ""
          : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +
        newNum;
    }
    return newNum;
  };
  let overWan = Math.floor(num / 10000);
  let noWan = num % 10000;
  if (noWan.toString().length < 4) noWan = "0" + noWan;
  return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
}

/**
 * 将银行卡号格式化
 * @param {string} value 银行卡号码
 * @returns 格式化的银行卡号码
 */
export function formatBankNumber(value) {
  return value
    .replace(/\s/g, "")
    .replace(/[^\d]/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
}
