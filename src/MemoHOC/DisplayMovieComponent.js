import React, { useState, useEffect, useCallback } from 'react';
import { MovieMemo, MemoizedMovie } from './MovieMemo';
import { MemoizedMovieMemoEqualityCheck } from './MovieMemoEqualityCheck';
import { MemoizedWithParentCallback } from './MemoWithParentCallback';

const DisplayMovieComponent = (props) => {
  const [moveData, setMovieData] = useState({
    title: 'HP',
    releaseDate: '12-01-1994',
  });
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((prevVal) => prevVal + 1);
  };

  const changeMovieData = useCallback(
    (data) => {
      setMovieData(data);
    },
    [moveData.title]
  );
  useEffect(() => {
    if (counter === 5) {
      setMovieData({
        title: 'HP',
        releaseDate: '12-01-2000',
      });
    }
    if (counter === 7) {
      setMovieData({
        title: 'HP3',
        releaseDate: '12-01-2000',
      });
    }
  }, [counter]);
  return (
    <div>
      <div>
        <p> Basic Movie Compoenent with React.memo() </p>

        <MemoizedMovie
          title={moveData.title}
          releaseDate={moveData.releaseDate}
        />
        <div>
          <p>Counter : {counter}</p>
          Counter btn click here:
          <button onClick={handleCounter}>Counter</button>
        </div>
      </div>
      <div>
        <p> Movie Component with custom equlaity check on movie name only</p>
        <MemoizedMovieMemoEqualityCheck
          title={moveData.title}
          releaseDate={moveData.releaseDate}
        />
        <div>
          <p> Counter: {counter} </p>
        </div>
      </div>

      <div>
        <p>Memo fail usecase due to callback as props from parent to child</p>
        <MemoizedWithParentCallback
          title={moveData.title}
          releaseDate={moveData.releaseDate}
          changeMovieData={changeMovieData}
        />
        <div>
          <p>Counter: {counter} </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMovieComponent;
