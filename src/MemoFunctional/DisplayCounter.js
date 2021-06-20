import React from 'react';

const DisplayCounter = ({ value, children }) => {
  console.log('Render:', children);
  return (
    <div>
      {children}: {value}
    </div>
  );
};

export default DisplayCounter;
