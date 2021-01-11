import React from 'react';
import './App.css';
import Hello from "./components/Hello";
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker'
import MouseMove from './hooks/MouseMove'
// import useUrlLoader from './hooks/UseUrlLoader'

// interface isShowResult {
//   message: string;
//   status: string
// }

import './styles/index.scss'
import Button , { ButtonType, ButtonSize } from './components/Button/Button'
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';

function App() {
  const postions = MouseMove();
  // const [data] = useUrlLoader('//dog.ceo/api/breeds/image/random');
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem index={0}>Cool link 1</MenuItem>
        <MenuItem index={1} disabled>Cool link 2</MenuItem>
        <MenuItem index={2}>Cool link 3</MenuItem>
      </Menu>

      {/* {loading ? <p>读取中……</p> : <img alt="test" src={data} />} */}
      <Button className="custom">Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>哈哈哈</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu</Button>
      <header className="App-header">
        <Hello message={"Hello world!"} />
        <LikeButton />
        <MouseTracker />
        <p>x:{postions.x}:y{postions.y}</p>
      </header>
    </div>
  );
}

export default App;
