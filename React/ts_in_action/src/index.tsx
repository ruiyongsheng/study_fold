// let hello = 'Hello Typescript';

// document.queryselectorAll('.app')[0].innerHTML = hello;
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

ReactDOM.render(
  <Hello name="Typescript11" />,
  document.getElementById('app')
)