import React from 'react';
import './style.css';
import BasicMemo from './BasicMemo';
import BasicLazySuspense from './BasicLazySuspense';
import BasicErrorBoundaries from './BasicErrorBoundaries';
import BasicPureComponent from './BasicPureComponent';
import MemoFunctional from './MemoFunctional';
import BasicUseMemoHook from './BasicUseMemoHook';
import MemoHOC from './MemoHOC';
export default function App() {
  return (
    <div>
      <BasicMemo />
      <BasicLazySuspense />
      <BasicPureComponent />
      <hr />
      <MemoFunctional />
      <hr />
      <BasicUseMemoHook />
      {/*
      
      <BasicErrorBoundaries />
      */}

      <MemoHOC />
    </div>
  );
}
