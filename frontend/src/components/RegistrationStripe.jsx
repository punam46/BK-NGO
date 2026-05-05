import React from 'react';
import { Shield } from 'lucide-react';

const RegistrationStripe = ({ color = '#ffd54f', background = '#1a1a1a', showBadge = false }) => {
  return (
    <div style={{
      background: background,
      color: '#fff',
      padding: '0.8rem 0',
      textAlign: 'center',
      borderBottom: `2px solid ${color}`,
      position: 'relative',
      fontSize: '0.75rem',
      fontWeight: '600'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '2.5rem',
        flexWrap: 'wrap',
        fontWeight: '800',
        fontSize: '0.85rem',
        padding: '0 20px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: color, fontSize: '0.7rem', opacity: 0.8 }}>●</span>
          Reg No: <span style={{ color: color }}>F-12121</span>
        </div>
        {showBadge && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              fontSize: '0.6rem', 
              opacity: 0.6, 
              color: '#fff', 
              letterSpacing: '1px',
              fontWeight: '400'
            }}>WE ARE REGISTERED WITH</span>
            <div style={{
              background: color,
              color: background === '#1a1a1a' ? '#000' : '#fff',
              padding: '5px 14px',
              borderRadius: '4px',
              fontSize: '0.65rem',
              fontWeight: '900',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              <Shield size={12} fill="currentColor" />
              GOVERNMENT REGISTERED
            </div>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: color, fontSize: '0.7rem', opacity: 0.8 }}>●</span>
          Registration Certificate No: <span style={{ color: color }}>27332222570P</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: color, fontSize: '0.7rem', opacity: 0.8 }}>●</span>
          Enrolment Certificate No: <span style={{ color: color }}>99594678152P</span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStripe;
