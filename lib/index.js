'use strict';

/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:21:26
 * @LastEditTime: 2020-09-27 14:48:36
 * @LastEditors: Tan Xuan
 * @Description: cookie 相关函数
 */

/**
 * 设置cookie
 * @param {string} name 名称
 * @param {string} value 值
 * @param {number} day 天数
 */
function setCookie(name, value, day = 30) {
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
function getCookie(name) {
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
function deleteCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let currVal = getCookie(name);
  if (currVal != null) {
    document.cookie = name + '=' + currVal + ';expires=' + exp.toGMTString();
  }
}

/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:56:29
 * @LastEditTime: 2020-10-29 16:41:38
 * @LastEditors: Tan Xuan
 * @Description: 时间相关函数
 */
const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
/**
 * 将秒转换成时间
 * @param {number} time 传入剩余秒数时间
 * @returns {object} {天 days，小时 hours，分 mins，秒 seconds}
 */
function formatSecondToTime(time) {
  let days = (time / DAY) | 0;
  let hours = ((time % DAY) / HOUR) | 0;
  let mins = ((time % HOUR) / MINUTE) | 0;
  let seconds = time % MINUTE;
  return {
    days,
    hours,
    mins,
    seconds,
  };
}

/**
 * 格式化时间
 * @param {string} fmt 格式化字符串 'yyyy-MM-dd hh:mm:ss q(季度) S(毫秒)'
 * @param {date|number} date 日期时间对象|时间戳
 * @returns {string} 格式化时间字符串
 */
function formatDate(fmt, date) {
  let tmpDate = date;
  let formatter = fmt;
  if (!tmpDate) {
    tmpDate = new Date();
  }
  if (typeof tmpDate === 'number') {
    tmpDate = new Date(tmpDate);
  }
  let o = {
    'y+': tmpDate.getFullYear(),
    'M+': tmpDate.getMonth() + 1, // 月份
    'd+': tmpDate.getDate(), // 日
    'h+': tmpDate.getHours(), // 小时
    'm+': tmpDate.getMinutes(), // 分
    's+': tmpDate.getSeconds(), // 秒
    'q+': Math.floor((tmpDate.getMonth() + 3) / 3), // 季度
    S: tmpDate.getMilliseconds(), // 毫秒
  };
  // 年份格式
  if (/(y+)/.test(formatter)) {
    formatter = formatter.replace(
      RegExp.$1,
      String(tmpDate.getFullYear()).substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(formatter)) {
      // 根据要求补0
      formatter = formatter.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(String(o[k]).length)
      );
    }
  }
  return formatter;
}

/**
 * 计算年龄, 以365天为一年
 * @param {string|date} birthday 出生日期 格式化的时间字符串(yyyy-MM-dd)或时间对象
 * @returns {object} 当前年龄 age, 年龄单位 unit
 */
function calcAge(birthday) {
  const time =
    typeof birthday === 'string'
      ? new Date(birthday.replace(/-/g, '/')).getTime()
      : birthday;
  const now = new Date().getTime();
  const diff = Math.floor((now - time) / 1000);
  let age = '';
  let unit = '';

  if (diff < 30 * DAY) {
    unit = '未满月';
  } else if (diff < 365 * DAY) {
    // 小于一年
    age = (diff / (DAY * 30)) | 0;
    unit = '个月';

    if (age >= 12) {
      age = 1;
      unit = '岁';
    }
  } else {
    age = (diff / (DAY * 365)) | 0;
    unit = '岁';
  }

  return {
    age,
    unit,
  };
}

/*
 * @Author: Tan Xuan
 * @Date: 2020-10-28 16:58:10
 * @LastEditTime: 2020-10-30 18:51:50
 * @LastEditors: Tan Xuan
 * @Description: 格式化相关
 */

/**
 * 金额格式化
 * @param {number|string} price 金额
 * @param {number} length 保留小数位 max = 4, 最多保留4位小数位
 * @returns {string} 格式化好的字符串
 * eg.  parseFormatNum("123456",1); 结果为：123,456.0
 */
function formatPrice(price, len = 0) {
  const reg = /(\d)(?=(\d{3})+\.)/g;
  const num = len === 0 || len === 5 ? 2 : 1;
  return price
    .toFixed(len + 1)
    .replace(reg, '$1,')
    .slice(0, -num);
}

/**
 * 阿拉伯数字转换成大写汉字
 * @param {number} money 正整数
 * @param {boolean} needI 是否需要 '整' 字分隔
 * @param {boolean} needY 是否需要 '圆'
 * @returns 大写的整数
 */
