import { useState, useEffect } from 'react';

const useTripleClick = (callback) => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickCount === 7) {
        callback();
        setClickCount(0);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [clickCount, callback]);

  return () => setClickCount((prevCount) => prevCount + 1);
};

export default useTripleClick;
