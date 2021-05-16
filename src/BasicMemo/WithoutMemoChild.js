import React from 'react';

const WithoutMemoChild = ({ val }) => {
  console.log('without memoized child');
  return <p>{val}</p>;
};

export default WithoutMemoChild;
