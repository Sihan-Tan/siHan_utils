# Library of tools commonly used in work

[![Build Status](https://travis-ci.org/Sihan-Tan/siHan_utils.svg?branch=master)](https://travis-ci.org/github/Sihan-Tan/siHan_utils)
[![Coverage Status](https://coveralls.io/repos/github/Sihan-Tan/siHan_utils/badge.svg)](https://coveralls.io/github/Sihan-Tan/siHan_utils)
[![Node Version](https://img.shields.io/node/v/sihan-utils)](https://img.shields.io/node/v/sihan-utils)
[![Total Download](https://img.shields.io/npm/dt/sihan-utils)](https://npmcharts.com/compare/sihan-utils)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/Sihan-Tan/siHan_utils/blob/master/LICENSE)

# Overview

This utils can help you do something such as formatDate, produceRadom and so on...

# Installation

`npm install --save sihan-utils`

# document

https://sihan-tan.github.io/siHan_utils/

or

https://github.com/Sihan-Tan/siHan_utils/blob/master/docs/index.md

# Example

```javascript
import { randomNumber } from "sihan-utils";
console.log(randomNumber(1, 100)); // a number between 1 and 100
```

# API

<dl>
<dt><a href="#setCookie">setCookie(name, value, day)</a></dt>
<dd><p>设置cookie</p>
</dd>
<dt><a href="#getCookie">getCookie(name)</a> ⇒ <code>string</code></dt>
<dd><p>获取 cookie 键对应的值</p>
</dd>
<dt><a href="#deleteCookie">deleteCookie(name)</a></dt>
<dd><p>删除cookie中的name</p>
</dd>
<dt><a href="#formatSecondToTime">formatSecondToTime(time)</a> ⇒ <code>object</code></dt>
<dd><p>将秒转换成时间</p>
</dd>
<dt><a href="#formatDate">formatDate(fmt, date)</a> ⇒ <code>string</code></dt>
<dd><p>格式化时间</p>
</dd>
<dt><a href="#calcAge">calcAge(birthday)</a> ⇒ <code>object</code></dt>
<dd><p>计算年龄, 以365天为一年</p>
</dd>
<dt><a href="#formatPrice">formatPrice(price, length)</a> ⇒ <code>string</code></dt>
<dd><p>金额格式化</p>
</dd>
<dt><a href="#formatNumberToChina">formatNumberToChina(money, needI, needY)</a> ⇒</dt>
<dd><p>阿拉伯数字转换成大写汉字</p>
</dd>
<dt><a href="#formatBankNumber">formatBankNumber(value)</a> ⇒</dt>
<dd><p>将银行卡号格式化</p>
</dd>
<dt><a href="#randomNumber">randomNumber(min, max)</a> ⇒ <code>number</code></dt>
<dd><p>返回一个区间内的随机数</p>
</dd>
<dt><a href="#getScrollTop">getScrollTop(element)</a> ⇒ <code>number</code></dt>
<dd><p>获取当前dom的scrollTop值</p>
</dd>
<dt><a href="#setScrollTop">setScrollTop(element, value)</a></dt>
<dd><p>设置当前dom的scrollTop值</p>
</dd>
<dt><a href="#getRootScrollTop">getRootScrollTop()</a> ⇒</dt>
<dd><p>获取根节点的scrollTop</p>
</dd>
<dt><a href="#setRootScrollTop">setRootScrollTop(value)</a></dt>
<dd><p>获取根节点的scrollTop</p>
</dd>
<dt><a href="#getElementTop">getElementTop(element)</a> ⇒ <code>number</code></dt>
<dd><p>获取当前节点到上边界的距离</p>
</dd>
<dt><a href="#getVisibleHeight">getVisibleHeight(element)</a> ⇒ <code>number</code></dt>
<dd><p>获取当前可视窗口的高度</p>
</dd>
<dt><a href="#getVisibleTop">getVisibleTop(element)</a> ⇒ <code>number</code></dt>
<dd><p>获取当前元素到上边界的距离</p>
</dd>
<dt><a href="#isWeChat">isWeChat()</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是微信</p>
</dd>
<dt><a href="#isAndroid">isAndroid()</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是安卓</p>
</dd>
<dt><a href="#isIOS">isIOS()</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是苹果</p>
</dd>
<dt><a href="#isMobile">isMobile()</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是移动端</p>
</dd>
<dt><a href="#checkBank">checkBank(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>验证银行卡号是否正确</p>
</dd>
<dt><a href="#checkEmail">checkEmail(email)</a> ⇒ <code>boolean</code></dt>
<dd><p>验证邮箱是否正确</p>
</dd>
<dt><a href="#checkId">checkId(id)</a> ⇒ <code>string</code> | <code>object</code></dt>
<dd><p>检验身份证是否正确</p>
</dd>
<dt><a href="#checkPhone">checkPhone(phone)</a> ⇒ <code>boolean</code></dt>
<dd><p>检验手机号是否正确</p>
</dd>
<dt><a href="#wechatSDK">wechatSDK(getSign, params, list)</a></dt>
<dd><p>微信分享  该方法需要自行安装依赖 weixin-js-sdk</p>
</dd>
</dl>

<a name="setCookie"></a>

## setCookie(name, value, day)

设置 cookie

**Kind**: global function

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| name  | <code>string</code> | 名称        |
| value | <code>string</code> | 值          |
| day   | <code>number</code> | 天数        |

<a name="getCookie"></a>

## getCookie(name) ⇒ <code>string</code>

获取 cookie 键对应的值

**Kind**: global function  
**Returns**: <code>string</code> - cookie 键对应的值

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| name  | <code>string</code> | 键          |

<a name="deleteCookie"></a>

## deleteCookie(name)

删除 cookie 中的 name

**Kind**: global function

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| name  | <code>string</code> | 键          |

<a name="formatSecondToTime"></a>

## formatSecondToTime(time) ⇒ <code>object</code>

将秒转换成时间

**Kind**: global function  
**Returns**: <code>object</code> - {天 days，小时 hours，分 mins，秒 seconds}

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| time  | <code>number</code> | 传入剩余秒数时间 |

<a name="formatDate"></a>

## formatDate(fmt, date) ⇒ <code>string</code>

格式化时间

**Kind**: global function  
**Returns**: <code>string</code> - 格式化时间字符串

| Param | Type                                     | Description                                        |
| ----- | ---------------------------------------- | -------------------------------------------------- |
| fmt   | <code>string</code>                      | 格式化字符串 'yyyy-MM-dd hh:mm:ss q(季度) S(毫秒)' |
| date  | <code>date</code> \| <code>number</code> | 日期时间对象                                       | 时间戳 |

<a name="calcAge"></a>

## calcAge(birthday) ⇒ <code>object</code>

计算年龄, 以 365 天为一年

**Kind**: global function  
**Returns**: <code>object</code> - 当前年龄 age, 年龄单位 unit

| Param    | Type                                     | Description                                       |
| -------- | ---------------------------------------- | ------------------------------------------------- |
| birthday | <code>string</code> \| <code>date</code> | 出生日期 格式化的时间字符串(yyyy-MM-dd)或时间对象 |

<a name="formatPrice"></a>

## formatPrice(price, length) ⇒ <code>string</code>

金额格式化

**Kind**: global function  
**Returns**: <code>string</code> - 格式化好的字符串
eg. parseFormatNum("123456",1); 结果为：123,456.0

| Param  | Type                                       | Description                             |
| ------ | ------------------------------------------ | --------------------------------------- |
| price  | <code>number</code> \| <code>string</code> | 金额                                    |
| length | <code>number</code>                        | 保留小数位 max = 4, 最多保留 4 位小数位 |

<a name="formatNumberToChina"></a>

## formatNumberToChina(money, needI, needY) ⇒

阿拉伯数字转换成大写汉字

**Kind**: global function  
**Returns**: 大写的整数

| Param | Type                 | Description          |
| ----- | -------------------- | -------------------- |
| money | <code>number</code>  | 正整数               |
| needI | <code>boolean</code> | 是否需要 '整' 字分隔 |
| needY | <code>boolean</code> | 是否需要 '圆'        |

<a name="formatBankNumber"></a>

## formatBankNumber(value) ⇒

将银行卡号格式化

**Kind**: global function  
**Returns**: 格式化的银行卡号码

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| value | <code>string</code> | 银行卡号码  |

<a name="randomNumber"></a>

## randomNumber(min, max) ⇒ <code>number</code>

返回一个区间内的随机数

**Kind**: global function  
**Returns**: <code>number</code> - 随机整数

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| min   | <code>number</code> | 起始值      |
| max   | <code>number</code> | 结束值      |

<a name="getScrollTop"></a>

## getScrollTop(element) ⇒ <code>number</code>

获取当前 dom 的 scrollTop 值

**Kind**: global function

| Param   | Type             | Description |
| ------- | ---------------- | ----------- |
| element | <code>dom</code> | Dom 元素    |

<a name="setScrollTop"></a>

## setScrollTop(element, value)

设置当前 dom 的 scrollTop 值

**Kind**: global function

| Param   | Type                | Description  |
| ------- | ------------------- | ------------ |
| element | <code>dom</code>    | Dom 元素     |
| value   | <code>number</code> | scrollTop 值 |

<a name="getRootScrollTop"></a>

## getRootScrollTop() ⇒

获取根节点的 scrollTop

**Kind**: global function  
**Returns**: 根节点的 scrollTop 值  
<a name="setRootScrollTop"></a>

## setRootScrollTop(value)

获取根节点的 scrollTop

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| value | <code>number</code> |

<a name="getElementTop"></a>

## getElementTop(element) ⇒ <code>number</code>

获取当前节点到上边界的距离

**Kind**: global function

| Param   | Type             | Description |
| ------- | ---------------- | ----------- |
| element | <code>dom</code> | Dom 元素    |

<a name="getVisibleHeight"></a>

## getVisibleHeight(element) ⇒ <code>number</code>

获取当前可视窗口的高度

**Kind**: global function

| Param   | Type             | Description |
| ------- | ---------------- | ----------- |
| element | <code>dom</code> | Dom 元素    |

<a name="getVisibleTop"></a>

## getVisibleTop(element) ⇒ <code>number</code>

获取当前元素到上边界的距离

**Kind**: global function

| Param   | Type             | Description |
| ------- | ---------------- | ----------- |
| element | <code>dom</code> | dom 元素    |

<a name="isWeChat"></a>

## isWeChat() ⇒ <code>boolean</code>

是不是微信

**Kind**: global function  
<a name="isAndroid"></a>

## isAndroid() ⇒ <code>boolean</code>

是不是安卓

**Kind**: global function  
<a name="isIOS"></a>

## isIOS() ⇒ <code>boolean</code>

是不是苹果

**Kind**: global function  
<a name="isMobile"></a>

## isMobile() ⇒ <code>boolean</code>

是不是移动端

**Kind**: global function  
<a name="checkBank"></a>

## checkBank(number) ⇒ <code>boolean</code>

验证银行卡号是否正确

**Kind**: global function

| Param  | Type                | Description |
| ------ | ------------------- | ----------- |
| number | <code>string</code> | 银行卡号    |

<a name="checkEmail"></a>

## checkEmail(email) ⇒ <code>boolean</code>

验证邮箱是否正确

**Kind**: global function

| Param | Type               | Description |
| ----- | ------------------ | ----------- |
| email | <code>email</code> | 邮箱        |

<a name="checkId"></a>

## checkId(id) ⇒ <code>string</code> \| <code>object</code>

检验身份证是否正确

**Kind**: global function  
**Returns**: <code>string</code> \| <code>object</code> - 错误提示| [地区，生日，年龄，性别（1 男，2 女）]

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| id    | <code>string</code> | 身份证号码  |

<a name="checkPhone"></a>

## checkPhone(phone) ⇒ <code>boolean</code>

检验手机号是否正确

**Kind**: global function

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| phone | <code>string</code> | 手机号      |

<a name="wechatSDK"></a>

## wechatSDK(getSign, params, list)

微信分享 该方法需要自行安装依赖 weixin-js-sdk

**Kind**: global function

| Param   | Type                  | Description                                                                                                              |
| ------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| getSign | <code>function</code> | 获取相关参数的方法或函数 需要返回的对象包含以下几个字段{appId, timestamp, signature, nonceStr}， 如果返回 false 则会中断 |
| params  | <code>object</code>   | 微信分享参数 {title, desc, imgUrl, link, success}                                                                        |
| list    | <code>array</code>    | 接口权限列表                                                                                                             |
