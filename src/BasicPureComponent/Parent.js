import React from 'react';
import DefaultComp from './DefaultComp';
import WithShouldCompUpdate from './WithShouldCompUpdate';
import PureComp from './PureComp';

const Parent = () => {
  return (
    <>
      <DefaultComp />
      <WithShouldCompUpdate />
      <PureComp />
    </>
  );
};

export default Parent;
