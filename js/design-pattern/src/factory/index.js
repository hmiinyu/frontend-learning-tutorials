import { ProductFactory } from './pattern';

{
  console.log('1.工厂模式测试中...');

  const p1 = ProductFactory.create('华为手机');
  const p2 = ProductFactory.create('苹果手机');

  p1.init();
  p1.fn1();
  p1.fn2();

  p2.init();
  p2.fn1();
  p2.fn2();
}