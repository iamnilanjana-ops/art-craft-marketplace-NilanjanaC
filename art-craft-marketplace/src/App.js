import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import UploadForm from "./components/UploadForm";

function Home() {
  return <h2>Welcome to the Art & Craft Marketplace</h2>;
}

function About() {
  return <h2>About Our Marketplace</h2>;
}

function Checkout() {
  return <h2>Checkout Page</h2>;
}

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;