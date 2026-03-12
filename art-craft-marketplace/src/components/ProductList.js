import React from "react";

function ProductList() {
  return (
    <div className="product-list">
      <h2>Products</h2>

      <div className="products">
        <div className="product-card">
          <h3>Handmade Necklace</h3>
          <p>$20</p>
        </div>

        <div className="product-card">
          <h3>Clay Pot</h3>
          <p>$15</p>
        </div>

        <div className="product-card">
          <h3>Art Painting</h3>
          <p>$35</p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;