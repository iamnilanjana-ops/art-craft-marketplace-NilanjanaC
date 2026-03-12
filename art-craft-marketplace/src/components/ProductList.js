import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h3>Product List</h3>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;