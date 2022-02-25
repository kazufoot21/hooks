import React, { VFC, useState, useEffect } from 'react';
// import classes from './Counter.module.scss';

const Counter: VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('first useEffect');
    const countUp = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
      console.log('countUp');
    }, 1000);
    return () => {
      clearInterval(countUp);
      console.log('unmount');
    };
  }, [count1]);

  return (
    <div>
      <div>
        <span>count1</span>
        <button
          onClick={() => {
            setCount1((prevCount) => prevCount + 1);
          }}
        >
          {count1}
        </button>
      </div>
      <div>
        <span>count2</span>
        <button
          onClick={() => {
            setCount2((prevCount) => prevCount + 1);
          }}
        >
          {count2}
        </button>
      </div>
    </div>
  );
};

export default Counter;
