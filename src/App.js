import React from 'react';
import './style.css';
import BasicMemo from './BasicMemo';
import BasicLazySuspense from './BasicLazySuspense';
import BasicErrorBoundaries from './BasicErrorBoundaries';

export default function App() {
  return (
    <div>
      <BasicMemo />
      <BasicLazySuspense />
      <BasicErrorBoundaries />
    </div>
  );
}
