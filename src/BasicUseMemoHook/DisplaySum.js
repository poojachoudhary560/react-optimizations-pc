import React from 'react';

const DisplaySum = ({ a, b }) => {
  console.log(a, b);
  const sum = React.useMemo(() => {
    let res = Number(a) + Number(b);
    console.log(res);
    return res;
  }, [a, b]);

  return (
    <div>
      Sum of {a} + {b} is {sum}
    </div>
  );
};

export default DisplaySum;
