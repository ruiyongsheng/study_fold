import React, { useState, useEffect, useRef } from 'react';
// import MouseMove from '../hooks/MouseMove'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const hasChangeRef = useRef(false);
  const [on, setOn] = useState(false);
  // const postions = MouseMove();
  useEffect(() => {
    document.title = `页面被点击了${like}次`;
    console.log('又执行了');
  }, [like])
  const handleAlertClick = () => {
    setTimeout(() => {
      console.log('you click on' + likeRef.current);
    },3000);
  }
  useEffect(() => {
    if (hasChangeRef.current) {
      console.log('this is has changed');
    } else {
      hasChangeRef.current = true;
    }
  })
  return (
    <>
      <button onClick={() => { setLike(like + 1); likeRef.current++; }}>
        {like} 👍
      </button>
      <button onClick={handleAlertClick}>handle alert</button>
      <button onClick={() => setOn(!on)}>
        {on ? 'ON':"OFF"} 👍
      </button>
      {/* <p>x:{postions.x}:y{postions.y}</p> */}
    </>
  )
}
export default LikeButton;