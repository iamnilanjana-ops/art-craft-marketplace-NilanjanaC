import React from "react";
import "./ProductList.css";

// Import local images
import painting from "../images/painting.jpg";
import pottery from "../images/pottery.jpg";
import scarf from "../images/scarf.jpg";
import wooden from "../images/wooden.jpg";
import jewelry from "../images/jewelry.jpg";
import fabric from "../images/fabric.jpg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Handmade Painting",
      description: "Beautiful handmade wall art.",
      price: "$25",
      image: painting
    },
    {
      id: 2,
      name: "Clay Pottery",
      description: "Traditional handmade pottery.",
      price: "$18",
      image: pottery
    },
    {
      id: 3,
      name: "Crochet Scarf",
      description: "Warm handmade crochet scarf.",
      price: "$15",
      image: scarf
    },
    {
      id: 4,
      name: "Wooden Craft",
      description: "Hand-carved wooden decoration.",
      price: "$30",
      image: wooden
    },
    {
      id: 5,
      name: "Beaded Jewelry",
      description: "Colorful handmade jewelry.",
      price: "$12",
      image: jewelry
    },
    {
      id: 6,
      name: "Fabric Art",
      description: "Unique textile wall art.",
      price: "$22",
      image: fabric
    }
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="price">{product.price}</div>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;