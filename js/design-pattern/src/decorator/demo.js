import { readonly, deprecate } from 'core-decorators';
import { /* readonly, */ log } from './decorators';

// 装饰类
const testDec1 = (target) => {
  target.isDec = true;
};
const testDec2 = (isDec) => {
  return (target) => {
    target.isDec = isDec;
  };
};
const mixins = (...args) => {
  return (target) => {
    Object.assign(target.prototype, ...args);
  };
};

const foo = {
  bar() {
    return '这是foo.bar()的方法';
  }
};

@testDec1
export class Demo1 {}

@testDec2(false)
export class Demo2 {}

@mixins(foo)
export class Demo3 {}

export class People {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  @readonly
  // @deprecate
  // @deprecate('该方法在下一版本将被移除，建议使用getName()')
  @deprecate('该方法在下一版本将被移除，建议使用getName()', { url: 'http://xxx.com/docs' })
  name() {
    return `name() - My name is: ${this.firstName} ${this.lastName}`;
  }
  getName() {
    return `getName() - My name is: ${this.firstName} ${this.lastName}`;
  }
}

export class Math {
  @log
  add(a, b) {
    return a + b;
  }
}