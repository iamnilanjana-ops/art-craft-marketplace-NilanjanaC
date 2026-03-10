// src/pages/Checkout.js
import React from 'react';
import Header from '../components/Header';

function Checkout() {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Checkout</h1>
        <p>Your selected items will appear here.</p>
        <p>Proceed to payment to complete your order.</p>

        {/* Placeholder for cart items */}
        <div style={{ marginTop: '20px' }}>
          <p>No items in your cart yet.</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;