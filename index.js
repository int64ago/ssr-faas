import React, { useState, useCallback } from 'react';

function getTime() {
  return new Date().toISOString();
}

export default () => {
  const [time, setTime] = useState(getTime());
  const handleClick = useCallback(() => {
    setTime(getTime());
  }, []);

  return (
    <div>
      <span>Hello Alpaca, it's {time}</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}