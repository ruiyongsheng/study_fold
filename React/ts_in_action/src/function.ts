let hello: string = 'hello typescript';

// console.log(hello);

// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc';
// 数组类型
let arr1: number[] = [1, 2, 3];
let arr2: Array<string | number> = [0,'1', '2', '3'];
// 元祖类型
let tuple: [number, string] = [0, '1'];
tuple.push(2);
// console.log(tuple); // [0, "1", 2]

// 函数
let add = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
// console.log(s1 === s2); // false

// undefined,null

let un: undefined = undefined;
let nu: null = null;
// num = undefined;
// num = null;
// void
let noReturn = () => { };

//  枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter); // 1
console.log(Role); // { 1: "Reporter", 2: "Developer", 3: "Maintainer", 4: "Owner", 5: "Guest", Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }

// 字符串枚举
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了"
}
console.log(Message);
// 异构枚举
enum Answer {
  N,
  Y= 'yes',
}

// 枚举成员的值是read-only，不可修改的
// 枚举成员

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length,
}

console.log(Char);

// 常量枚举
const enum Month {
  Jan,Feb,Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];

// 枚举类型
enum E { a, b };
enum F { a = 0, b = 1 }; // 数字枚举
enum G { a = "apple", b = "banana" }; // 字符串枚举

// let e1: E = 3;
let f: F = 3;

let e1: E.a = 1;
let e2: E.b;
// e1 === e2   无法做比较
let e3: E.a = 2;
// e1 === e3  false

// 接口 interface
interface List {
  id: number;
  name: string;
  [x:string]: any
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach(val => {
    // console.log(val.id,val.name);
  })
}
let result = {
  data: [
    { id: 1, name: 'A',sex: 'male' },
    { id: 2, name: 'B'},
  ]
}
// 方式1
render(result);
// 方式2
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ]
} as Result)
// 方式三
render(<Result>{
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' },
  ]
})
//  readonly 只读的    ? 是否是必须的

// 数字索引
interface StringArray {
  [index:number]: string
}
let chars: StringArray = ['A', 'B']

// 字符串索引

interface Names {
  [x: string]: string;
  // y: number;
  [z: number]: string
}

// 用 interface 定义函数
let adda: (x: number, y: number) => number;

// interface adda {
//   (x: number, y: number): number;
// }
type adda = (x: number, y: number) => number;

interface Lib {
  (): void;
  version: string,
  doSomeThing(): void
}
let lib: Lib = (() => { }) as Lib;
lib.version = '1.0';
lib.doSomeThing = () => { };

// 封装这个类
function getLib() {
  let lib: Lib = (() => { }) as Lib;
  lib.version = '1.0';
  lib.doSomeThing = () => { };
  return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomeThing();
let lib2 = getLib();
lib2.doSomeThing();

// 函数定义方式

function add1(x:number, y: number) {
  return x+ y
}

let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number;
}

function add5(x:number,y?:number) {
  return y ? x + y : x;
}
add5(1);

function add6(x:number,y:0,z:number,q=1) {
  return x + y + z + q;
}
console.log(1, undefined, 3); // 5

function add7(x:number,...rest:number[]) {
  return x + rest.reduce((pre,cur) => pre + cur)
}
console.log(add7(1, 2, 3, 4, 5)); // 15

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
};
console.log(add8(1,2,3));  // 6
console.log(add8('a','b','c')); // abc