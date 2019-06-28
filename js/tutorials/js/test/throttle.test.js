$js.print(`函数节流就是用来节流函数从而一定程度上优化性能的，连续尝试进行过多的DOM相关操作可能会导致浏览器挂起，有时候甚至会崩溃，如resize, keyup, scroll等事件。\n
节流原理：某些代码不可以在没有间断的情况连续重复执行。第一次调用函数，创建一个定时器，在指定的时间间隔之后运行代码。当第二次调用该函数时，它会清除前一次的定时器并设置另一个。\n
如果前一个定时器已经执行过了，这个操作就没有任何意义。然而，如果前一个定时器尚未执行，其实就是将其替换为一个新的定时器。目的是只有在执行函数的请求停止了一段时间之后才执行。`);

function query(e) {
  console.log('正在发送: ' + e.target.value + '开始异步请求');
  // ajax...
};
var thottleTest = function (inputId, handler) {
  document.getElementById(inputId).addEventListener('keyup', handler);
};

// 无节流测试
thottleTest('no-throttle-input', function (e) {
  query(e);
});
// 节流测试
thottleTest('throttle-input', throttle(query, 500/*, 200*/));