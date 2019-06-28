// 最基础的底层库
'use strict';

window.$js = {};
;(function ($) {
  // 判断是否为对象
  $.isObject = function (item) {
    return Object.prototype.toString.call(item) === '[object Object]';
  };
  // 判断是否为数组
  $.isArray = function (item) {
    if (typeof Array.isArray === 'function') {
      return Array.isArray(item);
    }
    return Object.prototype.toString.call(item) === '[object Array]';
  };
  // 判断是否为字符串
  $.isString = function (item) {
    return typeof item === 'string';
  };
  // 打印消息
  $.print = function (message, divider) {
    if ($.isString(message) && message) {
      divider = divider === undefined;
      divider && console.log('%c---------------------------------------------------- %c^^前端开发^^%c ----------------------------------------------------', 'color:#999', 'font-size:16px;background:#aaa;color:#bada55;', 'color:#999');
      console.log('%c' + message, 'color:red;');
      divider && console.log('%c ','background-image:url("http://iyeslogo.orbrand.com/150902Google/005.gif");background-size:100% 100%;background-repeat:no-repeat;background-position:center center;line-height:30px;padding:0 60px 40px;margin-left:30%');
    }
  };
})($js);