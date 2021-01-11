"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = 'dog';
        this.legs = 4;
        this.name = name;
    }
    Dog.prototype.run = function () {
    };
    Dog.prototype.pri = function () { };
    Dog.prototype.pro = function () { };
    Dog.food = 'bones';
    return Dog;
}());
console.log(Dog.prototype); // {run:f, contructor:f}
var dog = new Dog('wangwang');
console.log(dog); // Dog {name:'wangwang'}
// 类的继承
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    return Husky;
}(Dog));
