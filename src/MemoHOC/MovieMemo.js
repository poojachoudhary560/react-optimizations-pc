// React.memo() is a HOC
// React.memo() wraps a component
// when React.memo() wraps a component, React memoizes the
// rendered output of wrapped component and skips unnecessary
// rendering
//
// When deciding to update DOM, React first renders your
// component, then compares the result with the previous render.
// If the render results are different, React updates the DOM

// When a component is wrapped in react.memo(), React renders
// the component and memoizes the result. Before the next
// render, if the props are same, React uses the memoized result
// skipping the next rendering.
import React from 'react';

export const MovieMemo = ({ title, releaseDate }) => {
  console.log('in movie memo', title, releaseDate);
  return (
    <div>
      <div>Movie Title: {title}</div>
      <div>Release date: {releaseDate} </div>
    </div>
  );
};

// export default MovieMemo;
export const MemoizedMovie = React.memo(MovieMemo);
