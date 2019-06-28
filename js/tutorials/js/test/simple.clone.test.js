var simpleCloneTest = function () {
  var originalUser = initialUser();
  var cloneUser = simpleClone({}, originalUser);
  displayTestResult(originalUser, cloneUser, "浅拷贝后：simpleClone");
};
var objectAssignTest = function () {
  var originalUser = initialUser();
  var cloneUser = Object.assign({}, originalUser);
  displayTestResult(originalUser, cloneUser, "浅拷贝后：Object.assign");
};
var afterUpdateCloneObjTest = function (clone) {
  var originalUser = initialUser();
  var cloneUser = clone({}, originalUser);
  updateUserInfo(cloneUser);
  displayTestResult(originalUser, cloneUser, `修改拷贝对象后：如修改基本数据类型或直接覆盖原来的引用类型(首层，实际上只是修改引用地址，而引用地址存储在栈中，即变成对基本类型的处理)，则不影响到原对象；\n如修改引用类型的成员(数组成员或对象属性)则会引起原对象一起更改，而此时修改引用类型的内容。`);
};

// 测试
$js.print(`浅拷贝：被拷贝对象的所有属性都包含与原对象相同的值，如属性是基本数据类型，则直接进行赋值操作，相当于在栈内存中重新开辟一块新的空间把值传递过去；\n如属性为引用数据类型，此时浅拷贝只是拷贝的是引用地址，因此拷贝后的对象和原对象仍然指向同一个引用地址(修改拷贝对象会影响到原对象)。`);
simpleCloneTest();
afterUpdateCloneObjTest(simpleClone);

$js.print('使用Object.assign实现浅拷贝');
objectAssignTest();
afterUpdateCloneObjTest(Object.assign);