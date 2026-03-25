import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ProductList from "../components/ProductList";

function Upload() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="page-container">
      <h2>Upload Page</h2>
      <UploadForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default Upload;