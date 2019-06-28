import { Adapter } from './pattern';

{
  console.log('3.适配器模式测试中...');

  const adapter = new Adapter();
  console.log(adapter.request());
}