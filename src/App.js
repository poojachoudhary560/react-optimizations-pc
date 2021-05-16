import React from 'react';
import './style.css';
import BasicMemo from './BasicMemo';
import BasicLazySuspense from './BasicLazySuspense';

export default function App() {
  return (
    <div>
      <BasicMemo />
      <BasicLazySuspense />
    </div>
  );
}
