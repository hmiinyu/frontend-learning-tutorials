class ImgServer {
  constructor(fileName) {
    this.fileName = fileName;
  }
  display() {
    this.loadImg();
    console.log(`display image: ${this.fileName}`);
  }
  loadImg() {
    console.log(`load image...`);
  }
}

export class ProxyServer {
  constructor(fileName) {
    this.img = new ImgServer(fileName);
  }
  display() {
    this.img.display();
  }
}