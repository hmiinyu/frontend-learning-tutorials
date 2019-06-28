export class Circle {
  draw() {
    console.log('这是一个普通的圆');
  }
}

export class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.addRedBorder(this.circle);
  }
  addRedBorder(circle) {
    console.log('添加了红色边框');
  }
}