function clone(target, source, deep) {
  if (!$js.isObject(source) && !$js.isArray(source)) return;

  target = target || {};
  for (var prop in source) {
    var val = source[prop];
    if (deep) {
      if (target === val) continue; // 避免相互引用导致死循环，如source.a = source的情况
      if (typeof val === 'object') {
        target[prop] = $js.isArray(val) ? [] : {};
        arguments.callee(target[prop], val, true);
      } else {
        target[prop] = val;
      }
    } else {
      target[prop] = val;
    }
  }
}

/* 浅拷贝：被拷贝对象的所有属性都包含与原对象相同的值，如属性是基本数据类型，则直接进行赋值操作，相当于在栈内存中重新开辟一块新的空间把值传递过去；
          如属性为引用数据类型，此时浅拷贝只是拷贝的是引用地址，因此拷贝后的对象和原对象仍然指向同一个引用地址(修改拷贝对象会影响到原对象)。*/
function simpleClone(target, source) {
  clone(target, source);
  return target;
}

/* 深拷贝：将原对象的各个属性都逐级递归拷贝(深层次对象)到新对象上，因此拷贝对象是原对象的真实副本，此时修改拷贝对象不会影响到原来的对象。*/
function deepClone(target, source) {
  clone(target, source, true);
  return target;
}