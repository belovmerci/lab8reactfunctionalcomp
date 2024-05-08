import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (time === 0) {
    return <div>Время вышло!</div>;
  }

  return <div>Осталось: {time}</div>;
};

export default Timer;
