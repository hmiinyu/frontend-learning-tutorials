class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log(`产品：${this.name} 初始化...`);
  }
  fn1() {
    console.log(`产品：${this.name} 执行fn1`);
  }
  fn2() {
    console.log(`产品：${this.name} 执行fn2`);
  }
}

export const ProductFactory = {
  create(name) {
    return new Product(name);
  }
}