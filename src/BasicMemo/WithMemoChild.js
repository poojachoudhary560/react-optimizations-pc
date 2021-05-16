import React from 'react';

const WithMemoChild = ({ val }) => {
  console.log('With memo child');
  return <p>{val}</p>;
};

export default WithMemoChild;
