import React from 'react';
import BuggyCounter from './BuggyCounter';
import MyErrorBoundary from './MyErrorBoundary';

const Parent = () => {
  return (
    <>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
    </>
  );
};

export default Parent;
