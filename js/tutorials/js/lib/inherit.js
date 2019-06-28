// 寄生式组合继承
function inherit(subType, superType, subProto) {
  // 创建超类原型副本
  // var proto = Object.create(superType.prototype);
  var proto = (function () {
    function F() {}
    F.prototype = superType.prototype;
    return new F();
  })();
  // 添加子类构造函数
  proto.constructor = subType;
  // 子类原型指向超类的副本
  subType.prototype = proto;
  // 可往子类原型添加新方法
  if ($js.isObject(subProto)) {
    for(var prop in subProto) {
      subType.prototype[prop] = subProto[prop];
    }
  }
}