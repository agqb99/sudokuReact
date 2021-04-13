import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const getCountTimeout = () => {
    setTimeout(() => {
      setCount(countRef.current);
    }, 2000);
  };

  return getCountTimeout();
};

export default Timer;

// const [count, setCount] = React.useState(0);
// React.useEffect(() => {
//   const i_id = setInterval(() => {
//     setCount((currCount) => currCount + 1);
//   }, 3000);
//   return () => {
//     clearInterval(i_id);
//   };
// }, []);
