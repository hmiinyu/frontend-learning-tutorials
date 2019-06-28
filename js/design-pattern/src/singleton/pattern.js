class SingletonObject {
  constructor() {
    this.state = 1;
  }
  changeState(current, newState) {
    this.state = newState;
    console.log(`${current}正在执行changeState修改state的值`);
  }
};

SingletonObject.getInstance = (() => {
  let instance;
  return () => {
    if (!instance) {
      instance = new SingletonObject();
    }
    return instance;
  };
})();

export default SingletonObject;