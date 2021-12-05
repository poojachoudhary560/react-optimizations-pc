import React, { useCallback } from 'react';

export const MemoWithParentCallback = ({
  title,
  releaseDate,
  changeMovieData,
}) => {
  const handleMovieChange = () => {
    changeMovieData({
      title: 'Promithius',
      releaseDate: '12-09-2003',
    });
  };

  console.log('in memo fail with parent callback');
  return (
    <div>
      <div>Movie Title: {title}</div>
      <div>Release Date: {releaseDate}</div>
      <div>
        <p>Change Movie:</p>
        <button onClick={handleMovieChange}>Change Movie</button>
      </div>
    </div>
  );
};

export const MemoizedWithParentCallback = React.memo(MemoWithParentCallback);
