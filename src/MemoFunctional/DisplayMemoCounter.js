import React from 'react';

const DisplayMemoCounter = ({ value, children }) => {
  console.log('Render:', children);
  return (
    <div>
      {children}: {value}
    </div>
  );
};

export default React.memo(DisplayMemoCounter);
