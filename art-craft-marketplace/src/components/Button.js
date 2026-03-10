// src/components/Button.js
import React from 'react';

// Props: text (button label), onClick (handler), styleType ('primary' or 'secondary')
function Button({ text, onClick, styleType = 'primary' }) {
  const styles = {
    primary: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    secondary: {
      backgroundColor: '#f1f1f1',
      color: '#333',
      padding: '10px 20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <button style={styles[styleType]} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;