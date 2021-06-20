import React, { useState } from 'react';
import DisplayCounter from './DisplayCounter';

const IncCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const incrementCounter1 = () => {
    setCount1(count1 => count1 + 1);
  };

  const incrementCounter3 = () => {
    setCount1(count3 => count3 + 1);
  };

  return (
    <>
      <button onClick={incrementCounter1}>Increase Counter 1</button>
      <DisplayCounter value={count1}>Counter 1</DisplayCounter>
      <DisplayCounter value={count2}>Counter 2</DisplayCounter>
      <button onClick={incrementCounter3}>Increase Counter 3</button>
      <DisplayCounter value={count3}>Counter 3</DisplayCounter>
      <DisplayCounter value={count4}>Counter 4</DisplayCounter>
    </>
  );
};

export default IncCounter;
