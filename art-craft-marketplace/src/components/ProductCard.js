import React from "react";
import "./ProductCard.css";

function ProductCard({ product, deleteProduct, editProduct }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>

      <p className="price">Price: ${product.price}</p>

      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      ) : (
        <p>No image available</p>
      )}

      <div className="card-buttons">
        <button
          type="button"
          onClick={() => editProduct(product)}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;