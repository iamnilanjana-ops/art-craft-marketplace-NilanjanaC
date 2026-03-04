import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout";
import "./App.css";

function App() {

  // STATE (Required for Unit 1)
  const [products, setProducts] = useState([
    { id: 1, name: "Abstract Painting", price: 120 },
    { id: 2, name: "Nature Photography", price: 80 }
  ]);

  const [currentPage, setCurrentPage] = useState("home");

  // DELETE PRODUCT (Interactive Feature)
  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );
    setProducts(updatedProducts);
  };

  // SIMPLE PAGE SWITCH (No refresh – SPA)
  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    }

    if (currentPage === "checkout") {
      return <Checkout />;
    }

    return (
      <Home>
        <ProductList 
          products={products} 
          deleteProduct={deleteProduct} 
        />
      </Home>
    );
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;