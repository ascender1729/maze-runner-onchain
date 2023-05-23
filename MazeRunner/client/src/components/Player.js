import React from 'react';

const Player = ({ position }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        position: 'absolute',
        top: position.y * 50, // Assuming each cell is 50px wide and tall
        left: position.x * 50,
      }}
    />
  );
};

export default Player;
