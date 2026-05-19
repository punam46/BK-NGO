import React from 'react';

const TornHeader = ({ children, height = "250px", tearHeight = "60px", bgColor = "#d34b07" }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>

      <div style={{
        background: bgColor,
        minHeight: height,
        width: '100%',
        padding: '2rem 0',
        position: 'relative',
        zIndex: 1
      }}>
        {children}
      </div>


      <div style={{
        position: 'absolute',
        bottom: `calc(-${tearHeight} + 1px)`,
        left: 0,
        width: '100%',
        height: tearHeight,
        zIndex: 10,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))'
      }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <path
            d="M0,0 L1200,0 L1200,80 L1180,75 L1160,85 L1140,70 L1120,90 L1100,75 L1080,85 L1060,70 L1040,80 L1020,75 L1000,85 L980,70 L960,90 L940,75 L920,85 L900,70 L880,80 L860,75 L840,85 L820,70 L800,90 L780,75 L760,85 L740,70 L720,80 L700,75 L680,85 L660,70 L640,90 L620,75 L600,85 L580,70 L560,80 L540,75 L520,85 L500,70 L480,90 L460,75 L440,85 L420,70 L400,80 L380,75 L360,85 L340,70 L320,90 L300,75 L280,85 L260,70 L240,80 L220,75 L200,85 L180,70 L160,90 L140,75 L120,85 L100,70 L80,80 L60,75 L40,85 L20,70 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default TornHeader;
