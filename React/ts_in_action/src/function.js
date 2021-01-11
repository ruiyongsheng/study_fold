"use strict";
var hello = 'hello typescript';
// console.log(hello);
// 原始类型
var bool = true;
var num = 123;
var str = 'abc';
// 数组类型
var arr1 = [1, 2, 3];
var arr2 = [0, '1', '2', '3'];
// 元祖类型
var tuple = [0, '1'];
tuple.push(2);
// console.log(tuple); // [0, "1", 2]
// 函数
var add = function (x, y) { return x + y; };
var compute;
compute = function (a, b) { return a + b; };
// 对象
var obj = { x: 1, y: 2 };
obj.x = 3;
// symbol
var s1 = Symbol();
var s2 = Symbol();
// console.log(s1 === s2); // false
// undefined,null
var un = undefined;
var nu = null;
// num = undefined;
// num = null;
// void
var noReturn = function () { };
//  枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter); // 1
console.log(Role); // { 1: "Reporter", 2: "Developer", 3: "Maintainer", 4: "Owner", 5: "Guest", Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5 }
// 字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
console.log(Message);
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
// 枚举成员的值是read-only，不可修改的
// 枚举成员
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
console.log(Char);
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
;
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
; // 数字枚举
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
; // 字符串枚举
// let e1: E = 3;
var f = 3;
var e1 = 1;
var e2;
// e1 === e2   无法做比较
var e3 = 2;
function render(result) {
    result.data.forEach(function (val) {
        // console.log(val.id,val.name);
    });
}
var result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' },
    ]
};
// 方式1
render(result);
// 方式2
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' },
    ]
});
// 方式三
render({
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' },
    ]
});
var chars = ['A', 'B'];
// 用 interface 定义函数
var adda;
var lib = (function () { });
lib.version = '1.0';
lib.doSomeThing = function () { };
// 封装这个类
function getLib() {
    var lib = (function () { });
    lib.version = '1.0';
    lib.doSomeThing = function () { };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomeThing();
var lib2 = getLib();
lib2.doSomeThing();
// 函数定义方式
function add1(x, y) {
    return x + y;
}
var add2;
function add5(x, y) {
    return y ? x + y : x;
}
add5(1);
function add6(x, y, z, q) {
    if (q === void 0) { q = 1; }
    return x + y + z + q;
}
console.log(1, undefined, 3); // 5
function add7(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
console.log(add7(1, 2, 3, 4, 5)); // 15
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
;
console.log(add8(1, 2, 3)); // 6
console.log(add8('a', 'b', 'c')); // abc
