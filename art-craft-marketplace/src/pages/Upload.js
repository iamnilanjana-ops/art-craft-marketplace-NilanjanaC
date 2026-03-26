import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ProductList from "../components/ProductList";

function Upload() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Handmade Clay Pot",
      price: 25,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61"
    },
    {
      id: 2,
      name: "Knitted Scarf",
      price: 15,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 3,
      name: "Wooden Wall Art",
      price: 40,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="page-container">
      <h2>Upload Page</h2>
      <UploadForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default Upload;