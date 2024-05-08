import React, { useState, useRef } from 'react';

const InfiniteTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Бесконечный таймер</h2>
      <p>Секунд: {seconds}</p>
      <button onClick={startTimer}>▶ Старт</button>
      <button onClick={stopTimer}>⏸ Пауза</button>
      <button onClick={resetTimer}>🔄 Сброс</button>
    </div>
  );
};

export default InfiniteTimer;
