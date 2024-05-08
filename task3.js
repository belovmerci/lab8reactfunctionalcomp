import React, { useState, useEffect } from 'react';

const PrimeNumbers = () => {
  const [primes, setPrimes] = useState([2]);
  const [nextNumber, setNextNumber] = useState(3);

  useEffect(() => {
    const isPrime = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const interval = setInterval(() => {
      if (isPrime(nextNumber)) {
        setPrimes((prevPrimes) => [...prevPrimes, nextNumber]);
      }
      setNextNumber((prevNumber) => prevNumber + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextNumber]);

  return (
    <div>
      <h2>Простые числа:</h2>
      <p>{primes.join(', ')}</p>
    </div>
  );
};

export default PrimeNumbers;
