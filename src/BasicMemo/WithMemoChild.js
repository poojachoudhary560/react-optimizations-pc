import React from 'react';

const WithMemoChild = React.memo(({ val }) => {
  console.log('With memo child');
  return <p>{val}</p>;
});

export default WithMemoChild;
