// 利用闭包实现函数节流
var throttle = function (fn, delay, duration) {
  var timer = null, start = Date.now();
  return function () {
    var context = this, args = arguments, now = Date.now();
    clearTimeout(timer);
    if (duration && (now - start) >= duration) {
      fn.apply(context, args);
      start = now;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  }
};