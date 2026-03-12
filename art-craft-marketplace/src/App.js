// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Upload from "./pages/Upload"; 

function App() {
  // State to track current page
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      {/* Pass setCurrentPage to Header so buttons can switch pages */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Conditional rendering for pages */}
      {currentPage === "home" && <ProductList />}
      {currentPage === "upload" && <Upload />}
    </div>
  );
}

export default App;