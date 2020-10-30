import { isWeChat } from './userAgent';
import wx from 'weixin-js-sdk';

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
 * @param {function} getSign 获取相关参数的方法或函数 需要返回的对象包含以下几个字段{appId, timestamp, signature, nonceStr}， 如果返回 false 则会中断
 * @param {object} params 微信分享参数 {title, desc, imgUrl, link, success}
 * @param {array} list 接口权限列表
 */
export async function wechatSDK(
  getSign,
  params = {},
  list = ['updateAppMessageShareData', 'updateTimelineShareData']
) {
  let payload = {
    title: params.title || shareConfig.title,
    desc: params.desc || shareConfig.desc,
    imgUrl: params.imgUrl || shareConfig.imgUrl,
    link: params.link || shareConfig.link,
    success: params.success || shareConfig.success,
  };
  // 访问渠道为非微信浏览器不调用微信sdk
  if (!isWeChat()) {
    return;
  }
  // 带hasSign参数时，不执行请求，直接设置分享参数
  if (payload.hasSign) {
    delete payload.hasSign;
    wx.ready(function () {
      wechatShare(wx, payload);
    });
    wx.error(function (err) {
      console.error('wx:error: ', err);
    });
    return;
  }

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
