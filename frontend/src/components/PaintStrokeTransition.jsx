import React from 'react';

const PaintStrokeTransition = () => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '350px', 
      left: '50%',
      transform: 'translateX(-50%)',
      overflow: 'hidden',
      marginTop: '-150px', 
      marginBottom: '-80px',
      zIndex: 5,
      pointerEvents: 'none',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url("/watercolor_transition.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        mixBlendMode: 'multiply',
        opacity: 0.9
      }}></div>
    </div>
  );
};

export default PaintStrokeTransition;
