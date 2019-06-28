// 定义人员类
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log('[Person]: Hello, my name is: ' + this.name + ', age: ' + this.age);
};
// 定义学生类
function Student(score, name, age) {
  this.score = score;
  Person.call(this, name, age);
}
// 继承并定义子类的原型方法
inherit(Student, Person, {
  greeting: function () {
    console.log('[Student]: Hello, my name is: ' + this.name + ', age: ' + this.age + ', score: ' + this.score);
  }
});

// 测试
$js.print('寄生式原型继承测试');
var miracle = new Student(90, 'miracle', 32);
$js.print('继承后miracle能获取到父类的name,age和say方法，也能获取自身的score属性和greeting方法', false);
console.log(miracle.name);
console.log(miracle.age);
console.log(miracle.score);
miracle.say();
miracle.greeting();
$js.print('继承后测试miracle是否为Student类型', false);
console.log(Student.prototype.isPrototypeOf(miracle));
console.log(miracle instanceof Student);
console.log(miracle.__proto__.constructor.name);