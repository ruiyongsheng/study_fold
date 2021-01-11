import { useState, useEffect } from "react";

const useMouseMove = () => {
  const [postion, setPostion] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const mouseClick = (e: MouseEvent) => {
      setPostion({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener('mousemove', mouseClick);
    return () => {
      // console.log(postion.x);
      document.removeEventListener('mousemove', mouseClick);
    }
  });
  return postion;
};
export default useMouseMove;
