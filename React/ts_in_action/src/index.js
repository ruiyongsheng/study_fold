"use strict";
// let hello = 'Hello Typescript';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// document.queryselectorAll('.app')[0].innerHTML = hello;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Hello_1 = __importDefault(require("./components/Hello"));
react_dom_1.default.render(react_1.default.createElement(Hello_1.default, { name: "Typescript11" }), document.getElementById('app'));
