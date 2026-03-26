import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>

      {product.image ? (
        <img src={product.image} alt={product.name} className="product-image" />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

export default ProductCard;