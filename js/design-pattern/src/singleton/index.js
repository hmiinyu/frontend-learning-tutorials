import SingletonObject from './pattern';

{
  console.log('2.单例模式测试中...');

  const obj1 = SingletonObject.getInstance();
  const obj2 = SingletonObject.getInstance();

  console.log('obj1 === obj2:', obj1 === obj2);
  console.log(`改变state之前，obj1.state=${obj1.state}, obj2.state=${obj2.state}`);
  obj1.changeState('obj1', 2);
  console.log(`改变state之后，obj1.state=${obj1.state}, obj2.state=${obj2.state}`);
}