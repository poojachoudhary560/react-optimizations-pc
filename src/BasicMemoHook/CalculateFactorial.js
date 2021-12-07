import React, { useState } from 'react';

export const CalculateFactorial = (props) => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = factorialOf(number);
  const onChange = (e) => setNumber(Number(e.target.value));
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of <input type="number" value={number} onChange={onChange} /> is{' '}
      {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
};

function factorialOf(n) {
  console.log('factorialOf(n) called');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
