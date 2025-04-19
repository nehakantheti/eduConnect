// BookStackLoader.jsx
import React, { useEffect, useState } from 'react';

const bookTitles = [
  'Opening Classroom...',
  'Checking Attendance...',
  'Loading Resources...',
  'Starting Session...'
];

const BookStackLoader = ({ onComplete }) => {
  const [currentBook, setCurrentBook] = useState(0);

  useEffect(() => {
    if (currentBook < bookTitles.length) {
      const timer = setTimeout(() => {
        setCurrentBook(prev => prev + 1);
      }, 800); // Delay between stacking books
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        onComplete(); // Notify parent after load finishes
      }, 1000);
    }
  }, [currentBook]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="flex flex-col-reverse items-center transition-all duration-500 space-y-reverse space-y-2">
        {bookTitles.slice(0, currentBook).map((title, index) => (
          <div
            key={index}
            className="w-40 h-6 rounded shadow-lg text-white text-xs font-semibold flex items-center justify-center"
            style={{
              backgroundColor: `hsl(${(index * 50) % 360}, 70%, 50%)`,
              transform: `translateY(-${index * 6}px)`
            }}
          >
            {title}
          </div>
        ))}
      </div>
      {currentBook < bookTitles.length ? (
        <p className="mt-6 text-sm text-gray-700 animate-pulse">{bookTitles[currentBook]}</p>
      ) : (
        <p className="mt-6 text-green-600 font-semibold">You're ready to learn! 🎓</p>
      )}
    </div>
  );
};

export default BookStackLoader;
