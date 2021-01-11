class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string ='dog'
  run() {

  }
  private pri() { }
  protected pro() { }
  readonly legs: number = 4;
  static food: string = 'bones'
}
console.log(Dog.prototype);// {run:f, contructor:f}
let dog = new Dog('wangwang');
console.log(dog); // Dog {name:'wangwang'}

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string
}