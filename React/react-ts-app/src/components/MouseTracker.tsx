import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [postion, setPostion] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const mouseClick = (e: MouseEvent) => {
      console.log('innner');
      setPostion({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener('click', mouseClick);
    return () => {
      document.removeEventListener('click', mouseClick);
    }
  }, [])
  return (
    <>
      <p>点击的位置为X:{postion.x}Y:{postion.y}</p>
    </>
  )
};
export default MouseTracker;
