import React, { useState } from 'react';
import { MovieMemo } from './MovieMemo';

const DisplayMovieComponent = (props) => {
  const [moveData, setMovieData] = useState({
    title: 'HP',
    releaseDate: '12-01-1994',
  });
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((prevVal) => prevVal + 1);
  };
  return (
    <div>
      <div>
        <p> Basic Movie Compoenent with React.memo() </p>

        <MovieMemo title={moveData.title} releaseDate={moveData.releaseDate} />
        <div>
          <p>Counter : {counter}</p>
          Counter btn click here:
          <button onClick={handleCounter}>Counter</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayMovieComponent;
