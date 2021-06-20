import React, { useState } from 'react';
import DisplaySum from './DisplaySum';

const SumComponent = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const handleChange = (input, e) => {
    // console.log(input, e);
    if (input === 'a') {
      setA(e.target.value);
    } else {
      setB(e.target.value);
    }
  };
  return (
    <>
      <div>
        A : <input type="text" value={a} onChange={e => handleChange('a', e)} />
        <br />
        B : <input type="text" value={b} onChange={e => handleChange('b', e)} />
        <DisplaySum a={a} b={b} />
      </div>
    </>
  );
};
export default SumComponent;
