import React, { useState } from 'react';
import './task4.css';

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState('red');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveLight(prevLight => {
          if (prevLight === 'red') return 'green';
          if (prevLight === 'green') return 'yellow';
          if (prevLight === 'yellow') return 'red';
        });
      }, 2000); // Time interval
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="traffic-light">
        <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
      </div>
    );
  };

export default TrafficLight;
