import React from 'react';
import MazeCell from './MazeCell';

const MazeGrid = ({ mazeData }) => {
  return (
    <div className="maze-grid">
      {mazeData.map((row, rowIndex) => (
        <div key={rowIndex} className="maze-row">
          {row.map((cell, colIndex) => (
            <MazeCell key={colIndex} cellData={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MazeGrid;
