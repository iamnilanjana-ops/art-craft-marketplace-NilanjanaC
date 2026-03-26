import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, deleteProduct }) {
  return (
    <div className="product-list">
      <h3>Product List</h3>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;