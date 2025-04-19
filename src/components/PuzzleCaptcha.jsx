import React, { useState, useEffect } from 'react';

const PuzzleCaptcha = ({ onSuccess, onCancel, imageUrl }) => {
  const puzzleSize = 3; // 3x3 grid
  const [pieces, setPieces] = useState([]);
  const [shuffledPieces, setShuffledPieces] = useState([]);

  // Split the image into pieces dynamically
  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    
    image.onload = () => {
      const imgWidth = image.width;
      const imgHeight = image.height;
      const pieceWidth = imgWidth / puzzleSize;
      const pieceHeight = imgHeight / puzzleSize;
      
      const newPieces = [];
      
      for (let row = 0; row < puzzleSize; row++) {
        for (let col = 0; col < puzzleSize; col++) {
          const x = col * pieceWidth;
          const y = row * pieceHeight;
          newPieces.push({
            left: `-${x}px`,
            top: `-${y}px`,
            position: `${col},${row}`,
          });
        }
      }

      setPieces(newPieces);
      setShuffledPieces(shuffleArray(newPieces));
    };
  }, [imageUrl]);

  // Function to shuffle the pieces
  const shuffleArray = (arr) => {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle piece click
  const handlePieceClick = (index) => {
    const newShuffledPieces = [...shuffledPieces];
    newShuffledPieces[index] = pieces[index];
    setShuffledPieces(newShuffledPieces);

    if (isPuzzleSolved(newShuffledPieces)) {
      onSuccess(); // Puzzle solved
    }
  };

  // Check if puzzle is solved
  const isPuzzleSolved = (shuffledPieces) => {
    return shuffledPieces.every((piece, index) => piece.position === `${Math.floor(index / puzzleSize)},${index % puzzleSize}`);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4 font-semibold">Solve the puzzle to continue</h2>
        <div
          className="grid grid-cols-3 gap-1"
          style={{ gridTemplateColumns: `repeat(${puzzleSize}, 100px)` }}
        >
          {shuffledPieces.map((piece, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center cursor-pointer bg-gray-200"
              onClick={() => handlePieceClick(index)}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: piece.left + ' ' + piece.top,
                backgroundSize: `${100 * puzzleSize}%`,
              }}
            >
              {/* Each div represents a puzzle piece */}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleCaptcha;