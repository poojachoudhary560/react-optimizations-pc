import React from 'react';

const WithMemoChild = React.memo(({ val }) => {
  console.log('With memo child');
  return (
    <>
      <h3>With Memoized Child</h3>
      <p>{val}</p>
    </>
  );
});

export default WithMemoChild;
