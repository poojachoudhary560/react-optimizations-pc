import React, { lazy, Suspense } from 'react';
import ContentComponent from './ContentComponent';

const LazyComponent = lazy(() => import('./ImageComponent'));

const Parent = () => {
  return (
    <>
      <h3>Component Load - Regular</h3>
      <ContentComponent />
      <h3>Component Load - Lazy</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
};

export default Parent;
