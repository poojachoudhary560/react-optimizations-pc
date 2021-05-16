import React from 'react';

const WithoutMemoChild = ({ val }) => {
  console.log('without memoized child');
  return (
    <>
      <h3>With Memoized Child</h3>
      <p>{val}</p>
    </>
  );
};

export default WithoutMemoChild;
