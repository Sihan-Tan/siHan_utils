/*
 * @Author: Tan Xuan
 * @Date: 2020-10-29 10:51:00
 * @LastEditTime: 2020-10-30 17:18:13
 * @LastEditors: Tan Xuan
 * @Description: 
 */
module.exports = {
    // 'check-coverage': true,
    // 'skip-full': true,
    'all': true,
    'reporter': ['html', 'text'],
    'include': [
      'src/**/*.js'
    ],
    'exclude': [
      'src/modules/scroll.js',
      'src/modules/wechat.js',
      'src/modules/cookie.js',
      'src/config/*.js',
      'src/index.js'
    ],
    'report-dir': './coverage'
  };