function formatNumberToChina(money, needI = true, needY = true) {
  // 汉字的数字
  let cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  // 基本单位
  let cnIntRadice = ['', '拾', '佰', '仟'];
  // 对应整数部分扩展单位
  let cnIntUnits = ['', '万', '亿', '兆'];
  // 对应小数部分单位
  let cnDecUnits = ['角', '分', '毫', '厘'];
  // 整数金额时后面跟的字符
  let cnInteger = needI ? '整' : '';
  // 整型完以后的单位
  let cnIntLast = needY ? '圆' : '';
  // 最大处理的数字
  let maxNum = 999999999999999.9999;
  // 金额整数部分
  let integerNum;
  // 金额小数部分
  let decimalNum;
  // 输出的中文金额字符串
  let chineseStr = '';
  // 分离金额后用的数组，预定义
  let parts;
  if (money === '') {
    return '';
  }
  let curMoney = parseFloat(money);
  if (curMoney >= maxNum) {
    // 超出最大处理数字
    return '';
  }
  if (curMoney === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转换为字符串
  curMoney = curMoney.toString();
  if (curMoney.indexOf('.') === -1) {
    integerNum = curMoney;
    decimalNum = '';
  } else {
    parts = curMoney.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n, 10)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  // 小数部分
  if (decimalNum !== '') {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1);
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

/**
 * 将银行卡号格式化
 * @param {string} value 银行卡号码
 * @returns 格式化的银行卡号码
 */
function formatBankNumber(value) {
  return value
    .replace(/\s/g, '')
    .replace(/[^\d]/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ');
}

/*
 * @Author: Tan Xuan
 * @Date: 2020-10-28 17:47:58
 * @LastEditTime: 2020-10-28 17:48:29
 * @LastEditors: Tan Xuan
 * @Description: 创造相关
 */

/**
 * 返回一个区间内的随机数
 * @param {number} min 起始值
 * @param {number} max 结束值
 * @returns {number} 随机整数
 */
function randomNumber(min, max) {
  return (Math.random() * (max - min + 1) + min) | 0;
}

/**
 * 获取当前dom的scrollTop值
 * @param {dom} element Dom元素
 * @returns {number}
 */
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}

/**
 * 设置当前dom的scrollTop值
 * @param {dom} element Dom元素
 * @param {number} value scrollTop值
 */
function setScrollTop(element, value) {
  'scrollTop' in element
    ? (element.scrollTop = value)
    : element.scrollTo(element.scrollX, value);
}

/**
 * 获取根节点的scrollTop
 * @returns 根节点的scrollTop值
 */
function getRootScrollTop() {
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
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

/**
 * 获取当前节点到上边界的距离
 * @param {dom} element Dom元素
 * @returns {number}
 */
function getElementTop(element) {
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
function getVisibleHeight(element) {
  return element === window
    ? element.innerHeight
    : element.getBoundingClientRect().height;
}

/**
 * 获取当前元素到上边界的距离
 * @param {dom} element dom元素
 * @returns {number}
 */
function getVisibleTop(element) {
  return element === window ? 0 : element.getBoundingClientRect().top;
}

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
function isWeChat(ua) {
  const userAgent = global.navigator.userAgent || ua;
  return userAgent.match(/MicroMessenger/i) ? true : false;
}

/**
 * 是不是安卓
 * @returns {boolean}
 */
function isAndroid(ua) {
  const userAgent = global.navigator.userAgent || ua;
  return userAgent.match(/Android/i) ? true : false;
}

/**
 * 是不是苹果
 * @returns {boolean}
 */
function isIOS(ua) {
  const userAgent = global.navigator.userAgent || ua;
  return userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
}

/**
 * 是不是移动端
 * @returns {boolean}
 */
function isMobile(ua) {
  const userAgent = global.navigator.userAgent || ua;
  return userAgent.match(/Mobile/i) ? true : false;
}

/*
 * @Author: Tan Xuan
 * @Date: 2020-09-27 15:42:30
 * @LastEditTime: 2020-09-27 15:42:44
 * @LastEditors: Tan Xuan
 * @Description: 地区编码
 */
var cardArea = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门',
  91: '国外',
};

/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:34:10
 * @LastEditTime: 2020-10-30 16:27:32
 * @LastEditors: Tan Xuan
 * @Description: 验证相关函数
 */

/**
 * 验证银行卡号是否正确
 * @param {string} number 银行卡号
 * @returns {boolean}
 */
function checkBank(num) {
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
function checkEmail(email) {
  const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return ePattern.test(email);
}

/**
 * 检验身份证是否正确
 * @param {string} id 身份证号码
 * @returns {string|object} 错误提示| [地区，生日，年龄，性别（1男，2女）]
 */
function checkId(id) {
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
function checkPhone(phone) {
  return /^1\d{10}$/gi.test(phone);
}

const shareConfig = {
  title: '微信分享',
  desc: '微信分享简介。',
  imgUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  link: document.URL,
  success: function () {
    console.log('success');
  },
};

/**
 * 微信分享  该方法需要自行安装依赖 weixin-js-sdk
 * @param {object} wx wx sdk , import wx from 'weixin-js-sdk' 传入这个 wx
 * @param {function} getSign 获取相关参数的方法或函数 需要返回的对象包含以下几个字段{appId, timestamp, signature, nonceStr}， 如果返回 false 则会中断
 * @param {array} list 接口权限列表
 * @param {object} params 微信分享参数 {title, desc, imgUrl, link, success}
 */
async function weChatSDK(
  wx,
  getSign,
  list = ['updateAppMessageShareData', 'updateTimelineShareData'],
  params = {}
) {

  // 访问渠道为非微信浏览器不调用微信sdk
  if (!isWeChat()) {
    return;
  }
  
  let payload = {
    title: params.title || shareConfig.title,
    desc: params.desc || shareConfig.desc,
    imgUrl: params.imgUrl || shareConfig.imgUrl,
    link: params.link || shareConfig.link,
    success: params.success || shareConfig.success,
  };

  const res = await getSign();

  if (!res) {
    return;
  }

  const jsApiList = list;
  const { appId, timestamp, signature, nonceStr } = res;
  wx.config({
    debug: false,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList,
  });
  wx.ready(function () {
    wechatShare(wx, payload);
  });
  wx.error(function (res) {
    console.log('err', res);
  });
}

function wechatShare(wx, payload) {
  wx.updateTimelineShareData(payload);
  wx.updateAppMessageShareData(payload);
}

/*
 * @Author: Tan Xuan
 * @Date: 2020-09-24 11:21:11
 * @LastEditTime: 2020-11-17 11:07:19
 * @LastEditors: Tan Xuan
 * @Description: 出口文件
 */

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
  weChatSDK,
};
