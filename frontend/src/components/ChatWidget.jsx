import React from 'react';

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <div style={{ position: 'relative' }}>
        <div style={{ width: '25px', height: '25px', background: 'white', borderRadius: '2px', position: 'relative' }}>
          <div style={{ width: '4px', height: '4px', background: 'var(--pratham-yellow)', position: 'absolute', top: '6px', left: '6px' }}></div>
          <div style={{ width: '4px', height: '4px', background: 'var(--pratham-yellow)', position: 'absolute', top: '6px', right: '6px' }}></div>
          <div style={{ width: '4px', height: '4px', background: 'var(--pratham-yellow)', position: 'absolute', bottom: '6px', right: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
