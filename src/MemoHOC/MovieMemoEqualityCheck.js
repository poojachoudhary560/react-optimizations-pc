import React from 'react';

export const MovieMemoEqualityCheck = ({ title, releaseDate }) => {
  console.log('in memo with custom equality check');
  return (
    <>
      <div>
        <div>Movie Title: {title}</div>
        <div>Release Date: {releaseDate}</div>
      </div>
    </>
  );
};

function moviePropsAreEqual(prevMovie, nextMovie) {
  return prevMovie.title === nextMovie.title;
}
export const MemoizedMovieMemoEqualityCheck = React.memo(
  MovieMemoEqualityCheck,
  moviePropsAreEqual
);
