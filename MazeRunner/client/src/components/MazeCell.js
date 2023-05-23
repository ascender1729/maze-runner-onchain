import React from 'react';

const MazeCell = ({ isWall, isPlayer, isFinish }) => {
  const cellStyle = {
    border: '1px solid black',
    width: '50px',
    height: '50px',
    backgroundColor: isWall ? 'black' : 'white',
    position: 'relative',
  };

  const playerStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: isPlayer ? 'block' : 'none',
  };

  const finishStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: 'green',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: isFinish ? 'block' : 'none',
  };

  return (
    <div style={cellStyle}>
      <div style={playerStyle} />
      <div style={finishStyle} />
    </div>
  );
};

export default MazeCell;
