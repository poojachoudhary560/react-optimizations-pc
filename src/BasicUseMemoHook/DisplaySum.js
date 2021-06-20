import React from 'react';

const DisplaySum = ({ a, b }) => {
  console.log(a, b);
  const sum = () => {
    let res = Number(a) + Number(b);
    console.log(res);
    return Number(a) + Number(b);
  };

  return <div>Sum is: {sum}</div>;
};

export default DisplaySum;
