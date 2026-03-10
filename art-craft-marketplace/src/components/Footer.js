// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <p>© 2026 Art & Craft Marketplace. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="#" style={{ color: '#4CAF50', margin: '0 5px', textDecoration: 'none' }}>Facebook</a> | 
        <a href="#" style={{ color: '#4CAF50', margin: '0 5px', textDecoration: 'none' }}>Instagram</a> | 
        <a href="#" style={{ color: '#4CAF50', margin: '0 5px', textDecoration: 'none' }}>Twitter</a>
      </p>
    </footer>
  );
}

export default Footer;