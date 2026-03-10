import React from 'react';
import Header from '../components/Header';  // match the component name

function Home() {
  return (
    <div>
      <Header />  {/* now this matches the import */}
      <h1>Welcome to the Art & Craft Marketplace</h1>
    </div>
  );
}

export default Home;