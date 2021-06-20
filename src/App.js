import React from 'react';
import './style.css';
import BasicMemo from './BasicMemo';
import BasicLazySuspense from './BasicLazySuspense';
import BasicErrorBoundaries from './BasicErrorBoundaries';
import BasicPureComponent from './BasicPureComponent';
import MemoFunctional from './MemoFunctional';

export default function App() {
  return (
    <div>
      <BasicMemo />
      <BasicLazySuspense />
      <BasicPureComponent />
      <hr />
      <MemoFunctional />

      {/*
      
      <BasicErrorBoundaries />
      */}
    </div>
  );
}
