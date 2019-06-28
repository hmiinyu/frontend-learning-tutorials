class Adaptee {
  specificRequest() {
    return '美式插座的插孔';
  }
}

export class Adapter {
  constructor() {
    this.adaptee = new Adaptee();
  }
  request() {
    const info = this.adaptee.specificRequest();
    return `${info} - 转换器 - 中式插座的插孔`;
  }
}