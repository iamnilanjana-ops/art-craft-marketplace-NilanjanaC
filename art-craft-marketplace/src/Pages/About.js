// src/pages/About.js
import React from 'react';
import Header from '../components/Header';

function About() {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About Art & Craft Marketplace</h1>
        <p>
          Welcome to the Art & Craft Marketplace! <br />
          Here you can explore, buy, and sell unique handmade crafts and artworks.
        </p>
        <p>
          Our mission is to connect creative artists with buyers who appreciate
          handcrafted work and support local talent.
        </p>
      </div>
    </div>
  );
}

export default About;