var deepCloneTest = function () {
  var originalUser = initialUser();
  var cloneUser = deepClone({}, originalUser);
  displayTestResult(originalUser, cloneUser, "深拷贝后：deepClone");
};
var afterUpdateCloneObjTest = function () {
  var originalUser = initialUser();
  var cloneUser = deepClone({}, originalUser);
  updateUserInfo(cloneUser);
  displayTestResult(originalUser, cloneUser, `修改拷贝对象后：拷贝对象是与原对象是完全不同的独立副本，拷贝对象的修改(不管是基本数据类型还是引用数据类型)不会影响到原对象。`);
};

// 测试
$js.print(`深拷贝：将原对象的各个属性都逐级递归拷贝(深层次对象)到新对象上，因此拷贝对象是原对象的真实副本，此时修改拷贝对象不会影响到原来的对象。`);
deepCloneTest();
afterUpdateCloneObjTest();