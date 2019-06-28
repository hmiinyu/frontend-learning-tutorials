import { Circle, Decorator } from './pattern';
import { Demo1, Demo2, Demo3, People, Math  } from './demo';

{
  console.log('4.装饰器模式测试中...');

  const circle = new Circle();
  circle.draw();

  console.log('-------------');

  const decorator = new Decorator(circle);
  decorator.draw();

  console.log('-------------');

  // 自定义装饰器
  console.log('装饰类...');
  console.log(`Demo1.isDec: ${Demo1.isDec}`);
  console.log(`Demo2.isDec(带参数): ${Demo2.isDec}`);
  console.log(`Demo3.bar(混入): ${new Demo3().bar()}`);
  console.log('装饰方法...');
  const person = new People('Miracle', 'He');
  console.log(person.name());
  console.log(person.getName());
  // person.name = () => {
  //   console.log('我修改一下方法'); // 不被允许的
  // };
  const math = new Math();
  console.log(math.add(2,3));
}