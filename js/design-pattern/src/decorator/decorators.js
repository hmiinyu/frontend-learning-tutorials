export const readonly = (target, name, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

export const log = (target, name, descriptor) => {
  const oldValue = descriptor.value;
  descriptor.value = function () {
    console.log(`正在调用方法: ${name}, 参数：`, ...arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
};