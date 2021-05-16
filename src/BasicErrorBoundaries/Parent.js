import React from 'react';
import BuggyCounter from './BuggyCounter';
import MyErrorBoundary from './MyErrorBoundary';

const Parent = () => {
  refreshPage = () => history.go(0);
  return (
    <>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
      <hr />
      <button onClick={this.refreshPage}>Refresh Page</button>
    </>
  );
};

export default Parent;
