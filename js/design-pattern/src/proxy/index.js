import { ProxyServer } from './pattern';
import { agent } from './demo';

{
  console.log('5.代理模式测试中...');

  const proxy = new ProxyServer('logo.png');
  proxy.display();

  console.log('演示明星经纪人');
  console.log(agent.name);
  console.log(agent.age);
  console.log(agent.phone); // 注意此处返回经纪人电话
  console.log(agent.price); // 注意明星不关注出场费，而由经纪人代理
  agent.customPrice = 900000;
  console.log(agent.customPrice); // 此时由于报价太低无法正常返回
  agent.customPrice = 1200000;
  console.log(agent.customPrice);
}