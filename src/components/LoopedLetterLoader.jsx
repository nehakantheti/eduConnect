import React from 'react';
import './LoopedLetterLoader.css';

const LoopedLetterLoader = ({ letter = 'F' }) => {
  return (
    <div className={`letter-loader-container letter-${letter}`}>
      <div className="bar top"></div>
      <div className="bar middle"></div>
      <div className="bar bottom"></div>
      {letter === 'E' && <div className="bar extra"></div>}
    </div>
  );
};

export default LoopedLetterLoader;