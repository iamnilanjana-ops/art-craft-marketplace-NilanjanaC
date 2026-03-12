// src/components/Header.js
import React from "react";

function Header({ setCurrentPage }) {
  return (
    <header>
      <h1>Art & Craft Marketplace</h1>
      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("upload")}>Upload</button>
      </nav>
    </header>
  );
}

export default Header;