import { useState, useEffect } from 'react';

const useTripleClick = (callback) => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log('clickCount:', clickCount); // Log clickCount whenever it changes
  }, [clickCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickCount > 3 ) {
        callback();
        setClickCount(0);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [clickCount, callback]);

  return () => setClickCount((prevCount) => prevCount + 1);
};

export default useTripleClick;
