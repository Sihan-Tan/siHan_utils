## Constants

<dl>
<dt><a href="#isString">isString</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是String</p>
</dd>
<dt><a href="#isNumber">isNumber</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是Number</p>
</dd>
<dt><a href="#isDate">isDate</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是Date</p>
</dd>
<dt><a href="#isRegExp">isRegExp</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是RegExp</p>
</dd>
<dt><a href="#isArray">isArray</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是Array</p>
</dd>
<dt><a href="#isSymbol">isSymbol</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是Symbol</p>
</dd>
<dt><a href="#isFunction">isFunction</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是Function</p>
</dd>
<dt><a href="#now">now</a> ⇒ <code>number</code></dt>
<dd><p>获取当前时间戳</p>
</dd>
<dt><a href="#delay">delay</a></dt>
<dd><p>延迟函数</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#clone">clone(target)</a> ⇒</dt>
<dd><p>克隆传入的参数</p>
</dd>
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
<dt><a href="#isObject">isObject(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否是对象</p>
</dd>
<dt><a href="#isNull">isNull(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是null</p>
</dd>
<dt><a href="#isUndefined">isUndefined(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是undefined</p>
</dd>
<dt><a href="#isBoolean">isBoolean(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>是不是Boolean</p>
</dd>
<dt><a href="#has">has(obj, key)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断当前对象上是否有该属性</p>
</dd>
<dt><a href="#debounce">debounce(func, wait, immediate)</a> ⇒ <code>object</code></dt>
<dd><p>防抖函数</p>
</dd>
<dt><a href="#throttle">throttle(func, wait, opts)</a> ⇒ <code>object</code></dt>
<dd><p>节流函数</p>
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
<dt><a href="#weChatShare">weChatShare(wx, getSign, list, params)</a></dt>
<dd><p>微信分享  该方法需要自行安装依赖 weixin-js-sdk</p>
</dd>
</dl>

<a name="isString"></a>

## isString ⇒ <code>boolean</code>
是不是String

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isNumber"></a>

## isNumber ⇒ <code>boolean</code>
是不是Number

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isDate"></a>

## isDate ⇒ <code>boolean</code>
是不是Date

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isRegExp"></a>

## isRegExp ⇒ <code>boolean</code>
是不是RegExp

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isArray"></a>

## isArray ⇒ <code>boolean</code>
是不是Array

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isSymbol"></a>

## isSymbol ⇒ <code>boolean</code>
是不是Symbol

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isFunction"></a>

## isFunction ⇒ <code>boolean</code>
是不是Function

**Kind**: global constant  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="now"></a>

## now ⇒ <code>number</code>
获取当前时间戳

**Kind**: global constant  
<a name="delay"></a>

## delay
延迟函数

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | 需要延迟执行的函数 |
| wait | <code>number</code> | 等待时间 ms |
| args | <code>boolean</code> | 延时函数的参数，可选 |

<a name="clone"></a>

## clone(target) ⇒
克隆传入的参数

**Kind**: global function  
**Returns**: 克隆的值  

| Param | Type |
| --- | --- |
| target | <code>\*</code> | 

<a name="setCookie"></a>

## setCookie(name, value, day)
设置cookie

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 名称 |
| value | <code>string</code> | 值 |
| day | <code>number</code> | 天数 |

<a name="getCookie"></a>

## getCookie(name) ⇒ <code>string</code>
获取 cookie 键对应的值

**Kind**: global function  
**Returns**: <code>string</code> - cookie 键对应的值  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 键 |

<a name="deleteCookie"></a>

## deleteCookie(name)
删除cookie中的name

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 键 |

<a name="formatSecondToTime"></a>

## formatSecondToTime(time) ⇒ <code>object</code>
将秒转换成时间

**Kind**: global function  
**Returns**: <code>object</code> - {天 days，小时 hours，分 mins，秒 seconds}  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | 传入剩余秒数时间 |

<a name="formatDate"></a>

## formatDate(fmt, date) ⇒ <code>string</code>
格式化时间

**Kind**: global function  
**Returns**: <code>string</code> - 格式化时间字符串  

| Param | Type | Description |
| --- | --- | --- |
| fmt | <code>string</code> | 格式化字符串 'yyyy-MM-dd hh:mm:ss q(季度) S(毫秒)' |
| date | <code>date</code> \| <code>number</code> | 日期时间对象|时间戳 |

<a name="calcAge"></a>

## calcAge(birthday) ⇒ <code>object</code>
计算年龄, 以365天为一年

**Kind**: global function  
**Returns**: <code>object</code> - 当前年龄 age, 年龄单位 unit  

| Param | Type | Description |
| --- | --- | --- |
| birthday | <code>string</code> \| <code>date</code> | 出生日期 格式化的时间字符串(yyyy-MM-dd)或时间对象 |

<a name="formatPrice"></a>

## formatPrice(price, length) ⇒ <code>string</code>
金额格式化

**Kind**: global function  
**Returns**: <code>string</code> - 格式化好的字符串
eg.  parseFormatNum("123456",1); 结果为：123,456.0  

| Param | Type | Description |
| --- | --- | --- |
| price | <code>number</code> \| <code>string</code> | 金额 |
| length | <code>number</code> | 保留小数位 max = 4, 最多保留4位小数位 |

<a name="formatNumberToChina"></a>

## formatNumberToChina(money, needI, needY) ⇒
阿拉伯数字转换成大写汉字

**Kind**: global function  
**Returns**: 大写的整数  

| Param | Type | Description |
| --- | --- | --- |
| money | <code>number</code> | 正整数 |
| needI | <code>boolean</code> | 是否需要 '整' 字分隔 |
| needY | <code>boolean</code> | 是否需要 '圆' |

<a name="formatBankNumber"></a>

## formatBankNumber(value) ⇒
将银行卡号格式化

**Kind**: global function  
**Returns**: 格式化的银行卡号码  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | 银行卡号码 |

<a name="randomNumber"></a>

## randomNumber(min, max) ⇒ <code>number</code>
返回一个区间内的随机数

**Kind**: global function  
**Returns**: <code>number</code> - 随机整数  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | 起始值 |
| max | <code>number</code> | 结束值 |

<a name="getScrollTop"></a>

## getScrollTop(element) ⇒ <code>number</code>
获取当前dom的scrollTop值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>dom</code> | Dom元素 |

<a name="setScrollTop"></a>

## setScrollTop(element, value)
设置当前dom的scrollTop值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>dom</code> | Dom元素 |
| value | <code>number</code> | scrollTop值 |

<a name="getRootScrollTop"></a>

## getRootScrollTop() ⇒
获取根节点的scrollTop

**Kind**: global function  
**Returns**: 根节点的scrollTop值  
<a name="setRootScrollTop"></a>

## setRootScrollTop(value)
获取根节点的scrollTop

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="getElementTop"></a>

## getElementTop(element) ⇒ <code>number</code>
获取当前节点到上边界的距离

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>dom</code> | Dom元素 |

<a name="getVisibleHeight"></a>

## getVisibleHeight(element) ⇒ <code>number</code>
获取当前可视窗口的高度

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>dom</code> | Dom元素 |

<a name="getVisibleTop"></a>

## getVisibleTop(element) ⇒ <code>number</code>
获取当前元素到上边界的距离

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>dom</code> | dom元素 |

<a name="isObject"></a>

## isObject(obj) ⇒ <code>boolean</code>
是否是对象

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isNull"></a>

## isNull(obj) ⇒ <code>boolean</code>
是不是null

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isUndefined"></a>

## isUndefined(obj) ⇒ <code>boolean</code>
是不是undefined

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="isBoolean"></a>

## isBoolean(obj) ⇒ <code>boolean</code>
是不是Boolean

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>\*</code> | 

<a name="has"></a>

## has(obj, key) ⇒ <code>boolean</code>
判断当前对象上是否有该属性

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 
| key | <code>string</code> | 

<a name="debounce"></a>

## debounce(func, wait, immediate) ⇒ <code>object</code>
防抖函数

**Kind**: global function  
**Returns**: <code>object</code> - 返回一个debounce的执行句柄，拥有cancel方法，执行可取消防抖  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | 执行函数 |
| wait | <code>number</code> | 等待时间 ms |
| immediate | <code>boolean</code> | 是否立即触发，可选，默认false |

<a name="throttle"></a>

## throttle(func, wait, opts) ⇒ <code>object</code>
节流函数

**Kind**: global function  
**Returns**: <code>object</code> - 返回一个throttle的执行句柄，拥有cancel方法，执行可取消节流  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | 执行函数 |
| wait | <code>number</code> | 触发间隔 ms |
| opts | <code>object</code> | {first: boolean, last: boolean} 可选参数, first控制第一次是否触发，默认true；last控制最后一次是否执行，默认为true |

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

| Param | Type | Description |
| --- | --- | --- |
| number | <code>string</code> | 银行卡号 |

<a name="checkEmail"></a>

## checkEmail(email) ⇒ <code>boolean</code>
验证邮箱是否正确

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>email</code> | 邮箱 |

<a name="checkId"></a>

## checkId(id) ⇒ <code>string</code> \| <code>object</code>
检验身份证是否正确

**Kind**: global function  
**Returns**: <code>string</code> \| <code>object</code> - 错误提示| [地区，生日，年龄，性别（1男，2女）]  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | 身份证号码 |

<a name="checkPhone"></a>

## checkPhone(phone) ⇒ <code>boolean</code>
检验手机号是否正确

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| phone | <code>string</code> | 手机号 |

<a name="weChatShare"></a>

## weChatShare(wx, getSign, list, params)
微信分享  该方法需要自行安装依赖 weixin-js-sdk

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| wx | <code>object</code> | import wx from 'weixin-js-sdk' 传入这个 wx |
| getSign | <code>function</code> | 获取相关参数的方法或函数 需要返回的对象包含以下几个字段{appId, timestamp, signature, nonceStr}， 如果返回 false 则会中断 |
| list | <code>array</code> | 接口权限列表 |
| params | <code>object</code> | 微信分享参数 {title, desc, imgUrl, link, success} |

