import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
  const [revertedString, setRevertedString] = useState(s);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevertedString(prevString => prevString.charAt(prevString.length - 1) + prevString.slice(0, -1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{revertedString}</div>;
};

export default Revert;
